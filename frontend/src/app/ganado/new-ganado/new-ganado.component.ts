import { Component, OnInit } from '@angular/core';
import { Vaca } from 'src/app/common/entities/vaca';
import { GanadoService } from '../services/ganado.service';
import { ColoresEnum } from '../../common/enums/colores';
import { SexoEnum } from '../../common/enums/sexo';
import { TiposEnum } from '../../common/enums/tipos';
import { EstatusEnum } from '../../common/enums/estatus';
import { SituacionEnum } from '../../common/enums/situaciones';
import { CrianzaCompraEnum } from '../../common/enums/crianzaCompra';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'new-ganado-app',
    templateUrl: 'new-ganado.component.html',
    styleUrls: ['new-ganado.component.css']
})

export class NewGanadoComponent implements OnInit {
    
    public form: FormGroup;
    vaca: Vaca = new Vaca();
    
    //ENUMS
    sexos: any[] = [];
    estatus: any[] = [];
    colores: any[] = [];
    tipos: any[] = [];
    situaciones: any[] = [];
    crianzasCompras: any[] = [];

    constructor(
        private readonly ganadoService: GanadoService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        public fb: FormBuilder
    ) { 
        this.form = fb.group({
            noArete: ['', [Validators.required]],
            noAnimal: ['', [Validators.required]],
            edad: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            color: ['', [Validators.required]],
            situacion: ['', [Validators.required]],
            crianzaCompra: ['', [Validators.required]],
            observaciones: []
        });

    }

    ngOnInit() { 
        this.initData();
    }

    initData(): void {
        this.vaca.sexo = null;
        this.vaca.crianzaCompra = null;
        this.vaca.tipo = null;
        this.vaca.color = null;
        this.vaca.situacion = null;

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

    submit(): void {
        const model = this.form.getRawValue();

        this.ganadoService.save(model)
          .then( response => {
              console.log(response);
              //this.form.markAsPristine();
              //this.handleSuccess();
          })
          .catch( error => {
            //this.errorHandler.handle(error);
          }
        );
    }

    private back() {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
}