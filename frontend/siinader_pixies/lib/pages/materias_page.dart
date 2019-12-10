import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:siinader_pixies/pages/asignar_docente_page.dart';
import 'dart:convert';

import 'package:siinader_pixies/pages/inscribir_page.dart';

class MateriasPage extends StatefulWidget {
  MateriasPage({Key key, this.rol, this.id}) : super(key: key);
  final String rol;
  final String id;
  @override
  _MateriasPageState createState() => _MateriasPageState();
}

class _MateriasPageState extends State<MateriasPage> {
  int _semestreValue;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Image.asset(
          'assets/images/inscripcion.jpg',
          height: 400,
        ),
        widget.rol == 'estudiantes'
            ? Column(
                children: <Widget>[
                  Text(
                    'MIS MATERIAS',
                    style: TextStyle(fontSize: 24.0),
                  ),
                  DropdownButton(
                    items: [
                      DropdownMenuItem<int>(
                        value: 1,
                        child: Text(
                          'PRIMER SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 2,
                        child: Text(
                          'SEGUNDO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 3,
                        child: Text(
                          'TERCER SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 4,
                        child: Text(
                          'CUARTO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 5,
                        child: Text(
                          'QUINTO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 6,
                        child: Text(
                          'SEXTO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 7,
                        child: Text(
                          'SÉPTIMO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                      DropdownMenuItem<int>(
                        value: 8,
                        child: Text(
                          'OCTAVO SEMESTRE',
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontSize: 13.0,
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                    ],
                    onChanged: (int value) {
                      setState(() {
                        _semestreValue = value;
                      });
                    },
                    hint: Text(
                      'SEMESTRE',
                    ),
                    value: _semestreValue,
                  ),
                  semestre(_semestreValue, widget.id),
                ],
              )
            : widget.rol == 'docentes' ||
                    widget.rol == 'kardex' ||
                    widget.rol == 'jefeCarrera'
                ? Column(
                    children: <Widget>[
                      Text(
                        'MATERIAS',
                        style: TextStyle(fontSize: 24.0),
                      ),
                      materias(context, widget.id, widget.rol)
                    ],
                  )
                : Container(),
      ],
    );
  }
}

Future<List<Widget>> getMaterias(
    int semestre, String id) async {
  String url = 'http://localhost:3000/api/estudiantes/' + id + '/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  List<Widget> list = [];
  data.forEach((materia) => semestre == materia['semestre_cursada']
      ? list.add(
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(
                    bottom: 2.0, left: 100.0, right: 25.0),
                child: Container(
                  width: 500,
                  height: 40.0,
                  child: Center(
                    child: Text(
                      materia['nombre'],
                    ),
                  ),
                  decoration: BoxDecoration(
                    shape: BoxShape.rectangle,
                    borderRadius: BorderRadius.circular(2.0),
                    color: Colors.blue,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                    bottom: 2.0, left: 25.0, right: 100.0),
                child: Container(
                  width: 500,
                  height: 40.0,
                  child: Center(
                    child: Text(
                      materia['aula'] +
                          ' ' +
                          materia['hora_inicio'].toString() +
                          ':00 - ' +
                          (materia['hora_inicio'] + 2).toString() +
                          ':00',
                    ),
                  ),
                  decoration: BoxDecoration(
                    shape: BoxShape.rectangle,
                    borderRadius: BorderRadius.circular(2.0),
                    color: Colors.blue,
                  ),
                ),
              ),
            ],
          ),
        )
      : print('No del semestre seleccionado'));
  return list;
}

Widget semestre(int semestreValue, String id) {
  Widget semestre;
  switch (semestreValue) {
    case 1:
      semestre = FutureBuilder(
        future: getMaterias(1,id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 2:
      semestre = FutureBuilder(
        future: getMaterias(2, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 3:
      semestre = FutureBuilder(
        future: getMaterias(3, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 4:
      semestre = FutureBuilder(
        future: getMaterias(4, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 5:
      semestre = FutureBuilder(
        future: getMaterias(5, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 6:
      semestre = FutureBuilder(
        future: getMaterias(6, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 7:
      semestre = FutureBuilder(
        future: getMaterias(7, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    case 8:
      semestre = FutureBuilder(
        future: getMaterias(8, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
    default:
      semestre = FutureBuilder(
        future: getMaterias(1, id),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.hasData
              ? Column(
                  children: snapshot.data,
                )
              : CircularProgressIndicator();
        },
      );
      break;
  }
  return semestre;
}

Future<List<Widget>> getMateriasDocente(String id) async {
  String url = 'http://localhost:3000/api/docentes/' + id + '/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  List<Widget> list = [];
  data.forEach(
    (materia) => list.add(
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding:
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['nombre'],
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
          Padding(
            padding:
                const EdgeInsets.only(bottom: 2.0, left: 25.0, right: 100.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['aula'] +
                      ' ' +
                      materia['hora_inicio'].toString() +
                      ':00 - ' +
                      (materia['hora_inicio'] + 2).toString() +
                      ':00',
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
        ],
      ),
    ),
  );
  return list;
}

Future<List<Widget>> getMateriasKardex() async {
  String url = 'http://localhost:3000/api/kardex/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  List<Widget> list = [];
  data.forEach(
    (materia) => list.add(
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding:
                const EdgeInsets.only(left: 25.0, right: 10.0, bottom: 2.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['docente_nombre'] +
                      ' ' +
                      materia['apellido_1'] +
                      ' ' +
                      materia['apellido_2'],
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
          Padding(
            padding:
                const EdgeInsets.only(right: 25.0, left: 10.0, bottom: 2.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['nombre'],
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
        ],
      ),
    ),
  );
  return list;
}

Widget materias(BuildContext context, String id, String rol) {
  Widget materias;
  rol == 'docentes'
      ? materias = FutureBuilder(
          future: getMateriasDocente(id),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            return snapshot.hasData
                ? Column(
                    children: snapshot.data,
                  )
                : CircularProgressIndicator();
          },
        )
      : rol == 'kardex'
          ? materias = FutureBuilder(
              future: getMateriasKardex(),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                return snapshot.hasData
                    ? Column(
                        children: snapshot.data,
                      )
                    : CircularProgressIndicator();
              },
            )
          : materias = Column(
              children: <Widget>[
                RaisedButton(
                  child: Text('INSCRIBIR ESTUDIANTE A MATERIA'),
                  onPressed: () => inscribir(context),
                ),
                RaisedButton(
                  child: Text('ASIGNAR DOCENTE A MATERIA'),
                  onPressed: () => asignar(context),
                ),
              ],
            );
  return materias;
}

inscribir(BuildContext context) {
  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return InscribirPage();
    },
  );
}
asignar(BuildContext context) {
  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return AsignarPage();
    },
  );
}
Future<List<Widget>> asignarMaterias(BuildContext context) async {
  String url = 'http://localhost:3000/api/kardex/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  print(data);

  List<Widget> list = [];
  data.forEach(
    (materia) => list.add(
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding:
                const EdgeInsets.only(left: 25.0, right: 10.0, bottom: 2.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['docente_nombre'] +
                      ' ' +
                      materia['apellido_1'] +
                      ' ' +
                      materia['apellido_2'],
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
          Padding(
            padding:
                const EdgeInsets.only(right: 25.0, left: 10.0, bottom: 2.0),
            child: Container(
              width: 500,
              height: 40.0,
              child: Center(
                child: Text(
                  materia['nombre'],
                ),
              ),
              decoration: BoxDecoration(
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(2.0),
                color: Colors.blue,
              ),
            ),
          ),
        ],
      ),
    ),
  );
  return list;
}
