import 'package:flutter/material.dart';
import 'package:siinader_pixies/pages/home_page.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _key = GlobalKey<ScaffoldState>();
  TextEditingController _username;
  TextEditingController _password;
  @override
  void initState() {
    super.initState();
    _username = TextEditingController(text: '');
    _password = TextEditingController(text: '');
  }

  @override
  Widget build(BuildContext context) {
    String _usuarioValue;
    return Scaffold(
      key: _key,
      appBar: AppBar(
        title: Text('SIINADER'),
        centerTitle: true,
      ),
      body: Row(
        children: <Widget>[
          Image.asset('assets/images/UPEA.jpg'),
          Column(
            children: <Widget>[
              //       DropdownButton(
              //   items: [
              //     DropdownMenuItem<int>(
              //       value: 1,
              //       child: Text(
              //         'PRIMER SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 2,
              //       child: Text(
              //         'SEGUNDO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 3,
              //       child: Text(
              //         'TERCER SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 4,
              //       child: Text(
              //         'CUARTO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 5,
              //       child: Text(
              //         'QUINTO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 6,
              //       child: Text(
              //         'SEXTO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 7,
              //       child: Text(
              //         'SÉPTIMO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //     DropdownMenuItem<int>(
              //       value: 8,
              //       child: Text(
              //         'OCTAVO SEMESTRE',
              //         style: TextStyle(
              //           color: Colors.grey[900],
              //           fontSize: 13.0,
              //           fontWeight: FontWeight.w200,
              //         ),
              //       ),
              //     ),
              //   ],
              //   onChanged: (int value) {
              //     setState(() {
              //       _semestreValue = value;
              //     });
              //   },
              //   hint: Text(
              //     'SEMESTRE',
              //   ),
              //   value: _semestreValue,
              // ),
              Form(
                key: _formKey,
                child: Column(
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        width: 400.0,
                        child: TextFormField(
                          controller: _username,
                          validator: (value) => (value.isEmpty)
                              ? 'PORFAVOR INGRESA TU CÓDIGO DE USUARIO'
                              : null,
                          decoration: InputDecoration(
                            prefixIcon: Icon(
                              Icons.supervised_user_circle,
                              color: Colors.grey[900],
                            ),
                            errorStyle: TextStyle(
                              color: Colors.red[800],
                              fontWeight: FontWeight.w300,
                            ),
                            labelText: 'CÓDIGO',
                            labelStyle: TextStyle(
                              color: Colors.grey[900],
                              fontWeight: FontWeight.w300,
                            ),
                            border: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            disabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            focusedErrorBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            errorBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                          ),
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        width: 400.0,
                        child: TextFormField(
                          controller: _password,
                          validator: (value) => (value.isEmpty)
                              ? 'PORFAVOR INGRESA TU CONTRASEÑA'
                              : null,
                          decoration: InputDecoration(
                            prefixIcon: Icon(
                              Icons.lock_open,
                              color: Colors.grey[900],
                            ),
                            errorStyle: TextStyle(
                              color: Colors.red[800],
                              fontWeight: FontWeight.w300,
                            ),
                            labelText: 'CONTRASEÑA',
                            labelStyle: TextStyle(
                              color: Colors.grey[900],
                              fontWeight: FontWeight.w300,
                            ),
                            border: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            disabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            focusedErrorBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                            errorBorder: OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.grey[900],
                              ),
                            ),
                          ),
                          style: TextStyle(
                            color: Colors.grey[900],
                            fontWeight: FontWeight.w200,
                          ),
                        ),
                      ),
                    ),
                    RaisedButton(
                        child: Text('INGRESAR'),
                        onPressed: () async {
                          if (_formKey.currentState.validate()) {
                            //ingresar como: y de ahi agarrar para la tabla correcta
                            // String url =
                            //     'http://localhost:3000/api/estudiantes/1/';
                            // List data;
                            // http.Response response;
                            // try {
                            //   response = await http.get(url);
                            //   data = jsonDecode(response.body);
                            // } catch (e) {
                            //   print(e);
                            // }
                            String id = _username.text;
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => HomePage(
                                    rol: 'docentes', id: id, name: 'Mateo'),
                              ),
                            );
                          }
                        }),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
