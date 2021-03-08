using AutoMapper;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Services
{
    public abstract class ServiceBase
    {
        protected IUnitOfWork _unitOfWork;
        protected IMapper _mapper;
        public ServiceBase(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
    }
}
