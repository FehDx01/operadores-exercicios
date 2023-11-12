
//PARTE 1
/* const operacaoA = 5 > 20 && 5 < 2
console.log(operacaoA)

const operacaoB = 5 === 5 || 5 === "5";
console.log(operacaoB)

const operacaoC = !(20 > 50)
console.log(operacaoC)

const operacaoD = !(20 > 50) || (50 > 60)
console.log(operacaoD) */


//PARTE 2
/* **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.** */

/* Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário

Calcule:

1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */

// 1)
const auxilioCreche = 45.50*2
const salarioFixo = 2000
const salarioTotal = auxilioCreche+salarioFixo

console.log("A soma do salário e da Creche é", salarioTotal)

//2
const comissaoJan = 5784.50*0.1
const janeiroComissao = comissaoJan

console.log("A comissão de Janeiro é", janeiroComissao)

//3
const salarioEComissaoJan = salarioFixo+janeiroComissao
console.log(salarioEComissaoJan)
const inss = salarioEComissaoJan*0.05

console.log("O desconto do INSS apurado em Janeiro foi de", salarioEComissaoJan-inss)

//4
//Janeiro
const salarioECreche = salarioEComissaoJan + auxilioCreche
const jan = salarioECreche - inss
console.log("O salário de Janeiro é", jan)
// O salário de Janeiro ficou em R$ 2.540.52

//Fevereiro
const comissaoFev = 3418.41*0.1
const brutoFev = comissaoFev + salarioECreche
const fev = brutoFev - inss
console.log("O salário de Fevereira é", fev)

//Março
const comissaoMar = 4124.10*0.1
const brutoMar = comissaoMar + salarioECreche
const mar = brutoMar - inss

console.log("O salário de Março é", mar)

//Abril
const comissaoAbr = 1874*0.1
const brutoAbr = comissaoAbr + salarioECreche
const abr = brutoAbr - inss

console.log("O salário de Abril é", abr)

//Maio
const comissaoMaio = 7000*0.1
const brutoMaio = comissaoMaio + salarioECreche
const mai = brutoMaio - inss 

console.log("O salário de Maio é", mai)

//Junho
const comissaoJun = 9450*0.1
const brutoJun = comissaoJun + salarioECreche
const jun = brutoJun - inss

console.log("O salário de Junho é", jun)

//5

const soma = jan + fev + mar + abr + mai + jun
const divisaoAll = 6
const media = soma / divisaoAll
console.log("A média salarial apurada foi de", media)

// A média salarial apurada foi de R$ 2971.63











