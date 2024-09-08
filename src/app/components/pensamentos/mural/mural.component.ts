import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pensamento, PensamentoComponent } from "../../pensamento/pensamento/pensamento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    PensamentoComponent,
    CommonModule
],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {
  pensamentos: Pensamento[] = [];
}
