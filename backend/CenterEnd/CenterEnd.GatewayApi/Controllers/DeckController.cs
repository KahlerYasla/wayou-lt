using CenterEnd.BusinessLogic.Services;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

using Microsoft.AspNetCore.Mvc;

namespace CenterEnd.GatewayApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DeckController(IDeckService deckService) : ControllerBase
{
    private readonly IDeckService _deckService = deckService;

    [HttpPost("create")]
    public async Task<IActionResult> CreateDeckAsync(CreateDeckRequest request)
    {
        var response = await _deckService.CreateDeckAsync(request);
        return Ok(response);
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdateDeckAsync(UpdateDeckRequest request)
    {
        var response = await _deckService.UpdateDeckAsync(request);
        return Ok(response);
    }

    [HttpPost("delete")]
    public async Task<IActionResult> DeleteDeckAsync(DeleteDeckRequest request)
    {
        var response = await _deckService.DeleteDeckAsync(request);
        return Ok(response);
    }

    [HttpGet("get-all-by-user-id")]
    public async Task<IActionResult> GetAllDecksByUserIdAsync(int userId)
    {
        var response = await _deckService.GetAllDecksByUserIdAsync(userId);
        return Ok(response);
    }

    [HttpGet("get-by-id")]
    public async Task<IActionResult> GetDeckByIdAsync(int deckId)
    {
        var response = await _deckService.GetDeckByIdAsync(deckId);
        return Ok(response);
    }
}