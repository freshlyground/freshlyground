var beans = function (Kotlin, $module$elements) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      beans: Kotlin.definePackage(function () {
        this.pkg = 'fg-beans';
      }, /** @lends _.fg.beans */ {
        Action: Kotlin.createClass(null, function Action(label, enabled, icon, perform) {
          if (label === void 0)
            label = null;
          if (enabled === void 0)
            enabled = true;
          if (icon === void 0)
            icon = null;
          this.perform_o59y8v$ = perform;
          var initialValue = label;
          this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.label$f(this), initialValue);
          var initialValue_0 = enabled;
          this.enabled$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.enabled$f(this), initialValue_0);
          var initialValue_1 = icon;
          this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.icon$f(this), initialValue_1);
          this.propertyChangedListeners_yuw5y8$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
        }, /** @lends _.fg.beans.Action.prototype */ {
          label: {
            get: function () {
              return this.label$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('label'));
            },
            set: function (label) {
              this.label$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('label'), label);
            }
          },
          enabled: {
            get: function () {
              return this.enabled$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('enabled'));
            },
            set: function (enabled) {
              this.enabled$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('enabled'), enabled);
            }
          },
          disabled: {
            get: function () {
              return !this.enabled;
            }
          },
          icon: {
            get: function () {
              return this.icon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('icon'));
            },
            set: function (icon) {
              this.icon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('icon'), icon);
            }
          },
          notifyPropertyChanged_lle7lx$: function (property, old, new_0) {
            var tmp$0;
            tmp$0 = this.propertyChangedListeners_yuw5y8$.iterator();
            while (tmp$0.hasNext()) {
              var listener = tmp$0.next();
              listener(this, property, old, new_0);
            }
          },
          onPropertyChanged_uamkrm$: function (listener) {
            this.propertyChangedListeners_yuw5y8$.add_za3rmp$(listener);
          },
          unPropertyChanged_uamkrm$: function (listener) {
            this.propertyChangedListeners_yuw5y8$.remove_za3rmp$(listener);
          },
          perform: function () {
            if (this.enabled) {
              this.perform_o59y8v$();
            }
          }
        }, /** @lends _.fg.beans.Action */ {
          label$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_lle7lx$(prop, old, new_0);
            };
          },
          enabled$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_lle7lx$(prop, old, new_0);
            };
          },
          icon$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_lle7lx$(prop, old, new_0);
            };
          }
        }),
        menu_u9dlqt$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.menu.Menu(), init);
        },
        menuItem_mt53wc$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.menu.MenuItem(action), init);
        },
        button_umrm8d$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.button.Button(action), init);
        },
        SelectableAction: Kotlin.createClass(function () {
          return [_.fg.beans.Action];
        }, function SelectableAction(label, enabled, icon, selected, perform) {
          if (enabled === void 0)
            enabled = true;
          if (icon === void 0)
            icon = null;
          if (selected === void 0)
            selected = false;
          SelectableAction.baseInitializer.call(this, label, enabled, icon, perform);
          var initialValue = selected;
          this.selected$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.SelectableAction.selected$f(this), initialValue);
        }, /** @lends _.fg.beans.SelectableAction.prototype */ {
          selected: {
            get: function () {
              return this.selected$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('selected'));
            },
            set: function (selected) {
              this.selected$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('selected'), selected);
            }
          }
        }, /** @lends _.fg.beans.SelectableAction */ {
          Statics: Kotlin.createObject(null, function Statics() {
            _.fg.beans.SelectableAction.Statics.selectedSelector = $module$elements.fg.elements.toClassSelector_pdl1w0$('.action-selected');
          }),
          object_initializer$: function () {
            _.fg.beans.SelectableAction.Statics;
          },
          selected$f: function (this$SelectableAction) {
            return function (prop, old, new_0) {
              this$SelectableAction.notifyPropertyChanged_lle7lx$(prop, old, new_0);
            };
          }
        }),
        button: Kotlin.definePackage(null, /** @lends _.fg.beans.button */ {
          Button: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Button];
          }, function Button(action) {
            Button.baseInitializer.call(this);
            this.action = action;
            this.$hovered_vjdejn$ = false;
            this.$focused_1wezcv$ = false;
            this.$pressed_82cw16$ = false;
            this.label$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.Button.label$f);
            this.icon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.Button.icon$f(this));
            this.clickHandler_9cuniy$ = _.fg.beans.button.Button.clickHandler_9cuniy$f(this);
            this.actionPropertyChangedHandler_dzou13$ = _.fg.beans.button.Button.actionPropertyChangedHandler_dzou13$f(this);
            this.mouseEnterHandler_i2ypnl$ = _.fg.beans.button.Button.mouseEnterHandler_i2ypnl$f(this);
            this.mouseLeaveHandler_bgliw0$ = _.fg.beans.button.Button.mouseLeaveHandler_bgliw0$f(this);
            this.focusHandler_67mily$ = _.fg.beans.button.Button.focusHandler_67mily$f(this);
            this.blurHandler_9tqkmj$ = _.fg.beans.button.Button.blurHandler_9tqkmj$f(this);
            this.mouseDownHandler_x1gvc5$ = _.fg.beans.button.Button.mouseDownHandler_x1gvc5$f(action, this);
            this.mouseUpHandler_7c34se$ = _.fg.beans.button.Button.mouseUpHandler_7c34se$f(this);
          }, /** @lends _.fg.beans.button.Button.prototype */ {
            hovered: {
              get: function () {
                return this.$hovered_vjdejn$;
              },
              set: function (hovered) {
                this.$hovered_vjdejn$ = hovered;
              }
            },
            focused: {
              get: function () {
                return this.$focused_1wezcv$;
              },
              set: function (focused) {
                this.$focused_1wezcv$ = focused;
              }
            },
            pressed: {
              get: function () {
                return this.$pressed_82cw16$;
              },
              set: function (pressed) {
                this.$pressed_82cw16$ = pressed;
              }
            },
            label: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.label$delegate, this, new Kotlin.PropertyMetadata('label'));
              }
            },
            icon: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.icon$delegate, this, new Kotlin.PropertyMetadata('icon'));
              }
            },
            onHover: function () {
            },
            unHover: function () {
            },
            onFocus: function () {
            },
            unFocus: function () {
            },
            onPressed: function () {
            },
            unPressed: function () {
            },
            onEnabled: function () {
            },
            onDisabled: function () {
            },
            render: function () {
              $module$elements.fg.elements.Button.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.button.Button.Button.classSelector);
              this.appendChild_sr04hg$(this.icon);
              this.appendChild_sr04hg$(this.label);
              this.renderIcon_41ga0a$(this.action.icon);
              this.renderLabel_61zpoe$(this.action.label);
              this.renderDisabled_6taknv$(this.action.disabled);
            },
            didMount: function () {
              $module$elements.fg.elements.Button.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_dzou13$);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_9cuniy$);
              $module$elements.fg.elements.onMouseEnter_9cq9y2$(this, this.mouseEnterHandler_i2ypnl$);
              $module$elements.fg.elements.onMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_bgliw0$);
              $module$elements.fg.elements.onFocus_m2anqv$(this, this.focusHandler_67mily$);
              $module$elements.fg.elements.onBlur_m2anqv$(this, this.blurHandler_9tqkmj$);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this, this.mouseDownHandler_x1gvc5$);
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this, this.mouseUpHandler_7c34se$);
            },
            willUnMount: function () {
              $module$elements.fg.elements.Button.prototype.willUnMount.call(this);
              $module$elements.fg.elements.unMouseEnter_9cq9y2$(this, this.mouseEnterHandler_i2ypnl$);
              $module$elements.fg.elements.unMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_bgliw0$);
              $module$elements.fg.elements.unFocus_m2anqv$(this, this.focusHandler_67mily$);
              $module$elements.fg.elements.unBlur_m2anqv$(this, this.blurHandler_9tqkmj$);
              $module$elements.fg.elements.unMouseDown_9cq9y2$(this, this.mouseDownHandler_x1gvc5$);
              $module$elements.fg.elements.unMouseUp_9cq9y2$(this, this.mouseUpHandler_7c34se$);
            },
            renderLabel_61zpoe$: function (labelText) {
              if (labelText != null) {
                this.label.textContent = labelText;
                this.label.show();
              }
               else {
                this.label.hide();
              }
            },
            renderIcon_41ga0a$: function (icon) {
              if (icon == null) {
                this.icon.hide();
              }
               else {
                icon.apply_54c9de$(this.icon);
                this.icon.show();
              }
            },
            renderDisabled_6taknv$: function (disabled) {
              if (disabled) {
                this.toggleClass_ivxn3r$(_.fg.beans.button.Button.Button.DISABLED.value, true);
                this._disabled = true;
              }
               else {
                this.toggleClass_ivxn3r$(_.fg.beans.button.Button.Button.DISABLED.value);
                this._disabled = false;
              }
            }
          }, /** @lends _.fg.beans.button.Button */ {
            Button: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Button() {
              _.fg.beans.button.Button.Button.$classSelector_z0uw2b$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('button');
              _.fg.beans.button.Button.Button.DISABLED = $module$elements.fg.elements.toClassSelector_pdl1w0$('disabled');
              _.fg.beans.button.Button.Button.$rule_y180tc$ = _.fg.beans.button.Button.Button.rule$f(_.fg.beans.button.Button.Button);
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.button.Button.Button);
            }, /** @lends _.fg.beans.button.Button.Button.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.button.Button.Button.$classSelector_z0uw2b$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.button.Button.Button.$rule_y180tc$;
                }
              }
            }, /** @lends _.fg.beans.button.Button.Button */ {
              f: function () {
                this.cursor = 'not-allowed';
              },
              f_0: function (this$Button$) {
                return function () {
                  this.cursor = 'pointer';
                  $module$elements.fg.style.and_dbehhi$(this, this$Button$.DISABLED, _.fg.beans.button.Button.Button.f);
                };
              },
              rule$f: function (this$Button$) {
                return function () {
                  $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.button.Button.Button.f_0(this$Button$));
                };
              }
            }),
            object_initializer$: function () {
              _.fg.beans.button.Button.Button;
            },
            label$f: function () {
              var span = new $module$elements.fg.elements.Span();
              span.hide();
              return span;
            },
            icon$f: function (this$Button) {
              return function () {
                var iconI = new _.fg.beans.icon.IconI(this$Button.action.icon);
                iconI.hide();
                return iconI;
              };
            },
            clickHandler_9cuniy$f: function (this$Button) {
              return function (it) {
                this$Button.action.perform();
              };
            },
            actionPropertyChangedHandler_dzou13$f: function (this$Button) {
              return function (action, property, old, new_0) {
                var tmp$0;
                tmp$0 = property.name;
                if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('label', true).name))
                  this$Button.renderLabel_61zpoe$(action.label);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('icon', true).name))
                  this$Button.renderIcon_41ga0a$(action.icon);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('enabled', true).name)) {
                  this$Button.renderDisabled_6taknv$(action.disabled);
                  if (action.enabled) {
                    this$Button.onEnabled();
                  }
                   else {
                    this$Button.onDisabled();
                  }
                }
              };
            },
            mouseEnterHandler_i2ypnl$f: function (this$Button) {
              return function (it) {
                this$Button.hovered = true;
                this$Button.toggleClass_ivxn3r$('hovered', true);
                this$Button.onHover();
              };
            },
            mouseLeaveHandler_bgliw0$f: function (this$Button) {
              return function (it) {
                this$Button.hovered = false;
                this$Button.toggleClass_ivxn3r$('hovered');
                this$Button.unHover();
              };
            },
            focusHandler_67mily$f: function (this$Button) {
              return function (it) {
                this$Button.focused = true;
                this$Button.toggleClass_ivxn3r$('focused', true);
                this$Button.onFocus();
              };
            },
            blurHandler_9tqkmj$f: function (this$Button) {
              return function (it) {
                this$Button.focused = false;
                this$Button.toggleClass_ivxn3r$('focused');
                this$Button.unFocus();
              };
            },
            mouseDownHandler_x1gvc5$f: function (closure$action, this$Button) {
              return function (event) {
                if (closure$action.enabled) {
                  this$Button.pressed = true;
                  this$Button.toggleClass_ivxn3r$('pressed', true);
                  this$Button.onPressed();
                }
              };
            },
            mouseUpHandler_7c34se$f: function (this$Button) {
              return function (event) {
                this$Button.pressed = false;
                this$Button.toggleClass_ivxn3r$('pressed');
                this$Button.unPressed();
              };
            }
          })
        }),
        drawer: Kotlin.definePackage(null, /** @lends _.fg.beans.drawer */ {
          Drawer: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Drawer(side) {
            Drawer.baseInitializer.call(this);
            this.side$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.drawer.Drawer.side$f(this), side);
          }, /** @lends _.fg.beans.drawer.Drawer.prototype */ {
            side: {
              get: function () {
                return this.side$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('side'));
              },
              set: function (side) {
                this.side$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('side'), side);
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.drawer.Drawer.Drawer.classSelector);
              this.renderSide_v23ult$(this.side);
            },
            renderSide_v23ult$: function (side) {
              if (Kotlin.equals(side, _.fg.beans.drawer.Drawer.Side.LEFT))
                this.style.left = '0';
              else if (Kotlin.equals(side, _.fg.beans.drawer.Drawer.Side.RIGHT))
                this.style.right = '0';
            }
          }, /** @lends _.fg.beans.drawer.Drawer */ {
            Side: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Side() {
              Side.baseInitializer.call(this);
            }, function () {
              return {
                LEFT: function () {
                  return new _.fg.beans.drawer.Drawer.Side();
                },
                RIGHT: function () {
                  return new _.fg.beans.drawer.Drawer.Side();
                }
              };
            }),
            Drawer: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Drawer() {
              _.fg.beans.drawer.Drawer.Drawer.$classSelector_qh8saa$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('drawer');
              _.fg.beans.drawer.Drawer.Drawer.$rule_2igbfl$ = _.fg.beans.drawer.Drawer.Drawer.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.drawer.Drawer.Drawer);
            }, /** @lends _.fg.beans.drawer.Drawer.Drawer.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.drawer.Drawer.Drawer.$classSelector_qh8saa$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.drawer.Drawer.Drawer.$rule_2igbfl$;
                }
              }
            }, /** @lends _.fg.beans.drawer.Drawer.Drawer */ {
              rule$f: function () {
                this.position = 'fixed';
                this.zIndex = '1300';
                this.top = '0';
                this.height = '100%';
                this.backgroundColor = 'white';
              }
            }),
            object_initializer$: function () {
              _.fg.beans.drawer.Drawer.Drawer;
            },
            side$f: function (this$Drawer) {
              return function (property, old, new_0) {
                this$Drawer.renderSide_v23ult$(new_0);
              };
            }
          })
        }),
        icon: Kotlin.definePackage(null, /** @lends _.fg.beans.icon */ {
          FontAwesomeIcon: Kotlin.createClass(function () {
            return [_.fg.beans.icon.Icon];
          }, function FontAwesomeIcon(name, size) {
            if (size === void 0)
              size = null;
            this.name = name;
            this.size = size;
          }, /** @lends _.fg.beans.icon.FontAwesomeIcon.prototype */ {
            apply_54c9de$: function (element) {
              element.addClass_61zpoe$('fa');
              element.addClass_61zpoe$('fa-' + this.name);
              if (this.size !== null && this.size !== _.fg.beans.icon.FontAwesomeIcon.Size.NORMAL) {
                element.addClass_61zpoe$(Kotlin.toString(this.size.selector));
              }
            }
          }, /** @lends _.fg.beans.icon.FontAwesomeIcon */ {
            Size: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Size(selector) {
              Size.baseInitializer.call(this);
              this.selector = selector;
            }, function () {
              return {
                NORMAL: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(null);
                },
                LG: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(new $module$elements.fg.elements.ClassSelector('fa-lg'));
                },
                X2: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(new $module$elements.fg.elements.ClassSelector('fa-x2'));
                },
                X3: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(new $module$elements.fg.elements.ClassSelector('fa-x3'));
                },
                X4: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(new $module$elements.fg.elements.ClassSelector('fa-x4'));
                },
                X5: function () {
                  return new _.fg.beans.icon.FontAwesomeIcon.Size(new $module$elements.fg.elements.ClassSelector('fa-x5'));
                }
              };
            })
          }),
          FontAwesomeIcons: Kotlin.createObject(null, function FontAwesomeIcons() {
          }, /** @lends _.fg.beans.icon.FontAwesomeIcons.prototype */ {
            camera_retro_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('camera-retro', size);
            },
            circle_o_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('circle-o', size);
            },
            dot_circle_o_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('dot-circle-o', size);
            },
            plus_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('plus', size);
            }
          }),
          Icon: Kotlin.createTrait(null),
          apply_gnxmu2$f: function (it) {
            return Kotlin.kotlin.text.startsWith_41xvrb$(it, 'fa');
          },
          apply_gnxmu2$: function ($receiver, element) {
            element.removeClasses_ic64ld$(_.fg.beans.icon.apply_gnxmu2$f);
            if ($receiver != null) {
              $receiver.apply_54c9de$(element);
            }
          },
          IconI: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.I];
          }, function IconI(icon) {
            if (icon === void 0)
              icon = null;
            IconI.baseInitializer.call(this);
            var initialValue = icon;
            this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.icon.IconI.icon$f(this), initialValue);
          }, /** @lends _.fg.beans.icon.IconI.prototype */ {
            icon: {
              get: function () {
                return this.icon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('icon'));
              },
              set: function (icon) {
                this.icon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('icon'), icon);
              }
            },
            render: function () {
              $module$elements.fg.elements.I.prototype.render.call(this);
              if (this.icon != null) {
                this.renderIcon(this.icon);
              }
            },
            renderIcon: function (icon) {
              _.fg.beans.icon.apply_gnxmu2$(icon, this);
            }
          }, /** @lends _.fg.beans.icon.IconI */ {
            icon$f: function (this$IconI) {
              return function (property, old, new_0) {
                this$IconI.renderIcon(new_0);
              };
            }
          })
        }),
        menu: Kotlin.definePackage(null, /** @lends _.fg.beans.menu */ {
          Menu: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Menu() {
            Menu.baseInitializer.call(this);
          }, /** @lends _.fg.beans.menu.Menu.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.Menu.Menu.classSelector);
            }
          }, /** @lends _.fg.beans.menu.Menu */ {
            Menu: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Menu() {
              _.fg.beans.menu.Menu.Menu.$classSelector_gmwbfk$ = new $module$elements.fg.elements.ClassSelector('fg-beans-menu');
              _.fg.beans.menu.Menu.Menu.$rule_1t34ct$ = _.fg.beans.menu.Menu.Menu.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.Menu.Menu);
            }, /** @lends _.fg.beans.menu.Menu.Menu.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.Menu.Menu.$classSelector_gmwbfk$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.Menu.Menu.$rule_1t34ct$;
                }
              }
            }, /** @lends _.fg.beans.menu.Menu.Menu */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.Menu.Menu;
            }
          }),
          MenuItem: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MenuItem(action) {
            MenuItem.baseInitializer.call(this);
            this.action = action;
            this.primaryText$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.primaryText_l0masq$f);
            this.actionPropertyChangedHandler_xq9c3e$ = _.fg.beans.menu.MenuItem.actionPropertyChangedHandler_xq9c3e$f(this);
            this.clickHandler_jj300p$ = _.fg.beans.menu.MenuItem.clickHandler_jj300p$f(action);
          }, /** @lends _.fg.beans.menu.MenuItem.prototype */ {
            primaryText_l0masq$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.primaryText$delegate, this, new Kotlin.PropertyMetadata('primaryText'));
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.MenuItem.MenuItem.classSelector);
              this.appendChild_sr04hg$(this.primaryText_l0masq$);
              this.primaryText_l0masq$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(this.action.label));
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_xq9c3e$);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_jj300p$);
            },
            renderSelected: function (selected) {
              if (selected) {
                this.addClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
              }
               else {
                this.removeClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
              }
            }
          }, /** @lends _.fg.beans.menu.MenuItem */ {
            MenuItem: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuItem() {
              _.fg.beans.menu.MenuItem.MenuItem.$classSelector_h04jcw$ = new $module$elements.fg.elements.ClassSelector('fg-beans-menuitem');
              _.fg.beans.menu.MenuItem.MenuItem.$rule_ch4gq5$ = _.fg.beans.menu.MenuItem.MenuItem.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuItem.MenuItem);
            }, /** @lends _.fg.beans.menu.MenuItem.MenuItem.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuItem.MenuItem.$classSelector_h04jcw$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuItem.MenuItem.$rule_ch4gq5$;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuItem.MenuItem */ {
              rule$f: function () {
                this.cursor = 'pointer';
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuItem.MenuItem;
            },
            primaryText_l0masq$f: function () {
              return new $module$elements.fg.elements.Span();
            },
            actionPropertyChangedHandler_xq9c3e$f: function (this$MenuItem) {
              return function (action, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('label', true).name)) {
                  this$MenuItem.primaryText_l0masq$.textContent = action.label;
                }
                if (Kotlin.isType(action, _.fg.beans.SelectableAction)) {
                  if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('selected', true).name)) {
                    this$MenuItem.renderSelected(action.selected);
                  }
                }
              };
            },
            clickHandler_jj300p$f: function (closure$action) {
              return function (it) {
                if (Kotlin.isType(closure$action, _.fg.beans.SelectableAction)) {
                  closure$action.selected = !closure$action.selected;
                }
              };
            }
          })
        }),
        radio: Kotlin.definePackage(null, /** @lends _.fg.beans.radio */ {
          LabelledRadioButton: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function LabelledRadioButton(checked, labelText, checkedIcon, unCheckedIcon) {
            if (checkedIcon === void 0)
              checkedIcon = null;
            if (unCheckedIcon === void 0)
              unCheckedIcon = null;
            LabelledRadioButton.baseInitializer.call(this);
            this.radioButton$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.radio.LabelledRadioButton.radioButton$f(checked));
            var initialValue = checkedIcon;
            this.checkedIcon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.radio.LabelledRadioButton.checkedIcon$f(this), initialValue);
            var initialValue_0 = unCheckedIcon;
            this.unCheckedIcon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.radio.LabelledRadioButton.unCheckedIcon$f(this), initialValue_0);
            this.iconI$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.radio.LabelledRadioButton.iconI$f(unCheckedIcon));
            this.label$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.radio.LabelledRadioButton.label$f);
            this.labelText$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.radio.LabelledRadioButton.labelText$f(this), labelText);
            this.checkedHandler_isywiu$ = _.fg.beans.radio.LabelledRadioButton.checkedHandler_isywiu$f(this);
            this.clickHandler_58udph$ = _.fg.beans.radio.LabelledRadioButton.clickHandler_58udph$f(this);
          }, /** @lends _.fg.beans.radio.LabelledRadioButton.prototype */ {
            radioButton: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.radioButton$delegate, this, new Kotlin.PropertyMetadata('radioButton'));
              }
            },
            checkedIcon: {
              get: function () {
                return this.checkedIcon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('checkedIcon'));
              },
              set: function (checkedIcon) {
                this.checkedIcon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('checkedIcon'), checkedIcon);
              }
            },
            unCheckedIcon: {
              get: function () {
                return this.unCheckedIcon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('unCheckedIcon'));
              },
              set: function (unCheckedIcon) {
                this.unCheckedIcon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('unCheckedIcon'), unCheckedIcon);
              }
            },
            iconI: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.iconI$delegate, this, new Kotlin.PropertyMetadata('iconI'));
              }
            },
            label: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.label$delegate, this, new Kotlin.PropertyMetadata('label'));
              }
            },
            labelText: {
              get: function () {
                return this.labelText$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('labelText'));
              },
              set: function (labelText) {
                this.labelText$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('labelText'), labelText);
              }
            },
            render: function () {
              this.addClass_bx842b$(_.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.classSelector);
              this.appendChild_sr04hg$(this.radioButton);
              this.appendChild_sr04hg$(this.iconI);
              this.appendChild_sr04hg$(this.label);
              this.renderLabel_61zpoe$(this.labelText);
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this.label, this.clickHandler_58udph$);
              $module$elements.fg.elements.onClick_m2anqv$(this.iconI, this.clickHandler_58udph$);
              this.radioButton.onChecked_ra2fzg$(this.checkedHandler_isywiu$);
            },
            renderLabel_61zpoe$: function (labelText) {
              if (labelText != null) {
                this.label.textContent = labelText;
                this.label.show();
              }
               else {
                this.label.removeChildren();
                this.label.hide();
              }
            },
            renderChecked_6taknv$: function (checked) {
              if (this.checkedIcon != null && this.unCheckedIcon != null) {
                this.radioButton.style.opacity = '0';
                this.iconI.show();
                this.iconI.icon = checked ? this.checkedIcon : this.unCheckedIcon;
              }
               else {
                this.radioButton.style.opacity = '';
                this.iconI.hide();
              }
            }
          }, /** @lends _.fg.beans.radio.LabelledRadioButton */ {
            LabelledRadioButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function LabelledRadioButton() {
              _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.$classSelector_anca2k$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('bn-labelled-radio-button');
              _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.$rule_w2jy95$ = _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.radio.LabelledRadioButton.LabelledRadioButton);
            }, /** @lends _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.$classSelector_anca2k$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.$rule_w2jy95$;
                }
              }
            }, /** @lends _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton */ {
              f: function () {
                this.cursor = 'pointer';
              },
              f_0: function () {
                this.cursor = 'pointer';
              },
              f_1: function () {
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.f_0);
              },
              rule$f: function () {
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.f);
                $module$elements.fg.style.child_l73siq$(this, 'label', _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.f_1);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton;
            },
            radioButton$f: function (closure$checked) {
              return function () {
                return new _.fg.beans.radio.RadioButton(closure$checked);
              };
            },
            checkedIcon$f: function (this$LabelledRadioButton) {
              return function (property, old, new_0) {
                this$LabelledRadioButton.renderChecked_6taknv$(this$LabelledRadioButton.radioButton.checked);
              };
            },
            unCheckedIcon$f: function (this$LabelledRadioButton) {
              return function (property, old, new_0) {
                this$LabelledRadioButton.renderChecked_6taknv$(this$LabelledRadioButton.radioButton.checked);
              };
            },
            iconI$f: function (closure$unCheckedIcon) {
              return function () {
                var el = new _.fg.beans.icon.IconI(closure$unCheckedIcon);
                el.style.left = '-1em';
                el.style.position = 'relative';
                return el;
              };
            },
            label$f: function () {
              var el = new $module$elements.fg.elements.Label();
              el.hide();
              return el;
            },
            labelText$f: function (this$LabelledRadioButton) {
              return function (property, old, new_0) {
                this$LabelledRadioButton.renderLabel_61zpoe$(new_0);
              };
            },
            checkedHandler_isywiu$f: function (this$LabelledRadioButton) {
              return function (checked) {
                this$LabelledRadioButton.renderChecked_6taknv$(checked);
              };
            },
            clickHandler_58udph$f: function (this$LabelledRadioButton) {
              return function (it) {
                this$LabelledRadioButton.radioButton.toggle();
              };
            }
          }),
          RadioButton: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.InputRadio];
          }, function RadioButton(checked) {
            if (checked === void 0)
              checked = false;
            RadioButton.baseInitializer.call(this);
            var initialValue = checked;
            this.checked$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.radio.RadioButton.checked$f(this), initialValue);
            this.checkedListeners_fti42k$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.clickHandler_8tpiaa$ = _.fg.beans.radio.RadioButton.clickHandler_8tpiaa$f(this);
          }, /** @lends _.fg.beans.radio.RadioButton.prototype */ {
            checked: {
              get: function () {
                return this.checked$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('checked'));
              },
              set: function (checked) {
                this.checked$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('checked'), checked);
              }
            },
            notifyCheckedListeners_6taknv$: function (checked) {
              var tmp$0;
              tmp$0 = this.checkedListeners_fti42k$.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                element(checked);
              }
            },
            onChecked_ra2fzg$: function (listener) {
              this.checkedListeners_fti42k$.add_za3rmp$(listener);
            },
            unChecked_ra2fzg$: function (listener) {
              this.checkedListeners_fti42k$.remove_za3rmp$(listener);
            },
            toggle: function () {
              var newState = !this.checked;
              this.checked = newState;
            },
            checked_0: function () {
              this.checked = true;
            },
            unchecked: function () {
              this.checked = false;
            },
            render: function () {
              $module$elements.fg.elements.InputRadio.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.radio.RadioButton.RadioButton.classSelector);
            },
            didMount: function () {
              $module$elements.fg.elements.InputRadio.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_8tpiaa$);
            }
          }, /** @lends _.fg.beans.radio.RadioButton */ {
            RadioButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function RadioButton() {
              _.fg.beans.radio.RadioButton.RadioButton.$classSelector_5nt5ue$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('bn-radio-button');
              _.fg.beans.radio.RadioButton.RadioButton.$rule_f5d447$ = _.fg.beans.radio.RadioButton.RadioButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.radio.RadioButton.RadioButton);
            }, /** @lends _.fg.beans.radio.RadioButton.RadioButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.radio.RadioButton.RadioButton.$classSelector_5nt5ue$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.radio.RadioButton.RadioButton.$rule_f5d447$;
                }
              }
            }, /** @lends _.fg.beans.radio.RadioButton.RadioButton */ {
              f: function () {
                this.cursor = 'pointer';
              },
              rule$f: function () {
                this.background = 'red';
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.radio.RadioButton.RadioButton.f);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.radio.RadioButton.RadioButton;
            },
            checked$f: function (this$RadioButton) {
              return function (property, old, new_0) {
                this$RadioButton._checked = new_0;
                this$RadioButton.notifyCheckedListeners_6taknv$(new_0);
              };
            },
            clickHandler_8tpiaa$f: function (this$RadioButton) {
              return function (it) {
                var tmp$0;
                var newState = !((tmp$0 = this$RadioButton._checked) != null ? tmp$0 : Kotlin.throwNPE());
                this$RadioButton._checked = newState;
              };
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('beans', _);
  return _;
}(kotlin, elements);

//@ sourceMappingURL=beans.js.map
