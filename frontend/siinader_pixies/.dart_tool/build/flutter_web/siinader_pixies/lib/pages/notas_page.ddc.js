define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/http/http', 'packages/siinader_pixies/pages/ingresar_notas', 'packages/siinader_pixies/pages/ver_notas_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__http__http, packages__siinader_pixies__pages__ingresar_notas, packages__siinader_pixies__pages__ver_notas_page) {
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
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const input_border = packages__flutter__material.src__material__input_border;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const http = packages__http__http.http;
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
        [_Location_column]: 17,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 38,
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
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 45,
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
        [_Location_column]: 25,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 53,
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
        [_Location_column]: 38,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 51,
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
        [_Location_column]: 29,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 64,
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
        [_Location_column]: 38,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 62,
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
        [_Location_column]: 29,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 75,
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
        [_Location_column]: 38,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 73,
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
        [_Location_column]: 29,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 86,
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
        [_Location_column]: 38,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 84,
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
        [_Location_column]: 29,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 97,
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
        [_Location_column]: 38,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 95,
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
        [_Location_column]: 29,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 108,
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
        [_Location_column]: 38,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 106,
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
        [_Location_column]: 29,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 119,
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
        [_Location_column]: 38,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 117,
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
        [_Location_column]: 29,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 130,
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
        [_Location_column]: 38,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 128,
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
        [_Location_column]: 29,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 144,
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
        [_Location_column]: 33,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 27,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 146,
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
        [_Location_column]: 25,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 160,
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
        [_Location_column]: 42,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 154,
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
        [_Location_column]: 29,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 204,
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
        [_Location_column]: 42,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 202,
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
        [_Location_column]: 40,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 248,
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
        [_Location_column]: 42,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 246,
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
        [_Location_column]: 40,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C184 || CT.C184,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 57,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 51,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194, C195 || CT.C195], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 47,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 47,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 47,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 47,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 47,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199, C200 || CT.C200, C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 45,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205, C206 || CT.C206], widget_inspector._Location);
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C204 || CT.C204,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 43,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 41,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213, C214 || CT.C214], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 366,
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
        [_Location_column]: 57,
        [_Location_line]: 365,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 51,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 51,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 51,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 51,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221, C222 || CT.C222, C223 || CT.C223], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C225() {
      return C225 = dart.constList([], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 41,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 41,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 353,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 120,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 120
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 382,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 45,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 382,
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
        [_Location_column]: 50,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 43,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 376,
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
        [_Location_column]: 39,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 37,
        [_Location_line]: 284,
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
        [_Location_column]: 35,
        [_Location_line]: 283,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 55,
        [_Location_line]: 416,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 49,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 59,
        [_Location_line]: 415,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 45,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 45,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 45,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 45,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 45,
        [_Location_line]: 451,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.constList([C256 || CT.C256, C257 || CT.C257, C258 || CT.C258, C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C255 || CT.C255,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 404,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 43,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.constList([C263 || CT.C263, C264 || CT.C264], widget_inspector._Location);
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C262 || CT.C262,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 402,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 41,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.constList([C267 || CT.C267, C268 || CT.C268], widget_inspector._Location);
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C266 || CT.C266,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 400,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 135,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 135
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 49,
        [_Location_line]: 473,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272, C273 || CT.C273], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 47,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 471,
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
        [_Location_column]: 52,
        [_Location_line]: 466,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 45,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280, C281 || CT.C281], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 43,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.constList([C284 || CT.C284, C285 || CT.C285, C286 || CT.C286], widget_inspector._Location);
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C283 || CT.C283,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 460,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 462,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289, C290 || CT.C290], widget_inspector._Location);
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C288 || CT.C288,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 459,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 37,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C292 || CT.C292,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.constList([C300 || CT.C300], widget_inspector._Location);
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C299 || CT.C299,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303], widget_inspector._Location);
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C302 || CT.C302,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306], widget_inspector._Location);
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 32,
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
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 525,
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
        [_Location_column]: 28,
        [_Location_line]: 523,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 523,
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
        [_Location_column]: 26,
        [_Location_line]: 522,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 531,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320, C321 || CT.C321, C322 || CT.C322, C323 || CT.C323], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 519,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 518,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.constList([C326 || CT.C326, C327 || CT.C327], widget_inspector._Location);
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C325 || CT.C325,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 517,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 546,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 547,
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
        [_Location_column]: 28,
        [_Location_line]: 545,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 545,
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
        [_Location_column]: 26,
        [_Location_line]: 544,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 542,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 543,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 544,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 553,
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
        [_Location_column]: 24,
        [_Location_line]: 541,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 541,
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
        [_Location_column]: 15,
        [_Location_line]: 538,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 568,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 569,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.constList([C347 || CT.C347, C348 || CT.C348], widget_inspector._Location);
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C346 || CT.C346,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 567,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.constList([C351 || CT.C351], widget_inspector._Location);
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C350 || CT.C350,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 566,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 564,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 575,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354, C355 || CT.C355, C356 || CT.C356, C357 || CT.C357], widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 563,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 561,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 563,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.constList([C360 || CT.C360, C361 || CT.C361], widget_inspector._Location);
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C359 || CT.C359,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 560,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 591,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.constList([C364 || CT.C364, C365 || CT.C365], widget_inspector._Location);
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C363 || CT.C363,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 589,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.constList([C368 || CT.C368], widget_inspector._Location);
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C367 || CT.C367,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 588,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 588,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371, C372 || CT.C372, C373 || CT.C373, C374 || CT.C374], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C370 || CT.C370,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 585,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 583,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.constList([C377 || CT.C377, C378 || CT.C378], widget_inspector._Location);
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C376 || CT.C376,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 582,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.constList([C381 || CT.C381, C382 || CT.C382], widget_inspector._Location);
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C380 || CT.C380,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 610,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 610,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.constList([C385 || CT.C385], widget_inspector._Location);
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C384 || CT.C384,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 609,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 607,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 608,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.constList([C388 || CT.C388, C389 || CT.C389, C390 || CT.C390, C391 || CT.C391], widget_inspector._Location);
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C387 || CT.C387,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 606,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 606,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.constList([C394 || CT.C394, C395 || CT.C395], widget_inspector._Location);
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C393 || CT.C393,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 604,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.constList([C398 || CT.C398, C399 || CT.C399], widget_inspector._Location);
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C397 || CT.C397,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 514,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 648,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.constList([C402 || CT.C402], widget_inspector._Location);
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C401 || CT.C401,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 646,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.constList([C405 || CT.C405], widget_inspector._Location);
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C404 || CT.C404,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 645,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 650,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 642,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 643,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.constList([C409 || CT.C409, C410 || CT.C410], widget_inspector._Location);
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C408 || CT.C408,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 641,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.constList([C413 || CT.C413], widget_inspector._Location);
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C412 || CT.C412,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 662,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C415() {
      return C415 = dart.constList([C416 || CT.C416], widget_inspector._Location);
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C415 || CT.C415,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 659,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 664,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 657,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.constList([C420 || CT.C420, C421 || CT.C421], widget_inspector._Location);
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C419 || CT.C419,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 655,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 676,
        [_Location_file]: null
      });
    },
    get C423() {
      return C423 = dart.constList([C424 || CT.C424], widget_inspector._Location);
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C423 || CT.C423,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 676,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 674,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 673,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 678,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 670,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 671,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.constList([C431 || CT.C431, C432 || CT.C432], widget_inspector._Location);
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C430 || CT.C430,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 669,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.constList([C435 || CT.C435], widget_inspector._Location);
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C434 || CT.C434,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 690,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 688,
        [_Location_file]: null
      });
    },
    get C437() {
      return C437 = dart.constList([C438 || CT.C438], widget_inspector._Location);
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C437 || CT.C437,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 687,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 692,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 685,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.constList([C442 || CT.C442, C443 || CT.C443], widget_inspector._Location);
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C441 || CT.C441,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 683,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 704,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.constList([C446 || CT.C446], widget_inspector._Location);
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C445 || CT.C445,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 704,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.constList([C449 || CT.C449], widget_inspector._Location);
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C448 || CT.C448,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 701,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 706,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 698,
        [_Location_file]: null
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 699,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.constList([C453 || CT.C453, C454 || CT.C454], widget_inspector._Location);
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C452 || CT.C452,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 697,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 718,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.constList([C457 || CT.C457], widget_inspector._Location);
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C456 || CT.C456,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 718,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 716,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.constList([C460 || CT.C460], widget_inspector._Location);
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C459 || CT.C459,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 715,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 720,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 712,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 713,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464, C465 || CT.C465], widget_inspector._Location);
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 711,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 732,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 732,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 730,
        [_Location_file]: null
      });
    },
    get C470() {
      return C470 = dart.constList([C471 || CT.C471], widget_inspector._Location);
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C470 || CT.C470,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 729,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 734,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 726,
        [_Location_file]: null
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 727,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.constList([C475 || CT.C475, C476 || CT.C476], widget_inspector._Location);
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C474 || CT.C474,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 725,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 746,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.constList([C479 || CT.C479], widget_inspector._Location);
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C478 || CT.C478,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 746,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 744,
        [_Location_file]: null
      });
    },
    get C481() {
      return C481 = dart.constList([C482 || CT.C482], widget_inspector._Location);
    },
    get C480() {
      return C480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C481 || CT.C481,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 743,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 748,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 740,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 741,
        [_Location_file]: null
      });
    },
    get C485() {
      return C485 = dart.constList([C486 || CT.C486, C487 || CT.C487], widget_inspector._Location);
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C485 || CT.C485,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 739,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 760,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.constList([C490 || CT.C490], widget_inspector._Location);
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C489 || CT.C489,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 760,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 758,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.constList([C493 || CT.C493], widget_inspector._Location);
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C492 || CT.C492,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 757,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 762,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 754,
        [_Location_file]: null
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 755,
        [_Location_file]: null
      });
    },
    get C496() {
      return C496 = dart.constList([C497 || CT.C497, C498 || CT.C498], widget_inspector._Location);
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C496 || CT.C496,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 753,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.constList([C501 || CT.C501, C502 || CT.C502], widget_inspector._Location);
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C500 || CT.C500,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 784,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 784,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.constList([C505 || CT.C505, C506 || CT.C506], widget_inspector._Location);
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C504 || CT.C504,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 782,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idMateria",
        [_Location_column]: 9,
        [_Location_line]: 802,
        [_Location_file]: null
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idEstudiante",
        [_Location_column]: 9,
        [_Location_line]: 803,
        [_Location_file]: null
      });
    },
    get C508() {
      return C508 = dart.constList([C509 || CT.C509, C510 || CT.C510], widget_inspector._Location);
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C508 || CT.C508,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 801,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "idEstudiante",
        [_Location_column]: 9,
        [_Location_line]: 814,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 36,
        [_Location_line]: 814,
        [_Location_file]: null
      });
    },
    get C512() {
      return C512 = dart.constList([C513 || CT.C513, C514 || CT.C514], widget_inspector._Location);
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C512 || CT.C512,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 813,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(notas_page, "NotasPage.rol");
  const id$ = dart.privateName(notas_page, "NotasPage.id");
  const color$ = dart.privateName(notas_page, "NotasPage.color");
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
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    createState() {
      return new notas_page._NotasPageState.new();
    }
  };
  (notas_page.NotasPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    this[color$] = color;
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
    id: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui.Color)
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
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C81;
  let C84;
  let C85;
  let C83;
  let C82;
  let C88;
  let C87;
  let C86;
  let C91;
  let C92;
  let C93;
  let C94;
  let C90;
  let C89;
  let C97;
  let C98;
  let C96;
  let C95;
  let C99;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C105;
  let C104;
  let C109;
  let C110;
  let C111;
  let C112;
  let C108;
  let C107;
  let C115;
  let C116;
  let C114;
  let C113;
  let C117;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C123;
  let C122;
  let C127;
  let C128;
  let C129;
  let C130;
  let C126;
  let C125;
  let C133;
  let C134;
  let C132;
  let C131;
  let C135;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C141;
  let C140;
  let C145;
  let C146;
  let C147;
  let C148;
  let C144;
  let C143;
  let C151;
  let C152;
  let C150;
  let C149;
  let C153;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C159;
  let C158;
  let C163;
  let C164;
  let C165;
  let C166;
  let C162;
  let C161;
  let C169;
  let C170;
  let C168;
  let C167;
  let C173;
  let C174;
  let C172;
  let C171;
  let C175;
  let C178;
  let C179;
  let C177;
  let C176;
  let C182;
  let C181;
  let C180;
  let C185;
  let C186;
  let C184;
  let C183;
  let C189;
  let C190;
  let C188;
  let C187;
  let C191;
  let C194;
  let C195;
  let C193;
  let C192;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C197;
  let C196;
  let C205;
  let C206;
  let C204;
  let C203;
  let C209;
  let C210;
  let C208;
  let C207;
  let C213;
  let C214;
  let C212;
  let C211;
  let C217;
  let C216;
  let C215;
  let C220;
  let C221;
  let C222;
  let C223;
  let C219;
  let C218;
  let C225;
  let C224;
  let C228;
  let C229;
  let C227;
  let C226;
  let C230;
  let C233;
  let C232;
  let C231;
  let C236;
  let C237;
  let C235;
  let C234;
  let C240;
  let C241;
  let C242;
  let C239;
  let C238;
  let C245;
  let C246;
  let C244;
  let C243;
  let C249;
  let C248;
  let C247;
  let C252;
  let C253;
  let C251;
  let C250;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C255;
  let C254;
  let C263;
  let C264;
  let C262;
  let C261;
  let C267;
  let C268;
  let C266;
  let C265;
  let C269;
  let C272;
  let C273;
  let C271;
  let C270;
  let C276;
  let C277;
  let C275;
  let C274;
  let C280;
  let C281;
  let C279;
  let C278;
  let C284;
  let C285;
  let C286;
  let C283;
  let C282;
  let C289;
  let C290;
  let C288;
  let C287;
  let C293;
  let C292;
  let C291;
  let C296;
  let C295;
  let C294;
  let C297;
  let C300;
  let C299;
  let C298;
  let C303;
  let C302;
  let C301;
  let C306;
  let C305;
  let C304;
  let C309;
  let C310;
  let C308;
  let C307;
  notas_page._NotasPageState = class _NotasPageState extends framework.State$(notas_page.NotasPage) {
    initState() {
      super.initState();
      this[_codigoEstudianteValue] = new editable_text.TextEditingController.new({text: ""});
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/notas.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.widget.rol === "estudiantes" ? new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MIS NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), onChanged: dart.fn(value => {
                        this.setState(dart.fn(() => {
                          this[_semestreValue] = value;
                        }, VoidToNull()));
                      }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C81 || CT.C81, child: new container.Container.new({height: 45.0, width: 400.0, child: new basic.Center.new({child: new text.Text.new("MATERIA", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), new basic.Padding.new({padding: C99 || CT.C99, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new("1P", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new basic.Padding.new({padding: C117 || CT.C117, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new("2P", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), new basic.Padding.new({padding: C135 || CT.C135, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new("3P", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new basic.Padding.new({padding: C153 || CT.C153, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new("PROMEDIO", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.amber._get(800)}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167})]), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), new basic.Padding.new({padding: C175 || CT.C175, child: notas_page.semestre(this[_semestreValue], this.widget.id, this.widget.color), $creationLocationd_0dea112b090073317d4: C176 || CT.C176})]), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}) : this.widget.rol === "docentes" || this.widget.rol === "kardex" || this.widget.rol === "jefeCarrera" ? new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C175 || CT.C175, child: new text.Text.new("NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C183 || CT.C183}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), this.widget.rol === "docentes" ? new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new container.Container.new({width: 400.0, child: new basic.Padding.new({padding: C191 || CT.C191, child: new text_form_field.TextFormField.new({controller: this[_codigoEstudianteValue], keyboardType: text_input.TextInputType.number, validator: dart.fn(value => {
                                  if (value[$isEmpty]) {
                                    return "PORFAVOR INGRESA EL CÓDIGO DE ESTUDIANTE";
                                  } else {
                                    return null;
                                  }
                                }, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO DE ESTUDIANTE", border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C196 || CT.C196}), $creationLocationd_0dea112b090073317d4: C203 || CT.C203}), $creationLocationd_0dea112b090073317d4: C207 || CT.C207}), $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), new (FutureBuilderOfListOfDropdownMenuItemOfint()).new({future: notas_page.getMateriasDocente(this.widget.id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new (DropdownButtonOfint()).new({items: ListOfDropdownMenuItemOfint()._check(snapshot.data), onChanged: dart.fn(value => {
                              this.setState(dart.fn(() => {
                                this[_idMateriaValue] = value;
                              }, VoidToNull()));
                            }, intToNull()), hint: new text.Text.new("MATERIA", {$creationLocationd_0dea112b090073317d4: C215 || CT.C215}), value: this[_idMateriaValue], $creationLocationd_0dea112b090073317d4: C218 || CT.C218}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C224 || CT.C224}), BuildContextAndAsyncSnapshotToStatefulWidget()), $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), new basic.Padding.new({padding: C191 || CT.C191, child: new raised_button.RaisedButton.new({color: colors.Colors.orange._get(900), child: new basic.Padding.new({padding: C230 || CT.C230, child: new text.Text.new("INGRESAR NOTAS", {$creationLocationd_0dea112b090073317d4: C231 || CT.C231}), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}), onPressed: dart.fn(() => {
                              if (dart.test(this[_formKey].currentState.validate())) {
                                core.print(this[_codigoEstudianteValue]);
                                notas_page.ingresar(context, dart.toString(this[_idMateriaValue]), this[_codigoEstudianteValue].text);
                              }
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C238 || CT.C238}), $creationLocationd_0dea112b090073317d4: C243 || CT.C243})]), $creationLocationd_0dea112b090073317d4: C247 || CT.C247}) : new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_codigoEstudianteValue], keyboardType: text_input.TextInputType.number, validator: dart.fn(value => {
                                if (value[$isEmpty]) {
                                  return "PORFAVOR INGRESA EL CÓDIGO DE ESTUDIANTE";
                                } else {
                                  return null;
                                }
                              }, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO DE ESTUDIANTE", border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C254 || CT.C254}), $creationLocationd_0dea112b090073317d4: C261 || CT.C261}), $creationLocationd_0dea112b090073317d4: C265 || CT.C265}), new basic.Padding.new({padding: C191 || CT.C191, child: new raised_button.RaisedButton.new({color: this.widget.color, child: new basic.Padding.new({padding: C175 || CT.C175, child: new basic.Padding.new({padding: C269 || CT.C269, child: new text.Text.new("VER NOTAS", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C270 || CT.C270}), $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), $creationLocationd_0dea112b090073317d4: C278 || CT.C278}), onPressed: dart.fn(() => {
                              if (dart.test(this[_formKey].currentState.validate())) {
                                core.print(this[_codigoEstudianteValue]);
                                notas_page.ver(context, this[_codigoEstudianteValue].text, this.widget.color);
                              }
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C282 || CT.C282}), $creationLocationd_0dea112b090073317d4: C287 || CT.C287})]), $creationLocationd_0dea112b090073317d4: C291 || CT.C291})]), $creationLocationd_0dea112b090073317d4: C294 || CT.C294}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C297 || CT.C297})]), $creationLocationd_0dea112b090073317d4: C298 || CT.C298}), $creationLocationd_0dea112b090073317d4: C301 || CT.C301}), $creationLocationd_0dea112b090073317d4: C304 || CT.C304}), $creationLocationd_0dea112b090073317d4: C307 || CT.C307});
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
  let C313;
  let C314;
  let C312;
  let C311;
  let C317;
  let C316;
  let C315;
  let C320;
  let C321;
  let C322;
  let C323;
  let C319;
  let C318;
  let C326;
  let C327;
  let C325;
  let C324;
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
  let C347;
  let C348;
  let C346;
  let C345;
  let C351;
  let C350;
  let C349;
  let C354;
  let C355;
  let C356;
  let C357;
  let C353;
  let C352;
  let C360;
  let C361;
  let C359;
  let C358;
  let C364;
  let C365;
  let C363;
  let C362;
  let C368;
  let C367;
  let C366;
  let C371;
  let C372;
  let C373;
  let C374;
  let C370;
  let C369;
  let C377;
  let C378;
  let C376;
  let C375;
  let C381;
  let C382;
  let C380;
  let C379;
  let C385;
  let C384;
  let C383;
  let C388;
  let C389;
  let C390;
  let C391;
  let C387;
  let C386;
  let C394;
  let C395;
  let C393;
  let C392;
  let C398;
  let C399;
  let C397;
  let C396;
  let C402;
  let C401;
  let C400;
  let C405;
  let C404;
  let C403;
  let C406;
  let C409;
  let C410;
  let C408;
  let C407;
  let C413;
  let C412;
  let C411;
  let C416;
  let C415;
  let C414;
  let C417;
  let C420;
  let C421;
  let C419;
  let C418;
  let C424;
  let C423;
  let C422;
  let C427;
  let C426;
  let C425;
  let C428;
  let C431;
  let C432;
  let C430;
  let C429;
  let C435;
  let C434;
  let C433;
  let C438;
  let C437;
  let C436;
  let C439;
  let C442;
  let C443;
  let C441;
  let C440;
  let C446;
  let C445;
  let C444;
  let C449;
  let C448;
  let C447;
  let C450;
  let C453;
  let C454;
  let C452;
  let C451;
  let C457;
  let C456;
  let C455;
  let C460;
  let C459;
  let C458;
  let C461;
  let C464;
  let C465;
  let C463;
  let C462;
  let C468;
  let C467;
  let C466;
  let C471;
  let C470;
  let C469;
  let C472;
  let C475;
  let C476;
  let C474;
  let C473;
  let C479;
  let C478;
  let C477;
  let C482;
  let C481;
  let C480;
  let C483;
  let C486;
  let C487;
  let C485;
  let C484;
  let C490;
  let C489;
  let C488;
  let C493;
  let C492;
  let C491;
  let C494;
  let C497;
  let C498;
  let C496;
  let C495;
  let C501;
  let C502;
  let C500;
  let C499;
  let C505;
  let C506;
  let C504;
  let C503;
  let C509;
  let C510;
  let C508;
  let C507;
  let C513;
  let C514;
  let C512;
  let C511;
  notas_page.getNotas = function getNotas(semestre, id, color) {
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
      data[$forEach](dart.fn(materia => core.identical(semestre, dart.dsend(materia, '_get', ["semestre_cursada"])) ? list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C81 || CT.C81, child: new container.Container.new({height: 45.0, width: 400.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}), $creationLocationd_0dea112b090073317d4: C324 || CT.C324}), new basic.Padding.new({padding: C99 || CT.C99, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota1er"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), $creationLocationd_0dea112b090073317d4: C341 || CT.C341}), new basic.Padding.new({padding: C117 || CT.C117, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota2do"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C345 || CT.C345}), $creationLocationd_0dea112b090073317d4: C349 || CT.C349}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352}), $creationLocationd_0dea112b090073317d4: C358 || CT.C358}), new basic.Padding.new({padding: C135 || CT.C135, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota3er"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C362 || CT.C362}), $creationLocationd_0dea112b090073317d4: C366 || CT.C366}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C369 || CT.C369}), $creationLocationd_0dea112b090073317d4: C375 || CT.C375}), new basic.Padding.new({padding: C153 || CT.C153, child: new container.Container.new({height: 45.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(materia, '_get', ["nota1er"]), '+', [dart.dsend(materia, '_get', ["nota2do"])]), '+', [dart.dsend(materia, '_get', ["nota3er"])]), '/', [3]), 'round', [])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C379 || CT.C379}), $creationLocationd_0dea112b090073317d4: C383 || CT.C383}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C386 || CT.C386}), $creationLocationd_0dea112b090073317d4: C392 || CT.C392})]), $creationLocationd_0dea112b090073317d4: C396 || CT.C396})) : core.print(""), dynamicTovoid()));
      return list;
    });
  };
  notas_page.semestre = function semestre(semestreValue, id, color) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C400 || CT.C400})])), $creationLocationd_0dea112b090073317d4: C403 || CT.C403}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C406 || CT.C406}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C407 || CT.C407});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(2, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C411 || CT.C411})])), $creationLocationd_0dea112b090073317d4: C414 || CT.C414}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C417 || CT.C417}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C418 || CT.C418});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(3, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C422 || CT.C422})])), $creationLocationd_0dea112b090073317d4: C425 || CT.C425}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C428 || CT.C428}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C429 || CT.C429});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(4, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C433 || CT.C433})])), $creationLocationd_0dea112b090073317d4: C436 || CT.C436}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C439 || CT.C439}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C440 || CT.C440});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(5, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C444 || CT.C444})])), $creationLocationd_0dea112b090073317d4: C447 || CT.C447}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C450 || CT.C450}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C451 || CT.C451});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(6, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C455 || CT.C455})])), $creationLocationd_0dea112b090073317d4: C458 || CT.C458}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C461 || CT.C461}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C462 || CT.C462});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(7, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C466 || CT.C466})])), $creationLocationd_0dea112b090073317d4: C469 || CT.C469}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C472 || CT.C472}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C473 || CT.C473});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(8, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C477 || CT.C477})])), $creationLocationd_0dea112b090073317d4: C480 || CT.C480}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C483 || CT.C483}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C484 || CT.C484});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id, color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(dart.dtest(dart.dload(snapshot.data, 'isNotEmpty')) ? snapshot.data : JSArrayOfWidget().of([new text.Text.new("NO EXISTEN DATOS", {$creationLocationd_0dea112b090073317d4: C488 || CT.C488})])), $creationLocationd_0dea112b090073317d4: C491 || CT.C491}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C494 || CT.C494}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C495 || CT.C495});
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
      data[$forEach](dart.fn(materia => items[$add](new (DropdownMenuItemOfint()).new({value: core.int._check(dart.dsend(materia, '_get', ["idMateria"])), child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C499 || CT.C499}), $creationLocationd_0dea112b090073317d4: C503 || CT.C503})), dynamicTovoid()));
      return items;
    });
  };
  notas_page.ingresar = function ingresar(context, idMateria, idEstudiante) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new ingresar_notas.IngresarNotasPage.new({idMateria: idMateria, idEstudiante: idEstudiante, $creationLocationd_0dea112b090073317d4: C507 || CT.C507}), BuildContextToIngresarNotasPage())});
  };
  notas_page.ver = function ver(context, idEstudiante, color) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new ver_notas_page.VerNotasPage.new({idEstudiante: idEstudiante, color: color, $creationLocationd_0dea112b090073317d4: C511 || CT.C511}), BuildContextToVerNotasPage())});
  };
  dart.trackLibraries("packages/siinader_pixies/pages/notas_page", {
    "package:siinader_pixies/pages/notas_page.dart": notas_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["notas_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;IACD;;;;;;;AAEqB;IAAiB;;;QALnC;QAAU;QAAU;QAAS;;IAAnB;IAAU;IAAS;AAAU,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAelD,MAAX;AACkD,MAAxD,+BAAyB,mDAA4B;IACvD;UAG0B;AACxB,YAAO,6CACmB,2BAClB,+DACG,6BACE,gCACa,sBACV,sBACJ,oCACQ,8DAEV,AAAO,AAAI,oBAAG,gBACR,gCACoB,sBAChB,kBACE,qBACO,wCAAoB,+DAE7B,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,sIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,wBAFF,cAAS;AACe,0BAAtB,uBAAiB,KAAK;;6CAGpB,kBACJ,6EAEK,+EAET,sCACuC,yCACnB,sBAChB,sDAGS,qCACG,aACD,cACA,6BACE,kBACL,mBACO,qCACS,+BACJ,sIAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,0HAI1B,sDAGS,qCACG,aACD,cACA,6BACE,kBACL,cACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,8HAI1B,wDAGS,qCACG,aACD,cACA,6BACE,kBACL,cACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,8HAI1B,wDAGS,qCACG,aACD,cACA,6BACE,kBACL,cACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,8HAI1B,wDAGS,qCACG,aACD,cACA,6BACE,kBACL,oBACO,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aACtB,AAAK,yBAAC,2LAM9B,wDAGM,oBAAS,sBAAgB,AAAO,gBAAI,AAAO,6IAIrD,AAAO,AAAI,AACkB,oBADf,cACR,AAAO,AAAI,oBAAG,YACd,AAAO,AAAI,oBAAG,gBAChB,gCACoB,sBAChB,wDAES,kBACL,iBACO,wCAAoB,8HAG/B,AAAO,AAAI,oBAAG,aACR,gCACoB,sBAChB,wBACO,uBACE,oCACE,cACA,wDAGE,mDAED,4CAEc,4CACP,QAAC;AACV,sCAAI,AAAM,KAAD;AACP,0CAAO;;AAEP,0CAAO;;kEAGC,qDACE,kBACJ,4CACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAGrB,gCACI,qDACM,mCACM,AAAI,wBAAC,yBAGrB,qDACU,mCACM,AAAI,wBAAC,0BAGrB,qDACU,mCACM,AAAI,wBAAC,yBAGrB,qDACU,mCACM,AAAI,wBAAC,8BAGrB,qDACU,mCACM,AAAI,wBAAC,uBAEZ,qDACC,mCACM,AAAI,wBAAC,mBAGpB,qCACS,AAAI,wBAAC,gBACT,kBACa,kQAMjC,gEACU,8BAAmB,AAAO,0BACzB,SAAc,SACL,uBACT,AAAS,QAAD,YACT,6EACS,AAAS,QAAD,mBACJ,QAAK;AAGZ,8BAFF,cAAS;AACgB,gCAAvB,wBAAkB,KAAK;;mDAGrB,kBACJ,8EAEK,mFAET,6NAGV,wDAGS,2CACS,AAAM,0BAAC,aACd,wDAIE,kBAAK,oJAEH;AACT,4CAAI,AAAS,AACR;AAC0B,gCAA7B,WAAM;AAI0B,gCAHhC,oBACI,OAAO,EACS,cAAhB,wBACA,AAAuB;;kOAOvC,gCACoB,sBAChB,wBACO,uBACE,oCACE,cACA,mDACO,4CACgB,4CACjB,QAAC;AACV,oCAAI,AAAM,KAAD;AACP,wCAAO;;AAEP,wCAAO;;gEAGC,qDACE,kBACJ,4CACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,gCACH,qDACM,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,0BAGrB,qDACU,mCACM,AAAI,wBAAC,yBAEV,qDACD,mCACM,AAAI,wBAAC,8BAGrB,qDACU,mCACM,AAAI,wBAAC,uBAEZ,qDACC,mCACM,AAAI,wBAAC,mBAGpB,qCACS,AAAI,wBAAC,gBACT,kBACa,uMAK/B,wDAGS,2CACE,AAAO,0BACP,wDAEE,wDAKE,kBACL,qBACO,qCACW,mNAIb;AACT,4CAAI,AAAS,AACR;AAC0B,gCAA7B,WAAM;AAEuC,gCAD7C,eAAI,OAAO,EACP,AAAuB,mCAAK,AAAO;;+RAS7D;IAMtB;;;IAheI;IACA;IACE,iBAAW;IACK;;;EA8dxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAEkC,UAAiB,IAAU;AAAhC;AACpB,gBAAM,AAAyC,AAAK,wDAAH,EAAE,IAAG;AACxD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AA0HJ,MAzHhB,AAAK,IAAD,WAAS,QAAC,WAAqB,eAAT,QAAQ,EAAW,WAAP,OAAO,WAAC,wBACxC,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,sDAES,qCACG,aACD,cACA,6BACE,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,sDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,sBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,sBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,sBACD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,0HAIlB,wDAES,qCACG,aACD,cACA,6BACE,kBAMA,cADA,WAF2B,WADD,WADV,WAAZ,WAAP,OAAO,WAAC,mBACS,WAAP,OAAO,WAAC,qBACD,WAAP,OAAO,WAAC,qBACZ,4BAGD,qCACS,+BACJ,0IAIJ,6CACM,6CACW,wCAAS,aAC7B,KAAK,yLAOxB,WAAM;AACZ,YAAO,KAAI;IACb;;0CAEoB,eAAsB,IAAU;AAC3C;AACP,YAAQ,aAAa;;;AAahB,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;;AAaC,QAXD,WAAW,iDACD,oBAAS,GAAG,EAAE,EAAE,KAAK,YACpB,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,gCAEM,iCADoB,WAAd,AAAS,QAAD,wBACZ,AAAS,QAAD,QACR,sBAAC,kBAAK,+IAEd;AAGV;;;AAEJ,UAAO,SAAQ;EACjB;8DAE8D;AAAR;AAC7C,gBAAM,AAAsC,AAAK,qDAAH,EAAE,IAAG;AACrD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEmB,kBAAQ;AAa9B,MAZN,AAAK,IAAD,WAAS,QAAC,WAAY,AAAM,KAAD,OACzB,0DACgB,WAAP,OAAO,WAAC,uBACR,qCACE,WAAP,OAAO,WAAC,qBACD,qCACS,AAAI,wBAAC,gBACT,kBACa;AAKnC,YAAO,MAAK;IACd;;0CAEsB,SAAgB,WAAkB;AACtD,UAAO,2CACI,OAAO,WACP,QAAc,WACd,qDACM,SAAS,gBACN,YAAY;EAIlC;gCAEiB,SAAgB,cAAmB;AAClD,UAAO,2CACI,OAAO,WACP,QAAc,WACd,mDACS,YAAY,SAAQ,KAAK;EAI/C","file":"notas_page.ddc.js"}');
  // Exports:
  return {
    pages__notas_page: notas_page
  };
});

//# sourceMappingURL=notas_page.ddc.js.map
