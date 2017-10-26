import {Injectable} from "angular2/core";
import {Http,Response} from "angular2/http";
import "rxjs/add/operator/map";  //map
import {Observable} from "rxjs/Observable";  //recoger resultados y convertirlo en json
import {Restaurante} from "../model/Restaurante"; //modelo

@Injectable()
export class RestauranteService{

    constructor(private _http: Http ){    }

    getRestaurantesUrl(){
        return this._http.get("http://localhost/slim/restaurantes-api.php/restaurantes").map(res => res.json() );
    }


}
