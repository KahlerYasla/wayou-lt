using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class DeletePlaceResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; set; }
    [JsonPropertyName("message")]
    public required string Message { get; set; }
}