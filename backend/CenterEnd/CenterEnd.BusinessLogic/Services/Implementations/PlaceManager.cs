using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.CoreInfrastructure.Utils;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

using CenterEnd.Protos;
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
    public async Task<BaseResponse<GetPlaceRecommendationResponse>> GetPlaceRecommendationAsync(GetPlaceRecommendationRequest request)
    {
        // Proto service
        using var channel = GrpcChannel.ForAddress("http://localhost:5293");
        PlaceRecommender.PlaceRecommenderClient client = new(channel);

        PlaceRecommenderConfiguration configuration = new()
        {
            Categories = { request.Configuration.Categories },
            OriginYX = request.Configuration.OriginYX,
            Radius = request.Configuration.Radius,
            Keywords = { request.Configuration.Keywords },
            PriceRange = request.Configuration.PriceRange,
        };

        RecommendPlacesResponse reply = client.Recommend(
            new RecommendPlacesRequest
            {
                UserId = request.UserId,
                Configuration = configuration
            }
            );

        WConsole.PrintResponse("Fetched place count from gRPC service: " + reply.PlaceIds.Count.ToString());

        List<Place> places = [];

        foreach (int placeId in reply.PlaceIds)
        {
            Place place = (await _placeRepository.GetByIdAsync(placeId))!;
            if (place != null) places.Add(place);
        }

        // You need to handle the response from the gRPC service and convert it to your application's response type
        GetPlaceRecommendationResponse getPlaceRecommendationResponse = new()
        {
            Places = places,
        };

        return new BaseResponse<GetPlaceRecommendationResponse>(success: true, message: "Recommendation fetched", data: getPlaceRecommendationResponse);
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
    //=======================================================================================================
    public async Task<BaseResponse<GetTenRandomPlacesResponse>> GetTenRandomPlacesAsync()
    {
        List<Place> places = (await _placeRepository.GetAllAsync())!.ToList();

        if (places.Count < 10) return new BaseResponse<GetTenRandomPlacesResponse>(success: false, message: "There are not enough places to fetch", data: null);

        List<Place> randomPlaces = [];

        Random random = new();

        for (int i = 0; i < 10; i++)
        {
            int randomIndex = random.Next(0, places.Count);
            randomPlaces.Add(places[randomIndex]);
            places.RemoveAt(randomIndex);
        }

        GetTenRandomPlacesResponse getTenRandomPlacesResponse = new() { PlaceList = randomPlaces, };

        return new BaseResponse<GetTenRandomPlacesResponse>(success: true, message: "Random places has been fetched", data: getTenRandomPlacesResponse);
    }
}