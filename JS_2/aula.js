// ESTRUTURAS DE DADOS E FUNÇÕES
// ESTRUTURAS DE DADOS
// Modos particular de armazenar e organizar dados de modo que possam ser utilizados eficientemente, facilitando
// sua busca e modificação.

// ESTRUTURA DE DADOS CLÁSSICA
// LISTA LIGADA ->
// ARRAY -> Coleção de ordenada de elementos

// FILA (Queue) -> Primeiro a entrar, primeiro a sair.
// push() e shift()

// PILHA (Stack) -> Último a entrar, primeiro a sair
// ÁRVORE (Tree) -> Conjunto de elementos chamados de "nós" (ou nodes), organizados em estrutura hierárquica (não sequencial).

// OBJETOS
// Estrutura para trabalhar com dicionários de chave-valor
// O par chave-valor em um objeto é chamado de propriedade
// Diferente dos arrays, seus elementos não possuem nenhuma sequência.
// As propriedades também podem ter strings, números e booleanos como chave.
// Uma propriedade pode armazenar qualquer tipo de dado como valor.

// let objeto = {}

// As propriedades e funções podem ser referenciadas por encadeamento com ponto '.' ou colchetes '[]'

// FUNCOES

// Estrutura que permite declarar um procedimento e executalo programaticamente

// As funções podem ser vista como -> ENTRADA - PROCEDIMENTO - SAÍDA

// Tanto a entrada quanto a saída de uma função são opcionais, ou seja, uma função pode existir sem um deles ou sem ambos

// As entradas da função são chamadas de parâmetros ou argumentos.
// As saídas da função são chamadas de retorno.

// Exemplo:
function nomeDaFuncao(entrada) {
  //procedimento
  return saida;
}

// Parâmetros da função

// Os parâmetros são a entrada da função ou argumentos.
function dobro(x) {
  console.log(`O dobro de x é: ${x * 2}.`);
}

// dobro(5)

function soma(a, b) {
  console.log(`O resultado da soma é: ${a + b}`);
}

// soma(1, 2)

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

// RETORNO DA FUNÇÃO
// Uma função só pode retornar uma única vez, pode ser qualquer expressão ou retorno de outra função.

function areaRetangular(base, altura) {
  return base * altura;
}
console.log(areaRetangular(3, 5));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(8));

function olaMundo() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}
console.log(olaMundo());

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));

// ESCOPO

// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro

// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao) // Gera erro
}
avaliarNota(83)
avaliarNota(49)

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!"
}
console.log(texto) // Gera erro

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)