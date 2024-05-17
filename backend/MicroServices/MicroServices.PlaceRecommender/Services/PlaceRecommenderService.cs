using Grpc.Core;

namespace MicroServices.PlaceRecommender;

public class PlaceRecommenderService : PlaceRecommender.PlaceRecommenderBase
{
    public override Task<RecommendPlacesResponse> Recommend(RecommendPlacesRequest request, ServerCallContext context)
    {
        return Task.FromResult(new RecommendPlacesResponse
        {
            PlaceIds = { 1, 2, 3 }
        });
    }
}
