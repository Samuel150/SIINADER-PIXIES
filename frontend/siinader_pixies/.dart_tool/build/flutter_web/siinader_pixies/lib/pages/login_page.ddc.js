define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/siinader_pixies/pages/home_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__siinader_pixies__pages__home_page) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const input_border = packages__flutter__material.src__material__input_border;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const page = packages__flutter__material.src__material__page;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const home_page = packages__siinader_pixies__pages__home_page.pages__home_page;
  const login_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let BuildContextToHomePage = () => (BuildContextToHomePage = dart.constFn(dart.fnType(home_page.HomePage, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 26,
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
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 27,
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
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 31,
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
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 109,
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
        [_Location_column]: 37,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C51() {
      return C51 = dart.constList([], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 64,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 160,
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
        [_Location_column]: 17,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 34,
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
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    }
  });
  login_page.LoginPage = class LoginPage extends framework.StatefulWidget {
    createState() {
      return new login_page._LoginPageState.new();
    }
  };
  (login_page.LoginPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login_page.LoginPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login_page.LoginPage.prototype;
  dart.addTypeTests(login_page.LoginPage);
  dart.setMethodSignature(login_page.LoginPage, () => ({
    __proto__: dart.getMethods(login_page.LoginPage.__proto__),
    createState: dart.fnType(login_page._LoginPageState, [])
  }));
  dart.setLibraryUri(login_page.LoginPage, "package:siinader_pixies/pages/login_page.dart");
  const _formKey = dart.privateName(login_page, "_formKey");
  const _key = dart.privateName(login_page, "_key");
  const _username = dart.privateName(login_page, "_username");
  const _password = dart.privateName(login_page, "_password");
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
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C10;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  let C15;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C38;
  let C34;
  let C33;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C51;
  let C50;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C57;
  let C56;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  login_page._LoginPageState = class _LoginPageState extends framework.State$(login_page.LoginPage) {
    initState() {
      super.initState();
      this[_username] = new editable_text.TextEditingController.new({text: ""});
      this[_password] = new editable_text.TextEditingController.new({text: ""});
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_key], appBar: new app_bar.AppBar.new({title: new text.Text.new("SIINADER", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), centerTitle: true, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/UPEA.jpg", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new form.Form.new({key: this[_formKey], child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C10 || CT.C10, child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_username], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CÓDIGO DE USUARIO" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new basic.Padding.new({padding: C10 || CT.C10, child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_password], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CONTRASEÑA" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.lock_open, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CONTRASEÑA", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), new raised_button.RaisedButton.new({child: new text.Text.new("INGRESAR", {$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), onPressed: dart.fn(() => {
                      if (dart.test(this[_formKey].currentState.validate())) {
                        navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({$creationLocationd_0dea112b090073317d4: C50 || CT.C50}), BuildContextToHomePage())}));
                      }
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C52 || CT.C52})]), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
  };
  (login_page._LoginPageState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_key] = GlobalKeyOfScaffoldState().new();
    this[_username] = null;
    this[_password] = null;
    login_page._LoginPageState.__proto__.new.call(this);
    ;
  }).prototype = login_page._LoginPageState.prototype;
  dart.addTypeTests(login_page._LoginPageState);
  dart.setMethodSignature(login_page._LoginPageState, () => ({
    __proto__: dart.getMethods(login_page._LoginPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_page._LoginPageState, "package:siinader_pixies/pages/login_page.dart");
  dart.setFieldSignature(login_page._LoginPageState, () => ({
    __proto__: dart.getFields(login_page._LoginPageState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_key]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_username]: dart.fieldType(editable_text.TextEditingController),
    [_password]: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/siinader_pixies/pages/login_page", {
    "package:siinader_pixies/pages/login_page.dart": login_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AACqC,MAA3C,kBAAY,mDAA4B;AACG,MAA3C,kBAAY,mDAA4B;IAC1C;UAG0B;AACxB,YAAO,iCACA,oBACG,+BACC,kBAAK,iFACC,mEAET,6BACc,sBACV,sBAAM,kFACZ,wBACO,uBACE,gCACa,sBAChB,sDAES,oCACE,cACA,mDACO,4BACD,QAAC,SAAW,AAAM,KAAD,aACtB,0CACA,qCACM,qDACE,kBACJ,4CACQ,AAAI,wBAAC,2EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,sBACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,iMAK/B,sDAES,oCACE,cACA,mDACO,4BACD,QAAC,SAAW,AAAM,KAAD,aACtB,mCACA,qCACM,qDACE,kBACJ,+BACQ,AAAI,wBAAC,2EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,0BACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,iMAK/B,2CACW,kBAAK,iFACD;AACT,oCAAI,AAAS,AAAa;AAMvB,wBALS,+DACR,OAAO,EACP,yCACW,QAAc,WAAY;;;IAW7D;;;IAtKM,iBAAW;IACX,aAAO;IACS;IACA;;;EAoKxB","file":"login_page.ddc.js"}');
  // Exports:
  return {
    pages__login_page: login_page
  };
});

//# sourceMappingURL=login_page.ddc.js.map
