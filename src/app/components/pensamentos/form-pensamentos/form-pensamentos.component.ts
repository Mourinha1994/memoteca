import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-pensamentos',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-pensamentos.component.html',
  styleUrl: './form-pensamentos.component.css'
})
export class FormPensamentosComponent {
  pensamento = {
    id: 1,
    conteudo: '',
    autoria: ''
  }

  criarPensamento() {
    alert("Pensamento criado")
  }

  cancelar() {
    alert("Acão cancelada")
  }
}
