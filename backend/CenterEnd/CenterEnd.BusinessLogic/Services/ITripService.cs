using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface ITripService
{
    Task<CreateTripResponse> CreateTripAsync(CreateTripRequest request);
    Task<UpdateTripResponse> UpdateTripAsync(UpdateTripRequest request);
    Task<DeleteTripResponse> DeleteTripAsync(DeleteTripRequest request);
    Task<GetAllTripsByUserIdResponse> GetAllTripsByUserIdAsync(int userId);
    Task<GetTripByIdResponse> GetTripByIdAsync(int tripId);
    Task<GenerateTripResponse> GenerateTripAsync(GenerateTripRequest request);
}
