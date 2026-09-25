import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-cadastro-simplificado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio12.html'
})
export class Exercicio12 {
  nome = '';
  quantidade: number | null = null;
  produtos: Produto[] = [];
  mensagemErro = '';

  cadastrar(): void {
    this.mensagemErro = '';

    if (!this.nome || !this.nome.trim()) {
      this.mensagemErro = 'Informe o nome do produto.';
      return; 
    }

    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagemErro = 'A quantidade deve ser maior ou igual a zero.';
      return;
    }

    this.produtos.push({ nome: this.nome.trim(), quantidade: this.quantidade });
    this.limparCampos(); 
  }

  excluir(index: number): void {
    this.produtos.splice(index, 1);
  }

  private limparCampos(): void {
    this.nome = '';
    this.quantidade = null;
  }
}