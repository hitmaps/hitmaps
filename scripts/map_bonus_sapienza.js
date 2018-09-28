var mapbonussapienza = L.map('mapbonussapienza', {maxBoundsViscosity: 1}).setView([45.76, -73.38], 4);
mapbonussapienza.zoomControl.setPosition('topright');
mapbonussapienza.setMaxBounds([[-33.5, -264.3],[84.57, 15.292]]);
$("#level-3").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel2base = mapLevel2security = L.tileLayer('img/map_bonussapienza/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel3base = mapLevel3security = L.tileLayer('img/map_bonussapienza/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }).addTo(mapbonussapienza),
    mapLevel4base = mapLevel4security = L.tileLayer('img/map_bonussapienza/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel5base = mapLevel5security = L.tileLayer('img/map_bonussapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel6base = mapLevel6security = L.tileLayer('img/map_bonussapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel7base = mapLevel7security = L.tileLayer('img/map_bonussapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),

    mapLevel2suit = L.tileLayer('img/map_bonussapienza/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel3suit = L.tileLayer('img/map_bonussapienza/lvl_3/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel4suit = L.tileLayer('img/map_bonussapienza/lvl_4/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel5suit = L.tileLayer('img/map_bonussapienza/lvl_5/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel6suit = L.tileLayer('img/map_bonussapienza/lvl_6/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel7suit = L.tileLayer('img/map_bonussapienza/lvl_7/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),

    mapLevel2kitchen = L.tileLayer('img/map_bonussapienza/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel3kitchen = L.tileLayer('img/map_bonussapienza/lvl_3/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel4kitchen = L.tileLayer('img/map_bonussapienza/lvl_4/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel5kitchen = L.tileLayer('img/map_bonussapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel6kitchen = L.tileLayer('img/map_bonussapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel7kitchen = L.tileLayer('img/map_bonussapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),

    mapLevel2movie = L.tileLayer('img/map_bonussapienza/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel3movie = L.tileLayer('img/map_bonussapienza/lvl_3/movie/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel4movie = L.tileLayer('img/map_bonussapienza/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel5movie = L.tileLayer('img/map_bonussapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel6movie = L.tileLayer('img/map_bonussapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel7movie = L.tileLayer('img/map_bonussapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),

    mapLevel2sfx = L.tileLayer('img/map_bonussapienza/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel3sfx = L.tileLayer('img/map_bonussapienza/lvl_3/sfx/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel4sfx = L.tileLayer('img/map_bonussapienza/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel5sfx = L.tileLayer('img/map_bonussapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel6sfx = L.tileLayer('img/map_bonussapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),
    mapLevel7sfx = L.tileLayer('img/map_bonussapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 4, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([63.09, -62.22], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([72.58, -53.43], {icon: iconExit, alt: "level2exit", title: "Exit Locaton: Town Gate"}).bindLabel("Exit Locaton: Town Gate").bindPopup("<img src='img/map_bonussapienza/screenshots/exit_gate.jpg'><h2>Exit Locaton</h2><h1>Town Gate</h1>"),

]);

var level2weapons = L.layerGroup([

]);

var level2poi = L.layerGroup([

    // Hiding Spot
    L.marker([62.65, -61.12], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.79, -61.87], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.89, -57.12], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    // Sabotage
    L.marker([63.35, -70.18], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([65.42, -71.76], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.39, -69.25], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.84, -63.45], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([72.90, -54.79], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([72.88, -56.07], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([70.75, -53.96], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([65.03, -51.76], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.33, -52.11], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.55, -53.83], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "all") ),
    // Distraction
    L.marker([67.57, -55.28], {icon: iconDistraction, alt: "level2dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    // Item
    L.marker([65.87, -57.08], {icon: iconItem, alt: "level2item", title: "Item: Town Hall Key"}).bindLabel("Town Hall Key").bindPopup( popUp("img", "Item", "Town Hall Key", "use", "req", "susp", "note", "ingame", "desc") ),
    // Locked
    L.marker([63.80, -59.67], {icon: iconLocked, alt: "level2locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([67.16, -67.23], {icon: iconLocked, alt: "level2locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([65.89, -68.46], {icon: iconLocked, alt: "level2locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([48.83, -42.27], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Cafe Basement"}).bindLabel("Large Agency Pickup: Cafe Basement").bindPopup("<img src='img/map_bonussapienza/screenshots/ica_cafe.jpg'><h2>Large Agency Pickup</h2><h1>Cafe Basement</h1>"),
    L.marker([21.16, -65.65], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: City Gates"}).bindLabel("Starting Locaton: City Gates").bindPopup("<img src='img/map_bonussapienza/screenshots/enter_gates.jpg'><h2>Starting Locaton</h2><h1>City Gates</h1>"),
    L.marker([23.24, -68.55], {icon: iconExit, alt: "level3exit", title: "Exit Locaton: Bosco Car"}).bindLabel("Exit Locaton: Bosco's Car").bindPopup("<img src='img/map_bonussapienza/screenshots/exit_car.jpg'><h2>Exit Locaton</h2><h1>Bosco's Car</h1><p class='req'>Requires Bosco Car Key</p>"),

    L.marker([53.25, -52.07], {icon: iconPassage, alt: "level3passage"}).bindLabel("Climb").bindPopup("<h2>Passage</h2><h1>Climb</h1>"),

    L.marker([52.72, -41.08], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([59.44, -67.54], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Ladder").bindPopup("<h2>Way Up</h2><h1>Ladder</h1>"),

    L.marker([39.13, -47.37], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.22, -36.73], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([46.95, -39.59], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([50.81, -48.42], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([54.95, -42.80], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([56.21, -44.69], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([63.31, -61.78], {icon: iconStairsDown, alt: "level3stairsupdown"}),

]);

var level3weapons = L.layerGroup([

    L.marker([28.14, -61.91], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([37.16, -52.29], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x5)").bindPopup(txtCoin + "<p class='note'>Shoot in the scales</p>"),
    // Explosive
    L.marker([61.31, -56.90], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),
    L.marker([53.69, -50.71], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),
    L.marker([47.48, -57.17], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    // Poison
    L.marker([62.51, -57.87], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([50.40, -46.62], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([52.69, -42.01], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    // Melee
    L.marker([55.92, -77.65], {icon: iconKnife, alt: "level3knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),
    L.marker([60.43, -62.31], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([56.31, -51.94], {icon: iconScrewdriver, alt: "level3screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([51.01, -51.50], {icon: iconBattleAxe, alt: "level3battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
    // Melee
    L.marker([59.48, -58.93], {icon: iconWrench, alt: "level3wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([48.48, -56.46], {icon: iconSoda, alt: "level3sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([56.53, -77.16], {icon: iconSoda, alt: "level3sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([49.35, -67.63], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([54.57, -73.52], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([59.37, -68.68], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

]);

var level3poi = L.layerGroup([

    // Hiding Spot
    L.marker([57.58, -77.34], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.20, -70.04], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.38, -55.94], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.10, -57.91], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.01, -46.31], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([42.06, -49.26], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([50.45, -50.49], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.67, -44.34], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([53.95, -44.78], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot (x2)"),
    L.marker([52.13, -46.93], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.69, -45.39], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.23, -40.20], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    // Conceal
    L.marker([40.38, -46.66], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([54.95, -44.12], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    // Weapon Crate
    L.marker([45.42, -42.05], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),
    // Disguise
    L.marker([59.04, -42.97], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Kitchen Assistant"}).bindLabel("Disguise: Kitchen Assistant").bindPopup( popUp("kitchen", "Disguise", "Kitchen Assistant", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([45.67, -45.35], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Movie Crew"}).bindLabel("Disguise: Movie Crew").bindPopup( popUp("crew", "Disguise", "Movie Crew", "use", "req", "susp", "note", "ingame", "desc") ),
    // Sabotage
    L.marker([57.37, -42.49], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([60.39, -42.75], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([56.68, -49.26], {icon: iconSabotage, alt: "level3sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([59.17, -52.38], {icon: iconSabotage, alt: "level3sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([59.22, -55.23], {icon: iconSabotage, alt: "level3sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([54.52, -56.07], {icon: iconSabotage, alt: "level3sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([55.45, -56.68], {icon: iconSabotage, alt: "level3sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([56.75, -54.14], {icon: iconSabotage, alt: "level3sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([51.59, -58.66], {icon: iconSabotage, alt: "level3sab-camera", title: "Sabotage: Camera"}).bindLabel("Camera").bindPopup( popUp("img", "Sabotage", "Camera", "use", "req", "susp", "note", "ingame", "desc") ),
    // Distraction    
    L.marker([58.12, -54.93], {icon: iconDistraction, alt: "level3dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "Movie Crew / SFX Crew") ),
    L.marker([50.34, -41.61], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([44.02, -50.88], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([43.61, -49.48], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([41.37, -47.28], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([40.34, -44.47], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([44.65, -41.87], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    L.marker([45.08, -56.11], {icon: iconDistraction, alt: "level3dis-genrack", title: "Distraction: Generator Rack"}).bindLabel("Generator Rack").bindPopup( popUp("img", "Distraction", "Generator Rack", "Tamper / Restore Power", "req", "Movie Crew", "Will interrupt the shooting of the movie", "ingame", "desc") ),
    // Poison
    L.marker([56.72, -36.78], {icon: iconPoison, alt: "level3poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Unknown", "Kitchen Assistant", "note") ),
    L.marker([57.30, -56.07], {icon: iconPoison, alt: "level3poison", title: "Poison: SFX Crew"}).bindLabel("Water Bottle (SFX Crew)").bindPopup( popPoison("Water Bottle", "SFX Crew", "Kitchen Assistant", "note") ),
    // Item
    L.marker([55.35, -77.12], {icon: iconItem, alt: "level3item", title: "Item: Pyrotechnics Trigger"}).bindLabel("Pyrotechnics Trigger").bindPopup( popUp("trigger", "Item", "Pyrotechnics Trigger", "use", "req", "susp", "note", "A remote control. It seems it can activate something, maybe some kind of prop or special effect.", "desc") ),
    L.marker([52.32, -50.62], {icon: iconItem, alt: "level3item", title: "Item: Bosco Car Key"}).bindLabel("Bosco Car Key").bindPopup( popUp("img", "Item", "Bosco Car Key", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([45.61, -43.06], {icon: iconItem, alt: "level3item", title: "Item: Fuel Case Key"}).bindLabel("Fuel Case Key").bindPopup( popUp("img", "Item", "Fuel Case Key", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([61.24, -60.46], {icon: iconItem, alt: "level3item", title: "Item: High Octane Fuel"}).bindLabel("High Octane Fuel").bindPopup( popUp("fuel", "Item", "High Octane Fuel", "use", "Fuel Case Key or Lockpick / Crowbar", "susp", "note", "This high octane fuel could be highly unstable. Be careful when handling it, but maybe it could be used for some kind of grand finale. A perfect end to the third act, so to speak.", "desc") ),
    //Intel
    L.marker([60.78, -67.67], {icon: iconIntel, alt: "level3intel", title: "Intel: Unstable Fuel"}).bindLabel("Unstable Fuel").bindPopup( popUp("fuel", "Intel", "Unstable Fuel", "Listen to the conversation", "req", "susp", "note", "According to the special effects crew, they are experimenting with some kind of unstable super fuel. But I'm sure you can put it to good use.", "desc") ),
    L.marker([43.10, -59.23], {icon: iconIntel, alt: "level3intel", title: "Intel: Explosive Manual Override Code"}).bindLabel("Explosive Manual Override Code").bindPopup( popUp("manual", "Intel", "Explosive Manual Override Code", "Examine", "req", "susp", "note", "A code to manually override the automatic explosions set up on the set. A computer could be very useful now.", "desc") ),
    //Interacrion
    L.marker([58.12, -66.44], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Retractable Blades"}).bindLabel("Retractable Blades").bindPopup( popUp("blades", "Interaction", "Retractable Blades", "Sabotage", "Screwdriver", "SFX Crew", "On top of the movie prop structure", "ingame", "desc") ),
    L.marker([55.02, -70.88], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Air Ramp"}).bindLabel("Air Ramp").bindPopup( popUp("ramp", "Interaction", "Air Ramp", "Increase Pressure", "req", "SFX Crew", "note", "ingame", "desc") ),
    L.marker([48.51, -61.39], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Refueling Station"}).bindLabel("Refueling Station").bindPopup( popUp("refuel", "Interaction", "Refueling Station", "Swap Fuel", "High Octane Fuel", "Movie Crew / SFX Crew", "note", "ingame", "desc") ),
    L.marker([56.92, -57.96], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Pyrotechnics Controls"}).bindLabel("Pyrotechnics Controls").bindPopup( popUp("controls", "Interaction", "Pyrotechnics Controls", "Enable Manual Detonation", "req", "SFX Crew", "note", "ingame", "desc") ),
    // Camera
    L.marker([57.18, -43.98], {icon: iconCamera, alt: "level3camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[57.18, -43.98], [56.63, -40.86], [56.43, -43.81]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    // Locked
    L.marker([51.75, -52.33], {icon: iconLocked, alt: "level3locked", title: "Locked: Bosco Trailer Key"}).bindLabel("Locked Door (Bosco Trailer Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Bosco Trailer Key</p>"),
    L.marker([51.50, -41.17], {icon: iconLocked, alt: "level3locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([57.82, -75.14], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([59.17, -72.64], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([61.37, -62.31], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);

/* ==================================================================================================================================================================
   Level 4
   ================================================================================================================================================================== */

var level4other = L.layerGroup([

    L.marker([52.72, -41.08], {icon: iconWayUpDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 3-5</h1>"),

    L.marker([49.89, -49.61], {icon: iconPassage, alt: "level4passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),

    new L.Polyline([[51.17, -40.82], [52.74, -41.13]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level4ledge"}).bindLabel("Ledge"),

    L.marker([45.55, -32.82], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([55.20, -42.84], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.77, -46.27], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([42.48, -34.76], {icon: iconStairsDown, alt: "level4stairsupdown"}),

]);

var level4weapons = L.layerGroup([

    L.marker([35.99, -45.65], {icon: iconCoin, alt: "level4coin", title: "Weapon: Coin"}).bindLabel("Coin (x5)").bindPopup(txtCoin),
    L.marker([50.73, -43.02], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([53.40, -47.10], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([48.86, -42.84], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([52.93, -44.42], {icon: iconCleaver, alt: "level4cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([51.78, -44.64], {icon: iconKnife, alt: "level4knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),
    L.marker([48.63, -44.60], {icon: iconKnife, alt: "level4knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),

]);

var level4poi = L.layerGroup([

    // Hiding Spot
    L.marker([53.48, -41.96], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    // Blend
    L.marker([52.96, -43.59], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Kitchen Assistant").bindPopup("<h2>Blend In</h2><h1>Kitchen Assistant</h1>"),
    // Sabotage
    L.marker([40.34, -42.18], {icon: iconSabotage, alt: "level4sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "Movie Crew") ),
    L.marker([44.93, -50.71], {icon: iconSabotage, alt: "level4sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([41.40, -52.77], {icon: iconSabotage, alt: "level4sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([50.76, -46.36], {icon: iconSabotage, alt: "level4sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    // Distraction
    L.marker([41.24, -41.35], {icon: iconDistraction, alt: "level4dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "Movie Crew / SFX Crew") ),
    L.marker([54.34, -44.38], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    // Poison
    L.marker([40.97, -43.28], {icon: iconPoison, alt: "level4poison", title: "Poison: Dino Bosco"}).bindLabel("Water Bottle (Dino Bosco)").bindPopup( popPoison("Water Bottle", "Dino Bosco", "Kitchen Assistant", "note") ),
    // Item
    L.marker([46.92, -36.16], {icon: iconItem, alt: "level4item", title: "Item: Shop Key"}).bindLabel("Shop Key").bindPopup( popUp("img", "Item", "Shop Key", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([52.02, -46.53], {icon: iconItem, alt: "level4item", title: "Item: Bosco Trailer Key"}).bindLabel("Bosco Trailer Key").bindPopup( popUp("img", "Item", "Bosco Trailer Key", "use", "req", "susp", "note", "ingame", "desc") ),
    // Intel
    L.marker([47.90, -49.87], {icon: iconIntel, alt: "level4intel", title: "Intel: The Robot Teeth"}).bindLabel("The Robot Teeth").bindPopup( popUp("robotteeth", "Intel", "The Robot Teeth", "Listen to the conversation", "req", "susp", "note", "According to the film crew, the prop robot suspended above the set has a dangerous set of teeth. Who knows, these teeth could bite back in a fatal way.", "desc") ),
    L.marker([52.72, -46.05], {icon: iconIntel, alt: "level4intel", title: "Intel: The Q&A Session"}).bindLabel("The Q&A Session").bindPopup( popUp("session", "Intel", "The Q&A Session", "Listen to the conversation", "req", "susp", "note", "According to the Bosco's agent, a Q&A is ready to take place. I presume an event like this will always have some sort of refreshments prepared for our star.", "desc") ),
    // Camera
    L.marker([45.67, -38.67], {icon: iconCamera, alt: "level4camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[45.67, -38.67], [47.21, -36.95], [44.90, -36.73]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    // Locked
    L.marker([46.61, -42.27], {icon: iconLocked, alt: "level4locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([45.82, -35.59], {icon: iconLocked, alt: "level4locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),

]);

/* ==================================================================================================================================================================
   Level 5
   ================================================================================================================================================================== */

var level5other = L.layerGroup([

    L.marker([54.36, -48.47], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([48.01, -39.85], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([52.72, -41.08], {icon: iconWayDown, alt: "level5waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 3-5</h1>"),

    L.marker([53.95, -41.74], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.59, -47.72], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[52.85, -41.26], [54.77, -41.61]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level5ledge"}).bindLabel("Ledge"),

    L.marker([55.77, -46.18], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([44.62, -33.39], {icon: iconStairsDown, alt: "level5stairsupdown"}),

]);

var level5weapons = L.layerGroup([

]);

var level5poi = L.layerGroup([

    // Hiding Spot
    L.marker([43.06, -39.11], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.13, -44.25], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.37, -46.31], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    // Conceal
    L.marker([53.33, -43.33], {icon: iconConceal, alt: "level5conceal"}).bindLabel("Conceal Item: Waste Basket"),
    // Sabotage
    L.marker([44.24, -30.71], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([46.28, -37.13], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the 6th level</p>"),
    // Distraction
    L.marker([54.44, -42.27], {icon: iconDistraction, alt: "level5dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([54.23, -43.63], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),
    // Camera
    L.marker([54.90, -44.07], {icon: iconCamera, alt: "level5camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[54.90, -44.07], [54.54, -46.53], [56.19, -46.14]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level5camera"}).bindLabel("Security Camera"),
    // Locked
    L.marker([54.49, -45.87], {icon: iconLocked, alt: "level5locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),

]);

/* ==================================================================================================================================================================
   Level 6
   ================================================================================================================================================================== */

var level6other = L.layerGroup([

    L.marker([48.10, -40.29], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Up</h2><h1>Scale the Clock Tower</h1>"),
    L.marker([48.13, -39.24], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([54.36, -48.47], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),

    L.marker([53.43, -47.72], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.97, -47.46], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.69, -41.66], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[50.68, -47.46], [56.89, -48.99]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level6ledge"}).bindLabel("Ledge"),

    L.marker([50.40, -40.07], {icon: iconStairsUp, alt: "level6stairsupdown"}),
    L.marker([55.87, -46.23], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),

]);

var level6weapons = L.layerGroup([

    L.marker([54.26, -44.47], {icon: iconExtinguisher, alt: "level6extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([50.79, -45.39], {icon: iconFireAxe, alt: "level6fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([53.09, -43.41], {icon: iconCrowbar, alt: "level6crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

]);

var level6poi = L.layerGroup([

    // Hiding Spot
    L.marker([52.56, -41.83], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    // Distraction
    L.marker([56.82, -44.64], {icon: iconDistraction, alt: "level6dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    // Sabotage
    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level6sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
        new L.Polyline([[48.71, -43.72], [51.28, -42.36]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-chandelier"}),
        L.marker([51.28, -42.36], {icon: iconPointRed, alt: "level6sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
    // Camera
    L.marker([54.36, -42.18], {icon: iconEvidence, alt: "level6evidence", title: "Camera Recorder: Cafe"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    // Locked
    L.marker([54.44, -45.87], {icon: iconLocked, alt: "level6locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),

]);

/* ==================================================================================================================================================================
   Level 7
   ================================================================================================================================================================== */

var level7other = L.layerGroup([

    L.marker([48.10, -40.29], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Down</h2><h1>Scale</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Down</h2><h1>Scale the Clock Tower</h1>"),

    L.marker([47.45, -40.64], {icon: iconPassage, alt: "level7passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    L.marker([56.68, -44.73], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([52.61, -40.47], {icon: iconStairsDown, alt: "level7stairsupdown"}),

]);

var level7weapons = L.layerGroup([

    L.marker([56.58, -46.18], {icon: iconWrench, alt: "level7wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level7poi = L.layerGroup([

    // Hiding Spot
    L.marker([55.97, -46.14], {icon: iconHidingSpot, alt: "level7hidingspot"}).bindLabel("Hiding Spot"),
    // Conceal
    L.marker([47.51, -42.58], {icon: iconConceal, alt: "level7conceal"}).bindLabel("Conceal Item: Waste Basket"),
    // Distraction    
    L.marker([46.98, -42.58], {icon: iconDistraction, alt: "level7dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Kitchen Assistant") ),

]);
    
/* ==================================================================================================================================================================
   All Markers
   ================================================================================================================================================================== */

var allMarkers = L.layerGroup([
    level2markers = L.layerGroup([level2other, level2weapons, level2poi]),
    level3markers = L.layerGroup([level3other, level3weapons, level3poi]),
    level4markers = L.layerGroup([level4other, level4weapons, level4poi]),
    level5markers = L.layerGroup([level5other, level5weapons, level5poi]),
    level6markers = L.layerGroup([level6other, level6weapons, level6poi]),
    level7markers = L.layerGroup([level7other, level7weapons, level7poi])
]);