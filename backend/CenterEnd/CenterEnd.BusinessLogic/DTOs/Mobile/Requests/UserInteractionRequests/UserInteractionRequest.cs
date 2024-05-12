using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class UserInteractionRequest
{
    [JsonPropertyName("userId")]
    public required string UserId { get; set; }

    [JsonPropertyName("isLikedNorPassed")]
    public required bool IsLikedNorPassed { get; set; }
    [JsonPropertyName("placeId")]
    public required string PlaceId { get; set; }
}