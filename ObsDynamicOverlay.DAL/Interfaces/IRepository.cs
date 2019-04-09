using Microsoft.EntityFrameworkCore;
using System;

namespace ObsDynamicOverlay.DAL.Interfaces
{
    public interface IRepository<T> where T : class, IDbObject, new()
    {
        DbSet<T> GetDbSet();

        T Get(Guid id);

        int SaveChanges();
    }
}
