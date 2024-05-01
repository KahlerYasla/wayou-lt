using System.Text.Json;
using CenterEnd.Database.Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace CenterEnd.DataAccess.Data;

public class DataContext : DbContext
{
    private readonly string? _dbPath;
    private readonly bool _isStartupProject = false;

    // Default constructor for startup project (GatewayApi). It provides connection string from appsettings.json
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        _isStartupProject = true;
    }

    // Constructor for repositories. It provides connection string from ../configs.json
    public DataContext()
    {
        var jsonConfigPath = "../configs.json"; // Path to your configs.json file
        var jsonString = File.ReadAllText(jsonConfigPath);
        var configurations = JsonSerializer.Deserialize<Configurations>(jsonString);

        // Assuming the connection string is stored in ConnectionStrings.DefaultConnection
        _dbPath = configurations?.ConnectionStrings?.DefaultConnection;

        if (_dbPath == null)
        {
            throw new ArgumentNullException("Connection string is not provided in configs.json");
        }
    }

    public DbSet<Deck> Decks { get; set; }
    public DbSet<Place> Places { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Territory> Territories { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<UserInteraction> UserInteractions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (_isStartupProject) return;
        optionsBuilder.UseNpgsql($"Data Source={_dbPath}");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserInteraction>()
            .HasMany(ui => ui.LikedPlaces)
            .WithMany(p => p.LikedUserInteraction).UsingEntity(j => j.ToTable("LikedPlaces"));

        modelBuilder.Entity<UserInteraction>()
            .HasMany(ui => ui.PassedPlaces)
            .WithMany(p => p.PassedUserInteraction).UsingEntity(j => j.ToTable("PassedPlaces"));

        base.OnModelCreating(modelBuilder);
    }
}

public class Configurations
{
    public ConnectionStrings? ConnectionStrings { get; set; }
}

public class ConnectionStrings
{
    public string? DefaultConnection { get; set; }
}