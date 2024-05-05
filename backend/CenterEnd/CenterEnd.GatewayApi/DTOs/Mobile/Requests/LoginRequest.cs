using System.Text.Json.Serialization;

namespace CenterEnd.GatewayApi.DTOs.Mobile.Requests;

public class LoginRequest
{
    [JsonPropertyName("username")]
    public required string Username { get; set; }
    [JsonPropertyName("password")]
    public required string Password { get; set; }
}
