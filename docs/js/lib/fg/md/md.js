var md = function (Kotlin, $module$beans, $module$elements) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      md: Kotlin.definePackage(null, /** @lends _.fg.md */ {
        button: Kotlin.definePackage(null, /** @lends _.fg.md.button */ {
          MDButton: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.button.Button];
          }, function MDButton(action, type) {
            if (type === void 0)
              type = _.fg.md.button.MDButton.Type.FLAT;
            MDButton.baseInitializer.call(this, action);
            var initialValue = type;
            this.type$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.button.MDButton.type$f(this), initialValue);
            this.handleActionChanged_hsp1ab$ = _.fg.md.button.MDButton.handleActionChanged_hsp1ab$f(type, this);
            this.handleMouseDown_cxb98s$ = _.fg.md.button.MDButton.handleMouseDown_cxb98s$f(action, this);
            this.handleMouseUp_pc76yj$ = _.fg.md.button.MDButton.handleMouseUp_pc76yj$f(this);
          }, /** @lends _.fg.md.button.MDButton.prototype */ {
            type: {
              get: function () {
                return this.type$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('type'));
              },
              set: function (type) {
                this.type$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('type'), type);
              }
            },
            render: function () {
              $module$beans.fg.beans.button.Button.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.button.MDButton.MDButton.classSelector);
              this.renderState(this.type, this.action);
            },
            didMount: function () {
              $module$beans.fg.beans.button.Button.prototype.didMount.call(this);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this, this.handleMouseDown_cxb98s$);
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this, this.handleMouseUp_pc76yj$);
              this.action.onPropertyChanged_uamkrm$(this.handleActionChanged_hsp1ab$);
            },
            renderState: function (type, action) {
              var tmp$0, tmp$2;
              tmp$0 = _.fg.md.button.MDButton.Type.values();
              for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
                var c = tmp$0[tmp$2];
                if (c !== type) {
                  this.removeClass_bx842b$(c.selector);
                }
              }
              this.addClass_bx842b$(type.selector);
              if (Kotlin.equals(type, _.fg.md.button.MDButton.Type.FLAT)) {
                this.icon.hide();
                this.label.textContent = action.label;
                this.label.show();
              }
               else if (Kotlin.equals(type, _.fg.md.button.MDButton.Type.RAISED)) {
                this.icon.hide();
                this.label.textContent = action.label;
                this.label.show();
              }
               else if (Kotlin.equals(type, _.fg.md.button.MDButton.Type.FLOATING)) {
                this.label.hide();
                this.label.textContent = null;
                this.icon.show();
                this.icon.icon = _.fg.md.button.MDButton.MDButton.plusIcon_xo8y2j$;
              }
              if (!action.enabled) {
                this.addClass_bx842b$(_.fg.md.button.MDButton.MDButton.DISABLED_ec5uq6$);
                this._disabled = true;
              }
               else {
                this.removeClass_bx842b$(_.fg.md.button.MDButton.MDButton.DISABLED_ec5uq6$);
                this._disabled = false;
              }
            }
          }, /** @lends _.fg.md.button.MDButton */ {
            Type: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Type(selector) {
              Type.baseInitializer.call(this);
              this.selector = selector;
            }, function () {
              return {
                FLAT: function () {
                  return new _.fg.md.button.MDButton.Type(_.fg.md.button.MDButton.MDButton.TYPE_FLAT_uiiedo$);
                },
                RAISED: function () {
                  return new _.fg.md.button.MDButton.Type(_.fg.md.button.MDButton.MDButton.TYPE_RAISED_63pxx1$);
                },
                FLOATING: function () {
                  return new _.fg.md.button.MDButton.Type(_.fg.md.button.MDButton.MDButton.TYPE_FLOATING_9jf4x3$);
                }
              };
            }),
            MDButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDButton() {
              _.fg.md.button.MDButton.MDButton.TYPE_FLAT_uiiedo$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-flat');
              _.fg.md.button.MDButton.MDButton.TYPE_RAISED_63pxx1$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-raised');
              _.fg.md.button.MDButton.MDButton.TYPE_FLOATING_9jf4x3$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-floating');
              _.fg.md.button.MDButton.MDButton.PRESSED_ouaq9c$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-pressed');
              _.fg.md.button.MDButton.MDButton.DISABLED_ec5uq6$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-disabled');
              _.fg.md.button.MDButton.MDButton.plusIcon_xo8y2j$ = $module$beans.fg.beans.icon.FontAwesomeIcons.plus_629h0h$();
              _.fg.md.button.MDButton.MDButton.$classSelector_tv1vfp$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button');
              _.fg.md.button.MDButton.MDButton.$rule_21xq5u$ = _.fg.md.button.MDButton.MDButton.rule$f(_.fg.md.button.MDButton.MDButton);
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.button.MDButton.MDButton);
            }, /** @lends _.fg.md.button.MDButton.MDButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.button.MDButton.MDButton.$classSelector_tv1vfp$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.button.MDButton.MDButton.$rule_21xq5u$;
                }
              }
            }, /** @lends _.fg.md.button.MDButton.MDButton */ {
              f: function () {
                this.outline = 'none';
              },
              f_0: function () {
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT.toString();
              },
              f_1: function (this$MDButton$) {
                return function () {
                  this.minWidth = '88px';
                  this.width = '';
                  this.height = '36px';
                  this.boxShadow = 'none';
                  this.backgroundColor = 'white';
                  this.border = 'none';
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.DISABLED_ec5uq6$, _.fg.md.button.MDButton.MDButton.f_0);
                };
              },
              f_2: function () {
                this.boxShadow = '0 4px 8px 0 rgba(0,0,0,.4)';
              },
              f_3: function () {
                this.boxShadow = 'none';
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.BLACK.withAlfa_14dthe$(0.12).toString();
              },
              f_4: function (this$MDButton$) {
                return function () {
                  this.minWidth = '88px';
                  this.width = '';
                  this.height = '36px';
                  this.backgroundColor = 'white';
                  this.border = 'none';
                  this.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
                  $module$elements.fg.style.active_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f_2);
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.DISABLED_ec5uq6$, _.fg.md.button.MDButton.MDButton.f_3);
                };
              },
              f_5: function () {
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT.toString();
              },
              f_6: function (this$MDButton$) {
                return function () {
                  this.width = '40px';
                  this.height = '40px';
                  this.backgroundColor = 'white';
                  this.border = 'none';
                  this.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
                  this.borderRadius = '50%';
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.DISABLED_ec5uq6$, _.fg.md.button.MDButton.MDButton.f_5);
                };
              },
              f_7: function () {
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#999999').withAlfa_14dthe$(0.4).toString();
              },
              f_8: function () {
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#999999').withAlfa_14dthe$(0.4).toString();
              },
              rule$f: function (this$MDButton$) {
                return function () {
                  this.borderRadius = '2px';
                  $module$elements.fg.style.focus_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f);
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_FLAT_uiiedo$, _.fg.md.button.MDButton.MDButton.f_1(this$MDButton$));
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_RAISED_63pxx1$, _.fg.md.button.MDButton.MDButton.f_4(this$MDButton$));
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_FLOATING_9jf4x3$, _.fg.md.button.MDButton.MDButton.f_6(this$MDButton$));
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.PRESSED_ouaq9c$, _.fg.md.button.MDButton.MDButton.f_7);
                  $module$elements.fg.style.active_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f_8);
                };
              }
            }),
            object_initializer$: function () {
              _.fg.md.button.MDButton.MDButton;
            },
            type$f: function (this$MDButton) {
              return function (property, old, new_0) {
                this$MDButton.renderState(new_0, this$MDButton.action);
              };
            },
            handleActionChanged_hsp1ab$f: function (closure$type, this$MDButton) {
              return function (action, property, old, new_0) {
                this$MDButton.renderState(closure$type, action);
              };
            },
            handleMouseDown_cxb98s$f: function (closure$action, this$MDButton) {
              return function (event) {
                if (closure$action.enabled) {
                  this$MDButton.addClass_bx842b$(_.fg.md.button.MDButton.MDButton.PRESSED_ouaq9c$);
                }
              };
            },
            handleMouseUp_pc76yj$f: function (this$MDButton) {
              return function (event) {
                this$MDButton.removeClass_bx842b$(_.fg.md.button.MDButton.MDButton.PRESSED_ouaq9c$);
              };
            }
          })
        }),
        card: Kotlin.definePackage(null, /** @lends _.fg.md.card */ {
          MDCard: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCard() {
            MDCard.baseInitializer.call(this);
            this.themeChangedHandler_en6nbg$ = _.fg.md.card.MDCard.themeChangedHandler_en6nbg$f(this);
          }, /** @lends _.fg.md.card.MDCard.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCard.MDCard.classSelector);
              this.style.backgroundColor = _.fg.md.Context.theme.cardsNdialogs.toString();
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              _.fg.md.Context.theme.onPropertyChanged_3m4fm7$(this.themeChangedHandler_en6nbg$);
            }
          }, /** @lends _.fg.md.card.MDCard */ {
            MDCard: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCard() {
              _.fg.md.card.MDCard.MDCard.$classSelector_ehbdtp$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card');
              _.fg.md.card.MDCard.MDCard.$rule_6rr7f4$ = _.fg.md.card.MDCard.MDCard.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCard.MDCard);
            }, /** @lends _.fg.md.card.MDCard.MDCard.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCard.MDCard.$classSelector_ehbdtp$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCard.MDCard.$rule_6rr7f4$;
                }
              }
            }, /** @lends _.fg.md.card.MDCard.MDCard */ {
              rule$f: function () {
                this.display = 'block';
                this.position = 'relative';
                this.padding = '24px';
                this.borderRadius = '2px';
                this.boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
                this.fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCard.MDCard;
            },
            themeChangedHandler_en6nbg$f: function (this$MDCard) {
              return function (theme, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('cardsNdialogs', true).name))
                  this$MDCard.style.backgroundColor = _.fg.md.Context.theme.background.toString();
              };
            }
          }),
          MDCardAvatar: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Img];
          }, function MDCardAvatar(src) {
            MDCardAvatar.baseInitializer.call(this, src);
          }, /** @lends _.fg.md.card.MDCardAvatar.prototype */ {
            render: function () {
              $module$elements.fg.elements.Img.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardAvatar.MDCardAvatar.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardAvatar */ {
            MDCardAvatar: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardAvatar() {
              _.fg.md.card.MDCardAvatar.MDCardAvatar.$classSelector_ayrml$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-avatar');
              _.fg.md.card.MDCardAvatar.MDCardAvatar.$rule_14b2hc$ = _.fg.md.card.MDCardAvatar.MDCardAvatar.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardAvatar.MDCardAvatar);
            }, /** @lends _.fg.md.card.MDCardAvatar.MDCardAvatar.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardAvatar.MDCardAvatar.$classSelector_ayrml$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardAvatar.MDCardAvatar.$rule_14b2hc$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardAvatar.MDCardAvatar */ {
              rule$f: function () {
                this.width = '40px';
                this.height = '40px';
                this.borderRadius = '50%';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardAvatar.MDCardAvatar;
            }
          }),
          MDCardContent: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardContent() {
            MDCardContent.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardContent.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardContent.Statics.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardContent */ {
            Statics: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Statics() {
              _.fg.md.card.MDCardContent.Statics.$classSelector_khnmqq$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-content');
              _.fg.md.card.MDCardContent.Statics.$rule_ua91u3$ = _.fg.md.card.MDCardContent.Statics.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardContent.Statics);
            }, /** @lends _.fg.md.card.MDCardContent.Statics.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardContent.Statics.$classSelector_khnmqq$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardContent.Statics.$rule_ua91u3$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardContent.Statics */ {
              f: function () {
                this.marginTop = '0';
              },
              f_0: function () {
                $module$elements.fg.style.firstChild_i5tde3$(this, _.fg.md.card.MDCardContent.Statics.f);
              },
              rule$f: function () {
                this.fontSize = '14px';
                $module$elements.fg.style.child_lij791$(this, $module$elements.fg.elements.Selector.Statics.ANY, _.fg.md.card.MDCardContent.Statics.f_0);
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardContent.Statics;
            }
          }),
          MDCardHeader: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardHeader() {
            MDCardHeader.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardHeader.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardHeader.MDCardHeader.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardHeader */ {
            MDCardHeader: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardHeader() {
              _.fg.md.card.MDCardHeader.MDCardHeader.$classSelector_b1thcz$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-header');
              _.fg.md.card.MDCardHeader.MDCardHeader.$rule_dg8c0$ = _.fg.md.card.MDCardHeader.MDCardHeader.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardHeader.MDCardHeader);
            }, /** @lends _.fg.md.card.MDCardHeader.MDCardHeader.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardHeader.MDCardHeader.$classSelector_b1thcz$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardHeader.MDCardHeader.$rule_dg8c0$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardHeader.MDCardHeader */ {
              f: function () {
                this.fontSize = '14px';
              },
              f_0: function () {
                this.marginTop = '-8px';
              },
              f_1: function () {
                $module$elements.fg.style.not_dbehhi$(this, $module$elements.fg.elements.toSelector_pdl1w0$(':first-child'), _.fg.md.card.MDCardHeader.MDCardHeader.f_0);
              },
              rule$f: function () {
                this.display = 'flex';
                this.flexDirection = 'row';
                this.height = '40px';
                this.margin = '-8px 0 16px 0';
                $module$elements.fg.style.desc_4v8hhk$(this, _.fg.md.card.MDCardTitle.MDCardTitle.classSelector, _.fg.md.card.MDCardHeader.MDCardHeader.f);
                $module$elements.fg.style.desc_4v8hhk$(this, _.fg.md.card.MDCardSubtitle.MDCardSubtitle.classSelector, _.fg.md.card.MDCardHeader.MDCardHeader.f_1);
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardHeader.MDCardHeader;
            }
          }),
          MDCardHeaderText: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardHeaderText() {
            MDCardHeaderText.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardHeaderText.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardHeaderText.MDCardHeaderText.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardHeaderText */ {
            MDCardHeaderText: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardHeaderText() {
              _.fg.md.card.MDCardHeaderText.MDCardHeaderText.$classSelector_4oq4vx$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-header-text');
              _.fg.md.card.MDCardHeaderText.MDCardHeaderText.$rule_rd7ei8$ = _.fg.md.card.MDCardHeaderText.MDCardHeaderText.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardHeaderText.MDCardHeaderText);
            }, /** @lends _.fg.md.card.MDCardHeaderText.MDCardHeaderText.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardHeaderText.MDCardHeaderText.$classSelector_4oq4vx$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardHeaderText.MDCardHeaderText.$rule_rd7ei8$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardHeaderText.MDCardHeaderText */ {
              rule$f: function () {
                this.height = '40px';
                this.margin = '0 8px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardHeaderText.MDCardHeaderText;
            }
          }),
          MDCardImage: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Img];
          }, function MDCardImage(src) {
            MDCardImage.baseInitializer.call(this, src);
          }, /** @lends _.fg.md.card.MDCardImage.prototype */ {
            render: function () {
              $module$elements.fg.elements.Img.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardImage.MDCardImage.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardImage */ {
            MDCardImage: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardImage() {
              _.fg.md.card.MDCardImage.MDCardImage.$classSelector_en1ld$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-image');
              _.fg.md.card.MDCardImage.MDCardImage.$rule_mwd938$ = _.fg.md.card.MDCardImage.MDCardImage.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardImage.MDCardImage);
            }, /** @lends _.fg.md.card.MDCardImage.MDCardImage.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardImage.MDCardImage.$classSelector_en1ld$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardImage.MDCardImage.$rule_mwd938$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardImage.MDCardImage */ {
              rule$f: function () {
                this.height = '40px';
                this.margin = '0 8px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardImage.MDCardImage;
            }
          }),
          MDCardSubtitle: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardSubtitle() {
            MDCardSubtitle.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardSubtitle.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardSubtitle.MDCardSubtitle.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardSubtitle */ {
            MDCardSubtitle: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardSubtitle() {
              _.fg.md.card.MDCardSubtitle.MDCardSubtitle.$classSelector_o6q08t$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-subtitle');
              _.fg.md.card.MDCardSubtitle.MDCardSubtitle.$rule_vr57bk$ = _.fg.md.card.MDCardSubtitle.MDCardSubtitle.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardSubtitle.MDCardSubtitle);
            }, /** @lends _.fg.md.card.MDCardSubtitle.MDCardSubtitle.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardSubtitle.MDCardSubtitle.$classSelector_o6q08t$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardSubtitle.MDCardSubtitle.$rule_vr57bk$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardSubtitle.MDCardSubtitle */ {
              rule$f: function () {
                this.fontSize = '14px';
                this.fontWeight = '400';
                this.marginBottom = '16px';
                this.color = _.fg.md.colour.MDGrayPalette.p600.toHtml();
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardSubtitle.MDCardSubtitle;
            }
          }),
          MDCardTitle: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardTitle() {
            MDCardTitle.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardTitle.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardTitle.MDCardTitle.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardTitle */ {
            MDCardTitle: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardTitle() {
              _.fg.md.card.MDCardTitle.MDCardTitle.$classSelector_dhyod3$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-title');
              _.fg.md.card.MDCardTitle.MDCardTitle.$rule_2n3jm2$ = _.fg.md.card.MDCardTitle.MDCardTitle.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardTitle.MDCardTitle);
            }, /** @lends _.fg.md.card.MDCardTitle.MDCardTitle.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardTitle.MDCardTitle.$classSelector_dhyod3$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardTitle.MDCardTitle.$rule_2n3jm2$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardTitle.MDCardTitle */ {
              rule$f: function () {
                this.fontSize = '24px';
                this.fontWeight = '400';
                this.marginTop = '0';
                this.marginBottom = '16px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardTitle.MDCardTitle;
            }
          })
        }),
        colour: Kotlin.definePackage(null, /** @lends _.fg.md.colour */ {
          MDGrayPalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDPrimaryPalette];
          }, function MDGrayPalette() {
            this.$p50_j0fhkq$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FAFAFA');
            this.$p100_l4fryy$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#F5F5F5');
            this.$p200_l4fr89$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#EEEEEE');
            this.$p300_l4fqhk$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E0E0E0');
            this.$p400_l4fpqv$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#BDBDBD');
            this.$p500_l4fp06$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#9E9E9E');
            this.$p600_l4fo9h$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#757575');
            this.$p700_l4fnis$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#616161');
            this.$p800_l4fms3$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#424242');
            this.$p900_l4fm1e$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#212121');
          }, /** @lends _.fg.md.colour.MDGrayPalette.prototype */ {
            p50: {
              get: function () {
                return this.$p50_j0fhkq$;
              }
            },
            p100: {
              get: function () {
                return this.$p100_l4fryy$;
              }
            },
            p200: {
              get: function () {
                return this.$p200_l4fr89$;
              }
            },
            p300: {
              get: function () {
                return this.$p300_l4fqhk$;
              }
            },
            p400: {
              get: function () {
                return this.$p400_l4fpqv$;
              }
            },
            p500: {
              get: function () {
                return this.$p500_l4fp06$;
              }
            },
            p600: {
              get: function () {
                return this.$p600_l4fo9h$;
              }
            },
            p700: {
              get: function () {
                return this.$p700_l4fnis$;
              }
            },
            p800: {
              get: function () {
                return this.$p800_l4fms3$;
              }
            },
            p900: {
              get: function () {
                return this.$p900_l4fm1e$;
              }
            }
          }),
          MDGreenPalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDAccentPalette, _.fg.md.colour.MDPrimaryPalette];
          }, function MDGreenPalette() {
            this.$p50_dt28pw$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E8F5E9');
            this.$p100_1u93ig$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#C8E6C9');
            this.$p200_1u9495$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#A5D6A7');
            this.$p300_1u94zu$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#81C784');
            this.$p400_1u95qj$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#66BB6A');
            this.$p500_1u96h8$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#4CAF50');
            this.$p600_1u977x$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#43A047');
            this.$p700_1u97ym$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#388E3C');
            this.$p800_1u98pb$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#2E7D32');
            this.$p900_1u99g0$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#1B5E20');
            this.$a100_1tzipj$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#B9F6CA');
            this.$a200_1tzjg8$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#69F0AE');
            this.$a400_1tzkxm$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#00E676');
            this.$a700_1tzn5p$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#00C853');
          }, /** @lends _.fg.md.colour.MDGreenPalette.prototype */ {
            p50: {
              get: function () {
                return this.$p50_dt28pw$;
              }
            },
            p100: {
              get: function () {
                return this.$p100_1u93ig$;
              }
            },
            p200: {
              get: function () {
                return this.$p200_1u9495$;
              }
            },
            p300: {
              get: function () {
                return this.$p300_1u94zu$;
              }
            },
            p400: {
              get: function () {
                return this.$p400_1u95qj$;
              }
            },
            p500: {
              get: function () {
                return this.$p500_1u96h8$;
              }
            },
            p600: {
              get: function () {
                return this.$p600_1u977x$;
              }
            },
            p700: {
              get: function () {
                return this.$p700_1u97ym$;
              }
            },
            p800: {
              get: function () {
                return this.$p800_1u98pb$;
              }
            },
            p900: {
              get: function () {
                return this.$p900_1u99g0$;
              }
            },
            a100: {
              get: function () {
                return this.$a100_1tzipj$;
              }
            },
            a200: {
              get: function () {
                return this.$a200_1tzjg8$;
              }
            },
            a400: {
              get: function () {
                return this.$a400_1tzkxm$;
              }
            },
            a700: {
              get: function () {
                return this.$a700_1tzn5p$;
              }
            }
          }),
          MDPrimaryPalette: Kotlin.createTrait(null),
          MDAccentPalette: Kotlin.createTrait(null),
          MDPurplePalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDAccentPalette, _.fg.md.colour.MDPrimaryPalette];
          }, function MDPurplePalette() {
            this.$p50_gr4bgt$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#F3E5F5');
            this.$p100_m4xepr$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E1BEE7');
            this.$p200_m4xfgg$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#CE93D8');
            this.$p300_m4xg75$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#BA68C8');
            this.$p400_m4xgxu$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#AB47BC');
            this.$p500_m4xhoj$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#9C27B0');
            this.$p600_m4xif8$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#8E24AA');
            this.$p700_m4xj5x$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#7B1FA2');
            this.$p800_m4xjwm$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#6A1B9A');
            this.$p900_m4xknb$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#4A148C');
            this.$a100_m4ntwu$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#EA80FC');
            this.$a200_m4nunj$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E040FB');
            this.$a400_m4nw4x$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#D500F9');
            this.$a700_m4nyd0$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#AA00FF');
          }, /** @lends _.fg.md.colour.MDPurplePalette.prototype */ {
            p50: {
              get: function () {
                return this.$p50_gr4bgt$;
              }
            },
            p100: {
              get: function () {
                return this.$p100_m4xepr$;
              }
            },
            p200: {
              get: function () {
                return this.$p200_m4xfgg$;
              }
            },
            p300: {
              get: function () {
                return this.$p300_m4xg75$;
              }
            },
            p400: {
              get: function () {
                return this.$p400_m4xgxu$;
              }
            },
            p500: {
              get: function () {
                return this.$p500_m4xhoj$;
              }
            },
            p600: {
              get: function () {
                return this.$p600_m4xif8$;
              }
            },
            p700: {
              get: function () {
                return this.$p700_m4xj5x$;
              }
            },
            p800: {
              get: function () {
                return this.$p800_m4xjwm$;
              }
            },
            p900: {
              get: function () {
                return this.$p900_m4xknb$;
              }
            },
            a100: {
              get: function () {
                return this.$a100_m4ntwu$;
              }
            },
            a200: {
              get: function () {
                return this.$a200_m4nunj$;
              }
            },
            a400: {
              get: function () {
                return this.$a400_m4nw4x$;
              }
            },
            a700: {
              get: function () {
                return this.$a700_m4nyd0$;
              }
            }
          }),
          MDRedPalette: Kotlin.createObject(function () {
            return [_.fg.md.colour.MDAccentPalette, _.fg.md.colour.MDPrimaryPalette];
          }, function MDRedPalette() {
            this.$p50_kn2hnu$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FFEBEE');
            this.$p100_l4soa$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FFCDD2');
            this.$p200_l4rxl$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#EF9A9A');
            this.$p300_l4r6w$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E57373');
            this.$p400_l4qg7$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#EF5350');
            this.$p500_l4ppi$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#F44336');
            this.$p600_l4oyt$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#E53935');
            this.$p700_l4o84$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#D32F2F');
            this.$p800_l4nhf$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#C62828');
            this.$p900_l4mqq$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#B71C1C');
            this.$a100_ledh7$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FF8A80');
            this.$a200_lecqi$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FF5252');
            this.$a400_leb94$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#FF1744');
            this.$a700_le911$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#D50000');
          }, /** @lends _.fg.md.colour.MDRedPalette.prototype */ {
            p50: {
              get: function () {
                return this.$p50_kn2hnu$;
              }
            },
            p100: {
              get: function () {
                return this.$p100_l4soa$;
              }
            },
            p200: {
              get: function () {
                return this.$p200_l4rxl$;
              }
            },
            p300: {
              get: function () {
                return this.$p300_l4r6w$;
              }
            },
            p400: {
              get: function () {
                return this.$p400_l4qg7$;
              }
            },
            p500: {
              get: function () {
                return this.$p500_l4ppi$;
              }
            },
            p600: {
              get: function () {
                return this.$p600_l4oyt$;
              }
            },
            p700: {
              get: function () {
                return this.$p700_l4o84$;
              }
            },
            p800: {
              get: function () {
                return this.$p800_l4nhf$;
              }
            },
            p900: {
              get: function () {
                return this.$p900_l4mqq$;
              }
            },
            a100: {
              get: function () {
                return this.$a100_ledh7$;
              }
            },
            a200: {
              get: function () {
                return this.$a200_lecqi$;
              }
            },
            a400: {
              get: function () {
                return this.$a400_leb94$;
              }
            },
            a700: {
              get: function () {
                return this.$a700_le911$;
              }
            }
          })
        }),
        Context: Kotlin.createObject(null, function Context() {
          this.theme = _.fg.md.Theme.Statics.LIGHT;
        }),
        mdButton_2sp1zl$: function ($receiver, action, type, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.button.MDButton(action, type), init);
        },
        mdDrawer_jwcniz$: function ($receiver, side, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.drawer.MDDrawer(side), init);
        },
        mdCard_mw30zs$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCard(), init);
        },
        title_9ngzzv$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitle(), init);
        },
        subtitle_s4hcc7$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardSubtitle(), init);
        },
        header_tdtm38$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardHeader(), init);
        },
        image_debpao$: function ($receiver, src, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardImage(src), init);
        },
        content_v9m3oc$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardContent(), init);
        },
        text_ua6lik$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardHeaderText(), init);
        },
        title_6uqkfc$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitle(), init);
        },
        subtitle_d012xi$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardSubtitle(), init);
        },
        title_5ushh1$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitle(), init);
        },
        subtitle_21c9x9$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardSubtitle(), init);
        },
        avatar_f16147$: function ($receiver, src, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardAvatar(src), init);
        },
        title_ckv1du$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitle(), init);
        },
        Theme: Kotlin.createClass(null, function Theme(primaryPalette, accentPalette, warnPalette, statusBar, appBar, background, cardsNdialogs) {
          this.propertyChangedListeners_xiispb$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.primaryPalette$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.primaryPalette$f, primaryPalette);
          this.accentPalette$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.accentPalette$f, primaryPalette);
          this.warnPalette$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.warnPalette$f, primaryPalette);
          this.statusBar$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.statusBar$f, statusBar);
          this.appBar$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.appBar$f, appBar);
          this.background$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.background$f, background);
          this.cardsNdialogs$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.cardsNdialogs$f, cardsNdialogs);
        }, /** @lends _.fg.md.Theme.prototype */ {
          notifyPropertyChanged: function (property, old, new_0) {
            var tmp$0;
            tmp$0 = this.propertyChangedListeners_xiispb$.iterator();
            while (tmp$0.hasNext()) {
              var listener = tmp$0.next();
              listener(this, property, old, new_0);
            }
          },
          onPropertyChanged_3m4fm7$: function (listener) {
            var tmp$0;
            this.propertyChangedListeners_xiispb$.add_za3rmp$(typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
          },
          unPropertyChanged_3m4fm7$: function (listener) {
            this.propertyChangedListeners_xiispb$.remove_za3rmp$(listener);
          },
          primaryPalette: {
            get: function () {
              return this.primaryPalette$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('primaryPalette'));
            },
            set: function (primaryPalette) {
              this.primaryPalette$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('primaryPalette'), primaryPalette);
            }
          },
          accentPalette: {
            get: function () {
              return this.accentPalette$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('accentPalette'));
            },
            set: function (accentPalette) {
              this.accentPalette$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('accentPalette'), accentPalette);
            }
          },
          warnPalette: {
            get: function () {
              return this.warnPalette$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('warnPalette'));
            },
            set: function (warnPalette) {
              this.warnPalette$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('warnPalette'), warnPalette);
            }
          },
          statusBar: {
            get: function () {
              return this.statusBar$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('statusBar'));
            },
            set: function (statusBar) {
              this.statusBar$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('statusBar'), statusBar);
            }
          },
          appBar: {
            get: function () {
              return this.appBar$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('appBar'));
            },
            set: function (appBar) {
              this.appBar$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('appBar'), appBar);
            }
          },
          background: {
            get: function () {
              return this.background$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('background'));
            },
            set: function (background) {
              this.background$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('background'), background);
            }
          },
          cardsNdialogs: {
            get: function () {
              return this.cardsNdialogs$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('cardsNdialogs'));
            },
            set: function (cardsNdialogs) {
              this.cardsNdialogs$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('cardsNdialogs'), cardsNdialogs);
            }
          }
        }, /** @lends _.fg.md.Theme */ {
          Statics: Kotlin.createObject(null, function Statics() {
            _.fg.md.Theme.Statics.LIGHT = new _.fg.md.Theme(_.fg.md.colour.MDGreenPalette, _.fg.md.colour.MDPurplePalette, _.fg.md.colour.MDRedPalette, _.fg.md.colour.MDGrayPalette.p300, _.fg.md.colour.MDGrayPalette.p100, _.fg.md.colour.MDGrayPalette.p50, $module$elements.fg.style.colour.RgbColor.Factory.WHITE);
          }),
          object_initializer$: function () {
            _.fg.md.Theme.Statics;
          },
          primaryPalette$f: function (property, old, new_0) {
          },
          accentPalette$f: function (property, old, new_0) {
          },
          warnPalette$f: function (property, old, new_0) {
          },
          statusBar$f: function (property, old, new_0) {
          },
          appBar$f: function (property, old, new_0) {
          },
          background$f: function (property, old, new_0) {
          },
          cardsNdialogs$f: function (property, old, new_0) {
          }
        }),
        drawer: Kotlin.definePackage(null, /** @lends _.fg.md.drawer */ {
          MDDrawer: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.drawer.Drawer];
          }, function MDDrawer(side) {
            MDDrawer.baseInitializer.call(this, side);
          }, /** @lends _.fg.md.drawer.MDDrawer.prototype */ {
            render: function () {
              $module$beans.fg.beans.drawer.Drawer.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.drawer.MDDrawer.MDDrawer.classSelector);
            }
          }, /** @lends _.fg.md.drawer.MDDrawer */ {
            MDDrawer: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDDrawer() {
              _.fg.md.drawer.MDDrawer.MDDrawer.$classSelector_zbfnr8$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-drawer');
              _.fg.md.drawer.MDDrawer.MDDrawer.$rule_bobqk1$ = _.fg.md.drawer.MDDrawer.MDDrawer.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.drawer.MDDrawer.MDDrawer);
            }, /** @lends _.fg.md.drawer.MDDrawer.MDDrawer.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.drawer.MDDrawer.MDDrawer.$classSelector_zbfnr8$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.drawer.MDDrawer.MDDrawer.$rule_bobqk1$;
                }
              }
            }, /** @lends _.fg.md.drawer.MDDrawer.MDDrawer */ {
              rule$f: function () {
                this.backgroundColor = 'white';
                this.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, ' + 'rgba(0, 0, 0, 0.227451) 0px 3px 10px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.drawer.MDDrawer.MDDrawer;
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('md', _);
  return _;
}(kotlin, beans, elements);

//@ sourceMappingURL=md.js.map
