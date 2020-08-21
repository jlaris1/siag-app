import { Component, OnInit, Input } from '@angular/core';
import { Vaca } from '../common/entities/vaca';
import { ActivatedRoute, Router } from '@angular/router';
import { GanadoService } from './services/ganado.service';
import { SexoEnum } from '../common/enums/sexo';
import { EstatusEnum } from '../common/enums/estatus';
import { ColoresEnum } from '../common/enums/colores';
import { TiposEnum } from '../common/enums/tipos';
import { SituacionEnum } from '../common/enums/situaciones';
import { CrianzaCompraEnum } from '../common/enums/crianzaCompra';

@Component({
    selector: 'app-ganado-detalles',
    templateUrl: 'detalles.component.html',
    styles: ['detalles.component.css']
})

export class DetallesGanadoComponent implements OnInit {
    @Input() selected: Vaca;
    id: string;
    animal: Vaca = new Vaca();    

    sexos: any[] = [];
    estatus: any[] = [];
    colores: any[] = [];
    tipos: any[] = [];
    situaciones: any[] = [];
    crianzasCompras: any[] = [];
    pariciones: any[] = [];


    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly ganadoService: GanadoService
    ) { }

    ngOnInit() { 
        this.initData();

        this.id = this.route.snapshot.paramMap.get('id');
        
        if(this.id){
            this.get(this.id);
            this.getPariciones(this.id);
        }
    }

    initData(): void {
        for(let item in SexoEnum) {
            if(isNaN(Number(item))){
                this.sexos.push({text: item, value: SexoEnum[item]});
            }
        }

        for(let item in EstatusEnum) {
            if(isNaN(Number(item))){
                this.estatus.push({text: item, value: EstatusEnum[item]});
            }
        }

        for(let item in ColoresEnum) {
            if(isNaN(Number(item))){
                this.colores.push({text: item, value: ColoresEnum[item]});
            }
        }

        for(let item in TiposEnum) {
            if(isNaN(Number(item))){
                this.tipos.push({text: item, value: TiposEnum[item]});
            }
        }

        for(let item in SituacionEnum) {
            if(isNaN(Number(item))){
                this.situaciones.push({text: item, value: SituacionEnum[item]});
            }
        }

        for(let item in CrianzaCompraEnum) {
            if(isNaN(Number(item))){
                this.crianzasCompras.push({text: item, value: CrianzaCompraEnum[item]});
            }
        }
    }

    get(id: string): void {
        this.ganadoService.get(id)
            .then( res => {
                res.observaciones = res.observaciones == null ? '' : res.observaciones;
                this.animal = res;
            })
            .catch( error => {
                console.log(error);
            });
    }

    getPariciones(id: string): void {
        this.ganadoService.getPariciones(id)
            .then( res => {
                this.pariciones = res;
            })
            .catch( error => {
                console.log(error);
            });
    }
} 