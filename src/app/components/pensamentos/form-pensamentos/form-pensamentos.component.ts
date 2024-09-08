import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../../../models/pensamento.model';

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
export class FormPensamentosComponent implements OnInit{

  constructor(
    private service: PensamentoService,
    private router: Router) {}

  ngOnInit(): void {
  }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listar-pensamentos"])
    })
  }

  cancelar() {
    this.router.navigate(["/listar-pensamentos"])
  }
}
