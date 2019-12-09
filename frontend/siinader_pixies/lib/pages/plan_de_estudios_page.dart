import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PlanEstudios extends StatefulWidget {
  @override
  _PlanEstudiosState createState() => _PlanEstudiosState();
}

class _PlanEstudiosState extends State<PlanEstudios> {
  int _semestreValue;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          Image.asset(
            'assets/images/estudios.jpg',
            height: 400,
          ),
          Text(
            'CARRERA DE DERECHO',
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
          semestre(_semestreValue),
        ],
      ),
    );
  }
}

Future<List<Widget>> getMaterias(int semestre) async {
  String url = 'http://localhost:3000/api/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  List list = [];
  switch (semestre) {
    case 1:
      list = data.sublist(0, 8);
      break;
    case 2:
      list = data.sublist(8, 16);
      break;
    case 3:
      list = data.sublist(16, 24);
      break;
    case 4:
      list = data.sublist(24, 32);
      break;
    case 5:
      list = data.sublist(32, 41);
      break;
    case 6:
      list = data.sublist(41, 49);
      break;
    case 7:
      list = data.sublist(49, 58);
      break;
    case 8:
      list = data.sublist(58, 67);
      break;
    default:
      list = data.sublist(0, 8);
      break;
  }
  List<Widget> materias = [];
  list.forEach((materia) => materias.add(
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
                    materia['creditos'].toString(),
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
      ));
  return materias;
}

Widget semestre(int semestreValue) {
  Widget semestre;
  switch (semestreValue) {
    case 1:
      semestre = FutureBuilder(
        future: getMaterias(1),
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
        future: getMaterias(2),
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
        future: getMaterias(3),
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
        future: getMaterias(4),
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
        future: getMaterias(5),
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
        future: getMaterias(6),
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
        future: getMaterias(7),
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
        future: getMaterias(8),
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
        future: getMaterias(1),
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
