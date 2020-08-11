import { Component, OnInit, Output, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class GanadoComponent implements OnInit {
    page: number = 1;
    size: number = 10;

    selected: Vaca;

    sexos: any[] = [];
    estatus: any[] = [];
    colores: any[] = [];
    tipos: any[] = [];
    situaciones: any[] = [];
    crianzasCompras: any[] = [];

    

    /** TABLES **/
    animales: Vaca[] = [];
    dtOptions: DataTables.Settings = {};


    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private readonly ganadoService: GanadoService
    ) { }

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
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            }
        );
    }

    onCargada(model: Vaca): void {
        model.situacion = SituacionEnum.Cargada;

        this.ganadoService.cargada(model)
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            }
        );
    }

    onPalpado(model: Vaca): void {
        this.ganadoService.palpado(model)
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            }
        );
    }

    onDelete(id: string): void {
        alert("eliminada")
    }

}
