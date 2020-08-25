import { Component, OnInit } from '@angular/core';
import { GanadoService } from '../ganado/services/ganado.service';
import { Vaca } from '../common/entities/vaca';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashBoardComponent implements OnInit {
    animales: Vaca[] = [];
    noAnimales: number = 0;
    noVacas: number = 0;
    noVaquillas: number = 0;
    noToros: number = 0;
    noBecerros: number = 0;
    noNovillos: number = 0;
    
    constructor(
        private readonly ganadoService: GanadoService,
    ) { } 

    ngOnInit() { 
        this. getNoAnimales();
    }


    getNoAnimales(): void {
        this.ganadoService.getAll(1,10)
            .then( res => {
                this.animales = res;
                this.noAnimales = this.animales.length;
                this.noVacas = this.animales.filter(a => a.tipo == 0).length;
                this.noVaquillas = this.animales.filter(a => a.tipo == 2).length;
                this.noToros = this.animales.filter(a => a.tipo == 1).length;
                this.noBecerros = this.animales.filter(a => a.tipo == 3).length;
                this.noNovillos = this.animales.filter(a => a.tipo == 4).length;
            })
            .catch( error => {
                console.log(error);
            });
    }
}