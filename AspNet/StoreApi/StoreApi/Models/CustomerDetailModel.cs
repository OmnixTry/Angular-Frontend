using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Models
{
	public class CustomerDetailModel
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Address { get; set; }

		public DateTime CreatedDate { get; set; }

		public int OrderCount { get; set; }

		public int TotalCost { get; set; }
	}
}
