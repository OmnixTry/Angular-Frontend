using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
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

        
    }
}
