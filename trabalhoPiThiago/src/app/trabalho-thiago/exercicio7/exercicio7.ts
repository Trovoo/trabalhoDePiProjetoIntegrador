import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio7.html',
  styleUrl: './exercicio7.css'
})
export class Exercicio7 {
  disciplinas: string[] = [
    'Engenharia de Software',
    'Banco de Dados',
    'Estrutura de Dados',
    'Sistemas Operacionais',
    'Redes de Computadores',
    'Programação Web'
  ];
}