import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-form-pensamentos',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './form-pensamentos.component.html',
  styleUrl: './form-pensamentos.component.css'
})
export class FormPensamentosComponent {
  pensamento:Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    alert("Pensamento criado")
  }

  cancelar() {
    alert("Acão cancelada")
  }
}
