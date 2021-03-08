using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        public int AvailableQuantity { get; set; }

        public int Price { get; set; }

        public DateTime CreationDate { get; set; }

        public string Description { get; set; }
        
        // foreign key property
        public int? CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
