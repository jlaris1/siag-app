import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaca } from 'src/app/common/entities/vaca';



@Injectable()
export class GanadoService {
    LOCAL_SERVER: string = 'http://localhost:3000';  

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
        return this.httpClient.get<Vaca>(`${this.LOCAL_SERVER}/${id}`).toPromise();
    }
}