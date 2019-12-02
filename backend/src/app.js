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
app.post('/api/estudiantes', (req, res) => {
    var nombre = req.body.nombre;
    var apellido_1 = req.body.apellido_1;
    var apellido_2 = req.body.apellido_2;
    var ci = req.body.ci;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var username = req.body.username;
    var password = req.body.password;
    connection.query('INSERT INTO estudiantes (nombre,apellido_1,apellido_2,ci,fecha_nacimiento,username,password) VALUES (' + "'" + nombre + "','" + apellido_1 + "','" + apellido_2 + "','" + ci + "','" + fecha_nacimiento + "','" + username + "','" + password + "'" + ')', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.put('/api/estudiantes/:id', (req, res) => {
    var id = req.body.id;
    var nombre = req.body.nombre;
    var apellido_1 = req.body.apellido_1;
    var apellido_2 = req.body.apellido_2;
    var ci = req.body.ci;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var username = req.body.username;
    var password = req.body.password;
    connection.query('UPDATE estudiantes SET nombre = ' + "'" + nombre + "'" + ',apellido_1 =' + "'" + apellido_1 + "'" + ', apellido_2 = ' + "'" + apellido_2 + "'" + ', ci = ' + "'" + ci + "'" + ', fecha_nacimiento = ' + "'" + fecha_nacimiento + "'" + ', username = ' + "'" + username + "'" + ', password  = ' + "'" + password + "'" + ' WHERE idEstudiante = ' + id, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.listen(app.get('port'), () => console.log('Start server on port ' + app.get('port')));