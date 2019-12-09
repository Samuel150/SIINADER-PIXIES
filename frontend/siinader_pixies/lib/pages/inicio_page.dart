import 'package:flutter/material.dart';

class InicioPage extends StatefulWidget {
  InicioPage({Key key, this.rol, this.id}) : super(key: key);
  final String rol;
  final String id;
  @override
  _InicioPageState createState() => _InicioPageState();
}

class _InicioPageState extends State<InicioPage> {
  @override
  Widget build(BuildContext context) {
    String rol;
    switch (widget.rol) {
      case 'estudiantes':
        rol = 'ESTUDIANTIL';
        break;
        case 'docentes':
        rol = 'DE DOCENTES';
        break;
        case 'kardex':
        rol = 'DE KARDEX';
        break;
    }
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text('BIENVENIDO A TU PLATAFORMA '+rol),
        ],
      ),
    );
  }
}
