// Fila de Espera
// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
// O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
// esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
// O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo 
// paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro 
// paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser 
// encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let pacientes = ["Matheus", "Marcos"];

do {
    opcao = prompt(`A lista de pacientes em espera:\n${pacientes}.\n\nEscolha as opções:\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Sair`);
    switch(opcao){
        case "1":
            const novo = prompt("Digite o nome do novo paciente:");
            const cadastro = pacientes.push(novo);
            alert(`O paciente ${novo} foi colocado a fila.`)
            break
        case "2":
            const removerPaciente = pacientes.shift();
            alert(`O paciente ${removerPaciente} foi consultado.`);
            break
        case "3":
            alert("Saindo do programa..");
            break
        default:
            alert("Opção inválida.");
            break

            
    }
} while(opcao != "3")


// Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar 
// mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no 
// baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 
// Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la 
// o topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do 
// baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher 
// a opção de “Sair”, caso contrário deve voltar ao menu.
let baralho = []

do {
    const cartas = baralho.length;
    menu = prompt(`Atualmente temos ${cartas} no baralho.\nEscolha uma opção:\n1 - Adicionar uma carta.\n2 - Puxar uma carta.\n3 - Sair.`);
    switch(menu){
        case '1':
            const carta = baralho.unshift(prompt("Digite o nome da carta que deseja colocar no batalho."));
            alert(`A carta ${carta} foi colocada no baralho.`);
            break
        case '2':
            const removerCarta = baralho.pop();
            alert(`A carta ${removerCarta} foi retirada do topo do baralho.`);
            break
        case '3':
            alert("Saindo do programa.");
            break
        default:
            alert("Opção inválida.");
            break

    }
} while(menu != "3");