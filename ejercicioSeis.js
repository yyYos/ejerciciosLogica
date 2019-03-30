var object = { 
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};

function convert(obj){
    let result = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});

    //la sig linea muestra el valor de las clavess
    //let result = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]}).map(key => obj[key]);
    console.log(result);
}

convert(object);