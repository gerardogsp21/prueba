import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private http:Http) {
    }

    usuarios = [];
    id:number;
    url:string = 'http://localhost/prueba-back/public/api/usuarios';
    private headers = new Headers({'Content-Type': 'aplicattion/json'});

    deleteUsuario = function (id) {
        if (confirm("¿Seguro que quieres eliminar el usuario?")) {
            return this.http.delete(this.url + "/" + id, {headers: this.headers}).toPromise()
                .then((res:Response) => {
                    alert(res.json().mensaje);
                    this.getUsuarios();
                });
        }
    };

    getUsuarios = function () {
        this.http.get(this.url).subscribe(
            (res:Response) => {
                this.usuarios = res.json().datos;
            }
        );
    };

    ngOnInit() {
        this.getUsuarios();
    }

}
