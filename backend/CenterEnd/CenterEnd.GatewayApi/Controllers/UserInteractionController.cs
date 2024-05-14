using Microsoft.AspNetCore.Mvc;

using CenterEnd.BusinessLogic.Services;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

namespace CenterEnd.GatewayApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserInteractionController(IUserInteractionService userInteractionService) : ControllerBase
{
    private readonly IUserInteractionService _userInteractionService = userInteractionService;
    //=======================================================================================================
    [HttpPost("user-interaction")]
    public async Task<IActionResult> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request)
    {
        var response = await _userInteractionService.UpdateOrCreateUserInteractionAsync(request);
        return Ok(response);
    }
}