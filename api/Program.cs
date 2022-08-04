var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddScoped<IBabyRepository, BabyRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(p => p.WithOrigins("*").AllowAnyHeader().AllowAnyMethod());
app.UseHttpsRedirection();

app.MapGet("/babies", (IBabyRepository repo) =>
{
    return repo.GetAll();
})
.WithName("GetBabies");

app.Run();