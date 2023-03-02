$( document ).ready(function() {
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