import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number; 
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-cadastro-simplificado-moderno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio14.html',
})
export class Exercicio14 {
  nome = '';
  quantidade: number | null = null;
  produtos: Produto[] = [];
  mensagemErro = '';
  private proximoId = 1;

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

    this.produtos.push({ id: this.proximoId++, nome: this.nome.trim(), quantidade: this.quantidade });
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