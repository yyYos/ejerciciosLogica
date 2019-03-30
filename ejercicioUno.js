let clientes = ["yoselin",26,"ids"];
let empleados = [ "Santiago", 28, "telcel"];

//concat : se utiliza para unidos dos o mas cadenas de texto, devuelve una cadena de texto que contiene el de las cadenas unidas
function concatenar(){
    let cadenaUno = clientes;
    let cadenaDos = empleados;

    let union = cadenaUno.concat(cadenaDos);
    console.log(union);
}

//push: la forma mas facil de agregar un nuevo elementos a un array 

function pushed(){
    let contactos = [];

    contactos.push(clientes);
    contactos.push(empleados);
    console.log(contactos);
}

//splice: agrega o elimina elementos a un array y devuelve el array resultado

function splised(){
    let contactos = [];

    contactos.splice(0,0,clientes,empleados);
    console.log(contactos);
}

//join: une los elementos de una matriz en una cadena y devuelve una cadena

function joined(){
    let contactos = [];

    contactos = clientes.join();
    contactos = empleados.join();
    console.log(contactos);
}