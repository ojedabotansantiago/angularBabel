$(document).ready(function() {
	var indice=0;

	$("#boton").click(function() {
		if($("tr").length==0){
			$("section")
			.html("<table id='mitabla'><tr><th>ID</th><th>NOMBRE</th><th>DISPONIBLE</th></tr></table>");
		}
		var prodAux = {
				'id' : indice++,
				'nombre' : $("#nombre").val(),
				'disponible' : ($("#disponible").attr('checked'))?true:false
			};
		console.log(prodAux);
		var $tr = document.createElement("tr"), $td, key;
		for (key in prodAux) {
			if (prodAux.hasOwnProperty(key)) {
				$td = document.createElement("td");
				$td.appendChild(document
						.createTextNode(prodAux[key]));
				$tr.appendChild($td);
			}
		}
		var x = document.getElementsByTagName("tbody");		
		x[0].appendChild($tr);
		
		var celdas=$("td");
		for (var int = 0; int < celdas.length; int++) {
			if((celdas.eq(int)).text()=="true"){
				(celdas.eq(int)).addClass("verde");
			}
			else if((celdas.eq(int)).text()=="false"){
				(celdas.eq(int)).addClass("rojo");
			}
		}
	});
});