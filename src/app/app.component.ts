import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { RodapeComponent } from './components/rodape/rodape.component';
import { FormPensamentosComponent } from "./components/pensamentos/form-pensamentos/form-pensamentos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CabecalhoComponent, 
    RodapeComponent, 
    FormPensamentosComponent, 
    CommonModule, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Memoteca';
}
