"use strict";
var changeChapter = "Chapter 2: Tipos";
var space = "--------------------------------";
console.log(' ');
console.log(changeChapter);
console.log(space);
//Início do capítulo 2 típos.
//string
console.log("TIPO STRING");
var nome = "João";
console.log(nome);
//numbers
console.log("TIPO NUMBER - Pode ser integer ou float");
var integer = 25;
var float = 10.5;
console.log(integer);
console.log(float);
//boolean
console.log("TIPO BOOLEAN");
var vaiMudar = true;
console.log(vaiMudar);
// ARRAY
// There are two to write ARRAYS (1) with the type of data inside the array plus brackets like shown bellow, (2) with the Element Array<typeofdata> where typeofdata may be string, number, or boolean.
console.log("TIPO ARRAY");
var hobbies = ['basketball', 'workout at the gym', 'photography', 'programming'];
var list = [1, 2, 3, 4, 5];
console.log(hobbies[0]);
console.log(list[1]);
// ENUM
// Used when you need an specific list that doesn't fit in any of the types before. Exemples: Days of the Week, Actions in a movie...
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Azul"] = 3] = "Azul";
    Cor[Cor["Roxo"] = 4] = "Roxo";
    Cor[Cor["Cinza"] = 5] = "Cinza";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log("Printing the value of minhaCor");
console.log(minhaCor);
console.log('Printing the color values of the list');
console.log(Cor.Amarelo);
console.log(Cor.Vermelho);
console.log(Cor.Verde);
console.log(Cor.Azul);
console.log(Cor.Roxo);
console.log(Cor.Cinza);
//ANY
//Is a way to make your variable to work in the same way as the JavaScript. It works this way because TS was made to be introduced stepwisely.
var carro = 'BMW';
console.log(carro); // This time it is a string
carro = { marca: 'BMW', ano: 2019 };
console.log(carro); // This time it is an object
// This is only achieved because of the tipe of ANY that works exactly like variables in javascript.
