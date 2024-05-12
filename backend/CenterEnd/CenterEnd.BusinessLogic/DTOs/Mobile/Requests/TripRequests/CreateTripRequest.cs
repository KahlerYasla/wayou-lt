using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class CreateTripRequest
{
    [JsonPropertyName("tripName")]
    public required string TripName { get; set; }
    [JsonPropertyName("ownerUserId")]
    public required int OwnerUserId { get; set; }
    [JsonPropertyName("tripDescription")]
    public string? TripDescription { get; set; }
    [JsonPropertyName("image")]
    public string? Image { get; set; }
    [JsonPropertyName("places")]
    public List<Place>? Places { get; set; }
    [JsonPropertyName("placeSeparatorsByDay")]
    public int[]? PlaceSeperatorsByDay { get; set; }
    [JsonPropertyName("textByDay")]
    public string[]? TextByDay { get; set; }
    [JsonPropertyName("startDate")]
    public DateTime? StartDate { get; set; }
    [JsonPropertyName("endDate")]
    public DateTime? EndDate { get; set; }
}