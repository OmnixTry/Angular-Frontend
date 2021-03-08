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
    public class CustomerController : ControllerBase
    {
        private readonly IMapper _mapper;
        private ICustomerService _customerService;

        private CustomerModel Map(CustomerDTO customerDTO)
        {
            return _mapper.Map<CustomerDTO, CustomerModel>(customerDTO);
        }

        private CustomerDTO Map(CustomerModel customerModel)
        {
            return _mapper.Map<CustomerModel, CustomerDTO>(customerModel);
        }

        public CustomerController(ICustomerService customerService, IMapper mapper)
        {
            _customerService = customerService;
            _mapper = mapper;
        }
        // GET: api/<User>
        [HttpGet]
        public IEnumerable<CustomerModel> Get()
        {
            return _mapper.Map<IEnumerable<CustomerDTO>, IEnumerable<CustomerModel>>(_customerService.GetAll());
        }

        // GET api/<User>/5
        [HttpGet("{id}")]
        public CustomerModel Get(int id)
        {
            return Map(_customerService.GetById(id));
        }

        // POST api/<User>
        [HttpPost]
        public void Post([FromBody] CustomerModel value)
        {
            _customerService.Create(Map(value));
        }

        // PUT api/<User>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] CustomerModel value)
        {
            value.Id = id;
            _customerService.Update(Map(value));
        }

        // DELETE api/<User>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _customerService.Delete(id);
        }

        [HttpGet("{id}/orders")]
        public IEnumerable<OrderModel> GetOrders(int id)
        {
             return _mapper.Map<IEnumerable<OrderDTO>, IEnumerable<OrderModel>>(_customerService.GetOrders(id));
        }
        //TODO GetOrdersOfCustomer
    }
}
