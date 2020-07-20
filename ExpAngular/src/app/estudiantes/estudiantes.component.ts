import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from '../servicios/estudiantes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'



@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  imageForm : FormGroup;
  image: any = "../../assets/fondo.jpg";
  file: any;
  constructor( private router : Router,
               private estudiantes : EstudiantesService        
    ) { }

  ngOnInit(): void {
    this.imageForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      passw: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required)
    })
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type.includes("image")) {
        const reader = new FileReader()
        reader.readAsDataURL(file);

        reader.onload = function load() {
          this.image = reader.result;
        }.bind(this);
        this.file = file;
      }else {
        console.log("error");
      }
    }
  }

  onSubmit(){
    const form = this.imageForm;
    if(form.valid) {
      this.estudiantes.crearE(form.value.nombre, form.value.apellido, form.value.email, form.value.passw, this.file )
      .subscribe(data => {
        this.imageForm = new FormGroup({
          nombre: new FormControl(null),
          apellido: new FormControl(null),
          email: new FormControl(null),
          passw: new FormControl(null),
          file: new FormControl(null)
          
        })
        this.image = "../../assets/fondo.jpg";
        this.router.navigate(['/lista-estudiantes']);
      })
    }
  }


 
  
  nombre: any;
  apellido: any;
  email: any;
  passw: any;
  imagePath: any;



}
