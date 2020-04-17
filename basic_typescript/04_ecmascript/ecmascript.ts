console.log('Seção 4: Typescript e os Novos Recursos ECMAScript')
console.log('--------------------------------------------------')

//
// TABLE OF CONTENTS
//
// 1. Let e Const
// 2. Arrow Function
// 3. Parâmetro Padrão
// 4. Operator SPREAD & REST
// 5. Operator Destructuring (ARRAY)
// 6. Operator Destructuring (OBJECT)
// 7. Template String
// 8. Desafio EcmaScript
// 9. Promises
//


//AULA 45 LET e CONST
//comando LET é a nova forma de criar variáveis, ela é muito importante pois podemos criar variáveis em escopo local, e não somente global, como era o caso do VAR (que ainda pode ser utilizado.)
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio){
	let acao="Colocar o casaco!"
	console.log(acao)
}

//Constantes não podem ser alteradas no meio do código, como o código está tentando mudar cpf, e pelo atributo 'target' no arquivo package.json ser es6, o código gera um erro e não funciona tanto no Typescript quanto no Browser. Se mudarmos o 'target' para es6 Typescript gerará um erro, entretanto o browser não. Vale lembrar que o CONST também tem escopo de bloco comoassim como LET.

const cpf:string = '123.456.789-10'
//cpf = '123.123.123-02'
console.log(cpf)

//AULA 47 ARROW FUNCTION
//arrow function é uma das maneiras de se declarar uma função. Ela é uma função que tem forma reduzida, essa função é sempre anônima, ou seja, uma função sem nome que precisa ser atribuida a uma constante. É utilizada em duas ocasiões: quando se quer escrever uma função pequena, de uma linha apenas; ou quando se atribui ao "this" ao se trabalhar com classes e objetos.É utilizada a partir da sintaxe (variáveis da função):tipo => resultado

//FUNCTION TRADICIONAL
let somaFunctionTradicional = function(nr1:number, nr2:number):number {
	return nr1 + nr2;
}
console.log(`FUNCTION TRADICIONAL: A soma de 3 + 3 é ${somaFunctionTradicional(13,24)}`) 

//FUCTION EM ARROW FUNCION
let somaArrowFunction = (n1:number, n2:number):number => n1+n2;
console.log(`ARROW FUNCTION: A soma de 2 + 3 é ${somaArrowFunction(2,3)}`) 
//AULA 49 PARÂMETRO PADRÃO
//valores padrão no TS são só uma maneira que temos para poder iniciar uma função quando o usuário não tenha atribuido nenhum parâmetro. É utilizada nos parâmetros das funções logo após settado o tipo do parâmetro. e.g. "contagemRegressiva(inicio:number = 3) <-- o igual a 3 é o valor padrão definido na função. 
function contagemRegressiva(inicio:number = 3):void{
	console.log(inicio)
	while(inicio > 0){
		inicio--
		console.log(inicio)
	}
	console.log("Fim!!")
}

contagemRegressiva()
contagemRegressiva(5)


//AULA 50 - OPERADOR SPREAD & REST
//OQUE: É a sintaxe "..." 
//

const numbers = [1, 10, 99, -5]
//Modo tradicional falar colocar como input um array em Math.max, que não aceita arrays como parâmetro, então deve ser inserido cada parâmetro por padrão.
console.log("MODO TRADICIONAL: " + Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))

//MODO COM SPREAD(SPREAD -> ESPALHAR), em vez de colocar cada número você usa o parâmetro spread para falar informar que está inserindo todos os itens separadamente.
console.log("MODO SPREAD: " + Math.max(...numbers))

//Inserindo array de strings dentro de outra array de strings com o SPREAD
const turmaA:string[] = ['Joao', 'Maria', 'Fernanda']
const turmaB:string[] = ['Fernando', ...turmaA, 'Miguel', 'Lorena']
console.log('USANDO SPREAD PARA JUNTAR ARRAYS: ' + turmaB)

//Usando REST para agrupar os números inseridos em uma array
//
function retornarArray(...args:number[]):number[]{
	return args
}

const numeros = retornarArray(1, 2, 4, 8, 16, 64, 128, 256, 512, 1024)
console.log('ARRAY DE DOS NUMEROS É: ' + numeros)
console.log('NESTE MOMENTO JUNTAMOS OS NÚMEROS QUE ERAM SEPARADOS EM UMA ARRAY')
console.log(numeros)

