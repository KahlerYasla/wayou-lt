using System.Text.Json.Serialization;

namespace CenterEnd.GatewayApi.DTOs.Mobile.Requests;

public class GenerateTripRequest
{
    [JsonPropertyName("tripId")]
    public required string TripId { get; set; }
    [JsonPropertyName("tripName")]
    public required string TripName { get; set; }
    [JsonPropertyName("tripDescription")]
    public required string TripDescription { get; set; }
    [JsonPropertyName("tripDate")]
    public required string TripDate { get; set; }
    [JsonPropertyName("tripTime")]
    public required string TripTime { get; set; }
    [JsonPropertyName("tripLocation")]
    public required string TripLocation { get; set; }
    [JsonPropertyName("tripStatus")]
    public required string TripStatus { get; set; }
    [JsonPropertyName("tripCreator")]
    public required string TripCreator { get; set; }
    [JsonPropertyName("tripParticipants")]
    public required string TripParticipants { get; set; }
}
