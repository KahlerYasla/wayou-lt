using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Place : BaseEntity
{
    [JsonPropertyName("name")]
    public required string PlaceName { get; set; }
    [JsonPropertyName("description")]
    public string? PlaceDescription { get; set; }
    [JsonPropertyName("summary")]
    public string? Summary { get; set; }
    [JsonPropertyName("placeYX")]
    public required string PlaceYX { get; set; }
    [JsonPropertyName("website")]
    public string? Website { get; set; }
    public List<Tag>? Tags { get; set; }
    [JsonPropertyName("phone")]
    public string? Phone { get; set; }
    public string? ImagePath { get; set; }
    [JsonPropertyName("rating")]
    public float? Rating { get; set; }
    public required Territory Territory { get; set; }
    public List<Trip>? Trips { get; set; }
    public List<UserInteraction>? LikedUserInteraction { get; set; }
    public List<UserInteraction>? PassedUserInteraction { get; set; }
}
