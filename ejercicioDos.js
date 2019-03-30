//filter: crea un array con todos los elementos que pasen la prueba, dada con una funcion
//itera un array

var numbers = [5, 32, 43, 4];

let variable = numbers.filter(function(n) { 
    return  n % 2 !== 0;
});

console.log(variable);


