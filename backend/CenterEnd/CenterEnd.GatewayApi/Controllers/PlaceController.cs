// using Microsoft.AspNetCore.Mvc;

// using CenterEnd.BusinessLogic.Services;
// using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

// namespace CenterEnd.GatewayApi.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// public class PlaceController : ControllerBase
// {
//     private readonly IPlaceService _placeService;

//     public PlaceController(IPlaceService placeService)
//     {
//         _placeService = placeService;
//     }

//     [HttpPost("create")]
//     public async Task<IActionResult> CreatePlaceAsync(CreatePlaceRequest request)
//     {
//         var response = await _placeService.CreatePlaceAsync(request);
//         return Ok(response);
//     }

//     [HttpPost("update")]
//     public async Task<IActionResult> UpdatePlaceAsync(UpdatePlaceRequest request)
//     {
//         var response = await _placeService.UpdatePlaceAsync(request);
//         return Ok(response);
//     }

//     [HttpPost("delete")]
//     public async Task<IActionResult> DeletePlaceAsync(DeletePlaceRequest request)
//     {
//         var response = await _placeService.DeletePlaceAsync(request);
//         return Ok(response);
//     }

//     [HttpGet("get-all-by-user-id")]
//     public async Task<IActionResult> GetAllPlacesByUserIdAsync(int userId)
//     {
//         var response = await _placeService.GetAllPlacesByUserIdAsync(userId);
//         return Ok(response);
//     }

//     [HttpGet("get-by-id")]
//     public async Task<IActionResult> GetPlaceByIdAsync(int placeId)
//     {
//         var response = await _placeService.GetPlaceByIdAsync(placeId);
//         return Ok(response);
//     }

//     [HttpGet("get-place-recommendation")]
//     public async Task<IActionResult> GetPlaceRecommendationAsync(int userId)
//     {
//         // TODO: Proto to PlaceRecommender microservice
//         return Ok(response);
//     }
// }
