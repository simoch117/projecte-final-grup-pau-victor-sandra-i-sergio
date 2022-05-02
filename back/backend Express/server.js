const express = require('express');
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const CuestionarioSaludMental = require('./models/cuestionarioSaludMental.model');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://a20paumunoli:a20paumunoli_mongoDB@cluster.qpuxh.mongodb.net/ProjecteFinal?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Servidor obert al port 9000\n' + 'http://localhost:9000');
});

app.get('/', function(req, res) {

    res.json({ 'status': 'Estas en la pagina inicial' });

});

/*
const cuestionarioSaludMental = new CuestionarioSaludMental({'estado': 'bien', 'motivo': 'a', 'usuario': "626f907b5846a9104db0404f"});
    console.log(cuestionarioSaludMental);
    cuestionarioSaludMental.save()
*/

app.post('/respuesta-cuestionario-salud-mental', (req, res) => {
    let datos = req.body;

    console.log(Object.keys(datos).length)
    if (Object.keys(datos).length != 3) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Error! Falta/Sobra algún campo' });
    } else {
        if (typeof datos.usuario !== 'string' || typeof datos.estado !== 'string' || typeof datos.motivo !== 'string') {
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error! Dades enviades en un altre format' });
        } else {
            if (datos.usuario == "" || datos.estado == "" || datos.motivo == "") {
                console.log('error')
                res.status(500)
                res.json({ 'status': false, 'msg': 'Error! Algun dels camps es incorrecte o no conte informació' });
            } else {
                console.log('bien');
                const cuestionarioSaludMental = new CuestionarioSaludMental(req.body);
                cuestionarioSaludMental.save();
                res.status(201)
                res.json({ 'status': true, 'msg': 'Bien' });
            }
        }
    }
});

app.get('/deporte', function(req, res) {
    res.json({ 'status': 'Estas en la pagina deporte' });
});

app.get('/salud-mental', function(req, res) {
    res.json({ 'status': 'Estas en la pagina salud mental' });
});

app.get('/descanso', function(req, res) {
    res.json({ 'status': 'Estas en la pagina descanso' });
});