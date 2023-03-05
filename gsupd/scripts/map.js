var kiosksData = fetch('../gsupd/geojson/kiosks.geojson')
.then((response) => response.json())
.then((kiosksData) => {return kiosksData});

var pantrancoData = fetch('../gsupd/geojson/pantranco.geojson')
.then((response) => response.json())
.then((data) => {return data});

var pantrancoRR = [];
var tokiRR = toki.features[0].geometry.coordinates;

const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

function swapArray(){
	for (var x = 0; ikot.length > x;x++){
		let newArray = ikot[x];
		swapElements(newArray, 0, 1);
		
	}
	for (var x = 0; katip.length > x;x++){
		let newArray = katip[x];
		swapElements(newArray, 0, 1);
		
	}
	for (var x = 0; philcoa.length > x;x++){
		let newArray = philcoa[x];
		swapElements(newArray, 0, 1);
	}
	for (var x = 0; tokiRR.length > x;x++){
		let newArray = tokiRR[x];
		swapElements(newArray, 0, 1);
	}
}

swapArray();

const pantrancoNewData = async () => {
	  const x = await pantrancoData;
	  for (var i = 0; x.features.map(feature => [feature]).length > i;i++){
		  for(var j = 0; x.features.map(feature => [feature])[i].length > j; j++){
			  pantrancoRR = x.features.map(feature => [feature])[i][j].geometry.coordinates;
			  for (var k = 0; pantrancoRR.length > k;k++){
					let newArray = pantrancoRR[k];
					swapElements(newArray, 0, 1);
			  }
		  }
		  
	  }
	  const pantrancoPath = L.polyline.antPath(pantrancoRR, {
			  "delay": 800,
			  "dashArray": [
				    30,
				    50
			  ],
			  "weight": 8,
			  "color": "#18199b",
			  "pulseColor": "#000000",
			  "paused": false,
			  "reverse": false,
			  "className":'pantranco-ant-line-path',
			  "hardwareAccelerated": true
	});
	routeMap.addLayer(pantrancoPath);
};

const ikotPath = L.polyline.antPath(ikot, {
	  "delay": 1200,
	  "dashArray": [
	    30,
	    50
	  ],
	  "weight": 8,
	  "color": "  #def113",
	  "pulseColor": "#000000",
	  "paused": false,
	  "reverse": false,
	  "className":'ikot-ant-line-path',
	  "hardwareAccelerated": true
	});

const katipPath = L.polyline.antPath(katip, {
	  "delay": 1200,
	  "dashArray": [
	    30,
	    50
	  ],
	  "weight": 8,
	  "color": "#FE0404",
	  "pulseColor": "#000000",
	  "paused": false,
	  "reverse": false,
	  "className":'katip-ant-line-path',
	  "hardwareAccelerated": true
	});

const philcoaPath = L.polyline.antPath(philcoa, {
	  "delay": 800,
	  "dashArray": [
		    30,
		    50
	  ],
	  "weight": 8,
	  "color": "#056705",
	  "pulseColor": "#000000",
	  "paused": false,
	  "reverse": false,
	  "className":'philcoa-ant-line-path',
	  "hardwareAccelerated": true
	});

const tokiPath = L.polyline.antPath(tokiRR, {
	  "delay": 800,
	  "dashArray": [
		    30,
		    50
	  ],
	  "weight": 8,
	  "color": "#f25d1f",
	  "pulseColor": "#000000",
	  "paused": false,
	  "reverse": false,
	  "className":'toki-ant-line-path',
	  "hardwareAccelerated": true
	});

const routeMap = L.map('map', {
	zoomDelta: 0.25,
    zoomSnap: 0.1
}).setView([14.6538,121.0601], 16);

L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}&apistyle=s.e%3Al.i%7Cp.v%3Aoff&s=Galileo&style=api%7Csmartmaps', {
	  attribution: '&copy; <a href="https://www.google.com/intl/en-GB_ALL/permissions/geoguidelines/">Google Maps</a> &middot; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a> &middot'
}).addTo(routeMap);

L.control.zoom();
L.control.locate().addTo(routeMap);

