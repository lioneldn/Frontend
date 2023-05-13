import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { LabyeduComponent } from './componentes/labyedu/labyedu.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaComponent,
    ContactoComponent,
    HabilidadesComponent,
    LabyeduComponent,
    LoginComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
