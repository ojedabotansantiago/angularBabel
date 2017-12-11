/* Generadores */
function *Contador(){
  var i = 0;
  while(i<2) {
  	  yield i;
  	  yield "hola"+i;
  	  yield "de nuevo"+i;
  	  yield "bye"+i;
      i++;
  }
}

var contador = Contador();

console.log(contador.next()); // {value: 0, done:false}
console.log(contador.next()); // {value: 1, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}