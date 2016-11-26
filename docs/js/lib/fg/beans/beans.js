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
          this._perform_jgdcs4$_0 = perform;
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
            set: function (label_0) {
              this.label$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('label'), label_0);
            }
          },
          enabled: {
            get: function () {
              return this.enabled$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('enabled'));
            },
            set: function (enabled_0) {
              this.enabled$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('enabled'), enabled_0);
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
            set: function (icon_0) {
              this.icon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('icon'), icon_0);
            }
          },
          shortcut: {
            get: function () {
              return this.shortcut$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('shortcut'));
            },
            set: function (shortcut_0) {
              this.shortcut$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut_0);
            }
          },
          notifyPropertyChanged_dgnimp$_0: function (property, old, new_0) {
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
              this._perform_jgdcs4$_0(new _.fg.beans.ActionPerform(this, source));
            }
          }
        }, /** @lends _.fg.beans.Action */ {
          label$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_dgnimp$_0(prop, old, new_0);
            };
          },
          enabled$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_dgnimp$_0(prop, old, new_0);
            };
          },
          icon$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_dgnimp$_0(prop, old, new_0);
            };
          },
          shortcut$f: function (this$Action) {
            return function (prop, old, new_0) {
              this$Action.notifyPropertyChanged_dgnimp$_0(prop, old, new_0);
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
        deck_iokvsb$: function ($receiver, init) {
          return $module$elements.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.beans.deck.Deck(), init);
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
          this.cursor_1bqtbn$_0 = null;
          this.margin_1bqtbn$_0 = null;
          this.backgroundColor_1bqtbn$_0 = null;
          this.color_1bqtbn$_0 = null;
          this.borderStyle_1bqtbn$_0 = null;
          this.borderWidth_1bqtbn$_0 = null;
          this.borderColor_1bqtbn$_0 = null;
          this.borderRadius_1bqtbn$_0 = null;
          this.boxShadow_1bqtbn$_0 = null;
          this.outline_1bqtbn$_0 = null;
        }, /** @lends _.fg.beans.ElementStyle.prototype */ {
          cursor: {
            get: function () {
              return this.cursor_1bqtbn$_0;
            },
            set: function (cursor_0) {
              this.cursor_1bqtbn$_0 = cursor_0;
            }
          },
          margin: {
            get: function () {
              return this.margin_1bqtbn$_0;
            },
            set: function (margin_0) {
              this.margin_1bqtbn$_0 = margin_0;
            }
          },
          backgroundColor: {
            get: function () {
              return this.backgroundColor_1bqtbn$_0;
            },
            set: function (backgroundColor_0) {
              this.backgroundColor_1bqtbn$_0 = backgroundColor_0;
            }
          },
          color: {
            get: function () {
              return this.color_1bqtbn$_0;
            },
            set: function (color_0) {
              this.color_1bqtbn$_0 = color_0;
            }
          },
          borderStyle: {
            get: function () {
              return this.borderStyle_1bqtbn$_0;
            },
            set: function (borderStyle_0) {
              this.borderStyle_1bqtbn$_0 = borderStyle_0;
            }
          },
          borderWidth: {
            get: function () {
              return this.borderWidth_1bqtbn$_0;
            },
            set: function (borderWidth_0) {
              this.borderWidth_1bqtbn$_0 = borderWidth_0;
            }
          },
          borderColor: {
            get: function () {
              return this.borderColor_1bqtbn$_0;
            },
            set: function (borderColor_0) {
              this.borderColor_1bqtbn$_0 = borderColor_0;
            }
          },
          borderRadius: {
            get: function () {
              return this.borderRadius_1bqtbn$_0;
            },
            set: function (borderRadius_0) {
              this.borderRadius_1bqtbn$_0 = borderRadius_0;
            }
          },
          boxShadow: {
            get: function () {
              return this.boxShadow_1bqtbn$_0;
            },
            set: function (boxShadow_0) {
              this.boxShadow_1bqtbn$_0 = boxShadow_0;
            }
          },
          outline: {
            get: function () {
              return this.outline_1bqtbn$_0;
            },
            set: function (outline_0) {
              this.outline_1bqtbn$_0 = outline_0;
            }
          }
        }),
        SelectableAction: Kotlin.createClass(function () {
          return [_.fg.beans.Action];
        }, function SelectableAction(label, enabled, icon_0, selected, shortcut, perform) {
          if (enabled === void 0)
            enabled = true;
          if (icon_0 === void 0)
            icon_0 = null;
          if (selected === void 0)
            selected = false;
          if (shortcut === void 0)
            shortcut = null;
          SelectableAction.baseInitializer.call(this, label, enabled, icon_0, shortcut, perform);
          var initialValue = selected;
          this.selected$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.SelectableAction.selected$f(this), initialValue);
        }, /** @lends _.fg.beans.SelectableAction.prototype */ {
          selected: {
            get: function () {
              return this.selected$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('selected'));
            },
            set: function (selected_0) {
              this.selected$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('selected'), selected_0);
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
              this$SelectableAction.notifyPropertyChanged_dgnimp$_0(prop, old, new_0);
            };
          }
        }),
        button: Kotlin.definePackage(null, /** @lends _.fg.beans.button */ {
          AbstractButton: Kotlin.createClass(function () {
            return [_.fg.beans.ActionBean, $module$elements.fg.elements.Button];
          }, function AbstractButton(action) {
            AbstractButton.baseInitializer.call(this);
            this.action_msbs76$_0 = action;
            this.hovered_msbs76$_0 = false;
            this.focused_msbs76$_0 = false;
            this.pressed_msbs76$_0 = false;
            this.label$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.AbstractButton.label$f);
            this.icon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.button.AbstractButton.icon$f(this));
            this.actionPropertyChangedHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.actionPropertyChangedHandler_msbs76$_0$f(this);
            this.clickHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.clickHandler_msbs76$_0$f(this);
            this.mouseEnterHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.mouseEnterHandler_msbs76$_0$f(this);
            this.mouseLeaveHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.mouseLeaveHandler_msbs76$_0$f(this);
            this.focusHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.focusHandler_msbs76$_0$f(this);
            this.blurHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.blurHandler_msbs76$_0$f(this);
            this.mouseDownHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.mouseDownHandler_msbs76$_0$f(action, this);
            this.mouseUpHandler_msbs76$_0 = _.fg.beans.button.AbstractButton.mouseUpHandler_msbs76$_0$f(this);
          }, /** @lends _.fg.beans.button.AbstractButton.prototype */ {
            action: {
              get: function () {
                return this.action_msbs76$_0;
              }
            },
            hovered: {
              get: function () {
                return this.hovered_msbs76$_0;
              },
              set: function (hovered_0) {
                this.hovered_msbs76$_0 = hovered_0;
              }
            },
            focused: {
              get: function () {
                return this.focused_msbs76$_0;
              },
              set: function (focused_0) {
                this.focused_msbs76$_0 = focused_0;
              }
            },
            pressed: {
              get: function () {
                return this.pressed_msbs76$_0;
              },
              set: function (pressed_0) {
                this.pressed_msbs76$_0 = pressed_0;
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
              this.renderIcon_j6jgko$_0(this.action.icon);
              this.renderLabel_b958ck$_0(this.action.label);
              this.renderDisabled_wk6cbn$_0(this.action.disabled);
            },
            didMount: function () {
              $module$elements.fg.elements.Button.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_msbs76$_0);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_msbs76$_0);
              $module$elements.fg.elements.onMouseEnter_9cq9y2$(this, this.mouseEnterHandler_msbs76$_0);
              $module$elements.fg.elements.onMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_msbs76$_0);
              $module$elements.fg.elements.onFocus_m2anqv$(this, this.focusHandler_msbs76$_0);
              $module$elements.fg.elements.onBlur_m2anqv$(this, this.blurHandler_msbs76$_0);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this, this.mouseDownHandler_msbs76$_0);
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this, this.mouseUpHandler_msbs76$_0);
            },
            willUnMount: function () {
              $module$elements.fg.elements.Button.prototype.willUnMount.call(this);
              $module$elements.fg.elements.unMouseEnter_9cq9y2$(this, this.mouseEnterHandler_msbs76$_0);
              $module$elements.fg.elements.unMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_msbs76$_0);
              $module$elements.fg.elements.unFocus_m2anqv$(this, this.focusHandler_msbs76$_0);
              $module$elements.fg.elements.unBlur_m2anqv$(this, this.blurHandler_msbs76$_0);
              $module$elements.fg.elements.unMouseDown_9cq9y2$(this, this.mouseDownHandler_msbs76$_0);
              $module$elements.fg.elements.unMouseUp_9cq9y2$(this, this.mouseUpHandler_msbs76$_0);
            },
            renderLabel_b958ck$_0: function (labelText) {
              if (labelText != null) {
                this.label.textContent = labelText;
                this.label.show();
              }
               else {
                this.label.hide();
              }
            },
            renderIcon_j6jgko$_0: function (icon) {
              if (icon == null) {
                this.icon.hide();
              }
               else {
                icon.apply_54c9de$(this.icon);
                this.icon.show();
              }
            },
            renderDisabled_wk6cbn$_0: function (disabled) {
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
            actionPropertyChangedHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (action, property, old, new_0) {
                var tmp$0;
                tmp$0 = property.name;
                if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('label', true).name))
                  this$AbstractButton.renderLabel_b958ck$_0(action.label);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('icon', true).name))
                  this$AbstractButton.renderIcon_j6jgko$_0(action.icon);
                else if (Kotlin.equals(tmp$0, Kotlin.getCallableRefForMemberProperty('enabled', true).name)) {
                  this$AbstractButton.renderDisabled_wk6cbn$_0(action.disabled);
                  if (action.enabled) {
                    this$AbstractButton.onEnabled();
                  }
                   else {
                    this$AbstractButton.onDisabled();
                  }
                }
              };
            },
            clickHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.onBeforeActionPerform();
                this$AbstractButton.action.perform_54c9de$(this$AbstractButton);
              };
            },
            mouseEnterHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.hovered = true;
                this$AbstractButton.toggleClass_ivxn3r$('hovered', true);
                this$AbstractButton.onHover();
              };
            },
            mouseLeaveHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.hovered = false;
                this$AbstractButton.toggleClass_ivxn3r$('hovered');
                this$AbstractButton.unHover();
              };
            },
            focusHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.focused = true;
                this$AbstractButton.toggleClass_ivxn3r$('focused', true);
                this$AbstractButton.onFocus();
              };
            },
            blurHandler_msbs76$_0$f: function (this$AbstractButton) {
              return function (it) {
                this$AbstractButton.focused = false;
                this$AbstractButton.toggleClass_ivxn3r$('focused');
                this$AbstractButton.unFocus();
              };
            },
            mouseDownHandler_msbs76$_0$f: function (closure$action, this$AbstractButton) {
              return function (event) {
                if (closure$action.enabled) {
                  this$AbstractButton.pressed = true;
                  this$AbstractButton.toggleClass_ivxn3r$('pressed', true);
                  this$AbstractButton.onPressed();
                }
              };
            },
            mouseUpHandler_msbs76$_0$f: function (this$AbstractButton) {
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
              this.margin_7521eb$_0 = '0';
              this.backgroundColor_7521eb$_0 = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
              this.borderStyle_7521eb$_0 = 'outset';
              this.borderWidth_7521eb$_0 = new $module$elements.fg.elements.Pixels(1.0);
              this.borderColor_7521eb$_0 = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#e4e4e4');
              this.borderRadius_7521eb$_0 = new $module$elements.fg.elements.Pixels(4.0);
              this.boxShadow_7521eb$_0 = 'none';
              this.hovered = new _.fg.beans.button.Button.ButtonStyle.f();
              this.disabled = new _.fg.beans.button.Button.ButtonStyle.f_0();
              this.pressed = new _.fg.beans.button.Button.ButtonStyle.f_1();
              this.focused = new _.fg.beans.button.Button.ButtonStyle.f_2();
            }, /** @lends _.fg.beans.button.Button.ButtonStyle.prototype */ {
              margin: {
                get: function () {
                  return this.margin_7521eb$_0;
                },
                set: function (margin_0) {
                  this.margin_7521eb$_0 = margin_0;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.backgroundColor_7521eb$_0;
                },
                set: function (backgroundColor_0) {
                  this.backgroundColor_7521eb$_0 = backgroundColor_0;
                }
              },
              borderStyle: {
                get: function () {
                  return this.borderStyle_7521eb$_0;
                },
                set: function (borderStyle_0) {
                  this.borderStyle_7521eb$_0 = borderStyle_0;
                }
              },
              borderWidth: {
                get: function () {
                  return this.borderWidth_7521eb$_0;
                },
                set: function (borderWidth_0) {
                  this.borderWidth_7521eb$_0 = borderWidth_0;
                }
              },
              borderColor: {
                get: function () {
                  return this.borderColor_7521eb$_0;
                },
                set: function (borderColor_0) {
                  this.borderColor_7521eb$_0 = borderColor_0;
                }
              },
              borderRadius: {
                get: function () {
                  return this.borderRadius_7521eb$_0;
                },
                set: function (borderRadius_0) {
                  this.borderRadius_7521eb$_0 = borderRadius_0;
                }
              },
              boxShadow: {
                get: function () {
                  return this.boxShadow_7521eb$_0;
                },
                set: function (boxShadow_0) {
                  this.boxShadow_7521eb$_0 = boxShadow_0;
                }
              }
            }, /** @lends _.fg.beans.button.Button.ButtonStyle */ {
              f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.cursor_rovmyf$_0 = 'pointer';
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f.prototype */ {
                cursor: {
                  get: function () {
                    return this.cursor_rovmyf$_0;
                  },
                  set: function (cursor_0) {
                    this.cursor_rovmyf$_0 = cursor_0;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f */ {
              }),
              f_0: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.cursor_st5la2$_0 = 'not-allowed';
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_0.prototype */ {
                cursor: {
                  get: function () {
                    return this.cursor_st5la2$_0;
                  },
                  set: function (cursor_0) {
                    this.cursor_st5la2$_0 = cursor_0;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_0 */ {
              }),
              f_1: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.backgroundColor_z8364e$_0 = new $module$elements.fg.style.colour.RgbColor(118, 178, 240);
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_1.prototype */ {
                backgroundColor: {
                  get: function () {
                    return this.backgroundColor_z8364e$_0;
                  },
                  set: function (backgroundColor_0) {
                    this.backgroundColor_z8364e$_0 = backgroundColor_0;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_1 */ {
              }),
              f_2: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.outline_c68m8j$_0 = 'none';
                this.borderColor_c68m8j$_0 = new $module$elements.fg.style.colour.RgbColor(144, 191, 240);
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_2.prototype */ {
                outline: {
                  get: function () {
                    return this.outline_c68m8j$_0;
                  },
                  set: function (outline_0) {
                    this.outline_c68m8j$_0 = outline_0;
                  }
                },
                borderColor: {
                  get: function () {
                    return this.borderColor_c68m8j$_0;
                  },
                  set: function (borderColor_0) {
                    this.borderColor_c68m8j$_0 = borderColor_0;
                  }
                }
              }, /** @lends _.fg.beans.button.Button.ButtonStyle.f_2 */ {
              })
            }),
            Button: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Button() {
              _.fg.beans.button.Button.Button.classSelector_q6hc5s$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-button');
              _.fg.beans.button.Button.Button.rule_q6hc5s$_0 = _.fg.beans.button.Button.Button.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.button.Button.Button);
            }, /** @lends _.fg.beans.button.Button.Button.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.button.Button.Button.classSelector_q6hc5s$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.button.Button.Button.rule_q6hc5s$_0;
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
            this.action_q923u8$_0 = action;
            this.actionPropertyChangedHandler_q923u8$_0 = _.fg.beans.button.ToggleButton.actionPropertyChangedHandler_q923u8$_0$f(this);
            this.previousBackgroundColor_q923u8$_0 = '';
          }, /** @lends _.fg.beans.button.ToggleButton.prototype */ {
            action: {
              get: function () {
                return this.action_q923u8$_0;
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
            renderSelected_2iqzmd$_0: function (selected) {
              if (selected) {
                this.previousBackgroundColor_q923u8$_0 = this._style.backgroundColor;
                this.addClass_61zpoe$('selected');
              }
               else {
                this.removeClass_61zpoe$('selected');
              }
            },
            didMount: function () {
              _.fg.beans.button.AbstractButton.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_q923u8$_0);
            },
            toggle: function () {
              this.onBeforeActionPerform();
              this.action.perform_54c9de$(this);
            }
          }, /** @lends _.fg.beans.button.ToggleButton */ {
            ToggleButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function ToggleButton() {
              _.fg.beans.button.ToggleButton.ToggleButton.classSelector_159g7k$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-toggle-button');
              _.fg.beans.button.ToggleButton.ToggleButton.rule_159g7k$_0 = _.fg.beans.button.ToggleButton.ToggleButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.button.ToggleButton.ToggleButton);
            }, /** @lends _.fg.beans.button.ToggleButton.ToggleButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.button.ToggleButton.ToggleButton.classSelector_159g7k$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.button.ToggleButton.ToggleButton.rule_159g7k$_0;
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
            actionPropertyChangedHandler_q923u8$_0$f: function (this$ToggleButton) {
              return function (action, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('selected', true).name))
                  this$ToggleButton.renderSelected_2iqzmd$_0(this$ToggleButton.action.selected);
              };
            }
          })
        }),
        deck: Kotlin.definePackage(null, /** @lends _.fg.beans.deck */ {
          Deck: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.Div];
          }, function Deck() {
            Deck.baseInitializer.call(this);
            this.deck_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          }, /** @lends _.fg.beans.deck.Deck.prototype */ {
            childAdded_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childAdded_sr04hg$.call(this, child);
              if (!Kotlin.isType(child, $module$elements.fg.elements.Element)) {
                throw new Kotlin.IllegalArgumentException('Only a Element can be added to a Deck');
              }
              this.deck_0.add_za3rmp$(child);
              if (this.deck_0.size > 1) {
                child.hide();
              }
               else {
                child.show();
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.deck.Deck.Deck.classSelector);
            },
            show_54c9de$: function (child) {
              var tmp$0;
              tmp$0 = this.childElements.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                if (child === element) {
                  element.show();
                }
                 else {
                  element.hide();
                }
              }
            }
          }, /** @lends _.fg.beans.deck.Deck */ {
            Deck: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Deck() {
              _.fg.beans.deck.Deck.Deck.classSelector_errx15$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-deck');
              _.fg.beans.deck.Deck.Deck.rule_errx15$_0 = _.fg.beans.deck.Deck.Deck.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.deck.Deck.Deck);
            }, /** @lends _.fg.beans.deck.Deck.Deck.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.deck.Deck.Deck.classSelector_errx15$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.deck.Deck.Deck.rule_errx15$_0;
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
            element._style.position = 'static';
            element._style.cssFloat = element.side === $module$elements.fg.base.Side.LEFT ? 'left' : 'right';
          },
          undock_ahjj8o$: function ($receiver) {
            $receiver._style.position = '';
            $receiver._style.cssFloat = '';
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
              set: function (side_0) {
                this.side$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('side'), side_0);
              }
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.drawer.Drawer.Drawer.classSelector);
              this.renderSide_i584r$_0(this.side);
            },
            renderSide_i584r$_0: function (side) {
              if (Kotlin.equals(side, $module$elements.fg.base.Side.LEFT))
                this._style.left = '0';
              else if (Kotlin.equals(side, $module$elements.fg.base.Side.RIGHT))
                this._style.right = '0';
            }
          }, /** @lends _.fg.beans.drawer.Drawer */ {
            Drawer: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Drawer() {
              _.fg.beans.drawer.Drawer.Drawer.classSelector_itekjz$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('drawer');
              _.fg.beans.drawer.Drawer.Drawer.rule_itekjz$_0 = _.fg.beans.drawer.Drawer.Drawer.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.drawer.Drawer.Drawer);
            }, /** @lends _.fg.beans.drawer.Drawer.Drawer.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.drawer.Drawer.Drawer.classSelector_itekjz$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.drawer.Drawer.Drawer.rule_itekjz$_0;
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
                this$Drawer.renderSide_i584r$_0(new_0);
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
          }, function IconI(icon_0) {
            if (icon_0 === void 0)
              icon_0 = null;
            IconI.baseInitializer.call(this);
            var initialValue = icon_0;
            this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.icon.IconI.icon$f(this), initialValue);
          }, /** @lends _.fg.beans.icon.IconI.prototype */ {
            icon: {
              get: function () {
                return this.icon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('icon'));
              },
              set: function (icon_0) {
                this.icon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('icon'), icon_0);
              }
            },
            render: function () {
              $module$elements.fg.elements.I.prototype.render.call(this);
              if (this.icon != null) {
                this.renderIcon_0(this.icon);
              }
            },
            renderIcon_0: function (icon_0) {
              _.fg.beans.icon.apply_gnxmu2$(icon_0, this);
            }
          }, /** @lends _.fg.beans.icon.IconI */ {
            icon$f: function (this$IconI) {
              return function (property, old, new_0) {
                this$IconI.renderIcon_0(new_0);
              };
            }
          })
        }),
        link: Kotlin.definePackage(null, /** @lends _.fg.beans.link */ {
          Anchor: Kotlin.createClass(function () {
            return [$module$elements.fg.elements.A];
          }, function Anchor$(link_0, target, useDisplay) {
            if (link_0 === void 0)
              link_0 = null;
            if (target === void 0)
              target = '_blank';
            if (useDisplay === void 0)
              useDisplay = true;
            Anchor$.baseInitializer.call(this);
            this.useDisplay = useDisplay;
            var initialValue = link_0;
            this.link$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.link.Anchor.link$f(this), initialValue);
            this.iconI$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.link.Anchor.iconI$f);
            this.onClickHandler_0 = _.fg.beans.link.Anchor.onClickHandler_0$f;
            this._target = target;
          }, /** @lends _.fg.beans.link.Anchor.prototype */ {
            link: {
              get: function () {
                return this.link$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('link'));
              },
              set: function (link_0) {
                this.link$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('link'), link_0);
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
              this.renderLink_0(this.link);
            },
            didMount: function () {
              $module$elements.fg.elements.A.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.onClickHandler_0);
            },
            renderLink_0: function (link_0) {
              var tmp$1, tmp$2;
              if (link_0 == null) {
                this._style.cursor = 'auto';
              }
               else {
                this._style.cursor = 'pointer';
                if (Kotlin.isType(link_0, _.fg.beans.link.ExternalLink)) {
                  this._href = (tmp$2 = (tmp$1 = link_0.url) != null ? tmp$1.toString() : null) != null ? tmp$2 : null;
                  if (this.useDisplay) {
                    this.textContent = link_0.display;
                    this.renderIcon_0(link_0);
                  }
                }
                 else if (Kotlin.isType(link_0, _.fg.beans.link.LocalLink)) {
                  this._href = link_0.path.toString();
                  if (this.useDisplay) {
                    this.textContent = link_0.display;
                    this.renderIcon_0(link_0);
                  }
                }
              }
            },
            renderIcon_0: function (link_0) {
              if (link_0.icon != null) {
                this.iconI.icon = link_0.icon;
                this.appendChild_sr04hg$(this.iconI);
              }
               else if (this.hasChild_sr04hg$(this.iconI)) {
                this.removeChild_sr04hg$(this.iconI);
              }
            }
          }, /** @lends _.fg.beans.link.Anchor */ {
            Anchor: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Anchor$() {
              _.fg.beans.link.Anchor.Anchor.classSelector_9zo6vc$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-anchor');
              _.fg.beans.link.Anchor.Anchor.rule_9zo6vc$_0 = _.fg.beans.link.Anchor.Anchor.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.link.Anchor.Anchor);
            }, /** @lends _.fg.beans.link.Anchor.Anchor.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.link.Anchor.Anchor.classSelector_9zo6vc$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.link.Anchor.Anchor.rule_9zo6vc$_0;
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
                this$Anchor.renderLink_0(new_0);
              };
            },
            iconI$f: function () {
              return new _.fg.beans.icon.IconI();
            },
            onClickHandler_0$f: function (it) {
            }
          }),
          ExternalLink: Kotlin.createClass(function () {
            return [_.fg.beans.link.Link];
          }, function ExternalLink(url, display, icon_0) {
            if (url === void 0)
              url = null;
            if (icon_0 === void 0)
              icon_0 = _.fg.beans.icon.FontAwesomeIcons.external_link_629h0h$();
            ExternalLink.baseInitializer.call(this, display, icon_0);
            this.url = url;
          }, /** @lends _.fg.beans.link.ExternalLink.prototype */ {
            compareTo_za3rmp$: function (other) {
              return $module$elements.fg.base.CompareTo.nullSafe_wn2jw4$(this.url, other.url);
            }
          }),
          Link: Kotlin.createClass(function () {
            return [Kotlin.Comparable];
          }, function Link$(display, icon_0) {
            this.display = display;
            this.icon = icon_0;
          }),
          LocalLink: Kotlin.createClass(function () {
            return [_.fg.beans.link.Link];
          }, function LocalLink(path, display, icon_0) {
            if (icon_0 === void 0)
              icon_0 = _.fg.beans.icon.FontAwesomeIcons.link_629h0h$();
            LocalLink.baseInitializer.call(this, display, icon_0);
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
            this.beforePerformingMenuItemActionListeners_i0djac$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.afterPerformingMenuItemActionListeners_i0djac$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.beforePerformingMenuItemActionHandler_i0djac$_0 = _.fg.beans.menu.Menu.beforePerformingMenuItemActionHandler_i0djac$_0$f(this);
            this.afterPerformingMenuItemActionHandler_i0djac$_0 = _.fg.beans.menu.Menu.afterPerformingMenuItemActionHandler_i0djac$_0$f(this);
            var initialValue = label;
            this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.menu.Menu.label$f, initialValue);
            var initialValue_0 = shortcut;
            this.shortcut$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.beans.menu.Menu.shortcut$f, initialValue_0);
          }, /** @lends _.fg.beans.menu.Menu.prototype */ {
            label: {
              get: function () {
                return this.label$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('label'));
              },
              set: function (label_0) {
                this.label$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('label'), label_0);
              }
            },
            shortcut: {
              get: function () {
                return this.shortcut$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('shortcut'));
              },
              set: function (shortcut_0) {
                this.shortcut$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut_0);
              }
            },
            onBeforePerformingMenuItemAction_bakdqu$: function (listener) {
              this.beforePerformingMenuItemActionListeners_i0djac$_0.add_za3rmp$(listener);
            },
            unBeforePerformingMenuItemAction_bakdqu$: function (listener) {
              this.beforePerformingMenuItemActionListeners_i0djac$_0.remove_za3rmp$(listener);
            },
            onAfterPerformingMenuItemAction_bakdqu$: function (listener) {
              this.afterPerformingMenuItemActionListeners_i0djac$_0.add_za3rmp$(listener);
            },
            unAfterPerformingMenuItemAction_bakdqu$: function (listener) {
              this.afterPerformingMenuItemActionListeners_i0djac$_0.remove_za3rmp$(listener);
            },
            render: function () {
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.Menu.Menu.classSelector);
            },
            childAdded_sr04hg$: function (child) {
              $module$elements.fg.elements.Div.prototype.childAdded_sr04hg$.call(this, child);
              if (Kotlin.isType(child, _.fg.beans.menu.MenuItem)) {
                child.onBeforePerformingAction_k3q9i7$(this.beforePerformingMenuItemActionHandler_i0djac$_0);
                child.onAfterPerformingAction_k3q9i7$(this.afterPerformingMenuItemActionHandler_i0djac$_0);
              }
            }
          }, /** @lends _.fg.beans.menu.Menu */ {
            Menu: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function Menu() {
              _.fg.beans.menu.Menu.Menu.classSelector_2kkkw3$_0 = new $module$elements.fg.elements.ClassSelector('fg-bn-menu');
              _.fg.beans.menu.Menu.Menu.rule_2kkkw3$_0 = _.fg.beans.menu.Menu.Menu.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.Menu.Menu);
            }, /** @lends _.fg.beans.menu.Menu.Menu.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.Menu.Menu.classSelector_2kkkw3$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.Menu.Menu.rule_2kkkw3$_0;
                }
              }
            }, /** @lends _.fg.beans.menu.Menu.Menu */ {
              rule$f: function () {
                this.display = 'inline-block';
                this.paddingTop = '4px';
                this.paddingBottom = '4px';
                this.backgroundColor = $module$elements.fg.style.colour.RgbColor.Factory.WHITE.toString();
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.Menu.Menu;
            },
            beforePerformingMenuItemActionHandler_i0djac$_0$f: function (this$Menu) {
              return function (action) {
                var tmp$0;
                tmp$0 = this$Menu.beforePerformingMenuItemActionListeners_i0djac$_0.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element(action, this$Menu);
                }
              };
            },
            afterPerformingMenuItemActionHandler_i0djac$_0$f: function (this$Menu) {
              return function (action) {
                var tmp$0;
                tmp$0 = this$Menu.afterPerformingMenuItemActionListeners_i0djac$_0.iterator();
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
            this.menuButtonByMenu_0 = Kotlin.kotlin.collections.linkedMapOf_eoa9s7$([]);
            this.beforePerformingMenuItemActionHandler_0 = _.fg.beans.menu.MenuBar.beforePerformingMenuItemActionHandler_0$f;
            this.afterPerformingMenuItemActionHandler_0 = _.fg.beans.menu.MenuBar.afterPerformingMenuItemActionHandler_0$f(this);
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
                this.menuButtonByMenu_0.put_wn2jw4$(child, menuButton);
                child.onBeforePerformingMenuItemAction_bakdqu$(this.beforePerformingMenuItemActionHandler_0);
                child.onAfterPerformingMenuItemAction_bakdqu$(this.afterPerformingMenuItemActionHandler_0);
                $module$elements.fg.elements.onMouseEnter_9cq9y2$(menuButton, _.fg.beans.menu.MenuBar.childAdded_sr04hg$f_0(menuButton, this, child));
              }
            },
            anyMenuOpen_0: function () {
              var tmp$0;
              tmp$0 = this.menuButtonByMenu_0.values.iterator();
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
                this.menuButtonByMenu_0.remove_za3rmp$(child);
              }
            },
            closeOthers_0: function (exception) {
              var tmp$0;
              tmp$0 = this.childElements.iterator();
              while (tmp$0.hasNext()) {
                var child = tmp$0.next();
                if (!Kotlin.equals(child, exception) && Kotlin.isType(child, _.fg.beans.menu.Menu)) {
                  this.closeMenu_0(child);
                }
              }
            },
            openMenu_0: function (menu_0) {
              var tmp$0;
              this.closeOthers_0(menu_0);
              menu_0.show();
              var menuButton = (tmp$0 = this.menuButtonByMenu_0.get_za3rmp$(menu_0)) != null ? tmp$0 : Kotlin.throwNPE();
              var left = menuButton.boundingClientRect.left - $module$elements.fg.elements.get_px_pdl1w0$($module$elements.fg.elements.get_computedStyle_gobym4$($module$elements.fg.elements.BODY).marginLeft).value;
              menu_0._style.top = menuButton.boundingClientRect.height.toString() + 'px';
              menu_0._style.left = left.toString() + 'px';
            },
            closeMenu_0: function (menu_0) {
              var tmp$0, tmp$1;
              menu_0.hide();
              (tmp$1 = (tmp$0 = this.menuButtonByMenu_0.get_za3rmp$(menu_0)) != null ? tmp$0.action : null) != null ? (tmp$1.selected = false) : null;
            }
          }, /** @lends _.fg.beans.menu.MenuBar */ {
            childAdded_sr04hg$f: function (closure$child, this$MenuBar) {
              return function (actionPerform) {
                var tmp$0;
                Kotlin.isType(tmp$0 = actionPerform.action, _.fg.beans.SelectableAction) ? tmp$0 : Kotlin.throwCCE();
                if (actionPerform.action.selected) {
                  this$MenuBar.openMenu_0(closure$child);
                }
                 else {
                  closure$child.hide();
                }
              };
            },
            childAdded_sr04hg$f_0: function (closure$menuButton, this$MenuBar, closure$child) {
              return function (it) {
                console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '].onMouseEnter');
                var anyMenuOpen = this$MenuBar.anyMenuOpen_0();
                console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '] anyMenuOpen = ' + anyMenuOpen);
                if (anyMenuOpen) {
                  this$MenuBar.openMenu_0(closure$child);
                  closure$menuButton.action.selected = true;
                }
              };
            },
            MenuBar: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuBar() {
              _.fg.beans.menu.MenuBar.MenuBar.classSelector_fhw95j$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-menu-bar');
              _.fg.beans.menu.MenuBar.MenuBar.rule_fhw95j$_0 = _.fg.beans.menu.MenuBar.MenuBar.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuBar.MenuBar);
            }, /** @lends _.fg.beans.menu.MenuBar.MenuBar.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuBar.MenuBar.classSelector_fhw95j$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuBar.MenuBar.rule_fhw95j$_0;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuBar.MenuBar */ {
              f: function () {
                this.position = 'absolute';
                this.border = '1px solid #ccc';
              },
              rule$f: function () {
                this.position = 'relative';
                $module$elements.fg.style.child_lij791$(this, _.fg.beans.menu.Menu.Menu.classSelector, _.fg.beans.menu.MenuBar.MenuBar.f);
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuBar.MenuBar;
            },
            beforePerformingMenuItemActionHandler_0$f: function (action, menu_0) {
            },
            afterPerformingMenuItemActionHandler_0$f: function (this$MenuBar) {
              return function (action, menu_0) {
                this$MenuBar.closeMenu_0(menu_0);
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
              _.fg.beans.menu.MenuButton.MenuButton.classSelector_6dzver$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('fg-bn-menu-button');
              _.fg.beans.menu.MenuButton.MenuButton.rule_6dzver$_0 = _.fg.beans.menu.MenuButton.MenuButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuButton.MenuButton);
            }, /** @lends _.fg.beans.menu.MenuButton.MenuButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuButton.MenuButton.classSelector_6dzver$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuButton.MenuButton.rule_6dzver$_0;
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
            this.action_iiuj5$_0 = action;
            this.hovered_iiuj5$_0 = false;
            this.focused_iiuj5$_0 = false;
            this.pressed_iiuj5$_0 = false;
            this.beforePerformingActionListeners_iiuj5$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.afterPerformingActionListeners_iiuj5$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.selectedIcon$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.selectedIcon_iiuj5$_0$f);
            this.primaryText$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.primaryText_iiuj5$_0$f);
            this.secondaryTextSpan$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.secondaryTextSpan_iiuj5$_0$f);
            this.secondaryText$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.beans.menu.MenuItem.secondaryText_iiuj5$_0$f(this));
            this.actionPropertyChangedHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.actionPropertyChangedHandler_iiuj5$_0$f(this);
            this.clickHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.clickHandler_iiuj5$_0$f(this, action);
            this.mouseEnterHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.mouseEnterHandler_iiuj5$_0$f(this);
            this.mouseLeaveHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.mouseLeaveHandler_iiuj5$_0$f(this);
            this.focusHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.focusHandler_iiuj5$_0$f(this);
            this.blurHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.blurHandler_iiuj5$_0$f(this);
            this.mouseDownHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.mouseDownHandler_iiuj5$_0$f(action, this);
            this.mouseUpHandler_iiuj5$_0 = _.fg.beans.menu.MenuItem.mouseUpHandler_iiuj5$_0$f(this);
            this.menuItemStyle = new _.fg.beans.menu.MenuItem.Style();
          }, /** @lends _.fg.beans.menu.MenuItem.prototype */ {
            action: {
              get: function () {
                return this.action_iiuj5$_0;
              }
            },
            hovered: {
              get: function () {
                return this.hovered_iiuj5$_0;
              },
              set: function (hovered_0) {
                this.hovered_iiuj5$_0 = hovered_0;
              }
            },
            focused: {
              get: function () {
                return this.focused_iiuj5$_0;
              },
              set: function (focused_0) {
                this.focused_iiuj5$_0 = focused_0;
              }
            },
            pressed: {
              get: function () {
                return this.pressed_iiuj5$_0;
              },
              set: function (pressed_0) {
                this.pressed_iiuj5$_0 = pressed_0;
              }
            },
            selectedIcon_iiuj5$_0: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.selectedIcon$delegate, this, new Kotlin.PropertyMetadata('selectedIcon'));
              }
            },
            primaryText_iiuj5$_0: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.primaryText$delegate, this, new Kotlin.PropertyMetadata('primaryText'));
              }
            },
            secondaryTextSpan_iiuj5$_0: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.secondaryTextSpan$delegate, this, new Kotlin.PropertyMetadata('secondaryTextSpan'));
              }
            },
            secondaryText_iiuj5$_0: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.secondaryText$delegate, this, new Kotlin.PropertyMetadata('secondaryText'));
              }
            },
            onHover: function () {
              this.renderColor_iiuj5$_0();
            },
            unHover: function () {
              this.renderColor_iiuj5$_0();
            },
            onFocus: function () {
              this.renderColor_iiuj5$_0();
            },
            unFocus: function () {
              this.renderColor_iiuj5$_0();
            },
            onPressed: function () {
              this.renderColor_iiuj5$_0();
            },
            unPressed: function () {
              this.renderColor_iiuj5$_0();
            },
            onEnabled: function () {
              this.renderColor_iiuj5$_0();
            },
            onDisabled: function () {
              this.renderColor_iiuj5$_0();
            },
            render: function () {
              var tmp$0;
              $module$elements.fg.elements.Div.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.menu.MenuItem.MenuItem.classSelector);
              this._tabindex = '0';
              if (Kotlin.isType(this.action, _.fg.beans.SelectableAction)) {
                var action = Kotlin.isType(tmp$0 = this.action, _.fg.beans.SelectableAction) ? tmp$0 : Kotlin.throwCCE();
                this.appendChild_sr04hg$(this.selectedIcon_iiuj5$_0);
                this.renderSelected_f058yc$_0(action.selected);
              }
              this.appendChild_sr04hg$(this.primaryText_iiuj5$_0);
              this.appendChild_sr04hg$(this.secondaryText_iiuj5$_0);
              this.primaryText_iiuj5$_0.textContent = this.action.label;
              this.renderShortcut_4fjyxg$_0(this.action.shortcut);
              this.renderDisabled_f058yc$_0(this.action.disabled);
            },
            renderShortcut_4fjyxg$_0: function (key) {
              var tmp$0;
              this.secondaryTextSpan_iiuj5$_0.removeChildren();
              if (key != null) {
                tmp$0 = key.modifiers.list.iterator();
                while (tmp$0.hasNext()) {
                  var modifier = tmp$0.next();
                  if (modifier === $module$elements.fg.keyboard.Modifier.meta) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u2318'));
                    }
                     else {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else if (modifier === $module$elements.fg.keyboard.Modifier.shift) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u21E7'));
                    }
                     else {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else if (modifier === $module$elements.fg.keyboard.Modifier.alt) {
                    if ($module$elements.fg.base.OSDetector.detected === $module$elements.fg.base.OS.MAC) {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text('\u2325'));
                    }
                     else {
                      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                    }
                  }
                   else {
                    this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text(modifier.name));
                  }
                }
                this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new $module$elements.fg.elements.Text(key.key.toUpperCase()));
              }
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              this.action.onPropertyChanged_uamkrm$(this.actionPropertyChangedHandler_iiuj5$_0);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_iiuj5$_0);
              $module$elements.fg.elements.onMouseEnter_9cq9y2$(this, this.mouseEnterHandler_iiuj5$_0);
              $module$elements.fg.elements.onMouseLeave_9cq9y2$(this, this.mouseLeaveHandler_iiuj5$_0);
              $module$elements.fg.elements.onFocus_m2anqv$(this, this.focusHandler_iiuj5$_0);
              $module$elements.fg.elements.onBlur_m2anqv$(this, this.blurHandler_iiuj5$_0);
              $module$elements.fg.elements.onMouseDown_9cq9y2$(this, this.mouseDownHandler_iiuj5$_0);
              $module$elements.fg.elements.onMouseUp_9cq9y2$(this, this.mouseUpHandler_iiuj5$_0);
            },
            renderSelected_f058yc$_0: function (selected) {
              if (selected) {
                this.addClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
                this.selectedIcon_iiuj5$_0._style.opacity = '1';
              }
               else {
                this.removeClass_bx842b$(_.fg.beans.SelectableAction.Statics.selectedSelector);
                this.selectedIcon_iiuj5$_0._style.opacity = '0';
              }
            },
            renderDisabled_f058yc$_0: function (disabled) {
              if (disabled) {
                this.toggleClass_ivxn3r$(_.fg.beans.menu.MenuItem.MenuItem.DISABLED.value, true);
              }
               else {
                this.toggleClass_ivxn3r$(_.fg.beans.menu.MenuItem.MenuItem.DISABLED.value);
              }
            },
            onBeforePerformingAction_k3q9i7$: function (listener) {
              this.beforePerformingActionListeners_iiuj5$_0.add_za3rmp$(listener);
            },
            unBeforePerformingAction_k3q9i7$: function (listener) {
              this.beforePerformingActionListeners_iiuj5$_0.remove_za3rmp$(listener);
            },
            onAfterPerformingAction_k3q9i7$: function (listener) {
              this.afterPerformingActionListeners_iiuj5$_0.add_za3rmp$(listener);
            },
            unAfterPerformingAction_k3q9i7$: function (listener) {
              this.afterPerformingActionListeners_iiuj5$_0.remove_za3rmp$(listener);
            },
            renderColor_iiuj5$_0: function () {
              if (this.action.enabled) {
                if (this.pressed) {
                  this.style.color = this.menuItemStyle.pressed.color;
                  this.style.backgroundColor = this.menuItemStyle.pressed.backgroundColor;
                }
                 else if (this.focused) {
                  this.style.color = this.menuItemStyle.focused.color;
                  this.style.backgroundColor = this.menuItemStyle.focused.backgroundColor;
                }
                 else if (this.hovered) {
                  this.style.color = this.menuItemStyle.hovered.color;
                  this.style.backgroundColor = this.menuItemStyle.hovered.backgroundColor;
                }
                 else {
                  this.style.color = this.menuItemStyle.color;
                  this.style.backgroundColor = this.menuItemStyle.backgroundColor;
                }
              }
               else {
                this.style.color = this.menuItemStyle.disabled.color;
                this.style.backgroundColor = this.menuItemStyle.disabled.backgroundColor;
              }
            }
          }, /** @lends _.fg.beans.menu.MenuItem */ {
            Style: Kotlin.createClass(function () {
              return [_.fg.beans.ElementStyle];
            }, function Style() {
              Style.baseInitializer.call(this);
              this.color_lbh9n2$_0 = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
              this.backgroundColor_lbh9n2$_0 = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
              this.pressed = new _.fg.beans.menu.MenuItem.Style.f();
              this.hovered = new _.fg.beans.menu.MenuItem.Style.f_0();
              this.focused = new _.fg.beans.menu.MenuItem.Style.f_1();
              this.disabled = new _.fg.beans.menu.MenuItem.Style.f_2();
            }, /** @lends _.fg.beans.menu.MenuItem.Style.prototype */ {
              color: {
                get: function () {
                  return this.color_lbh9n2$_0;
                },
                set: function (color_0) {
                  this.color_lbh9n2$_0 = color_0;
                }
              },
              backgroundColor: {
                get: function () {
                  return this.backgroundColor_lbh9n2$_0;
                },
                set: function (backgroundColor_0) {
                  this.backgroundColor_lbh9n2$_0 = backgroundColor_0;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuItem.Style */ {
              f: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.color_yz2c2l$_0 = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
                this.backgroundColor_yz2c2l$_0 = new $module$elements.fg.style.colour.RgbColor(153, 153, 153, 0.2);
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f.prototype */ {
                color: {
                  get: function () {
                    return this.color_yz2c2l$_0;
                  },
                  set: function (color_0) {
                    this.color_yz2c2l$_0 = color_0;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.backgroundColor_yz2c2l$_0;
                  },
                  set: function (backgroundColor_0) {
                    this.backgroundColor_yz2c2l$_0 = backgroundColor_0;
                  }
                }
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f */ {
              }),
              f_0: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.color_siu6qk$_0 = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
                this.backgroundColor_siu6qk$_0 = new $module$elements.fg.style.colour.RgbColor(153, 153, 153, 0.2);
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_0.prototype */ {
                color: {
                  get: function () {
                    return this.color_siu6qk$_0;
                  },
                  set: function (color_0) {
                    this.color_siu6qk$_0 = color_0;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.backgroundColor_siu6qk$_0;
                  },
                  set: function (backgroundColor_0) {
                    this.backgroundColor_siu6qk$_0 = backgroundColor_0;
                  }
                }
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_0 */ {
              }),
              f_1: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.color_d0760o$_0 = $module$elements.fg.style.colour.RgbColor.Factory.BLACK;
                this.backgroundColor_d0760o$_0 = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_1.prototype */ {
                color: {
                  get: function () {
                    return this.color_d0760o$_0;
                  },
                  set: function (color_0) {
                    this.color_d0760o$_0 = color_0;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.backgroundColor_d0760o$_0;
                  },
                  set: function (backgroundColor_0) {
                    this.backgroundColor_d0760o$_0 = backgroundColor_0;
                  }
                }
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_1 */ {
              }),
              f_2: Kotlin.createClass(function () {
                return [_.fg.beans.ElementStyle];
              }, function $fun() {
                $fun.baseInitializer.call(this);
                this.color_30ek1r$_0 = $module$elements.fg.style.colour.RgbColor.Factory.from_61zpoe$('#909090');
                this.backgroundColor_30ek1r$_0 = $module$elements.fg.style.colour.RgbColor.Factory.WHITE;
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_2.prototype */ {
                color: {
                  get: function () {
                    return this.color_30ek1r$_0;
                  },
                  set: function (color_0) {
                    this.color_30ek1r$_0 = color_0;
                  }
                },
                backgroundColor: {
                  get: function () {
                    return this.backgroundColor_30ek1r$_0;
                  },
                  set: function (backgroundColor_0) {
                    this.backgroundColor_30ek1r$_0 = backgroundColor_0;
                  }
                }
              }, /** @lends _.fg.beans.menu.MenuItem.Style.f_2 */ {
              })
            }),
            MenuItem: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function MenuItem() {
              _.fg.beans.menu.MenuItem.MenuItem.DISABLED = $module$elements.fg.elements.toClassSelector_pdl1w0$('disabled');
              _.fg.beans.menu.MenuItem.MenuItem.classSelector_w0w55p$_0 = new $module$elements.fg.elements.ClassSelector('fg-bn-menu-item');
              _.fg.beans.menu.MenuItem.MenuItem.rule_w0w55p$_0 = _.fg.beans.menu.MenuItem.MenuItem.rule$f(_.fg.beans.menu.MenuItem.MenuItem);
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.menu.MenuItem.MenuItem);
            }, /** @lends _.fg.beans.menu.MenuItem.MenuItem.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.menu.MenuItem.MenuItem.classSelector_w0w55p$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.menu.MenuItem.MenuItem.rule_w0w55p$_0;
                }
              }
            }, /** @lends _.fg.beans.menu.MenuItem.MenuItem */ {
              f: function () {
                this.marginRight = '24px';
                this.marginLeft = '0px';
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
                this.outline = 'none';
              },
              f_3: function () {
                this.cursor = 'not-allowed';
              },
              rule$f: function (this$MenuItem$) {
                return function () {
                  this.cursor = 'pointer';
                  this.paddingLeft = '8px';
                  this.paddingRight = '24px';
                  this.textAlign = 'left';
                  this.display = 'flex';
                  this.flexWrap = 'nowrap';
                  this.flexDirection = 'row';
                  this.alignItems = 'center';
                  this.fontSize = '15px';
                  $module$elements.fg.style.child_l73siq$(this, '.selected-icon', _.fg.beans.menu.MenuItem.MenuItem.f);
                  $module$elements.fg.style.child_l73siq$(this, '.primary-text', _.fg.beans.menu.MenuItem.MenuItem.f_0);
                  $module$elements.fg.style.child_l73siq$(this, '.secondary-text', _.fg.beans.menu.MenuItem.MenuItem.f_1);
                  $module$elements.fg.style.focus_i5tde3$(this, _.fg.beans.menu.MenuItem.MenuItem.f_2);
                  $module$elements.fg.style.and_dbehhi$(this, this$MenuItem$.DISABLED, _.fg.beans.menu.MenuItem.MenuItem.f_3);
                };
              }
            }),
            object_initializer$: function () {
              _.fg.beans.menu.MenuItem.MenuItem;
            },
            selectedIcon_iiuj5$_0$f: function () {
              var iconI = new _.fg.beans.icon.IconI();
              iconI.icon = _.fg.beans.icon.FontAwesomeIcons.check_629h0h$();
              iconI.addClass_61zpoe$('selected-icon');
              return iconI;
            },
            primaryText_iiuj5$_0$f: function () {
              var span = new $module$elements.fg.elements.Span();
              span.addClass_61zpoe$('primary-text');
              return span;
            },
            secondaryTextSpan_iiuj5$_0$f: function () {
              var span = new $module$elements.fg.elements.Span();
              return span;
            },
            secondaryText_iiuj5$_0$f: function (this$MenuItem) {
              return function () {
                var div = new $module$elements.fg.elements.Div();
                div.addClass_61zpoe$('secondary-text');
                div.appendChild_sr04hg$(this$MenuItem.secondaryTextSpan_iiuj5$_0);
                return div;
              };
            },
            actionPropertyChangedHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (action, property, old, new_0) {
                if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('label', true).name)) {
                  this$MenuItem.primaryText_iiuj5$_0.textContent = action.label;
                }
                 else if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('shortcut', true).name)) {
                  this$MenuItem.renderShortcut_4fjyxg$_0(action.shortcut);
                }
                 else if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('enabled', true).name)) {
                  this$MenuItem.renderDisabled_f058yc$_0(action.disabled);
                  if (action.enabled) {
                    this$MenuItem.onEnabled();
                  }
                   else {
                    this$MenuItem.onDisabled();
                  }
                }
                if (Kotlin.isType(action, _.fg.beans.SelectableAction)) {
                  if (Kotlin.equals(property.name, Kotlin.getCallableRefForMemberProperty('selected', true).name)) {
                    this$MenuItem.renderSelected_f058yc$_0(action.selected);
                  }
                }
              };
            },
            clickHandler_iiuj5$_0$f: function (this$MenuItem, closure$action) {
              return function (it) {
                var tmp$0;
                tmp$0 = this$MenuItem.beforePerformingActionListeners_iiuj5$_0.iterator();
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
                tmp$1 = this$MenuItem.afterPerformingActionListeners_iiuj5$_0.iterator();
                while (tmp$1.hasNext()) {
                  var element_0 = tmp$1.next();
                  element_0(closure$action);
                }
              };
            },
            mouseEnterHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (it) {
                this$MenuItem.hovered = true;
                this$MenuItem.toggleClass_ivxn3r$('hovered', true);
                this$MenuItem.onHover();
              };
            },
            mouseLeaveHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (it) {
                this$MenuItem.hovered = false;
                this$MenuItem.toggleClass_ivxn3r$('hovered');
                this$MenuItem.unHover();
              };
            },
            focusHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (it) {
                this$MenuItem.focused = true;
                this$MenuItem.toggleClass_ivxn3r$('focused', true);
                this$MenuItem.onFocus();
              };
            },
            blurHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (it) {
                this$MenuItem.focused = false;
                this$MenuItem.toggleClass_ivxn3r$('focused');
                this$MenuItem.unFocus();
              };
            },
            mouseDownHandler_iiuj5$_0$f: function (closure$action, this$MenuItem) {
              return function (event) {
                if (closure$action.enabled) {
                  this$MenuItem.pressed = true;
                  this$MenuItem.toggleClass_ivxn3r$('pressed', true);
                  this$MenuItem.onPressed();
                }
              };
            },
            mouseUpHandler_iiuj5$_0$f: function (this$MenuItem) {
              return function (event) {
                this$MenuItem.pressed = false;
                this$MenuItem.toggleClass_ivxn3r$('pressed');
                this$MenuItem.unPressed();
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
            this.checkedHandler_ah20nj$_0 = _.fg.beans.radio.LabelledRadioButton.checkedHandler_ah20nj$_0$f(this);
            this.clickHandler_ah20nj$_0 = _.fg.beans.radio.LabelledRadioButton.clickHandler_ah20nj$_0$f(this);
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
              set: function (checkedIcon_0) {
                this.checkedIcon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('checkedIcon'), checkedIcon_0);
              }
            },
            unCheckedIcon: {
              get: function () {
                return this.unCheckedIcon$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('unCheckedIcon'));
              },
              set: function (unCheckedIcon_0) {
                this.unCheckedIcon$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('unCheckedIcon'), unCheckedIcon_0);
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
              set: function (labelText_0) {
                this.labelText$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('labelText'), labelText_0);
              }
            },
            render: function () {
              this.addClass_bx842b$(_.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.classSelector);
              this.appendChild_sr04hg$(this.radioButton);
              this.appendChild_sr04hg$(this.iconI);
              this.appendChild_sr04hg$(this.label);
              this.renderLabel_3cv3ch$_0(this.labelText);
            },
            didMount: function () {
              $module$elements.fg.elements.Div.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this.label, this.clickHandler_ah20nj$_0);
              $module$elements.fg.elements.onClick_m2anqv$(this.iconI, this.clickHandler_ah20nj$_0);
              this.radioButton.onChecked_ra2fzg$(this.checkedHandler_ah20nj$_0);
            },
            renderLabel_3cv3ch$_0: function (labelText) {
              if (labelText != null) {
                this.label.textContent = labelText;
                this.label.show();
              }
               else {
                this.label.removeChildren();
                this.label.hide();
              }
            },
            renderChecked_us76e$_0: function (checked) {
              if (this.checkedIcon != null && this.unCheckedIcon != null) {
                this.radioButton._style.opacity = '0';
                this.iconI.show();
                this.iconI.icon = checked ? this.checkedIcon : this.unCheckedIcon;
              }
               else {
                this.radioButton._style.opacity = '';
                this.iconI.hide();
              }
            }
          }, /** @lends _.fg.beans.radio.LabelledRadioButton */ {
            LabelledRadioButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function LabelledRadioButton() {
              _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.classSelector_rqspyf$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('bn-labelled-radio-button');
              _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.rule_rqspyf$_0 = _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.radio.LabelledRadioButton.LabelledRadioButton);
            }, /** @lends _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.classSelector_rqspyf$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.radio.LabelledRadioButton.LabelledRadioButton.rule_rqspyf$_0;
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
                this$LabelledRadioButton.renderChecked_us76e$_0(this$LabelledRadioButton.radioButton.checked);
              };
            },
            unCheckedIcon$f: function (this$LabelledRadioButton) {
              return function (property, old, new_0) {
                this$LabelledRadioButton.renderChecked_us76e$_0(this$LabelledRadioButton.radioButton.checked);
              };
            },
            iconI$f: function (closure$unCheckedIcon) {
              return function () {
                var el = new _.fg.beans.icon.IconI(closure$unCheckedIcon);
                el._style.left = '-1em';
                el._style.position = 'relative';
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
                this$LabelledRadioButton.renderLabel_3cv3ch$_0(new_0);
              };
            },
            checkedHandler_ah20nj$_0$f: function (this$LabelledRadioButton) {
              return function (checked) {
                this$LabelledRadioButton.renderChecked_us76e$_0(checked);
              };
            },
            clickHandler_ah20nj$_0$f: function (this$LabelledRadioButton) {
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
            this.checkedListeners_4r7lns$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.clickHandler_4r7lns$_0 = _.fg.beans.radio.RadioButton.clickHandler_4r7lns$_0$f(this);
          }, /** @lends _.fg.beans.radio.RadioButton.prototype */ {
            checked: {
              get: function () {
                return this.checked$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('checked'));
              },
              set: function (checked_0) {
                this.checked$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('checked'), checked_0);
              }
            },
            notifyCheckedListeners_r4at71$_0: function (checked) {
              var tmp$0;
              tmp$0 = this.checkedListeners_4r7lns$_0.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                element(checked);
              }
            },
            onChecked_ra2fzg$: function (listener) {
              this.checkedListeners_4r7lns$_0.add_za3rmp$(listener);
            },
            unChecked_ra2fzg$: function (listener) {
              this.checkedListeners_4r7lns$_0.remove_za3rmp$(listener);
            },
            toggle: function () {
              var newState = !this.checked;
              this.checked = newState;
            },
            render: function () {
              $module$elements.fg.elements.InputRadio.prototype.render.call(this);
              this.addClass_bx842b$(_.fg.beans.radio.RadioButton.RadioButton.classSelector);
            },
            didMount: function () {
              $module$elements.fg.elements.InputRadio.prototype.didMount.call(this);
              $module$elements.fg.elements.onClick_m2anqv$(this, this.clickHandler_4r7lns$_0);
            }
          }, /** @lends _.fg.beans.radio.RadioButton */ {
            RadioButton: Kotlin.createObject(function () {
              return [$module$elements.fg.elements.StyledClass];
            }, function RadioButton() {
              _.fg.beans.radio.RadioButton.RadioButton.classSelector_dexyt5$_0 = $module$elements.fg.elements.toClassSelector_pdl1w0$('bn-radio-button');
              _.fg.beans.radio.RadioButton.RadioButton.rule_dexyt5$_0 = _.fg.beans.radio.RadioButton.RadioButton.rule$f;
              $module$elements.fg.elements.HTML.registerStyle_78phyd$(_.fg.beans.radio.RadioButton.RadioButton);
            }, /** @lends _.fg.beans.radio.RadioButton.RadioButton.prototype */ {
              classSelector: {
                get: function () {
                  return _.fg.beans.radio.RadioButton.RadioButton.classSelector_dexyt5$_0;
                }
              },
              rule: {
                get: function () {
                  return _.fg.beans.radio.RadioButton.RadioButton.rule_dexyt5$_0;
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
                this$RadioButton.notifyCheckedListeners_r4at71$_0(new_0);
              };
            },
            clickHandler_4r7lns$_0$f: function (this$RadioButton) {
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
