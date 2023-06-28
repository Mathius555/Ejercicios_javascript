
function ordenarNumeros(array) {

  var newArray = array.slice();

 
  newArray.sort(function(a, b) {
    return a - b;
  });

  return newArray;
}


var numeros = [5, 2, 8, 1, 17,26,42,69];
var numerosOrdenados = ordenarNumeros(numeros);
console.log(numerosOrdenados); 
