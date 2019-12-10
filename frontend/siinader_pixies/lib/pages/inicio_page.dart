import 'package:flutter/material.dart';
import 'package:siinader_pixies/pages/anadir_usuario_page.dart';
import 'package:siinader_pixies/pages/eliminar_usuario.dart';

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
      case 'jefeCarrera':
        rol = 'DE JEFE DE CARRERA';
        break;
    }
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text('BIENVENIDO A TU PLATAFORMA ' + rol),
          widget.rol == 'kardex'
              ? Row(
                mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    RaisedButton(
                      child: Text('AÑADIR USUARIO'),
                      onPressed: () =>anadir(context),
                    ),
                    RaisedButton(
                      child: Text('ELIMINAR USUARIO'),
                      onPressed: () => eliminar(context),
                    ),
                  ],
                )
              : Container(),
        ],
      ),
    );
  }
}
anadir(BuildContext context) {
  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return AnadirUsuarioPage();
    },
  );
}
eliminar(BuildContext context) {
  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return EliminarUsuarioPage();
    },
  );
}