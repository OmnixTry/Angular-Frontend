using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IProductRepository ProductRepository { get; }
        
        ICustomerRepository CustomerRepository { get; }

        IStatusRepository StatusRepository { get; }

        IOrderRepository OrderRepository { get; }

        IOrderDetaiRepository OrderDetaiRepository { get; }

        ICategoryRepository CategoryRepository { get; }

        void Save();
    }
}
