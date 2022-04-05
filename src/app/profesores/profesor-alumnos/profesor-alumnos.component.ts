import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'app-profesor-alumnos',
  templateUrl: './profesor-alumnos.component.html',
  styleUrls: ['./profesor-alumnos.component.css']
})
export class ProfesorAlumnosComponent implements OnInit {

  id!: number;
  titulo!: string;
  alumnosAsignados: Alumno[] = [];
  alumnosDisponibles: Alumno[] = [];

  constructor(private route: ActivatedRoute,
    private profesorService: ProfesorService,
    private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      if (this.id) {
        this.profesorService.buscarPorId(this.id).pipe(switchMap((profesor_) => {
          this.titulo = `Profesor: ${profesor_.nombres} ${profesor_.apellidos}`;
          return this.profesorService.listarAlumnos(profesor_.id);
        })).pipe(switchMap((alumnosAsignados_) => {
          this.alumnosAsignados = alumnosAsignados_;
          return this.alumnoService.listar();
        })).subscribe(alumnosLista_ => {
          this.alumnosDisponibles = alumnosLista_.filter((alumno: Alumno) => !this.alumnosAsignados.map((a) => a.id).includes(alumno.id));
        });
      }
    });
  }

  onAlumnosChange() {
    this.profesorService.listarAlumnos(this.id).pipe(switchMap((alumnosAsignados_) => {
      this.alumnosAsignados = alumnosAsignados_;
      return this.alumnoService.listar();
    })).subscribe((alumnosLista_) => {
      this.alumnosDisponibles = alumnosLista_.filter((alumno: Alumno) => !this.alumnosAsignados.map((a) => a.id).includes(alumno.id));
    })
  }

}
