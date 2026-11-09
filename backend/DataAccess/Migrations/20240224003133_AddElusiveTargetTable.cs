using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class AddElusiveTargetTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ElusiveTarget",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MissionId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Briefing = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VideoBriefingUrl = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    BeginsAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndsAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    ComingNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    PlayableNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    SevenDaysLeftNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    FiveDaysLeftNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    ThreeDaysLeftNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    OneDayLeftNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    EndNotificationSent = table.Column<bool>(type: "bit", nullable: false),
                    Reactivated = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ElusiveTarget", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ElusiveTarget_Mission_MissionId",
                        column: x => x.MissionId,
                        principalTable: "Mission",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ElusiveTarget_MissionId",
                table: "ElusiveTarget",
                column: "MissionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ElusiveTarget");
        }
    }
}
