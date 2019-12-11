define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/animation/animation', 'packages/siinader_pixies/pages/perfil_page', 'packages/siinader_pixies/pages/inicio_page', 'packages/siinader_pixies/pages/materias_page', 'packages/siinader_pixies/pages/plan_de_estudios_page', 'packages/siinader_pixies/pages/notas_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__animation__animation, packages__siinader_pixies__pages__perfil_page, packages__siinader_pixies__pages__inicio_page, packages__siinader_pixies__pages__materias_page, packages__siinader_pixies__pages__plan_de_estudios_page, packages__siinader_pixies__pages__notas_page) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const icons = packages__flutter__material.src__material__icons;
  const page = packages__flutter__material.src__material__page;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const perfil_page = packages__siinader_pixies__pages__perfil_page.pages__perfil_page;
  const inicio_page = packages__siinader_pixies__pages__inicio_page.pages__inicio_page;
  const materias_page = packages__siinader_pixies__pages__materias_page.pages__materias_page;
  const plan_de_estudios_page = packages__siinader_pixies__pages__plan_de_estudios_page.pages__plan_de_estudios_page;
  const notas_page = packages__siinader_pixies__pages__notas_page.pages__notas_page;
  const home_page = Object.create(dart.library);
  const login_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfint = () => (PopupMenuButtonOfint = dart.constFn(popup_menu.PopupMenuButton$(core.int)))();
  let PopupMenuItemOfint = () => (PopupMenuItemOfint = dart.constFn(popup_menu.PopupMenuItem$(core.int)))();
  let JSArrayOfPopupMenuItemOfint = () => (JSArrayOfPopupMenuItemOfint = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfint())))();
  let ListOfPopupMenuItemOfint = () => (ListOfPopupMenuItemOfint = dart.constFn(core.List$(PopupMenuItemOfint())))();
  let BuildContextToListOfPopupMenuItemOfint = () => (BuildContextToListOfPopupMenuItemOfint = dart.constFn(dart.fnType(ListOfPopupMenuItemOfint(), [framework.BuildContext])))();
  let BuildContextToPerfilPage = () => (BuildContextToPerfilPage = dart.constFn(dart.fnType(perfil_page.PerfilPage, [framework.BuildContext])))();
  let BuildContextToLoginPage = () => (BuildContextToLoginPage = dart.constFn(dart.fnType(login_page.LoginPage, [framework.BuildContext])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let BuildContextToHomePage = () => (BuildContextToHomePage = dart.constFn(dart.fnType(home_page.HomePage, [framework.BuildContext])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 31,
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
        [_Location_column]: 18,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 29,
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
        [_Location_column]: 16,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 12
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 41,
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
        [_Location_column]: 24,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 39,
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
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 45,
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
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 61,
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
        [_Location_column]: 24,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 59,
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
        [_Location_column]: 22,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 57,
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
        [_Location_column]: 20,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 65,
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
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 81,
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
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 79,
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
        [_Location_column]: 22,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 99,
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
        [_Location_column]: 22,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 97,
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
        [_Location_column]: 20,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 105,
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
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 121,
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
        [_Location_column]: 24,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 119,
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
        [_Location_column]: 22,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 117,
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
        [_Location_column]: 20,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 148,
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
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C104() {
      return C104 = dart.constList([], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 22,
        [_Location_line]: 173,
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
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 24,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 41,
        [_Location_line]: 174,
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
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 21,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 38,
        [_Location_line]: 176,
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
        [_Location_column]: 11,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 22,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 39,
        [_Location_line]: 177,
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
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 169,
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
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 29,
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
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 31,
        [_Location_line]: 154,
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
        [_Location_column]: 41,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 27,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160, C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 144,
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
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 31,
        [_Location_line]: 215,
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
        [_Location_column]: 41,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 27,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 257,
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
        [_Location_column]: 32,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 207,
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
        [_Location_column]: 30,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 265,
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
        [_Location_column]: 32,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 37,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 54,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 62,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194, C195 || CT.C195, C196 || CT.C196], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 68,
        [_Location_line]: 283,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 266,
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
        [_Location_column]: 21,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 141,
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
        [_Location_column]: 24,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 17,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    }
  });
  const rol$ = dart.privateName(home_page, "HomePage.rol");
  const name$ = dart.privateName(home_page, "HomePage.name");
  const id$ = dart.privateName(home_page, "HomePage.id");
  home_page.HomePage = class HomePage extends framework.StatefulWidget {
    get rol() {
      return this[rol$];
    }
    set rol(value) {
      super.rol = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    createState() {
      return new home_page._HomePageState.new();
    }
  };
  (home_page.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let rol = opts && 'rol' in opts ? opts.rol : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[rol$] = rol;
    this[id$] = id;
    this[name$] = name;
    home_page.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.HomePage.prototype;
  dart.addTypeTests(home_page.HomePage);
  dart.setMethodSignature(home_page.HomePage, () => ({
    __proto__: dart.getMethods(home_page.HomePage.__proto__),
    createState: dart.fnType(home_page._HomePageState, [])
  }));
  dart.setLibraryUri(home_page.HomePage, "package:siinader_pixies/pages/home_page.dart");
  dart.setFieldSignature(home_page.HomePage, () => ({
    __proto__: dart.getFields(home_page.HomePage.__proto__),
    rol: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    id: dart.finalFieldType(core.String)
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
  let C20;
  let C19;
  let C18;
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
  let C34;
  let C33;
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
  let C49;
  let C48;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C64;
  let C63;
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
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C97;
  let C96;
  let C101;
  let C102;
  let C100;
  let C99;
  let C104;
  let C103;
  let C105;
  let C108;
  let C109;
  let C110;
  let C111;
  let C107;
  let C106;
  let C114;
  let C115;
  let C116;
  let C113;
  let C112;
  let C119;
  let C118;
  let C117;
  let C122;
  let C123;
  let C121;
  let C120;
  let C124;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C136;
  let C137;
  let C134;
  let C133;
  let C140;
  let C141;
  let C139;
  let C138;
  home_page._HomePageState = class _HomePageState extends framework.State$(home_page.HomePage) {
    build(context) {
      core.print(this.widget.rol);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.white, title: new basic.Padding.new({padding: C0 || CT.C0, child: new text.Text.new("SIINADER", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), actions: JSArrayOfWidget().of([new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("Inicio", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(0, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("Materias", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(1, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("Plan de Estudios", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(2, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("Notas", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(3, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("Perfil", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(4, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new (PopupMenuButtonOfint()).new({icon: new icon.Icon.new(icons.Icons.settings, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), tooltip: "Configuración", itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfint().of([new (PopupMenuItemOfint()).new({value: 1, child: new text.Text.new("Editar Perfil", {$creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), new (PopupMenuItemOfint()).new({value: 2, child: new text.Text.new("Cerrar Sesión", {$creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99})]), BuildContextToListOfPopupMenuItemOfint()), onSelected: dart.fn(value => {
                dart.equals(value, 1) ? navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new perfil_page.PerfilPage.new({$creationLocationd_0dea112b090073317d4: C103 || CT.C103}), BuildContextToPerfilPage())})) : navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new login_page.LoginPage.new({$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), BuildContextToLoginPage())}));
              }, dynamicToNull()), $creationLocationd_0dea112b090073317d4: C106 || CT.C106})]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), body: new page_view.PageView.new({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), controller: this.pageController, children: JSArrayOfWidget().of([new inicio_page.InicioPage.new({rol: this.widget.rol, $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), new materias_page.MateriasPage.new({rol: this.widget.rol, id: this.widget.id, $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new plan_de_estudios_page.PlanEstudios.new({$creationLocationd_0dea112b090073317d4: C124 || CT.C124}), new notas_page.NotasPage.new({rol: this.widget.rol, id: this.widget.id, $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new perfil_page.PerfilPage.new({rol: this.widget.rol, id: this.widget.id, $creationLocationd_0dea112b090073317d4: C129 || CT.C129})]), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
    }
  };
  (home_page._HomePageState.new = function() {
    this.pageController = new page_view.PageController.new({initialPage: 0, keepPage: true});
    home_page._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = home_page._HomePageState.prototype;
  dart.addTypeTests(home_page._HomePageState);
  dart.setMethodSignature(home_page._HomePageState, () => ({
    __proto__: dart.getMethods(home_page._HomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page._HomePageState, "package:siinader_pixies/pages/home_page.dart");
  dart.setFieldSignature(home_page._HomePageState, () => ({
    __proto__: dart.getFields(home_page._HomePageState.__proto__),
    pageController: dart.finalFieldType(page_view.PageController)
  }));
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
  let C144;
  let C143;
  let C142;
  let C147;
  let C148;
  let C146;
  let C145;
  let C151;
  let C150;
  let C149;
  let C152;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C160;
  let C161;
  let C162;
  let C158;
  let C157;
  let C165;
  let C166;
  let C164;
  let C163;
  let C169;
  let C170;
  let C168;
  let C167;
  let C173;
  let C174;
  let C172;
  let C171;
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
  let C187;
  let C188;
  let C186;
  let C185;
  let C191;
  let C190;
  let C189;
  let C194;
  let C195;
  let C196;
  let C193;
  let C192;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C202;
  let C201;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C209;
  let C208;
  let C213;
  let C212;
  let C211;
  let C216;
  let C217;
  let C218;
  let C215;
  let C214;
  login_page._LoginPageState = class _LoginPageState extends framework.State$(login_page.LoginPage) {
    initState() {
      super.initState();
      this[_username] = new editable_text.TextEditingController.new({text: ""});
      this[_password] = new editable_text.TextEditingController.new({text: ""});
    }
    build(context) {
      let _usuarioValue = null;
      return new scaffold.Scaffold.new({key: this[_key], appBar: new app_bar.AppBar.new({title: new text.Text.new("SIINADER", {$creationLocationd_0dea112b090073317d4: C142 || CT.C142}), centerTitle: true, $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), body: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/UPEA.jpg", {$creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C152 || CT.C152, child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_username], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CÓDIGO DE USUARIO" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), new basic.Padding.new({padding: C152 || CT.C152, child: new container.Container.new({width: 400.0, child: new text_form_field.TextFormField.new({controller: this[_password], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CONTRASEÑA" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.lock_open, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CONTRASEÑA", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), new raised_button.RaisedButton.new({child: new text.Text.new("INGRESAR", {$creationLocationd_0dea112b090073317d4: C189 || CT.C189}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                          if (dart.test(this[_formKey].currentState.validate())) {
                            let id = this[_username].text;
                            navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({rol: "docentes", id: id, name: "Mateo", $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), BuildContextToHomePage())}));
                          }
                        }).bind(this)), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C197 || CT.C197})]), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204})]), $creationLocationd_0dea112b090073317d4: C208 || CT.C208})]), $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), $creationLocationd_0dea112b090073317d4: C214 || CT.C214});
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
  dart.trackLibraries("packages/siinader_pixies/pages/home_page", {
    "package:siinader_pixies/pages/home_page.dart": home_page,
    "package:siinader_pixies/pages/login_page.dart": login_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_page.dart","login_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUe;;;;;;IACA;;;;;;IACA;;;;;;;AAEmB;IAAgB;;;QALlC;QAAU;QAAU;QAAS;;IAAnB;IAAU;IAAS;AAAS,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYzC;AACP,MAAjB,WAAM,AAAO;AACb,YAAO,oCACG,yCACkB,4BACjB,oDAEE,kBACL,oBACO,qCAAwB,AAAI,wBAAC,+HAGvB,sBACf,iCACS,6BACE,oDAEE,kBACL,kBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,oDAEE,kBACL,oBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,oDAEE,kBACL,4BACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,oDAEE,kBACL,iBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,oDAEE,kBACL,kBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,wCACQ,kBACE,8BACQ,AAAI,wBAAC,wEAEZ,8BACI,QAAC,WAAY,kCACxB,uCACS,UACA,kBAAK,oIAEd,uCACS,UACA,kBAAK,6LAGJ,QAAC;AAaJ,gBAZD,YAAN,KAAK,EAAI,KACO,uCACR,OAAO,EACP,yCACW,QAAc,WAAY,4HAG7B,+DACR,OAAO,EACP,yCACW,QAAc,WAAY;iKAO/C,qCACK,mEACG,+BACM,sBAChB,qCAAgB,AAAO,4EACvB,yCAAkB,AAAO,qBAAS,AAAO,2EACzC,uGACA,mCAAe,AAAO,qBAAS,AAAO,2EACtC,qCAAgB,AAAO,qBAAS,AAAO;IAI/C;;;IAlKM,sBAAiB,+CAA4B,aAAa;;;EAmKlE;;;;;;;;;;;;;AC9KmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AACqC,MAA3C,kBAAY,mDAA4B;AACG,MAA3C,kBAAY,mDAA4B;IAC1C;UAG0B;AACjB;AACP,YAAO,iCACA,oBACG,+BACC,kBAAK,qFACC,uEAET,6BACc,sBACV,sBAAM,sFACZ,gCACoB,sBAsGhB,wBACO,uBACE,gCACa,sBAChB,wDAES,oCACE,cACA,mDACO,4BACD,QAAC,SAAW,AAAM,KAAD,aACtB,0CACA,qCACM,qDACE,kBACJ,4CACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,sBACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,uMAK/B,wDAES,oCACE,cACA,mDACO,4BACD,QAAC,SAAW,AAAM,KAAD,aACtB,mCACA,qCACM,qDACE,kBACJ,+BACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,0BACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,uMAK/B,2CACW,kBAAK,mFACD;AACT,wCAAI,AAAS,AAAa;AAYjB,qCAAK,AAAU;AAOrB,4BANS,+DACR,OAAO,EACP,yCACW,QAAc,WAAY,iCAC1B,gBAAgB,EAAE,QAAQ;;wBAI1C;IASvB;;;IA7RM,iBAAW;IACX,aAAO;IACS;IACA;;;EA2RxB","file":"home_page.ddc.js"}');
  // Exports:
  return {
    pages__home_page: home_page,
    pages__login_page: login_page
  };
});

//# sourceMappingURL=home_page.ddc.js.map
