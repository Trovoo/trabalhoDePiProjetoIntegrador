import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-exercicio2',
  styleUrl: './exercicio2.css',
  templateUrl: './exercicio2.html',
})
export class Exercicio2 {
  usuario: boolean = false;

  aleternarLogin (): void{
    this.usuario = !this.usuario;
  }
}
