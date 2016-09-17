this['docs-source'] = function (Kotlin, $module$elements, $module$beans) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      docs: Kotlin.definePackage(null, /** @lends _.fg.docs */ {
        f: function () {
          this.unaryPlus_pdl1w0$('Freshlyground');
        },
        f_0: function () {
          this.unaryPlus_pdl1w0$('A web framework for programming rich web clients with Kotlin');
        },
        f_1: function () {
          $module$elements.fg.elements.h1_sk18k8$(this, _.fg.docs.f);
          $module$elements.fg.elements.p_ykyrxp$(this, _.fg.docs.f_0);
        },
        f_2: function () {
          this.unaryPlus_pdl1w0$('Domain-specific language');
        },
        f_3: function () {
          this.unaryPlus_pdl1w0$('fun main(vararg args: String) {\n');
          this.unaryPlus_pdl1w0$('  \n');
          this.unaryPlus_pdl1w0$('  BODY with {\n');
          this.unaryPlus_pdl1w0$('  \n');
          this.unaryPlus_pdl1w0$('      header {\n');
          this.unaryPlus_pdl1w0$('          h1 {\n');
          this.unaryPlus_pdl1w0$('              +"Freshlyground"\n');
          this.unaryPlus_pdl1w0$('          }\n');
          this.unaryPlus_pdl1w0$('          p {\n');
          this.unaryPlus_pdl1w0$('              +"A web framework for programming rich web clients with Kotlin"\n');
          this.unaryPlus_pdl1w0$('          }\n');
          this.unaryPlus_pdl1w0$('      }\n');
          this.unaryPlus_pdl1w0$('  }\n');
          this.unaryPlus_pdl1w0$('  \n');
          this.unaryPlus_pdl1w0$('  HTML.init()\n');
          this.unaryPlus_pdl1w0$('}\n');
        },
          f_4: function () {
          },
          f_5: function () {
          },
          f_6: function () {
              $module$beans.fg.beans.menuItem_mt53wc$(this, new $module$beans.fg.beans.SelectableAction('Menu Item 1'), _.fg.docs.f_4);
              $module$beans.fg.beans.menuItem_mt53wc$(this, new $module$beans.fg.beans.SelectableAction('Menu Item 2'), _.fg.docs.f_5);
          },
          f_7: function () {
          },
          f_8: function () {
          },
          f_9: function () {
              $module$beans.fg.beans.button_umrm8d$(this, new $module$beans.fg.beans.Action('Button 1'), _.fg.docs.f_7);
              $module$beans.fg.beans.button_umrm8d$(this, new $module$beans.fg.beans.Action(void 0, void 0, $module$beans.fg.beans.icon.FontAwesomeIcons.camera_retro_629h0h$()), _.fg.docs.f_8);
          },
          f_10: function () {
              this.unaryPlus_pdl1w0$('Resources');
          },
          f_11: function () {
              this.unaryPlus_pdl1w0$('https://kotlinlang.org/');
          },
          f_12: function () {
              $module$elements.fg.elements.a_4owu00$(this, 'https://kotlinlang.org/', '_blank', _.fg.docs.f_11);
          },
          f_13: function () {
              this.unaryPlus_pdl1w0$('https://www.w3.org/TR/html5/');
          },
          f_14: function () {
              $module$elements.fg.elements.a_4owu00$(this, 'https://www.w3.org/TR/html5/', '_blank', _.fg.docs.f_13);
          },
          f_15: function () {
              this.unaryPlus_pdl1w0$('http://html5doctor.com/');
          },
          f_16: function () {
              $module$elements.fg.elements.a_4owu00$(this, 'http://html5doctor.com/', '_blank', _.fg.docs.f_15);
          },
          f_17: function () {
              this.unaryPlus_pdl1w0$('https://developer.mozilla.org');
          },
          f_18: function () {
              $module$elements.fg.elements.a_4owu00$(this, 'https://developer.mozilla.org', '_blank', _.fg.docs.f_17);
          },
          f_19: function () {
              $module$elements.fg.elements.li_fpslb8$(this, _.fg.docs.f_12);
              $module$elements.fg.elements.li_fpslb8$(this, _.fg.docs.f_14);
              $module$elements.fg.elements.li_fpslb8$(this, _.fg.docs.f_16);
              $module$elements.fg.elements.li_fpslb8$(this, _.fg.docs.f_18);
          },
        main_kand9s$f: function () {
          $module$elements.fg.elements.header_4tl54c$(this, _.fg.docs.f_1);
          $module$elements.fg.elements.h2_3mh653$(this, _.fg.docs.f_2);
          $module$elements.fg.elements.pre_mz29ae$(this, _.fg.docs.f_3);
            $module$beans.fg.beans.menu_u9dlqt$(this, _.fg.docs.f_6);
            $module$elements.fg.elements.p_ykyrxp$(this, _.fg.docs.f_9);
            $module$elements.fg.elements.h2_3mh653$(this, _.fg.docs.f_10);
            $module$elements.fg.elements.ul_gwr2a2$(this, _.fg.docs.f_19);
        },
        main_kand9s$f_0: function () {
          this.boxSizing = 'border-box';
        },
          f_20: function () {
              this.borderBottom = '1px solid red';
          },
          f_21: function () {
              $module$elements.fg.style.and_eoz44k$(this, $module$beans.fg.beans.SelectableAction.Statics.selectedSelector, _.fg.docs.f_20);
          },
          main_kand9s$f_1: function () {
              $module$elements.fg.style.desc_eoz44k$(this, $module$beans.fg.beans.menu.MenuItem.Statics.selector, _.fg.docs.f_21);
          },
          f_22: function () {
              this.backgroundColor = 'lightgrey';
          },
          main_kand9s$f_2: function () {
              $module$elements.fg.style.hover_s2gvbj$(this, _.fg.docs.f_22);
          },
        main_kand9s$: function (args) {
          $module$elements.fg.elements.with_ji1yox$($module$elements.fg.elements.BODY, _.fg.docs.main_kand9s$f);
          $module$elements.fg.elements.HTML.registerStyle_lu0ku$($module$elements.fg.elements.with_ji1yox$(new $module$elements.fg.style.Style($module$elements.fg.elements.Selector.Statics.ANY), _.fg.docs.main_kand9s$f_0));
            $module$elements.fg.elements.HTML.registerStyle_lu0ku$($module$elements.fg.elements.with_ji1yox$(new $module$elements.fg.style.Style($module$beans.fg.beans.menu.Menu.Statics.selector), _.fg.docs.main_kand9s$f_1));
            $module$elements.fg.elements.HTML.registerStyle_lu0ku$($module$elements.fg.elements.with_ji1yox$(new $module$elements.fg.style.Style($module$beans.fg.beans.menu.MenuItem.Statics.selector), _.fg.docs.main_kand9s$f_2));
          $module$elements.fg.elements.HTML.init();
        }
      })
    })
  });
  Kotlin.defineModule('docs-source', _);
  _.fg.docs.main_kand9s$([]);
  return _;
}(kotlin, elements, beans);

//@ sourceMappingURL=docs-source.js.map
