using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class UpdateTripRequest
{
    [JsonPropertyName("tripId")]
    public int TripId { get; set; }
    [JsonPropertyName("tripName")]
    public string? TripName { get; set; }
    [JsonPropertyName("tripDescription")]
    public string? TripDescription { get; set; }
    [JsonPropertyName("tripStartDate")]
    public DateTime? TripStartDate { get; set; }
    [JsonPropertyName("tripEndDate")]
    public DateTime? TripEndDate { get; set; }
    [JsonPropertyName("tripImage")]
    public string? TripImage { get; set; }
}
