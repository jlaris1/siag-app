import { Component, OnInit, Input } from '@angular/core';
import { Vaca } from '../common/entities/vaca';

@Component({
    selector: 'app-ganado-detalles',
    templateUrl: 'detalles.component.html',
    styles: ['detalles.component.css']
})

export class DetallesGanadoComponent implements OnInit {
    @Input() selected: Vaca;
    
    constructor() { }

    ngOnInit() { 
        console.log(this.selected);
    }
} 