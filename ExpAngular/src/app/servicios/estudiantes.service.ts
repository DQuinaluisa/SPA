import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiantes } from '../modelos/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private url = 'http://localhost:3000/api'

  constructor( private http : HttpClient ) { }



 getEstu(): Observable<Object> {
   return this.http.get<Estudiantes[]>(`${this.url}/upl`);
 } 


getSelc(id: string){
  return this.http.get<Estudiantes>(`${this.url}/std/${id}`);
}

 crearE(nombre: string, apellido: string, email: string, passw: string, file: File): Observable<Object> {
   const form = new FormData()
   form.append('nombre', nombre);
   form.append('apellido', apellido);
   form.append('email', email);
   form.append('passw', passw);
   form.append('file', file, 'form-data');

   return this.http.post<Object>(`${this.url}/std`, form)
 }

  eliminarEst(id: string){
    return this.http.delete(`${this.url}/std/${id}`)
  }

  actualizar(id: string, nombre: string, apellido: string, email: string, passw: string,){
    return this.http.put(`${this.url}/std/${id}`, { nombre, apellido, email, passw });

  }


// Eventos de Prueba no estan en funcion todavia 

  getAll(endPoint) {
    this.http.get(this.url + endPoint).subscribe(res => {
      console.log(res);
    });
    error => {
      console.log(error);
    }
  }

  getId(id: string, endPoint: string) {
    this.http.get(this.url + endPoint + `?id=${id}`).subscribe(res => {
      console.log(res);
    });
    error => {
      console.log(error);
    }
  }


  creat(data, endPoint) {
    this.http.post(this.url + endPoint, data ).subscribe(res => {
      console.log(res);
    });
    error => {
      console.log(error);
    }
  }

  eliminar(id: string, endPoint: string) {
    this.http.delete(this.url + endPoint + `?id=${id}` ).subscribe(res => {
      console.log(res);
    });
    error => {
      console.log(error);
    }
  }

  updateData(endPoint: string, data){
    this.http.put(this.url + endPoint, data)
  .subscribe(response => {
    console.log(response)
  },
  error => {
    console.log(error)
  })
  }

}
