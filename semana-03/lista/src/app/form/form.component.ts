import {Component} from '@angular/core';
import {TarefasService} from '../tarefas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  tarefasNoForm;

  constructor(private refTarefas: TarefasService) {
    this.tarefasNoForm = refTarefas.tarefas;
  }

  inserir(input: HTMLInputElement){
   this.refTarefas.inserirTarefa(input.value);

    input.value = '';
  }

}
