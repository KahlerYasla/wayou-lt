using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class GetTripByIdRequest
{
    [JsonPropertyName("tripId")]
    public required int TripId { get; set; }
}
