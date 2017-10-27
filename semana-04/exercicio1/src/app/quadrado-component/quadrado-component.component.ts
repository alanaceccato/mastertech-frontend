import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado-component',
  templateUrl: './quadrado-component.component.html',
  styleUrls: ['./quadrado-component.component.scss']
})
export class QuadradoComponentComponent implements OnInit {
  texto: string;
  divQuadrado;

  constructor() { }

  ngOnInit() {
  }

  onEnter(valueTexto){
    this.texto = valueTexto.value;
    valueTexto.style.display = "none";
  }

  verifyTexto(quadrado){
    if(this.texto){
      quadrado.style.display = "none";
    }
  }

}
