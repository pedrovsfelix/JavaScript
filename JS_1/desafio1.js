// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
// 1. O primeiro nome
// 2. O sobrenome
// 3. O campo de estudo
// 4. O ano de nascimento
// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
const nome = prompt("Informe o seu nome:");
const sobrenome = prompt("Informe o seu sobrenome");
const estudo = prompt("Informe o seu campo de estudo");
const nascimento = parseInt(prompt("Informe o seu ano de nascimento"));
const ano = new Date().getFullYear();
const idade = ano - nascimento;
alert(`Nome completo: ${nome} ${sobrenome}\nCampus de estudo: ${estudo}\nIdade: ${idade} anos.`)

// Calculadora de 4 Operações
// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
// Após calcular os resultados o programa deve exibi-los na tela.

const a = parseFloat(prompt("Insira o primeiro valor:"));
const b = parseFloat(prompt("Insira o segundo valor:"));

const soma = a + b;
const sub = a - b;
const div = a / b;
const mult = a * b;

alert(`Os resultados das operações são:\nSoma: ${soma}\nSubtração: ${sub}\nDivisão: ${div}\nMultiplicação: ${mult}`)