using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface ICustomerService : IGetable<CustomerDTO>, ICreateable<CustomerDTO>, IDeleteable, IUpdatable<CustomerDTO>
    {
        IEnumerable<OrderDTO> GetOrders(int id);

        int CountOrders(int id);

        int CountTotalcost(int id);

    }
}
