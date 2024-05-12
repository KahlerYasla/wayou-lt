using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IPlaceService
{
    Task<CreatePlaceResponse> CreatePlaceAsync(CreatePlaceRequest request);
    Task<UpdatePlaceResponse> UpdatePlaceAsync(UpdatePlaceRequest request);
    Task<DeletePlaceResponse> DeletePlaceAsync(DeletePlaceRequest request);
    Task<GetAllPlacesByUserIdResponse> GetAllPlacesByUserIdAsync(int userId);
    Task<GetPlaceByIdResponse> GetPlaceByIdAsync(int placeId);
    Task<GetPlaceRecommendationResponse> GetPlaceRecommendationAsync(int userId);
}
