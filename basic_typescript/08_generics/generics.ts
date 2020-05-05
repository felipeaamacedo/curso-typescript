//TOC
//1. O que o tipo generics
//2. Por que usar o generics?
//3. Criando função com generics
//4. Usando generics com array
//5. Criando classes com generics
//6. Desafio generics
//7. Restrições (Constraints)
//8. Desafio do módulo
//

//TIPO GENERICS
//É um outro tipo que substitui o ANY, e é utilizado quando precisa ter alguma fun??o ou vari?vel mais gen?rica, mas que mesmo assim passe pelo transpiler do TS. 
//
//

function echo(objeto:any){
	return objeto
}

console.log(echo('Joao').lenght)
console.log(echo(27).lenght)
console.log(echo({ nome:'Joao', idade: 27}))

// AULA 111 - CRIANDO UMA FUNÇÃO COM GENERICS
// SINTAX: function nomeDaFuncao <nomeTIpo>(input:nomeTipo):nomeTipo.
// no caso o <nomeTipo> usado por padr?o tipo. O generics permite voc? criar um tipo dessa forma que ? definido posteriormente durante o c?digo o tipo ? definido. 

function echoMelhorado<TIPO>(objeto: TIPO):TIPO{
	return objeto
}


console.log(echoMelhorado('Joao').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome:'Joao', idade: 27}).nome)

//AULA 112-113: ARRAY COM GENERICS
//o generics é genérico do ponto de vista da pessoa que está construindo, uma vez que ele constroi a função tendo em vista o usuário especificar o tipo ao usar. Isso é uma forma de fortalecer o que o o usuario irá usar.

let notasDosAlunos: Array<number> = [5.5, 7.1, 8.2]
notasDosAlunos.push(9.0)
notasDosAlunos.push(7.9)
//notasDosAlunos.push('8.4') //neste caso temos um erro pois o usuário especificou um tipo para a função generics Array.

console.log(notasDosAlunos)

// AULA 115 - Criando classes com generics
//
class OperacaoBinaria{
	constructor(public operando1:any, public operando2:any){}

	executar(){
		return this.operando1 + this.operando2
	}
}


console.log(new OperacaoBinaria('Bom ', 'dia').executar())
console.log(new OperacaoBinaria(3,7).executar())

//Operacao nao é exatamente o que gostaria, nao era para somar um number com string, nem dois object. O generics nesses casos fazem com que o transpilador veja o erro e reclame.
console.log(new OperacaoBinaria(4, 'Bom ').executar())
console.log(new OperacaoBinaria({ }, { }).executar())   


//No caso acima a classe operacaobinaria tem alguns problemas na hora de fazer a soma, já que ela aceita qualquer tipo. Para mudar isso, é feita a utilização do Generics, criando uma classe que aceita diversos parâmetros, mas que precisa especificar antes.
//
//A abordagem utilizada é a criação de uma classe abstracta, e em seguida criada uma classe que extends dessa classe abstrata, e especifica o tipo  a ser utilizado.
//
abstract class OperacaoBinariaGenerics<T, R>{
	constructor(public operador1:T, public operador2:T){}

	abstract executar():R

}

class SomaBinaria extends OperacaoBinariaGenerics <number, number>{
	executar(){
		return this.operador1 + this.operador2
	}
}

console.log(new SomaBinaria(33,4).executar())



// DESAFIO SOMA DE DATAS
//

class TDiferencaEntreDatas extends OperacaoBinariaGenerics<TData, string>{
	dataToTime(data:TData):number{
		let { dia, mes, ano } = data
		return new Date(`${mes}/${dia}/${ano}`).getTime()
	}

	executar():string{
		let tempo1 = this.dataToTime(this.operador1)
		let tempo2 = this.dataToTime(this.operador2)

		let diferencaTempo = Math.abs(tempo1 - tempo2)
		let diferencaDia = Math.ceil(diferencaTempo/(1000*60*60*24))

		return `${diferencaDia} dias(s)`
	}
}


let data1 = new TData(3,4,1990)
let data2 = new TData(5,4,1990)

console.log(new TDiferencaEntreDatas(data1, data2).executar()) 

//AULA 118 - Desafio classe fila
//Atributo: fila (Array)
//Métodos: entrar, proximo, imprimir
//

class TFila<T>{
	private fila: Array<T>

	constructor(...args: T[]){
		this.fila = args
	}

	entrarNaFila(nome:T):void{
		this.fila.push(nome)
	}

	proximoDaFila(){
		if(this.fila.length >= 0 && this.fila[0]){
			console.log(this.fila[0])
			this.fila.reverse()
			this.fila.pop()
			this.fila.reverse()
		}else{
			console.log(null)
		}
	}

	imprimirFila(){
		console.log(this.fila)
	}
}




let filaDoBanco = new TFila<string>("Caio", "Fernanda", "Rafael", "Lucas")

filaDoBanco.imprimirFila()
filaDoBanco.proximoDaFila()
filaDoBanco.imprimirFila()
filaDoBanco.entrarNaFila("Larissa")
filaDoBanco.imprimirFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()

filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()
filaDoBanco.proximoDaFila()


//AULA 120 Restrições (Constraints)
//restrição de tipos que vão ser chamados no generics
//sintax: exemplo  <T extends number|string> 

//AULA 121: Desafio do módulo
//Array de Objetos (Chave/Valor) --> itens
//Métodos: obter(Chave), colocar({ C,V }), limpar(), imprimir()
//
type mapaID<C, V> = { chave: C, valor: V }
class Mapa<C, V>{
	itens:Array<mapaID<C,V>> = new Array<mapaID<C,V>>()

	obter(chave:C):mapaID<C, V> | null{
		const resultado = this.itens.filter(i=>i.chave === chave)
		return resultado ? resultado[0] : null	
	}

	colocar(par: mapaID<C, V>):void{
		let encontrado = this.obter(par.chave)
		if(encontrado){
			encontrado.valor = par.valor
		}else{
			this.itens.push(par)
		}
	
	}

	limpar(){
		this.itens = new Array<mapaID<C, V>>()
	}

	imprimir(){
		console.log(this.itens)
	}
}


const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()


