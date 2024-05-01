using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Territory : BaseEntity
{
    public required string Name { get; set; }
    public required string OriginYX { get; set; }
}
