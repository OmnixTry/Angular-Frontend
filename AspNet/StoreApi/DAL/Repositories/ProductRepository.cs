using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    class ProductRepository : GenericEFRepository<Product>, IProductRepository
    {
        public ProductRepository(StoreContext context) : base(context)
        {
        }

        public List<Product> GetProductsOfTheOrder(int orderId)
        {
            IQueryable<int> ids = _context.OrderDetails.Where(od => od.OrderId == orderId).Select(od => od.ProductId);
            return _context.Products.Where(p => ids.Contains(p.Id)).ToList();
        }
    }
}
