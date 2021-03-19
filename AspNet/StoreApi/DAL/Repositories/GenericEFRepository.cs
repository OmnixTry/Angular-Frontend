using DAL.EF;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class GenericEFRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly StoreContext _context;
        protected readonly DbSet<TEntity> _entities;
        public GenericEFRepository(StoreContext context)
        {
            _context = context;
            _entities = _context.Set<TEntity>();
        }

        public void Delete(int id)
        {
            _entities.Remove(GetById(id));
        }

        public virtual List<TEntity> FindAll()
        {
            return _entities.ToList();
        }

        public virtual TEntity GetById(int id)
        {
            return _entities.Find(id);
        }

        public void Insert(TEntity entity)
        {
            _entities.Add(entity);
        }

        public void Update(TEntity entityToUpdate)
        {
            _entities.Update(entityToUpdate);
        }
    }
}
