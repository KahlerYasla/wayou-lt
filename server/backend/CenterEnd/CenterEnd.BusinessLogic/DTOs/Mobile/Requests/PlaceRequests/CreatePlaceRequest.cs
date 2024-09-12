using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests
{
    public class CreatePlaceRequest
    {
        [JsonPropertyName("placeName")]
        public required string PlaceName { get; set; }
        [JsonPropertyName("placeDescription")]
        public string? PlaceDescription { get; set; }
        [JsonPropertyName("placeYX")]
        public required string PlaceYX { get; set; }
        [JsonPropertyName("website")]
        public string? Website { get; set; }
        [JsonPropertyName("tagList")]
        public List<Tag>? Tags { get; set; }
        [JsonPropertyName("phone")]
        public string? Phone { get; set; }
        [JsonPropertyName("image")]
        public string? Image { get; set; }
    }
}
