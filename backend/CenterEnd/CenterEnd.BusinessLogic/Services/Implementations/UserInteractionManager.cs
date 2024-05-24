using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;



namespace CenterEnd.BusinessLogic.Services;

public class UserInteractionManager(
    IGenericRepository<UserInteraction> userInteractionRepository,
    IGenericRepository<User> userRepository,
    IGenericRepository<Place> placeRepository
 ) : IUserInteractionService
{
    private readonly IGenericRepository<UserInteraction> _userInteractionRepository = userInteractionRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;
    //=======================================================================================================
    public async Task<BaseResponse<UserInteractionResponse>> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request)
    {
        // Set the URL of your Flask endpoint
        string generateTripUrl = "http://localhost:3334/interact";

        // Create HttpClient instance
        using HttpClient client = new();

        int isLike = request.IsLikedNorPassed ? 1 : 0;

        // Define the JSON payload
        string jsonPayload = "{\"userId\": " + request.UserId
        + ", \"isLike\": " + isLike
        + ", \"placeId\": " + request.PlaceId + "}";

        // Create StringContent from JSON
        var content = new StringContent(jsonPayload, System.Text.Encoding.UTF8, "application/json");

        // Send POST request to the endpoint
        HttpResponseMessage response = await client.PostAsync(generateTripUrl, content);

        // Check if the request was successful
        if (!response.IsSuccessStatusCode)
        {
            // Output error message if request failed
            Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");

            return new BaseResponse<UserInteractionResponse>(success: false, message: "Failed to update user interaction", data: null);
        }

        return new BaseResponse<UserInteractionResponse>(success: true, message: "User interaction updated", data: null);


        //     User? user = await _userRepository.GetByIdAsync(request.UserId);

        //     if (user == null) return new BaseResponse<UserInteractionResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        //     UserInteraction? userInteraction = user.UserInteraction;

        //     if (userInteraction == null)
        //     {
        //         userInteraction = new UserInteraction();
        //         await _userInteractionRepository.AddAsync(userInteraction);
        //     }

        //     if (request.IsLikedNorPassed) // Liked
        //     {
        //         Place? place = await _placeRepository.GetByIdAsync(request.PlaceId);

        //         if (place == null) return new BaseResponse<UserInteractionResponse>(success: false, message: "The placeId can not be matched. Send me a vaild placeId", data: null);

        //         if (request.IsLikedNorPassed) userInteraction.LikedPlaces!.Add(place);

        //         else userInteraction.PassedPlaces!.Add(place);

        //         await _userInteractionRepository.UpdateAsync(userInteraction);

        //         return new BaseResponse<UserInteractionResponse>(success: true, message: "The place is liked", data: null);
        //     }
        //     else // Passed
        //     {
        //         Place? place = await _placeRepository.GetByIdAsync(request.PlaceId);

        //         if (place == null) return new BaseResponse<UserInteractionResponse>(success: false, message: "The placeId can not be matched. Send me a vaild placeId", data: null);

        //         if (request.IsLikedNorPassed) userInteraction.LikedPlaces!.Add(place);

        //         else userInteraction.PassedPlaces!.Add(place);

        //         await _userInteractionRepository.UpdateAsync(userInteraction);

        //         return new BaseResponse<UserInteractionResponse>(success: true, message: "The place is passed", data: null);
        //     }
    }

}