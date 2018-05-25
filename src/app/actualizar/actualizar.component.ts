import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
    selector: 'app-actualizar',
    templateUrl: './actualizar.component.html',
    styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

    id:number;
    usuarioObj:object = {};
    result:object = {};
    data:object = {};
    usuarios = [];
    url:string = 'http://localhost/prueba-back/public/api/usuarios/';

    constructor(private router:Router, private route:ActivatedRoute, private http:Http) {
    }

    actualizarUsuario = function (usuario) {
        this.http.put(this.url + this.id, usuario, {headers: this.headers})
            .toPromise()
            .then((res:Response) => {
                this.result = res.json();
                if (!res.json().error) {
                    alert(res.json().mensaje);
                    this.router.navigate(['/']);
                }
            });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params["id"];
        });

        this.http.get(this.url + this.id).subscribe(
            (res:Response) => {
                if (!res.json().error) {
                    this.data = res.json().datos;
                }
            }
        );

    }

}
