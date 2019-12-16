define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/animation/animation', 'packages/siinader_pixies/pages/inicio_page', 'packages/siinader_pixies/pages/materias_page', 'packages/siinader_pixies/pages/plan_de_estudios_page', 'packages/siinader_pixies/pages/notas_page', 'packages/siinader_pixies/pages/perfil_page', 'packages/siinader_pixies/pages/editar_perfil', 'packages/flutter/src/rendering/animated_size', 'packages/http/http'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__animation__animation, packages__siinader_pixies__pages__inicio_page, packages__siinader_pixies__pages__materias_page, packages__siinader_pixies__pages__plan_de_estudios_page, packages__siinader_pixies__pages__notas_page, packages__siinader_pixies__pages__perfil_page, packages__siinader_pixies__pages__editar_perfil, packages__flutter__src__rendering__animated_size, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const icons = packages__flutter__material.src__material__icons;
  const page = packages__flutter__material.src__material__page;
  const dialog = packages__flutter__material.src__material__dialog;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const inicio_page = packages__siinader_pixies__pages__inicio_page.pages__inicio_page;
  const materias_page = packages__siinader_pixies__pages__materias_page.pages__materias_page;
  const plan_de_estudios_page = packages__siinader_pixies__pages__plan_de_estudios_page.pages__plan_de_estudios_page;
  const notas_page = packages__siinader_pixies__pages__notas_page.pages__notas_page;
  const perfil_page = packages__siinader_pixies__pages__perfil_page.pages__perfil_page;
  const editar_perfil = packages__siinader_pixies__pages__editar_perfil.pages__editar_perfil;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const http = packages__http__http.http;
  const home_page = Object.create(dart.library);
  const login_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfint = () => (PopupMenuButtonOfint = dart.constFn(popup_menu.PopupMenuButton$(core.int)))();
  let PopupMenuItemOfint = () => (PopupMenuItemOfint = dart.constFn(popup_menu.PopupMenuItem$(core.int)))();
  let JSArrayOfPopupMenuItemOfint = () => (JSArrayOfPopupMenuItemOfint = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfint())))();
  let ListOfPopupMenuItemOfint = () => (ListOfPopupMenuItemOfint = dart.constFn(core.List$(PopupMenuItemOfint())))();
  let BuildContextToListOfPopupMenuItemOfint = () => (BuildContextToListOfPopupMenuItemOfint = dart.constFn(dart.fnType(ListOfPopupMenuItemOfint(), [framework.BuildContext])))();
  let BuildContextToLoginPage = () => (BuildContextToLoginPage = dart.constFn(dart.fnType(login_page.LoginPage, [framework.BuildContext])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToEditarPerfilPage = () => (BuildContextToEditarPerfilPage = dart.constFn(dart.fnType(editar_perfil.EditarPerfilPage, [framework.BuildContext])))();
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let JSArrayOfDropdownMenuItemOfString = () => (JSArrayOfDropdownMenuItemOfString = dart.constFn(_interceptors.JSArray$(DropdownMenuItemOfString())))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let BuildContextToHomePage = () => (BuildContextToHomePage = dart.constFn(dart.fnType(home_page.HomePage, [framework.BuildContext])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
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
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 58,
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
        [_Location_column]: 18,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
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
        [_Location_column]: 16,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 12
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 72,
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
        [_Location_column]: 24,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 70,
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
        [_Location_column]: 22,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 76,
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
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 92,
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
        [_Location_column]: 24,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 90,
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
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 112,
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
        [_Location_column]: 24,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 110,
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
        [_Location_column]: 22,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 116,
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
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 132,
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
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
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
        [_Location_column]: 22,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 128,
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
        [_Location_column]: 20,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 150,
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
        [_Location_column]: 22,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 148,
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
        [_Location_column]: 20,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 175,
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
        [_Location_column]: 15,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 179,
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
        [_Location_column]: 24,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C113() {
      return C113 = dart.constList([], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 182,
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
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 13,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "nombre",
        [_Location_column]: 13,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 24,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 41,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 56,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 24,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 21,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 38,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 53,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 22,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 39,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 53,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 195,
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
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 9,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 9,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/home_page.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 32,
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
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 50,
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
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190, C191 || CT.C191], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 86,
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
        [_Location_column]: 38,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 95,
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
        [_Location_column]: 29,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 108,
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
        [_Location_column]: 38,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 27,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 31,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232, C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 130,
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
        [_Location_column]: 34,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 125,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 125
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 31,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 31,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 192,
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
        [_Location_column]: 34,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 190,
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
        [_Location_column]: 25,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 100
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266, C267 || CT.C267], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 259,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rol",
        [_Location_column]: 49,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 49,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 49,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274, C275 || CT.C275, C276 || CT.C276], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C273 || CT.C273,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C278 || CT.C278,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 43,
        [_Location_line]: 295,
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
        [_Location_column]: 48,
        [_Location_line]: 294,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.constList([C285 || CT.C285], widget_inspector._Location);
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C284 || CT.C284,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 41,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.constList([C288 || CT.C288], widget_inspector._Location);
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C287 || CT.C287,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292, C293 || CT.C293], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 68,
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
        [_Location_column]: 28,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303, C304 || CT.C304], widget_inspector._Location);
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C302 || CT.C302,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307], widget_inspector._Location);
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C306 || CT.C306,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310, C311 || CT.C311, C312 || CT.C312], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.constList([C315 || CT.C315, C316 || CT.C316], widget_inspector._Location);
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C314 || CT.C314,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.constList([C319 || CT.C319], widget_inspector._Location);
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C318 || CT.C318,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/siinader_pixies/pages/login_page.dart"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.constList([C322 || CT.C322, C323 || CT.C323, C324 || CT.C324, C325 || CT.C325], widget_inspector._Location);
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C321 || CT.C321,
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
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C3;
  let C2;
  let C8;
  let C9;
  let C7;
  let C6;
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
  let C28;
  let C27;
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
  let C43;
  let C42;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C58;
  let C57;
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
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C91;
  let C90;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C99;
  let C98;
  let C103;
  let C104;
  let C102;
  let C101;
  let C107;
  let C106;
  let C105;
  let C110;
  let C111;
  let C109;
  let C108;
  let C113;
  let C112;
  let C116;
  let C117;
  let C118;
  let C119;
  let C115;
  let C114;
  let C122;
  let C123;
  let C124;
  let C121;
  let C120;
  let C127;
  let C128;
  let C129;
  let C126;
  let C125;
  let C132;
  let C133;
  let C134;
  let C131;
  let C130;
  let C137;
  let C136;
  let C135;
  let C140;
  let C141;
  let C142;
  let C139;
  let C138;
  let C145;
  let C146;
  let C147;
  let C144;
  let C143;
  let C150;
  let C151;
  let C152;
  let C149;
  let C148;
  let C155;
  let C156;
  let C154;
  let C153;
  home_page._HomePageState = class _HomePageState extends framework.State$(home_page.HomePage) {
    initState() {
      switch (this.widget.rol) {
        case "estudiantes":
        {
          this.color = colors.Colors.amber._get(600);
          break;
        }
        case "docentes":
        {
          this.color = colors.Colors.orange._get(900);
          break;
        }
        case "kardex":
        {
          this.color = colors.Colors.green._get(400);
          break;
        }
        case "jefeCarrera":
        {
          this.color = colors.Colors.blue._get(400);
          break;
        }
      }
      super.initState();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.white, title: new basic.Padding.new({padding: C0 || CT.C0, child: new container.Container.new({child: new basic.Padding.new({padding: C1 || CT.C1, child: new text.Text.new("SIINADER", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(6.0), color: this.color}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), actions: JSArrayOfWidget().of([new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("Inicio", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(0, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("Materias", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(1, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("Plan de Estudios", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(2, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("Notas", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(3, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new ink_well.InkWell.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C18 || CT.C18, child: new text.Text.new("Perfil", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this.pageController.animateToPage(4, {duration: new core.Duration.new({milliseconds: 300}), curve: curves.Curves.linear});
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new (PopupMenuButtonOfint()).new({icon: new icon.Icon.new(icons.Icons.settings, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), tooltip: "Configuración", itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfint().of([new (PopupMenuItemOfint()).new({value: 1, child: new text.Text.new("Editar Perfil", {$creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), new (PopupMenuItemOfint()).new({value: 2, child: new text.Text.new("Cerrar Sesión", {$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108})]), BuildContextToListOfPopupMenuItemOfint()), onSelected: dart.fn(value => {
                dart.equals(value, 1) ? home_page.editarPerfil(context, this.widget.id, this.widget.rol, this.color) : navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new login_page.LoginPage.new({$creationLocationd_0dea112b090073317d4: C112 || CT.C112}), BuildContextToLoginPage())}));
              }, dynamicToNull()), $creationLocationd_0dea112b090073317d4: C114 || CT.C114})]), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), body: new page_view.PageView.new({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), controller: this.pageController, children: JSArrayOfWidget().of([new inicio_page.InicioPage.new({rol: this.widget.rol, nombre: this.widget.name, color: this.color, $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new materias_page.MateriasPage.new({rol: this.widget.rol, id: this.widget.id, color: this.color, $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), new plan_de_estudios_page.PlanEstudios.new({color: this.color, $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), new notas_page.NotasPage.new({rol: this.widget.rol, id: this.widget.id, color: this.color, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), new perfil_page.PerfilPage.new({rol: this.widget.rol, id: this.widget.id, color: this.color, $creationLocationd_0dea112b090073317d4: C143 || CT.C143})]), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153});
    }
  };
  (home_page._HomePageState.new = function() {
    this.pageController = new page_view.PageController.new({initialPage: 0, keepPage: true});
    this.color = null;
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
    pageController: dart.finalFieldType(page_view.PageController),
    color: dart.fieldType(ui.Color)
  }));
  let C159;
  let C160;
  let C161;
  let C158;
  let C157;
  home_page.editarPerfil = function editarPerfil(context, id, rol, color) {
    return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new editar_perfil.EditarPerfilPage.new({id: id, rol: rol, color: color, $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), BuildContextToEditarPerfilPage())});
  };
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
  const _rolValue = dart.privateName(login_page, "_rolValue");
  const _formKey = dart.privateName(login_page, "_formKey");
  const _key = dart.privateName(login_page, "_key");
  const _id = dart.privateName(login_page, "_id");
  const _password = dart.privateName(login_page, "_password");
  let C164;
  let C165;
  let C163;
  let C162;
  let C168;
  let C169;
  let C170;
  let C167;
  let C166;
  let C171;
  let C174;
  let C175;
  let C173;
  let C172;
  let C178;
  let C179;
  let C177;
  let C176;
  let C182;
  let C183;
  let C181;
  let C180;
  let C186;
  let C187;
  let C185;
  let C184;
  let C190;
  let C191;
  let C189;
  let C188;
  let C194;
  let C195;
  let C193;
  let C192;
  let C198;
  let C199;
  let C197;
  let C196;
  let C202;
  let C203;
  let C201;
  let C200;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C211;
  let C209;
  let C208;
  let C214;
  let C215;
  let C213;
  let C212;
  let C218;
  let C217;
  let C216;
  let C221;
  let C222;
  let C223;
  let C224;
  let C220;
  let C219;
  let C227;
  let C228;
  let C226;
  let C225;
  let C231;
  let C232;
  let C233;
  let C234;
  let C230;
  let C229;
  let C237;
  let C238;
  let C236;
  let C235;
  let C241;
  let C242;
  let C240;
  let C239;
  let C243;
  let C246;
  let C247;
  let C245;
  let C244;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C249;
  let C248;
  let C257;
  let C258;
  let C256;
  let C255;
  let C261;
  let C262;
  let C260;
  let C259;
  let C263;
  let C266;
  let C267;
  let C265;
  let C264;
  let C270;
  let C271;
  let C269;
  let C268;
  let C274;
  let C275;
  let C276;
  let C273;
  let C272;
  let C279;
  let C278;
  let C277;
  let C282;
  let C281;
  let C280;
  let C285;
  let C284;
  let C283;
  let C288;
  let C287;
  let C286;
  let C291;
  let C292;
  let C293;
  let C290;
  let C289;
  let C296;
  let C297;
  let C295;
  let C294;
  let C300;
  let C299;
  let C298;
  let C303;
  let C304;
  let C302;
  let C301;
  let C307;
  let C306;
  let C305;
  let C310;
  let C311;
  let C312;
  let C309;
  let C308;
  let C315;
  let C316;
  let C314;
  let C313;
  let C319;
  let C318;
  let C317;
  let C322;
  let C323;
  let C324;
  let C325;
  let C321;
  let C320;
  login_page._LoginPageState = class _LoginPageState extends framework.State$(login_page.LoginPage) {
    initState() {
      super.initState();
      this[_id] = new editable_text.TextEditingController.new({text: ""});
      this[_password] = new editable_text.TextEditingController.new({text: ""});
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.amber._get(200), key: this[_key], appBar: new app_bar.AppBar.new({title: new text.Text.new("SIINADER", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900)}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), backgroundColor: colors.Colors.white, centerTitle: true, $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), body: new basic.Center.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.rectangle, borderRadius: new border_radius.BorderRadius.circular(6.0), color: colors.Colors.white}), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C171 || CT.C171, child: new text.Text.new("Iniciar Sesión", {style: new text_style.TextStyle.new({fontSize: 24.0, color: colors.Colors.amber._get(600), fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), new image.Image.asset("assets/images/UPEA.jpg", {height: 200.0, $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), new basic.Column.new({children: JSArrayOfWidget().of([new form.Form.new({key: this[_formKey], child: new basic.Column.new({children: JSArrayOfWidget().of([new (DropdownButtonOfString()).new({items: JSArrayOfDropdownMenuItemOfString().of([new (DropdownMenuItemOfString()).new({value: "estudiantes", child: new text.Text.new("ESTUDIANTE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C184 || CT.C184}), $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), new (DropdownMenuItemOfString()).new({value: "docentes", child: new text.Text.new("DOCENTE", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), $creationLocationd_0dea112b090073317d4: C196 || CT.C196}), new (DropdownMenuItemOfString()).new({value: "kardex", child: new text.Text.new("KARDEX", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), new (DropdownMenuItemOfString()).new({value: "jefeCarrera", child: new text.Text.new("JEFE DE CARRERA", {style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontSize: 13.0, fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212})]), onChanged: dart.fn(value => {
                              this.setState(dart.fn(() => {
                                this[_rolValue] = value;
                              }, VoidToNull()));
                            }, StringToNull()), hint: new text.Text.new("USUARIO", {$creationLocationd_0dea112b090073317d4: C216 || CT.C216}), value: this[_rolValue], $creationLocationd_0dea112b090073317d4: C219 || CT.C219}), new basic.Padding.new({padding: C1 || CT.C1, child: new container.Container.new({width: 300.0, child: new text_form_field.TextFormField.new({controller: this[_id], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CÓDIGO DE USUARIO" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.supervised_user_circle, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CÓDIGO", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C229 || CT.C229}), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), new basic.Padding.new({padding: C243 || CT.C243, child: new container.Container.new({width: 300.0, child: new text_form_field.TextFormField.new({obscureText: true, controller: this[_password], validator: dart.fn(value => value[$isEmpty] ? "PORFAVOR INGRESA TU CONTRASEÑA" : null, StringToString()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.lock_open, {color: colors.Colors.grey._get(900), $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), errorStyle: new text_style.TextStyle.new({color: colors.Colors.red._get(800), fontWeight: ui.FontWeight.w300}), labelText: "CONTRASEÑA", labelStyle: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w300}), border: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), disabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), focusedErrorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.grey._get(900)})})}), style: new text_style.TextStyle.new({color: colors.Colors.grey._get(900), fontWeight: ui.FontWeight.w200}), $creationLocationd_0dea112b090073317d4: C248 || CT.C248}), $creationLocationd_0dea112b090073317d4: C255 || CT.C255}), $creationLocationd_0dea112b090073317d4: C259 || CT.C259}), new basic.Padding.new({padding: C171 || CT.C171, child: new raised_button.RaisedButton.new({color: colors.Colors.amber._get(600), child: new basic.Padding.new({padding: C263 || CT.C263, child: new text.Text.new("INGRESAR", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C264 || CT.C264}), $creationLocationd_0dea112b090073317d4: C268 || CT.C268}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                                if (dart.test(this[_formKey].currentState.validate())) {
                                  let url = "http://localhost:3000/api/" + dart.notNull(this[_rolValue]) + "/" + dart.notNull(this[_id].text);
                                  let data = null;
                                  let response = null;
                                  try {
                                    response = (yield http.get(url));
                                    data = core.List._check(convert.jsonDecode(response.body));
                                  } catch (e$) {
                                    let e = dart.getThrown(e$);
                                    core.print(e);
                                  }
                                  if (dart.test(data[$isNotEmpty])) {
                                    if (dart.equals(dart.dsend(data[$_get](0), '_get', ["password"]), this[_password].text)) {
                                      navigator.Navigator.pushReplacement(dart.dynamic, core.Object, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new home_page.HomePage.new({rol: this[_rolValue], id: this[_id].text, name: core.String._check(dart.dsend(data[$_get](0), '_get', ["nombre"])), $creationLocationd_0dea112b090073317d4: C272 || CT.C272}), BuildContextToHomePage())}));
                                    } else {
                                      dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new text.Text.new("Algo anda mal", {$creationLocationd_0dea112b090073317d4: C277 || CT.C277}), $creationLocationd_0dea112b090073317d4: C280 || CT.C280}), BuildContextToAlertDialog())});
                                    }
                                  } else {
                                    dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new text.Text.new("Algo anda mal", {$creationLocationd_0dea112b090073317d4: C283 || CT.C283}), $creationLocationd_0dea112b090073317d4: C286 || CT.C286}), BuildContextToAlertDialog())});
                                  }
                                }
                              }).bind(this)), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C289 || CT.C289}), $creationLocationd_0dea112b090073317d4: C294 || CT.C294})]), $creationLocationd_0dea112b090073317d4: C298 || CT.C298}), $creationLocationd_0dea112b090073317d4: C301 || CT.C301})]), $creationLocationd_0dea112b090073317d4: C305 || CT.C305})]), $creationLocationd_0dea112b090073317d4: C308 || CT.C308}), $creationLocationd_0dea112b090073317d4: C313 || CT.C313}), $creationLocationd_0dea112b090073317d4: C317 || CT.C317}), $creationLocationd_0dea112b090073317d4: C320 || CT.C320});
    }
  };
  (login_page._LoginPageState.new = function() {
    this[_rolValue] = null;
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_key] = GlobalKeyOfScaffoldState().new();
    this[_id] = null;
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
    [_rolValue]: dart.fieldType(core.String),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_key]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_id]: dart.fieldType(editable_text.TextEditingController),
    [_password]: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/siinader_pixies/pages/home_page", {
    "package:siinader_pixies/pages/home_page.dart": home_page,
    "package:siinader_pixies/pages/login_page.dart": login_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_page.dart","login_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWe;;;;;;IACA;;;;;;IACA;;;;;;;AAEmB;IAAgB;;;QALlC;QAAU;QAAU;QAAS;;IAAnB;IAAU;IAAS;AAAS,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAajE,cAAQ,AAAO;;;AAEc,UAAzB,aAAe,AAAK,yBAAC;AACrB;;;;AAE0B,UAA1B,aAAe,AAAM,0BAAC;AACtB;;;;AAEyB,UAAzB,aAAe,AAAK,yBAAC;AACrB;;;;AAEwB,UAAxB,aAAe,AAAI,wBAAC;AACpB;;;AAEa,MAAX;IACR;UAG0B;AACxB,YAAO,oCACG,yCACkB,4BACjB,oDAEE,oCACE,oDAEE,kBACL,oBACO,qCACS,iJAIR,6CACM,6CACW,wCAAS,aAC7B,yIAII,sBACf,iCACS,6BACE,sDAEE,kBACL,kBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,sDAEE,kBACL,oBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,sDAEE,kBACL,4BACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,sDAEE,kBACL,iBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,iCACS,6BACE,sDAEE,kBACL,kBACO,qCAAwB,AAAI,wBAAC,0LAInC;AAOH,gBANF,cAAS;AAKN,kBAJD,AAAe,kCACb,cACU,qCAAuB,cACnB;;yFAKtB,wCACQ,kBACE,8BACQ,AAAI,wBAAC,wEAEZ,8BACI,QAAC,WAAY,kCACxB,uCACS,UACA,kBAAK,sIAEd,uCACS,UACA,kBAAK,iMAGJ,QAAC;AAQJ,gBAPD,YAAN,KAAK,EAAI,KACH,uBAAa,OAAO,EAAE,AAAO,gBAAI,AAAO,iBAAI,cAClC,+DACR,OAAO,EACP,yCACW,QAAc,WAAY;iKAO/C,qCACK,mEACG,+BACM,sBAChB,qCACO,AAAO,yBACJ,AAAO,yBACR,uEAET,yCAAkB,AAAO,qBAAS,AAAO,uBAAW,uEACpD,mDAAoB,uEACpB,mCAAe,AAAO,qBAAS,AAAO,uBAAW,uEACjD,qCAAgB,AAAO,qBAAS,AAAO,uBAAU;IAIzD;;;IA/LM,sBAAiB,+CAA4B,aAAa;IAC1D;;;EA+LR;;;;;;;;;;;;;;;;;iDAE0B,SAAgB,IAAW,KAAU;AAC7D,UAAO,2CACI,OAAO,WACP,QAAc,WACd,4CACD,EAAE,OACD,GAAG,SACD,KAAK;EAIpB;;;ACzNmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUqB,MAAX;AAC+B,MAArC,YAAM,mDAA4B;AACS,MAA3C,kBAAY,mDAA4B;IAC1C;UAG0B;AACxB,YAAO,6CACmB,AAAK,yBAAC,WACzB,oBACG,+BACC,kBACL,oBACO,qCAAwB,AAAI,wBAAC,oFAEd,kCACX,uEAET,6BACG,yCACO,6CACM,6CACW,wCAAS,aACtB,8BAET,oCACsB,0CACU,yCACnB,sBAChB,wDAES,kBACL,0BACO,wCACK,aACI,AAAK,yBAAC,kBACG,4IAIvB,sBACJ,mCACQ,kEAEV,gCACoB,sBAChB,wBACO,uBACE,gCACa,sBAChB,2CACS,wCACL,6CACS,sBACA,kBACL,sBACO,qCACS,AAAI,wBAAC,gBACT,kBACa,4IAI7B,6CACS,mBACA,kBACL,mBACO,qCACS,AAAI,wBAAC,gBACT,kBACa,4IAI7B,6CACS,iBACA,kBACL,kBACO,qCACS,AAAI,wBAAC,gBACT,kBACa,4IAI7B,6CACS,sBACA,kBACL,2BACO,qCACS,AAAI,wBAAC,gBACT,kBACa,yJAKpB,QAAQ;AAGf,8BAFF,cAAS;AACU,gCAAjB,kBAAY,KAAK;;sDAGf,kBACJ,8EAEK,4EAET,oDAES,oCACE,cACA,mDACO,sBACD,QAAC,SAAW,AAAM,KAAD,aACtB,0CACA,qCACM,qDACE,kBACJ,4CACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,sBACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,uMAK/B,wDAGS,oCACE,cACA,oDACQ,kBACD,4BACD,QAAC,SAAW,AAAM,KAAD,aACtB,mCACA,qCACM,qDACE,kBACJ,+BACQ,AAAI,wBAAC,6EAET,qCACI,AAAG,uBAAC,kBACK,iCAEd,0BACC,qCACI,AAAI,wBAAC,kBACI,8BAEjB,qDACM,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,0BAGP,qDACF,mCACI,AAAI,wBAAC,yBAGR,qDACD,mCACI,AAAI,wBAAC,8BAGH,qDACN,mCACI,AAAI,wBAAC,uBAGV,qDACC,mCACI,AAAI,wBAAC,mBAIlB,qCACS,AAAI,wBAAC,kBACI,uMAK/B,wDAES,2CACS,AAAK,yBAAC,aACb,wDAKE,kBACL,oBACO,qCAAwB,wJAGxB;AACT,8CAAI,AAAS,AAAa;AACjB,4CAAM,AAA6B,AAC5B,AACN,4CADJ,mBACA,mBACA,AAAI;AACH;AACS;AACd;AACgC,oCAA9B,YAAW,MAAM,SAAS,GAAG;AACG,2CAAhC,iBAAO,mBAAW,AAAS,QAAD;;wCACnB;AACC,oCAAR,WAAM,CAAC;;AAET,gDAAI,AAAK,IAAD;AACN,wCAAwB,YAAb,WAAP,AAAI,IAAA,QAAC,aAAG,cAAe,AAAU;AAUlC,sCATS,+DACR,OAAO,EACP,yCACW,QAAc,WACnB,iCACS,qBACD,AAAI,yCACK,WAAP,AAAI,IAAA,QAAC,aAAG;;AAWzB,sCAPD,0CACW,OAAO,WACP,QAAc,WACd,qCACI,kBAAK;;;AAarB,oCAPD,0CACW,OAAO,WACP,QAAc,WACd,qCACI,kBAAK;;;8BAMzB;IAa3B;;;IAxTO;IACD,iBAAW;IACX,aAAO;IACS;IACA;;;EAqTxB","file":"home_page.ddc.js"}');
  // Exports:
  return {
    pages__home_page: home_page,
    pages__login_page: login_page
  };
});

//# sourceMappingURL=home_page.ddc.js.map
