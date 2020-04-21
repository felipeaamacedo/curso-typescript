// Exercício 1 - Classe

class TMoto{
	constructor(private _nome:string, public velocidade:number = 0){
	}
	public buzinar(){
		console.log('Tooooooot!')
	}
	public acelerar(delta:number){
		this.velocidade = this.velocidade + delta
	}
	
}	
	
let moto = new TMoto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

/*
function Moto(nome){

this.nome = nome
this.velocidade = 0

this.buzinar = function(){
	console.log('Tooooooot!')
}

this.acelerar=function(delta){
this.velocidade = this.velocidade+delta
}
}


var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
*/

// Exercício 2 - Herança

class TObjeto2D{
	constructor(public base:number=0, public altura:number=0){
	}
}

class TRetangulo extends TObjeto2D {
	area(){
		return	this.base * this.altura
	}
}


let retangulo2 = new TRetangulo(5, 7)
retangulo2.base = 10
console.log(retangulo2.area())

/*
var objeto2D = {
	base:0,
	altura:0
}

var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function(){
	return this.base*this.altura
}

console.log(retangulo.area())
*/


//Exercício 3 - Getters & Setters
//

class TEstagiario{
	constructor(private _primeiroNome:string = ''){
	}
	
	get primeiroNome():string{
		return this._primeiroNome
	}
	
	set primeiroNome(valor:string){
		if(valor.length >= 3){
			this._primeiroNome = valor
		}else{
			this._primeiroNome = ''
		}
	}
}
let estagiario = new TEstagiario()
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

/*
var estagiario = {
	_primeiroNome:
}

Object.defineProperty(estagiario, 'primeiroNome', {
	get: function(){
		return this._primeiroNome
	},
	set: function(valor){
		this._primeiroNome = valor
	}else{
		this._primeiroNome = ''
	}
	
	enumerable:true
	configurable:true
})

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
	
*/
