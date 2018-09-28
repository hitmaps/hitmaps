var mapbonusmarrakesh = L.map('mapbonusmarrakesh', {maxBoundsViscosity: 1}).setView([78.13, -17.49], 4);
mapbonusmarrakesh.zoomControl.setPosition('topright');
mapbonusmarrakesh.setMaxBounds([[13.58, -173.4],[86.05, 144.14]]);
$("#level-1").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel1base = L.tileLayer('img/map_bonusmarrakesh/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapbonusmarrakesh),
    mapLevel2base = L.tileLayer('img/map_bonusmarrakesh/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_bonusmarrakesh/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1suit = mapLevel1vendor = mapLevel1handyman = mapLevel1soldier = mapLevel1fortune = L.tileLayer('img/map_bonusmarrakesh/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2vendor = mapLevel2handyman = mapLevel2soldier = mapLevel2fortune = L.tileLayer('img/map_bonusmarrakesh/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3vendor = mapLevel3handyman = mapLevel3soldier = mapLevel3fortune = L.tileLayer('img/map_bonusmarrakesh/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1shopkeeper = L.tileLayer('img/map_bonusmarrakesh/lvl_1/shop/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2shopkeeper = L.tileLayer('img/map_bonusmarrakesh/lvl_2/shop/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3shopkeeper = L.tileLayer('img/map_bonusmarrakesh/lvl_3/shop/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1waiter = L.tileLayer('img/map_bonusmarrakesh/lvl_1/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2waiter = L.tileLayer('img/map_bonusmarrakesh/lvl_2/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3waiter = L.tileLayer('img/map_bonusmarrakesh/lvl_3/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1bodyguard = L.tileLayer('img/map_bonusmarrakesh/lvl_1/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2bodyguard = L.tileLayer('img/map_bonusmarrakesh/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3bodyguard = L.tileLayer('img/map_bonusmarrakesh/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    // Enter Exit
    L.marker([68.30, -33.75], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Consulate Plaza"}).bindLabel("Starting Locaton: Consulate Plaza").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/enter_plaza.jpg'><h2>Starting Locaton</h2><h1>Consulate Plaza</h1>"),
    L.marker([78.75, -61.83], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: West Bazaar Gates"}).bindLabel("Exit Locaton: West Bazaar Gates").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/exit_gateswest.jpg'><h2>Exit Locaton</h2><h1>West Bazaar Gates</h1>"),
    L.marker([82.65, 0.5273], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Bazaar Gates"}).bindLabel("Exit Locaton: Bazaar Gates").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/exit_bazaar.jpg'><h2>Exit Locaton</h2><h1>Bazaar Gates</h1>"),
    L.marker([83.06, -57.91], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Door Near The Well"}).bindLabel("Exit Locaton: Door Near The Well").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/exit_door1.jpg'><h2>Exit Locaton</h2><h1>Door Near The Well</h1><p class='req'>Requires Crowbar</p>"),
    L.marker([71.28, 14.326], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Door On The Street"}).bindLabel("Exit Locaton: Door On The Street").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/exit_door2.jpg'><h2>Exit Locaton</h2><h1>Door On The Street</h1><p class='req'>Requires Crowbar</p>"),
    L.marker([65.56, -27.72], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Truck"}).bindLabel("Exit Locaton: Truck").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/exit_truck.jpg'><h2>Exit Locaton</h2><h1>Truck</h1><p class='req'>Requires Truck Keys</p>"),

    // Way Up/Down
    L.marker([77.97, 11.162], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([81.18, -38.36], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-2</h1>"),
    L.marker([78.31, -60.77], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-2</h1>"),

    // Passage
    L.marker([78.34, 27.158], {icon: iconPassage, alt: "level1passage"}).bindLabel("Drop Down").bindPopup("<h2>Passage</h2><h1>Drop Down</h1>"),

    // Stairs
    L.marker([78.69, 6.7236], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([81.02, -49.57], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([80.39, -46.18], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([74.91, -57.17], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    
]);

var level1weapons = L.layerGroup([

    L.marker([82.65, -30.67], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([82.32, -57.91], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([82.63, -27.46], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([77.88, 16.611], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([81.13, -37.30], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([79.82, -58.31], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([76.21, -13.05], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([82.13, 0.2197], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([80.85, -53.04], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Lethal Poison"}).bindLabel("Lethal Poison").bindPopup(txtLethalPoison),

    // Explosive

    // Non-Lethal Melee
    L.marker([80.98, -22.01], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([73.51, -30.67], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([78.02, -54.97], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([69.90, -1.845], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([67.72, -16.30], {icon: iconCrowbar, alt: "level1crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([81.26, -37.30], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([82.12, -51.37], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([81.15, 6.5917], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([73.77, -2.109], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([62.26, -55.15], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([75.19, 28.388], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([71.53, 17.270], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick (x3)").bindPopup(txtBrick),
    L.marker([78.34, 25.576], {icon: iconPipe, alt: "level1pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([82.90, -23.20], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x3)").bindPopup(txtSoda),
    L.marker([80.70, -6.240], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([82.37, -4.042], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([81.20, -48.69], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([78.03, -17.66], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([82.75, -1.450], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([77.82, -16.08], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([78.64, -16.52], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),

    // Lethal Melee
    L.marker([79.63, -59.32], {icon: iconBattleAxe, alt: "level1battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
    L.marker([79.04, -15.64], {icon: iconCleaver, alt: "level1cleaver", title: "Weapons: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([77.45, -48.16], {icon: iconCleaver, alt: "level1cleaver", title: "Weapons: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([76.14, -44.07], {icon: iconCleaver, alt: "level1cleaver", title: "Weapons: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([76.46, -51.02], {icon: iconCleaver, alt: "level1cleaver", title: "Weapons: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([76.03, 9.7998], {icon: iconKnifeFold, alt: "level1foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([82.64, -28.65], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([78.75, -13.27], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([75.24, -28.43], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([75.05, -37.35], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([76.81, -34.36], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([75.47, -37.30], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([77.60, -44.82], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([69.90, -33.66], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([75.58, -30.49], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([74.71, -33.13], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([75.96, -49.61], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([78.00, -51.89], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([82.80, -59.98], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([71.37, -10.37], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([81.01, -24.21], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([80.78, -9.404], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([83.05, -8.525], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),

]);

var level1poi = L.layerGroup([

    // Hiding Spot
    L.marker([80.99, -22.93], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.98, -38.23], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([82.50, -36.03], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.45, -21.35], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.35, -29.83], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.75, -32.69], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.91, -53.83], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([77.81, -54.36], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([83.01, -61.17], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([81.91, -51.32], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([83.74, -41.74], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([83.35, -44.51], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([82.44, 0.7031], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([79.17, 9.1845], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.45, 10.546], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.56, 2.2412], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.64, -14.19], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.87, 1.2304], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([73.13, -2.768], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.80, 4.4384], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([82.19, -50.00], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([76.19, -11.77], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([72.43, -57.48], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([72.90, -3.823], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),

    // Weapon Case
    L.marker([81.00, -25.83], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    // Disguise
    L.marker([65.54, -35.15], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Shopkeeper"}).bindLabel("Shopkeeper").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/disg_shop.jpg'><h2>Disguise</h2><h1>Shopkeeper</h1>"),
    L.marker([80.96, -9.008], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Handyman"}).bindLabel("Handyman").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/disg_handyman.jpg'><h2>Disguise</h2><h1>Handyman</h1>"),
    L.marker([81.03, -21.04], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Waiter"}).bindLabel("Waiter").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/disg_waiter.jpg'><h2>Disguise</h2><h1>Waiter</h1>"),

    // NPC
    L.marker([83.49, -40.60], {icon: iconNPC, alt: "level1npc", title: "NPC: Fortune Teller"}).bindLabel("Fortune Teller").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/npc_teller.jpg'><h2>NPC</h2><h1>Fortune Teller</h1>"),

    // Blend In
    L.marker([79.96, -28.47], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([79.22, -31.90], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([78.39, -15.82], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([77.36, -36.78], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([74.21, -41.52], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([76.32, -41.52], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([75.20, -50.58], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([81.83, -39.50], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([82.59, -41.92], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([82.85, -37.30], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([83.17, -34.62], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([83.25, -27.68], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([82.88, -25.70], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([81.66, -19.55], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Customer").bindPopup("<h2>Blend In</h2><h1>Customer</h1>"),
    L.marker([68.33, -31.46], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([75.32, 4.2187], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Shopkeeper").bindPopup("<h2>Blend In</h2><h1>Shopkeeper</h1>"),
    L.marker([78.56, -12.78], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Food Vendor").bindPopup("<h2>Blend In</h2><h1>Food Vendor</h1>"),
    L.marker([82.10, -28.56], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([82.41, -28.95], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([81.01, -24.69], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([81.64, -22.14], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),

    // Sabotage
    L.marker([74.69, -28.16], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([73.42, -51.19], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([73.42, -52.11], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([83.21, -18.41], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([77.10, 1.9335], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([70.45, 4.5703], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([70.78, 4.5703], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.38, -29.55], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.38, -30.65], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.38, -49.60], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.38, -48.50], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    L.marker([72.38, -47.40], {icon: iconSabotage, alt: "level1sab-phone", title: "Sabotage: Phonebooth"}).bindLabel("Phonebooth").bindPopup( popGlobal(sabPhone, "Handyman") ),
    // Sabotage
    L.marker([79.16, -39.06], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.22, -25.00], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([76.35, -27.86], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([73.42, -50.36], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.26, -44.64], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.69, -39.41], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.44, -39.41], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.49, -53.08], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.80, -62.27], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.65, -57.91], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.78, -0.439], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([82.23, -19.64], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.58, -15.60], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.02, -11.64], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.74, -11.99], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.07, -5.185], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.80, -3.076], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.35, 2.0214], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([81.14, 4.0869], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([80.17, 9.4042], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([79.87, 14.062], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.11, -11.77], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.71, -6.943], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.62, -1.142], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([77.27, 3.2958], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([75.95, -2.636], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([75.02, -10.01], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([73.46, -1.801], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([78.90, 19.511], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([75.37, 20.566], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.39, 16.215], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.24, 4.5703], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([69.73, 2.9443], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.13, 0.7910], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([71.21, -3.076], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([68.38, -55.45], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([67.79, -54.00], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([64.09, -58.13], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([67.20, -31.90], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([78.63, -36.38], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    L.marker([78.56, -35.77], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "Handyman") ),
    // Sabotage
    L.marker([81.52, -38.23], {icon: iconSabotage, alt: "level1sab-gasvalve", title: "Sabotage: Gas Valve"}).bindLabel("Gas Valve").bindPopup( popGlobal(sabGasValve, "all") ),
    L.marker([78.14, 12.788], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum (x2)").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([78.34, -12.61], {icon: iconSabotage, alt: "level1sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister (x2)").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([81.90, -29.75], {icon: iconSabotage, alt: "level1sab-cafelights", title: "Sabotage: Cafe Lights"}).bindLabel("Cafe Lights").bindPopup( popUp("img", "Sabotage", "Cafe Lights", "use", "req", "susp", "Winch is on the second level", "ingame", "desc") ),
    L.marker([79.03, -37.26], {icon: iconSabotage, alt: "level1sab-cafesign", title: "Sabotage: Cafe Sign"}).bindLabel("Cafe Sign").bindPopup( popUp("img", "Sabotage", "Cafe Sign", "use", "req", "susp", "Can be shot down", "ingame", "desc") ),
    // Sabotage
    L.marker([80.38, 6.5039], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[80.38, 6.5039], [80.68, 5.0537]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([80.68, 5.0537], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([82.84, -22.36], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[82.84, -22.36], [82.83, -20.74]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([82.83, -20.74], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([81.25, -47.72], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[81.25, -47.72], [81.66, -49.04]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([81.66, -49.04], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("High Voltage Power Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    L.marker([81.38, -22.54], {icon: iconSabotage, alt: "level1sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[81.38, -22.54], [81.28, -23.59]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1sab-wire"}),
        L.marker([81.28, -23.59], {icon: iconPointRed, alt: "level1sab-wire"}).bindLabel("Electrical Outlet").bindPopup( popGlobal(sabOutlet, "susp") ),
    // Poison
    L.marker([78.07, -13.71], {icon: iconPoison, alt: "level1poison"}).bindLabel("Snail Stand").bindPopup( popPoison("Snail Stand", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([78.56, -13.71], {icon: iconPoison, alt: "level1poison"}).bindLabel("Snail Stand").bindPopup( popPoison("Snail Stand", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([79.05, -16.74], {icon: iconPoison, alt: "level1poison", title: "Poison: Matthieu Mendola"}).bindLabel("Snail Stand").bindPopup( popPoison("Snail Stand", "Matthieu Mendola", "Waiter / Food Vendor", "note") ),
    L.marker([81.99, -19.59], {icon: iconPoison, alt: "level1poison", title: "Poison: Matthieu Mendola"}).bindLabel("Tea Leaves").bindPopup( popPoison("Tea Leaves", "Matthieu Mendola", "Waiter / Food Vendor", "note") ),
    L.marker([74.37, -45.48], {icon: iconPoison, alt: "level1poison"}).bindLabel("Ground Ginger").bindPopup( popPoison("Ground Ginger", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([77.88, -46.45], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Figs").bindPopup( popPoison("Dried Figs", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([74.98, -36.07], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Dates").bindPopup( popPoison("Dried Dates", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([75.63, -41.52], {icon: iconPoison, alt: "level1poison", title: "Poison: Matthieu Mendola"}).bindLabel("Dried Dates").bindPopup( popPoison("Dried Dates", "Matthieu Mendola", "Waiter / Food Vendor", "note") ),
    L.marker([77.87, -35.63], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Bananas").bindPopup( popPoison("Dried Bananas", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([71.64, -4.965], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Bananas").bindPopup( popPoison("Dried Bananas", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([78.70, -41.79], {icon: iconPoison, alt: "level1poison"}).bindLabel("Dried Bananas").bindPopup( popPoison("Dried Bananas", "Unknown", "Waiter / Food Vendor", "note") ),
    // Poison
    L.marker([80.61, -38.45], {icon: iconPoison, alt: "level1poison", title: "Poison: Waiter"}).bindLabel("Water Bottle (Waiter)").bindPopup( popPoison("Water Bottle", "Waiter", "Waiter / Food Vendor", "note") ),
    L.marker([80.53, -36.95], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([80.99, -54.40], {icon: iconPoison, alt: "level1poison", title: "Poison: Food Vendor"}).bindLabel("Water Bottle (Food Vendor)").bindPopup( popPoison("Water Bottle", "Food Vendor", "Waiter / Food Vendor", "note") ),
    L.marker([69.47, -14.85], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Unknown", "Waiter / Food Vendor", "note") ),
    L.marker([82.41, -31.55], {icon: iconPoison, alt: "level1poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Unknown", "Waiter", "note") ),
    // Poison
    L.marker([82.58, -25.22], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([81.87, -22.32], {icon: iconPoison, alt: "level1poison", title: "Poison: Kong Tuo-Kwang"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Kong Tuo-Kwang", "Waiter", "note") ),
    L.marker([81.16, -27.29], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([80.48, -31.50], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([80.48, -27.42], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([79.68, -33.44], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([79.00, -31.90], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([79.05, -23.20], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([79.05, -27.68], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),
    L.marker([79.65, -23.24], {icon: iconPoison, alt: "level1poison"}).bindLabel("Shisha Pipe").bindPopup( popPoison("Shisha Pipe", "Unknown", "Waiter", "note") ),

    // Distraction    
    L.marker([81.41, -36.82], {icon: iconDistraction, alt: "level1dis-oillamp", title: "Distraction: Oil Lamp"}).bindLabel("Oil Lamp").bindPopup( popGlobal(disOilLamp, "susp") ),
    L.marker([81.50, -23.42], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter") ),
    L.marker([82.62, -31.59], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter") ),
    L.marker([81.01, -36.21], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([81.00, -34.27], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([80.75, -21.97], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Handyman / Food Vendor") ),
    L.marker([82.10, -55.23], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "all") ),
    L.marker([82.62, -37.52], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([80.94, -13.62], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([75.60, 21.181], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([74.14, -3.867], {icon: iconDistraction, alt: "level1dis-forklift", title: "Distraction: Forklift"}).bindLabel("Forklift").bindPopup( popGlobal(disForklift, "all") ),
    L.marker([76.92, -0.615], {icon: iconDistraction, alt: "level1dis-streetlights", title: "Distraction: Street Lights"}).bindLabel("Street Lights").bindPopup( popUp("img", "Distraction", "Street Lights", "Turn On/Off", "req", "Handyman", "note", "ingame", "desc") ),
    L.marker([77.10, -13.71], {icon: iconDistraction, alt: "level1dis-standfan", title: "Distraction: Snail Stand Fan"}).bindLabel("Snail Stand Fan").bindPopup( popUp("img", "Distraction", "Snail Stand Fan", "Turn On/Off", "req", "Handyman", "note", "ingame", "desc") ),
    L.marker([82.70, -2.065], {icon: iconDistraction, alt: "level1dis-streetlights", title: "Distraction: Street Lights"}).bindLabel("Street Lights").bindPopup( popUp("img", "Distraction", "Street Lights", "Turn On/Off", "req", "Handyman", "note", "ingame", "desc") ),
    L.marker([81.65, -23.42], {icon: iconDistraction, alt: "level1dis-electricallights", title: "Distraction: Electrical Lights"}).bindLabel("Electrical Lights").bindPopup( popUp("img", "Distraction", "Electrical Lights", "Turn On/Off", "req", "Waiter", "note", "ingame", "desc") ),
    L.marker([83.27, -43.41], {icon: iconDistraction, alt: "level1dis-lights", title: "Distraction: Lights"}).bindLabel("Lights").bindPopup( popUp("img", "Distraction", "Lights", "Turn On/Off", "req", "Handyman", "note", "ingame", "desc") ),
  
    // Alarm
    L.marker([80.82, -36.16], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([81.15, -33.39], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([81.22, -25.79], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Item
    L.marker([82.18, -38.01], {icon: iconItem, alt: "level1item", title: "Item: VIP Invitation"}).bindLabel("VIP Invitation").bindPopup( popUp("vip", "Item", "VIP Invitation", "use", "req", "susp", "note", "An invitation to Kong's reception in the Courtyard Club of the shisha cafe.", "desc") ),
    L.marker([80.45, -29.66], {icon: iconItem, alt: "level1item", title: "Item: VIP Invitation"}).bindLabel("VIP Invitation").bindPopup( popUp("vip", "Item", "VIP Invitation", "use", "req", "susp", "Carried by a Landlord nearby, he can also be found in the backyard of the Antiques Shop", "An invitation to Kong's reception in the Courtyard Club of the shisha cafe.", "desc") ),
    L.marker([80.76, -37.30], {icon: iconItem, alt: "level1item", title: "Item: VIP Invitation"}).bindLabel("VIP Invitation").bindPopup( popUp("vip", "Item", "VIP Invitation", "use", "req", "susp", "note", "An invitation to Kong's reception in the Courtyard Club of the shisha cafe.", "desc") ),
    L.marker([80.17, -21.92], {icon: iconItem, alt: "level1item", title: "Item: Truck Keys"}).bindLabel("Truck Keys").bindPopup( popUp("img", "Item", "Truck Keys", "use", "req", "susp", "note", "Keys to a truck.", "desc") ),
    L.marker([75.06, 6.3720], {icon: iconItem, alt: "level1item", title: "Item: Antiques Shop Key"}).bindLabel("Antiques Shop Key").bindPopup( popUp("img", "Item", "Antiques Shop Key", "use", "req", "susp", "note", "A key to the Antiques Shop in the courtyard.", "desc") ),
    L.marker([83.18, -19.29], {icon: iconItem, alt: "level1item", title: "Item: Maintenance Room Key"}).bindLabel("Maintenance Room Key").bindPopup( popUp("img", "Item", "Maintenance Room Key", "use", "req", "susp", "note", "A technician's key for a maintenance room.", "desc") ),
    L.marker([80.71, -55.28], {icon: iconItem, alt: "level1item", title: "Item: Shop Key"}).bindLabel("Shop Key").bindPopup( popUp("img", "Item", "Shop Key", "use", "req", "susp", "Carried by a Food Vendor nearby", "A key to a shop.", "desc") ),
    L.marker([75.62, -49.43], {icon: iconItem, alt: "level1item", title: "Item: Carpet Shop Key"}).bindLabel("Carpet Shop Key").bindPopup( popUp("img", "Item", "Carpet Shop Key", "use", "req", "susp", "Carried by a shop owners nearby", "A key to a shop.", "desc") ),
    L.marker([82.65, -29.70], {icon: iconItem, alt: "level1item", title: "Item: Shisha Cafe Key"}).bindLabel("Shisha Cafe Key").bindPopup( popUp("img", "Item", "Shisha Cafe Key", "use", "req", "susp", "Also carried by cafe staff", "A key to the shisha cafe.", "desc") ),

    // Interaction
    L.marker([82.43, -27.86], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Reflection Pool"}).bindLabel("Reflection Pool").bindPopup( popUp("pool", "Interaction", "Reflection Pool", "Increase Water Flow", "req", "Waiter", "note", "ingame", "desc") ),
    L.marker([83.46, -39.28], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Fog Machine"}).bindLabel("Fog Machine").bindPopup( popUp("fog", "Interaction", "Fog Machine", "Increase / Decrease Power", "req", "Fortune Teller", "note", "ingame", "desc") ),
    L.marker([83.62, -40.56], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Sit Down as a Fortune Teller"}).bindLabel("Sit Down as a Fortune Teller").bindPopup( popUp("img", "Interaction", "Sit Down as a Fortune Teller", "use", "Fortune Teller disguise", "susp", "note", "ingame", "desc") ),
    L.marker([81.30, -36.07], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Peephole"}).bindLabel("Peephole").bindPopup( popUp("peep", "Interaction", "Peephole", "Peep", "req", "susp", "note", "ingame", "desc") ),

    // Intel
    L.marker([81.86, -17.92], {icon: iconIntel, alt: "level1intel", title: "Intel: Do You Believe In Fate?"}).bindLabel("Do You Believe In Fate?").bindPopup( popUp("fate", "Intel", "Do You Believe In Fate?", "Listen to the conversation", "req", "susp", "note", "Apparently, Mendola is a man of superstition and plans his life around the words of so-called fortune tellers. Could be interesting to see what his future holds, if you get my drift.", "desc") ),
    L.marker([80.32, -36.95], {icon: iconIntel, alt: "level1intel", title: "Intel: Something Is Not Right"}).bindLabel("Something Is Not Right").bindPopup( popUp("notright", "Intel", "Something Is Not Right", "Listen to the conversation", "req", "susp", "note", "It appears that Kong's man has not turned up, and Mendola is all on his own. This could be used to your advantage.", "desc") ),
    L.marker([72.95, -41.17], {icon: iconIntel, alt: "level1intel", title: "Intel: The Meeting"}).bindLabel("The Meeting").bindPopup( popUp("meeting", "Intel", "The Meeting", "Listen to the conversation", "req", "susp", "note", "It appears Mendola will be met by one of Kong's guards outside the shisha cafe. Follow him and keep your cool.", "desc") ),
    L.marker([79.91, -29.92], {icon: iconIntel, alt: "level1intel", title: "Intel: The Distraught Landlord"}).bindLabel("The Distraught Landlord").bindPopup( popUp("landlord", "Intel", "The Distraught Landlord", "Listen to the conversation", "req", "susp", "note", "This landlord is apparently quite upset about a certain shop owner. This could be a chance to be invited to Kong's exclusive party at the shisha cafe. I'm sure you can blend in.", "desc") ),
    L.marker([80.64, -29.66], {icon: iconIntel, alt: "level1intel", title: "Intel: Mr Kong Private Party"}).bindLabel("Mr. Kong's Private Party").bindPopup( popUp("party", "Intel", "Mr. Kong's Private Party", "Listen to the conversation", "req", "susp", "note", "It appears you need an invite to enter Mr. Kong's party. But once you have one, you can come and go as much as you want.", "desc") ),
    L.marker([75.73, -50.53], {icon: iconIntel, alt: "level1intel", title: "Intel: VIP Shopping"}).bindLabel("VIP Shopping").bindPopup( popUp("vipshopping", "Intel", "VIP Shopping", "Listen to the conversation", "req", "susp", "note", "According to the carpet shop's owner, the shop is closed for a private shopping.", "desc") ),
    L.marker([82.22, -57.26], {icon: iconIntel, alt: "level1intel", title: "Intel: Bad Snail"}).bindLabel("Bad Snail").bindPopup( popUp("badsnail", "Intel", "Bad Snail", "Listen to the conversation", "req", "susp", "note", "According to the guard, Mr. Mendola's escort has had a bout of food poisoning from some bad snails. This must mean that Mendola is lost. Maybe you can give him a hand and show him the way.", "desc") ),
    L.marker([81.63, -50.80], {icon: iconIntel, alt: "level1intel", title: "Intel: Angry Men"}).bindLabel("Angry Men").bindPopup( popUp("angrymen", "Intel", "Angry Men", "Listen to the conversation", "req", "susp", "note", "It appears that the shopkeeper has been forced to lease out his shop for the night. This sounds very suspicious.", "desc") ),
    L.marker([82.44, -3.076], {icon: iconIntel, alt: "level1intel", title: "Intel: The Superstitious Frenchman"}).bindLabel("The Superstitious Frenchman").bindPopup( popUp("frenchman", "Intel", "The Superstitious Frenchman", "Listen to the conversation", "req", "susp", "note", "We know that Mendola suffers from compulsive thoughts and is highly superstitious. Could it be the same man they are talking about?", "desc") ),
    L.marker([79.41, -5.097], {icon: iconIntel, alt: "level1intel", title: "Intel: A Good Smoke"}).bindLabel("A Good Smoke").bindPopup( popUp("smoke", "Intel", "A Good Smoke", "Listen to the conversation", "req", "susp", "note", "According to the tobacco shop's owner, his assistant is serving a very important guest. Kong is known for his fondness for a shisha pipe. So maybe it's time to put two and two together.", "desc") ),
    L.marker([81.20, -13.35], {icon: iconIntel, alt: "level1intel", title: "Intel: Gone Shopping"}).bindLabel("Gone Shopping").bindPopup( popUp("shopping", "Intel", "Gone Shopping", "Listen to the conversation", "req", "susp", "note", "According to the guards, one of their main men has gone shopping at a carpet shop. Maybe a preoccupied guard could be the ticket to get closer to Mr. Kong", "desc") ),
    L.marker([81.40, -20.08], {icon: iconIntel, alt: "level1intel", title: "Intel: Note From Kong Bodyguard"}).bindLabel("Note From Kong's Bodyguard").bindPopup( popUp("note", "Intel", "Note From Kong's Bodyguard", "Examine", "req", "susp", "note", "One of Kong's bodyguards has taken off to the carpet shop across the marketplace and brought along the key to the shisha cafe's back door.", "desc") ),

    // Security
    L.marker([81.87, -35.55], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Cafe Security</h1><p class='note'>Will get frisked if disguised as waiter</p>"),
    L.marker([80.90, -29.66], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Cafe Security</h1><p class='req'>Requires VIP Invitation if disguised as Guest</p>"),

    // Locked Door
    L.marker([75.41, -53.30], {icon: iconLocked, alt: "level1locked", title: "Locked: Carpet Shop Key"}).bindLabel("Locked Door (Carpet Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Carpet Shop Key</p>"),
    L.marker([75.11, 7.7343], {icon: iconLocked, alt: "level1locked", title: "Locked: Antiques Shop Key"}).bindLabel("Locked Door (Antiques Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Antiques Shop Key</p>"),
    L.marker([80.89, -10.41], {icon: iconLocked, alt: "level1locked", title: "Locked: Maintenance Room Key"}).bindLabel("Locked Door (Maintenance Room Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Maintenance Room Key</p>"),
    L.marker([81.34, -24.91], {icon: iconLocked, alt: "level1locked", title: "Locked: Shisha Cafe Key"}).bindLabel("Locked Door (Shisha Cafe Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shisha Cafe Key</p>"),
    L.marker([81.24, -20.65], {icon: iconLocked, alt: "level1locked", title: "Locked: Shisha Cafe Key"}).bindLabel("Locked Door (Shisha Cafe Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shisha Cafe Key</p>"),
    L.marker([80.71, -53.56], {icon: iconLocked, alt: "level1locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),


]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([77.43, -59.37], {icon: iconIcaStash, alt: "level2icastash", title: "Large Agency Pickup: Rooftops"}).bindLabel("Large Agency Pickup: Rooftops").bindPopup("<img src='img/map_bonusmarrakesh/screenshots/ica_rooftops.jpg'><h2>Large Agency Pickup</h2><h1>Rooftops</h1>"),

    // Way Up/Down
    L.marker([81.00, -42.18], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([81.18, -38.36], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-2</h1>"),
    L.marker([78.28, -58.97], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([77.33, -56.42], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Hang").bindPopup("<h2>Way Up</h2><h1>Hang</h1>"),

    // Passage
    L.marker([81.03, -39.11], {icon: iconPassage, alt: "level2passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),

    // Stairs
    L.marker([79.57, 5.8886], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([80.39, -52.51], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([81.02, -43.24], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([75.93, -54.66], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([74.89, -55.19], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([81.02, -51.67], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([80.38, -43.98], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([79.03, 8.4375], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    
]);

var level2weapons = L.layerGroup([

    L.marker([77.67, -61.43], {icon: iconPipe, alt: "level2pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
]);

var level2poi = L.layerGroup([

    L.marker([81.90, -29.75], {icon: iconSabotage, alt: "level2sab-cafelights", title: "Sabotage: Cafe Lights"}).bindLabel("Cafe Lights").bindPopup( popUp("img", "Sabotage", "Cafe Lights", "use", "req", "susp", "Will electrocute the pool", "ingame", "desc") ),
        new L.Polyline([[81.90, -29.75], [80.91, -38.32]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level2sab-cafelights"}),
        L.marker([80.91, -38.32], {icon: iconPointRed, alt: "level2sab-cafelights"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

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

    L.marker([75.34, -54.22], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([80.48, -49.74], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    L.marker([79.73, -51.76], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),
    L.marker([81.02, -51.59], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),

    L.marker([77.10, -55.54], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([80.95, -47.68], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([75.00, -58.13], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([80.51, -42.97], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([77.76, 6.6357], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([81.05, -50.58], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([80.37, -46.27], {icon: iconWrench, alt: "level3wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([78.71, 11.953], {icon: iconBattleAxe, alt: "level3battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),

]);

var level3poi = L.layerGroup([

    // Hiding Spot
    L.marker([73.60, -57.87], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.67, -56.38], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.23, -50.22], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.49, -47.41], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([79.08, 4.8339], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([80.57, -51.24], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    
    // Weapon Case
    L.marker([80.85, -44.16], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),

    // Blend In
    L.marker([79.89, -45.04], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),

    L.marker([79.44, -49.61], {icon: iconSabotage, alt: "level3sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([79.48, -52.07], {icon: iconPoison, alt: "level3poison", title: "Poison: Matthieu Mendola"}).bindLabel("Shisha Pipe (Matthieu Mendola)").bindPopup( popPoison("Shisha Pipe", "Matthieu Mendola", "Waiter / Food Vendor", "First, escort Mendola to the meeting spot disguised as a bodyguard, Kong will come soon after") ),
    L.marker([79.48, -51.07], {icon: iconPoison, alt: "level3poison", title: "Poison: Kong Tuo-Kwang"}).bindLabel("Shisha Pipe (Kong Tuo-Kwang)").bindPopup( popPoison("Shisha Pipe", "Kong Tuo-Kwang", "Waiter / Food Vendor", "First, escort Mendola to the meeting spot disguised as a bodyguard, Kong will come soon after") ),

    L.marker([80.15, -46.80], {icon: iconDistraction, alt: "level3dis-sound", title: "Distraction: Sound System"}).bindLabel("Sound System").bindPopup( popGlobal(disSound, "susp") ),
    L.marker([73.52, -55.15], {icon: iconDistraction, alt: "level3dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),

    L.marker([80.21, -51.81], {icon: iconItem, alt: "level3item", title: "Item: Walkie-Talkie"}).bindLabel("Walkie-Talkie").bindPopup( popUp("walkie", "Item", "Walkie-Talkie", "use", "req", "susp", "Carried by a bodyguard", "A walkie-talkie belonging to Kong's bodyguard.", "desc") ),
    L.marker([74.03, -54.97], {icon: iconItem, alt: "level3item", title: "Item: Shisha Cafe Key"}).bindLabel("Shisha Cafe Key").bindPopup( popUp("img", "Item", "Shisha Cafe Key", "use", "req", "susp", "Carried by a bodyguard", "A key to the shisha cafe.", "desc") ),
 
    L.marker([79.71, -50.18], {icon: iconLocation, alt: "level3location", title: "Location: Kong and Mendola Meeting Spot"}).bindLabel("Kong and Mendola Meeting Spot").bindPopup( popUp("img", "Location", "Kong and Mendola Meeting Spot", "use", "req", "susp", "First, escort Mendola to the meeting spot disguised as a bodyguard, Kong will come soon after", "ingame", "desc") ),

]);
    
/* ==================================================================================================================================================================
   All Markers
   ================================================================================================================================================================== */

var allMarkers = L.layerGroup([
    level1markers = L.layerGroup([level1other, level1weapons, level1poi]),
    level2markers = L.layerGroup([level2other, level2weapons, level2poi]),
    level3markers = L.layerGroup([level3other, level3weapons, level3poi])
]);