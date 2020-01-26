var changeChapter : string = "Chapter 2: Tipos"
var space : string = "--------------------------------"
console.log(' ');
console.log(changeChapter);
console.log(space);



//Início do capítulo 2 típos.

//string
console.log("TIPO STRING");
let nome:string = "João"
console.log(nome)

//numbers
console.log("TIPO NUMBER - Pode ser integer ou float");
let integer:number = 25
let float:number = 10.5

console.log(integer)
console.log(float);

//boolean
console.log("TIPO BOOLEAN");
let vaiMudar:boolean = true
console.log(vaiMudar);

// ARRAY
// There are two to write ARRAYS (1) with the type of data inside the array plus brackets like shown bellow, (2) with the Element Array<typeofdata> where typeofdata may be string, number, or boolean.

console.log("TIPO ARRAY");

let hobbies : string[] = ['basketball', 'workout at the gym', 'photography', 'programming']

let list : Array<number> = [1, 2, 3, 4, 5]


console.log(hobbies[0]);
console.log(list[1]);

// ENUM
// Used when you need an specific list that doesn't fit in any of the types before. Exemples: Days of the Week, Actions in a movie...

enum Cor{
    Amarelo,
    Vermelho = 100,
    Verde = 2,
    Azul,
    Roxo,
    Cinza
} 

let minhaCor : Cor = Cor.Cinza;

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

let carro: any = 'BMW'
console.log(carro)                  // This time it is a string
carro = { marca:'BMW', ano:2019}
console.log(carro);                 // This time it is an object

// This is only achieved because of the tipe of ANY that works exactly like variables in javascript.



//Functions
//Functions are very important when dealling with JS and TS because it is the main heart of the language.


//A function that returns a string type of data.
function retornaMeuNome():string{
    return nome;
}

console.log(retornaMeuNome());

//Function that doesn't return anything, that is why it is a void type of function.
function digaOi():void{
    console.log('Oi');
    
}
digaOi()

//Function that receives 2 number values, and returns another number value.
function multiplicar(numA:number, numB:number):number{
    return numA * numB
}

console.log(multiplicar(2,5));

//Funções como tipo
//No TS ou JS tem a possibilidade de atribuir uma função a uma variável.
let calculo: (x:number, y:number) => number;
//Ao definir uma variável como uma função, da forma como está acima, é importante pois quando atribuir uma função específica para ela, ela só vai aceitar funções iguais aos tipos atribuidos, ou seja, uma função como "multiplicar", ao tentar atribuir a função "digaOi" por exemplo, o TS pega um erro.
calculo = multiplicar
console.log(calculo(5,6));


//OBJECTS
//The correct way to infere the type of data in an object is saying the type of data before the values, as seen bellow.
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27,
}

usuario.nome = 'Jefferson';

console.log(usuario.nome)


//Desafio
/* 
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número) e retorna uma string
        -> Ponto normal (<=8)
        -> Fora do horário (>8)
*/

let funcionario :{
    supervisores: Array<string>, 
    baterPonto: (horaEntrada:number, horaSaida:number) => string 
} = {
    supervisores: ['carlos', 'roberto', 'heitor'],
    baterPonto: function baterPonto(horaEntrada:number, horaSaida:number): string{
        let horaTrabalho = horaSaida - horaEntrada;
        if (horaTrabalho <= 8) {
            return 'Ponto normal';            
        } else {
            return 'Ponto fora do horário';
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(7, 10));


