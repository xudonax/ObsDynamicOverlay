using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ObsDynamicOverlay.Web.Migrations
{
    public partial class InitialBannerContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Banners",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(maxLength: 100, nullable: false),
                    Subtitle = table.Column<string>(maxLength: 150, nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false, defaultValueSql: "getutcdate()"),
                    Image = table.Column<byte[]>(maxLength: 1048576, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banners", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Banners");
        }
    }
}
