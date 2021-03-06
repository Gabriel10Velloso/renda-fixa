### https://stackblitz.com/edit/angular-3pxz51?file=src%2Fapp%2Fapp.component.html
### https://stackblitz.com/edit/angular-color-div-onclick?file=src%2Fapp%2Fclick-color.directive.ts
### https://stackoverflow.com/questions/51719858/how-to-change-div-background-color-on-click-in-angular-6


```
<hello name="{{ name }}"></hello>


<div clickColor>
  Hello World from Angular
</div>

<div clickColor color='blue'>
   Angular  World
</div>

<div clickColor [color]="'#000'">
 Batman !!!
</div>
```


```
import { Directive, HostBinding, Input,HostListener} from '@angular/core';
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Directive({
  selector: '[clickColor]'
})
export class ClickColorDirective {

  private toggle: boolean = false;
  @Input() color: string = 'red';

  constructor(private doms: DomSanitizer) { }

  @HostBinding('style') get myStyle(): SafeStyle {
    let style : string = this.toggle ? `background: ${this.color}` : '';
    return this.doms.bypassSecurityTrustStyle(style);
  }
  
  @HostListener('click') onClick() {
    this.toggle = !this.toggle;
  } 

}
```

# Servidor Nodje
 - npm install
 - npm start  -- http://localhost:3000

# Banco MongoDb
 - mongod  I NETWORK  [initandlisten] waiting for connections on port 27017
 - Db chamado teste_db.

# Client
 - Rodar ./client npm start -- http://localhost:4200
 - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
