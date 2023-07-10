
var persona = {
    nombre: prompt("Ingrese el nombre:"),
    edad: parseInt(prompt("Ingrese la edad:")),
    profesion: prompt("Ingrese la profesión:")
  };
  
  
  alert("Nombre: " + persona.nombre);
  alert("Edad: " + persona.edad);
  alert("Profesión: " + persona.profesion);
  
  
  var numeros = [1, 2, 3, 4, 5];
  
  
  console.log("Números:");
  for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
  
 
  function sumar(a, b) {
    return a + b;
  }
  
 
  var resultado = sumar(parseInt(prompt("Ingrese el primer número:")), parseInt(prompt("Ingrese el segundo número:")));
  console.log("Resultado de la suma:", resultado);
  