//PERGUNTAS
// 1. qual a diferenca entre types e interfaces? pelo o que eu entendi estamos criando um tipo diferente.
// 2. não entendi a vantagem de se usar uma interface com uma classe, como funciona na prática?
//
//
//INTERFACE
//é uma obrigação que você define de para que variaveis/constantes, funções e classes, atendam o que você predefiniu de acordo com a interface.


interface Humano {
	nome:string
	idade?:number //aula 100:propriedades opcionais  (add do ?)
	[ prop:string ]:any//aula 100: propriedade com nome dinâmico.
	saudar(sobrenome: string):void//aula 101: add metodos dentro de interfaces
}


function saudarComOla(pessoa: Humano){
	console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa:Humano){
	pessoa.nome = 'Joana'
}

const pessoa = {
	nome: 'João',
	idade: 27,
	saudar(sobrenome:string):void{
		console.log('Olá meu nome é ' + sobrenome + ', ' + pessoa.nome + ' ' + sobrenome)
	}
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

//AULA 100 - Interfaces e Propriedades
//

//saudarComOla({nome:'Jonas', idade:27, altura:1.90})
// AULA 101 - INTERFACES E METODOS

pessoa.saudar('Aroldo')

//AULA 102 - USANDO INTERFACES COM CLASSES
// uma classe implementa uma interface, desta forma, a classe deve respeitar parâmetros da interface, sendo neste contexto seus atributos.Deve ser usado quando você deseja que uma classe necessite ser compatível com uma determinada interface. Para que uma Classe implemente uma interface, você deve usar a sintaxe (class <nome_da_classe> implements <nome_da_interface>{}, e desta forma, todos os atributos que constam na classe devem respeitar a Interface, i.e. devem por obrigação ter as propriedades obrigatórias da classe, e ter definido os metodos.
class Clientes implements Humano{
	nome: string = ''
	ultimaCompra:Date = new Date
	saudar(sobrenome:string){
		console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
	}
}

const meuCliente = new Clientes()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


//AULA 103 - INTERFACES E TIPO FUNÇÃO
//a interface em funções é a 'assinatura' da função, no caso a função deverá seguir a interface.

interface FuncaoCalculo{
	(a:number, b:number):number
}


let potencia: FuncaoCalculo

potencia = (base: number, exp: number):number =>  base**exp
console.log('POTENCIA DE 2 NA BASE 3 EM 1 LINHA: ' + potencia(3,2))


//AULA 104 - HERANÇA COM INTERFACES
// classes IMPLEMENTS interfaces
// classes EXTENDS classes
// interfaces EXTENDS interfaces
//
// mesmo nome extends - nome diferente implements
// classes abstratas que implementam interfaces, precisam que os métodos da inferfaces sejam implementadas.


interface A {
	a():void
}

interface B {
	b():void
}

interface ABC extends A, B {
	c(): void
}

class RealA implements A {
	a():void{}
}

class RealAB implements A, B {
	a():void{}
	b():void{}
}

class RealABC implements ABC{
	a():void{}
	b():void{}
	c():void{}
}

abstract class AbstrataABD implements A, B{
	a():void{}
	b():void{}
	abstract d():void
}


// AULA - 105 - COMO INTERFACE É TRADUZIDA PARA JS
// o implements é um recurso que está presente somente no TS, serve apenas para checar as variáveis, não está presente no JS.

// AULA 106 - USO DE INTERFACES PARA EXTENDER OBJECT
// funciona para poder facilitar um exemplo o console.log escrevendo x.log
//

