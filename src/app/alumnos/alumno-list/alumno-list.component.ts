import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) { }

  alumnos: Alumno[] = [];

  showAlert: boolean = false;
  messageAlert: string = '';

  ngOnInit(): void {
    this.alumnoService.listar().subscribe(data => {
      this.alumnos = data;
    });
  }

  onAlumnoEliminado(alumno_: Alumno, event: any) {
    if (event) {
      this.showAlert = true;
      this.messageAlert = event;
    } else {
      this.cerrarAlerta();
      this.alumnos = this.alumnos.filter(alumno => alumno.id !== alumno_.id);
    }
  }

  cerrarAlerta() {
    this.showAlert = false;
  }

}
