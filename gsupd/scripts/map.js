function swapArray(){
	const swapElements = (array, index1, index2) => {
	    let temp = array[index1];
	    array[index1] = array[index2];
	    array[index2] = temp;
	};
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
}

swapArray();

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
	  "hardwareAccelerated": true
	});

const routeMap = L.map('map', {
	zoomDelta: 0.25,
    zoomSnap: 0.1
}).setView([14.6538,121.0601], 16);

L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}&apistyle=s.e%3Al.i%7Cp.v%3Aoff&s=Galileo&style=api%7Csmartmaps', {
	  attribution: '&copy; <a href="https://www.google.com/intl/en-GB_ALL/permissions/geoguidelines/">Google Maps</a>'
}).addTo(routeMap);

L.control.zoom();
L.control.locate().addTo(routeMap);

var busStop = L.icon({
    iconUrl: '../assets/busstop.png',
    className: 'sandeep-tomar-bus',
    iconSize:     [18, 30], // size of the icon
    iconAnchor:   [18, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -36] // point from which the popup should open relative to the iconAnchor
});

function generateStops(){
	L.geoJSON(geojson_point, {
		onEachFeature: function (feature, layer) {
			layer.setIcon(busStop);
		}, 
	}).addTo(routeMap);
}

generateStops();
routeMap.addLayer(ikotPath);
routeMap.addLayer(katipPath);
routeMap.addLayer(philcoaPath);

var sharawt = L.marker([14.6534, 121.06965]).addTo(routeMap);
var carparts = L.marker([14.65951, 121.06707]).addTo(routeMap);
sharawt.bindPopup("<b>Shoutout nga pala kay TJ Laranang ng Philo dept</b>").openPopup();
carparts.bindPopup("Shoutout sa CSSP Car Parts & Services bantayan niyo po yung lugar na to maraming atenistang nagpapark dito");

L.map(document.createElement('div')).setActiveArea({
	position: 'absolute',
	top: '12rem',
	right: '50px',
	height: '100%'
});

routeMap.setActiveArea('activeArea', true, true);
routeMap.fitBounds(ikotPath.getBounds());