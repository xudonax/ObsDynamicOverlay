using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.DAL.Models;
using ObsDynamicOverlay.Web.Business;

namespace ObsDynamicOverlay.Web.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class BannerModelsController : Controller
    {
        private readonly BannerContext _context;

        public BannerModelsController(BannerContext context)
        {
            _context = context;
        }

        // GET: BannerModels
        public async Task<IActionResult> Index()
        {
            return View(await _context.Banners.ToListAsync());
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
        public async Task<IActionResult> Create([Bind("Id,Title,Subtitle,Image")] BannerModel bannerModel)
        {
            if (ModelState.IsValid)
            {
                _context.Add(bannerModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(bannerModel);
        }

        // GET: BannerModels/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
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
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,Subtitle,Image")] BannerModel bannerModel)
        {
            if (id != bannerModel.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
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
    }
}
