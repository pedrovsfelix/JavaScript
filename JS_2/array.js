const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
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
console.log(primeiroElemento)

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
for(let indice = 0; indice < socidade.length; indice++){
    const elemento = socidade[indice];
    console.log(elemento + " se encontra na posição " + indice);
}