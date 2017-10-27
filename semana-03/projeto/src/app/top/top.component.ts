import { Component} from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent{
  comprasTop;

  constructor(private refCompras: ComprasService) {
    this.comprasTop = refCompras.compras;
  }

}
