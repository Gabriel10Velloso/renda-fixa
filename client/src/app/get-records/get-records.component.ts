/**
 * @author Gabriel Velloso
 * @version 1.0 08/03/2019
 * @email gavelloso@gmail.com
 * @desc GET
 */

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/model/usuario.model';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
    selector: 'get-records',
    templateUrl: './get-records.component.html',
    styleUrls: ['./get-records.component.css']
})
export class GetRecordsComponent implements OnInit {

    mostrarCard: boolean = false;
    usuarios: Usuario[];
    usuario: Usuario;
    nameSplit;
    selectedItem = {};
    show;

    constructor(private _usuarioService: UsuarioService) { }

    ngOnInit() {
        this.getRecords();
    }

    onMostrarCard() {
        this.mostrarCard = !this.mostrarCard; // vira card - show - "Cadastre-se - Usuários"
    }

    onMostrarCard2(usuario, item) {
        this.selectedItem[item] = usuario; // retorna posição para alterar o css no local correto.
    }

    // escuto o evento após criar um novo usiário e chamo listar usuarios.
    handleGetUser(): void {
        setTimeout(() => {
            this.getRecords();
        }, 500);
    }

    getRecords() {
        this._usuarioService.getRecords().subscribe(res => {
            this.usuarios = res;
        });
    }

    // Print Primeiro Nome e o Nome do Meio
    getShortName(nome) {
        this.nameSplit = nome.split(' ');

        if (this.nameSplit[1]) {
            return this.nameSplit[0] + ' ' + this.nameSplit[1];
        }
        return this.nameSplit[0];
    }
}
