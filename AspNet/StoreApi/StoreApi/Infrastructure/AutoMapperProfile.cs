using AutoMapper;
using BLL.DTO;
using StoreApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Infrastructure
{
    public class AutoMapperprofile : Profile
    {
        public AutoMapperprofile()
        {
            CreateMap<CategoryDTO, CategoryModel>().ReverseMap();
            CreateMap<CustomerDTO, CustomerModel>().ReverseMap();
            CreateMap<OrderDTO, OrderModel>().ReverseMap();
            CreateMap<ProductDTO, ProductModel>().ReverseMap();
            CreateMap<StatusDTO, StatusModel>().ReverseMap();
			CreateMap<CustomerModel, CustomerDetailModel>().ReverseMap();
        }
    }
}
