import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent }  from './estudiantes.component';
import { TokenGuard } from '../guards/token.guard';

const routes: Routes = [
    { path: '', component: EstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
