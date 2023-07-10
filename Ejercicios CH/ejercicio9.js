
var persona = {
    nombre: prompt("Ingrese el nombre:"),
    edad: parseInt(prompt("Ingrese la edad:")),
    profesion: prompt("Ingrese la profesión:")
  };
  
  
  alert("Nombre: " + persona.nombre);
  alert("Edad: " + persona.edad);
  alert("Profesión: " + persona.profesion);
  
  var numeros = [1, 2, 3, 4, 5];
  
  
  var numerosTexto = "Números:\n";
  for (var i = 0; i < numeros.length; i++) {
    numerosTexto += numeros[i] + "\n";
  }
  alert(numerosTexto);
  
  
  function sumar(a, b) {
    return a + b;
  }
  
  var inputA = parseInt(prompt("Ingrese el primer número:"));
  var inputB = parseInt(prompt("Ingrese el segundo número:"));
  

  var resultado = sumar(inputA, inputB);
  

  alert("Resultado de la suma: " + resultado);
  