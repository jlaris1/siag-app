import { Component, OnInit } from '@angular/core';
import { GanadoService } from '../ganado/services/ganado.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    title: string; 

    noAnimales: number = 0;

    constructor(
        private readonly ganadoService: GanadoService,
    ) { 

    }

    ngOnInit() { 
        this.title = 'Hello World!';
        this. getNoAnimales();
    }

    getNoAnimales(): void {
        this.ganadoService.getAll(1,10)
            .then( res => {
                this.noAnimales = res.length;
            })
            .catch( error => {
                console.log(error);
            });
    }
}