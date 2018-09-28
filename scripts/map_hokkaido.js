var maphokkaido = L.map('maphokkaido', {maxBoundsViscosity: 1}).setView([56.51, -78.22], 4);
maphokkaido.zoomControl.setPosition('topright');
maphokkaido.setMaxBounds([[-19.9, -178.0],[84.03, 20.566]]);
$("#level-0").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_hokkaido/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(maphokkaido),
    mapLevel1base = L.tileLayer('img/map_hokkaido/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2base = L.tileLayer('img/map_hokkaido/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_hokkaido/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0ninja = mapLevel0motorcyclist = mapLevel0baseball = L.tileLayer('img/map_hokkaido/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1ninja = mapLevel1motorcyclist = mapLevel1baseball = L.tileLayer('img/map_hokkaido/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2ninja = mapLevel2motorcyclist = mapLevel2baseball = L.tileLayer('img/map_hokkaido/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3ninja = mapLevel3motorcyclist = mapLevel3baseball = L.tileLayer('img/map_hokkaido/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = L.tileLayer('img/map_hokkaido/lvl_0/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel0patient = L.tileLayer('img/map_hokkaido/lvl_0/patient/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel0dexter = L.tileLayer('img/map_hokkaido/lvl_0/dexter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = mapLevel1patient = mapLevel1dexter = L.tileLayer('img/map_hokkaido/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2patient = mapLevel2dexter = L.tileLayer('img/map_hokkaido/lvl_2/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3patient = mapLevel3dexter = L.tileLayer('img/map_hokkaido/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0portman = L.tileLayer('img/map_hokkaido/lvl_0/portman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1portman = L.tileLayer('img/map_hokkaido/lvl_1/portman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2portman = L.tileLayer('img/map_hokkaido/lvl_2/portman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3portman = L.tileLayer('img/map_hokkaido/lvl_3/portman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0staff = mapLevel0yoga = L.tileLayer('img/map_hokkaido/lvl_0/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1staff = mapLevel1yoga = L.tileLayer('img/map_hokkaido/lvl_1/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2staff = mapLevel2chef = mapLevel2handyman = mapLevel2security = mapLevel2yoga = L.tileLayer('img/map_hokkaido/lvl_2/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3staff = mapLevel3chef = mapLevel3handyman = mapLevel3security = mapLevel3yoga = L.tileLayer('img/map_hokkaido/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0chef = mapLevel0handyman = mapLevel0security = L.tileLayer('img/map_hokkaido/lvl_0/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1chef = L.tileLayer('img/map_hokkaido/lvl_1/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0bodyguard = mapLevel0director = L.tileLayer('img/map_hokkaido/lvl_0/director/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1bodyguard = mapLevel1director = L.tileLayer('img/map_hokkaido/lvl_1/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2bodyguard = mapLevel2doctor = mapLevel2morgue = mapLevel2director = mapLevel2pilot = L.tileLayer('img/map_hokkaido/lvl_2/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3bodyguard = mapLevel3doctor = mapLevel3morgue = mapLevel3pilot = L.tileLayer('img/map_hokkaido/lvl_3/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0doctor = L.tileLayer('img/map_hokkaido/lvl_0/doctor/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1doctor = mapLevel1morgue = mapLevel1pilot = L.tileLayer('img/map_hokkaido/lvl_1/doctor/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
 
    mapLevel0morgue = mapLevel0surgeon = mapLevel0csurgeon = mapLevel0pilot = L.tileLayer('img/map_hokkaido/lvl_0/morgue/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1handyman = L.tileLayer('img/map_hokkaido/lvl_1/handyman/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1security = L.tileLayer('img/map_hokkaido/lvl_1/security/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel1surgeon = mapLevel1csurgeon = L.tileLayer('img/map_hokkaido/lvl_1/surgeon/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel2surgeon = L.tileLayer('img/map_hokkaido/lvl_2/surgeon/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel2csurgeon = L.tileLayer('img/map_hokkaido/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel3surgeon = mapLevel3csurgeon = L.tileLayer('img/map_hokkaido/lvl_3/surgeon/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel3director = L.tileLayer('img/map_hokkaido/lvl_3/director/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */

var level0other = L.layerGroup([
    
    // Enter/Exit
    L.marker([45.36, -95.88], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Patient Room"}).bindLabel("Patient Room").bindPopup("<img src='img/map_hokkaido/screenshots/enter_patient.jpg'><h2>Starting Locaton</h2><h1>Patient Room</h1>"),
    L.marker([63.89, -83.23], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Undercover in the Staff Quarters"}).bindLabel("Undercover in the Staff Quarters").bindPopup("<img src='img/map_hokkaido/screenshots/enter_staff.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Staff Quarters</h1>"),
    L.marker([62.16, -95.84], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Undercover in the Kitchen"}).bindLabel("Undercover in the Kitchen").bindPopup("<img src='img/map_hokkaido/screenshots/enter_kitchen.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Kitchen</h1>"),
    L.marker([32.06, -78.39], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Cable Car"}).bindLabel("Cable Car").bindPopup("<img src='img/map_hokkaido/screenshots/exit_cable.jpg'><h2>Exit Locaton</h2><h1>Cable Car</h1>"),
    L.marker([68.05, -48.55], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Snowmobile"}).bindLabel("Snowmobile").bindPopup("<img src='img/map_hokkaido/screenshots/exit_snowmobile.jpg'><h2>Exit Locaton</h2><h1>Snowmobile</h1>"),

    // ICA Stash
    L.marker([65.58, -67.23], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Garage"}).bindLabel("Large Agency Pickup: Garage").bindPopup("<img src='img/map_hokkaido/screenshots/ica_garage.jpg'><h2>Large Agency Pickup</h2><h1>Garage</h1>"),
    L.marker([63.03, -102.7], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Kitchen Food Storage"}).bindLabel("Large Agency Pickup: Kitchen Food Storage").bindPopup("<img src='img/map_hokkaido/screenshots/ica_kitchen.jpg'><h2>Large Agency Pickup</h2><h1>Kitchen Food Storage</h1>"),
    L.marker([66.56, -80.90], {icon: iconIcaStash, alt: "level0icastash", title: "Small Agency Pickup: Staff Wardrobe"}).bindLabel("Small Agency Pickup: Staff Wardrobe").bindPopup("<img src='img/map_hokkaido/screenshots/ica_staff.jpg'><h2>Small Agency Pickup</h2><h1>Staff Wardrobe</h1>"),
    L.marker([66.21, -102.4], {icon: iconIcaStash, alt: "level0icastash", title: "Small Agency Pickup: Restaurant Restroom"}).bindLabel("Small Agency Pickup: Restaurant Restroom").bindPopup("<img src='img/map_hokkaido/screenshots/ica_restaurant.jpg'><h2>Small Agency Pickup</h2><h1>Restaurant Restroom</h1>"),

    // Stairs
    L.marker([56.60, -78.26], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([58.60, -89.16], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([58.60, -67.54], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([60.75, -95.14], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([64.43, -99.27], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([63.31, -63.63], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([64.68, -48.91], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([70.88, -69.78], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([70.02, -93.03], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([71.25, -87.09], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([75.80, -98.74], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    
    // Ways Up/Down
    L.marker([68.94, -59.10], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-1</h1>"),
    L.marker([69.00, -97.64], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([69.56, -96.15], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-1</h1>"),

    // Passage
    L.marker([43.32, -100.6], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([47.54, -110.3], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([43.22, -56.46], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([47.69, -46.53], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([69.09, -96.50], {icon: iconPassage, alt: "level0passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Ledge
    new L.Polyline([[42.74, -96.37], [41.37, -98.21], [44.99, -103.1], [47.18, -100.0], [49.21, -103.0], [45.73, -108.0], [49.03, -112.7], [50.31, -110.9]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level0ledge"}).bindLabel("Ledge"),
    new L.Polyline([[42.87, -60.51], [41.47, -58.57], [44.96, -53.83], [46.34, -55.81], [48.48, -52.69], [45.85, -48.82], [49.12, -44.03], [50.37, -45.92]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level0ledge"}).bindLabel("Ledge"),
    new L.Polyline([[68.91, -97.51], [69.47, -95.93]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level0ledge"}).bindLabel("Ledge"),

]);

var level0weapons = L.layerGroup([

    L.marker([50.84, -90.74], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([49.80, -50.22], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([51.28, -91.62], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([65.53, -60.24], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([63.58, -97.11], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([50.98, -65.56], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Botulinum Toxin"}).bindLabel("Botulinum Toxin").bindPopup(txtLethalPoison + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([62.55, -103.5], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Fugu Fish Poison"}).bindLabel("Fugu Fish Poison").bindPopup( popUp("img", "Poison", "Fugu Fish Poison", "use", "any Knife", "susp", "Cut Fugu Fish using Kitchen Knife to get the poison", "This is poison from the fugu fish, also known as pufferfish. Fugu can be lethally poisonous to eat unless prepared by a master sushi chef. It is considered a rare delicacy in Japan.", "desc") ),

    // Explosive
    L.marker([72.20, -63.76], {icon: iconPropane, alt: "level0propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),

    // Firearm
    L.marker([51.61, -52.11], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: SMG HX-7"}).bindLabel("SMG: HX-7").bindPopup(txtHX7),

    // Non-Lethal Melee
    L.marker([51.64, -104.1], {icon: iconCowboyBust, alt: "level0cowbust", title: "Weapon: Cowboy Bust"}).bindLabel("Cowboy Bust").bindPopup(txtCowboyBust),
    L.marker([54.95, -101.7], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([52.13, -52.95], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([66.07, -89.29], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([49.52, -61.56], {icon: iconBust, alt: "level0bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([38.54, -81.21], {icon: iconPipe, alt: "level0pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([63.91, -66.13], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([69.13, -84.59], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([67.01, -62.13], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([71.84, -54.44], {icon: iconShovel, alt: "level0shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([75.50, -96.89], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

    // Lethal Melee
    L.marker([50.62, -93.20], {icon: iconScissors, alt: "level0scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([52.58, -50.44], {icon: iconKatana, alt: "level0katana", title: "Weapon: Katana"}).bindLabel("Katana").bindPopup(txtKatana),
    L.marker([69.41, -63.76], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([71.84, -64.51], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([60.99, -97.55], {icon: iconKnife, alt: "level0knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),

]);

var level0poi = L.layerGroup([

    // Hiding Spot
    L.marker([49.80, -94.79], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([53.59, -104.4], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.78, -61.96], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([53.56, -52.16], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([58.00, -68.99], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.27, -69.56], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.37, -60.16], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([64.16, -69.30], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([68.91, -65.17], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([58.24, -87.49], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.31, -87.23], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([61.98, -92.24], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.43, -99.22], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([62.99, -101.4], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([67.87, -95.18], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([66.80, -102.0], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([67.72, -99.66], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([63.43, -82.35], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([67.50, -87.09], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.85, -88.81], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.39, -95.31], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([50.95, -89.64], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([49.23, -81.91], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([49.23, -74.44], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([65.60, -102.4], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),
    L.marker([67.03, -98.92], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item"),

    // Weapon Crate
    L.marker([70.75, -86.66], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

    // Disguise
    L.marker([49.92, -92.28], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: VIP Patient"}).bindLabel("VIP Patient").bindPopup("<img src='img/map_hokkaido/screenshots/disg_vippatient.jpg'><h2>Disguise</h2><h1>VIP Patient</h1>"),
    L.marker([67.15, -86.39], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Resort Staff"}).bindLabel("Resort Staff").bindPopup("<img src='img/map_hokkaido/screenshots/disg_resort.jpg'><h2>Disguise</h2><h1>Resort Staff</h1>"),

    // NPC
    L.marker([49.52, -107.4], {icon: iconNPC, alt: "level0npc", title: "NPC: Amos Dexter"}).bindLabel("Amos Dexter").bindPopup( popUp("img", "NPC", "Amos Dexter", "use", "req", "susp", "note", "ingame", "desc") ),

    // Blend In
    L.marker([44.55, -101.8], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([30.56, -76.37], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([61.48, -61.78], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Resort Staff member").bindPopup("<h2>Blend In</h2><h1>Resort Staff</h1>"),
    L.marker([62.16, -64.86], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Resort Staff member").bindPopup("<h2>Blend In</h2><h1>Resort Staff</h1>"),
    L.marker([64.33, -65.21], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Handyman").bindPopup("<h2>Blend In</h2><h1>Handyman</h1>"),
    L.marker([72.19, -62.09], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Handyman").bindPopup("<h2>Blend In</h2><h1>Handyman</h1>"),
    L.marker([61.29, -96.89], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Chef").bindPopup("<h2>Blend In</h2><h1>Chef</h1>"),
    L.marker([61.54, -101.3], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Chef").bindPopup("<h2>Blend In</h2><h1>Chef</h1>"),
    L.marker([64.20, -94.92], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Staff Member").bindPopup("<h2>Blend In</h2><h1>Staff Member</h1>"),
    L.marker([65.18, -95.66], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Staff Member").bindPopup("<h2>Blend In</h2><h1>Staff Member</h1>"),

    // Sabotage
    L.marker([74.34, -97.20], {icon: iconSabotage, alt: "level0sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([61.98, -97.38], {icon: iconSabotage, alt: "level0sab-stove", title: "Sabotage: Stove"}).bindLabel("Stove").bindPopup( popGlobal(sabStove, "Chef") ),
    L.marker([49.83, -46.18], {icon: iconSabotage, alt: "level0sab-heater", title: "Sabotage: Gas Heater Lamp"}).bindLabel("Gas Heater Lamp").bindPopup( popGlobal(sabGasLamp, "all") ),
    L.marker([33.90, -78.39], {icon: iconSabotage, alt: "level0sab-cablecar", title: "Sabotage: Cable Car"}).bindLabel("Cable Car").bindPopup( popUp("img", "Sabotage", "Cable Car", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([63.95, -88.19], {icon: iconSabotage, alt: "level0sab-dancemat", title: "Sabotage: Dance Mat Power Supply"}).bindLabel("Dance Mat Power Supply").bindPopup( popUp("img", "Sabotage", "Dance Mat Power Supply", "Expose Wire", "Screwdriver", "Handyman", "note", "ingame", "desc") ),
    L.marker([64.60, -66.70], {icon: iconSabotage, alt: "level0sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.43, -49.52], {icon: iconSabotage, alt: "level0sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.79, -50.05], {icon: iconSabotage, alt: "level0sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([69.36, -57.26], {icon: iconSabotage, alt: "level0sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.07, -55.81], {icon: iconSabotage, alt: "level0sab-icicle", title: "Sabotage: Icicle"}).bindLabel("Icicle").bindPopup( popUp("img", "Sabotage", "Icicle", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([58.51, -76.99], {icon: iconSabotage, alt: "level0sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "Handyman") ),
        new L.Polyline([[58.51, -76.99], [59.15, -76.50]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level0sab-wire"}),
        L.marker([59.15, -76.50], {icon: iconPointRed, alt: "level0sab-wire"}).bindLabel("Power Outlet").bindPopup( popGlobal(sabOutlet, "Handyman") ),

    // Distraction
    L.marker([46.49, -92.19], {icon: iconDistraction, alt: "level0dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([50.51, -101.9], {icon: iconDistraction, alt: "level0dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([46.43, -64.46], {icon: iconDistraction, alt: "level0dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([50.51, -54.71], {icon: iconDistraction, alt: "level0dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([69.42, -95.14], {icon: iconDistraction, alt: "level0dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([49.15, -92.15], {icon: iconDistraction, alt: "level0dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([52.98, -101.9], {icon: iconDistraction, alt: "level0dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([49.12, -64.59], {icon: iconDistraction, alt: "level0dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([52.90, -54.79], {icon: iconDistraction, alt: "level0dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([67.18, -98.70], {icon: iconDistraction, alt: "level0dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([50.20, -93.91], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([53.93, -103.5], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([50.20, -62.97], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([53.98, -53.21], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([62.71, -61.08], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([60.19, -96.19], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([65.21, -99.84], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([66.30, -101.1], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([66.84, -100.8], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([66.86, -80.37], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([70.88, -60.99], {icon: iconDistraction, alt: "level0dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([66.68, -85.29], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),

    // Alarm
    L.marker([67.70, -98.39], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Poison
    L.marker([74.98, -95.62], {icon: iconPoison, alt: "level0poison", title: "Poison: Chief Surgeon"}).bindLabel("Pill Stash (Chief Surgeon)").bindPopup( popPoison("Pill Stash", "Chief Surgeon", "all", "note") ),
    L.marker([61.48, -96.37], {icon: iconPoison, alt: "level0poison", title: "Poison: Chef"}).bindLabel("Cooking Pot").bindPopup( popPoison("Cooking Pot", "Chef", "Chef", "note") ),
    L.marker([63.54, -94.17], {icon: iconPoison, alt: "level0poison", title: "Poison: Doctor"}).bindLabel("Plate of Food (x3)").bindPopup( popPoison("Plate of Food", "Doctor / Resort Security / Resort Staff", "Chef", "note") ),
    L.marker([63.54, -94.17], {icon: iconPoison, alt: "level0poison", title: "Poison: Resort Security"}).bindLabel("Plate of Food (x3)").bindPopup( popPoison("Plate of Food", "Doctor / Resort Security / Resort Staff", "Chef", "note") ),
    L.marker([63.54, -94.17], {icon: iconPoison, alt: "level0poison", title: "Poison: Resort Staff"}).bindLabel("Plate of Food (x3)").bindPopup( popPoison("Plate of Food", "Doctor / Resort Security / Resort Staff", "Chef", "note") ),
    L.marker([50.98, -48.03], {icon: iconPoison, alt: "level0poison", title: "Poison: Yuki Yamazaki"}).bindLabel("Water Bottle (Yuki Yamazaki)").bindPopup( popPoison("Water Bottle", "Yuki Yamazaki", "all", "note") ),
    L.marker([66.30, -65.21], {icon: iconPoison, alt: "level0poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Female Doctor", "Chef", "note") ),

    // Item
    L.marker([53.19, -105.0], {icon: iconItem, alt: "level0item", title: "Item: Pack of Cigarettes"}).bindLabel("Pack of Cigarettes").bindPopup( popUp("cigarettes", "Item", "Pack of Cigarettes", "use", "req", "susp", "note", "This is a pack of cigarettes. Gama has a strict no-smoking policy in all areas of the hospital so these are definitely contraband and must have been smuggled in somehow.", "desc") ),
    L.marker([50.48, -47.06], {icon: iconItem, alt: "level0item", title: "Item: Erich Soders Kill List"}).bindLabel("Erich Soders' Kill List").bindPopup( popUp("list", "Item", "Erich Soders' Kill List", "use", "req", "susp", "note", "Yuki Yamazaki's flash drive includes a list of Erich Soders' accomplishments as an ICA agent during the 1970s. Among his targets is a certain doctor Roman Laurent, father of chief surgeon Nicholas Laurent. By a strange twist of fate, Laurent is unknowingly trying to save the life of his father's killer. If only he knew.", "desc") ),
    L.marker([68.80, -91.88], {icon: iconItem, alt: "level0item", title: "Item: Neurochip Remote Control"}).bindLabel("Neurochip Remote Control").bindPopup( popUp("neurochip", "Item", "Neurochip Remote Control", "use", "req", "susp", "note", "This is a remote control used to increase or decrease the chemical dosage released from the neurochip residing in the Curator's brain.", "desc") ),

    // Intel
    L.marker([65.05, -90.83], {icon: iconIntel, alt: "level0intel", title: "Intel: Yamazaki Wants Fugu"}).bindLabel("Yamazaki Wants Fugu").bindPopup( popUp("fugu", "Intel", "Yamazaki Wants Fugu", "Listen to the conversation", "req", "susp", "note", "Not content with the trills of being a Providence operative and former Yakuza lawyer, Yuki Yamazaki seeks to tingle her tastebuds with the meat of the poisonous fugu fish. Sadly, the chef has been ordered not to server fugu after an unfortunate incidental poisoning of a hospital patient. Now, they are throwing out the last fugu.", "desc") ),
    L.marker([58.88, -78.26], {icon: iconIntel, alt: "level0intel", title: "Intel: Yoga Instructor Down"}).bindLabel("Yoga Instructor Down").bindPopup( popUp("instructor", "Intel", "Yoga Instructor Down", "Listen to the conversation", "req", "susp", "note", "The resident yoga instructor apparently injured himself while performing a particulary daring pose. He's now limping around somewhere in the hospital, unable to instruct anyone.", "desc") ),
    L.marker([67.10, -60.42], {icon: iconIntel, alt: "level0intel", title: "Intel: Yoga Instructor Down"}).bindLabel("Yoga Instructor Down").bindPopup( popUp("instructor", "Intel", "Yoga Instructor Down", "Listen to the conversation", "req", "susp", "note", "The resident yoga instructor apparently injured himself while performing a particulary daring pose. He's now limping around somewhere in the hospital, unable to instruct anyone.", "desc") ),
    L.marker([45.46, -97.60], {icon: iconIntel, alt: "level0intel", title: "Intel: KAI"}).bindLabel("KAI").bindPopup( popUp("kai", "Intel", "KAI", "Listen to the conversation", "req", "susp", "note", "Gama hospital is in part run by an artificial intelligence called KAI. KAI is in charge of everything from calling patients over the PA to performing advanced surgery procedures. Everything at Gama is top of the line and even the doors are out of the ordinary. No keys are needed as KAI simply detects the presence of a small RFID chip incorporated into your clothing and grants you the appropriate access. Smooth and efficient.", "desc") ),
    L.marker([46.28, -100.0], {icon: iconIntel, alt: "level0intel", title: "Intel: Public Patient Journal - Tobias Rieper"}).bindLabel("Public Patient Journal - Tobias Rieper").bindPopup( popUp("publictobias", "Intel", "Public Patient Journal - Tobias Rieper", "Examine", "req", "susp", "note", "Mr. Tobias Rieper is in excellent physical condition. Blood work shows no indication of hereditary or age-related illnesses. Biomarkers indicate Mr. Rieper is in perfect health. Second sequence of tests not yet fully analyzed.", "desc") ),
    L.marker([52.34, -106.5], {icon: iconIntel, alt: "level0intel", title: "Intel: Public Patient Journal - Amos Dexter"}).bindLabel("Public Patient Journal - Amos Dexter").bindPopup( popUp("publicdexter", "Intel", "Public Patient Journal - Amos Dexter", "Examine", "req", "susp", "note", "Mr. Dexter is admitted to Gama on the RED list. He is scheduled for a lung transplant as soon as a viable donor organ becomes available. So far, there seems to be no complications and the supervising surgeon is positive towards a full recovery of the patient.", "desc") ),
    L.marker([43.80, -60.46], {icon: iconIntel, alt: "level0intel", title: "Intel: Public Patient Journal - Jason Portman"}).bindLabel("Public Patient Journal - Jason Portman").bindPopup( popUp("publicjason", "Intel", "Public Patient Journal - Jason Portman", "Examine", "req", "susp", "note", "Mr. Jason Portman admitted for a planned facial surgery. Surgery has been undertaken and procedure is deemed a success. Healing is progressing at an average pace, and though the curve is dropping slightly there is little to be concerned about. KAI estimates that the lower healing rate is due to elevated levels of stress hormones in patient's body. Recommended yoga lessons and spa treatments declined by the patient. Mr. Portman is scheduled for a routine checkup today. The hope is to have the bandages removed.", "desc") ),
    L.marker([47.15, -91.31], {icon: iconIntel, alt: "level0intel", title: "Intel: Gama Hospital Pamphlet"}).bindLabel("Gama Hospital Pamphlet").bindPopup( popUp("gama", "Intel", "Gama Hospital Pamphlet", "Examine", "req", "susp", "note", "A pamphlet describing the facilities at Gama: Patients are encouraged to enjoy themselves at the spa, restaurant and in the outside winter garden. Entry to the facility's many sections is granted by KAI, the resident artificial intelligence. KAI recognizes the chips implanted in your clothes and will automaticlly grant you access to the areas of Gama that you are allowed to visit. Patients with appointments at the hospital facility will be notified through the hospital's PA system.", "desc") ),

    // Interaction
    L.marker([46.28, -96.41], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Lie Down as Tobias Rieper"}).bindLabel("Lie Down as Tobias Rieper").bindPopup( popUp("img", "Interaction", "Lie Down as Tobias Rieper", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([50.28, -106.0], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Lie Down as Amos Dexter"}).bindLabel("Lie Down as Amos Dexter").bindPopup( popUp("img", "Interaction", "Lie Down as Amos Dexter", "use", "VIP Patient (Dexter) disguise", "susp", "note", "ingame", "desc") ),
    L.marker([49.80, -105.3], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Call for assistance"}).bindLabel("Call for assistance").bindPopup( popUp("img", "Interaction", "Call for assistance", "use", "req", "VIP Patient (Dexter)", "note", "ingame", "desc") ),
    L.marker([53.06, -51.28], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Empty Pack of Cigarettes"}).bindLabel("Empty Pack of Cigarettes").bindPopup( popUp("img", "Interaction", "Empty Pack of Cigarettes", "Replace With Full Pack", "Pack of Cigarettes", "susp", "note", "ingame", "desc") ),
    L.marker([63.13, -93.29], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Roller Door"}).bindLabel("Roller Door").bindPopup( popUp("img", "Interaction", "Roller Door", "Open", "req", "susp", "note", "ingame", "desc") ),
    L.marker([63.58, -87.45], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Game Console"}).bindLabel("Game Console").bindPopup( popUp("img", "Interaction", "Game Console", "Activate Expert Mode", "req", "susp", "note", "ingame", "desc") ),
    L.marker([31.42, -80.50], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Initiate Conversation as a Hospital Director"}).bindLabel("Initiate Conversation as a Hospital Director").bindPopup( popUp("img", "Interaction", "Initiate Conversation as a Hospital Director", "use", "Hospital Director disguise", "susp", "note", "ingame", "desc") ),

    // Cameras
    L.marker([60.13, -74.04], {icon: iconCamera, alt: "level0camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[60.13, -74.04], [58.72, -73.34], [59.84, -71.27]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([69.48, -60.55], {icon: iconCamera, alt: "level0camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[69.48, -60.55], [70.98, -59.19], [70.12, -56.29]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([60.26, -82.79], {icon: iconCamera, alt: "level0camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[60.26, -82.79], [58.81, -83.32], [59.86, -85.29]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([65.64, -95.05], {icon: iconCamera, alt: "level0camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[65.64, -95.05], [64.49, -94.13], [65.25, -92.32]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level0camera"}).bindLabel("Security Camera"),

    // Locked
    L.marker([49.69, -88.50], {icon: iconLocked, alt: "level0locked", title: "Locked: Tobias Rieper"}).bindLabel("Locked Door (Tobias Rieper)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Tobias Rieper<br>- Doctor</p>"),
    L.marker([53.40, -98.43], {icon: iconLocked, alt: "level0locked", title: "Locked: Amos Dexter"}).bindLabel("Locked Door (Amos Dexter)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Amos Dexter<br>- Doctor</p>"),
    L.marker([49.69, -68.20], {icon: iconLocked, alt: "level0locked", title: "Locked: Jason Portman"}).bindLabel("Locked Door (Jason Portman)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Jason Portman<br>- Doctor</p>"),
    L.marker([53.46, -58.27], {icon: iconLocked, alt: "level0locked", title: "Locked: Yuki Yamazaki"}).bindLabel("Locked Door (Yuki Yamazaki)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Bodyguard<br>- Hospital Director</p>"),
    // Locked
    L.marker([56.53, -91.05], {icon: iconLocked, alt: "level0locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([57.58, -93.03], {icon: iconLocked, alt: "level0locked", title: "Locked: Kitchen Staff"}).bindLabel("Locked Door (Kitchen Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Chef<br>- Handyman<br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),
    L.marker([56.58, -65.61], {icon: iconLocked, alt: "level0locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([57.61, -63.80], {icon: iconLocked, alt: "level0locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([64.68, -96.10], {icon: iconLocked, alt: "level0locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([67.25, -91.31], {icon: iconLocked, alt: "level0locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([68.00, -61.56], {icon: iconLocked, alt: "level0locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),

]);

/* ==================================================================================================================================================================
    Level 1
================================================================================================================================================================== */

var level1other = L.layerGroup([
        
    // Enter/Exit
    L.marker([68.31, -85.07], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover in the Garden"}).bindLabel("Undercover in the Garden").bindPopup("<img src='img/map_hokkaido/screenshots/enter_garden.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Garden</h1>"),
    L.marker([63.39, -59.72], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Spa"}).bindLabel("Spa").bindPopup("<img src='img/map_hokkaido/screenshots/enter_spa.jpg'><h2>Starting Locaton</h2><h1>Spa</h1>"),
    L.marker([65.89, -103.0], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Restaurant"}).bindLabel("Restaurant").bindPopup("<img src='img/map_hokkaido/screenshots/enter_restaurant.jpg'><h2>Starting Locaton</h2><h1>Restaurant</h1>"),
    L.marker([70.71, -80.06], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Morgue"}).bindLabel("Morgue").bindPopup("<img src='img/map_hokkaido/screenshots/enter_morgue.jpg'><h2>Starting Locaton</h2><h1>Morgue</h1>"),

    // ICA Stash
    L.marker([71.91, -84.24], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Morgue Storage"}).bindLabel("Large Agency Pickup: Morgue Storage").bindPopup("<img src='img/map_hokkaido/screenshots/ica_morgue.jpg'><h2>Large Agency Pickup</h2><h1>Morgue Storage</h1>"),

    // Stairs
    L.marker([53.25, -78.39], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([57.91, -90.39], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([57.91, -66.31], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([60.99, -94.65], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([64.07, -99.53], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([64.47, -60.95], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([70.39, -91.88], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([70.95, -86.00], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([70.94, -69.91], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([75.55, -98.70], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([70.22, -71.89], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([71.03, -67.19], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([72.97, -88.72], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([73.50, -69.91], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([75.94, -95.97], {icon: iconStairsUp, alt: "level1stairsupdown"}),

    // Ways Up/Down
    L.marker([74.43, -69.34], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("To the Roof").bindPopup("<h2>Way Up</h2><h1>To the Roof</h1><p class='req'>Requires Ninja Disguise</p>"),
    L.marker([69.00, -97.64], {icon: iconWayUpDown, alt: "level1waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([69.56, -96.15], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-1</h1>"),
    L.marker([68.94, -59.10], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-1</h1>"),

    // Passage
    L.marker([69.09, -96.50], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([69.17, -60.29], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Ledge
    new L.Polyline([[68.91, -97.51], [69.47, -95.93]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level1ledge"}).bindLabel("Ledge"),
    new L.Polyline([[68.86, -59.15], [69.20, -60.02]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level1ledge"}).bindLabel("Ledge"),

]);

var level1weapons = L.layerGroup([

    L.marker([60.82, -96.72], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([55.87, -70.57], {icon: iconScrambler, alt: "level1scrambler", title: "Weapon: Disposable Scrambler"}).bindLabel("Disposable Scrambler").bindPopup(txtScrambler + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),

    // Firearm
    L.marker([56.63, -70.70], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),
    L.marker([55.80, -69.16], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Shotgun Tactical Bartoli 12G"}).bindLabel("Shotgun: Tactical Bartoli 12G").bindPopup(txtTacticalBartoli12G),

    // Explosive
    L.marker([56.07, -68.46], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Lethal Melee
    L.marker([67.50, -94.26], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([67.70, -95.00], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([71.63, -76.72], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([74.05, -81.03], {icon: iconScalpel, alt: "level1scalpel", title: "Weapon: Scalpel"}).bindLabel("Scalpel").bindPopup(txtScalpel),
    L.marker([71.96, -85.60], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),

    // Non-Lethal Melee
    L.marker([68.65, -94.21], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([63.95, -48.82], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([54.72, -71.49], {icon: iconBaton, alt: "level1baton", title: "Weapon: Police Baton"}).bindLabel("Police Baton").bindPopup(txtBaton),
    L.marker([73.72, -82.17], {icon: iconFirePoker, alt: "level1firepoker", title: "Weapon: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),

]);

var level1poi = L.layerGroup([

    // Hiding Spot
    L.marker([56.80, -87.75], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.57, -85.82], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.55, -68.33], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([66.87, -57.65], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.41, -60.33], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.47, -70.88], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.47, -81.69], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([71.17, -73.38], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.73, -78.83], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.22, -86.48], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([74.11, -85.95], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([57.58, -82.79], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([56.21, -82.79], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([56.34, -85.73], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([55.35, -84.02], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),
    L.marker([66.12, -62.92], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item"),

    // Weapon Crate
    L.marker([57.08, -69.38], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    // Disguise
    L.marker([54.67, -85.38], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Patient"}).bindLabel("Patient").bindPopup("<img src='img/map_hokkaido/screenshots/disg_patient.jpg'><h2>Disguise</h2><h1>Patient</h1>"),
    L.marker([73.54, -78.09], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Motorcyclist"}).bindLabel("Motorcyclist").bindPopup("<img src='img/map_hokkaido/screenshots/disg_motorcyclist.jpg'><h2>Disguise</h2><h1>Motorcyclist</h1>"),

    // NPC
    L.marker([73.92, -76.64], {icon: iconNPC, alt: "level1npc", title: "NPC: The Curator"}).bindLabel("The Curator").bindPopup( popUp("img", "NPC", "The Curator", "use", "req", "susp", "note", "ingame", "desc") ),

    // Blend In
    L.marker([61.89, -97.25], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Patient").bindPopup("<h2>Blend In</h2><h1>Patient</h1>"),
    L.marker([63.11, -100.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Patient").bindPopup("<h2>Blend In</h2><h1>Patient</h1>"),
    L.marker([64.35, -95.49], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Patient").bindPopup("<h2>Blend In</h2><h1>Patient</h1>"),
    L.marker([66.93, -94.35], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Patient").bindPopup("<h2>Blend In</h2><h1>Patient</h1>"),
    L.marker([63.72, -60.60], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Patient").bindPopup("<h2>Blend In</h2><h1>Patient</h1>"),
    L.marker([56.84, -73.74], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Resort Security").bindPopup("<h2>Blend In</h2><h1>Resort Security</h1>"),
    L.marker([63.13, -57.61], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Resort Staff").bindPopup("<h2>Blend In</h2><h1>Resort Staff</h1>"),
    L.marker([63.47, -85.64], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Handyman").bindPopup("<h2>Blend In</h2><h1>Handyman</h1>"),
    L.marker([66.54, -74.83], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Handyman").bindPopup("<h2>Blend In</h2><h1>Handyman</h1>"),
    L.marker([68.33, -83.71], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Handyman").bindPopup("<h2>Blend In</h2><h1>Handyman</h1>"),
    L.marker([72.26, -72.72], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Morgue Doctor").bindPopup("<h2>Blend In</h2><h1>Morgue Doctor</h1>"),
    L.marker([72.54, -80.90], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Morgue Doctor").bindPopup("<h2>Blend In</h2><h1>Morgue Doctor</h1>"),
    L.marker([73.84, -80.33], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([70.55, -74.13], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([70.97, -79.40], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),
    L.marker([69.54, -82.83], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any Disguise</h1>"),

    // Sabotage
    L.marker([53.19, -80.99], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([53.19, -75.80], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([58.76, -88.76], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([64.45, -101.2], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([67.35, -100.4], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([58.76, -67.85], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([75.33, -83.71], {icon: iconSabotage, alt: "level1sab-heart", title: "Sabotage: Destroy Heart"}).bindLabel("Destroy Heart").bindPopup( popUp("img", "Sabotage", "Destroy Heart", "use", "req", "all", "note", "ingame", "desc") ),
    L.marker([72.79, -80.41], {icon: iconSabotage, alt: "level1sab-incinerate", title: "Sabotage: Incinerate"}).bindLabel("Incinerate").bindPopup( popUp("img", "Sabotage", "Dump Body / Incinerate", "use", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.31, -82.39], {icon: iconSabotage, alt: "level1sab-incinerate", title: "Sabotage: Incinerate"}).bindLabel("Incinerate").bindPopup( popUp("img", "Sabotage", "Dump Body / Incinerate", "use", "req", "all", "note", "ingame", "desc") ),
    L.marker([66.46, -58.84], {icon: iconSabotage, alt: "level1sab-door", title: "Sabotage: Block Door"}).bindLabel("Block Door").bindPopup( popUp("img", "Sabotage", "Block Door", "use", "Yuki Yamazaki to be inside", "all", "note", "ingame", "desc") ),

    // Distraction
    L.marker([56.92, -82.83], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([55.99, -86.48], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([54.97, -84.85], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([65.92, -62.35], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([73.20, -73.47], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([73.68, -84.41], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([55.97, -87.75], {icon: iconDistraction, alt: "level1dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([54.87, -85.86], {icon: iconDistraction, alt: "level1dis-toilet", title: "Distraction: Toilet Control Panel"}).bindLabel("Toilet Control Panel").bindPopup( popUp("img", "Distraction", "Toilet Control Panel", "Tamper", "req", "susp", "note", "ingame", "desc") ),
    L.marker([70.71, -68.59], {icon: iconDistraction, alt: "level1dis-bridge", title: "Distraction: Bridge Lights"}).bindLabel("Bridge Lights").bindPopup( popUp("img", "Distraction", "Bridge Lights", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([70.95, -72.07], {icon: iconDistraction, alt: "level1dis-spotlight", title: "Distraction: Examination Room Spotlight"}).bindLabel("Examination Room Spotlight").bindPopup( popUp("img", "Distraction", "Examination Room Spotlight", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),
    L.marker([68.59, -95.97], {icon: iconDistraction, alt: "level1dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "all") ),

    // Alarm
    L.marker([55.05, -87.36], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([60.41, -96.76], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([66.99, -54.79], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([61.50, -63.63], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([72.48, -87.53], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Poison
    L.marker([67.99, -98.48], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Patient", "Chef", "note") ),
    L.marker([68.41, -97.33], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Patient", "Chef", "note") ),
    L.marker([67.22, -93.60], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Patient", "Chef", "note") ),
    L.marker([61.60, -95.09], {icon: iconPoison, alt: "level1poison"}).bindLabel("Bottle of Beer").bindPopup( popPoison("Bottle of Beer", "Unknown", "Chef", "note") ),
    L.marker([62.04, -95.97], {icon: iconPoison, alt: "level1poison", title: "Poison: Hospital Director"}).bindLabel("Snacks (Hospital Director)").bindPopup( popPoison("Snacks", "Hospital Director", "Chef", "note") ),
    L.marker([61.22, -98.34], {icon: iconPoison, alt: "level1poison", title: "Poison: Amos Dexter"}).bindLabel("Glass of White Wine (Amos Dexter)").bindPopup( popPoison("Glass of White Wine", "Amos Dexter", "Chef", "Dexter's glass is in the middle") ),
    L.marker([67.44, -95.58], {icon: iconPoison, alt: "level1poison", title: "Poison: Yuki Yamazaki"}).bindLabel("Plate of Sushi (Yuki Yamazaki)").bindPopup( popPoison("Plate of Sushi", "Yuki Yamazaki", "Chef", "note") ),
    L.marker([61.05, -62.35], {icon: iconPoison, alt: "level1poison", title: "Poison: Yoga Instructor"}).bindLabel("Water Bottle (Yoga Instructor)").bindPopup( popPoison("Water Bottle", "Yoga Instructor", "Chef", "note") ),

    // Item
    L.marker([74.94, -78.44], {icon: iconItem, alt: "level1item", title: "Item: RFID Master Chip"}).bindLabel("RFID Master Chip").bindPopup( popUp("rfid", "Item", "RFID Master Chip", "use", "req", "susp", "First you have to unlock the refrigerator", "This is an all access keycard outfitted with an RFID master chip, which allows the user access to all locked areas in the Gama facility.", "desc") ),
    L.marker([74.11, -87.75], {icon: iconItem, alt: "level1item", title: "Item: Lethal Stem Cells"}).bindLabel("Lethal Stem Cells").bindPopup( popUp("stem", "Item", "Lethal Stem Cells", "use", "Poison", "susp", "To get Lethal Stem Cells you have to Ruin Stem Cells by poisoning Stem Cell Storage", "A container filled with contaminated, poisonous stem cells. Getting injected with these would not be beneficial for your health.", "desc") ),

    // Intel
    L.marker([57.51, -73.78], {icon: iconIntel, alt: "level1intel", title: "Intel: KAI Surgical System Manual"}).bindLabel("KAI Surgical System Manual").bindPopup( popUp("kaimanual", "Intel", "KAI Surgical System Manual", "Examine", "req", "susp", "note", "An operations manual for KAI; the hospital's revolutionary AI, developed by Kronstadt Technologies. Apparently, KAI not only keeps the facility running, but also controls the surgery robot in the operation theater and is programmed to automatically revive patients when they flatline. This could complicate matters. However, the only person with access to KAI's mainframe is the hospital director.", "desc") ),
    L.marker([60.73, -49.30], {icon: iconIntel, alt: "level1intel", title: "Intel: Yoga Schedule"}).bindLabel("Yoga Schedule").bindPopup( popUp("yoga", "Intel", "Yoga Schedule", "Pick Up", "req", "susp", "note", "This is a schedule showing the yoga lessons for the day. Two things of immediate interest: JB, the yoga instructor, hasn't crossed off any of the completed lessons. And Yuki Yamazaki looks to have booked the entire day for herself.", "desc") ),
    L.marker([71.96, -73.65], {icon: iconIntel, alt: "level1intel", title: "Intel: Research Assistants Notes"}).bindLabel("Research Assistant's Notes").bindPopup( popUp("research", "Intel", "Research Assistant's Notes", "Examine", "req", "susp", "note", "These are research notes on The Curator and his neurochip implant. They go into some detail on how the chip functions and how the increase and decrease in dosage delivery affects his mood. The notes indicate that increases in dosage tends to result in the Curator becoming quite elated while decreasing dosages revert him to his default depressed state. Interestingly, the research assistant has been dosing the Curator without his knowledge, using the chip remote control found in Curator's sleeping pod.", "desc") ),
    L.marker([74.24, -86.61], {icon: iconIntel, alt: "level1intel", title: "Intel: Stem Cell Treatment Guide"}).bindLabel("Stem Cell Treatment Guide").bindPopup( popUp("stem", "Intel", "Stem Cell Treatment Guide", "Examine", "req", "susp", "note", "A guide to administer doctor Laurent's revolutionary stem cell treatment. Apparently, the stem cells work to temporarily accelerate tissue regeneration, vastly increasing the patient's chance of survival. The stem cells are pumped directly into the patient's blood stream from a nearby vial.", "desc") ),
    L.marker([53.09, -83.62], {icon: iconIntel, alt: "level1intel", title: "Intel: Doctors Appointment"}).bindLabel("Doctors Appointment").bindPopup( popUp("appointment", "Intel", "Doctors Appointment", "Listen to the conversation", "req", "susp", "note", "Jason Portman, tech prodigy and full-time nerd, has gotten a full facial reconstruction at Gama and is scheduled to have his bandages removed today.", "desc") ),
    L.marker([71.42, -77.95], {icon: iconIntel, alt: "level1intel", title: "Intel: The Curator"}).bindLabel("The Curator").bindPopup( popUp("curator", "Intel", "The Curator", "Listen to the conversation", "req", "susp", "note", "According to his assistent, The Curator has a serious issue with his bio-chemical stability. The assistant has documented the condition in his notes trying to find a pattern. Those might be interesting reading.", "desc") ),

    // Interaction
    L.marker([67.23, -95.05], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Prepare Sushi"}).bindLabel("Prepare Sushi").bindPopup( popUp("img", "Interaction", "Prepare Sushi", "use", "Chef disguise", "susp", "note", "ingame", "desc") ),
    L.marker([67.15, -99.36], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Empty Pack of Cigarettes"}).bindLabel("Empty Pack of Cigarettes").bindPopup( popUp("img", "Interaction", "Empty Pack of Cigarettes", "Replace With Full Pack", "Pack of Cigarettes", "susp", "note", "ingame", "desc") ),
    L.marker([66.42, -55.89], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Turn Off Cold Water"}).bindLabel("Turn Off Cold Water").bindPopup( popUp("img", "Interaction", "Turn Off Cold Water", "use", "Wrench", "all", "note", "ingame", "desc") ),
    L.marker([67.49, -58.93], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Sauna"}).bindLabel("Sauna").bindPopup( popUp("img", "Interaction", "Sauna", "Increase Temperature", "req", "all", "note", "ingame", "desc") ),
    L.marker([74.89, -79.45], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Refrigerator No 2"}).bindLabel("Refrigerator No 2").bindPopup( popUp("img", "Interaction", "Refrigerator No 2", "Unlock", "Nondescript Keycard or Disposable Scrambler", "susp", "note", "ingame", "desc") ),
    L.marker([75.59, -84.72], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Organ Vault Cooling System"}).bindLabel("Organ Vault Cooling System").bindPopup( popUp("img", "Interaction", "Organ Vault Cooling System", "Decrease Room Temperature", "Wrench", "all", "note", "ingame", "desc") ),
    L.marker([60.71, -50.49], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Begin Yoga Session as a Yoga Instructor"}).bindLabel("Begin Yoga Session as a Yoga Instructor").bindPopup( popUp("img", "Interaction", "Begin Yoga Session as a Yoga Instructor", "use", "Yoga Instructor disguise", "susp", "note", "ingame", "desc") ),
    L.marker([58.42, -79.49], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Yuki Yamazaki as a Hospital Director"}).bindLabel("Talk to Yuki Yamazaki as a Hospital Director").bindPopup( popUp("img", "Interaction", "Talk to Yuki Yamazaki as a Hospital Director", "use", "Hospital Director disguise", "susp", "Talk to Yuki to arrange a private conversation", "ingame", "desc") ),
    L.marker([58.42, -77.21], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Yuki Yamazaki as a Yoga Instructor"}).bindLabel("Talk to Yuki Yamazaki as a Yoga Instructor").bindPopup( popUp("img", "Interaction", "Talk to Yuki Yamazaki as a Yoga Instructor", "use", "Yoga Instructor disguise", "susp", "Talk to Yuki to arrange a yoga session", "ingame", "desc") ),

    // Cameras
    L.marker([67.40, -92.98], {icon: iconCamera, alt: "level1camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[67.40, -92.98], [66.53, -91.05], [67.10, -89.78]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([68.39, -61.12], {icon: iconCamera, alt: "level1camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[68.39, -61.12], [67.37, -63.63], [67.85, -64.90]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([55.92, -73.38], {icon: iconEvidence, alt: "level1evidence", title: "Camera Recorder: Hospital"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    L.marker([72.08, -71.23], {icon: iconEvidence, alt: "level1evidence", title: "Camera Recorder: Hospital"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),

    // Locked
    L.marker([74.12, -68.59], {icon: iconLocked, alt: "level1locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([62.93, -67.19], {icon: iconLocked, alt: "level1locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([68.62, -61.61], {icon: iconLocked, alt: "level1locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([74.72, -81.29], {icon: iconLocked, alt: "level1locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([57.58, -93.03], {icon: iconLocked, alt: "level1locked", title: "Locked: Kitchen Staff"}).bindLabel("Locked Door (Kitchen Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Chef<br>- Handyman<br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),
    L.marker([67.60, -92.46], {icon: iconLocked, alt: "level1locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([61.81, -61.74], {icon: iconLocked, alt: "level1locked", title: "Locked: Resort Staff"}).bindLabel("Locked Door (Resort Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Staff<br>- Chef<br>- Handyman<br>- Resort Security<br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Yoga Instructor<br>- Helicopter Pilot</p>"),
    L.marker([66.46, -56.95], {icon: iconLocked, alt: "level1locked", title: "Locked: Handyman"}).bindLabel("Locked Door (Handyman)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Handyman<br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),
    L.marker([73.50, -85.82], {icon: iconLocked, alt: "level1locked", title: "Locked: Surgeon"}).bindLabel("Locked Door (Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Surgeon<br>- Chief Surgeon"),
    L.marker([58.12, -74.26], {icon: iconLocked, alt: "level1locked", title: "Locked: Resort Security"}).bindLabel("Locked Door (Resort Security)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),
    L.marker([58.85, -72.15], {icon: iconLocked, alt: "level1locked", title: "Locked: Resort Security"}).bindLabel("Locked Door (Resort Security)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),
    L.marker([57.23, -70.83], {icon: iconLocked, alt: "level1locked", title: "Locked: Resort Security"}).bindLabel("Locked Door (Resort Security)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Resort Security<br>- Bodyguard<br>- Hospital Director</p>"),

    // Frisk
    L.marker([66.63, -98.48], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Yamazaki Bodyguard</h1><p class='note'>Will be frisked if disguised as Hospital Director</p>"),
    L.marker([62.49, -68.02], {icon: iconSeccheck, alt: "level1seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Resort Security</h1><p class='note'>Will be frisked if disguised as Doctor / Morgue Doctor / Surgeon / Helicopter Pilot</p>"),

]);

/* ==================================================================================================================================================================
    Level 2
================================================================================================================================================================== */

var level2other = L.layerGroup([
        
    // Enter/Exit
    L.marker([71.64, -82.00], {icon: iconEnter, alt: "level2enter", title: "Starting Locaton: Undercover in the Operating Theater"}).bindLabel("Undercover in the Operating Theater").bindPopup("<img src='img/map_hokkaido/screenshots/enter_theater.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Operating Theater</h1>"),
    L.marker([75.10, -99.62], {icon: iconExit, alt: "level2exit", title: "Exit Locaton: Helicopter"}).bindLabel("Helicopter").bindPopup("<img src='img/map_hokkaido/screenshots/exit_helicopter.jpg'><h2>Exit Locaton</h2><h1>Helicopter</h1>"),

    // ICA Stash
    L.marker([73.67, -83.10], {icon: iconIcaStash, alt: "level2icastash", title: "Small Agency Pickup: Operating Theater Restroom"}).bindLabel("Small Agency Pickup: Operating Theater Restroom").bindPopup("<img src='img/map_hokkaido/screenshots/ica_theater.jpg'><h2>Small Agency Pickup</h2><h1>Operating Theater Restroom</h1>"),

    // Stairs
    L.marker([69.41, -62.35], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([69.94, -72.68], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([76.32, -97.38], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([73.60, -70.48], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([73.13, -88.24], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    
    // Ways Up/Down
    L.marker([69.00, -97.64], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([73.77, -87.93], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 2-3</h1>"),

    // Passage
    L.marker([72.30, -92.37], {icon: iconPassage, alt: "level2passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([70.59, -92.50], {icon: iconPassage, alt: "level2passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([74.34, -85.07], {icon: iconPassage, alt: "level2passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    // Ledge
    new L.Polyline([[72.85, -94.52], [71.45, -89.91], [70.19, -93.91]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),

]);

var level2weapons = L.layerGroup([

    // Non-Lethal Melee
    L.marker([68.59, -95.75], {icon: iconHammer, alt: "level2hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),


]);

var level2poi = L.layerGroup([

    // Hiding Spot
    L.marker([76.14, -77.16], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

    // Weapon Crate
    L.marker([73.65, -73.12], {icon: iconWeaponCrate, alt: "level2weaponcrate"}).bindLabel("Weapon Crate"),

    // Blend In
    L.marker([71.89, -81.95], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Surgeon").bindPopup("<h2>Blend In</h2><h1>Surgeon</h1>"),
    L.marker([76.05, -77.73], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Doctor").bindPopup("<h2>Blend In</h2><h1>Doctor</h1>"),
    L.marker([74.64, -71.27], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Resort Bodyguard").bindPopup("<h2>Blend In</h2><h1>Resort Bodyguard</h1>"),

    // Sabotage
    L.marker([67.77, -93.20], {icon: iconSabotage, alt: "level2sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([76.94, -94.92], {icon: iconSabotage, alt: "level2sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([72.18, -78.35], {icon: iconSabotage, alt: "level2sab-operate", title: "Sabotage: Operate as Chief Surgeon"}).bindLabel("Operate as Chief Surgeon").bindPopup( popUp("img", "Sabotage", "Operate as Chief Surgeon", "use", "Chief Surgeon disguise", "susp", "note", "ingame", "desc") ),
    L.marker([71.62, -75.05], {icon: iconSabotage, alt: "level2sab-pump", title: "Sabotage: Stem Cell Pump"}).bindLabel("Stem Cell Pump").bindPopup( popUp("img", "Sabotage", "Stem Cell Pump", "Drain", "req", "all", "note", "ingame", "desc") ),
    L.marker([70.49, -82.70], {icon: iconSabotage, alt: "level2sab-respirator", title: "Sabotage: Respirator"}).bindLabel("Respirator").bindPopup( popUp("img", "Sabotage", "Respirator", "Turn Off", "req", "all", "note", "ingame", "desc") ),

    // Distraction
    L.marker([74.72, -75.36], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([74.54, -81.03], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),

    // Poison
    L.marker([75.29, -76.94], {icon: iconPoison, alt: "level2poison", title: "Poison: Doctor"}).bindLabel("Coffee Glass (Doctor)").bindPopup( popPoison("Coffee Glass", "Doctor", "all", "note") ),

    // Intel
    L.marker([75.87, -78.48], {icon: iconIntel, alt: "level2intel", title: "Intel: Confidential Patient Journal - Tobias Rieper"}).bindLabel("Confidential Patient Journal - Tobias Rieper").bindPopup( popUp("conftobias", "Intel", "Confidential Patient Journal - Tobias Rieper", "Examine", "req", "susp", "note", "Mr. Rieper was admitted to Gama for a standard physical checkup. Preliminary results indicate that Mr. Rieper is in peak physical condition. In fact, the tests show absolutely no indication of any of the issues one might expect from a man his age. Melanoma, cholesterol, diabetes, cancer and heart condition checks are all in the green. Physically, Mr. Rieper is like that of a man in his early 20's. KAI was asked to run all test results through her algorithms twice. Note from the supervisor: Would it be possible to keep Mr. Rieper at Gama a little longer to run some additional test? This man is literally one big stem cell. It's almost as if he's been engineered.", "desc") ),
    L.marker([75.45, -80.11], {icon: iconIntel, alt: "level2intel", title: "Intel: Confidential Patient Journal - Jason Portman"}).bindLabel("Confidential Patient Journal - Jason Portman").bindPopup( popUp("confportman", "Intel", "Confidential Patient Journal - Jason Portman", "Examine", "req", "susp", "note", "Patient, Jason Portman admitted to Gama for a full facial reconstruction. Reference images of Helmut Kruger added to the patient database prior to Mr. Portman's arrival. The procedure proved to be quite a challenge given the weak chin and almost-non-existent cheekbones of the patient and his desire to match Kruger 1:1. Previous facial surgery complicated matters considerably due to a lack of cartilage and facial support structure that had been chiselled away over the years. Patient is scheduled for checkup today.", "desc") ),
    L.marker([74.99, -78.09], {icon: iconIntel, alt: "level2intel", title: "Intel: Confidential Patient Journal - Amos Dexter"}).bindLabel("Confidential Patient Journal - Amos Dexter").bindPopup( popUp("confdexter", "Intel", "Confidential Patient Journal - Amos Dexter", "Examine", "req", "susp", "note", "Patient, Amos Dexter, is a regular at Gama. He is currently scheduled for his eight organ transplant in five years. Dexter has been here so frequently that we, despite Dr. Ito's best conservation and curation efforts, are currently out of viable lungs for him to have transplanted and Mr. Dexter is now on the RED list, awaiting a suitable donor organ. It should also be noted that Mr. Dexter still smokes and multiple staff members have confiscated several packs of cigarettes from his room; despite our best efforts, new packs keep showing up. It is recommended that an extra eye is kept on Mr. Dexter after surgery to ensure this habit is killed.", "desc") ),
    L.marker([72.08, -80.37], {icon: iconIntel, alt: "level2intel", title: "Intel: Confidential Patient Journal - Erich Soders"}).bindLabel("Confidential Patient Journal - Erich Soders").bindPopup( popUp("confsoders", "Intel", "Confidential Patient Journal - Erich Soders", "Examine", "req", "susp", "note", "Patient, Erich Soders suffers from the Situs Inversus conditionm which has presented Dr. Ito, our resident curator, with challenges in terms of recovering a suitable donor heart. One such heart did fortunately find its way to Gama and currently resides in the organ vault. Dr. Nicholas Laurent has been flown to assist KAI with the heart replacement procedure. Mr. Soders is currently being prepared for the procedure through a series of ground-breaking stem cell treatments pioneered (patents pending) by Dr. Laurent. The patient resides in theater and is under constant care from KAI and dependent on life support. Patient has not yet been put under.", "desc") ),
    L.marker([75.48, -78.26], {icon: iconIntel, alt: "level2intel", title: "Intel: Right-sided Donor Heart"}).bindLabel("Right-sided Donor Heart").bindPopup( popUp("heart", "Intel", "Right-sided Donor Heart", "Listen to the conversation", "req", "susp", "note", "A right-sided donor heart has been added to the hospital's organ storage facility. Soders suffers from  Situs Inversus, a condition which causes his internal organs to be mirrored. Surely that heart is meant for him.", "desc") ),

    // Interaction
    L.marker([71.41, -74.39], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Stem Cell Pump"}).bindLabel("Stem Cell Pump").bindPopup( popUp("img", "Interaction", "Stem Cell Pump", "Refill", "Lethal Stem Cells", "all", "note", "ingame", "desc") ),
    L.marker([73.55, -79.05], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Load Kill List"}).bindLabel("Load Kill List").bindPopup( popUp("img", "Interaction", "Load Kill List", "use", "Erich Soders' Kill List", "all", "note", "ingame", "desc") ),

    // Location
    L.marker([74.48, -97.55], {icon: iconLocation, alt: "level2location", title: "Location: Chief Surgeon and Helicopter Pilot meeting spot"}).bindLabel("Chief Surgeon and Helicopter Pilot meeting spot").bindPopup( popUp("img", "Location", "Chief Surgeon and Helicopter Pilot meeting spot", "use", "req", "susp", "note", "ingame", "desc") ),

    // Cameras
    L.marker([71.69, -89.42], {icon: iconCamera, alt: "level2camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[71.69, -89.42], [73.27, -90.74], [72.63, -93.03]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level2camera"}).bindLabel("Security Camera"),

    // Locked
    L.marker([71.85, -76.59], {icon: iconLocked, alt: "level2locked", title: "Locked: Surgeon"}).bindLabel("Locked Door (Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Surgeon<br>- Chief Surgeon</p>"),
    L.marker([70.40, -84.15], {icon: iconLocked, alt: "level2locked", title: "Locked: Surgeon"}).bindLabel("Locked Door (Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Surgeon<br>- Chief Surgeon</p>"),
    L.marker([71.23, -84.11], {icon: iconLocked, alt: "level2locked", title: "Locked: Surgeon"}).bindLabel("Locked Door (Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Surgeon<br>- Chief Surgeon</p>"),
    L.marker([72.85, -78.31], {icon: iconLocked, alt: "level2locked", title: "Locked: Chief Surgeon"}).bindLabel("Locked Door (Chief Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Chief Surgeon</p>"),
    L.marker([71.85, -88.46], {icon: iconLocked, alt: "level2locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),

    // Frisk
    L.marker([74.09, -96.15], {icon: iconSeccheck, alt: "level2seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Bodyguards</h1><p class='note'>Will be frisked if disguised as Doctor / Surgeon / Hospital Director / Helicopter Pilot</p>"),

]);

/* ==================================================================================================================================================================
    Level 3
================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([76.52, -48.91], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Infiltrating Along the Mountain Path"}).bindLabel("Infiltrating Along the Mountain Path").bindPopup("<img src='img/map_hokkaido/screenshots/enter_mountain.jpg'><h2>Starting Locaton</h2><h1>Infiltrating Along the Mountain Path</h1>"),
    L.marker([76.63, -45.35], {icon: iconExit, alt: "level3exit", title: "Exit Locaton: Hiking Route"}).bindLabel("Hiking Route").bindPopup("<img src='img/map_hokkaido/screenshots/exit_hiking.jpg'><h2>Exit Locaton</h2><h1>Hiking Route</h1>"),

    L.marker([77.05, -50.93], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Mountain Path"}).bindLabel("Large Agency Pickup: Mountain Path").bindPopup("<img src='img/map_hokkaido/screenshots/ica_mountain.jpg'><h2>Large Agency Pickup</h2><h1>Mountain Path</h1>"),

    L.marker([73.60, -70.48], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([73.13, -88.24], {icon: iconStairsDown, alt: "level3stairsupdown"}),

    L.marker([73.77, -87.93], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 2-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-3</h1>"),

    L.marker([73.89, -86.79], {icon: iconPassage, alt: "level3passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    new L.Polyline([[74.57, -84.59], [73.66, -87.89]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level3ledge"}).bindLabel("Ledge"),

]);

var level3weapons = L.layerGroup([

    L.marker([69.85, -75.76], {icon: iconBaseballBat, alt: "level3baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),
    L.marker([74.29, -81.21], {icon: iconScalpel, alt: "level3scalpel", title: "Weapon: Scalpel"}).bindLabel("Scalpel").bindPopup(txtScalpel + "<p class='req'>Requires Lockpick or Crowbar to open the Cabinet</p>"),
    L.marker([74.24, -70.97], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Botulinum Toxin"}).bindLabel("Botulinum Toxin").bindPopup(txtLethalPoison),
    L.marker([76.36, -50.18], {icon: iconKatana, alt: "level3katana", title: "Weapon: Katana"}).bindLabel("Katana").bindPopup(txtKatana + "<p class='req'>Appears only if using the 'Infiltrating Along the Mountain Path' starting location</p>"),

]);

var level3poi = L.layerGroup([

    // Hiding Spot
    L.marker([73.34, -86.61], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.02, -76.33], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),

    // Conceal
    L.marker([74.47, -70.40], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item"),

    // Disguise
    L.marker([69.94, -72.33], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Baseball Player"}).bindLabel("Baseball Player").bindPopup("<img src='img/map_hokkaido/screenshots/disg_baseball.jpg'><h2>Disguise</h2><h1>Baseball Player</h1>"),

    // Blend In
    L.marker([71.96, -75.54], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Doctor").bindPopup("<h2>Blend In</h2><h1>Doctor</h1>"),
    L.marker([71.49, -82.39], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Doctor").bindPopup("<h2>Blend In</h2><h1>Doctor</h1>"),

    // Sabotage
    L.marker([75.19, -83.93], {icon: iconSabotage, alt: "level3sab-icicle", title: "Sabotage: Icicle"}).bindLabel("Icicle").bindPopup( popUp("img", "Sabotage", "Icicle", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([76.41, -77.29], {icon: iconSabotage, alt: "level3sab-icicle", title: "Sabotage: Icicle"}).bindLabel("Icicle").bindPopup( popUp("img", "Sabotage", "Icicle", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([70.51, -82.52], {icon: iconSabotage, alt: "level3sab-defibrillator", title: "Sabotage: Defibrillator"}).bindLabel("Defibrillator").bindPopup( popUp("img", "Sabotage", "Defibrillator", "Overcharge", "req", "susp", "note", "ingame", "desc") ),
    L.marker([72.06, -78.31], {icon: iconSabotage, alt: "level3sab-controls", title: "Sabotage: Operation Controls"}).bindLabel("Operation Controls").bindPopup( popUp("img", "Sabotage", "Operation Controls", "Interrupt Procedure", "req", "all", "note", "ingame", "desc") ),

    // Distraction
    L.marker([73.56, -87.23], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),

    // Poison
    L.marker([73.87, -82.61], {icon: iconPoison, alt: "level3poison", title: "Poison: Doctor"}).bindLabel("Coffee Glass (Doctor)").bindPopup( popPoison("Coffee Glass", "Doctor", "all", "note") ),
    L.marker([74.27, -83.97], {icon: iconPoison, alt: "level3poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Female Doctor", "all", "note") ),
    L.marker([75.21, -77.34], {icon: iconPoison, alt: "level3poison", title: "Poison: Surgeon"}).bindLabel("Water Bottle (Surgeon)").bindPopup( popPoison("Water Bottle", "Surgeon", "all", "note") ),

    // Alarm
    L.marker([73.45, -72.50], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    // Item
    L.marker([69.61, -74.09], {icon: iconItem, alt: "level3item", title: "Item: Nondescript Keycard"}).bindLabel("Nondescript Keycard").bindPopup( popUp("nondescript", "Item", "Nondescript Keycard", "use", "req", "susp", "note", "A keycard found in the Hospital Director's office.", "desc") ),
    L.marker([74.48, -80.46], {icon: iconItem, alt: "level3item", title: "Item: Pack of Cigarettes"}).bindLabel("Pack of Cigarettes").bindPopup( popUp("cigarettes", "Item", "Pack of Cigarettes", "use", "Lockpick or Crowbar to open the Cabinet", "susp", "note", "This is a pack of cigarettes. Gama has a strict no-smoking policy in all areas of the hospital so these are definitely contraband and must have been smuggled in somehow.", "desc") ),

    // Interaction
    L.marker([73.26, -79.93], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Mainframe"}).bindLabel("Mainframe").bindPopup( popUp("img", "Interaction", "Mainframe", "Sabotage", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.49, -79.18], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Mainframe"}).bindLabel("Mainframe").bindPopup( popUp("img", "Interaction", "Mainframe", "Sabotage", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.51, -77.51], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Mainframe"}).bindLabel("Mainframe").bindPopup( popUp("img", "Interaction", "Mainframe", "Sabotage", "req", "all", "note", "ingame", "desc") ),
    L.marker([73.28, -76.86], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Mainframe"}).bindLabel("Mainframe").bindPopup( popUp("img", "Interaction", "Mainframe", "Sabotage", "req", "all", "note", "ingame", "desc") ),
    L.marker([69.77, -82.70], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Safety Module"}).bindLabel("Safety Module").bindPopup( popUp("img", "Interaction", "Safety Module", "Sabotage", "Screwdriver", "all", "note", "ingame", "desc") ),
    L.marker([75.82, -77.29], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Sit Down as Jason Portman"}).bindLabel("Sit Down as Jason Portman").bindPopup( popUp("img", "Interaction", "Sit Down as Jason Portman", "use", "Jason Portman disguise", "susp", "note", "ingame", "desc") ),
    L.marker([74.55, -71.98], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Do Push-Ups as a Resort Bodyguard"}).bindLabel("Do Push-Ups as a Resort Bodyguard").bindPopup( popUp("img", "Interaction", "Do Push-Ups as a Resort Bodyguard", "use", "Bodyguard disguise", "susp", "note", "ingame", "desc") ),

    // Cameras
    L.marker([72.80, -74.97], {icon: iconCamera, alt: "level3camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[72.80, -74.97], [72.14, -72.55], [71.84, -74.57]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([72.75, -81.95], {icon: iconCamera, alt: "level3camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[72.75, -81.95], [72.14, -84.15], [71.84, -82.08]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([76.76, -76.55], {icon: iconCamera, alt: "level3camera", title: "Camera: Hospital"}).bindLabel("Security Camera"),
    L.polygon([[76.76, -76.55], [76.26, -80.02], [75.99, -78.96]], {color: '#00AA05', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.4, className: "level3camera"}).bindLabel("Security Camera"),

    // Locked
    L.marker([70.34, -73.03], {icon: iconLocked, alt: "level3locked", title: "Locked: Hospital Director"}).bindLabel("Locked Door (Hospital Director)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Hospital Director</p>"),
    L.marker([72.89, -78.35], {icon: iconLocked, alt: "level3locked", title: "Locked: Hospital Director"}).bindLabel("Locked Door (Hospital Director)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Hospital Director</p>"),
    L.marker([72.67, -75.41], {icon: iconLocked, alt: "level3locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([72.71, -81.25], {icon: iconLocked, alt: "level3locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([74.78, -83.58], {icon: iconLocked, alt: "level3locked", title: "Locked: Medical Staff"}).bindLabel("Locked Door (Medical Staff)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Doctor<br>- Morgue Doctor<br>- Surgeon<br>- Bodyguard<br>- Hospital Director<br>- Chief Surgeon<br>- Helicopter Pilot</p>"),
    L.marker([70.33, -83.84], {icon: iconLocked, alt: "level3locked", title: "Locked: Surgeon"}).bindLabel("Locked Door (Surgeon)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires RFID Master Chip / Disposable Scrambler or a specific disguise:<br><br>- Surgeon<br>- Chief Surgeon</p>"),

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