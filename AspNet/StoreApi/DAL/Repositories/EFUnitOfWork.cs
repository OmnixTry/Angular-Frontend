using DAL.EF;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private readonly StoreContext _context;
        private IProductRepository _productRepository;
        private ICustomerRepository _customerRepository;
        private IStatusRepository _statusRepository;
        private IOrderRepository _orderRepository;
        private ICategoryRepository _categoryRepository;
        private IOrderDetaiRepository _orderDetaiRepository;

        public EFUnitOfWork(string connectioString)
        {
            _context = new StoreContext(connectioString);
        }

        public IProductRepository ProductRepository
        {
            get
            {
                if (_productRepository == null)
                    _productRepository = new ProductRepository(_context);
                
                return _productRepository;
            }
        }

        public ICustomerRepository CustomerRepository
        {
            get
            {
                if (_customerRepository == null)
                    _customerRepository = new CustomerRepository(_context);

                return _customerRepository;
            }
        }

        public IStatusRepository StatusRepository
        {
            get
            {
                if (_statusRepository == null)
                    _statusRepository = new StatusRepositroy(_context);

                return _statusRepository;
            }
        }

        public IOrderRepository OrderRepository
        {
            get
            {
                if (_orderRepository == null)
                    _orderRepository = new OrderRepository(_context);

                return _orderRepository;
            }
        }

        public ICategoryRepository CategoryRepository
        {
            get
            {
                if (_categoryRepository == null)
                    _categoryRepository = new CategoryRepository(_context);

                return _categoryRepository;
            }
        }

        public IOrderDetaiRepository OrderDetaiRepository
        {
            get
            {
                if (_orderDetaiRepository == null)
                    _orderDetaiRepository = new OrderDetailRepository(_context);

                return _orderDetaiRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
