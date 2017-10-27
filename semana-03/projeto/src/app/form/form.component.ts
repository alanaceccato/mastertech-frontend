import { Component} from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  produtosNoForm;



  constructor(private refCompras: ComprasService) {
    this.produtosNoForm = refCompras.produtos;
  }

  inserir(titulo: HTMLInputElement, valor: HTMLInputElement, foto: HTMLInputElement){
    this.refCompras.inserirProduto(titulo.value, valor.value, foto.value);

    titulo.value = '';
    valor.value = '';
    foto.value = '';

  }

}
