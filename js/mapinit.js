var coordZoomJSON = [{'id':1,'edition':'Geog Ride Manila 2019','coords':[14.5950,120.9835],'zoom':16, 'dest':['Binondo','Escolta','Intramuros','Fort Santiago'],'sem':'1st','ay':'2019 - 2020','date_from':'2019-11-09','date_to':'2019-11-09'},
					 {'id':2,'edition':'Geog Ride La Union 2019','coords':[16.4578,120.8373],'zoom':10, 'dest':['La Union Provincial Capitol','Baluarte Watch Tower','Round House Resort','Gapuz Grapes Farm','Basilica Minore of Our Lady of Charity'],'sem':'2nd','ay':'2018 - 2019','date_from':'2018-04-06','date_to':'2018-04-07'},
					 {'id':3,'edition':'Geog Ride Nueva Ecija 2018','coords':[15.4652,121.3254],'zoom':11, 'dest':['Philippine Rice Research Institute','Minalungao National Park','Haynet\'s Resort & Countryhouse'],'sem':'2nd','ay':'2017 - 2018','date_from':'2018-04-14','date_to':'2018-04-15'},
					 {'id':5,'edition':'Geog Ride Bataan 2017','coords':[14.6205,120.7376],'zoom':11, 'dest':['Abucay Church','Dambana ng Kagitingan','Pawikan Conservation Center','Juness Beach Resort'],'sem':'2nd','ay':'2016 - 2017','date_from':'2017-03-25','date_to':'2017-03-26'},
					 {'id':4,'edition':'Geog Ride Batangas 2017','coords':[13.8067,121.7711],'zoom':10, 'dest':['Leon and Galicano Museum','Galleria Taal','Casa Villavicencio','Minor Basilica of St. Martin of Tours (Taal Basilica)','Balai sa San Juan Resort'],'sem':'1st','ay':'2017 - 2018','date_from':'2017-10-14','date_to':'2017-10-15'},
					 {'id':6,'edition':'Geog Ride Batangas 2016','coords':[13.8311,121.6049],'zoom':11, 'dest':['San Sebastian Cathedral','Museo de Lipa','Casa de Segunda','Bluroze Farms','Balai sa San Juan Resort'],'sem':'2nd','ay':'2015 - 2016','date_from':'2016-04-02','date_to':'2016-04-03'},
					 {'id':7,'edition':'Geog Ride Quezon 2016','coords':[13.9671,121.8012],'zoom':11, 'dest':['Kamay ni Hesus','Gintong Yaman ng Quezon Museum','Ugu Bigyan Potter\'s Garden','Dalampasigan Beach and Pool Resort'],'sem':'1st','ay':'2016 - 2017','date_from':'2016-11-05','date_to':'2016-11-06'},
					 {'id':8,'edition':'Geog Ride Bataan 2015','coords':[14.6205,120.7376],'zoom':11, 'dest':['Abucay Church','Dambana ng Kagitingan','Philippine-Japanese Friendship Tower','Coral View Beach Resort','Pawikan Conservation Center'],'sem':'2nd','ay':'2014 - 2015','date_from':'2015-05-02','date_to':'2015-05-03'},
					 {'id':9,'edition':'Geog Ride Zambales 2015','coords':[15.0769,120.7687],'zoom':10, 'dest':['Casa San Miguel','Botolan Wildlife Farm','President Ramon Magsaysay Ancestral House','Punta de Uian Beach Resort'],'sem':'1st','ay':'2015 - 2016','date_from':'2015-10-24','date_to':'2015-10-25'},
					 {'id':10,'edition':'Geog Ride Pangasinan 2014','coords':[16.2587,120.7612],'zoom':10, 'dest':['Punta Riviera Resort'],'sem':'2nd','ay':'2013 - 2014','date_from':'2014-02-08','date_to':'2014-02-09'},
					 {'id':11,'edition':'Geog Ride Batangas 2014','coords':[13.6768,121.5602],'zoom':12, 'dest':['Laiya'],'sem':'1st','ay':'2014 - 2015','date_from':'2014-11-22','date_to':'2014-11-23'},
					 {'id':12,'edition':'Geog Ride Zambales 2013','coords':[15.3342,120.2708],'zoom':11, 'dest':['Iba'],'sem':'2nd','ay':'2012 - 2013','date_from':'2013-02-16','date_to':'2013-02-17'},
					 {'id':13,'edition':'Geog Ride Batangas 2013','coords':[13.6768,121.5602],'zoom':12, 'dest':['La Luz Beach Resort'],'sem':'1st','ay':'2013 - 2014','date_from':'2013-09-07','date_to':'2013-09-08'},
					 {'id':14,'edition':'Geog Ride Pangasinan 2012','coords':[16.2587,120.7612],'zoom':10, 'dest':['Bolinao'],'sem':'1st','ay':'2012 - 2013','date_from':'2012-09-01','date_to':'2012-09-02'},
					 {'id':15,'edition':'Geog Ride Pangasinan 2011 2nd Sem','coords':[16.2587,120.7612],'zoom':10, 'dest':['Hundred Islands'],'sem':'2nd','ay':'2010 - 2011','date_from':'2011-01-29','date_to':'2011-01-30'},
					 {'id':16,'edition':'Geog Ride Pangasinan 2011 1st Sem','coords':[16.2587,120.7612],'zoom':10, 'dest':['Bolinao'],'sem':'1st','ay':'2011 - 2012','date_from':'2011-08-20','date_to':'2011-08-21'},
					 {'id':17,'edition':'Geog Ride Batangas 2010','coords':[13.6768,121.5602],'zoom':12, 'dest':['Punto Miguel Laiya'],'sem':'1st','ay':'2010 - 2011','date_from':'2010-09-11','date_to':'2010-09-12'}];
