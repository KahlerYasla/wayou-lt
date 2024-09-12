using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class DeleteTripRequest
{
    [JsonPropertyName("tripId")]
    public int TripId { get; set; }
}
