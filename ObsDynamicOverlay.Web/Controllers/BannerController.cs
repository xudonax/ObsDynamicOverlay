using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObsDynamicOverlay.Web.Models;

namespace ObsDynamicOverlay.Web.Controllers
{
    public class BannerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Preview()
        {
            return View();
        }
    }
}
