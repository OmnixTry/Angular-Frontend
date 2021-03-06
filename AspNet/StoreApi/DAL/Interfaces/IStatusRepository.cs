﻿using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IStatusRepository : IRepository<Status>
    {
        Status GetStatusOfOrder(int orderId);
    }
}
