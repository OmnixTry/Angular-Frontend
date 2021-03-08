using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
    public interface IGetable<T>
    {
        IEnumerable<T> GetAll();

        T GetById(int id);
    }
}
