import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../_model/alumno';

@Injectable({
    providedIn: 'root'
})
export class AlumnoService {

    url = `${environment.HOST}/alumnos`;

    constructor(private http: HttpClient) {
    }

    registrar(alumno: Alumno) {
        return this.http.post(this.url, alumno);
    }

    modificar(id: number, alumno: Alumno) {
        return this.http.put(`${this.url}/${id}`, alumno);
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

}
