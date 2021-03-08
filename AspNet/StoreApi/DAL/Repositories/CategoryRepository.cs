using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class CategoryRepository : GenericEFRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(StoreContext context) : base(context)
        {
        }
    }
}
