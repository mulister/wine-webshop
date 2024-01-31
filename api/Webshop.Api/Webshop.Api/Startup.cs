// Startup.cs
using Data;
using Data.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace Webshop.Api
{
  public class Startup
  {
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
      //services.AddCors(options =>
      //{
      //  options.AddPolicy("AllowSpecificOrigin",
      //      builder =>
      //      {
      //        builder.WithOrigins("http://localhost:4200")
      //               .AllowAnyHeader()
      //               .AllowAnyMethod();
      //      });
      //});

      // Other service configurations...
      services.AddDbContext<WebshopContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


      // Register the Swagger generator, defining one or more Swagger documents
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "QualityWinesApi", Version = "v1" });
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseRouting();

      // Other app configurations...
      //app.UseCors("AllowSpecificOrigin");

      //app.UseCors("AllowAngularLocalhost");
      // Enable middleware to serve generated Swagger as a JSON endpoint.
      app.UseSwagger();
      // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
      // specifying the Swagger JSON endpoint.
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "QualityWinesApi");
        c.RoutePrefix = string.Empty; // Set the Swagger UI at the root URL
      });

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
