using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    [HandleError]
    public class UserManagerController : Controller
    {
        // GET: UserManager
        public ActionResult Index()
        {
            return View();
        }
    }
}