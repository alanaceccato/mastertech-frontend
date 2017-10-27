import { Component, OnInit } from '@angular/core';
import { CartoesService } from '../cartoes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})

export class EntradaComponent implements OnInit {
  nome: string;
  constructor(private cartoes: CartoesService, private router: Router) {

  }

  enviar(){
    this.cartoes.inserirNome(this.nome);
    this.router.navigate(['/dados']);
  }

  ngOnInit() {
  }

}
