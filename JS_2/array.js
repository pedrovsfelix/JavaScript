const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionando Elementos
// push()
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// Remover Elementos
// pop() -> Remove o último elemento

const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

const primeiroElemento = arr.shift();
console.log(primeiroElemento);

// Pesquisando Elementos
// true
const include = arr.includes("Gandalf");
console.log(include);

// posição
const indice = arr.indexOf("Galdalf");
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4);
console.log(hobbits);
const outros = arr.slice(-4);
console.log(outros);

const socidade = hobbits.concat(outros, "Boromir");
console.log(socidade);

// Substituindo Elemento
// splice
const elementosRemovidos = socidade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);
console.log(socidade);

// Iterando sobre os elementos
// Usando o 'for' para percorrer cada elemento do array
for (let indice = 0; indice < socidade.length; indice++) {
  const elemento = socidade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}

// Arrays bidimensionais
const arrb = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  [],
];

// Arrays podem ter várias “dimensões”
// Cada par de colchetes referencia um nível mais interno do array
console.log(arrb[0]); // Saída: '1º Nível'
console.log(arrb[1]); // Saída: [ '2º nível', 42, true ]
console.log(arrb[1][0]); // Saída: '2º nível'
console.log(arrb[1][1]); // Saída: 42
console.log(arrb[2]); // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arrb[2][0]); // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arrb[2][1][1]); // Saída: 'Oi, mundo!

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

// Iterando sobre arrays bidimensionais (ou de qualquer dimensão)
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}
