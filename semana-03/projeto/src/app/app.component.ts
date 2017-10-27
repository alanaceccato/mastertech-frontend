import { Component } from '@angular/core';
import { ComprasService } from "./compras.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comprasApp;

  constructor(private refCompras: ComprasService) {
    this.comprasApp = refCompras.compras;
  }
}
