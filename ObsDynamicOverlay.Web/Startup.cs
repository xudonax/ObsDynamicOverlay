using System;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Debug;
using ObsDynamicOverlay.DAL.DbContexts;
using ObsDynamicOverlay.Web.Business.Hubs;

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
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services
                .AddDbContext<BannerDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("BannerDatabase")))
                .AddHsts(options =>
                {
                    options.Preload = true;
                    options.IncludeSubDomains = true;
                    options.MaxAge = TimeSpan.FromDays(180);
                })
                .AddSession(options =>
                {
                    options.Cookie.IsEssential = true;
                })
                .AddLogging(builder =>
                {
                    builder.AddConsole()
                        .AddDebug()
                        .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Debug)
                        .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Debug);
                })
                .AddSignalRCore();

            services
                .AddMvc()
                .AddNewtonsoftJson();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection()
                .UseStaticFiles()
                .UseDefaultFiles()
                .UseCookiePolicy()
                .UseAuthorization()
                .UseRouting(routes =>
                {
                    routes.MapControllerRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                })
                .UseSignalR(options =>
                {
                    options.MapHub<ChatHub>("/hub");
                });

        }
    }
}
