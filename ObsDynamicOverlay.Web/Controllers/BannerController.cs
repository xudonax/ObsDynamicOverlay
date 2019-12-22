using Microsoft.AspNetCore.Mvc;
using ObsDynamicOverlay.Web.Business;
using ObsDynamicOverlay.Web.Business.Extensions;

namespace ObsDynamicOverlay.Web.Controllers
{
    public class BannerController : Controller
    {
        private readonly BannerContext _context;

        public BannerController(BannerContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Preview()
        {
            return View();
        }

        public async System.Threading.Tasks.Task<IActionResult> Image(int? id)
        {
            if (id == null)
                return NotFound();

            var bannerModel = await _context.Banners.FindAsync(id);

            if (bannerModel == null)
                return NotFound();

            return File(bannerModel.Image, bannerModel.FileType.AsMimeType());
        }
    }
}
