function esPalindromo(cadena) {
 
  cadena = cadena.replace(/\s/g, "").toLowerCase();

  
  var longitud = cadena.length;


  for (var i = 0; i < longitud / 2; i++) {
    if (cadena[i] !== cadena[longitud - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(esPalindromo("oso")); 
console.log(esPalindromo("reconocer")); 
console.log(esPalindromo("avion")); 