// Conversor de Medidas
// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)
// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

const valor = parseFloat(prompt("Digite o valor em metros que gostaria de converter!"));
const unidadeMedida = parseInt(prompt(
    "Selecione uma opção para conversão:\n1. Milímetros(mm)\n2. Centrímetros\n3. Decímetro\n4. Decâmetro\n5. Hectômetro\n6. Quilômetro\n0. Sair"
));

switch(unidadeMedida) {
    case 1:
        alert(valor * 1000);
        break
    case 2:
        alert(valor * 100);
        break
    case 3:
        alert(valor * 10);
        break
    case 4:
        alert(valor / 10);
        break
    case 5:
        alert(valor / 100);
        break
    case 6:
        alert(valor / 1000);
        break
    default:
        alert("Saindo do programa.")
}