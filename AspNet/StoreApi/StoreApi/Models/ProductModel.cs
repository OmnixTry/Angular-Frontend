using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Models
{
    public class ProductModel
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        public int AvailableQuantity { get; set; }

        public int Price { get; set; }

        public DateTime CreationDate { get; set; }

        public string Description { get; set; }

        public int? CategoryId { get; set; }
    }
}
