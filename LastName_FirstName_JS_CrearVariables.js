var altura_minima = 100;
// Altura minima requerida en centimetros
var edad_minima = 10;
// Edad minima requerida 
var altura_persona = 155;
// Altura del usuario en centimetros
var edad_persona = 13;
// Edad del usuario 

if(altura_persona >= altura_minima){
    if(edad_persona >= edad_minima){
        console.log("La persona puede pasar");
    }
    else{
        console.log("La persona no puede pasar");
    }
}
else{
    console.log("La persona no puede pasar");
}