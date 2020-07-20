import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../servicios/estudiantes.service';
import { Estudiantes } from '../modelos/estudiantes';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { error } from 'protractor';

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.scss']
})
export class VerEstudianteComponent implements OnInit {

  id: string;
  photo : Estudiantes;

  constructor( private estudiante : EstudiantesService,
               private activeRouter : ActivatedRoute,
               private router : Router 
    ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      this.id = params['id'];
      this.estudiante.getSelc(this.id)
      .subscribe(
        res => {
          this.photo = res;
        },
        error => console.log(error)
      )
    })
  }

 eliminar(id: string){
    this.estudiante.eliminarEst(id)
    .subscribe(
      res => {
        console.log(res),
          this.router.navigate(['/lista-estudiantes']);
      }, 
      error => console.log(error)
    )
 }




 actualizar(nombre: HTMLInputElement, apellido: HTMLInputElement, email: HTMLInputElement, passw: HTMLInputElement ): boolean {
  console.log(nombre, apellido, email, passw)
  this.estudiante.actualizar(this.id, nombre.value, apellido.value, email.value, passw.value  )
  .subscribe (
    res => {
      this.router.navigate(['/lista-estudiantes']);
    },
    error => console.log(error)
  )
   return false;
 }

}
