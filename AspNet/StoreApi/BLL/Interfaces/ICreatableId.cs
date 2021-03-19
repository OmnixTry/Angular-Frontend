using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
	public interface ICreateableId<T>
	{
		int Create(T toCreate);
	}
}
