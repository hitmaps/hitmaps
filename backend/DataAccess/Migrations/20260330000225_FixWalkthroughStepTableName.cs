using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class FixWalkthroughStepTableName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "WalkthroughStepToNode",
                newName: "WalkthroughStepToNode",
                newSchema: "Walkthrough");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "WalkthroughStepToNode",
                schema: "Walkthrough",
                newName: "WalkthroughStepToNode");
        }
    }
}
