using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class GetAllTripsByUserIdRequest
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
}
