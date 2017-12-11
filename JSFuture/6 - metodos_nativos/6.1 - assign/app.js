/* Object.assign() */

var cuenta = {cliente: "Sergio Brito"};
var alimentos = {nombre: "hamburguesa", cantidad: 2};
var bebidas = {tipo: "soda", nombre: "naranja"};

console.log(cuenta);

Object.assign(cuenta, alimentos, bebidas);

console.log(cuenta.tipo);

console.log(cuenta);
