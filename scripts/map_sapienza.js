var mapsapienza = L.map('mapsapienza', {maxBoundsViscosity: 1}).setView([45.76, -73.38], 4);
mapsapienza.zoomControl.setPosition('topright');
mapsapienza.setMaxBounds([[-33.5, -264.3],[84.57, 15.292]]);
$("#level-3").addClass("active");

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_sapienza/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1base = L.tileLayer('img/map_sapienza/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2base = L.tileLayer('img/map_sapienza/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_sapienza/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapsapienza),
    mapLevel4base = L.tileLayer('img/map_sapienza/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5base = L.tileLayer('img/map_sapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6base = L.tileLayer('img/map_sapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7base = L.tileLayer('img/map_sapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = mapLevel0store = mapLevel0detective = mapLevel0cyclist = mapLevel0perf = mapLevel0plague = mapLevel0bohem = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = mapLevel1store = mapLevel1detective = mapLevel1cyclist = mapLevel1perf = mapLevel1plague = mapLevel1bohem = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2store = mapLevel2detective = mapLevel2cyclist = mapLevel2perf = mapLevel2plague = mapLevel2bohem = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3store = mapLevel3detective = mapLevel3cyclist = mapLevel3perf = mapLevel3plague = mapLevel3bohem = L.tileLayer('img/map_sapienza/lvl_3/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4suit = mapLevel4store = mapLevel4detective = mapLevel4cyclist = mapLevel4perf = mapLevel4plague = mapLevel4bohem = L.tileLayer('img/map_sapienza/lvl_4/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5suit = mapLevel5store = mapLevel5detective = mapLevel5cyclist = mapLevel5perf = mapLevel5plague = mapLevel5bohem = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6suit = mapLevel6store = mapLevel6detective = mapLevel6cyclist = mapLevel6perf = mapLevel6plague = mapLevel6bohem = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7suit = mapLevel7store = mapLevel7detective = mapLevel7cyclist = mapLevel7perf = mapLevel7plague = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0gardener = L.tileLayer('img/map_sapienza/lvl_0/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1gardener = L.tileLayer('img/map_sapienza/lvl_1/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2gardener = L.tileLayer('img/map_sapienza/lvl_2/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3gardener = L.tileLayer('img/map_sapienza/lvl_3/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4gardener = L.tileLayer('img/map_sapienza/lvl_4/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5gardener = L.tileLayer('img/map_sapienza/lvl_5/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6gardener = L.tileLayer('img/map_sapienza/lvl_6/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7gardener = L.tileLayer('img/map_sapienza/lvl_7/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0plumber = L.tileLayer('img/map_sapienza/lvl_0/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1plumber = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2plumber = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3plumber = L.tileLayer('img/map_sapienza/lvl_3/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4plumber = L.tileLayer('img/map_sapienza/lvl_4/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5plumber = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6plumber = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7plumber = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0delivery = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1delivery = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2delivery = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3delivery = L.tileLayer('img/map_sapienza/lvl_3/delivery/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4delivery = L.tileLayer('img/map_sapienza/lvl_4/delivery/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5delivery = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6delivery = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7delivery = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0bodyguard = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1bodyguard = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2bodyguard = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3bodyguard = L.tileLayer('img/map_sapienza/lvl_3/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4bodyguard = L.tileLayer('img/map_sapienza/lvl_4/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5bodyguard = L.tileLayer('img/map_sapienza/lvl_5/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6bodyguard = L.tileLayer('img/map_sapienza/lvl_6/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7bodyguard = L.tileLayer('img/map_sapienza/lvl_7/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0churchstaff = mapLevel0priest = L.tileLayer('img/map_sapienza/lvl_0/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1churchstaff = mapLevel1priest = L.tileLayer('img/map_sapienza/lvl_1/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2churchstaff = mapLevel2priest = L.tileLayer('img/map_sapienza/lvl_2/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3churchstaff = mapLevel3priest = L.tileLayer('img/map_sapienza/lvl_3/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4churchstaff = mapLevel4priest = L.tileLayer('img/map_sapienza/lvl_4/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5churchstaff = mapLevel5priest = L.tileLayer('img/map_sapienza/lvl_5/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6churchstaff = mapLevel6priest = L.tileLayer('img/map_sapienza/lvl_6/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7churchstaff = mapLevel7priest = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0waiter = L.tileLayer('img/map_sapienza/lvl_0/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1waiter = L.tileLayer('img/map_sapienza/lvl_1/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2waiter = L.tileLayer('img/map_sapienza/lvl_2/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3waiter = L.tileLayer('img/map_sapienza/lvl_3/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4waiter = L.tileLayer('img/map_sapienza/lvl_4/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5waiter = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6waiter = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7waiter = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0kitchen = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1kitchen = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2kitchen = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3kitchen = L.tileLayer('img/map_sapienza/lvl_3/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4kitchen = L.tileLayer('img/map_sapienza/lvl_4/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5kitchen = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6kitchen = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7kitchen = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0chef = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1chef = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2chef = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3chef = L.tileLayer('img/map_sapienza/lvl_3/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4chef = L.tileLayer('img/map_sapienza/lvl_4/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5chef = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6chef = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7chef = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0mankeep = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1mankeep = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2mankeep = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3mankeep = L.tileLayer('img/map_sapienza/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4mankeep = L.tileLayer('img/map_sapienza/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5mankeep = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6mankeep = L.tileLayer('img/map_sapienza/lvl_6/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7mankeep = L.tileLayer('img/map_sapienza/lvl_7/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0manstaff = mapLevel0butler = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1manstaff = mapLevel1butler = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2manstaff = mapLevel2butler = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3manstaff = mapLevel3butler = L.tileLayer('img/map_sapienza/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4manstaff = mapLevel4butler = L.tileLayer('img/map_sapienza/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5manstaff = mapLevel5butler = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6manstaff = mapLevel6butler = L.tileLayer('img/map_sapienza/lvl_6/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7manstaff = mapLevel7butler = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0mansec = L.tileLayer('img/map_sapienza/lvl_0/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1mansec = L.tileLayer('img/map_sapienza/lvl_1/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2mansec = L.tileLayer('img/map_sapienza/lvl_2/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3mansec = L.tileLayer('img/map_sapienza/lvl_3/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4mansec = L.tileLayer('img/map_sapienza/lvl_4/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5mansec = L.tileLayer('img/map_sapienza/lvl_5/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6mansec = L.tileLayer('img/map_sapienza/lvl_6/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7mansec = L.tileLayer('img/map_sapienza/lvl_7/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labtec = L.tileLayer('img/map_sapienza/lvl_0/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labtec = L.tileLayer('img/map_sapienza/lvl_1/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labtec = L.tileLayer('img/map_sapienza/lvl_2/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labtec = L.tileLayer('img/map_sapienza/lvl_3/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labtec = L.tileLayer('img/map_sapienza/lvl_4/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labtec = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labtec = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labtec = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labsec = L.tileLayer('img/map_sapienza/lvl_0/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labsec = L.tileLayer('img/map_sapienza/lvl_1/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labsec = L.tileLayer('img/map_sapienza/lvl_2/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labsec = L.tileLayer('img/map_sapienza/lvl_3/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labsec = L.tileLayer('img/map_sapienza/lvl_4/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labsec = L.tileLayer('img/map_sapienza/lvl_5/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labsec = L.tileLayer('img/map_sapienza/lvl_6/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labsec = L.tileLayer('img/map_sapienza/lvl_7/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labhaz = L.tileLayer('img/map_sapienza/lvl_0/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labhaz = L.tileLayer('img/map_sapienza/lvl_1/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labhaz = L.tileLayer('img/map_sapienza/lvl_2/lab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labhaz = L.tileLayer('img/map_sapienza/lvl_3/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labhaz = L.tileLayer('img/map_sapienza/lvl_4/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labhaz = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labhaz = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labhaz = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0oscar = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1oscar = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2oscar = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3oscar = L.tileLayer('img/map_sapienza/lvl_3/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4oscar = L.tileLayer('img/map_sapienza/lvl_4/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5oscar = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6oscar = L.tileLayer('img/map_sapienza/lvl_6/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7oscar = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0vargas = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1vargas = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2vargas = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3vargas = L.tileLayer('img/map_sapienza/lvl_3/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4vargas = L.tileLayer('img/map_sapienza/lvl_4/vargas/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5vargas = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6vargas = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7vargas = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel7bohem = L.tileLayer('img/map_sapienza/lvl_7/bohemian/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */

var level0other = L.layerGroup([

    L.marker([73.60, -88.33], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Sewers"}).bindLabel("Large Agency Pickup: Sewers").bindPopup("<img src='img/map_sapienza/screenshots/ica_sewers.jpg'><h2>Large Agency Pickup</h2><h1>Sewers</h1>"),
    L.marker([30.41, -123.7], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Ether Field Lab"}).bindLabel("Large Agency Pickup: Ether Field Lab").bindPopup("<img src='img/map_sapienza/screenshots/ica_lab.jpg'><h2>Large Agency Pickup</h2><h1>Ether Field Lab</h1>"),

    L.marker([44.21, -109.3], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Undercover in Field Lab"}).bindLabel("Starting Locaton: Undercover in Field Lab").bindPopup("<img src='img/map_sapienza/screenshots/enter_biolab.jpg'><h2>Starting Locaton</h2><h1>Undercover in Field Lab</h1><p class='note'>You will have Biolab Keycard from the start</p>"),
    L.marker([72.40, -125.6], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Harbor"}).bindLabel("Starting Locaton: Harbor").bindPopup("<img src='img/map_sapienza/screenshots/enter_harbor.jpg'><h2>Starting Locaton</h2><h1>Harbor</h1>"),
    L.marker([-0.35, -159.0], {icon: iconEnter, alt: "level0enter", title: "Starting Locaton: Sapienza Ruins"}).bindLabel("Starting Locaton: Sapienza Ruins").bindPopup("<img src='img/map_sapienza/screenshots/enter_ruins.jpg'><h2>Starting Locaton</h2><h1>Sapienza Ruins</h1>"),
    L.marker([72.55, -133.5], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Harbor Boat"}).bindLabel("Exit Locaton: Harbor Boat").bindPopup("<img src='img/map_sapienza/screenshots/exit_harbor.jpg'><h2>Exit Locaton</h2><h1>Harbor Boat</h1>"),
    L.marker([-0.35, -160.3], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Speedboat"}).bindLabel("Exit Locaton: Speedboat").bindPopup("<img src='img/map_sapienza/screenshots/exit_speedboat.jpg'><h2>Exit Locaton</h2><h1>Speedboat</h1>"),
    L.marker([30.75, -115.7], {icon: iconExit, alt: "level0exit", title: "Exit Locaton: Seaplane"}).bindLabel("Exit Locaton: Seaplane").bindPopup("<img src='img/map_sapienza/screenshots/exit_plane.jpg'><h2>Exit Locaton</h2><h1>Seaplane</h1>"),
 
    L.marker([-0.96, -158.1], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([74.69, -121.0], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([42.65, -128.2], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-2</h1>"),

    L.marker([51.59, -118.3], {icon: iconPassage, alt: "level0passage"}).bindLabel("Breach").bindPopup("<h2>Passage</h2><h1>Breach</h1><p class='req'>Requires Breaching Charge</p>"),
    L.marker([41.27, -91.84], {icon: iconPassage, alt: "level0passage"}).bindLabel("Drop Down").bindPopup("<h2>Passage</h2><h1>Drop Down</h1>"),

    L.marker([36.63, -132.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([43.38, -102.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([49.89, -124.8], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([55.62, -126.3], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([56.92, -105.9], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([63.33, -100.7], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([67.87, -106.5], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([68.67, -108.4], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([71.78, -110.6], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([73.45, -83.93], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([76.38, -89.73], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([77.24, -101.6], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([75.98, -119.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([80.22, -118.7], {icon: iconStairsUp, alt: "level0stairsupdown"}),

    new L.Polyline([[36.31, -112.8], [34.99, -112.8], [33.79, -111.1]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level0ledge"}).bindLabel("Ledge"),

]);

var level0weapons = L.layerGroup([

    L.marker([73.22, -96.63], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([59.24, -155.5], {icon: iconCoin, alt: "level0coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([45.79, -121.2], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([51.59, -115.1], {icon: iconPoisons, alt: "level0weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Explosive
    L.marker([48.28, -115.2], {icon: iconPropane, alt: "level0propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([36.24, -88.50], {icon: iconRemoteExpl, alt: "level0remexpl", title: "Weapon: Remote Explosive"}).bindLabel("Remote Explosive").bindPopup(txtRemoteExplosive),

    // Firearm
    L.marker([36.42, -87.27], {icon: iconFirearm, alt: "level0firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),
    L.marker([41.14, -116.4], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Shotgun Ammo"}).bindLabel("Shotgun Ammo").bindPopup(txtAmmoShotgun),
    L.marker([35.53, -87.67], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),
    L.marker([35.78, -86.57], {icon: iconAmmo, alt: "level0ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),

    // Melee
    L.marker([39.97, -113.4], {icon: iconCombatKnife, alt: "level0combatknife", title: "Weapon: Combat Knife"}).bindLabel("Combat Knife").bindPopup(txtCombatKnife),
    L.marker([32.13, -104.1], {icon: iconBrick, alt: "level0brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([42.55, -122.2], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([46.49, -103.2], {icon: iconFireAxe, alt: "level0fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([77.30, -111.7], {icon: iconBrick, alt: "level0brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([69.36, -99.36], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([40.31, -86.79], {icon: iconCrowbar, alt: "level0crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([74.18, -94.87], {icon: iconShovel, alt: "level0shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([40.11, -83.32], {icon: iconShovel, alt: "level0shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([59.19, -158.4], {icon: iconPipe, alt: "level0pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([53.19, -112.0], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([30.67, -96.19], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([43.13, -96.94], {icon: iconScrewdriver, alt: "level0screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([43.89, -120.6], {icon: iconSoda, alt: "level0sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([44.68, -123.3], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([28.92, -112.0], {icon: iconWrench, alt: "level0wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level0poi = L.layerGroup([

    L.marker([50.90, -119.2], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.01, -126.0], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([31.95, -123.9], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.83, -123.3], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([44.11, -122.3], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([40.24, -122.4], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.17, -117.9], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([30.33, -109.7], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.83, -89.12], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([45.92, -89.69], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.95, -98.87], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([46.43, -105.5], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([34.05, -99.44], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([42.19, -104.1], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([45.70, -98.83], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([44.37, -102.6], {icon: iconHidingSpot, alt: "level0hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([56.80, -116.9], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([55.02, -116.9], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([36.91, -93.99], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([40.01, -114.6], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([53.80, -110.6], {icon: iconWeaponCrate, alt: "level0weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([76.66, -113.4], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Priest"}).bindLabel("Disguise: Priest").bindPopup( popUp("priest", "Disguise", "Priest", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([44.33, -100.0], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Hazmat Suit"}).bindLabel("Disguise: Hazmat Suit").bindPopup( popUp("hazmat", "Disguise", "Hazmat Suit", "use", "req", "susp", "note", "ingame", "desc") ),
    
    L.marker([58.67, -156.0], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([51.50, -141.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([35.35, -97.99], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([44.46, -106.7], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([43.00, -106.7], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([44.46, -108.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([43.00, -108.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([38.89, -94.96], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([35.42, -92.32], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),

    L.marker([32.95, -93.55], {icon: iconSabotage, alt: "level0sab-gasvalve", title: "Sabotage: Gas Valve"}).bindLabel("Gas Valve").bindPopup( popGlobal(sabGasValve, "all") ),
    L.marker([49.18, -105.3], {icon: iconSabotage, alt: "level0sab-canister", title: "Sabotage: Gas Canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([47.30, -105.8], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([36.84, -93.60], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([32.28, -94.48], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([34.74, -115.5], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([41.21, -119.0], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([43.42, -111.8], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),
    L.marker([41.07, -104.8], {icon: iconSabotage, alt: "level0sab-stalactite", title: "Sabotage: Stalactite"}).bindLabel("Stalactite").bindPopup( popGlobal(sabStalactite, "susp") ),

    L.marker([76.81, -112.7], {icon: iconPoison, alt: "level0poison", title: "Poison: Priest"}).bindLabel("Glass of Red Wine (Priest)").bindPopup( popPoison("Glass of Red Wine", "Priest", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([41.73, -121.3], {icon: iconPoison, alt: "level0poison", title: "Poison: Biolab Security"}).bindLabel("Coffee Glass (Biolab Security)").bindPopup( popPoison("Coffee Glass", "Biolab Security", "all", "note") ),
    L.marker([40.81, -121.3], {icon: iconPoison, alt: "level0poison", title: "Poison: Lab Technician"}).bindLabel("Coffee Glass (x3) (Lab Technician)").bindPopup( popPoison("Coffee Glass", "Lab Technician", "all", "note") ),
    L.marker([44.18, -118.5], {icon: iconPoison, alt: "level0poison", title: "Poison: Lab Technician (Laptop Dongle)"}).bindLabel("Water Bottle (Lab Technician (Laptop Dongle))").bindPopup( popPoison("Water Bottle", "Lab Technician (Laptop Dongle)", "all", "note") ),

    L.marker([75.71, -114.0], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([55.62, -110.5], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x4)").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([57.89, -114.3], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink (x3)").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([53.22, -110.9], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([56.70, -117.6], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([54.90, -117.6], {icon: iconDistraction, alt: "level0dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([29.57, -96.76], {icon: iconDistraction, alt: "level0dis-forklift", title: "Distraction: Forklift"}).bindLabel("Forklift").bindPopup( popGlobal(disForklift, "all") ),
    L.marker([39.74, -88.94], {icon: iconDistraction, alt: "level0dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),

    L.marker([39.47, -90.21], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([37.78, -97.38], {icon: iconIntel, alt: "level0intel", title: "Intel: Biolab Safety Protocol"}).bindLabel("Biolab Safety Protocol").bindPopup( popUp("biosafe", "Intel", "Biolab Safety Protocol", "Examine", "req", "susp", "Reveals 'Hostile Environment' opportunity", "According to the safety protocol, the air inside the central lab unit is highly toxic, and entering requires a hazmat suit. However, the air recycling system on the control platform outside the lab can temporarily clear the toxins.", "desc") ),
    L.marker([73.70, -128.9], {icon: iconIntel, alt: "level0intel", title: "Intel: The Love Affair"}).bindLabel("The Love Affair").bindPopup( popUp("affair", "Intel", "The Love Affair", "Listen to the Conversation", "req", "susp", "note", "Apparently, Francesca De Santis is having a love affair with Roberto Vargas, a former golf pro who works as Silvio Caruso's private coach. Although Vargas is a notorious ladies' man, it appears De Santis is the one holding back.", "desc") ),
    
    L.marker([59.68, -103.2], {icon: iconItem, alt: "level0item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([44.37, -119.9], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([37.47, -106.1], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([44.40, -101.3], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([0.966, -159.6], {icon: iconItem, alt: "level0item", title: "Item: Sewer Key"}).bindLabel("Sewer Key").bindPopup( popUp("keysewer", "Item", "Sewer Key", "use", "req", "susp", "In the bottle", "An access key for the town's sewer system.", "desc")),

    L.marker([57.25, -152.9], {icon: iconLocation, alt: "level0location", title: "Location: De Santis and Detective Meeting Spot"}).bindLabel("De Santis and Detective Meeting Spot").bindPopup( popUp("pier", "Location", "De Santis and Detective Meeting Spot", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([51.59, -116.9], {icon: iconLocation, alt: "level0location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([22.02, -122.0], {icon: iconLocation, alt: "level0location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),
    
    L.marker([42.58, -123.3], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([32.39, -106.0], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([27.17, -98.52], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([50.26, -104.9], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([38.37, -91.05], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([35.20, -91.14], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid hidingspot"}).bindLabel("Acid Container").bindPopup( popUp("acid", "Interaction", "Acid Container", "Dump Body", "req", "susp", "note", "ingame", "desc") ),
    L.marker([36.77, -97.33], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Ventilation System"}).bindLabel("Ventilation System").bindPopup( popUp("vent", "Interaction", "Ventilation System", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),
    L.marker([33.76, -93.60], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Ventilation System"}).bindLabel("Ventilation System").bindPopup( popUp("vent", "Interaction", "Ventilation System", "Turn On/Off", "req", "susp", "note", "ingame", "desc") ),
    L.marker([39.67, -96.06], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Research Station"}).bindLabel("Research Station").bindPopup( popUp("restat", "Interaction", "Research Station", "Sabotage Computer", "req", "susp", "note", "ingame", "desc") ),
    L.marker([36.84, -92.68], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Virus Cabinet"}).bindLabel("Virus Cabinet").bindPopup( popUp("virus", "Interaction", "Virus Cabinet", "Increase Temperature", "req", "susp", "note", "ingame", "desc") ),
    L.marker([34.12, -91.18], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Rats"}).bindLabel("Rats").bindPopup( popUp("mouse", "Interaction", "Rats", "Poison Rats", "Requires Emetic Rat Poison", "susp", "note", "ingame", "desc") ),
    L.marker([33.72, -95.53], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Robot Arm"}).bindLabel("Robot Arm").bindPopup( popUp("robotarm", "Interaction", "Robot Arm", "Manual Override", "req", "susp", "note", "ingame", "desc") ),

    L.marker([21.65, -124.0], {icon: iconCamera, alt: "level0camera", title: "Camera: Biolab"}).bindLabel("Security Camera"),
    L.polygon([[21.65, -124.0], [19.64, -122.9], [19.64, -125.3]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([39.70, -120.2], {icon: iconCamera, alt: "level0camera", title: "Camera: Biolab"}).bindLabel("Security Camera"),
    L.polygon([[39.70, -120.2], [36.10, -119.9], [36.52, -123.7]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([44.11, -111.2], {icon: iconCamera, alt: "level0camera", title: "Camera: Biolab"}).bindLabel("Security Camera"),
    L.polygon([[44.11, -111.2], [43.29, -118.5], [45.85, -118.5]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([41.31, -109.6], {icon: iconCamera, alt: "level0camera", title: "Camera: Biolab"}).bindLabel("Security Camera"),
    L.polygon([[41.31, -109.6], [37.37, -111.9], [37.37, -107.9]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([49.03, -97.07], {icon: iconCamera, alt: "level0camera", title: "Camera: Biolab"}).bindLabel("Security Camera"),
    L.polygon([[49.03, -97.07], [46.37, -98.08], [47.78, -101.5]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    
    L.marker([76.35, -111.2], {icon: iconEvidence, alt: "level0evidence", title: "Camera Recorder: Church"}).bindLabel("Camera Recorder (Church)").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    L.marker([43.77, -119.9], {icon: iconEvidence, alt: "level0evidence", title: "Camera Recorder: Biolab"}).bindLabel("Camera Recorder (Biolab)").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),

    L.marker([74.10, -114.2], {icon: iconLocked, alt: "level0locked", title: "Locked: Church Key"}).bindLabel("Locked Door (Church Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key</p>"),
    L.marker([75.75, -115.9], {icon: iconLocked, alt: "level0locked", title: "Locked: Church Key"}).bindLabel("Locked Door (Church Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key</p>"),
    L.marker([74.16, -107.6], {icon: iconLocked, alt: "level0locked", title: "Locked: Sewer Key"}).bindLabel("Locked Door (Sewer Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Sewer Key</p>"),
    L.marker([72.58, -99.44], {icon: iconLocked, alt: "level0locked", title: "Locked: Sewer Key"}).bindLabel("Locked Door (Sewer Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Sewer Key</p>"),
    L.marker([58.24, -108.0], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([44.99, -111.1], {icon: iconLocked, alt: "level0locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Door (Biolab Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([41.54, -106.2], {icon: iconLocked, alt: "level0locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Door (Biolab Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([46.13, -99.88], {icon: iconLocked, alt: "level0locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Door (Biolab Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([73.66, -114.9], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Confessional Booth"}).bindLabel("Small Agency Pickup: Confessional Booth").bindPopup("<img src='img/map_sapienza/screenshots/ica_booth.jpg'><h2>Small Agency Pickup</h2><h1>ICA Confessional Booth</h1>"),
    L.marker([76.80, -104.4], {icon: iconEnter, alt: "level1enter", title: "Starting Locaton: Sapienza Ruins"}).bindLabel("Starting Locaton: Church Morgue").bindPopup("<img src='img/map_sapienza/screenshots/enter_morgue.jpg'><h2>Starting Locaton</h2><h1>Church Morgue</h1>"),
  
    L.marker([-4.95, -153.0], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([25.56, -138.6], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([-0.96, -158.1], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([74.69, -121.0], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([79.51, -125.1], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
 
    L.marker([-3.16, -156.5], {icon: iconPassage, alt: "level1passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([76.58, -96.89], {icon: iconPassage, alt: "level1passage"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([76.81, -125.9], {icon: iconPassage, alt: "level1passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([75.19, -121.4], {icon: iconPassage, alt: "level1passage"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),

    L.marker([45.58, -113.3], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([49.83, -129.4], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([54.57, -125.1], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([55.55, -108.0], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([40.64, -132.8], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([62.26, -84.19], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([66.87, -83.45], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([76.27, -120.5], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([73.21, -83.93], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),
    L.marker([41.37, -123.3], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([43.29, -101.7], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([49.83, -123.0], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([55.60, -125.0], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([57.32, -106.5], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.29, -90.00], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.70, -99.31], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.83, -118.3], {icon: iconStairsDown, alt: "level1stairsupdown"}),

]);

var level1weapons = L.layerGroup([

    L.marker([70.05, -84.41], {icon: iconBaseballBat, alt: "level1baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),
    L.marker([69.38, -84.55], {icon: iconExtinguisher, alt: "level1extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([74.61, -87.53], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([73.26, -113.3], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([26.19, -140.4], {icon: iconCoin, alt: "level1coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([76.54, -121.2], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([75.02, -119.6], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick (x2)").bindPopup(txtBrick),
    L.marker([80.79, -115.8], {icon: iconBrick, alt: "level1brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([45.05, -108.6], {icon: iconHammer, alt: "level1hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([73.31, -73.38], {icon: iconPipe, alt: "level1pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([73.12, -74.04], {icon: iconSoda, alt: "level1sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([75.73, -102.0], {icon: iconKnife, alt: "level1knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),
    L.marker([76.99, -124.2], {icon: iconOldAxe, alt: "level1oldaxe", title: "Weapon: Old Axe"}).bindLabel("Old Axe").bindPopup(txtOldAxe),
    L.marker([70.52, -83.18], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([76.47, -114.3], {icon: iconScissors, alt: "level1scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([77.19, -125.2], {icon: iconScrewdriver, alt: "level1screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([80.11, -112.8], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([78.85, -121.7], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([77.03, -126.1], {icon: iconShovel, alt: "level1shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([71.74, -69.34], {icon: iconWrench, alt: "level1wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level1poi = L.layerGroup([

    L.marker([73.00, -74.83], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([75.87, -85.73], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([76.02, -103.8], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([30.14, -136.3], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([45.73, -98.65], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([40.07, -121.1], {icon: iconHidingSpot, alt: "level1hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([76.01, -87.62], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([75.55, -85.95], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([76.66, -101.2], {icon: iconWeaponCrate, alt: "level1weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([75.87, -103.1], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Lab Technician"}).bindLabel("Disguise: Lab Technician").bindPopup( popUp("labstaff", "Disguise", "Lab Technician", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([65.27, -93.25], {icon: iconNPC, alt: "level1npc", title: "NPC: Street Performer"}).bindLabel("Street Performer").bindPopup( popUp("img", "NPC", "Street Performer", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([69.68, -80.72], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([69.34, -81.47], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([65.29, -98.56], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([71.24, -90.92], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([70.71, -111.3], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([72.67, -94.74], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.50, -100.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.67, -103.8], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([77.36, -122.1], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.75, -122.2], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([78.72, -114.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([78.31, -130.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([73.44, -105.6], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([73.46, -113.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([78.41, -109.2], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([79.05, -117.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),

    L.marker([75.25, -88.76], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([75.44, -89.60], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([76.20, -86.79], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([75.72, -85.25], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([75.69, -102.5], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([76.19, -100.0], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([76.07, -114.8], {icon: iconDistraction, alt: "level1dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([78.75, -122.9], {icon: iconDistraction, alt: "level1dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([28.22, -134.4], {icon: iconDistraction, alt: "level1dis-power", title: "Distraction: Power"}).bindLabel("Power").bindPopup( popGlobal(disPower, "all") ),
    L.marker([44.18, -100.4], {icon: iconDistraction, alt: "level1dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([77.30, -124.6], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([79.22, -134.8], {icon: iconDistraction, alt: "level1dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),

    L.marker([67.87, -86.04], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([69.06, -84.15], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([71.73, -79.58], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([69.13, -78.48], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([74.24, -76.64], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([73.86, -77.65], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([66.23, -86.87], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([63.27, -87.71], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([61.75, -91.05], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([64.20, -100.5], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.40, -96.76], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([71.46, -96.72], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([69.70, -104.1], {icon: iconSabotage, alt: "level1sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([77.33, -127.9], {icon: iconSabotage, alt: "level1sab-tractor", title: "Sabotage: Garden Tractor"}).bindLabel("Garden Tractor").bindPopup( popGlobal(sabTractor, "all") ),
    L.marker([75.09, -113.4], {icon: iconSabotage, alt: "level1sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([76.26, -118.2], {icon: iconSabotage, alt: "level1sab-bell", title: "Sabotage: Church Bell"}).bindLabel("Church Bell").bindPopup( popUp("img", "Sabotage", "Church Bell", "use", "req", "susp", "Winch is on the 6th level", "ingame", "desc") ),

    L.marker([72.95, -71.85], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Tourist", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([65.20, -90.48], {icon: iconPoison, alt: "level1poison", title: "Poison: Street Performer"}).bindLabel("Water Bottle (Street Performer)").bindPopup( popPoison("Water Bottle", "Street Performer", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([79.44, -134.3], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Tourist", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([69.96, -85.56], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([69.51, -86.66], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup( popPoison("Glass of White Wine", "Unknown", "Waiter / Kitchen Assistant / Chef", "note") ),

    L.marker([70.12, -83.05], {icon: iconIntel, alt: "level1intel", title: "Intel: The Private Detective"}).bindLabel("The Private Detective").bindPopup( popUp("detective", "Intel", "The Private Detective", "Listen to the conversation", "req", "susp", "note", "According to the hairdresser, Sal Falcone, a private investigator from Milan, is in town to meet Francesca De Santis. This Falcone character has apparently performed services for Silvio Caruso in the past. Whatever they were, the case appears to have taken him all around the country. Question is, does Falcone still work for Caruso, or does De Santis have an agenda of her own?", "desc") ),
    L.marker([73.87, -115.4], {icon: iconIntel, alt: "level1intel", title: "Intel: The Accident at the Lab"}).bindLabel("The Accident at the Lab").bindPopup( popUp("confession", "Intel", "The Accident at the Lab", "Listen to the conversation", "req", "susp", "note", "According to the scientist in the confession booth, an accident at the Ether lab has claimed the life of a male scientist. His body is currently stored at the town morgue. The female scientist, who appears to be somehow responsible for the accident, plans to visit the morgue to pay her respects.", "desc") ),
    L.marker([42.77, -119.8], {icon: iconIntel, alt: "level1intel", title: "Intel: Biolab Safety Protocol"}).bindLabel("Biolab Safety Protocol").bindPopup( popUp("biosec", "Intel", "Biolab Safety Protocol", "Examine", "req", "susp", "note", "A clipboard with the lab's safety protocol. To prevent a disastrous outbreak, a kill switch has been installed. One push of a key, and the virus instantly overheats and dies. However, the laptop that controls the kill switch requires an access dongle, and the scientist who holds this dongle has left a note that reads 'gone to church.'", "desc") ),

    L.marker([76.04, -102.3], {icon: iconItem, alt: "level1item", title: "Item: Biolab Laptop Dongle"}).bindLabel("Biolab Laptop Dongle").bindPopup( popUp("dongle", "Item", "Biolab Laptop Dongle", "use", "req", "susp", "Dongle is carried by a redhead lab technician lady. She will mourn her colleague in morgue for some time, then will go back to the lab.", "A laptop access dongle. Must be importatnt.", "desc") ),
    L.marker([76.94, -103.4], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([78.23, -108.4], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([79.23, -118.3], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([76.73, -115.4], {icon: iconItem, alt: "level1item", title: "Item: Church Key"}).bindLabel("Church Key").bindPopup( popUp("keychurch", "Item", "Church Key", "use", "req", "susp",  "note", "A master key to Sapienza's town church.", "desc") ),

    L.marker([29.11, -135.3], {icon: iconLocation, alt: "level1location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([41.83, -119.8], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Biolab Laptop"}).bindLabel("Biolab Laptop").bindPopup( popUp("laptop", "Interaction", "Biolab Laptop", "Destroy Virus", "Biolab Laptop Dongle", "susp", "note", "ingame", "desc") ),

    L.marker([76.42, -111.0], {icon: iconCamera, alt: "level1camera", title: "Camera: Church"}).bindLabel("Security Camera (Church)"),
    L.polygon([[76.42, -111.0], [77.35, -111.1], [76.43, -106.7]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([76.67, -120.2], {icon: iconCamera, alt: "level1camera", title: "Camera: Church"}).bindLabel("Security Camera (Church)"),
    L.polygon([[76.67, -120.2], [78.16, -121.3], [77.34, -125.2], [76.97, -123.4], [76.38, -126.2]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([27.48, -137.2], {icon: iconCamera, alt: "level1camera", title: "Camera: Biolab"}).bindLabel("Security Camera (Biolab)"),
    L.polygon([[27.48, -137.2], [27.91, -139.9], [29.80, -138.2]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),

    L.marker([73.32, -72.20], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([72.56, -72.33], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([75.75, -89.34], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([75.88, -100.6], {icon: iconLocked, alt: "level1locked", title: "Locked: Church Key"}).bindLabel("Locked Door (Church Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key</p>"),
    L.marker([76.37, -106.1], {icon: iconLocked, alt: "level1locked", title: "Locked: Church Key"}).bindLabel("Locked Door (Church Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key</p>"),
    L.marker([76.81, -124.4], {icon: iconLocked, alt: "level1locked", title: "Locked: Church Key"}).bindLabel("Locked Door (Church Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key</p>"),
    L.marker([28.61, -136.7], {icon: iconLocked, alt: "level1locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Door (Biolab Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([61.48, -84.50], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 2-4</h1>"),
    L.marker([-4.95, -153.0], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([25.56, -138.6], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([42.65, -128.2], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-2</h1>"),

    L.marker([4.959, -156.4], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([6.577, -152.9], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([44.52, -90.83], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([44.90, -107.0], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([51.99, -118.0], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([57.61, -91.36], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([66.19, -78.44], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([63.15, -62.22], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([62.65, -83.80], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([73.20, -83.93], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([54.52, -125.9], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([55.52, -107.1], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([67.47, -82.83], {icon: iconStairsDown, alt: "level2stairsupdown"}),

]);

var level2weapons = L.layerGroup([

    L.marker([67.11, -52.47], {icon: iconCoin, alt: "level2coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([70.42, -51.98], {icon: iconCoin, alt: "level2coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([53.90, -111.4], {icon: iconCoin, alt: "level2coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([49.97, -132.7], {icon: iconCoin, alt: "level2coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([53.19, -103.1], {icon: iconPoisons, alt: "level2weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([44.96, -132.2], {icon: iconFirearm, alt: "level2firearm", title: "Weapon: Pistol Bartoli 75S"}).bindLabel("Pistol: Bartoli 75S").bindPopup(txtBartoli75S),
    L.marker([44.40, -131.8], {icon: iconAmmo, alt: "level2ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),
    L.marker([53.69, -106.6], {icon: iconBaseballBat, alt: "level2baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),
    L.marker([65.76, -56.29], {icon: iconKnifeFold, alt: "level2foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([61.14, -100.2], {icon: iconKnifeFold, alt: "level2foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([28.92, -133.3], {icon: iconHammer, alt: "level2hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([66.28, -57.87], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([56.96, -119.0], {icon: iconSoda, alt: "level2sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([66.03, -66.57], {icon: iconShovel, alt: "level2shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([29.72, -134.4], {icon: iconShovel, alt: "level2shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([24.12, -135.8], {icon: iconShovel, alt: "level2shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([53.22, -112.4], {icon: iconScissors, alt: "level2scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([28.14, -132.3], {icon: iconScrewdriver, alt: "level2screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([65.89, -80.90], {icon: iconKnife, alt: "level2knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),
    L.marker([55.00, -100.3], {icon: iconKnife, alt: "level2knife", title: "Weapon: Knife"}).bindLabel("Knife").bindPopup(txtKnife),
    L.marker([61.16, -101.5], {icon: iconBaton, alt: "level2baton", title: "Weapon: Police Baton"}).bindLabel("Police Baton").bindPopup(txtBaton),
    L.marker([62.61, -60.42], {icon: iconWrench, alt: "level2wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level2poi = L.layerGroup([

    L.marker([62.59, -61.47], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([68.94, -60.73], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([69.94, -61.61], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([72.91, -57.52], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([67.62, -85.12], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([65.83, -83.40], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([27.13, -131.6], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([46.70, -134.5], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.52, -103.4], {icon: iconHidingSpot, alt: "level2hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([64.77, -82.44], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([53.33, -120.6], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([55.07, -101.3], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([56.21, -102.3], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([46.01, -134.4], {icon: iconWeaponCrate, alt: "level2weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([66.23, -65.65], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Delivery Man"}).bindLabel("Disguise: Delivery Man").bindPopup( popUp("delivery", "Disguise", "Delivery Man", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([65.67, -85.38], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Church Staff"}).bindLabel("Disguise: Church Staff").bindPopup( popUp("church", "Disguise", "Church Staff", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([52.56, -116.4], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Mansion Security"}).bindLabel("Disguise: Mansion Security").bindPopup( popUp("mansec", "Disguise", "Mansion Security", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([53.82, -108.3], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Store Clerk"}).bindLabel("Disguise: Store Clerk").bindPopup( popUp("store", "Disguise", "Store Clerk", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([53.01, -105.5], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Kitchen Assistant"}).bindLabel("Disguise: Kitchen Assistant").bindPopup( popUp("kitchenass", "Disguise", "Kitchen Assistant", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([67.95, -53.17], {icon: iconNPC, alt: "level2npc", title: "NPC: Private Detective"}).bindLabel("Private Detective").bindPopup( popUp("img", "NPC", "Private Detective", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([68.22, -52.51], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),

    L.marker([67.77, -55.45], {icon: iconDistraction, alt: "level2dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([64.73, -80.72], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([52.74, -120.3], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([54.23, -103.4], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([54.26, -98.87], {icon: iconDistraction, alt: "level2dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),

    L.marker([65.03, -52.07], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.60, -53.87], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.46, -52.07], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.65, -58.79], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([68.98, -63.14], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([72.67, -60.95], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter (x2)").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([72.93, -56.03], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([70.75, -54.00], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.44, -69.21], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([63.05, -70.09], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([65.33, -71.76], {icon: iconSabotage, alt: "level2sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([67.50, -57.78], {icon: iconSabotage, alt: "level2sab-gasvalve"}).bindLabel("Gas Valve").bindPopup( popGlobal(sabGasValve, "all") ),
    L.marker([55.30, -115.3], {icon: iconSabotage, alt: "level2sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),

    L.marker([65.47, -80.90], {icon: iconPoison, alt: "level2poison", title: "Poison: Church Staff"}).bindLabel("Glass of Red Wine (Church Staff)").bindPopup( popPoison("Glass of Red Wine", "Church Staff", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([60.95, -111.2], {icon: iconPoison, alt: "level2poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Tourist", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([60.78, -100.9], {icon: iconPoison, alt: "level2poison", title: "Poison: Bodyguard"}).bindLabel("Coffee Glass (x3) (Bodyguard)").bindPopup( popPoison("Coffee Glass", "Bodyguard", "Waiter / Kitchen Assistant / Chef", "note") ),

    L.marker([-0.61, -153.4], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([16.46, -152.7], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([3.864, -150.1], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([-2.10, -155.2], {icon: iconItem, alt: "level2item", title: "Item: Cannabis Joint"}).bindLabel("Cannabis Joint").bindPopup( popUp("cannabis", "Item", "Cannabis Joint", "use", "req", "susp", "note", "A joint belonging to the apartment's bohemian owner. Potent stuff, it's useful to cause sleepiness and increased appetite.", "desc")),
    L.marker([12.94, -151.1], {icon: iconItem, alt: "level2item", title: "Item: Castle Key"}).bindLabel("Castle Key").bindPopup( popUp("keycastle", "Item", "Castle Key", "use", "req", "susp", "note", "A key to the castle ruins off the coast from Villa Caruso.", "desc")),
    L.marker([66.68, -67.06], {icon: iconItem, alt: "level2item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([66.35, -81.82], {icon: iconItem, alt: "level2item", title: "Item: Church Key"}).bindLabel("Church Key").bindPopup( popUp("keychurch", "Item", "Church Key", "use", "req", "susp", "note", "A master key to Sapienza's town church.", "desc")),
    L.marker([75.98, -115.4], {icon: iconItem, alt: "level2item", title: "Item: Sewer Key"}).bindLabel("Sewer Key").bindPopup( popUp("keysewer", "Item", "Sewer Key", "use", "req", "susp", "note", "An access key for the town's sewer system.", "desc")),
    L.marker([45.79, -131.0], {icon: iconItem, alt: "level2item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),

    L.marker([28.49, -135.8], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Grave Flowers"}).bindLabel("Grave Flowers").bindPopup( popUp("grave", "Interaction", "Grave Flowers", "Place Flowers", "req", "susp", "note", "ingame", "desc") ),
    L.marker([22.59, -130.7], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Shredder"}).bindLabel("Shredder").bindPopup( popUp("shredder", "Interaction", "Shredder", "Shred", "req", "susp", "note", "ingame", "desc") ),

    L.marker([37.23, -133.9], {icon: iconLocation, alt: "level2location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([45.08, -134.0], {icon: iconLocation, alt: "level2location", title: "Location: Silvio Caruso Safe Room"}).bindLabel("Silvio Caruso Safe Room").bindPopup( popUp("img", "Location", "Silvio Caruso Safe Room", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([63.84, -59.72], {icon: iconLocked, alt: "level2locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([14.56, -139.9], {icon: iconLocked, alt: "level2locked", title: "Locked: Castle Key"}).bindLabel("Locked Door (Castle Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Castle Key</p>"),
    L.marker([15.62, -151.6], {icon: iconLocked, alt: "level2locked", title: "Locked: Castle Key"}).bindLabel("Locked Door (Castle Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Castle Key</p>"),
    L.marker([65.23, -56.51], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([67.15, -67.28], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([65.83, -68.51], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([66.63, -85.38], {icon: iconLocked, alt: "level2locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p>"),
    L.marker([66.28, -80.63], {icon: iconLocked, alt: "level2locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p>"),
    L.marker([54.82, -120.4], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([57.89, -116.1], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([58.21, -101.3], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([53.61, -110.1], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([53.80, -105.0], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([58.07, -93.60], {icon: iconLocked, alt: "level2locked", title: "Locked: Mansion Keycard"}).bindLabel("Locked Door (Mansion Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([37.40, -136.0], {icon: iconLocked, alt: "level2locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([35.13, -98.92], {icon: iconIcaStash, alt: "level3icastash", title: "Small Agency Pickup: Mansion Garage"}).bindLabel("Small Agency Pickup: Mansion Garage").bindPopup("<img src='img/map_sapienza/screenshots/ica_garage.jpg'><h2>Small Agency Pickup</h2><h1>Mansion Garage</h1>"),
    L.marker([48.83, -42.27], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Cafe Basement"}).bindLabel("Large Agency Pickup: Cafe Basement").bindPopup("<img src='img/map_sapienza/screenshots/ica_cafe.jpg'><h2>Large Agency Pickup</h2><h1>Cafe Basement</h1>"),

    L.marker([43.42, -57.70], {icon: iconEnter, alt: "level3enter", title: "Starting Locaton: Main Square"}).bindLabel("Starting Locaton: Main Square").bindPopup("<img src='img/map_sapienza/screenshots/enter_main.jpg'><h2>Starting Locaton</h2><h1>Main Square</h1>"),
    L.marker([35.56, -69.34], {icon: iconExit, alt: "level3exit"}).bindLabel("Exit Locaton: Car").bindPopup("<img src='img/map_sapienza/screenshots/exit_car.jpg'><h2>Exit Locaton</h2><h1>Car</h1>"),

    L.marker([29.72, -72.29], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([52.72, -41.08], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([58.14, -82.17], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([62.02, -79.89], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([45.18, -79.10], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Climb Through").bindPopup("<h2>Way Down</h2><h1>Climb Through</h1>"),

    L.marker([7.928, -152.0], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([23.07, -112.4], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([26.39, -109.9], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([30.25, -103.9], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([31.87, -97.38], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([33.54, -102.8], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([31.95, -72.15], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.89, -85.78], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.26, -128.1], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([50.62, -108.3], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([53.48, -92.24], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([55.52, -114.0], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([56.38, -85.69], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([60.65, -75.89], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([39.13, -47.37], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.22, -36.73], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([46.95, -39.59], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([50.81, -48.42], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([54.95, -42.80], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([56.21, -44.69], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),
    L.marker([62.63, -83.75], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),
    L.marker([0.790, -156.4], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([44.49, -90.79], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([45.27, -107.5], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([52.07, -118.0], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([67.05, -78.48], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([63.31, -61.78], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([73.42, -84.06], {icon: iconStairsDown, alt: "level3stairsupdown"}),

]);

var level3weapons = L.layerGroup([

    L.marker([26.11, -115.5], {icon: iconPoisons, alt: "level3weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Firearm
    L.marker([64.30, -81.95], {icon: iconFirearm, alt: "level3firearm", title: "Weapon: Pistol Bartoli 75R"}).bindLabel("Pistol: Bartoli 75R").bindPopup(txtBartoli75R),
    L.marker([63.87, -81.91], {icon: iconAmmo, alt: "level3ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),

    // Explosive
    L.marker([58.49, -78.31], {icon: iconPropane, alt: "level3propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([37.75, -90.39], {icon: iconExtinguisher, alt: "level3extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Melee
    L.marker([37.16, -52.29], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x5)").bindPopup(txtCoin + "<p class='note'>Shoot in the scales</p>"),
    L.marker([45.02, -47.06], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([45.36, -77.03], {icon: iconCoin, alt: "level3coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([60.99, -39.19], {icon: iconBaseballBat, alt: "level3baseballbat", title: "Weapon: Baseball Bat"}).bindLabel("Baseball Bat").bindPopup(txtBaseballBat),
    L.marker([35.38, -61.83], {icon: iconBust, alt: "level3bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([62.20, -57.30], {icon: iconBust, alt: "level3bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([29.30, -76.64], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([30.14, -78.79], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([28.99, -81.43], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([29.91, -83.23], {icon: iconBrick, alt: "level3brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([59.31, -78.39], {icon: iconCleaver, alt: "level3cleaver", title: "Weapon: Cleaver"}).bindLabel("Cleaver").bindPopup(txtCleaver),
    L.marker([44.11, -42.49], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([39.50, -96.54], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([50.06, -134.0], {icon: iconCrowbar, alt: "level3crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([39.50, -100.8], {icon: iconFireAxe, alt: "level3fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([55.72, -116.8], {icon: iconFireAxe, alt: "level3fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([59.15, -74.75], {icon: iconKnife, alt: "level3knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([64.11, -80.11], {icon: iconCombatKnife, alt: "level3combatknife", title: "Weapon: Combat Knife"}).bindLabel("Combat Knife").bindPopup(txtCombatKnife),
    L.marker([45.18, -89.95], {icon: iconPipe, alt: "level3pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([72.71, -85.29], {icon: iconShovel, alt: "level3shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([60.80, -61.39], {icon: iconSoda, alt: "level3sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([33.02, -93.38], {icon: iconWrench, alt: "level3wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),

]);

var level3poi = L.layerGroup([

    L.marker([33.54, -63.85], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.05, -79.18], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([45.95, -49.74], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([42.09, -49.13], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.14, -46.36], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([60.30, -39.41], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.14, -40.03], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.26, -40.29], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.66, -45.61], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([52.07, -46.97], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([53.98, -44.29], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot (x2)"),
    L.marker([56.92, -84.28], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([53.90, -74.26], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([34.52, -72.29], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([30.93, -72.02], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([38.34, -87.58], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.60, -87.05], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.59, -88.11], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.35, -99.09], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.30, -95.14], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.61, -102.7], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.06, -90.74], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([47.01, -106.1], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([42.90, -92.02], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([41.24, -87.45], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([39.43, -91.14], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([33.10, -98.34], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([38.99, -105.2], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([30.56, -106.5], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([33.54, -114.5], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([36.94, -113.8], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([29.15, -115.1], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.50, -115.2], {icon: iconHidingSpot, alt: "level3hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([40.51, -46.66], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([72.67, -83.36], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([63.31, -79.10], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([40.27, -105.1], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([45.61, -42.97], {icon: iconWeaponCrate, alt: "level3weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([54.74, -85.29], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Mansion Staff"}).bindLabel("Disguise: Mansion Staff").bindPopup( popUp("manstaff", "Disguise", "Mansion Staff", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([48.45, -106.8], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Housekeeper"}).bindLabel("Disguise: Housekeeper").bindPopup( popUp("housekeeper", "Disguise", "Housekeeper", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([46.37, -90.08], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Gardener"}).bindLabel("Disguise: Gardener").bindPopup( popUp("gardener", "Disguise", "Gardener", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([72.36, -85.34], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Gardener"}).bindLabel("Disguise: Gardener").bindPopup( popUp("gardener", "Disguise", "Gardener", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([64.24, -76.50], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Mansion Security"}).bindLabel("Disguise: Mansion Security").bindPopup( popUp("mansec", "Disguise", "Mansion Security", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([17.22, -61.96], {icon: iconNPC, alt: "level3npc", title: "NPC: Cyclist"}).bindLabel("Cyclist").bindPopup( popUp("img", "NPC", "Cyclist", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([17.68, -69.52], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([42.58, -58.49], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([51.20, -61.17], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([54.05, -76.50], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),

    L.marker([57.46, -77.25], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([60.75, -71.98], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([60.34, -43.02], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([57.39, -42.05], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([30.52, -81.25], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),
    L.marker([29.95, -81.95], {icon: iconSabotage, alt: "level3sab-scooter", title: "Sabotage: Scooter"}).bindLabel("Scooter").bindPopup( popGlobal(sabScooter, "all") ),

    L.marker([44.21, -50.88], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([43.80, -49.57], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([44.77, -42.05], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([41.31, -47.37], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([40.27, -44.47], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([50.56, -41.79], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([55.92, -88.90], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([46.43, -91.49], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([44.11, -97.82], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([39.43, -92.72], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([72.68, -82.66], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([63.33, -77.78], {icon: iconDistraction, alt: "level3dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([34.30, -75.49], {icon: iconDistraction, alt: "level3dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([31.69, -108.9], {icon: iconDistraction, alt: "level3dis-power", title: "Distraction: Power"}).bindLabel("Power").bindPopup( popGlobal(disPower, "all") ),
    L.marker([37.82, -98.70], {icon: iconDistraction, alt: "level3dis-generator", title: "Distraction: Generator"}).bindLabel("Generator").bindPopup( popGlobal(disGenerator, "all") ),
    L.marker([26.07, -114.6], {icon: iconDistraction, alt: "level3dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),

    L.marker([47.98, -55.19], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([49.92, -55.72], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([50.28, -53.87], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),

    L.marker([20.46, -70.70], {icon: iconItem, alt: "level3item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup( popUp("bouquet", "Item", "Flower Bouquet", "use", "req", "susp", "Part of 'The Good Son' opportunity", "A fresh bouquet of flowers. The recipient is Silvio Caruso.", "desc") ),
    L.marker([62.77, -63.54], {icon: iconItem, alt: "level3item", title: "Item: Shop Key"}).bindLabel("Shop Key").bindPopup( popUp("keyshop", "Item", "Shop Key", "use", "req", "susp", "note", "A key to a shop in town.", "desc") ),
    L.marker([56.89, -97.73], {icon: iconItem, alt: "level3item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce (x3)").bindPopup( popUp("sauce", "Item", "Expired Can of Spaghetti Sauce", "use", "req", "susp", "note", "An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.", "desc") ),
    L.marker([33.65, -110.4], {icon: iconItem, alt: "level3item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([56.02, -90.87], {icon: iconItem, alt: "level3item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup( popUp("keycardman", "Item", "Mansion Keycard", "use", "req", "susp", "note", "An access keycard for Villa Caruso's two service entrances.", "desc") ),
    L.marker([5.965, -146.3], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([13.23, -140.3], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([13.02, -143.4], {icon: iconItem, alt: "level3item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup( popUp("gunpowder", "Item", "Bag of Gunpowder", "use", "req", "susp", "note", "A bag containing gunpowder used to arm the antique canon.", "desc") ),
    L.marker([8.754, -156.6], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([8.276, -157.5], {icon: iconItem, alt: "level3item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup( popUp("gunpowder", "Item", "Bag of Gunpowder", "use", "req", "susp", "note", "A bag containing gunpowder used to arm the antique canon.", "desc") ),
    L.marker([65.03, -78.96], {icon: iconItem, alt: "level3item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup( popUp("keycardman", "Item", "Mansion Keycard", "use", "req", "susp", "note", "An access keycard for Villa Caruso's two service entrances.", "desc") ),
    L.marker([71.91, -85.56], {icon: iconItem, alt: "level3item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup( popUp("keycardman", "Item", "Mansion Keycard", "use", "req", "susp", "note", "An access keycard for Villa Caruso's two service entrances.", "desc") ),
    L.marker([72.32, -86.35], {icon: iconItem, alt: "level3item", title: "Item: Apartment Key"}).bindLabel("Apartment Key").bindPopup( popUp("keyapt", "Item", "Apartment Key", "use", "req", "susp", "note", "A key to an apartment in town.", "desc") ),

    L.marker([43.42, -104.8], {icon: iconLocation, alt: "level3location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([54.18, -117.9], {icon: iconLocation, alt: "level3location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup( popUp("biolabenter", "Location", "Biolab Entrance", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([33.61, -112.7], {icon: iconLocation, alt: "level3location", title: "Location: Francesca De Santis Safe Room"}).bindLabel("Francesca De Santis Safe Room").bindPopup( popUp("img", "Location", "Francesca De Santis Safe Room", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([22.95, -69.30], {icon: iconIntel, alt: "level3intel", title: "Intel: The Death Anniversary"}).bindLabel("The Death Anniversary").bindPopup( popUp("florist", "Intel", "The Death Anniversary", "Listen to the conversation", "req", "susp", "Reveals 'The Good Son' opportunity", "According to the flower delivery man, today is the anniversary of Isabella Caruso's death, and Silvio Caruso has ordered a fresh bouquet of flowers for her grave. Judging from the damage, however, the flower truck isn't going anywhere.", "desc") ),
    L.marker([56.41, -72.90], {icon: iconIntel, alt: "level3intel", title: "Intel: The New Kitchen Hand"}).bindLabel("The New Kitchen Hand").bindPopup( popUp("kitchen", "Intel", "The New Kitchen Hand", "Listen to the conversation", "req", "susp", "Reveals 'First Day on the Job' opportunity", "Apparently, Vila Caruso's chef has hired a new kitchen hand by staff recommendation, and the two have yet to meet. According to our research, the chef has also been trying for some time to replicate Isabella Caruso's famous home cooking but has so far been unsuccessfull.", "desc") ),

    L.marker([11.95, -140.0], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup( popUp("cannon", "Interaction", "Antique Cannon", "Load/Use Cannon", "Gunpowder and Cannonball", "all", "note", "ingame", "desc") ),
    L.marker([8.363, -159.1], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup( popUp("cannon", "Interaction", "Antique Cannon", "Load/Use Cannon", "Gunpowder and Cannonball", "all", "note", "ingame", "desc") ),

    L.marker([45.70, -71.67], {icon: iconSeccheck, alt: "level3seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1>"),
    L.marker([41.24, -104.1], {icon: iconSeccheck, alt: "level3seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Biolab Security</h1>"),

    L.marker([57.18, -43.98], {icon: iconCamera, alt: "level3camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[57.18, -43.98], [56.63, -40.86], [56.43, -43.81]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([25.83, -116.4], {icon: iconCamera, alt: "level3camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[25.83, -116.4], [24.24, -119.0], [27.09, -119.0]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([53.93, -84.63], {icon: iconCamera, alt: "level3camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[53.93, -84.63], [53.74, -81.21], [51.75, -84.63]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([31.05, -97.99], {icon: iconCamera, alt: "level3camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[31.05, -97.99], [29.87, -95.09], [32.21, -94.96]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),

    L.marker([34.48, -64.37], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([35.96, -62.66], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([58.95, -60.11], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([59.40, -65.25], {icon: iconLocked, alt: "level3locked", title: "Locked: Shop Key"}).bindLabel("Locked Door (Shop Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key</p>"),
    L.marker([60.97, -41.92], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([59.75, -40.73], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([55.65, -48.47], {icon: iconLocked, alt: "level3locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([56.34, -43.19], {icon: iconLocked, alt: "level3locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([51.56, -41.22], {icon: iconLocked, alt: "level3locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([54.16, -86.83], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1>"),
    L.marker([72.80, -86.44], {icon: iconLocked, alt: "level3locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p>"),
    L.marker([62.77, -78.48], {icon: iconLocked, alt: "level3locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p>"),
    L.marker([63.76, -84.90], {icon: iconLocked, alt: "level5locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p><p class='note'>You can also just ring the bell</p>"),
    L.marker([57.11, -79.76], {icon: iconLocked, alt: "level3locked", title: "Locked: Mansion Keycard"}).bindLabel("Locked Door (Mansion Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([58.17, -93.55], {icon: iconLocked, alt: "level3locked", title: "Locked: Mansion Keycard"}).bindLabel("Locked Door (Mansion Keycard)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([42.19, -104.1], {icon: iconLocked, alt: "level3locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([55.07, -118.0], {icon: iconLocked, alt: "level3locked", title: "Locked: Biolab Keycard"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    
]);

/* ==================================================================================================================================================================
   Level 4
   ================================================================================================================================================================== */

var level4other = L.layerGroup([

    L.marker([62.00, -76.06], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: ICA Safe House"}).bindLabel("Large Agency Pickup: ICA Safe House").bindPopup("<img src='img/map_sapienza/screenshots/ica_safehouse.jpg'><h2>Large Agency Pickup</h2><h1>ICA Safe House</h1>"),
    L.marker([57.18, -90.65], {icon: iconIcaStash, alt: "level4icastash", title: "Small Agency Pickup: Mansion Pantry"}).bindLabel("Small Agency Pickup: Mansion Pantry").bindPopup("<img src='img/map_sapienza/screenshots/ica_pantry.jpg'><h2>Small Agency Pickup</h2><h1>Mansion Pantry</h1>"),
    L.marker([8.841, -151.6], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: Sapienza Ruins"}).bindLabel("Large Agency Pickup: Sapienza Ruins").bindPopup("<img src='img/map_sapienza/screenshots/ica_ruins.jpg'><h2>Large Agency Pickup</h2><h1>Sapienza Ruins</h1>"),
    
    L.marker([61.39, -70.31], {icon: iconEnter, alt: "level4enter", title: "Starting Locaton: ICA Safe House"}).bindLabel("Starting Locaton: ICA Safe House").bindPopup("<img src='img/map_sapienza/screenshots/enter_house.jpg'><h2>Starting Locaton</h2><h1>ICA Safe House</h1>"),
    L.marker([55.10, -95.53], {icon: iconEnter, alt: "level4enter", title: "Starting Locaton: Undercover in Mansion Kitchen"}).bindLabel("Starting Locaton: Undercover in Mansion Kitchen").bindPopup("<img src='img/map_sapienza/screenshots/enter_kitchen.jpg'><h2>Starting Locaton</h2><h1>Undercover in Mansion Kitchen</h1>"),
    L.marker([30.14, -126.3], {icon: iconEnter, alt: "level4enter", title: "Starting Locaton: Undercover in Mansion Garden"}).bindLabel("Starting Locaton: Undercover in Mansion Garden").bindPopup("<img src='img/map_sapienza/screenshots/enter_garden.jpg'><h2>Starting Locaton</h2><h1>Undercover in Mansion Garden</h1>"),

    L.marker([59.53, -79.71], {icon: iconWayUp, alt: "level4waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([52.72, -41.08], {icon: iconWayUpDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([61.48, -84.50], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-4</h1>"),
    L.marker([62.02, -79.89], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([58.14, -82.17], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([29.72, -72.29], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    L.marker([51.99, -41.26], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.72, -95.66], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([47.72, -109.0], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([39.06, -107.0], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([52.69, -112.4], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([54.00, -96.81], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([58.21, -90.30], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([29.99, -73.69], {icon: iconPassage, alt: "level4passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[51.17, -40.82], [52.74, -41.13]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level4ledge"}).bindLabel("Ledge"),
    new L.Polyline([[58.28, -91.05], [58.28, -84.59]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level4ledge"}).bindLabel("Ledge"),

    L.marker([7.928, -151.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([34.84, -104.5], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([39.67, -101.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([46.07, -101.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([45.55, -32.82], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([31.98, -73.87], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.97, -116.1], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([60.30, -76.33], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.20, -42.84], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.77, -46.27], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([3.820, -157.2], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([28.69, -113.5], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([34.56, -100.9], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([34.95, -88.11], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([49.86, -108.3], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([57.61, -87.49], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([42.48, -34.76], {icon: iconStairsDown, alt: "level4stairsupdown"}),

]);

var level4weapons = L.layerGroup([

    L.marker([52.69, -42.05], {icon: iconPoisons, alt: "level4weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([31.46, -102.9], {icon: iconPoisons, alt: "level4weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),
    L.marker([56.89, -92.19], {icon: iconPoisons, alt: "level4weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Firearm
    L.marker([62.41, -75.27], {icon: iconFirearm, alt: "level4firearm", title: "Weapon: Pistol Bartoli 75S"}).bindLabel("Pistol: Bartoli 75S").bindPopup(txtBartoli75S),
    L.marker([62.39, -74.00], {icon: iconAmmo, alt: "level4ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),

    // Explosive
    L.marker([27.17, -105.1], {icon: iconPropane, alt: "level4propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([47.12, -105.0], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),
    L.marker([57.23, -91.40], {icon: iconExtinguisher, alt: "level4extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Melee
    L.marker([44.84, -48.03], {icon: iconCoin, alt: "level4coin", title: "Weapon: Coin"}).bindLabel("Coin (x3)").bindPopup(txtCoin),
    L.marker([48.86, -41.57], {icon: iconCoin, alt: "level4coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([54.41, -128.9], {icon: iconAmpKnife, alt: "level4knifeamp", title: "Weapon: Amputation Knife"}).bindLabel("Amputation Knife").bindPopup(txtAmpKnife),
    L.marker([55.50, -127.3], {icon: iconCirKnife, alt: "level4knifecir", title: "Weapon: Circumsision Knife"}).bindLabel("Circumsision Knife").bindPopup(txtCirKnife),
    L.marker([75.70, -118.3], {icon: iconCrowbar, alt: "level4crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([55.40, -112.0], {icon: iconCrowbar, alt: "level4crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([27.60, -110.9], {icon: iconCrowbar, alt: "level4crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([32.84, -98.74], {icon: iconFireAxe, alt: "level4fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([28.88, -105.8], {icon: iconHammer, alt: "level4hammer", title: "Weapon: Hammer"}).bindLabel("Hammer").bindPopup(txtHammer),
    L.marker([26.43, -106.7], {icon: iconHatchet, alt: "level4hatchet", title: "Weapon: Hatchet"}).bindLabel("Hatchet").bindPopup(txtHatchet),
    L.marker([35.10, -99.97], {icon: iconFirePoker, alt: "level4firepoker", title: "Weapon: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
    L.marker([50.06, -127.3], {icon: iconFirePoker, alt: "level4firepoker", title: "Weapon: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
    L.marker([31.16, -122.9], {icon: iconGolfClub, alt: "level4golfclub", title: "Weapon: Golf Club"}).bindLabel("Golf Club").bindPopup(txtGolfClub),
    L.marker([58.65, -81.56], {icon: iconBrick, alt: "level4brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([57.04, -99.44], {icon: iconBrick, alt: "level4brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([53.43, -44.34], {icon: iconKnife, alt: "level4knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([62.02, -72.55], {icon: iconKnife, alt: "level4knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([54.39, -92.98], {icon: iconKnife, alt: "level4knife", title: "Weapon: Kitchen Knife"}).bindLabel("Kitchen Knife").bindPopup(txtKnife),
    L.marker([24.64, -105.2], {icon: iconScrewdriver, alt: "level4screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([25.95, -105.2], {icon: iconWrench, alt: "level4wrench", title: "Weapon: Wrench"}).bindLabel("Wrench").bindPopup(txtWrench),
    L.marker([55.92, -112.8], {icon: iconShovel, alt: "level4shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([28.96, -108.4], {icon: iconShovel, alt: "level4shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([24.84, -111.3], {icon: iconShovel, alt: "level4shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),

]);

var level4poi = L.layerGroup([

    L.marker([53.61, -42.05], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([38.58, -95.22], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([36.03, -104.1], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.66, -106.5], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([46.98, -105.8], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([52.13, -102.2], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.38, -107.1], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.12, -119.9], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.12, -109.5], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([32.76, -115.6], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([46.95, -128.7], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([50.09, -128.3], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([49.89, -119.4], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([36.91, -105.6], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([29.84, -109.4], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([32.06, -98.83], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([28.99, -110.9], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([24.44, -106.7], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([52.07, -113.0], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.80, -119.0], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.37, -120.7], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.17, -92.32], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.41, -91.53], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([57.84, -91.18], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.62, -85.03], {icon: iconHidingSpot, alt: "level4hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([61.68, -77.25], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([41.60, -106.0], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([56.87, -87.31], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([28.96, -109.7], {icon: iconWeaponCrate, alt: "level4weaponcrate"}).bindLabel("Weapon Crate"),
    L.marker([49.06, -107.0], {icon: iconWeaponCrate, alt: "level4weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([55.55, -129.1], {icon: iconDisguise, alt: "level4disguise", title: "Disguise: Plague Doctor"}).bindLabel("Disguise: Plague Doctor").bindPopup( popUp("plague", "Disguise", "Plague Doctor", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([43.16, -94.65], {icon: iconNPC, alt: "level4npc", title: "NPC: Butler"}).bindLabel("Butler").bindPopup( popUp("img", "NPC", "Butler", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([32.76, -123.7], {icon: iconNPC, alt: "level4npc", title: "NPC: Roberto Vargas"}).bindLabel("Roberto Vargas").bindPopup( popUp("img", "NPC", "Roberto Vargas", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([43.64, -50.80], {icon: iconNPC, alt: "level4npc", title: "NPC: Dr Oscar Lafayette"}).bindLabel("Dr. Oscar Lafayette").bindPopup( popUp("img", "NPC", "Dr. Oscar Lafayette", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([42.52, -53.87], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([47.10, -48.16], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([45.12, -94.39], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([45.85, -110.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([40.34, -115.6], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([39.57, -129.4], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([29.80, -127.5], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([55.10, -94.48], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Kitchen Assistant").bindPopup("<h2>Blend In</h2><h1>Kitchen Assistant</h1>"),

    L.marker([54.29, -44.20], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([61.68, -78.00], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([41.60, -107.2], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([52.02, -114.6], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([51.64, -128.8], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([57.93, -93.03], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([56.48, -86.87], {icon: iconDistraction, alt: "level4dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([35.02, -93.20], {icon: iconDistraction, alt: "level4dis-piano", title: "Distraction: Piano"}).bindLabel("Piano").bindPopup( popGlobal(disPiano, "all") ),
    L.marker([52.10, -106.0], {icon: iconDistraction, alt: "level4dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([49.15, -131.0], {icon: iconDistraction, alt: "level4dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([53.82, -98.04], {icon: iconDistraction, alt: "level4dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([34.84, -105.6], {icon: iconDistraction, alt: "level4dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([33.39, -111.2], {icon: iconDistraction, alt: "level4dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([55.70, -91.45], {icon: iconDistraction, alt: "level4dis-radio", title: "Distraction: Radio"}).bindLabel("Radio").bindPopup( popGlobal(disRadio, "susp") ),

    L.marker([42.19, -105.1], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([53.74, -119.0], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([54.23, -90.35], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([50.84, -46.45], {icon: iconSabotage, alt: "level4sab-canister"}).bindLabel("Gas Canister").bindPopup( popGlobal(sabGas, "all") ),
    L.marker([36.35, -98.48], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([37.33, -93.25], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([34.81, -103.3], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([49.18, -100.5], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([50.14, -95.36], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([43.03, -96.54], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the second floor</p>"),
    L.marker([43.03, -114.6], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the second floor</p>"),
    L.marker([44.37, -30.93], {icon: iconSabotage, alt: "level4sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([53.46, -123.8], {icon: iconSabotage, alt: "level4sab-solarsystem", title: "Sabotage: Solar System"}).bindLabel("Solar System").bindPopup("<h2>Sabotage</h2><h1>Solar System</h1><p class='note'>Not connected to a Winch</p>"),
    L.marker([37.47, -127.8], {icon: iconSabotage, alt: "level4sab-tractor", title: "Sabotage: Garden Tractor"}).bindLabel("Garden Tractor").bindPopup( popGlobal(sabTractor, "all") ),
    L.marker([50.03, -126.2], {icon: iconSabotage, alt: "level4sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") + "<p class='note'>Shaft is on the roof</p>"),
    L.marker([56.09, -94.83], {icon: iconSabotage, alt: "level4sab-stove", title: "Sabotage: Stove"}).bindLabel("Stove (x2)").bindPopup( popGlobal(sabStove, "all") ),
    L.marker([31.95, -121.7], {icon: iconSabotage, alt: "level4sab-golf", title: "Sabotage: Golf Ball Bucket"}).bindLabel("Golf Ball Bucket").bindPopup( popUp("img", "Sabotage", "Golf Ball Bucket", "Place Golf Ball", "Explosive Golf Ball", "all", "note", "ingame", "desc") ),

    L.marker([45.76, -46.18], {icon: iconPoison, alt: "level4poison", title: "Poison: Dr. Lafayette"}).bindLabel("Coffee Glass (Dr. Lafayette)").bindPopup( popPoison("Coffee Glass", "Dr. Lafayette", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([43.89, -46.58], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([45.95, -44.29], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([45.12, -44.60], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([47.78, -47.10], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([48.01, -44.29], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup( popPoison("Coffee Glass", "Tourist", "Waiter / Kitchen Assistant / Chef", "note")),
    L.marker([47.04, -44.69], {icon: iconPoison, alt: "level4poison"}).bindLabel("Water Bottle").bindPopup( popPoison("Water Bottle", "Tourist", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([55.55, -111.3], {icon: iconPoison, alt: "level4poison", title: "Poison: Mansion Security"}).bindLabel("Glass of White Wine (x2) (Mansion Security)").bindPopup( popPoison("Glass of White Wine", "Mansion Security", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([42.55, -130.2], {icon: iconPoison, alt: "level4poison", title: "Poison: Roberto Vargas"}).bindLabel("Water Bottle (Roberto Vargas)").bindPopup( popPoison("Water Bottle", "Roberto Vargas", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([51.17, -115.8], {icon: iconPoison, alt: "level4poison", title: "Poison: Francesca De Santis"}).bindLabel("Glass of Champagne (Francesca De Santis)").bindPopup( popPoison("Glass of Champagne", "Francesca De Santis", "Waiter / Kitchen Assistant / Chef", "note") ),
    L.marker([57.01, -94.21], {icon: iconPoison, alt: "level4poison", title: "Poison: Silvio Caruso"}).bindLabel("Spaghetti Pot (Silvio Caruso)").bindPopup( popPoison("Spaghetti Pot", "Silvio Caruso", "Waiter / Kitchen Assistant / Chef", "note") ),

    L.marker([44.18, -53.56], {icon: iconIntel, alt: "level4intel", title: "Intel: The Psychologist"}).bindLabel("The Psychologist").bindPopup( popUp("psychologist", "Intel", "The Psychologist", "Listen to the conversation", "req", "susp", "Reveals 'Catharsis' opportunity", "According to Dr. Lafayette's phone call, Ether has hired the world-renowned psychologist to treat Silvio Caruso. No doubt they are concerned about the bioengineer's mental helath. The session will take place in private and furthermore, our records show that Caruso and Lafayette have not previously met.", "desc") ),
    L.marker([47.10, -110.4], {icon: iconIntel, alt: "level4intel", title: "Intel: Isabella Caruso Gramophone"}).bindLabel("Isabella Caruso's Gramophone").bindPopup( popUp("gram", "Intel", "Isabella Caruso's Gramophone", "Listen to the conversation", "req", "susp", "Reveals 'Beyond the Grave' opportunity", "According to staff, the antique gramophone player in the great dining hall belonged to Caruso's mother, Isabella. Like all her other possessions, Caruos keeps them untouched and unsullied.", "desc") ),
    L.marker([52.64, -118.9], {icon: iconIntel, alt: "level4intel", title: "Intel: Romantic Note"}).bindLabel("Romantic Note").bindPopup( popUp("romnote", "Intel", "Romantic Note", "Examine", "req", "susp", "Reveals 'By Candlelight' opportunity", "A note to Francesca De Santis from her lover, Roberto Vargas. The two plan to meet for a romantic randezvous soon after Vargas' golf lesson with Caruso.", "desc") ),
    L.marker([51.23, -117.1], {icon: iconIntel, alt: "level4intel", title: "Intel: The Ether Proxy"}).bindLabel("The Ether Proxy").bindPopup( popUp("etherproxy", "Intel", "The Ether Proxy", "Listen to the conversation", "req", "susp", "Reveals 'By Candlelight' opportunity", "It appears Francesca De Santis is spying on Silvio Caruso on behalf of their mutual employer, the Ether Corporation. Ether clearly doesn't trust Caruso, especially when it comes to ownership of the DNA-specific virus. De Santis has been instructed to keep an eye on bioengineer and potentially decommission him, and carry on in his place, if the need arises.", "This intle appears while Francesca is meeting Agent 47 disguised as Roberto Varga") ),

    L.marker([8.798, -153.2], {icon: iconItem, alt: "level4item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder (x2)").bindPopup( popUp("gunpowder", "Item", "Bag of Gunpowder", "use", "req", "susp", "note", "A bag containing gunpowder used to arm the antique canon.", "desc") ),
    L.marker([16.25, -147.1], {icon: iconItem, alt: "level4item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([14.22, -144.4], {icon: iconItem, alt: "level4item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup( popUp("cannonball", "Item", "Cannonball", "use", "req", "susp", "note", "An antique cannonball.", "desc")),
    L.marker([61.81, -70.97], {icon: iconItem, alt: "level4item", title: "Item: Explosive Golf Ball"}).bindLabel("Explosive Golf Ball").bindPopup( popUp("golfball", "Item", "Explosive Golf Ball", "use", "req", "susp", "note", "A golf ball that detonates upon contact.", "desc") ),
    L.marker([50.65, -94.30], {icon: iconItem, alt: "level4item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup( popUp("img", "Item", "Mansion Masterkey", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([50.87, -126.7], {icon: iconItem, alt: "level4item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([56.60, -91.23], {icon: iconItem, alt: "level4item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce (x2)").bindPopup( popUp("sauce", "Item", "Expired Can of Spaghetti Sauce", "use", "req", "susp", "note", "An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.", "desc") ),
    L.marker([50.84, -132.9], {icon: iconItem, alt: "level4item", title: "Item: Roberto Vargas Cell Phone"}).bindLabel("Roberto Vargas' Cell Phone").bindPopup( popUp("img", "Item", "Roberto Vargas' Cell Phone", "use", "req", "susp", "Carried by Roberto Vargas", "ingame", "Use it to call Francesca and set up a date") ),

    L.marker([17.51, -150.7], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup( popUp("cannon", "Interaction", "Antique Cannon", "Load/Use Cannon", "Gunpowder and Cannonball", "all", "note", "ingame", "desc") ),
    L.marker([43.83, -98.43], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Chair Lift"}).bindLabel("Chair Lift").bindPopup( popUp("chairlift", "Interaction", "Chair Lift", "Turn On", "req", "all", "Part of 'Beyond the Grave' opportunity", "ingame", "desc") ),
    L.marker([41.01, -118.1], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Gramophone"}).bindLabel("Gramophone").bindPopup( popUp("gram", "Interaction", "Gramophone", "Turn On", "req", "all", "Part of 'Beyond the Grave' opportunity", "ingame", "desc") ),
    L.marker([56.82, -98.43], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Dinner Bell"}).bindLabel("Dinner Bell").bindPopup( popUp("bell", "Interaction", "Dinner Bell", "Ring Bell", "req", "susp", "note", "ingame", "desc") ),
    L.marker([50.00, -124.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Caruso Cigarette Pack"}).bindLabel("Caruso's Cigarette Pack").bindPopup( popUp("jointcaruso", "Interaction", "Caruso's Cigarette Pack", "Place Join", "Cannabis Joint", "susp", "note", "ingame", "desc") ),
    L.marker([49.78, -114.5], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Sit Down as the Golf Coach"}).bindLabel("Sit Down as the Golf Coach").bindPopup( popUp("vargaschair", "Interaction", "Sit Down as the Golf Coach", "use", "req", "susp", "Francesca will see through your Vargas disguise unless you're sitting in this chair", "ingame", "desc") ),
    L.marker([52.74, -126.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Video Projector"}).bindLabel("Video Projector").bindPopup( popUp("video", "Interaction", "Video Projector", "Insert Video", "req", "susp", "Part of 'Memory Lane' opportunity", "ingame", "desc") ),

    L.marker([50.17, -120.9], {icon: iconSeccheck, alt: "level4seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1>"),

    L.marker([45.67, -38.67], {icon: iconCamera, alt: "level4camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[45.67, -38.67], [47.21, -36.95], [44.90, -36.73]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([31.05, -97.99], {icon: iconCamera, alt: "level4camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[31.05, -97.99], [29.87, -95.09], [32.21, -94.96]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([53.30, -112.1], {icon: iconCamera, alt: "level4camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[53.30, -112.1], [51.94, -107.9], [54.34, -107.9]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([53.98, -130.2], {icon: iconCamera, alt: "level4camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[53.98, -130.2], [53.09, -132.8], [52.32, -130.8]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([38.78, -108.3], {icon: iconCamera, alt: "level4camera", title: "Camera: Mansion"}).bindLabel("Security Camera (Mansion)"),
    L.polygon([[38.78, -108.3], [36.63, -110.7], [36.63, -106.6]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),

    L.marker([45.89, -35.63], {icon: iconLocked, alt: "level4locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([60.97, -73.87], {icon: iconLocked, alt: "level4locked", title: "Locked: ICA Safe House Key"}).bindLabel("Locked Door (ICA Safe House Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires ICA Safe House Key</p>"),
    L.marker([55.72, -125.0], {icon: iconLocked, alt: "level4locked", title: "Locked: Mansion Masterkey"}).bindLabel("Locked Door (Mansion Masterkey)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion MasterKey</p>"),
    L.marker([54.49, -112.4], {icon: iconLocked, alt: "level4locked", title: "Locked: Mansion Masterkey"}).bindLabel("Locked Door (Mansion Masterkey)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion MasterKey</p>"),

]);

/* ==================================================================================================================================================================
   Level 5
   ================================================================================================================================================================== */

var level5other = L.layerGroup([

    L.marker([52.72, -41.08], {icon: iconWayDown, alt: "level5waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([54.36, -48.47], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([48.01, -39.85], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([59.53, -79.71], {icon: iconWayDown, alt: "level5waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([55.35, -120.3], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Up</h2><h1>Climb</h1>"),

    L.marker([53.95, -41.74], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.59, -47.72], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([47.63, -39.28], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([36.27, -96.54], {icon: iconPassage, alt: "level5passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[52.85, -41.26], [54.77, -41.61]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level5ledge"}).bindLabel("Ledge"),

    L.marker([34.19, -91.97], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([49.72, -102.4], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([54.52, -129.9], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([8.971, -150.7], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([31.91, -73.87], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([55.77, -46.18], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([76.28, -118.2], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([36.73, -102.4], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([41.80, -99.22], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([44.02, -99.22], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([56.43, -116.3], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([44.62, -33.39], {icon: iconStairsDown, alt: "level5stairsupdown"}),

]);

var level5weapons = L.layerGroup([

    L.marker([54.77, -115.6], {icon: iconCoin, alt: "level5coin", title: "Weapon: Coin"}).bindLabel("Coin").bindPopup(txtCoin),
    L.marker([32.17, -102.8], {icon: iconCoin, alt: "level5coin", title: "Weapon: Coin"}).bindLabel("Coin (x2)").bindPopup(txtCoin),
    L.marker([45.12, -36.60], {icon: iconBust, alt: "level5bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([47.84, -46.36], {icon: iconGolfClub, alt: "level5golfclub", title: "Weapon: Golf Club"}).bindLabel("Golf Club").bindPopup(txtGolfClub),
    L.marker([51.50, -42.09], {icon: iconScissors, alt: "level5scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([46.13, -36.03], {icon: iconSaber, alt: "level5saber", title: "Weapon: Saber"}).bindLabel("Saber").bindPopup(txtSaber),
    L.marker([33.06, -102.6], {icon: iconSoda, alt: "level5sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),

]);

var level5poi = L.layerGroup([

    L.marker([54.18, -44.42], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.60, -46.36], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.06, -39.15], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([50.73, -116.2], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([52.24, -113.2], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([54.87, -120.0], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([55.00, -129.4], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.10, -92.76], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([36.63, -94.04], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([34.23, -93.69], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([33.57, -104.5], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([50.62, -103.4], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([48.66, -93.38], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([39.33, -107.0], {icon: iconHidingSpot, alt: "level5hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([48.51, -97.95], {icon: iconConceal, alt: "level5conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([51.39, -108.3], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),

    L.marker([58.90, -76.64], {icon: iconDisguise, alt: "level5disguise", title: "Disguise: Kitchen Assistant"}).bindLabel("Disguise: Kitchen Assistant").bindPopup( popUp("kitchenass", "Disguise", "Kitchen Assistant", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([54.29, -43.59], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([61.60, -74.44], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([49.49, -98.61], {icon: iconDistraction, alt: "level5dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([54.47, -42.27], {icon: iconDistraction, alt: "level5dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([36.70, -95.62], {icon: iconDistraction, alt: "level5dis-vacuum", title: "Distraction: Vacuum Cleaner"}).bindLabel("Vacuum Cleaner").bindPopup( popGlobal(disVacuum, "susp") ),

    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Winch is on the 6th level</p>"),
    L.marker([46.49, -37.08], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([49.75, -103.5], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") + "<p class='note'>Not connected to a Winch</p>"),
    L.marker([43.03, -97.60], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
        new L.Polyline([[43.03, -97.60], [43.03, -94.87]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level5sab-chandelier"}),
        L.marker([43.03, -94.87], {icon: iconPointRed, alt: "level5sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
    L.marker([43.03, -114.8], {icon: iconSabotage, alt: "level5sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
        new L.Polyline([[43.03, -114.8], [43.03, -108.7]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level5sab-chandelier"}),
        L.marker([43.03, -108.7], {icon: iconPointRed, alt: "level5sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),

    L.marker([54.87, -118.8], {icon: iconAlarm, alt: "level5alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),
    L.marker([45.95, -105.7], {icon: iconAlarm, alt: "level5alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([49.00, -113.3], {icon: iconIntel, alt: "level5intel", title: "Intel: Caruso Family Footage"}).bindLabel("Caruso's Family Footage").bindPopup( popUp("footage", "Intel", "Caruso's Family Footage", "Listen to the conversation", "req", "susp", "Reveals 'Memory Lane' opportunity", "According to staff, Caruso keeps a crate of VHS tapes from his childhood somewhere in the observatory. Apparently, he used to watch them on the projector in the observatory but stopped after his mental breakdown.", "desc") ),
    L.marker([51.28, -96.45], {icon: iconIntel, alt: "level5intel", title: "Intel: Medical Journal"}).bindLabel("Medical Journal").bindPopup( popUp("medjournal", "Intel", "Medical Journal", "Examine", "req", "susp", "Reveals 'Beyond the Grave' opportunity", "A journal from a mental institution in Naples where Silvio Caruso was briefly admitted last year. According to his statement, Caruso found his mother's favorite record playing in the empty dining hall and then saw her chair lift move by itself. Upon hearing the service bell ring in Isabella's old bedroom, Caruso entered alone and was later found unconscious by his staff. He claims to have no recollection of what he witnessed inside.", "desc") ),

    L.marker([54.05, -128.6], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Open Observatory Dome"}).bindLabel("Open Observatory Dome").bindPopup( popUp("opendome1", "Interaction", "Open Observatory Dome", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([55.55, -125.7], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Open Observatory Dome"}).bindLabel("Open Observatory Dome").bindPopup( popUp("opendome2", "Interaction", "Open Observatory Dome", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([46.40, -103.0], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Chair Lift"}).bindLabel("Chair Lift").bindPopup( popUp("chairlift", "Interaction", "Chair Lift", "Turn On", "req", "all", "Part of 'Beyond the Grave' opportunity", "ingame", "desc") ),
    L.marker([49.83, -95.97], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Service Bell"}).bindLabel("Service Bell").bindPopup( popUp("servicebell", "Interaction", "Service Bell", "Ring Bell", "req", "all", "Part of 'Beyond the Grave' opportunity", "ingame", "desc") ),
    L.marker([51.37, -94.52], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Fan"}).bindLabel("Fan").bindPopup( popUp("img", "Interaction", "Fan", "Turn On/Off", "req", "all", "Part of 'Beyond the Grave' opportunity", "ingame", "desc") ),

    L.marker([58.03, -73.82], {icon: iconItem, alt: "level5item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup( popUp("keycardman", "Item", "Mansion Keycard", "use", "req", "susp", "note", "An access keycard for Villa Caruso's two service entrances.", "desc") ),
    L.marker([58.10, -77.60], {icon: iconItem, alt: "level5item", title: "Item: Apartment Key"}).bindLabel("Apartment Key").bindPopup( popUp("keyapt", "Item", "Apartment Key", "use", "req", "susp", "note", "A key to an apartment in town.", "desc") ),
    L.marker([51.39, -115.3], {icon: iconItem, alt: "level5item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup( popUp("gunpowder", "Item", "Bag of Gunpowder", "use", "req", "susp", "note", "A bag containing gunpowder used to arm the antique canon.", "desc") ),
    L.marker([51.39, -113.9], {icon: iconItem, alt: "level5item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup( popUp("img", "Item", "Mansion Masterkey", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([47.63, -104.3], {icon: iconSeccheck, alt: "level5seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1><p class='item-desc'>Will be frisked if disguised as Housekeeper / Mansion Staff</p>"),

    L.marker([54.90, -44.07], {icon: iconCamera, alt: "level5camera", title: "Camera: Cafe"}).bindLabel("Security Camera (Cafe)"),
    L.polygon([[54.90, -44.07], [54.54, -46.53], [56.19, -46.14]], {color: '#00AA05', opacity: 1, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level5camera"}).bindLabel("Security Camera"),

    L.marker([54.44, -45.87], {icon: iconLocked, alt: "level5locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([59.53, -73.87], {icon: iconLocked, alt: "level5locked", title: "Locked: Apartment Key"}).bindLabel("Locked Door (Apartment Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key</p><p class='note'>You can also just ring the bell</p>"),

]);

/* ==================================================================================================================================================================
   Level 6
   ================================================================================================================================================================== */

var level6other = L.layerGroup([

    L.marker([35.13, -95.62], {icon: iconEnter, alt: "level6enter", title: "Starting Locaton: Undercover as Security Staff"}).bindLabel("Starting Locaton: Undercover as Security Staff").bindPopup("<img src='img/map_sapienza/screenshots/enter_mansion.jpg'><h2>Starting Locaton</h2><h1>Undercover as Security Staff</h1>"),

    L.marker([48.10, -40.29], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([48.13, -39.24], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([54.36, -48.47], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Up</h2><h1>Scale the Clock Tower</h1>"),
    L.marker([55.35, -120.3], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Down</h2><h1>Climb</h1>"),
    L.marker([76.99, -118.7], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Pipe: Level 6-1").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 6-1</h1>"),
    L.marker([51.50, -96.76], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([49.26, -109.1], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([39.67, -106.3], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),

    L.marker([53.43, -47.72], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.97, -47.46], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.69, -41.66], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.06, -105.2], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([45.33, -115.4], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([40.58, -115.5], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([39.06, -104.0], {icon: iconPassage, alt: "level6passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[50.68, -47.46], [56.89, -48.99]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level6ledge"}).bindLabel("Ledge"),
    new L.Polyline([[77.07, -118.2], [76.27, -114.7], [75.40, -118.3], [76.25, -121.8], [77.07, -118.2]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level6ledge"}).bindLabel("Ledge"),

    L.marker([37.78, -100.9], {icon: iconStairsUp, alt: "level6stairsupdown"}),
    L.marker([50.40, -40.07], {icon: iconStairsUp, alt: "level6stairsupdown"}),
    L.marker([8.971, -150.6], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([31.95, -73.82], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([55.87, -46.23], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([35.67, -94.17], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([48.25, -104.4], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([56.31, -128.7], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([75.92, -119.0], {icon: iconStairsDown, alt: "level6stairsupdown"}),

]);

var level6weapons = L.layerGroup([

    L.marker([39.50, -102.9], {icon: iconPoisons, alt: "level6weapoison", title: "Weapon: Emetic Rat Poison"}).bindLabel("Emetic Rat Poison").bindPopup(txtRatPoison),

    // Explosive
    L.marker([54.34, -43.68], {icon: iconPropane, alt: "level6propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([52.07, -119.0], {icon: iconPropane, alt: "level6propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([54.29, -44.56], {icon: iconExtinguisher, alt: "level6extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Firearm
    L.marker([39.47, -104.6], {icon: iconFirearm, alt: "level6firearm", title: "Weapon: Pistol Bartoli 75S"}).bindLabel("Pistol: Bartoli 75S").bindPopup(txtBartoli75S),
    L.marker([40.14, -104.6], {icon: iconAmmo, alt: "level6ammo", title: "Weapon: Pistol Ammo"}).bindLabel("Pistol Ammo").bindPopup(txtAmmoPistol),

    // Melee
    L.marker([50.26, -101.1], {icon: iconBust, alt: "level6bust", title: "Weapon: Bust"}).bindLabel("Bust").bindPopup(txtBust),
    L.marker([7.231, -151.9], {icon: iconBattleAxe, alt: "level6battleaxe", title: "Weapon: Battle Axe"}).bindLabel("Battle Axe").bindPopup(txtBattleAxe),
    L.marker([50.93, -46.14], {icon: iconFireAxe, alt: "level6fireaxe", title: "Weapon: Fire Axe"}).bindLabel("Fire Axe").bindPopup(txtFireAxe),
    L.marker([30.48, -72.11], {icon: iconKnifeFold, alt: "level6foldingknife", title: "Weapon: Folding Knife"}).bindLabel("Folding Knife").bindPopup(txtKnifeFold),
    L.marker([53.38, -44.34], {icon: iconCrowbar, alt: "level6crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([52.80, -119.6], {icon: iconCrowbar, alt: "level6crowbar", title: "Weapon: Crowbar"}).bindLabel("Crowbar").bindPopup(txtCrowbar),
    L.marker([39.53, -107.0], {icon: iconGolfClub, alt: "level6golfclub", title: "Weapon: Golf Club"}).bindLabel("Golf Club").bindPopup(txtGolfClub),
    L.marker([44.24, -99.62], {icon: iconFirePoker, alt: "level6firepoker", title: "Weapon: Fire Poker"}).bindLabel("Fire Poker").bindPopup(txtFirePoker),
    L.marker([50.28, -99.27], {icon: iconOpener, alt: "level6opener", title: "Weapon: Letter Opener"}).bindLabel("Letter Opener").bindPopup(txtOpener),
    L.marker([44.24, -116.9], {icon: iconSoda, alt: "level6sodacan", title: "Weapon: Soda Can"}).bindLabel("Soda Can").bindPopup(txtSoda),
    L.marker([33.65, -101.6], {icon: iconShovel, alt: "level6shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),
    L.marker([44.02, -95.49], {icon: iconScissors, alt: "level6scissors", title: "Weapon: Scissors"}).bindLabel("Scissors").bindPopup(txtScissors),
    L.marker([40.84, -101.5], {icon: iconScrewdriver, alt: "level6screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),
    L.marker([40.41, -93.07], {icon: iconScrewdriver, alt: "level6screwdriver", title: "Weapon: Screwdriver"}).bindLabel("Screwdriver").bindPopup(txtScrewdriver),

]);

var level6poi = L.layerGroup([

    L.marker([52.21, -41.83], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([56.19, -127.6], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([51.50, -99.40], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([46.28, -108.1], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([39.57, -108.3], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([38.65, -100.9], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([43.99, -101.3], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([45.39, -101.4], {icon: iconHidingSpot, alt: "level6hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([47.81, -108.6], {icon: iconConceal, alt: "level6conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([40.97, -104.6], {icon: iconWeaponCrate, alt: "level6weaponcrate"}).bindLabel("Weapon Crate"),

    L.marker([41.17, -108.3], {icon: iconDisguise, alt: "level6disguise", title: "Disguise: Housekeeper"}).bindLabel("Disguise: Housekeeper").bindPopup( popUp("housekeeper", "Disguise", "Housekeeper", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([43.73, -108.1], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([41.37, -96.67], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([36.03, -95.66], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Mansion Security").bindPopup("<h2>Blend In</h2><h1>Mansion Security</h1>"),

    L.marker([48.74, -108.7], {icon: iconDistraction, alt: "level6dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([45.67, -98.96], {icon: iconDistraction, alt: "level6dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),
    L.marker([35.38, -105.1], {icon: iconDistraction, alt: "level6dis-faucet", title: "Distraction: Faucet"}).bindLabel("Faucet").bindPopup( popGlobal(disFaucet, "susp") ),
    L.marker([39.47, -99.71], {icon: iconDistraction, alt: "level6dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([44.37, -112.3], {icon: iconDistraction, alt: "level6dis-tv", title: "Distraction: TV"}).bindLabel("TV").bindPopup( popGlobal(disTV, "susp") ),
    L.marker([44.49, -108.7], {icon: iconDistraction, alt: "level6dis-sound", title: "Distraction: Sound System"}).bindLabel("Sound System").bindPopup( popGlobal(disSound, "susp") ),

    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level6sab-chandelier", title: "Sabotage: Chandelier"}).bindLabel("Chandelier").bindPopup( popGlobal(sabChandelier, "susp") ),
        new L.Polyline([[48.71, -43.72], [51.28, -42.36]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-chandelier"}),
        L.marker([51.28, -42.36], {icon: iconPointRed, alt: "level6sab-chandelier"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
    L.marker([76.26, -118.2], {icon: iconSabotage, alt: "level6sab-bell"}).bindLabel("Church Bell").bindPopup("<h2>Sabotage</h2><h1>Church Bell</h1>"),
        new L.Polyline([[76.26, -118.2], [75.93, -118.0]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-bell"}),
        L.marker([75.93, -118.0], {icon: iconPointRed, alt: "level6sab-bell"}).bindLabel("Winch").bindPopup( popGlobal(sabWinch, "all") ),
    L.marker([50.03, -126.2], {icon: iconSabotage, alt: "level6sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") ),
    L.marker([41.31, -109.7], {icon: iconSabotage, alt: "level6sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") + "<p class='note'>Shaft is on the attic</p>"),
    L.marker([44.65, -99.00], {icon: iconSabotage, alt: "level6sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") + "<p class='note'>Shaft is on the attic</p>"),
    L.marker([36.24, -97.51], {icon: iconSabotage, alt: "level6sab-wire", title: "Sabotage: Wire Plug"}).bindLabel("Wire Plug").bindPopup( popGlobal(sabWire, "all") ),
        new L.Polyline([[38.75, -99.09], [36.24, -97.51], [35.38, -105.1]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-wire"}),
        L.marker([38.75, -99.09], {icon: iconPointRed, alt: "level6sab-wire"}).bindLabel("Power Outlet").bindPopup( popGlobal(sabOutlet, "all") ),

    L.marker([38.92, -97.51], {icon: iconPoison, alt: "level6poison", title: "Poison: Mansion Security"}).bindLabel("Water Bottle (Mansion Security)").bindPopup( popPoison("Water Bottle", "Mansion Security", "Waiter / Kitchen Assistant / Chef", "note") ),

    L.marker([39.30, -102.0], {icon: iconAlarm, alt: "level6alarm"}).bindLabel("Fire Alarm").bindPopup( popGlobal(disAlarm, "all") ),

    L.marker([41.04, -105.7], {icon: iconItem, alt: "level6item", title: "Item: Virus Prototype"}).bindLabel("Virus Prototype").bindPopup( popUp("virus", "Item", "Virus Prototype", "use", "req", "susp", "Hidden in a ship model", "An early prototype of Caruso's virus. Apparently encoded with Francesca De Santis' DNA. Likely the sample cannot survive for long outside a sealed environment, but the DNA targeting works.", "desc") ),
    L.marker([55.37, -126.4], {icon: iconItem, alt: "level6item", title: "Item: VHS Tape"}).bindLabel("VHS Tape").bindPopup( popUp("vhstape", "Item", "VHS Tape", "use", "req", "all", "note", "A worn VHS tape containing home footage from Silvio Caruso's childhood.", "desc") ),
    L.marker([50.68, -102.9], {icon: iconItem, alt: "level6item", title: "Item: Safe Combination"}).bindLabel("Safe Combination").bindPopup( popUp("safecode", "Item", "Safe Combination", "use", "req", "all", "note", "A note with a combination code. It likely opens the safe in the attic. Whatever Caruso wants to conceal is of interest for us.", "desc") ),
    L.marker([45.67, -111.5], {icon: iconItem, alt: "level6item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup( popUp("keycardbio", "Item", "Biolab Keycard", "use", "req", "susp", "note", "An access keycard for the Ether biolab.", "desc") ),
    L.marker([45.05, -93.12], {icon: iconItem, alt: "level6item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup( popUp("img", "Item", "Mansion Masterkey", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([41.24, -113.2], {icon: iconInteraction, alt: "level6interaction", title: "Interaction: Sit Down as Dr. Lafayette"}).bindLabel("Sit Down as Dr. Lafayette").bindPopup( popUp("therapy", "Interaction", "Sit Down as Dr. Lafayette", "use", "req", "susp", "note", "ingame", "desc") ),
    L.marker([44.21, -94.35], {icon: iconInteraction, alt: "level6interaction", title: "Interaction: De Santis Cigarette Pack"}).bindLabel("De Santis' Cigarette Pack").bindPopup( popUp("jointfrancesca", "Interaction", "De Santis' Cigarette Pack", "Place Joint", "Cannabis Joint", "all", "note", "ingame", "desc") ),

    L.marker([54.36, -42.18], {icon: iconEvidence, alt: "level6evidence", title: "Camera Recorder: Cafe"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),
    L.marker([41.37, -102.8], {icon: iconEvidence, alt: "level6evidence", title: "Camera Recorder: Mansion"}).bindLabel("Camera Recorder").bindPopup( popUp("img", "Evidence", "Camera Recorder", "Destroy Evidence", "req", "all", "note", "ingame", "desc") ),

    L.marker([54.49, -45.87], {icon: iconLocked, alt: "level6locked", title: "Locked: Town Hall Key"}).bindLabel("Locked Door (Town Hall Key)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key</p>"),
    L.marker([47.36, -101.6], {icon: iconLocked, alt: "level6locked", title: "Locked: Manshion Masterkey"}).bindLabel("Locked Door (Manshion Masterkey)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion MasterKey</p>"),
    L.marker([51.26, -101.6], {icon: iconLocked, alt: "level6locked", title: "Locked: Manshion Masterkey"}).bindLabel("Locked Door (Manshion Masterkey)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion MasterKey</p>"),
    L.marker([44.05, -106.4], {icon: iconLocked, alt: "level6locked", title: "Locked: Manshion Masterkey"}).bindLabel("Locked Door (Manshion Masterkey)").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion MasterKey</p>"),

]);

/* ==================================================================================================================================================================
   Level 7
   ================================================================================================================================================================== */

var level7other = L.layerGroup([

    L.marker([56.12, -48.12], {icon: iconEnter, alt: "level7enter", title: "Starting Locaton: Main Square Tower"}).bindLabel("Starting Locaton: Main Square Tower").bindPopup("<img src='img/map_sapienza/screenshots/enter_tower.jpg'><h2>Starting Locaton</h2><h1>Main Square Tower</h1>"),

    L.marker([48.10, -40.29], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Down</h2><h1>Scale</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Down</h2><h1>Scale the Clock Tower</h1>"),
    L.marker([51.50, -96.76], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([49.26, -109.1], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([50.42, -107.5], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([39.67, -106.3], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    L.marker([47.45, -40.64], {icon: iconPassage, alt: "level7passage"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    L.marker([56.68, -44.73], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([52.61, -40.47], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([33.28, -72.20], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([37.68, -102.3], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([39.70, -106.3], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([9.102, -148.4], {icon: iconStairsDown, alt: "level7stairsupdown"}),

]);

var level7weapons = L.layerGroup([

    // Explosive
    L.marker([44.49, -100.1], {icon: iconPropane, alt: "level7propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([42.09, -108.8], {icon: iconPropane, alt: "level7propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([43.45, -114.4], {icon: iconPropane, alt: "level7propane", title: "Weapon: Propane Flask"}).bindLabel("Propane Flask").bindPopup(txtPropaneFlask),
    L.marker([40.34, -108.8], {icon: iconExtinguisher, alt: "level7extinguisher", title: "Weapon: Fire Extinguisher"}).bindLabel("Fire Extinguisher").bindPopup(txtExtinguisher),

    // Firearm
    L.marker([10.66, -151.8], {icon: iconFirearm, alt: "level7firearm", title: "Weapon: Shotgun Bartoli 12G"}).bindLabel("Shotgun: Bartoli 12G").bindPopup(txtBartoli12G),

    // Melee
    L.marker([46.89, -101.4], {icon: iconBrick, alt: "level7brick", title: "Weapon: Brick"}).bindLabel("Brick").bindPopup(txtBrick),
    L.marker([56.68, -47.24], {icon: iconPipe, alt: "level7pipe", title: "Weapon: Lead Pipe"}).bindLabel("Lead Pipe").bindPopup(txtPipe),
    L.marker([41.21, -93.25], {icon: iconKatana, alt: "level7katana", title: "Weapon: Katana"}).bindLabel("Katana").bindPopup(txtKatana),
    L.marker([43.73, -101.6], {icon: iconToyTank, alt: "level7toytank", title: "Weapon: Toy Tank"}).bindLabel("Toy Tank").bindPopup(txtToyTank),
    L.marker([44.74, -110.1], {icon: iconShovel, alt: "level7shovel", title: "Weapon: Shovel"}).bindLabel("Shovel").bindPopup(txtShovel),

]);

var level7poi = L.layerGroup([

    L.marker([44.84, -96.63], {icon: iconHidingSpot, alt: "level7hidingspot"}).bindLabel("Hiding Spot"),
    L.marker([39.84, -110.7], {icon: iconHidingSpot, alt: "level7hidingspot"}).bindLabel("Hiding Spot"),

    L.marker([47.69, -42.71], {icon: iconConceal, alt: "level7conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([49.18, -43.63], {icon: iconNPC, alt: "level7npc", title: "NPC: Bohemian"}).bindLabel("Bohemian").bindPopup( popUp("img", "NPC", "Bohemian", "use", "req", "susp", "note", "ingame", "desc") ),

    L.marker([41.31, -109.7], {icon: iconSabotage, alt: "level7sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") ),
    L.marker([44.65, -99.00], {icon: iconSabotage, alt: "level7sab-shaft", title: "Sabotage: Shaft"}).bindLabel("Shaft").bindPopup( popGlobal(sabShaft, "all") ),

    L.marker([56.21, -45.74], {icon: iconDistraction, alt: "level7dis-radio", title: "Distraction: Radio"}).bindLabel("Transistor Radio").bindPopup( popGlobal(disRadio, "susp") ),
    L.marker([47.04, -42.67], {icon: iconDistraction, alt: "level7dis-sink", title: "Distraction: Sink"}).bindLabel("Sink").bindPopup( popGlobal(disSink, "Waiter / Kitchen Assistant / Chef") ),

    L.marker([43.92, -94.43], {icon: iconIntel, alt: "level7intel", title: "Intel: The Code to Caruso Safe"}).bindLabel("The Code to Caruso's Safe").bindPopup( popUp("safe", "Intel", "The Code to Caruso's Safe", "Examine", "req", "susp", "Reveals 'Memento' opportunity", "According to the Ether security guards, Francesca De Santis is searching for the combination code to Caruso's safe, which is located in the attic. She believes Caruso has written the code down and keeps it somewhere near. If Ether is concerned about the cotent, then it is probably worth investigating.", "desc") ),

    L.marker([44.55, -93.64], {icon: iconInteraction, alt: "level7interaction", title: "Interaction: Safe"}).bindLabel("Safe").bindPopup( popUp("safe", "Interaction", "Safe", "Use Combination", "Safe Combination", "susp", "note", "ingame", "desc") ),

    L.marker([47.81, -45.48], {icon: iconItem, alt: "level7item", title: "Item: Cannabis Joint"}).bindLabel("Cannabis Joint").bindPopup( popUp("cannabis", "Item", "Cannabis Joint", "use", "req", "susp", "note", "A joint belonging to the apartment's bohemian owner. Potent stuff, it's useful to cause sleepiness and increased appetite.", "desc")),
    L.marker([43.35, -93.64], {icon: iconItem, alt: "level7item", title: "Item: DNA Sample"}).bindLabel("DNA Sample").bindPopup( popUp("dna", "Item", "DNA Sample", "use", "req", "susp", "note", "Hair and skin cells belonging to Francesca De Santis. Caruso appears to be collecting DNA material on his closest allies as some kind of security policy. No doubt De Santis would like to know about this.", "desc") ),
    L.marker([44.77, -113.5], {icon: iconItem, alt: "level7item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce").bindPopup( popUp("sauce", "Item", "Expired Can of Spaghetti Sauce", "use", "req", "susp", "note", "An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.", "desc") ),

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
    level5markers = L.layerGroup([level5other, level5weapons, level5poi]),
    level6markers = L.layerGroup([level6other, level6weapons, level6poi]),
    level7markers = L.layerGroup([level7other, level7weapons, level7poi])
]);