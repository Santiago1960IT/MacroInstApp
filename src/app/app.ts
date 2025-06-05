import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './encabezado/encabezado';
import { MenuPpal } from './menu-ppal/menu-ppal';
import { PiePagina } from './pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ RouterOutlet, Encabezado, MenuPpal, PiePagina ]
})

export class App {
  protected title = 'MacroInstApp';
}
