using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.DAL.Models;

namespace ObsDynamicOverlay.Web.Business
{
    public class BannerContext : DbContext
    {
        public BannerContext(DbContextOptions<BannerContext> options) : base(options)
        { }

        public DbSet<BannerModel> Banners { get; set; }
    }
}
