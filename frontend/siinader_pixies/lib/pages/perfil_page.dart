import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PerfilPage extends StatefulWidget {
  PerfilPage({Key key, this.rol, this.id}) : super(key: key);
  final String rol;
  final String id;
  @override
  _PerfilPageState createState() => _PerfilPageState();
}

class _PerfilPageState extends State<PerfilPage> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        FutureBuilder(
          future: getDatos(widget.id,widget.rol),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            return snapshot.hasData
                ? Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: snapshot.data,
                  )
                : CircularProgressIndicator();
          },
        ),
        Image.asset(
          'assets/images/perfil.png',
          height: 400.0,
        ),
      ],
    );
  }
}

Future<List<Widget>> getDatos(String id,String rol) async {
  String idTabla;
  switch (rol) {
    case 'estudiantes':
      idTabla = 'idEstudiante';
      break;
    case 'docentes':
      idTabla = 'idDocente';
      break;
      case 'kardex':
      idTabla = 'idKardex';
      break;
      case 'jefeCarrera':
      idTabla = 'idJefeCarrera';
      break;
  }
  String url = 'http://localhost:3000/api/'+rol+'/'+id;
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
    (perfil) => list.add(
      Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding:
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              width: 400.0,
              height: 40.0,
              child: Center(
                child: Text(
                  perfil['nombre'],
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
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              width: 400.0,
              height: 40.0,
              child: Center(
                child: Text(
                  perfil['ci'].toString(),
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
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              width: 400.0,
              height: 40.0,
              child: Center(
                child: Text(
                  perfil[idTabla].toString(),
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
                const EdgeInsets.only(bottom: 2.0, left: 100.0, right: 25.0),
            child: Container(
              width: 400.0,
              height: 40.0,
              child: Center(
                child: Text(
                  perfil['fecha_nacimiento'].toString().substring(0, 10),
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
