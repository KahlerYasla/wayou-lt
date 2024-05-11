using Microsoft.AspNetCore.Mvc;

using CenterEnd.BusinessLogic.Services;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

namespace CenterEnd.GatewayApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserInteractionController : ControllerBase
{
    private readonly IUserInteractionService _userInteractionService;

    public UserInteractionController(IUserInteractionService userInteractionService)
    {
        _userInteractionService = userInteractionService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateUserInteractionAsync(CreateUserInteractionRequest request)
    {
        var response = await _userInteractionService.CreateUserInteractionAsync(request);
        return Ok(response);
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdateUserInteractionAsync(UpdateUserInteractionRequest request)
    {
        var response = await _userInteractionService.UpdateUserInteractionAsync(request);
        return Ok(response);
    }

    [HttpPost("delete")]
    public async Task<IActionResult> DeleteUserInteractionAsync(DeleteUserInteractionRequest request)
    {
        var response = await _userInteractionService.DeleteUserInteractionAsync(request);
        return Ok(response);
    }

    [HttpGet("get-all-by-user-id")]
    public async Task<IActionResult> GetAllUserInteractionsByUserIdAsync(int userId)
    {
        var response = await _userInteractionService.GetAllUserInteractionsByUserIdAsync(userId);
        return Ok(response);
    }

    [HttpGet("get-by-id")]
    public async Task<IActionResult> GetUserInteractionByIdAsync(int userInteractionId)
    {
        var response = await _userInteractionService.GetUserInteractionByIdAsync(userInteractionId);
        return Ok(response);
    }
}