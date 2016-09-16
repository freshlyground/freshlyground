this['docs-source'] = function (Kotlin, $module$elements, $module$md) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      docs: Kotlin.definePackage(null, /** @lends _.fg.docs */ {
        f: function () {
          this.unaryPlus_pdl1w0$('Freshlyground');
        },
        f_0: function () {
          this.unaryPlus_pdl1w0$('A web framework for programming rich web clients in Kotlin');
        },
        f_1: function () {
          $module$md.fg.md.title_9ngzzv$(this, _.fg.docs.f);
          $module$md.fg.md.subtitle_s4hcc7$(this, _.fg.docs.f_0);
        },
        main_kand9s$f: function () {
          $module$md.fg.md.mdCard_mw30zs$(this, _.fg.docs.f_1);
        },
        main_kand9s$f_0: function () {
          this.boxSizing = 'border-box';
        },
        main_kand9s$: function (args) {
          var html = $module$elements.fg.elements.html;
          var body = $module$elements.fg.elements.body;
          $module$elements.fg.elements.with_ji1yox$(body, _.fg.docs.main_kand9s$f);
          html.registerClassStyle_lu0ku$($module$elements.fg.elements.with_ji1yox$(new $module$elements.fg.style.Style($module$elements.fg.elements.Selector.Statics.ANY), _.fg.docs.main_kand9s$f_0));
          html.init();
        }
      })
    })
  });
  Kotlin.defineModule('docs-source', _);
  _.fg.docs.main_kand9s$([]);
  return _;
}(kotlin, elements, md);

//@ sourceMappingURL=docs-source.js.map
