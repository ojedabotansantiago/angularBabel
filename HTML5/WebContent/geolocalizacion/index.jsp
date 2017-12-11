<!DOCTYPE HTML>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>Gelocalización</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script type="text/javascript">

		/*Funcion para geolocalizar*/
		function geolocalizar()
		{
			/*A la etitqueta P le escribimos un mensaje de espera*/
			$("#estado").text("Buscandote...");
			/*Funcion para obtener la geolocalizacion, Parametro de geolocalzacion: mostrar, Parametro de error: error*/
			navigator.geolocation.getCurrentPosition(mostrar,error);
			
		}
		
		/*Funcion para obtener la geolocalizacion*/
		function mostrar(posicion)
		{
			/* posicion es el parametro que tiene los valores, las variables para latitud y longitud las obtenemos del parametro posicion.coords*/
			var lat = posicion.coords.latitude; //obtengo la latitud
			var lon = posicion.coords.longitude; //obtengo la longitud
			
			/*Escribir en la etiqueta las coordenandas*/
			$("#estado").text("Te he encontrado, estas en: " + lat + " , " + lon);
		}
		
		
		/*Funcion para el error cuando no hay geolocalizacion*/
		function error(error)
		{
			//El parametro error tambien tiene valores de los errores exactos, pero aqui no lo usaremos.
			$("#estado").text("No te encontre, pero lo voy a seguir intentando.");
		}
</script>
</head>

<body>
<p id="estado"></p>
<a href="javascript: geolocalizar();" title="Geolozalizar">Geolozalizar</a>
</body>

</html>
