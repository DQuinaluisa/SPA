import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TokenGuard } from './guards/token.guard';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from "@angular/forms";   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { LoginComponent } from './login/login.component';
import { VerEstudianteComponent } from './ver-estudiante/ver-estudiante.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ListaEstudiantesComponent,
    LoginComponent,
    VerEstudianteComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ TokenGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
