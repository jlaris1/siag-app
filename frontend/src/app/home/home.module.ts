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
import { ParicionesComponent } from '../pariciones/list/pariciones.component';
import { DashBoardComponent } from '../auth/dashboard/dashboard.component';
import { NotifierModule, NotifierOptions } from "angular-notifier";

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [ 
    HomeComponent, 
    DetallesGanadoComponent, 
    GanadoComponent, 
    NewGanadoComponent, 
    ParicionesComponent,
    DashBoardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HttpClientModule,
    AccordionModule,
    DataTablesModule,
    TableModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    GanadoService
  ]

})
export class HomeModule { }
