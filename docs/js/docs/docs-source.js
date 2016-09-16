this['docs-source'] = function (Kotlin, $module$elements) {
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
          this.unaryPlus_pdl1w0$('  body with {\n');
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
          this.unaryPlus_pdl1w0$('  html.init()\n');
          this.unaryPlus_pdl1w0$('}\n');
        },
        main_kand9s$f: function () {
          $module$elements.fg.elements.header_4tl54c$(this, _.fg.docs.f_1);
          $module$elements.fg.elements.h2_3mh653$(this, _.fg.docs.f_2);
          $module$elements.fg.elements.pre_mz29ae$(this, _.fg.docs.f_3);
        },
        main_kand9s$f_0: function () {
          this.boxSizing = 'border-box';
        },
        main_kand9s$: function (args) {
          $module$elements.fg.elements.with_ji1yox$($module$elements.fg.elements.body, _.fg.docs.main_kand9s$f);
          $module$elements.fg.elements.html.registerClassStyle_lu0ku$($module$elements.fg.elements.with_ji1yox$(new $module$elements.fg.style.Style($module$elements.fg.elements.Selector.Statics.ANY), _.fg.docs.main_kand9s$f_0));
          $module$elements.fg.elements.html.init();
        }
      })
    })
  });
  Kotlin.defineModule('docs-source', _);
  _.fg.docs.main_kand9s$([]);
  return _;
}(kotlin, elements);

//@ sourceMappingURL=docs-source.js.map
