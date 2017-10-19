import { Component } from '@angular/core';
import {TarefasService} from "../tarefas.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{
  tarefas;

  constructor(tarefasService: TarefasService){
    this.tarefas = tarefasService.tarefas;
  }
}
