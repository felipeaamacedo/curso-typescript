var changeChapter : string = "Chapter 2: Tipos"
var space : string = "--------------------------------"
console.log(' ');
console.log(changeChapter);
console.log(space);

/* 
TOC

1. Tipos numéricos e booleanos
2. Array e tipos
3. TUPLAS
4. ENUMS
5. Tipo ANY 
6. Funções
7. Funções como tipo
8. Tipo objetos
9. Definindo tipos personalizados o ALIAS
10. Múltiplos tipos com o UNION TYPE
11. Checando tipos em Runtime
12. O tipo NEVER
12. Valores opcionais com o tipo NULL

*/



//Início do capítulo 2 típos.

// AULA 12 - TIPOS NUMÉRICOS E BOOLEANOS
//string
console.log("TIPO STRING");
let nome:string = "João"
console.log(nome)

//numbers
console.log("TIPO NUMBER - Pode ser integer ou float");
let integer:number = 25
let float:number = 10.5

console.log("Este é um inteiro " + integer)
console.log("Este é um float, numero com ponto, quebrado " + float);

//boolean
console.log("TIPO BOOLEAN");
let vaiMudar:boolean = true
console.log(vaiMudar);

// AULA 14 - ARRAY E TIPOS
// There are two to write ARRAYS 
// (1) with the type of data inside the array plus brackets like shown bellow,
// (2) with the Element Array<typeofdata> where typeofdata may be string, number, or boolean.
// 
// A diferença entre os dois é que o tipo array possui alguns metodos associados

console.log("TIPO ARRAY");

let hobbies : string[] = ['basketball', 'workout at the gym', 'photography', 'programming']

let list : Array<number> = [1, 2, 3, 4, 5]


console.log(hobbies[0]);
console.log(list[1]);

// AULA 15 - TUPLAS
// A Tupla é uma array com diferentes tipos de dados
let endereco: [string, number] = ["av. rodrigo fernando grilo", 587];
console.log("O Meu endereço é: " + endereco);



// AULA 16 - ENUMS
// ENUM
// Estrutura de lista que você usa valores pré-definidos, que não constam nos tipos apresentados anteriores. Exemples: Days of the Week, Actions in a movie...

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

// AULA 17 - O TIPO "ANY"
//ANY
//Is a way to make your variable to work in the same way as the JavaScript. It works this way because TS was made to be introduced stepwisely.

let carro: any = 'BMW'
console.log(carro)                  // This time it is a string
carro = { marca:'BMW', ano:2019}
console.log(carro);                 // This time it is an object

// This is only achieved because of the tipe of ANY that works exactly like variables in javascript.


// AULA 19 - FUNÇÕES
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

// AULA 20 - FUNÇÕES COMO TIPO
//No TS ou JS tem a possibilidade de atribuir uma função a uma variável.
let dividePorDois = function (a:number, b:number):boolean {
    let c = a*b;
    let resto = c % 2;  // símbolo % quer dizer o REMAINDER ou seja o resto da divisão de C por 2.
    if (resto == 0){
        return true;
    } else {
        return false;
    }
}

console.log( "O valor é divisível por 2? " + dividePorDois(2,2) );
console.log( "O valor é divisível por 2? " + dividePorDois(3,5) );


// Arrow funciona para falar que uma variável é do tipo função
// let calculo <cria uma variável> : <:depois da variável que indica o tipo, como vem antes de um parênteses, o TypeScript entende que essa variável é do tipo função) (<input da função> x:number, y:number) => <valor que a função retorna> return.
// Esse tipo função só é utilizado quando essa variável que é do tipo função recebe uma variável exatamente igual ao tipo que você atribuiu, como é o caso da função multiplicar.
let calculo: (x:number, y:number) => number;
//Ao definir uma variável como uma função, da forma como está acima, é importante pois quando atribuir uma função específica para ela, ela só vai aceitar funções iguais aos tipos atribuidos, ou seja, uma função como "multiplicar", ao tentar atribuir a função "digaOi" por exemplo, o TS pega um erro.
calculo = multiplicar
console.log(calculo(5,6));

