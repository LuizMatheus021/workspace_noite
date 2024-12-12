let desempenhoDoEmpregado = prompt(parseInt = "Digite o numero de vendas:");
if(desempenhoDoEmpregado >= 0 && desempenhoDoEmpregado < 4){
    document.write("Desempenho Insuficiente ");
}else if(desempenhoDoEmpregado >= 5 && desempenhoDoEmpregado <= 9){
    document.write("Desempenho Satisfatório");
}else if (desempenhoDoEmpregado >= 10 ){
    document.write("Desempenho Excelente");
}else{
    document.write("Numero de vendas Inválida");
}

