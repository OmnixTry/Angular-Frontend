using DAL.Entities;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Customer GetCustomerOfTheOrder(int orderId);

        List<Order> GetOrdersOfACustomer(int id);
    }
}
