//PERGUNTAS
// 1. qual a diferenca entre types e interfaces? pelo o que eu entendi estamos criando um tipo diferente.
// 2. não entendi a vantagem de se usar uma interface com uma classe, como funciona na prática?
//
//
//INTERFACE
//um contrato, você define o que está dentro da interface e o objeto precisa está de acordo com a interface


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
