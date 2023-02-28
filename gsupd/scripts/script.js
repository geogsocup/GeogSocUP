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
});