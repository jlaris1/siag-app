const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*ID: number;
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
    fecha_empadre: Date;
    fecha_cargado: Date;
    fecha_palpacion: Date;
*/


const ganadoSchema = new Schema({
    noArete: {
        type: Number,
        required: true,
        unique: true
    },
    noAnimal: {
        type: Number,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    sexo: {
        type: Number,
        required: true
    },
    tipo: {
        type: Number,
        required: true
    },
    color: {
        type: Number,
        required: true
    },
    estatus: {
        type: Number,
        required: false
    },
    situacion: {
        type: Number,
        required: true
    },
    crianzaCompra: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String,
        required: false
    },
    kgs: {
        type: Number
    },
    fecha_empadre: {
        type: Date,
        required: false,
        default: new Date()
    },
    fecha_cargado: {
        type: Date,
        required: false,
        default: new Date()
    },
    fecha_palpacion: {
        type: Date,
        required: false,
        default: new Date()
    }
}, {
    timestamps: true
});

module.exports = ganadoSchema;