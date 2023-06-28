

function contarVocales(cadena) {

 cadena = cadena.toLowerCase();


var vocales = ['a', 'e', 'i', 'o', 'u'];


var contador = 0;


for (var i = 0; i < cadena.length; i++) {
  
  if (vocales.includes(cadena[i])) {
    contador++;
  }
}

return contador;
}
var cadena = "avion";
var numeroVocales = contarVocales(cadena);
console.log(numeroVocales);
