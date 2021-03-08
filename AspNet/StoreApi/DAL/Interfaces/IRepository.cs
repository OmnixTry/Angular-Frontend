using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> FindAll();
        
        TEntity GetById(int id);

        void Insert(TEntity entity);

        void Update(TEntity entityToUpdate);

        void Delete(int id);
    }
}
