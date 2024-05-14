using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class PlaceManager(IGenericRepository<Place> placeRepository) : IPlaceService
{
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;
    //=======================================================================================================
    public async Task<BaseResponse<CreatePlaceResponse>> CreatePlaceAsync(CreatePlaceRequest request)
    {
        throw new NotImplementedException();
    }
    //=======================================================================================================
    public async Task<BaseResponse<DeletePlaceResponse>> DeletePlaceAsync(DeletePlaceRequest request)
    {
        throw new NotImplementedException();
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetAllPlacesByUserIdResponse>> GetAllPlacesByUserIdAsync(int userId)
    {
        throw new NotImplementedException();
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetPlaceByIdResponse>> GetPlaceByIdAsync(int placeId)
    {
        Place? place = await _placeRepository.GetByIdAsync(placeId);

        if (place == null) return new BaseResponse<GetPlaceByIdResponse>(success: false, message: "The placeId can not be matched. Send me a vaild placeId", data: null);

        GetPlaceByIdResponse getPlaceByIdResponse = new() { Place = place, };

        return new BaseResponse<GetPlaceByIdResponse>(success: true, message: "Place has been fetched", data: getPlaceByIdResponse);
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetPlaceRecommendationResponse>> GetPlaceRecommendationAsync(int userId)
    {
        // Todo: Proto service will be called here
        throw new NotImplementedException();
    }
    //=======================================================================================================
    public async Task<BaseResponse<UpdatePlaceResponse>> UpdatePlaceAsync(UpdatePlaceRequest request)
    {
        throw new NotImplementedException();
    }
}