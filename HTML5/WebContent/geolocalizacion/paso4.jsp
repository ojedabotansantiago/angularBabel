<!DOCTYPE HTML>
<html>
<head>
<title></title>
</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script language="javascript">
function obtener_localizacion() {
  if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(mostrar_mapa,gestiona_errores);
  }else{
	alert('Tu navegador no soporta la API de geolocalizacion');  
  }
}
function mostrar_mapa(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  var image_url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + latitud + "," +
                    longitud + "&zoom=14&size=300x400&markers=color:red|label:P|" +
                    latitud + ',' + longitud;
    $(document.body).append(
        $(document.createElement("img")).attr("src", image_url).attr('id','map')
    );

}
function gestiona_errores(err) {
  if (err.code == 0) {
    alert("error desconocido");
  }
  if (err.code == 1) {
    alert("El usuario no ha compartido su posicion");
  }
  if (err.code == 2) {
    alert("no se puede obtener la posicion actual");
  }
  if (err.code == 3) {
    alert("timeout recibiendo la posicion");
  }
}

</script>
<p><a href="javascript:obtener_localizacion();">Mostrar Posici&oacute;n</a></p>
</body>
</html> 