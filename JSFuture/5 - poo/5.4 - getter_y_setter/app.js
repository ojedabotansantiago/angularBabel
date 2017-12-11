/* getter y setter*/
class Pelota{
	get nombre(){
		console.log("Accediendo al getter");
		return this._nombre;
	}

	set nombre(nombre){
		console.log("Accediendo al setter");
		this._nombre = nombre;
	}
}

var pelota = new Pelota();

console.log(pelota.nombre);

pelota.nombre = "golf";

console.log(pelota.nombre);

console.log(pelota);

