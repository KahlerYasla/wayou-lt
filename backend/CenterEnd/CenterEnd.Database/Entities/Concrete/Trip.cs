using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete
{
    public class Trip : BaseEntity
    {
        public required string TripName { get; set; }
        public required User OwnerUser { get; set; }
        public string? TripDescription { get; set; }
        public string? ImagePath { get; set; }
        public List<Place>? Places { get; set; }
        public int[]? PlaceSeperatorsByDay { get; set; }
        public string[]? TextByDay { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}