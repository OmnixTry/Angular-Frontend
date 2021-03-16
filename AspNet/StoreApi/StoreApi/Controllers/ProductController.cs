using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StoreApi.Models;

namespace StoreApi.Controllers
{
  [EnableCors("AllowOrigin")]
  [Route("api/[controller]")]
  [ApiController]
  public class ProductController : ControllerBase
    {
        private readonly IMapper _mapper;
        private IProductService _productService;
        public ProductController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<ProductModel> Get()
        {
            IEnumerable<ProductDTO> prods = _productService.GetAll();
            return _mapper.Map<IEnumerable<ProductDTO>, IEnumerable<ProductModel>>(prods);
        }

        [HttpGet("{id}")]
        public ProductModel Get(int id)
        {
            ProductDTO product = _productService.GetById(id);
            return _mapper.Map<ProductDTO, ProductModel>(product);
        }

        [HttpPost]
        public void Post([FromBody] ProductModel product)
        {
            ProductDTO dto = _mapper.Map<ProductModel, ProductDTO>(product);
            _productService.Create(dto);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] ProductModel product)
        {
            product.Id = id;
            _productService.Update(_mapper.Map<ProductModel, ProductDTO>(product));
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _productService.Delete(id);
        }
    }
}
