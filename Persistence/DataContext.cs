using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Activity> Activities { get; set; }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

            // builder.Entity<Value>()
            // .HasData(
            //     new Value { Id = 1, name = "Value 101" },
            //     new Value { Id = 2, name = "Value 102" },
            //     new Value { Id = 3, name = "Value 10" }
            // );

        }
    }
}