using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface ICreateable<T>
    {
        void Create(T toCreate);
    }
}
