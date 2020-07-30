import { ColoresEnum } from '../enums/colores';
import { SexoEnum } from '../enums/sexo';
import { TiposEnum } from '../enums/tipos';
import { SituacionEnum } from '../enums/situaciones';
import { EstatusEnum } from '../enums/estatus';
import { CrianzaCompraEnum } from '../enums/crianzaCompra';

export class Vaca {
    ID: number;
    noArete: number;
    noAnimal: number;
    edad: string;
    sexo: SexoEnum;
    tipo: TiposEnum;
    color: ColoresEnum;
    estatus: EstatusEnum;
    situacion: SituacionEnum;
    crianzaCompra: CrianzaCompraEnum;
}