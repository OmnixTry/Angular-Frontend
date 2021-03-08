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
    public class StatusService : ServiceBase, IStatusService
    {
        public StatusService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public IEnumerable<StatusDTO> GetAll()
        {
            return _mapper.Map<List<Status>, List<StatusDTO>>(_unitOfWork.StatusRepository.FindAll());
        }

        public StatusDTO GetById(int id)
        {
            return _mapper.Map<Status, StatusDTO>(_unitOfWork.StatusRepository.GetById(id));
        }
    }
}
