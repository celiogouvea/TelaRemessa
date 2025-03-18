import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelasComponent } from './components/tabelas/tabelas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, FormularioComponent, TabelasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cemu';
}
