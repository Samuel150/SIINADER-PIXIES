define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/http/http', 'packages/flutter/src/rendering/animated_size', 'packages/siinader_pixies/pages/ingresar_notas', 'packages/siinader_pixies/pages/ver_notas_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__gestures__arena, packages__http__http, packages__flutter__src__rendering__animated_size, packages__siinader_pixies__pages__ingresar_notas, packages__siinader_pixies__pages__ver_notas_page) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const colors = packages__flutter__material.src__material__colors;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const input_border = packages__flutter__material.src__material__input_border;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const http = packages__http__http.http;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const ingresar_notas = packages__siinader_pixies__pages__ingresar_notas.pages__ingresar_notas;
  const ver_notas_page = packages__siinader_pixies__pages__ver_notas_page.pages__ver_notas_page;
  const notas_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let DropdownButtonOfint = () => (DropdownButtonOfint = dart.constFn(dropdown.DropdownButton$(core.int)))();
  let DropdownMenuItemOfint = () => (DropdownMenuItemOfint = dart.constFn(dropdown.DropdownMenuItem$(core.int)))();
  let JSArrayOfDropdownMenuItemOfint = () => (JSArrayOfDropdownMenuItemOfint = dart.constFn(_interceptors.JSArray$(DropdownMenuItemOfint())))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ListOfDropdownMenuItemOfint = () => (ListOfDropdownMenuItemOfint = dart.constFn(core.List$(DropdownMenuItemOfint())))();
  let FutureBuilderOfListOfDropdownMenuItemOfint = () => (FutureBuilderOfListOfDropdownMenuItemOfint = dart.constFn(async$.FutureBuilder$(ListOfDropdownMenuItemOfint())))();
  let BuildContextAndAsyncSnapshotToStatefulWidget = () => (BuildContextAndAsyncSnapshotToStatefulWidget = dart.constFn(dart.fnType(framework.StatefulWidget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let FutureBuilderOfListOfWidget = () => (FutureBuilderOfListOfWidget = dart.constFn(async$.FutureBuilder$(ListOfWidget())))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let BuildContextToIngresarNotasPage = () => (BuildContextToIngresarNotasPage = dart.constFn(dart.fnType(ingresar_notas.IngresarNotasPage, [framework.BuildContext])))();
  let BuildContextToVerNotasPage = () => (BuildContextToVerNotasPage = dart.constFn(dart.fnType(ver_notas_page.VerNotasPage, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 33,
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
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 40,
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
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 48,
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
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 46,
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
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 59,
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
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 57,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 70,
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
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 68,
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
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 81,
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
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 79,
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
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 92,
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
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 90,
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
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 103,
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
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 101,
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
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 114,
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
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 112,
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
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 125,
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
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 123,
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
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 139,
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
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 141,
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
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 37,
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
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 153,
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
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 49,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 39,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 39,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 39,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 39,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 37,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 162,
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
        [_Location_column]: 42,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 35,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 160,
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
        [_Location_column]: 33,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 45,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 45,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 45,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 45,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C117() {
      return C117 = dart.constList([], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 35,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 35,
        [_Location_line]: 217,
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
        [_Location_column]: 33,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 49,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 39,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 39,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 39,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 39,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 37,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 35,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 251,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 310,
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
        [_Location_column]: 33,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 250,
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
        [_Location_column]: 29,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 323,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 100
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 352,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 351,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 348,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 369,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194, C195 || CT.C195, C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 387,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211, C212 || CT.C212, C213 || CT.C213], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 381,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 406,
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
        [_Location_column]: 26,
        [_Location_line]: 405,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228, C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 402,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 399,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 435,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 429,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 428,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 444,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 447,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 440,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 459,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 453,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 454,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261, C262 || CT.C262], widget_inspector._Location);
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C260 || CT.C260,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 452,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 469,
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
        [_Location_column]: 17,
        [_Location_line]: 468,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C270 || CT.C270], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273], widget_inspector._Location);
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C272 || CT.C272,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 480,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 483,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 477,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.constList([C277 || CT.C277, C278 || CT.C278], widget_inspector._Location);
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C276 || CT.C276,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 476,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C280 || CT.C280,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 495,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 489,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.constList([C285 || CT.C285, C286 || CT.C286], widget_inspector._Location);
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C284 || CT.C284,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 488,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 505,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289], widget_inspector._Location);
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C288 || CT.C288,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 504,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 507,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293, C294 || CT.C294], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C292 || CT.C292,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 500,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.constList([C297 || CT.C297], widget_inspector._Location);
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C296 || CT.C296,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 516,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 519,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 514,
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
        [_Location_column]: 18,
        [_Location_line]: 512,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 529,
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
        [_Location_column]: 17,
        [_Location_line]: 528,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 531,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 526,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309, C310 || CT.C310], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C308 || CT.C308,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 524,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 554,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 555,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313, C314 || CT.C314], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 553,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 552,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C318 || CT.C318], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 551,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idMateria",
        [_Location_column]: 9,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idEstudiante",
        [_Location_column]: 9,
        [_Location_line]: 571,
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
        [_Location_column]: 14,
        [_Location_line]: 569,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idEstudiante",
        [_Location_column]: 9,
        [_Location_line]: 581,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325], widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C324 || CT.C324,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 580,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(notas_page, "NotasPage.rol");
  const id$ = dart.privateName(notas_page, "NotasPage.id");
  notas_page.NotasPage = class NotasPage extends framework.StatefulWidget {
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
      return new notas_page._NotasPageState.new();
    }
  };
  (notas_page.NotasPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    notas_page.NotasPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = notas_page.NotasPage.prototype;
  dart.addTypeTests(notas_page.NotasPage);
  dart.setMethodSignature(notas_page.NotasPage, () => ({
    __proto__: dart.getMethods(notas_page.NotasPage.__proto__),
    createState: dart.fnType(notas_page._NotasPageState, [])
  }));
  dart.setLibraryUri(notas_page.NotasPage, "package:siinader_pixies/pages/notas_page.dart");
  dart.setFieldSignature(notas_page.NotasPage, () => ({
    __proto__: dart.getFields(notas_page.NotasPage.__proto__),
    rol: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String)
  }));
  const _semestreValue = dart.privateName(notas_page, "_semestreValue");
  const _idMateriaValue = dart.privateName(notas_page, "_idMateriaValue");
  const _formKey = dart.privateName(notas_page, "_formKey");
  const _codigoEstudianteValue = dart.privateName(notas_page, "_codigoEstudianteValue");
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
  let C91;
  let C89;
  let C88;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C93;
  let C92;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C108;
  let C107;
  let C112;
  let C113;
  let C114;
  let C115;
  let C111;
  let C110;
  let C117;
  let C116;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C123;
  let C122;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  let C134;
  let C135;
  let C133;
  let C132;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C137;
  let C136;
  let C145;
  let C146;
  let C144;
  let C143;
  let C149;
  let C150;
  let C148;
  let C147;
  let C153;
  let C152;
  let C151;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C159;
  let C158;
  let C163;
  let C162;
  let C161;
  let C164;
  let C167;
  let C166;
  let C165;
  notas_page._NotasPageState = class _NotasPageState extends framework.State$(notas_page.NotasPage) {
    initState() {
      super.initState();
      this[_codigoEstudianteValue] = new editable_text.TextEditingController.new({text: ""});
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/notas.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.widget.rol === "estudiantes" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MIS NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), onChanged: dart.fn(value => {
                  this.setState(dart.fn(() => {
                    this[_semestreValue] = value;
                  }, VoidToNull()));
                }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), notas_page.semestre(this[_semestreValue], this.widget.id)]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}) : this.widget.rol === "docentes" || this.widget.rol === "kardex" || this.widget.rol === "jefeCarrera" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), this.widget.rol === "docentes" ? new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_codigoEstudianteValue], keyboardType: text_input.TextInputType.number, validator: dart.fn(value => {
                          if (value[$isEmpty]) {
                            return "PORFAVOR INGRESA EL CÓDIGO DE ESTUDIANTE";
                          } else {
                            return null;
                          }
                        }, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO DE ESTUDIANTE", border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), new (FutureBuilderOfListOfDropdownMenuItemOfint()).new({future: notas_page.getMateriasDocente(this.widget.id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new (DropdownButtonOfint()).new({items: ListOfDropdownMenuItemOfint()._check(snapshot.data), onChanged: dart.fn(value => {
                        this.setState(dart.fn(() => {
                          this[_idMateriaValue] = value;
                        }, VoidToNull()));
                      }, intToNull()), hint: new text.Text.new("MATERIA", {$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), value: this[_idMateriaValue], $creationLocationd_0dea112b090073317d4: C110 || CT.C110}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C116 || CT.C116}), BuildContextAndAsyncSnapshotToStatefulWidget()), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new raised_button.RaisedButton.new({child: new text.Text.new("INGRESAR NOTAS", {$creationLocationd_0dea112b090073317d4: C122 || CT.C122}), onPressed: dart.fn(() => {
                      if (dart.test(this[_formKey].currentState.validate())) {
                        core.print(this[_codigoEstudianteValue]);
                        notas_page.ingresar(context, dart.toString(this[_idMateriaValue]), this[_codigoEstudianteValue].text);
                      }
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125})]), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}) : new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_codigoEstudianteValue], keyboardType: text_input.TextInputType.number, validator: dart.fn(value => {
                          if (value[$isEmpty]) {
                            return "PORFAVOR INGRESA EL CÓDIGO DE ESTUDIANTE";
                          } else {
                            return null;
                          }
                        }, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO DE ESTUDIANTE", border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), new raised_button.RaisedButton.new({child: new text.Text.new("VER NOTAS", {$creationLocationd_0dea112b090073317d4: C151 || CT.C151}), onPressed: dart.fn(() => {
                      if (dart.test(this[_formKey].currentState.validate())) {
                        core.print(this[_codigoEstudianteValue]);
                        notas_page.ver(context, this[_codigoEstudianteValue].text);
                      }
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C154 || CT.C154})]), $creationLocationd_0dea112b090073317d4: C158 || CT.C158})]), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C164 || CT.C164})]), $creationLocationd_0dea112b090073317d4: C165 || CT.C165});
    }
  };
  (notas_page._NotasPageState.new = function() {
    this[_semestreValue] = null;
    this[_idMateriaValue] = null;
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_codigoEstudianteValue] = null;
    notas_page._NotasPageState.__proto__.new.call(this);
    ;
  }).prototype = notas_page._NotasPageState.prototype;
  dart.addTypeTests(notas_page._NotasPageState);
  dart.setMethodSignature(notas_page._NotasPageState, () => ({
    __proto__: dart.getMethods(notas_page._NotasPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(notas_page._NotasPageState, "package:siinader_pixies/pages/notas_page.dart");
  dart.setFieldSignature(notas_page._NotasPageState, () => ({
    __proto__: dart.getFields(notas_page._NotasPageState.__proto__),
    [_semestreValue]: dart.fieldType(core.int),
    [_idMateriaValue]: dart.fieldType(core.int),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_codigoEstudianteValue]: dart.fieldType(editable_text.TextEditingController)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C168;
  let C171;
  let C170;
  let C169;
  let C174;
  let C173;
  let C172;
  let C177;
  let C178;
  let C179;
  let C180;
  let C176;
  let C175;
  let C183;
  let C184;
  let C182;
  let C181;
  let C185;
  let C188;
  let C187;
  let C186;
  let C191;
  let C190;
  let C189;
  let C194;
  let C195;
  let C196;
  let C197;
  let C193;
  let C192;
  let C200;
  let C201;
  let C199;
  let C198;
  let C204;
  let C203;
  let C202;
  let C207;
  let C206;
  let C205;
  let C210;
  let C211;
  let C212;
  let C213;
  let C209;
  let C208;
  let C216;
  let C217;
  let C215;
  let C214;
  let C218;
  let C221;
  let C220;
  let C219;
  let C224;
  let C223;
  let C222;
  let C227;
  let C228;
  let C229;
  let C230;
  let C226;
  let C225;
  let C233;
  let C234;
  let C232;
  let C231;
  let C237;
  let C238;
  let C236;
  let C235;
  let C241;
  let C240;
  let C239;
  let C242;
  let C245;
  let C246;
  let C244;
  let C243;
  let C249;
  let C248;
  let C247;
  let C250;
  let C253;
  let C254;
  let C252;
  let C251;
  let C257;
  let C256;
  let C255;
  let C258;
  let C261;
  let C262;
  let C260;
  let C259;
  let C265;
  let C264;
  let C263;
  let C266;
  let C269;
  let C270;
  let C268;
  let C267;
  let C273;
  let C272;
  let C271;
  let C274;
  let C277;
  let C278;
  let C276;
  let C275;
  let C281;
  let C280;
  let C279;
  let C282;
  let C285;
  let C286;
  let C284;
  let C283;
  let C289;
  let C288;
  let C287;
  let C290;
  let C293;
  let C294;
  let C292;
  let C291;
  let C297;
  let C296;
  let C295;
  let C298;
  let C301;
  let C302;
  let C300;
  let C299;
  let C305;
  let C304;
  let C303;
  let C306;
  let C309;
  let C310;
  let C308;
  let C307;
  let C313;
  let C314;
  let C312;
  let C311;
  let C317;
  let C318;
  let C316;
  let C315;
  let C321;
  let C322;
  let C320;
  let C319;
  let C325;
  let C324;
  let C323;
  notas_page.getNotas = function getNotas(semestre, id) {
    return async.async(ListOfWidget(), function* getNotas() {
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
      data[$forEach](dart.fn(materia => core.identical(semestre, dart.dsend(materia, '_get', ["semestre_cursada"])) ? list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C168 || CT.C168, child: new container.Container.new({height: 40.0, width: 400.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C169 || CT.C169}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), new basic.Padding.new({padding: C185 || CT.C185, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota1er"])), {$creationLocationd_0dea112b090073317d4: C186 || CT.C186}), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), new basic.Padding.new({padding: C185 || CT.C185, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota2do"])), {$creationLocationd_0dea112b090073317d4: C202 || CT.C202}), $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), new basic.Padding.new({padding: C218 || CT.C218, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota3er"])), {$creationLocationd_0dea112b090073317d4: C219 || CT.C219}), $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231})]), $creationLocationd_0dea112b090073317d4: C235 || CT.C235})) : core.print("No del semestre seleccionado"), dynamicTovoid()));
      return list;
    });
  };
  notas_page.semestre = function semestre(semestreValue, id) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C242 || CT.C242}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C243 || CT.C243});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(2, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C247 || CT.C247}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C250 || CT.C250}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C251 || CT.C251});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(3, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C255 || CT.C255}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C258 || CT.C258}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C259 || CT.C259});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(4, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C263 || CT.C263}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C266 || CT.C266}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C267 || CT.C267});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(5, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C271 || CT.C271}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C274 || CT.C274}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C275 || CT.C275});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(6, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C279 || CT.C279}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C282 || CT.C282}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C283 || CT.C283});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(7, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C287 || CT.C287}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C290 || CT.C290}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C291 || CT.C291});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(8, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C295 || CT.C295}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C298 || CT.C298}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C299 || CT.C299});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C303 || CT.C303}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C306 || CT.C306}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C307 || CT.C307});
        break;
      }
    }
    return semestre;
  };
  notas_page.getMateriasDocente = function getMateriasDocente(id) {
    return async.async(ListOfDropdownMenuItemOfint(), function* getMateriasDocente() {
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
      let items = JSArrayOfDropdownMenuItemOfint().of([]);
      data[$forEach](dart.fn(materia => items[$add](new (DropdownMenuItemOfint()).new({value: core.int._check(dart.dsend(materia, '_get', ["idMateria"])), child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315})), dynamicTovoid()));
      return items;
    });
  };
  notas_page.ingresar = function ingresar(context, idMateria, idEstudiante) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new ingresar_notas.IngresarNotasPage.new({idMateria: idMateria, idEstudiante: idEstudiante, $creationLocationd_0dea112b090073317d4: C319 || CT.C319}), BuildContextToIngresarNotasPage())});
  };
  notas_page.ver = function ver(context, idEstudiante) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new ver_notas_page.VerNotasPage.new({idEstudiante: idEstudiante, $creationLocationd_0dea112b090073317d4: C323 || CT.C323}), BuildContextToVerNotasPage())});
  };
  dart.trackLibraries("packages/siinader_pixies/pages/notas_page", {
    "package:siinader_pixies/pages/notas_page.dart": notas_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["notas_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;;AAEoB;IAAiB;;;QAJnC;QAAU;QAAU;;IAAV;IAAU;AAAO,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AActC,MAAX;AACkD,MAAxD,+BAAyB,mDAA4B;IACvD;UAG0B;AACxB,YAAO,iCACa,sBACV,sBACJ,oCACQ,8DAEV,AAAO,AAAI,oBAAG,gBACR,gCACoB,sBAChB,kBACE,qBACO,wCAAoB,+DAE7B,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,sIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,kBAFF,cAAS;AACe,oBAAtB,uBAAiB,KAAK;;uCAGpB,kBACJ,6EAEK,+EAET,oBAAS,sBAAgB,AAAO,6EAGpC,AAAO,AAAI,AACkB,oBADf,cACR,AAAO,AAAI,oBAAG,YACd,AAAO,AAAI,oBAAG,gBAChB,gCACoB,sBAChB,kBACE,iBACO,wCAAoB,iEAE7B,AAAO,AAAI,oBAAG,aACR,gCACoB,sBAChB,wBACO,uBACE,oCACE,cACA,mDACO,4CACgB,4CACjB,QAAC;AACV,8BAAI,AAAM,KAAD;AACP,kCAAO;;AAEP,kCAAO;;0DAGC,qDACE,kBACJ,4CACQ,AAAI,wBAAC,2EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,gCACH,qDACM,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,0BAET,qDACF,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,8BAEL,qDACN,mCACM,AAAI,wBAAC,uBAEZ,qDACC,mCACM,AAAI,wBAAC,mBAGpB,qCACS,AAAI,wBAAC,gBACT,kBACa,mMAK/B,gEACU,8BAAmB,AAAO,0BACzB,SAAc,SACL,uBACT,AAAS,QAAD,YACT,6EACS,AAAS,QAAD,mBACJ,QAAK;AAGZ,wBAFF,cAAS;AACgB,0BAAvB,wBAAkB,KAAK;;6CAGrB,kBACJ,8EAEK,mFAET,6NAGV,2CACS,kBAAK,yFACD;AACT,oCAAI,AAAS,AAAa;AACK,wBAA7B,WAAM;AAI0B,wBAHhC,oBACI,OAAO,EACS,cAAhB,wBACA,AAAuB;;+JAMrC,gCACoB,sBAChB,wBACO,uBACE,oCACE,cACA,mDACO,4CACgB,4CACjB,QAAC;AACV,8BAAI,AAAM,KAAD;AACP,kCAAO;;AAEP,kCAAO;;0DAGC,qDACE,kBACJ,4CACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,gCACH,qDACM,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,0BAET,qDACF,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,8BAEL,qDACN,mCACM,AAAI,wBAAC,uBAEZ,qDACC,mCACM,AAAI,wBAAC,mBAGpB,qCACS,AAAI,wBAAC,gBACT,kBACa,uMAK/B,2CACS,kBAAK,oFACD;AACT,oCAAI,AAAS,AAAa;AACK,wBAA7B,WAAM;AAG0B,wBAFhC,eACI,OAAO,EACP,AAAuB;;4NAQ/C;IAGhB;;;IArTI;IACA;IACE,iBAAW;IACK;;;EAmTxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAEkC,UAAiB;AAAtB;AACpB,gBAAM,AAAyC,AAAK,wDAAH,EAAE,IAAG;AACxD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AAiFwB,MAhF5C,AAAK,IAAD,WAAS,QAAC,WAAqB,eAAT,QAAQ,EAAW,WAAP,OAAO,WAAC,wBACxC,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,wDAGS,qCACG,aACD,cACA,6BACE,qCACE,WAAP,OAAO,WAAC,gJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,2MAO1B,WAAM;AACZ,YAAO,KAAI;IACb;;0CAEoB,eAAsB;AACjC;AACP,YAAQ,aAAa;;;AAWhB,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;AAEJ,UAAO,SAAQ;EACjB;8DAE8D;AAAR;AAC7C,gBAAM,AAAsC,AAAK,qDAAH,EAAE,IAAG;AACrD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEmB,kBAAQ;AAa9B,MAZN,AAAK,IAAD,WAAS,QAAC,WAAY,AAAM,KAAD,OACzB,0DACgB,WAAP,OAAO,WAAC,uBACR,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,AAAI,wBAAC,gBACT,kBACa;AAKnC,YAAO,MAAK;IACd;;0CACsB,SAAgB,WAAkB;AACtD,UAAO,2CACI,OAAO,WACP,QAAc,WACd,qDACM,SAAS,gBACN,YAAY;EAIlC;gCACiB,SAAgB;AAC/B,UAAO,2CACI,OAAO,WACP,QAAc,WACd,mDACS,YAAY;EAIlC","file":"notas_page.ddc.js"}');
  // Exports:
  return {
    pages__notas_page: notas_page
  };
});

//# sourceMappingURL=notas_page.ddc.js.map
