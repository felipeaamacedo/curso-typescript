"use strict";
// Exercício 1 - Classe
class TMoto {
    constructor(_nome, velocidade = 0) {
        this._nome = _nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Tooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
let moto = new TMoto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
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
class TObjeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class TRetangulo extends TObjeto2D {
    area() {
        return this.base * this.altura;
    }
}
let retangulo2 = new TRetangulo(5, 7);
retangulo2.base = 10;
console.log(retangulo2.area());
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
class TEstagiario {
    constructor(_primeiroNome = '') {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
let estagiario = new TEstagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
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
//# sourceMappingURL=desafioClasses.js.map