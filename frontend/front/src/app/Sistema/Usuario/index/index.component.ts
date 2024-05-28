import { UsarioServiceService } from './../../../Servicios/usario-service.service';
import { Usuario } from './../../../Interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgFor,MatTableModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  usuarios : Usuario[] = [];
  displayedColumns: string[] = ['id','nombre','email','prioridad'];
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
