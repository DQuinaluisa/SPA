import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url = 'http://localhost:3000/api/'

  constructor( private http : HttpClient ) { }

  getEstu(): Observable<Object> {
    return this.http.get<Alumno[]>(`${this.url}/user`);
  } 
 
 
 getSelc(id: string){
   return this.http.get<Alumno>(`${this.url}/user/${id}`);
 }
 
 crear(data){
  return this.http.post(this.url + 'user', data);
}


  /*crearE(nombre: string, apellido: string, nickname:string, email: string, passw: string):Observable<Object>  {
    const form = new FormData()
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('nickname', nickname);
    form.append('email', email);
    form.append('passw', passw);
    
 
    return this.http.post<Object>(`${this.url}/user`, form)
  }*/
 
   eliminarEst(id: string){
     return this.http.delete(`${this.url}/user/${id}`)
   }
 
   actualizar(id: string, nombre: string, apellido: string, nickname:string, email: string, passw: string,){
     return this.http.put(`${this.url}/user/${id}`, { nombre, apellido, nickname, email, passw });
 
   }

}
