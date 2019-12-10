define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/http/http', 'packages/flutter/src/rendering/animated_size', 'packages/siinader_pixies/pages/inscribir_page', 'packages/siinader_pixies/pages/asignar_docente_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__http__http, packages__flutter__src__rendering__animated_size, packages__siinader_pixies__pages__inscribir_page, packages__siinader_pixies__pages__asignar_docente_page) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const colors = packages__flutter__material.src__material__colors;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const http = packages__http__http.http;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const inscribir_page = packages__siinader_pixies__pages__inscribir_page.pages__inscribir_page;
  const asignar_docente_page = packages__siinader_pixies__pages__asignar_docente_page.pages__asignar_docente_page;
  const materias_page = Object.create(dart.library);
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let DropdownButtonOfint = () => (DropdownButtonOfint = dart.constFn(dropdown.DropdownButton$(core.int)))();
  let DropdownMenuItemOfint = () => (DropdownMenuItemOfint = dart.constFn(dropdown.DropdownMenuItem$(core.int)))();
  let JSArrayOfDropdownMenuItemOfint = () => (JSArrayOfDropdownMenuItemOfint = dart.constFn(_interceptors.JSArray$(DropdownMenuItemOfint())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let FutureBuilderOfListOfWidget = () => (FutureBuilderOfListOfWidget = dart.constFn(async$.FutureBuilder$(ListOfWidget())))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let BuildContextToInscribirPage = () => (BuildContextToInscribirPage = dart.constFn(dart.fnType(inscribir_page.InscribirPage, [framework.BuildContext])))();
  let BuildContextToAsignarPage = () => (BuildContextToAsignarPage = dart.constFn(dart.fnType(asignar_docente_page.AsignarPage, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 72,
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
        [_Location_column]: 32,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 70,
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
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
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
        [_Location_column]: 32,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C92() {
      return C92 = dart.constList([], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 100
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 25
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 288,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 327,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204, C205 || CT.C205], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 320,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 359,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 353,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 63,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 377,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.constList([C230 || CT.C230, C231 || CT.C231, C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C229 || CT.C229,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236, C237 || CT.C237], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 350,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 25
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 426,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 425,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C250 || CT.C250,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 422,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 419,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 449,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 448,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265], widget_inspector._Location);
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 447,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 446,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 452,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.constList([C268 || CT.C268, C269 || CT.C269, C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C267 || CT.C267,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 444,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274, C275 || CT.C275], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C273 || CT.C273,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 441,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278, C279 || CT.C279], widget_inspector._Location);
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C277 || CT.C277,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 416,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282], widget_inspector._Location);
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C281 || CT.C281,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 476,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 11,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286, C287 || CT.C287], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 469,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290], widget_inspector._Location);
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C289 || CT.C289,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 484,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 487,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 15,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.constList([C294 || CT.C294, C295 || CT.C295], widget_inspector._Location);
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C293 || CT.C293,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 480,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 493,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.constList([C301 || CT.C301, C302 || CT.C302], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C300 || CT.C300,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.constList([C305 || CT.C305], widget_inspector._Location);
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C304 || CT.C304,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 497,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.constList([C308 || CT.C308, C309 || CT.C309], widget_inspector._Location);
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C307 || CT.C307,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 496,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 491,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312], widget_inspector._Location);
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C311 || CT.C311,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 490,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 509,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 517,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 550,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 546,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 546,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 545,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 543,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 544,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 554,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323, C324 || CT.C324, C325 || CT.C325, C326 || CT.C326], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 542,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 540,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 542,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.constList([C329 || CT.C329, C330 || CT.C330], widget_inspector._Location);
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C328 || CT.C328,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 539,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 569,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333], widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C332 || CT.C332,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 568,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 568,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 567,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 572,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.constList([C339 || CT.C339, C340 || CT.C340, C341 || CT.C341, C342 || CT.C342], widget_inspector._Location);
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C338 || CT.C338,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 564,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 562,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 564,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345, C346 || CT.C346], widget_inspector._Location);
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 561,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 537,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.constList([C349 || CT.C349, C350 || CT.C350], widget_inspector._Location);
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C348 || CT.C348,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 536,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(materias_page, "MateriasPage.rol");
  const id$ = dart.privateName(materias_page, "MateriasPage.id");
  materias_page.MateriasPage = class MateriasPage extends framework.StatefulWidget {
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
      return new materias_page._MateriasPageState.new();
    }
  };
  (materias_page.MateriasPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    materias_page.MateriasPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = materias_page.MateriasPage.prototype;
  dart.addTypeTests(materias_page.MateriasPage);
  dart.setMethodSignature(materias_page.MateriasPage, () => ({
    __proto__: dart.getMethods(materias_page.MateriasPage.__proto__),
    createState: dart.fnType(materias_page._MateriasPageState, [])
  }));
  dart.setLibraryUri(materias_page.MateriasPage, "package:siinader_pixies/pages/materias_page.dart");
  dart.setFieldSignature(materias_page.MateriasPage, () => ({
    __proto__: dart.getFields(materias_page.MateriasPage.__proto__),
    rol: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String)
  }));
  const _semestreValue = dart.privateName(materias_page, "_semestreValue");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C29;
  let C28;
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
  let C45;
  let C44;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C73;
  let C72;
  let C77;
  let C78;
  let C79;
  let C80;
  let C76;
  let C75;
  let C83;
  let C82;
  let C81;
  let C86;
  let C87;
  let C85;
  let C84;
  let C90;
  let C89;
  let C88;
  let C92;
  let C91;
  let C95;
  let C94;
  let C93;
  materias_page._MateriasPageState = class _MateriasPageState extends framework.State$(materias_page.MateriasPage) {
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/inscripcion.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.widget.rol === "estudiantes" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MIS MATERIAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), onChanged: dart.fn(value => {
                  this.setState(dart.fn(() => {
                    this[_semestreValue] = value;
                  }, VoidToNull()));
                }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), materias_page.semestre(this[_semestreValue], this.widget.id)]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}) : this.widget.rol === "docentes" || this.widget.rol === "kardex" || this.widget.rol === "jefeCarrera" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MATERIAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), materias_page.materias(context, this.widget.id, this.widget.rol)]), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C91 || CT.C91})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
    }
  };
  (materias_page._MateriasPageState.new = function() {
    this[_semestreValue] = null;
    materias_page._MateriasPageState.__proto__.new.call(this);
    ;
  }).prototype = materias_page._MateriasPageState.prototype;
  dart.addTypeTests(materias_page._MateriasPageState);
  dart.setMethodSignature(materias_page._MateriasPageState, () => ({
    __proto__: dart.getMethods(materias_page._MateriasPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(materias_page._MateriasPageState, "package:siinader_pixies/pages/materias_page.dart");
  dart.setFieldSignature(materias_page._MateriasPageState, () => ({
    __proto__: dart.getFields(materias_page._MateriasPageState.__proto__),
    [_semestreValue]: dart.fieldType(core.int)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C96;
  let C99;
  let C98;
  let C97;
  let C102;
  let C101;
  let C100;
  let C105;
  let C106;
  let C107;
  let C108;
  let C104;
  let C103;
  let C111;
  let C112;
  let C110;
  let C109;
  let C113;
  let C116;
  let C115;
  let C114;
  let C119;
  let C118;
  let C117;
  let C122;
  let C123;
  let C124;
  let C125;
  let C121;
  let C120;
  let C128;
  let C129;
  let C127;
  let C126;
  let C132;
  let C133;
  let C131;
  let C130;
  let C136;
  let C135;
  let C134;
  let C137;
  let C140;
  let C141;
  let C139;
  let C138;
  let C144;
  let C143;
  let C142;
  let C145;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C151;
  let C150;
  let C153;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C159;
  let C158;
  let C161;
  let C164;
  let C165;
  let C163;
  let C162;
  let C168;
  let C167;
  let C166;
  let C169;
  let C172;
  let C173;
  let C171;
  let C170;
  let C176;
  let C175;
  let C174;
  let C177;
  let C180;
  let C181;
  let C179;
  let C178;
  let C184;
  let C183;
  let C182;
  let C185;
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C191;
  let C190;
  let C193;
  let C196;
  let C197;
  let C195;
  let C194;
  let C200;
  let C199;
  let C198;
  let C201;
  let C204;
  let C205;
  let C203;
  let C202;
  let C208;
  let C207;
  let C206;
  let C211;
  let C210;
  let C209;
  let C214;
  let C215;
  let C216;
  let C217;
  let C213;
  let C212;
  let C220;
  let C221;
  let C219;
  let C218;
  let C224;
  let C223;
  let C222;
  let C227;
  let C226;
  let C225;
  let C230;
  let C231;
  let C232;
  let C233;
  let C229;
  let C228;
  let C236;
  let C237;
  let C235;
  let C234;
  let C240;
  let C241;
  let C239;
  let C238;
  let C242;
  let C245;
  let C244;
  let C243;
  let C248;
  let C247;
  let C246;
  let C251;
  let C252;
  let C253;
  let C254;
  let C250;
  let C249;
  let C257;
  let C258;
  let C256;
  let C255;
  let C259;
  let C262;
  let C261;
  let C260;
  let C265;
  let C264;
  let C263;
  let C268;
  let C269;
  let C270;
  let C271;
  let C267;
  let C266;
  let C274;
  let C275;
  let C273;
  let C272;
  let C278;
  let C279;
  let C277;
  let C276;
  let C282;
  let C281;
  let C280;
  let C283;
  let C286;
  let C287;
  let C285;
  let C284;
  let C290;
  let C289;
  let C288;
  let C291;
  let C294;
  let C295;
  let C293;
  let C292;
  let C298;
  let C297;
  let C296;
  let C301;
  let C302;
  let C300;
  let C299;
  let C305;
  let C304;
  let C303;
  let C308;
  let C309;
  let C307;
  let C306;
  let C312;
  let C311;
  let C310;
  let C313;
  let C314;
  let C317;
  let C316;
  let C315;
  let C320;
  let C319;
  let C318;
  let C323;
  let C324;
  let C325;
  let C326;
  let C322;
  let C321;
  let C329;
  let C330;
  let C328;
  let C327;
  let C333;
  let C332;
  let C331;
  let C336;
  let C335;
  let C334;
  let C339;
  let C340;
  let C341;
  let C342;
  let C338;
  let C337;
  let C345;
  let C346;
  let C344;
  let C343;
  let C349;
  let C350;
  let C348;
  let C347;
  materias_page.getMaterias = function getMaterias(semestre, id) {
    return async.async(ListOfWidget(), function* getMaterias() {
      let url = "http://localhost:3000/api/estudiantes/" + dart.notNull(id) + "/materias";
      let data = null;
      let response = null;
      try {
        response = (yield http.get(url));
        data = core.List._check(convert.jsonDecode(response.body));
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print(e);
      }
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => core.identical(semestre, dart.dsend(materia, '_get', ["semestre_cursada"])) ? list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C96 || CT.C96, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new basic.Padding.new({padding: C113 || CT.C113, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["aula"]), '+', [" "]), '+', [dart.toString(dart.dsend(materia, '_get', ["hora_inicio"]))]), '+', [":00 - "]), '+', [dart.toString(dart.dsend(dart.dsend(materia, '_get', ["hora_inicio"]), '+', [2]))]), '+', [":00"])), {$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), $creationLocationd_0dea112b090073317d4: C126 || CT.C126})]), $creationLocationd_0dea112b090073317d4: C130 || CT.C130})) : core.print("No del semestre seleccionado"), dynamicTovoid()));
      return list;
    });
  };
  materias_page.semestre = function semestre(semestreValue, id) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C137 || CT.C137}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(2, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C145 || CT.C145}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C146 || CT.C146});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(3, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C153 || CT.C153}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(4, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C161 || CT.C161}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(5, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C169 || CT.C169}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C170 || CT.C170});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(6, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C174 || CT.C174}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C177 || CT.C177}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C178 || CT.C178});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(7, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C185 || CT.C185}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C186 || CT.C186});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(8, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C190 || CT.C190}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C193 || CT.C193}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C194 || CT.C194});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C201 || CT.C201}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C202 || CT.C202});
        break;
      }
    }
    return semestre;
  };
  materias_page.getMateriasDocente = function getMateriasDocente(id) {
    return async.async(ListOfWidget(), function* getMateriasDocente() {
      let url = "http://localhost:3000/api/docentes/" + dart.notNull(id) + "/materias";
      let data = null;
      let response = null;
      try {
        response = (yield http.get(url));
        data = core.List._check(convert.jsonDecode(response.body));
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print(e);
      }
      core.print(data);
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C96 || CT.C96, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C206 || CT.C206}), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), $creationLocationd_0dea112b090073317d4: C218 || CT.C218}), new basic.Padding.new({padding: C113 || CT.C113, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["aula"]), '+', [" "]), '+', [dart.toString(dart.dsend(materia, '_get', ["hora_inicio"]))]), '+', [":00 - "]), '+', [dart.toString(dart.dsend(dart.dsend(materia, '_get', ["hora_inicio"]), '+', [2]))]), '+', [":00"])), {$creationLocationd_0dea112b090073317d4: C222 || CT.C222}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C228 || CT.C228}), $creationLocationd_0dea112b090073317d4: C234 || CT.C234})]), $creationLocationd_0dea112b090073317d4: C238 || CT.C238})), dynamicTovoid()));
      return list;
    });
  };
  materias_page.getMateriasKardex = function getMateriasKardex() {
    return async.async(ListOfWidget(), function* getMateriasKardex() {
      let url = "http://localhost:3000/api/kardex/materias";
      let data = null;
      let response = null;
      try {
        response = (yield http.get(url));
        data = core.List._check(convert.jsonDecode(response.body));
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print(e);
      }
      core.print(data);
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C242 || CT.C242, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["docente_nombre"]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_1"])]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_2"])])), {$creationLocationd_0dea112b090073317d4: C243 || CT.C243}), $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C249 || CT.C249}), $creationLocationd_0dea112b090073317d4: C255 || CT.C255}), new basic.Padding.new({padding: C259 || CT.C259, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C260 || CT.C260}), $creationLocationd_0dea112b090073317d4: C263 || CT.C263}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C266 || CT.C266}), $creationLocationd_0dea112b090073317d4: C272 || CT.C272})]), $creationLocationd_0dea112b090073317d4: C276 || CT.C276})), dynamicTovoid()));
      return list;
    });
  };
  materias_page.materias = function materias(context, id, rol) {
    let materias = null;
    rol === "docentes" ? materias = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMateriasDocente(id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C280 || CT.C280}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C283 || CT.C283}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C284 || CT.C284}) : rol === "kardex" ? materias = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMateriasKardex(), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C288 || CT.C288}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C291 || CT.C291}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C292 || CT.C292}) : materias = new basic.Column.new({children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("INSCRIBIR ESTUDIANTE A MATERIA", {$creationLocationd_0dea112b090073317d4: C296 || CT.C296}), onPressed: dart.fn(() => materias_page.inscribir(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C299 || CT.C299}), new raised_button.RaisedButton.new({child: new text.Text.new("ASIGNAR DOCENTE A MATERIA", {$creationLocationd_0dea112b090073317d4: C303 || CT.C303}), onPressed: dart.fn(() => materias_page.asignar(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C306 || CT.C306})]), $creationLocationd_0dea112b090073317d4: C310 || CT.C310});
    return materias;
  };
  materias_page.inscribir = function inscribir(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new inscribir_page.InscribirPage.new({$creationLocationd_0dea112b090073317d4: C313 || CT.C313}), BuildContextToInscribirPage())});
  };
  materias_page.asignar = function asignar(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new asignar_docente_page.AsignarPage.new({$creationLocationd_0dea112b090073317d4: C314 || CT.C314}), BuildContextToAsignarPage())});
  };
  materias_page.asignarMaterias = function asignarMaterias(context) {
    return async.async(ListOfWidget(), function* asignarMaterias() {
      let url = "http://localhost:3000/api/kardex/materias";
      let data = null;
      let response = null;
      try {
        response = (yield http.get(url));
        data = core.List._check(convert.jsonDecode(response.body));
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print(e);
      }
      core.print(data);
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C242 || CT.C242, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["docente_nombre"]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_1"])]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_2"])])), {$creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C321 || CT.C321}), $creationLocationd_0dea112b090073317d4: C327 || CT.C327}), new basic.Padding.new({padding: C259 || CT.C259, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C331 || CT.C331}), $creationLocationd_0dea112b090073317d4: C334 || CT.C334}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C337 || CT.C337}), $creationLocationd_0dea112b090073317d4: C343 || CT.C343})]), $creationLocationd_0dea112b090073317d4: C347 || CT.C347})), dynamicTovoid()));
      return list;
    });
  };
  dart.trackLibraries("packages/siinader_pixies/pages/materias_page", {
    "package:siinader_pixies/pages/materias_page.dart": materias_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["materias_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;;AAEuB;IAAoB;;;QAJtC;QAAU;QAAU;;IAAV;IAAU;AAAO,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUlC;AACxB,YAAO,iCACa,sBACV,sBACJ,0CACQ,8DAEV,AAAO,AAAI,oBAAG,gBACR,gCACoB,sBAChB,kBACE,wBACO,wCAAoB,+DAE7B,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,sIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,kBAFF,cAAS;AACe,oBAAtB,uBAAiB,KAAK;;uCAGpB,kBACJ,6EAEK,+EAET,uBAAS,sBAAgB,AAAO,6EAGpC,AAAO,AAAI,AACkB,oBADf,cACR,AAAO,AAAI,oBAAG,YACd,AAAO,AAAI,oBAAG,gBAChB,gCACoB,sBAChB,kBACE,oBACO,wCAAoB,iEAE7B,uBAAS,OAAO,EAAE,AAAO,gBAAI,AAAO,8EAGxC;IAGhB;;;IAvII;;;EAwIN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAGQ,UAAiB;AADO;AAEvB,gBAAM,AAAyC,AAAK,wDAAH,EAAE,IAAG;AACxD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AAkDwB,MAjD5C,AAAK,IAAD,WAAS,QAAC,WAAqB,eAAT,QAAQ,EAAW,WAAP,OAAO,WAAC,wBACxC,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,sDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,8IAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,oCACE,eACC,aACD,6BACE,qCAKuC,WAD/B,WADyB,WAD9B,WADQ,WAAT,WAAP,OAAO,WAAC,gBACJ,aACuB,cAAhB,WAAP,OAAO,WAAC,0BACR,kBAC6B,cAAL,WAAhB,WAAP,OAAO,WAAC,uBAAiB,cAC1B,6IAGI,6CACM,6CACW,wCAAS,aACtB,2MAO1B,WAAM;AACZ,YAAO,KAAI;IACb;;6CAEoB,eAAsB;AACjC;AACP,YAAQ,aAAa;;;AAWhB,QATD,WAAW,iDACD,0BAAY,GAAE,EAAE,YACf,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,0BAAY,GAAG,EAAE,YAChB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;AAEJ,UAAO,SAAQ;EACjB;iEAE+C;AAAR;AAC9B,gBAAM,AAAsC,AAAK,qDAAH,EAAE,IAAG;AACrD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEE,MAAX,WAAM,IAAI;AAEG,iBAAO;AAkDnB,MAjDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,sDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,gJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,oCACE,eACC,aACD,6BACE,qCAKuC,WAD/B,WADyB,WAD9B,WADQ,WAAT,WAAP,OAAO,WAAC,gBACJ,aACuB,cAAhB,WAAP,OAAO,WAAC,0BACR,kBAC6B,cAAL,WAAhB,WAAP,OAAO,WAAC,uBAAiB,cAC1B,6IAGI,6CACM,6CACW,wCAAS,aACtB;AAQ5B,YAAO,KAAI;IACb;;;AAEsC;AAC7B,gBAAM;AACR;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEE,MAAX,WAAM,IAAI;AAEG,iBAAO;AAiDnB,MAhDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,wDAGS,oCACE,eACC,aACD,6BACE,qCAIG,WADkB,WADlB,WADkB,WAAnB,WAAP,OAAO,WAAC,0BACJ,aACO,WAAP,OAAO,WAAC,wBACR,aACO,WAAP,OAAO,WAAC,sJAGJ,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,gJAGA,6CACM,6CACW,wCAAS,aACtB;AAQ5B,YAAO,KAAI;IACb;;6CAE6B,SAAgB,IAAW;AAC/C;AAkCI,IAjCX,AAAI,GAAD,KAAI,aACD,WAAW,iDACD,iCAAmB,EAAE,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB,sNAGV,AAAI,GAAD,KAAI,WACH,WAAW,iDACD,4CACC,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB,sNAGV,WAAW,gCACS,sBAChB,2CACS,kBAAK,yGACD,cAAM,wBAAU,OAAO,gFAEpC,2CACS,kBAAK,oGACD,cAAM,sBAAQ,OAAO;AAIhD,UAAO,SAAQ;EACjB;+CAEuB;AACrB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb;2CACqB;AACnB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb;2DACkD;AAAd;AAC3B,gBAAM;AACR;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEE,MAAX,WAAM,IAAI;AAEG,iBAAO;AAiDnB,MAhDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,wDAGS,oCACE,eACC,aACD,6BACE,qCAIG,WADkB,WADlB,WADkB,WAAnB,WAAP,OAAO,WAAC,0BACJ,aACO,WAAP,OAAO,WAAC,wBACR,aACO,WAAP,OAAO,WAAC,sJAGJ,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,gJAGA,6CACM,6CACW,wCAAS,aACtB;AAQ5B,YAAO,KAAI;IACb","file":"materias_page.ddc.js"}');
  // Exports:
  return {
    pages__materias_page: materias_page
  };
});

//# sourceMappingURL=materias_page.ddc.js.map
