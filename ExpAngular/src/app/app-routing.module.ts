import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenGuard } from './guards/token.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },
  { path: 'estudiantes', canActivate: [ TokenGuard ],  loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'lista-estudiantes', canActivate: [ TokenGuard ],  loadChildren: () => import('./lista-estudiantes/lista-estudiantes.module').then(m => m.ListaEstudiantesModule) },
  { path: 'ver-estudiante/:id', canActivate: [ TokenGuard ], loadChildren:() => import('./ver-estudiante/ver-estudiante.module').then(m => m.VerEstudianteModule) },
  { path: 'usuario', loadChildren:() => import('./usuario/usuario.module').then(m =>m.UsuarioModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
