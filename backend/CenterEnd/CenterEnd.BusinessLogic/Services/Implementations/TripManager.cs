using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class TripService(IGenericRepository<Trip> genericRepository) : ITripService
{
    private readonly IGenericRepository<Trip> _genericRepository = genericRepository;

    public async Task<GenerateTripResponse> GenerateTripAsync(GenerateTripRequest request)
    {
        // Todo: Proto service will be called here
    }
}
