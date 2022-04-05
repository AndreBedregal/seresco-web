import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'app-alumnos-asignados-list',
  templateUrl: './alumnos-asignados-list.component.html',
  styleUrls: ['./alumnos-asignados-list.component.css']
})
export class AlumnosAsignadosListComponent implements OnInit {

  @Input()
  alumnosAsignados!: Alumno[];
  @Input() profesorId!: number;
  @Output() alumnoDesasignadoEvent = new EventEmitter<void>();


  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  desasignar(alumnoId: number) {
    this.profesorService.desasignarAlumno(this.profesorId, alumnoId).subscribe(() => {
      this.alumnoDesasignadoEvent.emit();
    });
  }

}
