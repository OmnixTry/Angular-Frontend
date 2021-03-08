using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IOrderDetaiRepository : IRepository<OrderDetail>
    {
        void AddProductToOrder(int productId, int orderId, int quantity);

        void DeleteProductFromOrder(int productId, int orderId);

        OrderDetail FindByIds(int productId, int orderId);

        List<OrderDetail> FindByOrderId(int orderId);

        void Delete(OrderDetail orderDetail);
    }
}
