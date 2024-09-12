// TIPOS DE DADOS

// Number: 1, 2, 3, 4 ...
console.log(4);

// BigInt: 99999999n ('n' sempre no final)
console.log(999999999999n);

// String: 'Pedro', "Pedro" ou `Pedro` (As strings podem ser interpretadas como listas "[]")
console.log("Pedro"[0]); // Irá imprimir o 'P', caso utilize .lenght ele irá imprimir o seu tamanho.

// Bolean: true ou false, verificação se o valor é verdadeiro ou falso
console.log(true);

// null: Se caracteriza como um valor vazio, porém existente.
// undefined: Se caracteriza como um valor inexistente.
// typeof: Expressão utilizada para retornar objetos.

// Variáveis -> Utilizadas para armazenar dados/valores.
var a = 5 + 6;
console.log(a); // retorna o valor da soma na variável 'a'

let b = 7 + 2; // Utilizada como boa prática.
console.log(b); // retorna o valor da soma na variável 'b'

const c = 10 + 2; // Utilizada para armazenar valores que não mudam/alteram.
console.log(c); //retorna o valor da soma na variável 'c'


// Operadores e Expressões
// operadores aritméticos: +| - | * | / | %
// operador de agrupamento: ()
// operador de atribuição: = | += incrementar | -= decrementar | *= | /= | %=
let d = 4 % 2;
console.log(d);

// Estruturas condicionais
// if e else: se ou senão

if(a === 1) {
    console.log("Resultado: 11, no laço if.")
} else {
    console.log("Resultado é diferente.")
}

// switch: caso seja algo
const resultado = 11;
switch(resultado) {
    case 11:
        console.log("Resultado: 11.");
        break;
    case 22:
        console.log("Resultado: 22.");
        break;
    default:
        console.log("Resultado não é válido.");
}

// Estrutura de repetição
// While
let velocidade = 60;
while(velocidade > 0) {
    console.log("O carro está a" + velocidade + " km/h");
    velocidade -= 10;
    console.log("Diminuindo " + velocidade + " km/h");
    if(velocidade === 10) {
        console.log("O carro está a " + velocidade + "km/h");
        break
    } else {
        console.log("O carro parou!")
    }
}

// Do While
let distancia = 0;
do {
    console.log("A distância é: " + distancia + " m");
    distancia -= 20;
} while(distancia > 0) {
    console.log("A distância final: " + distancia + "m");
}