import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';

@Component({
  selector: 'tr[app-alumno-item]',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  @Input()
  alumno!: Alumno;
  @Output() alumnoEliminadoEvent = new EventEmitter<String>();

  mensaje: string = '';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }

  eliminar() {
    this.alumnoService.eliminar(this.alumno?.id).subscribe({
      complete: () => this.alumnoEliminadoEvent.emit(),
      error: (data) => this.alumnoEliminadoEvent.emit(data?.error?.details)
    });
  }

}
