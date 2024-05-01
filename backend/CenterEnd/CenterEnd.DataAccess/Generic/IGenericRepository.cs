using System.Linq.Expressions;
using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.DataAccess.Generic;

public interface IGenericRepository<T> where T : BaseEntity
{
    // Create
    void Add(T entity);
    void AddRange(IEnumerable<T> entities);

    // Read
    T? GetById(int id);
    IEnumerable<T> GetAll();
    IEnumerable<T> Find(Expression<Func<T, bool>> predicate);

    // Update
    void Update(T entity);
    void UpdateRange(IEnumerable<T> entities);

    // Delete
    void Remove(T entity);
    void RemoveRange(IEnumerable<T> entities);

    // Additional functions
    int Count();
    bool Any(Expression<Func<T, bool>> predicate);
    T? FirstOrDefault(Expression<Func<T, bool>> predicate);
    T? SingleOrDefault(Expression<Func<T, bool>> predicate);

    // Save changes
    void SaveChanges();

    // Dispose
    void Dispose();
}

