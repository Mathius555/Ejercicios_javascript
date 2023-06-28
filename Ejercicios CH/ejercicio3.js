
let entrada = prompt("Ingresar un nombre");
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
       for(i=1; i<=3; i++){
  alert(" TURNO  N° "+i+"ANA")
       }  break; 
        case "JUAN":
        for(i=1; i<=3; i++){
  alert(" TURNO  N° "+i+"JUAN")
     }break;

        case "MATIAS":
        for(i=1; i<=3; i++){
  alert(" TURNO  N° "+i+"MATIAS")
       } break;



        case "CARLA":
        for(i=1; i<=3; i++){
  alert(" TURNO  N° "+i+"CARLA")
       } break;


        case "PEDRO":
        for(i=1; i<=3; i++){
  alert(" TUNRO  N° "+i+"PEDRO")
       } break;

        case "GONZALO":
        for(i=1; i<=3; i++){
  alert(" TURNO N° "+i+"GONZALO")
       } break;



        case "NATALIA":
        for(i=1; i<=3; i++){
  alert(" TURNO  N° "+i+"NALATALIA")
       } break;




       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
   
}
