using RecommenderService.Models;
using RecommenderService.Services.Interfaces;

namespace RecommenderService.Services.Managers;

public class MatchesService : IMatchesService
{
    public Task<Recommendation> GetRecommendationsAsync(string kacKisi)
    {
        Recommendation recommendation = new()
        {
            Items = []
        };

        for (int i = 0; i < int.Parse(kacKisi); i++)
        {
            recommendation.Items!.Add(i.ToString());
        }

        return Task.FromResult(recommendation);
    }
}