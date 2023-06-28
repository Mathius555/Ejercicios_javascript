let entrada1 = prompt("Ingresar nombre del alumno");
let entrada2 = prompt("Ingresar apellido del alumno");

function ingresarAlumno(){
alert("Hola"+ " "+entrada1+" "+entrada2);
}





function notas(){

let entrada4 = prompt("Ingresar la nota del alumno");
if(entrada4>5){
    alert("el alumno"+" "+entrada1+" "+entrada2+ " "+"aprobo")
}else{
    alert("el alumno"+" "+entrada1+" "+entrada2+ " "+"NO aprobo")
}

}


function cursos(){

    let entrada3 = prompt("Ingresar el curso del alumno");
    while(entrada3 != "0" ){
   switch (entrada3) {
       case "1":
  alert(entrada1+""+entrada2+""+"esta en primer año");
        break; 
        case "2":
       
        alert(entrada1+""+entrada2+""+"esta en segundo año");
        break;

        case "3":
        
        alert(entrada1+""+entrada2+""+"esta en tercer año");
        break;


        case "4":
        alert(entrada1+""+entrada2+""+"esta en cuarto año");
        break;


        case "5":
        alert(entrada1+""+entrada2+""+"esta en quinto año");
        break;

        case "6":
        alert(entrada1+" "+entrada2+" "+"esta en sexto año");
        break;

       default:
           alert("Error")
           break;
   }
   entrada3 = prompt("Ingresar el curso del alumno");
   
  }
  
}



ingresarAlumno();
notas();
cursos();




