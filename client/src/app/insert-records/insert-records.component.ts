/**
 * @author Gabriel Velloso
 * @version 1.0 08/03/2019
 * @email gavelloso@gmail.com
 * @desc POST
 */

import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Usuario } from './../shared/model/usuario.model';
import { UsuarioService } from '../shared/services/usuario.service';
import { MzToastService } from 'ng2-materialize';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'insert-records',
  templateUrl: './insert-records.component.html',
  styleUrls: ['./insert-records.component.css']
})

export class InsertRecordsComponent implements OnInit {

    mostrarCard: boolean = false;
    usuario: Usuario;
    @Output() usuarioUpdated = new EventEmitter();

    @ViewChild('cadastroUser') cadastroUser: NgForm;

    public mask: Array<string | RegExp>;

    constructor(private _usuarioService: UsuarioService, private toastService: MzToastService) {

        this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }

  ngOnInit() {
      this.usuario = new Usuario();
  }


  onMostrarCard() {
    this.mostrarCard = !this.mostrarCard;
  }

  insertRecord() {

    if (this.cadastroUser.valid) {

    this.usuarioUpdated.emit();
    this._usuarioService.insertRecord(this.usuario)
            .subscribe( data => {
            this.toastService.show('Usuário Cadastrado!', 4000, 'red accent-1 rounded');
            this.cadastroUser.reset();
            //  this.usuario = new Usuario('', '', '', '', '');
            },
            error => {
                this.toastService.show(error.error, 4000, 'red rounded');
                console.log(error.error);
            });
        }
    }
}