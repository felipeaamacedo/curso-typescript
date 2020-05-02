//TIPO GENERICS
//É um outro tipo que substitui o ANY, e é utilizado quando precisa ter alguma função ou variável mais genérica, mas que mesmo assim passe pelo transpiler do TS. 
//
//

function echo(objeto:any){
	return objeto
}

console.log(echo('João').lenght)
console.log(echo(27).lenght)
console.log(echo({ nome:'João', idade: 27}))

// AULA 111 - CRIANDO UMA FUNÇÃO COM GENERICS
// SINTAX: function nomeDaFuncao <nomeTIpo>(input:nomeTipo):nomeTipo.
// no caso o <nomeTipo> usado por padrão tipo. O generics permite você criar um tipo dessa forma que é definido posteriormente durante o código o tipo é definido. 

function echoMelhorado<TIPO>(objeto: TIPO):TIPO{
	return objeto
}


console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome:'João', idade: 27}).nome)


