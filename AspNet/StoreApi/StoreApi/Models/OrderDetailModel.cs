using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Models
{
	public class OrderDetailModel
	{	
		public int ProductId { get; set; }

		public int Quantity { get; set; }
	}
}
