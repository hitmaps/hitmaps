using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class CreateLocationAndMissionTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GameId = table.Column<int>(type: "int", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DestinationCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Order = table.Column<int>(type: "int", nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BackgroundUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Location_Game_GameId",
                        column: x => x.GameId,
                        principalTable: "Game",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Mission",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LocationId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Order = table.Column<int>(type: "int", nullable: false),
                    MapFolderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MapCenterLatitude = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MapCenterLongitude = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LowestFloorNumber = table.Column<int>(type: "int", nullable: false),
                    HighestFloorNumber = table.Column<int>(type: "int", nullable: false),
                    StartingFloorNumber = table.Column<int>(type: "int", nullable: false),
                    TopLeftCoordinateLatitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TopLeftCoordinateLongitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BottomRightCoordinateLatitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BottomRightCoordinateLongitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SatelliteView = table.Column<bool>(type: "bit", nullable: false),
                    AvailableAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ExpiresAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    MissionType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TileUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BackgroundUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Svg = table.Column<bool>(type: "bit", nullable: false),
                    MinZoom = table.Column<int>(type: "int", nullable: false),
                    MaxZoom = table.Column<int>(type: "int", nullable: false),
                    BoundingBoxTopLeftLatitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BoundingBoxTopLeftLongitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BoundingBoxBottomRightLatitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BoundingBoxBottomRightLongitude = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mission", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mission_Location_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Location",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Location_GameId",
                table: "Location",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_Mission_LocationId",
                table: "Mission",
                column: "LocationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mission");

            migrationBuilder.DropTable(
                name: "Location");
        }
    }
}
