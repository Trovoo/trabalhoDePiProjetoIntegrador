import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Prioridade = 'baixa' | 'media' | 'alta';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: Prioridade;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.css'
})
export class Exercicio13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Levantar requisitos', responsavel: 'Ana',   prioridade: 'alta',  concluida: false },
    { id: 2, titulo: 'Criar wireframes',    responsavel: 'Bruno', prioridade: 'media', concluida: true },
    { id: 3, titulo: 'Configurar ambiente', responsavel: 'Carla', prioridade: 'baixa', concluida: true },
    { id: 4, titulo: 'Implementar login',   responsavel: 'Diego', prioridade: 'alta',  concluida: false },
    { id: 5, titulo: 'Revisar documentação',responsavel: 'Elisa', prioridade: 'media', concluida: false },
    { id: 6, titulo: 'Escrever testes',     responsavel: 'Fábio', prioridade: 'baixa', concluida: false }
  ];

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  alternarStatus(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  classePrioridade(prioridade: string): string {
    return 'prioridade-' + prioridade;
  }
}