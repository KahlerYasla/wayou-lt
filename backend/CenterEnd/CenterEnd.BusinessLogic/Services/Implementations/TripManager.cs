using System.Text.Json;
using System.Text.Json.Serialization;
using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

// using Grpc.Net.Client;
// using CenterEnd.Protos;

namespace CenterEnd.BusinessLogic.Services;

public class TripManager(
    IGenericRepository<Trip> tripRepository,
    IGenericRepository<User> userRepository,
    IGenericRepository<Place> placeRepository
    ) : ITripService
{
    private readonly IGenericRepository<Trip> _tripRepository = tripRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;
    //=======================================================================================================
    public async Task<BaseResponse<GenerateTripResponse>> GenerateTripAsync(GenerateTripRequest request)
    {
        try
        {
            // Set the URL of your Flask endpoint
            string generateTripUrl = "http://localhost:6666/generate_travel_plan";

            int howManyDays = request.HowManyDays;

            // Create HttpClient instance
            using HttpClient client = new();
            // Define the JSON payload
            string jsonPayload = "{\"numDays\": " + howManyDays + ", \"userId\": " + request.UserId + "}";

            // Create StringContent from JSON
            var content = new StringContent(jsonPayload, System.Text.Encoding.UTF8, "application/json");

            // Send POST request to the endpoint
            HttpResponseMessage response = await client.PostAsync(generateTripUrl, content);

            // Check if the request was successful
            if (!response.IsSuccessStatusCode)
            {
                // Output error message if request failed
                Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");

                return new BaseResponse<GenerateTripResponse>(success: false, message: "Failed to generate trip", data: null);
            }

            // Read response content
            string responseContent = await response.Content.ReadAsStringAsync();

            // Output the travel plan
            Console.WriteLine("Received travel plan:");
            Console.WriteLine(responseContent);

            GenerateTripResponse generateTripResponse = new()
            {
                TripDescription = responseContent,
            };

            // Deserialize the JSON response
            ResponseData? responseData = JsonSerializer.Deserialize<ResponseData>(responseContent)!;

            if (responseData == null)
            {
                return new BaseResponse<GenerateTripResponse>(success: false, message: "Failed to generate trip", data: null);
            }

            List<Place>? sortedPlaceList = [];

            foreach (int placeId in responseData.RecommendedPlaceIdList!)
            {
                Place? place = await _placeRepository.GetByIdAsync(placeId);

                if (place != null)
                {
                    sortedPlaceList.Add(place);
                }
            }

            generateTripResponse.SortedPlaceList = sortedPlaceList;

            return new BaseResponse<GenerateTripResponse>(success: true, message: "Trip has been generated", data: generateTripResponse);
        }
        catch (Exception ex)
        {
            // Handle any exceptions
            Console.WriteLine($"Exception: {ex.Message}");

            return new BaseResponse<GenerateTripResponse>(success: false, message: "Failed to generate trip", data: null);
        }
    }
    //=======================================================================================================
    public async Task<BaseResponse<CreateTripResponse>> CreateTripAsync(CreateTripRequest request)
    {
        User? user = await _userRepository.GetByIdAsync(request.OwnerUserId);

        if (user == null) return new BaseResponse<CreateTripResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        Trip trip = new()
        {
            OwnerUser = user,
            TripName = request.TripName,
            TripDescription = request.TripDescription,
            StartDate = request.StartDate,
            EndDate = request.EndDate,
        };

        await _tripRepository.AddAsync(trip);

        return new BaseResponse<CreateTripResponse>(success: true, message: "Trip has been created", data: null);
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetAllTripsByUserIdResponse>> GetAllTripsByUserIdAsync(int userId)
    {
        User? user = await _userRepository.GetByIdAsync(userId);

        if (user == null) return new BaseResponse<GetAllTripsByUserIdResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        List<Trip>? trips = (await _tripRepository.FindAsync(t => t.OwnerUser.Id == userId)).ToList();

        GetAllTripsByUserIdResponse getAllTripsByUserIdResponse = new() { Trips = trips, };

        return new BaseResponse<GetAllTripsByUserIdResponse>(success: true, message: "Trips has been fetched", data: getAllTripsByUserIdResponse);
    }
}


class ResponseData
{
    [JsonPropertyName("tripText")]
    public string? TripText { get; set; }
    [JsonPropertyName("placeIdList")]
    public List<int>? RecommendedPlaceIdList { get; set; }

}