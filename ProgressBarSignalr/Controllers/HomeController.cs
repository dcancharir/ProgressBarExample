using ProgressBarSignalr.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace ProgressBarSignalr.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public JsonResult LongRunningProcess()
        {
            int itemsCount = 100000;
            int limit = 0;
            bool hide = false;
            for (int i = 0; i <= itemsCount; i++) {
                //simulating some task
                //Thread.Sleep(500);
                //calling a function that calculattes percentaje and sends the data to the client
                if (limit == itemsCount) {
                    hide = true;
                }
                Functions.SendProgress("Process in progress...", i, itemsCount,hide);
                limit++;
            }
            return Json("", JsonRequestBehavior.AllowGet);
        }
    }
}