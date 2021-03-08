using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    class CustomerRepository : GenericEFRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository(StoreContext context) : base(context)
        {
        }

        public Customer GetCustomerOfTheOrder(int orderId)
        {
            int? custId = _context.Orders.Find(orderId).CustomerId;
            return _context.Customers.Find(custId);
        }

        public List<Order> GetOrdersOfACustomer(int id)
        {
            return _context.Orders.Where(o => o.CustomerId == id).ToList();
        }
    }
}
