import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaca } from 'src/app/common/entities/vaca';
import { ParicionesComponent } from 'src/app/pariciones/list/pariciones.component';
import { Paricion } from 'src/app/common/entities/paricion';



@Injectable()
export class GanadoService {
    LOCAL_SERVER: string = 'http://192.168.1.70:3000';   // <-- for local instance
    //LOCAL_SERVER: string = 'http://35.236.85.39:3000';  // <-- for production server
    //LOCAL_SERVER: string = 'http://201.107.5.12:3000';


    constructor(
        private httpClient: HttpClient
    ) { }

    


}