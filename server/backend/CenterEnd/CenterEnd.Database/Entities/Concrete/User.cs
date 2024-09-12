using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class User : BaseEntity
{
    public required string UserName { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public List<Deck>? OwnedDecks { get; set; }
    public List<Trip>? OwnedTrips { get; set; }
    public UserInteraction? UserInteraction { get; set; }

    public User()
    {
        OwnedDecks = [];
        OwnedTrips = [];
        UserInteraction = new UserInteraction();
    }
}
