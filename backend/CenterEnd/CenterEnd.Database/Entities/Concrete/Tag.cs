using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.Database.Entities.Concrete;

public class Tag : BaseEntity
{
    public required string Name { get; set; }
}
