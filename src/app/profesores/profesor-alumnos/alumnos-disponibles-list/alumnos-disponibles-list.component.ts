import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'app-alumnos-disponibles-list',
  templateUrl: './alumnos-disponibles-list.component.html',
  styleUrls: ['./alumnos-disponibles-list.component.css']
})
export class AlumnosDisponiblesListComponent implements OnInit {

  alumnos: Alumno[] = [];
  @Input() profesorId!: number;
  @Input() alumnosDisponibles: Alumno[] = [];
  @Output() alumnoAsignadoEvent = new EventEmitter<void>();


  constructor(private alumnoService: AlumnoService, private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.alumnoService.listar().subscribe((data) => {
      this.alumnos = data;
    });
  }

  asignar(alumnoId: number) {
    this.profesorService.asignarAlumno(this.profesorId, alumnoId).subscribe(() => {
      this.alumnoAsignadoEvent.emit();
    });
  }

}
