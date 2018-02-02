if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'beans'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'beans'.");
}
if (typeof elements === 'undefined') {
  throw new Error("Error loading module 'beans'. Its dependency 'elements' was not found. Please, check whether 'elements' is loaded prior to 'beans'.");
}
if (typeof this['fg-keyboard'] === 'undefined') {
  throw new Error("Error loading module 'beans'. Its dependency 'fg-keyboard' was not found. Please, check whether 'fg-keyboard' is loaded prior to 'beans'.");
}
if (typeof this['fg-agent'] === 'undefined') {
  throw new Error("Error loading module 'beans'. Its dependency 'fg-agent' was not found. Please, check whether 'fg-agent' is loaded prior to 'beans'.");
}
var beans = function (_, Kotlin, $module$elements, $module$fg_keyboard, $module$fg_agent) {
  'use strict';
  var initAndAppendNode = $module$elements.fg.elements.initAndAppendNode_n3qhgg$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var properties = Kotlin.kotlin.properties;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toClassSelector = $module$elements.fg.elements.toClassSelector_pdl1vz$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Div = $module$elements.fg.elements.Div;
  var Text = $module$elements.fg.elements.Text;
  var RgbColor = $module$elements.fg.style.colour.RgbColor;
  var elements = $module$elements.fg.elements;
  var TypedStyledClass = $module$elements.fg.elements.TypedStyledClass;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var throwCCE = Kotlin.throwCCE;
  var Button = $module$elements.fg.elements.Button;
  var onClick = $module$elements.fg.elements.onClick_8l2ll4$;
  var onMouseEnter = $module$elements.fg.elements.onMouseEnter_e96vkx$;
  var onMouseLeave = $module$elements.fg.elements.onMouseLeave_e96vkx$;
  var onFocus = $module$elements.fg.elements.onFocus_8l2ll4$;
  var onBlur = $module$elements.fg.elements.onBlur_8l2ll4$;
  var onMouseDown = $module$elements.fg.elements.onMouseDown_e96vkx$;
  var onMouseUp = $module$elements.fg.elements.onMouseUp_e96vkx$;
  var unMouseEnter = $module$elements.fg.elements.unMouseEnter_e96vkx$;
  var unMouseLeave = $module$elements.fg.elements.unMouseLeave_e96vkx$;
  var unFocus = $module$elements.fg.elements.unFocus_8l2ll4$;
  var unBlur = $module$elements.fg.elements.unBlur_8l2ll4$;
  var unMouseDown = $module$elements.fg.elements.unMouseDown_e96vkx$;
  var unMouseUp = $module$elements.fg.elements.unMouseUp_e96vkx$;
  var Span = $module$elements.fg.elements.Span;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var equals = Kotlin.equals;
  var Pixels = $module$elements.fg.elements.Pixels;
  var and = $module$elements.fg.style.and_xif9ow$;
  var hover = $module$elements.fg.style.hover_dn1ps9$;
  var focus = $module$elements.fg.style.focus_dn1ps9$;
  var and_0 = $module$elements.fg.style.and_yogg4l$;
  var StyledClass = $module$elements.fg.elements.StyledClass;
  var Element = $module$elements.fg.elements.Element;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Position = $module$elements.fg.elements.style.typed.Position;
  var Side = $module$elements.fg.base.Side;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toString = Kotlin.toString;
  var I = $module$elements.fg.elements.I;
  var ClassSelector = $module$elements.fg.elements.ClassSelector;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var A = $module$elements.fg.elements.A;
  var base = $module$elements.fg.base;
  var Comparable = Kotlin.kotlin.Comparable;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_computedStyle = $module$elements.fg.elements.get_computedStyle_gobym5$;
  var get_px = $module$elements.fg.elements.get_px_pdl1vz$;
  var child = $module$elements.fg.style.child_xmmih7$;
  var Modifier = $module$fg_keyboard.fg.keyboard.Modifier;
  var agent = $module$fg_agent.fg.agent;
  var OS = $module$fg_agent.fg.agent.OS;
  var child_0 = $module$elements.fg.style.child_7k7416$;
  var Label = $module$elements.fg.elements.Label;
  var InputRadio = $module$elements.fg.elements.InputRadio;
  SelectableAction.prototype = Object.create(Action.prototype);
  SelectableAction.prototype.constructor = SelectableAction;
  AppBar.prototype = Object.create(Div.prototype);
  AppBar.prototype.constructor = AppBar;
  Content.prototype = Object.create(Div.prototype);
  Content.prototype.constructor = Content;
  Popups.prototype = Object.create(Div.prototype);
  Popups.prototype.constructor = Popups;
  AbstractButton.prototype = Object.create(Button.prototype);
  AbstractButton.prototype.constructor = AbstractButton;
  Button$ButtonStyle$hovered$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  Button$ButtonStyle$hovered$ObjectLiteral.prototype.constructor = Button$ButtonStyle$hovered$ObjectLiteral;
  Button$ButtonStyle$disabled$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  Button$ButtonStyle$disabled$ObjectLiteral.prototype.constructor = Button$ButtonStyle$disabled$ObjectLiteral;
  Button$ButtonStyle$pressed$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  Button$ButtonStyle$pressed$ObjectLiteral.prototype.constructor = Button$ButtonStyle$pressed$ObjectLiteral;
  Button$ButtonStyle$focused$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  Button$ButtonStyle$focused$ObjectLiteral.prototype.constructor = Button$ButtonStyle$focused$ObjectLiteral;
  Button$ButtonStyle.prototype = Object.create(ElementStyle.prototype);
  Button$ButtonStyle.prototype.constructor = Button$ButtonStyle;
  Button_0.prototype = Object.create(AbstractButton.prototype);
  Button_0.prototype.constructor = Button_0;
  ToggleButton.prototype = Object.create(AbstractButton.prototype);
  ToggleButton.prototype.constructor = ToggleButton;
  Deck.prototype = Object.create(Div.prototype);
  Deck.prototype.constructor = Deck;
  Drawer.prototype = Object.create(Div.prototype);
  Drawer.prototype.constructor = Drawer;
  FontAwesomeIcon$Size.prototype = Object.create(Enum.prototype);
  FontAwesomeIcon$Size.prototype.constructor = FontAwesomeIcon$Size;
  IconI.prototype = Object.create(I.prototype);
  IconI.prototype.constructor = IconI;
  Anchor.prototype = Object.create(A.prototype);
  Anchor.prototype.constructor = Anchor;
  ExternalLink.prototype = Object.create(Link.prototype);
  ExternalLink.prototype.constructor = ExternalLink;
  LocalLink.prototype = Object.create(Link.prototype);
  LocalLink.prototype.constructor = LocalLink;
  Menu.prototype = Object.create(Div.prototype);
  Menu.prototype.constructor = Menu;
  MenuBar.prototype = Object.create(Div.prototype);
  MenuBar.prototype.constructor = MenuBar;
  MenuButton.prototype = Object.create(ToggleButton.prototype);
  MenuButton.prototype.constructor = MenuButton;
  MenuItem$Style$pressed$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MenuItem$Style$pressed$ObjectLiteral.prototype.constructor = MenuItem$Style$pressed$ObjectLiteral;
  MenuItem$Style$hovered$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MenuItem$Style$hovered$ObjectLiteral.prototype.constructor = MenuItem$Style$hovered$ObjectLiteral;
  MenuItem$Style$focused$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MenuItem$Style$focused$ObjectLiteral.prototype.constructor = MenuItem$Style$focused$ObjectLiteral;
  MenuItem$Style$disabled$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MenuItem$Style$disabled$ObjectLiteral.prototype.constructor = MenuItem$Style$disabled$ObjectLiteral;
  MenuItem$Style.prototype = Object.create(ElementStyle.prototype);
  MenuItem$Style.prototype.constructor = MenuItem$Style;
  MenuItem.prototype = Object.create(Div.prototype);
  MenuItem.prototype.constructor = MenuItem;
  LabelledRadioButton.prototype = Object.create(Div.prototype);
  LabelledRadioButton.prototype.constructor = LabelledRadioButton;
  RadioButton.prototype = Object.create(InputRadio.prototype);
  RadioButton.prototype.constructor = RadioButton;
  function anchor($receiver, link, target, useDisplay, init) {
    if (link === void 0)
      link = null;
    if (target === void 0)
      target = '_blank';
    if (useDisplay === void 0)
      useDisplay = true;
    return initAndAppendNode($receiver, new Anchor(link, target, useDisplay), init);
  }
  function button($receiver, action, init) {
    return initAndAppendNode($receiver, new Button_0(action), init);
  }
  function deck($receiver, init) {
    return initAndAppendNode($receiver, new Deck(), init);
  }
  function drawer($receiver, side, init) {
    return initAndAppendNode($receiver, new Drawer(side), init);
  }
  function menuBar($receiver, init) {
    return initAndAppendNode($receiver, new MenuBar(), init);
  }
  function menu($receiver, label, init) {
    if (label === void 0)
      label = null;
    return initAndAppendNode($receiver, new Menu(label), init);
  }
  function menuItem($receiver, action, init) {
    return initAndAppendNode($receiver, new MenuItem(action), init);
  }
  function toggleButton($receiver, action, init) {
    return initAndAppendNode($receiver, new ToggleButton(action), init);
  }
  function ElementStyle() {
    this.cursor_kp8yo3$_0 = null;
    this.margin_fxvgob$_0 = null;
    this.backgroundColor_9djldm$_0 = null;
    this.color_xsohag$_0 = null;
    this.borderStyle_fvlo52$_0 = null;
    this.borderWidth_hld6gx$_0 = null;
    this.borderColor_87wikk$_0 = null;
    this.borderRadius_szyxc5$_0 = null;
    this.boxShadow_mrrlgw$_0 = null;
    this.outline_5z8fd3$_0 = null;
  }
  Object.defineProperty(ElementStyle.prototype, 'cursor', {
    get: function () {
      return this.cursor_kp8yo3$_0;
    },
    set: function (cursor) {
      this.cursor_kp8yo3$_0 = cursor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'margin', {
    get: function () {
      return this.margin_fxvgob$_0;
    },
    set: function (margin) {
      this.margin_fxvgob$_0 = margin;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_9djldm$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_9djldm$_0 = backgroundColor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'color', {
    get: function () {
      return this.color_xsohag$_0;
    },
    set: function (color) {
      this.color_xsohag$_0 = color;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderStyle', {
    get: function () {
      return this.borderStyle_fvlo52$_0;
    },
    set: function (borderStyle) {
      this.borderStyle_fvlo52$_0 = borderStyle;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderWidth', {
    get: function () {
      return this.borderWidth_hld6gx$_0;
    },
    set: function (borderWidth) {
      this.borderWidth_hld6gx$_0 = borderWidth;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_87wikk$_0;
    },
    set: function (borderColor) {
      this.borderColor_87wikk$_0 = borderColor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderRadius', {
    get: function () {
      return this.borderRadius_szyxc5$_0;
    },
    set: function (borderRadius) {
      this.borderRadius_szyxc5$_0 = borderRadius;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'boxShadow', {
    get: function () {
      return this.boxShadow_mrrlgw$_0;
    },
    set: function (boxShadow) {
      this.boxShadow_mrrlgw$_0 = boxShadow;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'outline', {
    get: function () {
      return this.outline_5z8fd3$_0;
    },
    set: function (outline) {
      this.outline_5z8fd3$_0 = outline;
    }
  });
  ElementStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementStyle',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  Delegates$observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral.prototype.constructor = Delegates$observable$ObjectLiteral;
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_0.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_0.prototype.constructor = Delegates$observable$ObjectLiteral_0;
  function Delegates$observable$ObjectLiteral_0(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_0.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_1.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_1.prototype.constructor = Delegates$observable$ObjectLiteral_1;
  function Delegates$observable$ObjectLiteral_1(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_1.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_2.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_2.prototype.constructor = Delegates$observable$ObjectLiteral_2;
  function Delegates$observable$ObjectLiteral_2(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_2.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_3.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_3.prototype.constructor = Delegates$observable$ObjectLiteral_3;
  function Delegates$observable$ObjectLiteral_3(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_3.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function Action(label, enabled, icon, shortcut, perform) {
    if (label === void 0)
      label = null;
    if (enabled === void 0)
      enabled = true;
    if (icon === void 0)
      icon = null;
    if (shortcut === void 0)
      shortcut = null;
    if (perform === void 0)
      perform = null;
    this.propertyChangedListeners = ArrayList_init();
    this.perform_7jtrht$_0 = new Delegates$observable$ObjectLiteral(Action$perform$lambda(this), perform);
    this.label_s9x6im$_0 = new Delegates$observable$ObjectLiteral_0(Action$label$lambda(this), label);
    this.enabled_rkubv5$_0 = new Delegates$observable$ObjectLiteral_1(Action$enabled$lambda(this), enabled);
    this.icon_sx3vrr$_0 = new Delegates$observable$ObjectLiteral_2(Action$icon$lambda(this), icon);
    this.shortcut_kibx6s$_0 = new Delegates$observable$ObjectLiteral_3(Action$shortcut$lambda(this), shortcut);
  }
  var Action$perform_metadata = new PropertyMetadata('perform');
  Object.defineProperty(Action.prototype, 'perform', {
    get: function () {
      return this.perform_7jtrht$_0.getValue_lrcp0p$(this, Action$perform_metadata);
    },
    set: function (perform) {
      this.perform_7jtrht$_0.setValue_9rddgb$(this, Action$perform_metadata, perform);
    }
  });
  var Action$label_metadata = new PropertyMetadata('label');
  Object.defineProperty(Action.prototype, 'label', {
    get: function () {
      return this.label_s9x6im$_0.getValue_lrcp0p$(this, Action$label_metadata);
    },
    set: function (label) {
      this.label_s9x6im$_0.setValue_9rddgb$(this, Action$label_metadata, label);
    }
  });
  var Action$enabled_metadata = new PropertyMetadata('enabled');
  Object.defineProperty(Action.prototype, 'enabled', {
    get: function () {
      return this.enabled_rkubv5$_0.getValue_lrcp0p$(this, Action$enabled_metadata);
    },
    set: function (enabled) {
      this.enabled_rkubv5$_0.setValue_9rddgb$(this, Action$enabled_metadata, enabled);
    }
  });
  Object.defineProperty(Action.prototype, 'disabled', {
    get: function () {
      return !this.enabled;
    }
  });
  var Action$icon_metadata = new PropertyMetadata('icon');
  Object.defineProperty(Action.prototype, 'icon', {
    get: function () {
      return this.icon_sx3vrr$_0.getValue_lrcp0p$(this, Action$icon_metadata);
    },
    set: function (icon) {
      this.icon_sx3vrr$_0.setValue_9rddgb$(this, Action$icon_metadata, icon);
    }
  });
  var Action$shortcut_metadata = new PropertyMetadata('shortcut');
  Object.defineProperty(Action.prototype, 'shortcut', {
    get: function () {
      return this.shortcut_kibx6s$_0.getValue_lrcp0p$(this, Action$shortcut_metadata);
    },
    set: function (shortcut) {
      this.shortcut_kibx6s$_0.setValue_9rddgb$(this, Action$shortcut_metadata, shortcut);
    }
  });
  Action.prototype.notifyPropertyChanged_oh08kn$ = function (property, old, new_0) {
    var tmp$;
    tmp$ = this.propertyChangedListeners.iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener(this, property, old, new_0);
    }
  };
  Action.prototype.onPropertyChanged_saq78d$ = function (listener) {
    this.propertyChangedListeners.add_11rb$(listener);
  };
  Action.prototype.unPropertyChanged_saq78d$ = function (listener) {
    this.propertyChangedListeners.remove_11rb$(listener);
  };
  Action.prototype.perform_54c9de$ = function (source) {
    var tmp$;
    if (this.enabled) {
      (tmp$ = this.perform) != null ? tmp$(new ActionPerform(this, source)) : null;
    }
  };
  function Action$perform$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  function Action$label$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  function Action$enabled$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  function Action$icon$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  function Action$shortcut$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function ActionBean() {
  }
  ActionBean.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ActionBean',
    interfaces: []
  };
  function ActionPerform(action, source) {
    this.action = action;
    this.source = source;
  }
  ActionPerform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPerform',
    interfaces: []
  };
  ActionPerform.prototype.component1 = function () {
    return this.action;
  };
  ActionPerform.prototype.component2 = function () {
    return this.source;
  };
  ActionPerform.prototype.copy_j9nhz8$ = function (action, source) {
    return new ActionPerform(action === void 0 ? this.action : action, source === void 0 ? this.source : source);
  };
  ActionPerform.prototype.toString = function () {
    return 'ActionPerform(action=' + Kotlin.toString(this.action) + (', source=' + Kotlin.toString(this.source)) + ')';
  };
  ActionPerform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    return result;
  };
  ActionPerform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.action, other.action) && Kotlin.equals(this.source, other.source)))));
  };
  Delegates$observable$ObjectLiteral_4.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_4.prototype.constructor = Delegates$observable$ObjectLiteral_4;
  function Delegates$observable$ObjectLiteral_4(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_4.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function SelectableAction(label, enabled, selectedIcon, deselectedIcon, selected, shortcut, perform) {
    SelectableAction$Statics_getInstance();
    if (label === void 0)
      label = null;
    if (enabled === void 0)
      enabled = true;
    if (selectedIcon === void 0)
      selectedIcon = null;
    if (deselectedIcon === void 0)
      deselectedIcon = null;
    if (selected === void 0)
      selected = false;
    if (shortcut === void 0)
      shortcut = null;
    if (perform === void 0)
      perform = null;
    Action.call(this, label, enabled, deselectedIcon, shortcut, perform);
    this.selectedIcon = selectedIcon;
    this.deselectedIcon = deselectedIcon;
    this.selected_fi76d9$_0 = new Delegates$observable$ObjectLiteral_4(SelectableAction$selected$lambda(this), selected);
  }
  var SelectableAction$selected_metadata = new PropertyMetadata('selected');
  Object.defineProperty(SelectableAction.prototype, 'selected', {
    get: function () {
      return this.selected_fi76d9$_0.getValue_lrcp0p$(this, SelectableAction$selected_metadata);
    },
    set: function (selected) {
      this.selected_fi76d9$_0.setValue_9rddgb$(this, SelectableAction$selected_metadata, selected);
    }
  });
  SelectableAction.prototype.perform_54c9de$ = function (source) {
    this.selected = !this.selected;
    Action.prototype.perform_54c9de$.call(this, source);
  };
  function SelectableAction$Statics() {
    SelectableAction$Statics_instance = this;
    this.selectedSelector = toClassSelector('.action-selected');
  }
  SelectableAction$Statics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var SelectableAction$Statics_instance = null;
  function SelectableAction$Statics_getInstance() {
    if (SelectableAction$Statics_instance === null) {
      new SelectableAction$Statics();
    }
    return SelectableAction$Statics_instance;
  }
  function SelectableAction$selected$lambda(this$SelectableAction) {
    return function (prop, old, new_0) {
      this$SelectableAction.notifyPropertyChanged_oh08kn$(prop, old, new_0);
      return Unit;
    };
  }
  SelectableAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectableAction',
    interfaces: [Action]
  };
  function AppBar() {
    AppBar$AppBar_getInstance();
    Div.call(this);
  }
  AppBar.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(AppBar$AppBar_getInstance().classSelector);
    this.appendChild_sr04hg$(new Text('AppBar'));
  };
  function AppBar$AppBar() {
    AppBar$AppBar_instance = this;
    this.classSelector_jjauu0$_0 = toClassSelector('fg-bn-app-appbar');
    this.rule_yu59p5$_0 = AppBar$AppBar$rule$lambda;
    elements.HTML.registerStyle_mpomjf$(this);
  }
  Object.defineProperty(AppBar$AppBar.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_jjauu0$_0;
    }
  });
  Object.defineProperty(AppBar$AppBar.prototype, 'rule', {
    get: function () {
      return this.rule_yu59p5$_0;
    }
  });
  function AppBar$AppBar$rule$lambda($receiver) {
    $receiver.backgroundColor = RgbColor.Factory.RED;
    return Unit;
  }
  AppBar$AppBar.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AppBar',
    interfaces: [TypedStyledClass]
  };
  var AppBar$AppBar_instance = null;
  function AppBar$AppBar_getInstance() {
    if (AppBar$AppBar_instance === null) {
      new AppBar$AppBar();
    }
    return AppBar$AppBar_instance;
  }
  AppBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppBar',
    interfaces: [Div]
  };
  function Application() {
    Application$Statics_getInstance();
    this.CONTENT_7o3gzg$_0 = lazy(Application$CONTENT$lambda);
    this.POPUPS_4zvygg$_0 = lazy(Application$POPUPS$lambda);
    Application$Statics_getInstance().GET = this;
  }
  Object.defineProperty(Application.prototype, 'CONTENT', {
    get: function () {
      return this.CONTENT_7o3gzg$_0.value;
    }
  });
  Object.defineProperty(Application.prototype, 'POPUPS', {
    get: function () {
      return this.POPUPS_4zvygg$_0.value;
    }
  });
  Application.prototype.start = function () {
    elements.BODY.appendChild_sr04hg$(this.CONTENT);
    elements.BODY.appendChild_sr04hg$(this.POPUPS);
    elements.HTML.init_dqye30$();
    this.render();
  };
  Application.prototype.render = function () {
  };
  function Application$Statics() {
    Application$Statics_instance = this;
    this.GET_w6lr8w$_0 = properties.Delegates.notNull_30y1fr$();
  }
  var Application$Statics$GET_metadata = new PropertyMetadata('GET');
  Object.defineProperty(Application$Statics.prototype, 'GET', {
    get: function () {
      return this.GET_w6lr8w$_0.getValue_lrcp0p$(this, Application$Statics$GET_metadata);
    },
    set: function (GET) {
      this.GET_w6lr8w$_0.setValue_9rddgb$(this, Application$Statics$GET_metadata, GET);
    }
  });
  Application$Statics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Application$Statics_instance = null;
  function Application$Statics_getInstance() {
    if (Application$Statics_instance === null) {
      new Application$Statics();
    }
    return Application$Statics_instance;
  }
  function Application$CONTENT$lambda() {
    return new Content();
  }
  function Application$POPUPS$lambda() {
    return new Popups();
  }
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: []
  };
  function Content() {
    Div.call(this);
  }
  Content.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_61zpoe$('fg-bn-app-content');
  };
  Content.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Content',
    interfaces: [Div]
  };
  Delegates$observable$ObjectLiteral_5.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_5.prototype.constructor = Delegates$observable$ObjectLiteral_5;
  function Delegates$observable$ObjectLiteral_5(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_5.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function DrawerNavigation(icon, drawer, dockingStation, initialFloatState, menu) {
    this.icon = icon;
    this.drawer = drawer;
    this.dockingStation = dockingStation;
    this.menu = menu;
    this.float_fbhxby$_0 = new Delegates$observable$ObjectLiteral_5(DrawerNavigation$float$lambda(this), initialFloatState);
    this.navAction_p6u14r$_0 = lazy(DrawerNavigation$navAction$lambda(this));
    this.dockingStationResizeHandler_0 = DrawerNavigation$dockingStationResizeHandler$lambda(this);
    this.menuHandler_0 = DrawerNavigation$menuHandler$lambda(this);
    this.renderFloat_0(initialFloatState);
    this.dockingStation.onResized_sdolbl$(this.dockingStationResizeHandler_0);
    this.menu.onAfterPerformingMenuItemAction_a8ajpl$(this.menuHandler_0);
  }
  var DrawerNavigation$float_metadata = new PropertyMetadata('float');
  Object.defineProperty(DrawerNavigation.prototype, 'float', {
    get: function () {
      return this.float_fbhxby$_0.getValue_lrcp0p$(this, DrawerNavigation$float_metadata);
    },
    set: function (float) {
      this.float_fbhxby$_0.setValue_9rddgb$(this, DrawerNavigation$float_metadata, float);
    }
  });
  Object.defineProperty(DrawerNavigation.prototype, 'navAction', {
    get: function () {
      return this.navAction_p6u14r$_0.value;
    }
  });
  DrawerNavigation.prototype.renderFloat_0 = function (float) {
    if (float) {
      this.drawer.float();
      this.dockingStation.appendChild_sr04hg$(this.drawer);
      this.drawer.hide();
    }
     else {
      dock(this.dockingStation, this.drawer);
      this.drawer.show();
    }
  };
  function DrawerNavigation$float$lambda(this$DrawerNavigation) {
    return function (property, old, new_0) {
      if (new_0 !== old) {
        this$DrawerNavigation.renderFloat_0(new_0);
      }
      return Unit;
    };
  }
  function DrawerNavigation$navAction$lambda$lambda(this$DrawerNavigation) {
    return function (actionPerform) {
      var tmp$;
      var selectableAction = Kotlin.isType(tmp$ = actionPerform.action, SelectableAction) ? tmp$ : throwCCE();
      if (this$DrawerNavigation.drawer.hidden) {
        this$DrawerNavigation.drawer.show();
      }
      return Unit;
    };
  }
  function DrawerNavigation$navAction$lambda(this$DrawerNavigation) {
    return function () {
      return new SelectableAction(void 0, void 0, this$DrawerNavigation.icon, this$DrawerNavigation.icon, void 0, void 0, DrawerNavigation$navAction$lambda$lambda(this$DrawerNavigation));
    };
  }
  function DrawerNavigation$dockingStationResizeHandler$lambda(this$DrawerNavigation) {
    return function (event) {
      if (event.widthChanged) {
        var float = event.width <= 600;
        if (float && !this$DrawerNavigation.float) {
          this$DrawerNavigation.float = true;
        }
         else if (!float && this$DrawerNavigation.float) {
          this$DrawerNavigation.float = false;
        }
      }
      return Unit;
    };
  }
  function DrawerNavigation$menuHandler$lambda(this$DrawerNavigation) {
    return function (action, menu) {
      if (this$DrawerNavigation.float) {
        this$DrawerNavigation.drawer.hide();
      }
      return Unit;
    };
  }
  DrawerNavigation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawerNavigation',
    interfaces: []
  };
  function Popups() {
    Div.call(this);
  }
  Popups.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_61zpoe$('fg-bn-app-popups');
  };
  Popups.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Popups',
    interfaces: [Div]
  };
  var pkg;
  function AbstractButton(action) {
    AbstractButton$AbstractButton_getInstance();
    Button.call(this);
    this.action_8h5vg2$_0 = action;
    this.hovered_q27mx7$_0 = false;
    this.focused_lfe02v$_0 = false;
    this.pressed_rml0we$_0 = false;
    this.label_2lqqpo$_0 = lazy(AbstractButton$label$lambda);
    this.iconI_17xxds$_0 = lazy(AbstractButton$iconI$lambda(this));
    this.actionPropertyChangedHandler_g2w3hf$_0 = AbstractButton$actionPropertyChangedHandler$lambda(this);
    this.clickHandler_cnnk0y$_0 = AbstractButton$clickHandler$lambda(this);
    this.mouseEnterHandler_9j5e2v$_0 = AbstractButton$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_h36qw8$_0 = AbstractButton$mouseLeaveHandler$lambda(this);
    this.focusHandler_r8nnn6$_0 = AbstractButton$focusHandler$lambda(this);
    this.blurHandler_kp88j1$_0 = AbstractButton$blurHandler$lambda(this);
    this.mouseDownHandler_udyef3$_0 = AbstractButton$mouseDownHandler$lambda(action, this);
    this.mouseUpHandler_puh8zq$_0 = AbstractButton$mouseUpHandler$lambda(this);
  }
  Object.defineProperty(AbstractButton.prototype, 'action', {
    get: function () {
      return this.action_8h5vg2$_0;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'hovered', {
    get: function () {
      return this.hovered_q27mx7$_0;
    },
    set: function (hovered) {
      this.hovered_q27mx7$_0 = hovered;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'focused', {
    get: function () {
      return this.focused_lfe02v$_0;
    },
    set: function (focused) {
      this.focused_lfe02v$_0 = focused;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'pressed', {
    get: function () {
      return this.pressed_rml0we$_0;
    },
    set: function (pressed) {
      this.pressed_rml0we$_0 = pressed;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'label', {
    get: function () {
      return this.label_2lqqpo$_0.value;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'iconI', {
    get: function () {
      return this.iconI_17xxds$_0.value;
    }
  });
  AbstractButton.prototype.onHover = function () {
  };
  AbstractButton.prototype.unHover = function () {
  };
  AbstractButton.prototype.onFocus = function () {
  };
  AbstractButton.prototype.unFocus = function () {
  };
  AbstractButton.prototype.onPressed = function () {
  };
  AbstractButton.prototype.unPressed = function () {
  };
  AbstractButton.prototype.onEnabled = function () {
  };
  AbstractButton.prototype.onDisabled = function () {
  };
  AbstractButton.prototype.render = function () {
    Button.prototype.render.call(this);
    this.appendChild_sr04hg$(this.iconI);
    this.appendChild_sr04hg$(this.label);
    this.renderIcon_z5553x$_0(this.action.icon);
    this.renderLabel_xko9ir$_0(this.action.label);
    this.renderDisabled_li5lcj$_0(this.action.disabled);
  };
  AbstractButton.prototype.didMount = function () {
    Button.prototype.didMount.call(this);
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_g2w3hf$_0);
    onClick(this, this.clickHandler_cnnk0y$_0);
    onMouseEnter(this, this.mouseEnterHandler_9j5e2v$_0);
    onMouseLeave(this, this.mouseLeaveHandler_h36qw8$_0);
    onFocus(this, this.focusHandler_r8nnn6$_0);
    onBlur(this, this.blurHandler_kp88j1$_0);
    onMouseDown(this, this.mouseDownHandler_udyef3$_0);
    onMouseUp(this, this.mouseUpHandler_puh8zq$_0);
  };
  AbstractButton.prototype.willUnMount = function () {
    Button.prototype.willUnMount.call(this);
    unMouseEnter(this, this.mouseEnterHandler_9j5e2v$_0);
    unMouseLeave(this, this.mouseLeaveHandler_h36qw8$_0);
    unFocus(this, this.focusHandler_r8nnn6$_0);
    unBlur(this, this.blurHandler_kp88j1$_0);
    unMouseDown(this, this.mouseDownHandler_udyef3$_0);
    unMouseUp(this, this.mouseUpHandler_puh8zq$_0);
  };
  AbstractButton.prototype.renderLabel_xko9ir$_0 = function (labelText) {
    if (labelText != null) {
      this.label.textContent = labelText;
      this.label.show();
    }
     else {
      this.label.hide();
    }
  };
  AbstractButton.prototype.renderIcon_z5553x$_0 = function (icon) {
    if (icon == null) {
      this.iconI.hide();
    }
     else {
      icon.apply_54c9de$(this.iconI);
      this.iconI.show();
    }
  };
  AbstractButton.prototype.renderDisabled_li5lcj$_0 = function (disabled) {
    if (disabled) {
      this.toggleClass_ivxn3r$(AbstractButton$AbstractButton_getInstance().DISABLED.value, true);
      this._disabled = true;
    }
     else {
      this.toggleClass_ivxn3r$(AbstractButton$AbstractButton_getInstance().DISABLED.value);
      this._disabled = false;
    }
  };
  function AbstractButton$AbstractButton() {
    AbstractButton$AbstractButton_instance = this;
    this.DISABLED = toClassSelector('disabled');
  }
  AbstractButton$AbstractButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AbstractButton',
    interfaces: []
  };
  var AbstractButton$AbstractButton_instance = null;
  function AbstractButton$AbstractButton_getInstance() {
    if (AbstractButton$AbstractButton_instance === null) {
      new AbstractButton$AbstractButton();
    }
    return AbstractButton$AbstractButton_instance;
  }
  function AbstractButton$label$lambda() {
    var span = new Span();
    span.hide();
    return span;
  }
  function AbstractButton$iconI$lambda(this$AbstractButton) {
    return function () {
      var iconI = new IconI(this$AbstractButton.action.icon);
      iconI.hide();
      return iconI;
    };
  }
  function AbstractButton$actionPropertyChangedHandler$lambda(this$AbstractButton) {
    return function (action, property, old, new_0) {
      var tmp$;
      tmp$ = property.callableName;
      if (equals(tmp$, getPropertyCallableRef('label', 1, function ($receiver) {
        return $receiver.label;
      }, function ($receiver, value) {
        $receiver.label = value;
      }).callableName))
        this$AbstractButton.renderLabel_xko9ir$_0(action.label);
      else if (equals(tmp$, getPropertyCallableRef('icon', 1, function ($receiver) {
        return $receiver.icon;
      }, function ($receiver, value) {
        $receiver.icon = value;
      }).callableName))
        this$AbstractButton.renderIcon_z5553x$_0(action.icon);
      else if (equals(tmp$, getPropertyCallableRef('enabled', 1, function ($receiver) {
        return $receiver.enabled;
      }, function ($receiver, value) {
        $receiver.enabled = value;
      }).callableName)) {
        this$AbstractButton.renderDisabled_li5lcj$_0(action.disabled);
        if (action.enabled) {
          this$AbstractButton.onEnabled();
        }
         else {
          this$AbstractButton.onDisabled();
        }
      }
      return Unit;
    };
  }
  function AbstractButton$clickHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.action.perform_54c9de$(this$AbstractButton);
      return Unit;
    };
  }
  function AbstractButton$mouseEnterHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.hovered = true;
      this$AbstractButton.toggleClass_ivxn3r$('hovered', true);
      this$AbstractButton.onHover();
      return Unit;
    };
  }
  function AbstractButton$mouseLeaveHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.hovered = false;
      this$AbstractButton.toggleClass_ivxn3r$('hovered');
      this$AbstractButton.unHover();
      return Unit;
    };
  }
  function AbstractButton$focusHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.focused = true;
      this$AbstractButton.toggleClass_ivxn3r$('focused', true);
      this$AbstractButton.onFocus();
      return Unit;
    };
  }
  function AbstractButton$blurHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.focused = false;
      this$AbstractButton.toggleClass_ivxn3r$('focused');
      this$AbstractButton.unFocus();
      return Unit;
    };
  }
  function AbstractButton$mouseDownHandler$lambda(closure$action, this$AbstractButton) {
    return function (event) {
      if (closure$action.enabled) {
        this$AbstractButton.pressed = true;
        this$AbstractButton.toggleClass_ivxn3r$('pressed', true);
        this$AbstractButton.onPressed();
      }
      return Unit;
    };
  }
  function AbstractButton$mouseUpHandler$lambda(this$AbstractButton) {
    return function (event) {
      this$AbstractButton.pressed = false;
      this$AbstractButton.toggleClass_ivxn3r$('pressed');
      this$AbstractButton.unPressed();
      return Unit;
    };
  }
  AbstractButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractButton',
    interfaces: [ActionBean, Button]
  };
  function Button_0(action) {
    Button$Companion_getInstance();
    AbstractButton.call(this, action);
  }
  Button_0.prototype.render = function () {
    AbstractButton.prototype.render.call(this);
    this.addClass_bx842b$(Button$Companion_getInstance().classSelector);
  };
  function Button$ButtonStyle() {
    Button$ButtonStyle_instance = this;
    ElementStyle.call(this);
    this.margin_l3grfp$_0 = '0';
    this.backgroundColor_gco80c$_0 = RgbColor.Factory.WHITE;
    this.borderStyle_kdprt0$_0 = 'outset';
    this.borderWidth_iny9h5$_0 = new Pixels(1.0);
    this.borderColor_s1exdi$_0 = RgbColor.Factory.from_61zpoe$('#e4e4e4');
    this.borderRadius_gj0s23$_0 = new Pixels(4.0);
    this.boxShadow_9cud0q$_0 = 'none';
    this.hovered = new Button$ButtonStyle$hovered$ObjectLiteral();
    this.disabled = new Button$ButtonStyle$disabled$ObjectLiteral();
    this.pressed = new Button$ButtonStyle$pressed$ObjectLiteral();
    this.focused = new Button$ButtonStyle$focused$ObjectLiteral();
  }
  Object.defineProperty(Button$ButtonStyle.prototype, 'margin', {
    get: function () {
      return this.margin_l3grfp$_0;
    },
    set: function (margin) {
      this.margin_l3grfp$_0 = margin;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_gco80c$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_gco80c$_0 = backgroundColor;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderStyle', {
    get: function () {
      return this.borderStyle_kdprt0$_0;
    },
    set: function (borderStyle) {
      this.borderStyle_kdprt0$_0 = borderStyle;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderWidth', {
    get: function () {
      return this.borderWidth_iny9h5$_0;
    },
    set: function (borderWidth) {
      this.borderWidth_iny9h5$_0 = borderWidth;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_s1exdi$_0;
    },
    set: function (borderColor) {
      this.borderColor_s1exdi$_0 = borderColor;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderRadius', {
    get: function () {
      return this.borderRadius_gj0s23$_0;
    },
    set: function (borderRadius) {
      this.borderRadius_gj0s23$_0 = borderRadius;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'boxShadow', {
    get: function () {
      return this.boxShadow_9cud0q$_0;
    },
    set: function (boxShadow) {
      this.boxShadow_9cud0q$_0 = boxShadow;
    }
  });
  function Button$ButtonStyle$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.cursor_v8j4br$_0 = 'pointer';
  }
  Object.defineProperty(Button$ButtonStyle$hovered$ObjectLiteral.prototype, 'cursor', {
    get: function () {
      return this.cursor_v8j4br$_0;
    },
    set: function (cursor) {
      this.cursor_v8j4br$_0 = cursor;
    }
  });
  Button$ButtonStyle$hovered$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.cursor_tbe4k6$_0 = 'not-allowed';
  }
  Object.defineProperty(Button$ButtonStyle$disabled$ObjectLiteral.prototype, 'cursor', {
    get: function () {
      return this.cursor_tbe4k6$_0;
    },
    set: function (cursor) {
      this.cursor_tbe4k6$_0 = cursor;
    }
  });
  Button$ButtonStyle$disabled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_la4mrt$_0 = new RgbColor(118, 178, 240);
  }
  Object.defineProperty(Button$ButtonStyle$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_la4mrt$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_la4mrt$_0 = backgroundColor;
    }
  });
  Button$ButtonStyle$pressed$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.outline_lf1dmp$_0 = 'none';
    this.borderColor_8uzkwa$_0 = new RgbColor(144, 191, 240);
  }
  Object.defineProperty(Button$ButtonStyle$focused$ObjectLiteral.prototype, 'outline', {
    get: function () {
      return this.outline_lf1dmp$_0;
    },
    set: function (outline) {
      this.outline_lf1dmp$_0 = outline;
    }
  });
  Object.defineProperty(Button$ButtonStyle$focused$ObjectLiteral.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_8uzkwa$_0;
    },
    set: function (borderColor) {
      this.borderColor_8uzkwa$_0 = borderColor;
    }
  });
  Button$ButtonStyle$focused$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  Button$ButtonStyle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ButtonStyle',
    interfaces: [ElementStyle]
  };
  var Button$ButtonStyle_instance = null;
  function Button$ButtonStyle_getInstance() {
    if (Button$ButtonStyle_instance === null) {
      new Button$ButtonStyle();
    }
    return Button$ButtonStyle_instance;
  }
  function Button$Companion() {
    Button$Companion_instance = this;
    this.classSelector_v9pusj$_0 = toClassSelector('fg-bn-button');
    this.rule_5f2w5g$_0 = Button$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Button$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_v9pusj$_0;
    }
  });
  Object.defineProperty(Button$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_5f2w5g$_0;
    }
  });
  function Button$Companion$rule$lambda$lambda$lambda($receiver) {
    var tmp$;
    $receiver._cursor = (tmp$ = Button$ButtonStyle_getInstance().disabled) != null ? tmp$.cursor : null;
    return Unit;
  }
  function Button$Companion$rule$lambda$lambda($receiver) {
    var tmp$;
    $receiver._cursor = (tmp$ = Button$ButtonStyle_getInstance().hovered) != null ? tmp$.cursor : null;
    and($receiver, AbstractButton$AbstractButton_getInstance().DISABLED, Button$Companion$rule$lambda$lambda$lambda);
    return Unit;
  }
  function Button$Companion$rule$lambda$lambda_0($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    $receiver._borderColor = (tmp$_0 = (tmp$ = Button$ButtonStyle_getInstance().focused) != null ? tmp$.borderColor : null) != null ? tmp$_0.toString() : null;
    $receiver._outline = (tmp$_1 = Button$ButtonStyle_getInstance().focused) != null ? tmp$_1.outline : null;
    return Unit;
  }
  function Button$Companion$rule$lambda$lambda_1($receiver) {
    var tmp$, tmp$_0;
    $receiver._backgroundColor = (tmp$_0 = (tmp$ = Button$ButtonStyle_getInstance().pressed) != null ? tmp$.backgroundColor : null) != null ? tmp$_0.toString() : null;
    return Unit;
  }
  function Button$Companion$rule$lambda($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    $receiver._margin = Button$ButtonStyle_getInstance().margin;
    $receiver._borderStyle = Button$ButtonStyle_getInstance().borderStyle;
    $receiver._borderWidth = (tmp$ = Button$ButtonStyle_getInstance().borderWidth) != null ? tmp$.toString() : null;
    $receiver._borderColor = (tmp$_0 = Button$ButtonStyle_getInstance().borderColor) != null ? tmp$_0.toString() : null;
    $receiver._borderRadius = (tmp$_1 = Button$ButtonStyle_getInstance().borderRadius) != null ? tmp$_1.toString() : null;
    $receiver._backgroundColor = (tmp$_2 = Button$ButtonStyle_getInstance().backgroundColor) != null ? tmp$_2.toString() : null;
    $receiver._boxShadow = Button$ButtonStyle_getInstance().boxShadow;
    hover($receiver, Button$Companion$rule$lambda$lambda);
    focus($receiver, Button$Companion$rule$lambda$lambda_0);
    and_0($receiver, '.pressed', Button$Companion$rule$lambda$lambda_1);
    return Unit;
  }
  Button$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var Button$Companion_instance = null;
  function Button$Companion_getInstance() {
    if (Button$Companion_instance === null) {
      new Button$Companion();
    }
    return Button$Companion_instance;
  }
  Button_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [AbstractButton]
  };
  function ToggleButton(action) {
    ToggleButton$Companion_getInstance();
    AbstractButton.call(this, action);
    this.action_kqm534$_0 = action;
    this.actionPropertyChangedHandler_6vdcd1$_0 = ToggleButton$actionPropertyChangedHandler$lambda(this);
    this.previousBackgroundColor_9tomao$_0 = '';
  }
  Object.defineProperty(ToggleButton.prototype, 'action', {
    get: function () {
      return this.action_kqm534$_0;
    }
  });
  ToggleButton.prototype.render = function () {
    AbstractButton.prototype.render.call(this);
    this.addClass_bx842b$(ToggleButton$Companion_getInstance().classSelector);
  };
  ToggleButton.prototype.renderSelected_2eulsw$_0 = function (selected) {
    if (selected) {
      this.previousBackgroundColor_9tomao$_0 = this._style.backgroundColor;
      this.iconI.icon = this.action.selectedIcon;
      this.addClass_61zpoe$('selected');
    }
     else {
      this.iconI.icon = this.action.deselectedIcon;
      this.removeClass_61zpoe$('selected');
    }
  };
  ToggleButton.prototype.didMount = function () {
    AbstractButton.prototype.didMount.call(this);
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_6vdcd1$_0);
  };
  ToggleButton.prototype.toggle = function () {
    this.action.perform_54c9de$(this);
  };
  function ToggleButton$Companion() {
    ToggleButton$Companion_instance = this;
    this.classSelector_pop9g7$_0 = toClassSelector('fg-bn-toggle-button');
    this.rule_1pptq0$_0 = ToggleButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(ToggleButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_pop9g7$_0;
    }
  });
  Object.defineProperty(ToggleButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_1pptq0$_0;
    }
  });
  function ToggleButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._cursor = 'not-allowed';
    return Unit;
  }
  function ToggleButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
    and($receiver, AbstractButton$AbstractButton_getInstance().DISABLED, ToggleButton$Companion$rule$lambda$lambda$lambda);
    return Unit;
  }
  function ToggleButton$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._backgroundColor = 'rgb(118, 178, 240)';
    $receiver._boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.2)';
    return Unit;
  }
  function ToggleButton$Companion$rule$lambda$lambda_1($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._outline = 'none';
    return Unit;
  }
  function ToggleButton$Companion$rule$lambda$lambda_2($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._outline = 'none';
    return Unit;
  }
  function ToggleButton$Companion$rule$lambda($receiver) {
    $receiver._border = '1px outset #e4e4e4';
    $receiver._borderRadius = '4px';
    $receiver._backgroundColor = '#ffffff';
    $receiver._boxShadow = 'none';
    $receiver._margin = '0';
    hover($receiver, ToggleButton$Companion$rule$lambda$lambda);
    and_0($receiver, '.selected', ToggleButton$Companion$rule$lambda$lambda_0);
    focus($receiver, ToggleButton$Companion$rule$lambda$lambda_1);
    and_0($receiver, '.focused', ToggleButton$Companion$rule$lambda$lambda_2);
    return Unit;
  }
  ToggleButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var ToggleButton$Companion_instance = null;
  function ToggleButton$Companion_getInstance() {
    if (ToggleButton$Companion_instance === null) {
      new ToggleButton$Companion();
    }
    return ToggleButton$Companion_instance;
  }
  function ToggleButton$actionPropertyChangedHandler$lambda(this$ToggleButton) {
    return function (action, property, old, new_0) {
      if (equals(property.callableName, getPropertyCallableRef('selected', 1, function ($receiver) {
        return $receiver.selected;
      }, function ($receiver, value) {
        $receiver.selected = value;
      }).callableName))
        this$ToggleButton.renderSelected_2eulsw$_0(this$ToggleButton.action.selected);
      return Unit;
    };
  }
  ToggleButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToggleButton',
    interfaces: [AbstractButton]
  };
  function Deck() {
    Deck$Companion_getInstance();
    Div.call(this);
    this.deck_0 = ArrayList_init();
  }
  Deck.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (!Kotlin.isType(child, Element)) {
      throw IllegalArgumentException_init('Only a Element can be added to a Deck: ' + get_js(Kotlin.getKClassFromExpression(child)).name);
    }
    this.deck_0.add_11rb$(child);
    if (this.deck_0.size > 1) {
      child.hide();
    }
     else {
      child.show();
    }
  };
  Deck.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(Deck$Companion_getInstance().classSelector);
  };
  Deck.prototype.show_54c9de$ = function (child) {
    var tmp$;
    tmp$ = this.childElements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (child === element) {
        element.show();
      }
       else {
        element.hide();
      }
    }
  };
  function Deck$Companion() {
    Deck$Companion_instance = this;
    this.classSelector_kcyvst$_0 = toClassSelector('fg-bn-deck');
    this.rule_fc5xek$_0 = Deck$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Deck$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_kcyvst$_0;
    }
  });
  Object.defineProperty(Deck$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_fc5xek$_0;
    }
  });
  function Deck$Companion$rule$lambda($receiver) {
    return Unit;
  }
  Deck$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var Deck$Companion_instance = null;
  function Deck$Companion_getInstance() {
    if (Deck$Companion_instance === null) {
      new Deck$Companion();
    }
    return Deck$Companion_instance;
  }
  Deck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deck',
    interfaces: [Div]
  };
  Delegates$observable$ObjectLiteral_6.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_6.prototype.constructor = Delegates$observable$ObjectLiteral_6;
  function Delegates$observable$ObjectLiteral_6(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_6.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_6.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function Drawer(side) {
    Drawer$Companion_getInstance();
    Div.call(this);
    this.undockedPositionValue_8be2vx$ = '';
    this.undockedCssFloatValue_8be2vx$ = '';
    this.side_w3utwr$_0 = new Delegates$observable$ObjectLiteral_6(Drawer$side$lambda(this), side);
  }
  var Drawer$side_metadata = new PropertyMetadata('side');
  Object.defineProperty(Drawer.prototype, 'side', {
    get: function () {
      return this.side_w3utwr$_0.getValue_lrcp0p$(this, Drawer$side_metadata);
    },
    set: function (side) {
      this.side_w3utwr$_0.setValue_9rddgb$(this, Drawer$side_metadata, side);
    }
  });
  Drawer.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(Drawer$Companion_getInstance().classSelector);
    this.renderSide_u6e5ms$_0(this.side);
  };
  Drawer.prototype.float = function () {
    this.removeSelf();
    this.renderSide_u6e5ms$_0(this.side);
    this.style.position = Position.absolute;
  };
  Drawer.prototype.renderSide_u6e5ms$_0 = function (side) {
    switch (side.name) {
      case 'LEFT':
        this._style.left = '0';
        break;
      case 'RIGHT':
        this._style.right = '0';
        break;
    }
  };
  function Drawer$Companion() {
    Drawer$Companion_instance = this;
    this.classSelector_3qtu83$_0 = toClassSelector('drawer');
    this.rule_cltx98$_0 = Drawer$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Drawer$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_3qtu83$_0;
    }
  });
  Object.defineProperty(Drawer$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_cltx98$_0;
    }
  });
  function Drawer$Companion$rule$lambda($receiver) {
    $receiver._position = 'fixed';
    $receiver._zIndex = '1300';
    $receiver._top = '0';
    $receiver._height = '100%';
    $receiver._backgroundColor = 'white';
    return Unit;
  }
  Drawer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var Drawer$Companion_instance = null;
  function Drawer$Companion_getInstance() {
    if (Drawer$Companion_instance === null) {
      new Drawer$Companion();
    }
    return Drawer$Companion_instance;
  }
  function Drawer$side$lambda(this$Drawer) {
    return function (property, old, new_0) {
      this$Drawer.renderSide_u6e5ms$_0(new_0);
      return Unit;
    };
  }
  Drawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Drawer',
    interfaces: [Div]
  };
  function dock($receiver, drawer) {
    drawer.removeSelf();
    $receiver.prependChild_sr04hg$(drawer);
    drawer.undockedPositionValue_8be2vx$ = drawer._style.position;
    drawer.undockedCssFloatValue_8be2vx$ = drawer._style.cssFloat;
    drawer._style.position = 'static';
    drawer._style.cssFloat = drawer.side === Side.LEFT ? 'left' : 'right';
  }
  function undock($receiver) {
    $receiver._style.position = $receiver.undockedPositionValue_8be2vx$;
    $receiver._style.cssFloat = $receiver.undockedCssFloatValue_8be2vx$;
  }
  function FontAwesomeIcon(name, size) {
    if (size === void 0)
      size = null;
    this.name = name;
    this.size = size;
  }
  function FontAwesomeIcon$apply$lambda(it) {
    return startsWith(it, 'fa');
  }
  FontAwesomeIcon.prototype.apply_54c9de$ = function (element) {
    element.removeClasses_leuowt$(FontAwesomeIcon$apply$lambda);
    element.addClass_61zpoe$('fa');
    element.addClass_61zpoe$('fa-' + this.name);
    if (this.size != null && !equals(this.size, FontAwesomeIcon$Size$NORMAL_getInstance())) {
      element.addClass_61zpoe$(toString(this.size.selector));
    }
  };
  FontAwesomeIcon.prototype.toI = function () {
    var i = new I();
    this.apply_54c9de$(i);
    return i;
  };
  function FontAwesomeIcon$Size(name, ordinal, selector) {
    Enum.call(this);
    this.selector = selector;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FontAwesomeIcon$Size_initFields() {
    FontAwesomeIcon$Size_initFields = function () {
    };
    FontAwesomeIcon$Size$NORMAL_instance = new FontAwesomeIcon$Size('NORMAL', 0, null);
    FontAwesomeIcon$Size$LG_instance = new FontAwesomeIcon$Size('LG', 1, new ClassSelector('fa-lg'));
    FontAwesomeIcon$Size$X2_instance = new FontAwesomeIcon$Size('X2', 2, new ClassSelector('fa-x2'));
    FontAwesomeIcon$Size$X3_instance = new FontAwesomeIcon$Size('X3', 3, new ClassSelector('fa-x3'));
    FontAwesomeIcon$Size$X4_instance = new FontAwesomeIcon$Size('X4', 4, new ClassSelector('fa-x4'));
    FontAwesomeIcon$Size$X5_instance = new FontAwesomeIcon$Size('X5', 5, new ClassSelector('fa-x5'));
  }
  var FontAwesomeIcon$Size$NORMAL_instance;
  function FontAwesomeIcon$Size$NORMAL_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$NORMAL_instance;
  }
  var FontAwesomeIcon$Size$LG_instance;
  function FontAwesomeIcon$Size$LG_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$LG_instance;
  }
  var FontAwesomeIcon$Size$X2_instance;
  function FontAwesomeIcon$Size$X2_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$X2_instance;
  }
  var FontAwesomeIcon$Size$X3_instance;
  function FontAwesomeIcon$Size$X3_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$X3_instance;
  }
  var FontAwesomeIcon$Size$X4_instance;
  function FontAwesomeIcon$Size$X4_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$X4_instance;
  }
  var FontAwesomeIcon$Size$X5_instance;
  function FontAwesomeIcon$Size$X5_getInstance() {
    FontAwesomeIcon$Size_initFields();
    return FontAwesomeIcon$Size$X5_instance;
  }
  FontAwesomeIcon$Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: [Enum]
  };
  function FontAwesomeIcon$Size$values() {
    return [FontAwesomeIcon$Size$NORMAL_getInstance(), FontAwesomeIcon$Size$LG_getInstance(), FontAwesomeIcon$Size$X2_getInstance(), FontAwesomeIcon$Size$X3_getInstance(), FontAwesomeIcon$Size$X4_getInstance(), FontAwesomeIcon$Size$X5_getInstance()];
  }
  FontAwesomeIcon$Size.values = FontAwesomeIcon$Size$values;
  function FontAwesomeIcon$Size$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return FontAwesomeIcon$Size$NORMAL_getInstance();
      case 'LG':
        return FontAwesomeIcon$Size$LG_getInstance();
      case 'X2':
        return FontAwesomeIcon$Size$X2_getInstance();
      case 'X3':
        return FontAwesomeIcon$Size$X3_getInstance();
      case 'X4':
        return FontAwesomeIcon$Size$X4_getInstance();
      case 'X5':
        return FontAwesomeIcon$Size$X5_getInstance();
      default:throwISE('No enum constant fg.beans.icon.FontAwesomeIcon.Size.' + name);
    }
  }
  FontAwesomeIcon$Size.valueOf_61zpoe$ = FontAwesomeIcon$Size$valueOf;
  FontAwesomeIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontAwesomeIcon',
    interfaces: [IconProvider]
  };
  function FontAwesomeIcons() {
    FontAwesomeIcons_instance = this;
  }
  FontAwesomeIcons.prototype.apple_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('apple', size);
  };
  FontAwesomeIcons.prototype.camera_retro_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('camera-retro', size);
  };
  FontAwesomeIcons.prototype.check_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('check', size);
  };
  FontAwesomeIcons.prototype.circle_o_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('circle-o', size);
  };
  FontAwesomeIcons.prototype.dot_circle_o_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('dot-circle-o', size);
  };
  FontAwesomeIcons.prototype.external_link_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('external-link', size);
  };
  FontAwesomeIcons.prototype.link_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('link', size);
  };
  FontAwesomeIcons.prototype.linux_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('linux', size);
  };
  FontAwesomeIcons.prototype.plus_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('plus', size);
  };
  FontAwesomeIcons.prototype.toggle_on_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('toggle-on', size);
  };
  FontAwesomeIcons.prototype.toggle_off_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('toggle-off', size);
  };
  FontAwesomeIcons.prototype.windows_p56ikg$ = function (size) {
    if (size === void 0)
      size = null;
    return new FontAwesomeIcon('windows', size);
  };
  FontAwesomeIcons.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FontAwesomeIcons',
    interfaces: []
  };
  var FontAwesomeIcons_instance = null;
  function FontAwesomeIcons_getInstance() {
    if (FontAwesomeIcons_instance === null) {
      new FontAwesomeIcons();
    }
    return FontAwesomeIcons_instance;
  }
  Delegates$observable$ObjectLiteral_7.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_7.prototype.constructor = Delegates$observable$ObjectLiteral_7;
  function Delegates$observable$ObjectLiteral_7(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_7.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_7.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function IconI(icon) {
    if (icon === void 0)
      icon = null;
    I.call(this);
    this.icon_9gxyau$_0 = new Delegates$observable$ObjectLiteral_7(IconI$icon$lambda(this), icon);
  }
  var IconI$icon_metadata = new PropertyMetadata('icon');
  Object.defineProperty(IconI.prototype, 'icon', {
    get: function () {
      return this.icon_9gxyau$_0.getValue_lrcp0p$(this, IconI$icon_metadata);
    },
    set: function (icon) {
      this.icon_9gxyau$_0.setValue_9rddgb$(this, IconI$icon_metadata, icon);
    }
  });
  IconI.prototype.render = function () {
    I.prototype.render.call(this);
    if (this.icon != null) {
      this.renderIcon_0(this.icon);
    }
  };
  IconI.prototype.renderIcon_0 = function (icon) {
    icon != null ? (icon.apply_54c9de$(this), Unit) : null;
  };
  function IconI$icon$lambda(this$IconI) {
    return function (property, old, new_0) {
      this$IconI.renderIcon_0(new_0);
      return Unit;
    };
  }
  IconI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IconI',
    interfaces: [I]
  };
  function IconProvider() {
  }
  IconProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IconProvider',
    interfaces: []
  };
  Delegates$observable$ObjectLiteral_8.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_8.prototype.constructor = Delegates$observable$ObjectLiteral_8;
  function Delegates$observable$ObjectLiteral_8(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_8.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_8.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function Anchor(link, target, useDisplay) {
    Anchor$Companion_getInstance();
    if (link === void 0)
      link = null;
    if (target === void 0)
      target = '_blank';
    if (useDisplay === void 0)
      useDisplay = true;
    A.call(this);
    this.useDisplay = useDisplay;
    this.link_mu86bh$_0 = new Delegates$observable$ObjectLiteral_8(Anchor$link$lambda(this), link);
    this.iconI_ro6qv$_0 = lazy(Anchor$iconI$lambda);
    this.onClickHandler_0 = Anchor$onClickHandler$lambda;
    this._target = target;
  }
  var Anchor$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(Anchor.prototype, 'link', {
    get: function () {
      return this.link_mu86bh$_0.getValue_lrcp0p$(this, Anchor$link_metadata);
    },
    set: function (link) {
      this.link_mu86bh$_0.setValue_9rddgb$(this, Anchor$link_metadata, link);
    }
  });
  Object.defineProperty(Anchor.prototype, 'iconI', {
    get: function () {
      return this.iconI_ro6qv$_0.value;
    }
  });
  Anchor.prototype.render = function () {
    A.prototype.render.call(this);
    this.addClass_bx842b$(Anchor$Companion_getInstance().classSelector);
    this.renderLink_0(this.link);
  };
  Anchor.prototype.didMount = function () {
    A.prototype.didMount.call(this);
    onClick(this, this.onClickHandler_0);
  };
  Anchor.prototype.renderLink_0 = function (link) {
    var tmp$;
    if (link == null) {
      this._style.cursor = 'auto';
    }
     else {
      this._style.cursor = 'pointer';
      if (Kotlin.isType(link, ExternalLink)) {
        this._href = (tmp$ = link.url) != null ? tmp$.toString() : null;
        if (this.useDisplay) {
          this.textContent = link.display;
          this.renderIcon_0(link);
        }
      }
       else if (Kotlin.isType(link, LocalLink)) {
        this._href = link.path.toString();
        if (this.useDisplay) {
          this.textContent = link.display;
          this.renderIcon_0(link);
        }
      }
    }
  };
  Anchor.prototype.renderIcon_0 = function (link) {
    if (link.icon != null) {
      this.iconI.icon = link.icon;
      this.appendChild_sr04hg$(this.iconI);
    }
     else if (this.hasChild_sr04hg$(this.iconI)) {
      this.removeChild_sr04hg$(this.iconI);
    }
  };
  function Anchor$Companion() {
    Anchor$Companion_instance = this;
    this.classSelector_9rfddq$_0 = toClassSelector('fg-bn-anchor');
    this.rule_5r7rwf$_0 = Anchor$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Anchor$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_9rfddq$_0;
    }
  });
  Object.defineProperty(Anchor$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_5r7rwf$_0;
    }
  });
  function Anchor$Companion$rule$lambda($receiver) {
    return Unit;
  }
  Anchor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var Anchor$Companion_instance = null;
  function Anchor$Companion_getInstance() {
    if (Anchor$Companion_instance === null) {
      new Anchor$Companion();
    }
    return Anchor$Companion_instance;
  }
  function Anchor$link$lambda(this$Anchor) {
    return function (property, old, new_0) {
      this$Anchor.renderLink_0(new_0);
      return Unit;
    };
  }
  function Anchor$iconI$lambda() {
    return new IconI();
  }
  function Anchor$onClickHandler$lambda(it) {
    return Unit;
  }
  Anchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Anchor',
    interfaces: [A]
  };
  function ExternalLink(url, display, icon) {
    if (url === void 0)
      url = null;
    if (icon === void 0)
      icon = FontAwesomeIcons_getInstance().external_link_p56ikg$();
    Link.call(this, display, icon);
    this.url = url;
  }
  ExternalLink.prototype.compareTo_11rb$ = function (other) {
    return base.CompareTo.nullSafe_oaftn8$(this.url, other.url);
  };
  ExternalLink.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExternalLink',
    interfaces: [Link]
  };
  function Link(display, icon) {
    this.display = display;
    this.icon = icon;
  }
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [Comparable]
  };
  function LocalLink(path, display, icon) {
    if (icon === void 0)
      icon = FontAwesomeIcons_getInstance().link_p56ikg$();
    Link.call(this, display, icon);
    this.path = path;
  }
  LocalLink.prototype.compareTo_11rb$ = function (other) {
    return base.CompareTo.nullSafe_oaftn8$(this.path, other.path);
  };
  LocalLink.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalLink',
    interfaces: [Link]
  };
  Delegates$observable$ObjectLiteral_9.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_9.prototype.constructor = Delegates$observable$ObjectLiteral_9;
  function Delegates$observable$ObjectLiteral_9(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_9.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_9.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_10.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_10.prototype.constructor = Delegates$observable$ObjectLiteral_10;
  function Delegates$observable$ObjectLiteral_10(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_10.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_10.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function Menu(label, shortcut) {
    Menu$Companion_getInstance();
    if (label === void 0)
      label = null;
    if (shortcut === void 0)
      shortcut = null;
    Div.call(this);
    this.beforePerformingMenuItemActionListeners_avs7v$_0 = ArrayList_init();
    this.afterPerformingMenuItemActionListeners_kweg3s$_0 = ArrayList_init();
    this.beforePerformingMenuItemActionHandler_65jze8$_0 = Menu$beforePerformingMenuItemActionHandler$lambda(this);
    this.afterPerformingMenuItemActionHandler_iafdcz$_0 = Menu$afterPerformingMenuItemActionHandler$lambda(this);
    this.label_nal31a$_0 = new Delegates$observable$ObjectLiteral_9(Menu$label$lambda, label);
    this.shortcut_sjpqe4$_0 = new Delegates$observable$ObjectLiteral_10(Menu$shortcut$lambda, shortcut);
  }
  var Menu$label_metadata = new PropertyMetadata('label');
  Object.defineProperty(Menu.prototype, 'label', {
    get: function () {
      return this.label_nal31a$_0.getValue_lrcp0p$(this, Menu$label_metadata);
    },
    set: function (label) {
      this.label_nal31a$_0.setValue_9rddgb$(this, Menu$label_metadata, label);
    }
  });
  var Menu$shortcut_metadata = new PropertyMetadata('shortcut');
  Object.defineProperty(Menu.prototype, 'shortcut', {
    get: function () {
      return this.shortcut_sjpqe4$_0.getValue_lrcp0p$(this, Menu$shortcut_metadata);
    },
    set: function (shortcut) {
      this.shortcut_sjpqe4$_0.setValue_9rddgb$(this, Menu$shortcut_metadata, shortcut);
    }
  });
  Menu.prototype.onBeforePerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.beforePerformingMenuItemActionListeners_avs7v$_0.add_11rb$(listener);
  };
  Menu.prototype.unBeforePerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.beforePerformingMenuItemActionListeners_avs7v$_0.remove_11rb$(listener);
  };
  Menu.prototype.onAfterPerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.afterPerformingMenuItemActionListeners_kweg3s$_0.add_11rb$(listener);
  };
  Menu.prototype.unAfterPerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.afterPerformingMenuItemActionListeners_kweg3s$_0.remove_11rb$(listener);
  };
  Menu.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(Menu$Companion_getInstance().classSelector);
  };
  Menu.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (Kotlin.isType(child, MenuItem)) {
      child.onBeforePerformingAction_xbm201$(this.beforePerformingMenuItemActionHandler_65jze8$_0);
      child.onAfterPerformingAction_xbm201$(this.afterPerformingMenuItemActionHandler_iafdcz$_0);
    }
  };
  function Menu$Companion() {
    Menu$Companion_instance = this;
    this.classSelector_6i6b3x$_0 = new ClassSelector('fg-bn-menu');
    this.rule_rd7kws$_0 = Menu$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Menu$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_6i6b3x$_0;
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_rd7kws$_0;
    }
  });
  function Menu$Companion$rule$lambda($receiver) {
    $receiver._display = 'inline-block';
    $receiver._paddingTop = '4px';
    $receiver._paddingBottom = '4px';
    $receiver._backgroundColor = RgbColor.Factory.WHITE.toString();
    return Unit;
  }
  Menu$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var Menu$Companion_instance = null;
  function Menu$Companion_getInstance() {
    if (Menu$Companion_instance === null) {
      new Menu$Companion();
    }
    return Menu$Companion_instance;
  }
  function Menu$beforePerformingMenuItemActionHandler$lambda(this$Menu) {
    return function (action) {
      var $receiver = this$Menu.beforePerformingMenuItemActionListeners_avs7v$_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(action, this$Menu);
      }
      return Unit;
    };
  }
  function Menu$afterPerformingMenuItemActionHandler$lambda(this$Menu) {
    return function (action) {
      var $receiver = this$Menu.afterPerformingMenuItemActionListeners_kweg3s$_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(action, this$Menu);
      }
      return Unit;
    };
  }
  function Menu$label$lambda(property, old, new_0) {
    return Unit;
  }
  function Menu$shortcut$lambda(property, old, new_0) {
    return Unit;
  }
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: [Div]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function MenuBar() {
    MenuBar$Companion_getInstance();
    Div.call(this);
    this.menuButtonByMenu_0 = LinkedHashMap_init();
    this.beforePerformingMenuItemActionHandler_0 = MenuBar$beforePerformingMenuItemActionHandler$lambda;
    this.afterPerformingMenuItemActionHandler_0 = MenuBar$afterPerformingMenuItemActionHandler$lambda(this);
  }
  MenuBar.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MenuBar$Companion_getInstance().classSelector);
  };
  function MenuBar$childAdded$lambda(closure$child, this$MenuBar) {
    return function (actionPerform) {
      var tmp$;
      Kotlin.isType(tmp$ = actionPerform.action, SelectableAction) ? tmp$ : throwCCE();
      if (actionPerform.action.selected) {
        this$MenuBar.openMenu_0(closure$child);
      }
       else {
        closure$child.hide();
      }
      return Unit;
    };
  }
  function MenuBar$childAdded$lambda_0(this$MenuBar, closure$child, closure$menuButton) {
    return function (it) {
      var anyMenuOpen = this$MenuBar.anyMenuOpen_0();
      if (anyMenuOpen) {
        this$MenuBar.openMenu_0(closure$child);
        closure$menuButton.action.selected = true;
      }
      return Unit;
    };
  }
  MenuBar.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (!(Kotlin.isType(child, Menu) || Kotlin.isType(child, MenuButton))) {
      throw IllegalArgumentException_init('Only a Menu can be added to a MenuBar: ' + get_js(Kotlin.getKClassFromExpression(child)).name);
    }
    if (Kotlin.isType(child, Menu)) {
      child.hide();
      var menuButton = new MenuButton(new SelectableAction(child.label, void 0, void 0, void 0, void 0, void 0, MenuBar$childAdded$lambda(child, this)));
      Div.prototype.appendChild_sr04hg$.call(this, menuButton);
      this.menuButtonByMenu_0.put_xwzc9p$(child, menuButton);
      child.onBeforePerformingMenuItemAction_a8ajpl$(this.beforePerformingMenuItemActionHandler_0);
      child.onAfterPerformingMenuItemAction_a8ajpl$(this.afterPerformingMenuItemActionHandler_0);
      onMouseEnter(menuButton, MenuBar$childAdded$lambda_0(this, child, menuButton));
    }
  };
  MenuBar.prototype.anyMenuOpen_0 = function () {
    var tmp$;
    tmp$ = this.menuButtonByMenu_0.values.iterator();
    while (tmp$.hasNext()) {
      var mb = tmp$.next();
      if (mb.action.selected) {
        return true;
      }
    }
    return false;
  };
  MenuBar.prototype.childRemoved_sr04hg$ = function (child) {
    Div.prototype.childRemoved_sr04hg$.call(this, child);
    if (Kotlin.isType(child, Menu)) {
      this.menuButtonByMenu_0.remove_11rb$(child);
    }
  };
  MenuBar.prototype.closeOthers_0 = function (exception) {
    var tmp$;
    tmp$ = this.childElements.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      if (!equals(child, exception) && Kotlin.isType(child, Menu)) {
        this.closeMenu_0(child);
      }
    }
  };
  MenuBar.prototype.openMenu_0 = function (menu) {
    this.closeOthers_0(menu);
    menu.show();
    var menuButton = ensureNotNull(this.menuButtonByMenu_0.get_11rb$(menu));
    var left = menuButton.boundingClientRect.left - get_px(get_computedStyle(elements.BODY).marginLeft).value;
    menu._style.top = menuButton.boundingClientRect.height.toString() + 'px';
    menu._style.left = left.toString() + 'px';
  };
  MenuBar.prototype.closeMenu_0 = function (menu) {
    var tmp$, tmp$_0;
    menu.hide();
    (tmp$_0 = (tmp$ = this.menuButtonByMenu_0.get_11rb$(menu)) != null ? tmp$.action : null) != null ? (tmp$_0.selected = false) : null;
  };
  function MenuBar$Companion() {
    MenuBar$Companion_instance = this;
    this.classSelector_olx192$_0 = toClassSelector('fg-bn-menu-bar');
    this.rule_qv65bf$_0 = MenuBar$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuBar$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_olx192$_0;
    }
  });
  Object.defineProperty(MenuBar$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_qv65bf$_0;
    }
  });
  function MenuBar$Companion$rule$lambda$lambda($receiver) {
    $receiver._position = 'absolute';
    $receiver._border = '1px solid #ccc';
    return Unit;
  }
  function MenuBar$Companion$rule$lambda($receiver) {
    $receiver._position = 'relative';
    child($receiver, Menu$Companion_getInstance().classSelector, MenuBar$Companion$rule$lambda$lambda);
    return Unit;
  }
  MenuBar$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var MenuBar$Companion_instance = null;
  function MenuBar$Companion_getInstance() {
    if (MenuBar$Companion_instance === null) {
      new MenuBar$Companion();
    }
    return MenuBar$Companion_instance;
  }
  function MenuBar$beforePerformingMenuItemActionHandler$lambda(action, menu) {
    return Unit;
  }
  function MenuBar$afterPerformingMenuItemActionHandler$lambda(this$MenuBar) {
    return function (action, menu) {
      this$MenuBar.closeMenu_0(menu);
      return Unit;
    };
  }
  MenuBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuBar',
    interfaces: [Div]
  };
  function MenuButton(action) {
    MenuButton$Companion_getInstance();
    ToggleButton.call(this, action);
  }
  MenuButton.prototype.render = function () {
    ToggleButton.prototype.render.call(this);
    this.addClass_bx842b$(MenuButton$Companion_getInstance().classSelector);
  };
  function MenuButton$Companion() {
    MenuButton$Companion_instance = this;
    this.classSelector_cjhgwl$_0 = toClassSelector('fg-bn-menu-button');
    this.rule_v8c822$_0 = MenuButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_cjhgwl$_0;
    }
  });
  Object.defineProperty(MenuButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_v8c822$_0;
    }
  });
  function MenuButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._borderColor = '#e4e4e4';
    return Unit;
  }
  function MenuButton$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._borderBottom = 'none';
    $receiver._borderColor = '#e4e4e4';
    $receiver._backgroundColor = 'rgb(118, 178, 240)';
    $receiver._boxShadow = 'none';
    return Unit;
  }
  function MenuButton$Companion$rule$lambda($receiver) {
    $receiver._borderColor = '#e4e4e4';
    $receiver._borderRadius = '0';
    focus($receiver, MenuButton$Companion$rule$lambda$lambda);
    and_0($receiver, '.selected', MenuButton$Companion$rule$lambda$lambda_0);
    return Unit;
  }
  MenuButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var MenuButton$Companion_instance = null;
  function MenuButton$Companion_getInstance() {
    if (MenuButton$Companion_instance === null) {
      new MenuButton$Companion();
    }
    return MenuButton$Companion_instance;
  }
  MenuButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuButton',
    interfaces: [ToggleButton]
  };
  function MenuItem(action) {
    MenuItem$Companion_getInstance();
    Div.call(this);
    this.action_5viecf$_0 = action;
    this.hovered_7bzj98$_0 = false;
    this.focused_2p5wew$_0 = false;
    this.pressed_ooaxer$_0 = false;
    this.beforePerformingActionListeners_fzhw8a$_0 = ArrayList_init();
    this.afterPerformingActionListeners_yjw0s7$_0 = ArrayList_init();
    this.selectedIcon_e3tgin$_ea2gf6$_0 = lazy(MenuItem$selectedIcon$lambda);
    this.primaryText_c96t00$_10huwv$_0 = lazy(MenuItem$primaryText$lambda);
    this.secondaryTextSpan_htk1x0$_ywld47$_0 = lazy(MenuItem$secondaryTextSpan$lambda);
    this.secondaryText_embahq$_cp922x$_0 = lazy(MenuItem$secondaryText$lambda(this));
    this.actionPropertyChangedHandler_juner8$_0 = MenuItem$actionPropertyChangedHandler$lambda(this);
    this.clickHandler_xufh83$_0 = MenuItem$clickHandler$lambda(this, action);
    this.mouseEnterHandler_xu3kqg$_0 = MenuItem$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_tmz4fb$_0 = MenuItem$mouseLeaveHandler$lambda(this);
    this.focusHandler_mloh4t$_0 = MenuItem$focusHandler$lambda(this);
    this.blurHandler_8ei404$_0 = MenuItem$blurHandler$lambda(this);
    this.mouseDownHandler_89aywe$_0 = MenuItem$mouseDownHandler$lambda(action, this);
    this.mouseUpHandler_l6o9mz$_0 = MenuItem$mouseUpHandler$lambda(this);
    this.menuItemStyle = new MenuItem$Style();
  }
  Object.defineProperty(MenuItem.prototype, 'action', {
    get: function () {
      return this.action_5viecf$_0;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'hovered', {
    get: function () {
      return this.hovered_7bzj98$_0;
    },
    set: function (hovered) {
      this.hovered_7bzj98$_0 = hovered;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'focused', {
    get: function () {
      return this.focused_2p5wew$_0;
    },
    set: function (focused) {
      this.focused_2p5wew$_0 = focused;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'pressed', {
    get: function () {
      return this.pressed_ooaxer$_0;
    },
    set: function (pressed) {
      this.pressed_ooaxer$_0 = pressed;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'selectedIcon_e3tgin$_0', {
    get: function () {
      return this.selectedIcon_e3tgin$_ea2gf6$_0.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'primaryText_c96t00$_0', {
    get: function () {
      return this.primaryText_c96t00$_10huwv$_0.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'secondaryTextSpan_htk1x0$_0', {
    get: function () {
      return this.secondaryTextSpan_htk1x0$_ywld47$_0.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'secondaryText_embahq$_0', {
    get: function () {
      return this.secondaryText_embahq$_cp922x$_0.value;
    }
  });
  MenuItem.prototype.onHover = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.unHover = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.onFocus = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.unFocus = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.onPressed = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.unPressed = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.onEnabled = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.onDisabled = function () {
    this.renderColor_zgysc2$_0();
  };
  MenuItem.prototype.render = function () {
    var tmp$;
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MenuItem$Companion_getInstance().classSelector);
    this._tabindex = '0';
    if (Kotlin.isType(this.action, SelectableAction)) {
      var action = Kotlin.isType(tmp$ = this.action, SelectableAction) ? tmp$ : throwCCE();
      this.appendChild_sr04hg$(this.selectedIcon_e3tgin$_0);
      this.renderSelected_fe4o73$_0(action.selected);
    }
    this.appendChild_sr04hg$(this.primaryText_c96t00$_0);
    this.appendChild_sr04hg$(this.secondaryText_embahq$_0);
    this.primaryText_c96t00$_0.textContent = this.action.label;
    this.renderShortcut_ucgt2r$_0(this.action.shortcut);
    this.renderDisabled_hqea2q$_0(this.action.disabled);
  };
  MenuItem.prototype.renderShortcut_ucgt2r$_0 = function (key) {
    var tmp$;
    this.secondaryTextSpan_htk1x0$_0.removeChildren();
    if (key != null) {
      tmp$ = key.modifiers.list.iterator();
      while (tmp$.hasNext()) {
        var modifier = tmp$.next();
        if (modifier === Modifier.meta) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text('\u2318'));
          }
           else {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else if (modifier === Modifier.shift) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text('\u21E7'));
          }
           else {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else if (modifier === Modifier.alt) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text('\u2325'));
          }
           else {
            this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else {
          this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text(modifier.name));
        }
      }
      this.secondaryTextSpan_htk1x0$_0.appendChild_sr04hg$(new Text(key.key.toUpperCase()));
    }
  };
  MenuItem.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_juner8$_0);
    onClick(this, this.clickHandler_xufh83$_0);
    onMouseEnter(this, this.mouseEnterHandler_xu3kqg$_0);
    onMouseLeave(this, this.mouseLeaveHandler_tmz4fb$_0);
    onFocus(this, this.focusHandler_mloh4t$_0);
    onBlur(this, this.blurHandler_8ei404$_0);
    onMouseDown(this, this.mouseDownHandler_89aywe$_0);
    onMouseUp(this, this.mouseUpHandler_l6o9mz$_0);
  };
  MenuItem.prototype.renderSelected_fe4o73$_0 = function (selected) {
    if (selected) {
      this.addClass_bx842b$(SelectableAction$Statics_getInstance().selectedSelector);
      this.selectedIcon_e3tgin$_0._style.opacity = '1';
    }
     else {
      this.removeClass_bx842b$(SelectableAction$Statics_getInstance().selectedSelector);
      this.selectedIcon_e3tgin$_0._style.opacity = '0';
    }
  };
  MenuItem.prototype.renderDisabled_hqea2q$_0 = function (disabled) {
    if (disabled) {
      this.toggleClass_ivxn3r$(MenuItem$Companion_getInstance().DISABLED.value, true);
    }
     else {
      this.toggleClass_ivxn3r$(MenuItem$Companion_getInstance().DISABLED.value);
    }
  };
  MenuItem.prototype.onBeforePerformingAction_xbm201$ = function (listener) {
    this.beforePerformingActionListeners_fzhw8a$_0.add_11rb$(listener);
  };
  MenuItem.prototype.unBeforePerformingAction_xbm201$ = function (listener) {
    this.beforePerformingActionListeners_fzhw8a$_0.remove_11rb$(listener);
  };
  MenuItem.prototype.onAfterPerformingAction_xbm201$ = function (listener) {
    this.afterPerformingActionListeners_yjw0s7$_0.add_11rb$(listener);
  };
  MenuItem.prototype.unAfterPerformingAction_xbm201$ = function (listener) {
    this.afterPerformingActionListeners_yjw0s7$_0.remove_11rb$(listener);
  };
  MenuItem.prototype.renderColor_zgysc2$_0 = function () {
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
  };
  function MenuItem$Style() {
    ElementStyle.call(this);
    this.color_tk22pz$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_iwmjuh$_0 = RgbColor.Factory.WHITE;
    this.pressed = new MenuItem$Style$pressed$ObjectLiteral();
    this.hovered = new MenuItem$Style$hovered$ObjectLiteral();
    this.focused = new MenuItem$Style$focused$ObjectLiteral();
    this.disabled = new MenuItem$Style$disabled$ObjectLiteral();
  }
  Object.defineProperty(MenuItem$Style.prototype, 'color', {
    get: function () {
      return this.color_tk22pz$_0;
    },
    set: function (color) {
      this.color_tk22pz$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_iwmjuh$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_iwmjuh$_0 = backgroundColor;
    }
  });
  function MenuItem$Style$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_nhg0qa$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_c2grj0$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MenuItem$Style$pressed$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_nhg0qa$_0;
    },
    set: function (color) {
      this.color_nhg0qa$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_c2grj0$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_c2grj0$_0 = backgroundColor;
    }
  });
  MenuItem$Style$pressed$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_nilscn$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_kqk48b$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MenuItem$Style$hovered$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_nilscn$_0;
    },
    set: function (color) {
      this.color_nilscn$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$hovered$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_kqk48b$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_kqk48b$_0 = backgroundColor;
    }
  });
  MenuItem$Style$hovered$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_10q71$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_klsssv$_0 = RgbColor.Factory.WHITE;
  }
  Object.defineProperty(MenuItem$Style$focused$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_10q71$_0;
    },
    set: function (color) {
      this.color_10q71$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$focused$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_klsssv$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_klsssv$_0 = backgroundColor;
    }
  });
  MenuItem$Style$focused$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_gw9sb8$_0 = RgbColor.Factory.from_61zpoe$('#909090');
    this.backgroundColor_l1cmbe$_0 = RgbColor.Factory.WHITE;
  }
  Object.defineProperty(MenuItem$Style$disabled$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_gw9sb8$_0;
    },
    set: function (color) {
      this.color_gw9sb8$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$disabled$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_l1cmbe$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_l1cmbe$_0 = backgroundColor;
    }
  });
  MenuItem$Style$disabled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  MenuItem$Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: [ElementStyle]
  };
  function MenuItem$Companion() {
    MenuItem$Companion_instance = this;
    this.DISABLED = toClassSelector('disabled');
    this.classSelector_89l1be$_0 = new ClassSelector('fg-bn-menu-item');
    this.rule_u3zxpl$_0 = MenuItem$Companion$rule$lambda(this);
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuItem$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_89l1be$_0;
    }
  });
  Object.defineProperty(MenuItem$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_u3zxpl$_0;
    }
  });
  function MenuItem$Companion$rule$lambda$lambda($receiver) {
    $receiver._marginRight = '24px';
    $receiver._marginLeft = '0px';
    $receiver._flex = 'initial';
    return Unit;
  }
  function MenuItem$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._flex = '1';
    return Unit;
  }
  function MenuItem$Companion$rule$lambda$lambda_1($receiver) {
    $receiver._marginLeft = '8px';
    $receiver._flex = 'initial';
    return Unit;
  }
  function MenuItem$Companion$rule$lambda$lambda_2($receiver) {
    $receiver._outline = 'none';
    return Unit;
  }
  function MenuItem$Companion$rule$lambda$lambda_3($receiver) {
    $receiver._cursor = 'not-allowed';
    return Unit;
  }
  function MenuItem$Companion$rule$lambda(this$MenuItem$) {
    return function ($receiver) {
      $receiver._cursor = 'pointer';
      $receiver._paddingLeft = '8px';
      $receiver._paddingRight = '24px';
      $receiver._textAlign = 'left';
      $receiver._display = 'flex';
      $receiver._flexWrap = 'nowrap';
      $receiver._flexDirection = 'row';
      $receiver._alignItems = 'center';
      $receiver._fontSize = '15px';
      child_0($receiver, '.selected-icon', MenuItem$Companion$rule$lambda$lambda);
      child_0($receiver, '.primary-text', MenuItem$Companion$rule$lambda$lambda_0);
      child_0($receiver, '.secondary-text', MenuItem$Companion$rule$lambda$lambda_1);
      focus($receiver, MenuItem$Companion$rule$lambda$lambda_2);
      and($receiver, this$MenuItem$.DISABLED, MenuItem$Companion$rule$lambda$lambda_3);
      return Unit;
    };
  }
  MenuItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var MenuItem$Companion_instance = null;
  function MenuItem$Companion_getInstance() {
    if (MenuItem$Companion_instance === null) {
      new MenuItem$Companion();
    }
    return MenuItem$Companion_instance;
  }
  function MenuItem$selectedIcon$lambda() {
    var iconI = new IconI();
    iconI.icon = FontAwesomeIcons_getInstance().check_p56ikg$();
    iconI.addClass_61zpoe$('selected-icon');
    return iconI;
  }
  function MenuItem$primaryText$lambda() {
    var span = new Span();
    span.addClass_61zpoe$('primary-text');
    return span;
  }
  function MenuItem$secondaryTextSpan$lambda() {
    var span = new Span();
    return span;
  }
  function MenuItem$secondaryText$lambda(this$MenuItem) {
    return function () {
      var div = new Div();
      div.addClass_61zpoe$('secondary-text');
      div.appendChild_sr04hg$(this$MenuItem.secondaryTextSpan_htk1x0$_0);
      return div;
    };
  }
  function MenuItem$actionPropertyChangedHandler$lambda(this$MenuItem) {
    return function (action, property, old, new_0) {
      if (equals(property.callableName, getPropertyCallableRef('label', 1, function ($receiver) {
        return $receiver.label;
      }, function ($receiver, value) {
        $receiver.label = value;
      }).callableName)) {
        this$MenuItem.primaryText_c96t00$_0.textContent = action.label;
      }
       else if (equals(property.callableName, getPropertyCallableRef('shortcut', 1, function ($receiver) {
        return $receiver.shortcut;
      }, function ($receiver, value) {
        $receiver.shortcut = value;
      }).callableName)) {
        this$MenuItem.renderShortcut_ucgt2r$_0(action.shortcut);
      }
       else if (equals(property.callableName, getPropertyCallableRef('enabled', 1, function ($receiver) {
        return $receiver.enabled;
      }, function ($receiver, value) {
        $receiver.enabled = value;
      }).callableName)) {
        this$MenuItem.renderDisabled_hqea2q$_0(action.disabled);
        if (action.enabled) {
          this$MenuItem.onEnabled();
        }
         else {
          this$MenuItem.onDisabled();
        }
      }
      if (Kotlin.isType(action, SelectableAction)) {
        if (equals(property.callableName, getPropertyCallableRef('selected', 1, function ($receiver) {
          return $receiver.selected;
        }, function ($receiver, value) {
          $receiver.selected = value;
        }).callableName)) {
          this$MenuItem.renderSelected_fe4o73$_0(action.selected);
        }
      }
      return Unit;
    };
  }
  function MenuItem$clickHandler$lambda(this$MenuItem, closure$action) {
    return function (event) {
      console.log('MenuItem.clicked', event);
      var $receiver = this$MenuItem.beforePerformingActionListeners_fzhw8a$_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(closure$action);
      }
      if (Kotlin.isType(closure$action, SelectableAction)) {
        closure$action.perform_54c9de$(this$MenuItem);
      }
       else {
        closure$action.perform_54c9de$(this$MenuItem);
      }
      var $receiver_0 = this$MenuItem.afterPerformingActionListeners_yjw0s7$_0;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0(closure$action);
      }
      return Unit;
    };
  }
  function MenuItem$mouseEnterHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.hovered = true;
      this$MenuItem.toggleClass_ivxn3r$('hovered', true);
      this$MenuItem.onHover();
      return Unit;
    };
  }
  function MenuItem$mouseLeaveHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.hovered = false;
      this$MenuItem.toggleClass_ivxn3r$('hovered');
      this$MenuItem.unHover();
      return Unit;
    };
  }
  function MenuItem$focusHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.focused = true;
      this$MenuItem.toggleClass_ivxn3r$('focused', true);
      this$MenuItem.onFocus();
      return Unit;
    };
  }
  function MenuItem$blurHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.focused = false;
      this$MenuItem.toggleClass_ivxn3r$('focused');
      this$MenuItem.unFocus();
      return Unit;
    };
  }
  function MenuItem$mouseDownHandler$lambda(closure$action, this$MenuItem) {
    return function (event) {
      if (closure$action.enabled) {
        this$MenuItem.pressed = true;
        this$MenuItem.toggleClass_ivxn3r$('pressed', true);
        this$MenuItem.onPressed();
      }
      return Unit;
    };
  }
  function MenuItem$mouseUpHandler$lambda(this$MenuItem) {
    return function (event) {
      this$MenuItem.pressed = false;
      this$MenuItem.toggleClass_ivxn3r$('pressed');
      this$MenuItem.unPressed();
      return Unit;
    };
  }
  MenuItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuItem',
    interfaces: [ActionBean, Div]
  };
  var pkg_0;
  function collapseOn$lambda(closure$action, this$collapseOn) {
    return function (f, property, f_0, f_1) {
      if (equals(property.callableName, getPropertyCallableRef('selected', 1, function ($receiver) {
        return $receiver.selected;
      }, function ($receiver, value) {
        $receiver.selected = value;
      }).callableName))
        if (closure$action.selected) {
          this$collapseOn.show();
        }
         else {
          this$collapseOn.hide();
        }
      return Unit;
    };
  }
  function collapseOn($receiver, action) {
    action.onPropertyChanged_saq78d$(collapseOn$lambda(action, $receiver));
  }
  Delegates$observable$ObjectLiteral_11.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_11.prototype.constructor = Delegates$observable$ObjectLiteral_11;
  function Delegates$observable$ObjectLiteral_11(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_11.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_11.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_12.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_12.prototype.constructor = Delegates$observable$ObjectLiteral_12;
  function Delegates$observable$ObjectLiteral_12(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_12.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_12.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  Delegates$observable$ObjectLiteral_13.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_13.prototype.constructor = Delegates$observable$ObjectLiteral_13;
  function Delegates$observable$ObjectLiteral_13(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_13.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_13.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function LabelledRadioButton(checked, labelText, checkedIcon, unCheckedIcon) {
    LabelledRadioButton$Companion_getInstance();
    if (checkedIcon === void 0)
      checkedIcon = null;
    if (unCheckedIcon === void 0)
      unCheckedIcon = null;
    Div.call(this);
    this.radioButton_ornwgg$_0 = lazy(LabelledRadioButton$radioButton$lambda(checked));
    this.checkedIcon_4mcfnn$_0 = new Delegates$observable$ObjectLiteral_11(LabelledRadioButton$checkedIcon$lambda(this), checkedIcon);
    this.unCheckedIcon_tl1pe2$_0 = new Delegates$observable$ObjectLiteral_12(LabelledRadioButton$unCheckedIcon$lambda(this), unCheckedIcon);
    this.iconI_4y1vzn$_0 = lazy(LabelledRadioButton$iconI$lambda(unCheckedIcon));
    this.label_3k92nr$_0 = lazy(LabelledRadioButton$label$lambda);
    this.labelText_f78m3o$_0 = new Delegates$observable$ObjectLiteral_13(LabelledRadioButton$labelText$lambda(this), labelText);
    this.checkedHandler_ep5kgk$_0 = LabelledRadioButton$checkedHandler$lambda(this);
    this.clickHandler_kjxp11$_0 = LabelledRadioButton$clickHandler$lambda(this);
  }
  Object.defineProperty(LabelledRadioButton.prototype, 'radioButton', {
    get: function () {
      return this.radioButton_ornwgg$_0.value;
    }
  });
  var LabelledRadioButton$checkedIcon_metadata = new PropertyMetadata('checkedIcon');
  Object.defineProperty(LabelledRadioButton.prototype, 'checkedIcon', {
    get: function () {
      return this.checkedIcon_4mcfnn$_0.getValue_lrcp0p$(this, LabelledRadioButton$checkedIcon_metadata);
    },
    set: function (checkedIcon) {
      this.checkedIcon_4mcfnn$_0.setValue_9rddgb$(this, LabelledRadioButton$checkedIcon_metadata, checkedIcon);
    }
  });
  var LabelledRadioButton$unCheckedIcon_metadata = new PropertyMetadata('unCheckedIcon');
  Object.defineProperty(LabelledRadioButton.prototype, 'unCheckedIcon', {
    get: function () {
      return this.unCheckedIcon_tl1pe2$_0.getValue_lrcp0p$(this, LabelledRadioButton$unCheckedIcon_metadata);
    },
    set: function (unCheckedIcon) {
      this.unCheckedIcon_tl1pe2$_0.setValue_9rddgb$(this, LabelledRadioButton$unCheckedIcon_metadata, unCheckedIcon);
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'iconI', {
    get: function () {
      return this.iconI_4y1vzn$_0.value;
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'label', {
    get: function () {
      return this.label_3k92nr$_0.value;
    }
  });
  var LabelledRadioButton$labelText_metadata = new PropertyMetadata('labelText');
  Object.defineProperty(LabelledRadioButton.prototype, 'labelText', {
    get: function () {
      return this.labelText_f78m3o$_0.getValue_lrcp0p$(this, LabelledRadioButton$labelText_metadata);
    },
    set: function (labelText) {
      this.labelText_f78m3o$_0.setValue_9rddgb$(this, LabelledRadioButton$labelText_metadata, labelText);
    }
  });
  LabelledRadioButton.prototype.render = function () {
    this.addClass_bx842b$(LabelledRadioButton$Companion_getInstance().classSelector);
    this.appendChild_sr04hg$(this.radioButton);
    this.appendChild_sr04hg$(this.iconI);
    this.appendChild_sr04hg$(this.label);
    this.renderLabel_1re9j4$_0(this.labelText);
  };
  LabelledRadioButton.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    onClick(this.label, this.clickHandler_kjxp11$_0);
    onClick(this.iconI, this.clickHandler_kjxp11$_0);
    this.radioButton.onChecked_y8twos$(this.checkedHandler_ep5kgk$_0);
  };
  LabelledRadioButton.prototype.renderLabel_1re9j4$_0 = function (labelText) {
    if (labelText != null) {
      this.label.textContent = labelText;
      this.label.show();
    }
     else {
      this.label.removeChildren();
      this.label.hide();
    }
  };
  LabelledRadioButton.prototype.renderChecked_tihzjt$_0 = function (checked) {
    if (this.checkedIcon != null && this.unCheckedIcon != null) {
      this.radioButton._style.opacity = '0';
      this.iconI.show();
      this.iconI.icon = checked ? this.checkedIcon : this.unCheckedIcon;
    }
     else {
      this.radioButton._style.opacity = '';
      this.iconI.hide();
    }
  };
  function LabelledRadioButton$Companion() {
    LabelledRadioButton$Companion_instance = this;
    this.classSelector_hd7x60$_0 = toClassSelector('bn-labelled-radio-button');
    this.rule_hofqhz$_0 = LabelledRadioButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(LabelledRadioButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_hd7x60$_0;
    }
  });
  Object.defineProperty(LabelledRadioButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_hofqhz$_0;
    }
  });
  function LabelledRadioButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
    return Unit;
  }
  function LabelledRadioButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
    return Unit;
  }
  function LabelledRadioButton$Companion$rule$lambda$lambda_0($receiver) {
    hover($receiver, LabelledRadioButton$Companion$rule$lambda$lambda$lambda);
    return Unit;
  }
  function LabelledRadioButton$Companion$rule$lambda($receiver) {
    hover($receiver, LabelledRadioButton$Companion$rule$lambda$lambda);
    child_0($receiver, 'label', LabelledRadioButton$Companion$rule$lambda$lambda_0);
    return Unit;
  }
  LabelledRadioButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var LabelledRadioButton$Companion_instance = null;
  function LabelledRadioButton$Companion_getInstance() {
    if (LabelledRadioButton$Companion_instance === null) {
      new LabelledRadioButton$Companion();
    }
    return LabelledRadioButton$Companion_instance;
  }
  function LabelledRadioButton$radioButton$lambda(closure$checked) {
    return function () {
      return new RadioButton(closure$checked);
    };
  }
  function LabelledRadioButton$checkedIcon$lambda(this$LabelledRadioButton) {
    return function (property, old, new_0) {
      this$LabelledRadioButton.renderChecked_tihzjt$_0(this$LabelledRadioButton.radioButton.checked);
      return Unit;
    };
  }
  function LabelledRadioButton$unCheckedIcon$lambda(this$LabelledRadioButton) {
    return function (property, old, new_0) {
      this$LabelledRadioButton.renderChecked_tihzjt$_0(this$LabelledRadioButton.radioButton.checked);
      return Unit;
    };
  }
  function LabelledRadioButton$iconI$lambda(closure$unCheckedIcon) {
    return function () {
      var el = new IconI(closure$unCheckedIcon);
      el._style.left = '-1em';
      el._style.position = 'relative';
      return el;
    };
  }
  function LabelledRadioButton$label$lambda() {
    var el = new Label();
    el.hide();
    return el;
  }
  function LabelledRadioButton$labelText$lambda(this$LabelledRadioButton) {
    return function (property, old, new_0) {
      this$LabelledRadioButton.renderLabel_1re9j4$_0(new_0);
      return Unit;
    };
  }
  function LabelledRadioButton$checkedHandler$lambda(this$LabelledRadioButton) {
    return function (checked) {
      this$LabelledRadioButton.renderChecked_tihzjt$_0(checked);
      return Unit;
    };
  }
  function LabelledRadioButton$clickHandler$lambda(this$LabelledRadioButton) {
    return function (it) {
      this$LabelledRadioButton.radioButton.toggle();
      return Unit;
    };
  }
  LabelledRadioButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LabelledRadioButton',
    interfaces: [Div]
  };
  Delegates$observable$ObjectLiteral_14.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_14.prototype.constructor = Delegates$observable$ObjectLiteral_14;
  function Delegates$observable$ObjectLiteral_14(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_14.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_14.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function RadioButton(checked) {
    RadioButton$Companion_getInstance();
    if (checked === void 0)
      checked = false;
    InputRadio.call(this);
    this.checked_kwjwg1$_0 = new Delegates$observable$ObjectLiteral_14(RadioButton$checked$lambda(this), checked);
    this.checkedListeners_6t6vo6$_0 = ArrayList_init();
    this.clickHandler_ajhh3g$_0 = RadioButton$clickHandler$lambda(this);
  }
  var RadioButton$checked_metadata = new PropertyMetadata('checked');
  Object.defineProperty(RadioButton.prototype, 'checked', {
    get: function () {
      return this.checked_kwjwg1$_0.getValue_lrcp0p$(this, RadioButton$checked_metadata);
    },
    set: function (checked) {
      this.checked_kwjwg1$_0.setValue_9rddgb$(this, RadioButton$checked_metadata, checked);
    }
  });
  RadioButton.prototype.notifyCheckedListeners_8e2cbs$_0 = function (checked) {
    var tmp$;
    tmp$ = this.checkedListeners_6t6vo6$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(checked);
    }
  };
  RadioButton.prototype.onChecked_y8twos$ = function (listener) {
    this.checkedListeners_6t6vo6$_0.add_11rb$(listener);
  };
  RadioButton.prototype.unChecked_y8twos$ = function (listener) {
    this.checkedListeners_6t6vo6$_0.remove_11rb$(listener);
  };
  RadioButton.prototype.toggle = function () {
    var newState = !this.checked;
    this.checked = newState;
  };
  RadioButton.prototype.render = function () {
    InputRadio.prototype.render.call(this);
    this.addClass_bx842b$(RadioButton$Companion_getInstance().classSelector);
  };
  RadioButton.prototype.didMount = function () {
    InputRadio.prototype.didMount.call(this);
    onClick(this, this.clickHandler_ajhh3g$_0);
  };
  function RadioButton$Companion() {
    RadioButton$Companion_instance = this;
    this.classSelector_gg1f9r$_0 = toClassSelector('bn-radio-button');
    this.rule_khvynk$_0 = RadioButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(RadioButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_gg1f9r$_0;
    }
  });
  Object.defineProperty(RadioButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_khvynk$_0;
    }
  });
  function RadioButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
    return Unit;
  }
  function RadioButton$Companion$rule$lambda($receiver) {
    $receiver._background = 'red';
    hover($receiver, RadioButton$Companion$rule$lambda$lambda);
    return Unit;
  }
  RadioButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var RadioButton$Companion_instance = null;
  function RadioButton$Companion_getInstance() {
    if (RadioButton$Companion_instance === null) {
      new RadioButton$Companion();
    }
    return RadioButton$Companion_instance;
  }
  function RadioButton$checked$lambda(this$RadioButton) {
    return function (property, old, new_0) {
      this$RadioButton._checked = new_0;
      this$RadioButton.notifyCheckedListeners_8e2cbs$_0(new_0);
      return Unit;
    };
  }
  function RadioButton$clickHandler$lambda(this$RadioButton) {
    return function (it) {
      var newState = !ensureNotNull(this$RadioButton._checked);
      this$RadioButton._checked = newState;
      return Unit;
    };
  }
  RadioButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioButton',
    interfaces: [InputRadio]
  };
  var package$fg = _.fg || (_.fg = {});
  var package$beans = package$fg.beans || (package$fg.beans = {});
  package$beans.anchor_q8vlpp$ = anchor;
  package$beans.button_n102dk$ = button;
  package$beans.deck_nx9pqc$ = deck;
  package$beans.drawer_73qr15$ = drawer;
  package$beans.menuBar_s1d2rz$ = menuBar;
  package$beans.menu_poq3df$ = menu;
  package$beans.menuItem_ve3aun$ = menuItem;
  package$beans.toggleButton_432pze$ = toggleButton;
  package$beans.ElementStyle = ElementStyle;
  var package$action = package$beans.action || (package$beans.action = {});
  package$action.Action = Action;
  package$action.ActionBean = ActionBean;
  package$action.ActionPerform = ActionPerform;
  Object.defineProperty(SelectableAction, 'Statics', {
    get: SelectableAction$Statics_getInstance
  });
  package$action.SelectableAction = SelectableAction;
  Object.defineProperty(AppBar, 'AppBar', {
    get: AppBar$AppBar_getInstance
  });
  var package$app = package$beans.app || (package$beans.app = {});
  package$app.AppBar = AppBar;
  Object.defineProperty(Application, 'Statics', {
    get: Application$Statics_getInstance
  });
  package$app.Application = Application;
  package$app.Content = Content;
  package$app.DrawerNavigation = DrawerNavigation;
  package$app.Popups = Popups;
  Object.defineProperty(package$app, 'pkg', {
    get: function () {
      return pkg;
    }
  });
  Object.defineProperty(AbstractButton, 'AbstractButton', {
    get: AbstractButton$AbstractButton_getInstance
  });
  var package$button = package$beans.button || (package$beans.button = {});
  package$button.AbstractButton = AbstractButton;
  Object.defineProperty(Button_0, 'ButtonStyle', {
    get: Button$ButtonStyle_getInstance
  });
  Object.defineProperty(Button_0, 'Companion', {
    get: Button$Companion_getInstance
  });
  package$button.Button = Button_0;
  Object.defineProperty(ToggleButton, 'Companion', {
    get: ToggleButton$Companion_getInstance
  });
  package$button.ToggleButton = ToggleButton;
  Object.defineProperty(Deck, 'Companion', {
    get: Deck$Companion_getInstance
  });
  var package$deck = package$beans.deck || (package$beans.deck = {});
  package$deck.Deck = Deck;
  Object.defineProperty(Drawer, 'Companion', {
    get: Drawer$Companion_getInstance
  });
  var package$drawer = package$beans.drawer || (package$beans.drawer = {});
  package$drawer.Drawer = Drawer;
  package$drawer.dock_jdil3n$ = dock;
  package$drawer.undock_ahjj8n$ = undock;
  Object.defineProperty(FontAwesomeIcon$Size, 'NORMAL', {
    get: FontAwesomeIcon$Size$NORMAL_getInstance
  });
  Object.defineProperty(FontAwesomeIcon$Size, 'LG', {
    get: FontAwesomeIcon$Size$LG_getInstance
  });
  Object.defineProperty(FontAwesomeIcon$Size, 'X2', {
    get: FontAwesomeIcon$Size$X2_getInstance
  });
  Object.defineProperty(FontAwesomeIcon$Size, 'X3', {
    get: FontAwesomeIcon$Size$X3_getInstance
  });
  Object.defineProperty(FontAwesomeIcon$Size, 'X4', {
    get: FontAwesomeIcon$Size$X4_getInstance
  });
  Object.defineProperty(FontAwesomeIcon$Size, 'X5', {
    get: FontAwesomeIcon$Size$X5_getInstance
  });
  FontAwesomeIcon.Size = FontAwesomeIcon$Size;
  var package$icon = package$beans.icon || (package$beans.icon = {});
  package$icon.FontAwesomeIcon = FontAwesomeIcon;
  Object.defineProperty(package$icon, 'FontAwesomeIcons', {
    get: FontAwesomeIcons_getInstance
  });
  package$icon.IconI = IconI;
  package$icon.IconProvider = IconProvider;
  Object.defineProperty(Anchor, 'Companion', {
    get: Anchor$Companion_getInstance
  });
  var package$link = package$beans.link || (package$beans.link = {});
  package$link.Anchor = Anchor;
  package$link.ExternalLink = ExternalLink;
  package$link.Link = Link;
  package$link.LocalLink = LocalLink;
  Object.defineProperty(Menu, 'Companion', {
    get: Menu$Companion_getInstance
  });
  var package$menu = package$beans.menu || (package$beans.menu = {});
  package$menu.Menu = Menu;
  Object.defineProperty(MenuBar, 'Companion', {
    get: MenuBar$Companion_getInstance
  });
  package$menu.MenuBar = MenuBar;
  Object.defineProperty(MenuButton, 'Companion', {
    get: MenuButton$Companion_getInstance
  });
  package$menu.MenuButton = MenuButton;
  MenuItem.Style = MenuItem$Style;
  Object.defineProperty(MenuItem, 'Companion', {
    get: MenuItem$Companion_getInstance
  });
  package$menu.MenuItem = MenuItem;
  Object.defineProperty(package$beans, 'pkg', {
    get: function () {
      return pkg_0;
    }
  });
  package$beans.collapseOn_cutj6x$ = collapseOn;
  Object.defineProperty(LabelledRadioButton, 'Companion', {
    get: LabelledRadioButton$Companion_getInstance
  });
  var package$radio = package$beans.radio || (package$beans.radio = {});
  package$radio.LabelledRadioButton = LabelledRadioButton;
  Object.defineProperty(RadioButton, 'Companion', {
    get: RadioButton$Companion_getInstance
  });
  package$radio.RadioButton = RadioButton;
  pkg = 'fg-bn-app';
  pkg_0 = 'fg-bn';
  Kotlin.defineModule('beans', _);
  return _;
}(typeof beans === 'undefined' ? {} : beans, kotlin, elements, this['fg-keyboard'], this['fg-agent']);

//# sourceMappingURL=beans.js.map
