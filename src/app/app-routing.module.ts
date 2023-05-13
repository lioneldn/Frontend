import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'',redirectTo: 'login' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
