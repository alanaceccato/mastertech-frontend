import {Component} from '@angular/core';
import {TarefasService} from '../tarefas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  tarefas;

  constructor(tarefasService: TarefasService) {
    this.tarefas = tarefasService.tarefas;
  }

  inserir(tituloTitulo: HTMLInputElement){
    this.tarefas.push({
      titulo: tituloTitulo.value,
      feita: false
    });

    tituloTitulo.value = '';
    console.log( this.tarefas );
  }

}
