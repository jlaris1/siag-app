import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetallesGanadoComponent } from '../ganado/detalles.component';
import { GanadoComponent } from '../ganado/tables/tables.component';
import { NewGanadoComponent } from '../ganado/new-ganado/new-ganado.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
        { path: 'ganado', component: GanadoComponent,
        },
        {
          path: 'ganado/detalles/:id',
          component: DetallesGanadoComponent
        },
        {
          path: 'ganado/new',
          component: NewGanadoComponent
        }  
  ]},
  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }