using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

using Grpc.Net.Client;
using CenterEnd.Protos;

namespace CenterEnd.BusinessLogic.Services;

public class TripManager(
    IGenericRepository<Trip> tripRepository,
    IGenericRepository<User> userRepository
    ) : ITripService
{
    private readonly IGenericRepository<Trip> _tripRepository = tripRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    //=======================================================================================================
    public async Task<BaseResponse<DTOs.Mobile.Responses.GenerateTripResponse>> GenerateTripAsync(DTOs.Mobile.Requests.GenerateTripRequest request)
    {
        // Proto service 
        using var channel = GrpcChannel.ForAddress("http://localhost:5170");
        TripGenerator.TripGeneratorClient client = new(channel);

        Protos.GenerateTripResponse responseGRPC = await client.GenerateAsync(new Protos.GenerateTripRequest());

        int tripId = responseGRPC.TripId;

        Trip? trip = await _tripRepository.GetByIdAsync(tripId);

        if (trip == null) return new BaseResponse<DTOs.Mobile.Responses.GenerateTripResponse>(success: false, message: "The tripId can not be matched. Send me a vaild tripId", data: null);

        DTOs.Mobile.Responses.GenerateTripResponse response = new()
        {
            PlaceSeparatorsByDay = trip.PlaceSeperatorsByDay,
            SortedPlaceList = trip.SortedPlaceList,
            TextByDay = trip.TextByDay,
            TripDescription = trip.TripDescription ?? "no description has been provided",
        };

        return new BaseResponse<DTOs.Mobile.Responses.GenerateTripResponse>(success: true, message: "Trip has been generated", data: response);
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
