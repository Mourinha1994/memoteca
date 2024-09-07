import { Routes } from '@angular/router';
import { FormPensamentosComponent } from './components/pensamentos/form-pensamentos/form-pensamentos.component';
import { MuralComponent } from './components/pensamentos/mural/mural.component';

export const routes: Routes = [
    { path: '', component: MuralComponent, pathMatch: 'full' },
    { path: 'criar-pensamento', component: FormPensamentosComponent },
    { path: 'listar-pensamentos', component: MuralComponent }
];