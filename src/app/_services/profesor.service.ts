import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../_model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  url = `${environment.HOST}/profesores`;

  constructor(private http: HttpClient) {
  }

  registrar(profesor: Profesor) {
    return this.http.post(this.url, profesor);
  }

  modificar(id: number, profesor: Profesor) {
    return this.http.put(`${this.url}/${id}`, profesor);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listar(): Observable<any> {
    return this.http.get(this.url);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  listarAlumnos(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}/alumnos`);
  }

  asignarAlumno(profesorId: number, alumnoId: number): Observable<any> {
    return this.http.post(`${this.url}/${profesorId}/alumnos/${alumnoId}`, null);
  }

  desasignarAlumno(profesorId: number, alumnoId: number): Observable<any> {
    return this.http.delete(`${this.url}/${profesorId}/alumnos/${alumnoId}`);
  }

}
