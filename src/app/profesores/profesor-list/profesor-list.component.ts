import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/_model/profesor';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {

  constructor(private profesorService: ProfesorService) { }

  profesores: Profesor[] = [];

  ngOnInit(): void {
    this.profesorService.listar().subscribe(data => {
      this.profesores = data;
    });
  }

  onProfesorEliminado(profesor_: Profesor) {
    this.profesores = this.profesores.filter( profesor => profesor.id !== profesor_.id );
  }

}
