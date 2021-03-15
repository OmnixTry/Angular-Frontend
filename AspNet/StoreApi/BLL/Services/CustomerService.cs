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
    public class CustomerService : ServiceBase, ICustomerService
    {
        public CustomerService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

    public int CountOrders(int id)
    {
      return _unitOfWork.CustomerRepository.GetOrdersOfACustomer(id).Count();
    }

    public int CountTotalcost(int id)
    {
      return _unitOfWork.OrderRepository.CountTotalCost(id);        
    }

    public void Create(CustomerDTO toCreate)
        {
            toCreate.Id = 0;
            toCreate.CreatedDate = DateTime.Now;
            _unitOfWork.CustomerRepository.Insert(Map(toCreate));
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            _unitOfWork.CustomerRepository.Delete(id);
            _unitOfWork.Save();
        }

        public IEnumerable<CustomerDTO> GetAll()
        {
            return _mapper.Map<IEnumerable<Customer>, IEnumerable<CustomerDTO>>(_unitOfWork.CustomerRepository.FindAll());
        }

        public CustomerDTO GetById(int id)
        {
            return Map(_unitOfWork.CustomerRepository.GetById(id));
        }

        public IEnumerable<OrderDTO> GetOrders(int id)
        {
            List<Order> orders =  _unitOfWork.CustomerRepository.GetOrdersOfACustomer(id);
            return _mapper.Map<IEnumerable<Order>, IEnumerable<OrderDTO>>(orders);
        }

        public void Update(CustomerDTO value)
        {
            _unitOfWork.CustomerRepository.Update(Map(value));
            _unitOfWork.Save();
        }

        private CustomerDTO Map(Customer order)
        {
            return _mapper.Map<Customer, CustomerDTO>(order);
        }

        private Customer Map(CustomerDTO order)
        {
            return _mapper.Map<CustomerDTO, Customer>(order);
        }
    }
}
