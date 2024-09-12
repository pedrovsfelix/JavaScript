// Visitando Novas Cidades
// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou 
// alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então 
// continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o 
// programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const nome = prompt("Digite o nome do turísta");
const visita = prompt("Você visitou alguma cidade? (Sim / Não)");
let cidades = []

while(visita === "sim" || "s") {
    let cidade = prompt("Informe a cidade visitada");
    cidades.push(cidade);
    const visita = prompt("Você visitou alguma cidade? (Sim / Não)");
    if(visita === "não" || "n") {
        break
    }
}

alert(`O nome do turista é: ${nome}\nVisitou: ${parseInt(cidades.length)} cidades.\nCidades Visitadas:\n${cidades}`)