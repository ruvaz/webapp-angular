// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/Restaurante.service";
import {Restaurante} from "../model/Restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: 'app/view/restaurantes-list.html',
    directives: [RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestautantesListComponent implements OnInit{  //implements OnInit
    public titulo: string = "Lista de restaurantes";
    public restaurantes: Restaurante[];
    public status:string;
    public errorMessage:string;

    constructor (private _restauranteService: RestauranteService) {    }

    ngOnInit ():any {
        console.log("  ----------- se ha cargado el servicio");
        this.getRestaurantes();
    }

    getRestaurantes(){
        this._restauranteService.getRestaurantesUrl()
            .subscribe(
                result => {

                    this.restaurantes = result.data;  //datos que llegan en json
                    this.status = result.status //status de la peticion

                    if(this.status !== "success"){  //devuelve success o error
                        alert("Error on Server");
                    }

                },error => {

                    this.errorMessage = <any>error;

                    if(this.errorMessage !== null){
                        console.log(this.errorMessage);
                        alert("Error on Request");
                    }
                }
            );
    }
}