using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Place : BaseEntity
{
    public required string PlaceName { get; set; }
    public string? PlaceDescription { get; set; }
    public required string PlaceYX { get; set; }
    public string? Website { get; set; }
    public List<Tag>? Tags { get; set; }
    public string? Phone { get; set; }
    public string? ImagePath { get; set; }
    public float? Rating { get; set; }
    public required Territory Territory { get; set; }
    public List<Trip>? Trips { get; set; }
    public List<UserInteraction>? LikedUserInteraction { get; set; }
    public List<UserInteraction>? PassedUserInteraction { get; set; }
}
