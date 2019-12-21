using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ObsDynamicOverlay.Web.Controllers
{
    [Authorize]
    public class BannerController : Controller
    {
        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public IActionResult Preview()
        {
            return View();
        }
    }
}
