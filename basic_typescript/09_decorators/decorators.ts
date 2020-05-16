// TOC
//
// 1. CRIANDO DECORATOR DE CLASSE
// 2. DECORATOR FACTORY
// 3. ALTERANDO CONSTRUTOR COM DECORATOR DE CLASSE
// 4. ADICIONANDO MÉTODO COM DECORATOR DE CLASSE
// 5. MÚLTIPLOS DECORATORS
// 6. DESAFIO DECORATOR DE CLASSE
// 7. DECORATOR DE MÉTODO
// 8. DECORATOR DE ATRIBUTO
// 9. DECORATOR DE PARÂMETRO
// 10. CONCLUSÃO

// RECURSOS DO CAPÍTULO
// https://www.typescriptlang.org/docs/handbook/decorators.html

//DEFINIÇÃO DE DECORATOR
//

//AULA 127 - CRIANDO DECORATORS DE CLASSES
////@logarClasse
//@logarClasseSe(true)
////@decorator({a:'Teste', b:123})
//class Eletrodomestico{
  //constructor(){
    //console.log('novo...')
  //}
//}


function logarClasse(construtor: Function){
  console.log(construtor)
}

//AULA 128 - DECORATOR FACTORY
//É uma função que chama um decorator de dentro, podendo chamar mais de um inclusive.
// addition of decoratorVazio, logarClasseSe, decorator

function decoratorVazio(_:Function){}


function logarClasseSe(valor:boolean){
	return valor ? logarClasse : decoratorVazio
}


function decorator(obj:{a:string, b:number}){
	return function(construtor:Function):void{
		console.log(obj.a + ' ' + obj.b)
	}
}



//AULA 129 - Alterando construtor com decorator e classe
// substituir a classe por uma herança de uma classe, e essa subclasse tem novos métodos e atributos em relação a classe usada.

//@logarClasse
//@decorator({a:'Teste', b:123})
//@logarClasseSe(true)
@logarObjeto
class Eletrodomestico{
  constructor(){
    console.log('novo...')
  }
}

//assinatura de um construtor mais genérico possível
type Construtor = { new(...arg:any[]): {} }

function logarObjeto(construtor: Construtor){
	console.log('Carregado...')
	return class extends construtor{
		constructor(...args: any[]){
			console.log('Antes...')

			//como eu quero acessar os atributos e metodos da classe pai, preciso usar a função super
			//alé disso é necessário usar o spread, para separar o array que foi enviado como parâmetro
			super(...args)
			
			console.log('Depois...')
		}
	}
}

new Eletrodomestico
new Eletrodomestico
new Eletrodomestico

//AULA 135 - Decorador de método
//

class ContaCorrente{
	@naoNegativo //AULA 136
	private saldo:number
	constructor(saldo: number){
		this.saldo = saldo
	}

	@congelar
	sacar(@paramInfo valor:number){ //@paramInfo AULA 137
		if(valor <= this.saldo){
			this.saldo -= valor
			return true
		}else{
			return false
		}
	}
	@congelar
	getSaldo(){
			return this.saldo
	}
}


const cc = new ContaCorrente(10248.57)
console.log(cc.getSaldo())
cc.sacar(5000)
console.log(cc.getSaldo())
// cc.getSaldo = function(){
// 	return this['saldo'] +7000
// }
console.log(cc.getSaldo())


//Assinatura de um decoretor em função

// Object.freeze()
function congelar(alvo: any, nomeMetodo:string, descritor: PropertyDescriptor){
	console.log(alvo)
	console.log(nomeMetodo)
	descritor.writable = false
}


//AULA 135 Decorator de Atributo
//

function naoNegativo(alvo: any, nomePropriedade:string){

	//deleta a propriedade que foi decorada
	delete alvo[nomePropriedade]

	//criou uma nova com o mesmo nome mas internamente salvando em outra variável e criando as propriedades get e set para poder validar se o número é negativo ou não.
	Object.defineProperty(alvo, nomePropriedade, {
		get: function(): any{
			return alvo["_" + nomePropriedade]
		},

		set: function(valor: any):void{
			if(valor < 0) {
				throw new Error('Saldo Inválido')
			}else{
				alvo["_" + nomePropriedade] = valor
			}
		}
	})
}

//AULA 137: Decorator de Parâmetro
//

function paramInfo(alvo:any, nomeMetodo:string, indiceParam:number){
	console.log(`Alvo: ${alvo}`)
	console.log(`Método: ${nomeMetodo}`)
	console.log(`Índice Param: ${indiceParam}`)
}
