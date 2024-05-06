using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class RecommendPlacesRequest
{
    [JsonPropertyName("user_id")]
    public int UserId { get; set; }
    [JsonPropertyName("configuration")]
    public Configuration? Configuration { get; set; }
}