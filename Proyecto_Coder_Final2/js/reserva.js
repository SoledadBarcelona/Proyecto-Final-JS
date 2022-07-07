const usuario1 = new Usuario(1,  "2022-12-15", "15:30", "5" );
const usuario2 = new Usuario(2,  "2022-12-15", "15:30a", "4");
const usuario3 = new Usuario(3, "2022-12-15", "15:30", "2");
const usuario4 = new Usuario(4, "2022-12-15", "15:30", "4");


let usuarios = [];
 
 if(localStorage.getItem("usuarios"))
 {
     usuarios = JSON.parse(localStorage.getItem("usuarios"));
 }
 else
 {
    usuarios = [usuario1,usuario2,usuario3, usuario4];
 }

console.log("INICIAL:", usuarios);

inicializarAplicacion();


