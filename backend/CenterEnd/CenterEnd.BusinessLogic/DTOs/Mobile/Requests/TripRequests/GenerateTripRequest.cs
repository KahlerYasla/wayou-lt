using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class GenerateTripRequest
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
    [JsonPropertyName("howManyDays")]
    public required int HowManyDays { get; set; }
    // [JsonPropertyName("tripName")]
    // public required string TripName { get; set; }
    // [JsonPropertyName("config")]
    // public required Configuration Configuration { get; set; }
    // [JsonPropertyName("startDate")]
    // public required DateTime StartDate { get; set; }
    // [JsonPropertyName("endDate")]
    // public required DateTime EndDate { get; set; }
}
