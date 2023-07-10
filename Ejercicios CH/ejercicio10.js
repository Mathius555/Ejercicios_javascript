
function guardarInformacion() {
    var texto = prompt("Ingrese un texto:");
    var numero = parseInt(prompt("Ingrese un número:"));
  
    var informacion = {
      texto: texto,
      numero: numero
    };
  
    
    localStorage.setItem("informacion", JSON.stringify(informacion));
  
   
    alert("Información guardada:\n\nTexto: " + informacion.texto + "\nNúmero: " + informacion.numero);
  }
  
  
  function guardarArray() {
    var objetos = [
      { nombre: "Objeto 1", valor: 10 },
      { nombre: "Objeto 2", valor: 20 },
      { nombre: "Objeto 3", valor: 30 }
    ];
  
   
    var objetosJSON = JSON.stringify(objetos);
  
    localStorage.setItem("objetos", objetosJSON);
  
   
    console.log("Array guardado en Storage:", objetosJSON);
  }
  

  guardarInformacion();
  guardarArray();
  