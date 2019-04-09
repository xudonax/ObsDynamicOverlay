using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.DAL.Models;

namespace ObsDynamicOverlay.DAL.DbContexts
{
    public class BannerDbContext : DbContext
    {
        public BannerDbContext(DbContextOptions<BannerDbContext> options) : base(options)
        { }

        public DbSet<BannerModel> Banners { get; set;}
    }
}
