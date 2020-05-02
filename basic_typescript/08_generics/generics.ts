//TIPO GENERICS
//? um outro tipo que substitui o ANY, e ? utilizado quando precisa ter alguma fun??o ou vari?vel mais gen?rica, mas que mesmo assim passe pelo transpiler do TS. 
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
//o generics ? gen?rico do ponto de vista da pessoa que est? construindo, uma vez que ele constroi a fun??o tendo em vista o usu?rio especificar o tipo ao usar. Isso ? uma forma de fortalecer o que o o usu?rio ir? usar.

let notasDosAlunos: Array<number> = [5.5, 7.1, 8.2]
notasDosAlunos.push(9.0)
notasDosAlunos.push(7.9)
//notasDosAlunos.push('8.4') //neste caso temos um erro pois o usu?rio especificou um tipo para a fun??o generics Array.

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


let data1 = new TData(3, 4, 1990)
let data2 = new TData(10,4,1990)

console.log(new TDiferencaEntreDatas(data1, data2).executar()) 




