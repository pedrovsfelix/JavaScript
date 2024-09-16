// Menu Interativo
// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
// O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma
// funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras
// opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve
// exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção
// “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e
// então o programa é finalizado.
let opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo!\n" +
      "\nEscolha uma das opções:" +
      "\n1. Opção Um." +
      "\n2. Opção Dois." +
      "\n3. Opção Três." +
      "\n4. Opção Quatro." +
      "\n5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.");
      break;
    case "2":
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      alert("Você escolheu encerrar...");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao != "5");
// Controle Financeiro
// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então
// mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair.
// Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse
// valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções.
// A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
let valor = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"));

do {
  opcao = prompt("O valor em caixa é: " + valor +
    "\n1. Adicionar valor." +
    "\n2. Remover valor" +
    "\n3. Sair"
  )

  switch(opcao){
    case "1":
      valor += parseFloat(prompt("Quanto você deseja adicionar?"));
      break
    case "2":
      valor -= parseFloat(prompt("Quanto você deseja remover?"));
      break
    case "3":
      alert("Você escolheu sair...");
      alert("Saindo...");
      break
    default:
      alert("Opção inválida!");
      break
    
  }
} while(opcao != "3")
