using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
<<<<<<< HEAD
=======
using Application.Core;
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Persistence;
using API.Extensions;
using Swashbuckle;
using FluentValidation.AspNetCore;
using API.Middleware;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
<<<<<<< HEAD
            services.AddDbContext<DataContext>(opt =>
           {
               opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
           });
=======
            services.AddControllers(opt => 
            {
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                opt.Filters.Add(new AuthorizeFilter(policy));
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a

            }).AddFluentValidation(config =>
            {
                config.RegisterValidatorsFromAssemblyContaining<Create>();
            });
<<<<<<< HEAD
            services.AddMediatR(typeof(List.Handler).Assembly);
            // services.AddSwaggerGen(c =>
            // {
            //     c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            // });

            services.AddControllers();
=======
            services.ApplicationServices(_config);
            services.AddIdentityServices(_config);

>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ExceptionMiddleware>();
            if (env.IsDevelopment())
            {
<<<<<<< HEAD
                app.UseDeveloperExceptionPage();
                //app.UseSwagger();
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
=======
                //app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a
            }

            //app.UseHttpsRedirection();
            app.UseCors("CorsPolicy");
            app.UseRouting();

<<<<<<< HEAD
            //app.UseAuthorization();
=======
            app.UseAuthentication();
            app.UseAuthorization();
>>>>>>> b5dca4dc7e4410c77dac5a44d2e463e35f556e3a

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
