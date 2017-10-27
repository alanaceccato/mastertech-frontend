import { Component, OnInit } from '@angular/core';
import {CartoesService} from "../cartoes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  funcionarios: number;
  valor: number;
  constructor(private cartoes: CartoesService, private router: Router) { }

  enviar(){
    this.cartoes.inserirFuncionarios(this.funcionarios);
    this.cartoes.inserirValor(this.valor);

    this.router.navigate(['/resultado']);
  }

  ngOnInit() {
  }

}
