import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';
import { Exercicio6 } from './exercicio6/exercicio6';
import { Exercicio7 } from './exercicio7/exercicio7';
import { Exercicio8 } from './exercicio8/exercicio8';
import { Exercicio9 } from './exercicio9/exercicio9';
import { Exercicio10 } from './exercicio10/exercicio10';
import { Exercicio11 } from './exercicio11/exercicio11';
import { Exercicio12 } from './exercicio12/exercicio12';
import { Exercicio13 } from './exercicio13/exercicio13';
import { Exercicio14 } from './exercicio14/exercicio14';
import { ExercicioFinal } from './exercicio-final/exercicio-final';



const routes: Routes = [
  { path: 'exercicio1', component: Exercicio1 },
  { path: 'exercicio2', component: Exercicio2 },
  { path: 'exercicio3', component: Exercicio3 },
  { path: 'exercicio4', component: Exercicio4 },
  { path: 'exercicio5', component: Exercicio5 },
  { path: 'exercicio6', component: Exercicio6 },
  { path: 'exercicio7', component: Exercicio7 },
  { path: 'exercicio8', component: Exercicio8 },
  { path: 'exercicio9', component: Exercicio9 },
  { path: 'exercicio10', component: Exercicio10 },
  { path: 'exercicio11', component: Exercicio11 },
  { path: 'exercicio12', component: Exercicio12 },
  { path: 'exercicio13', component: Exercicio13 },
  { path: 'exercicio14', component: Exercicio14 },
  { path: 'exercicioFinal', component: ExercicioFinal }










];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhoThiagoRoutingModule { }