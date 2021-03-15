using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    class OrderRepository : GenericEFRepository<Order>, IOrderRepository
    {
        public OrderRepository(StoreContext context) : base(context)
        {
        }

    public int CountTotalCost(int customerId)
    {
      var a = (from product in _context.Products
               join detail in _context.OrderDetails on product.Id equals detail.ProductId
               join order in _context.Orders on detail.OrderId equals order.Id
               where customerId == order.CustomerId
               select product.Price * detail.Quantity).ToList();
      return (from product in _context.Products
              join detail in _context.OrderDetails on product.Id equals detail.ProductId
              join order in _context.Orders on detail.OrderId equals order.Id
              where customerId == order.CustomerId
              select product.Price * detail.Quantity).Sum();
    }

    public override List<Order> FindAll()
        {
            return _context.Orders.Include(ord => ord.Status).Include(ord=> ord.Customer).ToList();
        }
  }
}
