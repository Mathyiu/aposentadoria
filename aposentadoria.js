//Obs.: Esse cálculo é fictício, 
//dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa 
//ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma;


const nome = "Matheus"
const idade = 8;
const sexo  = "F"
const cont = 1;
const TempContH = 35
const TempContM = 30
// m = 85 e ser Mulher
// H = 95 e ser Homem
const m = cont+idade
const aposentH = m >= 95 && sexo == "M" && TempContH >= 35
const aposentM = m >= 85 && sexo == "F" && TempContH >= 30

if(aposentH || aposentM){
  console.log("Você pode se aposentar!!")
}else{
  console.log("Você NÃO pode se aposentar!!")
}