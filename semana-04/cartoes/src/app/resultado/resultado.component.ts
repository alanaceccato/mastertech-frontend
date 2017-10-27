import { Component, OnInit } from '@angular/core';
import {CartoesService} from "../cartoes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  resultado: number;
  constructor(private cartoes: CartoesService, private router: Router) {
    this.resultado = this.cartoes.calcularResultado();
  }

  ngOnInit() {
  }

}
