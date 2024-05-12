using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class DeleteTripResponse
{
    [JsonPropertyName("success")]
    public bool Success { get; set; }
    [JsonPropertyName("message")]
    public string? Message { get; set; }
}