//REST & SPREAD EM TUPLAS
//neste caso, em vez de inserir 3 variáveis diferentes, como na function tuplaParam1, simplesmente usmos o operador REST com 3 tipos diferentes, como indicado na function tuplaParam2.
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b:string, c:boolean):void{
	console.log(`1) ${a}, ${b}, ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params:[number, string, boolean]){
	console.log(`2) ${params}`)
}

//entretanto, como a função espera 3 parâmetros diferentes, e a const tupla, é uma variável array, é necessário usar o operador SPREAD para desassociar as variáveis dentro do array.
tuplaParam2(...tupla)

//AULA 53 OPERADOR DESTRUCTURING (ARRAY)
//é uma maneira de atribuir valores de dentro de uma string em uma variável ou constante de forma mais simples. É utilizado quando você precisa atribuir todos os valores de uma array, quando cada valor da coluna da array rtem um significado. é utilizado da seguinte forma:
//
//GEITO USUAL
const caracteristicas = ['Motor Zetec 1.8', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

//GEITO COM DESTRUCTURING
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

//AULA 54 - OPERADOR DESTRUCTURING (OBJETO)
//é um metodo para chamar criar diversas variáveis referentes a atributos de um objeto, em uma única linha. Diferença entre ARRAYS e OBJETOS, Array usa [] então o destructuring do array usa [], o objeto usa {} então o destructuring usa {}.
const item = {
	nome:'SSD 480GB',
	preco: 200
}

const nomeItem = item.nome
const precoItem = item.preco

const {nome: n, preco: p} = item //maneira de criar um alias chamando uma variável por um apelido no caso chamad nome com 'n'
console.log(n)
console.log(p)

console.log(nomeItem)
console.log(precoItem)

//AULA 55 - TEMPLATE STRING
//uma maneira de fazer concatenar sem precisar ficar adicionando o +, como se estivesse somando valores. É utilizado com strings, de forma a formar textos. Para utilizar é utilizado a aspas "``" e dentro no lugar onde é utilizado a variável o comando ${}, estando dentro das chaves a variável. Além de inserir as variáveis, também é possível fazer operações quando você está no ambiente ${}, como o exemplo da operação em Notificações utilizando um Conditional operator do tipo "condition ? valTrue : valFalse"

const usuarioID:string = 'Felipenta'
const notificacoes:string = '13'

const boasVindas = `Boas vindas ${usuarioID}, Notificações ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`

console.log(boasVindas)

/*
//DESAFIO ECMASCRIPT
//Exercício 1

var dobro = function(valor){
	return valor*2
}
console.log(dobro(10))


//Exercicio 2

var dizerOla = function(nome){
	if (nome === undefined){nome='Pessoa'}
	console.log('Olá, ' + nome
}

dizerOla()
dizerOla('Anna')

//Exercicio 3

var enums = [-3, 33, 38, 5]
//Imprimir o menor valor
console.log('???')

//Exercicio 4
var array = [55, 20]
//Adicionar todos os elementos de "nums" em array
console.log(array)

//Exercicio 5
var notas = [8.5, 6.3, 9.4]
var nota1 = notas[0]
var nota2 = notas[1]
var nota3 = notas[2]
console.log(nota1, nota2, nota3)

//Exercicio6
var cientista = {primeiroNome:'Will', experiencia:12 }
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)
*/

//DESAFIO ECMASCRIPT
//Exercício 1
console.log('EXERCICIO 1')
console.log(' ')


const dobro = (valor:number) =>  valor*2
console.log(dobro(10))


//Exercicio 2
console.log('EXERCICIO 2')
console.log(' ')

const dizerOla = function(nome:string = 'Pessoa'):void{
	console.log('Olá, ' + nome)
}

dizerOla()
dizerOla('Anna')

//Exercicio 3
console.log('EXERCICIO 3')
console.log(' ')


const enums = [-3, 33, 38, 5]
//Imprimir o menor valor
console.log(Math.min(...enums))

//Exercicio 4
console.log('EXERCICIO 4')
console.log(' ')


const array = [55, 20]
//Adicionar todos os elementos de "nums" em array
array.push(...enums)
console.log(array)

//Exercicio 5
console.log('EXERCICIO 5')
console.log(' ')


const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

//Exercicio6
console.log('EXERCICIO 6')
console.log(' ')


const cientista = {primeiroNome:'Will', experiencia:12 }
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)

//AULA 59 - PROMISES
//uma maneira de trabalhar com assincronismo em JavaScript
