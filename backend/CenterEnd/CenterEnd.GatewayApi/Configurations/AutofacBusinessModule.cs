using Autofac;
using CenterEnd.BusinessLogic.Services;
using CenterEnd.DataAccess.Generic;
using CenterEnd.DataAccess.Repositories;
using CenterEnd.Database.Entities.Abstract;
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
        // Registering the managers as services, and the repositories as generic repositories
        builder.RegisterType<AuthManager>().As<IAuthService>();
        builder.RegisterType<GenericRepository<User>>().As<IGenericRepository<User>>();

        builder.RegisterType<DeckManager>().As<IDeckService>();
        builder.RegisterType<GenericRepository<Deck>>().As<IGenericRepository<Deck>>();

        builder.RegisterType<PlaceManager>().As<IPlaceService>();
        builder.RegisterType<GenericRepository<Place>>().As<IGenericRepository<Place>>();

        builder.RegisterType<UserInteractionManager>().As<IUserInteractionService>();
        builder.RegisterType<GenericRepository<UserInteraction>>().As<IGenericRepository<UserInteraction>>();

        // Registering the options
        builder.RegisterType<ConfigureSwaggerOptions>().As<IConfigureOptions<SwaggerGenOptions>>();
    }
}
