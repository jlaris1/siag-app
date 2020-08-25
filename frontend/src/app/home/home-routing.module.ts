import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetallesGanadoComponent } from '../ganado/detalles.component';
import { GanadoComponent } from '../ganado/tables/tables.component';
import { NewGanadoComponent } from '../ganado/new-ganado/new-ganado.component';
import { ParicionesComponent } from '../pariciones/list/pariciones.component';
import { DashBoardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'ganado', component: GanadoComponent},
      { path: 'ganado/detalles/:id', component: DetallesGanadoComponent},
      { path: 'ganado/new', component: NewGanadoComponent},
      { path: 'ganado/editar/:id', component: NewGanadoComponent},  
      { path: 'ganado/palpacion/:id', component: GanadoComponent},
      { path: 'ganado/empadre/:id', component: GanadoComponent},
      { path: 'ganado/cargada/:id', component: GanadoComponent},
      { path: 'pariciones', component: ParicionesComponent},
      { path: 'dashboard', component: DashBoardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }