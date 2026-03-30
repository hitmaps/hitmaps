using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class CreateWalkthroughStepTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WalkthroughStep",
                schema: "Walkthrough",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WalkthroughId = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Order = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WalkthroughStep", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WalkthroughStep_Walkthrough_WalkthroughId",
                        column: x => x.WalkthroughId,
                        principalSchema: "Walkthrough",
                        principalTable: "Walkthrough",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WalkthroughStepToNode",
                columns: table => new
                {
                    WalkthroughStepId = table.Column<int>(type: "int", nullable: false),
                    NodeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WalkthroughStepToNode", x => new { x.NodeId, x.WalkthroughStepId });
                    table.ForeignKey(
                        name: "FK_WalkthroughStepToNode_Node_NodeId",
                        column: x => x.NodeId,
                        principalTable: "Node",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WalkthroughStepToNode_WalkthroughStep_WalkthroughStepId",
                        column: x => x.WalkthroughStepId,
                        principalSchema: "Walkthrough",
                        principalTable: "WalkthroughStep",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WalkthroughStep_WalkthroughId",
                schema: "Walkthrough",
                table: "WalkthroughStep",
                column: "WalkthroughId");

            migrationBuilder.CreateIndex(
                name: "IX_WalkthroughStepToNode_WalkthroughStepId",
                table: "WalkthroughStepToNode",
                column: "WalkthroughStepId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WalkthroughStepToNode");

            migrationBuilder.DropTable(
                name: "WalkthroughStep",
                schema: "Walkthrough");
        }
    }
}
