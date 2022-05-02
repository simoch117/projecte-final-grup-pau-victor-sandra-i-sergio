const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuestionarioDescanso = new Schema({
    usuario: {
        type: String
    },
    descripcionSueno: {
        type: Array
    }
}, {
    collection: 'cuestionarioDescanso'
});

module.exports = mongoose.model('cuestionarioDescanso', cuestionarioDescanso);