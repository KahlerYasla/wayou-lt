using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GenerateTripResponse
{
    [JsonPropertyName("tripDescription")]
    public required string TripDescription { get; set; }
    [JsonPropertyName("textByDay")]
    public string[]? TextByDay { get; set; }
    [JsonPropertyName("sortedPlaceList")]
    public List<Place>? SortedPlaceList { get; set; }
    [JsonPropertyName("placeSeparatorsByDay")]
    public int[]? PlaceSeparatorsByDay { get; set; }
}
