var mapcolorado = L.map('mapcolorado', {maxBoundsViscosity: 1}).setView([65.62, -66.79], 4);
mapcolorado.zoomControl.setPosition('topright');
mapcolorado.setMaxBounds([[-27.3, -197.9],[84.19, 80.156]]);
$("#level-1").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_colorado/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1base = L.tileLayer('img/map_colorado/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapcolorado),
    mapLevel2base = L.tileLayer('img/map_colorado/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = mapLevel0scarecrow = L.tileLayer('img/map_colorado/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = mapLevel1scarecrow = L.tileLayer('img/map_colorado/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2scarecrow = L.tileLayer('img/map_colorado/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3scarecrow = L.tileLayer('img/map_colorado/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0cook = mapLevel0tech = mapLevel0soldier = L.tileLayer('img/map_colorado/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1cook = mapLevel1tech = mapLevel1soldier = L.tileLayer('img/map_colorado/lvl_1/regular/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2cook = mapLevel2tech = mapLevel2soldier = L.tileLayer('img/map_colorado/lvl_2/regular/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3cook = mapLevel3tech = mapLevel3soldier = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0expl = L.tileLayer('img/map_colorado/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1expl = L.tileLayer('img/map_colorado/lvl_1/expl/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2expl = L.tileLayer('img/map_colorado/lvl_2/regular/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3expl = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0elite = L.tileLayer('img/map_colorado/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1elite = L.tileLayer('img/map_colorado/lvl_1/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2elite = L.tileLayer('img/map_colorado/lvl_2/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3elite = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0hacker = L.tileLayer('img/map_colorado/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1hacker = L.tileLayer('img/map_colorado/lvl_1/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2hacker = L.tileLayer('img/map_colorado/lvl_2/hacker/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3hacker = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0specops = mapLevel0pointman = L.tileLayer('img/map_colorado/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1specops = mapLevel1pointman = L.tileLayer('img/map_colorado/lvl_1/specops/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2specops = mapLevel2pointman = L.tileLayer('img/map_colorado/lvl_2/specops/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3specops = mapLevel3pointman = L.tileLayer('img/map_colorado/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */

var level0other = L.layerGroup([

    L.marker([75.29, -95.14], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Tornado Shelter"}).bindLabel("Tornado Shelter").bindPopup("<img src='img/map_colorado/screenshots/exit_bunker.jpg'><h2>Exit Locaton</h2><h1>Tornado Shelter</h1>"),
    L.marker([70.17, -98.52], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([72.27, -92.15], {icon: iconStairsUp, alt: "level0stairsupdown"}),
]);

var level0weapons = L.layerGroup([

    L.marker([73.59, -90.92], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Modern Lethal Syringe"}).bindLabel("Modern Lethal Syringe").bindPopup( popUp("img", "Poison", "Modern Lethal Syringe", "use", "req", "susp", "note", "ingame", "desc") ),

]);

var level0poi = L.layerGroup([

    L.marker([71.64, -100.2], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.52, -88.19], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([72.86, -88.90], {icon: iconDistraction, alt: "level0dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "all") ),
    L.marker([71.30, -94.13], {icon: iconDistraction, alt: "level0dis-boiler", title: "Distraction: Boiler"}).bindLabel("Boiler").bindPopup( popUp("img", "Distraction", "Boiler", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([71.60, -97.64], {icon: iconItem, alt: "level0item", title: "Item: Basement Key"}).bindLabel("Basement Key").bindPopup( popUp("keybasement", "Item", "Basement Key", "use", "req", "susp", "Carried by a Militia Elite soldier", "This is a key for the house basement where Ezra Berg is currently interrogating a prisoner.", "desc")),
    L.marker([72.15, -95.27], {icon: iconItem, alt: "level0item", title: "Item: Garage Key"}).bindLabel("Garage Key").bindPopup( popUp("keygarage", "Item", "Garage Key", "use", "req", "susp", "Carried by Ezra Berg", "This is a key that grants access to Ezra Berg's makeshift drug laboratory built inside the garage on the side of the main house.", "desc")),
    L.marker([72.51, -96.98], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Administer Overdose"}).bindLabel("Administer Overdose").bindPopup( popUp("img", "Interaction", "Administer Overdose", "use", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.47, -93.73], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Face Scanner"}).bindLabel("Face Scanner").bindPopup( popUp("img", "Interaction", "Face Scanner", "Scan Rose's Face", "Sean Rose Face Mask or Sean Rose body", "all", "note", "ingame", "desc") ),
    L.marker([74.53, -95.44], {icon: iconLocation, alt: "level0location", title: "Location: Tornado Shelter"}).bindLabel("Tornado Shelter").bindPopup( popUp("img", "Location", "Tornado Shelter", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([71.04, -99.49], {icon: iconLocked, alt: "level0locked", title: "Locked: Basement Key"}).bindLabel("Locked Door (Basement Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Basement Key</p>"),

]);

/* ==================================================================================================================================================================
    Level 1
================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([55.70, -41.92], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover on the Demolition Range"}).bindLabel("Undercover on the Demolition Range").bindPopup("<img src='img/map_colorado/screenshots/enter_range.jpg'><h2>Starting Locaton</h2><h1>Undercover on the Demolition Range</h1>"),
    L.marker([67.32, -33.92], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover in the Garage"}).bindLabel("Undercover in the Garage").bindPopup("<img src='img/map_colorado/screenshots/enter_garage.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Garage</h1>"),
    L.marker([64.24, -66.22], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover by the Greenhouse"}).bindLabel("Undercover by the Greenhouse").bindPopup("<img src='img/map_colorado/screenshots/enter_greenhouse.jpg'><h2>Starting Locaton</h2><h1>Undercover by the Greenhouse</h1>"),
    L.marker([11.78, -30.32], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Southern Farm Perimeter"}).bindLabel("Southern Farm Perimeter").bindPopup("<img src='img/map_colorado/screenshots/enter_perim.jpg'><h2>Starting Locaton</h2><h1>Southern Farm Perimeter</h1>"),
    L.marker([29.99, -64.81], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Old Orchard"}).bindLabel("Old Orchard").bindPopup("<img src='img/map_colorado/screenshots/enter_orchard.jpg'><h2>Starting Locaton</h2><h1>Old Orchard</h1>"),
    L.marker([65.38, -107.3], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: West Bridge"}).bindLabel("West Bridge").bindPopup("<img src='img/map_colorado/screenshots/enter_bridge.jpg'><h2>Starting Locaton</h2><h1>West Bridge</h1>"),
    L.marker([63.27, -19.20], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Quad Bike"}).bindLabel("Quad Bike").bindPopup("<img src='img/map_colorado/screenshots/exit_quad.jpg'><h2>Exit Locaton</h2><h1>Quad Bike</h1><p class='req'>Requires Quad Bike Keys</p><p class='note'>Unavailable during story mission</p>"),
    L.marker([13.83, -50.88], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Front Gate"}).bindLabel("Front Gate").bindPopup("<img src='img/map_colorado/screenshots/exit_gate.jpg'><h2>Exit Locaton</h2><h1>Front Gate</h1><p class='note'>Unavailable during story mission</p>"),
    L.marker([49.75, -95.58], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: River"}).bindLabel("River").bindPopup("<img src='img/map_colorado/screenshots/exit_river.jpg'><h2>Exit Locaton</h2><h1>River</h1><p class='note'>Unavailable during story mission</p>"),
    L.marker([66.30, -110.4], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Bridge"}).bindLabel("Bridge").bindPopup("<img src='img/map_colorado/screenshots/exit_bridge.jpg'><h2>Exit Locaton</h2><h1>Bridge</h1><p class='note'>Unavailable during story mission</p>"),

    L.marker([58.49, -98.65], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: West Bridge"}).bindLabel("Large Agency Pickup: West Bridge").bindPopup("<img src='img/map_colorado/screenshots/ica_bridge.jpg'><h2>Large Agency Pickup</h2><h1>West Bridge</h1>"),
    L.marker([23.52, -31.94], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Southern Farm Perimeter"}).bindLabel("Large Agency Pickup: Southern Farm Perimeter").bindPopup("<img src='img/map_colorado/screenshots/ica_perim.jpg'><h2>Large Agency Pickup</h2><h1>Southern Farm Perimeter</h1>"),
    L.marker([60.19, -55.67], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Orchard Road"}).bindLabel("Small Agency Pickup: Orchard Road").bindPopup("<img src='img/map_colorado/screenshots/ica_orchard.jpg'><h2>Small Agency Pickup</h2><h1>Orchard Road</h1>"),
    L.marker([50.26, -26.19], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Hay Shed"}).bindLabel("Small Agency Pickup: Hay Shed").bindPopup("<img src='img/map_colorado/screenshots/ica_hay.jpg'><h2>Small Agency Pickup</h2><h1>Hay Shed</h1>"),
    L.marker([65.40, -24.82], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Courtyard Shed"}).bindLabel("Small Agency Pickup: Courtyard Shed").bindPopup("<img src='img/map_colorado/screenshots/ica_courtyard.jpg'><h2>Small Agency Pickup</h2><h1>Courtyard Shed</h1>"),
    L.marker([63.72, -80.41], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Truck Loading Area"}).bindLabel("Small Agency Pickup: Truck Loading Area").bindPopup("<img src='img/map_colorado/screenshots/ica_truck.jpg'><h2>Small Agency Pickup</h2><h1>Truck Loading Area</h1>"),
    L.marker([74.89, -93.12], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Ground Floor Laundry Room"}).bindLabel("Small Agency Pickup: Ground Floor Laundry Room").bindPopup("<img src='img/map_colorado/screenshots/ica_laundry.jpg'><h2>Small Agency Pickup</h2><h1>Ground Floor Laundry Room</h1>"),

    L.marker([74.78, -73.03], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([58.72, -32.69], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([58.72, -43.41], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([58.67, -25.79], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([22.51, -57.91], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([65.27, -24.30], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([23.36, -29.13], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([60.97, -24.34], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([49.43, -82.79], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([47.12, -26.01], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([42.06, -26.05], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([58.17, -24.34], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([72.47, -23.86], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([75.61, -42.23], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([75.61, -70.57], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([78.13, -89.42], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([53.14, -96.50], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([31.91, -59.89], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([20.71, -58.57], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([62.26, -95.44], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([65.34, -78.75], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([55.45, -75.62], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([52.07, -61.12], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([58.58, -53.87], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([62.45, -26.23], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([73.02, -83.93], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([71.46, -100.7], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.98, -98.26], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([77.03, -95.18], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    L.marker([50.95, -72.02], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([66.67, -29.13], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([68.84, -44.82], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Up</h2><h1>Climb</h1>"),    
    L.marker([74.77, -95.22], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),

    L.marker([48.66, -78.04], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([67.03, -92.06], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([68.81, -84.94], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([71.24, -76.81], {icon: iconStairsUp, alt: "level1stairsupdown"}),    
    L.marker([74.91, -83.89], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([74.16, -50.05], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([70.83, -100.1], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([72.44, -91.49], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),

]);

var level1weapons = L.layerGroup([

    L.marker([22.71, -31.24], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([56.94, -42.05], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([46.89, -72.99], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([46.92, -74.17], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([42.32, -59.41], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([46.43, -62.00], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([49.43, -59.45], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([50.95, -82.79], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([56.60, -94.57], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([57.01, -92.90], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([62.45, -93.12], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([56.02, -83.84], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([65.64, -80.46], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([65.09, -79.67], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([59.33, -72.81], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([61.01, -73.12], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([56.36, -70.09], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([56.99, -59.28], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([58.19, -55.63], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([52.88, -43.94], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([61.10, -102.9], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([74.50, -99.14], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([76.50, -99.31], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),
    L.marker([61.68, -66.13], {icon: iconApricot, alt: "level1apricot", title: "Weapon: Apricot"}).bindLabel("Apricot").bindPopup(txtApricot),

    // Poison
    L.marker([49.61, -79.80], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([69.34, -44.78], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([51.64, -81.91], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Lethal Poison"}).bindLabel("Lethal Poison").bindPopup(txtLethalPoison + "<p class='note'>One more vial carried by Ezra Berg</p>"),
    L.marker([75.10, -92.10], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Explosive
    L.marker([72.36, -97.95], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([69.71, -41.17], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([55.42, -62.53], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.72, -36.16], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([54.26, -24.91], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([59.06, -40.34], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([69.76, -45.35], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([72.60, -107.1], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),

    // Firearm    
    L.marker([64.92, -62.53], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2").bindPopup(txtFusilG2),
    L.marker([64.90, -65.91], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Shotgun Tactical Bartoli 12G"}).bindLabel("Shotgun: Tactical Bartoli 12G").bindPopup(txtTacticalBartoli12G),
    L.marker([63.43, -66.00], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: SMG HX-10"}).bindLabel("SMG: HX-10").bindPopup(txtHX10),
    L.marker([64.90, -63.63], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Assault Rifle Ammo"}).bindLabel("Assault Rifle Ammo (x3)").bindPopup(txtAmmoRifle),
    L.marker([64.90, -64.86], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo (x2)").bindPopup(txtAmmoPistol),
    L.marker([64.96, -66.92], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Shotgun Ammo"}).bindLabel("Shotgun Ammo (x2)").bindPopup(txtAmmoShotgun),
    L.marker([63.89, -67.80], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),
    L.marker([63.15, -65.12], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),
    L.marker([70.61, -59.37], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),
    L.marker([70.61, -61.74], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),
    L.marker([70.61, -64.02], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo").bindPopup(txtAmmoSMG),
    // Firearm   
    L.marker([71.44, -96.19], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
    L.marker([73.30, -45.65], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Pistol Bartoli 75R"}).bindLabel("Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2").bindPopup( popUp("img", "Firearm", "Various Guns", "use", "req", "susp", "Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2", "ingame", "desc") ),
    L.marker([73.30, -45.65], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: SMG HX-7"}).bindLabel("Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2").bindPopup( popUp("img", "Firearm", "Various Guns", "use", "req", "susp", "Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2", "ingame", "desc") ),
    L.marker([73.30, -45.65], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Shotgun Tactical Bartoli 12G"}).bindLabel("Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2").bindPopup( popUp("img", "Firearm", "Various Guns", "use", "req", "susp", "Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2", "ingame", "desc") ),
    L.marker([73.30, -45.65], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2").bindPopup( popUp("img", "Firearm", "Various Guns", "use", "req", "susp", "Pistol Bartoli 75R, SMG HX-7, Shotgun Tactical Bartoli 12G, Assault Rifle Fusil G2", "ingame", "desc") ),
    L.marker([72.97, -45.65], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo (x2), SMG Ammo (x3), Shotgun Ammo (x3), Assault Rifle Ammo (x2)").bindPopup( popUp("img", "Ammo", "Various Ammo", "use", "req", "susp", "Pistol, SMG, Shotgun, Rifle", "ingame", "desc") ),
    L.marker([72.97, -45.65], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("Pistol Ammo (x2), SMG Ammo (x3), Shotgun Ammo (x3), Assault Rifle Ammo (x2)").bindPopup( popUp("img", "Ammo", "Various Ammo", "use", "req", "susp", "Pistol, SMG, Shotgun, Rifle", "ingame", "desc") ),
    L.marker([72.97, -45.65], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Shotgun Ammo"}).bindLabel("Pistol Ammo (x2), SMG Ammo (x3), Shotgun Ammo (x3), Assault Rifle Ammo (x2)").bindPopup( popUp("img", "Ammo", "Various Ammo", "use", "req", "susp", "Pistol, SMG, Shotgun, Rifle", "ingame", "desc") ),
    L.marker([72.97, -45.65], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Assault Rifle Ammo"}).bindLabel("Pistol Ammo (x2), SMG Ammo (x3), Shotgun Ammo (x3), Assault Rifle Ammo (x2)").bindPopup( popUp("img", "Ammo", "Various Ammo", "use", "req", "susp", "Pistol, SMG, Shotgun, Rifle", "ingame", "desc") ),

    // Non-Lethal
    L.marker([70.98, -46.71], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([69.70, -71.89], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([61.33, -19.90], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([73.30, -44.51], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([53.25, -25.35], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([18.06, -61.69], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([52.24, -81.87], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([23.80, -58.13], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([46.10, -70.00], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([59.19, -44.38], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([67.75, -32.87], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([67.32, -99.22], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([73.99, -74.57], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([24.96, -58.40], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([58.65, -73.47], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([24.68, -57.26], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([30.10, -42.75], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([69.02, -27.29], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([46.16, -44.56], {icon: iconPipe, alt: "level1pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([74.17, -96.45], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([76.55, -93.51], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([72.39, -84.77], {icon: iconCowboyBust, alt: "level1cowbust", title: "Weapon: Cowboy Bust"}).bindLabel("Cowboy Bust").bindPopup(txtCowboyBust),
    L.marker([74.29, -92.24], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),

    // Lethal
    L.marker([65.05, -68.64], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([63.25, -69.60], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([62.53, -31.77], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([75.03, -74.97], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([45.36, -58.22], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([56.34, -60.33], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([56.55, -58.05], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([73.81, -25.53], {icon: iconOldAxe, alt: "level1oldaxe", title: "Weapon: Old Axe"}).bindLabel("Old Axe").bindPopup(txtOldAxe),

]);

var level1poi = L.layerGroup([

    // Hiding Spot
    L.marker([31.61, -67.06], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([16.63, -58.88], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([34.01, -59.41], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.95, -80.11], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.46, -78.57], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([64.84, -94.87], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([58.49, -94.74], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.73, -68.24], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([50.40, -55.19], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.67, -55.50], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([64.96, -59.28], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([27.09, -28.12], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.58, -47.76], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.88, -44.82], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([58.90, -33.61], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.48, -24.69], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([65.49, -26.01], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([65.83, -24.78], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.64, -71.76], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.66, -76.90], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([68.38, -44.73], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.53, -94.35], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.83, -112.2], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.83, -112.2], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([77.21, -94.61], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([70.69, -92.10], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([71.07, -99.00], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.18, -84.81], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.71, -93.95], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([50.28, -71.32], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([65.14, -91.66], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([60.90, -40.73], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([59.91, -24.69], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([67.85, -31.24], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([74.75, -73.43], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([76.42, -96.10], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([69.62, -93.12], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([71.92, -85.95], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),

    // Weapon Crate
    L.marker([49.12, -73.65], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([62.20, -55.72], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([64.79, -24.69], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([68.39, -42.05], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([73.31, -86.08], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    // Disguise
    L.marker([70.52, -70.53], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Militia Elite"}).bindLabel("Militia Elite").bindPopup("<img src='img/map_colorado/screenshots/disg_elite.jpg'><h2>Disguise</h2><h1>Militia Elite</h1>"),
    L.marker([49.46, -77.34], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Militia Technician"}).bindLabel("Militia Technician").bindPopup("<img src='img/map_colorado/screenshots/disg_tech.jpg'><h2>Disguise</h2><h1>Militia Technician</h1>"),
    L.marker([63.48, -92.46], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Scarecrow"}).bindLabel("Scarecrow").bindPopup("<img src='img/map_colorado/screenshots/disg_scarecrow.jpg'><h2>Disguise</h2><h1>Scarecrow</h1>"),
    L.marker([73.06, -87.05], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Militia Elite"}).bindLabel("Militia Elite").bindPopup("<img src='img/map_colorado/screenshots/disg_elite.jpg'><h2>Disguise</h2><h1>Militia Elite</h1>"),

    // NPC
    L.marker([50.98, -79.27], {icon: iconNPC, alt: "level1npc", title: "NPC: Point Man"}).bindLabel("Point Man").bindPopup( popUp("img", "NPC", "Point Man", "use", "req", "susp", "note", "ingame", "desc") ),

    // Blend In
    L.marker([74.76, -63.54], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([70.09, -34.80], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([40.61, -44.25], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([37.37, -63.32], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([63.48, -91.36], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([60.34, -72.15], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Scarecrow").bindPopup("<h2>Blend In</h2><h1>Scarecrow</h1>"),
    L.marker([68.68, -77.60], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Soldier").bindPopup("<h2>Blend In</h2><h1>Militia Soldier</h1>"),
    L.marker([63.68, -66.92], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Soldier").bindPopup("<h2>Blend In</h2><h1>Militia Soldier</h1>"),
    L.marker([59.91, -31.59], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Soldier").bindPopup("<h2>Blend In</h2><h1>Militia Soldier</h1>"),
    L.marker([69.76, -73.91], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Soldier").bindPopup("<h2>Blend In</h2><h1>Militia Soldier</h1>"),
    L.marker([70.68, -72.33], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Soldier").bindPopup("<h2>Blend In</h2><h1>Militia Soldier</h1>"),
    L.marker([63.27, -31.99], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Technician").bindPopup("<h2>Blend In</h2><h1>Militia Technician</h1>"),
    L.marker([64.05, -33.92], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Technician").bindPopup("<h2>Blend In</h2><h1>Militia Technician</h1>"),
    L.marker([67.65, -34.98], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Militia Technician").bindPopup("<h2>Blend In</h2><h1>Militia Technician</h1>"),
    L.marker([49.78, -39.02], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Explosives Specialist").bindPopup("<h2>Blend In</h2><h1>Explosives Specialist</h1>"),
    L.marker([50.79, -35.72], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Explosives Specialist").bindPopup("<h2>Blend In</h2><h1>Explosives Specialist</h1>"),
    L.marker([56.43, -42.71], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Explosives Specialist").bindPopup("<h2>Blend In</h2><h1>Explosives Specialist</h1>"),
    L.marker([73.31, -41.08], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Point Man").bindPopup("<h2>Blend In</h2><h1>Point Man</h1>"),
    L.marker([73.36, -43.15], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Point Man").bindPopup("<h2>Blend In</h2><h1>Point Man</h1>"),
    L.marker([73.66, -94.83], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),
    L.marker([72.85, -97.86], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),
    L.marker([72.03, -95.66], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),

    // Sabotage
    L.marker([55.07, -61.52], {icon: iconSabotage, alt: "level1sab-leak", title: "Sabotage: Stove"}).bindLabel("Stove").bindPopup( popGlobal(sabStove, "Militia Cook") ),
    L.marker([72.46, -55.01], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([69.45, -46.71], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([69.38, -43.72], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([74.36, -54.97], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([75.45, -65.52], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([72.89, -37.79], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([62.75, -33.92], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([58.24, -48.64], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([37.37, -32.25], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([31.09, -41.96], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([25.36, -28.91], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([36.63, -60.68], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([67.79, -36.91], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([65.85, -30.45], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([54.08, -43.15], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([32.13, -34.36], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([21.20, -53.87], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([56.77, -61.83], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([74.12, -72.86], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([72.60, -43.72], {icon: iconSabotage, alt: "level1sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([51.28, -74.04], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[51.28, -74.04], [49.15, -74.79]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([49.15, -74.79], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("Power Outlet").bindPopup( popGlobal(sabOutlet, "all") ),
    L.marker([72.50, -45.39], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[72.50, -45.39], [73.89, -46.23]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([73.89, -46.23], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("Power Outlet").bindPopup( popGlobal(sabOutlet, "all") ),
    L.marker([64.45, -68.20], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[64.45, -68.20], [64.09, -70.09], [62.77, -70.18]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-wire"}),
    L.marker([66.79, -34.71], {icon: iconSabotage, alt: "level1sab-carlift", title: "Sabotage: Car Lift"}).bindLabel("Car Lift").bindPopup( popUp("img", "Sabotage", "Car Lift", "Release Car Lift Suspension", "req", "all", "note", "ingame", "desc") ),
    L.marker([66.10, -39.33], {icon: iconSabotage, alt: "level1sab-fueltank", title: "Sabotage: Fuel Tank"}).bindLabel("Fuel Tank").bindPopup( popUp("img", "Sabotage", "Fuel Tank", "Loosen Valve", "Wrench", "all", "note", "ingame", "desc") ),
    L.marker([67.44, -47.10], {icon: iconSabotage, alt: "level1sab-haybale", title: "Sabotage: Hay Bale"}).bindLabel("Hay Bale").bindPopup( popUp("img", "Sabotage", "Hay Bale", "use", "req", "susp", "Winch is on the second floor", "ingame", "desc") ),
    L.marker([72.07, -52.47], {icon: iconSabotage, alt: "level1sab-ramsafe", title: "Sabotage: Ram Safety System"}).bindLabel("Ram Safety System").bindPopup( popUp("img", "Sabotage", "Ram Safety System", "Turn Off", "req", "all", "note", "ingame", "desc") ),
        new L.Polyline([[72.07, -52.47], [70.55, -48.60]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-ramsafe"}),
        L.marker([70.55, -48.60], {icon: iconPointRed, alt: "level1sab-ramsafe"}).bindLabel("Ram Controls").bindPopup( popUp("img", "Sabotage", "Ram Controls", "Fire Ram", "req", "all", "note", "ingame", "desc") ),
    L.marker([59.57, -46.93], {icon: iconSabotage, alt: "level1sab-smartwatch", title: "Sabotage: Sean Rose Smartwatch"}).bindLabel("Sean Rose's Smartwatch").bindPopup( popUp("img", "Sabotage", "Sean Rose's Smartwatch", "Insert Battery", "Explosive Watch Battery", "all", "One of two places where Sean takes off the smarwatch to wash his hands", "ingame", "desc") ),
    L.marker([74.10, -92.85], {icon: iconSabotage, alt: "level1sab-leak", title: "Sabotage: Stove"}).bindLabel("Stove").bindPopup( popGlobal(sabStove, "Militia Cook") ),
    L.marker([71.46, -92.02], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([71.95, -104.8], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([73.09, -104.7], {icon: iconSabotage, alt: "level1sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([69.17, -90.08], {icon: iconSabotage, alt: "level1sab-tractor", title: "Sabotage: Garden Tractor"}).bindLabel("Garden Tractor").bindPopup( popGlobal(sabTractor, "all") ),
    L.marker([54.97, -43.06], {icon: iconSabotage, alt: "level1sab-breach", title: "Sabotage: Breach Charge Mold"}).bindLabel("Breach Charge Mold").bindPopup( popUp("img", "Sabotage", "Breach Charge Mold", "Overpower Explosive", "Nitroglycerin", "all", "note", "ingame", "desc") ),

    // Distraction
    L.marker([32.17, -64.07], {icon: iconDistraction, alt: "level1dis-pump", title: "Distraction: Water Pump"}).bindLabel("Water Pump").bindPopup( popUp("img", "Distraction", "Water Pump", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([66.49, -74.31], {icon: iconDistraction, alt: "level1dis-forklift", title: "Distraction: Forklift"}).bindLabel("Forklift").bindPopup( popGlobal(disForklift, "all") ),
    L.marker([18.85, -57.43], {icon: iconDistraction, alt: "level1dis-forklift", title: "Distraction: Forklift"}).bindLabel("Forklift").bindPopup( popGlobal(disForklift, "all") ),
    L.marker([67.20, -43.24], {icon: iconDistraction, alt: "level1dis-forklift", title: "Distraction: Forklift"}).bindLabel("Forklift").bindPopup( popGlobal(disForklift, "all") ),
    L.marker([54.26, -27.29], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([48.80, -71.67], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([64.33, -94.79], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([65.07, -70.92], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([50.62, -73.34], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([50.12, -82.96], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([58.99, -46.36], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([58.97, -27.68], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([62.73, -90.96], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([62.77, -70.18], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([55.05, -54.62], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([61.18, -55.76], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([32.17, -32.60], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([57.20, -43.11], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([62.71, -27.81], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([69.05, -72.02], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([56.53, -27.99], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([59.33, -32.08], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([75.23, -74.09], {icon: iconDistraction, alt: "level1dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "all") ),
    L.marker([76.24, -95.71], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([76.59, -95.80], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([76.33, -100.1], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([72.62, -83.71], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Military Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([70.53, -95.58], {icon: iconDistraction, alt: "level1dis-server", title: "Distraction: Server"}).bindLabel("Server").bindPopup( popUp("img", "Distraction", "Server", "Turn On/Off", "req", "Hacker", "note", "ingame", "desc") ),
    L.marker([71.18, -95.22], {icon: iconDistraction, alt: "level1dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),
    L.marker([71.25, -86.35], {icon: iconDistraction, alt: "level1dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([74.31, -89.69], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([73.70, -96.54], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),

    // Alarm
    L.marker([51.53, -77.29], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([53.43, -27.50], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([59.40, -33.79], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([69.03, -46.05], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([71.39, -94.17], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Poison
    L.marker([70.06, -31.72], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Bottle of Beer (Militia Soldier)").bindPopup( popPoison("Bottle of Beer", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([76.03, -23.02], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Bottle of Beer (Militia Soldier)").bindPopup( popPoison("Bottle of Beer", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([50.95, -76.24], {icon: iconPoison, alt: "level1poison", title: "Poison: Point Man"}).bindLabel("Water Bottle (Point Man)").bindPopup( popPoison("Water Bottle", "Point Man", "Militia Cook", "note") ),
    L.marker([70.55, -47.32], {icon: iconPoison, alt: "level1poison", title: "Poison: Maya Parvati"}).bindLabel("Water Bottle (Maya Parvati)").bindPopup( popPoison("Water Bottle", "Maya Parvati", "all", "note") ),
    L.marker([57.89, -91.18], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Technician"}).bindLabel("Water Bottle (Militia Technician)").bindPopup( popPoison("Water Bottle", "Militia Technician", "Militia Cook", "note") ),
    L.marker([62.59, -89.42], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Technician"}).bindLabel("Coffee Glass (Militia Technician)").bindPopup( popPoison("Coffee Glass", "Militia Technician", "Militia Cook", "note") ),
    L.marker([56.46, -41.13], {icon: iconPoison, alt: "level1poison", title: "Poison: Explosives Specialist"}).bindLabel("Coffee Glass (Explosives Specialist)").bindPopup( popPoison("Coffee Glass", "Explosives Specialist", "all", "note") ),
    L.marker([57.20, -64.20], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Unknown", "Militia Cook", "note") ),
    L.marker([57.82, -65.69], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Coffee Glass (Militia Soldier)").bindPopup( popPoison("Coffee Glass", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([59.22, -24.74], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Coffee Glass (Militia Soldier)").bindPopup( popPoison("Coffee Glass", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([58.44, -66.62], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Technician"}).bindLabel("Plate of Food (Militia Technician)").bindPopup( popPoison("Plate of Food", "Militia Technician", "Militia Cook", "note") ),
    L.marker([58.24, -62.92], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Plate of Food (Militia Soldier)").bindPopup( popPoison("Plate of Food", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([59.35, -66.04], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Soldier"}).bindLabel("Bottle of Beer (Militia Soldier)").bindPopup( popPoison("Bottle of Beer", "Militia Soldier", "Militia Cook", "note") ),
    L.marker([62.51, -67.98], {icon: iconPoison, alt: "level1poison", title: "Poison: Penelope Graves"}).bindLabel("Water Bottle (Penelope Graves)").bindPopup( popPoison("Water Bottle", "Penelope Graves", "Militia Cook", "note") ),
    L.marker([75.58, -97.77], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Elite"}).bindLabel("Water Bottle (Militia Elite)").bindPopup( popPoison("Water Bottle", "Militia Elite", "all", "note") ),
    L.marker([71.56, -85.42], {icon: iconPoison, alt: "level1poison", title: "Poison: Militia Elite"}).bindLabel("Coffee Glass (Militia Elite)").bindPopup( popPoison("Coffee Glass", "Militia Elite", "all", "note") ),

    // Item
    L.marker([23.03, -56.33], {icon: iconItem, alt: "level1item", title: "Item: Quad Bike Keys"}).bindLabel("Quad Bike Keys").bindPopup( popUp("keyquad", "Item", "Quad Bike Keys", "use", "req", "susp", "note", "Keys for the quad bike.", "desc")),
    L.marker([63.23, -87.53], {icon: iconItem, alt: "level1item", title: "Item: Perimeter Gate Key"}).bindLabel("Perimeter Gate Key").bindPopup( popUp("keyperim", "Item", "Perimeter Gate Key", "use", "req", "susp", "note", "This key will open the lock on the perimeter fence set up all around the farm.", "desc")),
    L.marker([61.75, -88.46], {icon: iconItem, alt: "level1item", title: "Item: Interpol Badge"}).bindLabel("Interpol Badge").bindPopup( popUp("badge", "Item", "Interpol Badge", "use", "req", "susp", "Carried by one of the Militia Technicians. He occasionally drinks from the Coffee Glass nearby. Listen to their conversations to identify the right one.", "This is a badge identifying the carrier as a member of Interpol. It's either genuine or a very well made copy and would be convincing upon casual inspection.", "desc")),
    L.marker([64.54, -56.11], {icon: iconItem, alt: "level1item", title: "Item: Nitroglycerin"}).bindLabel("Nitroglycerin (x3)").bindPopup( popUp("nitro", "Item", "Nitroglycerin", "use", "req", "susp", "note", "A vial of nitroglycerin. Highly explosive, even in small doses.", "desc")),
    L.marker([74.27, -75.23], {icon: iconItem, alt: "level1item", title: "Item: Nitroglycerin"}).bindLabel("Nitroglycerin").bindPopup( popUp("nitro", "Item", "Nitroglycerin", "use", "req", "susp", "note", "A vial of nitroglycerin. Highly explosive, even in small doses.", "desc")),
    L.marker([74.35, -72.33], {icon: iconItem, alt: "level1item", title: "Item: Basement Key"}).bindLabel("Basement Key").bindPopup( popUp("keybasement", "Item", "Basement Key", "use", "req", "susp", "note", "This is a key for the house basement where Ezra Berg is currently interrogating a prisoner.", "desc")),
    L.marker([74.48, -76.11], {icon: iconItem, alt: "level1item", title: "Item: Hallucinogenic Drugs"}).bindLabel("Hallucinogenic Drugs").bindPopup( popUp("drugs", "Item", "Hallucinogenic Drugs", "use", "req", "susp", "note", "Ezra Berg's hallucinogenic drugs, perfect for lacing a cigarette with.", "desc")),
    L.marker([72.73, -94.83], {icon: iconItem, alt: "level1item", title: "Item: Rose Room Key"}).bindLabel("Rose's Room Key").bindPopup( popUp("keyrose", "Item", "Rose's Room Key", "use", "req", "susp", "note", "This is a key for Sean Rose's room, which can be found in the main house of the farm.", "desc")),

    // Intel
    L.marker([69.16, -59.37], {icon: iconIntel, alt: "level1intel", title: "Intel: The Training Accident"}).bindLabel("The Training Accident").bindPopup( popUp("training", "Intel", "The Training Accident", "Listen to the conversation", "req", "susp", "note", "During a training run in the barn, the point man of the militia's strike team was clipped by a battering ram. He is currently recovering at the Orchard Warehouse.", "desc") ),
    L.marker([33.35, -34.84], {icon: iconIntel, alt: "level1intel", title: "Intel: The Hostage"}).bindLabel("The Hostage").bindPopup( popUp("hostage", "Intel", "The Hostage", "Listen to the conversation", "req", "susp", "note", "It would seem the militia is holding a hostage. Someone known as a Herald. The term does not appear in ICA archives, but he no doubt belongs to whatever mysterious organization the militia is targeting.", "desc") ),
    L.marker([25.12, -52.20], {icon: iconIntel, alt: "level1intel", title: "Intel: The Shadow Client"}).bindLabel("The Shadow Client").bindPopup( popUp("client", "Intel", "The Shadow Client", "Listen to the conversation", "req", "susp", "note", "According to the militiamen, Sean Rose is only the head of operations. He cannot be the shadow client. Whoever thir top leader is, he is clearly driven, resourceful and immensely capable. This, however, does not change Rose's target status.", "desc") ),
    L.marker([58.58, -69.74], {icon: iconIntel, alt: "level1intel", title: "Intel: The Militia"}).bindLabel("The Militia").bindPopup( popUp("militia", "Intel", "The Militia", "Listen to the conversation", "req", "susp", "note", "The militia is a motley crew of mercenaries, freedom fighters, intelligence specialists, cyber-criminals and political terrorists like Sean Rose. To unite these faction, the shadow client must have found some kind of common cause.", "desc") ),
    L.marker([63.23, -67.93], {icon: iconIntel, alt: "level1intel", title: "Intel: Penelope Graves Private Journal"}).bindLabel("Penelope Graves' Private Journal").bindPopup( popUp("journal", "Intel", "Penelope Graves' Private Journal", "Pick Up", "req", "susp", "note", "This is Penelope Graves' ledger containing her profiling notes on Sean Rose. Apparently, he's got a rather sever case of OCD, nd the ledger describes three recent situations that might be of interest: desk, grandfather clock, and faucet. Rose is unable to medicate himself, as a childhood episode with LSD rendered him hyper-sensetive to drugs of any kind. If you could get your hands on some hallucinogens, Rose could be going on quite a trip, 47.", "desc") ),
    L.marker([59.91, -41.66], {icon: iconIntel, alt: "level1intel", title: "Intel: Drug Laboratory Memo"}).bindLabel("Drug Laboratory Memo").bindPopup( popUp("memo", "Intel", "Drug Laboratory Memo", "Examine", "req", "susp", "note", "A memo from Sean Rose describing the need to refurbish the main house garage into a functional laboratory for Ezra Berg's chemical experiments. It's stressed that the lab needs a lock and must be equipped with high-end tools for analysis and manufacture of various types of drugs.", "desc") ),
    L.marker([59.33, -30.41], {icon: iconIntel, alt: "level1intel", title: "Intel: Rose Watch Blueprint"}).bindLabel("Rose's Watch Blueprint").bindPopup( popUp("blueprint", "Intel", "Rose's Watch Blueprint", "Examine", "req", "susp", "note", "A blueprint for Rose's watch. Sean Rose has been spending time in his room, building an explosive battery unit for the new Link 4 smartwatch. The charge is triggered by an email-carried virus. When the wearer checks his messages, the battery explodes. There's also a note from one of the hackers explaining that the software trigger is completed and has been installed on one of thir phones.", "desc") ),
    L.marker([70.31, -73.52], {icon: iconIntel, alt: "level1intel", title: "Intel: Nitroglycerin Invoice"}).bindLabel("Nitroglycerin Invoice").bindPopup( popUp("invoice", "Intel", "Nitroglycerin Invoice", "Examine", "req", "susp", "note", "An invoice detailing the delivery of a large shipment of nitroglycerin arriving this morning. A note mentions that it was stored at the munitions depot.", "desc") ),
    L.marker([74.81, -74.31], {icon: iconIntel, alt: "level1intel", title: "Intel: Apprentice Notes"}).bindLabel("Apprentice Notes").bindPopup( popUp("notes", "Intel", "Apprentice Notes", "Examine", "req", "susp", "note", "Notes containing observations on Ezra Berg's chemically-assisted interrogation of the prisoner. It read like a student's observations of a master's work and dutifully notes Berg's questions and the mixtures he creates in his makeshift lab. It also notes that Berg frequently uses his Bunsen burner for his experiments, and a reminder to keep all flammables away from the lab.", "desc") ),
    L.marker([59.93, -50.88], {icon: iconIntel, alt: "level1intel", title: "Intel: Exploding Smartwatch"}).bindLabel("Exploding Smartwatch").bindPopup( popUp("smartwatch", "Intel", "Exploding Smartwatch", "Listen to the conversation", "req", "susp", "note", "Sean Rose is planning to assassinate Simon Deveraux, CEO of green energy company Biosphere, using an exploding Link 4 smartwatch. Interestingly, Rose wears the same type of watch...", "desc") ),
    L.marker([72.44, -86.17], {icon: iconIntel, alt: "level1intel", title: "Intel: 3D Printer"}).bindLabel("3D Printer").bindPopup( popUp("printer", "Intel", "3D Printer", "Listen to the conversation", "req", "susp", "note", "The militia has acquired a state-of-art 3D printer which they use to manufacture life-like facial masks, probably for some kind of infiltration mission. According to the militiamen, one of the hackers is keeping Sean Rose's biometric data in his laptop.", "desc") ),
    L.marker([74.54, -101.5], {icon: iconIntel, alt: "level1intel", title: "Intel: Command Room"}).bindLabel("Command Room").bindPopup( popUp("command", "Intel", "Command Room", "Listen to the conversation", "req", "susp", "note", "The farm's tornado shelter is protected by an advanced biometric lock. This must be the militia's command room. Once the targets are eliminated the shelter is likely our best shot to discover their agenda. According to the farm's layout, the entrance is through the basement.", "desc") ),
    L.marker([71.84, -98.26], {icon: iconIntel, alt: "level1intel", title: "Intel: The Hostage"}).bindLabel("The Hostage").bindPopup( popUp("hostage", "Intel", "The Hostage", "Listen to the conversation", "req", "susp", "note", "It would seem the militia is holding a hostage. Someone known as a Herald. The term does not appear in ICA archives, but he no doubt belongs to whatever mysterious organization the militia is targeting.", "desc") ),

    // Interactions
    L.marker([66.17, -52.38], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Sean Rose"}).bindLabel("Talk to Sean Rose").bindPopup( popUp("img", "Interaction", "Talk to Sean Rose", "use", "Interpol Badge", "susp", "First you have to talk to Penelope Graves", "ingame", "desc") ),
    L.marker([66.56, -84.94], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Penelope Graves"}).bindLabel("Talk to Penelope Graves").bindPopup( popUp("img", "Interaction", "Talk to Penelope Graves", "use", "Interpol Badge", "susp", "note", "ingame", "desc") ),
    L.marker([70.06, -48.03], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Maya Parvati"}).bindLabel("Talk to Maya Parvati").bindPopup( popUp("img", "Interaction", "Talk to Maya Parvati", "use", "Point Man Disguise", "susp", "note", "ingame", "desc") ),
    L.marker([74.56, -73.08], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Watch Video Feed"}).bindLabel("Watch Video Feed").bindPopup( popUp("img", "Interaction", "Watch Video Feed", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([56.19, -26.05], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Baler"}).bindLabel("Baler").bindPopup( popUp("img", "Interaction", "Baler", "Dump Body / Bale", "req", "susp", "note", "ingame", "desc") ),
    L.marker([49.38, -24.12], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Baler"}).bindLabel("Baler").bindPopup( popUp("img", "Interaction", "Baler", "Dump Body / Bale", "req", "susp", "note", "ingame", "desc") ),
    L.marker([75.61, -46.40], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Peep"}).bindLabel("Peep").bindPopup( popUp("img", "Interaction", "Peep", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([75.79, -95.00], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Cigarette Pack"}).bindLabel("Cigarette Pack").bindPopup( popUp("img", "Interaction", "Cigarette Pack", "Lace Cigarette", "Hallucinogenic Drugs", "all", "note", "ingame", "desc") ),
    L.marker([71.77, -92.63], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Grandfather Clock"}).bindLabel("Grandfather Clock").bindPopup( popUp("img", "Interaction", "Grandfather Clock", "Tamper", "req", "all", "note", "ingame", "desc") ),

    // Location
    L.marker([46.49, -36.73], {icon: iconLocation, alt: "level1location", title: "Location: Demolition Test"}).bindLabel("Demolition Test").bindPopup( popUp("img", "Location", "Demolition Test", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([73.22, -26.71], {icon: iconLocation, alt: "level1location", title: "Location: Graves and Interpol Agent Meeting Spot"}).bindLabel("Graves and Interpol Agent Meeting Spot").bindPopup( popUp("img", "Location", "Graves and Interpol Agent Meeting Spot", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([73.67, -41.96], {icon: iconLocation, alt: "level1location", title: "Location: Spec Ops Briefing Area"}).bindLabel("Spec Ops Briefing Area").bindPopup( popUp("img", "Location", "Spec Ops Briefing Area", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([71.85, -49.26], {icon: iconLocation, alt: "level1location", title: "Location: Spec Ops Training Area"}).bindLabel("Spec Ops Training Area").bindPopup( popUp("img", "Location", "Spec Ops Training Area", "use", "req", "susp", "note", "ingame", "desc") ),

    // Cameras
    L.marker([64.09, -24.30], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[64.09, -24.30], [63.35, -19.81], [62.00, -23.73]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([20.63, -52.55], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[20.63, -52.55], [22.43, -49.43], [19.22, -49.43]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([65.65, -101.0], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[65.65, -101.0], [66.77, -102.4], [66.77, -99.18]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([70.67, -91.01], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[70.67, -91.01], [69.54, -90.39], [70.27, -87.49]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.25, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([72.86, -99.00], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[72.86, -99.00], [73.61, -100.9], [72.32, -101.4]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.25, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([73.60, -86.00], {icon: iconCamera, alt: "level1camera", title: "Camera: Farm"}).bindLabel("Security Camera"),
    L.polygon([[73.60, -86.00], [74.16, -88.37], [74.35, -86.04]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.25, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([71.76, -96.63], {icon: iconEvidence, alt: "level1evidence", title: "Camera Recorder: Farm"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),

    // Locked Doors
    L.marker([30.25, -27.55], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([74.84, -24.03], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([75.62, -53.39], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([75.81, -77.08], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([75.99, -103.9], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([70.08, -108.7], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([51.20, -92.32], {icon: iconLocked, alt: "level1locked", title: "Locked: Perimeter Gate Key"}).bindLabel("Locked Gate (Perimeter Gate Key)").bindPopup("<h2>Locked</h2><h1>Locked Gate</h1><p class='req'>Requires Perimeter Gate Key</p>"),
    L.marker([75.12, -76.02], {icon: iconLocked, alt: "level1locked", title: "Locked: Garage Key"}).bindLabel("Locked Door (Garage Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Garage Key</p>"),
    L.marker([71.97, -93.51], {icon: iconLocked, alt: "level1locked", title: "Locked: Basement Key"}).bindLabel("Locked Door (Basement Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Basement Key</p>"),

]);

/* ==================================================================================================================================================================
    Level 2
================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([70.45, -94.21], {icon: iconEnter, alt: "level2enter", title: "Starting Locaton: Undercover in the Farm House"}).bindLabel("Undercover in the Farm House").bindPopup("<img src='img/map_colorado/screenshots/enter_house.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Farm House</h1>"),
    L.marker([73.52, -44.42], {icon: iconIcaStash, alt: "level2icastash", title: "Large Agency Pickup: Red Barn"}).bindLabel("Large Agency Pickup: Red Barn").bindPopup("<img src='img/map_colorado/screenshots/ica_barn.jpg'><h2>Large Agency Pickup</h2><h1>Red Barn</h1>"),

    L.marker([75.14, -92.94], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([74.51, -89.64], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.46, -84.90], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([71.53, -84.85], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([71.13, -86.39], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([71.84, -44.47], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    L.marker([68.84, -44.82], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Down</h2><h1>Climb</h1>"),
    L.marker([74.77, -95.22], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([66.67, -29.13], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([50.95, -72.02], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([50.98, -82.48], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Ladder: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Ladder: Level 1-3</h1>"),

    L.marker([71.97, -90.21], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([48.63, -76.15], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([74.17, -52.20], {icon: iconStairsDown, alt: "level2stairsupdown"}),

    new L.Polyline(
        [[74.69, -95.31], [75.35, -92.10], [73.92, -87.45]], 
        {color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),


]);

var level2weapons = L.layerGroup([

    L.marker([70.69, -91.93], {icon: iconBaseball, alt: "level2bball", title: "Weapon: Baseball"}).bindLabel("Baseball").bindPopup(txtBaseball),
    L.marker([71.52, -94.57], {icon: iconBaseballBat, alt: "level2baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),
    L.marker([71.30, -98.21], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([70.90, -98.78], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([73.86, -95.44], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([73.32, -87.62], {icon: iconCowboyBust, alt: "level2cowbust", title: "Weapon: Cowboy Bust"}).bindLabel("Cowboy Bust").bindPopup(txtCowboyBust),
    L.marker([67.42, -32.73], {icon: iconHammer, alt: "level2hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([69.83, -51.02], {icon: iconManArm, alt: "level2manarm", title: "Weapon: Mannequin Arm"}).bindLabel("Mannequin Arm").bindPopup(txtManArm),
    L.marker([68.39, -48.16], {icon: iconBrandingIron, alt: "level2branding", title: "Weapon: Branding Iron"}).bindLabel("Branding Iron").bindPopup(txtBrandingIron),

]);

var level2poi = L.layerGroup([

    L.marker([74.84, -93.29], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.99, -88.59], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([68.97, -51.45], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.20, -80.37], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([69.64, -93.07], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([73.41, -93.69], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([73.92, -91.27], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([72.46, -94.65], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),

    L.marker([68.56, -50.93], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Militia Spec Ops"}).bindLabel("Militia Spec Ops").bindPopup("<img src='img/map_colorado/screenshots/disg_specops.jpg'><h2>Disguise</h2><h1>Militia Spec Ops</h1>"),

    L.marker([69.97, -94.26], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),
    L.marker([71.01, -97.11], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),
    L.marker([73.83, -92.54], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hacker").bindPopup("<h2>Blend In</h2><h1>Hacker</h1>"),

    L.marker([71.46, -92.02], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([72.97, -91.14], {icon: iconSabotage, alt: "level2sab-smartwatch", title: "Sabotage: Sean Rose Smartwatch"}).bindLabel("Sean Rose's Smartwatch").bindPopup( popUp("img", "Sabotage", "Sean Rose's Smartwatch", "Insert Battery", "Explosive Watch Battery", "all", "One of two places where Sean takes off the smarwatch to wash his hands", "ingame", "desc") ),
    L.marker([67.44, -47.10], {icon: iconSabotage, alt: "level2sab-haybale", title: "Sabotage: Hay Bale"}).bindLabel("Hay Bale").bindPopup( popUp("img", "Sabotage", "Hay Bale", "use", "req", "susp", "note", "ingame", "desc") ),
        new L.Polyline([[67.44, -47.10], [68.38, -45.92]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-haybale"}),
        L.marker([68.38, -45.92], {icon: iconPointRed, alt: "level2sab-haybale"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),

    L.marker([72.06, -94.70], {icon: iconDistraction, alt: "level2dis-gramophone", title: "Distraction: Gramophone"}).bindLabel("Gramophone").bindPopup( popUp("img", "Distraction", "Gramophone", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([74.95, -91.45], {icon: iconDistraction, alt: "level2dis-winduptoy", title: "Distraction: Wind-Up Toy"}).bindLabel("Wind-Up Toy").bindPopup( popUp("img", "Distraction", "Wind-Up Toy", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([72.58, -92.76], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Militia Cook") ),
    L.marker([52.74, -82.39], {icon: iconDistraction, alt: "level2dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "all") ),

    L.marker([71.60, -99.05], {icon: iconItem, alt: "level2item", title: "Item: Hacker Phone"}).bindLabel("Hacker's Phone").bindPopup( popUp("phone", "Item", "Hacker's Phone", "use", "req", "susp", "note", "A phone used by one of the on-site hackers. It contains the virus that will trigger Sean Rose's watch bomb.", "desc")),
    L.marker([72.91, -89.42], {icon: iconItem, alt: "level2item", title: "Item: Nitroglycerin"}).bindLabel("Nitroglycerin").bindPopup( popUp("nitro", "Item", "Nitroglycerin", "use", "req", "susp", "note", "A vial of nitroglycerin. Highly explosive, even in small doses.", "desc")),
    L.marker([72.67, -90.39], {icon: iconItem, alt: "level2item", title: "Item: Explosive Watch Battery"}).bindLabel("Explosive Watch Battery").bindPopup( popUp("battery", "Item", "Explosive Watch Battery", "use", "req", "susp", "note", "The battery for a brand new Link 4 smarwatch. Sean Rose has converted it into a bomb.", "desc")),
    L.marker([70.85, -95.22], {icon: iconItem, alt: "level2item", title: "Item: Sean Rose Face Mask"}).bindLabel("Sean Rose Face Mask").bindPopup( popUp("mask", "Item", "Sean Rose Face Mask", "use", "req", "susp", "Start 3D Printer to make the mask", "A 3D latex mask resembling Sean Rose. This ought to fool the biometric scanner found outside the tornado shelter command room.", "desc")),

    L.marker([71.71, -97.55], {icon: iconIntel, alt: "level2intel", title: "Intel: Sean Rose OCD"}).bindLabel("Sean Rose's OCD").bindPopup( popUp("ocd", "Intel", "Sean Rose's OCD", "Listen to the conversation", "req", "susp", "note", "Sean Rose suffers from OCD and obsesses about order and cleanliness. According to his men, disrupting the layout of his desk, turning off water to his faucet, and off-setting the grandfather clock have all been known to trigger an OCD response.", "desc") ),
    L.marker([69.91, -95.49], {icon: iconIntel, alt: "level2intel", title: "Intel: Exploding Smartwatch"}).bindLabel("Exploding Smartwatch").bindPopup( popUp("smartwatch", "Intel", "Exploding Smartwatch", "Listen to the conversation", "req", "susp", "note", "Sean Rose is planning to assassinate Simon Deveraux, CEO of green energy company Biosphere, using an exploding Link 4 smartwatch. Interestingly, Rose wears the same type of watch...", "desc") ),

    L.marker([70.64, -96.10], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Start 3D Printer"}).bindLabel("Start 3D Printer").bindPopup( popUp("img", "Interaction", "Start 3D Printer", "use", "req", "Hacker", "note", "ingame", "desc") ),
    L.marker([72.36, -93.60], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Valve"}).bindLabel("Valve").bindPopup( popUp("img", "Interaction", "Valve", "Turn Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([71.69, -86.57], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Sean Rose Desk"}).bindLabel("Sean Rose's Desk").bindPopup( popUp("img", "Interaction", "Sean Rose's Desk", "Tamper", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.91, -93.95], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Mr Raptor"}).bindLabel("Mr Raptor").bindPopup( popUp("img", "Interaction", "Mr Raptor", "Feed", "req", "all", "Unavailable during story mission", "ingame", "desc") ),

    L.marker([71.78, -88.68], {icon: iconLocked, alt: "level2locked", title: "Locked: Rose Room Key"}).bindLabel("Locked Door (Rose's Room Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Rose's Room Key</p>"),
    L.marker([73.03, -94.17], {icon: iconLocked, alt: "level2locked", title: "Locked: Rose Room Key"}).bindLabel("Locked Door (Rose's Room Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Rose's Room Key</p>"),
    L.marker([73.07, -92.24], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);

/* ==================================================================================================================================================================
    Level 3
================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([50.98, -82.48], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Ladder: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Ladder: Level 1-3</h1>"),
    L.marker([51.48, -83.27], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Water Tower"}).bindLabel("Water Tower").bindPopup("<img src='img/map_colorado/screenshots/enter_tower.jpg'><h2>Starting Locaton</h2><h1>Water Tower</h1>"),
    L.marker([50.26, -83.75], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Water Tower"}).bindLabel("Large Agency Pickup: Water Tower").bindPopup("<img src='img/map_colorado/screenshots/ica_tower.jpg'><h2>Large Agency Pickup</h2><h1>Water Tower</h1>"),

]);

var level3weapons = L.layerGroup([

]);

var level3poi = L.layerGroup([

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