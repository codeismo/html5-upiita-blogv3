$(function() {

	$(".ajax-link").click(function(evento) {

		var elLink = $(evento.target);
		var ruta = elLink.data("url");
		var rutaOriginal = elLink.attr("href");
		$("#contenido-principal").load(ruta);

		//history.pushState(null, null, rutaOriginal);

		//DETIENE EL EVENTO DEFAULT
		//QUE ES CAMBIAR DE PAGINA SEGUN EL HREF

		return false;
	});
	
	//DELEGACION EVENTOS
	$(document).on("submit", ".ajax-forma",function(evento) {

		var forma = $(evento.target);
		var parametros = forma.serialize();
		var urlPost = forma.attr("action");

		parametros = parametros + "&esAjax=true";

		$.ajax({
			type:"post",
			url : urlPost,
			data : parametros,
			//ESTA PROPIEDAD SE DISPARA CUANDO EL SERVIDOR RESPONDE
			//AJAX SIEMPRE ES ASINCRONO
			success : function(respuesta) {

				$("#contenido-principal").html(respuesta);
			},error:function(error, error2, error3){
				debugger;
				
			}
		});
		
		//DETIENE EL EVENTO DEFAULT
		//QUE ES CAMBIAR DE PAGINA SEGUN EL HREF		
		return false;
	});

});
