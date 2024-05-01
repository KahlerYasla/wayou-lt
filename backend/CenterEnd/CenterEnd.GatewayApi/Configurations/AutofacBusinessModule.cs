using Autofac;
// using CenterEnd.BusinessLogic.Services;
// using CenterEnd.BusinessLogic.Implementations;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using CenterEnd.GatewayApi.Configurations;

namespace CenterEnd.GatewayApi.Configurations;

public class AutofacBusinessModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        // Registering the managers as services
        // builder.RegisterType<AuthManager>().As<IAuthService>();

        // Registering the options
        builder.RegisterType<ConfigureSwaggerOptions>().As<IConfigureOptions<SwaggerGenOptions>>();
    }
}
