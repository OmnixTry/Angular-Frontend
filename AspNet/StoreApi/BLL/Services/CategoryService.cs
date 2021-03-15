using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL.Services
{
  public class CategoryService : ServiceBase, ICategoryService
  {
    public CategoryService(IUnitOfWork unitOfWork, IMapper mapper):base(unitOfWork, mapper)
    {

    }
    public List<CategoryDTO> GetAll()
    {
      return _mapper.Map<List<Category>, List<CategoryDTO>>(_unitOfWork.CategoryRepository.FindAll().ToList());
    }
  }
}
