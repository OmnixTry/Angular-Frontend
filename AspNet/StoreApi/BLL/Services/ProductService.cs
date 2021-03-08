using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Services
{
    public class ProductService : ServiceBase, IProductService
    {
        public ProductService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public void Create(ProductDTO toCreate)
        {
            toCreate.Id = 0;
            toCreate.CreationDate = DateTime.Now;
            _unitOfWork.ProductRepository.Insert(Map(toCreate));
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            _unitOfWork.ProductRepository.Delete(id);
            _unitOfWork.Save();
        }

        public IEnumerable<ProductDTO> GetAll()
        {
            return _mapper.Map<IEnumerable<Product>, IEnumerable<ProductDTO>>(_unitOfWork.ProductRepository.FindAll());
        }

        public ProductDTO GetById(int id)
        {
            return Map(_unitOfWork.ProductRepository.GetById(id));
        }

        public void Update(ProductDTO value)
        {
            _unitOfWork.ProductRepository.Update(Map(value));
            _unitOfWork.Save();
        }

        private ProductDTO Map(Product order)
        {
            return _mapper.Map<Product, ProductDTO>(order);
        }

        private Product Map(ProductDTO order)
        {
            return _mapper.Map<ProductDTO, Product>(order);
        }
    }
}
