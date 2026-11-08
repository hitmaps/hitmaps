using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class ChangeSvgColumnToTileType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TileType",
                table: "Mission",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");

            migrationBuilder.Sql("UPDATE [Mission] SET [TileType] = 'svg' WHERE [Svg] = 1");
            migrationBuilder.Sql("UPDATE [Mission] SET [TileType] = 'tile' WHERE [Svg] = 0");
            
            
            migrationBuilder.DropColumn(
                name: "Svg",
                table: "Mission");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Svg",
                table: "Mission",
                type: "bit",
                nullable: false,
                defaultValue: false);
            
            migrationBuilder.DropColumn(
                name: "TileType",
                table: "Mission");
        }
    }
}
