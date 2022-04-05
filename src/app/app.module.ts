import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoListComponent } from './alumnos/alumno-list/alumno-list.component';
import { AlumnoItemComponent } from './alumnos/alumno-list/alumno-item/alumno-item.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnoEdicionComponent } from './alumnos/alumno-edicion/alumno-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorEdicionComponent } from './profesores/profesor-edicion/profesor-edicion.component';
import { ProfesorListComponent } from './profesores/profesor-list/profesor-list.component';
import { ProfesorItemComponent } from './profesores/profesor-list/profesor-item/profesor-item.component';
import { ProfesorAlumnosComponent } from './profesores/profesor-alumnos/profesor-alumnos.component';
import { AlumnosAsignadosListComponent } from './profesores/profesor-alumnos/alumnos-asignados-list/alumnos-asignados-list.component';
import { AlumnosDisponiblesListComponent } from './profesores/profesor-alumnos/alumnos-disponibles-list/alumnos-disponibles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnoListComponent,
    AlumnoItemComponent,
    HeaderComponent,
    InicioComponent,
    AlumnoEdicionComponent,
    ProfesoresComponent,
    ProfesorEdicionComponent,
    ProfesorListComponent,
    ProfesorItemComponent,
    ProfesorAlumnosComponent,
    AlumnosAsignadosListComponent,
    AlumnosDisponiblesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
