import { UsarioServiceService } from './../../../Servicios/usario-service.service';
import { Usuario } from './../../../Interfaces/usuario';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgFor,MatCardModule,MatButton,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  usuarios : Usuario[] = [];
  displayedColumns: string[] = ['id','nombre','email','prioridad','acciones'];

  @Output() numero = new EventEmitter<number>();
  @Output() nombre = new EventEmitter<string>();

  enviarNumero(numero : number, nombre:string) {
    this.numero.emit(numero);
    this.nombre.emit(nombre); // Emite el valor 5 como ejemplo
  }

 ngOnInit(): void {
   this.usarioService.index().subscribe(
    (data: Usuario[])=>{
      this.usuarios = data;
      console.log(data);
    }
   )
 }
 constructor(public usarioService: UsarioServiceService){}


}
