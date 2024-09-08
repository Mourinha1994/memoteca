import { Routes } from '@angular/router';
import { FormPensamentosComponent } from './components/pensamentos/form-pensamentos/form-pensamentos.component';
import { MuralComponent } from './components/pensamentos/mural/mural.component';
import { DeletePensamentoComponent } from './components/pensamentos/delete-pensamento/delete-pensamento.component';

export const routes: Routes = [
    { path: '', component: MuralComponent, pathMatch: 'full' },
    { path: 'criar-pensamento', component: FormPensamentosComponent },
    { path: 'listar-pensamentos', component: MuralComponent },
    { path: 'pensamentos/excluir-pensamento/:id', component: DeletePensamentoComponent}
];