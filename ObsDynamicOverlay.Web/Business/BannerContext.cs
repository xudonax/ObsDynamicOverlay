using Microsoft.EntityFrameworkCore;
using ObsDynamicOverlay.DAL.Models;

namespace ObsDynamicOverlay.Web.Business
{
    public class BannerContext : DbContext
    {
        public BannerContext(DbContextOptions<BannerContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BannerModel>()
                .Property(b => b.DateAdded)
                .HasDefaultValueSql("getutcdate()");

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<BannerModel> Banners { get; set; }
    }
}
