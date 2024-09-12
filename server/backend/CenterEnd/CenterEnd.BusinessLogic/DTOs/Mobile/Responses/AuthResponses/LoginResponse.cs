using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class LoginResponse
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
    [JsonPropertyName("token")]
    public required string Token { get; set; }
}
