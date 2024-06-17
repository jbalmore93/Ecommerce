import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  @Input() cantidad:number= 0;
  @Input() numero:number= 4;
  @Input() nombre:string= "";
}
