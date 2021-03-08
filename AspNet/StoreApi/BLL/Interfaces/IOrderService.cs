using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface IOrderService : ICreateable<OrderDTO>, IGetable<OrderDTO> , IDeleteable, IUpdatable<OrderDTO>
    {
        IEnumerable<ProductDTO> GetOrderProducts(int orderId);

        void AddProductToOrder(int orderIdint, int productId, int quantity);

        void RemoveProductFromOrder(int orderid, int productId);

        void ChangeProductQuantity(int orderId, int productId, int neqQuantity);
        
        ProductDTO GetOrderProduct(int id, int productId);
    }
}
