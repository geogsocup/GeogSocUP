$( document ).ready(function() {
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