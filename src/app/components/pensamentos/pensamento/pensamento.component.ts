import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../../../models/pensamento.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento | undefined;

  larguraPensamento(): string {
    if (this.pensamento!.conteudo?.length > 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }
}