let numeros = [5, 5, 7, 7, 14, 14, 8, 8, 6, 6, 2, 2, 15, 15, 13, 13, 17, 17, 19, 19];


let valoresUnicos = [];


for (let i = 0; i < numeros.length; i++) {
    let jaExiste = false;

    
    for (let j = 0; j < valoresUnicos.length; j++) {
        if (numeros[i] === valoresUnicos[j]) {
            jaExiste = true;
            break; 
        }
    }

    
    if (jaExiste === false) {
        valoresUnicos.push(numeros[i]);
    }
}


console.log("Original: [" + numeros + "]");
console.log("Únicos:   [" + valoresUnicos + "]");