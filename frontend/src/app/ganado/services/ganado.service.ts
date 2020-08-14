import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaca } from 'src/app/common/entities/vaca';



@Injectable()
export class GanadoService {
     LOCAL_SERVER: string = 'http://localhost:3000';   // <-- for local instance
    //LOCAL_SERVER: string = 'http://35.236.85.39/:3000';  // <-- for production server

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll(page: number, size: number): Promise<Vaca[]> {
        return this.httpClient.get<Vaca[]>(`${this.LOCAL_SERVER}/ganado?page=${page}&size=${size}`).toPromise();
    }

    save(model: Vaca): Promise<any> {
        return this.httpClient.post<any>(`${this.LOCAL_SERVER}/ganado/save`, model).toPromise();
    }

    get(id: string): Promise<Vaca> {
        return this.httpClient.get<Vaca>(`${this.LOCAL_SERVER}/ganado/detalles?id=${id}`).toPromise();
    }

    update(id: string, model: Vaca,): Promise<any> {
        return this.httpClient.put<any>(`${this.LOCAL_SERVER}/ganado/update/${id}`, model).toPromise();
    }

    palpado(model: Vaca): any {
        return this.httpClient.post<any>(`${this.LOCAL_SERVER}/ganado/palpado`, model).toPromise();
    }

    empadre(model: Vaca): any {
        return this.httpClient.post<any>(`${this.LOCAL_SERVER}/ganado/empadre`, model).toPromise();
    }

    cargada(model: Vaca): any {
        return this.httpClient.post<any>(`${this.LOCAL_SERVER}/ganado/cargada`, model).toPromise();
    }

}
