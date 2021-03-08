using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface IProductService : ICreateable<ProductDTO>, IDeleteable, IGetable<ProductDTO>, IUpdatable<ProductDTO>
    {
    }
}
