//AULA 84 - INTRODUCAO A NAMESPACES
//

namespace Areas {
	const PI = 3.14
	
	export function circunferencia(raio:number):number{
		return PI*raio**2
	}
	export function retangulo(base:number, altura:number):number{
		return base*altura
	}
}


console.log(Areas.circunferencia(3))
console.log(Areas.retangulo(2,4))

//NAMESPACES ANINHADOS (um namespace dentro de outro)
namespace Geometria{
export namespace Areas {
	const PI = 3.14
	
	export function circunferencia(raio:number):number{
		return PI*raio**2
	}
	export function retangulo(base:number, altura:number):number{
		return base*altura
	}
}
}

console.log(Geometria.Areas.circunferencia(2))



// AULA 86 - NAMESPACES EM MULTIPLOS ARQUIVOS 
//

///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>

console.log(GeometriaMultArq.Areas.circunferencia(10))











