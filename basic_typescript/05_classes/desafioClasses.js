"use strict";
// Exercício 1 - Classe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TMoto = /** @class */ (function () {
    function TMoto(_nome, velocidade) {
        if (velocidade === void 0) { velocidade = 0; }
        this._nome = _nome;
        this.velocidade = velocidade;
    }
    TMoto.prototype.buzinar = function () {
        console.log('Tooooooot!');
    };
    TMoto.prototype.acelerar = function (delta) {
        this.velocidade = this.velocidade + delta;
    };
    return TMoto;
}());
var moto = new TMoto('Ducati');
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
var TObjeto2D = /** @class */ (function () {
    function TObjeto2D(base, altura) {
        if (base === void 0) { base = 0; }
        if (altura === void 0) { altura = 0; }
        this.base = base;
        this.altura = altura;
    }
    return TObjeto2D;
}());
var TRetangulo = /** @class */ (function (_super) {
    __extends(TRetangulo, _super);
    function TRetangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TRetangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return TRetangulo;
}(TObjeto2D));
var retangulo2 = new TRetangulo(5, 7);
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
var TEstagiario = /** @class */ (function () {
    function TEstagiario(_primeiroNome) {
        if (_primeiroNome === void 0) { _primeiroNome = ''; }
        this._primeiroNome = _primeiroNome;
    }
    Object.defineProperty(TEstagiario.prototype, "primeiroNome", {
        get: function () {
            return this._primeiroNome;
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor;
            }
            else {
                this._primeiroNome = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return TEstagiario;
}());
var estagiario = new TEstagiario();
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
