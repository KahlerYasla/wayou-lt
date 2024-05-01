using CenterEnd.Database.Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace CenterEnd.DataAccess.Data;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public DbSet<Deck> Decks { get; set; }
    public DbSet<Place> Places { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Territory> Territories { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<UserInteraction> UserInteractions { get; set; }
}