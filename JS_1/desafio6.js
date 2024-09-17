// Robô da Tabuada
// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20).
// O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de
// multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa
// deve exibir esses resultados e finalizar.
const numero = parseFloat(
  prompt("Informe um número para cálcular sua tabuada até 20.")
);

for (i = 0; i <= 20; i++) {
  alert(`${i} x ${numero} = ${i * numero}`);
}

// Procurando Palíndromos
// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo.
// Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem.
// O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem
// dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve
// mostrar a palavra lida da esquerda para direita e da direita para esquerda.
const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo!`);
} else {
  alert(`${palavra} + " não é um palíndromo!\n\n" + ${palavra} " !== " ${palavraInvertida}`);
}
