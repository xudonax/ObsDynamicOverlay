using Microsoft.EntityFrameworkCore.Migrations;

namespace ObsDynamicOverlay.Web.Migrations
{
    public partial class AddFileType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FileType",
                table: "Banners",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileType",
                table: "Banners");
        }
    }
}
