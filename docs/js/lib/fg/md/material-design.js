this['material-design'] = function (Kotlin, $module$beans, $module$elements) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      md: Kotlin.definePackage(function () {
        this.pkg = 'fg-md';
      }, /** @lends _.fg.md */ {
        button: Kotlin.definePackage(null, /** @lends _.fg.md.button */ {
          MDButton: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.button.Button];
          }, function MDButton(action, type, color, margins) {
            if (type === void 0)
              type = _.fg.md.button.MDButton.Type.FLAT;
            if (color === void 0)
              color = _.fg.md.colour.MDColor.DEFAULT;
            if (margins === void 0)
              margins = false;
            MDButton.baseInitializer.call(this, action);
            var initialValue = type;
            var onChange = _.fg.md.button.MDButton.type$f(this, color);
            this.type$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(onChange, initialValue);
            var initialValue_0 = color;
            this.color$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.button.MDButton.color$f(this), initialValue_0);
            var initialValue_1 = margins;
            this.margins$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.button.MDButton.margins$f(this), initialValue_1);
            this.ripples_xt9s5s$ = false;
            this.ripple$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.md.button.MDButton.ripple_qamnod$f(this));
            this.flatStyle = new _.fg.md.button.MDButton.FlatStyle();
            this.raisedStyle = new _.fg.md.button.MDButton.RaisedStyle();
            this.floatingStyle = new _.fg.md.button.MDButton.FloatingStyle();
          }, /** @lends _.fg.md.button.MDButton.prototype */ {
            type: {
              get: function () {
                return this.type$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('type'));
              },
              set: function (type) {
                this.type$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('type'), type);
              }
            },
            color: {
              get: function () {
                return this.color$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('color'));
              },
              set: function (color) {
                this.color$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('color'), color);
              }
            },
            margins: {
              get: function () {
                return this.margins$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('margins'));
              },
              set: function (margins) {
                this.margins$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('margins'), margins);
              }
            },
            ripple_qamnod$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.ripple$delegate, this, new Kotlin.PropertyMetadata('ripple'));
              }
            },
            render: function () {
              $module$beans.fg.beans.button.Button.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.button.MDButton.MDButton.classSelector);
              this.renderType(this.type);
              this.renderColor(this.color);
              this.renderMargins(this.margins);
            },
            didMount: function () {
              $module$beans.fg.beans.button.Button.prototype.didMount.call(this);
              this.ripple_qamnod$.init();
            },
            onEnabled: function () {
              this.renderColor();
              this.removeClass_bx842b$($module$beans.fg.beans.button.AbstractButton.AbstractButton.DISABLED);
            },
            onDisabled: function () {
              this.renderColor();
              this.addClass_bx842b$($module$beans.fg.beans.button.AbstractButton.AbstractButton.DISABLED);
            },
            onHover: function () {
              this.renderColor();
            },
            unHover: function () {
              this.renderColor();
            },
            onFocus: function () {
              this.renderColor();
            },
            unFocus: function () {
              this.renderColor();
            },
            onPressed: function () {
              this.renderColor();
            },
            unPressed: function () {
              this.renderColor();
            },
            renderType: function (type) {
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
                this.label.textContent = this.action.label;
                this.label.show();
              }
               else if (Kotlin.equals(type, _.fg.md.button.MDButton.Type.RAISED)) {
                this.icon.hide();
                this.label.textContent = this.action.label;
                this.label.show();
              }
               else if (Kotlin.equals(type, _.fg.md.button.MDButton.Type.FLOATING)) {
                this.label.hide();
                this.label.textContent = null;
                this.icon.show();
                this.icon.icon = _.fg.md.button.MDButton.MDButton.plusIcon_xo8y2j$;
              }
            },
            renderColor: function (color) {
              var tmp$0;
              if (color === void 0)
                color = this.color;
              tmp$0 = this.type;
              if (Kotlin.equals(tmp$0, _.fg.md.button.MDButton.Type.FLAT))
                if (this.action.enabled) {
                  if (this.pressed) {
                    this.style.backgroundColor = this.flatStyle.pressed.backgroundColor;
                  }
                   else if (this.focused) {
                    this.style.backgroundColor = this.flatStyle.focused.backgroundColor;
                  }
                   else if (this.hovered) {
                    this.style.backgroundColor = this.flatStyle.hovered.backgroundColor;
                  }
                   else {
                    this.style.backgroundColor = this.flatStyle.backgroundColor;
                  }
                  this.style.color = _.fg.md.Context.theme.color_6hl4m2$(color, $module$elements.fg.style.colour.RgbColor.Factory.BLACK);
                }
                 else {
                  this.style.backgroundColor = this.flatStyle.disabled.backgroundColor;
                  this.style.color = this.flatStyle.disabled.color;
                }
               else if (Kotlin.equals(tmp$0, _.fg.md.button.MDButton.Type.RAISED))
                if (this.action.enabled) {
                  if (this.pressed) {
                    this.style.backgroundColor = this.raisedStyle.pressed.backgroundColor;
                  }
                   else if (this.focused) {
                    this.style.backgroundColor = this.raisedStyle.focused.backgroundColor;
                  }
                   else if (this.hovered) {
                    this.style.backgroundColor = this.raisedStyle.hovered.backgroundColor;
                  }
                   else {
                    this.style.backgroundColor = _.fg.md.Context.theme.color_6hl4m2$(color, $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT);
                  }
                  this.style.color = this.raisedStyle.color;
                }
                 else {
                  this.style.color = this.raisedStyle.disabled.color;
                  this.style.backgroundColor = this.raisedStyle.disabled.backgroundColor;
                }
               else if (Kotlin.equals(tmp$0, _.fg.md.button.MDButton.Type.FLOATING))
                if (this.action.enabled) {
                  this.style.backgroundColor = _.fg.md.Context.theme.color_6hl4m2$(color, $module$elements.fg.style.colour.RgbColor.Factory.WHITE);
                  this.style.color = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
                }
                 else {
                }
            },
            renderMargins: function (enabled) {
              if (enabled) {
                this._style.margin = '8px';
              }
               else {
                this._style.margin = '0';
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
            FlatStyle: Kotlin.createClass(function () {
              return [$module$beans.fg.beans.ElementStyle];
            }, function FlatStyle() {
              FlatStyle.baseInitializer.call(this);
              this.$color_srct52$ = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
              this.$backgroundColor_889ooc$ = $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT;
              this.hovered = new _.fg.md.button.MDButton.FlatStyle.hovered$f();
              this.pressed = new _.fg.md.button.MDButton.FlatStyle.pressed$f();
              this.focused = new _.fg.md.button.MDButton.FlatStyle.focused$f();
              this.disabled = new _.fg.md.button.MDButton.FlatStyle.disabled$f();
            }, /** @lends _.fg.md.button.MDButton.FlatStyle.prototype */ {
              color: {
                get: function () {
                  return this.$color_srct52$;
                },
                set: function (color) {
                  this.$color_srct52$ = color;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.$backgroundColor_889ooc$;
                },
                set: function (backgroundColor) {
                  this.$backgroundColor_889ooc$ = backgroundColor;
                }
              }
            }, /** @lends _.fg.md.button.MDButton.FlatStyle */ {
              hovered$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_6j0lbo$ = new $module$elements.fg.style.colour.RgbColor(153, 153, 153, 0.2);
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.hovered$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_6j0lbo$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_6j0lbo$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.hovered$f */ {
              }),
              pressed$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_qlwmed$ = new $module$elements.fg.style.colour.RgbColor(204, 204, 204);
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.pressed$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_qlwmed$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_qlwmed$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.pressed$f */ {
              }),
              focused$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_n9h33k$ = new $module$elements.fg.style.colour.RgbColor(221, 221, 221);
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.focused$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_n9h33k$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_n9h33k$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.focused$f */ {
              }),
              disabled$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$color_8py8rr$ = $module$elements.fg.style.colour.RgbColor.Factory.BLACK.withAlfa_14dthe$(0.26);
                this.$backgroundColor_doxktj$ = $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT;
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.disabled$f.prototype */ {
                color: {
                  get: function () {
                    return this.$color_8py8rr$;
                  },
                  set: function (color) {
                    this.$color_8py8rr$ = color;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_doxktj$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_doxktj$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.FlatStyle.disabled$f */ {
              })
            }),
            RaisedStyle: Kotlin.createClass(function () {
              return [$module$beans.fg.beans.ElementStyle];
            }, function RaisedStyle() {
              RaisedStyle.baseInitializer.call(this);
              this.$color_wactp7$ = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
              this.$backgroundColor_rqbkmr$ = $module$elements.fg.style.colour.RgbColor.Factory.TRANSPARENT;
              this.hovered = new _.fg.md.button.MDButton.RaisedStyle.hovered$f();
              this.pressed = new _.fg.md.button.MDButton.RaisedStyle.pressed$f();
              this.focused = new _.fg.md.button.MDButton.RaisedStyle.focused$f();
              this.disabled = new _.fg.md.button.MDButton.RaisedStyle.disabled$f();
            }, /** @lends _.fg.md.button.MDButton.RaisedStyle.prototype */ {
              color: {
                get: function () {
                  return this.$color_wactp7$;
                },
                set: function (color) {
                  this.$color_wactp7$ = color;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.$backgroundColor_rqbkmr$;
                },
                set: function (backgroundColor) {
                  this.$backgroundColor_rqbkmr$ = backgroundColor;
                }
              }
            }, /** @lends _.fg.md.button.MDButton.RaisedStyle */ {
              hovered$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_jdndfv$ = new $module$elements.fg.style.colour.RgbColor(153, 153, 153, 0.2);
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.hovered$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_jdndfv$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_jdndfv$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.hovered$f */ {
              }),
              pressed$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_iijgt8$ = new $module$elements.fg.style.colour.RgbColor(204, 204, 204);
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.pressed$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_iijgt8$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_iijgt8$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.pressed$f */ {
              }),
              focused$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_luz041$ = new $module$elements.fg.style.colour.RgbColor(221, 221, 221);
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.focused$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_luz041$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_luz041$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.focused$f */ {
              }),
              disabled$f: Kotlin.createClass(function () {
                return [$module$beans.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$color_ojjuw$ = $module$elements.fg.style.colour.RgbColor.Factory.BLACK.withAlfa_14dthe$(0.26);
                this.$backgroundColor_83gr5m$ = new $module$elements.fg.style.colour.RgbColor(0, 0, 0, 0.12);
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.disabled$f.prototype */ {
                color: {
                  get: function () {
                    return this.$color_ojjuw$;
                  },
                  set: function (color) {
                    this.$color_ojjuw$ = color;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_83gr5m$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_83gr5m$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.md.button.MDButton.RaisedStyle.disabled$f */ {
              })
            }),
            FloatingStyle: Kotlin.createClass(function () {
              return [$module$beans.fg.beans.ElementStyle];
            }, function FloatingStyle() {
              FloatingStyle.baseInitializer.call(this);
              this.$color_pko7rh$ = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
              this.$backgroundColor_dqj269$ = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
            }, /** @lends _.fg.md.button.MDButton.FloatingStyle.prototype */ {
              color: {
                get: function () {
                  return this.$color_pko7rh$;
                },
                set: function (color) {
                  this.$color_pko7rh$ = color;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.$backgroundColor_dqj269$;
                },
                set: function (backgroundColor) {
                  this.$backgroundColor_dqj269$ = backgroundColor;
                }
              }
            }),
            MDButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDButton() {
              _.fg.md.button.MDButton.MDButton.TYPE_FLAT_uiiedo$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-flat');
              _.fg.md.button.MDButton.MDButton.TYPE_RAISED_63pxx1$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-raised');
              _.fg.md.button.MDButton.MDButton.TYPE_FLOATING_9jf4x3$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-button-floating');
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
                this.minWidth = '88px';
                this.width = '';
                this.height = '36px';
                this.boxShadow = 'none';
                this.border = 'none';
              },
              f_1: function () {
                this.boxShadow = '0 4px 8px 0 rgba(0,0,0,.4)';
              },
              f_2: function () {
                this.boxShadow = 'none';
              },
              f_3: function () {
                this.minWidth = '88px';
                this.width = '';
                this.height = '36px';
                this.border = 'none';
                this.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
                $module$elements.fg.style.active_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f_1);
                $module$elements.fg.style.and_dbehhi$(this, $module$beans.fg.beans.button.AbstractButton.AbstractButton.DISABLED, _.fg.md.button.MDButton.MDButton.f_2);
              },
              f_4: function () {
                this.boxShadow = '0 4px 8px 0 rgba(0,0,0,.4)';
              },
              f_5: function () {
                this.boxShadow = 'none';
              },
              f_6: function () {
                this.width = '40px';
                this.height = '40px';
                this.border = 'none';
                this.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
                this.borderRadius = '50%';
                $module$elements.fg.style.active_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f_4);
                $module$elements.fg.style.and_dbehhi$(this, $module$beans.fg.beans.button.AbstractButton.AbstractButton.DISABLED, _.fg.md.button.MDButton.MDButton.f_5);
              },
              rule$f: function (this$MDButton$) {
                return function () {
                  this.borderRadius = '2px';
                  this.marginLeft = '8px';
                  this.marginRight = '8px';
                  this.fontFamily = _.fg.md.Context.theme.font;
                  this.fontSize = '14px';
                  this.fontWeight = '500';
                  $module$elements.fg.style.focus_i5tde3$(this, _.fg.md.button.MDButton.MDButton.f);
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_FLAT_uiiedo$, _.fg.md.button.MDButton.MDButton.f_0);
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_RAISED_63pxx1$, _.fg.md.button.MDButton.MDButton.f_3);
                  $module$elements.fg.style.and_dbehhi$(this, this$MDButton$.TYPE_FLOATING_9jf4x3$, _.fg.md.button.MDButton.MDButton.f_6);
                };
              }
            }),
            object_initializer$: function () {
              _.fg.md.button.MDButton.MDButton;
            },
            type$f: function (this$MDButton, closure$color) {
              return function (property, old, new_0) {
                this$MDButton.renderType(new_0);
                this$MDButton.renderColor(closure$color);
              };
            },
            color$f: function (this$MDButton) {
              return function (property, old, new_0) {
                this$MDButton.renderColor(new_0);
              };
            },
            margins$f: function (this$MDButton) {
              return function (property, old, new_0) {
                this$MDButton.renderMargins(new_0);
              };
            },
            f: function (this$MDButton) {
              return function () {
                this$MDButton.ripples_xt9s5s$ = true;
              };
            },
            f_0: function (this$MDButton) {
              return function () {
                this$MDButton.ripples_xt9s5s$ = false;
                this$MDButton.renderColor();
              };
            },
            ripple_qamnod$f: function (this$MDButton) {
              return function () {
                return new _.fg.md.support.Ripple(this$MDButton, void 0, _.fg.md.button.MDButton.f(this$MDButton), _.fg.md.button.MDButton.f_0(this$MDButton));
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
              this.style.backgroundColor = _.fg.md.Context.theme.cardsNdialogs;
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
                this.borderRadius = '2px';
                this.boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
                this.fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
                this.backgroundSize = 'cover';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCard.MDCard;
            },
            themeChangedHandler_en6nbg$f: function (this$MDCard) {
              return function (theme, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('cardsNdialogs', true).name))
                  this$MDCard.style.backgroundColor = _.fg.md.Context.theme.background;
              };
            }
          }),
          MDCardActions: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardActions() {
            MDCardActions.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardActions.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardActions.MDCardActions.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardActions */ {
            MDCardActions: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardActions() {
              _.fg.md.card.MDCardActions.MDCardActions.$classSelector_qdnqx9$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-actions');
              _.fg.md.card.MDCardActions.MDCardActions.$rule_xhufb4$ = _.fg.md.card.MDCardActions.MDCardActions.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardActions.MDCardActions);
            }, /** @lends _.fg.md.card.MDCardActions.MDCardActions.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardActions.MDCardActions.$classSelector_qdnqx9$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardActions.MDCardActions.$rule_xhufb4$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardActions.MDCardActions */ {
              rule$f: function () {
                this.padding = '8px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardActions.MDCardActions;
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
                this.padding = '16px';
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
                this.marginRight = '12px';
              },
              f_1: function () {
              },
              f_2: function () {
                $module$elements.fg.style.not_dbehhi$(this, $module$elements.fg.elements.toSelector_pdl1w0$(':first-child'), _.fg.md.card.MDCardHeader.MDCardHeader.f_1);
              },
              rule$f: function () {
                this.display = 'flex';
                this.flexDirection = 'row';
                this.padding = '16px';
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardTitle.MDCardTitle.classSelector, _.fg.md.card.MDCardHeader.MDCardHeader.f);
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardAvatar.MDCardAvatar.classSelector, _.fg.md.card.MDCardHeader.MDCardHeader.f_0);
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardSubtitle.MDCardSubtitle.classSelector, _.fg.md.card.MDCardHeader.MDCardHeader.f_2);
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
              f: function () {
                this.padding = '0';
                this.fontSize = '14px';
                this.fontWeight = '500';
              },
              f_0: function () {
                this.flex = '1';
              },
              rule$f: function () {
                this.display = 'flex';
                this.flexDirection = 'column';
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardTitle.MDCardTitle.classSelector, _.fg.md.card.MDCardHeaderText.MDCardHeaderText.f);
                $module$elements.fg.style.child_lij791$(this, $module$elements.fg.elements.Selector.Statics.ANY, _.fg.md.card.MDCardHeaderText.MDCardHeaderText.f_0);
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
                this.height = '100%';
                this.width = '100%';
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
                this.paddingTop = '24px';
                this.paddingBottom = '16px';
                this.paddingLeft = '16px';
                this.paddingRight = '16px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardTitle.MDCardTitle;
            }
          }),
          MDCardTitleText: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCardTitleText() {
            MDCardTitleText.baseInitializer.call(this);
          }, /** @lends _.fg.md.card.MDCardTitleText.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.card.MDCardTitleText.MDCardHeaderText.classSelector);
            }
          }, /** @lends _.fg.md.card.MDCardTitleText */ {
            MDCardHeaderText: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCardHeaderText() {
              _.fg.md.card.MDCardTitleText.MDCardHeaderText.$classSelector_uf0nfy$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-card-title-text');
              _.fg.md.card.MDCardTitleText.MDCardHeaderText.$rule_i1a68r$ = _.fg.md.card.MDCardTitleText.MDCardHeaderText.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.card.MDCardTitleText.MDCardHeaderText);
            }, /** @lends _.fg.md.card.MDCardTitleText.MDCardHeaderText.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.card.MDCardTitleText.MDCardHeaderText.$classSelector_uf0nfy$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.card.MDCardTitleText.MDCardHeaderText.$rule_i1a68r$;
                }
              }
            }, /** @lends _.fg.md.card.MDCardTitleText.MDCardHeaderText */ {
              f: function () {
                this.paddingTop = '12px';
              },
              f_0: function () {
                this.padding = '0';
                $module$elements.fg.style.not_dbehhi$(this, $module$elements.fg.elements.toSelector_pdl1w0$(':first-child'), _.fg.md.card.MDCardTitleText.MDCardHeaderText.f);
              },
              f_1: function () {
                this.paddingTop = '12px';
              },
              f_2: function () {
                $module$elements.fg.style.not_dbehhi$(this, $module$elements.fg.elements.toSelector_pdl1w0$(':first-child'), _.fg.md.card.MDCardTitleText.MDCardHeaderText.f_1);
              },
              rule$f: function () {
                this.paddingTop = '24px';
                this.paddingLeft = '16px';
                this.paddingRight = '16px';
                this.paddingBottom = '16px';
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardTitle.MDCardTitle.classSelector, _.fg.md.card.MDCardTitleText.MDCardHeaderText.f_0);
                $module$elements.fg.style.child_lij791$(this, _.fg.md.card.MDCardSubtitle.MDCardSubtitle.classSelector, _.fg.md.card.MDCardTitleText.MDCardHeaderText.f_2);
              }
            }),
            object_initializer$: function () {
              _.fg.md.card.MDCardTitleText.MDCardHeaderText;
            }
          })
        }),
        colour: Kotlin.definePackage(null, /** @lends _.fg.md.colour */ {
          MDColor: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function MDColor() {
            MDColor.baseInitializer.call(this);
          }, function () {
            return {
              DEFAULT: function () {
                return new _.fg.md.colour.MDColor();
              },
              PRIMARY: function () {
                return new _.fg.md.colour.MDColor();
              },
              ACCENT: function () {
                return new _.fg.md.colour.MDColor();
              },
              WARN: function () {
                return new _.fg.md.colour.MDColor();
              }
            };
          }),
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
        mdCard_mw30zs$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCard(), init);
        },
        mdDrawer_xlr1e3$: function ($receiver, side, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.drawer.MDDrawer(side), init);
        },
        mdExpansionPanel_n7ohdx$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.panel.MDExpansionPanel(), init);
        },
        mdMenu_rsebdp$: function ($receiver, label, shortcut, init) {
          if (label === void 0)
            label = null;
          if (shortcut === void 0)
            shortcut = null;
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.menu.MDMenu(label, shortcut), init);
        },
        mdRadioButton_b27tws$: function ($receiver, labelText, init) {
          if (labelText === void 0)
            labelText = null;
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.radio.MDRadioButton(void 0, labelText), init);
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
        mdActions_oawm00$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardActions(), init);
        },
        titleText_645feg$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitleText(), init);
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
        title_u9pmp6$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardTitle(), init);
        },
        subtitle_n5hv2w$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.card.MDCardSubtitle(), init);
        },
        mdButton_epm7bq$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.button.MDButton(action, _.fg.md.button.MDButton.Type.FLAT), init);
        },
        mdButton_gwa2rj$: function ($receiver, action, type, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.button.MDButton(action, type), init);
        },
        mdMenuItem_av74$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.menu.MDMenuItem(action), init);
        },
        mdCollapsedPanel_fr84r$: function ($receiver, init) {
          $receiver.collapsedPanel = $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.panel.MDCollapsedPanel(), init);
        },
        mdExpandedPanel_q52uq9$: function ($receiver, init) {
          $receiver.expandedPanel = $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.md.panel.MDExpandedPanel(), init);
        },
        Theme: Kotlin.createClass(null, function Theme(primaryColor, accentColor, warnColor, statusBar, appBar, background, cardsNdialogs, font) {
          this.propertyChangedListeners_xiispb$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.primaryColor$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.primaryColor$f, primaryColor);
          this.accentColor$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.accentColor$f, accentColor);
          this.warnColor$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.warnColor$f, warnColor);
          this.statusBar$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.statusBar$f, statusBar);
          this.appBar$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.appBar$f, appBar);
          this.background$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.background$f, background);
          this.cardsNdialogs$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.Theme.cardsNdialogs$f, cardsNdialogs);
          this.font = font;
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
          primaryColor: {
            get: function () {
              return this.primaryColor$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('primaryColor'));
            },
            set: function (primaryColor) {
              this.primaryColor$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('primaryColor'), primaryColor);
            }
          },
          accentColor: {
            get: function () {
              return this.accentColor$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('accentColor'));
            },
            set: function (accentColor) {
              this.accentColor$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('accentColor'), accentColor);
            }
          },
          warnColor: {
            get: function () {
              return this.warnColor$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('warnColor'));
            },
            set: function (warnColor) {
              this.warnColor$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('warnColor'), warnColor);
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
          },
          color_6hl4m2$: function (color, default_0) {
            if (Kotlin.equals(color, _.fg.md.colour.MDColor.DEFAULT))
              return default_0;
            else if (Kotlin.equals(color, _.fg.md.colour.MDColor.PRIMARY))
              return this.primaryColor;
            else if (Kotlin.equals(color, _.fg.md.colour.MDColor.ACCENT))
              return this.accentColor;
            else if (Kotlin.equals(color, _.fg.md.colour.MDColor.WARN))
              return this.warnColor;
          }
        }, /** @lends _.fg.md.Theme */ {
          Statics: Kotlin.createObject(null, function Statics() {
            _.fg.md.Theme.Statics.LIGHT = new _.fg.md.Theme(_.fg.md.colour.MDGreenPalette.p500, _.fg.md.colour.MDPurplePalette.p500, _.fg.md.colour.MDRedPalette.p500, _.fg.md.colour.MDGrayPalette.p300, _.fg.md.colour.MDGrayPalette.p100, _.fg.md.colour.MDGrayPalette.p50, $module$elements.fg.style.colour.RgbColor.Factory.WHITE, 'Roboto, sans-serif');
          }),
          object_initializer$: function () {
            _.fg.md.Theme.Statics;
          },
          primaryColor$f: function (property, old, new_0) {
          },
          accentColor$f: function (property, old, new_0) {
          },
          warnColor$f: function (property, old, new_0) {
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
              }
            }),
            object_initializer$: function () {
              _.fg.md.drawer.MDDrawer.MDDrawer;
            }
          })
        }),
        menu: Kotlin.definePackage(null, /** @lends _.fg.md.menu */ {
          MDMenu: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.menu.Menu];
          }, function MDMenu(label, shortcut) {
            if (label === void 0)
              label = null;
            if (shortcut === void 0)
              shortcut = null;
            MDMenu.baseInitializer.call(this, label, shortcut);
          }, /** @lends _.fg.md.menu.MDMenu.prototype */ {
            render: function () {
              $module$beans.fg.beans.menu.Menu.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.menu.MDMenu.MDMenu.classSelector);
            }
          }, /** @lends _.fg.md.menu.MDMenu */ {
            MDMenu: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDMenu() {
              _.fg.md.menu.MDMenu.MDMenu.$classSelector_uoqxbm$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-md-menu');
              _.fg.md.menu.MDMenu.MDMenu.$rule_mgjqw1$ = _.fg.md.menu.MDMenu.MDMenu.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.menu.MDMenu.MDMenu);
            }, /** @lends _.fg.md.menu.MDMenu.MDMenu.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.menu.MDMenu.MDMenu.$classSelector_uoqxbm$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.menu.MDMenu.MDMenu.$rule_mgjqw1$;
                }
              }
            }, /** @lends _.fg.md.menu.MDMenu.MDMenu */ {
              rule$f: function () {
                this.paddingTop = '16px';
                this.paddingBottom = '16px';
                this.backgroundColor = 'white';
                this.boxShadow = '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)';
              }
            }),
            object_initializer$: function () {
              _.fg.md.menu.MDMenu.MDMenu;
            }
          }),
          MDMenuItem: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.menu.MenuItem];
          }, function MDMenuItem(action) {
            MDMenuItem.baseInitializer.call(this, action);
            this.ripple$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.md.menu.MDMenuItem.ripple_1nmxsg$f(this));
          }, /** @lends _.fg.md.menu.MDMenuItem.prototype */ {
            ripple_1nmxsg$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.ripple$delegate, this, new Kotlin.PropertyMetadata('ripple'));
              }
            },
            render: function () {
              $module$beans.fg.beans.menu.MenuItem.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.menu.MDMenuItem.MDMenuItem.classSelector);
              this.menuItemStyle.hovered.backgroundColor = new $module$elements.fg.style.colour.RgbColor(153, 153, 153, 0.2);
            },
            didMount: function () {
              $module$beans.fg.beans.menu.MenuItem.prototype.didMount.call(this);
              this.ripple_1nmxsg$.init();
            }
          }, /** @lends _.fg.md.menu.MDMenuItem */ {
            MDMenuItem: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDMenuItem() {
              _.fg.md.menu.MDMenuItem.MDMenuItem.$classSelector_xd7gry$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-md-menu-item');
              _.fg.md.menu.MDMenuItem.MDMenuItem.$rule_qavf0h$ = _.fg.md.menu.MDMenuItem.MDMenuItem.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.menu.MDMenuItem.MDMenuItem);
            }, /** @lends _.fg.md.menu.MDMenuItem.MDMenuItem.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.menu.MDMenuItem.MDMenuItem.$classSelector_xd7gry$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.menu.MDMenuItem.MDMenuItem.$rule_qavf0h$;
                }
              }
            }, /** @lends _.fg.md.menu.MDMenuItem.MDMenuItem */ {
              rule$f: function () {
                this.fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
                this.height = '32px';
                this.paddingLeft = '24px';
                this.paddingRight = '24px';
              }
            }),
            object_initializer$: function () {
              _.fg.md.menu.MDMenuItem.MDMenuItem;
            },
            f: function () {
            },
            f_0: function () {
            },
            ripple_1nmxsg$f: function (this$MDMenuItem) {
              return function () {
                return new _.fg.md.support.Ripple(this$MDMenuItem, $module$elements.fg.style.colour.RgbColor.Factory.BLUE, _.fg.md.menu.MDMenuItem.f, _.fg.md.menu.MDMenuItem.f_0);
              };
            }
          })
        }),
        panel: Kotlin.definePackage(null, /** @lends _.fg.md.panel */ {
          MDCollapsedPanel: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDCollapsedPanel() {
            MDCollapsedPanel.baseInitializer.call(this);
          }, null, /** @lends _.fg.md.panel.MDCollapsedPanel */ {
            MDCollapsedPanel: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDCollapsedPanel() {
              _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.$classSelector_olzrr1$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-collapsed-panel');
              _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.$rule_44ub00$ = _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel);
            }, /** @lends _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.$classSelector_olzrr1$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel.$rule_44ub00$;
                }
              }
            }, /** @lends _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.md.panel.MDCollapsedPanel.MDCollapsedPanel;
            }
          }),
          MDExpandedPanel: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDExpandedPanel() {
            MDExpandedPanel.baseInitializer.call(this);
          }, null, /** @lends _.fg.md.panel.MDExpandedPanel */ {
            MDExpandedPanel: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDExpandedPanel() {
              _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.$classSelector_2041e7$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-expanded-panel');
              _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.$rule_3d81i4$ = _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.panel.MDExpandedPanel.MDExpandedPanel);
            }, /** @lends _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.$classSelector_2041e7$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.panel.MDExpandedPanel.MDExpandedPanel.$rule_3d81i4$;
                }
              }
            }, /** @lends _.fg.md.panel.MDExpandedPanel.MDExpandedPanel */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.md.panel.MDExpandedPanel.MDExpandedPanel;
            }
          }),
          MDExpansionPanel: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MDExpansionPanel() {
            MDExpansionPanel.baseInitializer.call(this);
            this.collapsedPanel = null;
            this.expandedPanel = null;
          }, /** @lends _.fg.md.panel.MDExpansionPanel.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
            },
            renderState: function (state) {
              var tmp$1, tmp$2, tmp$3, tmp$4;
              if (Kotlin.equals(state, _.fg.md.panel.MDExpansionPanel.State.COLLAPSED)) {
                (tmp$1 = this.expandedPanel) != null ? tmp$1.hide() : null;
                (tmp$2 = this.collapsedPanel) != null ? tmp$2.show() : null;
              }
               else if (Kotlin.equals(state, _.fg.md.panel.MDExpansionPanel.State.EXPANDED)) {
                (tmp$3 = this.collapsedPanel) != null ? tmp$3.hide() : null;
                (tmp$4 = this.expandedPanel) != null ? tmp$4.show() : null;
              }
            }
          }, /** @lends _.fg.md.panel.MDExpansionPanel */ {
            State: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function State() {
              State.baseInitializer.call(this);
            }, function () {
              return {
                COLLAPSED: function () {
                  return new _.fg.md.panel.MDExpansionPanel.State();
                },
                EXPANDED: function () {
                  return new _.fg.md.panel.MDExpansionPanel.State();
                }
              };
            }),
            MDExpansionPanel: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDExpansionPanel() {
              _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.$classSelector_3ywvr7$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-expansion-panel');
              _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.closed = $module$elements.fg.elements.toClassSelector_pdl1w0$('closed');
              _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.$rule_qzxhyo$ = _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.panel.MDExpansionPanel.MDExpansionPanel);
            }, /** @lends _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.$classSelector_3ywvr7$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.panel.MDExpansionPanel.MDExpansionPanel.$rule_qzxhyo$;
                }
              }
            }, /** @lends _.fg.md.panel.MDExpansionPanel.MDExpansionPanel */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.md.panel.MDExpansionPanel.MDExpansionPanel;
            }
          })
        }),
        radio: Kotlin.definePackage(null, /** @lends _.fg.md.radio */ {
          MDRadioButton: Kotlin.createClass(function () {
            return [$module$beans.fg.beans.radio.LabelledRadioButton];
          }, function MDRadioButton(checked, labelText) {
            if (checked === void 0)
              checked = false;
            if (labelText === void 0)
              labelText = null;
            MDRadioButton.baseInitializer.call(this, checked, labelText);
            this.ripple$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.md.radio.MDRadioButton.ripple_gxcgp1$f(this));
          }, /** @lends _.fg.md.radio.MDRadioButton.prototype */ {
            ripple_gxcgp1$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.ripple$delegate, this, new Kotlin.PropertyMetadata('ripple'));
              }
            },
            render: function () {
              $module$beans.fg.beans.radio.LabelledRadioButton.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.radio.MDRadioButton.MDRadioButton.classSelector);
              Kotlin.callSetter(this, $module$beans.fg.beans.radio.LabelledRadioButton, 'checkedIcon', _.fg.md.radio.MDRadioButton.MDRadioButton.checkedIcon_vy7ihf$);
              Kotlin.callSetter(this, $module$beans.fg.beans.radio.LabelledRadioButton, 'unCheckedIcon', _.fg.md.radio.MDRadioButton.MDRadioButton.unCheckedIcon_vcot6u$);
            },
            didMount: function () {
              $module$beans.fg.beans.radio.LabelledRadioButton.prototype.didMount.call(this);
            }
          }, /** @lends _.fg.md.radio.MDRadioButton */ {
            MDRadioButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MDRadioButton() {
              _.fg.md.radio.MDRadioButton.MDRadioButton.$classSelector_6uilhm$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-radio-button');
              _.fg.md.radio.MDRadioButton.MDRadioButton.checkedIcon_vy7ihf$ = $module$beans.fg.beans.icon.FontAwesomeIcons.dot_circle_o_629h0h$();
              _.fg.md.radio.MDRadioButton.MDRadioButton.unCheckedIcon_vcot6u$ = $module$beans.fg.beans.icon.FontAwesomeIcons.circle_o_629h0h$();
              _.fg.md.radio.MDRadioButton.MDRadioButton.$rule_z6xrnb$ = _.fg.md.radio.MDRadioButton.MDRadioButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.radio.MDRadioButton.MDRadioButton);
            }, /** @lends _.fg.md.radio.MDRadioButton.MDRadioButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.radio.MDRadioButton.MDRadioButton.$classSelector_6uilhm$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.radio.MDRadioButton.MDRadioButton.$rule_z6xrnb$;
                }
              }
            }, /** @lends _.fg.md.radio.MDRadioButton.MDRadioButton */ {
              rule$f: function () {
                this.fontFamily = _.fg.md.Context.theme.font;
              }
            }),
            object_initializer$: function () {
              _.fg.md.radio.MDRadioButton.MDRadioButton;
            },
            f: function () {
            },
            f_0: function () {
            },
            ripple_gxcgp1$f: function (this$MDRadioButton) {
              return function () {
                return new _.fg.md.support.Ripple(this$MDRadioButton.iconI, void 0, _.fg.md.radio.MDRadioButton.f, _.fg.md.radio.MDRadioButton.f_0);
              };
            }
          })
        }),
        support: Kotlin.definePackage(null, /** @lends _.fg.md.support */ {
          Ripple: Kotlin.createClass(null, function Ripple(element, inkColor, startedCallback, doneCallback) {
            if (inkColor === void 0)
              inkColor = $module$elements.fg.style.colour.RgbColor.Factory.RED;
            if (startedCallback === void 0)
              startedCallback = null;
            if (doneCallback === void 0)
              doneCallback = null;
            this.element = element;
            this.inkColor = inkColor;
            this.startedCallback = startedCallback;
            this.doneCallback = doneCallback;
            this.started_8yl1p0$ = false;
            this.rippleContainer$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.md.support.Ripple.rippleContainer_d3dn38$f);
            this.handleMouseDown_i4zr62$ = _.fg.md.support.Ripple.handleMouseDown_i4zr62$f(this);
            this.handleMouseDown_rippleDone_jxnhuh$ = _.fg.md.support.Ripple.handleMouseDown_rippleDone_jxnhuh$f(this);
            this.cleanUp_yg27pt$ = _.fg.md.support.Ripple.cleanUp_yg27pt$f(this);
          }, /** @lends _.fg.md.support.Ripple.prototype */ {
            rippleContainer_d3dn38$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.rippleContainer$delegate, this, new Kotlin.PropertyMetadata('rippleContainer'));
              }
            },
            start: function (pageX, pageY) {
              var size = this.element.offsetWidth;
              var pos = this.element.boundingClientRect;
              var halfSize = size / 2;
              var x = pageX - pos.left - halfSize - window.scrollX;
              var y = pageY - pos.top - halfSize - window.scrollY;
              console.log('scrollX' + window.scrollX);
              console.log('scrollY' + window.scrollY);
              var rippleInk = new _.fg.md.support.RippleInk(this.inkColor);
              this.rippleContainer_d3dn38$.appendChild_sr04hg$(rippleInk);
              rippleInk.setPosition(Kotlin.kotlin.to_l1ob02$(x, y));
              rippleInk.setSize($module$elements.fg.elements.get_px_yrwdxs$(size));
            },
            init: function () {
              this.element.appendChild_sr04hg$(this.rippleContainer_d3dn38$);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this.element, this.handleMouseDown_i4zr62$);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this.element, $module$elements.fg.base.bounceUntil_w5kaku$(this.handleMouseDown_rippleDone_jxnhuh$, 1000));
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this.element, $module$elements.fg.base.debounce1_w5kaku$(this.cleanUp_yg27pt$, 2000));
              this.element.addClass_bx842b$(_.fg.md.support.Ripple.Factory.rippleTargetClass);
            }
          }, /** @lends _.fg.md.support.Ripple */ {
            Factory: Kotlin.createObject(null, function Factory() {
              _.fg.md.support.Ripple.Factory.rippleTargetClass = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-ripple-target');
              _.fg.md.support.Ripple.Factory.rippleTarget = $module$elements.fg.style.classRule_l99yr7$(Kotlin.kotlin.Unit, _.fg.md.support.Ripple.Factory.rippleTargetClass, _.fg.md.support.Ripple.Factory.rippleTarget$f);
              $module$elements.fg.elements.HTML.registerCSSRule_3cka69$(_.fg.md.support.Ripple.Factory.rippleTarget);
            }, null, /** @lends _.fg.md.support.Ripple.Factory */ {
              rippleTarget$f: function () {
                this.position = 'relative';
                this.overflowX = 'hidden';
                this.overflowY = 'hidden';
              }
            }),
            object_initializer$: function () {
              _.fg.md.support.Ripple.Factory;
            },
            rippleContainer_d3dn38$f: function () {
              return new _.fg.md.support.RippleContainer();
            },
            handleMouseDown_i4zr62$f: function (this$Ripple) {
              return function (e) {
                var tmp$0;
                this$Ripple.start(e.pageX, e.pageY);
                if (!this$Ripple.started_8yl1p0$) {
                  (tmp$0 = this$Ripple.startedCallback) != null ? tmp$0() : null;
                  this$Ripple.started_8yl1p0$ = true;
                }
              };
            },
            handleMouseDown_rippleDone_jxnhuh$f: function (this$Ripple) {
              return function (e) {
                var tmp$0;
                console.log('handleMouseDown_rippleDone');
                (tmp$0 = this$Ripple.doneCallback) != null ? tmp$0() : null;
              };
            },
            cleanUp_yg27pt$f: function (this$Ripple) {
              return function (it) {
                this$Ripple.rippleContainer_d3dn38$.removeChildren();
                this$Ripple.started_8yl1p0$ = false;
              };
            }
          }),
          RippleContainer: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function RippleContainer() {
            RippleContainer.baseInitializer.call(this);
          }, /** @lends _.fg.md.support.RippleContainer.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.support.RippleContainer.RippleContainer.classSelector);
            }
          }, /** @lends _.fg.md.support.RippleContainer */ {
            RippleContainer: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function RippleContainer() {
              _.fg.md.support.RippleContainer.RippleContainer.$classSelector_mqrvos$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-ripple-container');
              _.fg.md.support.RippleContainer.RippleContainer.$rule_ifbmrj$ = _.fg.md.support.RippleContainer.RippleContainer.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.support.RippleContainer.RippleContainer);
            }, /** @lends _.fg.md.support.RippleContainer.RippleContainer.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.support.RippleContainer.RippleContainer.$classSelector_mqrvos$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.support.RippleContainer.RippleContainer.$rule_ifbmrj$;
                }
              }
            }, /** @lends _.fg.md.support.RippleContainer.RippleContainer */ {
              rule$f: function () {
                this.position = 'absolute';
                this.top = '0';
                this.right = '0';
                this.bottom = '0';
                this.left = '0';
              }
            }),
            object_initializer$: function () {
              _.fg.md.support.RippleContainer.RippleContainer;
            }
          }),
          RippleInk: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Span];
          }, function RippleInk(color) {
            RippleInk.baseInitializer.call(this);
            this.color$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.md.support.RippleInk.color$f(this), color);
          }, /** @lends _.fg.md.support.RippleInk.prototype */ {
            color: {
              get: function () {
                return this.color$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('color'));
              },
              set: function (color) {
                this.color$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('color'), color);
              }
            },
            setSize: function (size) {
              this.style.width = size;
              this.style.height = size;
            },
            setPosition: function (position) {
              this.style.left = $module$elements.fg.elements.get_px_yrwdxs$(position.first);
              this.style.top = $module$elements.fg.elements.get_px_yrwdxs$(position.second);
            },
            renderColor: function (color) {
              this.style.backgroundColor = color;
            },
            render: function () {
              $module$elements.fg.elements.Span.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.md.support.RippleInk.RippleInk.classSelector);
              this.renderColor(this.color);
            }
          }, /** @lends _.fg.md.support.RippleInk */ {
            RippleInk: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function RippleInk() {
              _.fg.md.support.RippleInk.RippleInk.$classSelector_6xzbs2$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('md-ripple-ink');
              _.fg.md.support.RippleInk.RippleInk.$rule_mlpfjp$ = _.fg.md.support.RippleInk.RippleInk.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.md.support.RippleInk.RippleInk);
              var rule = $module$elements.fg.style.keyframesRule_ndisjh$(Kotlin.kotlin.Unit, 'ripple', _.fg.md.support.RippleInk.RippleInk.RippleInk$f);
              $module$elements.fg.elements.HTML.registerCSSRule_3cka69$(rule);
            }, /** @lends _.fg.md.support.RippleInk.RippleInk.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.md.support.RippleInk.RippleInk.$classSelector_6xzbs2$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.md.support.RippleInk.RippleInk.$rule_mlpfjp$;
                }
              }
            }, /** @lends _.fg.md.support.RippleInk.RippleInk */ {
              rule$f: function () {
                this.transform = 'scale(0)';
                this.position = 'absolute';
                this.opacity = '0.75';
                this.padding = '24px';
                this.borderRadius = '100%';
                this.animation = 'ripple 1000ms';
              },
              f: function () {
                this.opacity = '0';
                this.transform = 'scale(2)';
              },
              RippleInk$f: function () {
                $module$elements.fg.style.kto_q2xcpo$(this, _.fg.md.support.RippleInk.RippleInk.f);
              }
            }),
            object_initializer$: function () {
              _.fg.md.support.RippleInk.RippleInk;
            },
            color$f: function (this$RippleInk) {
              return function (property, old, new_0) {
                this$RippleInk.renderColor(new_0);
              };
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('material-design', _);
  return _;
}(kotlin, beans, elements);

//@ sourceMappingURL=material-design.js.map
