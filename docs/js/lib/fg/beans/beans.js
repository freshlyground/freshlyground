var beans = function (Kotlin, $module$elements) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      beans: Kotlin.definePackage(function () {
        this.pkg = 'fg-bn';
      }, /** @lends _.fg.beans */ {
        Action: Kotlin.createClass(null, function Action(label, enabled, icon, shortcut, perform) {
          if (label === void 0)
            label = null;
          if (enabled === void 0)
            enabled = true;
          if (icon === void 0)
            icon = null;
          if (shortcut === void 0)
            shortcut = null;
          this._perform_hl9yhq$ = perform;
          var initialValue = label;
          this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.label$f(this), initialValue);
          var initialValue_0 = enabled;
          this.enabled$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.enabled$f(this), initialValue_0);
          var initialValue_1 = icon;
          this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.icon$f(this), initialValue_1);
          var initialValue_2 = shortcut;
          this.shortcut$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.Action.shortcut$f(this), initialValue_2);
          this.propertyChangedListeners = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
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
          shortcut: {
            get: function () {
              return this.shortcut$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('shortcut'));
            },
            set: function (shortcut) {
              this.shortcut$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut);
            }
          },
          notifyPropertyChanged_lle7lx$: function (property, old, new_0) {
            var tmp$0;
            tmp$0 = this.propertyChangedListeners.iterator();
            while (tmp$0.hasNext()) {
              var listener = tmp$0.next();
              listener(this, property, old, new_0);
            }
          },
          onPropertyChanged_uamkrm$: function (listener) {
            this.propertyChangedListeners.add_za3rmp$(listener);
          },
          unPropertyChanged_uamkrm$: function (listener) {
            this.propertyChangedListeners.remove_za3rmp$(listener);
          },
          perform_54c9de$: function (source) {
            if (this.enabled) {
              this._perform_hl9yhq$(new _.fg.beans.ActionPerform(this, source));
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
          },
          shortcut$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_lle7lx$(prop, old, new_0);
            };
          }
        }),
        ActionBean: Kotlin.createTrait(null),
        ActionPerform: Kotlin.createClass(null, function ActionPerform(action, source) {
          this.action = action;
          this.source = source;
        }, /** @lends _.fg.beans.ActionPerform.prototype */ {
          component1: function () {
            return this.action;
          },
          component2: function () {
            return this.source;
          },
          copy_7yf9l8$: function (action, source) {
            return new _.fg.beans.ActionPerform(action === void 0 ? this.action : action, source === void 0 ? this.source : source);
          },
          toString: function () {
            return 'ActionPerform(action=' + Kotlin.toString(this.action) + (', source=' + Kotlin.toString(this.source)) + ')';
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.action) | 0;
            result = result * 31 + Kotlin.hashCode(this.source) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.action, other.action) && Kotlin.equals(this.source, other.source)))));
          }
        }),
        anchor_xnxh4m$: function ($receiver, link, target, useDisplay, init) {
          if (link === void 0)
            link = null;
          if (target === void 0)
            target = '_blank';
          if (useDisplay === void 0)
            useDisplay = true;
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.link.Anchor(link, target, useDisplay), init);
        },
        button_umrm8d$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.button.Button(action), init);
        },
        drawer_jvh5j6$: function ($receiver, side, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.drawer.Drawer(side), init);
        },
        menuBar_ubzj3q$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.menu.MenuBar(), init);
        },
        menu_wo0x8d$: function ($receiver, label, init) {
          if (label === void 0)
            label = null;
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.menu.Menu(label), init);
        },
        menuItem_mt53wc$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.menu.MenuItem(action), init);
        },
        toggleButton_96ntx3$: function ($receiver, action, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.button.ToggleButton(action), init);
        },
        ElementStyle: Kotlin.createClass(null, function ElementStyle() {
          this.$cursor_xp9svd$ = null;
          this.$margin_t9tpu9$ = null;
          this.$backgroundColor_pi91e4$ = null;
          this.$borderStyle_1s1r5o$ = null;
          this.$borderWidth_1q210n$ = null;
          this.$borderColor_20xx56$ = null;
          this.$borderRadius_f3qhy7$ = null;
          this.$boxShadow_650nvu$ = null;
          this.$outline_g8cstb$ = null;
        }, /** @lends _.fg.beans.ElementStyle.prototype */ {
          cursor: {
            get: function () {
              return this.$cursor_xp9svd$;
            },
            set: function (cursor) {
              this.$cursor_xp9svd$ = cursor;
            }
          },
          margin: {
            get: function () {
              return this.$margin_t9tpu9$;
            },
            set: function (margin) {
              this.$margin_t9tpu9$ = margin;
            }
          },
          backgroundColor: {
            get: function () {
              return this.$backgroundColor_pi91e4$;
            },
            set: function (backgroundColor) {
              this.$backgroundColor_pi91e4$ = backgroundColor;
            }
          },
          borderStyle: {
            get: function () {
              return this.$borderStyle_1s1r5o$;
            },
            set: function (borderStyle) {
              this.$borderStyle_1s1r5o$ = borderStyle;
            }
          },
          borderWidth: {
            get: function () {
              return this.$borderWidth_1q210n$;
            },
            set: function (borderWidth) {
              this.$borderWidth_1q210n$ = borderWidth;
            }
          },
          borderColor: {
            get: function () {
              return this.$borderColor_20xx56$;
            },
            set: function (borderColor) {
              this.$borderColor_20xx56$ = borderColor;
            }
          },
          borderRadius: {
            get: function () {
              return this.$borderRadius_f3qhy7$;
            },
            set: function (borderRadius) {
              this.$borderRadius_f3qhy7$ = borderRadius;
            }
          },
          boxShadow: {
            get: function () {
              return this.$boxShadow_650nvu$;
            },
            set: function (boxShadow) {
              this.$boxShadow_650nvu$ = boxShadow;
            }
          },
          outline: {
            get: function () {
              return this.$outline_g8cstb$;
            },
            set: function (outline) {
              this.$outline_g8cstb$ = outline;
            }
          }
        }),
        SelectableAction: Kotlin.createClass(function () {
          return [_.fg.beans.Action];
        }, function SelectableAction(label, enabled, icon, selected, shortcut, perform) {
          if (enabled === void 0)
            enabled = true;
          if (icon === void 0)
            icon = null;
          if (selected === void 0)
            selected = false;
          if (shortcut === void 0)
            shortcut = null;
          SelectableAction.baseInitializer.call(this, label, enabled, icon, shortcut, perform);
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
          AbstractButton: Kotlin.createClass(function () {
            return [_.fg.beans.ActionBean, $module$elements.fg.elements.Button];
          }, function AbstractButton(action) {
            AbstractButton.baseInitializer.call(this);
            this.$action_2kbxlg$ = action;
            this.$hovered_sy2m5h$ = false;
            this.$focused_ovt1b$ = false;
            this.$pressed_5h23n0$ = false;
            this.label$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.AbstractButton.label$f);
            this.icon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.AbstractButton.icon$f(this));
            this.actionPropertyChangedHandler_ht851l$ = _.fg.beans.button.AbstractButton.actionPropertyChangedHandler_ht851l$f(this);
            this.clickHandler_9kncig$ = _.fg.beans.button.AbstractButton.clickHandler_9kncig$f(this);
            this.mouseEnterHandler_imywbj$ = _.fg.beans.button.AbstractButton.mouseEnterHandler_imywbj$f(this);
            this.mouseLeaveHandler_awlc82$ = _.fg.beans.button.AbstractButton.mouseLeaveHandler_awlc82$f(this);
            this.focusHandler_5zttmg$ = _.fg.beans.button.AbstractButton.focusHandler_5zttmg$f(this);
            this.blurHandler_gpga0d$ = _.fg.beans.button.AbstractButton.blurHandler_gpga0d$f(this);
            this.mouseDownHandler_zclnhj$ = _.fg.beans.button.AbstractButton.mouseDownHandler_zclnhj$f(action, this);
            this.mouseUpHandler_cagb28$ = _.fg.beans.button.AbstractButton.mouseUpHandler_cagb28$f(this);
          }, /** @lends _.fg.beans.button.AbstractButton.prototype */ {
            action: {
              get: function () {
                return this.$action_2kbxlg$;
              }
            },
            hovered: {
              get: function () {
                return this.$hovered_sy2m5h$;
              },
              set: function (hovered) {
                this.$hovered_sy2m5h$ = hovered;
              }
            },
            focused: {
              get: function () {
                return this.$focused_ovt1b$;
              },
              set: function (focused) {
                this.$focused_ovt1b$ = focused;
              }
            },
            pressed: {
              get: function () {
                return this.$pressed_5h23n0$;
              },
              set: function (pressed) {
                this.$pressed_5h23n0$ = pressed;
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
            onBeforeActionPerform: function () {
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
              this.appendChild_sr04hg$(this.icon);
              this.appendChild_sr04hg$(this.label);
              this.renderIcon_41ga0a$(this.action.icon);
              this.renderLabel_61zpoe$(this.action.label);
              this.renderDisabled_6taknv$(this.action.disabled);
            },
            didMount: function () {
              $module$elements.fg.elements.Button.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_ht851l$);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_9kncig$);
              $module$elements.fg.elements.onMouseEnter_9cq9y2$(this, this.mouseEnterHandler_imywbj$);
              $module$elements.fg.elements.onMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_awlc82$);
              $module$elements.fg.elements.onFocus_m2anqv$(this, this.focusHandler_5zttmg$);
              $module$elements.fg.elements.onBlur_m2anqv$(this, this.blurHandler_gpga0d$);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this, this.mouseDownHandler_zclnhj$);
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this, this.mouseUpHandler_cagb28$);
            },
            willUnMount: function () {
              $module$elements.fg.elements.Button.prototype.willUnMount.call(this);
              $module$elements.fg.elements.unMouseEnter_9cq9y2$(this, this.mouseEnterHandler_imywbj$);
              $module$elements.fg.elements.unMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_awlc82$);
              $module$elements.fg.elements.unFocus_m2anqv$(this, this.focusHandler_5zttmg$);
              $module$elements.fg.elements.unBlur_m2anqv$(this, this.blurHandler_gpga0d$);
              $module$elements.fg.elements.unMouseDown_9cq9y2$(this, this.mouseDownHandler_zclnhj$);
              $module$elements.fg.elements.unMouseUp_9cq9y2$(this, this.mouseUpHandler_cagb28$);
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
                this.toggleClass_ivxn3r$(_.fg.beans.button.AbstractButton.AbstractButton.DISABLED.value, true);
                this._disabled = true;
              }
               else {
                this.toggleClass_ivxn3r$(_.fg.beans.button.AbstractButton.AbstractButton.DISABLED.value);
                this._disabled = false;
              }
            }
          }, /** @lends _.fg.beans.button.AbstractButton */ {
            AbstractButton: Kotlin.createObject(null, function AbstractButton() {
              _.fg.beans.button.AbstractButton.AbstractButton.DISABLED = $module$elements.fg.elements.toClassSelector_pdl1w0$('disabled');
            }),
            object_initializer$: function () {
              _.fg.beans.button.AbstractButton.AbstractButton;
            },
            label$f: function () {
              var span = new $module$elements.fg.elements.Span();
              span.hide();
              return span;
            },
            icon$f: function (this$AbstractButton) {
              return function () {
                var iconI = new _.fg.beans.icon.IconI(this$AbstractButton.action.icon);
                iconI.hide();
                return iconI;
              };
            },
            actionPropertyChangedHandler_ht851l$f: function (this$AbstractButton) {
              return function (action, property, old, new_0) {
                var tmp$0;
                tmp$0 = property.name;
                if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('label', true).name))
                  this$AbstractButton.renderLabel_61zpoe$(action.label);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('icon', true).name))
                  this$AbstractButton.renderIcon_41ga0a$(action.icon);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('enabled', true).name)) {
                  this$AbstractButton.renderDisabled_6taknv$(action.disabled);
                  if (action.enabled) {
                    this$AbstractButton.onEnabled();
                  }
                   else {
                    this$AbstractButton.onDisabled();
                  }
                }
              };
            },
            clickHandler_9kncig$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.onBeforeActionPerform();
                this$AbstractButton.action.perform_54c9de$(this$AbstractButton);
              };
            },
            mouseEnterHandler_imywbj$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.hovered = true;
                this$AbstractButton.toggleClass_ivxn3r$('hovered', true);
                this$AbstractButton.onHover();
              };
            },
            mouseLeaveHandler_awlc82$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.hovered = false;
                this$AbstractButton.toggleClass_ivxn3r$('hovered');
                this$AbstractButton.unHover();
              };
            },
            focusHandler_5zttmg$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.focused = true;
                this$AbstractButton.toggleClass_ivxn3r$('focused', true);
                this$AbstractButton.onFocus();
              };
            },
            blurHandler_gpga0d$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.focused = false;
                this$AbstractButton.toggleClass_ivxn3r$('focused');
                this$AbstractButton.unFocus();
              };
            },
            mouseDownHandler_zclnhj$f: function (closure$action, this$AbstractButton) {
              return function (event) {
                if (closure$action.enabled) {
                  this$AbstractButton.pressed = true;
                  this$AbstractButton.toggleClass_ivxn3r$('pressed', true);
                  this$AbstractButton.onPressed();
                }
              };
            },
            mouseUpHandler_cagb28$f: function (this$AbstractButton) {
              return function (event) {
                this$AbstractButton.pressed = false;
                this$AbstractButton.toggleClass_ivxn3r$('pressed');
                this$AbstractButton.unPressed();
              };
            }
          }),
          Button: Kotlin.createClass(function () {
            return [_.fg.beans.button.AbstractButton];
          }, function Button(action) {
            Button.baseInitializer.call(this, action);
          }, /** @lends _.fg.beans.button.Button.prototype */ {
            render: function () {
              _.fg.beans.button.AbstractButton.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.button.Button.Button.classSelector);
            }
          }, /** @lends _.fg.beans.button.Button */ {
            ButtonStyle: Kotlin.createObject(function () {
              return [_.fg.beans.ElementStyle];
            }, function ButtonStyle() {
              ButtonStyle.baseInitializer.call(this);
              this.$margin_z1t7n9$ = '0';
              this.$backgroundColor_pqco6m$ = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
              this.$borderStyle_c43t36$ = 'outset';
              this.$borderWidth_c242y5$ = new $module$elements.fg.elements.Pixels(1.0);
              this.$borderColor_cczz2o$ = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#e4e4e4');
              this.$borderRadius_l5kxzv$ = new $module$elements.fg.elements.Pixels(4.0);
              this.$boxShadow_brax98$ = 'none';
              this.hovered = new _.fg.beans.button.Button.ButtonStyle.hovered$f();
              this.disabled = new _.fg.beans.button.Button.ButtonStyle.disabled$f();
              this.pressed = new _.fg.beans.button.Button.ButtonStyle.pressed$f();
              this.focused = new _.fg.beans.button.Button.ButtonStyle.focused$f();
            }, /** @lends _.fg.beans.button.Button.ButtonStyle.prototype */ {
              margin: {
                get: function () {
                  return this.$margin_z1t7n9$;
                },
                set: function (margin) {
                  this.$margin_z1t7n9$ = margin;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.$backgroundColor_pqco6m$;
                },
                set: function (backgroundColor) {
                  this.$backgroundColor_pqco6m$ = backgroundColor;
                }
              },
              borderStyle: {
                get: function () {
                  return this.$borderStyle_c43t36$;
                },
                set: function (borderStyle) {
                  this.$borderStyle_c43t36$ = borderStyle;
                }
              },
              borderWidth: {
                get: function () {
                  return this.$borderWidth_c242y5$;
                },
                set: function (borderWidth) {
                  this.$borderWidth_c242y5$ = borderWidth;
                }
              },
              borderColor: {
                get: function () {
                  return this.$borderColor_cczz2o$;
                },
                set: function (borderColor) {
                  this.$borderColor_cczz2o$ = borderColor;
                }
              },
              borderRadius: {
                get: function () {
                  return this.$borderRadius_l5kxzv$;
                },
                set: function (borderRadius) {
                  this.$borderRadius_l5kxzv$ = borderRadius;
                }
              },
              boxShadow: {
                get: function () {
                  return this.$boxShadow_brax98$;
                },
                set: function (boxShadow) {
                  this.$boxShadow_brax98$ = boxShadow;
                }
              }
            }, /** @lends _.fg.beans.button.Button.ButtonStyle */ {
              hovered$f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$cursor_ag5udd$ = 'pointer';
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.hovered$f.prototype */ {
                cursor: {
                  get: function () {
                    return this.$cursor_ag5udd$;
                  },
                  set: function (cursor) {
                    this.$cursor_ag5udd$ = cursor;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.hovered$f */ {
              }),
              disabled$f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$cursor_1cfxlc$ = 'not-allowed';
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.disabled$f.prototype */ {
                cursor: {
                  get: function () {
                    return this.$cursor_1cfxlc$;
                  },
                  set: function (cursor) {
                    this.$cursor_1cfxlc$ = cursor;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.disabled$f */ {
              }),
              pressed$f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$backgroundColor_pw2qzh$ = new $module$elements.fg.style.colour.RgbColor(118, 178, 240);
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.pressed$f.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.$backgroundColor_pw2qzh$;
                  },
                  set: function (backgroundColor) {
                    this.$backgroundColor_pw2qzh$ = backgroundColor;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.pressed$f */ {
              }),
              focused$f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.$outline_gqa90l$ = 'none';
                this.$borderColor_kc3ihc$ = new $module$elements.fg.style.colour.RgbColor(144, 191, 240);
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.focused$f.prototype */ {
                outline: {
                  get: function () {
                    return this.$outline_gqa90l$;
                  },
                  set: function (outline) {
                    this.$outline_gqa90l$ = outline;
                  }
                },
                borderColor: {
                  get: function () {
                    return this.$borderColor_kc3ihc$;
                  },
                  set: function (borderColor) {
                    this.$borderColor_kc3ihc$ = borderColor;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.focused$f */ {
              })
            }),
            Button: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Button() {
              _.fg.beans.button.Button.Button.$classSelector_z0uw2b$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-button');
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
              f: function () {
                var tmp$0;
                this.cursor = (tmp$0 = _.fg.beans.button.Button.ButtonStyle.disabled) != null ? tmp$0.cursor : null;
              },
              f_0: function () {
                var tmp$0;
                this.cursor = (tmp$0 = _.fg.beans.button.Button.ButtonStyle.hovered) != null ? tmp$0.cursor : null;
                $module$elements.fg.style.and_dbehhi$(this, _.fg.beans.button.AbstractButton.AbstractButton.DISABLED, _.fg.beans.button.Button.Button.f);
              },
              f_1: function () {
                var tmp$0, tmp$1, tmp$2;
                this.borderColor = (tmp$1 = (tmp$0 = _.fg.beans.button.Button.ButtonStyle.focused) != null ? tmp$0.borderColor : null) != null ? tmp$1.toString() : null;
                this.outline = (tmp$2 = _.fg.beans.button.Button.ButtonStyle.focused) != null ? tmp$2.outline : null;
              },
              f_2: function () {
                var tmp$0, tmp$1;
                this.backgroundColor = (tmp$1 = (tmp$0 = _.fg.beans.button.Button.ButtonStyle.pressed) != null ? tmp$0.backgroundColor : null) != null ? tmp$1.toString() : null;
              },
              rule$f: function () {
                var tmp$0, tmp$1, tmp$2, tmp$3;
                this.margin = _.fg.beans.button.Button.ButtonStyle.margin;
                this.borderStyle = _.fg.beans.button.Button.ButtonStyle.borderStyle;
                this.borderWidth = (tmp$0 = _.fg.beans.button.Button.ButtonStyle.borderWidth) != null ? tmp$0.toString() : null;
                this.borderColor = (tmp$1 = _.fg.beans.button.Button.ButtonStyle.borderColor) != null ? tmp$1.toString() : null;
                this.borderRadius = (tmp$2 = _.fg.beans.button.Button.ButtonStyle.borderRadius) != null ? tmp$2.toString() : null;
                this.backgroundColor = (tmp$3 = _.fg.beans.button.Button.ButtonStyle.backgroundColor) != null ? tmp$3.toString() : null;
                this.boxShadow = _.fg.beans.button.Button.ButtonStyle.boxShadow;
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.button.Button.Button.f_0);
                $module$elements.fg.style.focus_i5tde3$(this, _.fg.beans.button.Button.Button.f_1);
                $module$elements.fg.style.and_jweaar$(this, '.pressed', _.fg.beans.button.Button.Button.f_2);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.button.Button.Button;
            }
          }),
          ToggleButton: Kotlin.createClass(function () {
            return [_.fg.beans.button.AbstractButton];
          }, function ToggleButton(action) {
            ToggleButton.baseInitializer.call(this, action);
            this.$action_veqnye$ = action;
            this.actionPropertyChangedHandler_wasyyt$ = _.fg.beans.button.ToggleButton.actionPropertyChangedHandler_wasyyt$f(this);
            this.previousBackgroundColor_n8a8bq$ = '';
          }, /** @lends _.fg.beans.button.ToggleButton.prototype */ {
            action: {
              get: function () {
                return this.$action_veqnye$;
              }
            },
            onBeforeActionPerform: function () {
              _.fg.beans.button.AbstractButton.prototype.onBeforeActionPerform.call(this);
              this.action.selected = !this.action.selected;
            },
            render: function () {
              _.fg.beans.button.AbstractButton.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.button.ToggleButton.ToggleButton.classSelector);
            },
            renderSelected_6taknv$: function (selected) {
              if (selected) {
                this.previousBackgroundColor_n8a8bq$ = this.style.backgroundColor;
                this.addClass_61zpoe$('selected');
              }
               else {
                this.removeClass_61zpoe$('selected');
              }
            },
            didMount: function () {
              _.fg.beans.button.AbstractButton.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_wasyyt$);
            },
            toggle: function () {
              this.onBeforeActionPerform();
              this.action.perform_54c9de$(this);
            }
          }, /** @lends _.fg.beans.button.ToggleButton */ {
            ToggleButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function ToggleButton() {
              _.fg.beans.button.ToggleButton.ToggleButton.$classSelector_s5whub$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-toggle-button');
              _.fg.beans.button.ToggleButton.ToggleButton.$rule_jkbejk$ = _.fg.beans.button.ToggleButton.ToggleButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.button.ToggleButton.ToggleButton);
            }, /** @lends _.fg.beans.button.ToggleButton.ToggleButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.button.ToggleButton.ToggleButton.$classSelector_s5whub$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.button.ToggleButton.ToggleButton.$rule_jkbejk$;
                }
              }
            }, /** @lends _.fg.beans.button.ToggleButton.ToggleButton */ {
              f: function () {
                this.cursor = 'not-allowed';
              },
              f_0: function () {
                this.cursor = 'pointer';
                $module$elements.fg.style.and_dbehhi$(this, _.fg.beans.button.AbstractButton.AbstractButton.DISABLED, _.fg.beans.button.ToggleButton.ToggleButton.f);
              },
              f_1: function () {
                this.border = '1px outset rgb(144, 191, 240)';
                this.backgroundColor = 'rgb(118, 178, 240)';
                this.boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.2)';
              },
              f_2: function () {
                this.border = '1px outset rgb(144, 191, 240)';
                this.outline = 'none';
              },
              f_3: function () {
                this.border = '1px outset rgb(144, 191, 240)';
                this.outline = 'none';
              },
              rule$f: function () {
                this.border = '1px outset #e4e4e4';
                this.borderRadius = '4px';
                this.backgroundColor = '#ffffff';
                this.boxShadow = 'none';
                this.margin = '0';
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.button.ToggleButton.ToggleButton.f_0);
                $module$elements.fg.style.and_jweaar$(this, '.selected', _.fg.beans.button.ToggleButton.ToggleButton.f_1);
                $module$elements.fg.style.focus_i5tde3$(this, _.fg.beans.button.ToggleButton.ToggleButton.f_2);
                $module$elements.fg.style.and_jweaar$(this, '.focused', _.fg.beans.button.ToggleButton.ToggleButton.f_3);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.button.ToggleButton.ToggleButton;
            },
            actionPropertyChangedHandler_wasyyt$f: function (this$ToggleButton) {
              return function (action, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('selected', true).name))
                  this$ToggleButton.renderSelected_6taknv$(this$ToggleButton.action.selected);
              };
            }
          })
        }),
        deck: Kotlin.definePackage(null, /** @lends _.fg.beans.deck */ {
          Deck: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Deck() {
            Deck.baseInitializer.call(this);
            this.deck_pp3135$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          }, /** @lends _.fg.beans.deck.Deck.prototype */ {
            childAdded_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childAdded_sr04hg$.call(this, child);
              if (!Kotlin.isType(child, $module$elements.fg.elements.Element)) {
                throw new Kotlin.IllegalArgumentException('Only a Element can be added to a Deck');
              }
              this.deck_pp3135$.add_za3rmp$(child);
              if (this.deck_pp3135$.size > 1) {
                child.hide();
              }
               else {
                child.show();
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.deck.Deck.Deck.classSelector);
            }
          }, /** @lends _.fg.beans.deck.Deck */ {
            Deck: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Deck() {
              _.fg.beans.deck.Deck.Deck.$classSelector_i2mlhy$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-deck');
              _.fg.beans.deck.Deck.Deck.$rule_c9srrr$ = _.fg.beans.deck.Deck.Deck.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.deck.Deck.Deck);
            }, /** @lends _.fg.beans.deck.Deck.Deck.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.deck.Deck.Deck.$classSelector_i2mlhy$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.deck.Deck.Deck.$rule_c9srrr$;
                }
              }
            }, /** @lends _.fg.beans.deck.Deck.Deck */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.beans.deck.Deck.Deck;
            }
          })
        }),
        drawer: Kotlin.definePackage(null, /** @lends _.fg.beans.drawer */ {
          dock_17l1bi$: function ($receiver, element) {
            element.removeSelf();
            $receiver.prependChild_sr04hg$(element);
            element.style.position = 'static';
            element.style.cssFloat = 'left';
          },
          undock_ahjj8o$: function ($receiver) {
            $receiver.style.position = '';
            $receiver.style.cssFloat = '';
          },
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
              this.renderSide_usg1vr$(this.side);
            },
            renderSide_usg1vr$: function (side) {
              if (Kotlin.equals(side, $module$elements.fg.base.Side.LEFT))
                this.style.left = '0';
              else if (Kotlin.equals(side, $module$elements.fg.base.Side.RIGHT))
                this.style.right = '0';
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
                this$Drawer.renderSide_usg1vr$(new_0);
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
            },
            toI: function () {
              var i = new $module$elements.fg.elements.I();
              this.apply_54c9de$(i);
              return i;
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
            apple_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('apple', size);
            },
            camera_retro_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('camera-retro', size);
            },
            check_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('check', size);
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
            external_link_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('external-link', size);
            },
            link_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('link', size);
            },
            linux_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('linux', size);
            },
            plus_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('plus', size);
            },
            windows_629h0h$: function (size) {
              if (size === void 0)
                size = null;
              return new _.fg.beans.icon.FontAwesomeIcon('windows', size);
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
        link: Kotlin.definePackage(null, /** @lends _.fg.beans.link */ {
          Anchor: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.A];
          }, function Anchor(link, target, useDisplay) {
            if (link === void 0)
              link = null;
            if (target === void 0)
              target = '_blank';
            if (useDisplay === void 0)
              useDisplay = true;
            Anchor.baseInitializer.call(this);
            this.useDisplay = useDisplay;
            var initialValue = link;
            this.link$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.link.Anchor.link$f(this), initialValue);
            this.iconI$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.link.Anchor.iconI$f);
            this.onClickHandler_35z5s2$ = _.fg.beans.link.Anchor.onClickHandler_35z5s2$f;
            this._target = target;
          }, /** @lends _.fg.beans.link.Anchor.prototype */ {
            link: {
              get: function () {
                return this.link$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('link'));
              },
              set: function (link) {
                this.link$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('link'), link);
              }
            },
            iconI: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.iconI$delegate, this, new Kotlin.PropertyMetadata('iconI'));
              }
            },
            render: function () {
              $module$elements.fg.elements.A.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.link.Anchor.Anchor.classSelector);
              this.renderLink(this.link);
            },
            didMount: function () {
              $module$elements.fg.elements.A.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.onClickHandler_35z5s2$);
            },
            renderLink: function (link) {
              var tmp$1, tmp$2;
              if (link == null) {
                this.style.cursor = 'auto';
              }
               else {
                this.style.cursor = 'pointer';
                if (Kotlin.isType(link, _.fg.beans.link.ExternalLink)) {
                  this._href = (tmp$2 = (tmp$1 = link.url) != null ? tmp$1.toString() : null) != null ? tmp$2 : null;
                  if (this.useDisplay) {
                    this.textContent = link.display;
                    this.renderIcon(link);
                  }
                }
                 else if (Kotlin.isType(link, _.fg.beans.link.LocalLink)) {
                  this._href = link.path.toString();
                  if (this.useDisplay) {
                    this.textContent = link.display;
                    this.renderIcon(link);
                  }
                }
              }
            },
            renderIcon: function (link) {
              if (link.icon != null) {
                this.iconI.icon = link.icon;
                this.appendChild_sr04hg$(this.iconI);
              }
               else if (this.hasChild_sr04hg$(this.iconI)) {
                this.removeChild_sr04hg$(this.iconI);
              }
            }
          }, /** @lends _.fg.beans.link.Anchor */ {
            Anchor: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Anchor() {
              _.fg.beans.link.Anchor.Anchor.$classSelector_xmpzqz$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-anchor');
              _.fg.beans.link.Anchor.Anchor.$rule_m1udh4$ = _.fg.beans.link.Anchor.Anchor.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.link.Anchor.Anchor);
            }, /** @lends _.fg.beans.link.Anchor.Anchor.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.link.Anchor.Anchor.$classSelector_xmpzqz$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.link.Anchor.Anchor.$rule_m1udh4$;
                }
              }
            }, /** @lends _.fg.beans.link.Anchor.Anchor */ {
              rule$f: function () {
              }
            }),
            object_initializer$: function () {
              _.fg.beans.link.Anchor.Anchor;
            },
            link$f: function (this$Anchor) {
              return function (property, old, new_0) {
                this$Anchor.renderLink(new_0);
              };
            },
            iconI$f: function () {
              return new _.fg.beans.icon.IconI();
            },
            onClickHandler_35z5s2$f: function (it) {
            }
          }),
          ExternalLink: Kotlin.createClass(function () {
            return [_.fg.beans.link.Link];
          }, function ExternalLink(url, display, icon) {
            if (url === void 0)
              url = null;
            if (icon === void 0)
              icon = _.fg.beans.icon.FontAwesomeIcons.external_link_629h0h$();
            ExternalLink.baseInitializer.call(this, display, icon);
            this.url = url;
          }, /** @lends _.fg.beans.link.ExternalLink.prototype */ {
            compareTo_za3rmp$: function (other) {
              return $module$elements.fg.base.CompareTo.nullSafe_wn2jw4$(this.url, other.url);
            }
          }),
          Link: Kotlin.createClass(function () {
            return [Kotlin.Comparable];
          }, function Link(display, icon) {
            this.display = display;
            this.icon = icon;
          }),
          LocalLink: Kotlin.createClass(function () {
            return [_.fg.beans.link.Link];
          }, function LocalLink(path, display, icon) {
            if (icon === void 0)
              icon = _.fg.beans.icon.FontAwesomeIcons.link_629h0h$();
            LocalLink.baseInitializer.call(this, display, icon);
            this.path = path;
          }, /** @lends _.fg.beans.link.LocalLink.prototype */ {
            compareTo_za3rmp$: function (other) {
              return $module$elements.fg.base.CompareTo.nullSafe_wn2jw4$(this.path, other.path);
            }
          })
        }),
        menu: Kotlin.definePackage(null, /** @lends _.fg.beans.menu */ {
          Menu: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Menu(label, shortcut) {
            if (label === void 0)
              label = null;
            if (shortcut === void 0)
              shortcut = null;
            Menu.baseInitializer.call(this);
            this.beforePerformingMenuItemActionListeners_ri78n3$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.afterPerformingMenuItemActionListeners_jy470u$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.beforePerformingMenuItemActionHandler_23c9di$ = _.fg.beans.menu.Menu.beforePerformingMenuItemActionHandler_23c9di$f(this);
            this.afterPerformingMenuItemActionHandler_hqnry5$ = _.fg.beans.menu.Menu.afterPerformingMenuItemActionHandler_hqnry5$f(this);
            var initialValue = label;
            this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.menu.Menu.label$f, initialValue);
            var initialValue_0 = shortcut;
            this.shortcut$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.menu.Menu.shortcut$f, initialValue_0);
          }, /** @lends _.fg.beans.menu.Menu.prototype */ {
            label: {
              get: function () {
                return this.label$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('label'));
              },
              set: function (label) {
                this.label$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('label'), label);
              }
            },
            shortcut: {
              get: function () {
                return this.shortcut$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('shortcut'));
              },
              set: function (shortcut) {
                this.shortcut$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut);
              }
            },
            onBeforePerformingMenuItemAction_bakdqu$: function (listener) {
              this.beforePerformingMenuItemActionListeners_ri78n3$.add_za3rmp$(listener);
            },
            unBeforePerformingMenuItemAction_bakdqu$: function (listener) {
              this.beforePerformingMenuItemActionListeners_ri78n3$.remove_za3rmp$(listener);
            },
            onAfterPerformingMenuItemAction_bakdqu$: function (listener) {
              this.afterPerformingMenuItemActionListeners_jy470u$.add_za3rmp$(listener);
            },
            unAfterPerformingMenuItemAction_bakdqu$: function (listener) {
              this.afterPerformingMenuItemActionListeners_jy470u$.remove_za3rmp$(listener);
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.Menu.Statics.classSelector);
            },
            childAdded_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childAdded_sr04hg$.call(this, child);
              if (Kotlin.isType(child, _.fg.beans.menu.MenuItem)) {
                child.onBeforePerformingAction_k3q9i7$(this.beforePerformingMenuItemActionHandler_23c9di$);
                child.onAfterPerformingAction_k3q9i7$(this.afterPerformingMenuItemActionHandler_hqnry5$);
              }
            }
          }, /** @lends _.fg.beans.menu.Menu */ {
            Statics: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Statics() {
              _.fg.beans.menu.Menu.Statics.$classSelector_7qddre$ = new $module$elements.fg.elements.ClassSelector('fg-bn-menu');
              _.fg.beans.menu.Menu.Statics.$rule_wlbgql$ = _.fg.beans.menu.Menu.Statics.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.Menu.Statics);
            }, /** @lends _.fg.beans.menu.Menu.Statics.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.Menu.Statics.$classSelector_7qddre$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.Menu.Statics.$rule_wlbgql$;
                }
              }
            }, /** @lends _.fg.beans.menu.Menu.Statics */ {
              rule$f: function () {
                this.paddingTop = '4px';
                this.paddingBottom = '4px';
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.WHITE.toString();
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.Menu.Statics;
            },
            beforePerformingMenuItemActionHandler_23c9di$f: function (this$Menu) {
              return function (action) {
                var tmp$0;
                tmp$0 = this$Menu.beforePerformingMenuItemActionListeners_ri78n3$.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element(action, this$Menu);
                }
              };
            },
            afterPerformingMenuItemActionHandler_hqnry5$f: function (this$Menu) {
              return function (action) {
                var tmp$0;
                tmp$0 = this$Menu.afterPerformingMenuItemActionListeners_jy470u$.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element(action, this$Menu);
                }
              };
            },
            label$f: function (property, old, new_0) {
            },
            shortcut$f: function (property, old, new_0) {
            }
          }),
          MenuBar: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function MenuBar() {
            MenuBar.baseInitializer.call(this);
            this.menuButtonByMenu_rxktgo$ = Kotlin.kotlin.collections.linkedMapOf_eoa9s7$([]);
            this.beforePerformingMenuItemActionHandler_mcx2z5$ = _.fg.beans.menu.MenuBar.beforePerformingMenuItemActionHandler_mcx2z5$f;
            this.afterPerformingMenuItemActionHandler_raozmy$ = _.fg.beans.menu.MenuBar.afterPerformingMenuItemActionHandler_raozmy$f(this);
          }, /** @lends _.fg.beans.menu.MenuBar.prototype */ {
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.MenuBar.MenuBar.classSelector);
            },
            childAdded_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childAdded_sr04hg$.call(this, child);
              if (!(Kotlin.isType(child, _.fg.beans.menu.Menu) || Kotlin.isType(child, _.fg.beans.menu.MenuButton))) {
                throw new Kotlin.IllegalArgumentException('Only a Menu can be added to a MenuBar: ' + Kotlin.kotlin.js.get_jsClass_s8jyvl$(child).name);
              }
              if (Kotlin.isType(child, _.fg.beans.menu.Menu)) {
                child.hide();
                var menuButton = new _.fg.beans.menu.MenuButton(new _.fg.beans.SelectableAction(child.label, void 0, void 0, void 0, void 0, _.fg.beans.menu.MenuBar.childAdded_sr04hg$f(child, this)));
                $module$elements.fg.elements.Div.prototype.appendChild_sr04hg$.call(this, menuButton);
                this.menuButtonByMenu_rxktgo$.put_wn2jw4$(child, menuButton);
                child.onBeforePerformingMenuItemAction_bakdqu$(this.beforePerformingMenuItemActionHandler_mcx2z5$);
                child.onAfterPerformingMenuItemAction_bakdqu$(this.afterPerformingMenuItemActionHandler_raozmy$);
                $module$elements.fg.elements.onMouseEnter_9cq9y2$(menuButton, _.fg.beans.menu.MenuBar.childAdded_sr04hg$f_0(menuButton, this, child));
              }
            },
            anyMenuOpen: function () {
              var tmp$0;
              tmp$0 = this.menuButtonByMenu_rxktgo$.values.iterator();
              while (tmp$0.hasNext()) {
                var mb = tmp$0.next();
                if (mb.action.selected) {
                  return true;
                }
              }
              return false;
            },
            childRemoved_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childRemoved_sr04hg$.call(this, child);
              if (Kotlin.isType(child, _.fg.beans.menu.Menu)) {
                this.menuButtonByMenu_rxktgo$.remove_za3rmp$(child);
              }
            },
            closeOthers: function (exception) {
              var tmp$0;
              tmp$0 = this.childElements.iterator();
              while (tmp$0.hasNext()) {
                var child = tmp$0.next();
                if (!Kotlin.equals(child, exception) && Kotlin.isType(child, _.fg.beans.menu.Menu)) {
                  this.closeMenu(child);
                }
              }
            },
            openMenu: function (menu) {
              var tmp$0;
              this.closeOthers(menu);
              menu.show();
              var menuButton = (tmp$0 = this.menuButtonByMenu_rxktgo$.get_za3rmp$(menu)) != null ? tmp$0 : Kotlin.throwNPE();
              var left = menuButton.boundingClientRect.left - $module$elements.fg.elements.get_px_pdl1w0$($module$elements.fg.elements.get_computedStyle_gobym4$($module$elements.fg.elements.BODY).marginLeft).value;
              menu.style.top = menuButton.boundingClientRect.height.toString() + 'px';
              menu.style.left = left.toString() + 'px';
            },
            closeMenu: function (menu) {
              var tmp$0, tmp$1;
              menu.hide();
              (tmp$1 = (tmp$0 = this.menuButtonByMenu_rxktgo$.get_za3rmp$(menu)) != null ? tmp$0.action : null) != null ? (tmp$1.selected = false) : null;
            }
          }, /** @lends _.fg.beans.menu.MenuBar */ {
            childAdded_sr04hg$f: function (closure$child, this$MenuBar) {
              return function (actionPerform) {
                var tmp$0;
                Kotlin.isType(tmp$0 = actionPerform.action, _.fg.beans.SelectableAction) ? tmp$0 : Kotlin.throwCCE();
                if (actionPerform.action.selected) {
                  this$MenuBar.openMenu(closure$child);
                }
                 else {
                  closure$child.hide();
                }
              };
            },
            childAdded_sr04hg$f_0: function (closure$menuButton, this$MenuBar, closure$child) {
              return function (it) {
                console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '].onMouseEnter');
                var anyMenuOpen = this$MenuBar.anyMenuOpen();
                console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '] anyMenuOpen = ' + anyMenuOpen);
                if (anyMenuOpen) {
                  this$MenuBar.openMenu(closure$child);
                  closure$menuButton.action.selected = true;
                }
              };
            },
            MenuBar: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuBar() {
              _.fg.beans.menu.MenuBar.MenuBar.$classSelector_s0mygk$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-menu-bar');
              _.fg.beans.menu.MenuBar.MenuBar.$rule_uw5gw7$ = _.fg.beans.menu.MenuBar.MenuBar.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuBar.MenuBar);
            }, /** @lends _.fg.beans.menu.MenuBar.MenuBar.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuBar.MenuBar.$classSelector_s0mygk$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuBar.MenuBar.$rule_uw5gw7$;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuBar.MenuBar */ {
              f: function () {
                this.position = 'absolute';
                this.border = '1px solid #ccc';
              },
              rule$f: function () {
                this.position = 'relative';
                $module$elements.fg.style.child_lij791$(this, _.fg.beans.menu.Menu.Statics.classSelector, _.fg.beans.menu.MenuBar.MenuBar.f);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuBar.MenuBar;
            },
            beforePerformingMenuItemActionHandler_mcx2z5$f: function (action, menu) {
            },
            afterPerformingMenuItemActionHandler_raozmy$f: function (this$MenuBar) {
              return function (action, menu) {
                this$MenuBar.closeMenu(menu);
              };
            }
          }),
          MenuButton: Kotlin.createClass(function () {
            return [_.fg.beans.button.ToggleButton];
          }, function MenuButton(action) {
            MenuButton.baseInitializer.call(this, action);
          }, /** @lends _.fg.beans.menu.MenuButton.prototype */ {
            render: function () {
              _.fg.beans.button.ToggleButton.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.MenuButton.MenuButton.classSelector);
            }
          }, /** @lends _.fg.beans.menu.MenuButton */ {
            MenuButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuButton() {
              _.fg.beans.menu.MenuButton.MenuButton.$classSelector_1xs1ls$ = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-menu-button');
              _.fg.beans.menu.MenuButton.MenuButton.$rule_6k24t$ = _.fg.beans.menu.MenuButton.MenuButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuButton.MenuButton);
            }, /** @lends _.fg.beans.menu.MenuButton.MenuButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuButton.MenuButton.$classSelector_1xs1ls$;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuButton.MenuButton.$rule_6k24t$;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuButton.MenuButton */ {
              f: function () {
                this.borderColor = '#e4e4e4';
              },
              f_0: function () {
                this.borderBottom = 'none';
                this.borderColor = '#e4e4e4';
                this.backgroundColor = 'rgb(118, 178, 240)';
                this.boxShadow = 'none';
              },
              rule$f: function () {
                this.borderColor = '#e4e4e4';
                this.borderRadius = '0';
                $module$elements.fg.style.focus_i5tde3$(this, _.fg.beans.menu.MenuButton.MenuButton.f);
                $module$elements.fg.style.and_jweaar$(this, '.selected', _.fg.beans.menu.MenuButton.MenuButton.f_0);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuButton.MenuButton;
            }
          }),
          MenuItem: Kotlin.createClass(function () {
            return [_.fg.beans.ActionBean, $module$elements.fg.elements.Div];
          }, function MenuItem(action) {
            MenuItem.baseInitializer.call(this);
            this.$action_roo86z$ = action;
            this.beforePerformingActionListeners_ppxdcs$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.afterPerformingActionListeners_16d175$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.selectedIcon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.selectedIcon_1u3tq1$f);
            this.primaryText$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.primaryText_l0masq$f);
            this.secondaryTextSpan$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.secondaryTextSpan_mc6gu2$f);
            this.secondaryText$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.secondaryText_isvlr0$f(this));
            this.actionPropertyChangedHandler_xq9c3e$ = _.fg.beans.menu.MenuItem.actionPropertyChangedHandler_xq9c3e$f(this);
            this.clickHandler_jj300p$ = _.fg.beans.menu.MenuItem.clickHandler_jj300p$f(this, action);
          }, /** @lends _.fg.beans.menu.MenuItem.prototype */ {
            action: {
              get: function () {
                return this.$action_roo86z$;
              }
            },
            selectedIcon_1u3tq1$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.selectedIcon$delegate, this, new Kotlin.PropertyMetadata('selectedIcon'));
              }
            },
            primaryText_l0masq$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.primaryText$delegate, this, new Kotlin.PropertyMetadata('primaryText'));
              }
            },
            secondaryTextSpan_mc6gu2$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.secondaryTextSpan$delegate, this, new Kotlin.PropertyMetadata('secondaryTextSpan'));
              }
            },
            secondaryText_isvlr0$: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.secondaryText$delegate, this, new Kotlin.PropertyMetadata('secondaryText'));
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.MenuItem.MenuItem.classSelector);
              this._tabindex = '0';
              this.appendChild_sr04hg$(this.selectedIcon_1u3tq1$);
              this.appendChild_sr04hg$(this.primaryText_l0masq$);
              this.appendChild_sr04hg$(this.secondaryText_isvlr0$);
              this.primaryText_l0masq$.textContent = this.action.label;
              this.renderShortcut(this.action.shortcut);
            },
            renderShortcut: function (key) {
              var tmp$0;
              this.secondaryTextSpan_mc6gu2$.removeChildren();
              if (key != null) {
                tmp$0 = key.modifiers.list.iterator();
                while (tmp$0.hasNext()) {
                  var modifier = tmp$0.next();
                  if (modifier === $module$elements.fg.keyboard.Modifier.meta) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u2318'));
                    }
                     else {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else if (modifier === $module$elements.fg.keyboard.Modifier.shift) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u21E7'));
                    }
                     else {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else if (modifier === $module$elements.fg.keyboard.Modifier.alt) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u2325'));
                    }
                     else {
                      this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else {
                    this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                  }
                }
                this.secondaryTextSpan_mc6gu2$.appendChild_sr04hg$(new $module$elements.fg.elements.Text(key.key.toUpperCase()));
              }
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_xq9c3e$);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_jj300p$);
            },
            renderSelected: function (selected) {
              if (selected) {
                this.addClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
                this.selectedIcon_1u3tq1$.style.opacity = '1';
              }
               else {
                this.removeClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
                this.selectedIcon_1u3tq1$.style.opacity = '0';
              }
            },
            onBeforePerformingAction_k3q9i7$: function (listener) {
              this.beforePerformingActionListeners_ppxdcs$.add_za3rmp$(listener);
            },
            unBeforePerformingAction_k3q9i7$: function (listener) {
              this.beforePerformingActionListeners_ppxdcs$.remove_za3rmp$(listener);
            },
            onAfterPerformingAction_k3q9i7$: function (listener) {
              this.afterPerformingActionListeners_16d175$.add_za3rmp$(listener);
            },
            unAfterPerformingAction_k3q9i7$: function (listener) {
              this.afterPerformingActionListeners_16d175$.remove_za3rmp$(listener);
            }
          }, /** @lends _.fg.beans.menu.MenuItem */ {
            MenuItem: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuItem() {
              _.fg.beans.menu.MenuItem.MenuItem.$classSelector_h04jcw$ = new $module$elements.fg.elements.ClassSelector('fg-bn-menu-item');
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
              f: function () {
                this.marginRight = '2px';
                this.flex = 'initial';
              },
              f_0: function () {
                this.flex = '1';
              },
              f_1: function () {
                this.marginLeft = '8px';
                this.flex = 'initial';
              },
              f_2: function () {
                this.backgroundColor = '#ccc';
              },
              f_3: function () {
                this.outline = 'none';
              },
              rule$f: function () {
                this.cursor = 'pointer';
                this.paddingLeft = '8px';
                this.paddingRight = '24px';
                this.textAlign = 'left';
                this.display = 'flex';
                this.flexWrap = 'nowrap';
                $module$elements.fg.style.child_l73siq$(this, '.selected-icon', _.fg.beans.menu.MenuItem.MenuItem.f);
                $module$elements.fg.style.child_l73siq$(this, '.primary-text', _.fg.beans.menu.MenuItem.MenuItem.f_0);
                $module$elements.fg.style.child_l73siq$(this, '.secondary-text', _.fg.beans.menu.MenuItem.MenuItem.f_1);
                $module$elements.fg.style.hover_i5tde3$(this, _.fg.beans.menu.MenuItem.MenuItem.f_2);
                $module$elements.fg.style.focus_i5tde3$(this, _.fg.beans.menu.MenuItem.MenuItem.f_3);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuItem.MenuItem;
            },
            selectedIcon_1u3tq1$f: function () {
              var iconI = new _.fg.beans.icon.IconI();
              iconI.icon = _.fg.beans.icon.FontAwesomeIcons.check_629h0h$();
              iconI.addClass_61zpoe$('selected-icon');
              iconI.style.opacity = '0';
              return iconI;
            },
            primaryText_l0masq$f: function () {
              var span = new $module$elements.fg.elements.Span();
              span.addClass_61zpoe$('primary-text');
              return span;
            },
            secondaryTextSpan_mc6gu2$f: function () {
              var span = new $module$elements.fg.elements.Span();
              return span;
            },
            secondaryText_isvlr0$f: function (this$MenuItem) {
              return function () {
                var div = new $module$elements.fg.elements.Div();
                div.addClass_61zpoe$('secondary-text');
                div.appendChild_sr04hg$(this$MenuItem.secondaryTextSpan_mc6gu2$);
                return div;
              };
            },
            actionPropertyChangedHandler_xq9c3e$f: function (this$MenuItem) {
              return function (action, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('label', true).name)) {
                  this$MenuItem.primaryText_l0masq$.textContent = action.label;
                }
                 else if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('shortcut', true).name)) {
                  this$MenuItem.renderShortcut(action.shortcut);
                }
                if (Kotlin.isType(action, _.fg.beans.SelectableAction)) {
                  if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('selected', true).name)) {
                    this$MenuItem.renderSelected(action.selected);
                  }
                }
              };
            },
            clickHandler_jj300p$f: function (this$MenuItem, closure$action) {
              return function (it) {
                var tmp$0;
                tmp$0 = this$MenuItem.beforePerformingActionListeners_ppxdcs$.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element(closure$action);
                }
                if (Kotlin.isType(closure$action, _.fg.beans.SelectableAction)) {
                  closure$action.selected = !closure$action.selected;
                  closure$action.perform_54c9de$(this$MenuItem);
                }
                 else {
                  closure$action.perform_54c9de$(this$MenuItem);
                }
                var tmp$1;
                tmp$1 = this$MenuItem.afterPerformingActionListeners_16d175$.iterator();
                while (tmp$1.hasNext()) {
                  var element_0 = tmp$1.next();
                  element_0(closure$action);
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
