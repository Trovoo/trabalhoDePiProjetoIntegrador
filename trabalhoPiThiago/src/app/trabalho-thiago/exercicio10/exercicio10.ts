import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio10.html'
})
export class Exercicio10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250.00, quantidade: 10, promocao: true },
    { id: 2, nome: 'Mouse Gamer', preco: 120.50, quantidade: 3, promocao: false },
    { id: 3, nome: 'Monitor 144Hz', preco: 1200.00, quantidade: 0, promocao: false },
    { id: 4, nome: 'Headset USB', preco: 180.00, quantidade: 5, promocao: true },
    { id: 5, nome: 'Mousepad Extra Large', preco: 60.00, quantidade: 8, promocao: false }
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}