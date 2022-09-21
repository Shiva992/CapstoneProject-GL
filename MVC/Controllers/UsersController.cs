using MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    [HandleError]
    public class UsersController : Controller
    {
       
        // GET: User
        public ActionResult Index()
        {
           
           return View();
        }
        
        public ActionResult AfterLogin()
        {
            return View();
        }
        [HttpPost]
        //[Route("GetDataLogin")]
        public void GetDataOfLogin(UserDetail ud)
        {
           // Session["email"] = ud.EmailId;
        }
       
       public ActionResult BookingRenderCars()
        {
            return View();
        }
        public ActionResult MyProfile()
        {
            return View();
        }
        public ActionResult Feedback()
        {
            return View();
        }
    }
}