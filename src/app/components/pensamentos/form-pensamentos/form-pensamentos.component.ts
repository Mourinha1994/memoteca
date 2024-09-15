import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../../../models/pensamento.model';

@Component({
  selector: 'app-form-pensamentos',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
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

  formulario = new FormGroup({
    conteudo: new FormControl('', [Validators.required]),
    autoria: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required])
  });

  criarPensamento() {

    let pensamento: Pensamento = {
      id: 0,
      conteudo: this.formulario.get('conteudo')?.value ?? "",
      autoria: this.formulario.get('autoria')?.value ?? "",
      modelo: this.formulario.get('modelo')?.value ?? ""
    }

    this.service.criar(pensamento).subscribe(() => {
      this.router.navigate(["/listar-pensamentos"])
    })
  }

  cancelar() {
    this.router.navigate(["/listar-pensamentos"])
  }
}
