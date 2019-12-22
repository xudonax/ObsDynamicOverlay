using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Debug;
using ObsDynamicOverlay.Web.Business;
using ObsDynamicOverlay.Web.Hubs;

namespace ObsDynamicOverlay.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = _ => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<BannerContext>(options => options.UseSqlServer(Configuration.GetConnectionString("BannerDatabase")));
            services.AddDbContext<IdentityContext>(options => options.UseSqlServer(Configuration.GetConnectionString("IdentityDatabase")));
            services.AddDefaultIdentity<IdentityUser>()
                .AddEntityFrameworkStores<IdentityContext>();
            services
                .AddHsts(options =>
                {
                    options.Preload = true;
                    options.IncludeSubDomains = true;
                    options.MaxAge = TimeSpan.FromDays(180);
                })
                .AddSession(options => options.Cookie.IsEssential = true)
                .AddSignalR();

#if DEBUG
            services.AddLogging(builder =>
             {
                 builder
                    .AddConsole()
                    .AddDebug()
                    .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Debug)
                    .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Debug);
             });
#else
            services.AddLogging(builder =>
                {
                    builder
                        .AddConsole()
                        .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Information)
                        .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Information);
                });
#endif

            services.AddControllersWithViews();
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
#if DEBUG
            app.UseDeveloperExceptionPage();
            app.UseDatabaseErrorPage();
#else
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
#endif

            app.UseHttpsRedirection()
                .UseStaticFiles()
                .UseDefaultFiles()
                .UseRouting()
                .UseAuthentication()
                .UseAuthorization()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapControllerRoute(
                        name: "areas",
                        pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
                    endpoints.MapControllerRoute(
                        name: "default",
                        pattern: "{controller=Home}/{action=Index}/{id?}");
                    endpoints.MapRazorPages();
                    endpoints.MapHub<TitleCardHub>("/hub");
                });

            /*app.UseMvc(routes =>
            {
                routes.MapRoute(
                  name: "areas",
                  template: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
                );
            });*/
        }
    }
}
