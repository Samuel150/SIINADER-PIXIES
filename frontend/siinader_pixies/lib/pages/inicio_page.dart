import 'package:flutter/material.dart';
import 'package:siinader_pixies/pages/anadir_usuario_page.dart';
import 'package:siinader_pixies/pages/eliminar_usuario.dart';

class InicioPage extends StatefulWidget {
  InicioPage({Key key, this.rol,this.nombre}) : super(key: key);
  final String rol;
  final String nombre;
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
        rol = 'DOCENTES';
        break;
      case 'kardex':
        rol = 'KARDEX';
        break;
      case 'jefeCarrera':
        rol = 'JEFE DE CARRERA';
        break;
    }
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text('SIINADER - ' + rol),
          Text('BIENVENIDO '+widget.nombre.toUpperCase()),
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