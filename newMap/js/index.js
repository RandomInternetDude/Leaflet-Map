     
     
     
     
     // instantiate Leaflet Map
     var map = L.map('map').setView([51.505, -0.09], 13);
		

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

   	 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     detectRetina: true,
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  	L.tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
        //  L.marker([51.5, -0.09]).addTo(map)
        //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //     .openPopup();

        //  L.marker([51.2, -0.06]).addTo(map)
        //     .bindPopup('A query code location for a Equipment or Site Etc..')

        //  L.marker([51.8, -0.03]).addTo(map)
        //     .bindPopup('A query code location for a Equipment or Site Etc..')  
        



//			binding data into a popup
//         function strike (feature, layer) {
//            layer.bindPopup("<h1>Hello I'm a info window</h1><p>" + feature.properties.location +"</p>"+ 
//			"<p>"+ feature.properties.bureauid +"</p>");
//         };




//		Getting geoJson from a variable in another file
//        L.geoJson(dronestrikes, {
//            onEachFeature: strike,
//        }).addTo(map);


var items = [];


var geoJsonLayer = L.geoJson(dronestrikes,{
	onEachFeature: function (data, layer) {
		items.push(layer);
		layer.bindPopup('<h3>'+ data.properties.bureauid + '</h3>')
	}
});

geoJsonLayer.addTo(map);

L.control.search({
  data: items
}).addTo(map);


