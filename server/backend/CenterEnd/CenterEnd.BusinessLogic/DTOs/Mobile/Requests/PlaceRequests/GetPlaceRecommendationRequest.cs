using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class GetPlaceRecommendationRequest
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
    [JsonPropertyName("config")]
    public required Configuration Configuration { get; set; }
}
