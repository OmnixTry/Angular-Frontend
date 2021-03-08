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
    public class StatusController : ControllerBase
    {
        private IMapper _mapper;
        private IStatusService _statusService;

        public StatusController(IStatusService statusService, IMapper mapper)
        {
            _mapper = mapper;
            _statusService = statusService;
        }

        // GET: api/<StatusComntroller>
        [HttpGet]
        public IEnumerable<StatusModel> Get()
        {
            return _mapper.Map<IEnumerable<StatusDTO>, IEnumerable<StatusModel>>(_statusService.GetAll());
        }

        // GET api/<StatusComntroller>/5
        [HttpGet("{id}")]
        public StatusModel Get(int id)
        {
            return _mapper.Map<StatusDTO, StatusModel>(_statusService.GetById(id));
        }
    }
}
