import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';
  entrega: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio-final.html',
  styleUrl: './exercicio-final.css'
})
export class ExercicioFinal {

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Vendas',
      equipe: 'Equipe Alpha',
      nota: 8,
      status: 'desenvolvimento',
      entrega: '30/09/2026'
    },
    {
      id: 2,
      titulo: 'Aplicativo Financeiro',
      equipe: 'Equipe Beta',
      nota: 5,
      status: 'testes',
      entrega: '05/10/2026'
    },
    {
      id: 3,
      titulo: 'Site Institucional',
      equipe: 'Equipe Gamma',
      nota: 9,
      status: 'concluido',
      entrega: '20/09/2026'
    },
    {
      id: 4,
      titulo: 'Sistema de Estoque',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entrega: '15/10/2026'
    },
    {
      id: 5,
      titulo: 'Dashboard Administrativo',
      equipe: 'Equipe Alpha',
      nota: 7,
      status: 'concluido',
      entrega: '18/09/2026'
    }
  ];

  mostrarConcluidos = true;

  get projetosFiltrados(): Projeto[] {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }

    return this.projetos.filter(
      projeto => projeto.status !== 'concluido'
    );
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter(
      projeto => projeto.status === 'concluido'
    ).length;
  }

  alterarStatus(projeto: Projeto): void {
    const status: Projeto['status'][] = [
      'planejamento',
      'desenvolvimento',
      'testes',
      'concluido'
    ];

    const indiceAtual = status.indexOf(projeto.status);
    const proximoIndice = (indiceAtual + 1) % status.length;

    projeto.status = status[proximoIndice];
  }

  classeStatus(status: Projeto['status']): string {
    return `status-${status}`;
  }

  nomeStatus(status: Projeto['status']): string {
    switch (status) {
      case 'planejamento':
        return 'Planejamento';

      case 'desenvolvimento':
        return 'Desenvolvimento';

      case 'testes':
        return 'Testes';

      case 'concluido':
        return 'Concluído';
    }
  }
}