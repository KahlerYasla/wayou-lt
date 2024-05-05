using System.Text.Json.Serialization;

namespace CenterEnd.GatewayApi.DTOs.Mobile.Requests;

public class RevokeTokenRequest
{
    [JsonPropertyName("token")]
    public required string Token { get; set; }
}
