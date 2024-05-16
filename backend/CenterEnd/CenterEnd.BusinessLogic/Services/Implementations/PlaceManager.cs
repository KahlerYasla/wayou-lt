using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

using Grpc.Net.Client;

namespace CenterEnd.BusinessLogic.Services;

public class PlaceManager(IGenericRepository<Place> placeRepository) : IPlaceService
{
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;
    //=======================================================================================================
    public Task<BaseResponse<CreatePlaceResponse>> CreatePlaceAsync(CreatePlaceRequest request)
    {
        throw new NotImplementedException();
    }
    //=======================================================================================================
    public async Task<BaseResponse<DeletePlaceResponse>> DeletePlaceAsync(DeletePlaceRequest request)
    {
        await _placeRepository.RemoveAsync((await _placeRepository.GetByIdAsync(request.PlaceID))!);

        return new BaseResponse<DeletePlaceResponse>(success: true, message: "Place has been deleted", data: null);
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetAllPlacesByUserIdResponse>> GetAllPlacesByUserIdAsync(int userId)
    {
        // List<Place> places = (await _placeRepository.FindAsync(x => x. == userId)).ToList();
        // GetAllPlacesByUserIdResponse getAllPlacesByUserIdResponse = new() { Places = places, };

        // return new BaseResponse<GetAllPlacesByUserIdResponse>(success: true, message: "Places has been fetched", data: getAllPlacesByUserIdResponse);

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
        using var channel = GrpcChannel.ForAddress("https://localhost:5293");
        var client = new CenterEnd.BusinessLogic.Services
    }
    //=======================================================================================================
    public async Task<BaseResponse<UpdatePlaceResponse>> UpdatePlaceAsync(UpdatePlaceRequest request)
    {
        Place place = (await _placeRepository.GetByIdAsync(request.PlaceId))!;

        if (place == null) return new BaseResponse<UpdatePlaceResponse>(success: false, message: "The placeId can not be matched. Send me a vaild placeId", data: null);

        place.PlaceName = request.PlaceName ?? place.PlaceName;
        place.PlaceDescription = request.PlaceDescription ?? place.PlaceDescription;
        place.PlaceYX = request.PlaceYX ?? place.PlaceYX;

        await _placeRepository.UpdateAsync(place);

        return new BaseResponse<UpdatePlaceResponse>(success: true, message: "Place has been updated", data: null);
    }
}