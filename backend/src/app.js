const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '123456789', database: 'siinader' });
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the MySQL server');
    }
});

app.set('port', 3000);
app.use(express.json());

app.get('/api', (req, res) => res.send('SIINADER'));
app.get('/api/estudiantes/:id?', (req, res) => {
    var id = req.params.id;
    id ?
        connection.query('SELECT * FROM estudiantes WHERE idEstudiante = ' + id, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        })
        :
        connection.query('SELECT * FROM estudiantes', (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        });
});
// app.post('/api/estudiantes',(req, res) => {
//     return res.send(req.body.nombre);
//     // connection.query('INSERT INTO estudiantes (nombre,apellido_1,apellido_2,ci,fecha_nacimiento,username,password) VALUES ('Weimar','Torres','Herrera',654321,'1998-03-08','Weimar98','123456');', (err, results) => {
//     //     if (err) {
//     //         return res.send(err);
//     //     } else {
//     //         return res.send(results);
//     //     }
//     // });
// });
app.listen(app.get('port'), () => console.log('Start server on port ' + app.get('port')));