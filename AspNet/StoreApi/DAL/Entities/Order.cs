using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Order
    {
        public int Id { get; set; }

        public string Comment { get; set; }
        
        public int StatusId { get; set; }

        public Status Status { get; set; }
        
        public int? CustomerId { get; set; }

        public Customer Customer { get; set; }

        public DateTimeOffset CreatedDate { get; set; }

        ICollection<OrderDetail> OrderDetails { get; set; }
        
    }
}
