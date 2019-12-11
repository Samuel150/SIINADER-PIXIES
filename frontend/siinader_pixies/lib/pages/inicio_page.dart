import 'package:flutter/material.dart';
import 'package:siinader_pixies/pages/anadir_usuario_page.dart';
import 'package:siinader_pixies/pages/eliminar_usuario.dart';
import 'package:siinader_pixies/pages/ver_usuarios.dart';

class InicioPage extends StatefulWidget {
  InicioPage({Key key, this.rol, this.nombre}) : super(key: key);
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
          Text('BIENVENIDO ' + widget.nombre.toUpperCase()),
          widget.rol == 'kardex'
              ? Column(
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        RaisedButton(
                          child: Text('AÑADIR USUARIO'),
                          onPressed: () => anadir(context),
                        ),
                        RaisedButton(
                          child: Text('ELIMINAR USUARIO'),
                          onPressed: () => eliminar(context),
                        ),
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        RaisedButton(
                          child: Text('VER ESTUDIANTES'),
                          onPressed: () => ver(context,'estudiantes'),
                        ),
                        RaisedButton(
                          child: Text('VER DOCENTES'),
                          onPressed: () => ver(context,'docentes'),
                        ),
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        RaisedButton(
                          child: Text('VER JEFES DE CARRERA'),
                          onPressed: () => ver(context,'jefeCarrera'),
                        ),
                        RaisedButton(
                          child: Text('VER KARDEX'),
                          onPressed: () => ver(context,'kardex'),
                        ),
                      ],
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
ver(BuildContext context,String rol) {
  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return VerUsuariosPage(rol: rol,);
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
