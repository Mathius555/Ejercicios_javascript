function Alumno(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  
  Alumno.saludar = function() {
    alert("Hola " + this.nombre + " " + this.apellido);
  };
  
  Alumno.Nota = function() {
    let entrada4 = prompt("Ingresar la nota del alumno");
    if (entrada4 > 5) {
      alert("El alumno " + this.nombre + " " + this.apellido + " aprobó");
    } else {
      alert("El alumno " + this.nombre + " " + this.apellido + " NO aprobó");
    }
  };
  
  Alumno.Curso = function() {
    let entrada3 = prompt("Ingresar el curso del alumno");
    while (entrada3 !== "0") {
      switch (entrada3) {
        case "1":
          alert(this.nombre + " " + this.apellido + " está en primer año");
          break;
        case "2":
          alert(this.nombre + " " + this.apellido + " está en segundo año");
          break;
        case "3":
          alert(this.nombre + " " + this.apellido + " está en tercer año");
          break;
        case "4":
          alert(this.nombre + " " + this.apellido + " está en cuarto año");
          break;
        case "5":
          alert(this.nombre + " " + this.apellido + " está en quinto año");
          break;
        case "6":
          alert(this.nombre + " " + this.apellido + " está en sexto año");
          break;
        default:
          alert("Error");
          break;
      }
      entrada3 = prompt("Ingresar el curso del alumno");
    }
  };





  
  let alumnos = []; 
  
  let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos:");
  
  for (let i = 0; i < cantidadAlumnos; i++) {
    let nombre = prompt("Ingresar nombre del alumno " + (i + 1));
    let apellido = prompt("Ingresar apellido del alumno " + (i + 1));
    let alumno = new Alumno(nombre, apellido);
    alumnos.push(alumno);
  }
  
  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].saludar();
    alumnos[i].Nota();
    alumnos[i].Curso();
  }
  