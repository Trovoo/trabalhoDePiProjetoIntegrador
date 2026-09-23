import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';




const routes: Routes = [
  { path: 'exercicio1', component: Exercicio1 },
  { path: 'exercicio2', component: Exercicio2 },
  { path: 'exercicio3', component: Exercicio3 },
  { path: 'exercicio4', component: Exercicio4 }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhoThiagoRoutingModule { }