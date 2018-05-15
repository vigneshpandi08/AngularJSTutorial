using MyFirstServercall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstServercall.Controllers
{
    public class CityController : Controller
    {
        // GET: City
        public ActionResult Index()
        {
            StudentEntities te = new StudentEntities();
            var city = te.CityLists.ToList();
            return Json(city, JsonRequestBehavior.AllowGet);
        }
    }
}