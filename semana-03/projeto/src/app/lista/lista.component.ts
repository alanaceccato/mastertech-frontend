import { Component} from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{
  comprasNaLista;

  constructor(private refServico: ComprasService) {
    this.comprasNaLista = refServico.produtos;
  }

  retirarCarrinho(itemCarrinho){
    itemCarrinho.carrinho = false;
    this.refServico.retirarProdutoCarrinho();
  }

  inserirCarrinho(itemCarrinho){
    itemCarrinho.carrinho = true;
    this.refServico.inserirProdutoCarrinho();
  }

}
