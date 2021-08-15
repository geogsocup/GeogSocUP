document.getElementById('geogRideDiv').innerHTML = '<img id="geogRideLogo" class="img-fluid img-brand d-block mx-auto" src="../assets/img/events/geogrideeditcomp.png">'
	
	
	+'<div class="row text-center"><h4 class="section-subheading text-muted content-subheader">Are you in for the ride?</h4></div>'
	+'';
	//footer
document.getElementById('finalFooter').innerHTML = '<footer id="lastfooter" "class="footer py-4"><div class="container"><div class="row align-items-center"><div id="lastfooterDetail" class="col-lg-4 text-lg-start">Copyright &copy; Geographic Society of the University of the Philippines 2021</div><div class="col-lg-4 my-3 my-lg-0"><a class="btn btn-primary btn-social mx-2" href="mailto:geographicsociety.up@gmail.com"><i class="fa fa-envelope"></i></a><a class="btn btn-primary btn-social mx-2" href="https://twitter.com/geogsocup" target="_blank"><i class="fab fa-twitter"></i></a><a class="btn btn-primary btn-social mx-2" href="https://www.facebook.com/geographicsociety.up" target="_blank"><i class="fab fa-facebook-f"></i></a><a class="btn btn-primary btn-social mx-2" href="https://instagram.com/geogsocup" target="_blank"><i class="fab fa-instagram"></i></a><a class="btn btn-primary btn-social mx-2" href="https://github.com/geogsocup" target="_blank"><i class="fab fa-github"></i></a></div><div class="col-lg-4 text-lg-end hide"><a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a><a class="link-dark text-decoration-none" href="#!">Terms of Use</a></div></div></div></footer>';

//Geog Ride Description
body_content.innerHTML = '<div class="row gride-description-container mb-12"><h4>Geog Ride Virtual Tour</h4><span class="gride-description-body text-muted">This map showcases the different destinations explored in the Geog Ride trips we have taken over the years. The color-coordinated points correspond to the great sites and attractions we touched down on per trip. Clicking on a point will display a brief summary of its details including the name of the site, the year it was visited, and the special moments we all shared in it. Let’s look back on the memories we had during our travels on a digital platform. Whether you witnessed the early beginnings of the project in Batangas way back in 2010, found peace in the beaches of La Union in 2018, or rediscovered Manila in 2019, always know that Geog Ride always has a spot just for you. '
	+'Stay tuned for the next Geog Ride trip!</span></div>';


function showGeogRideDetails(id, edition, destinations, grideObj){
	
	var destList = grideObj.dest.join(', ');
	grideEditionContent.innerHTML = '<div class="row">'+
    								'<div class="row text-center mt-12 sted-io hide">'+
    									'<h4>'+edition+'</h4>'+
    								'</div>'+
    								'<div class="row">'+
    									'<div class="col-lg-4">'+
    										'<div class="gride-description-mini-container">'+
    											'<div class="row">'+
    												'<span class="edition-header">'+edition+'</span>'+
    											'</div>'+
    											'<div class="row mt-12">'+
    												'<span class="gride-description-mini-label-header">Destinations:</span>'+
    												'<span class="fs-12">'+destList+'</span>'+
    											'</div>'+
    											'<div class="row mt-12">'+
													'<span class="gride-description-mini-label-header">Semester:</span>'+
													'<span class="fs-12">'+grideObj.sem+'</span>'+
												'</div>'+
												'<div class="row mt-12">'+
													'<span class="gride-description-mini-label-header">Academic Year:</span>'+
													'<span class="fs-12">'+grideObj.ay+'</span>'+
												'</div>'+
												'<div class="row mt-12">'+
													'<span class="gride-description-mini-label-header">Date:</span>'+
													'<span class="fs-12">From '+grideObj.date_from+' to '+grideObj.date_to+'</span>'+
												'</div>'+
    										'</div>'+
    									'</div>'+
    									'<div class="col-lg-8">'+
    										'<div id="geogRideTourCarousel" class="carousel slide full-height" data-bs-ride="carousel">'+
    									 	'</div>'+
    									 '</div>'+
    								'</div>'+
    							'</div>';

	var carousel = document.createElement('div');
	var carouselControlPrev = document.createElement('button');
	var carouselControlNext = document.createElement('button');
	var carouselIndicators = document.createElement('div');
	var carouselLoader = document.createElement('div');
	var carouselInnerHTMLString = '';
	var carouselIndicatorsInnerHTMLString = '';
	
	carousel.className = 'carousel-inner full-height carousel-loader-samp';
	carouselLoader.className = 'full-height full-width text-center pos-abs carousel-loader-in';
	carouselIndicators.className = 'carousel-indicators';
	carouselControlPrev.className = 'carousel-control-prev';
	carouselControlNext.className = 'carousel-control-next';
	
	carouselControlPrev.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
		'<span class="visually-hidden">Previous</span>';
	carouselControlNext.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
		'<span class="visually-hidden">Next</span>';
	
	for(var i = 0; i<destinations; i++){
		carouselInnerHTMLString += '<div class="carousel-item">'+
	     '<img src="../assets/img/events/geogride/'+id+'/'+(i+1)+'.jpg" class="d-block w-100 gride-img-crs gride-img-sel'+(i+1)+'" loading="lazy" alt="...">'+
	 	 '</div>';
		carouselIndicatorsInnerHTMLString += '<button class="cutiepie" type="button" data-bs-target="#geogRideTourCarousel" data-bs-slide-to="'+i+'" aria-label="Slide '+(i+1)+'" ></button>';
	}
	carousel.innerHTML = carouselInnerHTMLString;
	carouselIndicators.innerHTML = carouselIndicatorsInnerHTMLString;
	carouselLoader.innerHTML = '<div class="spinner-border" role="status" style="position: relative;top: 50%;z-index: 1;height: 4rem;width: 4rem;"><span class="sr-only">Loading...</span></div>';
	document.getElementById("geogRideTourCarousel").appendChild(carouselIndicators);
	document.getElementById("geogRideTourCarousel").appendChild(carousel);
	document.getElementsByClassName('carousel-loader-samp')[0].appendChild(carouselLoader);
	document.getElementById("geogRideTourCarousel").appendChild(carouselControlPrev);
	document.getElementById("geogRideTourCarousel").appendChild(carouselControlNext);
	document.getElementsByClassName('carousel-item')[0].classList.add("active");
	document.getElementsByClassName('cutiepie')[0].classList.add("active");
	document.getElementsByClassName('cutiepie')[0].setAttribute('type', 'button');
	document.getElementsByClassName('cutiepie')[0].setAttribute('data-bs-target', '#geogRideTourCarousel');
	document.getElementsByClassName('cutiepie')[0].setAttribute('aria-current', 'true');
	document.getElementsByClassName('carousel-control-prev')[0].setAttribute('type', 'button');
	document.getElementsByClassName('carousel-control-prev')[0].setAttribute('data-bs-target', '#geogRideTourCarousel');
	document.getElementsByClassName('carousel-control-prev')[0].setAttribute('data-bs-slide', 'prev');
	document.getElementsByClassName('carousel-control-next')[0].setAttribute('type', 'button');
	document.getElementsByClassName('carousel-control-next')[0].setAttribute('data-bs-target', '#geogRideTourCarousel');
	document.getElementsByClassName('carousel-control-next')[0].setAttribute('data-bs-slide', 'next');
	
	$(".gride-img-sel1").on('load', function() {
		$(".carousel-loader-in").fadeOut();
		$("#geogRideTourCarousel").fadeTo(200, 1);
	});
}
