using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ObsDynamicOverlay.Web.Migrations
{
    public partial class AddConstraints : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Banners",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subtitle",
                table: "Banners",
                maxLength: 150,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Banners",
                maxLength: 1048576,
                nullable: false,
                defaultValue: new byte[] {  });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Banners");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Banners",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "Subtitle",
                table: "Banners",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 150);
        }
    }
}
