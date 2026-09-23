import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css'
})
export class Exercicio4 {
  produto = 'Teclado';
  quantidade: number = 5;

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}