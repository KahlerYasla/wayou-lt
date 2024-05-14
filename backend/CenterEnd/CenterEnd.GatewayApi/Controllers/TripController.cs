using Microsoft.AspNetCore.Mvc;

using CenterEnd.BusinessLogic.Services;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

namespace CenterEnd.GatewayApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TripController(ITripService tripService) : ControllerBase
{
    private readonly ITripService _tripService = tripService;
    //=======================================================================================================
    [HttpPost("create-trip")]
    public async Task<IActionResult> CreateTripAsync(CreateTripRequest request)
    {
        var response = await _tripService.CreateTripAsync(request);
        return Ok(response);
    }
    //=======================================================================================================
    // [HttpPut("update-trip")]
    // public async Task<IActionResult> UpdateTripAsync(UpdateTripRequest request)
    // {
    //     var response = await _tripService.UpdateTripAsync(request);
    //     return Ok(response);
    // }
    //=======================================================================================================
    [HttpGet("get-all-by-user-id")]
    public async Task<IActionResult> GetAllTripsByUserIdAsync(int userId)
    {
        var response = await _tripService.GetAllTripsByUserIdAsync(userId);
        return Ok(response);
    }
    //=======================================================================================================
    // [HttpGet("get-by-id")]
    // public async Task<IActionResult> GetTripByIdAsync(int tripId)
    // {
    //     var response = await _tripService.GetTripByIdAsync(tripId);
    //     return Ok(response);
    // }
    //=======================================================================================================
    [HttpPost("generate-trip")]
    public async Task<IActionResult> GenerateTripAsync(GenerateTripRequest request)
    {
        var response = await _tripService.GenerateTripAsync(request);
        return Ok(response);
    }
}
