using RecommenderService.Models;

namespace RecommenderService.Services.Interfaces;

public interface IMatchesService
{
    Task<Recommendation> GetRecommendationsAsync(string kacKisi);
}
