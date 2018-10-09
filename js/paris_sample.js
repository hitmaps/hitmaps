var mapparis = L.map('mapparis').setView([63.074865690586634, -29.53125], 4);
mapparis.zoomControl.setPosition('topright');
mapparis.setMaxBounds([[-40.71, -215.50],[86.34, 144.66]]);
$("#level-1").addClass("active");

var tileLevels = L.layerGroup([
	mapLevel0base = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1base = L.tileLayer('img/map_paris/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapparis),
	mapLevel2base = L.tileLayer('img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3base = L.tileLayer('img/map_paris/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0suit = L.tileLayer('img/map_paris/lvl_0/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = L.tileLayer('img/map_paris/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2suit = L.tileLayer('img/map_paris/lvl_2/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = L.tileLayer('img/map_paris/lvl_3/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0chef = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1chef = L.tileLayer('img/map_paris/lvl_1/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2chef = L.tileLayer('img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3chef = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0palace = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1palace = L.tileLayer('img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2palace = L.tileLayer('img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3palace = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0stylist = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1stylist = L.tileLayer('img/map_paris/lvl_1/stylist/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2stylist = L.tileLayer('img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3stylist = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0crew = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1crew = L.tileLayer('img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2crew = L.tileLayer('img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3crew = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0security = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1security = L.tileLayer('img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2security = L.tileLayer('img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3security = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0auction = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1auction = L.tileLayer('img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2auction = L.tileLayer('img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3auction = L.tileLayer('img/map_paris/lvl_3/auct/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0cicada = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1cicada = L.tileLayer('img/map_paris/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2cicada = L.tileLayer('img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3cicada = L.tileLayer('img/map_paris/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0helmut = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1helmut = L.tileLayer('img/map_paris/lvl_1/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2helmut = L.tileLayer('img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3helmut = L.tileLayer('img/map_paris/lvl_3/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0sheikh = L.tileLayer('img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1sheikh = L.tileLayer('img/map_paris/lvl_1/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2sheikh = L.tileLayer('img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3sheikh = L.tileLayer('img/map_paris/lvl_3/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0vampire = L.tileLayer('img/map_paris/lvl_0/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1vampire = L.tileLayer('img/map_paris/lvl_1/guest/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2vampire = L.tileLayer('img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3vampire = L.tileLayer('img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
]);

/* ==================================================================================================================================================================
   Level 0
   ================================================================================================================================================================== */

var level0other = L.layerGroup([

	L.marker([60.99, -27.55], {icon: iconIcaStash, alt: "level0icastash", title: "Small Agency Pickup: Pantry"}).bindLabel("Small Agency Pickup: Pantry").bindPopup("<img src='img/map_paris/screenshots/ica_pantry.jpg'><h2>Small Agency Pickup</h2><h1>Pantry</h1>"),

	L.marker([57.68, -42.40], {icon: iconEnter, alt: "level0enter", title: "Starting Location: Undercover in Kitchen"}).bindLabel("Starting Location: Undercover in Kitchen").bindPopup("<img src='img/map_paris/screenshots/enter_waiter.jpg'><h2>Starting Location</h2><h1>Undercover in Kitchen</h1>"),
	L.marker([65.29, -9.40], {icon: iconEnter, alt: "level0enter", title: "Starting Location: Undercover in Locker Room"}).bindLabel("Starting Location: Undercover in Locker Room").bindPopup("<img src='img/map_paris/screenshots/enter_chef.jpg'><h2>Starting Location</h2><h1>Undercover in Locker Room</h1>"),
	L.marker([65.622, -41.57], {icon: iconExit, alt: "level0exit", title: "Exit Location: Basement"}).bindLabel("Exit Location: Basement").bindPopup("<img src='img/map_paris/screenshots/exit_basement.jpg'><h2>Exit Location</h2><h1>Basement</h1>"),

	L.marker([74.81, -68.59], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Way Up: Ladder").bindPopup("<h2>Way Up</h2><h1>Ladder</h1>"),

	L.marker([63.03, -2.02], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([62.63, -36.9], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([53.01, -33.39], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([53.85, -3.51], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([69.99, -3.42], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([70.37, -34.10], {icon: iconStairsUp, alt: "level0stairsupdown"}),
	L.marker([71.82, -62.40], {icon: iconStairsUp, alt: "level0stairsupdown"}),

]);

var level0weapons = L.layerGroup([

	L.marker([63.60, -25.79], {icon: iconPoisons, alt: "level0weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

	// Explosive
	L.marker([61, -22.98], {icon: iconPropane, alt: "level0propane", title: "Weapons: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),
	L.marker([60.41, -36.78], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([59.37, -26.76], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([69.83, -31.81], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([64.26, -21.04], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([59.91, -12.91], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([62.65, -3.999], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

	// Firearm
	L.marker([56.55, -13.10], {icon: iconFirearm, alt: "level0firearm", title: "Weapons: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
	L.marker([56.55, -12.30], {icon: iconFirearm, alt: "level0firearm", title: "Weapons: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),
	L.marker([56.00, -13.10], {icon: iconAmmo, alt: "level0ammo", title: "Weapons: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),
	L.marker([56.00, -12.30], {icon: iconAmmo, alt: "level0ammo", title: "Weapons: Shotgun Ammo"}).bindLabel("Shotgun Ammo").bindPopup(txtAmmoShotgun),

	// Melee
	L.marker([73.72, -71.89], {icon: iconBrick, alt: "level0brick", title: "Weapons: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
	L.marker([59.01, -42.14], {icon: iconCleaver, alt: "level0cleaver", title: "Weapons: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
	L.marker([66.30, -9.84], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([65.47, -22.76], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([73.77, -69.78], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([54.23, -31.68], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([68.33, -5.22], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([63.50, -8.70], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([57.39, -35.11], {icon: iconFirePoker, alt: "level0firepoker", title: "Weapons: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
	L.marker([57.25, -40.60], {icon: iconKnife, alt: "level0knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([62, -15.29], {icon: iconKnife, alt: "level0knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([63.60, -22.98], {icon: iconPipe, alt: "level0pipe", title: "Weapons: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
	L.marker([57.93, -8.78], {icon: iconScissors, alt: "level0scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([61.14, -41.61], {icon: iconWrench, alt: "level0wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([61.81, -5.22], {icon: iconWrench, alt: "level0wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level0poi = L.layerGroup([

	L.marker([58.40, -27.94], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([62.32, -38.40], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([68.38, -30.49], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([62.85, -22.98], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([59.51, -15.38], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([60.32, -16.87], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([65.34, -7.11], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([64.60, -10.85], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([62.20, -10.85], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([61.12, -37.22], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

	L.marker([58.74, -36.21], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([61.58, -37.22], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([54.82, -11.46], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

	L.marker([62.20, -8.85], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Palace Staff"}).bindLabel("Disguise: Palace Staff").bindPopup( popUp("palace", "Disguise", "Palace Staff", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([57.32, -41.57], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([67.06, -30.49], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),

	L.marker([63.41, -38.40], {icon: iconSabotage, alt: "level0sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
	L.marker([58.75, -39.30], {icon: iconSabotage, alt: "level0sab-leak", title: "Sabotage: Stove"}).bindLabel("Stove (x4)").bindPopup( popGlobal(sabStove, "all") ),
	L.marker([62.12, -20.96], {icon: iconSabotage, alt: "level0sab-leak", title: "Sabotage: Stove"}).bindLabel("Stove (x2)").bindPopup( popGlobal(sabStove, "all") ),

	L.marker([58.75, -37.75], {icon: iconPoison, alt: "level0poison", title: "Poison: Chef"}).bindLabel("Kitchen Pot (x2) (Chef)").bindPopup( popPoison("Kitchen Pot", "Chef", "Chef", "note") ),
	L.marker([61.16, -16.91], {icon: iconPoison, alt: "level0poison", title: "Poison: Crew Member"}).bindLabel("Plate of Food (Crew Member)").bindPopup( popPoison("Plate of Food", "Crew Member", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([63, -16.91], {icon: iconPoison, alt: "level0poison", title: "Poison: Security Guard"}).bindLabel("Coffee Glass (Security Guard)").bindPopup( popPoison("Coffee Glass", "Security Guard", "Palace Staff / Auction Staff / Chef", "note") ),

	L.marker([60.30, -37.8], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([63.35, -15.29], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "all") ),
	L.marker([58.10, -14.23], {icon: iconDistraction, alt: "level0dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "Security") ),

	L.marker([62.2, -22.98], {icon: iconItem, alt: "level0item", title: "Item: Palace Master Key"}).bindLabel("Palace Master Key").bindPopup( popUp("masterkey", "Item", "Palace Master Key", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([62.26, -41.79], {icon: iconIntel, alt: "level0intel", title: "Intel: Cocktail recipe"}).bindLabel("Cocktail Recipe").bindPopup( popUp("recipe", "Intel", "Cocktail Recipe", "use", "req", "susp", "note", "The recipe for Bare Knuckle Boxer. According to margin notes, this is Victor Novikov's favorite cocktail.</p>", "desc") ),
	L.marker([56.93, -8.78], {icon: iconIntel, alt: "level0intel", title: "Intel: Evacuation Plan"}).bindLabel("Evacuation Plan").bindPopup( popUp("evac", "Intel", "Evacuation Plan", "use", "req", "susp", "note", "A IAGO security operations protocol. The numerical code to evacuate Novikov and Margolis and bring them to the safe room is '17'. However, only Novikov's personal bodyguard, Kurt Donovan, can authorize the procedure.</p>", "desc") ),
	L.marker([70.37, -30.76], {icon: iconIntel, alt: "level0intel", title: "Intel: Novikov Favorite Cocktail"}).bindLabel("Novikov's Favorite Cocktail").bindPopup( popUp("waiters", "Intel", "Novikov's Favorite Cocktail", "use", "req", "susp", "note", "Novikov's favourite drink is a rather obscure cocktail know as a Bare Knuckle Boxer. The recipe has been misplaced somewhere in the basement.</p>", "desc") ),

	L.marker([58.83, -10.81], {icon: iconEvidence, alt: "level0evidence", title: "Camera Recorder: Palace"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),

	L.marker([72.58, -62.44], {icon: iconLocked, alt: "level0locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p><p class='note'>Already opened if starting on the Pile-Driver Barge</p>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

	L.marker([72.01, -58.09], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Shed"}).bindLabel("Large Agency Pickup: Shed").bindPopup("<img src='img/map_paris/screenshots/ica_shed.jpg'><h2>Large Agency Pickup</h2><h1>Shed</h1>"),
	L.marker([63.03, -4.2], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Basement Stairwell"}).bindLabel("Large Agency Pickup: Basement Stairwell").bindPopup("<img src='img/map_paris/screenshots/ica_basement.jpg'><h2>Large Agency Pickup</h2><h1>Basement Stairwell</h1>"),
	L.marker([44.15, -18.72], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Logistics Trailer"}).bindLabel("Large Agency Pickup: Logistics Trailer").bindPopup("<img src='img/map_paris/screenshots/ica_trailer.jpg'><h2>Large Agency Pickup</h2><h1>Logistics Trailer</h1>"),

	L.marker([63.81, 46.58], {icon: iconEnter, alt: "level1enter", title: "Starting Location: Main Entrance"}).bindLabel("Starting Location: Main Entrance").bindPopup("<img src='img/map_paris/screenshots/enter_main.jpg'><h2>Starting Location</h2><h1>Main Entrance</h1>"),
	L.marker([74.74, -71.32], {icon: iconEnter, alt: "level1enter", title: "Starting Location: Pile-Driver Barge"}).bindLabel("Starting Location: Pile-Driver Barge").bindPopup("<img src='img/map_paris/screenshots/enter_barge.jpg'><h2>Starting Location</h2><h1>Pile-Driver Barge</h1>"),
	L.marker([55.62, -24.16], {icon: iconEnter, alt: "level1enter", title: "Starting Location: Undercover in Dressing Area"}).bindLabel("Starting Location: Undercover in Dressing Area").bindPopup("<img src='img/map_paris/screenshots/enter_dressing.jpg'><h2>Starting Location</h2><h1>Undercover in Dressing Area</h1>"),
	L.marker([72.26, -16.96], {icon: iconEnter, alt: "level1enter", title: "Starting Location: Palace Garden"}).bindLabel("Starting Location: Palace Garden").bindPopup("<img src='img/map_paris/screenshots/enter_party.jpg'><h2>Starting Location</h2><h1>Palace Garden</h1>"),
	L.marker([61.81, 46.58], {icon: iconExit, alt: "level1exit", title: "Exit Location: Main Gates"}).bindLabel("Exit Location: Main Gates").bindLabel("Exit Location: Main Gates").bindPopup("<img src='img/map_paris/screenshots/exit_main.jpg'><h2>Exit Location</h2><h1>Main Gates</h1>"),
	L.marker([73.15, 46.66], {icon: iconExit, alt: "level1exit", title: "Exit Location: North Gates"}).bindLabel("Exit Location: North Gates").bindLabel("Exit Location: North Gates").bindPopup("<img src='img/map_paris/screenshots/exit_gatesnorth.jpg'><h2>Exit Location</h2><h1>North Gates</h1>"),
	L.marker([44.71, 46.66], {icon: iconExit, alt: "level1exit", title: "Exit Location: South Gates"}).bindLabel("Exit Location: South Gates").bindLabel("Exit Location: South Gates").bindPopup("<img src='img/map_paris/screenshots/exit_gatessouth.jpg'><h2>Exit Location</h2><h1>South Gates</h1>"),
	L.marker([63.35, -72.77], {icon: iconExit, alt: "level1exit", title: "Exit Location: Helicopter"}).bindLabel("Exit Location: Helicopter").bindLabel("Exit Location: Helicopter").bindPopup("<img src='img/map_paris/screenshots/exit_heli.jpg'><h2>Exit Location</h2><h1>Helicopter</h1>"),
	L.marker([58.63, -99.66], {icon: iconExit, alt: "level1exit", title: "Exit Location: Boat"}).bindLabel("Exit Location: Boat").bindLabel("Exit Location: Speedboat").bindPopup("<img src='img/map_paris/screenshots/exit_speedboat.jpg'><h2>Exit Location</h2><h1>Speedboat</h1><p class='req'>Requires Speedboat Keys</p>"),

	L.marker([74.81, -68.59], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Ladder").bindPopup("<h2>Way Down</h2><h1>Ladder</h1>"),
	L.marker([53.33, -41.74], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([52.64, -3.77], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-2</h1>"),
	L.marker([59.93, -49.30], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([67.30, -47.28], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),

	L.marker([56.12, -1.09], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([75.88, 24.78], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([70.94, -56.03], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([48.37, -43.59], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([49.95, -45.65], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([53.85, 20.30], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
	L.marker([39.50, 20.21], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
	L.marker([75.43, 28.82], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
	L.marker([46.31, -51.76], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
	L.marker([57.37, -88.33], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),

	L.marker([69.47, -44.82], {icon: iconStairsUp, alt: "level1stairsupdown"}),
	L.marker([54.67, -44.73], {icon: iconStairsUp, alt: "level1stairsupdown"}),
	L.marker([63.03, -2.02], {icon: iconStairsUp, alt: "level1stairsupdown"}),
	L.marker([53.01, -33.39], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([53.85, -3.51], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([69.99, -3.42], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([70.37, -34.10], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([63.07, -91.75], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([71.69, -62.49], {icon: iconStairsDown, alt: "level1stairsupdown"}),
	L.marker([62.5, -36.1], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),

]);

var level1weapons = L.layerGroup([

	L.marker([46.92, -21.26], {icon: iconPoisons, alt: "level1weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
	L.marker([46.89, -45.39], {icon: iconPoisons, alt: "level1weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
	L.marker([69.70, -33.26], {icon: iconPoisons, alt: "level1weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison (x2)").bindPopup(txtRatPoison),

	// Explosive
	L.marker([75.44, 23.07], {icon: iconPropane, alt: "level1propane", title: "Weapons: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
	L.marker([69.70, -36.16], {icon: iconPropane, alt: "level1propane", title: "Weapons: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),
	L.marker([71.24, -57.26], {icon: iconPropane, alt: "level1propane", title: "Weapons: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
	L.marker([65.80, -11.42], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([67.08, -32.12], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([60.86, -37.26], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([56.89, -40.82], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([67.95, -40.82], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

	// Melee
	L.marker([68.20, 14.85], {icon: iconCoin, alt: "level1coin", title: "Weapons: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
	L.marker([56.09, -33.70], {icon: iconCoin, alt: "level1coin", title: "Weapons: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
	L.marker([66.51, -50.27], {icon: iconCoin, alt: "level1coin", title: "Weapons: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
	L.marker([59.88, 18.72], {icon: iconBattleAxe, alt: "level1battleaxe", title: "Weapons: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
	L.marker([68.15, 10.37], {icon: iconBattleAxe, alt: "level1battleaxe", title: "Weapons: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
	L.marker([58.51, -20.13], {icon: iconBattleAxe, alt: "level1battleaxe", title: "Weapons: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
	L.marker([76.22, 27.50], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([55.078, -0.26], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([56.72, 19.95], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([72.89, -51.98], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([49.72, -45.04], {icon: iconFireAxe, alt: "level1fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([59.71, -11.16], {icon: iconFireAxe, alt: "level1fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([66.00, -30.45], {icon: iconFireAxe, alt: "level1fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([39.30, -18.72], {icon: iconHammer, alt: "level1hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([59.64, -30.58], {icon: iconHammer, alt: "level1hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([71.60, -58.13], {icon: iconHammer, alt: "level1hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([37.92, 7.80], {icon: iconHatchet, alt: "level1hatchet", title: "Weapons: Hatchet"}).bindLabel("Hatchet").bindPopup(txtHatchet),
	L.marker([73.49, -59.76], {icon: iconHatchet, alt: "level1hatchet", title: "Weapons: Hatchet"}).bindLabel("Hatchet").bindPopup(txtHatchet),
	L.marker([69.71, -29.83], {icon: iconKnife, alt: "level1knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([47.21, -35.85], {icon: iconKnife, alt: "level1knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([67.54, -35], {icon: iconKnife, alt: "level1knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([68.5, -35], {icon: iconKnife, alt: "level1knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([68.5, -33.5], {icon: iconKnife, alt: "level1knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([66.42, 45.57], {icon: iconPipe, alt: "level1pipe", title: "Weapons: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
	L.marker([66.39, -1.75], {icon: iconPipe, alt: "level1pipe", title: "Weapons: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
	L.marker([76.22, 22.50], {icon: iconPipe, alt: "level1pipe", title: "Weapons: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
	L.marker([55.99, 11.46], {icon: iconSaber, alt: "level1saber", title: "Weapons: Saber"}).bindLabel("Saber").bindPopup(txtSaber),
	L.marker([58.51, -22.13], {icon: iconSaber, alt: "level1saber", title: "Weapons: Saber"}).bindLabel("Saber").bindPopup(txtSaber),
	L.marker([65.98, -0.57], {icon: iconScissors, alt: "level1scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([55.60, -25.66], {icon: iconScissors, alt: "level1scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([59, -18.54], {icon: iconScissors, alt: "level1scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([56.77, -18.76], {icon: iconScissors, alt: "level1scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),	
	L.marker([76.17, -30.54], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([52.96, 17.57], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([49.21, -0.61], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([39.84, -16.78], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([49.81, -11.51], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([48.69, -42.89], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([66.65, 17.66], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([64.92, -30.10], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([60.19, -33.83], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([52.53, -67.93], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([59.10, -1.18], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([75.73, 23.46], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([37.92, 9.50], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([47.81, -11.51], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([46.19, -27.33], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([48.98, -44.34], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
	L.marker([57.72, -71.27], {icon: iconWrench, alt: "level1wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level1poi = L.layerGroup([

	L.marker([39.23, 33.70], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([64.09, -5.75], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([61.93, -5.75], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([76.17, -26.93], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([69.345, -31.02], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([59.60, -4.26], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([76.22, 25.50], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([54.57, 17.40], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([41.77, -20.39], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([51.72, -27.07], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([46.67, -30.32], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([47.33, -47.90], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.63, 19.99], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([69.39, -32.51], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([65, -34.62], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([65, -35.81], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.67, -32.29], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([53.64, -25.48], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([55.00, -11.73], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.5, -18.54], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([72.01, -54.31], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([70.21, -77.29], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

	L.marker([68.17, -0.52], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([68.17, -4.25], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([56.55, -4.08], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([57.30, -0.26], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([66.63, -32.25], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Garbage Can"),
	L.marker([66.63, -36.95], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Garbage Can"),
	L.marker([68.87, -38.80], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([64.28, -37.22], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([54.62, -22.98], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([58.97, -25.5], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([57.46, -31.59], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([58.97, -27.77], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
	L.marker([73.89, -59.50], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Garbage Can"),

    L.marker([65.89, -4.262], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([46.89, -46.36], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([71.20, -54.36], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([75.40, 27.026], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

	L.marker([47.15, 4.17], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Palace Staff"}).bindLabel("Disguise: Palace Staff").bindPopup( popUp("palace", "Disguise", "Palace Staff", "use", "req", "susp", "note", "ingame", "desc") ),
	L.marker([48.86, -21.00], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Stylist"}).bindLabel("Disguise: Stylist").bindPopup( popUp("stylist", "Disguise", "Stylist", "use", "req", "susp", "note", "ingame", "desc") ),
	L.marker([58.42, -27.33], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Stylist"}).bindLabel("Disguise: Stylist").bindPopup( popUp("stylist", "Disguise", "Stylist", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([66.19, -64.51], {icon: iconNPC, alt: "level1npc", title: "NPC: Helmut Kruger"}).bindLabel("Helmut Kruger").bindPopup( popUp("img", "NPC", "Helmut Kruger", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([56.87, -29.53], {icon: iconNPC, alt: "level1npc", title: "NPC: Sebastian Sato"}).bindLabel("Sebastian Sato").bindPopup( popUp("img", "NPC", "Sebastian Sato", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([72.68, -6.987], {icon: iconNPC, alt: "level1npc", title: "NPC: Max Decker"}).bindLabel("Max Decker").bindPopup( popUp("img", "NPC", "Max Decker", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([67.60, -5.75], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([71.92, -6.76], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: Guest").bindPopup("<h2>Blend In</h2><h1>Guest</h1>"),
	L.marker([72.34, -7.99], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([67.60, -13.88], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([68.83, -37.17], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([52.18, -72.72], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In: CICADA Agent").bindPopup("<h2>Blend In</h2><h1>CICADA Agent</h1>"),

	L.marker([68.20, 18.01], {icon: iconSabotage, alt: "level1sab-camera", title: "Sabotage: Camera"}).bindLabel("Camera").bindPopup( popUp("img", "Sabotage", "Camera", "Place Remote Explosive", "Remote Explosive", "all", "note", "ingame", "desc") ),
	L.marker([50.90, -40.95], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
	L.marker([75.11, 23.33], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
	L.marker([49.21, -18.01], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x4)").bindPopup("<h2>Sabotage</h2><h1>Gas Canister (4)</h1><p class='item-use'>Loosen the Valve</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
	L.marker([46.34, -47.32], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
	L.marker([63.48, -39.59], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
	L.marker([65.98, -50.27], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
	L.marker([61.22, 16.56], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([64.4, 16.56], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([71.25, -5.84], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([72.24, -13.44], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([72.24, -20.2], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([71.32, -27.3], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([59.80, -53.70], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([52.50, -71.23], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([49.95, -71.23], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([63.11, 2.00], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
	L.marker([63.11, 7.00], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
	L.marker([68.64, -20.69], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier (x6)").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[70.58, -27.42], [68.64, -20.69], [67.84, -10.89]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-chandelier"}),
		L.marker([70.58, -27.42], {icon: iconPointRed, alt: "level1sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
		L.marker([67.84, -10.89], {icon: iconPointRed, alt: "level1sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([62.95, -43.85], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[62.95, -43.85], [63.52, -40.35]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-chandelier"}),
		L.marker([63.52, -40.35], {icon: iconPointRed, alt: "level1sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([65.95, -43.85], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[65.95, -43.85], [67.03, -40.35]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-chandelier"}),
		L.marker([67.03, -40.35], {icon: iconPointRed, alt: "level1sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([59.95, -43.85], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[59.95, -43.85], [58.26, -40.35]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-chandelier"}),
		L.marker([58.26, -40.35], {icon: iconPointRed, alt: "level1sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),

	L.marker([74.09, -15.51], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Crew Member / Security") ),
		new L.Polyline([[72.99, -13.53], [74.09, -15.51]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
		L.marker([72.99, -13.53], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "Crew Member / Security") ),
	L.marker([44.27, -10.10], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Crew Member / Security") ),
		new L.Polyline([[41.70, -5.27], [44.27, -10.10]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
	L.marker([73.00, -56.73], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Crew Member / Security") ),
		new L.Polyline([[71.84, -52.55], [73.00, -56.73], [72.43, -58.44]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
	
	L.marker([71.32, -23.77], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([68.60, -13.88], {icon: iconPoison, alt: "level1poison"}).bindLabel("Sushi Plate").bindPopup( popPoison("Sushi Plate", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([69.74, -18.01], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([69.74, -23.01], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine (x2)").bindPopup( popPoison("Glass of Red Wine", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([67.5, -18.01], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([67.5, -23.01], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([67.44, -27.29], {icon: iconPoison, alt: "level1poison"}).bindLabel("Cocktail Glass (x2)").bindPopup( popPoison("Cocktail Glass", "Guest", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([66.65, -30.45], {icon: iconPoison, alt: "level1poison"}).bindLabel("Sushi Plate").bindPopup( popPoison("Sushi Plate", "Unknown", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([67.54, -33.5], {icon: iconPoison, alt: "level1poison", title: "Poison: Kurt Donovan"}).bindLabel("Sushi Plate (Kurt Donovan)").bindPopup( popPoison("Sushi Plate", "Kurt Donovan", "Palace Staff / Auction Staff / Chef", "note") ),
	L.marker([55.02, -29.53], {icon: iconPoison, alt: "level1poison", title: "Poison: Sebastian Sato"}).bindLabel("Glass of Champagne (Sebastian Sato)").bindPopup( popPoison("Glass of Champagne", "Sebastian Sato", "Palace Staff / Auction Staff / Chef", "First, you have to distract Sebastian Sato using Diorama") ),
	L.marker([68.97, -26.01], {icon: iconPoison, alt: "level1poison", title: "Poison: Viktor Novikov"}).bindLabel("Cocktail (Viktor Novikov)").bindPopup( popPoison("Cocktail", "Viktor Novikov", "Palace Staff / Auction Staff / Chef", "First, you have to mix the cocktail") ),
	L.marker([53.80, -19.81], {icon: iconPoison, alt: "level1poison"}).bindLabel("Sushi Plate").bindPopup( popPoison("Sushi Plate", "Female Model", "Palace Staff / Auction Staff / Chef", "note") ),

	L.marker([72.43, -58.44], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
	L.marker([59.95, -1.18], {icon: iconDistraction, alt: "level1dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "all") ),
	L.marker([67.75, -2.06], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([67.75, -2.75], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([57.18, -2.94], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([57.18, -1.8], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([64.64, -32.73], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([64.66, -37.30], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([45.58, -47.81], {icon: iconDistraction, alt: "level1dis-lights", title: "Distraction: Flood Lights"}).bindLabel("Flood Lights").bindPopup( popGlobal(disFloodLights, "Crew Member / Security") ),
	L.marker([41.70, -5.27], {icon: iconDistraction, alt: "level1dis-lights", title: "Distraction: Flood Lights"}).bindLabel("Flood Lights").bindPopup( popGlobal(disFloodLights, "Crew Member / Security") ),
	L.marker([71.84, -52.55], {icon: iconDistraction, alt: "level1dis-lights", title: "Distraction: Flood Lights"}).bindLabel("Flood Lights").bindPopup( popGlobal(disFloodLights, "Crew Member / Security") ),
	L.marker([58.26, 1.53], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([56.65, 5.58], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([59.75, 5.58], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([59.75, 9.58], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([58.33, 12.12], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([59.91, 20.03], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([55.42, 11.51], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([55.42, 15.51], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([55.42, 20.00], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([54.72, -39.72], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([54.90, -32.51], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([55.05, -16.61], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),
	L.marker([58.51, -21.13], {icon: iconDistraction, alt: "level1dis-display", title: "Distraction: Display Case"}).bindLabel("Display Case").bindPopup( popGlobal(disDisplayCase, "all") ),

	L.marker([66.65, -2.63], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
	L.marker([56.65, 9.58], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
	L.marker([66.07, -36.95], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

	L.marker([68.25, -2.75], {icon: iconItem, alt: "level1item", title: "Item: IAGO Invitation"}).bindLabel("IAGO Invitation").bindPopup( popUp("iago", "Item", "IAGO Invitation", "use", "req", "susp", "note", "An invitation to the IAGO auction. Very useful. FYI, I took the liberty to hack their servers and get you a cover identity. You are Tobias Reaper, corporate shark specializing in hostile takeovers. Marolis will assume that you're a guest of Novikov's, so you should have time to complete the mission.", "desc") ),
	L.marker([70.36, 16.30], {icon: iconItem, alt: "level1item", title: "Item: Camera Lens"}).bindLabel("Camera Lens").bindPopup( popUp("lens", "Item", "Camera Lens", "use", "req", "susp", "note", "A camera lens belonging to fashion reporter Lindsey La Coeur and her network team.", "desc") ),

	L.marker([64.62, 28.652], {icon: iconLocation, alt: "level1location", title: "Location: Viktor Novikov Interview Spot"}).bindLabel("Viktor Novikov's Interview Spot").bindPopup( popUp("interview", "Location", "Viktor Novikov's Interview Spot", "use", "req", "susp", "note", "ingame", "desc") ),
	L.marker([51.23, -71.27], {icon: iconLocation, alt: "level1location", title: "Location: Decker and Novikov Meeting Spot"}).bindLabel("Decker and Novikov Meeting Spot").bindPopup( popUp("meeting", "Location", "Decker and Novikov Meeting Spot", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([68.78, 16.875], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Lana Caprice"}).bindLabel("Talk to Lana Caprice").bindPopup( popUp("lana", "Interaction", "Talk to Lana Caprice", "use", "Camera Lens", "susp",  "note", "ingame", "desc") ),
	L.marker([56.94, -34.80], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Diorama"}).bindLabel("Diorama").bindPopup( popUp("diorama", "Interaction", "Diorama", "Insert Coin", "Coin", "susp", "note", "ingame", "desc") ),
	L.marker([69, -27.29], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Tend the Bar"}).bindLabel("Tend the Bar").bindPopup( popUp("bar", "Interaction", "Tend the Bar", "use", "Cocktail Recipe", "Palace Staff / Auction Staff / Chef", "note", "ingame", "desc") ),
	L.marker([63.01, -29.39], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Enter Catwalk as Helmut Kruger"}).bindLabel("Enter Catwalk as Helmut Kruger").bindPopup( popUp("catwalk", "Interaction", "Enter Catwalk", "use", "Helmut Kruger Disguise (with makeup)", "susp", "note", "ingame", "desc") ),
	L.marker([56.34, -21.13], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Sit Down as Helmut Kruger"}).bindLabel("Sit Down as Helmut Kruger").bindPopup( popUp("makeup", "Interaction", "Get Makeup Done", "use", "Helmut Kruger Disguise", "susp", "note", "ingame", "desc") ),

	L.marker([73.68, 8.21], {icon: iconIntel, alt: "level1intel", title: "Intel: IAGO Auction VIP List"}).bindLabel("IAGO Auction VIP List").bindPopup( popUp("guests", "Intel", "IAGO Auction VIP List", "use", "req", "susp", "note", "According to the room assignment doc, the infamous Sheikh Salman al-Ghazali is staying in Suite Two. The Al-Ghazalis are known terrorist supporters, and Salman is surely one of IAGOs clients with unlimited access to the auction.", "desc") ),
	L.marker([64.37, -29.97], {icon: iconIntel, alt: "level1intel", title: "Intel: Stage Schedule"}).bindLabel("Stage Schedule").bindPopup( popUp("show", "Intel", "Stage Schedule", "use", "req", "susp", "note", "The stage schedule confirms that Viktor Novikov will take Sebastian Sato's place on stage after the show, if the head designer is unable to attend.", "desc") ),
	L.marker([74.79, -50.09], {icon: iconIntel, alt: "level1intel", title: "Intel: Fireworks Schedule"}).bindLabel("Fireworks Schedule").bindPopup( popUp("fworks", "Intel", "Fireworks Schedule", "use", "req", "susp", "note", "According to the schedule, Novikov plans a grand fireworks display at the end of the Sanguine show. The fireworks are located on a barge in the Seine. The detonation remote, however, is unaccounted for.", "desc") ),
	L.marker([73.57, 37.00], {icon: iconIntel, alt: "level1intel", title: "Intel: A Private Meeting"}).bindLabel("A Private Meeting").bindPopup( popUp("guards", "Intel", "A Private Meeting", "use", "req", "susp", "note", "Novikov is meeting in private with Max Decker, a senior agent of the Russian FSB. This must be connected to the criminal case the FSB was mounting against Novikov, and the mysterious suicide of Decker's boss, FSB section chief Nicholai Kamarov.", "desc") ),
	L.marker([72.42, -5.76], {icon: iconIntel, alt: "level1intel", title: "Intel: The Meeting Spot"}).bindLabel("The Meeting Spot").bindPopup( popUp("meeting", "Intel", "The Meeting Spot", "use", "req", "susp", "note", "Decker is waiting in the outdoor lounge area for one of Novikov's guards to escort him to the garden pavillion where the meeting will take place.", "desc") ),
	L.marker([70.37, -30.76], {icon: iconIntel, alt: "level1intel", title: "Intel: Novikov Favorite Cocktail"}).bindLabel("Novikov's Favorite Cocktail").bindPopup( popUp("waiters", "Intel", "Novikov's Favorite Cocktail", "use", "req", "susp", "note", "Novikov's favourite drink is a rather obscure cocktail know as a Bare Knuckle Boxer. The recipe has been misplaced somewhere in the basement.", "desc") ),
	L.marker([56.94, -6.37], {icon: iconIntel, alt: "level1intel", title: "Intel: The Male Model"}).bindLabel("The Male Model").bindPopup( popUp("model", "Intel", "The Male Model", "use", "req", "susp", "note", "Helmut Kruger, celebrated male model, is part of tonight's show. The two of you share a striking reseblance.", "desc") ),
	L.marker([68.76, 18.28], {icon: iconIntel, alt: "level1intel", title: "Intel: The Fashion Blogger"}).bindLabel("The Fashion Blogger").bindPopup( popUp("blogger", "Intel", "The Fashion Blogger", "use", "req", "susp", "note", "Viktor Novikov has agreed to a live interview with a young fashion blogger. However, she needs a replacement lens for her camera before the interview can begin.", "desc") ),
	L.marker([70.58, -85.25], {icon: iconIntel, alt: "level1intel", title: "Intel: Helmut Kruger Phone Call"}).bindLabel("Helmut Kruger's Phone Call").bindPopup( popUp("helmut", "Intel", "Helmut Kruger's Phone Call", "use", "req", "susp", "note", "Helmut Kruger is meeting Margolis after the show. I suspect that IAGO uses fashion models to infiltrate the lives of the rich and powerful, and Kruger is likely one of IAGO's spies. The location, however, is unknown.", "desc") ),
	L.marker([69.99, -6.41], {icon: iconIntel, alt: "level1intel", title: "Intel: The Magazine Editor"}).bindLabel("The Magazine Editor").bindPopup( popUp("editor", "Intel", "The Magazine Editor", "use", "req", "susp", "note", "Valerie St. Clair, legendary editor in chief of Showstopper Magazine, has discovered Novikov's secret, and plans to blackmail him. She has somehow obtained an invitation to the IAGO auction upstairs, and her young assistant Liza is about to enter the auction undercover. The poor girl is clearly out of her depth.", "desc") ),

	L.marker([69.94, -39.15], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Auction Security</h1><p class='req'>Requires IAGO Invitation if disguised as Guest</p>"),
	L.marker([67.70, -44.64], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Auction Security</h1><p class='req'>Requires IAGO Invitation if disguised as Guest</p>"),

	L.marker([72.58, -62.44], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p><p class='note'>Already opened if starting on Pile-Driver Barge</p>"),
	L.marker([57.30, -85.25], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([57.30, -75.98], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([57.30, -66.66], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([54.23, -51.76], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([48.40, -51.76], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Gate").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([56.12, 3.07], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([68.49, 3.07], {icon: iconLocked, alt: "level1locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Palace Master Key</p>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

	L.marker([65.05, -47.54], {icon: iconIcaStash, alt: "level2icastash", title: "Small Agency Pickup: Newspapers"}).bindLabel("Small Agency Pickup: Newspapers").bindPopup("<img src='img/map_paris/screenshots/ica_newspapers.jpg'><h2>Small Agency Pickup</h2><h1>Newspapers</h1>"),

	L.marker([61.98, -32.78], {icon: iconEnter, alt: "level2enter", title: "Starting Location: Undercover in AV Center"}).bindLabel("Starting Location: Undercover in AV Center").bindPopup("<img src='img/map_paris/screenshots/enter_crew.jpg'><h2>Starting Location</h2><h1>Undercover in AV Center</h1>"),

	L.marker([53.33, -30.00], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 2-3</h1>"),
	L.marker([70.33, -30.54], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 2-3</h1>"),
	L.marker([56.99, 19.95], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Ladder: Level 2-3").bindPopup("<h2>Way Up</h2><h1>Ladder: Level 2-3</h1>"),
	L.marker([53.33, -41.74], {icon: iconWayUpDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([59.93, -49.30], {icon: iconWayUpDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([67.30, -47.28], {icon: iconWayUpDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([52.64, -3.77], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-2</h1>"),

	L.marker([53.77, -39.19], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([53.77, -35.33], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([69.93, -34.89], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([63.03, -50.75], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([71.13, -17.97], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([70.17, -4.52], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([68.98, 3.03], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([69.25, 15.64], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([67.39, 20.91], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([65.31, 15.68], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([60.34, 15.73], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([57.75, 20.91], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([54.90, 15.64], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([55.37, 3.20], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([55.17, -4.61], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([51.56, -17.97], {icon: iconPassage, alt: "level2passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([52.50, -26.10], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([70.68, -26.36], {icon: iconPassage, alt: "level2passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

	L.marker([62.95, -4.13], {icon: iconStairsDown, alt: "level2stairsupdown"}),
	L.marker([69.47, -44.82], {icon: iconStairsDown, alt: "level2stairsupdown"}),
	L.marker([54.67, -44.73], {icon: iconStairsDown, alt: "level2stairsupdown"}),
	L.marker([62.5, -36.1], {icon: iconStairsDown, alt: "level2stairsupdown"}),
	L.marker([69.53, -30.67], {icon: iconStairsUp, alt: "level2stairsupdown"}),
	L.marker([54.57, -30.67], {icon: iconStairsUp, alt: "level2stairsupdown"}),

	new L.Polyline(
		[[54.77, 10.50], [55.97, 10.50], [55.97, 4.43], [55.27, 4.43], [55.27, 1.75], [55.27, 1.75], [55.94, 1.75], [55.94, -4.21], [52.26, -4.21], [52.26, -16.52], [51.50, -16.52], [51.50, -19.29], [52.26, -19.29], [52.26, -29.61], [53.68, -29.70], [53.68, -46.45], [58.26, -46.45], [58.26, -48.60], [58.26, -48.60], [58.21, -48.60], [60.34, -48.60], [60.34, -50.66], [65.28, -50.66], [65.28, -48.60], [65.28, -48.60], [66.96, -48.60], [66.96, -46.49], [70.05, -46.49], [70.05, -29.70], [70.80, -29.70], [70.80, -19.40], [71.20, -19.40], [71.20, -16.65], [70.80, -16.65], [70.80, -4.20], [68.50, -4.20], [68.50, 1.53], [69.05, 1.53], [69.05, 4.35], [68.50, 4.35], [68.50, 10.41], [69.33, 10.41], [69.33, 21.00], [65.20, 21.00], [65.20, 10.63], [63.91, 10.63], [63.91, 12.08], [62.02, 12.08], [62.02, 10.63], [60.47, 10.63], [60.47, 21.04], [54.77, 21.04], [54.77, 13.44]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),

]);

var level2weapons = L.layerGroup([

	L.marker([67.40, 16.91], {icon: iconFirearm, alt: "level2firearm", title: "Weapons: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),
	L.marker([56.38, 14.45], {icon: iconCoin, alt: "level2coin", title: "Weapons: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
	L.marker([62.55, -44.56], {icon: iconBust, alt: "level2bust", title: "Weapons: Bust"}).bindLabel("Bust").bindPopup(txtBust),
	L.marker([58.53, 0.48], {icon: iconBust, alt: "level2bust", title: "Weapons: Bust"}).bindLabel("Bust").bindPopup(txtBust),
	L.marker([59.37, -33.26], {icon: iconFireAxe, alt: "level2fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([66.07, -12.12], {icon: iconFireAxe, alt: "level2fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([55.35, -7.95], {icon: iconFireAxe, alt: "level2fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([58.65, -38.58], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([55.52, -37.39], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([66.63, -38.62], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([61.07, -9.75], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([58.74, -13.57], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([65.38, -7.69], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([60.28, -7.86], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([56.60, -3.99], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
	L.marker([57.91, -13.49], {icon: iconFirePoker, alt: "level2firepoker", title: "Weapons: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
	L.marker([67.39, -13.57], {icon: iconFirePoker, alt: "level2firepoker", title: "Weapons: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
	L.marker([66.51, -47.54], {icon: iconHammer, alt: "level2hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([56.63, 4.70], {icon: iconHammer, alt: "level2hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([57.30, 20.74], {icon: iconHammer, alt: "level2hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([69.06, -29.17], {icon: iconGolfClub, alt: "level2golfclub", title: "Weapons: Golf Club"}).bindLabel("Golf Club").bindPopup(txtGolfClub),
	L.marker([57.13, -43.02], {icon: iconKnife, alt: "level2knife", title: "Weapons: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
	L.marker([53.67, -10.50], {icon: iconOpener, alt: "level2opener", title: "Weapons: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
	L.marker([67.37, -17.13], {icon: iconOpener, alt: "level2opener", title: "Weapons: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
	L.marker([66.67, 2.98], {icon: iconOpener, alt: "level2opener", title: "Weapons: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
	L.marker([57.77, 16.91], {icon: iconOpener, alt: "level2opener", title: "Weapons: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
	L.marker([55.12, -19.59], {icon: iconBaton, alt: "level2baton", title: "Weapons: Police Baton"}).bindLabel("Police Baton").bindPopup(txtBaton),
	L.marker([67.39, 18.14], {icon: iconScissors, alt: "level2scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([63.86, -11.51], {icon: iconScrewdriver, alt: "level2screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([58.95, -5.36], {icon: iconScrewdriver, alt: "level2screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),

]);

var level2poi = L.layerGroup([

	L.marker([60.75, -33.39], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.69, -30.89], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.69, -32.69], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([61.07, -47.63], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([66.73, -30.71], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([66.73, -32.29], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([65.21, -37.08], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([63.91, -9.36], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([66.12, -15.73], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.74, -24.38], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([58.69, -15.82], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([66.72, -23.99], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([68.64, -7.82], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([66.35, 11.77], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

	L.marker([55.70, -44.29], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Garbage Can"),
	L.marker([64.47, -37.17], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([54.18, -37.57], {icon: iconWeaponCrate, alt: "level2weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([65.74, 9.7998], {icon: iconWeaponCrate, alt: "level2weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([67.49, -0.307], {icon: iconNPC, alt: "level2npc", title: "NPC: Sheikh"}).bindLabel("Sheikh").bindPopup( popUp("img", "NPC", "Sheikh", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([60.75, -30.71], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),
	L.marker([57.23, -34.27], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),

	L.marker([60.50, -13.84], {icon: iconSabotage, alt: "level2sab-mounting", title: "Sabotage: Loudspeaker"}).bindLabel("Loudspeaker").bindPopup( popGlobal(sabLoudspeaker, "all") ),
	L.marker([65.25, -13.93], {icon: iconSabotage, alt: "level2sab-mounting", title: "Sabotage: Loudspeaker"}).bindLabel("Loudspeaker").bindPopup( popGlobal(sabLoudspeaker, "all") ),
	L.marker([70.87, -18.06], {icon: iconSabotage, alt: "level2sab-mounting", title: "Sabotage: Loudspeaker"}).bindLabel("Loudspeaker").bindPopup( popGlobal(sabLoudspeaker, "all") ),

	L.marker([68.35, -34.00], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the third floor</p>"),
	L.marker([56.26, -34.00], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the third floor</p>"),
		
	L.marker([63.11, 2], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[63.11, 2], [60.28, -2.900]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([60.28, -2.900], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([63.11, 7], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[63.11, 7], [65.31, 9.36]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([65.31, 9.36], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([63.72, -36.07], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[63.72, -36.07], [61.18, -37.66]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([61.18, -37.66], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([54.64, -42.31], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[54.64, -42.31], [55.52, -38.14]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([55.52, -38.14], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([64.66, -44.59], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[64.66, -44.59], [64.83, -48.03]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([64.83, -48.03], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([60.37, -44.59], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[60.37, -44.59], [60.13, -48.03]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([60.13, -48.03], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([69.50, -42.31], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[69.50, -42.31], [68.89, -38.23]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([68.89, -38.23], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([57.18, -26.58], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[57.18, -26.58], [58.95, -27.77]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([58.95, -27.77], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([54.54, -26.27], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[54.54, -26.27], [53.61, -29.09]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([53.61, -29.09], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([55.89, -17.84], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[55.89, -17.84], [55.15, -23.11]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([55.15, -23.11], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([55.89, -10.59], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[55.89, -10.59], [53.95, -8.65]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([53.95, -8.65], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([68.68, -10.63], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[68.68, -10.63], [66.51, -9.404]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([66.51, -9.404], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([68.78, -18.14], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[68.78, -18.14], [69.19, -12.96]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([69.19, -12.96], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([68.52, -26.41], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[68.52, -26.41], [66.51, -24.78]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([66.51, -24.78], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([67.54, -3.55], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[67.54, -3.55], [66.49, -4.921]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([66.49, -4.921], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([67.54, 7.55], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[67.54, 7.55], [68.31, 9.3164]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([68.31, 9.3164], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([67.35, 15.33], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[67.35, 15.33], [68.59, 12.041]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([68.59, 12.041], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),	
	L.marker([57.79, 15.60], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[57.79, 15.60], [56.04, 12.128]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-chandelier"}),
		L.marker([56.04, 12.128], {icon: iconPointRed, alt: "level2sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),

	L.marker([67.82, 5.49], {icon: iconPoison, alt: "level2poison", title: "Poison: Sheikh"}).bindLabel("Glass of White Wine (Sheikh)").bindPopup( popPoison("Glass of White Wine", "Sheikh", "Auction Staff", "note") ),

	L.marker([62.57, -30.80], {icon: iconDistraction, alt: "level2dis-rack", title: "Distraction: Rack Case"}).bindLabel("Rack Case").bindPopup( popUp("img", "Distraction", "Rack Case", "Turn On/Off", "req", "Crew Member", "note", "ingame", "desc") ),
	L.marker([64.77, -34.93], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([69.16, -7.99], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([70.16, -7.99], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([56.65, -11.99], {icon: iconDistraction, alt: "level2dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "all") ),
	L.marker([69.27, -29.13], {icon: iconDistraction, alt: "level2dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "all") ),
	L.marker([67.55, 1.93], {icon: iconDistraction, alt: "level2dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
	L.marker([69.65, -7.99], {icon: iconDistraction, alt: "level2dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
	L.marker([69.97, -10.63], {icon: iconDistraction, alt: "level2dis-piano", title: "Distraction: Piano"}).bindLabel("Piano").bindPopup( popGlobal(disPiano, "all") ),
		
	L.marker([63.50, -30.71], {icon: iconItem, alt: "level2item", title: "Item: Fireworks Remote Detonator"}).bindLabel("Fireworks Remote Detonator").bindPopup( popUp("detonator", "Item", "Fireworks Remote Detonator", "use", "req", "susp", "note", "The remote detonator for a fireworks display. Must be for Novikov's grand finale.", "desc") ),
	L.marker([69.80, -26.41], {icon: iconItem, alt: "level2item", title: "Item: Speedboat Key"}).bindLabel("Speedboat Key").bindPopup( popUp("speedboat", "Item", "Speedboat Key", "use", "req", "susp", "note", "The keys to a speedboat. Must be the one docked at the garden pier.", "desc") ),

	L.marker([57.75, 13.842], {icon: iconLocation, alt: "level2location", title: "Location: Dalia and Viktor Safe Room"}).bindLabel("Dalia and Viktor Safe Room").bindPopup( popUp("safe", "Location", "Dalia and Viktor Safe Room", "use", "req", "susp", "To get both targets here, you have to trigger the special evacuation plan using Kurt Donovan's cell phone.", "ingame", "desc") ),

	L.marker([65.9, -8.5], {icon: iconCamera, alt: "level2camera", title: "Camera: Palace"}).bindLabel("Security Camera"),
		L.polygon([[65.9, -8.5], [66.25, -12.5], [64.5, -12.5]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),
	L.marker([59.7, -8.5], {icon: iconCamera, alt: "level2camera", title: "Camera: Palace"}).bindLabel("Security Camera"),
		L.polygon([[59.7, -8.5], [61.3, -12.5], [59.25, -12.5]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),
	L.marker([66.31, -31.86], {icon: iconCamera, alt: "level2camera", title: "Camera: Palace"}).bindLabel("Security Camera"),
		L.polygon([[66.31, -31.86], [64.75, -29.79], [64.75, -33.83]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),

	L.marker([67.42, -8.52], {icon: iconLocked, alt: "level2locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Palace Master Key</p>"),
	L.marker([66.40, 7.91], {icon: iconLocked, alt: "level2locked", title: "Locked: Palace Master Key"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Palace Master Key</p>"),

	L.marker([54.54, -33.48], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Auction Security</h1><p class='req'>Requires IAGO Invitation if disguised as Guest</p><p class='item-desc'>Will be frisked if disguised as Guest or Auction Staff</p>"),
	L.marker([69.51, -33.48], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Auction Security</h1><p class='req'>Requires IAGO Invitation if disguised as Guest</p><p class='item-desc'>Will be frisked if disguised as Guest or Auction Staff</p>"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

	L.marker([64.99, -34.01], {icon: iconIcaStash, alt: "level3icastash", title: "Small Agency Pickup: Toilet Cistern"}).bindLabel("Small Agency Pickup: Toilet Cistern").bindPopup("<img src='img/map_paris/screenshots/ica_bathroom.jpg'><h2>Small Agency Pickup</h2><h1>Toilet Cistern</h1>"),
	L.marker([68.36, 11.68], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Empty Attic Room"}).bindLabel("Large Agency Pickup: Empty Attic Room").bindPopup("<img src='img/map_paris/screenshots/ica_attic.jpg'><h2>Large Agency Pickup</h2><h1>Empty Attic Room</h1>"),

	L.marker([64.58, -45.61], {icon: iconEnter, alt: "level3enter", title: "Starting Location: Undercover at IAGO Auction"}).bindLabel("Starting Location: Undercover at IAGO Auction").bindPopup("<img src='img/map_paris/screenshots/enter_auction.jpg'><h2>Starting Location</h2><h1>Undercover at IAGO Auction</h1>"),
	L.marker([56.48, 18.06], {icon: iconEnter, alt: "level3enter", title: "Starting Location: Attic"}).bindLabel("Starting Location: Attic").bindPopup("<img src='img/map_paris/screenshots/enter_attic.jpg'><h2>Starting Location</h2><h1>Attic</h1>"),

	L.marker([53.33, -30.00], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-3</h1>"),
	L.marker([70.33, -30.54], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-3</h1>"),
	L.marker([56.99, 19.95], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Ladder: Level 2-3").bindPopup("<h2>Way Down</h2><h1>Ladder: Level 2-3</h1>"),
	L.marker([53.33, -41.74], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([59.93, -49.30], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),
	L.marker([67.30, -47.28], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),

	L.marker([64.86, -29.75], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([64.05, -29.75], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([63.05, -29.75], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([61.18, -29.75], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([63.03, -50.58], {icon: iconPassage, alt: "level3passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([70.03, -37.96], {icon: iconPassage, alt: "level3passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([53.72, -38.32], {icon: iconPassage, alt: "level3passage"}).bindLabel("Balcony").bindPopup("<h2>Passage</h2><h1>Balcony</h1>"),
	L.marker([65.29, -27.86], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([65.29, -27.86], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([65.29, -18.25], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([65.29, -16.00], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([65.29, -13.66], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([61.01, -12.39], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([63.95, -12.39], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([62.75, -12.39], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([60.45, -27.90], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([60.45, -26.41], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([60.45, -20.74], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([60.45, -13.66], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
	L.marker([60.45, -16.00], {icon: iconPassage, alt: "level3passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

	L.marker([56.51, -30.76], {icon: iconStairsDown, alt: "level3stairsupdown"}),
	L.marker([68.26, -30.76], {icon: iconStairsDown, alt: "level3stairsupdown"}),

	new L.Polyline(
		[[53.68, -29.70], [53.68, -46.45], [58.26, -46.45], [58.26, -48.60], [58.21, -48.60], [60.34, -48.60], [60.34, -50.66], [65.28, -50.66], [65.28, -48.60], [65.28, -48.60], [66.96, -48.60], [66.96, -46.49], [70.05, -46.49], [70.05, -29.70]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

	new L.Polyline(
		[[63.56, -16.08], [63.56, -12.74], [65.14, -12.74], [65.14, -29.39], [63.56, -29.39], [63.56, -26.01]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

	new L.Polyline([
		[62.00, -15.99], [62.00, -12.74], [60.58, -12.74], [60.58, -29.39], [62.00, -29.39], [62.00, -26.01]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

	new L.Polyline([
		[63.30, -26.01], [63.30, -29.39], [62.26, -29.39], [62.26, -26.01], [63.30, -26.01]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

	new L.Polyline([
		[63.30, -15.99], [62.26, -15.99], [62.26, -12.74], [63.30, -12.74], [63.30, -15.99]], 
		{color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

]);

var level3weapons = L.layerGroup([

	L.marker([54.23, -21.00], {icon: iconPoisons, alt: "level3weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
	L.marker([70.14, -8.70], {icon: iconPoisons, alt: "level3weapoison", title: "Weapons: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
	L.marker([62.45, -32.73], {icon: iconPoisons, alt: "level3weapoison", title: "Weapons: Lethal Poison"}).bindLabel("Lethal Poison").bindPopup(txtLethalPoison + "<p class='note'>To get the poison, you have to arrange meeting with Dalia disguised as Helmut Kruger</p>"),

	L.marker([58.17, -24.59], {icon: iconRemoteExpl, alt: "level3remexpl", title: "Weapons: Remote Explosive"}).bindLabel("Remote Explosive").bindPopup(txtRemoteExplosive),
	L.marker([57.89, 5.75], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapons: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

	L.marker([58.60, -27.29], {icon: iconFirearm, alt: "level3firearm", title: "Weapons: Assault Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2 (x2)").bindPopup(txtFusilG2),
	L.marker([56.70, -17.09], {icon: iconFirearm, alt: "level3firearm", title: "Weapons: Assault Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2").bindPopup(txtFusilG2),
	L.marker([57.86, -23.32], {icon: iconFirearm, alt: "level3firearm", title: "Weapons: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),
	L.marker([59.35, -27.29], {icon: iconAmmo, alt: "level3ammo", title: "Weapons: Rifle Ammo"}).bindLabel("Rifle Ammo (x5)").bindPopup(txtAmmoRifle),
	L.marker([57.25, -17.13], {icon: iconAmmo, alt: "level3ammo", title: "Weapons: Rifle Ammo"}).bindLabel("Rifle Ammo").bindPopup(txtAmmoRifle),

	L.marker([63.29, -10.67], {icon: iconCoin, alt: "level3coin", title: "Weapons: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
	L.marker([59.06, -14.89], {icon: iconBust, alt: "level3bust", title: "Weapons: Bust"}).bindLabel("Bust").bindPopup(txtBust),
	L.marker([67.85, -13.05], {icon: iconBust, alt: "level3bust", title: "Weapons: Bust"}).bindLabel("Bust").bindPopup(txtBust),
	L.marker([62.93, -11.38], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapons: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
	L.marker([66.91, 8.65], {icon: iconFireAxe, alt: "level3fireaxe", title: "Weapons: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
	L.marker([56.41, -7.47], {icon: iconHammer, alt: "level3hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([66.93, -10.19], {icon: iconHammer, alt: "level3hammer", title: "Weapons: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
	L.marker([56.41, -41.17], {icon: iconOpener, alt: "level3opener", title: "Weapons: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
	L.marker([55.05, -43.41], {icon: iconScissors, alt: "level3scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([64.69, -34.18], {icon: iconScissors, alt: "level3scissors", title: "Weapons: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
	L.marker([58.81, -41.74], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([58.05, -16.30], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([59.10, 15.95], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([68.49, -21.13], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapons: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
	L.marker([59.22, -10.67], {icon: iconWrench, alt: "level3wrench", title: "Weapons: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level3poi = L.layerGroup([

	L.marker([67.10, -41.39], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([60.82, -30.89], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([63.86, -30.89], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([52.80, -25.92], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([53.17, -5.62], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([56.72, -3.38], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([59.06, 13.05], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([69.00, -19.55], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
	L.marker([63.66, -9.27], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([59.60, -19.02], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),

	L.marker([67.39, 15.99], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Vampire Magician"}).bindLabel("Disguise: Vampire Magician").bindPopup( popUp("vamp", "Disguise", "Vampire Magician", "use", "req", "susp", "note", "ingame", "desc") ),

	L.marker([68.64, -46.27], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In: Palace Staff / Auction Staff").bindPopup("<h2>Blend In</h2><h1>Palace Staff / Auction Staff</h1>"),

	L.marker([62.95, -21.13], {icon: iconSabotage, alt: "level3sab-winch", title: "Sabotage: Light Rig Winch"}).bindLabel("Light Rig Winch").bindPopup("<h2>Sabotage</h2><h1>Light Rig Winch</h1><p class='item-use'>Break the Winch</p><p class='req'>Requires Crowbar / Explosive</p><p class='susp'>Suspicious in any disguise</p>"),
	L.marker([64.94, -49.08], {icon: iconSabotage, alt: "level3sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
	L.marker([62.97, -41.30], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
	L.marker([62.97, -38.01], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
	L.marker([66.12, -42.80], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
	L.marker([59.48, -42.97], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
	L.marker([61.87, -32.34], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
	L.marker([68.13, -40.20], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[68.13, -40.20], [66.87, -38.80]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level3sab-chandelier"}),
		L.marker([66.87, -38.80], {icon: iconPointRed, alt: "level3sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([57.04, -40.16], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[57.04, -40.16], [58.37, -41.17]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level3sab-chandelier"}),
		L.marker([58.37, -41.17], {icon: iconPointRed, alt: "level3sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([68.35, -34.00], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[68.35, -34.00], [68.43, -37.88]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level3sab-chandelier"}),
		L.marker([68.43, -37.88], {icon: iconPointRed, alt: "level3sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
	L.marker([56.26, -34.00], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
		new L.Polyline([[56.26, -34.00], [56.19, -37.79]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level3sab-chandelier"}),
		L.marker([56.19, -37.79], {icon: iconPointRed, alt: "level3sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
		
	L.marker([68.12, -46.30], {icon: iconPoison, alt: "level3poison"}).bindLabel("Glass of Champagne").bindPopup( popPoison("Glass of Champagne", "Guest", "Auction Staff", "note") ),
	L.marker([68.84, -46.30], {icon: iconPoison, alt: "level3poison"}).bindLabel("Glass of Champagne").bindPopup( popPoison("Glass of Champagne", "Guest", "Auction Staff", "note") ),
	L.marker([68.12, -42.53], {icon: iconPoison, alt: "level3poison"}).bindLabel("Glass of Champagne (x2)").bindPopup( popPoison("Glass of Champagne", "Guest", "Auction Staff", "note") ),
	L.marker([68.84, -42.53], {icon: iconPoison, alt: "level3poison"}).bindLabel("Glass of Champagne").bindPopup( popPoison("Glass of Champagne", "Guest", "Auction Staff", "note") ),
	L.marker([69.42, -44.56], {icon: iconPoison, alt: "level3poison", title: "Poison: Dalia Margolis"}).bindLabel("Glass of Champagne (Dalia Margolis)").bindPopup( popPoison("Glass of Champagne", "Dalia Margolis", "Auction Staff", "note") ),
	L.marker([62.34, -34.18], {icon: iconPoison, alt: "level3poison", title: "Poison: Dalia Margolis"}).bindLabel("Glass of Champagne (Dalia Margolis)").bindPopup( popPoison("Glass of Champagne", "Dalia Margolis", "Auction Staff", "Dalia will drink out of this glass only after her meeting with Agent 47 disguised as Helmut Kruger") ),
	L.marker([55.55, -21.48], {icon: iconPoison, alt: "level3poison", title: "Poison: Bodyguard"}).bindLabel("Coffee Glass (Bodyguard)").bindPopup( popPoison("Coffee Glass", "Bodyguard", "all", "note") ),

	L.marker([64.33, -34.14], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "all") ),
	L.marker([63.89, -34.14], {icon: iconDistraction, alt: "level3dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
	L.marker([53.87, -25.88], {icon: iconDistraction, alt: "level3dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "Bodyguard") ),
	L.marker([61.39, -11.60], {icon: iconDistraction, alt: "level3dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "all") ),

	L.marker([61.41, -35.50], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
	L.marker([65.58, -34.14], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
	L.marker([57.98, -28.52], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
	L.marker([68.26, -28.56], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

	L.marker([57.79, -20.25], {icon: iconItem, alt: "level3item", title: "Item: Laptop Dongle"}).bindLabel("Laptop Dongle").bindPopup( popUp("dongle", "Item", "Laptop Dongle", "use", "req", "susp", "note", "A security dongle. It likely belongs to Dalia Margolis' laptop.", "desc") ),

	L.marker([61.43, -44.42], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Participate In Auction as Sheikh"}).bindLabel("Participate In Auction as Sheikh").bindPopup( popUp("sheikh", "Interaction", "Participate In Auction as Sheikh", "use", "req", "susp", "note", "ingame", "desc") ),
	L.marker([64.18, -44.42], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Participate In Auction as Tobias Reaper"}).bindLabel("Participate In Auction as Tobias Reaper").bindPopup( popUp("tobias", "Interaction", "Participate In Auction as Tobias Reaper", "use", "req", "susp", "note", "ingame", "desc") ),
	L.marker([56.31, -40.16], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: IAGO Auction Laptop"}).bindLabel("IAGO Auction Laptop").bindPopup( popUp("laptop", "Interaction", "IAGO Auction Laptop", "Insert Password Dongle", "Laptop Dongle", "all", "note", "ingame", "desc") ),
	L.marker([61.85, -33.31], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Talk to Dalia Margolis"}).bindLabel("Talk to Dalia Margolis").bindPopup( popUp("dalia", "Interaction", "Talk to Dalia Margolis", "use", "Halmut Kruger Disguise", "susp", "note", "ingame", "desc") ),

	L.marker([59.60, -12.17], {icon: iconIntel, alt: "level3intel", title: "Intel: The Light Rig"}).bindLabel("The Light Rig").bindPopup( popUp("rig", "Intel", "The Light Rig", "use", "req", "susp", "note", "According to the guards, the light rig appears to be poorly constructed. Apply the right tools and it might collapse.", "desc") ),
	L.marker([56.55, -45], {icon: iconIntel, alt: "level3intel", title: "Intel: Dalia Margolis Laptop"}).bindLabel("Dalia Margolis' Laptop").bindPopup( popUp("margolis", "Intel", "Dalia Margolis' Laptop", "use", "req", "susp", "note", "The IAGO auction is run from Dalia Margolis' private laptop. From here you should be able to shut down the auction temporarily.", "desc") ),

]);
	
/* ==================================================================================================================================================================
   All Markers
   ================================================================================================================================================================== */

var allMarkers = L.layerGroup([
	level0markers = L.layerGroup([level0other, level0weapons, level0poi]),
	level1markers = L.layerGroup([level1other, level1weapons, level1poi]),
	level2markers = L.layerGroup([level2other, level2weapons, level2poi]),
	level3markers = L.layerGroup([level3other, level3weapons, level3poi])
]);