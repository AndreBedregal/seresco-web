import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfesorService } from 'src/app/_services/profesor.service';

@Component({
  selector: 'app-profesor-edicion',
  templateUrl: './profesor-edicion.component.html',
  styleUrls: ['./profesor-edicion.component.css']
})
export class ProfesorEdicionComponent implements OnInit {

  profesorForm = new FormGroup({
    nombres: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    apellidos: new FormControl('', [Validators.required, Validators.maxLength(50)])
  })

  id: number;
  titulo: string;
  button: string;

  constructor(private route: ActivatedRoute, private router: Router, private profesorService: ProfesorService) {
    this.id = 0;
    this.titulo = '';
    this.button = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.titulo = this.id ? `Profesor ${this.id}` : 'Nuevo profesor';
      this.button = this.id ? 'Modificar' : 'Crear';

      if (this.id) {
        this.profesorService.buscarPorId(this.id).subscribe(data => {
          this.profesorForm.get('nombres')?.setValue(data.nombres);
          this.profesorForm.get('apellidos')?.setValue(data.apellidos);
        });
      }
    });
  }

  onSubmit() {
    const profesor_ = this.profesorForm.value;
    if (this.id) {
      this.profesorService.modificar(this.id, profesor_).subscribe(data => {
        this.router.navigate(['/profesores']);
      });
    } else {
      this.profesorService.registrar(profesor_).subscribe(data => {
        this.router.navigate(['/profesores']);
      });
    }
  }

}
