using CenterEnd.Database.Entities.Abstract;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.Database.Entities.Concrete;

public class Deck : BaseEntity
{
    public required string DeckName { get; set; }
    public required User OwnerUser { get; set; }
    public List<Place>? PlacesOfDeck { get; set; }
}
