using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IProductRepository : IRepository<Product>
    {
        List<Product> GetProductsOfTheOrder(int orderId);
    }
}
