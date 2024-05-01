using CenterEnd.Database.Entities.Enums;

namespace CenterEnd.Database.Entities.Abstract;

public abstract class BaseEntity
{
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
    public DataStatus? Status { get; set; }

    public BaseEntity()
    {
        CreatedDate = DateTime.Now;
        Status = DataStatus.Active;
    }
}
