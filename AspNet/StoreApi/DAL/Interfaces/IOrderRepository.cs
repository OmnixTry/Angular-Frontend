using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
    int CountTotalCost(int orderId);
    }
}
