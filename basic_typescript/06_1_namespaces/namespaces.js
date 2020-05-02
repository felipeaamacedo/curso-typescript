"use strict";
//
// TOC
// 1. Introdução a Namespaces
// 2. Namespaces em Multiplos Arquivos
// 3. Namespaces Imports
// 4. Limitação dos Namespaces
//
//AULA 84 - INTRODUCAO A NAMESPACES
//
var Areas;
(function (Areas) {
    var PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(3));
console.log(Areas.retangulo(2, 4));
//NAMESPACES ANINHADOS (um namespace dentro de outro)
var Geometria;
(function (Geometria) {
    var Areas;
    (function (Areas) {
        var PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Areas.retangulo = retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.circunferencia(2));
// AULA 86 - NAMESPACES EM MULTIPLOS ARQUIVOS 
//
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
console.log(GeometriaMultArq.Areas.circunferencia(10));
