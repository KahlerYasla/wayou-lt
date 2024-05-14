using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface ITripService
{
    Task<BaseResponse<CreateTripResponse>> CreateTripAsync(CreateTripRequest request);
    // Task<UpdateTripResponse> UpdateTripAsync(UpdateTripRequest request);
    // Task<DeleteTripResponse> DeleteTripAsync(DeleteTripRequest request);
    Task<BaseResponse<GetAllTripsByUserIdResponse>> GetAllTripsByUserIdAsync(int userId);
    // Task<GetTripByIdResponse> GetTripByIdAsync(int tripId);
    Task<BaseResponse<GenerateTripResponse>> GenerateTripAsync(GenerateTripRequest request);
}
