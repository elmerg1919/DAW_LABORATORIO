import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanSalvadorComponent } from './components/san-salvador/san-salvador.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
const routes: Routes = [
  { path: 'sansalvador',
  component: SanSalvadorComponent
},{
  path: 'inicio',
  component: HomeComponent
},{
  path: 'form',
  component: FormularioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
