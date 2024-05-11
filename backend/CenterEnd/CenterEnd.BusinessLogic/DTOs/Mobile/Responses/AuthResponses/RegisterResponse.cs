using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
public class RegisterResponse
{
    [JsonPropertyName("token")]
    public required string Token { get; set; }
    // [JsonPropertyName("role")]
    // public required string Role { get; set; }
}
