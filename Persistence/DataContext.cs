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

<<<<<<< HEAD
        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activities { get; set; }

=======
        public DbSet<Activity> Activities { get; set; }
        
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

<<<<<<< HEAD
            builder.Entity<Value>()
            .HasData(
                new Value { Id = 1, name = "Value 101" },
                new Value { Id = 2, name = "Value 102" },
                new Value { Id = 3, name = "Value 10" }
            );
=======
            // builder.Entity<Value>()
            // .HasData(
            //     new Value { Id = 1, name = "Value 101" },
            //     new Value { Id = 2, name = "Value 102" },
            //     new Value { Id = 3, name = "Value 10" }
            // );
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a

        }
    }
}