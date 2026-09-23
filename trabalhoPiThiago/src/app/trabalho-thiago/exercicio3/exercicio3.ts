import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio3',
  styleUrl: './exercicio3.css',
  templateUrl: './exercicio3.html',
})
export class Exercicio3 {
  numero: number = 0;

  aumentar(): void{
    this.numero++;
  }

  diminuir(): void {
    if(this.numero > 0){
    this.numero--;
    }
  }
}
