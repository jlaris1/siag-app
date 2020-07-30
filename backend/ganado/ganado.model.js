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
    crianzaCompra: CrianzaCompraEnum;*/


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
    }
}, {
    timestamps: true
});

module.exports = ganadoSchema;