if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'docs-source'.");
}
if (typeof beans === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'beans' was not found. Please, check whether 'beans' is loaded prior to 'docs-source'.");
}
if (typeof elements === 'undefined') {
  throw new Error("Error loading module 'docs-source'. Its dependency 'elements' was not found. Please, check whether 'elements' is loaded prior to 'docs-source'.");
}
this['docs-source'] = function (_, Kotlin, $module$beans, $module$elements) {
  'use strict';
  var SelectableAction = $module$beans.fg.beans.action.SelectableAction;
  var Div = $module$elements.fg.elements.Div;
  var Display = $module$elements.fg.elements.style.typed.Display;
  var FlexDirection = $module$elements.fg.elements.style.typed.FlexDirection;
  var get_em = $module$elements.fg.elements.get_em_s8ev3n$;
  var Action = $module$beans.fg.beans.action.Action;
  var button = $module$beans.fg.beans.button_n102dk$;
  var with_0 = $module$elements.fg.elements.with_9bxh2u$;
  var collapseOn = $module$beans.fg.beans.collapseOn_cutj6x$;
  var Side = $module$elements.fg.base.Side;
  var Drawer = $module$beans.fg.beans.drawer.Drawer;
  var get_px = $module$elements.fg.elements.get_px_s8ev3n$;
  var BorderStyle = $module$elements.fg.elements.style.typed.BorderStyle;
  var RgbColor = $module$elements.fg.style.colour.RgbColor;
  var Border = $module$elements.fg.elements.style.typed.Border;
  var toggleButton = $module$beans.fg.beans.toggleButton_432pze$;
  var div = $module$elements.fg.elements.div_lgqx1j$;
  var render = $module$elements.fg.elements.render_uy47cu$;
  var elements = $module$elements.fg.elements;
  var h1 = $module$elements.fg.elements.h1_pgml15$;
  var p = $module$elements.fg.elements.p_ti2w4o$;
  var header = $module$elements.fg.elements.header_x8ulkt$;
  var h2 = $module$elements.fg.elements.h2_kmxeiu$;
  var pre = $module$elements.fg.elements.pre_veaytn$;
  var a = $module$elements.fg.elements.a_ya8tl$;
  var h3 = $module$elements.fg.elements.h3_4amnwb$;
  var menuItem = $module$beans.fg.beans.menuItem_ve3aun$;
  var menu = $module$beans.fg.beans.menu_poq3df$;
  var icon = $module$beans.fg.beans.icon;
  var li = $module$elements.fg.elements.li_wq8toz$;
  var ul = $module$elements.fg.elements.ul_xx7ant$;
  var AnyRule = $module$elements.fg.style.AnyRule;
  var Menu = $module$beans.fg.beans.menu.Menu;
  var ClassRule = $module$elements.fg.style.ClassRule;
  var MenuItem = $module$beans.fg.beans.menu.MenuItem;
  var and = $module$elements.fg.style.and_xif9ow$;
  var desc = $module$elements.fg.style.desc_y0z8s$;
  var hover = $module$elements.fg.style.hover_dn1ps9$;
  var dock = $module$beans.fg.beans.drawer.dock_jdil3n$;
  function main$lambda$lambda(it) {
    window.location.href = '#Beans_Action';
  }
  function main$lambda$lambda_0($receiver) {
  }
  function main$lambda$lambda_1(it) {
    window.location.href = '#Beans_Button';
  }
  function main$lambda$lambda_2($receiver) {
  }
  function main$lambda($receiver) {
    $receiver.style.display = Display.flex;
    $receiver.style.flexDirection = FlexDirection.column;
    $receiver.style.paddingLeft = get_em(3);
    button($receiver, new Action('Action', void 0, void 0, void 0, main$lambda$lambda), main$lambda$lambda_0);
    button($receiver, new Action('Button', void 0, void 0, void 0, main$lambda$lambda_1), main$lambda$lambda_2);
  }
  function main$lambda$lambda$lambda(it) {
    window.location.href = '#Elements';
  }
  function main$lambda$lambda$lambda_0($receiver) {
  }
  function main$lambda$lambda$lambda_1($receiver) {
  }
  function main$lambda$lambda$lambda_2($receiver) {
  }
  function main$lambda$lambda$lambda_3(it) {
    window.location.href = '#Resources';
  }
  function main$lambda$lambda$lambda_4($receiver) {
  }
  function main$lambda$lambda_3(closure$beansAction, closure$beansContainer) {
    return function ($receiver) {
      $receiver.style.border = new Border(get_px(1), BorderStyle.dashed, RgbColor.Factory.RED);
      $receiver.style.display = Display.flex;
      $receiver.style.flexDirection = FlexDirection.column;
      button($receiver, new Action('Elements', void 0, void 0, void 0, main$lambda$lambda$lambda), main$lambda$lambda$lambda_0);
      toggleButton($receiver, closure$beansAction, main$lambda$lambda$lambda_1);
      $receiver.appendChild_sr04hg$(closure$beansContainer);
      button($receiver, new Action('Material Design'), main$lambda$lambda$lambda_2);
      button($receiver, new Action('Resources', void 0, void 0, void 0, main$lambda$lambda$lambda_3), main$lambda$lambda$lambda_4);
    };
  }
  function main$lambda_0(closure$beansAction, closure$beansContainer) {
    return function ($receiver) {
      div($receiver, main$lambda$lambda_3(closure$beansAction, closure$beansContainer));
    };
  }
  function main$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Freshlyground');
  }
  function main$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('A web framework for programming rich web clients with Kotlin');
  }
  function main$lambda$lambda_4($receiver) {
    h1($receiver, main$lambda$lambda$lambda_5);
    p($receiver, main$lambda$lambda$lambda_6);
  }
  function main$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Domain-specific language');
  }
  function main$lambda$lambda_6($receiver) {
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
  function main$lambda$lambda_7($receiver) {
    $receiver._id = 'Elements';
    $receiver.unaryPlus_pdl1vz$('Elements');
  }
  function main$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('API');
  }
  function main$lambda$lambda_8($receiver) {
    a($receiver, 'api/elements/index.html', '_blank', main$lambda$lambda$lambda_7);
  }
  function main$lambda$lambda_9($receiver) {
    $receiver._id = 'Beans';
    $receiver.unaryPlus_pdl1vz$('Beans');
  }
  function main$lambda$lambda_10($receiver) {
    $receiver._id = 'Beans_Action';
    $receiver.unaryPlus_pdl1vz$('Action');
  }
  function main$lambda$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('Actions are configurations of action components, like Button, ToggleButton, MenuItem. ');
    $receiver.unaryPlus_pdl1vz$('This means these components are configured and changed through their actions and not directly.');
  }
  function main$lambda$lambda_12($receiver) {
    $receiver.unaryPlus_pdl1vz$('One action can be used by more than one component, meaning all components created using the same action ');
    $receiver.unaryPlus_pdl1vz$('will be changed upon changes on the action.');
  }
  function main$lambda$lambda_13($receiver) {
    $receiver._id = 'Beans_Button';
    $receiver.unaryPlus_pdl1vz$('Button');
  }
  function main$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('API');
  }
  function main$lambda$lambda_14($receiver) {
    a($receiver, 'api/beans/index.html', '_blank', main$lambda$lambda$lambda_8);
  }
  function main$lambda$lambda_15($receiver) {
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
  function main$lambda$lambda$lambda_9($receiver) {
    menuItem($receiver, new SelectableAction('Menu Item 1', void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda), main$lambda$lambda$lambda$lambda_0);
    menuItem($receiver, new SelectableAction('Menu Item 2', void 0, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_1), main$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda_16($receiver) {
    menu($receiver, void 0, main$lambda$lambda$lambda_9);
  }
  function main$lambda$lambda_17($receiver) {
    $receiver.unaryPlus_pdl1vz$('Button');
  }
  function main$lambda$lambda$lambda_10(it) {
  }
  function main$lambda$lambda$lambda_11($receiver) {
  }
  function main$lambda$lambda$lambda_12(it) {
  }
  function main$lambda$lambda$lambda_13($receiver) {
  }
  function main$lambda$lambda_18($receiver) {
    button($receiver, new Action('Button 1', void 0, void 0, void 0, main$lambda$lambda$lambda_10), main$lambda$lambda$lambda_11);
    button($receiver, new Action(void 0, void 0, icon.FontAwesomeIcons.camera_retro_p56ikg$(), void 0, main$lambda$lambda$lambda_12), main$lambda$lambda$lambda_13);
  }
  function main$lambda$lambda_19($receiver) {
    $receiver._id = 'Resources';
    $receiver.unaryPlus_pdl1vz$('Resources');
  }
  function main$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://kotlinlang.org/');
  }
  function main$lambda$lambda$lambda_14($receiver) {
    a($receiver, 'https://kotlinlang.org/', '_blank', main$lambda$lambda$lambda$lambda_3);
  }
  function main$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://www.w3.org/TR/html5/');
  }
  function main$lambda$lambda$lambda_15($receiver) {
    a($receiver, 'https://www.w3.org/TR/html5/', '_blank', main$lambda$lambda$lambda$lambda_4);
  }
  function main$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('http://html5doctor.com/');
  }
  function main$lambda$lambda$lambda_16($receiver) {
    a($receiver, 'http://html5doctor.com/', '_blank', main$lambda$lambda$lambda$lambda_5);
  }
  function main$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('https://developer.mozilla.org');
  }
  function main$lambda$lambda$lambda_17($receiver) {
    a($receiver, 'https://developer.mozilla.org', '_blank', main$lambda$lambda$lambda$lambda_6);
  }
  function main$lambda$lambda_20($receiver) {
    li($receiver, main$lambda$lambda$lambda_14);
    li($receiver, main$lambda$lambda$lambda_15);
    li($receiver, main$lambda$lambda$lambda_16);
    li($receiver, main$lambda$lambda$lambda_17);
  }
  function main$lambda_1(closure$rightDrawer) {
    return function ($receiver) {
      $receiver.appendChild_sr04hg$(closure$rightDrawer);
      header($receiver, main$lambda$lambda_4);
      h2($receiver, main$lambda$lambda_5);
      pre($receiver, main$lambda$lambda_6);
      h2($receiver, main$lambda$lambda_7);
      p($receiver, main$lambda$lambda_8);
      h2($receiver, main$lambda$lambda_9);
      h3($receiver, main$lambda$lambda_10);
      p($receiver, main$lambda$lambda_11);
      p($receiver, main$lambda$lambda_12);
      h3($receiver, main$lambda$lambda_13);
      p($receiver, main$lambda$lambda_14);
      h3($receiver, main$lambda$lambda_15);
      p($receiver, main$lambda$lambda_16);
      h3($receiver, main$lambda$lambda_17);
      p($receiver, main$lambda$lambda_18);
      h2($receiver, main$lambda$lambda_19);
      ul($receiver, main$lambda$lambda_20);
    };
  }
  function main$lambda_2($receiver) {
    $receiver._boxSizing = 'border-box';
  }
  function main$lambda$lambda$lambda_18($receiver) {
    $receiver._borderBottom = '1px solid red';
  }
  function main$lambda$lambda_21($receiver) {
    and($receiver, SelectableAction.Statics.selectedSelector, main$lambda$lambda$lambda_18);
  }
  function main$lambda_3($receiver) {
    desc($receiver, MenuItem.Companion.classSelector, main$lambda$lambda_21);
  }
  function main$lambda$lambda_22($receiver) {
    $receiver._backgroundColor = 'lightgrey';
  }
  function main$lambda_4($receiver) {
    hover($receiver, main$lambda$lambda_22);
  }
  function main(args) {
    var beansAction = new SelectableAction('Beans');
    var beansContainer = with_0(new Div(), main$lambda);
    collapseOn(beansContainer, beansAction);
    beansAction.selected = false;
    var rightDrawer = render(new Drawer(Side.RIGHT), main$lambda_0(beansAction, beansContainer));
    with_0(elements.BODY, main$lambda_1(rightDrawer));
    elements.HTML.addCSSRule_t83c1i$(with_0(new AnyRule(), main$lambda_2));
    elements.HTML.addCSSRule_t83c1i$(with_0(new ClassRule(Menu.Companion.classSelector), main$lambda_3));
    elements.HTML.addCSSRule_t83c1i$(with_0(new ClassRule(MenuItem.Companion.classSelector), main$lambda_4));
    elements.HTML.init_dqye30$();
    dock(elements.BODY, rightDrawer);
  }
  var package$fg = _.fg || (_.fg = {});
  var package$docs = package$fg.docs || (package$fg.docs = {});
  package$docs.main_vqirvp$ = main;
  main([]);
  Kotlin.defineModule('docs-source', _);
  return _;
}(typeof this['docs-source'] === 'undefined' ? {} : this['docs-source'], kotlin, beans, elements);

//# sourceMappingURL=docs-source.js.map
