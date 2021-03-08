using AutoMapper;
using BLL.DTO;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Infrastructure
{
    public class AutoMapperprofile : Profile
    {
        public AutoMapperprofile()
        {
            CreateMap<CategoryDTO, Category>().ReverseMap();
            CreateMap<CustomerDTO, Customer>().ReverseMap();
            CreateMap<OrderDTO, Order>().ReverseMap();
            CreateMap<ProductDTO, Product>().ReverseMap();
            CreateMap<StatusDTO, Status>().ReverseMap();
            CreateMap<OrderDetailDTO, OrderDetail>().ReverseMap();
        }
    }
}
