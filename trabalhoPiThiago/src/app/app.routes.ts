import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'trabalho-thiago',
    loadChildren: () => import('./trabalho-thiago/trabalho-thiago-module').then(m => m.TrabalhoThiagoModule)
  }
];