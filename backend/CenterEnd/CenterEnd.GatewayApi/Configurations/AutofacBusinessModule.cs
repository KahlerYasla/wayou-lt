using Autofac;
using CenterEnd.BusinessLogic.Services;
using CenterEnd.DataAccess.Generic;
using CenterEnd.DataAccess.Repositories;
using CenterEnd.Database.Entities.Concrete;



// using CenterEnd.BusinessLogic.Services;
// using CenterEnd.BusinessLogic.Implementations;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace CenterEnd.GatewayApi.Configurations;

public class AutofacBusinessModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        // Registering the managers as services
        builder.RegisterType<AuthManager>().As<IAuthService>();
        builder.RegisterType<GenericRepository<User>>().As<IGenericRepository<User>>();

        // Registering the options
        builder.RegisterType<ConfigureSwaggerOptions>().As<IConfigureOptions<SwaggerGenOptions>>();
    }
}
