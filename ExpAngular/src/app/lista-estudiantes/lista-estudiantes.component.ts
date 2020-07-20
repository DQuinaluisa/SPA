import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from '../servicios/estudiantes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {

 estud = [];

  constructor( private estudiantes : EstudiantesService,
               private router : Router 
          ) { }

  ngOnInit() {
    this.estudiantes.getEstu()
    .subscribe(
      (res: any) =>{
        console.log(res);
        this.estud = res.img;
        
      },
     
      err => console.log(err)
    )
  }

  selectEst(id: string){
    this.router.navigate(['/ver-estudiante', id]);
  }

  

}
