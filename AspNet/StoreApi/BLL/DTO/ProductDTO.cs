using DAL.Entities;
using System;

namespace BLL.DTO
{
	public class ProductDTO
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        public int AvailableQuantity { get; set; }

        public int Price { get; set; }

        public DateTime CreationDate { get; set; }

        public string Description { get; set; }

        public int? CategoryId { get; set; }

        public string Category { get; set; }

		public Size Size { get; set; }
	}
}