//AULA 21 - TIPO OBJETOS
//OBJECTS
//The correct way to infere the type of data in an object is saying the type of data before the values, as seen bellow.
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27,
}

usuario.nome = 'Jefferson';

console.log(usuario.nome)

//AULA 22 - DESAFIO TIPO OBJETOS
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


// AULA 24 - DEFININDO TIPOS PERSONALIZADOS (ALIAS)
// quando você precisa usar um tipo objeto por mais de uma vez, não é preciso atribuir o tipo objeto em todos os funcionários

type Funcionario = {
        supervisores: Array<string>, 
        baterPonto: (horaEntrada:number, horaSaida:number) => string 
}

let funcionario2 : Funcionario =
{
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

let funcionario3 : Funcionario = {
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

// AULA 25 - MÚLTIPLOS COM UNION TYPES
// esse tipo é para ser usado quando você quer que mais de um tipo de dado seja aceito, mas não todos, como acontece no tipo any. Um exemplo seria poder aceitar number e string mas não boolean. 

let nota: number | string

nota = 10;
console.log(`Minha nota é ${nota}`);

nota = "Dez"
console.log(`Minha nota é ${nota}`);

//  nota = true   // <= nesse caso não é aceito

// AULA 26 - CHECANDO TIPOS NO RUNTIME
// checando variáveis de forma manual

let valor = 10; 

// esse código abaixo não é necessário quando se usa o TypeScript, pois só de colocar o mouse em cima já é possível saber o tipo. Entretanto, é uma maneira de saber o tipo quando é preciso entrar no "mundo JavaScript"
console.log(`É um ${typeof valor}!`);

// AULA 27 - TIPO NEVER
// o tipo "never" é quando você quer dizer que ela nunca vai voltar, como quando entra num loop infinito ou entra num tipo de erro. Diferentemente de AUSENCIA de retorno, quando é usado com o tipo "void".

function falha(msg:string) :never{
    while(true){ //while(true) é um loop infinito
        throw new Error(msg) //lançar um erro, com a mensagem.
    }
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto(){
        if(!this.nome|| this.nome.trim().length == 0) {
            falha("Precisa ter um nome")
        }
        if(this.preco <= 0){
            falha("Preço inválido")
        }
    }
}
produto.validarProduto()

// AULA 28 - VALORES OPCIONAIS COM TIPO "NULL"
// garantia do TypeScript que o usuário irá inserir algum valor

let altura = 12;
// altura = null; //comando gera erro

let alturaOpcional: null | number = 12
alturaOpcional = null //Comando aceita null, pois temos um Union Type

type Contato = {
    nome:string,
    tell1:string,
    tell2:string|null
}

const contato1:Contato = {
    nome:'Felipe',
    tell1:'992824882',
    tell2:null
}

console.log(contato1.nome);
console.log(contato1.tell1);
console.log(contato1.tell2);

// let podeSerNulo:null = null //Não faz sentido ter uma variável que só aceite o tipo null, não tem aplicação em projetos, somente quando é um UNION TYPE, como é o caso do TELL2, que o usuário pode colocar uma string, ou não colocar nada

let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo);
podeSerNulo = "Heyy"
console.log(podeSerNulo);
podeSerNulo = null;
console.log(podeSerNulo);


// AULA 29 - DESAFIO TRANFORMAR CÓDIGO JS EM TS 
// como precisamos as variáveis contaBancaria e correntista tem formatos característicos e personalizados, é melhor criar um Tipo específico para cada um deles, pois dessa forma podemos criar mais contas bancárias e correntistas, sem precisar repetir cada vez o mesmo comando.
//

type ContaBancaria = {
  saldo:number,
  depositar:(valor:number)=>void
}

type Correntista = {
  nome:string,
  contaBancaria:ContaBancaria,
  contatos:string[]
}

let contaBancaria:ContaBancaria = {
    saldo: 3456,
    depositar(valor:number){
        this.saldo += valor
    }
}

let correntista:Correntista = {
    nome:'Ana Silva',
    contaBancaria: contaBancaria,
    contatos:['34567890', '98765432']
}

correntista.contaBancaria.depositar(6000)
console.log(correntista);






