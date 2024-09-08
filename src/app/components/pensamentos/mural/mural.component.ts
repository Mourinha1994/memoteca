import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pensamento, PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';
import { PensamentoService } from '../pensamento.service';

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
export class MuralComponent implements OnInit {
  pensamentos: Pensamento[] = [];

  constructor (private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((pensamentos) => {
      this.pensamentos = pensamentos;
    });
  }
  
}
