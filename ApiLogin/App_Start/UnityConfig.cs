using ApiLogin.Repository;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace ApiLogin
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
             container.RegisterType<ICarRepository, CarRepository>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}