using Data;
using Data.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<WebshopContext>(options =>
{
  // Configure your database connection here
  options.UseSqlServer("Server=.;Database=QualityWines;Integrated Security=True;");
});

var allowAllOrigins = "_allowAllOrigins";

// Add services to the container.
builder.Services.AddScoped<IWinesService, WineService>();
builder.Services.AddScoped<IAwardService, AwardsService>();
builder.Services.AddScoped<IAnnouncementService, AnnouncementService>();
builder.Services.AddScoped<IAwardService, AwardsService>();
builder.Services.AddScoped<IShoppingCartService, ShoppingCartService>();

builder.Services.AddCors(options =>
{
  options.AddPolicy(name: allowAllOrigins,
                    policy =>
                    {
                      policy.AllowAnyOrigin()
                      .AllowAnyMethod().AllowAnyHeader();
                    });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseRouting();

app.UseCors(allowAllOrigins);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
