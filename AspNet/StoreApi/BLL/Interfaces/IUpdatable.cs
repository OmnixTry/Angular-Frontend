using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface IUpdatable<T>
    {
        void Update(T value);
    }
}
