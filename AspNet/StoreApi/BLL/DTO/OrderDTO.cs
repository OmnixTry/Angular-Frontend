using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }

        public string Comment { get; set; }

        public int StatusId { get; set; }

        public int? CustomerId { get; set; }
    }
}
