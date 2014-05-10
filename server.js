/*1.- obtenemos un objeto que no permita usar la libreria express*/
var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");

var app = express();
app.listen(8010);

console.log("servidor levantado...");

/*configurar el sistema de templates*/
nunjucks.configure(__dirname + "/vistas",{
	express:app
});
console.log("sistema de templates configurado..");

/* usar body parser para recibir parametros del cliente*/
app.use(bodyParser());

/*configurar rutas estaicas*/
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/javascript", express.static(__dirname + "/javascript"));
app.use("/videos", express.static(__dirname + "/videos"));

console.log("rutas estaicas configuradas ..");

/*responder a peticiones get*/
/* http://127.0.0.1:8010/ */
app.get("/", function(request, response){
      response.render("index.html");
});
/* http://127.0.0.1:8010/ */
app.get("/home", function(request, response){
      response.render("index.html");
});
/* http://127.0.0.1:8010/ */
app.get("/galeria", function(request, response){
      response.render("galeria.html");
});

/*Responder a una peticion post*/
app.post("/suscribir",function(request, response){
	/*var correo = request.body.email;
	console.log("Email " + correo);*/
	response.render("suscribir.html");
});









