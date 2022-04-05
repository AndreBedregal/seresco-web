import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoEdicionComponent } from './alumnos/alumno-edicion/alumno-edicion.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesorAlumnosComponent } from './profesores/profesor-alumnos/profesor-alumnos.component';
import { ProfesorEdicionComponent } from './profesores/profesor-edicion/profesor-edicion.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/nuevo', component: AlumnoEdicionComponent },
  { path: 'alumnos/:id', component: AlumnoEdicionComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'profesores/nuevo', component: ProfesorEdicionComponent },
  { path: 'profesores/:id', component: ProfesorEdicionComponent },
  { path: 'profesores/:id/alumnos', component: ProfesorAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
