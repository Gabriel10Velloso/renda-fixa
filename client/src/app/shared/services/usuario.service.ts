import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { Usuario } from './../model/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

    // URL Environment (Dev.)
    private url: string = environment.apiURL + 'usuarios';
    private url2: string = environment.apiURL + 'cadastro';

    usuarios: Usuario[];

    constructor(private http: HttpClient) { }

    getRecords() {
        return this.http.get(this.url)
        .pipe(
            map((res: any) => {
                return res.usuarios;
            })
        );
    }

    insertRecord(usuario: Usuario): Observable<Usuario> {
        return this.http.post(this.url2, usuario)
        .pipe(
            map((res: any) => {
                return res.usuario;
            }),
            catchError( error => {
                return throwError(error.error);
            })
        );
    }
}
