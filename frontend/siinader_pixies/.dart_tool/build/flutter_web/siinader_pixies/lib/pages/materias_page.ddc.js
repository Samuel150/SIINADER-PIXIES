define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/http/http', 'packages/siinader_pixies/pages/inscribir_page', 'packages/siinader_pixies/pages/asignar_docente_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__http__http, packages__siinader_pixies__pages__inscribir_page, packages__siinader_pixies__pages__asignar_docente_page) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const http = packages__http__http.http;
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
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 28,
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
        [_Location_column]: 19,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 35,
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
        [_Location_column]: 23,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 43,
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
        [_Location_column]: 36,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 41,
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
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 54,
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
        [_Location_column]: 36,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 52,
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
        [_Location_column]: 27,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 65,
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
        [_Location_column]: 36,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 63,
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
        [_Location_column]: 27,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 76,
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
        [_Location_column]: 36,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 74,
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
        [_Location_column]: 27,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 87,
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
        [_Location_column]: 36,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 85,
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
        [_Location_column]: 27,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 98,
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
        [_Location_column]: 36,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 96,
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
        [_Location_column]: 27,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 109,
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
        [_Location_column]: 36,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 107,
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
        [_Location_column]: 27,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 120,
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
        [_Location_column]: 36,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 118,
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
        [_Location_column]: 27,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 134,
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
        [_Location_column]: 31,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 25,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 25,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 25,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 136,
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
        [_Location_column]: 23,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 206,
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
        [_Location_column]: 27,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C141() {
      return C141 = dart.constList([], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 25,
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
        [_Location_column]: 16,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 24,
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
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 261,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 234,
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
        [_Location_column]: 11,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 303,
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
        [_Location_column]: 26,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 314,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 319,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 310,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 331,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217], widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225], widget_inspector._Location);
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 347,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 338,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 359,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 352,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247], widget_inspector._Location);
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 375,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.constList([C254 || CT.C254, C255 || CT.C255], widget_inspector._Location);
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C253 || CT.C253,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258], widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C257 || CT.C257,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 387,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261], widget_inspector._Location);
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C260 || CT.C260,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265, C266 || CT.C266], widget_inspector._Location);
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276, C277 || CT.C277], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 415,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 415,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.constList([C283 || CT.C283], widget_inspector._Location);
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C282 || CT.C282,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 412,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 417,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287, C288 || CT.C288], widget_inspector._Location);
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C286 || CT.C286,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 408,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 449,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 447,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 446,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 446,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298, C299 || CT.C299, C300 || CT.C300, C301 || CT.C301], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 443,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C303 || CT.C303,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 441,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 63,
        [_Location_line]: 473,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 475,
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
        [_Location_column]: 24,
        [_Location_line]: 468,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 468,
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
        [_Location_column]: 22,
        [_Location_line]: 467,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.constList([C315 || CT.C315, C316 || CT.C316, C317 || CT.C317, C318 || CT.C318], widget_inspector._Location);
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C314 || CT.C314,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.constList([C321 || CT.C321, C322 || CT.C322], widget_inspector._Location);
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C320 || CT.C320,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325, C326 || CT.C326], widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C324 || CT.C324,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 438,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 25
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 518,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 518,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C333 || CT.C333,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 517,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338, C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 514,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.constList([C343 || CT.C343, C344 || CT.C344], widget_inspector._Location);
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C342 || CT.C342,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 511,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 546,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.constList([C348 || CT.C348, C349 || CT.C349], widget_inspector._Location);
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C347 || CT.C347,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 544,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 544,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.constList([C352 || CT.C352], widget_inspector._Location);
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C351 || CT.C351,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 543,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 541,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 542,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 543,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 552,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.constList([C355 || CT.C355, C356 || CT.C356, C357 || CT.C357, C358 || CT.C358], widget_inspector._Location);
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C354 || CT.C354,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 540,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 540,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.constList([C361 || CT.C361, C362 || CT.C362], widget_inspector._Location);
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C360 || CT.C360,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 537,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 509,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365, C366 || CT.C366], widget_inspector._Location);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C364 || CT.C364,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 508,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 583,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 584,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.constList([C369 || CT.C369, C370 || CT.C370], widget_inspector._Location);
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C368 || CT.C368,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 582,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 582,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.constList([C373 || CT.C373], widget_inspector._Location);
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C372 || CT.C372,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 581,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 579,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 580,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 581,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.constList([C376 || CT.C376, C377 || CT.C377, C378 || CT.C378, C379 || CT.C379], widget_inspector._Location);
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C375 || CT.C375,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 578,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 577,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 578,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.constList([C382 || CT.C382, C383 || CT.C383], widget_inspector._Location);
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C381 || CT.C381,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 576,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 604,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.constList([C386 || CT.C386, C387 || CT.C387], widget_inspector._Location);
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C385 || CT.C385,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 603,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 603,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390], widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 602,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 600,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 601,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 602,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.constList([C393 || CT.C393, C394 || CT.C394, C395 || CT.C395, C396 || CT.C396], widget_inspector._Location);
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C392 || CT.C392,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 599,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 598,
        [_Location_file]: null
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 599,
        [_Location_file]: null
      });
    },
    get C398() {
      return C398 = dart.constList([C399 || CT.C399, C400 || CT.C400], widget_inspector._Location);
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C398 || CT.C398,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 597,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 574,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 575,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.constList([C403 || CT.C403, C404 || CT.C404], widget_inspector._Location);
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C402 || CT.C402,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 573,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 572,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 573,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.constList([C407 || CT.C407, C408 || CT.C408], widget_inspector._Location);
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C406 || CT.C406,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 571,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 626,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.constList([C411 || CT.C411], widget_inspector._Location);
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C410 || CT.C410,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 625,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 628,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 15,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415, C416 || CT.C416], widget_inspector._Location);
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C414 || CT.C414,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 621,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.constList([C419 || CT.C419], widget_inspector._Location);
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C418 || CT.C418,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 569,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 650,
        [_Location_file]: null
      });
    },
    get C421() {
      return C421 = dart.constList([C422 || CT.C422, C423 || CT.C423], widget_inspector._Location);
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C421 || CT.C421,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 648,
        [_Location_file]: null
      });
    },
    get C425() {
      return C425 = dart.constList([C426 || CT.C426], widget_inspector._Location);
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C425 || CT.C425,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 647,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 645,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 646,
        [_Location_file]: null
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 647,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.constList([C429 || CT.C429, C430 || CT.C430, C431 || CT.C431, C432 || CT.C432], widget_inspector._Location);
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C428 || CT.C428,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 644,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 642,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 644,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.constList([C435 || CT.C435, C436 || CT.C436], widget_inspector._Location);
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C434 || CT.C434,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 641,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 671,
        [_Location_file]: null
      });
    },
    get C438() {
      return C438 = dart.constList([C439 || CT.C439, C440 || CT.C440], widget_inspector._Location);
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C438 || CT.C438,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 669,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 669,
        [_Location_file]: null
      });
    },
    get C442() {
      return C442 = dart.constList([C443 || CT.C443], widget_inspector._Location);
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C442 || CT.C442,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 668,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 668,
        [_Location_file]: null
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 677,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.constList([C446 || CT.C446, C447 || CT.C447, C448 || CT.C448, C449 || CT.C449], widget_inspector._Location);
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C445 || CT.C445,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 665,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 665,
        [_Location_file]: null
      });
    },
    get C451() {
      return C451 = dart.constList([C452 || CT.C452, C453 || CT.C453], widget_inspector._Location);
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C451 || CT.C451,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 663,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 639,
        [_Location_file]: null
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 640,
        [_Location_file]: null
      });
    },
    get C455() {
      return C455 = dart.constList([C456 || CT.C456, C457 || CT.C457], widget_inspector._Location);
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C455 || CT.C455,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 638,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 637,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 638,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.constList([C460 || CT.C460, C461 || CT.C461], widget_inspector._Location);
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C459 || CT.C459,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 636,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 692,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464], widget_inspector._Location);
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 691,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 694,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 19,
        [_Location_line]: 688,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 689,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468, C469 || CT.C469], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 687,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 635,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.constList([C472 || CT.C472], widget_inspector._Location);
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C471 || CT.C471,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 634,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 36,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 36
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 712,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 713,
        [_Location_file]: null
      });
    },
    get C476() {
      return C476 = dart.constList([C477 || CT.C477, C478 || CT.C478], widget_inspector._Location);
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C476 || CT.C476,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 711,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 709,
        [_Location_file]: null
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 711,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481, C482 || CT.C482], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C480 || CT.C480,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 708,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 708,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 718,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485, C486 || CT.C486, C487 || CT.C487], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C484 || CT.C484,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 706,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 705,
        [_Location_file]: null
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 706,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.constList([C490 || CT.C490, C491 || CT.C491], widget_inspector._Location);
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C489 || CT.C489,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 704,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 50,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 50
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 729,
        [_Location_file]: null
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 730,
        [_Location_file]: null
      });
    },
    get C494() {
      return C494 = dart.constList([C495 || CT.C495, C496 || CT.C496], widget_inspector._Location);
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C494 || CT.C494,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 728,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 726,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 728,
        [_Location_file]: null
      });
    },
    get C498() {
      return C498 = dart.constList([C499 || CT.C499, C500 || CT.C500], widget_inspector._Location);
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C498 || CT.C498,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 725,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 724,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 725,
        [_Location_file]: null
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 735,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.constList([C503 || CT.C503, C504 || CT.C504, C505 || CT.C505], widget_inspector._Location);
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C502 || CT.C502,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 723,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 722,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 723,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.constList([C508 || CT.C508, C509 || CT.C509], widget_inspector._Location);
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C507 || CT.C507,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 721,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 703,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.constList([C512 || CT.C512], widget_inspector._Location);
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C511 || CT.C511,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 702,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.constList([C515 || CT.C515], widget_inspector._Location);
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C514 || CT.C514,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 701,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 700,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 701,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.constList([C518 || CT.C518, C519 || CT.C519], widget_inspector._Location);
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C517 || CT.C517,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 699,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 749,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 758,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 792,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.constList([C524 || CT.C524], widget_inspector._Location);
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C523 || CT.C523,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 788,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C526() {
      return C526 = dart.constList([C527 || CT.C527], widget_inspector._Location);
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C526 || CT.C526,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 787,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 796,
        [_Location_file]: null
      });
    },
    get C529() {
      return C529 = dart.constList([C530 || CT.C530, C531 || CT.C531, C532 || CT.C532, C533 || CT.C533], widget_inspector._Location);
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C529 || CT.C529,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 784,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 784,
        [_Location_file]: null
      });
    },
    get C535() {
      return C535 = dart.constList([C536 || CT.C536, C537 || CT.C537], widget_inspector._Location);
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C535 || CT.C535,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 781,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 811,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.constList([C540 || CT.C540], widget_inspector._Location);
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C539 || CT.C539,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 810,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 810,
        [_Location_file]: null
      });
    },
    get C542() {
      return C542 = dart.constList([C543 || CT.C543], widget_inspector._Location);
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C542 || CT.C542,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 809,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 807,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 808,
        [_Location_file]: null
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 809,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 814,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.constList([C546 || CT.C546, C547 || CT.C547, C548 || CT.C548, C549 || CT.C549], widget_inspector._Location);
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C545 || CT.C545,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 806,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 804,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.constList([C552 || CT.C552, C553 || CT.C553], widget_inspector._Location);
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C551 || CT.C551,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 803,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 779,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C555() {
      return C555 = dart.constList([C556 || CT.C556, C557 || CT.C557], widget_inspector._Location);
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C555 || CT.C555,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 778,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/materias_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(materias_page, "MateriasPage.rol");
  const id$ = dart.privateName(materias_page, "MateriasPage.id");
  const color$ = dart.privateName(materias_page, "MateriasPage.color");
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
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    createState() {
      return new materias_page._MateriasPageState.new();
    }
  };
  (materias_page.MateriasPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    this[color$] = color;
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
    id: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui.Color)
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
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C81;
  let C82;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C94;
  let C95;
  let C91;
  let C90;
  let C98;
  let C99;
  let C97;
  let C96;
  let C100;
  let C103;
  let C104;
  let C102;
  let C101;
  let C107;
  let C106;
  let C105;
  let C110;
  let C111;
  let C112;
  let C113;
  let C109;
  let C108;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C125;
  let C123;
  let C122;
  let C128;
  let C127;
  let C126;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C136;
  let C134;
  let C133;
  let C139;
  let C138;
  let C137;
  let C141;
  let C140;
  let C144;
  let C143;
  let C142;
  let C147;
  let C146;
  let C145;
  let C150;
  let C151;
  let C149;
  let C148;
  materias_page._MateriasPageState = class _MateriasPageState extends framework.State$(materias_page.MateriasPage) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/inscripcion.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.widget.rol === "estudiantes" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MIS MATERIAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_semestreValue] = value;
                      }, VoidToNull()));
                    }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new basic.Padding.new({padding: C81 || CT.C81, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C82 || CT.C82, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("NOMBRE", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), new basic.Padding.new({padding: C100 || CT.C100, child: new container.Container.new({width: 200.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("AULA - HORA", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114})]), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), materias_page.semestre(this[_semestreValue], this.widget.id, this.widget.color)]), $creationLocationd_0dea112b090073317d4: C126 || CT.C126}) : this.widget.rol === "docentes" || this.widget.rol === "kardex" || this.widget.rol === "jefeCarrera" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MATERIAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new basic.Padding.new({padding: C81 || CT.C81, child: materias_page.materias(context, this.widget.id, this.widget.rol, this.widget.color), $creationLocationd_0dea112b090073317d4: C133 || CT.C133})]), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C140 || CT.C140})]), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148});
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
  let C154;
  let C155;
  let C153;
  let C152;
  let C158;
  let C157;
  let C156;
  let C161;
  let C162;
  let C163;
  let C164;
  let C160;
  let C159;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C172;
  let C170;
  let C169;
  let C175;
  let C174;
  let C173;
  let C178;
  let C179;
  let C180;
  let C181;
  let C177;
  let C176;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C191;
  let C190;
  let C195;
  let C194;
  let C193;
  let C196;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C202;
  let C201;
  let C206;
  let C205;
  let C204;
  let C207;
  let C210;
  let C211;
  let C209;
  let C208;
  let C214;
  let C213;
  let C212;
  let C217;
  let C216;
  let C215;
  let C218;
  let C221;
  let C222;
  let C220;
  let C219;
  let C225;
  let C224;
  let C223;
  let C228;
  let C227;
  let C226;
  let C229;
  let C232;
  let C233;
  let C231;
  let C230;
  let C236;
  let C235;
  let C234;
  let C239;
  let C238;
  let C237;
  let C240;
  let C243;
  let C244;
  let C242;
  let C241;
  let C247;
  let C246;
  let C245;
  let C250;
  let C249;
  let C248;
  let C251;
  let C254;
  let C255;
  let C253;
  let C252;
  let C258;
  let C257;
  let C256;
  let C261;
  let C260;
  let C259;
  let C262;
  let C265;
  let C266;
  let C264;
  let C263;
  let C269;
  let C268;
  let C267;
  let C272;
  let C271;
  let C270;
  let C273;
  let C276;
  let C277;
  let C275;
  let C274;
  let C280;
  let C279;
  let C278;
  let C283;
  let C282;
  let C281;
  let C284;
  let C287;
  let C288;
  let C286;
  let C285;
  let C291;
  let C292;
  let C290;
  let C289;
  let C295;
  let C294;
  let C293;
  let C298;
  let C299;
  let C300;
  let C301;
  let C297;
  let C296;
  let C304;
  let C305;
  let C303;
  let C302;
  let C308;
  let C309;
  let C307;
  let C306;
  let C312;
  let C311;
  let C310;
  let C315;
  let C316;
  let C317;
  let C318;
  let C314;
  let C313;
  let C321;
  let C322;
  let C320;
  let C319;
  let C325;
  let C326;
  let C324;
  let C323;
  let C327;
  let C330;
  let C331;
  let C329;
  let C328;
  let C334;
  let C333;
  let C332;
  let C337;
  let C338;
  let C339;
  let C340;
  let C336;
  let C335;
  let C343;
  let C344;
  let C342;
  let C341;
  let C345;
  let C348;
  let C349;
  let C347;
  let C346;
  let C352;
  let C351;
  let C350;
  let C355;
  let C356;
  let C357;
  let C358;
  let C354;
  let C353;
  let C361;
  let C362;
  let C360;
  let C359;
  let C365;
  let C366;
  let C364;
  let C363;
  let C369;
  let C370;
  let C368;
  let C367;
  let C373;
  let C372;
  let C371;
  let C376;
  let C377;
  let C378;
  let C379;
  let C375;
  let C374;
  let C382;
  let C383;
  let C381;
  let C380;
  let C386;
  let C387;
  let C385;
  let C384;
  let C390;
  let C389;
  let C388;
  let C393;
  let C394;
  let C395;
  let C396;
  let C392;
  let C391;
  let C399;
  let C400;
  let C398;
  let C397;
  let C403;
  let C404;
  let C402;
  let C401;
  let C407;
  let C408;
  let C406;
  let C405;
  let C411;
  let C410;
  let C409;
  let C412;
  let C415;
  let C416;
  let C414;
  let C413;
  let C419;
  let C418;
  let C417;
  let C422;
  let C423;
  let C421;
  let C420;
  let C426;
  let C425;
  let C424;
  let C429;
  let C430;
  let C431;
  let C432;
  let C428;
  let C427;
  let C435;
  let C436;
  let C434;
  let C433;
  let C439;
  let C440;
  let C438;
  let C437;
  let C443;
  let C442;
  let C441;
  let C446;
  let C447;
  let C448;
  let C449;
  let C445;
  let C444;
  let C452;
  let C453;
  let C451;
  let C450;
  let C456;
  let C457;
  let C455;
  let C454;
  let C460;
  let C461;
  let C459;
  let C458;
  let C464;
  let C463;
  let C462;
  let C465;
  let C468;
  let C469;
  let C467;
  let C466;
  let C472;
  let C471;
  let C470;
  let C473;
  let C474;
  let C477;
  let C478;
  let C476;
  let C475;
  let C481;
  let C482;
  let C480;
  let C479;
  let C485;
  let C486;
  let C487;
  let C484;
  let C483;
  let C490;
  let C491;
  let C489;
  let C488;
  let C492;
  let C495;
  let C496;
  let C494;
  let C493;
  let C499;
  let C500;
  let C498;
  let C497;
  let C503;
  let C504;
  let C505;
  let C502;
  let C501;
  let C508;
  let C509;
  let C507;
  let C506;
  let C512;
  let C511;
  let C510;
  let C515;
  let C514;
  let C513;
  let C518;
  let C519;
  let C517;
  let C516;
  let C520;
  let C521;
  let C524;
  let C523;
  let C522;
  let C527;
  let C526;
  let C525;
  let C530;
  let C531;
  let C532;
  let C533;
  let C529;
  let C528;
  let C536;
  let C537;
  let C535;
  let C534;
  let C540;
  let C539;
  let C538;
  let C543;
  let C542;
  let C541;
  let C546;
  let C547;
  let C548;
  let C549;
  let C545;
  let C544;
  let C552;
  let C553;
  let C551;
  let C550;
  let C556;
  let C557;
  let C555;
  let C554;
  materias_page.getMaterias = function getMaterias(semestre, id, color) {
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
      data[$forEach](dart.fn(materia => core.identical(semestre, dart.dsend(materia, '_get', ["semestre_cursada"])) ? list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C82 || CT.C82, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), new basic.Padding.new({padding: C100 || CT.C100, child: new container.Container.new({width: 200.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["aula"]), '+', [" "]), '+', [dart.toString(dart.dsend(materia, '_get', ["hora_inicio"]))]), '+', [":00 - "]), '+', [dart.toString(dart.dsend(dart.dsend(materia, '_get', ["hora_inicio"]), '+', [2]))]), '+', [":00"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182})]), $creationLocationd_0dea112b090073317d4: C186 || CT.C186})) : core.print(""), dynamicTovoid()));
      return list;
    });
  };
  materias_page.semestre = function semestre(semestreValue, id, color) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(1, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C190 || CT.C190})])), $creationLocationd_0dea112b090073317d4: C193 || CT.C193}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C196 || CT.C196}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C197 || CT.C197});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(2, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C201 || CT.C201})])), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C207 || CT.C207}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C208 || CT.C208});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(3, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C212 || CT.C212})])), $creationLocationd_0dea112b090073317d4: C215 || CT.C215}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C218 || CT.C218}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C219 || CT.C219});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(4, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C223 || CT.C223})])), $creationLocationd_0dea112b090073317d4: C226 || CT.C226}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C229 || CT.C229}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C230 || CT.C230});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(5, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C234 || CT.C234})])), $creationLocationd_0dea112b090073317d4: C237 || CT.C237}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C240 || CT.C240}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C241 || CT.C241});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(6, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C245 || CT.C245})])), $creationLocationd_0dea112b090073317d4: C248 || CT.C248}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C251 || CT.C251}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C252 || CT.C252});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(7, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C256 || CT.C256})])), $creationLocationd_0dea112b090073317d4: C259 || CT.C259}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C262 || CT.C262}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C263 || CT.C263});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(8, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C267 || CT.C267})])), $creationLocationd_0dea112b090073317d4: C270 || CT.C270}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C273 || CT.C273}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C274 || CT.C274});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMaterias(1, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C278 || CT.C278})])), $creationLocationd_0dea112b090073317d4: C281 || CT.C281}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C284 || CT.C284}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C285 || CT.C285});
        break;
      }
    }
    return semestre;
  };
  materias_page.getMateriasDocente = function getMateriasDocente(id, color) {
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
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C82 || CT.C82, child: new container.Container.new({width: 500.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C289 || CT.C289}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C296 || CT.C296}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), new basic.Padding.new({padding: C100 || CT.C100, child: new container.Container.new({width: 200.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["aula"]), '+', [" "]), '+', [dart.toString(dart.dsend(materia, '_get', ["hora_inicio"]))]), '+', [":00 - "]), '+', [dart.toString(dart.dsend(dart.dsend(materia, '_get', ["hora_inicio"]), '+', [2]))]), '+', [":00"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C306 || CT.C306}), $creationLocationd_0dea112b090073317d4: C310 || CT.C310}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C313 || CT.C313}), $creationLocationd_0dea112b090073317d4: C319 || CT.C319})]), $creationLocationd_0dea112b090073317d4: C323 || CT.C323})), dynamicTovoid()));
      return list;
    });
  };
  materias_page.getMateriasKardex = function getMateriasKardex(color) {
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
      let list = JSArrayOfWidget().of([]);
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C327 || CT.C327, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["docente_nombre"]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_1"])]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_2"])])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), $creationLocationd_0dea112b090073317d4: C341 || CT.C341}), new basic.Padding.new({padding: C345 || CT.C345, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C346 || CT.C346}), $creationLocationd_0dea112b090073317d4: C350 || CT.C350}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C353 || CT.C353}), $creationLocationd_0dea112b090073317d4: C359 || CT.C359})]), $creationLocationd_0dea112b090073317d4: C363 || CT.C363})), dynamicTovoid()));
      return list;
    });
  };
  materias_page.materias = function materias(context, id, rol, color) {
    let materias = null;
    rol === "docentes" ? materias = new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C81 || CT.C81, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C82 || CT.C82, child: new container.Container.new({width: 500.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("NOMBRE", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C367 || CT.C367}), $creationLocationd_0dea112b090073317d4: C371 || CT.C371}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.orange._get(700)}), $creationLocationd_0dea112b090073317d4: C374 || CT.C374}), $creationLocationd_0dea112b090073317d4: C380 || CT.C380}), new basic.Padding.new({padding: C100 || CT.C100, child: new container.Container.new({width: 200.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("AULA - HORA", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C384 || CT.C384}), $creationLocationd_0dea112b090073317d4: C388 || CT.C388}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.orange._get(700)}), $creationLocationd_0dea112b090073317d4: C391 || CT.C391}), $creationLocationd_0dea112b090073317d4: C397 || CT.C397})]), $creationLocationd_0dea112b090073317d4: C401 || CT.C401}), $creationLocationd_0dea112b090073317d4: C405 || CT.C405}), new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMateriasDocente(id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C409 || CT.C409}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C412 || CT.C412}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C413 || CT.C413})]), $creationLocationd_0dea112b090073317d4: C417 || CT.C417}) : rol === "kardex" ? materias = new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C81 || CT.C81, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C82 || CT.C82, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("DOCENTE", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C420 || CT.C420}), $creationLocationd_0dea112b090073317d4: C424 || CT.C424}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.green._get(600)}), $creationLocationd_0dea112b090073317d4: C427 || CT.C427}), $creationLocationd_0dea112b090073317d4: C433 || CT.C433}), new basic.Padding.new({padding: C100 || CT.C100, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new("MATERIA", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C437 || CT.C437}), $creationLocationd_0dea112b090073317d4: C441 || CT.C441}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.green._get(600)}), $creationLocationd_0dea112b090073317d4: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C450 || CT.C450})]), $creationLocationd_0dea112b090073317d4: C454 || CT.C454}), $creationLocationd_0dea112b090073317d4: C458 || CT.C458}), new (FutureBuilderOfListOfWidget()).new({future: materias_page.getMateriasKardex(color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C462 || CT.C462}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C465 || CT.C465}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C466 || CT.C466})]), $creationLocationd_0dea112b090073317d4: C470 || CT.C470}) : materias = new basic.Padding.new({padding: C473 || CT.C473, child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C81 || CT.C81, child: new raised_button.RaisedButton.new({color: color, child: new basic.Padding.new({padding: C474 || CT.C474, child: new text.Text.new("INSCRIBIR ESTUDIANTE A MATERIA", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C475 || CT.C475}), $creationLocationd_0dea112b090073317d4: C479 || CT.C479}), onPressed: dart.fn(() => materias_page.inscribir(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C483 || CT.C483}), $creationLocationd_0dea112b090073317d4: C488 || CT.C488}), new basic.Padding.new({padding: C81 || CT.C81, child: new raised_button.RaisedButton.new({color: color, child: new basic.Padding.new({padding: C492 || CT.C492, child: new text.Text.new("ASIGNAR DOCENTE A MATERIA", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C493 || CT.C493}), $creationLocationd_0dea112b090073317d4: C497 || CT.C497}), onPressed: dart.fn(() => materias_page.asignar(context), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C501 || CT.C501}), $creationLocationd_0dea112b090073317d4: C506 || CT.C506})]), $creationLocationd_0dea112b090073317d4: C510 || CT.C510}), $creationLocationd_0dea112b090073317d4: C513 || CT.C513}), $creationLocationd_0dea112b090073317d4: C516 || CT.C516});
    return materias;
  };
  materias_page.inscribir = function inscribir(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new inscribir_page.InscribirPage.new({$creationLocationd_0dea112b090073317d4: C520 || CT.C520}), BuildContextToInscribirPage())});
  };
  materias_page.asignar = function asignar(context) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new asignar_docente_page.AsignarPage.new({$creationLocationd_0dea112b090073317d4: C521 || CT.C521}), BuildContextToAsignarPage())});
  };
  materias_page.asignarMaterias = function asignarMaterias(context, color) {
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
      data[$forEach](dart.fn(materia => list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C327 || CT.C327, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["docente_nombre"]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_1"])]), '+', [" "]), '+', [dart.dsend(materia, '_get', ["apellido_2"])])), {$creationLocationd_0dea112b090073317d4: C522 || CT.C522}), $creationLocationd_0dea112b090073317d4: C525 || CT.C525}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C528 || CT.C528}), $creationLocationd_0dea112b090073317d4: C534 || CT.C534}), new basic.Padding.new({padding: C345 || CT.C345, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C538 || CT.C538}), $creationLocationd_0dea112b090073317d4: C541 || CT.C541}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C544 || CT.C544}), $creationLocationd_0dea112b090073317d4: C550 || CT.C550})]), $creationLocationd_0dea112b090073317d4: C554 || CT.C554})), dynamicTovoid()));
      return list;
    });
  };
  dart.trackLibraries("packages/siinader_pixies/pages/materias_page", {
    "package:siinader_pixies/pages/materias_page.dart": materias_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["materias_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;IACD;;;;;;;AAEwB;IAAoB;;;QALtC;QAAU;QAAU;QAAS;;IAAnB;IAAU;IAAS;AAAU,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW9C;AACxB,YAAO,6CACmB,2BAClB,+DACG,gCACa,sBACV,sBACJ,0CACQ,8DAEV,AAAO,AAAI,oBAAG,gBACR,gCACoB,sBAChB,kBACE,wBACO,wCAAoB,+DAE7B,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,sIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,sBAFF,cAAS;AACe,wBAAtB,uBAAiB,KAAK;;2CAGpB,kBACJ,6EAEK,+EAET,sDAES,sCACgC,yCACnB,sBAChB,sDAGS,oCACE,eACC,aACD,6BACE,kBACL,kBACO,qCACS,+BACJ,sIAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,0HAI1B,wDAKS,oCACE,eACC,aACD,6BACE,kBACL,uBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,sPAOhC,uBAAS,sBAAgB,AAAO,gBAAI,AAAO,kFAG/C,AAAO,AAAI,AACkB,oBADf,cACR,AAAO,AAAI,oBAAG,YACd,AAAO,AAAI,oBAAG,gBAChB,gCACoB,sBAChB,kBACE,oBACO,wCAAoB,mEAE7B,sDAES,uBACH,OAAO,EAAE,AAAO,gBAAI,AAAO,iBAAK,AAAO,6IAIjD;IAKpB;;;IAtMI;;;EAuMN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAEqC,UAAiB,IAAU;AAAhC;AACvB,gBAAM,AAAyC,AAAK,wDAAH,EAAE,IAAG;AACxD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AA2DJ,MA1DhB,AAAK,IAAD,WAAS,QAAC,WAAqB,eAAT,QAAQ,EAAW,WAAP,OAAO,WAAC,wBACxC,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,sDAES,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAKS,oCACE,eACC,aACD,6BACE,qCAKuC,WAD/B,WADyB,WAD9B,WADQ,WAAT,WAAP,OAAO,WAAC,gBACJ,aACuB,cAAhB,WAAP,OAAO,WAAC,0BACR,kBAC6B,cAAL,WAAhB,WAAP,OAAO,WAAC,uBAAiB,cAC1B,kBACG,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,yLAOxB,WAAM;AACZ,YAAO,KAAI;IACb;;6CAEoB,eAAsB,IAAU;AAC3C;AACP,YAAQ,aAAa;;;AAahB,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,0BAAY,GAAG,EAAE,EAAE,KAAK,YACvB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;AAEJ,UAAO,SAAQ;EACjB;iEAE+C,IAAU;AAAlB;AAC9B,gBAAM,AAAsC,AAAK,qDAAH,EAAE,IAAG;AACrD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AAwDnB,MAvDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,sDAES,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAES,oCACE,eACC,aACD,6BACE,qCAKuC,WAD/B,WADyB,WAD9B,WADQ,WAAT,WAAP,OAAO,WAAC,gBACJ,aACuB,cAAhB,WAAP,OAAO,WAAC,0BACR,kBAC6B,cAAL,WAAhB,WAAP,OAAO,WAAC,uBAAiB,cAC1B,kBACG,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK;AAQ1B,YAAO,KAAI;IACb;;+DAE6C;AAAP;AAC7B,gBAAM;AACR;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AAyDnB,MAxDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,wDAGS,oCACE,eACC,aACD,6BACE,qCAIG,WADkB,WADlB,WADkB,WAAnB,WAAP,OAAO,WAAC,0BACJ,aACO,WAAP,OAAO,WAAC,wBACR,aACO,WAAP,OAAO,WAAC,2BACL,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK;AAQ1B,YAAO,KAAI;IACb;;6CAE6B,SAAgB,IAAW,KAAW;AAC1D;AA8KI,IA7KX,AAAI,GAAD,KAAI,aACD,WAAW,gCACS,sBAChB,sDAES,sCACgC,yCACnB,sBAChB,sDAES,oCACE,eACC,aACD,6BACE,kBACL,kBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAM,0BAAC,8HAI3B,wDAES,oCACE,eACC,aACD,6BACE,kBACL,uBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAM,0BAAC,sPAOjC,iDACU,iCAAmB,EAAE,EAAE,KAAK,YAC3B,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB,mRAKd,AAAI,GAAD,KAAI,WACH,WAAW,gCACS,sBAChB,sDAES,sCACgC,yCACnB,sBAChB,sDAGS,oCACE,eACC,aACD,6BACE,kBACL,mBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,8HAI1B,wDAES,oCACE,eACC,aACD,6BACE,kBACL,mBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,sPAOhC,iDACU,gCAAkB,KAAK,YACtB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB,mRAKd,WAAW,wDAEF,6BACE,gCACa,sBAChB,sDAES,2CACE,KAAK,SACL,wDAGE,kBACL,0CACO,qCACS,wJAIT,cAAM,wBAAU,OAAO,2IAGtC,sDAES,2CACE,KAAK,SACL,wDAGE,kBACL,qCACO,qCACS,wJAIT,cAAM,sBAAQ,OAAO;AAOtD,UAAO,SAAQ;EACjB;+CAEuB;AACrB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb;2CAEqB;AACnB,UAAO,2CACI,OAAO,WACP,QAAc,WACd;EAGb;2DAEkD,SAAe;AAA7B;AAC3B,gBAAM;AACR;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEE,MAAX,WAAM,IAAI;AAEG,iBAAO;AAiDnB,MAhDD,AAAK,IAAD,WACF,QAAC,WAAY,AAAK,IAAD,OACf,sCACuC,yCACnB,sBAChB,wDAGS,oCACE,eACC,aACD,6BACE,qCAIG,WADkB,WADlB,WADkB,WAAnB,WAAP,OAAO,WAAC,0BACJ,aACO,WAAP,OAAO,WAAC,wBACR,aACO,WAAP,OAAO,WAAC,sJAGJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,gJAGA,6CACM,6CACW,wCAAS,aAC7B,KAAK;AAQ1B,YAAO,KAAI;IACb","file":"materias_page.ddc.js"}');
  // Exports:
  return {
    pages__materias_page: materias_page
  };
});

//# sourceMappingURL=materias_page.ddc.js.map
