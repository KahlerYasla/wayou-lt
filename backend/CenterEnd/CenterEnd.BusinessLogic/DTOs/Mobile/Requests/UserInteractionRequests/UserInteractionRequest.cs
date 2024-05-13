using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class UserInteractionRequest
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
    [JsonPropertyName("isLikedNorPassed")]
    public required bool IsLikedNorPassed { get; set; }
    [JsonPropertyName("placeId")]
    public required int PlaceId { get; set; }
}