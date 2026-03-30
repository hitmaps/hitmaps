using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class CreateWalkthroughTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Walkthrough");

            migrationBuilder.CreateTable(
                name: "Walkthrough",
                schema: "Walkthrough",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MissionVariantId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Walkthrough", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Walkthrough_MissionVariant_MissionVariantId",
                        column: x => x.MissionVariantId,
                        principalTable: "MissionVariant",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Walkthrough_MissionVariantId",
                schema: "Walkthrough",
                table: "Walkthrough",
                column: "MissionVariantId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Walkthrough",
                schema: "Walkthrough");
        }
    }
}
