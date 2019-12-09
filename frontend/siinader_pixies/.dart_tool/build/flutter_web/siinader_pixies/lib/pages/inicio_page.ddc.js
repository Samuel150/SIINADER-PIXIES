define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const inicio_page = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(inicio_page, "InicioPage.rol");
  const id$ = dart.privateName(inicio_page, "InicioPage.id");
  inicio_page.InicioPage = class InicioPage extends framework.StatefulWidget {
    get rol() {
      return this[rol$];
    }
    set rol(value) {
      super.rol = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    createState() {
      return new inicio_page._InicioPageState.new();
    }
  };
  (inicio_page.InicioPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    inicio_page.InicioPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = inicio_page.InicioPage.prototype;
  dart.addTypeTests(inicio_page.InicioPage);
  dart.setMethodSignature(inicio_page.InicioPage, () => ({
    __proto__: dart.getMethods(inicio_page.InicioPage.__proto__),
    createState: dart.fnType(inicio_page._InicioPageState, [])
  }));
  dart.setLibraryUri(inicio_page.InicioPage, "package:siinader_pixies/pages/inicio_page.dart");
  dart.setFieldSignature(inicio_page.InicioPage, () => ({
    __proto__: dart.getFields(inicio_page.InicioPage.__proto__),
    rol: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  inicio_page._InicioPageState = class _InicioPageState extends framework.State$(inicio_page.InicioPage) {
    build(context) {
      let rol = null;
      switch (this.widget.rol) {
        case "estudiantes":
        {
          rol = "ESTUDIANTIL";
          break;
        }
        case "docentes":
        {
          rol = "DE DOCENTES";
          break;
        }
        case "kardex":
        {
          rol = "DE KARDEX";
          break;
        }
      }
      return new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("BIENVENIDO A TU PLATAFORMA " + dart.notNull(rol), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0})]), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (inicio_page._InicioPageState.new = function() {
    inicio_page._InicioPageState.__proto__.new.call(this);
    ;
  }).prototype = inicio_page._InicioPageState.prototype;
  dart.addTypeTests(inicio_page._InicioPageState);
  dart.setMethodSignature(inicio_page._InicioPageState, () => ({
    __proto__: dart.getMethods(inicio_page._InicioPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(inicio_page._InicioPageState, "package:siinader_pixies/pages/inicio_page.dart");
  dart.trackLibraries("packages/siinader_pixies/pages/inicio_page", {
    "package:siinader_pixies/pages/inicio_page.dart": inicio_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inicio_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;IACA;;;;;;;AAEqB;IAAkB;;;QAJpC;QAAU;QAAU;;IAAV;IAAU;AAAO,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAShC;AACjB;AACP,cAAQ,AAAO;;;AAEQ,UAAnB,MAAM;AACN;;;;AAEmB,UAAnB,MAAM;AACN;;;;AAEiB,UAAjB,MAAM;AACN;;;AAEJ,YAAO,8BACE,yCACgC,yCACnB,sBAChB,kBAAK,AAA6B,6CAAC,GAAG;IAI9C;;;;;EACF","file":"inicio_page.ddc.js"}');
  // Exports:
  return {
    pages__inicio_page: inicio_page
  };
});

//# sourceMappingURL=inicio_page.ddc.js.map
