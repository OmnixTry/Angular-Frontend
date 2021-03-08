using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    class StatusRepositroy : GenericEFRepository<Status>, IStatusRepository
    {
        public StatusRepositroy(StoreContext context) : base(context)
        {
        }

        public Status GetStatusOfOrder(int orderId)
        {
            int? statId = _context.Orders.Find(orderId).StatusId;
            return _entities.Find(statId);  
        }
    }
}
