$(function() {
	
	/*se ejecuta cuando el DOM esta listo*/
	navigator.geolocation.getCurrentPosition(function(posicion) {
		var latitud = posicion.coords.latitude;
		var longitud = posicion.coords.longitude;
		//alert("Long: " + longitud + " Lat " + latitud);
		var mapa = $("#mapa");
		//pintar mapa con GoMaps
		mapa.goMap({
			markers: [{
				latitude: latitud,
				longitude: longitud,
				icon: "../imagenes/marcadores/arrastrar.png",
				title: "UPIITA",
				html: "Aqui se imparte el curso de HTML5"
			}, {
				address: "Avenida Montevideo 363, Gustavo A. Madero, Lindavista, 07300 Cuidad de Mexico, D.F., México",
				icon: "../imagenes/marcadores/apartamento.png",
				title: "UPIITA",
				html: "Aqui se imparte el curso de HTML5"
			}],
			maptype: "roadmap",
			zoom: 15
		});
	});
	
});
