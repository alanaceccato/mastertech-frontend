import { Component } from '@angular/core';
import {TarefasService} from '../tarefas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{
  tarefasNaLista;

  constructor(tarefasService: TarefasService){
    this.tarefasNaLista = tarefasService.tarefas;
  }

  fazerTarefa( tarefaParam ){
    tarefaParam.feita = true;
    console.log( this.tarefasNaLista );
  }
}
