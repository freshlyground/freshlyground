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
          this.perform = perform;
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
            var tmp$0;
            this.propertyChangedListeners_yuw5y8$.add_za3rmp$(typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
          },
          unPropertyChanged_uamkrm$: function (listener) {
            this.propertyChangedListeners_yuw5y8$.remove_za3rmp$(listener);
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
            this.label$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.Button.label_fkzj7o$f);
            this.icon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.Button.icon_k48m7l$f(this));
            this.clickHandler_9cuniy$ = _.fg.beans.button.Button.clickHandler_9cuniy$f(this);
            this.actionPropertyChangedHandler_dzou13$ = _.fg.beans.button.Button.actionPropertyChangedHandler_dzou13$f(this);
          }, /** @lends _.fg.beans.button.Button.prototype */ {
            label_fkzj7o$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.label$delegate, this, new Kotlin.PropertyMetadata('label'));
              }
            },
            icon_k48m7l$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.icon$delegate, this, new Kotlin.PropertyMetadata('icon'));
              }
            },
            render: function () {
              $module$elements.fg.elements.Button.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.button.Button.Button.classSelector);
              this.appendChild_sr04hg$(this.icon_k48m7l$);
              this.appendChild_sr04hg$(this.label_fkzj7o$);
              this.renderIcon(this.action.icon);
              this.renderLabel(this.action.label);
            },
            didMount: function () {
              $module$elements.fg.elements.Button.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_dzou13$);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_9cuniy$);
            },
            renderLabel: function (labelText) {
              if (labelText != null) {
                this.label_fkzj7o$.textContent = labelText;
                this.label_fkzj7o$.show();
              }
               else {
                this.label_fkzj7o$.hide();
              }
            },
            renderIcon: function (icon) {
              if (icon == null) {
                this.icon_k48m7l$.hide();
              }
               else {
                icon.apply_54c9de$(this.icon_k48m7l$);
                this.icon_k48m7l$.show();
              }
            }
          }, /** @lends _.fg.beans.button.Button */ {
            Button: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Button() {
              _.fg.beans.button.Button.Button.$classSelector_z0uw2b$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('button');
              _.fg.beans.button.Button.Button.$rule_y180tc$ = _.fg.beans.button.Button.Button.rule$f;
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
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.beans.button.Button.Button;
            },
            label_fkzj7o$f: function () {
              var span = new $module$elements.fg.elements.Span();
              span.hide();
              return span;
            },
            icon_k48m7l$f: function (this$Button) {
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
                  this$Button.renderLabel(action.label);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('icon', true).name))
                  this$Button.renderIcon(action.icon);
              };
            }
          })
        }),
        drawer: Kotlin.definePackage(null, /** @lends _.fg.beans.drawer */ {
          Drawer: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Drawer() {
            Drawer.baseInitializer.call(this);
          }, /** @lends _.fg.beans.drawer.Drawer.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.drawer.Drawer.Drawer.classSelector);
            }
          }, /** @lends _.fg.beans.drawer.Drawer */ {
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
                this.left = '0';
                this.top = '0';
                this.height = '100%';
                this.backgroundColor = 'white';
                this.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, ' + 'rgba(0, 0, 0, 0.227451) 0px 3px 10px';
              }
            }),
            object_initializer$: function () {
              _.fg.beans.drawer.Drawer.Drawer;
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
            }
          }),
          Icon: Kotlin.createTrait(null),
          apply_gnxmu2$: function ($receiver, element) {
            if ($receiver != null) {
              $receiver.apply_54c9de$(element);
            }
             else {
              element.removeClasses();
            }
          },
          IconI: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.I];
          }, function IconI(icon) {
            if (icon === void 0)
              icon = null;
            IconI.baseInitializer.call(this);
            var initialValue = icon;
            var onChange = _.fg.beans.icon.IconI.icon$f(icon, this);
            this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(onChange, initialValue);
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
            icon$f: function (closure$icon, this$IconI) {
              return function (property, old, new_0) {
                this$IconI.renderIcon(closure$icon);
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
        })
      })
    })
  });
  Kotlin.defineModule('beans', _);
  return _;
}(kotlin, elements);

//@ sourceMappingURL=beans.js.map
