module techdencias.controllers {
	interface IinicioController {
		titulo:string;
		activo:boolean;
		init():void;
		
	}
	
	class inicioController implements IinicioController {
		titulo:string;
		activo:boolean;
		charla: techdencias.models.Charla;
		constructor(){
			this.titulo = "hola techdencias"
			this.activo = false;
			
			var ch = new techdencias.models.Charla("Typescript y Angular","Google y Microsoft.");
			this.charla = ch;
		}
		
		init(){
			this.activo = true;
			console.log("Typescript y la madre de los tomates");
		}
	}
	angular.module("app").controller("inicioController",inicioController);
}