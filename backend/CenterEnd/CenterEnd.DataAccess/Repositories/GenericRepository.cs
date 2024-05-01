using System.Linq.Expressions;
using CenterEnd.DataAccess.Data;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Abstract;

namespace CenterEnd.DataAccess.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
{
    private readonly DataContext _context;

    public GenericRepository()
    {
        _context = new DataContext();
    }

    // Create
    public void Add(T entity)
    {
        _context.Set<T>().Add(entity);
    }

    public void AddRange(IEnumerable<T> entities)
    {
        _context.Set<T>().AddRange(entities);
    }

    // Read
    public T? GetById(int id)
    {
        return _context.Set<T>().Find(id) ?? null;
    }

    public IEnumerable<T> GetAll()
    {
        return [.. _context.Set<T>()];
    }

    public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
    {
        return _context.Set<T>().Where(predicate);
    }

    // Update
    public void Update(T entity)
    {
        _context.Set<T>().Update(entity);
    }

    public void UpdateRange(IEnumerable<T> entities)
    {
        _context.Set<T>().UpdateRange(entities);
    }

    // Delete
    public void Remove(T entity)
    {
        _context.Set<T>().Remove(entity);
    }

    public void RemoveRange(IEnumerable<T> entities)
    {
        _context.Set<T>().RemoveRange(entities);
    }

    // Additional functions
    public int Count()
    {
        return _context.Set<T>().Count();
    }

    public bool Any(Expression<Func<T, bool>> predicate)
    {
        return _context.Set<T>().Any(predicate);
    }

    public T? FirstOrDefault(Expression<Func<T, bool>> predicate)
    {
        return _context.Set<T>().FirstOrDefault(predicate);
    }

    public T? SingleOrDefault(Expression<Func<T, bool>> predicate)
    {
        return _context.Set<T>().SingleOrDefault(predicate);
    }

    public void SaveChanges()
    {
        _context.SaveChanges();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
