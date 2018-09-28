var mapbangkok = L.map('mapbangkok', {maxBoundsViscosity: 1}).setView([57.42, -132.8], 4);
mapbangkok.zoomControl.setPosition('topright');
mapbangkok.setMaxBounds([[84.28, 28.652],[-29.0, -353.3]]);
$("#level-1").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1base = L.tileLayer('img/map_bangkok/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapbangkok),
    mapLevel2base = L.tileLayer('img/map_bangkok/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_bangkok/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4base = L.tileLayer('img/map_bangkok/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5base = L.tileLayer('img/map_bangkok/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = L.tileLayer('img/map_bangkok/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = L.tileLayer('img/map_bangkok/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = L.tileLayer('img/map_bangkok/lvl_2/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = L.tileLayer('img/map_bangkok/lvl_3/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4suit = L.tileLayer('img/map_bangkok/lvl_4/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5suit = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0staff = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1staff = L.tileLayer('img/map_bangkok/lvl_1/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2staff = L.tileLayer('img/map_bangkok/lvl_2/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3staff = L.tileLayer('img/map_bangkok/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4staff = L.tileLayer('img/map_bangkok/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5staff = L.tileLayer('img/map_bangkok/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0security = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1security = L.tileLayer('img/map_bangkok/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2security = L.tileLayer('img/map_bangkok/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3security = L.tileLayer('img/map_bangkok/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4security = L.tileLayer('img/map_bangkok/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5security = L.tileLayer('img/map_bangkok/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0waiter = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1waiter = L.tileLayer('img/map_bangkok/lvl_1/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2waiter = L.tileLayer('img/map_bangkok/lvl_2/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3waiter = L.tileLayer('img/map_bangkok/lvl_3/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4waiter = L.tileLayer('img/map_bangkok/lvl_4/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5waiter = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0kitchen = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1kitchen = L.tileLayer('img/map_bangkok/lvl_1/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2kitchen = L.tileLayer('img/map_bangkok/lvl_2/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3kitchen = L.tileLayer('img/map_bangkok/lvl_3/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4kitchen = L.tileLayer('img/map_bangkok/lvl_4/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5kitchen = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0groundskeeper = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1groundskeeper = L.tileLayer('img/map_bangkok/lvl_1/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2groundskeeper = L.tileLayer('img/map_bangkok/lvl_2/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3groundskeeper = L.tileLayer('img/map_bangkok/lvl_3/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4groundskeeper = L.tileLayer('img/map_bangkok/lvl_4/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5groundskeeper = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0exterminator = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1exterminator = L.tileLayer('img/map_bangkok/lvl_1/ext/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2exterminator = L.tileLayer('img/map_bangkok/lvl_2/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3exterminator = L.tileLayer('img/map_bangkok/lvl_3/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4exterminator = L.tileLayer('img/map_bangkok/lvl_4/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5exterminator = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0crew = L.tileLayer('img/map_bangkok/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1crew = L.tileLayer('img/map_bangkok/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2crew = L.tileLayer('img/map_bangkok/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3crew = L.tileLayer('img/map_bangkok/lvl_3/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4crew = L.tileLayer('img/map_bangkok/lvl_4/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5crew = L.tileLayer('img/map_bangkok/lvl_5/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0bodyguard = L.tileLayer('img/map_bangkok/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1bodyguard = L.tileLayer('img/map_bangkok/lvl_1/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2bodyguard = L.tileLayer('img/map_bangkok/lvl_2/waiter/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3bodyguard = L.tileLayer('img/map_bangkok/lvl_3/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4bodyguard = L.tileLayer('img/map_bangkok/lvl_4/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5bodyguard = L.tileLayer('img/map_bangkok/lvl_5/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0silva = L.tileLayer('img/map_bangkok/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1silva = L.tileLayer('img/map_bangkok/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2silva = L.tileLayer('img/map_bangkok/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3silva = L.tileLayer('img/map_bangkok/lvl_3/gk/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4silva = L.tileLayer('img/map_bangkok/lvl_4/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5silva = L.tileLayer('img/map_bangkok/lvl_5/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0morganbodyguard = L.tileLayer('img/map_bangkok/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1morganbodyguard = L.tileLayer('img/map_bangkok/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2morganbodyguard = L.tileLayer('img/map_bangkok/lvl_2/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3morganbodyguard = L.tileLayer('img/map_bangkok/lvl_3/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4morganbodyguard = L.tileLayer('img/map_bangkok/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5morganbodyguard = L.tileLayer('img/map_bangkok/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0stalker = L.tileLayer('img/map_bangkok/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1stalker = L.tileLayer('img/map_bangkok/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2stalker = L.tileLayer('img/map_bangkok/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3stalker = L.tileLayer('img/map_bangkok/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4stalker = L.tileLayer('img/map_bangkok/lvl_4/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5stalker = L.tileLayer('img/map_bangkok/lvl_5/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */

var level0other = L.layerGroup([

    L.marker([64.22, -112.8], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Undercover in the Linen Room"}).bindLabel("Undercover in the Linen Room").bindPopup("<img src='img/map_bangkok/screenshots/enter_staff.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Linen Room</h1>"),
    L.marker([70.43, -140.0], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Tunnel"}).bindLabel("Tunnel").bindPopup("<img src='img/map_bangkok/screenshots/exit_tunnel.jpg'><h2>Exit Locaton</h2><h1>Tunnel</h1>"),
    L.marker([48.60, -106.3], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: South Wing Basement"}).bindLabel("Large Agency Pickup: South Wing Basement").bindPopup("<img src='img/map_bangkok/screenshots/ica_basement.jpg'><h2>Large Agency Pickup</h2><h1>South Wing Basement</h1>"),

    L.marker([63.35, -119.6], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([61.73, -101.4], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([46.40, -107.4], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([39.63, -120.7], {icon: iconStairsUp, alt: "level0stairsupdown"}),

]);

var level0weapons = L.layerGroup([

    L.marker([63.64, -118.2], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([65.89, -119.8], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([62.73, -113.8], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([55.94, -106.7], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    L.marker([66.87, -122.1], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo (x2)").bindPopup(txtAmmoPistol),

    L.marker([66.80, -137.3], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([62.77, -118.2], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([56.99, -108.6], {icon: iconExtinguisher, alt: "level0extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([63.64, -102.7], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),    
    L.marker([66.53, -133.0], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),    
    L.marker([49.61, -107.6], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),    
    L.marker([63.62, -128.4], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([56.77, -106.7], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([63.99, -120.5], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([66.98, -119.4], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([66.60, -110.6], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([62.51, -121.9], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([64.62, -114.5], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([63.23, -118.2], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([65.98, -117.1], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([66.73, -112.2], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),

]);

var level0poi = L.layerGroup([

    L.marker([65.69, -126.7], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([64.05, -128.4], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([67.20, -122.8], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.64, -104.3], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([65.16, -121.1], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([65.36, -118.5], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([62.71, -111.4], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([65.53, -112.1], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([55.97, -108.1], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([40.97, -107.3], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([43.32, -115.1], {icon: iconHidingSpot, alt: "level0hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),

    L.marker([64.66, -121.1], {icon: iconConceal, alt: "level0conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),

    L.marker([66.51, -121.3], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([66.61, -115.7], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([67.22, -114.1], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([63.60, -113.5], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([63.60, -107.4], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([65.20, -110.2], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Hotel Staff"),

    L.marker([64.92, -122.0], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Waiter"}).bindLabel("Waiter").bindPopup( popUp("waiter", "Disguise", "Waiter", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([63.56, -110.4], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Kitchen Staff"}).bindLabel("Kitchen Staff").bindPopup( popUp("kitchen", "Disguise", "Kitchen Staff", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([64.01, -126.0], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([64.68, -120.1], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([65.21, -120.0], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.23, -118.6], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([62.73, -112.5], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([64.73, -117.6], {icon: iconDistraction, alt: "level0dis-fusebox", title: "Distraction: Fusebox"}).bindLabel("Fusebox").bindPopup( popGlobal(disFusebox, "susp") ),

    L.marker([49.43, -109.8], {icon: iconPoison, alt: "level0poison", title: "Poison: Hotel Security"}).bindLabel("Coffee Glass (Hotel Security)").bindPopup( popPoison("Coffee Glass", "Hotel Security", "Waiter / Kitchen Staff", "note") ),

    L.marker([66.73, -127.2], {icon: iconIntel, alt: "level0intel", title: "Intel: Thomas Cross"}).bindLabel("Thomas Cross").bindPopup( popUp("thomas", "Intel", "Thomas Cross", "Listen to the conversation", "req", "susp", "note", "Billionaire media mogul Thomas Cross owns network media and gossip papers all over the world. Cross Sr. is known as a ruthless ultra-liberalist and total recluse who lives on a fortified island off the coast of Costa Rica. He is considered a cold, manipulative patriarch and a throughly unpleasant human being.", "desc") ),
    L.marker([64.47, -127.3], {icon: iconIntel, alt: "level0intel", title: "Intel: Manager Note: On Queen Suite Emergency"}).bindLabel("Manager Note: On Queen Suite Emergency").bindPopup( popUp("notequeen", "Intel", "Manager Note: On Queen Suite Emergency", "Examine", "req", "susp", "note", "A note from hotel manager: The unthinkable has happened! This morning, members of young Master Cross' sound crew broke into the Queen Suite and sullied it after housekeeping was finished. Mr. Morgan, our esteemed guest and representative of our owner Thomas Cross, has rightfully complained about the shameful state of his chambers. Once housekeeping is done cleaning, I expect a member of staff to escort Mr. Morgan to his Suite, make sure he is satisfied and extend a heartfelt formal apology. Failure to do so will, needless to say, result in everyone's immediate termination!", "desc") ),
    L.marker([63.56, -112.0], {icon: iconIntel, alt: "level0intel", title: "Intel: Manager Note: On the Occupant of Room 207"}).bindLabel("Manager Note: On the Occupant of Room 207").bindPopup( popUp("noteroom207", "Intel", "Manager Note: On the Occupant of Room 207", "Examine", "req", "susp", "note", "A note from the hotel manager: Mrs. Carrington on 207 can be a bit of a handful. Please ensure the bar is suitably stocked with plenty of pinot and the smoking lounge has the ventilation system set to high. Make sure you listen at the door before entering her suite as she often has company of the male persuasion. Finally, she has requested a bottle of sunscreen enriched with vitamin e to help protect her tattoos from the sun. Get two bottles to her room.", "desc") ),

    L.marker([67.16, -117.0], {icon: iconItem, alt: "level0item", title: "Item: Master Keycard"}).bindLabel("Master Keycard").bindPopup( popUp("masterkeycard", "Item", "Master Keycard", "use", "req", "susp", "note", "A master keycard issued to key members of staff. It opens any door in the hotel.", "desc") ),

    L.marker([64.56, -110.0], {icon: iconLocation, alt: "level0location", title: "Location: Ken Morgan Phone Call"}).bindLabel("Ken Morgan Phone Call").bindPopup( popUp("img", "Location", "Ken Morgan Phone Call", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([68.84, -141.5], {icon: iconCamera, alt: "level0camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[68.84, -141.5], [69.47, -142.6], [69.47, -139.9]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([64.41, -107.0], {icon: iconCamera, alt: "level0camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[64.41, -107.0], [65.38, -103.7], [63.54, -103.7]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([39.57, -114.3], {icon: iconCamera, alt: "level0camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[39.57, -114.3], [40.17, -117.4], [39.02, -117.4]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),

    L.marker([40.48, -115.8], {icon: iconLocked, alt: "level0locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),

]);

/* ==================================================================================================================================================================
    Level 1
================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([35.88, -111.3], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover in the Side Garden"}).bindLabel("Undercover in the Side Garden").bindPopup("<img src='img/map_bangkok/screenshots/enter_garden.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Side Garden</h1>"),
    L.marker([64.62, -137.9], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover at the Himmapan Bar"}).bindLabel("Undercover at the Himmapan Bar").bindPopup("<img src='img/map_bangkok/screenshots/enter_waiter.jpg'><h2>Starting Locaton</h2><h1>Undercover at the Himmapan Bar</h1>"),
    L.marker([63.68, -94.70], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover by the Security Shed"}).bindLabel("Undercover by the Security Shed").bindPopup("<img src='img/map_bangkok/screenshots/enter_sec.jpg'><h2>Starting Locaton</h2><h1>Undercover by the Security Shed</h1>"),
    L.marker([51.94, -116.0], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Undercover in the Restaurant Kitchen"}).bindLabel("Undercover in the Restaurant Kitchen").bindPopup("<img src='img/map_bangkok/screenshots/enter_kitchen.jpg'><h2>Starting Locaton</h2><h1>Undercover in the Restaurant Kitchen</h1>"),
    L.marker([61.98, -158.5], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Riverside Landing"}).bindLabel("Riverside Landing").bindPopup("<img src='img/map_bangkok/screenshots/enter_riverside.jpg'><h2>Starting Locaton</h2><h1>Riverside Landing</h1>"),
    L.marker([57.46, -172.4], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Speedboat"}).bindLabel("Speedboat").bindPopup("<img src='img/map_bangkok/screenshots/exit_speedboat.jpg'><h2>Exit Locaton</h2><h1>Speedboat</h1>"),
    L.marker([57.58, -98.17], {icon: iconExit, alt: "level1exit", title: "Exit Locaton: Tuk-Tuk"}).bindLabel("Tuk-Tuk").bindPopup("<img src='img/map_bangkok/screenshots/exit_tuktuk.jpg'><h2>Exit Locaton</h2><h1>Tuk-Tuk</h1><p class='req'>Requires Wrench</p>"),
    L.marker([61.89, -112.3], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Storage Room"}).bindLabel("Large Agency Pickup: Storage Room").bindPopup("<img src='img/map_bangkok/screenshots/ica_storage.jpg'><h2>Large Agency Pickup</h2><h1>Storage Room</h1>"),
    L.marker([37.61, -132.4], {icon: iconIcaStash, alt: "level1icastash", title: "Large Agency Pickup: Garden Shed"}).bindLabel("Large Agency Pickup: Garden Shed").bindPopup("<img src='img/map_bangkok/screenshots/ica_shed.jpg'><h2>Large Agency Pickup</h2><h1>Garden Shed</h1>"),
    L.marker([44.02, -116.4], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Ground Floor Restaurant Restroom"}).bindLabel("Small Agency Pickup: Ground Floor Restaurant Restroom").bindPopup("<img src='img/map_bangkok/screenshots/ica_restaurant.jpg'><h2>Small Agency Pickup</h2><h1>Ground Floor Restaurant Restroom</h1>"),

    L.marker([60.71, -102.8], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([53.82, -102.8], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([40.07, -111.7], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Pipe: Level 1-4").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 1-4</h1>"),

    L.marker([40.68, -123.6], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([36.27, -127.6], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([36.20, -132.8], {icon: iconPassage, alt: "level1passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([63.62, -134.8], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),

    L.marker([51.17, -104.5], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([52.37, -121.0], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([62.81, -104.5], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([63.25, -101.3], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([63.41, -121.5], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([45.49, -107.4], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([39.63, -118.2], {icon: iconStairsDown, alt: "level1stairsupdown"}),

]);

var level1weapons = L.layerGroup([

    L.marker([35.88, -109.1], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([63.56, -98.56], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Explosives
    L.marker([48.57, -108.1], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.18, -124.8], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([62.55, -122.2], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([69.79, -146.6], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([63.05, -91.18], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([53.27, -92.72], {icon: iconPropane, alt: "level1propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask (x2)").bindPopup(txtPropaneFlask),

    // Firearm
    L.marker([61.52, -94.61], {icon: iconFirearm, alt: "level1firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2").bindPopup(txtFusilG2),
    L.marker([61.50, -93.73], {icon: iconAmmo, alt: "level1ammo", title: "Weapon: Rifle Ammo"}).bindLabel("Rifle Ammo (x2)").bindPopup(txtAmmoRifle),

    // Lethal
    L.marker([41.64, -108.1], {icon: iconFireAxe, alt: "level1fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([63.15, -111.2], {icon: iconFireAxe, alt: "level1fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([46.37, -101.8], {icon: iconHatchet, alt: "level1hatchet", title: "Weapon: Hatchet"}).bindLabel("Hatchet").bindPopup(txtHatchet),
    L.marker([64.37, -123.5], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([58.10, -109.2], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([46.04, -115.2], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([49.18, -115.0], {icon: iconKnife, alt: "level1knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([53.06, -115.3], {icon: iconCleaver, alt: "level1cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),

    // Non-lethal
    L.marker([51.23, -118.0], {icon: iconCoconut, alt: "level1coconut", title: "Weapon: Coconut"}).bindLabel("Coconut").bindPopup(txtCoconut),
    L.marker([63.41, -112.7], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([34.95, -131.5], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([52.13, -94.87], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([44.08, -111.2], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([61.43, -95.66], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([62.02, -92.94], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([45.95, -98.08], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([64.51, -148.1], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level1poi = L.layerGroup([

    // Hiding Spot
    L.marker([68.76, -95.22], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.03, -94.74], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([50.81, -90], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([43.96, -102.2], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([70.37, -143.2], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([61.39, -110.8], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.45, -105.5], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([62.47, -116.3], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([44.93, -116.8], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([44.40, -108.9], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([50.37, -109.0], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([45.64, -111.0], {icon: iconHidingSpot, alt: "level1hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),

    // Conceal Item
    L.marker([41.17, -106.0], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.90, -108.9], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([62.47, -92.37], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([43.99, -97.69], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([40.14, -97.73], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -101.6], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -104.2], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -109.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -112.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -117.0], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([33.90, -119.6], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([34.99, -139.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([37.19, -142.9], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([41.96, -142.9], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([41.27, -135.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.77, -135.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([43.00, -135.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.65, -145.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([50.17, -145.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([51.39, -142.8], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.56, -142.8], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([55.40, -141.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([52.90, -135.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([51.42, -135.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([56.29, -131.8], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([58.53, -131.8], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([59.33, -141.0], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([38.99, -145.6], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([42.19, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([46.83, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([49.35, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([62.93, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([65.80, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([67.33, -151.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([67.42, -146.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([68.25, -149.2], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([69.83, -149.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([66.26, -137.6], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([56.51, -130.7], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([58.40, -130.7], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([64.12, -120.9], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([64.24, -103.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.80, -120.3], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([60.75, -119.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([59.66, -112.9], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([55.15, -112.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([60.82, -108.0], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.80, -108.0], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([42.65, -115.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.96, -119.6], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.46, -117.7], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([44.46, -115.2], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([45.61, -112.1], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([45.30, -103.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([47.27, -103.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([48.98, -103.4], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([49.38, -108.2], {icon: iconConceal, alt: "level1conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),

    // Weapon Crate
    L.marker([63.01, -89.86], {icon: iconWeaponCrate, alt: "level1weaponcrate", title: "Container: Weapon Crate"}).bindLabel("Weapon Crate"),

    // NPC
    L.marker([66.37, -122.3], {icon: iconNPC, alt: "level1npc", title: "NPC: Exterminator"}).bindLabel("Exterminator").bindPopup( popUp("exterminator", "NPC", "Exterminator", "use", "req", "susp", "note", "ingame", "desc") ),

    // Blend In
    L.marker([51.97, -114.8], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Kitchen Staff"),
    L.marker([42.45, -114.0], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Kitchen Staff"),
    L.marker([46.34, -104.2], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([42.58, -117.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([65.10, -109.3], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([62.45, -111.2], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([65.67, -117.5], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([65.47, -135.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([62.55, -94.43], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Hotel Security"),
    L.marker([46.64, -98.39], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Groundskeeper"),
    L.marker([36.94, -110.9], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Gardener"),
    L.marker([34.99, -125.9], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Guest"),
    L.marker([63.86, -141.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Guest"),
    L.marker([61.62, -136.1], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Guest"),
    L.marker([45.05, -150.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Guest"),
    L.marker([65.10, -138.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter"),
    L.marker([57.49, -109.0], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter"),
    L.marker([50.42, -124.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as Waiter"),

    // Sabotage
    L.marker([57.16, -97.16], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([67.16, -96.81], {icon: iconSabotage, alt: "level1sab-drum", title: "Sabotage: Gasoline Drum"}).bindLabel("Gasoline Drum").bindPopup( popGlobal(sabDrum, "all") ),
    L.marker([66.73, -97.20], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([65.83, -96.89], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([58.00, -96.24], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([54.26, -121.2], {icon: iconSabotage, alt: "level1sab-coconuts", title: "Sabotage: Coconuts"}).bindLabel("Coconuts").bindPopup( popUp("img", "Sabotage", "Coconuts", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([59.28, -114.6], {icon: iconSabotage, alt: "level1sab-coconuts", title: "Sabotage: Coconuts"}).bindLabel("Coconuts").bindPopup( popUp("img", "Sabotage", "Coconuts", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([55.55, -116.7], {icon: iconSabotage, alt: "level1sab-coconuts", title: "Sabotage: Coconuts"}).bindLabel("Coconuts").bindPopup( popUp("img", "Sabotage", "Coconuts", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([56.21, -128.7], {icon: iconSabotage, alt: "level1sab-coconuts", title: "Sabotage: Coconuts"}).bindLabel("Coconuts").bindPopup( popUp("img", "Sabotage", "Coconuts", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([44.37, -127.5], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([46.28, -127.5], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([50.54, -127.5], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([50.54, -132.2], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([48.19, -132.2], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([44.37, -132.2], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),

    // Poison
    L.marker([47.54, -122.7], {icon: iconPoison, alt: "level1poison", title: "Poison: Kitchen Staff"}).bindLabel("Cooking Pot (Kitchen Staff)").bindPopup( popPoison("Cooking Pot", "Kitchen Staff", "Waiter / Kitchen Staff", "note") ),
    L.marker([46.76, -125.2], {icon: iconPoison, alt: "level1poison", title: "Poison: Ken Morgan"}).bindLabel("Dish (x5) (Ken Morgan)").bindPopup( popPoison("Dish", "Ken Morgan", "Waiter / Kitchen Staff", "note") ),
    L.marker([61.52, -90.74], {icon: iconPoison, alt: "level1poison", title: "Poison: Hotel Security"}).bindLabel("Coffee Glass (Hotel Security)").bindPopup( popPoison("Coffee Glass", "Hotel Security", "Waiter / Kitchen Staff", "note") ),
    L.marker([57.72, -92.63], {icon: iconPoison, alt: "level1poison", title: "Poison: Jordan Cross Bodyguard"}).bindLabel("Water Bottle (Jordan Cross' Bodyguard)").bindPopup( popPoison("Water Bottle", "Jordan Cross' Bodyguard", "Waiter / Kitchen Staff", "note") ),
    L.marker([36.63, -140.8], {icon: iconPoison, alt: "level1poison", title: "Poison: Morgans Bodyguard"}).bindLabel("Water Bottle (Morgan's Bodyguard)").bindPopup( popPoison("Water Bottle", "Morgan's Bodyguard", "Waiter / Kitchen Staff", "note") ),
    L.marker([36.91, -105.5], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([53.90, -116.0], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([57.23, -110.1], {icon: iconPoison, alt: "level1poison", title: "Poison: Dexy Barat"}).bindLabel("Glass of White Wine (Dexy Barat)").bindPopup( popPoison("Glass of White Wine", "Dexy Barat", "Waiter / Kitchen Staff", "note") ),
    L.marker([58.53, -109.9], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([40.27, -151.4], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of Champagne").bindPopup( popPoison("Glass of Champagne", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([43.67, -151.6], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([63.97, -138.4], {icon: iconPoison, alt: "level1poison"}).bindLabel("Bottle of Beer").bindPopup( popPoison("Bottle of Beer", "Unknown", "Waiter / Kitchen Staff", "note") ),

    // Distraction
    L.marker([44.87, -97.95], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([34.95, -127.1], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([66.44, -119.2], {icon: iconDistraction, alt: "level1dis-fumigation", title: "Distraction: Fumigation Unit"}).bindLabel("Fumigation Unit").bindPopup( popUp("img", "Distraction", "Fumigation Unit", "Turn On/Off", "req", "Exterminator", "note", "ingame", "desc") ),
    L.marker([66.46, -106.4], {icon: iconDistraction, alt: "level1dis-fumigation", title: "Distraction: Fumigation Unit"}).bindLabel("Fumigation Unit").bindPopup( popUp("img", "Distraction", "Fumigation Unit", "Turn On/Off", "req", "Exterminator", "note", "ingame", "desc") ),
    L.marker([41.07, -115.2], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([42.00, -115.2], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([43.77, -117.8], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([43.77, -115.2], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([50.17, -112.1], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),

    // Intel
    L.marker([57.39, -121.5], {icon: iconIntel, alt: "level1intel", title: "Intel: A Secret Meeting"}).bindLabel("A Secret Meeting").bindPopup( popUp("meeting", "Intel", "A Secret Meeting", "Listen to the conversation", "req", "susp", "note", "Ken Morgan is about to meet with Dexy Barat in the basement linen room. This must be the reason for Morgan's mysterious visit.", "desc") ),
    L.marker([48.71, -116.4], {icon: iconIntel, alt: "level1intel", title: "Intel: Jordan Cross Birthday"}).bindLabel("Jordan Cross' Birthday").bindPopup( popUp("birthday", "Intel", "Jordan Cross Birthday", "Listen to the conversation", "req", "susp", "note", "Today is Jordan Cross' twenty-seventh birthday, and manager Dexy Barat plans a surprise party on the crew floor. A special vegan birthday cake is being prepared by the hotel kitchen staff.", "desc") ),
    L.marker([66.19, -135.5], {icon: iconIntel, alt: "level1intel", title: "Intel: Pest Problem"}).bindLabel("Pest Problem").bindPopup( popUp("pest", "Intel", "Pest Problem", "Listen to the conversation", "req", "susp", "note", "The hotel is infected by woodborers, and management has called an exterminator. He has sealed off a number of rooms and is currently fumigating on the ground floor.", "desc") ),
    L.marker([63.13, -148.9], {icon: iconIntel, alt: "level1intel", title: "Intel: The Ladies Man"}).bindLabel("The Ladies Man").bindPopup( popUp("ladiesman", "Intel", "The Ladies Man", "Listen to the conversation", "req", "susp", "note", "One of the sound crew, Julian, has a reputation for being quite the ladies' man. His latest conquest: former sitcom star Jackie Carrington. Apparently, this Julian is at Mrs. Carrington's hotel room, and he carries a package for producer Wes Liston.", "desc") ),
    L.marker([63.54, -148.0], {icon: iconIntel, alt: "level1intel", title: "Intel: Faulty Microphone"}).bindLabel("Faulty Microphone").bindPopup( popUp("microphone", "Intel", "Faulty Microphone", "Listen to the conversation", "req", "susp", "note", "Producer Wes Liston has ordered a vintage Branson MD-2 condenser microphone. This rare model was removed from the market in the 1960s, after causing a number of electric shock fatalities. Apparently, a production defect makes the MD-2 short-circuit at high voltages. Wes Liston is nothing if not uncompromising.", "desc") ),
    L.marker([36.87, -131.7], {icon: iconIntel, alt: "level1intel", title: "Intel: The Mysterious Recording"}).bindLabel("The Mysterious Recording").bindPopup( popUp("recording", "Intel", "The Mysterious Recording", "Listen to the conversation", "req", "susp", "note", "Apparently, Jordan Cross listens to a tape at night of himself and woman fighting. One of the security guards recognize the woman's voice as that of Hannah Highmoore, Cross' late girlfriend. Sounds like the clients' hunch was right.", "desc") ),
    L.marker([58.05, -98.87], {icon: iconIntel, alt: "level1intel", title: "Intel: A Local Souvenir"}).bindLabel("A Local Souvenir").bindPopup( popUp("souvenir", "Intel", "A Local Souvenir", "Listen to the conversation", "req", "susp", "note", "Ken Morgan has expressed interest in buying the hotel gardener's aging tuk-tuk. But first he needs to get the engine working.", "desc") ),
    L.marker([62.71, -93.33], {icon: iconIntel, alt: "level1intel", title: "Intel: Manager Note: On Roof Repairs"}).bindLabel("Manager Note: On Roof Repairs").bindPopup( popUp("noteroof", "Intel", "Manager Note: On Roof Repairs", "Examine", "req", "susp", "note", "A note from the hotel manager: The atrium roof is off limits to hotel guests - especially while undergoing repairs! Failing to comply will result in immediate termination! N.B. This, of course, does not apply to young Master Cross, his entourage and security team.", "desc") ),
    L.marker([70.67, -137.6], {icon: iconIntel, alt: "level1intel", title: "Intel: Manager Note: On Emperors Suite"}).bindLabel("Manager Note: On Emperor's Suite").bindPopup( popUp("noteemperor", "Intel", "Manager Note: Emperor's Suite", "Examine", "req", "susp", "note", "A note from the hotel manager: The Emperor's Suite and the entire 2nd floor of Wing A is managed by Master Cross' private security. For the duration of their stay, hotel security is NOT allowed access. Failure to comply will result in immediate termination! N.B. Hotel and kitchen staff are allowed IF required.", "desc") ),
    L.marker([62.30, -132.0], {icon: iconIntel, alt: "level1intel", title: "Intel: Exterminators Schedule"}).bindLabel("Exterminator's Schedule").bindPopup( popUp("exterminator", "Intel", "Exterminator's Schedule", "Examine", "req", "susp", "note", "The extermintaor plans to inspect the Emperor's suite some time today. On his request, the hotel manager will clear out the recording studio and bring everyone into the atrium for the duration of the inspection.", "desc") ),
    L.marker([57.39, -123.3], {icon: iconIntel, alt: "level1intel", title: "Intel: Guest List"}).bindLabel("Guest List").bindPopup( popUp("guestlist", "Intel", "Guest List", "Examine", "req", "susp", "note", "The Himmapan guest list. Tobias Rieper is in room 205. Jordan Cross' suite is unlisted, but his trusty manager Dexy Barat resides in room 404 within the Emperor's Suite. The hotel is sparsely occupied, no doubt due to The Class' recording session. However, I do spot former sitcom star Jackie Carrington, residing in room 207. I believe one of our agents eliminated her fourth husband.", "desc") ),
    L.marker([48.83, -110.1], {icon: iconIntel, alt: "level1intel", title: "Intel: Manager Note: On Room Service"}).bindLabel("Manager Note: On Room Service").bindPopup( popUp("noteroom", "Intel", "Manager Note: On Room Service", "Examine", "req", "susp", "note", "A note from the hotel manager: Last night, Mrs. Jackie Carrington in Room 207 ordered a voluptuous serving of oysters, champagne, honey and whipped cream, while Miss Dexy Barat in Room 404 ordered a Skinny Bitch and a plate of celery sticks. However, I am shocked and ashamed to learn that neither was delivered! Make no mistake; a repetition of such shameful negligence WILL result in everyone's immediate termination!", "desc") ),

    // Item
    L.marker([62.93, -98.39], {icon: iconItem, alt: "level1item", title: "Item: Insecticide"}).bindLabel("Insecticide").bindPopup( popUp("insecticide", "Item", "Insecticide", "use", "req", "susp", "note", "A potent insecticide. The fumes will knock people unconscious, but are otherwise relatively harmless.", "desc") ),
    L.marker([50.51, -115.9], {icon: iconItem, alt: "level1item", title: "Item: Cake Topper"}).bindLabel("Cake Topper").bindPopup( popUp("cake", "Item", "Cake Topper", "use", "req", "susp", "note", "A sugar cake topper shaped as the number 27. It has been specially made for Jordan Cross' birthday cake.", "desc") ),
    L.marker([57.37, -126.2], {icon: iconItem, alt: "level1item", title: "Item: Room 205 Keycard"}).bindLabel("Room 205 Keycard").bindPopup( popUp("room205", "Item", "Room 205 Keycard", "use", "req", "susp", "Talk to the receptionist while wearing Agent 47 Suit", "The keycard for room 205. This is your room, 47.", "desc") ),

    // Interaction
    L.marker([57.01, -98.48], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Tuk-Tuk Engine"}).bindLabel("Tuk-Tuk Engine").bindPopup( popUp("tuktuk", "Interaction", "Tuk-Tuk Engine", "Repair", "req", "susp", "note", "ingame", "desc") ),
    L.marker([61.41, -116.4], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Ventilation System"}).bindLabel("Ventilation System").bindPopup( popUp("vent", "Interaction", "Ventilation System", "Pollute Ventilation", "Insecticide", "all", "note", "ingame", "desc") ),
    L.marker([57.39, -125.2], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to the Receptionist"}).bindLabel("Talk to the Receptionist").bindPopup( popUp("img", "Interaction", "Talk to the Receptionist", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([59.57, -104.5], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Talk to Mrs Mookjai"}).bindLabel("Talk to Mrs. Mookjai").bindPopup( popUp("img", "Interaction", "Talk to Mrs. Mookjai", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([56.43, -124.9], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Queen Suite Documents"}).bindLabel("Queen Suite Documents").bindPopup( popUp("documents", "Interaction", "Queen Suite Documents", "Place Note", "Note from Dexy", "susp", "note", "ingame", "desc") ),

    // Cameras
    L.marker([62.10, -93.91], {icon: iconEvidence, alt: "level1evidence", title: "Camera Recorder: Hotel"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    L.marker([58.21, -91.66], {icon: iconCamera, alt: "level1camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[58.21, -91.66], [59.73, -93.38], [59.73, -89.60]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([48.19, -102.3], {icon: iconCamera, alt: "level1camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[48.19, -102.3], [46.86, -99.05], [49.23, -99.05]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([64.05, -121.8], {icon: iconCamera, alt: "level1camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[64.05, -121.8], [65.34, -123.7], [65.34, -119.6]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([63.68, -111.3], {icon: iconCamera, alt: "level1camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[63.68, -111.3], [64.56, -109.0], [62.79, -109.0]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),

    // Locked
    L.marker([48.16, -103.3], {icon: iconLocked, alt: "level1locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([40.64, -107.1], {icon: iconLocked, alt: "level1locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),

]);

/* ==================================================================================================================================================================
    Level 2
================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([40.17, -108.5], {icon: iconIcaStash, alt: "level2icastash", title: "Small Agency Pickup: 1st Floor South Wing Balcony"}).bindLabel("Small Agency Pickup: 1st Floor South Wing Balcony").bindPopup("<img src='img/map_bangkok/screenshots/ica_balcony.jpg'><h2>Small Agency Pickup</h2><h1>1st Floor South Wing Balcony</h1>"),
    L.marker([68.80, -114.1], {icon: iconIcaStash, alt: "level2icastash", title: "Small Agency Pickup: Room 102 Bathroom"}).bindLabel("Small Agency Pickup: Room 102 Bathroom").bindPopup("<img src='img/map_bangkok/screenshots/ica_bathroom.jpg'><h2>Small Agency Pickup</h2><h1>Room 102 Bathroom</h1>"),

    L.marker([40.07, -111.7], {icon: iconWayUpDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 1-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-4</h1>"),
    L.marker([69.34, -125.7], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-4</h1>"),

    L.marker([52.50, -121.2], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([51.15, -105.9], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([62.87, -105.8], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),

]);

var level2weapons = L.layerGroup([

    L.marker([64.32, -128.4], {icon: iconPoisons, alt: "level2weapoison", title: "Weapon: Lethal Poison Vial"}).bindLabel("Lethal Poison Vial").bindPopup(txtLethalPoison),

    L.marker([61.45, -121.9], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.18, -109.1], {icon: iconExtinguisher, alt: "level2extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([62.10, -121.9], {icon: iconFirearm, alt: "level2firearm", title: "Weapon: Rifle Fusil G2"}).bindLabel("Assault Rifle: Fusil G2 (x2)").bindPopup(txtFusilG2),
    L.marker([63.68, -112.2], {icon: iconFirearm, alt: "level2firearm", title: "Weapon: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),
    L.marker([63.25, -121.9], {icon: iconFirearm, alt: "level2firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
    L.marker([62.69, -121.9], {icon: iconAmmo, alt: "level2ammo", title: "Weapon: Rifle Ammo"}).bindLabel("Rifle Ammo (x4)").bindPopup(txtAmmoRifle),
    L.marker([63.62, -121.9], {icon: iconAmmo, alt: "level2ammo", title: "Weapon: Shotgun Ammo"}).bindLabel("Shotgun Ammo (x2)").bindPopup(txtAmmoRifle),

    L.marker([50.42, -119.6], {icon: iconCoconut, alt: "level2coconut", title: "Weapon: Coconut"}).bindLabel("Coconut").bindPopup(txtCoconut),
    L.marker([62.77, -120.2], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([61.85, -113.2], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([63.11, -118.5], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([62.69, -113.2], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([63.11, -116.0], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([61.56, -115.9], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([61.56, -117.4], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([61.85, -120.1], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([61.56, -118.6], {icon: iconBaton, alt: "level2baton", title: "Weapon: Police Baton"}).bindLabel("Police Baton").bindPopup(txtBaton),

    L.marker([45.64, -117.2], {icon: iconKnife, alt: "level2knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([63.70, -103.3], {icon: iconFireAxe, alt: "level2fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([63.76, -118.6], {icon: iconFireAxe, alt: "level2fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),

]);

var level2poi = L.layerGroup([

    L.marker([51.42, -119.5], {icon: iconHidingSpot, alt: "level2hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.27, -123.0], {icon: iconHidingSpot, alt: "level2hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([61.41, -112.0], {icon: iconHidingSpot, alt: "level2hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    
    L.marker([41.24, -125.2], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([47.30, -119.5], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([51.53, -117.9], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([41.14, -105.8], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([61.33, -111.0], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([62.51, -111.0], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([61.35, -123.0], {icon: iconConceal, alt: "level2conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),

    L.marker([63.68, -120.6], {icon: iconWeaponCrate, alt: "level2weaponcrate", title: "Container: Weapon Crate"}).bindLabel("Weapon Crate"),

    L.marker([63.70, -113.1], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Hotel Security"}).bindLabel("Hotel Security").bindPopup( popUp("security", "Disguise", "Hotel Security", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([52.42, -119.5], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Waiter"),
    L.marker([50.84, -116.0], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Guest"),
    L.marker([67.01, -121.5], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([67.23, -118.9], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([67.35, -116.7], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([62.65, -114.3], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In as Hotel Security"),

    L.marker([43.86, -112.5], {icon: iconNPC, alt: "level2npc", title: "NPC: Abel de Silva"}).bindLabel("Abel de Silva").bindPopup( popUp("abel", "NPC", "Abel de Silva", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([45.58, -118.7], {icon: iconPoison, alt: "level2poison", title: "Poison: Recording Crew"}).bindLabel("Glass of Red Wine (x2) (Recording Crew)").bindPopup( popPoison("Glass of Red Wine", "Recording Crew", "Waiter / Kitchen Staff", "note") ),
    L.marker([52.24, -116.4], {icon: iconPoison, alt: "level2poison", title: "Poison: Recording Crew"}).bindLabel("Coffee Glass (Recording Crew)").bindPopup( popPoison("Coffee Glass", "Recording Crew", "Waiter / Kitchen Staff", "note") ),
    L.marker([51.53, -116.1], {icon: iconPoison, alt: "level2poison", title: "Poison: Abel de Silva"}).bindLabel("Glass of Champagne (Abel de Silva)").bindPopup( popPoison("Glass of Champagne", "Abel de Silva", "Waiter / Kitchen Staff", "note") ),
    L.marker([50.26, -116.3], {icon: iconPoison, alt: "level2poison"}).bindLabel("Glass of Champagne").bindPopup( popPoison("Glass of Champagne", "Unknown", "Waiter / Kitchen Staff", "note") ),

    L.marker([67.90, -108.9], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([62.55, -131.6], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([66.56, -131.6], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([67.87, -119.8], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),

    L.marker([50.17, -117.9], {icon: iconDistraction, alt: "level2dis-sound", title: "Distraction: Sound System"}).bindLabel("Sound System").bindPopup( popGlobal(disSound, "susp") ),
    L.marker([67.87, -117.8], {icon: iconDistraction, alt: "level2dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([67.87, -111.7], {icon: iconDistraction, alt: "level2dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([61.39, -131.6], {icon: iconDistraction, alt: "level2dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([65.51, -131.6], {icon: iconDistraction, alt: "level2dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([67.85, -114.1], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([63.70, -128.3], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.64, -128.4], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.85, -115.4], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([62.75, -123.0], {icon: iconDistraction, alt: "level2dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),

    L.marker([49.26, -108.0], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([63.76, -116.0], {icon: iconAlarm, alt: "level2alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([45.67, -125.2], {icon: iconIntel, alt: "level2intel", title: "Intel: The Replacement Drummer"}).bindLabel("The Replacement Drummer").bindPopup( popUp("drummer", "Intel", "The Replacement Drummer", "Listen to the conversation", "req", "susp", "note", "The Class' regular drummer has unexpectedly quit the band, and Monumental Records has flown in a replacement: upcoming indie drummer Abel de Silva, who is currently waiting to audition in the restaurant lounge.", "desc") ),
    L.marker([52.64, -113.8], {icon: iconIntel, alt: "level2intel", title: "Intel: The Ladies Man"}).bindLabel("The Ladies Man").bindPopup( popUp("ladiesman", "Intel", "The Ladies Man", "Listen to the conversation", "req", "susp", "note", "One of the sound crew, Julian, has a reputation for being quite the ladies' man. His latest conquest: former sitcom star Jackie Carrington. Apparently, this Julian is at Mrs. Carrington's hotel room, and he carries a package for producer Wes Liston.", "desc") ),
    L.marker([61.77, -114.4], {icon: iconIntel, alt: "level2intel", title: "Intel: Manager Note: On Penthouse Safe"}).bindLabel("Manager Note: On Penthouse Safe").bindPopup( popUp("notesafe", "Intel", "Manager Note: On Penthouse Safe", "Examine", "req", "susp", "note", "A note from the hotel manager: Ms. Dexy Barat has requested the use of one of our safes. The Emperor's Suite, left guest room. I expect you to reset the password and clear any remaining content. When Sheikh Al-Ghazali stayed here, he found a half eaten sandwich inside. Failing to prevent similar incidents in the future will result in immediate termination!", "desc") ),

    L.marker([68.72, -121.1], {icon: iconItem, alt: "level2item", title: "Item: Master Keycard"}).bindLabel("Master Keycard").bindPopup( popUp("masterkeycard", "Item", "Master Keycard", "use", "req", "susp", "note", "A master keycard issued to key members of staff. It opens any door in the hotel.", "desc") ),
    L.marker([62.26, -115.2], {icon: iconItem, alt: "level2item", title: "Item: Master Keycard"}).bindLabel("Master Keycard").bindPopup( popUp("masterkeycard", "Item", "Master Keycard", "use", "req", "susp", "note", "A master keycard issued to key members of staff. It opens any door in the hotel.", "desc") ),
    L.marker([50.54, -114.9], {icon: iconItem, alt: "level2item", title: "Item: Room 207 Keycard"}).bindLabel("Room 207 Keycard").bindPopup( popUp("room207", "Item", "Room 207 Keycard", "use", "req", "susp", "Blend In as a Guest and wait for Jackie Carrington (woman in a dress) to give you the keycard", "The keycard for room 207.", "desc") ),

    L.marker([62.30, -120.2], {icon: iconEvidence, alt: "level2evidence", title: "Camera Recorder: Hotel"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    L.marker([63.68, -111.3], {icon: iconCamera, alt: "level2camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[63.68, -111.3], [64.56, -109.0], [62.79, -109.0]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),
    L.marker([64.05, -121.8], {icon: iconCamera, alt: "level2camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[64.05, -121.8], [65.34, -123.7], [65.34, -119.6]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),

    L.marker([44.77, -105.6], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([62.08, -111.5], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([66.63, -108.6], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([63.93, -117.4], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([65.98, -125.7], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([62.10, -125.7], {icon: iconLocked, alt: "level2locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),

]);

/* ==================================================================================================================================================================
    Level 3
================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([62.24, -109.8], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Undercover in the 2nd Floor Hallway"}).bindLabel("Undercover in the 2nd Floor Hallway").bindPopup("<img src='img/map_bangkok/screenshots/enter_crew.jpg'><h2>Starting Locaton</h2><h1>Undercover in the 2nd Floor Hallway</h1>"),
    L.marker([41.93, -107.4], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: 47s Suite"}).bindLabel("47's Suite").bindPopup("<img src='img/map_bangkok/screenshots/enter_suite.jpg'><h2>Starting Locaton</h2><h1>47's Suite</h1>"),
    L.marker([42.03, -105.3], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: 47s Suite"}).bindLabel("Large Agency Pickup: 47's Suite").bindPopup("<img src='img/map_bangkok/screenshots/ica_suite.jpg'><h2>Large Agency Pickup</h2><h1>47's Suite</h1>"),

    L.marker([61.07, -118.3], {icon: iconPassage, alt: "level3passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([61.07, -113.5], {icon: iconPassage, alt: "level3passage"}).bindLabel("Climb Through").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    L.marker([60.71, -102.8], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([53.82, -102.8], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-3").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-3</h1>"),
    L.marker([40.07, -111.7], {icon: iconWayUpDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 1-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-4</h1>"),
    L.marker([69.34, -125.7], {icon: iconWayUpDown, alt: "level3waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-4</h1>"),

    L.marker([51.15, -105.9], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),
    L.marker([62.87, -105.8], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),

]);

var level3weapons = L.layerGroup([

    L.marker([64.18, -104.5], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([43.58, -134.0], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([42.45, -134.0], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([65.64, -104.4], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),

    L.marker([64.12, -112.8], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.58, -123.0], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.66, -111.2], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([61.91, -118.4], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([61.54, -114.3], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([61.41, -122.0], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),

    L.marker([45.55, -134.2], {icon: iconGolfClub, alt: "level3golfclub", title: "Weapon: Golf Club"}).bindLabel("Golf Club").bindPopup(txtGolfClub),
    L.marker([62.59, -122.3], {icon: iconSoda, alt: "level3sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([66.87, -103.4], {icon: iconSoda, alt: "level3sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([64.03, -123.7], {icon: iconPoolBall, alt: "level3poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),

    L.marker([63.78, -103.3], {icon: iconFireAxe, alt: "level3fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([48.34, -103.4], {icon: iconFireAxe, alt: "level3fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([41.27, -103.8], {icon: iconOpener, alt: "level3opener", title: "Weapon: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
    L.marker([62.57, -116.0], {icon: iconKnife, alt: "level3knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([67.35, -111.4], {icon: iconKnife, alt: "level3knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),

]);

var level3poi = L.layerGroup([
    
    L.marker([51.75, -123.0], {icon: iconHidingSpot, alt: "level3hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([60.82, -115.9], {icon: iconHidingSpot, alt: "level3hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([62.73, -108.9], {icon: iconHidingSpot, alt: "level3hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.66, -112.1], {icon: iconHidingSpot, alt: "level3hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([68.52, -105.2], {icon: iconHidingSpot, alt: "level3hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),

    L.marker([47.57, -103.4], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([51.72, -111.2], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([49.55, -115.8], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([51.42, -112.1], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.17, -114.8], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.17, -119.4], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([53.87, -126.0], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([60.88, -125.8], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([60.82, -111.5], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([61.37, -110.6], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([63.76, -116.3], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([61.39, -124.9], {icon: iconConceal, alt: "level3conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),

    L.marker([42.19, -127.9], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Recording Crew"}).bindLabel("Recording Crew").bindPopup( popUp("crew", "Disguise", "Recording Crew", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([42.29, -132.4], {icon: iconNPC, alt: "level3npc", title: "NPC: Jackie Carrington"}).bindLabel("Jackie Carrington").bindPopup( popUp("jackie", "NPC", "Jackie Carrington", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([68.60, -120.8], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([67.08, -120.1], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([67.70, -110.7], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([67.30, -110.4], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([68.52, -111.4], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([68.75, -107.9], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([63.60, -118.7], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([62.28, -113.9], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([64.75, -106.3], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([45.67, -105.6], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([51.01, -123.4], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as Hotel Staff"),

    L.marker([66.53, -131.6], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([62.55, -131.6], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([67.92, -120.7], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([67.84, -108.8], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([62.79, -120.3], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([62.79, -114.6], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([43.03, -108.8], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([42.90, -120.1], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([45.33, -132.0], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([51.69, -132.0], {icon: iconSabotage, alt: "level3sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([64.75, -104.9], {icon: iconSabotage, alt: "level3sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[68.49, -113.4], [64.75, -104.9], [64.07, -111.9]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level3sab-wire"}),
        L.marker([64.07, -111.9], {icon: iconPointRed, alt: "level3sab-wire"}).bindLabel("Wire Plug").bindPopup( popUp("img", "Sabotage", "Wire Plug", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),

    L.marker([68.76, -106.9], {icon: iconPoison, alt: "level3poison", title: "Poison: Jordan Cross Bodyguard"}).bindLabel("Appetizers (Jordan Cross' Bodyguard)").bindPopup( popPoison("Appetizers", "Jordan Cross' Bodyguard", "Kitchen Staff", "note") ),
    L.marker([62.16, -117.2], {icon: iconPoison, alt: "level3poison", title: "Poison: Jordan Cross"}).bindLabel("Birthday Cake (Jordan Cross)").bindPopup( popPoison("Birthday Cake", "Jordan Cross", "Kitchen Staff", "note") ),
    L.marker([61.98, -121.0], {icon: iconPoison, alt: "level3poison"}).bindLabel("Glass of Red Wine").bindPopup( popPoison("Glass of Red Wine", "Unknown", "Kitchen Staff", "note") ),
    L.marker([67.92, -119.5], {icon: iconPoison, alt: "level3poison", title: "Poison: Recording Crew"}).bindLabel("Shisha Pipe (Recording Crew)").bindPopup( popPoison("Shisha Pipe", "Recording Crew", "Kitchen Staff", "note") ),
    L.marker([67.49, -118.6], {icon: iconPoison, alt: "level3poison", title: "Poison: Recording Crew"}).bindLabel("Bottle of Beer (x2) (Recording Crew)").bindPopup( popPoison("Bottle of Beer", "Recording Crew", "Kitchen Staff", "note") ),

    L.marker([43.48, -130.6], {icon: iconDistraction, alt: "level3dis-radio", title: "Distraction: Radio"}).bindLabel("Clock Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([43.92, -126.7], {icon: iconDistraction, alt: "level3dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([65.56, -131.6], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([61.33, -131.6], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([67.92, -117.7], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([67.18, -105.3], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([53.14, -131.7], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([47.04, -131.7], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([42.71, -117.9], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([42.71, -111.6], {icon: iconDistraction, alt: "level3dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([43.03, -114.2], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([43.03, -115.5], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([43.00, -126.3], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([49.89, -126.4], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.80, -114.3], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.80, -115.4], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([63.80, -128.5], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([67.75, -128.5], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([68.49, -113.4], {icon: iconDistraction, alt: "level3dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),

    L.marker([49.43, -108.2], {icon: iconAlarm, alt: "level3alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([67.45, -116.6], {icon: iconIntel, alt: "level3intel", title: "Intel: Message for Ken Morgan"}).bindLabel("Message for Ken Morgan").bindPopup( popUp("message", "Intel", "Message for Ken Morgan", "Listen to the conversation", "req", "susp", "note", "Dexy Barat has asked a member of the sound crew to deliver a message to reception. The envelope is addressed to the occupant of the Queen Suite, aka Ken Morgan and likely contains directions on when and where to meet. Whatever business Barat and Morgan have, they are likely to do so in secret.", "desc") ),
    L.marker([62.59, -118.5], {icon: iconIntel, alt: "level3intel", title: "Intel: Jordan Cross Birthday"}).bindLabel("Jordan Cross' Birthday").bindPopup( popUp("birthday", "Intel", "Jordan Cross Birthday", "Listen to the conversation", "req", "susp", "note", "Today is Jordan Cross' twenty-seventh birthday, and manager Dexy Barat plans a surprise party on the crew floor. A special vegan birthday cake is being prepared by the hotel kitchen staff.", "desc") ),
    L.marker([57.46, -118.2], {icon: iconIntel, alt: "level3intel", title: "Intel: Cracked Glass Panel"}).bindLabel("Cracked Glass Panel").bindPopup( popUp("glass", "Intel", "Cracked Glass Panel", "Listen to the conversation", "req", "susp", "note", "There is a cracked galss panel in the archway above the hotel's main entrance. The repairmen contemplate how to remove the glass in one piece before one of the rowdy crewmen cause an accident.", "desc") ),
    L.marker([45.67, -107.1], {icon: iconIntel, alt: "level3intel", title: "Intel: Manager Note: On the Closing of Wing A"}).bindLabel("Manager Note: On the Closing of Wing A").bindPopup( popUp("notewinga", "Intel", "Manager Note: On the Closing of Wing A", "Examine", "req", "susp", "note", "A note from the hotel manager: We are honored b the presence of young Master Cross and his entourage, who will occupy the Emperor's Suite for the following weeks. Because of this, Wing A is closed to the public! Only staff and members of Mr. Cross' entourage may enter! Failing to comply will result in immediate termination!", "desc") ),
    L.marker([50.42, -123.0], {icon: iconIntel, alt: "level3intel", title: "Intel: Manager Note: On the Occupant of Room 207"}).bindLabel("Manager Note: On the Occupant of Room 207").bindPopup( popUp("noteroom207", "Intel", "Manager Note: On the Occupant of Room 207", "Examine", "req", "susp", "note", "A note from the hotel manager: Mrs. Carrington on 207 can be a bit of a handful. Please ensure the bar is suitably stocked with plenty of pinot and the smoking lounge has the ventilation system set to high. Make sure you listen at the door before entering her suite as she often has company of the male persuasion. Finally, she has requested a bottle of sunscreen enriched with vitamin e to help protect her tattoos from the sun. Get two bottles to her room.", "desc") ),

    L.marker([66.99, -115.4], {icon: iconItem, alt: "level3item", title: "Item: Note From Dexy"}).bindLabel("Note From Dexy").bindPopup( popUp("img", "Item", "Note From Dexy", "use", "req", "susp", "Carried by a Recording Crew member", "ingame", "desc") ),
    L.marker([41.24, -130.9], {icon: iconItem, alt: "level3item", title: "Item: Branson MD-2 Microphone"}).bindLabel("Branson MD-2 Microphone").bindPopup( popUp("microphone", "Item", "Branson MD-2 Microphone", "use", "req", "susp", "note", "A vintage Branson MD-2 microphone. This rare model was removed from the market in the 1960s, after causing a number of electric shock fatalities. Apparently, production defect makes the MD-2 short-circuit at hight voltages.", "desc") ),

    L.marker([41.27, -111.0], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Telephone"}).bindLabel("Telephone").bindPopup( popUp("telephone", "Interaction", "Telephone", "Call Room Service", "Agent 47 Suit", "susp", "note", "ingame", "desc") ),
    L.marker([62.85, -117.2], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Birthday Cake"}).bindLabel("Birthday Cake").bindPopup( popUp("cake", "Interaction", "Birthday Cake", "Tamper", "Cake Topper", "Kitchen Staff / Waiter", "note", "ingame", "desc") ),
   
    L.marker([57.44, -130.4], {icon: iconLocation, alt: "level3location", title: "Location: Jordan Cross and Abel de Silva Meeting Spot"}).bindLabel("Jordan Cross and Abel de Silva Meeting Spot").bindPopup( popUp("img", "Location", "Jordan Cross and Abel de Silva Meeting Spot", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([53.72, -109.8], {icon: iconCamera, alt: "level3camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[53.72, -109.8], [54.72, -107.7], [54.72, -112.2]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([53.80, -124.0], {icon: iconCamera, alt: "level3camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[53.80, -124.0], [54.72, -122.0], [54.72, -126.3]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([63.68, -111.3], {icon: iconCamera, alt: "level3camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[63.68, -111.3], [64.56, -109.0], [62.79, -109.0]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([64.05, -121.8], {icon: iconCamera, alt: "level3camera", title: "Camera: Hotel"}).bindLabel("Security Camera"),
    L.polygon([[64.05, -121.8], [65.34, -123.7], [65.34, -119.6]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),

    L.marker([45.27, -108.5], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard / Room 205 Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard or Room 205 Keycard</p>"),
    L.marker([45.27, -120.1], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([53.51, -124.1], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([52.32, -125.8], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([46.46, -125.8], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard / Room 207 Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard or Room 207 Keycard</p>"),
    L.marker([62.06, -125.7], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),
    L.marker([66.01, -125.7], {icon: iconLocked, alt: "level3locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),

    L.marker([63.39, -107.2], {icon: iconSeccheck, alt: "level3seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Jordan Cross' Security</h1><p class='note'>Will be frisked if disguised as Kitchen Staff</p>"),

]);

/* ==================================================================================================================================================================
    Level 4
================================================================================================================================================================== */

var level4other = L.layerGroup([

    L.marker([64.66, -131.7], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: Recording Studio"}).bindLabel("Large Agency Pickup: Recording Studio").bindPopup("<img src='img/map_bangkok/screenshots/ica_studio.jpg'><h2>Large Agency Pickup</h2><h1>Recording Studio</h1>"),

    L.marker([40.07, -111.7], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 1-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 1-4</h1>"),
    L.marker([69.34, -125.7], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-4</h1>"),

    L.marker([62.81, -107.3], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([51.17, -107.3], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([43.99, -122.3], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([50.65, -122.3], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([63.19, -122.3], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([67.28, -122.3], {icon: iconStairsUp, alt: "level4stairsupdown"}),

]);

var level4weapons = L.layerGroup([

    L.marker([50.70, -123.6], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: Penthouse"}).bindLabel("Large Agency Pickup: Penthouse").bindPopup("<img src='img/map_bangkok/screenshots/ica_penthouse.jpg'><h2>Large Agency Pickup</h2><h1>Penthouse</h1>"),

    L.marker([63.31, -133.9], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([66.87, -109.0], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([49.83, -109.0], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([44.93, -132.0], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([66.30, -131.4], {icon: iconWrench, alt: "level4wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([63.21, -130.1], {icon: iconPoolBall, alt: "level4poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([67.99, -127.0], {icon: iconCrowbar, alt: "level4crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),  
    L.marker([61.58, -123.7], {icon: iconCrowbar, alt: "level4crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),  
    L.marker([68.04, -116.8], {icon: iconHammer, alt: "level4hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([61.68, -117.7], {icon: iconHammer, alt: "level4hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([67.32, -105.0], {icon: iconCoconut, alt: "level4coconut", title: "Weapon: Coconut"}).bindLabel("Coconut").bindPopup(txtCoconut),
    L.marker([66.21, -106.6], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([48.60, -133.1], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([63.39, -128.8], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([67.75, -121.2], {icon: iconSoda, alt: "level4sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can (x2)").bindPopup(txtSoda),
    L.marker([61.39, -131.1], {icon: iconBaseballBat, alt: "level4baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),

    L.marker([62.63, -132.3], {icon: iconOpener, alt: "level4opener", title: "Weapon: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
    L.marker([68.86, -121.2], {icon: iconScrewdriver, alt: "level4screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([64.07, -131.5], {icon: iconScrewdriver, alt: "level4screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([62.63, -120.2], {icon: iconScrewdriver, alt: "level4screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([68.23, -105.4], {icon: iconKnife, alt: "level4knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([66.19, -105.1], {icon: iconKnife, alt: "level4knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([48.92, -103.3], {icon: iconFireAxe, alt: "level4fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([63.70, -103.3], {icon: iconFireAxe, alt: "level4fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),

]);

var level4poi = L.layerGroup([

    L.marker([53.12, -133.9], {icon: iconHidingSpot, alt: "level4hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([66.87, -108.1], {icon: iconHidingSpot, alt: "level4hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([61.83, -109.2], {icon: iconHidingSpot, alt: "level4hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([63.37, -123.5], {icon: iconHidingSpot, alt: "level4hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),
    L.marker([68.80, -134.1], {icon: iconHidingSpot, alt: "level4hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"),

    L.marker([49.83, -103.4], {icon: iconConceal, alt: "level4conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),
    L.marker([65.60, -129.2], {icon: iconConceal, alt: "level4conceal", title: "Container: Conceal Item"}).bindLabel("Conceal Item"),

    L.marker([64.22, -134.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Exterminator"),
    L.marker([50.14, -106.4], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([47.54, -106.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([47.54, -107.2], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([45.55, -103.3], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([41.83, -105.7], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([39.67, -109.7], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([53.12, -126.3], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([48.04, -123.6], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([47.12, -129.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([51.34, -134.0], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([42.06, -133.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([43.89, -128.3], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([41.17, -119.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([62.61, -122.2], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([66.82, -131.5], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([69.53, -123.9], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([67.22, -117.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([65.83, -117.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([64.41, -122.6], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as Recording Crew"),

    L.marker([52.69, -105.9], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([61.79, -105.8], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
    L.marker([65.25, -128.1], {icon: iconSabotage, alt: "level4sab-microphone", title: "Sabotage: Microphone Stand"}).bindLabel("Microphone Stand").bindPopup( popUp("img", "Sabotage", "Microphone Stand", "Swap with Branson MD-2 Microphone", "Branson MD-2 Microphone", "susp", "note", "ingame", "desc") ),
        new L.Polyline([[65.25, -128.1], [64.49, -120.6]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level4sab-microphone"}),
        L.marker([64.49, -120.6], {icon: iconPointRed, alt: "level4sab-microphone"}).bindLabel("Voltage Regulator").bindPopup( popUp("img", "Sabotage", "Voltage Regulator", "Increase Voltage", "req", "Recording Crew", "note", "ingame", "desc") ),

    L.marker([47.15, -125.5], {icon: iconPoison, alt: "level4poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Staff", "note") ),
    L.marker([65.69, -105.9], {icon: iconPoison, alt: "level4poison", title: "Poison: Kitchen Staff"}).bindLabel("Glass of White Wine (Kitchen Staff)").bindPopup( popPoison("Glass of White Wine", "Kitchen Staff", "Waiter / Kitchen Staff", "note") ),
    L.marker([64.84, -117.5], {icon: iconPoison, alt: "level4poison", title: "Poison: Recording Crew"}).bindLabel("Coffee Glass (Recording Crew)").bindPopup( popPoison("Coffee Glass", "Recording Crew", "Kitchen Staff", "note") ),

    L.marker([66.89, -106.6], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([44.80, -104.8], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([52.18, -122.8], {icon: iconDistraction, alt: "level4dis-piano", title: "Distraction: Piano"}).bindLabel("Piano").bindPopup( popGlobal(disPiano, "all") ),
    L.marker([61.98, -116.8], {icon: iconDistraction, alt: "level4dis-piano", title: "Distraction: Piano"}).bindLabel("Piano").bindPopup( popGlobal(disPiano, "all") ),
    L.marker([44.37, -124.4], {icon: iconDistraction, alt: "level4dis-sound", title: "Distraction: Sound System"}).bindLabel("Sound System").bindPopup( popGlobal(disSound, "susp") ),
    L.marker([64.84, -134.2], {icon: iconDistraction, alt: "level4dis-amp", title: "Distraction: Guitar Amp"}).bindLabel("Guitar Amp").bindPopup( popUp("img", "Distraction", "Guitar Amp", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),

    L.marker([47.93, -103.4], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([63.72, -108.0], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([65.16, -120.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Mixing Table"}).bindLabel("Mixing Table").bindPopup( popUp("table", "Interaction", "Mixing Table", "Start Mixing", "Recording Crew disguise", "susp", "note", "ingame", "desc") ),
    L.marker([65.89, -120.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Talk to Wes Liston"}).bindLabel("Talk to Wes Liston").bindPopup( popUp("img", "Interaction", "Talk to Wes Liston", "use", "Recording Crew disguise", "susp", "note", "ingame", "desc") ),
    L.marker([64.68, -125.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Play Drums"}).bindLabel("Play Drums").bindPopup( popUp("drums", "Interaction", "Play Drums", "use", "Abel de Silva disguise", "susp", "note", "ingame", "desc") ),

    L.marker([47.18, -104.1], {icon: iconLocked, alt: "level4locked", title: "Locked: Master Keycard"}).bindLabel("Locked Door (Master Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Master Keycard</p>"),

]);

/* ==================================================================================================================================================================
    Level 5
================================================================================================================================================================== */

var level5other = L.layerGroup([

    L.marker([43.86, -122.2], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([50.70, -122.2], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([63.17, -122.2], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([67.35, -122.2], {icon: iconStairsDown, alt: "level5stairsupdown"}),

]);

var level5weapons = L.layerGroup([

    L.marker([65.03, -108.6], {icon: iconExtinguisher, alt: "level5extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([64.16, -125.7], {icon: iconExtinguisher, alt: "level5extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([46.61, -126.0], {icon: iconExtinguisher, alt: "level5extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([47.81, -108.8], {icon: iconExtinguisher, alt: "level5extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    L.marker([61.52, -105.0], {icon: iconFirearm, alt: "level5firearm", title: "Weapon: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),

    L.marker([65.74, -116.6], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([63.99, -112.2], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([61.73, -103.6], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([67.97, -134.0], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([68.64, -129.0], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([68.30, -127.8], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),

    L.marker([62.59, -104.5], {icon: iconKatana, alt: "level5katana", title: "Weapon: Katana"}).bindLabel("Katana").bindPopup(txtKatana),

]);

var level5poi = L.layerGroup([   

    L.marker([45.98, -131.4], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 
    L.marker([50.28, -106.5], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 
    L.marker([44.30, -106.5], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 
    L.marker([63.41, -107.4], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 
    L.marker([67.13, -106.1], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 
    L.marker([64.81, -131.3], {icon: iconHidingSpot, alt: "level5hidingspot", title: "Container: Hiding Spot"}).bindLabel("Hiding Spot"), 

    L.marker([52.74, -117.5], {icon: iconNPC, alt: "level5npc", title: "NPC: Stalker"}).bindLabel("Stalker").bindPopup( popUp("stalker", "NPC", "Stalker", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([61.98, -123.5], {icon: iconNPC, alt: "level5npc", title: "NPC: Dexy Barat"}).bindLabel("Dexy Barat").bindPopup( popUp("dexy", "NPC", "Dexy Barat", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([52.10, -115.5], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([52.64, -111.2], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([42.16, -115.4], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([41.47, -123.6], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([46.67, -134.0], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([50.06, -130.8], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff"),
    L.marker([42.77, -104.3], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff (x2)"),
    L.marker([51.61, -104.3], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff (x2)"),
    L.marker([44.62, -128.1], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Hotel Staff (x2)"),
    L.marker([48.51, -128.1], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Groundskeeper"),
    L.marker([46.43, -128.1], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Groundskeeper"),
    L.marker([48.60, -118.6], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Groundskeeper"),
    L.marker([64.09, -114.5], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Recording Crew"),
    L.marker([66.51, -112.6], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Recording Crew"),

    L.marker([65.09, -116.1], {icon: iconSabotage, alt: "level5sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[65.09, -116.1], [68.36, -126.0]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level5sab-wire"}),
        L.marker([68.36, -126.0], {icon: iconPointRed, alt: "level5sab-wire"}).bindLabel("Wire Plug").bindPopup( popUp("img", "Sabotage", "Wire Plug", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),

    L.marker([64.32, -113.3], {icon: iconPoison, alt: "level5poison", title: "Poison: Recording Crew"}).bindLabel("Bottle of Beer (Recording Crew)").bindPopup( popPoison("Bottle of Beer", "Recording Crew", "all", "note") ),
    L.marker([61.50, -117.5], {icon: iconPoison, alt: "level5poison", title: "Poison: Jordan Cross"}).bindLabel("Bottle of Beer (Jordan Cross)").bindPopup( popPoison("Bottle of Beer", "Jordan Cross", "all", "note") ),
    L.marker([62.32, -115.4], {icon: iconPoison, alt: "level5poison", title: "Poison: Dexy Barat"}).bindLabel("Glass of White Wine (Dexy Barat)").bindPopup( popPoison("Glass of White Wine", "Dexy Barat", "all", "note") ),
    L.marker([64.51, -115.1], {icon: iconPoison, alt: "level5poison", title: "Poison: Recording Crew"}).bindLabel("Water Bottle (Recording Crew)").bindPopup( popPoison("Bottle of Water", "Recording Crew", "all", "note") ),
    L.marker([64.86, -114.1], {icon: iconPoison, alt: "level5poison", title: "Poison: Jordan Cross Bodyguard"}).bindLabel("Water Bottle (Jordan Cross' Bodyguard)").bindPopup( popPoison("Bottle of Water", "Jordan Cross' Bodyguard", "all", "note") ),

    L.marker([52.93, -132.8], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([48.10, -103.6], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([46.58, -103.6], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([61.52, -133.1], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([64.97, -103.7], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([65.74, -103.7], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x2)").bindPopup( popGlobal(disSink, "susp") ),
    L.marker([68.67, -103.7], {icon: iconDistraction, alt: "level5dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),

    L.marker([64.58, -112.0], {icon: iconIntel, alt: "level5intel", title: "Intel: Cross Drinking Habits"}).bindLabel("Cross' Drinking Habits").bindPopup( popUp("drinking", "Intel", "Cross' Drinking Habits", "Listen to the conversation", "req", "susp", "note", "Cross used to drink heavily, especially during the Hannah Highmoore trial, but the omnipresent Dr. Oscar Lafayette set him straight. Now he only drinks alcohlo when he becomes agitated. Today, admittedly, his fuse is rather short.", "desc") ),
    L.marker([61.75, -112.3], {icon: iconIntel, alt: "level5intel", title: "Intel: Father Issues"}).bindLabel("Father Issues").bindPopup( popUp("father", "Intel", "Father Issues", "Listen to the conversation", "req", "susp", "note", "Jordan Cross and his father ran afoul years ago. Ever since then, Jordan has been determined to succeed on his own. But the Hannah Highmoore incident once again made him dependent on Thomas Cross' money and influence, and the old patriarch is clearly tightening the leash. Christmas at the Cross estate must be something to behold.", "desc") ),
    L.marker([61.75, -113.5], {icon: iconIntel, alt: "level5intel", title: "Intel: The Mysterious Recording"}).bindLabel("The Mysterious Recording").bindPopup( popUp("recording", "Intel", "The Mysterious Recording", "Listen to the conversation", "req", "susp", "note", "Apparently, Jordan Cross listens to a tape at night of himself and woman fighting. One of the security guards recognize the woman's voice as that of Hannah Highmoore, Cross' late girlfriend. Sounds like the clients' hunch was right.", "desc") ),
    L.marker([62.49, -113.5], {icon: iconIntel, alt: "level5intel", title: "Intel: Dexys True Allegiance"}).bindLabel("Dexy's True Allegiance").bindPopup( popUp("dexy", "Intel", "Dexy's True Allegiance", "Listen to the conversation", "req", "susp", "note", "It seems that manager Dexy Barat serves a different master. Jordan's father, billionaire media mogul Thomas Cross, is paying Barat to spy on his wayward son and acquire some kind of leverage. Thomas Cross' reputation not only precedes him, it is also quite accurate.", "desc") ),

    L.marker([61.98, -122.0], {icon: iconItem, alt: "level5item", title: "Item: Penthouse Safe Combination"}).bindLabel("Penthouse Safe Combination").bindPopup( popUp("safe", "Item", "Penthouse Safe Combination", "use", "req", "susp", "Carried by Dexy Barat", "A card with a safe combination code: 2-4-2. This one belongs to Dexy Barat.", "desc") ),
    L.marker([68.22, -105.7], {icon: iconItem, alt: "level5item", title: "Item: USB Flash Drive"}).bindLabel("USB Flash Drive").bindPopup( popUp("usb", "Item", "USB Flash Drive", "use", "req", "susp", "Locked in a safe", "A small USB flash drive found in Dexy Barat's hotel safe. A brand favoured by musicians to store sound recordings. You will need a computer to view the content.", "desc") ),

    L.marker([68.05, -130.0], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Wait For Cross"}).bindLabel("Wait For Cross").bindPopup( popUp("wait", "Interaction", "Wait For Cross", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([66.70, -130.1], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Jordan Cross Laptop"}).bindLabel("Jordan Cross' Laptop").bindPopup( popUp("laptop", "Interaction", "Jordan Cross' Laptop", "Play Recording", "USB Flash Drive", "all", "note", "ingame", "desc") ),
    L.marker([62.34, -106.5], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Play Guitar"}).bindLabel("Play Guitar").bindPopup( popUp("guitar", "Interaction", "Play Guitar", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([66.63, -122.4], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Fountain"}).bindLabel("Fountain").bindPopup( popUp("fountain", "Interaction", "Fountain", "Turn On", "req", "all", "note", "ingame", "desc") ),
    L.marker([68.68, -105.7], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Penthouse Safe"}).bindLabel("Penthouse Safe").bindPopup( popUp("safe", "Interaction", "Penthouse Safe", "Use Combination", "Penthouse Safe Combination", "susp", "note", "ingame", "desc") ),

    L.marker([66.28, -132.6], {icon: iconLocation, alt: "level5location", title: "Location: Jordan Cross Safe Room"}).bindLabel("Jordan Cross Safe Room").bindPopup( popUp("img", "Location", "Jordan Cross Safe Room", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([62.59, -126.2], {icon: iconLocked, alt: "level5locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);
    
/* ==================================================================================================================================================================
   All Markers
   ================================================================================================================================================================== */

var allMarkers = L.layerGroup([
    level0markers = L.layerGroup([level0other, level0weapons, level0poi]),
    level1markers = L.layerGroup([level1other, level1weapons, level1poi]),
    level2markers = L.layerGroup([level2other, level2weapons, level2poi]),
    level3markers = L.layerGroup([level3other, level3weapons, level3poi]),
    level4markers = L.layerGroup([level4other, level4weapons, level4poi]),
    level5markers = L.layerGroup([level5other, level5weapons, level5poi])
]);