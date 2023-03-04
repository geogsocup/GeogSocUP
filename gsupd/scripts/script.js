$( document ).ready(function() {

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
		  "hardwareAccelerated": true
		});

	const routeMap = L.map('map', {
		maxZoom: 19.5,
		zoomDelta: 0.25,
	    zoomSnap: 0.1
	}).setView([14.6538,121.0601], 16);	
	
	//Route Checkboxes
	$('#ikotBox').change(function() {
		if ($('#ikotBox').is(":checked"))
		{
			routeMap.addLayer(ikotPath);
		} else {
			routeMap.removeLayer(ikotPath);
		}
    });
	$('#tokiBox').change(function() {
		if ($('#tokiBox').is(":checked"))
		{
			routeMap.addLayer(tokiPath);
		} else {
			routeMap.removeLayer(tokiPath);
		}
    });
	$('#katipBox').change(function() {
		if ($('#katipBox').is(":checked"))
		{
			routeMap.addLayer(katipPath);
		} else {
			routeMap.removeLayer(katipPath);
		}
    });
	$('#philcoaBox').change(function() {
		if ($('#philcoaBox').is(":checked"))
		{
			routeMap.addLayer(philcoaPath);
		} else {
			routeMap.removeLayer(philcoaPath);
		}
    });
	$('#pantrancoBox').change(function() {
		if ($('#pantrancoBox').is(":checked"))
		{
			routeMap.addLayer(pantrancoPath);
		} else {
			routeMap.removeLayer(pantrancoPath);
		}
    });
	$('#jeepBox').change(function() {
		if ($('#jeepBox').is(":checked"))
		{
			generateStops();
		} else {
			$('.sandeep-tomar-bus').remove();
		}
    });
	
	//Kiosks Checkboxes
	$('#kioskBox').change(function() {
		if ($('#kioskBox').is(":checked"))
		{
			$( ".kiosk-ultima" ).parent().show();
			$(".kiosk-ultima-shadow").show();
		} else {
			$( ".kiosk-ultima" ).parent().hide();
			$(".kiosk-ultima-shadow").hide();
		}
    });
	$('#eateryBox').change(function() {
		if ($('#eateryBox').is(":checked"))
		{
			$( ".eatery-ultima" ).parent().show();
			$(".eatery-ultima-shadow").show();
		} else {
			$( ".eatery-ultima" ).parent().hide();
			$(".eatery-ultima-shadow").hide();
		}
    });
	$('#foodhubBox').change(function() {
		if ($('#foodhubBox').is(":checked"))
		{
			$( ".foodhall-ultima" ).parent().show();
			$(".foodhall-ultima-shadow").show();
		} else {
			$( ".foodhall-ultima" ).parent().hide();
			$(".foodhall-ultima-shadow").hide();
		}
    });
	$('#restoBox').change(function() {
		if ($('#restoBox').is(":checked"))
		{
			$( ".resto-ultima" ).parent().show();
			$(".resto-ultima-shadow").show();
		} else {
			$( ".resto-ultima" ).parent().hide();
			$(".resto-ultima-shadow").hide();
		}
    });
	$('#inumanBox').change(function() {
		if ($('#inumanBox').is(":checked"))
		{
			$( ".inuman-ultima" ).parent().show();
			$(".inuman-ultima-shadow").show();
		} else {
			$( ".inuman-ultima" ).parent().hide();
			$(".inuman-ultima-shadow").hide();
		}
    });
/*	$("#kioskClickTab").click(function() {
		if (!$("#jeepRouteTab").hasClass("active")){
			$('#inumanBox').prop('checked', true);
			$('#kioskBox').prop('checked', true);
			$('#eateryBox').prop('checked', true);
			$('#restoBox').prop('checked', true);
			$('#foodhubBox').prop('checked', true);
			$(".kiosk").parent().show();
			$(".kiosk-ultima-shadow").show();
			$(".resto-ultima-shadow").show();
			$(".foodhall-ultima-shadow").show();
			$(".inuman-ultima-shadow").show();
			$(".eatery-ultima-shadow").show();
		}
	});*/
	
	$(".leaflet-control-locate-location-arrow").addClass("bi bi-geo-alt-fill");
	$( "#resetgisupd1" ).click(function() {
		routeMap.fitBounds(ikotPath.getBounds());
	});
	$( "#resetgisupd2" ).click(function() {
		routeMap.fitBounds(ikotPath.getBounds());
	});
	$( "#maximum-ocupans-120" ).click(function() {
		if ($("#maximizer").hasClass("bi-chevron-compact-down")) {
			$("#descriptor").css({"height":"1%"});
			$("#maximizer").removeClass("bi-chevron-compact-down");
			$("#maximizer").addClass("bi-chevron-compact-up");
		} else {
			$("#descriptor").css({"height":""});
			$("#maximizer").removeClass("bi-chevron-compact-up");
			$("#maximizer").addClass("bi-chevron-compact-down");
		}
	});
	$('#jeepBox').prop('checked', false);
	$('#inumanBox').prop('checked', false);
	$('#kioskBox').prop('checked', false);
	$('#eateryBox').prop('checked', false);
	$('#restoBox').prop('checked', false);
	$('#foodhubBox').prop('checked', false);
});