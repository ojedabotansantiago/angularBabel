/* Clases */
class Operaciones{
	static suma(a, b){
		return a+b;
	}

	resta(a,b){
		return a-b;
	}
}

console.log(Operaciones.suma(2,6));
//console.log(Operaciones.resta(22,6));

var op = new Operaciones();
console.log(op.resta(2,3));