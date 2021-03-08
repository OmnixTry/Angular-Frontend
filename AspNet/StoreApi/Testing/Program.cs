using DAL.EF;
using DAL.Entities;
using DAL.Interfaces;
using DAL.Repositories;
using System;
using AutoMapper;

namespace Testing
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string conString = "Data Source = (local); Initial Catalog = Store; Integrated Security = SSPI";
            //StoreContext context = new StoreContext(conString);
            IUnitOfWork unitOfWork = new EFUnitOfWork(conString);
            /*
            Customer customer = new Customer()
            {
                Name = "William Murdoch",
                Address = "some street"
            };
            unitOfWork.CustomerRepository.Insert(customer);
            customer = new Customer()
            {
                Name = "Miley Cyrus",
                Address = "Malibu"
            };
            unitOfWork.CustomerRepository.Insert(customer);

            unitOfWork.ProductRepository.Insert(new Product() { Description= "ddd", AvailableQuantity=10, CategoryId=1, Price=10, ProductName="bee"});
            unitOfWork.ProductRepository.Insert(new Product() { Description = "ddd2", AvailableQuantity = 120, CategoryId = 2, Price = 100, ProductName = "PewDiePie G Fuel" });
            */


            //unitOfWork.Save();
            //unitOfWork.Dispose();

            BLL.Infrastructure.AutoMapperprofile autoMapperprofile = new BLL.Infrastructure.AutoMapperprofile();
            StoreApi.Infrastructure.AutoMapperprofile autoMapperprofile1 = new StoreApi.Infrastructure.AutoMapperprofile();

            var c = new MapperConfiguration(cfg => { cfg.AddProfile(autoMapperprofile); cfg.AddProfile(autoMapperprofile1); });


        }
    }
}
