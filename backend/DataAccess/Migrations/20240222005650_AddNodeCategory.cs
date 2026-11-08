using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class AddNodeCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NodeCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Group = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Subgroup = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Note = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Icon = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    RequireName = table.Column<bool>(type: "bit", nullable: false),
                    RequireAction = table.Column<bool>(type: "bit", nullable: false),
                    RequireTarget = table.Column<bool>(type: "bit", nullable: false),
                    RequirePickup = table.Column<bool>(type: "bit", nullable: false),
                    RequireDirection = table.Column<bool>(type: "bit", nullable: false),
                    Searchable = table.Column<bool>(type: "bit", nullable: false),
                    Collapsible = table.Column<bool>(type: "bit", nullable: false),
                    ForSniperAssassin = table.Column<bool>(type: "bit", nullable: false),
                    ForMission = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NodeCategory", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NodeCategory");
        }
    }
}
