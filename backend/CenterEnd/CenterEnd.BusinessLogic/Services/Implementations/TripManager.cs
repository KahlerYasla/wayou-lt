using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class TripManager(
    IGenericRepository<Trip> tripRepository,
    IGenericRepository<User> userRepository
    ) : ITripService
{
    private readonly IGenericRepository<Trip> _tripRepository = tripRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    //=======================================================================================================
    public async Task<BaseResponse<GenerateTripResponse>> GenerateTripAsync(GenerateTripRequest request)
    {
        // Todo: Proto service will be called here
        throw new NotImplementedException();
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
