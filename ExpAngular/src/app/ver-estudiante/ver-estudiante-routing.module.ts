import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerEstudianteComponent } from './ver-estudiante.component';


const routes: Routes = [
  { path:  '', component: VerEstudianteComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerEstudianteRoutingModule { }
