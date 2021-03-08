using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using StoreApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IMapper _mapper;
        private IOrderService _orderService;
        private readonly IProductService _productService;
        private readonly ICustomerService _customerService;
        private readonly IStatusService _statusService;

        //
        //
        //TODO VALIDATION!!!
        //
        //
        public OrderController(IOrderService orderService, IProductService productService, ICustomerService customerService, IStatusService statusService, IMapper mapper)
        {
            _mapper = mapper;
            _orderService = orderService;
            _productService = productService;
            _customerService = customerService;
            _statusService = statusService;
        }

        // GET: api/<OrderController>
        [HttpGet]
        public IEnumerable<OrderModel> Get()
        {
            return Map(_orderService.GetAll());
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public OrderModel Get(int id)
        {
            return Map(_orderService.GetById(id));
        }

        // POST api/<OrderController>
        [HttpPost]
        public IActionResult Post([FromBody] OrderModel value)
        {
            // Validation
            IEnumerable<int> statuses = _statusService.GetAll().Select(s => s.Id);
            if (!statuses.Contains(value.StatusId))
                return BadRequest("No such status");

            IEnumerable<int> customerIds = _customerService.GetAll().Select(c => c.Id);
            if (!customerIds.Contains(value.CustomerId))
                return BadRequest("No such Customer");

            _orderService.Create(Map(value));
            return Ok();
        }

        // PUT api/<OrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] OrderModel value)
        {
            _orderService.Update(Map(value));
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _orderService.Delete(id);
        }

        [HttpGet("{id}/products")]
        public IEnumerable<ProductModel> GetOrders(int id)
        {
            return Map(_orderService.GetOrderProducts(id));
        }

        [HttpPost("{id}/products/")]
        public IActionResult PostOrders(int id, int productId, int quantity)
        {
            // validation
            if (quantity <= 0)
                return BadRequest("Quantity has to me more than 0");
            if (Map(_productService.GetById(productId)).AvailableQuantity < quantity)
                return BadRequest("Not Enough items in stock");
            
            _orderService.AddProductToOrder(id, productId, quantity);
            return Ok();
        }

        [HttpGet("{id}/products/{productId}")]
        public ProductModel GetProduct(int id, int productId)
        {
            return Map(_orderService.GetOrderProduct(id, productId));
        }

        [HttpDelete("{id}/products/{productId}")]
        public void DeleteProduct(int id, int productId)
        {
            _orderService.RemoveProductFromOrder(id, productId);
        }

        [HttpPut("{id}/products/{productId}")]
        public void PutProduct(int id, int productId, [FromBody] ProductModel productModel)
        {
            _orderService.ChangeProductQuantity(id, productId, productModel.AvailableQuantity);
        }

        private OrderModel Map(OrderDTO orderDTO)
        {
            return _mapper.Map<OrderDTO, OrderModel>(orderDTO);
        }

        private OrderDTO Map(OrderModel orderModel)
        {
            return _mapper.Map<OrderModel, OrderDTO>(orderModel);
        }

        private IEnumerable<OrderModel> Map(IEnumerable<OrderDTO> orderDTOs)
        {
            return _mapper.Map<IEnumerable<OrderDTO>, IEnumerable<OrderModel>>(orderDTOs);
        }

        private IEnumerable<ProductModel> Map(IEnumerable<ProductDTO> productDTOs)
        {
            return _mapper.Map<IEnumerable<ProductDTO>, IEnumerable<ProductModel>>(productDTOs);
        }

        private ProductModel Map(ProductDTO productDTO)
        {
            return _mapper.Map<ProductDTO, ProductModel>(productDTO);
        }
    }
}
