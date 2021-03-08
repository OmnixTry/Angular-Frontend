using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Models
{
    public class CustomerModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
