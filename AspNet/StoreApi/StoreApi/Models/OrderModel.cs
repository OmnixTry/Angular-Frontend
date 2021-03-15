using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Models
{
    public class OrderModel
    {
        public int Id { get; set; }

        public string Comment { get; set; }

        public int StatusId { get; set; }

        public string Status { get; set; }

        public int CustomerId { get; set; }

        

        public CustomerModel Customer { get; set; }

        public DateTimeOffset CreatedDate { get; set; }
    }
}