var busStop = L.icon({
    iconUrl: '../assets/busstop.png',
    shadowUrl: 'plugins/leaflet/images/marker-shadow.png',
    className: 'sandeep-tomar-bus',
    iconSize:     [18, 30], // size of the icon
    shadowSize:   [40, 54],
    iconAnchor:   [18, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [24, 52],
    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
});


//Kiosk Markers
const kioskMarker = L.AwesomeMarkers.icon({
	prefix: 'kiosk',
    icon: 'kiosk-icon',
    markerColor: 'red',
    extraClasses: 'kiosk-ultima'
});

const foodHallMarker = L.AwesomeMarkers.icon({
	prefix: 'kiosk',
    icon: 'kiosk-icon',
    markerColor: 'green',
    extraClasses: 'foodhall-ultima'
});

const restoMarker = L.AwesomeMarkers.icon({
	prefix: 'kiosk',
    icon: 'kiosk-icon',
    markerColor: 'orange',
    extraClasses: 'resto-ultima'
});

const inumanMarker = L.AwesomeMarkers.icon({
	prefix: 'kiosk',
    icon: 'beer-icon',
    markerColor: 'blue',
    extraClasses: 'inuman-ultima'
});

const eateryMarker = L.AwesomeMarkers.icon({
	prefix: 'kiosk',
    icon: 'kiosk-icon',
    markerColor: 'cadetblue',
    extraClasses: 'eatery-ultima'
});

function generateStops(){
	L.geoJSON(geojson_point, {
		onEachFeature: function (feature, layer) {
			layer.setIcon(busStop);
		}, 
	}).addTo(routeMap);
}

const generateKiosks = async () => {
	  const x = await kiosksData;
	  L.geoJSON(x, {
			onEachFeature: function (feature, layer) {
				if(feature.properties.type === 'Food Hall'){
					layer.setIcon(foodHallMarker);
				} else if (feature.properties.type === 'Kiosk') {
					layer.setIcon(kioskMarker);
				} else if (feature.properties.type === 'Inuman') {
					layer.setIcon(inumanMarker);
				} else if (feature.properties.type === 'Restaurant') {
					layer.setIcon(restoMarker);
				} else {
					layer.setIcon(eateryMarker);
				}
				layer.bindPopup('<b>'+feature.properties.type+'</b>'+
				'<br>'+(feature.properties.name ? feature.properties.name : '')+''		
				);
			}, 
		}).addTo(routeMap);
		$(".kiosk").parent().hide();
		$(".kiosk-ultima-shadow").hide();
		$(".resto-ultima-shadow").hide();
		$(".foodhall-ultima-shadow").hide();
		$(".inuman-ultima-shadow").hide();
		$(".eatery-ultima-shadow").hide();
	};

function generateKiosksDeprecated(){
	L.geoJSON(kiosksData, {
		onEachFeature: function (feature, layer) {
			if(feature.properties.type === 'Food Hall'){
				layer.setIcon(foodHallMarker);
			} else if (feature.properties.type === 'Kiosk') {
				layer.setIcon(kioskMarker);
			} else if (feature.properties.type === 'Inuman') {
				layer.setIcon(inumanMarker);
			} else if (feature.properties.type === 'Restaurant') {
				layer.setIcon(restoMarker);
			} else {
				layer.setIcon(eateryMarker);
			}
			layer.bindPopup('<b>'+feature.properties.type+'</b>'+
			'<br>'+(feature.properties.name ? feature.properties.name : '')+''		
			);
		}, 
	}).addTo(routeMap);
	$(".kiosk").parent().hide();
	$(".kiosk-ultima-shadow").hide();
	$(".resto-ultima-shadow").hide();
	$(".foodhall-ultima-shadow").hide();
	$(".inuman-ultima-shadow").hide();
	$(".eatery-ultima-shadow").hide();
}

function generateRouteMap(){
	generateStops();
	$(".sandeep-tomar-bus").hide();
	routeMap.addLayer(ikotPath);
	routeMap.addLayer(katipPath);
	routeMap.addLayer(philcoaPath);
	/*routeMap.addLayer(pantrancoPath);*/
	pantrancoNewData();	
	routeMap.addLayer(tokiPath);
}

generateRouteMap();
generateKiosks();
  
L.map(document.createElement('div')).setActiveArea({
	position: 'absolute',
	top: '12rem',
	right: '50px',
	height: '100%'
});

routeMap.setActiveArea('activeArea', true, true);
routeMap.fitBounds(ikotPath.getBounds());