//PERGUNTAS
// 1. qual a diferenca entre types e interfaces? pelo o que eu entendi estamos criando um tipo diferente.
//
//
//
//INTERFACE
//um contrato, você define o que está dentro da interface e o objeto precisa está de acordo com a interface


interface Humano {
	nome:string
}


function saudarComOla(pessoa: Humano){
	console.log('Olá, ' + pessoa.nome)
}

const pessoa = {
	nome: 'João',
	idade: 27
}

saudarComOla(pessoa)
