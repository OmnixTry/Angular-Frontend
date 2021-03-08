using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.DTO
{
    public class CustomerDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
