using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.EF
{
    public class StoreContext : DbContext
    {
        private readonly string _connectionString;
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Status> Statuses { get; set; }

        public StoreContext(string connectionString)
        {
            _connectionString = connectionString;
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderDetail>()
                .HasKey(orderDetail => new { orderDetail.ProductId, orderDetail.OrderId });
            
            modelBuilder.Entity<Category>()
                .HasAlternateKey(c => c.Name);
            
            modelBuilder.Entity<Status>()
                .HasAlternateKey(c => c.Title);
            
            modelBuilder.Entity<Customer>()
                .Property(c => c.CreatedDate)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<Product>()
                .Property(c => c.CreationDate)
                .HasDefaultValueSql("getdate()");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
