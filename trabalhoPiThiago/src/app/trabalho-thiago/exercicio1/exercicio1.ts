import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio1',
  styleUrl: './exercicio1.css',
  templateUrl: './exercicio1.html',
})
export class Exercicio1 {
  mensagem: boolean = false;

  alternarMensagem(): void{
    this.mensagem = !this.mensagem;
  }
}
