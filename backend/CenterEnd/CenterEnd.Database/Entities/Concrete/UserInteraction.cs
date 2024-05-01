using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class UserInteraction : BaseEntity
{
    public List<Place>? LikedPlaces { get; set; }
    public List<Place>? PassedPlaces { get; set; }
}
