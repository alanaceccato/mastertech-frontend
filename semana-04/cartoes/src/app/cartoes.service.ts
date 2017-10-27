import { Injectable } from '@angular/core';

interface Dados{
  nome: string,
  funcionarios: number,
  valor: number
}

@Injectable()
export class CartoesService {
  private dados: Dados = {
    nome: '',
    funcionarios: 0,
    valor: 0
  };

  constructor() { }
  inserirNome(nome: string){
    this.dados.nome = nome;
  }

  inserirFuncionarios(funcionarios: number){
    this.dados.funcionarios = funcionarios;
  }

  inserirValor(valor: number){
    this.dados.valor = valor;
  }

  calcularResultado(){
    return this.dados.funcionarios * this.dados.valor;
  }
}
