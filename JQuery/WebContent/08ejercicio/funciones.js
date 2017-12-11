$(document).ready(function() {
	var indice=1;

	$("#boton").click(function() {
		//CREAR TABLA
		if($("tr").length==0){
			$("section")
			.html("<table id='mitabla'><tr><th>ID</th><th>NOMBRE</th><th>PRECIO</th><th>CANTIDAD</th><th>DISPONIBLE</th><th>ACCION</th></tr></table>");
		}
		
		//COGER OBJETO
		var prodAux = {
				'id' : $("#idProdu").val(),
				'nombre' : $("#nombre").val(),
				'precio' : $("#precio").val(),
				'cantidad' : $("#cantidad").val(),
				'disponible' : ($("#disponible").attr('checked'))?true:false
			};
		console.log(prodAux);
		
		//METER OBJETO EN TABLA
		if(prodAux.id==0){
			var $tr = document.createElement("tr"), $td, key;
			prodAux.id=indice++;
		}
		else{
			var $tr = document.getElementById("entry-"+ prodAux.id), $td, key;
			$tr.innerHTML="";
		}
		for (key in prodAux) {
			if (prodAux.hasOwnProperty(key)) {
				$td = document.createElement("td");
				$td.appendChild(document
						.createTextNode(prodAux[key]));
				$tr.appendChild($td);
			}
		}
		
		$td = document.createElement("td");
		$td.innerHTML = '<input type="button" data-op="remove" data-id="'+ prodAux.id +'" value="Borrar">';
		$tr.appendChild($td);
		$tr.setAttribute("id", "entry-"+ prodAux.id);
		
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
		
		//METER ACCION DE BORRAR
		$("td input").click(function(){
			$(this).parent().parent().remove();
		});
		
		//METER ACCION DE MODIFICAR
		$("tr").dblclick(function(){
			$(this).children().each(function(index){
				console.log($(this).html());
				if(index==0){
					$("#idProdu").val($(this).html());
				}else if(index==1){
					$("#nombre").val($(this).html());
				}else if(index==2){
					$("#precio").val($(this).html());
				}else if(index==3){
					$("#cantidad").val($(this).html());
				}else if(index==4){
					var val = ( $(this).html() === "true");
					if(val){
						$("#disponible").attr('checked', true);
					}else{
						$("#disponible").attr('checked', false);
					}
				}
			});
			
		});
		
		$("#idProdu").val("0");
		$("tr:odd").css("background-color", "white"); // filas impares
	    $("tr:even").css("background-color", "#ccc"); // filas pares
		
	});
});