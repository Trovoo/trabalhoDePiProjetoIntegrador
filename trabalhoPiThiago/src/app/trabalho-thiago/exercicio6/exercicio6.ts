import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css'
})
export class Exercicio6 {
  listaInicial: string[] = ['Luiz', 'Ana', 'Felipe', 'Nicolly', 'Paulo'];

  nomes: string[] = [...this.listaInicial];

  removerUltimo() {
    this.nomes.pop(); 
  }

  limparLista() {
    this.nomes = []; 
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial]; 
  }
}