using System;
using Microsoft.AspNetCore.Mvc;
using RecommenderService.Services.Abstract;

namespace RecommenderService.Controllers;

[ApiController]
[Route("api/[controller]")]

public class MatchesController : ControllerBase
{

    private readonly IMatchesService _matchesService;

    public MatchesController(IMatchesService matchesService)
    {
        _matchesService = matchesService;
    }

    [HttpGet]
    public string Get(int kacKisi)
    {
        var result = _matchesService.GetRecommendationsAsync(kacKisi.ToString()).Result!;
        return result.Items.Select(x => x.ToString()).ToString()!;
    }
}


