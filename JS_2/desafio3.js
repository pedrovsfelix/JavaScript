// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
// O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
// O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function areaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(prompt("Informe a base do Retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do Retângulo:"));
  return base * altura;
}

function areaQuadrado() {
  const lado = parseFloat(prompt("Informe o lado do quadrado:"));
  return lado * lado;
}

function areaTrapezio() {
  const bMaior = parseFloat(prompt("Informe a base Maior do trapézio:"));
  const bMenor = parseFloat(prompt("Informe a base Menor do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((bMaior + bMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * (raio * raio);
}

function exibirMenu() {
  return prompt(
    `Calculadora Geométrica\n1. Cálcular a área do triângulo\n2. Cálcular a área do retângulo\n3. Cálcular a área do quadrado\n4. Cálcular a área do trapézio\n5. Cálcular a área do círculo\n6. Sair`
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert(`Saindo...`);
        break;
      default:
        alert(`Opção inválida`);
        break;
    }
    if (resultado) {
      alert(`Resultado: ${resultado}`);
    }
  } while (opcao !== "6");
}

executar();
