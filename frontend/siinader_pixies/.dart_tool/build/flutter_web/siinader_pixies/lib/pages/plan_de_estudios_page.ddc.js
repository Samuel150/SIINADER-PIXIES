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
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
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
  const plan_de_estudios_page = Object.create(dart.library);
  const $sublist = dartx.sublist;
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
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 19,
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
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 23,
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
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
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
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 29,
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
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 42,
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
        [_Location_column]: 24,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 40,
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
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 53,
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
        [_Location_column]: 24,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 51,
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
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 64,
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
        [_Location_column]: 24,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 62,
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
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 75,
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
        [_Location_column]: 24,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 73,
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
        [_Location_column]: 15,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 86,
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
        [_Location_column]: 24,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 84,
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
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 97,
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
        [_Location_column]: 24,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 95,
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
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 108,
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
        [_Location_column]: 24,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 106,
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
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 122,
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
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 124,
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
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 16,
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
        [_Location_column]: 14,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 100
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 186,
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
        [_Location_column]: 26,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 185,
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
        [_Location_column]: 24,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 181,
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
        [_Location_column]: 13,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 25
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 204,
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
        [_Location_column]: 26,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 203,
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
        [_Location_column]: 24,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C129() {
      return C129 = dart.constList([], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 226,
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
        [_Location_column]: 18,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 241,
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
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 238,
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
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 253,
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
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 250,
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
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 265,
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
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 262,
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
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 277,
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
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 274,
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
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 289,
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
        [_Location_line]: 288,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 286,
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
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 301,
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
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 298,
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
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 313,
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
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 310,
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
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 325,
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
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 327,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 322,
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
        [_Location_line]: 320,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/plan_de_estudios_page.dart"
      });
    }
  });
  plan_de_estudios_page.PlanEstudios = class PlanEstudios extends framework.StatefulWidget {
    createState() {
      return new plan_de_estudios_page._PlanEstudiosState.new();
    }
  };
  (plan_de_estudios_page.PlanEstudios.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    plan_de_estudios_page.PlanEstudios.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = plan_de_estudios_page.PlanEstudios.prototype;
  dart.addTypeTests(plan_de_estudios_page.PlanEstudios);
  dart.setMethodSignature(plan_de_estudios_page.PlanEstudios, () => ({
    __proto__: dart.getMethods(plan_de_estudios_page.PlanEstudios.__proto__),
    createState: dart.fnType(plan_de_estudios_page._PlanEstudiosState, [])
  }));
  dart.setLibraryUri(plan_de_estudios_page.PlanEstudios, "package:siinader_pixies/pages/plan_de_estudios_page.dart");
  const _semestreValue = dart.privateName(plan_de_estudios_page, "_semestreValue");
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
  let C85;
  let C84;
  plan_de_estudios_page._PlanEstudiosState = class _PlanEstudiosState extends framework.State$(plan_de_estudios_page.PlanEstudios) {
    build(context) {
      return new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/estudios.jpg", {height: 400.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new("CARRERA DE DERECHO", {style: new text_style.TextStyle.new({fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new (DropdownButtonOfint()).new({items: JSArrayOfDropdownMenuItemOfint().of([new (DropdownMenuItemOfint()).new({value: 1, child: new text.Text.new("PRIMER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new (DropdownMenuItemOfint()).new({value: 2, child: new text.Text.new("SEGUNDO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (DropdownMenuItemOfint()).new({value: 3, child: new text.Text.new("TERCER SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (DropdownMenuItemOfint()).new({value: 4, child: new text.Text.new("CUARTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new (DropdownMenuItemOfint()).new({value: 5, child: new text.Text.new("QUINTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new (DropdownMenuItemOfint()).new({value: 6, child: new text.Text.new("SEXTO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new (DropdownMenuItemOfint()).new({value: 7, child: new text.Text.new("SÉPTIMO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (DropdownMenuItemOfint()).new({value: 8, child: new text.Text.new("OCTAVO SEMESTRE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), onChanged: dart.fn(value => {
                this.setState(dart.fn(() => {
                  this[_semestreValue] = value;
                }, VoidToNull()));
              }, intToNull()), hint: new text.Text.new("SEMESTRE", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), value: this[_semestreValue], $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), plan_de_estudios_page.semestre(this[_semestreValue])]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
    }
  };
  (plan_de_estudios_page._PlanEstudiosState.new = function() {
    this[_semestreValue] = null;
    plan_de_estudios_page._PlanEstudiosState.__proto__.new.call(this);
    ;
  }).prototype = plan_de_estudios_page._PlanEstudiosState.prototype;
  dart.addTypeTests(plan_de_estudios_page._PlanEstudiosState);
  dart.setMethodSignature(plan_de_estudios_page._PlanEstudiosState, () => ({
    __proto__: dart.getMethods(plan_de_estudios_page._PlanEstudiosState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(plan_de_estudios_page._PlanEstudiosState, "package:siinader_pixies/pages/plan_de_estudios_page.dart");
  dart.setFieldSignature(plan_de_estudios_page._PlanEstudiosState, () => ({
    __proto__: dart.getFields(plan_de_estudios_page._PlanEstudiosState.__proto__),
    [_semestreValue]: dart.fieldType(core.int)
  }));
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C87;
  let C90;
  let C89;
  let C88;
  let C93;
  let C92;
  let C91;
  let C96;
  let C97;
  let C98;
  let C99;
  let C95;
  let C94;
  let C102;
  let C103;
  let C101;
  let C100;
  let C104;
  let C107;
  let C106;
  let C105;
  let C110;
  let C109;
  let C108;
  let C113;
  let C114;
  let C115;
  let C116;
  let C112;
  let C111;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C126;
  let C125;
  let C129;
  let C128;
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
  plan_de_estudios_page.getMaterias = function getMaterias(semestre) {
    return async.async(ListOfWidget(), function* getMaterias() {
      let url = "http://localhost:3000/api/materias";
      let data = null;
      let response = null;
      try {
        response = (yield http.get(url));
        data = core.List._check(convert.jsonDecode(response.body));
      } catch (e$) {
        let e = dart.getThrown(e$);
        core.print(e);
      }
      let list = [];
      switch (semestre) {
        case 1:
        {
          list = data[$sublist](0, 8);
          break;
        }
        case 2:
        {
          list = data[$sublist](8, 16);
          break;
        }
        case 3:
        {
          list = data[$sublist](16, 24);
          break;
        }
        case 4:
        {
          list = data[$sublist](24, 32);
          break;
        }
        case 5:
        {
          list = data[$sublist](32, 41);
          break;
        }
        case 6:
        {
          list = data[$sublist](41, 49);
          break;
        }
        case 7:
        {
          list = data[$sublist](49, 58);
          break;
        }
        case 8:
        {
          list = data[$sublist](58, 67);
          break;
        }
        default:
        {
          list = data[$sublist](0, 8);
          break;
        }
      }
      let materias = JSArrayOfWidget().of([]);
      list[$forEach](dart.fn(materia => materias[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C87 || CT.C87, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(materia, '_get', ["nombre"])), {$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new basic.Padding.new({padding: C104 || CT.C104, child: new container.Container.new({width: 500.0, height: 40.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(materia, '_get', ["creditos"])), {$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121})), dynamicTovoid()));
      return materias;
    });
  };
  plan_de_estudios_page.semestre = function semestre(semestreValue) {
    let semestre = null;
    switch (semestreValue) {
      case 1:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(1), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C128 || CT.C128}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
        break;
      }
      case 2:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(2), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C137 || CT.C137}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
        break;
      }
      case 3:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(3), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C145 || CT.C145}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C146 || CT.C146});
        break;
      }
      case 4:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(4), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C153 || CT.C153}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
        break;
      }
      case 5:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(5), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C161 || CT.C161}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
        break;
      }
      case 6:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(6), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C169 || CT.C169}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C170 || CT.C170});
        break;
      }
      case 7:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(7), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C174 || CT.C174}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C177 || CT.C177}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C178 || CT.C178});
        break;
      }
      case 8:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(8), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C185 || CT.C185}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C186 || CT.C186});
        break;
      }
      default:
      {
        semestre = new (FutureBuilderOfListOfWidget()).new({future: plan_de_estudios_page.getMaterias(1), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C190 || CT.C190}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C193 || CT.C193}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C194 || CT.C194});
        break;
      }
    }
    return semestre;
  };
  dart.trackLibraries("packages/siinader_pixies/pages/plan_de_estudios_page", {
    "package:siinader_pixies/pages/plan_de_estudios_page.dart": plan_de_estudios_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plan_de_estudios_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMsC;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,gEACE,gCACa,sBACV,sBACJ,uCACQ,8DAEV,kBACE,8BACO,wCAAoB,+DAE7B,wCACS,qCACL,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,sIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,0BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,4BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,wIAI7B,0CACS,UACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,qJAKpB,QAAK;AAGZ,gBAFF,cAAS;AACe,kBAAtB,uBAAiB,KAAK;;qCAGpB,kBACJ,6EAEK,+EAET,+BAAS;IAIjB;;;IAvHI;;;EAwHN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2DAEqC;AAAL;AACvB,gBAAM;AACR;AACS;AACd;AACgC,QAA9B,YAAW,MAAM,SAAS,GAAG;AACG,eAAhC,iBAAO,mBAAW,AAAS,QAAD;;YACnB;AACC,QAAR,WAAM,CAAC;;AAEJ,iBAAO;AACZ,cAAQ,QAAQ;;;AAEa,UAAzB,OAAO,AAAK,IAAD,WAAS,GAAG;AACvB;;;;AAE0B,UAA1B,OAAO,AAAK,IAAD,WAAS,GAAG;AACvB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAE2B,UAA3B,OAAO,AAAK,IAAD,WAAS,IAAI;AACxB;;;;AAEyB,UAAzB,OAAO,AAAK,IAAD,WAAS,GAAG;AACvB;;;AAES,qBAAW;AA2ClB,MA1CN,AAAK,IAAD,WAAS,QAAC,WAAY,AAAS,QAAD,OAC5B,sCACuC,yCACnB,sBAChB,sDAGS,oCACE,eACC,aACD,6BACE,qCACE,WAAP,OAAO,WAAC,4IAGA,6CACM,6CACW,wCAAS,aACtB,0IAIpB,wDAGS,oCACE,eACC,aACD,6BACE,kBACe,cAAb,WAAP,OAAO,WAAC,kJAGA,6CACM,6CACW,wCAAS,aACtB;AAO9B,YAAO,SAAQ;IACjB;;qDAEoB;AACX;AACP,YAAQ,aAAa;;;AAWhB,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;;AAWC,QATD,WAAW,iDACD,kCAAY,aACX,SAAc,SAAuB,uBACrC,AAAS,QAAD,YACT,sDACY,AAAS,QAAD,oEAEpB;AAGV;;;AAEJ,UAAO,SAAQ;EACjB","file":"plan_de_estudios_page.ddc.js"}');
  // Exports:
  return {
    pages__plan_de_estudios_page: plan_de_estudios_page
  };
});

//# sourceMappingURL=plan_de_estudios_page.ddc.js.map
