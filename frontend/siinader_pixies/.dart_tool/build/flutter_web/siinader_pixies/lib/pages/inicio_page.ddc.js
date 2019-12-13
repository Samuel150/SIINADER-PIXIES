define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/siinader_pixies/pages/anadir_usuario_page', 'packages/siinader_pixies/pages/ver_usuarios', 'packages/siinader_pixies/pages/eliminar_usuario'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__siinader_pixies__pages__anadir_usuario_page, packages__siinader_pixies__pages__ver_usuarios, packages__siinader_pixies__pages__eliminar_usuario) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const anadir_usuario_page = packages__siinader_pixies__pages__anadir_usuario_page.pages__anadir_usuario_page;
  const ver_usuarios = packages__siinader_pixies__pages__ver_usuarios.pages__ver_usuarios;
  const eliminar_usuario = packages__siinader_pixies__pages__eliminar_usuario.pages__eliminar_usuario;
  const inicio_page = Object.create(dart.library);
  const $toUpperCase = dartx.toUpperCase;
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAnadirUsuarioPage = () => (BuildContextToAnadirUsuarioPage = dart.constFn(dart.fnType(anadir_usuario_page.AnadirUsuarioPage, [framework.BuildContext])))();
  let BuildContextToVerUsuariosPage = () => (BuildContextToVerUsuariosPage = dart.constFn(dart.fnType(ver_usuarios.VerUsuariosPage, [framework.BuildContext])))();
  let BuildContextToEliminarUsuarioPage = () => (BuildContextToEliminarUsuarioPage = dart.constFn(dart.fnType(eliminar_usuario.EliminarUsuarioPage, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 30,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 33,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C149() {
      return C149 = dart.constList([], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 9,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/inicio_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(inicio_page, "InicioPage.rol");
  const nombre$ = dart.privateName(inicio_page, "InicioPage.nombre");
  const color$ = dart.privateName(inicio_page, "InicioPage.color");
  inicio_page.InicioPage = class InicioPage extends framework.StatefulWidget {
    get rol() {
      return this[rol$];
    }
    set rol(value) {
      super.rol = value;
    }
    get nombre() {
      return this[nombre$];
    }
    set nombre(value) {
      super.nombre = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    createState() {
      return new inicio_page._InicioPageState.new();
    }
  };
  (inicio_page.InicioPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let nombre = opts && 'nombre' in opts ? opts.nombre : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[nombre$] = nombre;
    this[color$] = color;
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
    nombre: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui.Color)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C18;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C73;
  let C70;
  let C69;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C85;
  let C83;
  let C82;
  let C88;
  let C89;
  let C90;
  let C87;
  let C86;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C115;
  let C112;
  let C111;
  let C118;
  let C119;
  let C117;
  let C116;
  let C122;
  let C123;
  let C121;
  let C120;
  let C126;
  let C127;
  let C125;
  let C124;
  let C130;
  let C131;
  let C132;
  let C129;
  let C128;
  let C135;
  let C136;
  let C134;
  let C133;
  let C139;
  let C140;
  let C138;
  let C137;
  let C143;
  let C144;
  let C142;
  let C141;
  let C147;
  let C146;
  let C145;
  let C149;
  let C148;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C155;
  let C154;
  let C159;
  let C160;
  let C158;
  let C157;
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
          rol = "DOCENTES";
          break;
        }
        case "kardex":
        {
          rol = "KARDEX";
          break;
        }
        case "jefeCarrera":
        {
          rol = "JEFE DE CARRERA";
          break;
        }
      }
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new text.Text.new("SIINADER - " + dart.notNull(rol), {style: new text_style.TextStyle.new({fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("BIENVENIDO " + this.widget.nombre[$toUpperCase](), {style: new text_style.TextStyle.new({fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), this.widget.rol === "kardex" ? new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("AÑADIR USUARIO", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), onPressed: dart.fn(() => inicio_page.anadir(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("ELIMINAR USUARIO", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), onPressed: dart.fn(() => inicio_page.eliminar(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("VER ESTUDIANTES", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), onPressed: dart.fn(() => inicio_page.ver(context, "estudiantes"), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("VER DOCENTES", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), onPressed: dart.fn(() => inicio_page.ver(context, "docentes"), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91})]), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("VER JEFES DE CARRERA", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), onPressed: dart.fn(() => inicio_page.ver(context, "jefeCarrera"), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), new basic.Padding.new({padding: C0 || CT.C0, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("VER KARDEX", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), onPressed: dart.fn(() => inicio_page.ver(context, "kardex"), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133})]), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141})]), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C148 || CT.C148})]), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157});
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
  let C161;
  let C164;
  let C163;
  let C162;
  let C165;
  inicio_page.anadir = function anadir(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new anadir_usuario_page.AnadirUsuarioPage.new({$creationLocationd_0dea112b090073317d4: C161 || CT.C161}), BuildContextToAnadirUsuarioPage())});
  };
  inicio_page.ver = function ver(context, rol) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new ver_usuarios.VerUsuariosPage.new({rol: rol, $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), BuildContextToVerUsuariosPage())});
  };
  inicio_page.eliminar = function eliminar(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new eliminar_usuario.EliminarUsuarioPage.new({$creationLocationd_0dea112b090073317d4: C165 || CT.C165}), BuildContextToEliminarUsuarioPage())});
  };
  dart.trackLibraries("packages/siinader_pixies/pages/inicio_page", {
    "package:siinader_pixies/pages/inicio_page.dart": inicio_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inicio_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;IACA;;;;;;IACD;;;;;;;AAEsB;IAAkB;;;QALpC;QAAU;QAAU;QAAa;;IAAvB;IAAU;IAAa;AAAU,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUhD;AACjB;AACP,cAAQ,AAAO;;;AAEQ,UAAnB,MAAM;AACN;;;;AAEgB,UAAhB,MAAM;AACN;;;;AAEc,UAAd,MAAM;AACN;;;;AAEuB,UAAvB,MAAM;AACN;;;AAEJ,YAAO,6CACmB,2BAClB,6BACG,yCACgC,yCACnB,sBAChB,oDAES,kBACL,AAAc,6BAAE,GAAG,WACZ,wCAAoB,sHAG/B,oDAES,kBACL,AAAc,gBAAE,AAAO,AAAO,4CACvB,wCAAoB,0HAG/B,AAAO,AAAI,oBAAG,WACR,gCACoB,sBAChB,oDAES,sCACgC,yCACnB,sBAChB,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,0BACO,qCAAwB,oJAGxB,cAAM,mBAAO,OAAO,uIAGnC,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,4BACO,qCAAwB,oJAGxB,cAAM,qBAAS,OAAO,2PAM3C,oDAES,sCACgC,yCACnB,sBAChB,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,2BACO,qCAAwB,oJAGxB,cAAM,gBAAI,OAAO,EAAE,oJAGlC,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,wBACO,qCAAwB,oJAGxB,cAAM,gBAAI,OAAO,EAAE,qQAMxC,oDAES,sCACgC,yCACnB,sBAChB,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,gCACO,qCAAwB,wJAGxB,cAAM,gBAAI,OAAO,EAAE,wJAGlC,oDAES,2CACE,AAAO,0BACP,sDAGE,kBACL,sBACO,qCAAwB,wJAGxB,cAAM,gBAAI,OAAO,EAAE,yUAQ5C;IAKhB;;;;;EACF;;;;;;;;;;;;uCAEoB;AAClB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb;iCAEiB,SAAgB;AAC/B,UAAO,2CACI,OAAO,WACP,QAAc,WACd,2CACA,GAAG;EAIhB;2CAEsB;AACpB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb","file":"inicio_page.ddc.js"}');
  // Exports:
  return {
    pages__inicio_page: inicio_page
  };
});

//# sourceMappingURL=inicio_page.ddc.js.map
