using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.DAL.Enums;
using ObsDynamicOverlay.DAL.Models;
using ObsDynamicOverlay.Hubs.Models;
using ObsDynamicOverlay.Web.Business;
using ObsDynamicOverlay.Web.Hubs;

namespace ObsDynamicOverlay.Web.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class BannerModelsController : Controller
    {
        private const int ShowForSeconds = 15;

        private readonly BannerContext _context;
        private readonly IHubContext<TitleCardHub> _hub;

        public BannerModelsController(BannerContext context, IHubContext<TitleCardHub> hub)
        {
            _context = context;
            _hub = hub;
        }

        // GET: BannerModels
        public async Task<IActionResult> Index(string message = "")
        {
            if (!string.IsNullOrEmpty(message))
            {
                ViewBag.Message = message;
            }

            return View(await _context.Banners.ToListAsync());
        }

        public async Task<IActionResult> Show(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bannerModel = await _context.Banners
                .FirstOrDefaultAsync(m => m.Id == id);

            if (bannerModel == null)
            {
                return NotFound();
            }

            await _hub.Clients.All.SendAsync("ShowTitleCard", new TitleCardModel
            {
                Title = bannerModel.Title,
                SubTitle = bannerModel.Subtitle,
                ImageUrl = Url.Action("Image", "Banner", new { area = string.Empty, id = bannerModel.Id }, "https"),
                ShowForSeconds = ShowForSeconds // TODO: Make this configurable? Somewhere?
            });

            return RedirectToAction(nameof(Index), new { message = $"Showing titlecard with ID {id}" });
        }

        // GET: BannerModels/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bannerModel = await _context.Banners
                .FirstOrDefaultAsync(m => m.Id == id);
            if (bannerModel == null)
            {
                return NotFound();
            }

            return View(bannerModel);
        }

        // GET: BannerModels/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: BannerModels/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,Subtitle")] BannerModel bannerModel)
        {
            if (ModelState.IsValid)
            {
                var file = Request.Form.Files.GetFile("Image");

                if (file != null)
                {
                    (bannerModel.Image, bannerModel.FileType) = await GetFileBytesAndContentType(file);
                }

                _context.Add(bannerModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(bannerModel);
        }

        // GET: BannerModels/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bannerModel = await _context.Banners.FindAsync(id);
            if (bannerModel == null)
            {
                return NotFound();
            }
            return View(bannerModel);
        }

        // POST: BannerModels/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,Subtitle")] BannerModel bannerModel)
        {
            if (id != bannerModel.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var file = Request.Form.Files.GetFile("Image");

                    if (file != null) {
                        (bannerModel.Image, bannerModel.FileType) = await GetFileBytesAndContentType(file);
                    }

                    _context.Update(bannerModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BannerModelExists(bannerModel.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(bannerModel);
        }

        // GET: BannerModels/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var bannerModel = await _context.Banners
                .FirstOrDefaultAsync(m => m.Id == id);
            if (bannerModel == null)
            {
                return NotFound();
            }

            return View(bannerModel);
        }

        // POST: BannerModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var bannerModel = await _context.Banners.FindAsync(id);
            _context.Banners.Remove(bannerModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BannerModelExists(int id)
        {
            return _context.Banners.Any(e => e.Id == id);
        }

        private static async Task<(byte[] imageBytes, FileTypes fileType)> GetFileBytesAndContentType(IFormFile file)
        {
            if (file == null)
            {
                throw new ArgumentNullException(nameof(file), "Cannot operate on `null` file");
            }

            if (file.Length == 0)
            {
                throw new ArgumentException("Cannot operate on file with length 0", nameof(file));
            }
            
            using var readStream = file.OpenReadStream();
            if (readStream.CanSeek)
                readStream.Seek(0, SeekOrigin.Begin);

            var imageBytes = new byte[file.Length];
            await readStream.ReadAsync(imageBytes, 0, imageBytes.Length);

            var fileType = file.ContentType switch
            {
                "image/bmp" => FileTypes.BMP,
                "image/gif" => FileTypes.GIF,
                "image/x-icon" => FileTypes.ICO,
                "image/jpeg" => FileTypes.JPEG,
                "image/png" => FileTypes.PNG,
                "image/svg+xml" => FileTypes.SVG,
                "image/tiff" => FileTypes.TIFF,
                "image/webp" => FileTypes.WebP,
                _ => FileTypes.Unknown
            };

            return (imageBytes, fileType);
        }
    }
}
