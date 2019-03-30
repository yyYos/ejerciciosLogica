let peoples = [
                { name: "bob", id : 1 }, 
                { name: "john", id: 2 }, 
                { name: "john", id: 3 }, 
                { name: "alex", id: 3 }
            ];

let nombresPeople = peoples.map((item) => item.name);

let cantidadNombre = nombresPeople.reduce((contadorNombre, nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
},{});

console.log(cantidadNombre);