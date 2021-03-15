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
            //CreateMap<OrderDTO, Order>().ForMember(destinationMember => destinationMember.Status, action =>  action.MapFrom(src => (Status)Enum.Parse(typeof(Status), src.Status)) );
            CreateMap<Order, OrderDTO>().ForMember(destinationMember => destinationMember.Status, action => action.MapFrom(src => src.Status.Title));
            CreateMap<Product, ProductDTO>().ForMember(dest => dest.Category, act => act.MapFrom(src => src.Category.Name));
          



            //CreateMap<ProductDTO, Product>().ReverseMap();
            CreateMap<StatusDTO, Status>().ReverseMap();
            CreateMap<OrderDetailDTO, OrderDetail>().ReverseMap();
        }
    }
}
