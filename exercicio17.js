let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];
let notas = [8.5, 9.2, 7.0, 9.8, 6.5, 8.0, 7.5, 9.0, 6.8, 8.7];


for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas.length - 1; j++) {
        
        if (notas[j] < notas[j + 1]) {
            
            
            let tempNota = notas[j];
            notas[j] = notas[j + 1];
            notas[j + 1] = tempNota;

            
            let tempNome = nomes[j];
            nomes[j] = nomes[j + 1];
            nomes[j + 1] = tempNome;
        }
    }
}


console.log("--- RANKING DOS ALUNOS ---");
for (let i = 0; i < nomes.length; i++) {
    console.log((i + 1) + "º Lugar: " + nomes[i] + " - Nota: " + notas[i]);
}