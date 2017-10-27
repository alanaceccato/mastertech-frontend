import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { DadosComponent } from './dados/dados.component';
import { ResultadoComponent } from './resultado/resultado.component';

import { CartoesService } from './cartoes.service';

const appRoutes: Routes = [
  { path: '', component: EntradaComponent },
  { path: 'dados', component: DadosComponent },
  { path: 'resultado', component: ResultadoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    DadosComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartoesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
