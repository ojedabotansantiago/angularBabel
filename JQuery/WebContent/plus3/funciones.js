var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(ocultarRecuadro);
  x=$("#boton2");
  x.click(mostrarRecuadro);
}

function ocultarRecuadro()
{
  var x=$("#descripcion");
  x.fadeOut("slow");
}

function mostrarRecuadro()
{
  var x=$("#descripcion");
  x.fadeIn("slow");
}