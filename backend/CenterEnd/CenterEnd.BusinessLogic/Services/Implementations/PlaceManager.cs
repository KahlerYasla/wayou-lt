

using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class PlaceManager(IGenericRepository<Place> placeRepository) : IPlaceService
{
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;

    Task<CreatePlaceResponse> IPlaceService.CreatePlaceAsync(CreatePlaceRequest request)
    {
        throw new NotImplementedException();
    }

    Task<DeletePlaceResponse> IPlaceService.DeletePlaceAsync(DeletePlaceRequest request)
    {
        throw new NotImplementedException();
    }

    Task<GetAllPlacesByUserIdResponse> IPlaceService.GetAllPlacesByUserIdAsync(int userId)
    {
        throw new NotImplementedException();
    }

    Task<GetPlaceByIdResponse> IPlaceService.GetPlaceByIdAsync(int placeId)
    {
        throw new NotImplementedException();
    }

    Task<GetPlaceRecommendationResponse> IPlaceService.GetPlaceRecommendationAsync(int userId)
    {
        throw new NotImplementedException();
    }

    Task<UpdatePlaceResponse> IPlaceService.UpdatePlaceAsync(UpdatePlaceRequest request)
    {
        throw new NotImplementedException();
    }
}