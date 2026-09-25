import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio9.html'
})
export class Exercicio9 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.00, quantidade: 10 },
    { id: 2, nome: 'Mouse Gamer', preco: 120.50, quantidade: 3 },
    { id: 3, nome: 'Monitor 144Hz', preco: 1200.00, quantidade: 0 },
    { id: 4, nome: 'Headset USB', preco: 180.00, quantidade: 5 },
    { id: 5, nome: 'Mousepad Extra Large', preco: 60.00, quantidade: 8 }
  ];
}