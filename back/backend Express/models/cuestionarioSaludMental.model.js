const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuestionarioSaludMental = new Schema({
    usuario: {
        type: String
    },
    estado: {
        type: String
    },
    motivo: {
        type: String
    }
}, {
    collection: 'cuestionarioSaludMental'
});

module.exports = mongoose.model('cuestionarioSaludMental', cuestionarioSaludMental);