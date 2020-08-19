import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Vaca } from '../../common/entities/vaca';
import { ColoresEnum } from '../../common/enums/colores';
import { SexoEnum } from '../../common/enums/sexo';
import { TiposEnum } from '../../common/enums/tipos';
import { EstatusEnum } from '../../common/enums/estatus';
import { SituacionEnum } from '../../common/enums/situaciones';
import { CrianzaCompraEnum } from '../../common/enums/crianzaCompra';
import { GanadoService } from '../services/ganado.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})

export class GanadoComponent implements OnInit {
    page: number = 1;
    size: number = 10;

    selected: any;

    sexos: any[] = [];
    estatus: any[] = [];
    colores: any[] = [];
    tipos: any[] = [];
    situaciones: any[] = [];
    crianzasCompras: any[] = [];

    public form: FormGroup;

    /** TABLES **/
    animales: Vaca[] = [];
    dtOptions: DataTables.Settings = {};


    @ViewChild(DataTableDirective)
    @ViewChild('closeBtn') closeBtn: ElementRef;
    
    dtElement: DataTableDirective;
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private readonly ganadoService: GanadoService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly notifier: NotifierService,
        public fb: FormBuilder
        ) { 
            this.form = fb.group({
                noArete: ['', [Validators.required]],
                noAnimal: ['', [Validators.required]],
                edad: ['', [Validators.required]],
                sexo: ['', [Validators.required]],
                kgs: ['', [Validators.required]],
                tipo: ['', [Validators.required]],
                color: ['', [Validators.required]],
                situacion: ['', [Validators.required]],
                crianzaCompra: ['', [Validators.required]],
                observaciones: []
            });
    
        }

    ngOnInit() {

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

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            /* below is the relevant part, e.g. translated to spanish */ 
            language: {
                processing: "Procesando...",
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ elementos",
                info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                infoEmpty: "Mostrando ningún elemento.",
                infoFiltered: "(filtrado _MAX_ elementos total)",
                infoPostFix: "",
                loadingRecords: "Cargando registros...",
                zeroRecords: "No se encontraron registros",
                emptyTable: "No hay datos disponibles en la tabla",
                paginate: {
                    first: "Primero",
                    previous: "Anterior",
                    next: "Siguiente",
                    last: "Último"
                },
                aria: {
                    sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                    sortDescending: ": Activar para ordenar la tabla en orden descendente"
                }
            }
        }

        this.getData();
    }

    getData(): void {
        this.ganadoService.getAll(this.page, this.size)
            .then( res => {
                this.animales = res;
                this.dtTrigger.next();
            })
            .catch( error => {
                console.log(error);
            });
    }

    exportPdf() {
        /*import("jspdf").then(jsPDF => {
            import("jspdf-autotable").then(x => {
                const doc = new jsPDF.default(0,0);
                doc.autoTable(this.exportColumns, this.cars);
                doc.save('primengTable.pdf');
            })
        })*/
    }

    exportExcel() {
        /*import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.getCars());
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "primengTable");
        });*/
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        /*import("file-saver").then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });*/
    }

    onEmpadre(model: Vaca): void {
        this.ganadoService.empadre(model)
            .then( response => {
                this.notifier.notify("success", "Se actualizó correctamente la fecha de empadre del animal");
                this.router.navigate['/ganado'];
                console.log(response);
            })
            .catch( error => {
                this.notifier.notify("error", error.error);
                console.log(error);
            }
        );
    }

    onCargada(model: Vaca): void {
        model.situacion = SituacionEnum.Cargada;

        this.ganadoService.cargada(model)
            .then( response => {
                this.notifier.notify("success", "Se actualizó correctamente el estatus del animal a CARGADA");
                this.router.navigate['/ganado'];
                console.log(response);
            })
            .catch( error => {
                this.notifier.notify("error", error.error);
                console.log(error);
            }
        );
    }

    onPalpado(model: Vaca): void {
        this.ganadoService.palpado(model)
            .then( response => {
                this.notifier.notify("success", "Se actualizó correctamente la fecha de palpado del animal");
                this.router.navigate['/ganado'];
                console.log(response);
            })
            .catch( error => {
                this.notifier.notify("error", error.error);
                console.log(error);
            }
        );
    }

    onDelete(id: string): void {
        this.router.navigate['/ganado'];
        alert("eliminada")
    }

    private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }

    onParicion(): void {
        const model = this.form.getRawValue();
        console.log(model);

        model.idMadre = this.selected._id;
        model.noAreteM = this.selected.noArete;
        model.noAnimalM = this.selected.noAnimal;
        model.edadM = this.selected.edad
        model.situacionM = SituacionEnum.Parida;

        if(this.selected.tipo == TiposEnum.Vaquilla){
            model.estadoM = TiposEnum.Vaca;
        }

        this.ganadoService.parida(model)
            .then( response => {
                this.notifier.notify("success", "Se creo correctamente el nuevo animal");
                this.router.navigate['/ganado'];
                this.closeModal();
                console.log(response);
            })
            .catch( error => {
                this.notifier.notify("error", error.error);
                console.log(error);
            }
        );
    }

    selectedParicion(item: any): void {
        this.selected = item;
    }

}
