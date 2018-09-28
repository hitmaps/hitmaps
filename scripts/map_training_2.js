var maptraining2 = L.map('maptraining2', {maxBoundsViscosity: 1}).setView([-11.6, -32.51], 3);
maptraining2.zoomControl.setPosition('topright');
maptraining2.setMaxBounds([[-77.6, -236.6],[85.93, 144.14]]);
$("#level-0").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = mapLevel0mechanic = mapLevel0security = mapLevel0soldier = mapLevel0officer = L.tileLayer('img/map_training2/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }).addTo(maptraining2),
    mapLevel1base = mapLevel1soldier = mapLevel1officer = L.tileLayer('img/map_training2/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel2base = mapLevel2soldier = mapLevel2officer = L.tileLayer('img/map_training2/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel3base = mapLevel3soldier = mapLevel3officer = L.tileLayer('img/map_training2/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),

    mapLevel0suit = L.tileLayer('img/map_training2/lvl_0/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel1suit = mapLevel1mechanic = mapLevel1security = L.tileLayer('img/map_training2/lvl_1/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel2suit = mapLevel2mechanic = mapLevel2security = L.tileLayer('img/map_training2/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),
    mapLevel3suit = mapLevel3mechanic = mapLevel3security = L.tileLayer('img/map_training2/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 2, maxZoom: 3 }),

]);

/* ==================================================================================================================================================================
   Level 0
   ================================================================================================================================================================== */

var level0other = L.layerGroup([

    L.marker([-68.9, -29.35], {icon: iconEnter, alt: "level0enter"}).bindLabel("Starting Locaton"),
    L.marker([-64.5, -44.29], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Locaton"),

    L.marker([59.26, 26.894], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([59.71, -79.27], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-1</h1>"),

    L.marker([-63.3, 21.796], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([-57.3, -74.70], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([-18.6, 44.648], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([10.31, 25.664], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([-30.4, -38.49], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([-30.4, -24.78], {icon: iconPassage, alt: "level0passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

]);

var level0weapons = L.layerGroup([

    L.marker([62.10, 27.246], {icon: iconCoin, alt: "level0coin", title: "Weapons: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([-28.1, -44.64], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([52.37, -68.20], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    L.marker([48.57, 3.6914], {icon: iconPipe, alt: "level0pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([59.62, -44.12], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([-63.0, 4.2187], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([43.70, -59.41], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([-60.0, -79.62], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([74.68, -63.80], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([6.315, -121.4], {icon: iconHammer, alt: "level0hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([25.48, 17.402], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([17.81, -64.33], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([50.95, -15.29], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level0poi = L.layerGroup([

    L.marker([40.84, 17.753], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-34.4, -117.7], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-23.8, 44.824], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-16.4, 27.949], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.45, -79.98], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-11.5, -121.1], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([24.52, -76.46], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([25.16, 24.257], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([57.23, 12.128], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Airplane Mechanic"}).bindLabel("Airplane Mechanic").bindPopup( popUp("mechanic", "Disguise", "Airplane Mechanic", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([37.02, -26.71], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as a Airplane Mechanic").bindPopup("<h2>Blend In</h2><h1>Airplane Mechanic</h1>"),
    L.marker([47.15, -17.05], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as a Airplane Mechanic").bindPopup("<h2>Blend In</h2><h1>Airplane Mechanic</h1>"),

    L.marker([56.84, -16.52], {icon: iconSabotage, alt: "level0sab-seat", title: "Sabotage: Enjection Seat"}).bindLabel("Enjection Seat").bindPopup( popUp("img", "Sabotage", "Enjection Seat", "Enable Enjection Seat", "Wrench", "Airplane Mechanic", "note", "ingame", "desc") ),

    L.marker([-7.53, 27.773], {icon: iconDistraction, alt: "level0dis-lights", title: "Distraction: Flood Lights"}).bindLabel("Flood Lights").bindPopup( popGlobal(disFloodLights, "all") ),
    L.marker([-29.8, -117.4], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([-16.2, -39.72], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Airfield Security / Soviet Soldier") ),
    L.marker([-25.7, -23.20], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Airfield Security / Soviet Soldier") ),
    L.marker([54.36, 24.082], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Airfield Security / Soviet Soldier") ),

    L.marker([-21.4, 8.4375], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([16.29, -34.80], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([21.61, -0.175], {icon: iconPoison, alt: "level0poison", title: "Poison: Airplane Mechanic"}).bindLabel("Coffee Glass (Airplane Mechanic)").bindPopup( popPoison("Coffee Glass", "Airplane Mechanic", "all", "note")),

    L.marker([56.94, -32.16], {icon: iconIntel, alt: "level0intel", title: "Intel: Fighter Jet Safety Protocol"}).bindLabel("Fighter Jet Safety Protocol").bindPopup( popUp("jetsafety", "Intel", "Fighter Jet Safety Protocol", "Examine", "req", "susp", "note", "According to the safety protocol, Jasper Knight is required to do a safety check before takeoff. The protocol, which is performed by certified airplane mechanics, includes a test of the onboard ejector seat.", "desc") ),
    L.marker([57.42, 21.972], {icon: iconIntel, alt: "level0intel", title: "Intel: Netzke Thirst for Vodka"}).bindLabel("Netzke's Thirst for Vodka").bindPopup( popUp("thirst", "Intel", "Netzke's Thirst for Vodka", "Listen to the conversation", "req", "susp", "note", "Cilas Netzke, the KGB officer in charge of the extraction, has ordered airfield security to get him a bottle of vodka. He probably wants to make a toast.", "desc") ),
    L.marker([39.09, -69.78], {icon: iconIntel, alt: "level0intel", title: "Intel: Knight Final Demand"}).bindLabel("Knight's Final Demand").bindPopup( popUp("demand", "Intel", "Knight's Final Demand", "Listen to the conversation", "req", "susp", "note", "Knight has made an unexpected demand for his girlfriend to accompany him to the Soviet Union and he refuses to leave Cuba, until he receives affirmation from KGB high command. The call will come through in the restricted radio room.", "desc") ),
    L.marker([-2.10, -9.667], {icon: iconIntel, alt: "level0intel", title: "Intel: Knight Escape Route"}).bindLabel("Knight's Escape Route").bindPopup( popUp("escape", "Intel", "Knight's Escape Route", "Listen to the conversation", "req", "susp", "note", "According to desk security, the red folder contains projector slides depicting Knight's escape route from Cuba to his new home in the Soviet Union. A soldier is coming to fetch the slides, whereupon the KGB officer and Knight will likely retreat to the upstairs office.", "desc") ),
    L.marker([-42.5, -67.67], {icon: iconIntel, alt: "level0intel", title: "Intel: Knight Safety Check"}).bindLabel("Knight's Safety Check").bindPopup( popUp("safety", "Intel", "Knight's Safety Check", "Listen to the conversation", "req", "susp", "note", "It appears that all fighter jet passengers are required to do an onboard safety check before takeoff. The protocol ise perfomed by airplane mechanics and is listed on a clipboard.", "desc") ),
    L.marker([-24.2, 17.578], {icon: iconIntel, alt: "level0intel", title: "Intel: Knight Chess Conundrum"}).bindLabel("Knight's Chess Conundrum").bindPopup( popUp("chess", "Intel", "Knight's Chess Conundrum", "Listen to the conversation", "req", "susp", "note", "According to airfield security, Knight is trying to solve a chess conundrum created by the unusual opening move of his victim, the late Russian Ambassador. Beginner's luck no doubt, but Knight is a grandmaster and highly obsessive in these matters.", "desc") ),
    L.marker([65.87, 24.433], {icon: iconIntel, alt: "level0intel", title: "Intel: The Skylight"}).bindLabel("The Skylight").bindPopup( popUp("skylight", "Intel", "The Skylight", "Listen to the conversation", "req", "susp", "note", "According to the soldiers, there is an open skylight at the roof of the hangar. Could be a weak spot in security.", "desc") ),

    L.marker([-7.53, -9.843], {icon: iconItem, alt: "level0item", title: "Item: Projector Slides"}).bindLabel("Projector Slides").bindPopup( popUp("slides", "Item", "Projector Slides", "use", "req", "susp", "note", "Slides for an overhead project, containing Jasper Knight's escape plan from Cuba to the USSR.", "desc") ),
    L.marker([-10.4, -36.73], {icon: iconItem, alt: "level0item", title: "Item: Vodka Bottle"}).bindLabel("Vodka Bottle").bindPopup( popUp("vodka", "Item", "Vodka Bottle", "use", "req", "susp", "note", "A bottle of Russian vodka. Decent brand, too.", "desc") ),

    L.marker([-30.1, -61.34], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([59.26, 26.894], {icon: iconWayUpDown, alt: "level1waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([59.71, -79.27], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Pipe: Level 0-1").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-1</h1>"),

    L.marker([56.26, 25.488], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([25.48, -77.87], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([37.43, -77.87], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([45.21, -77.87], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),
    L.marker([50.40, -77.87], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Climb Through</h1>"),

    new L.Polyline([[59.71, 26.367], [56.07, 26.367]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level1ledge"}).bindLabel("Ledge"),
    new L.Polyline([[59.71, -78.57], [25.00, -78.57]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level1ledge"}).bindLabel("Ledge"),

]);

var level1weapons = L.layerGroup([

    L.marker([-19.1, -12.65], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([33.57, -70.66], {icon: iconPoisons, alt: "level1weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    L.marker([51.83, 13.007], {icon: iconBust, alt: "level1bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([1.933, 8.0859], {icon: iconPoolBall, alt: "level1poolball", title: "Weapon: Pool Ball"}).bindLabel("Pool Ball").bindPopup(txtPoolBall),
    L.marker([-28.1, -50.62], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),

]);

var level1poi = L.layerGroup([

    L.marker([41.24, -67.85], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-13.2, -3.691], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.15, 23.906], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([-8.58, -56.60], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([18.47, -43.41], {icon: iconSabotage, alt: "level1sab-spotlight", title: "Sabotage: Spotlight"}).bindLabel("Spotlight").bindPopup( popUp("img", "Sabotage", "Spotlight", "Break Mounting", "Crowbar", "all", "Spotlight is on the 3rd level", "ingame", "desc") ),
    L.marker([18.47, -31.46], {icon: iconSabotage, alt: "level1sab-spotlight", title: "Sabotage: Spotlight"}).bindLabel("Spotlight").bindPopup( popUp("img", "Sabotage", "Spotlight", "Break Mounting", "Crowbar", "all", "Spotlight is on the 3rd level", "ingame", "desc") ),

    L.marker([53.54, 24.609], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([22.26, -55.01], {icon: iconAlarm, alt: "level1alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([57.89, -56.77], {icon: iconPoison, alt: "level1poison", title: "Poison: Cilas Netzke"}).bindLabel("Vodka Glass (Cilas Netzke)").bindPopup( popPoison("Vodka Glass", "Cilas Netzke", "all", "note")),
    L.marker([57.89, -63.10], {icon: iconPoison, alt: "level1poison", title: "Poison: Jasper Knight"}).bindLabel("Vodka Glass (Jasper Knight)").bindPopup( popPoison("Vodka Glass", "Jasper Knight", "all", "note")),

    L.marker([-1.58, 11.777], {icon: iconIntel, alt: "level1intel", title: "Intel: Note for KGB High Command"}).bindLabel("Note for KGB High Command").bindPopup( popUp("command", "Intel", "Note for KGB High Command", "Examine", "req", "susp", "note", "A list of demands from Jasper Knight to KGB officer Cilas Netzke. Apparently, Knight wants his girlfriend to accompany him to the Soviet Union and refuses to leave Cuba until the request is granted. The request is currently pending KGB high command approval.", "desc") ),
    L.marker([-7.01, 1.7578], {icon: iconIntel, alt: "level1intel", title: "Intel: The Spymaster"}).bindLabel("The Spymaster").bindPopup( popUp("spymaster", "Intel", "The Spymaster", "Listen to the conversation", "req", "susp", "note", "Knight and Officer Netzke both work for Janus, the legendary KGB spymaster. A yet unidentified strategic genius, Janus heads the KGB's special infiltration branch. They say that Janus' sleeper agents cannot be turned or broken, but he Russian Ambassador's unexpected defection hints that Janus' power might be crumbling.", "desc") ),

    L.marker([59.80, -59.94], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Place Vodka Bottle"}).bindLabel("Place Vodka Bottle").bindPopup( popUp("img", "Interaction", "Place Vodka Bottle", "use", "Vodka Bottle", "susp", "note", "ingame", "desc") ),
    L.marker([55.37, -67.32], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Chess Game"}).bindLabel("Chess Game").bindPopup( popUp("chess", "Interaction", "Chess Game", "Tamper", "req", "susp", "note", "Knight brought his personal chessboard with him. He appears to be engrossed in a particulary challenging game.", "desc") ),
    L.marker([-6.31, -19.86], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Overhead Projector"}).bindLabel("Overhead Projector").bindPopup( popUp("projector", "Interaction", "Overhead Projector", "Place Overhead Slides", "Projector Slides", "susp", "note", "An old-fashioned overhead projector, used to display illuminated slide images to an audience. All the rage in 1979.", "desc") ),
        new L.Polyline([[-6.31, -19.86], [-11.8, -14.94]], {color: '#fff', weight: 2, opacity: 0.5, smoothFactor: 1, className: "level1interaction"}),
        L.marker([-11.8, -14.94], {icon: iconPointBlue, alt: "level1interaction"}).bindLabel("Overhead Projector").bindPopup( popUp("img", "Interaction", "Overhead Projector", "Turn On/Off", "req", "all", "note", "ingame", "desc") ),

    L.marker([47.51, 10.371], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([59.26, 26.894], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-2</h1>"),
    L.marker([13.92, -36.73], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),

]);

var level2weapons = L.layerGroup([

    L.marker([27.52, -68.90], {icon: iconHammer, alt: "level2hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([55.77, 21.445], {icon: iconBrick, alt: "level2brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([50.17, 17.050], {icon: iconPipe, alt: "level2pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([0.175, -37.61], {icon: iconCrowbar, alt: "level2crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),

]);

var level2poi = L.layerGroup([

    L.marker([8.407, 17.929], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.37, -55.19], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([13.92, -36.73], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),

]);

var level3weapons = L.layerGroup([

]);

var level3poi = L.layerGroup([

    L.marker([18.47, -43.41], {icon: iconSabotage, alt: "level3sab-spotlight", title: "Sabotage: Spotlight"}).bindLabel("Spotlight").bindPopup( popUp("img", "Sabotage", "Spotlight", "Break Mounting", "Crowbar", "all", "note", "ingame", "desc") ),
    L.marker([18.47, -31.46], {icon: iconSabotage, alt: "level3sab-spotlight", title: "Sabotage: Spotlight"}).bindLabel("Spotlight").bindPopup( popUp("img", "Sabotage", "Spotlight", "Break Mounting", "Crowbar", "all", "note", "ingame", "desc") ),

]);
    
var allMarkers = L.layerGroup([

    level0other, level0weapons, level0poi,
    level1other, level1weapons, level1poi,
    level2other, level2weapons, level2poi,
    level3other, level3weapons, level3poi
]);