import { Injectable } from '@angular/core';

@Injectable()
export class ComprasService {
  compras = {
    feita: 0,
    naoFeita: 5,
    total: 5
  };
  produtos = [{
    tituloProduto: 'Bola de Futebol',
    valorProduto: '100,00',
    fotoProduto: 'http://www.brasilalemanhanews.com.br/wp-content/uploads/2017/02/Bola-Champions-League-2017-300x150.jpg',
    carrinho: false
  },{
    tituloProduto: 'Calça Jeans',
    valorProduto: '300,00',
    fotoProduto: 'https://t1.uc.ltmcdn.com/pt/images/4/1/0/img_como_combinar_uma_calca_branca_17014_300_150.jpg',
    carrinho: false
  },{
    tituloProduto: 'Tênis Nike',
    valorProduto: '500,00',
    fotoProduto: 'http://www.tenis-para-corrida.com/wp-content/uploads/2017/04/NI_AI_ST_20_TPC-300x150.jpg',
    carrinho: false
  },{
    tituloProduto: 'Armação',
    valorProduto: '50,00',
    fotoProduto: 'http://oculosshop.net/wp-content/uploads/2011/12/0PH2086__5001-300x150.jpg',
    carrinho: false
  },{
    tituloProduto: 'Pneu SUV',
    valorProduto: '150,00',
    fotoProduto: 'http://totalpneusindaiatuba.com/Pneus/Sunny/SUV/sn3606.jpg',
    carrinho: false
  }];

  constructor() { }

  inserirProduto(titulo: string, valor: string, foto: string) {
    this.produtos.unshift({
      tituloProduto: titulo,
      valorProduto: valor,
      fotoProduto: foto,
      carrinho: false
    });

    this.compras.naoFeita = this.produtos.length;
    this.compras.total = this.produtos.length;
  }

  retirarProdutoCarrinho(){
    this.compras.naoFeita = this.compras.naoFeita + 1;
    this.compras.feita = this.compras.feita - 1;
  }

  inserirProdutoCarrinho(){
    this.compras.feita = this.compras.feita + 1;
    this.compras.naoFeita = this.compras.naoFeita - 1;
  }
}
