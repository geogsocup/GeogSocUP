    // Collapse responsive navbar when toggler is visible
window.addEventListener('DOMContentLoaded', event => {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
  //Leafletsasdasd
    
});

function setActiveGeogRideView(rideId, edition, destinations, grideObj){
	for (var i=0; i < document.getElementsByClassName("gride-description-container").length; i++){
		document.getElementsByClassName("gride-description-container")[i].classList.add("hide");
	}
	showGeogRideDetails(rideId, edition, destinations, grideObj);
}


