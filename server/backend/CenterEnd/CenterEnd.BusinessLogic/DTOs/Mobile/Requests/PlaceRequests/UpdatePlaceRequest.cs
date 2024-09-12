using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests
{
    public class UpdatePlaceRequest
    {
        [JsonPropertyName("placeId")]
        public required int PlaceId { get; set; }
        [JsonPropertyName("placeName")]
        public string? PlaceName { get; set; }
        [JsonPropertyName("placeDescription")]
        public string? PlaceDescription { get; set; }
        [JsonPropertyName("placeYX")]
        public string? PlaceYX { get; set; }
        [JsonPropertyName("website")]
        public string? Website { get; set; }
        [JsonPropertyName("tagIdList")]
        public List<Tag>? Tags { get; set; }
        [JsonPropertyName("phone")]
        public string? Phone { get; set; }
        [JsonPropertyName("image")]
        public string? Image { get; set; }
        [JsonPropertyName("territoryId")]
        public int? TerritoryId { get; set; }
    }
}