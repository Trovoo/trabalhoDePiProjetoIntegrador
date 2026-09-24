import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './exercicio5.html',
  styleUrl: './exercicio5.css'
})
export class Exercicio5 {
  nomes: string[] = ['Luiz', 'Ana', 'Felipe', 'Nicolly', 'Paulo'];
}