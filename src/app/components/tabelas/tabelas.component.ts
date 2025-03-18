import { Component } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  standalone: true,
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {
  dadosTabela1 = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 28 },
  ];

  dadosTabela2 = [
    { produto: 'Notebook', preco: 4500 },
    { produto: 'Smartphone', preco: 2200 },
    { produto: 'Monitor', preco: 1300 },
  ];
}
