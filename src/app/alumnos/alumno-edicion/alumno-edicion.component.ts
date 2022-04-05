import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlumnoService } from 'src/app/_services/alumno.service';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {

  alumnoForm = new FormGroup({
    nombres: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    apellidos: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    genero: new FormControl('M', [Validators.required]),
  })

  id!: number;
  titulo!: string;
  button!: string;

  constructor(private route: ActivatedRoute, private router: Router, private alumnoService: AlumnoService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.titulo = this.id ? `Alumno ${this.id}` : 'Nuevo alumno';
      this.button = this.id ? 'Modificar' : 'Crear';

      if (this.id) {
        this.alumnoService.buscarPorId(this.id).subscribe(data => {
          this.alumnoForm.get('nombres')?.setValue(data.nombres);
          this.alumnoForm.get('apellidos')?.setValue(data.apellidos);
          this.alumnoForm.get('fechaNacimiento')?.setValue(data.fechaNacimiento);
          this.alumnoForm.get('genero')?.setValue(data.genero);
        });
      }
    });
  }

  onSubmit() {
    const alumno_ = this.alumnoForm.value;
    if (this.id) {
      this.alumnoService.modificar(this.id, alumno_).subscribe(() => {
        this.router.navigate(['/alumnos']);
      });
    } else {
      this.alumnoService.registrar(alumno_).subscribe(() => {
        this.router.navigate(['/alumnos']);
      });
    }
  }

}
