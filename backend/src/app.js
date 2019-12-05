const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
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
app.use(cors({origin: true, credentials: true}));
app.get('/api', (req, res) => res.send('SIINADER'));
app.get('/api/estudiantes/:id?', (req, res) => {
    var id = req.params.id;
    id ?
        connection.query('SELECT * FROM estudiantes WHERE idEstudiante = ?', [id], (err, results) => {
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
    connection.query('INSERT INTO estudiantes (nombre,apellido_1,apellido_2,ci,fecha_nacimiento,username,password) VALUES (?,?,?,?,?,?,?)', [nombre, apellido_1, apellido_2, ci, fecha_nacimiento, username, password], (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.put('/api/estudiantes/:id', (req, res) => {
    var id = req.params.id;
    var nombre = req.body.nombre;
    var apellido_1 = req.body.apellido_1;
    var apellido_2 = req.body.apellido_2;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var password = req.body.password;
    connection.query('UPDATE estudiantes SET nombre = ' + "'" + nombre + "'" + ',apellido_1 =' + "'" + apellido_1 + "'" + ', apellido_2 = ' + "'" + apellido_2 + "'" + ', fecha_nacimiento = ' + "'" + fecha_nacimiento + "'" + ', password  = ' + "'" + password + "'" + ' WHERE idEstudiante = ' + id, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.delete('/api/estudiantes/:id', (req, res) => {
    var id = req.params.id;
    connection.query('DELETE FROM estudiantes WHERE idEstudiante = ?' [id], (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.get('/api/docentes/:id?', (req, res) => {
    var id = req.params.id;
    id ?
        connection.query('SELECT * FROM docentes WHERE idDocente = ?' ,[id], (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        })
        :
        connection.query('SELECT * FROM docentes', (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        });
});
app.post('/api/docentes', (req, res) => {
    var nombre = req.body.nombre;
    var apellido_1 = req.body.apellido_1;
    var apellido_2 = req.body.apellido_2;
    var ci = req.body.ci;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var username = req.body.username;
    var password = req.body.password;
    connection.query('INSERT INTO docentes (nombre,apellido_1,apellido_2,ci,fecha_nacimiento,username,password) VALUES (?,?,?,?,?,?,?)',[nombre,apellido_1,apellido_2,ci,fecha_nacimiento,username,password], (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.put('/api/docentes/:id', (req, res) => {
    var id = req.params.id;
    var nombre = req.body.nombre;
    var apellido_1 = req.body.apellido_1;
    var apellido_2 = req.body.apellido_2;
    var ci = req.body.ci;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var username = req.body.username;
    var password = req.body.password;
    connection.query('UPDATE docentes SET nombre = ' + "'" + nombre + "'" + ',apellido_1 =' + "'" + apellido_1 + "'" + ', apellido_2 = ' + "'" + apellido_2 + "'" + ', fecha_nacimiento = ' + "'" + fecha_nacimiento + "'" + ', password  = ' + "'" + password + "'" + ' WHERE idDocente = ' + id, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.delete('/api/docentes/:id', (req, res) => {
    var id = req.params.id;
    connection.query('DELETE FROM docentes WHERE idDocente = ?',[id], (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
// para ver todas las materias o una en especifico
app.get('/api/materias/:id?', (req, res) => {
    var id = req.params.id;
    id ?
        connection.query('SELECT * FROM materias WHERE idMateria = ?',[id], (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        })
        :
        connection.query('SELECT * FROM materias', (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        });
});
//para ver materias, notas estudiante
app.get('/api/estudiantes/:id/materias', (req, res) => {
    var id = req.params.id;
    connection.query('SELECT nombre,idMateria,nota1er,nota2do,nota3er FROM estudiante_has_materia,materias WHERE estudiante_idEstudiante = ' + id + ' && materia_idMateria=idMateria', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
//añadir materia a estudiante
app.post('/api/estudiantes/materias', (req, res) => {
    var estudiante_idEstudiante = req.body.estudiante_idEstudiante;
    var materia_idMateria = req.body.materia_idMateria;
    connection.query('INSERT INTO estudiante_has_materia (estudiante_idEstudiante,materia_idMateria) VALUES (?,?)',[estudiante_idEstudiante,materia_idMateria], (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
//para ingresar notas al estudiante
app.put('/api/estudiantes/:idEstudiante/:idMateria', (req, res) => {
    var idEstudiante = req.params.idEstudiante;
    var idMateria = req.params.idMateria;
    var nota1er = req.body.nota1er;
    var nota2do = req.body.nota2do;
    var nota3er = req.body.nota3er;
    connection.query('UPDATE estudiante_has_materia SET nota1er = ' + "'" + nota1er + "'" + ',nota2do =' + "'" + nota2do + "'" + ', nota3er = ' + "'" + nota3er + "'" + ' WHERE estudiante_idEstudiante = ' + idEstudiante + '&& materia_idMateria = ' + idMateria, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
//para ver que docente dicta una materia especifica
app.get('/api/docentes/materias/:id', (req, res) => {
    var id = req.params.id;
    connection.query('SELECT nombre, apellido_1 FROM docente_has_materia,docentes WHERE materias_idMateria =' + id + ' && idDocente=docente_idDocente', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    });
});
app.listen(app.get('port'), () => console.log('Start server on port ' + app.get('port')));