using BLL.DTO;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Interfaces
{
  public interface ICategoryService
  {
    List<CategoryDTO> GetAll();
  }
}
