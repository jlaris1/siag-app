import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { DetallesGanadoComponent } from '../ganado/detalles.component';
import { HomeComponent } from './home.component';
import { GanadoComponent } from '../ganado/tables/tables.component';
import { NewGanadoComponent } from '../ganado/new-ganado/new-ganado.component';
import { GanadoService } from '../ganado/services/ganado.service';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DataTablesModule } from 'angular-datatables';
 

@NgModule({
  declarations: [ HomeComponent, DetallesGanadoComponent, GanadoComponent, NewGanadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HttpClientModule,
    AccordionModule,
    DataTablesModule,
    TableModule
  ],
  providers: [
    GanadoService
  ]

})
export class HomeModule { }
