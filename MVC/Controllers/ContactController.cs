using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    [HandleError]
    public class ContactController : Controller
    {
        // GET: Contact
        public ActionResult ContactIndex()
        {
            return View();
        }
        public ActionResult ContactUserIndex()
        {
            return View();
        }
    }
}