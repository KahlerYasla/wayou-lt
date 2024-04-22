using RecommenderService.Models;

namespace RecommenderService.Services.Abstract;

public interface IMatchesService
{
    Task<Recommendation> GetRecommendationsAsync(string kacKisi);
}
