import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopComponent } from './top/top.component';
import { ComprasService } from "./compras.service";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    RodapeComponent,
    TopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

