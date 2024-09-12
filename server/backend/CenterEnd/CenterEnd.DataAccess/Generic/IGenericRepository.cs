using System.Linq.Expressions;
using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.DataAccess.Generic
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        // Create
        Task AddAsync(T entity);
        Task AddRangeAsync(IEnumerable<T> entities);

        // Read
        Task<T?> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);

        // Update
        Task UpdateAsync(T entity);
        Task UpdateRangeAsync(IEnumerable<T> entities);

        // Delete
        Task RemoveAsync(T entity);
        Task RemoveRangeAsync(IEnumerable<T> entities);

        // Additional functions
        Task<int> CountAsync();
        Task<bool> AnyAsync(Expression<Func<T, bool>> predicate);
        Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate);
        Task<T?> SingleOrDefaultAsync(Expression<Func<T, bool>> predicate);

        // Save changes
        Task SaveChangesAsync();

        // Dispose
        void Dispose();
    }
}
