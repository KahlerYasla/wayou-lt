using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class UserInteractionResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; set; }
    [JsonPropertyName("message")]
    public string? Message { get; set; }
}