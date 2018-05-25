import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    private headers = new Headers({'Content-Type': 'aplicattion/json'});
    usuarioObj:object = {};
    result:object = {};
    url:string = 'http://localhost/prueba-back/public/api/usuarios';

    constructor(private http:Http) {
    }


    nuevoUsuario = function (usuario) {
        this.usuarioObj = {
            "nombres": usuario.nombres,
            "apellidos": usuario.apellidos,
            "email": usuario.email,
            "password": usuario.password
        }

        this.http.post(this.url, this.usuarioObj).subscribe(
            (res:Response) => {
                this.result = res.json();
            }
        );
    };

    ngOnInit() {
        this.nuevoUsuario;
    }

}
