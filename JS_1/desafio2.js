// Teste de Velocidade
// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
const nameCar1 = prompt("Insira o nome do primeiro carro.");
const car1 = parseFloat(prompt("Insira a velocidade do carro 1."));
const nameCar2 = prompt("Insira o nome do segundo carro.");
const car2 = parseFloat(prompt("Insira a velocidade do carro 2."));

if(car1 > car2) {
    alert(`${nameCar1} é mais veloz que ${nameCar2}`);
} else if (car1 === car2) {
    alert(`${nameCar1} e ${nameCar2} possuem a mesma velocidade.`);
} else {
    alert(`${nameCar2} é mais veloz que o ${nameCar1}`);
}

// Cálculo de Dano
// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

const atacante = prompt("Qual o nome do personagem atacante?");
const poderAtacante = parseFloat(prompt("Qual é o seu poder de ataque?"));

const defensor = prompt("Qual o nome do personagem defensor?");
let pontosVida = parseFloat(prompt("Quantos pontos de vida ele possuí?"));
const poderDefesa = parseFloat(prompt("Qual o seu poder de defesa?"));
const escudo = prompt("Ele possuí um escudo? (sim/não)");

let danoCausado = 0;

if(poderAtacante > poderDefesa && escudo === "Não" || "n") {
    danoCausado = poderAtacante - poderDefesa;
} else if (poderAtacante > poderDefesa && escudo === "Sim" || "s") {
    danoCausado = (poderAtacante - poderDefesa) / 2;
} else {
    alert(`${defensor} defendeu completamente o ataque de ${atacante}`);
}
pontosVida -= danoCausado;
alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);
alert(`${atacante}\nPoder de ataque: ${poderAtacante}\n\n${defensor}\nPontos de Vida: ${pontosVida}\nPoder de Defesa: ${poderDefesa}\nPossuí Escudo: ${escudo}`);