using MyFirstServercall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyFirstServercall.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            StudentEntities te = new StudentEntities();
            var stud = te.Students.ToList();
            return Json(stud,JsonRequestBehavior.AllowGet); 
        }
        public ActionResult GetByid(int Id)
        {
            StudentEntities te = new StudentEntities();
            var stud = te.Students.Where(x => x.StudentID == Id).ToList();
            return Json(stud,JsonRequestBehavior.AllowGet); 
        }
    }
}