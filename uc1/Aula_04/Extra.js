let salarioBruto = prompt(parseInt = "digite o seu salario bruto ");
let nomeDoFuncionario = prompt("digite seu nome:");
document.write("funcionario : " + nomeDoFuncionario);
let Vt = (salarioBruto * 0.06);
document.write("/ Valor descontado pelo INSS: R$ " + Vt + "/");
let Inss = (salarioBruto * 0.08);
document.write("/ Valor descontado pelo INSS : R$ " + Inss + "/");
let salarioLiquido = (salarioBruto - Vt - Inss);
document.write("salario liquido: R$ " + salarioLiquido);