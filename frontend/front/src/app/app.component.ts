import { IndexComponent } from './Sistema/Usuario/index/index.component';
import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';import { FlexLayoutModule } from '@angular/flex-layout';
import { CarritoComponent } from './Sistema/carrito/carrito.component';
import { CommonModule } from '@angular/common';
{}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexComponent,MatToolbarModule,MatIconModule,MatButton,
    FlexLayoutModule, CarritoComponent,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  mostrar:boolean = true;
  cantidad: number = 0;
  nombre: string = "";

  manejarNumeroEmitido(valor: number) {
    this.cantidad = valor;
  }
  manejarNombreEmitido( nombre:string) {

    this.nombre = nombre;
  }

  comprar(){
    this.mostrar = !this.mostrar;
  }
}
