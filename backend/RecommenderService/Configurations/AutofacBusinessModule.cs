using Autofac;
using Microsoft.Extensions.Options;
using RecommenderService.Configurations;
using RecommenderService.Services.Managers;
using RecommenderService.Services.Interfaces;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace RecommenderService.Configuations
{
    public class AutofacBusinessModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // Registering the managers as services
            builder.RegisterType<MatchesService>().As<IMatchesService>();

            // Registering the options
            builder.RegisterType<ConfigureSwaggerOptions>().As<IConfigureOptions<SwaggerGenOptions>>();
        }
    }
}