import { ColoresEnum } from '../enums/colores';
import { SexoEnum } from '../enums/sexo';
import { TiposEnum } from '../enums/tipos';
import { SituacionEnum } from '../enums/situaciones';
import { EstatusEnum } from '../enums/estatus';
import { CrianzaCompraEnum } from '../enums/crianzaCompra';

export class Paricion {
    idMadre: number;
    noAreteM: number;
    noAnimalM: number;
    edadM: string;
    situacionM: SituacionEnum;
    estadoM: TiposEnum;
    noArete: number;
    noAnimal: number;
    edad: string;
    sexo: SexoEnum;
    tipo: TiposEnum;
    color: ColoresEnum;
    estatus: EstatusEnum;
    situacion: SituacionEnum;
    crianzaCompra: CrianzaCompraEnum;
    observaciones: string;
    kgs: number;
}