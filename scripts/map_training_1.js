var maptraining1 = L.map('maptraining1', {maxBoundsViscosity: 1}).setView([10.83, -53.78], 3);
maptraining1.zoomControl.setPosition('topright');
maptraining1.setMaxBounds([[-77.6, -236.6],[85.93, 144.14]]);
$("#level-0").addClass("active");

var tileLevels = L.layerGroup([
    mapLevel0base = mapLevel0mechanic = mapLevel0security = mapLevel0yachtcrew = mapLevel0bodyguard = mapLevel0norfolk = L.tileLayer('img/map_training1/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }).addTo(maptraining1),
    mapLevel1base = mapLevel1mechanic = mapLevel1security = mapLevel1yachtcrew = mapLevel1bodyguard = mapLevel1norfolk = L.tileLayer('img/map_training1/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel2base = mapLevel2security = mapLevel2yachtcrew = mapLevel2bodyguard = mapLevel2norfolk = L.tileLayer('img/map_training1/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel3base = mapLevel3security = mapLevel3yachtcrew = mapLevel3bodyguard = mapLevel3norfolk = L.tileLayer('img/map_training1/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),

    mapLevel0suit = L.tileLayer('img/map_training1/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel1suit = L.tileLayer('img/map_training1/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel2suit = mapLevel2mechanic = L.tileLayer('img/map_training1/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
	mapLevel3suit = mapLevel3mechanic = L.tileLayer('img/map_training1/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
]);

/* ==================================================================================================================================================================
   Level 0
   ================================================================================================================================================================== */

var level0other = L.layerGroup([
       
    L.marker([-35.4, -110.5], {icon: iconEnter, alt: "level0enter"}).bindLabel("Starting Location"),
    L.marker([-17.1, -105.9], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Location"),
    L.marker([-54.5, 0.8789], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Location"),

    L.marker([-9.96, 5.4492], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Hang on the Ledge"),

    L.marker([32.39, -94.39], {icon: iconPassage, alt: "level0passage"}).bindLabel("Window"),
    L.marker([-58.7, -78.92], {icon: iconPassage, alt: "level0passage"}).bindLabel("Window"),
    L.marker([-56.8, -82.26], {icon: iconPassage, alt: "level0passage"}).bindLabel("Window"),

    L.marker([13.92, -48.33], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([34.74, -14.58], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([-2.10, -37.79], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([-2.10, -4.042], {icon: iconStairsUp, alt: "level0stairsupdown"}),

]);

var level0weapons = L.layerGroup([

    L.marker([-37.9, -104.5], {icon: iconCoin, alt: "level0coin", title: "Weapons: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    //L.marker([-35.2, -104.5], {icon: iconLockpick, alt: "level0lockpick", title: "Weapons: Lockpick"}).bindLabel("Lockpick"),
    L.marker([40.71, -0.703], {icon: iconPoisons, alt: "level0weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    L.marker([-33.1, -104.5], {icon: iconRemoteExpl, alt: "level0remexpl", title: "Weapons: ICA Remote Explosive"}).bindLabel("ICA Remote Explosive").bindPopup(txtRemoteExplosive),
    L.marker([38.54, -43.24], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([20.63, -16.17], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([-5.26, -24.96], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([-17.4, -30.23], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([-5.26, -8.789], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([-25.1, -110.9], {icon: iconFirearm, alt: "level0firearm", title: "Weapons: Assault Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2").bindPopup(txtFusilG2),
    L.marker([-25.1, -107.4], {icon: iconFirearm, alt: "level0firearm", title: "Weapons: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
    L.marker([-25.1, -114.2], {icon: iconAmmo, alt: "level0ammo", title: "Weapons: Rifle Ammo"}).bindLabel("Rifle Ammo (x2)").bindPopup(txtAmmoRifle),
    L.marker([-25.1, -103.7], {icon: iconAmmo, alt: "level0ammo", title: "Weapons: Shotgun Ammo"}).bindLabel("Shotgun Ammo (x2)").bindPopup(txtAmmoShotgun),

    L.marker([-25.1, -23.37], {icon: iconWrench, alt: "level0wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([-29.2, -23.37], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([-55.7, -42.36], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

]);

var level0poi = L.layerGroup([

    L.marker([-60.9, -89.12], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([31.65, -19.16], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-17.1, -13.71], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot (x2)"),
    L.marker([-33.2, -8.085], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([-21.4, -29.53], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([53.74, -114.0], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Mechanic"}).bindLabel("Disguise: Mechanic").bindPopup("<img src='img/map_training_1/screenshots/disg_mechanic.jpg'><h2>Disguise</h2><h1>Mechanic</h1>"),
    L.marker([26.90, 0.3515], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Yacht Crew"}).bindLabel("Disguise: Yacht Crew").bindPopup("<img src='img/map_training_1/screenshots/disg_crew.jpg'><h2>Disguise</h2><h1>Yacht Crew</h1>"),

    L.marker([5.090, -59.41], {icon: iconNPC, alt: "level0npc", title: "NPC: Terry Norfolk"}).bindLabel("Terry Norfolk").bindPopup("<h2>NPC</h2><h1>Terry Norfolk</h1>"),

    L.marker([24.20, -25.13], {icon: iconDistraction, alt: "level0dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "all") ),
    L.marker([-33.2, 4.7460], {icon: iconDistraction, alt: "level0dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),

    L.marker([24.20, -16.34], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([-54.3, -52.73], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([34.74, -14.58], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),
    L.marker([-2.10, -37.79], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),
    L.marker([-2.10, -4.042], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),
    L.marker([13.92, -48.33], {icon: iconStairsDown, alt: "level1stairsupdown"}),

    L.marker([49.49, 3.6914], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Hang on the Ledge"),
    L.marker([-9.96, 5.4492], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Hang on the Ledge"),

]);

var level1weapons = L.layerGroup([

    L.marker([34.74, -11.42], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([23.24, -27.94], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([5.790, -14.76], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([-1.93, -15.64], {icon: iconHammer, alt: "level1hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([-6.83, -20.74], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level1poi = L.layerGroup([

    L.marker([31.65, -23.02], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([13.92, -18.28], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([10.14, -20.56], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    
    L.marker([34.88, -18.10], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([4.214, -22.85], {icon: iconPoison, alt: "level1poison", title: "Poison: Yacht Crew"}).bindLabel("Kitchen Pot (Yacht Crew)").bindPopup( popPoison("Kitchen Pot", "Yacht Crew", "Yacht Crew", "note") ),
    L.marker([-17.4, -20.56], {icon: iconPoison, alt: "level1poison", title: "Poison: Terry Norfolk"}).bindLabel("Glass of Red Wine (Terry Norfolk)").bindPopup( popPoison("Glass of Red Wine", "Terry Norfolk", "Yacht Crew", "note") ),

    L.marker([23.24, -20.91], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='susp'>Suspicious in any disguise</p>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([25.64, -42.53], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([25.64, 0.8789], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([34.74, -14.58], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([-2.10, -37.79], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([-2.10, -4.042], {icon: iconStairsDown, alt: "level2stairsupdown"}),

    L.marker([32.69, -35.85], {icon: iconPassage, alt: "level2passage"}).bindLabel("Window"),

    L.marker([49.49, 3.6914], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Hang on the Ledge"),

]);

var level2weapons = L.layerGroup([

    L.marker([1.757, -11.07], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([17.47, -15.82], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([22.43, -26.01], {icon: iconBust, alt: "level2bust", title: "Weapons: Bust"}).bindLabel("Bust").bindPopup(txtBust),

]);

var level2poi = L.layerGroup([

    L.marker([31.35, -18.98], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([-20.7, -36.73], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Yacht Crew Member").bindPopup("<h2>Blend In</h2><h1>Yacht Crew</h1>"),

    L.marker([-17.6, -8.789], {icon: iconSabotage, alt: "level2sab-liferaft", title: "Sabotage: Life Raft"}).bindLabel("Life Raft").bindPopup( popUp("img", "Sabotage", "Life Raft", "Break Mounting", "req", "all", "Mounting is on the third floor", "ingame", "desc") ),
    L.marker([-17.6, -31.28], {icon: iconSabotage, alt: "level2sab-liferaft", title: "Sabotage: Life Raft"}).bindLabel("Life Raft").bindPopup( popUp("img", "Sabotage", "Life Raft", "Break Mounting", "req", "all", "Mounting is on the third floor", "ingame", "desc") ),

    L.marker([-25.1, -36.56], {icon: iconPoison, alt: "level2poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Unknown", "Yacht Crew", "note") ),
    L.marker([-21.7, -24.96], {icon: iconPoison, alt: "level2poison", title: "Poison: Kalvin Ritter"}).bindLabel("Glass of Red Wine (Kalvin Ritter)").bindPopup( popPoison("Glass of Red Wine", "Kalvin Ritter", "Yacht Crew", "note") ),

    L.marker([29.84, -31.81], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([1.230, -21.26], {icon: iconExit, alt: "level3exit"}).bindLabel("Exit Location"),

    L.marker([25.64, -42.53], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([25.64, 0.8789], {icon: iconStairsDown, alt: "level3stairsupdown"}),

]);

var level3weapons = L.layerGroup([

    L.marker([24.68, -18.28], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([34.30, -15.82], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

]);

var level3poi = L.layerGroup([

    L.marker([30.29, -28.47], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([-17.6, -8.789], {icon: iconSabotage, alt: "level3sab-liferaft", title: "Sabotage: Life Raft"}).bindLabel("Life Raft").bindPopup( popUp("img", "Sabotage", "Life Raft", "Break Mounting", "req", "all", "note", "ingame", "desc") ),
    L.marker([-17.6, -31.28], {icon: iconSabotage, alt: "level3sab-liferaft", title: "Sabotage: Life Raft"}).bindLabel("Life Raft").bindPopup( popUp("img", "Sabotage", "Life Raft", "Break Mounting", "req", "all", "note", "ingame", "desc") ),

]);
    
var allMarkers = L.layerGroup([

    level0other, level0weapons, level0poi,
    level1other, level1weapons, level1poi,
    level2other, level2weapons, level2poi,
    level3other, level3weapons, level3poi
]);