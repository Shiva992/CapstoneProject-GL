using ApiLogin.Models;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Threading.Tasks;
using System.Web.Http;

[assembly: OwinStartup(typeof(ApiLogin.Startup))]

namespace ApiLogin
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)//
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
           app.UseCors(CorsOptions.AllowAll);
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(1),
                Provider = new ServerProvider()
            };

            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            HttpConfiguration c = new HttpConfiguration();
            WebApiConfig.Register(c);
        }
    }
}
