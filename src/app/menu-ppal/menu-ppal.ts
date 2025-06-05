import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nosotros } from "../nosotros/nosotros";
import { Servicios } from "../servicios/servicios";
import { Obras } from '../obras/obras';
import { Clientes } from '../clientes/clientes';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-menu-ppal',
  imports: [ CommonModule, Nosotros, Servicios, Obras, Clientes, Contacto ],
  templateUrl: './menu-ppal.html',
  styleUrl: './menu-ppal.css'
})

export class MenuPpal {
  selectedComponent: string = "nosotros";
  onMenuSelect(componentName: string) {
    this.selectedComponent = componentName;
  }
}
