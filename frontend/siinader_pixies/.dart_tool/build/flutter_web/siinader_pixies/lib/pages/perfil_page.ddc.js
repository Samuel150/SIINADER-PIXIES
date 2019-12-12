define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/http/http', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__http__http, packages__flutter__src__painting___network_image_web) {
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
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const http = packages__http__http.http;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const perfil_page = Object.create(dart.library);
  const $toString = dartx.toString;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let FutureBuilderOfListOfWidget = () => (FutureBuilderOfListOfWidget = dart.constFn(async$.FutureBuilder$(ListOfWidget())))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 24,
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
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 31,
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
        [_Location_column]: 25,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 40,
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
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 21,
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
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 19,
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
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 25,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 100
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 64,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 82,
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
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 110,
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
        [_Location_column]: 24,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 152,
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
        [_Location_column]: 22,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/perfil_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(perfil_page, "PerfilPage.rol");
  const id$ = dart.privateName(perfil_page, "PerfilPage.id");
  const color$ = dart.privateName(perfil_page, "PerfilPage.color");
  perfil_page.PerfilPage = class PerfilPage extends framework.StatefulWidget {
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
      return new perfil_page._PerfilPageState.new();
    }
  };
  (perfil_page.PerfilPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    this[color$] = color;
    perfil_page.PerfilPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = perfil_page.PerfilPage.prototype;
  dart.addTypeTests(perfil_page.PerfilPage);
  dart.setMethodSignature(perfil_page.PerfilPage, () => ({
    __proto__: dart.getMethods(perfil_page.PerfilPage.__proto__),
    createState: dart.fnType(perfil_page._PerfilPageState, [])
  }));
  dart.setLibraryUri(perfil_page.PerfilPage, "package:siinader_pixies/pages/perfil_page.dart");
  dart.setFieldSignature(perfil_page.PerfilPage, () => ({
    __proto__: dart.getFields(perfil_page.PerfilPage.__proto__),
    rol: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui.Color)
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
  let C8;
  let C7;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
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
  perfil_page._PerfilPageState = class _PerfilPageState extends framework.State$(perfil_page.PerfilPage) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("MI PERFIL", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new (FutureBuilderOfListOfWidget()).new({future: perfil_page.getDatos(this.widget.id, this.widget.rol, this.widget.color), builder: dart.fn((context, snapshot) => dart.test(snapshot.hasData) ? new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: ListOfWidget()._check(snapshot.data), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}) : new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new image.Image.asset("assets/images/perfil.png", {height: 400.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (perfil_page._PerfilPageState.new = function() {
    perfil_page._PerfilPageState.__proto__.new.call(this);
    ;
  }).prototype = perfil_page._PerfilPageState.prototype;
  dart.addTypeTests(perfil_page._PerfilPageState);
  dart.setMethodSignature(perfil_page._PerfilPageState, () => ({
    __proto__: dart.getMethods(perfil_page._PerfilPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(perfil_page._PerfilPageState, "package:siinader_pixies/pages/perfil_page.dart");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C28;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C40;
  let C41;
  let C37;
  let C36;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C57;
  let C58;
  let C54;
  let C53;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C68;
  let C67;
  let C72;
  let C73;
  let C74;
  let C75;
  let C71;
  let C70;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C85;
  let C84;
  let C89;
  let C90;
  let C91;
  let C92;
  let C88;
  let C87;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C98;
  let C97;
  perfil_page.getDatos = function getDatos(id, rol, color) {
    return async.async(ListOfWidget(), function* getDatos() {
      let idTabla = null;
      switch (rol) {
        case "estudiantes":
        {
          idTabla = "idEstudiante";
          break;
        }
        case "docentes":
        {
          idTabla = "idDocente";
          break;
        }
        case "kardex":
        {
          idTabla = "idKardex";
          break;
        }
        case "jefeCarrera":
        {
          idTabla = "idJefeCarrera";
          break;
        }
      }
      let url = "http://localhost:3000/api/" + dart.notNull(rol) + "/" + dart.notNull(id);
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
      data[$forEach](dart.fn(perfil => list[$add](new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C28 || CT.C28, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(core.String._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(dart.dsend(perfil, '_get', ["nombre"]), '+', [" "]), '+', [dart.dsend(perfil, '_get', ["apellido_1"])]), '+', [" "]), '+', [dart.dsend(perfil, '_get', ["apellido_2"])])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new basic.Padding.new({padding: C28 || CT.C28, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(perfil, '_get', ["ci"])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new basic.Padding.new({padding: C28 || CT.C28, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(perfil, '_get', [idTabla])), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new basic.Padding.new({padding: C28 || CT.C28, child: new container.Container.new({width: 400.0, height: 45.0, child: new basic.Center.new({child: new text.Text.new(dart.toString(dart.dsend(perfil, '_get', ["fecha_nacimiento"]))[$substring](0, 10), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(2.0), color: color}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93})]), $creationLocationd_0dea112b090073317d4: C97 || CT.C97})), dynamicTovoid()));
      return list;
    });
  };
  dart.trackLibraries("packages/siinader_pixies/pages/perfil_page", {
    "package:siinader_pixies/pages/perfil_page.dart": perfil_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["perfil_page.dart"],"names":[],"mappings":"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","file":"perfil_page.ddc.js"}');
  // Exports:
  return {
    pages__perfil_page: perfil_page
  };
});

//# sourceMappingURL=perfil_page.ddc.js.map
