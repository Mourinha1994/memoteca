import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-delete-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './delete-pensamento.component.html',
  styleUrl: './delete-pensamento.component.css'
})
export class DeletePensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos'])
  }
}
