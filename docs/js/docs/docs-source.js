if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'docs-source'.");
}
if (typeof elements === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'elements' was not found. Please, check whether 'elements' is loaded prior to 'docs-source'.");
}
if (typeof beans === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'beans' was not found. Please, check whether 'beans' is loaded prior to 'docs-source'.");
}
this['docs-source'] = function (_, Kotlin, $module$elements, $module$beans) {
  'use strict';
  var elements_0 = $module$elements.fg.elements;
  var h1 = $module$elements.fg.elements.h1_pgml15$;
  var p = $module$elements.fg.elements.p_ti2w4o$;
  var header = $module$elements.fg.elements.header_x8ulkt$;
  var h2 = $module$elements.fg.elements.h2_kmxeiu$;
  var pre = $module$elements.fg.elements.pre_veaytn$;
  var a = $module$elements.fg.elements.a_ya8tl$;
  var h3 = $module$elements.fg.elements.h3_4amnwb$;
  var SelectableAction = $module$beans.fg.beans.action.SelectableAction;
  var menuItem = $module$beans.fg.beans.menuItem_ve3aun$;
  var menu_0 = $module$beans.fg.beans.menu_poq3df$;
  var Action = $module$beans.fg.beans.action.Action;
  var button = $module$beans.fg.beans.button_n102dk$;
  var icon_0 = $module$beans.fg.beans.icon;
  var li = $module$elements.fg.elements.li_wq8toz$;
  var ul = $module$elements.fg.elements.ul_xx7ant$;
  var with_0 = $module$elements.fg.elements.with_9bxh2u$;
  var AnyRule = $module$elements.fg.style.AnyRule;
  var Menu = $module$beans.fg.beans.menu.Menu;
  var ClassRule = $module$elements.fg.style.ClassRule;
  var MenuItem = $module$beans.fg.beans.menu.MenuItem;
  var and = $module$elements.fg.style.and_xif9ow$;
  var desc = $module$elements.fg.style.desc_y0z8s$;
  var hover = $module$elements.fg.style.hover_dn1ps9$;
  function main$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Freshlyground');
  }
  function main$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('A web framework for programming rich web clients with Kotlin');
  }
  function main$lambda$lambda($receiver) {
    h1($receiver, main$lambda$lambda$lambda);
    p($receiver, main$lambda$lambda$lambda_0);
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Domain-specific language');
  }
  function main$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('fun main(vararg args: String) {\n');
    $receiver.unaryPlus_pdl1vz$('  \n');
    $receiver.unaryPlus_pdl1vz$('  BODY with {\n');
    $receiver.unaryPlus_pdl1vz$('  \n');
    $receiver.unaryPlus_pdl1vz$('      header {\n');
    $receiver.unaryPlus_pdl1vz$('          h1 {\n');
    $receiver.unaryPlus_pdl1vz$('              +"Freshlyground"\n');
    $receiver.unaryPlus_pdl1vz$('          }\n');
    $receiver.unaryPlus_pdl1vz$('          p {\n');
    $receiver.unaryPlus_pdl1vz$('              +"A web framework for programming rich web clients with Kotlin"\n');
    $receiver.unaryPlus_pdl1vz$('          }\n');
    $receiver.unaryPlus_pdl1vz$('      }\n');
    $receiver.unaryPlus_pdl1vz$('  }\n');
    $receiver.unaryPlus_pdl1vz$('  \n');
    $receiver.unaryPlus_pdl1vz$('  HTML.init()\n');
    $receiver.unaryPlus_pdl1vz$('}\n');
  }
  function main$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Elements');
  }
  function main$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('API');
  }
  function main$lambda$lambda_3($receiver) {
    a($receiver, 'api/elements/index.html', '_blank', main$lambda$lambda$lambda_1);
  }
  function main$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Beans');
  }
  function main$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('API');
  }
  function main$lambda$lambda_5($receiver) {
    a($receiver, 'api/beans/index.html', '_blank', main$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Menu');
  }
  function main$lambda$lambda$lambda$lambda(it) {
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
  }
  function main$lambda$lambda$lambda$lambda_1(it) {
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
  }
  function main$lambda$lambda$lambda_3($receiver) {
    menuItem($receiver, new SelectableAction('Menu Item 1', void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda), main$lambda$lambda$lambda$lambda_0);
    menuItem($receiver, new SelectableAction('Menu Item 2', void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_1), main$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda_7($receiver) {
    menu_0($receiver, void 0, main$lambda$lambda$lambda_3);
  }
  function main$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('Button');
  }
  function main$lambda$lambda$lambda_4(it) {
  }
  function main$lambda$lambda$lambda_5($receiver) {
  }
  function main$lambda$lambda$lambda_6(it) {
  }
  function main$lambda$lambda$lambda_7($receiver) {
  }
  function main$lambda$lambda_9($receiver) {
    button($receiver, new Action('Button 1', void 0, void 0, void 0, main$lambda$lambda$lambda_4), main$lambda$lambda$lambda_5);
    button($receiver, new Action(void 0, void 0, icon_0.FontAwesomeIcons.camera_retro_p56ikg$(), void 0, main$lambda$lambda$lambda_6), main$lambda$lambda$lambda_7);
  }
  function main$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$('Resources');
  }
  function main$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://kotlinlang.org/');
  }
  function main$lambda$lambda$lambda_8($receiver) {
    a($receiver, 'https://kotlinlang.org/', '_blank', main$lambda$lambda$lambda$lambda_3);
  }
  function main$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://www.w3.org/TR/html5/');
  }
  function main$lambda$lambda$lambda_9($receiver) {
    a($receiver, 'https://www.w3.org/TR/html5/', '_blank', main$lambda$lambda$lambda$lambda_4);
  }
  function main$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('http://html5doctor.com/');
  }
  function main$lambda$lambda$lambda_10($receiver) {
    a($receiver, 'http://html5doctor.com/', '_blank', main$lambda$lambda$lambda$lambda_5);
  }
  function main$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://developer.mozilla.org');
  }
  function main$lambda$lambda$lambda_11($receiver) {
    a($receiver, 'https://developer.mozilla.org', '_blank', main$lambda$lambda$lambda$lambda_6);
  }
  function main$lambda$lambda_11($receiver) {
    li($receiver, main$lambda$lambda$lambda_8);
    li($receiver, main$lambda$lambda$lambda_9);
    li($receiver, main$lambda$lambda$lambda_10);
    li($receiver, main$lambda$lambda$lambda_11);
  }
  function main$lambda($receiver) {
    header($receiver, main$lambda$lambda);
    h2($receiver, main$lambda$lambda_0);
    pre($receiver, main$lambda$lambda_1);
    h2($receiver, main$lambda$lambda_2);
    p($receiver, main$lambda$lambda_3);
    h2($receiver, main$lambda$lambda_4);
    p($receiver, main$lambda$lambda_5);
    h3($receiver, main$lambda$lambda_6);
    p($receiver, main$lambda$lambda_7);
    h3($receiver, main$lambda$lambda_8);
    p($receiver, main$lambda$lambda_9);
    h2($receiver, main$lambda$lambda_10);
    ul($receiver, main$lambda$lambda_11);
  }
  function main$lambda_0($receiver) {
    $receiver._boxSizing = 'border-box';
  }
  function main$lambda$lambda$lambda_12($receiver) {
    $receiver._borderBottom = '1px solid red';
  }
  function main$lambda$lambda_12($receiver) {
    and($receiver, SelectableAction.Statics.selectedSelector, main$lambda$lambda$lambda_12);
  }
  function main$lambda_1($receiver) {
    desc($receiver, MenuItem.MenuItem.classSelector, main$lambda$lambda_12);
  }
  function main$lambda$lambda_13($receiver) {
    $receiver._backgroundColor = 'lightgrey';
  }
  function main$lambda_2($receiver) {
    hover($receiver, main$lambda$lambda_13);
  }
  function main(args) {
    with_0(elements_0.BODY, main$lambda);
    elements_0.HTML.addCSSRule_t83c1i$(with_0(new AnyRule(), main$lambda_0));
    elements_0.HTML.addCSSRule_t83c1i$(with_0(new ClassRule(Menu.Menu.classSelector), main$lambda_1));
    elements_0.HTML.addCSSRule_t83c1i$(with_0(new ClassRule(MenuItem.MenuItem.classSelector), main$lambda_2));
    elements_0.HTML.init_dqye30$();
  }
  var package$fg = _.fg || (_.fg = {});
  var package$docs = package$fg.docs || (package$fg.docs = {});
  package$docs.main_vqirvp$ = main;
  Kotlin.defineModule('docs-source', _);
  main([]);
  return _;
}(typeof this['docs-source'] === 'undefined' ? {} : this['docs-source'], kotlin, elements, beans);

//@ sourceMappingURL=docs-source.js.map
