using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    [HandleError]
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Cars()
        {
            return View();
        }
        public ActionResult BookingAdmin()
        {
            return View();
        }
    }
}