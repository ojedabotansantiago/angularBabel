<!DOCTYPE HTML>
<html>
<head>
<title></title>
</head>
<body>
<script language="javascript">
function obtener_localizacion() {
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(coordenadas,gestiona_errores);
  }else{
    alert('Tu navegador no soporta la API de geolocalizacion'); 
  }
}
function coordenadas(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  alert('Tus coordenadas son: ('+latitud+','+longitud+')');
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
<a href="javascript:obtener_localizacion();">Mostrar Posición</a>
</body>
</html> 