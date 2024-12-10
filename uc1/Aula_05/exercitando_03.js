let nota = 9
let recuperação = 
if(nota >= 0 && nota < 4){
    document.write("Aluno reprovado");
} else if (nota >= 4 && nota < 7){
    document.write("Aluno em recuperação");
} else if (nota >= 7 && nota <= 10){
    document.write("Aluno aprovado");
} else{
    document.write("Nota Inválida");
}
if(recuperação < 5){
    document.write("Reprovado na Recuperação");
} else if (recuperação > 5){
    document.write("Aprovado na Recuperação");
}
    
       
    
  
