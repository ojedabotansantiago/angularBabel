<!DOCTYPE HTML>
<html>
<head>
<title></title>
</head>
<body>
<script language="javascript">
function obtener_localizacion() {
  navigator.geolocation.getCurrentPosition(coordenadas);
}
function coordenadas(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  alert('Tus coordenadas son: ('+latitud+','+longitud+')');
}
</script>
<a href="javascript:obtener_localizacion();">Mostrar Posici�n</a>
</body>
</html> 