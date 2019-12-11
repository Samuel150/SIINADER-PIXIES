import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class VerNotasPage extends StatefulWidget {
  VerNotasPage({Key key, this.idEstudiante}) : super(key: key);
  final String idEstudiante;
  @override
  _VerNotasPageState createState() => _VerNotasPageState();
}

class _VerNotasPageState extends State<VerNotasPage> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('NOTAS DEL ESTUDIANTE'),
      content: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            FutureBuilder(
              future: getNotas(widget.idEstudiante),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                return snapshot.hasData
                    ? snapshot.data
                    : CircularProgressIndicator();
              },
            ),
          ],
        ),
      ),
    );
  }
}
Future<Widget> getNotas(String id) async {
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
  data.forEach(
    (materia) => list.add(
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding:
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              height: 40.0,
              width: 400.0,
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
            padding: const EdgeInsets.only(bottom: 2.0, left: 4.0, right: 4.0),
            child: Container(
              height: 40.0,
              width: 100.0,
              child: Center(
                child: Text(
                  materia['nota1er'].toString(),
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
            padding: const EdgeInsets.only(bottom: 2.0, left: 4.0, right: 4.0),
            child: Container(
              height: 40.0,
              width: 100.0,
              child: Center(
                child: Text(
                  materia['nota2do'].toString(),
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
                const EdgeInsets.only(bottom: 2.0, left: 4.0, right: 100.0),
            child: Container(
              height: 40.0,
              width: 100.0,
              child: Center(
                child: Text(
                  materia['nota3er'].toString(),
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
                const EdgeInsets.only(bottom: 2.0, left: 4.0, right: 100.0),
            child: Container(
              height: 40.0,
              width: 100.0,
              child: Center(
                child: Text(
                  ((materia['nota1er']+materia['nota2do']+materia['nota3er'])/3).round().toString(),
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
  return Column(children: list,);
}
