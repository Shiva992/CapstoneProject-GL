
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace ApiLogin.Models
{
    public class ServerProvider : OAuthAuthorizationServerProvider//db me check krna credentials iexist or not
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)//multiple task
        {
            UserModel userModel = new UserModel();//modelname

            var u = userModel.ValidateUser(context.UserName, context.Password);

            if (u == null)
            {
                context.SetError("Invalid credentails", "Given username/password is not correct");
                return;
            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            identity.AddClaim(new Claim(ClaimTypes.Role, u.Roles));
            identity.AddClaim(new Claim(ClaimTypes.Name, u.FullName));
            identity.AddClaim(new Claim(ClaimTypes.Email, u.EmailId));
            

            identity.AddClaim(new Claim("SecretKey", "12345@#$"));
            context.Validated(identity);
        }
    }
}