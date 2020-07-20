import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstudiantesComponent } from './lista-estudiantes.component';

const routes: Routes = [
  { path: '', component: ListaEstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEstudiantesRoutingModule { }
