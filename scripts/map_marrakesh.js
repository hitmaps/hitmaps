var mapmarrakesh = L.map('mapmarrakesh', {maxBoundsViscosity: 1}).setView([78.13, -17.49], 4);
mapmarrakesh.zoomControl.setPosition('topright');
mapmarrakesh.setMaxBounds([[13.58, -173.4],[86.05, 144.14]]);
$("#level-1").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_marrakesh/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1base = L.tileLayer('img/map_marrakesh/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapmarrakesh),
    mapLevel2base = L.tileLayer('img/map_marrakesh/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_marrakesh/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = mapLevel0vendor = mapLevel0bodyguard = mapLevel0prisoner = mapLevel0fortune = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = mapLevel1vendor = mapLevel1bodyguard = mapLevel1prisoner = mapLevel1fortune = L.tileLayer('img/map_marrakesh/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2vendor = mapLevel2bodyguard = mapLevel2prisoner = mapLevel2fortune = L.tileLayer('img/map_marrakesh/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3vendor = mapLevel3bodyguard = mapLevel3prisoner = mapLevel3fortune = L.tileLayer('img/map_marrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0shopkeeper = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1shopkeeper = L.tileLayer('img/map_marrakesh/lvl_1/shopkeeper/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2shopkeeper = L.tileLayer('img/map_marrakesh/lvl_2/shops/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3shopkeeper = L.tileLayer('img/map_marrakesh/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0waiter = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1waiter = L.tileLayer('img/map_marrakesh/lvl_1/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2waiter = L.tileLayer('img/map_marrakesh/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3waiter = L.tileLayer('img/map_marrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0handyman = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1handyman = L.tileLayer('img/map_marrakesh/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2handyman = L.tileLayer('img/map_marrakesh/lvl_2/handyman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3handyman = L.tileLayer('img/map_marrakesh/lvl_3/handyman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0printing = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1printing = L.tileLayer('img/map_marrakesh/lvl_1/print/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2printing = L.tileLayer('img/map_marrakesh/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3printing = L.tileLayer('img/map_marrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0soldier = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1soldier = L.tileLayer('img/map_marrakesh/lvl_1/military/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2soldier = L.tileLayer('img/map_marrakesh/lvl_2/shops/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3soldier = L.tileLayer('img/map_marrakesh/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0elite = mapLevel0officer = L.tileLayer('img/map_marrakesh/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1elite = mapLevel1officer = L.tileLayer('img/map_marrakesh/lvl_1/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2elite = mapLevel2officer = L.tileLayer('img/map_marrakesh/lvl_2/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3elite = mapLevel3officer = L.tileLayer('img/map_marrakesh/lvl_3/elite/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0janitor = mapLevel0cameraman = mapLevel0masseur = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1janitor = mapLevel1cameraman = mapLevel1masseur = L.tileLayer('img/map_marrakesh/lvl_1/consulate/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2janitor = mapLevel2cameraman = mapLevel2masseur = L.tileLayer('img/map_marrakesh/lvl_2/consulate/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3janitor = mapLevel3cameraman = mapLevel3masseur = L.tileLayer('img/map_marrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0security = mapLevel0intern = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1security = mapLevel1intern = L.tileLayer('img/map_marrakesh/lvl_1/consulate/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2security = mapLevel2intern = L.tileLayer('img/map_marrakesh/lvl_2/consec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3security = mapLevel3intern = L.tileLayer('img/map_marrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0headmaster = L.tileLayer('img/map_marrakesh/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1headmaster = L.tileLayer('img/map_marrakesh/lvl_1/headmaster/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2headmaster = L.tileLayer('img/map_marrakesh/lvl_2/headmaster/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3headmaster = L.tileLayer('img/map_marrakesh/lvl_3/headmaster/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */


var level0other = L.layerGroup([

    // Enter Exit
    L.marker([56.14, -36.51], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Consulate Parking Garage"}).bindLabel("Starting Locaton: Consulate Parking Garage").bindPopup("<img src='img/map_marrakesh/screenshots/enter_parking.jpg'><h2>Starting Locaton</h2><h1>Consulate Parking Garage</h1>"),
    L.marker([50.90, -46.01], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Consulate Car"}).bindLabel("Exit Locaton: Consulate Car").bindPopup("<img src='img/map_marrakesh/screenshots/exit_car.jpg'><h2>Exit Locaton</h2><h1>Consulate Car</h1><p class='req'>Requires Consulate Staff Car Keys</p>"),

    // ICA Pickup
    L.marker([47.42, -35.94], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Consulate Parking Garage"}).bindLabel("Large Agency Pickup: Consulate Parking Garage").bindPopup("<img src='img/map_marrakesh/screenshots/ica_parking.jpg'><h2>Large Agency Pickup</h2><h1>Consulate Parking Garage</h1>"),

    // Passage
    L.marker([46.83, -18.01], {icon: iconPassage, alt: "level0passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Stairs
    L.marker([73.56, 10.898], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([58.37, -24.91], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([48.63, -20.17], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([44.71, -36.03], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([28.14, -38.75], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([48.63, -17.00], {icon: iconStairsDown, alt: "level0stairsupdown"}),

]);

var level0weapons = L.layerGroup([

    // Weapons
    L.marker([64.99, -9.448], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Lethal Poison Vial"}).bindLabel("Lethal Poison Vial").bindPopup(txtLethalPoison),
    L.marker([47.54, -37.17], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([37.40, -28.52], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),

    // Explosive
    L.marker([66.21, -9.492], {icon: iconRemoteExpl, alt: "level0remexpl", title: "Weapon: Remote Explosive"}).bindLabel("Remote Explosive (x3)").bindPopup(txtRemoteExplosive),
    L.marker([48.92, -49.17], {icon: iconRemoteExpl, alt: "level0remexpl", title: "Weapon: Remote Explosive"}).bindLabel("Remote Explosive (x2)").bindPopup(txtRemoteExplosive),
    L.marker([47.81, -17.66], {icon: iconPropane, alt: "level0propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([30.93, -41.13], {icon: iconPropane, alt: "level0propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([47.75, -34.62], {icon: iconPropane, alt: "level0propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),

    // Firearm
    L.marker([66.72, -9.360], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R (x2)").bindPopup(txtBartoli75R),
    L.marker([66.24, -8.569], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
    L.marker([45.49, -44.78], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G (x2)").bindPopup(txtBartoli12G),
    L.marker([46.22, -23.46], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G (x2)").bindPopup(txtBartoli12G),
    L.marker([64.99, -10.28], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),
    L.marker([64.99, -10.98], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo").bindPopup(txtAmmoSMG),
    L.marker([65.40, -10.28], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Assault Rifle Ammo"}).bindLabel("Assault Rifle Ammo").bindPopup(txtAmmoRifle),
    L.marker([65.40, -10.98], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Shotgun Ammo"}).bindLabel("Shotgun Ammo").bindPopup(txtAmmoShotgun),

    // Lethal melee
    L.marker([49.49, -36.03], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([41.86, -44.38], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([50.98, -23.51], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),

    // Non-lethal melee
    L.marker([32.10, -41.08], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench (x2)").bindPopup(txtWrench),
    L.marker([50.45, -19.02], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench (x2)").bindPopup(txtWrench),
    L.marker([33.57, -41.30], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([45.46, -18.28], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([47.75, -32.95], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x3)").bindPopup(txtSoda),

]);

var level0poi = L.layerGroup([

    // Hiding Spot
    L.marker([73.25, 5.0537], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.07, -2.109], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.26, -15.24], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.51, -38.14], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([44.37, -17.00], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([45.85, -38.14], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([35.63, -43.11], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),

    L.marker([64.99, -7.338], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([46.58, -30.84], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

    // Sabotage
    L.marker([67.28, -7.998], {icon: iconSabotage, alt: "level0sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([50.42, -20.83], {icon: iconSabotage, alt: "level0sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),

    // Poison
    L.marker([50.62, -43.46], {icon: iconPoison, alt: "level0poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),

    // Distraction
    L.marker([66.93, -7.910], {icon: iconDistraction, alt: "level0dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "susp") ),
    L.marker([44.68, -15.51], {icon: iconDistraction, alt: "level0dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "susp") ),
    L.marker([52.32, -41.83], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Military Radio").bindPopup( popGlobal(disRadio, "susp") ),

    // Alarm
    L.marker([46.89, -37.39], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Intel
    L.marker([64.99, -8.481], {icon: iconIntel, alt: "level0intel", title: "Intel: Turret Access Code"}).bindLabel("Turret Access Code").bindPopup( popUp("turret", "Intel", "Turret Access Code", "Examine", "req", "susp", "note", "A password for the computer that controls the gun turret. That thing packs quite the punch.", "desc") ),

    // Location
    L.marker([67.60, -8.657], {icon: iconLocation, alt: "level0location", title: "Location: Strandberg and Zaydan Meeting Spot"}).bindLabel("Strandberg and Zaydan Meeting Spot").bindPopup( popUp("meeting", "Location", "Strandberg and Zaydan Meeting Spot", "use", "req", "susp", "Strandberg and Zaydan will meet here if both of them receive a phone call from each other", "ingame", "desc") ),

    // Item
    L.marker([47.45, -45.35], {icon: iconItem, alt: "level0item", title: "Item: Consulate Keycard"}).bindLabel("Consulate Keycard").bindPopup( popUp("keyconsul", "Item", "Consulate Keycard", "use", "req", "susp", "note", "A keycard that gives access to the Swedish consulate", "desc") ),
    L.marker([50.62, -41.79], {icon: iconItem, alt: "level0item", title: "Item: Consulate Keycard"}).bindLabel("Consulate Keycard").bindPopup( popUp("keyconsul", "Item", "Consulate Keycard", "use", "req", "susp", "note", "A keycard that gives access to the Swedish consulate", "desc") ),
    L.marker([47.84, -44.42], {icon: iconItem, alt: "level0item", title: "Item: Keys to Army Truck"}).bindLabel("Keys to Army Truck").bindPopup( popUp("keytruck", "Item", "Keys to Army Truck", "use", "req", "susp", "note", "The keys to an army truck. Could prove useful.", "desc") ),

    // Camera
    L.marker([47.12, -31.28], {icon: iconCamera, alt: "level0camera", title: "Camera: Consulate"}).bindLabel("Security Camera"),
    L.polygon([[47.12, -31.28], [48.12, -27.99], [46.12, -27.99]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),

    // Locked
    L.marker([35.35, -44.20], {icon: iconLocked, alt: "level0locked", title: "Locked: Consulate Keycard"}).bindLabel("Locked Door (Consulate Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Consulate Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    // Enter Exit
    L.marker([73.34, 53.789], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: School Alley"}).bindLabel("Starting Locaton: School Alley").bindPopup("<img src='img/map_marrakesh/screenshots/enter_school.jpg'><h2>Starting Locaton</h2><h1>School Alley</h1>"),
    L.marker([82.57, -1.186], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Bazaar Entrance"}).bindLabel("Starting Locaton: Bazaar Entrance").bindPopup("<img src='img/map_marrakesh/screenshots/enter_bazaar.jpg'><h2>Starting Locaton</h2><h1>Bazaar Entrance</h1>"),
    L.marker([78.51, -11.46], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover at the Snail Stand"}).bindLabel("Starting Locaton: Undercover at the Snail Stand").bindPopup("<img src='img/map_marrakesh/screenshots/enter_snail.jpg'><h2>Starting Locaton</h2><h1>Undercover at the Snail Stand</h1>"),
    L.marker([81.63, -26.67], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover in the Courtyard Club"}).bindLabel("Starting Locaton: Undercover in the Courtyard Club").bindPopup("<img src='img/map_marrakesh/screenshots/enter_cafe.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Courtyard Club</h1>"),
    L.marker([73.26, 21.884], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Army Truck"}).bindLabel("Exit Locaton: Army Truck").bindPopup("<img src='img/map_marrakesh/screenshots/exit_truck.jpg'><h2>Exit Locaton</h2><h1>Army Truck</h1><p class='req'>Requires Keys to Army Truck</p>"),
    L.marker([78.75, -61.83], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: West Bazaar Gates"}).bindLabel("Exit Locaton: West Bazaar Gates").bindPopup("<img src='img/map_marrakesh/screenshots/exit_gateswest.jpg'><h2>Exit Locaton</h2><h1>West Bazaar Gates</h1>"),
    L.marker([82.65, 0.5273], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Bazaar Gates"}).bindLabel("Exit Locaton: Bazaar Gates").bindPopup("<img src='img/map_marrakesh/screenshots/exit_bazaar.jpg'><h2>Exit Locaton</h2><h1>Bazaar Gates</h1>"),

    // ICA Pickup
    L.marker([74.46, -31.59], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Carpet Shop"}).bindLabel("Small Agency Pickup: Carpet Shop").bindPopup("<img src='img/map_marrakesh/screenshots/ica_shop.jpg'><h2>Small Agency Pickup</h2><h1>Carpet Shop</h1>"),
    L.marker([81.26, -36.03], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Shisha Cafe Restroom"}).bindLabel("Small Agency Pickup: Shisha Cafe Restroom").bindPopup("<img src='img/map_marrakesh/screenshots/ica_cafe.jpg'><h2>Small Agency Pickup</h2><h1>Shisha Cafe Restroom</h1>"),
    L.marker([81.01, 4.9218], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Mechanic Shop"}).bindLabel("Small Agency Pickup: Mechanic Shop").bindPopup("<img src='img/map_marrakesh/screenshots/ica_mech.jpg'><h2>Small Agency Pickup</h2><h1>Mechanic Shop</h1>"),
    L.marker([83.16, -44.82], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Lamp Shop Alley"}).bindLabel("Large Agency Pickup: Lamp Shop Alley").bindPopup("<img src='img/map_marrakesh/screenshots/ica_alley.jpg'><h2>Large Agency Pickup</h2><h1>Lamp Shop Alley</h1>"),
    L.marker([80.37, 57.656], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: School Gate"}).bindLabel("Large Agency Pickup: School Gate").bindPopup("<img src='img/map_marrakesh/screenshots/ica_school.jpg'><h2>Large Agency Pickup</h2><h1>School Gate</h1>"),

    // Way Up/Down
    L.marker([77.97, 11.162], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([81.18, -38.36], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-2</h1>"),
    L.marker([78.31, -60.77], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-2</h1>"),
    L.marker([74.66, 53.745], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([78.75, 47.460], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),

    // Passage
    L.marker([78.34, 27.158], {icon: iconPassage, alt: "level1passage"}).bindLabel("Drop Down").bindPopup("<h2>Passage</h2><h1>Drop Down</h1>"),
    L.marker([61.31, -23.55], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([75.78, 29.047], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([77.73, 29.047], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.68, 38.891], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 50.625], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.26, 48.120], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Stairs
    L.marker([76.99, 51.284], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([74.86, 30.058], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([78.43, 30.058], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([78.69, 6.7236], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([81.02, -49.57], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([80.39, -46.18], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([74.91, -57.17], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([30.75, -41.66], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([50.93, -35.99], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([50.93, -43.41], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([30.03, -39.55], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([44.65, -36.29], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([57.53, -25.00], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([73.57, 9.4482], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    
]);

var level1weapons = L.layerGroup([

    L.marker([81.20, -56.82], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([74.71, 3.9990], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x5)").bindPopup(txtCoin),
    L.marker([82.13, -51.32], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Explosive
    L.marker([83.36, -41.48], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([80.48, -37.79], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([79.01, -15.16], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([78.26, -13.53], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([76.46, -11.51], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([77.24, -33.17], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([76.19, -42.49], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([54.13, -33.70], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([39.47, -24.82], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([35.53, -51.02], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([73.89, 39.902], {icon: iconRemoteExpl, alt: "level1remexpl", title: "Weapon: Remote Explosive"}).bindLabel("Remote Explosive (x4)").bindPopup(txtRemoteExplosive),

    // Firearm
    L.marker([77.58, 20.170], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2").bindPopup(txtFusilG2),
    L.marker([75.32, 36.870], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2 (x3)").bindPopup(txtFusilG2),
    L.marker([73.84, 34.189], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G1-4"}).bindLabel("Assault Rifle: Fusil G1-4 (x2)").bindPopup(txtFusilG14),
    L.marker([74.86, 40.605], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),
    L.marker([75.32, 39.462], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: SMG Ammo"}).bindLabel("SMG Ammo (x2)").bindPopup(txtAmmoSMG),

    // Non-Lethal Melee
    L.marker([74.59, 9.7119], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([76.22, -14.06], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([78.08, -53.87], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([62.99, -20.91], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([77.96, 32.695], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([79.41, 30.102], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([73.39, -48.20], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([80.33, 43.549], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([82.64, -2.636], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([80.90, -0.659], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([79.94, -4.350], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([73.83, 32.563], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([76.32, 34.057], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([75.17, 49.746], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([72.79, 50.009], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([78.97, 49.614], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([74.93, 52.690], {icon: iconPoolBall, alt: "level1poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([79.98, 31.948], {icon: iconPoolBall, alt: "level1poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([79.78, 31.025], {icon: iconPoolBall, alt: "level1poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([79.39, 32.080], {icon: iconPoolBall, alt: "level1poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([77.57, 22.148], {icon: iconToyTank, alt: "level1toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([74.71, 52.514], {icon: iconToyTank, alt: "level1toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([77.43, 39.858], {icon: iconToyTank, alt: "level1toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([79.06, 33.750], {icon: iconToyTank, alt: "level1toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([80.25, 48.164], {icon: iconToyTank, alt: "level1toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([82.90, -22.93], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x3)").bindPopup(txtSoda),
    L.marker([81.20, -46.66], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([57.04, -46.53], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([53.17, -28.38], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([47.98, -25.26], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([80.96, 5.7568], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([80.92, -9.404], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([82.90, -55.72], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([75.15, 21.665], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

    // Lethal Melee
    L.marker([36.42, -30.32], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([37.92, -30.36], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([43.80, -26.05], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([75.49, -27.81], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([78.63, -12.43], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([39.43, -26.54], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([76.89, -50.27], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([79.26, -16.43], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([74.91, -37.04], {icon: iconKnifeFold, alt: "level1foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([75.29, -37.44], {icon: iconKnifeFold, alt: "level1foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([76.81, -33.75], {icon: iconKnifeFold, alt: "level1foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([79.62, -59.89], {icon: iconBattleAxe, alt: "level1battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
    L.marker([75.12, 4.8339], {icon: iconSaber, alt: "level1saber", title: "Weapon: Saber"}).bindLabel("Saber").bindPopup(txtSaber),
    L.marker([36.27, -41.61], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([64.01, -32.60], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([76.20, -13.35], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([79.18, 47.021], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([82.80, -5.097], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([80.85, 4.6142], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([82.01, -48.73], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([77.95, -51.63], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([74.50, -33.22], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([76.00, -49.39], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([61.39, -49.08], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),

]);

var level1poi = L.layerGroup([

    // Hiding Spot
    L.marker([76.21, -29.88], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([82.49, 0.6591], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([79.17, 9.2285], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([81.07, -10.50], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([83.48, -39.37], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([83.35, -44.38], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([81.88, -51.37], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([82.97, -61.21], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.40, -42.84], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.99, -38.18], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([81.52, -35.55], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([82.51, -35.90], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([81.01, -22.67], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.44, -21.26], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([77.72, -53.12], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.60, -14.28], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.90, 1.2744], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.74, 12.480], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.80, 4.4824], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.87, -33.26], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.89, -53.65], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.45, -57.48], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.45, -56.07], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.56, -23.02], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([79.21, 40.429], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.11, 43.725], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.81, 51.987], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.27, 41.484], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.83, 37.880], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([78.78, 49.614], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([63.35, -32.78], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.15, -49.21], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.42, -29.04], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.60, -29.39], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([37.92, -33.57], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([35.56, -41.61], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([40.68, -24.69], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([83.73, -39.72], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([82.20, -50.18], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([76.20, -12.12], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([72.88, -3.867], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([73.40, -32.03], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([72.43, -57.87], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([71.89, -58.53], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([60.17, -23.07], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([78.05, 40.605], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([74.74, 51.855], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([54.41, -31.94], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([38.61, -32.03], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([34.27, -40.34], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([44.80, -38.89], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),

    L.marker([74.95, 33.398], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([74.41, 12.436], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([36.27, -43.76], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    // Disguise
    L.marker([62.12, -51.45], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Consulate Security"}).bindLabel("Consulate Security").bindPopup("<img src='img/map_marrakesh/screenshots/disg_consec.jpg'><h2>Disguise</h2><h1>Consulate Security</h1>"),

    L.marker([56.53, -34.84], {icon: iconNPC, alt: "level1npc", title: "NPC: Consulate Intern"}).bindLabel("Consulate Intern").bindPopup( popUp("img", "NPC", "Consulate Intern", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([82.33, -34.27], {icon: iconNPC, alt: "level1npc", title: "NPC: Cameraman"}).bindLabel("Cameraman").bindPopup( popUp("img", "NPC", "Cameraman", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([82.81, -16.21], {icon: iconNPC, alt: "level1npc", title: "NPC: Fortune Teller"}).bindLabel("Fortune Teller").bindPopup( popUp("img", "NPC", "Fortune Teller", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([55.00, -26.98], {icon: iconNPC, alt: "level1npc", title: "NPC: Masseur"}).bindLabel("Masseur").bindPopup( popUp("img", "NPC", "Masseur", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.97, 51.943], {icon: iconNPC, alt: "level1npc", title: "NPC: Prisoner"}).bindLabel("Prisoner").bindPopup( popUp("img", "NPC", "Prisoner", "use", "req", "susp", "note", "ingame", "desc") ),

    // Blend In
    L.marker([82.10, -29.61], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([81.62, -31.55], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([81.12, -33.48], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([81.63, -27.90], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([82.44, -30.54], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([78.46, -12.83], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Food Vendor").bindPopup("<h2>Blend In</h2><h1>Food Vendor</h1>"),
    L.marker([77.92, -12.83], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Food Vendor").bindPopup("<h2>Blend In</h2><h1>Food Vendor</h1>"),
    L.marker([75.58, 21.181], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Elite Soldier").bindPopup("<h2>Blend In</h2><h1>Elite Soldier</h1>"),
    L.marker([73.82, 44.956], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Elite Soldier").bindPopup("<h2>Blend In</h2><h1>Elite Soldier</h1>"),
    L.marker([56.60, -41.57], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([47.48, -39.46], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([53.46, -43.54], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([42.19, -43.41], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),

    // Sabotage
    L.marker([71.52, -17.31], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.46, -27.02], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([68.54, -54.75], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.23, -43.98], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([72.43, -56.42], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([73.39, -49.52], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([76.49, -28.30], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.23, -24.74], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.51, 17.182], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([70.97, -2.944], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([69.74, 3.5156], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.24, 4.4384], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.07, 1.3623], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([74.33, 2.2412], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([69.48, -17.31], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([68.89, -19.90], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([73.16, -2.241], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([75.75, 0.1757], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([74.56, -9.975], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([75.74, -2.548], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.23, 3.7792], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.61, -1.230], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.70, -7.514], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.09, -11.99], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([78.83, -11.73], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.78, -0.175], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.34, 1.9775], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.12, 4.0869], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.23, 6.7675], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.11, 10.019], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.90, 14.018], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([78.93, 19.907], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.85, -2.812], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([68.30, -10.23], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.74, -3.779], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([83.21, -17.92], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.47, -39.59], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.17, -38.97], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.11, -4.702], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.75, -11.99], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.10, -11.77], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.44, -17.35], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.45, -20.17], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.53, -15.38], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.20, -19.68], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.77, -55.28], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.67, -57.74], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.68, -62.53], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.46, -52.95], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.35, -44.64], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    // Sabotage
    L.marker([72.43, -27.99], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.43, -29.61], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.43, -51.54], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.43, -49.79], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.43, -48.16], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([73.39, -52.03], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([73.37, -50.53], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([74.63, -28.25], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([77.30, -16.96], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([70.30, 4.4824], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([71.00, 4.5263], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([77.11, 2.2412], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([83.26, -43.37], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([79.34, -43.46], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    // Sabotage    
    L.marker([80.37, 32.775], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([80.37, 34.800], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([80.37, 36.826], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([80.37, 38.847], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([75.99, 18.808], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([75.29, 8.2177], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([78.26, -12.21], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([79.17, -15.60], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([72.91, -6.284], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum (x3)").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([78.15, 13.579], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum (x2)").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([37.16, -33.39], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[37.16, -33.39], [38.82, -29.61]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([38.82, -29.61], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([80.38, 6.5039], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[80.38, 6.5039], [80.68, 5.0537]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([80.68, 5.0537], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([82.84, -22.36], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[82.84, -22.36], [82.83, -20.74]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([82.83, -20.74], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([81.25, -47.72], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[81.25, -47.72], [81.66, -49.04]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([81.66, -49.04], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    // Sabotage   
    L.marker([40.54, -26.89], {icon: iconSabotage, alt: "level1sab-leak", title: "Sabotage: Stove"}).bindLabel("Stove (x2)").bindPopup( popGlobal(sabStove, "all") ),
    L.marker([74.15, 20.830], {icon: iconSabotage, alt: "level1sab-turret", title: "Sabotage: Turret Gun"}).bindLabel("Turret Gun").bindPopup( popUp("turret", "Sabotage", "Turret Gun", "Fire", "Turret Access Code", "all", "note", "ingame", "desc") ),
    L.marker([42.74, -52.33], {icon: iconSabotage, alt: "level1sab-camera", title: "Sabotage: Camera"}).bindLabel("Camera").bindPopup( popUp("camera", "Sabotage", "Camera", "Place Remote Explosive", "Remore Explosive", "Cameraman", "note", "ingame", "desc") ),
    L.marker([43.77, -53.26], {icon: iconSabotage, alt: "level1sab-moose", title: "Sabotage: Moose"}).bindLabel("Moose").bindPopup( popUp("img", "Sabotage", "Moose", "use", "req", "susp", "Winch is on the second floor", "ingame", "desc") ),
    L.marker([75.63, 52.119], {icon: iconSabotage, alt: "level1sab-toilet", title: "Sabotage: Toilet"}).bindLabel("Toilet").bindPopup( popUp("img", "Sabotage", "Toilet", "Kick", "req", "all", "Toilet is on the second floor", "ingame", "desc") ),

    // Poison
    L.marker([82.41, -27.59], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Tourist", "Waiter", "note") ),
    L.marker([81.94, -34.05], {icon: iconPoison, alt: "level1poison", title: "Poison: Military Soldier"}).bindLabel("Glass of Red Wine (Military Soldier)").bindPopup( popPoison("Glass of Red Wine", "Military Soldier", "Waiter", "note") ),
    // Poison
    L.marker([70.69, -9.931], {icon: iconPoison, alt: "level1poison", title: "Poison: Zaydan"}).bindLabel("Plate of Food (Reza Zaydan)").bindPopup( popPoison("Plate of Food", "Reza Zaydan", "Waiter", "Will be delivered to Zaydan's office by a Waiter") ),
    L.marker([37.43, -48.25], {icon: iconPoison, alt: "level1poison"}).bindLabel("Plate of Food").bindPopup( popPoison("Plate of Food", "Businessman", "all", "note") ),
    L.marker([42.29, -27.11], {icon: iconPoison, alt: "level1poison"}).bindLabel("Plate of Food").bindPopup( popPoison("Plate of Food", "Businessman", "all", "note") ),
    L.marker([44.84, -25.97], {icon: iconPoison, alt: "level1poison"}).bindLabel("Plate of Food").bindPopup( popPoison("Plate of Food", "Businessman", "all", "note") ),
    // Poison
    L.marker([78.07, -13.71], {icon: iconPoison, alt: "level1poison"}).bindLabel("Snail Stand").bindPopup( popPoison("Snail Stand", "Tourist", "Waiter / Food Vendor", "note") ),
    L.marker([78.56, -13.71], {icon: iconPoison, alt: "level1poison"}).bindLabel("Snail Stand").bindPopup( popPoison("Snail Stand", "Tourist", "Waiter / Food Vendor", "note") ),
    L.marker([79.05, -16.74], {icon: iconPoison, alt: "level1poison", title: "Poison: Fortune Teller"}).bindLabel("Snail Stand (Fortune Teller)").bindPopup( popPoison("Snail Stand", "Fortune Teller", "Waiter / Food Vendor", "Give the Fortune Teller five coins to make him get up and go to the Snail Stand") ),
    L.marker([81.99, -19.59], {icon: iconPoison, alt: "level1poison"}).bindLabel("Tea Leaves").bindPopup( popPoison("Tea Leaves", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([74.37, -45.48], {icon: iconPoison, alt: "level1poison"}).bindLabel("Ground Ginger").bindPopup( popPoison("Ground Ginger", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([77.88, -46.45], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Figs").bindPopup( popPoison("Dried Figs", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([74.98, -36.07], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Dates").bindPopup( popPoison("Dried Dates", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([77.87, -35.63], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Bananas").bindPopup( popPoison("Dried Bananas", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([71.64, -4.965], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Bananas").bindPopup( popPoison("Dried Bananas", "Unknown", "Waiter / Food Vendor", "note") ),
    // Poison
    L.marker([41.34, -42.75], {icon: iconPoison, alt: "level1poison", title: "Poison: Consulate Security"}).bindLabel("Coffee Glass (Consulate Security)").bindPopup( popPoison("Coffee Glass", "Consulate Security", "all", "note") ),
    L.marker([42.97, -43.33], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Businessman", "all", "note") ),
    L.marker([38.06, -45.17], {icon: iconPoison, alt: "level1poison", title: "Poison: Consulate Security"}).bindLabel("Coffee Glass (Consulate Security)").bindPopup( popPoison("Coffee Glass", "Consulate Security", "all", "note") ),
    L.marker([36.63, -47.41], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass (x2)").bindPopup( popPoison("Coffee Glass", "Businessman", "all", "note") ),
    L.marker([54.90, -48.91], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Businessman", "all", "note") ),
    L.marker([36.17, -29.22], {icon: iconPoison, alt: "level1poison", title: "Poison: Consulate Security"}).bindLabel("Coffee Glass (Consulate Security)").bindPopup( popPoison("Coffee Glass", "Consulate Security", "all", "note") ),
    L.marker([43.99, -28.38], {icon: iconPoison, alt: "level1poison", title: "Poison: Consulate Security"}).bindLabel("Coffee Glass (Consulate Security)").bindPopup( popPoison("Coffee Glass", "Consulate Security", "all", "note") ),
    L.marker([53.59, -25.04], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Unknown", "all", "note") ),
    L.marker([82.39, -0.527], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "all", "note") ),
    L.marker([68.84, -14.15], {icon: iconPoison, alt: "level1poison", title: "Poison: Waiter"}).bindLabel("Coffee Glass (Waiter)").bindPopup( popPoison("Coffee Glass", "Waiter", "Waiter", "note") ),
    L.marker([80.69, -6.811], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass (x2)").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter", "note") ),
    // Poison
    L.marker([42.52, -45.96], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Unknown", "all", "note") ),
    L.marker([52.32, -53.61], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Businessman", "all", "note") ),
    L.marker([41.83, -25.92], {icon: iconPoison, alt: "level1poison", title: "Poison: Masseur"}).bindLabel("Water Bottle (Masseur)").bindPopup( popPoison("Water Bottle", "Masseur", "all", "note") ),
    L.marker([74.18, 39.858], {icon: iconPoison, alt: "level1poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),
    L.marker([54.57, -37.70], {icon: iconPoison, alt: "level1poison", title: "Poison: Consulate Intern"}).bindLabel("Water Bottle (Consulate Intern)").bindPopup( popPoison("Water Bottle", "Consulate Intern", "all", "note") ),
    L.marker([54.57, -41.57], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Businessman", "all", "note") ),
    L.marker([75.29, 47.153], {icon: iconPoison, alt: "level1poison", title: "Poison: Military Officer"}).bindLabel("Water Bottle (Military Officer)").bindPopup( popPoison("Water Bottle", "Military Officer", "all", "note") ),
    L.marker([67.18, -30.80], {icon: iconPoison, alt: "level1poison", title: "Poison: Protester"}).bindLabel("Water Bottle (Protester)").bindPopup( popPoison("Water Bottle", "Protester", "Waiter", "note") ),
    L.marker([76.16, 40.781], {icon: iconPoison, alt: "level1poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),
    L.marker([76.16, 38.671], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Unknown", "all", "note") ),
    L.marker([67.06, -9.887], {icon: iconPoison, alt: "level1poison", title: "Poison: Military Soldier"}).bindLabel("Water Bottle (Military Soldier)").bindPopup( popPoison("Water Bottle", "Military Soldier", "all", "note") ),
    L.marker([78.85, 28.652], {icon: iconPoison, alt: "level1poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),
    L.marker([80.37, -36.34], {icon: iconPoison, alt: "level1poison", title: "Poison: Waiter"}).bindLabel("Water Bottle (Waiter)").bindPopup( popPoison("Water Bottle", "Waiter", "Waiter", "note") ),
    // Poison
    L.marker([82.50, -34.27], {icon: iconPoison, alt: "level1poison", title: "Poison: Cameraman"}).bindLabel("Shisha Pipe (Cameraman)").bindPopup( popPoison("Shisha Pipe", "Cameraman", "Waiter", "note") ),
    L.marker([81.51, -36.82], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([82.58, -25.22], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([82.56, -21.84], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([82.16, -21.97], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([81.87, -22.32], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([81.16, -27.29], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([80.48, -31.50], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([80.48, -27.42], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([79.68, -33.44], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([79.00, -31.90], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([79.05, -23.20], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([79.05, -27.68], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),
    L.marker([79.65, -23.24], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Tourist", "Waiter", "note") ),

    // Distraction    
    L.marker([78.64, 41.044], {icon: iconDistraction, alt: "level1dis-press", title: "Distraction: Printing Press"}).bindLabel("Printing Press").bindPopup( popUp("press", "Distraction", "Printing Press", "Turn On/Off", "req", "Local Pringting Crew", "note", "ingame", "desc") ),
    L.marker([80.75, -39.33], {icon: iconDistraction, alt: "level1dis-cafefan", title: "Distraction: Cafe Fan"}).bindLabel("Cafe Fan").bindPopup( popUp("img", "Distraction", "Cafe Fan", "Turn On/Off", "req", "Handyman / Military Solider", "note", "ingame", "desc") ),
    L.marker([81.15, -25.66], {icon: iconDistraction, alt: "level1dis-ice", title: "Distraction: Ice Machine"}).bindLabel("Ice Machine").bindPopup( popUp("img", "Distraction", "Ice Machine", "Turn On/Off", "req", "Waiter", "note", "ingame", "desc") ),
    L.marker([35.53, -45.61], {icon: iconDistraction, alt: "level1dis-copier", title: "Distraction: Photocopier"}).bindLabel("Photocopier").bindPopup( popGlobal(disPhoto, "susp") ),
    L.marker([37.75, -54.75], {icon: iconDistraction, alt: "level1dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),
    L.marker([82.65, -36.91], {icon: iconDistraction, alt: "level1dis-sound", title: "Distraction: Sound System"}).bindLabel("Sound System").bindPopup( popGlobal(disSound, "susp") ),
    L.marker([61.93, -52.42], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup(disFaucet),
    L.marker([53.06, -29.35], {icon: iconDistraction, alt: "level1dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    // Distraction   
    L.marker([76.65, 18.940], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Military Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([80.88, -13.31], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([36.24, -33.57], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([40.91, -29.53], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([80.98, -36.25], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([80.98, -34.36], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([81.51, -23.29], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([80.76, -22.50], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),

    // Alarm
    L.marker([81.28, -25.83], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([80.78, -35.90], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([77.84, 48.911], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([76.09, 49.614], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([75.33, 34.453], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([28.72, -38.05], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([64.58, -40.78], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([63.37, -31.68], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([61.95, -48.91], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([51.23, -48.60], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([38.47, -42.40], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([43.22, -46.09], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
 
    // Item
    L.marker([81.01, -24.74], {icon: iconItem, alt: "level1item", title: "Item: Members Club Card"}).bindLabel("Member's Club Card").bindPopup( popUp("membercard", "Item", "Member's Club Card", "use", "req", "susp", "note", "A member's club card for the local shisha cafe.", "desc") ),
    L.marker([80.59, -36.21], {icon: iconItem, alt: "level1item", title: "Item: Members Club Key"}).bindLabel("Member's Club Key").bindPopup( popUp("img", "Item", "Member's Club Key", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([55.35, -30.14], {icon: iconItem, alt: "level1item", title: "Item: Consulate Safe Code"}).bindLabel("Consulate Safe Code").bindPopup( popUp("consafe", "Item", "Consulate Safe Code", "use", "req", "susp", "note", "The combination code for a safe. Probably belongs to consul Erik Olander", "desc") ),
    L.marker([53.59, -51.67], {icon: iconItem, alt: "level1item", title: "Item: Consulate Staff Car Keys"}).bindLabel("Consulate Staff Car Keys").bindPopup( popUp("conkeys", "Item", "Consulate Staff Car Keys", "use", "req", "susp", "note", "The keys to a consulate staff vehicle. This takes care of the transportation.", "desc") ),

    // Location
    L.marker([73.81, 46.933], {icon: iconLocation, alt: "level1location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([76.60, 22.675], {icon: iconLocation, alt: "level1location", title: "Location: Strandberg and Zaydan School Meeting Spot"}).bindLabel("Strandberg and Zaydan Meeting Spot (School)").bindPopup( popUp("meeting2", "Location", "Strandberg and Zaydan Meeting Spot (School)", "use", "req", "susp", "Strandberg will come here after fleeing from the Consulate in case of an emergency", "ingame", "desc") ),
    L.marker([83.61, -40.51], {icon: iconLocation, alt: "level1location", title: "Location: Fortune Teller Stash"}).bindLabel("Fortune Teller's Stash").bindPopup( popUp("fortune", "Location", "Fortune Teller Stash", "use", "req", "susp", "Give the Fortune Teller five coins to make him get up and go to his stash", "ingame", "desc") ),

    // Interaction
    L.marker([82.44, -59.67], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to the Printing Crew"}).bindLabel("Talk to the Printing Crew").bindPopup( popUp("img", "Interaction", "Talk to the Printing Crew", "use", "Local Printing Crew Disguise", "susp", "note", "ingame", "desc") ),
    L.marker([54.77, -39.59], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to the Secretary"}).bindLabel("Talk to Secretary").bindPopup( popUp("img", "Interaction", "Talk to Secretary", "use", "Masseur Disguise", "susp", "note", "ingame", "desc") ),
    L.marker([43.86, -51.32], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Start Camera"}).bindLabel("Start Camera").bindPopup( popUp("startcamera", "Interaction", "Start Camera", "use", "Cameraman Disguise", "susp", "note", "ingame", "desc") ),
    L.marker([73.23, -38.62], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to the TV Crew"}).bindLabel("Talk to TV Crew").bindPopup( popUp("img", "Interaction", "Talk to TV Crew", "use", "Cameraman Disguise", "susp", "note", "ingame", "desc") ),
    L.marker([75.40, 53.437], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: School Intercom"}).bindLabel("School Intercom").bindPopup( popUp("intercom", "Interaction", "School Intercom", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),
    L.marker([74.23, 41.088], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),
    L.marker([79.15, 49.174], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.75, 51.943], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Sit Down as a Prisoner"}).bindLabel("Sit Down as a Prisoner").bindPopup( popUp("prisoner", "Interaction", "Sit Down as a Prisoner", "use", "Prisoner Disguise", "susp", "note", "ingame", "desc") ),

    // Intel
    L.marker([79.82, 8.1738], {icon: iconIntel, alt: "level1intel", title: "Intel: The Retired Headmaster"}).bindLabel("The Retired Headmaster").bindPopup( popUp("headmaster", "Intel", "The Retired Headmaster", "Listen to the conversation", "req", "susp", "Reveals 'Open Sesame' opportunity", "According to soldiers, the old headmaster, of the school that Zaydan is using as his field HQ, lives right above the local carpet shop.", "desc") ),
    L.marker([82.40, -62.13], {icon: iconIntel, alt: "level1intel", title: "Intel: The Propaganda Machine"}).bindLabel("The Propaganda Machine").bindPopup( popUp("prop", "Intel", "The Propaganda Machine", "Listen to the conversation", "req", "susp", "note", "The printing crew spreads fake propaganda in the name of Crystal Dawn, encouraging the people of Moroccoo to rise up and take justice into their own hands. Which, of course, is esactly what Zaydan is counting on. Very clever. The crew must have access to nearby printing supplies, most likely at the abandoned school.", "desc") ),
    L.marker([76.88, -0.571], {icon: iconIntel, alt: "level1intel", title: "Intel: Printing Schedule"}).bindLabel("Printing Schedule").bindPopup( popUp("prints", "Intel", "Printing Schedule", "Examine", "req", "susp", "Reveals 'Why We Fight' opportunity", "A time schedule for the printing press. Apparently, the printing crew is out putting up posters in the streets.", "desc") ),
    L.marker([72.93, -37.88], {icon: iconIntel, alt: "level1intel", title: "Intel: The Strandberg Interview"}).bindLabel("The Strandberg Interview").bindPopup( popUp("interview", "Intel", "The Strandberg Interview", "Listen to the conversation", "req", "susp", "Reveals 'Prime Time' opportunity", "According to the GNN news crew, Claus Strandberg has agreed to an exclusive interview. However, the replacement cameraman, a local freelance hired when the regular cameraman got a stomach flu, apeears to be running late.", "desc") ),
    L.marker([78.45, 14.765], {icon: iconIntel, alt: "level1intel", title: "Intel: The Condemned Prisoner"}).bindLabel("The Condemned Prisoner").bindPopup( popUp("prisoner", "Intel", "The Condemned Prisoner", "Listen to the conversation", "req", "susp", "Reveals 'Bad Blood' opportunity", "According to the soldiers guarding the prison cell, the condemned prisoner was a close friend of Zaydan. However, when his brother, a Marrakesh police officer, was killed this morning during Strandberg's breakout, the prisoner decided to betray Zaydan and go public. Zaydan has already paid the prisoner a visit and is likely to do so again.", "desc") ),
    L.marker([53.61, -38.01], {icon: iconIntel, alt: "level1intel", title: "Intel: Tablet Computer"}).bindLabel("Tablet Computer").bindPopup( popUp("tablet", "Intel", "Tablet Computer", "Examine", "req", "susp", "Reveals 'Golden Touch' opportunity", "A tablet belonging to the consulate's administrative staff. According to today's appointment schedule, Claus Strandberg has booked a massage for his back pains. The masseur, who works at a local clinic, is already in the building.", "desc") ),
    L.marker([55.00, -28.16], {icon: iconIntel, alt: "level1intel", title: "Intel: Massage Expert Konny Engstrom"}).bindLabel("Massage Expert Konny Engstrom").bindPopup( popUp("konny", "Intel", "Massage Expert Konny Engstrom", "Listen to the conversation", "req", "susp", "note", "The masseur is on the phone in the conference room, pleading with his boss to get him out of his appointment with Claus Strandberg. They probably don't share the same ethical guidelines.", "desc") ),

    // Locked Door
    L.marker([74.62, 41.088], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([79.30, 42.143], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([78.94, 54.711], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([73.71, 43.593], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([73.20, 41.088], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([73.40, 26.718], {icon: iconLocked, alt: "level1locked", title: "Locked: School Key"}).bindLabel("Locked Door (School Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires School Key</p>"),
    L.marker([81.25, -20.65], {icon: iconLocked, alt: "level1locked", title: "Locked: Member Club Key"}).bindLabel("Locked Door (Member Club Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Member's Club Key</p>"),
    L.marker([62.71, -54.75], {icon: iconLocked, alt: "level1locked", title: "Locked: Consulate Keycard"}).bindLabel("Locked Door (Consulate Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Consulate Keycard</p>"),
    L.marker([64.69, -32.43], {icon: iconLocked, alt: "level1locked", title: "Locked: Consulate Keycard"}).bindLabel("Locked Door (Consulate Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Consulate Keycard</p>"),

    // Security Check
    L.marker([80.85, -29.66], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Shisha Cafe Security</h1><p class='req'>Requires Member's Club Card</p>"),
    L.marker([66.79, -38.84], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Consulate Security</h1>"),

    // Camera
    L.marker([57.89, -38.01], {icon: iconCamera, alt: "level1camera", title: "Camera: Consulate"}).bindLabel("Security Camera"),
        L.polygon([[57.89, -38.01], [56.26, -39.59], [56.26, -36.59]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([38.44, -43.94], {icon: iconEvidence, alt: "level1evidence", title: "Camera Recorder: Consulate"}).bindLabel("Camera Recorder").bindPopup("<h2>Evidence</h2><h1>Camera Recorder</h1><p class='item-use'>Destroy Evidence</p><p class='susp'>Suspicious in any disguise</p>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    // Enter Exit
    L.marker([40.68, -42.67], {icon: iconEnter, alt: "level2enter", title: "Starting Locaton: Undercover in the Consulate"}).bindLabel("Starting Locaton: Undercover in the Consulate").bindPopup("<img src='img/map_marrakesh/screenshots/enter_consulate.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Consulate</h1>"),
    L.marker([79.03, 50.537], {icon: iconEnter, alt: "level2enter", title: "Starting Locaton: Undercover in Zaydan Compound"}).bindLabel("Starting Locaton: Undercover in Zaydan's Compound").bindPopup("<img src='img/map_marrakesh/screenshots/enter_soldier.jpg'><h2>Starting Locaton</h2><h1>Undercover in Zaydan's Compound</h1>"),

    // ICA Pickup
    L.marker([40.68, -40.38], {icon: iconIcaStash, alt: "level2icastash", title: "Small Agency Pickup: Consulate Top Floor"}).bindLabel("Small Agency Pickup: Consulate Top Floor").bindPopup("<img src='img/map_marrakesh/screenshots/ica_consulate.jpg'><h2>Small Agency Pickup</h2><h1>Consulate Top Floor</h1>"),

    // Way Up/Down
    L.marker([81.00, -42.18], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([81.18, -38.36], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-2</h1>"),
    L.marker([78.28, -58.97], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([77.33, -56.42], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Hang").bindPopup("<h2>Way Up</h2><h1>Hang</h1>"),
    L.marker([74.66, 53.745], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([78.75, 47.460], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([78.65, 44.560], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    // Passage
    L.marker([77.20, 53.833], {icon: iconPassage, alt: "level2passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([81.03, -39.11], {icon: iconPassage, alt: "level2passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([73.70, 35.156], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 38.627], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 29.838], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 42.495], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 48.295], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([73.70, 52.075], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([76.31, 46.889], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([76.00, 39.550], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([77.53, 36.035], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.29, 53.701], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.29, 50.405], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.29, 47.944], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.29, 37.089], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([79.29, 33.750], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([75.94, 28.081], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Ledge
    new L.Polyline([[73.66, 38.627], [73.66, 29.838]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),
    new L.Polyline([[73.66, 42.495], [73.66, 54.492]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),
    new L.Polyline([[79.31, 54.711], [79.31, 29.838]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),
    new L.Polyline([[77.48, 33.75], [77.48, 46.713], [76.05, 46.713], [76.05, 33.75], [77.48, 33.75]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),

    // Stairs
    L.marker([79.57, 5.8886], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([80.39, -52.51], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([81.02, -43.24], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([75.93, -54.66], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([29.99, -38.27], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([50.98, -44.51], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([50.95, -34.93], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([74.89, -55.19], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([81.02, -51.67], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([80.38, -43.98], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([79.03, 8.4375], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([78.46, 32.036], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([74.82, 32.036], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([76.53, 51.811], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    
]);

var level2weapons = L.layerGroup([

    L.marker([77.15, 27.465], {icon: iconPoisons, alt: "level2weapoison", title: "Weapon: Lethal Poison Vial"}).bindLabel("Lethal Poison Vial").bindPopup(txtLethalPoison),

    // Weapons and Tools
    L.marker([74.06, 49.833], {icon: iconPoisons, alt: "level2weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([46.49, -33.00], {icon: iconPoisons, alt: "level2weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Non-Lethal Melee
    L.marker([79.03, 33.354], {icon: iconBrick, alt: "level2brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([77.90, 51.020], {icon: iconCrowbar, alt: "level2crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([77.89, 49.702], {icon: iconToyTank, alt: "level2toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([77.91, 53.481], {icon: iconWrench, alt: "level2wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([36.24, -43.72], {icon: iconWrench, alt: "level2wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([47.21, -52.82], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([48.71, -51.98], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([48.60, -27.02], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Lethal Melee
    L.marker([78.44, 45.439], {icon: iconScrewdriver, alt: "level2screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([76.15, 27.817], {icon: iconSaber, alt: "level2saber", title: "Weapon: Saber"}).bindLabel("Saber").bindPopup(txtSaber),
    L.marker([52.98, -29.48], {icon: iconOpener, alt: "level2opener", title: "Weapon: Letter Opener"}).bindLabel("Letter Opener").bindLabel(txtOpener),

]);

var level2poi = L.layerGroup([

    // Hiding Spot
    L.marker([79.22, 29.882], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([79.19, 41.440], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([36.24, -44.69], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([47.12, -30.62], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.45, -29.61], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),


    // Conceal
    L.marker([73.86, 54.448], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([73.81, 49.658], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([75.15, 54.536], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([79.21, 31.640], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([38.68, -43.46], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([48.10, -52.77], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),
    L.marker([56.02, -54.66], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item"),

    // Disguise
    L.marker([78.74, 53.833], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Elite Soldier"}).bindLabel("Elite Soldier").bindPopup("<img src='img/map_marrakesh/screenshots/disg_elite.jpg'><h2>Disguise</h2><h1>Elite Soldier</h1>"),
    L.marker([36.35, -45.83], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Consulate Janitor"}).bindLabel("Consulate Janitor").bindPopup("<img src='img/map_marrakesh/screenshots/disg_conjan.jpg'><h2>Disguise</h2><h1>Consulate Janitor</h1>"),

    // Blend In
    L.marker([75.30, 48.339], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Elite Soldier").bindPopup("<h2>Blend In</h2><h1>Elite Soldier</h1>"),
    L.marker([79.03, 51.679], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Elite Soldier").bindPopup("<h2>Blend In</h2><h1>Elite Soldier</h1>"),
    L.marker([79.00, 38.935], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Elite Soldier").bindPopup("<h2>Blend In</h2><h1>Elite Soldier</h1>"),
    L.marker([50.93, -31.28], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([59.22, -51.59], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([54.82, -48.16], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([41.64, -45.87], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([59.62, -32.25], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Intern").bindPopup("<h2>Blend In</h2><h1>Consulate Intern</h1>"),
    L.marker([40.68, -41.57], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Janitor").bindPopup("<h2>Blend In</h2><h1>Consulate Janitor</h1>"),
    L.marker([44.99, -39.59], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Consulate Janitor").bindPopup("<h2>Blend In</h2><h1>Consulate Janitor</h1>"),

    // Sabotage
    L.marker([75.63, 52.119], {icon: iconSabotage, alt: "level2sab-toilet", title: "Sabotage: Toilet"}).bindLabel("Toilet").bindPopup( popUp("img", "Sabotage", "Toilet", "Kick", "req", "all", "note", "ingame", "desc") ),
    L.marker([76.56, 30.981], {icon: iconSabotage, alt: "level2sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([36.73, -48.47], {icon: iconSabotage, alt: "level2sab-stagelamp", title: "Sabotage: Stage Lamp"}).bindLabel("Stage Lamp").bindPopup( popUp("img", "Sabotage", "Stage Lamp", "Expose Wire", "Screwdriver", "susp", "note", "ingame", "desc") ),
        new L.Polyline([[36.73, -48.47], [47.12, -50.27]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level2sab-stagelamp"}),
        L.marker([47.12, -50.27], {icon: iconPointRed, alt: "level2sab-stagelamp"}).bindLabel("Stage Lamp").bindPopup( popUp("img", "Sabotage", "Stage Lamp", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),
    L.marker([43.77, -53.26], {icon: iconSabotage, alt: "level2sab-moose", title: "Sabotage: Moose"}).bindLabel("Moose").bindPopup( popUp("img", "Sabotage", "Moose", "use", "req", "susp", "note", "ingame", "desc") ),
        new L.Polyline([[43.77, -53.26], [47.15, -54.22]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level2sab-moose"}),
        L.marker([47.15, -54.22], {icon: iconPointRed, alt: "level2sab-moose"}).bindLabel("Winch").bindPopup( popUp("img", "Sabotage", "Moose Winch", "Release the Moose", "req", "susp", "note", "ingame", "desc") ),

    // Poison
    L.marker([50.93, -30.41], {icon: iconPoison, alt: "level2poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Businessman", "all", "note") ),
    L.marker([59.08, -48.86], {icon: iconPoison, alt: "level2poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Businessman", "all", "note") ),
    L.marker([75.34, 42.539], {icon: iconPoison, alt: "level2poison", title: "Poison: Elite Soldier"}).bindLabel("Coffee Glass (Elite Soldier)").bindPopup( popPoison("Coffee Glass", "Elite Soldier", "all", "note") ),
    L.marker([74.56, 46.450], {icon: iconPoison, alt: "level2poison", title: "Poison: Zaydan"}).bindLabel("Water Bottle (Reza Zaydan)").bindPopup( popPoison("Water Bottle", "Reza Zaydan", "all", "Zaydan will drink out of this bottle, if the Military Officer nearby is distracted.") ),
    L.marker([78.75, 37.529], {icon: iconPoison, alt: "level2poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),
    L.marker([78.53, 37.529], {icon: iconPoison, alt: "level2poison", title: "Poison: Elite Soldier"}).bindLabel("Water Bottle (Elite Soldier)").bindPopup( popPoison("Water Bottle", "Elite Soldier", "all", "note") ),
    L.marker([77.39, 27.905], {icon: iconPoison, alt: "level2poison", title: "Poison: Strandberg"}).bindLabel("Glass of Red Wine (Claus Strandberg)").bindPopup( popPoison("Glass of Red Wine", "Claus Strandberg", "all", "Claus will drink out of this glass after his meeting with Zaydan in the military compound") ),
    L.marker([58.67, -30.98], {icon: iconPoison, alt: "level2poison", title: "Poison: Strandberg"}).bindLabel("Glass of Red Wine (Claus Strandberg)").bindPopup( popPoison("Glass of Red Wine", "Claus Strandberg", "all", "note") ),

    // Distraction
    L.marker([38.65, -46.01], {icon: iconDistraction, alt: "level2dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),
    L.marker([75.21, 32.167], {icon: iconDistraction, alt: "level2dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),
    L.marker([75.37, 33.969], {icon: iconDistraction, alt: "level2dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "susp") ),
    L.marker([76.57, 29.707], {icon: iconDistraction, alt: "level2dis-oillamp", title: "Distraction: Oil Lamp"}).bindLabel("Oil Lamp").bindPopup( popGlobal(disOilLamp, "susp") ),
    L.marker([56.84, -48.51], {icon: iconDistraction, alt: "level2dis-copier", title: "Distraction: Photocopier"}).bindLabel("Photocopier").bindPopup( popGlobal(disPhoto, "susp") ),

    // Alarm
    L.marker([73.76, 40.517], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([76.68, 49.086], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([79.14, 54.667], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([78.03, 36.958], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([76.38, 31.684], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([43.00, -43.54], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([48.10, -51.15], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([50.87, -51.59], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([59.10, -33.66], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([50.93, -28.95], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([55.89, -29.92], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Item
    L.marker([74.47, 40.517], {icon: iconItem, alt: "level2item", title: "Item: Keys to Army Truck"}).bindLabel("Keys to Army Truck").bindPopup( popUp("keytruck", "Item", "Keys to Army Truck", "use", "req", "susp", "note", "The keys to an army truck. Could prove useful.", "desc") ),
    L.marker([78.69, 51.503], {icon: iconItem, alt: "level2item", title: "Item: School Safe Code"}).bindLabel("School Safe Code").bindPopup( popUp("safecode", "Item", "School Safe Code", "use", "req", "susp", "note", "The combination code for a safe. Probably belongs to General Zaydan.", "desc") ),

    // Location    
    L.marker([75.30, 40.297], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([75.34, 47.241], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.91, 41.484], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.38, 41.484], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.14, 40.429], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([79.19, 40.429], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.11, 33.486], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([79.15, 33.266], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.10, 36.166], {icon: iconLocation, alt: "level2location", title: "Location: Children Painting"}).bindLabel("Children's Painting").bindPopup( popUp("paint", "Location", "Children's Painting", "use", "req", "susp", "note", "ingame", "desc") ),

    // Intel
    L.marker([60.28, -26.71], {icon: iconIntel, alt: "level2intel", title: "Intel: Strandberg Code Word"}).bindLabel("Strandberg's Code Word").bindPopup( popUp("codeword2", "Intel", "Strandberg's Code Word", "use", "req", "susp", "note", "A code word found in Consul Olander's safe: 'Cherry Blossom.'", "desc") ),
    L.marker([76.29, 29.575], {icon: iconIntel, alt: "level2intel", title: "Intel: Zaydan Code Word"}).bindLabel("Zaydan's Code Word").bindPopup( popUp("codeword", "Intel", "Zaydan's Code Word", "use", "req", "susp", "note", "A code word found in Reza Zaydan's safe: 'Honeycomb.'", "desc") ),
    L.marker([77.02, 28.476], {icon: iconIntel, alt: "level2intel", title: "Intel: Meeting Protocol"}).bindLabel("Meeting Protocol").bindPopup( popUp("meetprot", "Intel", "Meeting Protocol", "Examine", "req", "susp", "Reveals 'Honeycomb' opportunity", "ingame", "desc") ),
    L.marker([53.06, -26.98], {icon: iconIntel, alt: "level2intel", title: "Intel: Meeting Protocol"}).bindLabel("Meeting Protocol").bindPopup( popUp("meetprot2", "Intel", "Meeting Protocol", "Examine",  "req", "susp", "Reveals 'Cherry Blossom' opportunity", "In case of an emergency, Strandberg and Zaydan will meet face to face at the centre of the underground tunnel. The conspirators can summon each other over the phone using a set of keywords, one of which is locked away in Consul Olander's safe.", "desc") ),

    // Interaction
    L.marker([74.39, 49.262], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),
    L.marker([77.52, 29.619], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),
    L.marker([78.16, 49.174], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),
    L.marker([76.46, 28.872], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: School Safe"}).bindLabel("School Safe").bindPopup( popUp("img", "Interaction", "School Safe", "Use Combination", "School Safe Code", "susp", "note", "ingame", "desc") ),
    L.marker([56.63, -31.02], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Call Reza Zaydan"}).bindLabel("Call Reza Zaydan").bindPopup( popUp("callhugo", "Interaction", "Call Reza Zaydan", "use", "Strandberg's Code Word", "susp", "note", "ingame", "desc") ),
    L.marker([76.46, 27.333], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Call Hugo Strandberg"}).bindLabel("Call Hugo Strandberg").bindPopup( popUp("callhugo", "Interaction", "Call Hugo Strandberg", "use", "Zaydan's Code Word", "susp", "note", "ingame", "desc") ),
    L.marker([59.86, -26.05], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Consulate Safe"}).bindLabel("Consulate Safe").bindPopup( popUp("img", "Interaction", "Consulate Safe", "Use Combination", "Consulate Safe Code", "susp", "note", "ingame", "desc") ),
    L.marker([52.45, -53.83], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Give Massage"}).bindLabel("Give Massage").bindPopup( popUp("massage", "Interaction", "Give Massage", "use", "Masseur Disguise", "susp", "note", "ingame", "desc") ),

    // Locked
    L.marker([53.43, -31.77], {icon: iconLocked, alt: "level2locked", title: "Locked: Consulate Keycard"}).bindLabel("Locked Door (Consulate Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Consulate Keycard</p>"),
    L.marker([51.12, -27.37], {icon: iconLocked, alt: "level2locked", title: "Locked: Consulate Keycard"}).bindLabel("Locked Door (Consulate Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Consulate Keycard</p>"),

    // Security Check
    L.marker([50.93, -37.22], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Consulate Security</h1>"),
    L.marker([50.90, -42.23], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Consulate Security</h1>"),
    L.marker([59.97, -33.35], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Consulate Security</h1>"),

    // Camera
    L.marker([57.86, -35.72], {icon: iconCamera, alt: "level2camera", title: "Camera: Consulate"}).bindLabel("Security Camera"),
        L.polygon([[57.86, -35.72], [59.42, -37.79], [59.42, -33.79]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    // Enter Exit
    L.marker([79.82, -44.47], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Lamp Store Rooftop"}).bindLabel("Starting Locaton: Lamp Store Rooftop").bindPopup("<img src='img/map_marrakesh/screenshots/enter_store.jpg'><h2>Starting Locaton</h2><h1>Lamp Store Rooftop</h1>"),
    L.marker([76.68, -57.17], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Undercover on the West Bazaar Rooftop"}).bindLabel("Starting Locaton: Undercover on the West Bazaar Rooftop").bindPopup("<img src='img/map_marrakesh/screenshots/enter_handy.jpg'><h2>Starting Locaton</h2><h1>Undercover on the West Bazaar Rooftop</h1>"),

    // ICA Pickup
    L.marker([77.72, 5.4052], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Old Headmaster Terrace"}).bindLabel("Large Agency Pickup: Old Headmaster's Terrace").bindPopup("<img src='img/map_marrakesh/screenshots/ica_terrace.jpg'><h2>Large Agency Pickup</h2><h1>Old Headmaster's Terrace</h1>"),

    // Way Up/Down
    L.marker([78.01, 10.986], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([81.00, -42.18], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([77.33, -56.42], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    // Passage
    L.marker([77.95, 7.2949], {icon: iconPassage, alt: "level3passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([78.52, 12.656], {icon: iconPassage, alt: "level3passage"}).bindLabel("Ledge").bindPopup("<h2>Passage</h2><h1>Ledge</h1>"),
    L.marker([76.07, -59.85], {icon: iconPassage, alt: "level3passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([76.70, -54.79], {icon: iconPassage, alt: "level3passage"}).bindLabel("Climb Down").bindPopup("<h2>Passage</h2><h1>Climb Down</h1>"),

    // Ledge
    new L.Polyline([[77.95, 7.2949], [77.56, 9.2724], [78.01, 10.986], [77.96, 11.557], [78.34, 13.227], [78.52, 12.656]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),
    new L.Polyline([[76.71, -54.62], [77.32, -54.62], [77.32, -56.25]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

    // Stairs
    L.marker([75.92, -57.17], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([81.03, -46.23], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([80.38, -49.74], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([79.23, 4.0429], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    
]);

var level3weapons = L.layerGroup([

    // Weapons
    L.marker([76.95, -55.45], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),

    // Lethal Melee
    L.marker([78.71, 11.953], {icon: iconBattleAxe, alt: "level3battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),

    // Non-Lethal Melee
    L.marker([74.30, -57.91], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([75.90, -59.80], {icon: iconWrench, alt: "level3wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level3poi = L.layerGroup([

    // Hiding Spot
    L.marker([79.10, 4.9658], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.55, -51.85], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.20, -50.05], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.20, -46.71], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.42, -47.50], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.70, -56.68], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.66, -57.91], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([80.04, -46.88], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item"),

    // Disguise
    L.marker([80.40, -45.48], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Shopkeeper"}).bindLabel("Shopkeeper").bindPopup("<img src='img/map_marrakesh/screenshots/disg_shop.jpg'><h2>Disguise</h2><h1>Shopkeeper</h1>"),
    L.marker([74.98, -60.90], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Handyman"}).bindLabel("Handyman").bindPopup("<img src='img/map_marrakesh/screenshots/disg_handyman.jpg'><h2>Disguise</h2><h1>Handyman</h1>"),

    L.marker([78.99, 7.6025], {icon: iconNPC, alt: "level3npc", title: "NPC: Headmaster"}).bindLabel("Headmaster").bindPopup( popUp("img", "NPC", "Headmaster", "use", "req", "susp", "note", "ingame", "desc") ),

    // Poison
    L.marker([79.23, 8.3056], {icon: iconPoison, alt: "level3poison", title: "Poison: Headmaster"}).bindLabel("Shisha Pipe (Headmaster)").bindPopup( popPoison("Shisha Pipe", "Headmaster", "all", "note") ),
    L.marker([79.36, -48.38], {icon: iconPoison, alt: "level3poison", title: "Poison: Head of Security"}).bindLabel("Water Bottle (Head of Security)").bindPopup( popPoison("Water Bottle", "Head of Security", "all", "note") ),
 
    // Item
    L.marker([78.82, 6.8994], {icon: iconItem, alt: "level3item", title: "Item: School Key"}).bindLabel("School Key").bindPopup( popUp("keyschool", "Item", "School Key", "use", "req", "susp", "note", "According to the carpet shop owner, his ageing father has kept the school's headmaster key, out of nostalgia. Supposedly, this opens any lock in the building.", "desc") ),
    L.marker([79.50, -51.32], {icon: iconItem, alt: "level3item", title: "Item: Consulate Keycard"}).bindLabel("Consulate Keycard").bindPopup( popUp("keyconsul", "Item", "Consulate Keycard", "use", "req", "susp", "note", "A keycard that gives access to the Swedish consulate", "desc") ),
    L.marker([74.87, -57.83], {icon: iconItem, alt: "level3item", title: "Item: Members Club Card"}).bindLabel("Member's Club Card").bindPopup( popUp("membercard", "Item", "Member's Club Card", "use", "req", "susp", "note", "A member's club card for the local shisha cafe.", "desc") ),

    // Intel
    L.marker([80.72, -51.41], {icon: iconIntel, alt: "level3intel", title: "Intel: Head of Security Phone Call"}).bindLabel("Head of Security's Phone Call").bindPopup( popUp("sechead", "Intel", "Head of Security's Phone Call", "Listen to the conversation", "req", "susp", "note", "According to the consulate's former head of security, there is a secret underground tunnel leading from the Swedish consulate to a shop downtown. No doubt this is how Strandberg plans to escape the consulate unnoticed.", "desc") ),
    L.marker([80.99, -52.33], {icon: iconIntel, alt: "level3intel", title: "Intel: Evacuation Plan"}).bindLabel("Evacuation Plan").bindPopup( popUp("evac", "Intel", "Evacuation Plan", "Examine", "req", "susp", "note", "According to the evacuation plan, a secret tunnel runs between the consulate and a shoe shop downtown. If the security alarm is triggered, Claus Strandberg will head to the underground garage. Here a team of Zaydan's elite troops await to escort him safely to the army field HQ at the abandoned school.", "desc") ),

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