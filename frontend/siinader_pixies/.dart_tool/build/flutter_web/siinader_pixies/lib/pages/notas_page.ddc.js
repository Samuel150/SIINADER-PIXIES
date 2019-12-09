define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/http/http', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__http__http, packages__flutter__src__rendering__animated_size) {
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
  const http = packages__http__http.http;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const notas_page = Object.create(dart.library);
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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 21,
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
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 26,
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
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 31,
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
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C13() {
      return C13 = dart.constList([], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 40,
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
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 115,
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
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 18,
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
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 100
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
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
        [_Location_column]: 15,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 178,
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
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 196,
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
        [_Location_column]: 15,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 156,
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
        [_Location_column]: 11,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 245,
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
        [_Location_column]: 17,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 242,
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
        [_Location_column]: 18,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 257,
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
        [_Location_column]: 17,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 259,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 266,
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
        [_Location_column]: 18,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 283,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 293,
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
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 290,
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
        [_Location_line]: 288,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 305,
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
        [_Location_column]: 17,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 307,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 317,
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
        [_Location_column]: 17,
        [_Location_line]: 316,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 319,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C214 || CT.C214,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 331,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C222 || CT.C222,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 341,
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
        [_Location_column]: 17,
        [_Location_line]: 340,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 343,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/notas_page.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 336,
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
  let C13;
  let C12;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C86;
  let C82;
  let C81;
  let C89;
  let C88;
  let C87;
  notas_page._NotasPageState = class _NotasPageState extends framework.State$(notas_page.NotasPage) {
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/notas.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.widget.rol === "estudiantes" ? new text.Text.new("MIS NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}) : this.widget.rol === "docentes" || this.widget.rol === "kardex" ? new text.Text.new("NOTAS", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), onChanged: dart.fn(value => {
              this.setState(dart.fn(() => {
                this[_semestreValue] = value;
              }, VoidToNull()));
            }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), notas_page.semestre(this[_semestreValue], this.widget.id)]), $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
    }
  };
  (notas_page._NotasPageState.new = function() {
    this[_semestreValue] = null;
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
    [_semestreValue]: dart.fieldType(core.int)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C90;
  let C93;
  let C92;
  let C91;
  let C96;
  let C95;
  let C94;
  let C99;
  let C100;
  let C101;
  let C102;
  let C98;
  let C97;
  let C105;
  let C106;
  let C104;
  let C103;
  let C107;
  let C110;
  let C109;
  let C108;
  let C113;
  let C112;
  let C111;
  let C116;
  let C117;
  let C118;
  let C119;
  let C115;
  let C114;
  let C122;
  let C123;
  let C121;
  let C120;
  let C126;
  let C125;
  let C124;
  let C129;
  let C128;
  let C127;
  let C132;
  let C133;
  let C134;
  let C135;
  let C131;
  let C130;
  let C138;
  let C139;
  let C137;
  let C136;
  let C140;
  let C143;
  let C142;
  let C141;
  let C146;
  let C145;
  let C144;
  let C149;
  let C150;
  let C151;
  let C152;
  let C148;
  let C147;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C160;
  let C158;
  let C157;
  let C163;
  let C162;
  let C161;
  let C164;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C170;
  let C169;
  let C172;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C178;
  let C177;
  let C180;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C186;
  let C185;
  let C188;
  let C191;
  let C192;
  let C190;
  let C189;
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
  let C204;
  let C207;
  let C208;
  let C206;
  let C205;
  let C211;
  let C210;
  let C209;
  let C212;
  let C215;
  let C216;
  let C214;
  let C213;
  let C219;
  let C218;
  let C217;
  let C220;
  let C223;
  let C224;
  let C222;
  let C221;
  let C227;
  let C226;
  let C225;
  let C228;
  let C231;
  let C232;
  let C230;
  let C229;
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
      data[$forEach](dart.fn(materia => core.identical(semestre, dart.dsend(materia, '_get', ["semestre_cursada"])) ? list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C90 || CT.C90, child: new container.Container.new({height: 40.0, width: 400.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), new basic.Padding.new({padding: C107 || CT.C107, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota1er"])), {$creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new basic.Padding.new({padding: C107 || CT.C107, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota2do"])), {$creationLocationd_0dea112b090073317d4: C124 || CT.C124}), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), new basic.Padding.new({padding: C140 || CT.C140, child: new container.Container.new({height: 40.0, width: 200.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["nota3er"])), {$creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153})]), $creationLocationd_0dea112b090073317d4: C157 || CT.C157})) : core.print("No del semestre seleccionado"), dynamicTovoid()));
      return list;
    });
  };
  notas_page.semestre = function semestre(semestreValue, id) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C164 || CT.C164}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C165 || CT.C165});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(2, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C172 || CT.C172}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C173 || CT.C173});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(3, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C180 || CT.C180}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C181 || CT.C181});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(4, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C188 || CT.C188}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C189 || CT.C189});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(5, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C193 || CT.C193}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C196 || CT.C196}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C197 || CT.C197});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(6, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C204 || CT.C204}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C205 || CT.C205});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(7, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C212 || CT.C212}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C213 || CT.C213});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(8, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C220 || CT.C220}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C221 || CT.C221});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: notas_page.getNotas(1, id), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C228 || CT.C228}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C229 || CT.C229});
        break;
      }
    }
    return semestre;
  };
  dart.trackLibraries("packages/siinader_pixies/pages/notas_page", {
    "package:siinader_pixies/pages/notas_page.dart": notas_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["notas_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;IACA;;;;;;;AAEoB;IAAiB;;;QAJnC;QAAU;QAAU;;IAAV;IAAU;AAAO,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU/B;AACxB,YAAO,iCACa,sBACV,sBACJ,oCACQ,8DAEV,AAAO,AAAI,oBAAG,gBACR,kBACE,qBACO,wCAAoB,gEAE7B,AAAO,AAAI,AAAc,oBAAX,cAAc,AAAO,AAAI,oBAAG,WACtC,kBACE,iBACO,wCAAoB,gEAE7B,sFACV,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,cAFF,cAAS;AACe,gBAAtB,uBAAiB,KAAK;;mCAGpB,kBACJ,6EAEK,+EAET,oBAAS,sBAAgB,AAAO;IAGtC;;;IA5HI;;;EA6HN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAEkC,UAAiB;AAAtB;AACpB,gBAAM,AAAyC,AAAK,wDAAH,EAAE,IAAG;AACxD;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEI,iBAAO;AAiFwB,MAhF5C,AAAK,IAAD,WAAS,QAAC,WAAqB,eAAT,QAAQ,EAAW,WAAP,OAAO,WAAC,wBACxC,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,sDAGS,qCACG,aACD,cACA,6BACE,qCACE,WAAP,OAAO,WAAC,4IAGA,6CACM,6CACW,wCAAS,aACtB,0IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,4IAIpB,wDAGS,qCACG,aACD,cACA,6BACE,kBACc,cAAZ,WAAP,OAAO,WAAC,iJAGA,6CACM,6CACW,wCAAS,aACtB,2MAO1B,WAAM;AACZ,YAAO,KAAI;IACb;;0CAEoB,eAAsB;AACjC;AACP,YAAQ,aAAa;;;AAWhB,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,oBAAS,GAAG,EAAE,YACb,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;AAEJ,UAAO,SAAQ;EACjB","file":"notas_page.ddc.js"}');
  // Exports:
  return {
    pages__notas_page: notas_page
  };
});

//# sourceMappingURL=notas_page.ddc.js.map
