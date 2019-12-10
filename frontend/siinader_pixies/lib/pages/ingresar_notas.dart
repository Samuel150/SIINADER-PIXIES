import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class IngresarNotasPage extends StatefulWidget {
  IngresarNotasPage({Key key, this.idMateria, this.idEstudiante})
      : super(key: key);
  final String idMateria;
  final String idEstudiante;
  @override
  _IngresarNotasPageState createState() => _IngresarNotasPageState();
}

class _IngresarNotasPageState extends State<IngresarNotasPage> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController _nota1erValue;
  TextEditingController _nota2doValue;
  TextEditingController _nota3erValue;
  @override
  void initState() {
    super.initState();
    _nota1erValue = TextEditingController(text: '');
    _nota2doValue = TextEditingController(text: '');
    _nota3erValue = TextEditingController(text: '');
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('INGRESAR NOTAS'),
      content: SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Column(
            children: <Widget>[
              TextFormField(
                controller: _nota1erValue,
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'PORFAVOR INGRESA LA NOTA DEL PRIMER PARCIAL';
                  } else {
                    return null;
                  }
                },
                decoration: InputDecoration(
                  errorStyle: TextStyle(
                    color: Colors.red[800],
                    fontWeight: FontWeight.w300,
                  ),
                  labelText: 'PRIMER PARCIAL',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  disabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedErrorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  errorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                ),
                style: TextStyle(
                  color: Colors.grey[900],
                  fontSize: 13.0,
                  fontWeight: FontWeight.w200,
                ),
              ),
              TextFormField(
                controller: _nota2doValue,
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'PORFAVOR INGRESA LA NOTA DEL SEGUNDO PARCIAL';
                  } else {
                    return null;
                  }
                },
                decoration: InputDecoration(
                  errorStyle: TextStyle(
                    color: Colors.red[800],
                    fontWeight: FontWeight.w300,
                  ),
                  labelText: 'SEGUNDO PARCIAL',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  disabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedErrorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  errorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                ),
                style: TextStyle(
                  color: Colors.grey[900],
                  fontSize: 13.0,
                  fontWeight: FontWeight.w200,
                ),
              ),
              TextFormField(
                controller: _nota3erValue,
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'PORFAVOR INGRESA LA NOTA DEL TERCER PARCIAL';
                  } else {
                    return null;
                  }
                },
                decoration: InputDecoration(
                  errorStyle: TextStyle(
                    color: Colors.red[800],
                    fontWeight: FontWeight.w300,
                  ),
                  labelText: 'TERCER PARCIAL',
                  border: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  disabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  focusedErrorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                  errorBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.grey[900]),
                  ),
                ),
                style: TextStyle(
                  color: Colors.grey[900],
                  fontSize: 13.0,
                  fontWeight: FontWeight.w200,
                ),
              ),
              RaisedButton(
                child: Text('INGRESAR'),
                onPressed: () async {
                  if (_formKey.currentState.validate()) {
                    String url =
                        'http://localhost:3000/api/docentes/materias/notas';
                    dynamic data;
                    var body = {
                      'idEstudiante': widget.idEstudiante,
                      'idMateria': widget.idMateria,
                      'nota1er': _nota1erValue.text,
                      'nota2do': _nota2doValue.text,
                      'nota3er': _nota3erValue.text
                    };
                    var bodyEncoded = json.encode(body);
                    http.Response response;
                    try {
                      response = await http.put(url,
                          body: bodyEncoded,
                          headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                          });
                      data = response.body;
                    } catch (e) {
                      print(e);
                    }
                    if (data.toString().contains('"affectedRows":1')) {
                      Navigator.of(context).pop();
                    }
                  }
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}

Future<List<DropdownMenuItem<int>>> getMaterias() async {
  String url = 'http://localhost:3000/api/materias';
  List data;
  http.Response response;
  try {
    response = await http.get(url);
    data = jsonDecode(response.body);
  } catch (e) {
    print(e);
  }
  List<DropdownMenuItem<int>> items = [];
  data.forEach((materia) => items.add(
        DropdownMenuItem<int>(
          value: materia['idMateria'],
          child: Text(
            materia['nombre'],
            style: TextStyle(
              color: Colors.grey[900],
              fontSize: 13.0,
              fontWeight: FontWeight.w200,
            ),
          ),
        ),
      ));
  return items;
}
