using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Deck : BaseEntity
{
    public required string DeckName { get; set; }
    public required User OwnerUser { get; set; }
    public List<Place>? PlacesOfDeck { get; set; }
}
