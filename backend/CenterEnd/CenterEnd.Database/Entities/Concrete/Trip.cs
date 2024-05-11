using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete
{
    public class Trip : BaseEntity
    {
        public required string TripName { get; set; }
        public required User OwnerUser { get; set; }
        public string? TripDescription { get; set; }
        public List<Place>? Places { get; set; }
    }
}