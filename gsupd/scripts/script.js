$( document ).ready(function() {
	//Route Checkboxes
	$('#ikotBox').change(function() {
		if ($('#ikotBox').is(":checked"))
		{
			routeMap.addLayer(ikotPath);
		} else {
			routeMap.removeLayer(ikotPath);
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
	$('#jeepBox').change(function() {
		if ($('#jeepBox').is(":checked"))
		{
			generateStops();
		} else {
			$('.sandeep-tomar-bus').remove();
		}
    });
	//Kiosks Checkboxes	$(".kiosk-ultima-shadow").hide();
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
});