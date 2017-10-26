// Importar el núcleo de Angular
import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/Restaurante.service";
import {Restaurante} from "../model/Restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: 'app/view/restaurantes-list.html',
    directives: [ROUTER_DIRECTIVES, RestauranteService]
})

// Clase del componente donde iran los datos y funcionalidades
export class RestautantesListComponent {
    public titulo: string = "Lista de restaurantes";
    public restaurantes: Restaurante[];
    public status:string;

    constructor (private _restauranteService: RestauranteService) {
    }

    ngOnInit () {
        console.log("se ha cargado el servicio");
    }

    getRestaurantes(){
        this._restauranteService.getRestaurantes()
            .subscribe(
                result=>{
                    this.restaurantes = result.data;
                    this.status= result.status
                },error => {

                }
            );
    }
}