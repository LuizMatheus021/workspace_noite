// Construir uma página para uma empresa de serviços. O operador irá digitar o salário de um cliente. Se o salário for maior ou igual que R$ 3.000,00, o programa irá escrever na tela “Oferecer Plano Alfa” e, caso seja menor, o programa escreverá “Oferecer Plano Beta”.
let salario = prompt("Digite o seu salario");
if (salario >= 3.000){
    document.write("Oferecer Plano Alfa");
} else if(salario < 3.000){
    document.write("Oferecer Plano Beta");
}
