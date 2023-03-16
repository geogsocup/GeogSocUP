$( document ).ready(function() {
	//$('#noToJeepPhaseout').modal('toggle');
	//Route Checkboxes
	$('#ikotBox').change(function() {
		if ($('#ikotBox').is(":checked"))
		{
			$(".ikot-ant-line-path").parent().show();
		} else {
			$(".ikot-ant-line-path").parent().hide();
		}
    });
	$('#tokiBox').change(function() {
		if ($('#tokiBox').is(":checked"))
		{
			$(".toki-ant-line-path").parent().show();
		} else {
			$(".toki-ant-line-path").parent().hide();
		}
    });
	$('#katipBox').change(function() {
		if ($('#katipBox').is(":checked"))
		{
			$(".katip-ant-line-path").parent().show();
		} else {
			$(".katip-ant-line-path").parent().hide();
		}
    });
	$('#philcoaBox').change(function() {
		if ($('#philcoaBox').is(":checked"))
		{
			$(".philcoa-ant-line-path").parent().show();
		} else {
			$(".philcoa-ant-line-path").parent().hide();
		}
    });
	$('#pantrancoBox').change(function() {
		if ($('#pantrancoBox').is(":checked"))
		{
			$(".pantranco-ant-line-path").parent().show();
		} else {
			$(".pantranco-ant-line-path").parent().hide();
		}
    });
	$('#jeepBox').change(function() {
		if ($('#jeepBox').is(":checked"))
		{
			$('.sandeep-tomar-bus').show();
		} else {
			$('.sandeep-tomar-bus').hide();
		}
    });
	
	//Kiosks Checkboxes
	$('#kioskBox').change(function() {
		if ($('#kioskBox').is(":checked"))
		{
			$( ".kiosk-ultima" ).parent().visible();
			$(".kiosk-ultima-shadow").visible();
		} else {
			$( ".kiosk-ultima" ).parent().invisible();
			$(".kiosk-ultima-shadow").invisible();
		}
    });
	$('#eateryBox').change(function() {
		if ($('#eateryBox').is(":checked"))
		{
			$( ".eatery-ultima" ).parent().visible();
			$(".eatery-ultima-shadow").visible();
		} else {
			$( ".eatery-ultima" ).parent().invisible();
			$(".eatery-ultima-shadow").invisible();
		}
    });
	$('#foodhubBox').change(function() {
		if ($('#foodhubBox').is(":checked"))
		{
			$( ".foodhall-ultima" ).parent().visible();
			$(".foodhall-ultima-shadow").visible();
		} else {
			$( ".foodhall-ultima" ).parent().invisible();
			$(".foodhall-ultima-shadow").invisible();
		}
    });
	$('#restoBox').change(function() {
		if ($('#restoBox').is(":checked"))
		{
			$( ".resto-ultima" ).parent().visible();
			$(".resto-ultima-shadow").visible();
		} else {
			$( ".resto-ultima" ).parent().invisible();
			$(".resto-ultima-shadow").invisible();
		}
    });
	$('#inumanBox').change(function() {
		if ($('#inumanBox').is(":checked"))
		{
			$( ".inuman-ultima" ).parent().visible();
			$(".inuman-ultima-shadow").visible();
		} else {
			$( ".inuman-ultima" ).parent().invisible();
			$(".inuman-ultima-shadow").invisible();
		}
    });
	$('#cafeBox').change(function() {
		if ($('#cafeBox').is(":checked"))
		{
			$( ".cafe-ultima" ).parent().visible();
			$(".cafe-ultima-shadow").visible();
		} else {
			$( ".cafe-ultima" ).parent().invisible();
			$(".cafe-ultima-shadow").invisible();
		}
    });
	
	$('#toiletBox').change(function() {
		if ($('#toiletBox').is(":checked"))
		{
			$( ".toilet-ultima" ).parent().visible();
			$(".toilet-ultima-shadow").visible();
		} else {
			$( ".toilet-ultima" ).parent().invisible();
			$(".toilet-ultima-shadow").invisible();
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

	$('#ikotBox').prop('checked', true);
	$('#tokiBox').prop('checked', true);
	$('#katipBox').prop('checked', true);
	$('#philcoaBox').prop('checked', true);
	$('#pantrancoBox').prop('checked', true);
	
	$('#jeepBox').prop('checked', false);
	$('#inumanBox').prop('checked', false);
	$('#kioskBox').prop('checked', false);
	$('#eateryBox').prop('checked', false);
	$('#restoBox').prop('checked', false);
	$('#foodhubBox').prop('checked', false);
	$('#cafeBox').prop('checked', false);
	
	$('#toiletBox').prop('checked', false);
});