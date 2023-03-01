<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Geographic Information System - UPD</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="../assets/img/logos/geogsocOld.png" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        <!-- CSS -->
        <link href="../css/styles.css" rel="stylesheet" />
        <link href="../css/custom.css" rel="stylesheet" />
        <link href="styles/style.css" rel="stylesheet" />
        <!-- Leaflet -->
        <link rel="stylesheet" href="plugins/leaflet/leaflet.css">
        <link rel="stylesheet" href="plugins/leaflet/plugins/locate-control/L.Control.Locate.min.css" />
		<!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" crossorigin="anonymous"></script>
         <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
       <!--  <script src="../js/geogride.js"></script> -->
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-shrink navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="https://www.geogsocup.org/"><img src="../assets/img/logos/UPGeogSoc.png" alt="..." /></a>
                <span class="rounded-elegance"><a id="GSUPHEADER" href="https://www.geogsocup.org/">GEOGRAPHIC SOCIETY OF THE UNIVERSITY OF THE PHILIPPINES</a></span>
                <span class="rounded-elegance"><a id="UPGEOGSOCHEADER" href="https://www.geogsocup.org/">UP GEOGSOC</a></span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="https://www.geogsocup.org/#services">Principles</a></li>
                        <li class="nav-item dropdown dropdown-media-med">
          					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            					Events
          					</a>
          					<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            					<li><a class="dropdown-item" href="https://www.geogsocup.org/#events">Explore Events</a></li>
            					<li><a class="dropdown-item" href="http://pgo.younggeographers.org/">PGO</a></li>
            					<li><a class="dropdown-item" href="#page-top">Geog Ride</a></li>
          					</ul>
       					</li>
       					<li class="nav-item dropdown-media-show"><a class="nav-link" href="https://www.geogsocup.org/#events">Explore Events</a></li>
            			<li class="nav-item dropdown-media-show"><a class="nav-link" href="http://pgo.younggeographers.org/">PGO</a></li>
            			<li class="nav-item dropdown-media-show"><a class="nav-link" href="#page-top">Geog Ride</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.geogsocup.org/#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.geogsocup.org/#team">Members</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.geogsocup.org/#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="map">
        	<div id="descriptor" class="col-lg-4">
        		<div class="row">
        			<span id="headerTitle1">UP Diliman Jeepney Routes</span>
        		</div>
        		<div class="row ikigai">
        			<div class="form-check">
  						<input class="form-check-input" type="checkbox" value="" id="ikotBox" checked>
  						<label class="form-check-label" for="flexCheckDefault">
    					UP Ikot
  						</label>
					</div>
					<div class="form-check">
  						<input class="form-check-input" type="checkbox" value="" id="katipBox" checked>
  						<label class="form-check-label" for="flexCheckChecked">
    					Katipunan
  						</label>
					</div>
					<div class="form-check">
  						<input class="form-check-input" type="checkbox" value="" id="philcoaBox" checked>
  						<label class="form-check-label" for="flexCheckChecked">
    					Philcoa
  						</label>
					</div>
        		</div>
       		</div>
        </div>
        <script src="../js/plugins/leaflet/js/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet-ant-path" type="text/javascript"></script>
        <script src="plugins/leaflet/plugins/locate-control/L.Control.Locate.js" charset="utf-8"></script>
        <script src="plugins/leaflet/plugins/active-area/activeArea.js" charset="utf-8"></script>
		<script src="scripts/map.js"></script>
		<script src="scripts/script.js"></script>
        <!-- Footer-->
        <footer id="firstfooter" class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Geographic Society of the University of the Philippines 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                   	 	<a class="btn btn-primary btn-social mx-2" href="mailto:geographicsociety.up@gmail.com"><i class="fa fa-envelope"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="https://twitter.com/geogsocup" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="https://www.facebook.com/geographicsociety.up" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="https://instagram.com/geogsocup" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="https://github.com/geogsocup" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end hide">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
	</body>
</html>
