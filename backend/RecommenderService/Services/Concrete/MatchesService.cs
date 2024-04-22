using RecommenderService.Models;
using RecommenderService.Services.Abstract;

namespace RecommenderService.Services.Concrete;

public class MatchesService : IMatchesService
{
    public Task<Recommendation> GetRecommendationsAsync(string kacKisi)
    {
        Recommendation recommendation = new();

        recommendation.Items = new List<string>();

        for (int i = 0; i < int.Parse(kacKisi); i++)
        {
            recommendation.Items!.Add(i.ToString());
        }

        return Task.FromResult(recommendation);
    }
}