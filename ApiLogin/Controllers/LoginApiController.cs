using ApiLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Security;

namespace ApiLogin.Controllers
{
    public class LoginApiController : ApiController
    {
        
        [Route("OnlyAdmin")]
        [HttpGet]

        public IHttpActionResult UserInfo()
        {
            CarRental2Entities1 db = new CarRental2Entities1();

            var identity = (ClaimsIdentity)User.Identity;
            var claims = identity.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;
            var data = db.UserDetails.FirstOrDefault(y => y.EmailId == claims);
            return Ok(data);

        }
    }
}
