using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class CreateDeckRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; set; }
    [JsonPropertyName("ownerUserId")]
    public required int OwnerUserId { get; set; }
    [JsonPropertyName("placesOfDeckByIds")]
    public List<int>? PlacesOfDeckByIds { get; set; }
}