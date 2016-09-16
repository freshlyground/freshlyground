var md = function (Kotlin, $module$elements) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      md: Kotlin.definePackage(null, /** @lends _.fg.md */ {
        card: Kotlin.definePackage(null, /** @lends _.fg.md.card */ {
          MDCard: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCard() {
            MDCard.baseInitializer.call(this);
            this.$styleClassName_ukxzbv$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card');
            this.$styleClass_jtywca$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCard.styleClass$f);
          }, /** @lends _.fg.md.card.MDCard.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_ukxzbv$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_jtywca$;
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass();
            }
          }, /** @lends _.fg.md.card.MDCard */ {
            styleClass$f: function () {
              this.display = 'block';
              this.position = 'relative';
              this.padding = '24px';
              this.borderRadius = '2px';
              this.boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
              this.fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
              this.background = 'white';
            }
          }),
          MDCardAvatar: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Img];
          }, function MDCardAvatar(src) {
            MDCardAvatar.baseInitializer.call(this, src);
            this.$styleClassName_ysv5v8$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-avatar');
            this.$styleClass_w8i3dr$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardAvatar.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardAvatar.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_ysv5v8$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_w8i3dr$;
              }
            }
          }, /** @lends _.fg.md.card.MDCardAvatar */ {
            styleClass$f: function () {
              this.width = '40px';
              this.height = '40px';
              this.borderRadius = '50%';
            }
          }),
          MDCardContent: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardContent() {
            MDCardContent.baseInitializer.call(this);
            this.$styleClassName_5gmbwe$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-content');
            this.$styleClass_ttkwyx$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardContent.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardContent.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_5gmbwe$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_ttkwyx$;
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass();
            }
          }, /** @lends _.fg.md.card.MDCardContent */ {
            f: function () {
              this.marginTop = '0';
            },
            f_0: function (this$) {
              return function () {
                $module$elements.fg.style.firstChild_c8jw7n$(this$, _.fg.md.card.MDCardContent.f);
              };
            },
            styleClass$f: function () {
              this.fontSize = '14px';
              $module$elements.fg.style.child_eoz44k$(this, $module$elements.fg.elements.Selector.Statics.ANY, _.fg.md.card.MDCardContent.f_0(this));
            }
          }),
          MDCardHeader: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardHeader() {
            MDCardHeader.baseInitializer.call(this);
            this.$styleClassName_vs5al4$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-header');
            this.$styleClass_r6iral$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardHeader.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardHeader.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_vs5al4$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_r6iral$;
              }
            }
          }, /** @lends _.fg.md.card.MDCardHeader */ {
            f: function () {
              this.fontSize = '14px';
            },
            f_0: function () {
              this.marginTop = '-8px';
            },
            f_1: function () {
              $module$elements.fg.style.not_eoz44k$(this, $module$elements.fg.elements.toSelector_pdl1w0$(':first-child'), _.fg.md.card.MDCardHeader.f_0);
            },
            styleClass$f: function () {
              this.display = 'flex';
              this.flexDirection = 'row';
              this.height = '40px';
              this.margin = '-8px 0 16px 0';
              $module$elements.fg.style.desc_eoz44k$(this, _.fg.md.card.MDCardTitle.Statics.styleClassName, _.fg.md.card.MDCardHeader.f);
              $module$elements.fg.style.desc_eoz44k$(this, _.fg.md.card.MDCardSubtitle.Statics.styleClassName, _.fg.md.card.MDCardHeader.f_1);
            }
          }),
          MDCardHeaderText: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardHeaderText() {
            MDCardHeaderText.baseInitializer.call(this);
            this.$styleClassName_jqwanf$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-header-text');
            this.$styleClass_9gzneo$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardHeaderText.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardHeaderText.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_jqwanf$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_9gzneo$;
              }
            }
          }, /** @lends _.fg.md.card.MDCardHeaderText */ {
            styleClass$f: function () {
              this.height = '40px';
              this.margin = '0 8px';
            }
          }),
          MDCardImage: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Img];
          }, function MDCardImage(src) {
            MDCardImage.baseInitializer.call(this, src);
            this.$styleClassName_4nhxr4$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-image');
            this.$styleClass_gxqwfp$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardImage.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardImage.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_4nhxr4$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_gxqwfp$;
              }
            }
          }, /** @lends _.fg.md.card.MDCardImage */ {
            styleClass$f: function () {
              this.width = 'calc(100% + 48px)';
              this.margin = '0 -24px 16px -24px';
            }
          }),
          MDCardSubtitle: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardSubtitle() {
            MDCardSubtitle.baseInitializer.call(this);
            this.$styleClassName_j5n1oz$ = _.fg.md.card.MDCardSubtitle.Statics.styleClassName;
            this.$styleClass_y2ppfi$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardSubtitle.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardSubtitle.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_j5n1oz$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_y2ppfi$;
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass();
            }
          }, /** @lends _.fg.md.card.MDCardSubtitle */ {
            Statics: Kotlin.createObject(null, function Statics() {
              _.fg.md.card.MDCardSubtitle.Statics.styleClassName = new $module$elements.fg.elements.ClassSelector('md-card-subtitle');
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardSubtitle.Statics;
            },
            styleClass$f: function () {
              this.fontSize = '14px';
              this.fontWeight = '400';
              this.marginBottom = '16px';
              this.color = _.fg.md.colour.MDGrayPalette.s600.toHtml();
            }
          }),
          MDCardTitle: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardTitle() {
            MDCardTitle.baseInitializer.call(this);
            this.$styleClassName_bguqpp$ = _.fg.md.card.MDCardTitle.Statics.styleClassName;
            this.$styleClass_3mto4o$ = $module$elements.fg.style.classStyle_o2i1ow$(this, _.fg.md.card.MDCardTitle.styleClass$f);
          }, /** @lends _.fg.md.card.MDCardTitle.prototype */ {
            styleClassName: {
              get: function () {
                return this.$styleClassName_bguqpp$;
              }
            },
            styleClass: {
              get: function () {
                return this.$styleClass_3mto4o$;
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass();
            }
          }, /** @lends _.fg.md.card.MDCardTitle */ {
            Statics: Kotlin.createObject(null, function Statics() {
              _.fg.md.card.MDCardTitle.Statics.styleClassName = new $module$elements.fg.elements.ClassSelector('md-card-title');
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardTitle.Statics;
            },
            styleClass$f: function () {
              this.fontSize = '24px';
              this.fontWeight = '400';
              this.marginTop = '0';
              this.marginBottom = '16px';
            }
          })
        }),
        colour: Kotlin.definePackage(null, /** @lends _.fg.md.colour */ {
          MDGrayPalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDPalette];
          }, function MDGrayPalette() {
            this.$s50_j0ffcn$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FAFAFA');
            this.$s100_l4dv0d$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#F5F5F5');
            this.$s200_l4du9o$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#EEEEEE');
            this.$s300_l4dtiz$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E0E0E0');
            this.$s400_l4dssa$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#BDBDBD');
            this.$s500_l4ds1l$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#9E9E9E');
            this.$s600_l4draw$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#757575');
            this.$s700_l4dqk7$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#616161');
            this.$s800_l4dpti$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#424242');
            this.$s900_l4dp2t$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#212121');
          }, /** @lends _.fg.md.colour.MDGrayPalette.prototype */ {
            s50: {
              get: function () {
                return this.$s50_j0ffcn$;
              }
            },
            s100: {
              get: function () {
                return this.$s100_l4dv0d$;
              }
            },
            s200: {
              get: function () {
                return this.$s200_l4du9o$;
              }
            },
            s300: {
              get: function () {
                return this.$s300_l4dtiz$;
              }
            },
            s400: {
              get: function () {
                return this.$s400_l4dssa$;
              }
            },
            s500: {
              get: function () {
                return this.$s500_l4ds1l$;
              }
            },
            s600: {
              get: function () {
                return this.$s600_l4draw$;
              }
            },
            s700: {
              get: function () {
                return this.$s700_l4dqk7$;
              }
            },
            s800: {
              get: function () {
                return this.$s800_l4dpti$;
              }
            },
            s900: {
              get: function () {
                return this.$s900_l4dp2t$;
              }
            }
          }),
          MDGreenPalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDPalette];
          }, function MDGreenPalette() {
            this.$s50_dt2axz$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E8F5E9');
            this.$s100_1ub0h1$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#C8E6C9');
            this.$s200_1ub17q$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#A5D6A7');
            this.$s300_1ub1yf$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#81C784');
            this.$s400_1ub2p4$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#66BB6A');
            this.$s500_1ub3ft$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#4CAF50');
            this.$s600_1ub46i$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#43A047');
            this.$s700_1ub4x7$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#388E3C');
            this.$s800_1ub5nw$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#2E7D32');
            this.$s900_1ub6el$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#1B5E20');
          }, /** @lends _.fg.md.colour.MDGreenPalette.prototype */ {
            s50: {
              get: function () {
                return this.$s50_dt2axz$;
              }
            },
            s100: {
              get: function () {
                return this.$s100_1ub0h1$;
              }
            },
            s200: {
              get: function () {
                return this.$s200_1ub17q$;
              }
            },
            s300: {
              get: function () {
                return this.$s300_1ub1yf$;
              }
            },
            s400: {
              get: function () {
                return this.$s400_1ub2p4$;
              }
            },
            s500: {
              get: function () {
                return this.$s500_1ub3ft$;
              }
            },
            s600: {
              get: function () {
                return this.$s600_1ub46i$;
              }
            },
            s700: {
              get: function () {
                return this.$s700_1ub4x7$;
              }
            },
            s800: {
              get: function () {
                return this.$s800_1ub5nw$;
              }
            },
            s900: {
              get: function () {
                return this.$s900_1ub6el$;
              }
            }
          }),
          MDPalette: Kotlin.createTrait(null),
          MDAlphaPalette: Kotlin.createTrait(null)
        }),
        mdCard_mw30zs$: function ($receiver, init) {
          var el = new _.fg.md.card.MDCard();
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        mdCard_exbqk4$: function (init) {
          var el = new _.fg.md.card.MDCard();
          init.call(el);
          return el;
        },
        title_9ngzzv$: function ($receiver, init) {
          var title = new _.fg.md.card.MDCardTitle();
          init.call(title);
          $receiver.appendChild_sr04hg$(title);
          return title;
        },
        title_ckv1du$: function ($receiver, init) {
          var title = new _.fg.md.card.MDCardTitle();
          init.call(title);
          $receiver.appendChild_sr04hg$(title);
          return title;
        },
        subtitle_s4hcc7$: function ($receiver, init) {
          var el = new _.fg.md.card.MDCardSubtitle();
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        header_tdtm38$: function ($receiver, init) {
          var el = new _.fg.md.card.MDCardHeader();
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        image_debpao$: function ($receiver, src, init) {
          var el = new _.fg.md.card.MDCardImage(src);
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        text_ua6lik$: function ($receiver, init) {
          var title = new _.fg.md.card.MDCardHeaderText();
          init.call(title);
          $receiver.appendChild_sr04hg$(title);
          return title;
        },
        title_6uqkfc$: function ($receiver, init) {
          var title = new _.fg.md.card.MDCardTitle();
          init.call(title);
          $receiver.appendChild_sr04hg$(title);
          return title;
        },
        subtitle_d012xi$: function ($receiver, init) {
          var el = new _.fg.md.card.MDCardSubtitle();
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        title_5ushh1$: function ($receiver, init) {
          var title = new _.fg.md.card.MDCardTitle();
          init.call(title);
          $receiver.appendChild_sr04hg$(title);
          return title;
        },
        subtitle_21c9x9$: function ($receiver, init) {
          var el = new _.fg.md.card.MDCardSubtitle();
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        avatar_f16147$: function ($receiver, src, init) {
          var el = new _.fg.md.card.MDCardAvatar(src);
          init.call(el);
          $receiver.appendChild_sr04hg$(el);
          return el;
        },
        content_v9m3oc$: function ($receiver, init) {
          var content = new _.fg.md.card.MDCardContent();
          init.call(content);
          $receiver.appendChild_sr04hg$(content);
          return content;
        }
      })
    })
  });
  Kotlin.defineModule('md', _);
  return _;
}(kotlin, elements);

//@ sourceMappingURL=md.js.map
