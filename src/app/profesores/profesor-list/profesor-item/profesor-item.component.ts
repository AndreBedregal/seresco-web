import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profesor } from 'src/app/_model/profesor';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'tr[app-profesor-item]',
  templateUrl: './profesor-item.component.html',
  styleUrls: ['./profesor-item.component.css']
})
export class ProfesorItemComponent implements OnInit {

  @Input() profesor!: Profesor;
  @Output() profesorEliminado = new EventEmitter<void>();

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  eliminar() {
    this.profesorService.eliminar(this.profesor?.id).subscribe(() => {
      this.profesorEliminado.emit();
    });
  }

}
