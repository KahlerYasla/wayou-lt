using System.Text.Json.Serialization;

namespace CenterEnd.GatewayApi.DTOs.Mobile.Responses;
public class RegisterResponse
{
    [JsonPropertyName("token")]
    public required string Token { get; set; }
    // [JsonPropertyName("role")]
    // public required string Role { get; set; }
}
