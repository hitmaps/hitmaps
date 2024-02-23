using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class AddDisguiseAreaTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DisguiseArea",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DisguiseId = table.Column<int>(type: "int", nullable: false),
                    Level = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisguiseArea", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DisguiseArea_Disguise_DisguiseId",
                        column: x => x.DisguiseId,
                        principalTable: "Disguise",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DisguiseAreaVertex",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DisguiseAreaId = table.Column<int>(type: "int", nullable: false),
                    Latitude = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Longitude = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisguiseAreaVertex", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DisguiseAreaVertex_DisguiseArea_DisguiseAreaId",
                        column: x => x.DisguiseAreaId,
                        principalTable: "DisguiseArea",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DisguiseArea_DisguiseId",
                table: "DisguiseArea",
                column: "DisguiseId");

            migrationBuilder.CreateIndex(
                name: "IX_DisguiseAreaVertex_DisguiseAreaId",
                table: "DisguiseAreaVertex",
                column: "DisguiseAreaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DisguiseAreaVertex");

            migrationBuilder.DropTable(
                name: "DisguiseArea");
        }
    }
}
