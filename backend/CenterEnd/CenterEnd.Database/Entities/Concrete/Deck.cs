using System.Runtime.InteropServices;
using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Deck(User ownerUser, string deckName = "Deck", List<Place>? placesOfDeckList = default) : BaseEntity
{
    public required string DeckName { get; set; } = deckName;
    public required User OwnerUser { get; set; } = ownerUser;
    public List<Place>? PlacesOfDeck { get; set; } = placesOfDeckList;
}
