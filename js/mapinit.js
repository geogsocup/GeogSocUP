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
    map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
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
        			<td colspan="2"><strong>' + (feature.properties['edition'] !== null ? autolinker.link(feature.properties['edition'].toLocaleString()) : '') + '</strong></td>\
                <tr>\
                    <td colspan="2"><strong>Site</strong><br />' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>Year</strong><br />' + (feature.properties['year_visit'] !== null ? autolinker.link(feature.properties['year_visit'].toLocaleString()) : '') + '</td>\
                <tr>\
                    <td colspan="2"><strong>Semester</strong><br />' + (feature.properties['semester'] !== null ? autolinker.link(feature.properties['semester'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>Academic Year</strong><br />' + (feature.properties['AY'] !== null ? autolinker.link(feature.properties['AY'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>Start Date</strong><br />' + (feature.properties['start_date'] !== null ? autolinker.link(feature.properties['start_date'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>End Date</strong><br />' + (feature.properties['end_date'] !== null ? autolinker.link(feature.properties['end_date'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
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
            opacity: 1,
            color: 'rgba(50,87,128,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(121,218,196,1.0)',
            interactive: true,
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
    row.style.height = "100%";
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
                  if (key in features[0].properties){
                    for (i = features.length - 1;
                      i >= 0; --i){
                      if (selection.indexOf(
                      features[i].properties[key])<0
                      && selection.length>0) {
                      features.splice(i,1);
                      }
                    }
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
        document.getElementById("menu").appendChild(
            document.createElement("div"));
        var div_edition = document.createElement('div');
        div_edition.id = "div_edition";
        div_edition.className= "filterselect";
        document.getElementById("menu").appendChild(div_edition);
        sel_edition = document.createElement('select');
        sel_edition.multiple = true;
        sel_edition.size = 10;
        sel_edition.id = "sel_edition";
        var edition_options_str = "<option value='' unselected></option>";
        sel_edition.onchange = function(){filterFunc()};
        edition_options_str  += '<option value="Geog Ride Bataan 2015">Geog Ride Bataan 2015</option>';
        edition_options_str  += '<option value="Geog Ride Bataan 2017">Geog Ride Bataan 2017</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2010">Geog Ride Batangas 2010</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2013">Geog Ride Batangas 2013</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2014">Geog Ride Batangas 2014</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2016">Geog Ride Batangas 2016</option>';
        edition_options_str  += '<option value="Geog Ride Batangas 2017">Geog Ride Batangas 2017</option>';
        edition_options_str  += '<option value="Geog Ride La Union 2019">Geog Ride La Union 2019</option>';
        edition_options_str  += '<option value="Geog Ride Manila 2019">Geog Ride Manila 2019</option>';
        edition_options_str  += '<option value="Geog Ride Nueva Ecija 2018">Geog Ride Nueva Ecija 2018</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2011 1st Sem">Geog Ride Pangasinan 2011 1st Sem</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2011 2nd Sem">Geog Ride Pangasinan 2011 2nd Sem</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2012">Geog Ride Pangasinan 2012</option>';
        edition_options_str  += '<option value="Geog Ride Pangasinan 2014">Geog Ride Pangasinan 2014</option>';
        edition_options_str  += '<option value="Geog Ride Quezon 2016">Geog Ride Quezon 2016</option>';
        edition_options_str  += '<option value="Geog Ride Zambales 2013">Geog Ride Zambales 2013</option>';
        edition_options_str  += '<option value="Geog Ride Zambales 2015">Geog Ride Zambales 2015</option>';
        sel_edition.innerHTML = edition_options_str;
        div_edition.appendChild(sel_edition);
        var lab_edition = document.createElement('div');
        lab_edition.innerHTML = 'edition';
        lab_edition.className = 'filterlabel';
        div_edition.appendChild(lab_edition);
        var reset_edition = document.createElement('div');
        reset_edition.innerHTML = 'clear filter';
        reset_edition.className = 'filterlabel';
        reset_edition.onclick = function() {
            var options = document.getElementById("sel_edition").options;
            for (var i=0; i < options.length; i++) {
                options[i].selected = false;
            }
            filterFunc();
        };
        div_edition.appendChild(reset_edition);