var insertionPointHTML = '';
var highlightLayer;
    function highlightFeature(e) {
        highlightLayer = e.target;

        if (e.target.feature.geometry.type === 'LineString') {
          highlightLayer.setStyle({
            color: '#ffff00',
          });
        } else {
          highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 1
          });
        }
    }
    var map = L.map('map', {
        zoomControl:true, maxZoom:22, minZoom:1
    }).fitBounds([[13.266900614339079,119.5201019285812],[16.12309214781611,123.55062301071177]]);
    var hash = new L.Hash(map);
    map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> &middot; <a href="https://qgis.org" target="_blank">QGIS</a> &middot; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a> &middot; Map data ©2021 <a href="https://maps.google.com" target="_blank">Google</a>');
    var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
    var bounds_group = new L.featureGroup([]);
    function setBounds() {
    }
    map.createPane('pane_GoogleMapsTerrain_0');
    map.getPane('pane_GoogleMapsTerrain_0').style.zIndex = 400;
    var layer_GoogleMapsTerrain_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        pane: 'pane_GoogleMapsTerrain_0',
        opacity: 1.0,
        attribution: '',
        minZoom: 1,
        maxZoom: 22,
        minNativeZoom: 0,
        maxNativeZoom: 18
    });
    layer_GoogleMapsTerrain_0;
    map.addLayer(layer_GoogleMapsTerrain_0);
    function pop_geogride_dest2_1(feature, layer) {
        layer.on({
            mouseout: function(e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
        	<tr>\
            <td class="pb-2" colspan="2"><strong>' + (feature.properties['edition'] !== null ? autolinker.link(feature.properties['edition'].toLocaleString()) : '') + '</strong> - '+ (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') +'</td>\
            </tr>\
            </table>\
            <img src="../assets/img/events/geogride/'+(feature.properties['edition'] !== null ? autolinker.link(feature.properties['edId'].toLocaleString()) : '')+'/'+(feature.properties['edition'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '')+'.png" class="d-block w-100" alt="...">';
        layer.bindPopup(popupContent);
    }

    function style_geogride_dest2_1_0(feature) {
        switch(String(feature.properties['edition'])) {
            case 'Geog Ride Bataan 2015':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(220,64,61,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Batangas 2010':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(110,64,4,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Batangas 2013':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(226,96,8,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Batangas 2014':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(145,132,66,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Batangas 2016':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(238,165,18,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Pangasinan 2011 1st Sem':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,212,171,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Pangasinan 2011 2nd Sem':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(17,161,130,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Pangasinan 2012':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(107,236,202,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Pangasinan 2014':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 0,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            display: 'none',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 0,
            fillColor: 'rgba(121,218,196,1.0)',
            interactive: false,
        }
                break;
            case 'Geog Ride Quezon 2016':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(183,229,103,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Zambales 2013':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(107,111,184,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Zambales 2015':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(48,99,218,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Bataan 2017':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(217,13,2,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Batangas 2017':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(233,177,127,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride La Union 2019':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(8,56,227,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Manila 2019':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(221,221,9,1.0)',
            interactive: true,
        }
                break;
            case 'Geog Ride Nueva Ecija 2018':
                return {
            pane: 'pane_geogride_dest2_1',
            radius: 8.0,
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(25,105,4,1.0)',
            interactive: true,
        }
                break;
        }
    }
    map.createPane('pane_geogride_dest2_1');
    map.getPane('pane_geogride_dest2_1').style.zIndex = 401;
    map.getPane('pane_geogride_dest2_1').style['mix-blend-mode'] = 'normal';
    var layer_geogride_dest2_1 = new L.geoJson(json_geogride_dest2_1, {
        attribution: '',
        interactive: true,
        dataVar: 'json_geogride_dest2_1',
        layerName: 'layer_geogride_dest2_1',
        pane: 'pane_geogride_dest2_1',
        onEachFeature: pop_geogride_dest2_1,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_geogride_dest2_1_0(feature));
        },
    });
    bounds_group.addLayer(layer_geogride_dest2_1);
    map.addLayer(layer_geogride_dest2_1);
    setBounds();
    map.addControl(new L.Control.Search({
        layer: layer_geogride_dest2_1,
        initial: false,
        hideMarkerOnCollapse: true,
        propertyName: 'edition'}));
    document.getElementsByClassName('search-button')[0].className +=
     ' fa fa-binoculars';
    var mapDiv = document.getElementById('map');
    var row = document.createElement('div');
    row.className="row";
    row.id="all";
    //row.style.height = "100%";
    var col1 = document.createElement('div');
    col1.className="col-lg-5";
    col1.id = "mapWindow";
    col1.style.height = "100%";
    //col1.style.width = "80%";
    col1.style.display = "inline-block";
    var col2 = document.createElement('div');
    col2.className="col-lg-7";
    col2.id = "menu";
    col2.style.display = "inline-block";
    mapDiv.parentNode.insertBefore(row, mapDiv);
    document.getElementById("all").appendChild(col1);
    document.getElementById("all").appendChild(col2);
    col1.appendChild(mapDiv)
    var Filters = {"edition": "str"};
    function filterFunc() {
      map.eachLayer(function(lyr){
      if ("options" in lyr && "dataVar" in lyr["options"]){
        features = this[lyr["options"]["dataVar"]].features.slice(0);
        try{
          for (key in Filters){
            keyS = key.replace(/[^a-zA-Z0-9_]/g, "")
            if (Filters[key] == "str" || Filters[key] == "bool"){
              var selection = [];
              var options = document.getElementById("sel_" + keyS).options
              for (var i=0; i < options.length; i++) {
                if (options[i].selected) selection.push(options[i].value);
              }
                try{
                  if (key in features[0].properties && !resetFilter){
                    for (i = features.length - 1;
                      i >= 0; --i){
                      if (selection.indexOf(
                      features[i].properties[key])<0
                      && selection.length>0) {
                      features.splice(i,1);
                      }
                    }
                    map.setView([coordZoomJSON.find(x => x.edition === selection[0]).coords[0], coordZoomJSON.find(x => x.edition === selection[0]).coords[1]], coordZoomJSON.find(x => x.edition === selection[0]).zoom);
                    setActiveGeogRideView(coordZoomJSON.find(x => x.edition === selection[0]).id, selection[0], features.length, coordZoomJSON.find(x => x.edition === selection[0]));
                  }
                } catch(err){
              }
            }
            if (Filters[key] == "int"){
              sliderVals =  document.getElementById(
                "div_" + keyS).noUiSlider.get();
              try{
                if (key in features[0].properties){
                for (i = features.length - 1; i >= 0; --i){
                  if (parseInt(features[i].properties[key])
                      < sliderVals[0]
                      || parseInt(features[i].properties[key])
                      > sliderVals[1]){
                        features.splice(i,1);
                      }
                    }
                  }
                } catch(err){
                }
              }
            if (Filters[key] == "real"){
              sliderVals =  document.getElementById(
                "div_" + keyS).noUiSlider.get();
              try{
                if (key in features[0].properties){
                for (i = features.length - 1; i >= 0; --i){
                  if (features[i].properties[key]
                      < sliderVals[0]
                      || features[i].properties[key]
                      > sliderVals[1]){
                        features.splice(i,1);
                      }
                    }
                  }
                } catch(err){
                }
              }
            if (Filters[key] == "date"
              || Filters[key] == "datetime"
              || Filters[key] == "time"){
              try{
                if (key in features[0].properties){
                  HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
                  startdate = document.getElementById("dat_" +
                    HTMLkey + "_date1").value.replace(" ", "T");
                  enddate = document.getElementById("dat_" +
                    HTMLkey + "_date2").value.replace(" ", "T");
                  for (i = features.length - 1; i >= 0; --i){
                    if (features[i].properties[key] < startdate
                      || features[i].properties[key] > enddate){
                      features.splice(i,1);
                    }
                  }
                }
              } catch(err){
              }
            }
          }
        } catch(err){
        }
      this[lyr["options"]["layerName"]].clearLayers();
      this[lyr["options"]["layerName"]].addData(features);
      }
      })
    }
    	var geogRideHTML = document.createElement("div");
        document.getElementById("menu").appendChild(
        		geogRideHTML);
        geogRideHTML.id = "geogRideDiv";
        var div_edition = document.createElement('div');
        div_edition.id = "div_edition";
        div_edition.className= "filterselect";
        document.getElementById("menu").appendChild(div_edition);
        var sel_edition = document.createElement('select');
        sel_edition.multiple = false;
        sel_edition.size = 1;
        sel_edition.id = "sel_edition";
        var resetFilter = false;
        var edition_options_str = "<option value='' unselected>Select a Geog Ride Edition</option>";
        sel_edition.onchange = function(){
        	resetFilter = false;
        	filterFunc()};
        edition_options_str  += '<option value="Geog Ride Manila 2019">Geog Ride Manila 2019</option>';
        edition_options_str  += '<option value="Geog Ride La Union 2019">Geog Ride La Union 2019</option>';
        edition_options_str  += '<option value="Geog Ride Nueva Ecija 2018">Geog Ride Nueva Ecija 2018</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2017">Geog Ride Batangas 2017</option>';
        edition_options_str  += '<option value="Geog Ride Bataan 2017">Geog Ride Bataan 2017</option>';
        edition_options_str  += '<option value="Geog Ride Quezon 2016">Geog Ride Quezon 2016</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2016">Geog Ride Batangas 2016</option>';
        edition_options_str  += '<option value="Geog Ride Zambales 2015">Geog Ride Zambales 2015</option>';
        edition_options_str  += '<option value="Geog Ride Bataan 2015">Geog Ride Bataan 2015</option>';
        edition_options_str  += '<option class="hide" value="Geog Ride Pangasinan 2014">Geog Ride Pangasinan 2014</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2014">Geog Ride Batangas 2014</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2013">Geog Ride Batangas 2013</option>';
        edition_options_str  += '<option value="Geog Ride Zambales 2013">Geog Ride Zambales 2013</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2012">Geog Ride Pangasinan 2012</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2011 1st Sem">Geog Ride Pangasinan 2011 1st Sem</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2011 2nd Sem">Geog Ride Pangasinan 2011 2nd Sem</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2010">Geog Ride Batangas 2010</option>';
        sel_edition.innerHTML = edition_options_str;
        var reset_edition = document.createElement('button');
        var grideEditionContent = document.createElement('div');
        reset_edition.innerHTML = 'RESET';
        reset_edition.className = 'filterlabel btn-secondary btn';
        reset_edition.id = 'resetEdition';
        reset_edition.onclick = function() {
        	resetFilter = true;
            var options = document.getElementById("sel_edition").options;
            for (var i=0; i < options.length; i++) {
                options[i].selected = false;
            }
            for (var i=0; i < document.getElementsByClassName("gride-description-container").length; i++){
        		document.getElementsByClassName("gride-description-container")[i].classList.remove("hide");
        	}
            filterFunc();
            grideEditionContent.innerHTML = '';
            map.setView([15.276, 123.508], 8);
        };
        
        var lab_edition = document.createElement('div');
        lab_edition.innerHTML = 'edition';
        lab_edition.id = 'finalFooter';
        lab_edition.className = 'filterlabel';
        var body_content = document.createElement('div');
        body_content.className = 'row';
        div_edition.appendChild(body_content);
        div_edition.appendChild(sel_edition);
        document.getElementById("sel_edition").classList.add("btn-primary");
        div_edition.appendChild(reset_edition);
        div_edition.appendChild(grideEditionContent);
        div_edition.appendChild(lab_edition);
        map.setView([15.276, 123.508], 8);
        
        