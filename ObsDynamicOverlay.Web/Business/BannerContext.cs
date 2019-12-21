using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.Web.Models.Dal;

namespace ObsDynamicOverlay.Web.Business
{
    public class BannerContext : DbContext
    {
        public BannerContext(DbContextOptions<BannerContext> options) : base(options)
        { }

        public DbSet<BannerModel> Banners { get; set; }
    }
}
