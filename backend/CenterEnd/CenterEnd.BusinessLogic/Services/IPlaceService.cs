using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IPlaceService
{
    Task<BaseResponse<CreatePlaceResponse>> CreatePlaceAsync(CreatePlaceRequest request);
    Task<BaseResponse<UpdatePlaceResponse>> UpdatePlaceAsync(UpdatePlaceRequest request);
    Task<BaseResponse<DeletePlaceResponse>> DeletePlaceAsync(DeletePlaceRequest request);
    Task<BaseResponse<GetAllPlacesByUserIdResponse>> GetAllPlacesByUserIdAsync(int userId);
    Task<BaseResponse<GetPlaceByIdResponse>> GetPlaceByIdAsync(int placeId);
    Task<BaseResponse<GetPlaceRecommendationResponse>> GetPlaceRecommendationAsync(GetPlaceRecommendationRequest request);
    Task<BaseResponse<GetTenRandomPlacesResponse>> GetTenRandomPlacesAsync();
}
