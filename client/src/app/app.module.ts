import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'ng2-materialize';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { GetRecordsComponent } from './get-records/get-records.component';
import { InsertRecordsComponent } from './insert-records/insert-records.component';

// Serviços
import { UsuarioService } from './shared/services/usuario.service';

// Mascara telefone formato https://www.npmjs.com/package/angular2-text-mask
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    GetRecordsComponent,
    InsertRecordsComponent,
  ],

  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    AppRoutingModule
  ],

  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
