using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class OrderDetailRepository : GenericEFRepository<OrderDetail>, IOrderDetaiRepository
    {
        public OrderDetailRepository(StoreContext context) : base(context)
        {
        }

        public void AddProductToOrder(int productId, int orderId, int quantity)
        {
            Product product = _context.Products.Find(productId);
            if (product.AvailableQuantity < quantity)
                throw new InvalidOperationException("Not enough products");

            OrderDetail orderDetail = new OrderDetail()
            {
                ProductId = productId,
                Quantity = quantity,
                OrderId = orderId
            };

            _context.OrderDetails.Add(orderDetail);
        }

        public void Delete(OrderDetail orderDetail)
        {
            _entities.Remove(orderDetail);
        }

        public void DeleteProductFromOrder(int productId, int orderId)
        {
            IQueryable<OrderDetail> toRemove = _context.OrderDetails.Where(od => od.OrderId == orderId && od.ProductId == productId);
            _context.OrderDetails.RemoveRange(toRemove);
        }

        public OrderDetail FindByIds(int productId, int orderId)
        {
            return _context.OrderDetails.Where(od => od.OrderId == orderId && od.ProductId == productId).FirstOrDefault();
        }

        public List<OrderDetail> FindByOrderId(int orderId)
        {
            return _context.OrderDetails.Where(od => od.OrderId == orderId).ToList();
        }
    }
}
