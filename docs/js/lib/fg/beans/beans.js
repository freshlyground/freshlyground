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
  var properties = Kotlin.kotlin.properties;
  var toClassSelector = $module$elements.fg.elements.toClassSelector_pdl1vz$;
  var Div = $module$elements.fg.elements.Div;
  var Text = $module$elements.fg.elements.Text;
  var RgbColor = $module$elements.fg.style.colour.RgbColor;
  var elements = $module$elements.fg.elements;
  var TypedStyledClass = $module$elements.fg.elements.TypedStyledClass;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
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
  var Pixels = $module$elements.fg.elements.Pixels;
  var and = $module$elements.fg.style.and_xif9ow$;
  var hover = $module$elements.fg.style.hover_dn1ps9$;
  var focus = $module$elements.fg.style.focus_dn1ps9$;
  var and_0 = $module$elements.fg.style.and_yogg4l$;
  var StyledClass = $module$elements.fg.elements.StyledClass;
  var Element = $module$elements.fg.elements.Element;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var Position = $module$elements.fg.elements.style.typed.Position;
  var Side = $module$elements.fg.base.Side;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var I = $module$elements.fg.elements.I;
  var ClassSelector = $module$elements.fg.elements.ClassSelector;
  var Enum = Kotlin.kotlin.Enum;
  var A = $module$elements.fg.elements.A;
  var base = $module$elements.fg.base;
  var Comparable = Kotlin.kotlin.Comparable;
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
  }
  Object.defineProperty(ElementStyle.prototype, 'cursor', {
    get: function () {
      return this.cursor_1bqtbn$_0;
    },
    set: function (cursor) {
      this.cursor_1bqtbn$_0 = cursor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'margin', {
    get: function () {
      return this.margin_1bqtbn$_0;
    },
    set: function (margin) {
      this.margin_1bqtbn$_0 = margin;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_1bqtbn$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_1bqtbn$_0 = backgroundColor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'color', {
    get: function () {
      return this.color_1bqtbn$_0;
    },
    set: function (color) {
      this.color_1bqtbn$_0 = color;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderStyle', {
    get: function () {
      return this.borderStyle_1bqtbn$_0;
    },
    set: function (borderStyle) {
      this.borderStyle_1bqtbn$_0 = borderStyle;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderWidth', {
    get: function () {
      return this.borderWidth_1bqtbn$_0;
    },
    set: function (borderWidth) {
      this.borderWidth_1bqtbn$_0 = borderWidth;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_1bqtbn$_0;
    },
    set: function (borderColor) {
      this.borderColor_1bqtbn$_0 = borderColor;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'borderRadius', {
    get: function () {
      return this.borderRadius_1bqtbn$_0;
    },
    set: function (borderRadius) {
      this.borderRadius_1bqtbn$_0 = borderRadius;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'boxShadow', {
    get: function () {
      return this.boxShadow_1bqtbn$_0;
    },
    set: function (boxShadow) {
      this.boxShadow_1bqtbn$_0 = boxShadow;
    }
  });
  Object.defineProperty(ElementStyle.prototype, 'outline', {
    get: function () {
      return this.outline_1bqtbn$_0;
    },
    set: function (outline) {
      this.outline_1bqtbn$_0 = outline;
    }
  });
  ElementStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ElementStyle',
    interfaces: []
  };
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
    this.propertyChangedListeners = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var initialValue = perform;
    this.perform$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Action$perform$lambda(this), initialValue);
    var initialValue_0 = label;
    this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Action$label$lambda(this), initialValue_0);
    var initialValue_1 = enabled;
    this.enabled$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Action$enabled$lambda(this), initialValue_1);
    var initialValue_2 = icon;
    this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Action$icon$lambda(this), initialValue_2);
    var initialValue_3 = shortcut;
    this.shortcut$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Action$shortcut$lambda(this), initialValue_3);
  }
  Object.defineProperty(Action.prototype, 'perform', {
    get: function () {
      return this.perform$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('perform'));
    },
    set: function (perform) {
      this.perform$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('perform'), perform);
    }
  });
  Object.defineProperty(Action.prototype, 'label', {
    get: function () {
      return this.label$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('label'));
    },
    set: function (label) {
      this.label$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('label'), label);
    }
  });
  Object.defineProperty(Action.prototype, 'enabled', {
    get: function () {
      return this.enabled$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('enabled'));
    },
    set: function (enabled) {
      this.enabled$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('enabled'), enabled);
    }
  });
  Object.defineProperty(Action.prototype, 'disabled', {
    get: function () {
      return !this.enabled;
    }
  });
  Object.defineProperty(Action.prototype, 'icon', {
    get: function () {
      return this.icon$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('icon'));
    },
    set: function (icon) {
      this.icon$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('icon'), icon);
    }
  });
  Object.defineProperty(Action.prototype, 'shortcut', {
    get: function () {
      return this.shortcut$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('shortcut'));
    },
    set: function (shortcut) {
      this.shortcut$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut);
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
    };
  }
  function Action$label$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
    };
  }
  function Action$enabled$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
    };
  }
  function Action$icon$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
    };
  }
  function Action$shortcut$lambda(this$Action) {
    return function (prop, old, new_0) {
      this$Action.notifyPropertyChanged_oh08kn$(prop, old, new_0);
    };
  }
  Action.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function ActionBean() {
  }
  ActionBean.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ActionBean',
    interfaces: []
  };
  function ActionPerform(action, source) {
    this.action = action;
    this.source = source;
  }
  ActionPerform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    var initialValue = selected;
    this.selected$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(SelectableAction$selected$lambda(this), initialValue);
  }
  Object.defineProperty(SelectableAction.prototype, 'selected', {
    get: function () {
      return this.selected$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('selected'));
    },
    set: function (selected) {
      this.selected$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('selected'), selected);
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
    kind: Kotlin.Kind.OBJECT,
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
    };
  }
  SelectableAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    this.classSelector_1d6i5r$_0 = toClassSelector('fg-bn-app-appbar');
    this.rule_1d6i5r$_0 = AppBar$AppBar$rule$lambda;
    elements.HTML.registerStyle_mpomjf$(this);
  }
  Object.defineProperty(AppBar$AppBar.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_1d6i5r$_0;
    }
  });
  Object.defineProperty(AppBar$AppBar.prototype, 'rule', {
    get: function () {
      return this.rule_1d6i5r$_0;
    }
  });
  function AppBar$AppBar$rule$lambda($receiver) {
    $receiver.backgroundColor = RgbColor.Factory.RED;
  }
  AppBar$AppBar.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AppBar',
    interfaces: [Div]
  };
  function Application() {
    Application$Statics_getInstance();
    this.CONTENT$delegate = lazy(Application$CONTENT$lambda);
    this.POPUPS$delegate = lazy(Application$POPUPS$lambda);
    Application$Statics_getInstance().GET = this;
  }
  Object.defineProperty(Application.prototype, 'CONTENT', {
    get: function () {
      var $receiver = this.CONTENT$delegate;
      new Kotlin.PropertyMetadata('CONTENT');
      return $receiver.value;
    }
  });
  Object.defineProperty(Application.prototype, 'POPUPS', {
    get: function () {
      var $receiver = this.POPUPS$delegate;
      new Kotlin.PropertyMetadata('POPUPS');
      return $receiver.value;
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
    this.GET$delegate = properties.Delegates.notNull_30y1fr$();
  }
  Object.defineProperty(Application$Statics.prototype, 'GET', {
    get: function () {
      return this.GET$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('GET'));
    },
    set: function (GET) {
      this.GET$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('GET'), GET);
    }
  });
  Application$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    kind: Kotlin.Kind.CLASS,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Content',
    interfaces: [Div]
  };
  function DrawerNavigation(icon, drawer, dockingStation, initialFloatState, menu) {
    this.icon = icon;
    this.drawer = drawer;
    this.dockingStation = dockingStation;
    this.menu = menu;
    this.float$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(DrawerNavigation$float$lambda(this), initialFloatState);
    this.navAction$delegate = lazy(DrawerNavigation$navAction$lambda(this));
    this.dockingStationResizeHandler_0 = DrawerNavigation$dockingStationResizeHandler$lambda(this);
    this.menuHandler_0 = DrawerNavigation$menuHandler$lambda(this);
    this.renderFloat_0(initialFloatState);
    this.dockingStation.onResized_sdolbl$(this.dockingStationResizeHandler_0);
    this.menu.onAfterPerformingMenuItemAction_a8ajpl$(this.menuHandler_0);
  }
  Object.defineProperty(DrawerNavigation.prototype, 'float', {
    get: function () {
      return this.float$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('float'));
    },
    set: function (float) {
      this.float$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('float'), float);
    }
  });
  Object.defineProperty(DrawerNavigation.prototype, 'navAction', {
    get: function () {
      var $receiver = this.navAction$delegate;
      new Kotlin.PropertyMetadata('navAction');
      return $receiver.value;
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
    };
  }
  function DrawerNavigation$navAction$lambda$lambda(this$DrawerNavigation) {
    return function (actionPerform) {
      var tmp$;
      var selectableAction = Kotlin.isType(tmp$ = actionPerform.action, SelectableAction) ? tmp$ : Kotlin.throwCCE();
      if (this$DrawerNavigation.drawer.hidden) {
        this$DrawerNavigation.drawer.show();
      }
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
    };
  }
  function DrawerNavigation$menuHandler$lambda(this$DrawerNavigation) {
    return function (action, menu) {
      if (this$DrawerNavigation.float) {
        this$DrawerNavigation.drawer.hide();
      }
    };
  }
  DrawerNavigation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Popups',
    interfaces: [Div]
  };
  var pkg;
  function AbstractButton(action) {
    AbstractButton$AbstractButton_getInstance();
    Button.call(this);
    this.action_msbs76$_0 = action;
    this.hovered_msbs76$_0 = false;
    this.focused_msbs76$_0 = false;
    this.pressed_msbs76$_0 = false;
    this.label$delegate = lazy(AbstractButton$label$lambda);
    this.iconI$delegate = lazy(AbstractButton$iconI$lambda(this));
    this.actionPropertyChangedHandler_msbs76$_0 = AbstractButton$actionPropertyChangedHandler$lambda(this);
    this.clickHandler_msbs76$_0 = AbstractButton$clickHandler$lambda(this);
    this.mouseEnterHandler_msbs76$_0 = AbstractButton$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_msbs76$_0 = AbstractButton$mouseLeaveHandler$lambda(this);
    this.focusHandler_msbs76$_0 = AbstractButton$focusHandler$lambda(this);
    this.blurHandler_msbs76$_0 = AbstractButton$blurHandler$lambda(this);
    this.mouseDownHandler_msbs76$_0 = AbstractButton$mouseDownHandler$lambda(action, this);
    this.mouseUpHandler_msbs76$_0 = AbstractButton$mouseUpHandler$lambda(this);
  }
  Object.defineProperty(AbstractButton.prototype, 'action', {
    get: function () {
      return this.action_msbs76$_0;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'hovered', {
    get: function () {
      return this.hovered_msbs76$_0;
    },
    set: function (hovered) {
      this.hovered_msbs76$_0 = hovered;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'focused', {
    get: function () {
      return this.focused_msbs76$_0;
    },
    set: function (focused) {
      this.focused_msbs76$_0 = focused;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'pressed', {
    get: function () {
      return this.pressed_msbs76$_0;
    },
    set: function (pressed) {
      this.pressed_msbs76$_0 = pressed;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'label', {
    get: function () {
      var $receiver = this.label$delegate;
      new Kotlin.PropertyMetadata('label');
      return $receiver.value;
    }
  });
  Object.defineProperty(AbstractButton.prototype, 'iconI', {
    get: function () {
      var $receiver = this.iconI$delegate;
      new Kotlin.PropertyMetadata('iconI');
      return $receiver.value;
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
    this.renderIcon_uy0owa$_0(this.action.icon);
    this.renderLabel_6a2343$_0(this.action.label);
    this.renderDisabled_wk6cbn$_0(this.action.disabled);
  };
  AbstractButton.prototype.didMount = function () {
    Button.prototype.didMount.call(this);
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_msbs76$_0);
    onClick(this, this.clickHandler_msbs76$_0);
    onMouseEnter(this, this.mouseEnterHandler_msbs76$_0);
    onMouseLeave(this, this.mouseLeaveHandler_msbs76$_0);
    onFocus(this, this.focusHandler_msbs76$_0);
    onBlur(this, this.blurHandler_msbs76$_0);
    onMouseDown(this, this.mouseDownHandler_msbs76$_0);
    onMouseUp(this, this.mouseUpHandler_msbs76$_0);
  };
  AbstractButton.prototype.willUnMount = function () {
    Button.prototype.willUnMount.call(this);
    unMouseEnter(this, this.mouseEnterHandler_msbs76$_0);
    unMouseLeave(this, this.mouseLeaveHandler_msbs76$_0);
    unFocus(this, this.focusHandler_msbs76$_0);
    unBlur(this, this.blurHandler_msbs76$_0);
    unMouseDown(this, this.mouseDownHandler_msbs76$_0);
    unMouseUp(this, this.mouseUpHandler_msbs76$_0);
  };
  AbstractButton.prototype.renderLabel_6a2343$_0 = function (labelText) {
    if (labelText != null) {
      this.label.textContent = labelText;
      this.label.show();
    }
     else {
      this.label.hide();
    }
  };
  AbstractButton.prototype.renderIcon_uy0owa$_0 = function (icon) {
    if (icon == null) {
      this.iconI.hide();
    }
     else {
      icon.apply_54c9de$(this.iconI);
      this.iconI.show();
    }
  };
  AbstractButton.prototype.renderDisabled_wk6cbn$_0 = function (disabled) {
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
    kind: Kotlin.Kind.OBJECT,
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
      if (Kotlin.equals(tmp$, Kotlin.getPropertyCallableRef('label', 1, function ($receiver) {
        return $receiver.label;
      }, function ($receiver, value) {
        $receiver.label = value;
      }).callableName))
        this$AbstractButton.renderLabel_6a2343$_0(action.label);
      else if (Kotlin.equals(tmp$, Kotlin.getPropertyCallableRef('icon', 1, function ($receiver) {
        return $receiver.icon;
      }, function ($receiver, value) {
        $receiver.icon = value;
      }).callableName))
        this$AbstractButton.renderIcon_uy0owa$_0(action.icon);
      else if (Kotlin.equals(tmp$, Kotlin.getPropertyCallableRef('enabled', 1, function ($receiver) {
        return $receiver.enabled;
      }, function ($receiver, value) {
        $receiver.enabled = value;
      }).callableName)) {
        this$AbstractButton.renderDisabled_wk6cbn$_0(action.disabled);
        if (action.enabled) {
          this$AbstractButton.onEnabled();
        }
         else {
          this$AbstractButton.onDisabled();
        }
      }
    };
  }
  function AbstractButton$clickHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.action.perform_54c9de$(this$AbstractButton);
    };
  }
  function AbstractButton$mouseEnterHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.hovered = true;
      this$AbstractButton.toggleClass_ivxn3r$('hovered', true);
      this$AbstractButton.onHover();
    };
  }
  function AbstractButton$mouseLeaveHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.hovered = false;
      this$AbstractButton.toggleClass_ivxn3r$('hovered');
      this$AbstractButton.unHover();
    };
  }
  function AbstractButton$focusHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.focused = true;
      this$AbstractButton.toggleClass_ivxn3r$('focused', true);
      this$AbstractButton.onFocus();
    };
  }
  function AbstractButton$blurHandler$lambda(this$AbstractButton) {
    return function (it) {
      this$AbstractButton.focused = false;
      this$AbstractButton.toggleClass_ivxn3r$('focused');
      this$AbstractButton.unFocus();
    };
  }
  function AbstractButton$mouseDownHandler$lambda(closure$action, this$AbstractButton) {
    return function (event) {
      if (closure$action.enabled) {
        this$AbstractButton.pressed = true;
        this$AbstractButton.toggleClass_ivxn3r$('pressed', true);
        this$AbstractButton.onPressed();
      }
    };
  }
  function AbstractButton$mouseUpHandler$lambda(this$AbstractButton) {
    return function (event) {
      this$AbstractButton.pressed = false;
      this$AbstractButton.toggleClass_ivxn3r$('pressed');
      this$AbstractButton.unPressed();
    };
  }
  AbstractButton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    this.margin_7521eb$_0 = '0';
    this.backgroundColor_7521eb$_0 = RgbColor.Factory.WHITE;
    this.borderStyle_7521eb$_0 = 'outset';
    this.borderWidth_7521eb$_0 = new Pixels(1.0);
    this.borderColor_7521eb$_0 = RgbColor.Factory.from_61zpoe$('#e4e4e4');
    this.borderRadius_7521eb$_0 = new Pixels(4.0);
    this.boxShadow_7521eb$_0 = 'none';
    this.hovered = new Button$ButtonStyle$hovered$ObjectLiteral();
    this.disabled = new Button$ButtonStyle$disabled$ObjectLiteral();
    this.pressed = new Button$ButtonStyle$pressed$ObjectLiteral();
    this.focused = new Button$ButtonStyle$focused$ObjectLiteral();
  }
  Object.defineProperty(Button$ButtonStyle.prototype, 'margin', {
    get: function () {
      return this.margin_7521eb$_0;
    },
    set: function (margin) {
      this.margin_7521eb$_0 = margin;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_7521eb$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_7521eb$_0 = backgroundColor;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderStyle', {
    get: function () {
      return this.borderStyle_7521eb$_0;
    },
    set: function (borderStyle) {
      this.borderStyle_7521eb$_0 = borderStyle;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderWidth', {
    get: function () {
      return this.borderWidth_7521eb$_0;
    },
    set: function (borderWidth) {
      this.borderWidth_7521eb$_0 = borderWidth;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_7521eb$_0;
    },
    set: function (borderColor) {
      this.borderColor_7521eb$_0 = borderColor;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'borderRadius', {
    get: function () {
      return this.borderRadius_7521eb$_0;
    },
    set: function (borderRadius) {
      this.borderRadius_7521eb$_0 = borderRadius;
    }
  });
  Object.defineProperty(Button$ButtonStyle.prototype, 'boxShadow', {
    get: function () {
      return this.boxShadow_7521eb$_0;
    },
    set: function (boxShadow) {
      this.boxShadow_7521eb$_0 = boxShadow;
    }
  });
  function Button$ButtonStyle$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.cursor_rovmyf$_0 = 'pointer';
  }
  Object.defineProperty(Button$ButtonStyle$hovered$ObjectLiteral.prototype, 'cursor', {
    get: function () {
      return this.cursor_rovmyf$_0;
    },
    set: function (cursor) {
      this.cursor_rovmyf$_0 = cursor;
    }
  });
  Button$ButtonStyle$hovered$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.cursor_st5la2$_0 = 'not-allowed';
  }
  Object.defineProperty(Button$ButtonStyle$disabled$ObjectLiteral.prototype, 'cursor', {
    get: function () {
      return this.cursor_st5la2$_0;
    },
    set: function (cursor) {
      this.cursor_st5la2$_0 = cursor;
    }
  });
  Button$ButtonStyle$disabled$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_z8364e$_0 = new RgbColor(118, 178, 240);
  }
  Object.defineProperty(Button$ButtonStyle$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_z8364e$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_z8364e$_0 = backgroundColor;
    }
  });
  Button$ButtonStyle$pressed$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function Button$ButtonStyle$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.outline_c68m8j$_0 = 'none';
    this.borderColor_c68m8j$_0 = new RgbColor(144, 191, 240);
  }
  Object.defineProperty(Button$ButtonStyle$focused$ObjectLiteral.prototype, 'outline', {
    get: function () {
      return this.outline_c68m8j$_0;
    },
    set: function (outline) {
      this.outline_c68m8j$_0 = outline;
    }
  });
  Object.defineProperty(Button$ButtonStyle$focused$ObjectLiteral.prototype, 'borderColor', {
    get: function () {
      return this.borderColor_c68m8j$_0;
    },
    set: function (borderColor) {
      this.borderColor_c68m8j$_0 = borderColor;
    }
  });
  Button$ButtonStyle$focused$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  Button$ButtonStyle.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    this.classSelector_uao8xm$_0 = toClassSelector('fg-bn-button');
    this.rule_uao8xm$_0 = Button$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Button$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_uao8xm$_0;
    }
  });
  Object.defineProperty(Button$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_uao8xm$_0;
    }
  });
  function Button$Companion$rule$lambda$lambda$lambda($receiver) {
    var tmp$;
    $receiver._cursor = (tmp$ = Button$ButtonStyle_getInstance().disabled) != null ? tmp$.cursor : null;
  }
  function Button$Companion$rule$lambda$lambda($receiver) {
    var tmp$;
    $receiver._cursor = (tmp$ = Button$ButtonStyle_getInstance().hovered) != null ? tmp$.cursor : null;
    and($receiver, AbstractButton$AbstractButton_getInstance().DISABLED, Button$Companion$rule$lambda$lambda$lambda);
  }
  function Button$Companion$rule$lambda$lambda_0($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    $receiver._borderColor = (tmp$_0 = (tmp$ = Button$ButtonStyle_getInstance().focused) != null ? tmp$.borderColor : null) != null ? tmp$_0.toString() : null;
    $receiver._outline = (tmp$_1 = Button$ButtonStyle_getInstance().focused) != null ? tmp$_1.outline : null;
  }
  function Button$Companion$rule$lambda$lambda_1($receiver) {
    var tmp$, tmp$_0;
    $receiver._backgroundColor = (tmp$_0 = (tmp$ = Button$ButtonStyle_getInstance().pressed) != null ? tmp$.backgroundColor : null) != null ? tmp$_0.toString() : null;
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
  }
  Button$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Button',
    interfaces: [AbstractButton]
  };
  function ToggleButton(action) {
    ToggleButton$Companion_getInstance();
    AbstractButton.call(this, action);
    this.action_q923u8$_0 = action;
    this.actionPropertyChangedHandler_q923u8$_0 = ToggleButton$actionPropertyChangedHandler$lambda(this);
    this.previousBackgroundColor_q923u8$_0 = '';
  }
  Object.defineProperty(ToggleButton.prototype, 'action', {
    get: function () {
      return this.action_q923u8$_0;
    }
  });
  ToggleButton.prototype.render = function () {
    AbstractButton.prototype.render.call(this);
    this.addClass_bx842b$(ToggleButton$Companion_getInstance().classSelector);
  };
  ToggleButton.prototype.renderSelected_2iqzmd$_0 = function (selected) {
    if (selected) {
      this.previousBackgroundColor_q923u8$_0 = this._style.backgroundColor;
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
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_q923u8$_0);
  };
  ToggleButton.prototype.toggle = function () {
    this.action.perform_54c9de$(this);
  };
  function ToggleButton$Companion() {
    ToggleButton$Companion_instance = this;
    this.classSelector_66p8eq$_0 = toClassSelector('fg-bn-toggle-button');
    this.rule_66p8eq$_0 = ToggleButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(ToggleButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_66p8eq$_0;
    }
  });
  Object.defineProperty(ToggleButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_66p8eq$_0;
    }
  });
  function ToggleButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._cursor = 'not-allowed';
  }
  function ToggleButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
    and($receiver, AbstractButton$AbstractButton_getInstance().DISABLED, ToggleButton$Companion$rule$lambda$lambda$lambda);
  }
  function ToggleButton$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._backgroundColor = 'rgb(118, 178, 240)';
    $receiver._boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.2)';
  }
  function ToggleButton$Companion$rule$lambda$lambda_1($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._outline = 'none';
  }
  function ToggleButton$Companion$rule$lambda$lambda_2($receiver) {
    $receiver._border = '1px outset rgb(144, 191, 240)';
    $receiver._outline = 'none';
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
  }
  ToggleButton$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('selected', 1, function ($receiver) {
        return $receiver.selected;
      }, function ($receiver, value) {
        $receiver.selected = value;
      }).callableName))
        this$ToggleButton.renderSelected_2iqzmd$_0(this$ToggleButton.action.selected);
    };
  }
  ToggleButton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ToggleButton',
    interfaces: [AbstractButton]
  };
  function Deck() {
    Deck$Companion_getInstance();
    Div.call(this);
    this.deck_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  Deck.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (!Kotlin.isType(child, Element)) {
      throw new IllegalArgumentException('Only a Element can be added to a Deck: ' + get_js(Kotlin.getKClassFromExpression(child)).name);
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
    this.classSelector_6abtzu$_0 = toClassSelector('fg-bn-deck');
    this.rule_6abtzu$_0 = Deck$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Deck$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_6abtzu$_0;
    }
  });
  Object.defineProperty(Deck$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_6abtzu$_0;
    }
  });
  function Deck$Companion$rule$lambda($receiver) {
  }
  Deck$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Deck',
    interfaces: [Div]
  };
  function Drawer(side) {
    Drawer$Companion_getInstance();
    Div.call(this);
    this.undockedPositionValue_8be2vx$ = '';
    this.undockedCssFloatValue_8be2vx$ = '';
    this.side$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Drawer$side$lambda(this), side);
  }
  Object.defineProperty(Drawer.prototype, 'side', {
    get: function () {
      return this.side$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('side'));
    },
    set: function (side) {
      this.side$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('side'), side);
    }
  });
  Drawer.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(Drawer$Companion_getInstance().classSelector);
    this.renderSide_i584r$_0(this.side);
  };
  Drawer.prototype.float = function () {
    this.removeSelf();
    this.renderSide_i584r$_0(this.side);
    this.style.position = Position.absolute;
  };
  Drawer.prototype.renderSide_i584r$_0 = function (side) {
    if (Kotlin.equals(side, Side.LEFT))
      this._style.left = '0';
    else if (Kotlin.equals(side, Side.RIGHT))
      this._style.right = '0';
  };
  function Drawer$Companion() {
    Drawer$Companion_instance = this;
    this.classSelector_gcygka$_0 = toClassSelector('drawer');
    this.rule_gcygka$_0 = Drawer$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Drawer$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_gcygka$_0;
    }
  });
  Object.defineProperty(Drawer$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_gcygka$_0;
    }
  });
  function Drawer$Companion$rule$lambda($receiver) {
    $receiver._position = 'fixed';
    $receiver._zIndex = '1300';
    $receiver._top = '0';
    $receiver._height = '100%';
    $receiver._backgroundColor = 'white';
  }
  Drawer$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      this$Drawer.renderSide_i584r$_0(new_0);
    };
  }
  Drawer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    if (this.size != null && !Kotlin.equals(this.size, FontAwesomeIcon$Size$NORMAL_getInstance())) {
      element.addClass_61zpoe$(Kotlin.toString(this.size.selector));
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
    kind: Kotlin.Kind.CLASS,
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
      default:Kotlin.throwISE('No enum constant fg.beans.icon.FontAwesomeIcon.Size.' + name);
    }
  }
  FontAwesomeIcon$Size.valueOf_61zpoe$ = FontAwesomeIcon$Size$valueOf;
  FontAwesomeIcon.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    kind: Kotlin.Kind.OBJECT,
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
  function IconI(icon) {
    if (icon === void 0)
      icon = null;
    I.call(this);
    var initialValue = icon;
    this.icon$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(IconI$icon$lambda(this), initialValue);
  }
  Object.defineProperty(IconI.prototype, 'icon', {
    get: function () {
      return this.icon$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('icon'));
    },
    set: function (icon) {
      this.icon$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('icon'), icon);
    }
  });
  IconI.prototype.render = function () {
    I.prototype.render.call(this);
    if (this.icon != null) {
      this.renderIcon_0(this.icon);
    }
  };
  IconI.prototype.renderIcon_0 = function (icon) {
    icon != null ? icon.apply_54c9de$(this) : null;
  };
  function IconI$icon$lambda(this$IconI) {
    return function (property, old, new_0) {
      this$IconI.renderIcon_0(new_0);
    };
  }
  IconI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IconI',
    interfaces: [I]
  };
  function IconProvider() {
  }
  IconProvider.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IconProvider',
    interfaces: []
  };
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
    var initialValue = link;
    this.link$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Anchor$link$lambda(this), initialValue);
    this.iconI$delegate = lazy(Anchor$iconI$lambda);
    this.onClickHandler_0 = Anchor$onClickHandler$lambda;
    this._target = target;
  }
  Object.defineProperty(Anchor.prototype, 'link', {
    get: function () {
      return this.link$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('link'));
    },
    set: function (link) {
      this.link$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('link'), link);
    }
  });
  Object.defineProperty(Anchor.prototype, 'iconI', {
    get: function () {
      var $receiver = this.iconI$delegate;
      new Kotlin.PropertyMetadata('iconI');
      return $receiver.value;
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
    this.classSelector_qhgsa3$_0 = toClassSelector('fg-bn-anchor');
    this.rule_qhgsa3$_0 = Anchor$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Anchor$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_qhgsa3$_0;
    }
  });
  Object.defineProperty(Anchor$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_qhgsa3$_0;
    }
  });
  function Anchor$Companion$rule$lambda($receiver) {
  }
  Anchor$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    };
  }
  function Anchor$iconI$lambda() {
    return new IconI();
  }
  function Anchor$onClickHandler$lambda(it) {
  }
  Anchor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ExternalLink',
    interfaces: [Link]
  };
  function Link(display, icon) {
    this.display = display;
    this.icon = icon;
  }
  Link.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LocalLink',
    interfaces: [Link]
  };
  function Menu(label, shortcut) {
    Menu$Companion_getInstance();
    if (label === void 0)
      label = null;
    if (shortcut === void 0)
      shortcut = null;
    Div.call(this);
    this.beforePerformingMenuItemActionListeners_i0djac$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.afterPerformingMenuItemActionListeners_i0djac$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.beforePerformingMenuItemActionHandler_i0djac$_0 = Menu$beforePerformingMenuItemActionHandler$lambda(this);
    this.afterPerformingMenuItemActionHandler_i0djac$_0 = Menu$afterPerformingMenuItemActionHandler$lambda(this);
    var initialValue = label;
    this.label$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Menu$label$lambda, initialValue);
    var initialValue_0 = shortcut;
    this.shortcut$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(Menu$shortcut$lambda, initialValue_0);
  }
  Object.defineProperty(Menu.prototype, 'label', {
    get: function () {
      return this.label$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('label'));
    },
    set: function (label) {
      this.label$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('label'), label);
    }
  });
  Object.defineProperty(Menu.prototype, 'shortcut', {
    get: function () {
      return this.shortcut$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('shortcut'));
    },
    set: function (shortcut) {
      this.shortcut$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('shortcut'), shortcut);
    }
  });
  Menu.prototype.onBeforePerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.beforePerformingMenuItemActionListeners_i0djac$_0.add_11rb$(listener);
  };
  Menu.prototype.unBeforePerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.beforePerformingMenuItemActionListeners_i0djac$_0.remove_11rb$(listener);
  };
  Menu.prototype.onAfterPerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.afterPerformingMenuItemActionListeners_i0djac$_0.add_11rb$(listener);
  };
  Menu.prototype.unAfterPerformingMenuItemAction_a8ajpl$ = function (listener) {
    this.afterPerformingMenuItemActionListeners_i0djac$_0.remove_11rb$(listener);
  };
  Menu.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(Menu$Companion_getInstance().classSelector);
  };
  Menu.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (Kotlin.isType(child, MenuItem)) {
      child.onBeforePerformingAction_xbm201$(this.beforePerformingMenuItemActionHandler_i0djac$_0);
      child.onAfterPerformingAction_xbm201$(this.afterPerformingMenuItemActionHandler_i0djac$_0);
    }
  };
  function Menu$Companion() {
    Menu$Companion_instance = this;
    this.classSelector_pl531i$_0 = new ClassSelector('fg-bn-menu');
    this.rule_pl531i$_0 = Menu$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(Menu$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_pl531i$_0;
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_pl531i$_0;
    }
  });
  function Menu$Companion$rule$lambda($receiver) {
    $receiver._display = 'inline-block';
    $receiver._paddingTop = '4px';
    $receiver._paddingBottom = '4px';
    $receiver._backgroundColor = RgbColor.Factory.WHITE.toString();
  }
  Menu$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      var $receiver = this$Menu.beforePerformingMenuItemActionListeners_i0djac$_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(action, this$Menu);
      }
    };
  }
  function Menu$afterPerformingMenuItemActionHandler$lambda(this$Menu) {
    return function (action) {
      var $receiver = this$Menu.afterPerformingMenuItemActionListeners_i0djac$_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(action, this$Menu);
      }
    };
  }
  function Menu$label$lambda(property, old, new_0) {
  }
  function Menu$shortcut$lambda(property, old, new_0) {
  }
  Menu.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Menu',
    interfaces: [Div]
  };
  function MenuBar() {
    MenuBar$Companion_getInstance();
    Div.call(this);
    this.menuButtonByMenu_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
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
      Kotlin.isType(tmp$ = actionPerform.action, SelectableAction) ? tmp$ : Kotlin.throwCCE();
      if (actionPerform.action.selected) {
        this$MenuBar.openMenu_0(closure$child);
      }
       else {
        closure$child.hide();
      }
    };
  }
  function MenuBar$childAdded$lambda_0(closure$menuButton, this$MenuBar, closure$child) {
    return function (it) {
      console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '].onMouseEnter');
      var anyMenuOpen = this$MenuBar.anyMenuOpen_0();
      console.log('MenuButton[' + Kotlin.toString(closure$menuButton.action.label) + '] anyMenuOpen = ' + Kotlin.toString(anyMenuOpen));
      if (anyMenuOpen) {
        this$MenuBar.openMenu_0(closure$child);
        closure$menuButton.action.selected = true;
      }
    };
  }
  MenuBar.prototype.childAdded_sr04hg$ = function (child) {
    Div.prototype.childAdded_sr04hg$.call(this, child);
    if (!(Kotlin.isType(child, Menu) || Kotlin.isType(child, MenuButton))) {
      throw new IllegalArgumentException('Only a Menu can be added to a MenuBar: ' + get_js(Kotlin.getKClassFromExpression(child)).name);
    }
    if (Kotlin.isType(child, Menu)) {
      child.hide();
      var menuButton = new MenuButton(new SelectableAction(child.label, void 0, void 0, void 0, void 0, void 0, MenuBar$childAdded$lambda(child, this)));
      Div.prototype.appendChild_sr04hg$.call(this, menuButton);
      this.menuButtonByMenu_0.put_xwzc9p$(child, menuButton);
      child.onBeforePerformingMenuItemAction_a8ajpl$(this.beforePerformingMenuItemActionHandler_0);
      child.onAfterPerformingMenuItemAction_a8ajpl$(this.afterPerformingMenuItemActionHandler_0);
      onMouseEnter(menuButton, MenuBar$childAdded$lambda_0(menuButton, this, child));
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
      if (!Kotlin.equals(child, exception) && Kotlin.isType(child, Menu)) {
        this.closeMenu_0(child);
      }
    }
  };
  MenuBar.prototype.openMenu_0 = function (menu) {
    var tmp$;
    this.closeOthers_0(menu);
    menu.show();
    var menuButton = (tmp$ = this.menuButtonByMenu_0.get_11rb$(menu)) != null ? tmp$ : Kotlin.throwNPE();
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
    this.classSelector_mdebi9$_0 = toClassSelector('fg-bn-menu-bar');
    this.rule_mdebi9$_0 = MenuBar$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuBar$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_mdebi9$_0;
    }
  });
  Object.defineProperty(MenuBar$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_mdebi9$_0;
    }
  });
  function MenuBar$Companion$rule$lambda$lambda($receiver) {
    $receiver._position = 'absolute';
    $receiver._border = '1px solid #ccc';
  }
  function MenuBar$Companion$rule$lambda($receiver) {
    $receiver._position = 'relative';
    child($receiver, Menu$Companion_getInstance().classSelector, MenuBar$Companion$rule$lambda$lambda);
  }
  MenuBar$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
  }
  function MenuBar$afterPerformingMenuItemActionHandler$lambda(this$MenuBar) {
    return function (action, menu) {
      this$MenuBar.closeMenu_0(menu);
    };
  }
  MenuBar.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
    this.classSelector_v2xnys$_0 = toClassSelector('fg-bn-menu-button');
    this.rule_v2xnys$_0 = MenuButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_v2xnys$_0;
    }
  });
  Object.defineProperty(MenuButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_v2xnys$_0;
    }
  });
  function MenuButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._borderColor = '#e4e4e4';
  }
  function MenuButton$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._borderBottom = 'none';
    $receiver._borderColor = '#e4e4e4';
    $receiver._backgroundColor = 'rgb(118, 178, 240)';
    $receiver._boxShadow = 'none';
  }
  function MenuButton$Companion$rule$lambda($receiver) {
    $receiver._borderColor = '#e4e4e4';
    $receiver._borderRadius = '0';
    focus($receiver, MenuButton$Companion$rule$lambda$lambda);
    and_0($receiver, '.selected', MenuButton$Companion$rule$lambda$lambda_0);
  }
  MenuButton$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MenuButton',
    interfaces: [ToggleButton]
  };
  function MenuItem(action) {
    MenuItem$Companion_getInstance();
    Div.call(this);
    this.action_iiuj5$_0 = action;
    this.hovered_iiuj5$_0 = false;
    this.focused_iiuj5$_0 = false;
    this.pressed_iiuj5$_0 = false;
    this.beforePerformingActionListeners_iiuj5$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.afterPerformingActionListeners_iiuj5$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.selectedIcon$delegate = lazy(MenuItem$selectedIcon$lambda);
    this.primaryText$delegate = lazy(MenuItem$primaryText$lambda);
    this.secondaryTextSpan$delegate = lazy(MenuItem$secondaryTextSpan$lambda);
    this.secondaryText$delegate = lazy(MenuItem$secondaryText$lambda(this));
    this.actionPropertyChangedHandler_iiuj5$_0 = MenuItem$actionPropertyChangedHandler$lambda(this);
    this.clickHandler_iiuj5$_0 = MenuItem$clickHandler$lambda(this, action);
    this.mouseEnterHandler_iiuj5$_0 = MenuItem$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_iiuj5$_0 = MenuItem$mouseLeaveHandler$lambda(this);
    this.focusHandler_iiuj5$_0 = MenuItem$focusHandler$lambda(this);
    this.blurHandler_iiuj5$_0 = MenuItem$blurHandler$lambda(this);
    this.mouseDownHandler_iiuj5$_0 = MenuItem$mouseDownHandler$lambda(action, this);
    this.mouseUpHandler_iiuj5$_0 = MenuItem$mouseUpHandler$lambda(this);
    this.menuItemStyle = new MenuItem$Style();
  }
  Object.defineProperty(MenuItem.prototype, 'action', {
    get: function () {
      return this.action_iiuj5$_0;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'hovered', {
    get: function () {
      return this.hovered_iiuj5$_0;
    },
    set: function (hovered) {
      this.hovered_iiuj5$_0 = hovered;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'focused', {
    get: function () {
      return this.focused_iiuj5$_0;
    },
    set: function (focused) {
      this.focused_iiuj5$_0 = focused;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'pressed', {
    get: function () {
      return this.pressed_iiuj5$_0;
    },
    set: function (pressed) {
      this.pressed_iiuj5$_0 = pressed;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'selectedIcon_iiuj5$_0', {
    get: function () {
      var $receiver = this.selectedIcon$delegate;
      new Kotlin.PropertyMetadata('selectedIcon');
      return $receiver.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'primaryText_iiuj5$_0', {
    get: function () {
      var $receiver = this.primaryText$delegate;
      new Kotlin.PropertyMetadata('primaryText');
      return $receiver.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'secondaryTextSpan_iiuj5$_0', {
    get: function () {
      var $receiver = this.secondaryTextSpan$delegate;
      new Kotlin.PropertyMetadata('secondaryTextSpan');
      return $receiver.value;
    }
  });
  Object.defineProperty(MenuItem.prototype, 'secondaryText_iiuj5$_0', {
    get: function () {
      var $receiver = this.secondaryText$delegate;
      new Kotlin.PropertyMetadata('secondaryText');
      return $receiver.value;
    }
  });
  MenuItem.prototype.onHover = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.unHover = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.onFocus = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.unFocus = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.onPressed = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.unPressed = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.onEnabled = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.onDisabled = function () {
    this.renderColor_iiuj5$_0();
  };
  MenuItem.prototype.render = function () {
    var tmp$;
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MenuItem$Companion_getInstance().classSelector);
    this._tabindex = '0';
    if (Kotlin.isType(this.action, SelectableAction)) {
      var action = Kotlin.isType(tmp$ = this.action, SelectableAction) ? tmp$ : Kotlin.throwCCE();
      this.appendChild_sr04hg$(this.selectedIcon_iiuj5$_0);
      this.renderSelected_f058yc$_0(action.selected);
    }
    this.appendChild_sr04hg$(this.primaryText_iiuj5$_0);
    this.appendChild_sr04hg$(this.secondaryText_iiuj5$_0);
    this.primaryText_iiuj5$_0.textContent = this.action.label;
    this.renderShortcut_4o113p$_0(this.action.shortcut);
    this.renderDisabled_f058yc$_0(this.action.disabled);
  };
  MenuItem.prototype.renderShortcut_4o113p$_0 = function (key) {
    var tmp$;
    this.secondaryTextSpan_iiuj5$_0.removeChildren();
    if (key != null) {
      tmp$ = key.modifiers.list.iterator();
      while (tmp$.hasNext()) {
        var modifier = tmp$.next();
        if (modifier === Modifier.meta) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text('\u2318'));
          }
           else {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else if (modifier === Modifier.shift) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text('\u21E7'));
          }
           else {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else if (modifier === Modifier.alt) {
          if (agent.OSDetector.detected === OS.MAC) {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text('\u2325'));
          }
           else {
            this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text(modifier.name));
          }
        }
         else {
          this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text(modifier.name));
        }
      }
      this.secondaryTextSpan_iiuj5$_0.appendChild_sr04hg$(new Text(key.key.toUpperCase()));
    }
  };
  MenuItem.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    this.action.onPropertyChanged_saq78d$(this.actionPropertyChangedHandler_iiuj5$_0);
    onClick(this, this.clickHandler_iiuj5$_0);
    onMouseEnter(this, this.mouseEnterHandler_iiuj5$_0);
    onMouseLeave(this, this.mouseLeaveHandler_iiuj5$_0);
    onFocus(this, this.focusHandler_iiuj5$_0);
    onBlur(this, this.blurHandler_iiuj5$_0);
    onMouseDown(this, this.mouseDownHandler_iiuj5$_0);
    onMouseUp(this, this.mouseUpHandler_iiuj5$_0);
  };
  MenuItem.prototype.renderSelected_f058yc$_0 = function (selected) {
    if (selected) {
      this.addClass_bx842b$(SelectableAction$Statics_getInstance().selectedSelector);
      this.selectedIcon_iiuj5$_0._style.opacity = '1';
    }
     else {
      this.removeClass_bx842b$(SelectableAction$Statics_getInstance().selectedSelector);
      this.selectedIcon_iiuj5$_0._style.opacity = '0';
    }
  };
  MenuItem.prototype.renderDisabled_f058yc$_0 = function (disabled) {
    if (disabled) {
      this.toggleClass_ivxn3r$(MenuItem$Companion_getInstance().DISABLED.value, true);
    }
     else {
      this.toggleClass_ivxn3r$(MenuItem$Companion_getInstance().DISABLED.value);
    }
  };
  MenuItem.prototype.onBeforePerformingAction_xbm201$ = function (listener) {
    this.beforePerformingActionListeners_iiuj5$_0.add_11rb$(listener);
  };
  MenuItem.prototype.unBeforePerformingAction_xbm201$ = function (listener) {
    this.beforePerformingActionListeners_iiuj5$_0.remove_11rb$(listener);
  };
  MenuItem.prototype.onAfterPerformingAction_xbm201$ = function (listener) {
    this.afterPerformingActionListeners_iiuj5$_0.add_11rb$(listener);
  };
  MenuItem.prototype.unAfterPerformingAction_xbm201$ = function (listener) {
    this.afterPerformingActionListeners_iiuj5$_0.remove_11rb$(listener);
  };
  MenuItem.prototype.renderColor_iiuj5$_0 = function () {
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
    this.color_lbh9n2$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_lbh9n2$_0 = RgbColor.Factory.WHITE;
    this.pressed = new MenuItem$Style$pressed$ObjectLiteral();
    this.hovered = new MenuItem$Style$hovered$ObjectLiteral();
    this.focused = new MenuItem$Style$focused$ObjectLiteral();
    this.disabled = new MenuItem$Style$disabled$ObjectLiteral();
  }
  Object.defineProperty(MenuItem$Style.prototype, 'color', {
    get: function () {
      return this.color_lbh9n2$_0;
    },
    set: function (color) {
      this.color_lbh9n2$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_lbh9n2$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_lbh9n2$_0 = backgroundColor;
    }
  });
  function MenuItem$Style$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_yz2c2l$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_yz2c2l$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MenuItem$Style$pressed$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_yz2c2l$_0;
    },
    set: function (color) {
      this.color_yz2c2l$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_yz2c2l$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_yz2c2l$_0 = backgroundColor;
    }
  });
  MenuItem$Style$pressed$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_siu6qk$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_siu6qk$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MenuItem$Style$hovered$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_siu6qk$_0;
    },
    set: function (color) {
      this.color_siu6qk$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$hovered$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_siu6qk$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_siu6qk$_0 = backgroundColor;
    }
  });
  MenuItem$Style$hovered$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_d0760o$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_d0760o$_0 = RgbColor.Factory.WHITE;
  }
  Object.defineProperty(MenuItem$Style$focused$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_d0760o$_0;
    },
    set: function (color) {
      this.color_d0760o$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$focused$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_d0760o$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_d0760o$_0 = backgroundColor;
    }
  });
  MenuItem$Style$focused$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  function MenuItem$Style$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_30ek1r$_0 = RgbColor.Factory.from_61zpoe$('#909090');
    this.backgroundColor_30ek1r$_0 = RgbColor.Factory.WHITE;
  }
  Object.defineProperty(MenuItem$Style$disabled$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_30ek1r$_0;
    },
    set: function (color) {
      this.color_30ek1r$_0 = color;
    }
  });
  Object.defineProperty(MenuItem$Style$disabled$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_30ek1r$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_30ek1r$_0 = backgroundColor;
    }
  });
  MenuItem$Style$disabled$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ElementStyle]
  };
  MenuItem$Style.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Style',
    interfaces: [ElementStyle]
  };
  function MenuItem$Companion() {
    MenuItem$Companion_instance = this;
    this.DISABLED = toClassSelector('disabled');
    this.classSelector_jf1wt$_0 = new ClassSelector('fg-bn-menu-item');
    this.rule_jf1wt$_0 = MenuItem$Companion$rule$lambda(this);
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MenuItem$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_jf1wt$_0;
    }
  });
  Object.defineProperty(MenuItem$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_jf1wt$_0;
    }
  });
  function MenuItem$Companion$rule$lambda$lambda($receiver) {
    $receiver._marginRight = '24px';
    $receiver._marginLeft = '0px';
    $receiver._flex = 'initial';
  }
  function MenuItem$Companion$rule$lambda$lambda_0($receiver) {
    $receiver._flex = '1';
  }
  function MenuItem$Companion$rule$lambda$lambda_1($receiver) {
    $receiver._marginLeft = '8px';
    $receiver._flex = 'initial';
  }
  function MenuItem$Companion$rule$lambda$lambda_2($receiver) {
    $receiver._outline = 'none';
  }
  function MenuItem$Companion$rule$lambda$lambda_3($receiver) {
    $receiver._cursor = 'not-allowed';
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
    };
  }
  MenuItem$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      div.appendChild_sr04hg$(this$MenuItem.secondaryTextSpan_iiuj5$_0);
      return div;
    };
  }
  function MenuItem$actionPropertyChangedHandler$lambda(this$MenuItem) {
    return function (action, property, old, new_0) {
      if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('label', 1, function ($receiver) {
        return $receiver.label;
      }, function ($receiver, value) {
        $receiver.label = value;
      }).callableName)) {
        this$MenuItem.primaryText_iiuj5$_0.textContent = action.label;
      }
       else if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('shortcut', 1, function ($receiver) {
        return $receiver.shortcut;
      }, function ($receiver, value) {
        $receiver.shortcut = value;
      }).callableName)) {
        this$MenuItem.renderShortcut_4o113p$_0(action.shortcut);
      }
       else if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('enabled', 1, function ($receiver) {
        return $receiver.enabled;
      }, function ($receiver, value) {
        $receiver.enabled = value;
      }).callableName)) {
        this$MenuItem.renderDisabled_f058yc$_0(action.disabled);
        if (action.enabled) {
          this$MenuItem.onEnabled();
        }
         else {
          this$MenuItem.onDisabled();
        }
      }
      if (Kotlin.isType(action, SelectableAction)) {
        if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('selected', 1, function ($receiver) {
          return $receiver.selected;
        }, function ($receiver, value) {
          $receiver.selected = value;
        }).callableName)) {
          this$MenuItem.renderSelected_f058yc$_0(action.selected);
        }
      }
    };
  }
  function MenuItem$clickHandler$lambda(this$MenuItem, closure$action) {
    return function (event) {
      console.log('MenuItem.clicked', event);
      var $receiver = this$MenuItem.beforePerformingActionListeners_iiuj5$_0;
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
      var $receiver_0 = this$MenuItem.afterPerformingActionListeners_iiuj5$_0;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0(closure$action);
      }
    };
  }
  function MenuItem$mouseEnterHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.hovered = true;
      this$MenuItem.toggleClass_ivxn3r$('hovered', true);
      this$MenuItem.onHover();
    };
  }
  function MenuItem$mouseLeaveHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.hovered = false;
      this$MenuItem.toggleClass_ivxn3r$('hovered');
      this$MenuItem.unHover();
    };
  }
  function MenuItem$focusHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.focused = true;
      this$MenuItem.toggleClass_ivxn3r$('focused', true);
      this$MenuItem.onFocus();
    };
  }
  function MenuItem$blurHandler$lambda(this$MenuItem) {
    return function (it) {
      this$MenuItem.focused = false;
      this$MenuItem.toggleClass_ivxn3r$('focused');
      this$MenuItem.unFocus();
    };
  }
  function MenuItem$mouseDownHandler$lambda(closure$action, this$MenuItem) {
    return function (event) {
      if (closure$action.enabled) {
        this$MenuItem.pressed = true;
        this$MenuItem.toggleClass_ivxn3r$('pressed', true);
        this$MenuItem.onPressed();
      }
    };
  }
  function MenuItem$mouseUpHandler$lambda(this$MenuItem) {
    return function (event) {
      this$MenuItem.pressed = false;
      this$MenuItem.toggleClass_ivxn3r$('pressed');
      this$MenuItem.unPressed();
    };
  }
  MenuItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MenuItem',
    interfaces: [ActionBean, Div]
  };
  var pkg_0;
  function collapseOn$lambda(closure$action, this$collapseOn) {
    return function (f, property, f_0, f_1) {
      if (Kotlin.equals(property.callableName, Kotlin.getPropertyCallableRef('selected', 1, function ($receiver) {
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
    };
  }
  function collapseOn($receiver, action) {
    action.onPropertyChanged_saq78d$(collapseOn$lambda(action, $receiver));
  }
  function LabelledRadioButton(checked, labelText, checkedIcon, unCheckedIcon) {
    LabelledRadioButton$Companion_getInstance();
    if (checkedIcon === void 0)
      checkedIcon = null;
    if (unCheckedIcon === void 0)
      unCheckedIcon = null;
    Div.call(this);
    this.radioButton$delegate = lazy(LabelledRadioButton$radioButton$lambda(checked));
    var initialValue = checkedIcon;
    this.checkedIcon$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(LabelledRadioButton$checkedIcon$lambda(this), initialValue);
    var initialValue_0 = unCheckedIcon;
    this.unCheckedIcon$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(LabelledRadioButton$unCheckedIcon$lambda(this), initialValue_0);
    this.iconI$delegate = lazy(LabelledRadioButton$iconI$lambda(unCheckedIcon));
    this.label$delegate = lazy(LabelledRadioButton$label$lambda);
    this.labelText$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(LabelledRadioButton$labelText$lambda(this), labelText);
    this.checkedHandler_ah20nj$_0 = LabelledRadioButton$checkedHandler$lambda(this);
    this.clickHandler_ah20nj$_0 = LabelledRadioButton$clickHandler$lambda(this);
  }
  Object.defineProperty(LabelledRadioButton.prototype, 'radioButton', {
    get: function () {
      var $receiver = this.radioButton$delegate;
      new Kotlin.PropertyMetadata('radioButton');
      return $receiver.value;
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'checkedIcon', {
    get: function () {
      return this.checkedIcon$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('checkedIcon'));
    },
    set: function (checkedIcon) {
      this.checkedIcon$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('checkedIcon'), checkedIcon);
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'unCheckedIcon', {
    get: function () {
      return this.unCheckedIcon$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('unCheckedIcon'));
    },
    set: function (unCheckedIcon) {
      this.unCheckedIcon$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('unCheckedIcon'), unCheckedIcon);
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'iconI', {
    get: function () {
      var $receiver = this.iconI$delegate;
      new Kotlin.PropertyMetadata('iconI');
      return $receiver.value;
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'label', {
    get: function () {
      var $receiver = this.label$delegate;
      new Kotlin.PropertyMetadata('label');
      return $receiver.value;
    }
  });
  Object.defineProperty(LabelledRadioButton.prototype, 'labelText', {
    get: function () {
      return this.labelText$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('labelText'));
    },
    set: function (labelText) {
      this.labelText$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('labelText'), labelText);
    }
  });
  LabelledRadioButton.prototype.render = function () {
    this.addClass_bx842b$(LabelledRadioButton$Companion_getInstance().classSelector);
    this.appendChild_sr04hg$(this.radioButton);
    this.appendChild_sr04hg$(this.iconI);
    this.appendChild_sr04hg$(this.label);
    this.renderLabel_x1ntps$_0(this.labelText);
  };
  LabelledRadioButton.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    onClick(this.label, this.clickHandler_ah20nj$_0);
    onClick(this.iconI, this.clickHandler_ah20nj$_0);
    this.radioButton.onChecked_y8twos$(this.checkedHandler_ah20nj$_0);
  };
  LabelledRadioButton.prototype.renderLabel_x1ntps$_0 = function (labelText) {
    if (labelText != null) {
      this.label.textContent = labelText;
      this.label.show();
    }
     else {
      this.label.removeChildren();
      this.label.hide();
    }
  };
  LabelledRadioButton.prototype.renderChecked_us76e$_0 = function (checked) {
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
    this.classSelector_v713o1$_0 = toClassSelector('bn-labelled-radio-button');
    this.rule_v713o1$_0 = LabelledRadioButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(LabelledRadioButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_v713o1$_0;
    }
  });
  Object.defineProperty(LabelledRadioButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_v713o1$_0;
    }
  });
  function LabelledRadioButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
  }
  function LabelledRadioButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
  }
  function LabelledRadioButton$Companion$rule$lambda$lambda_0($receiver) {
    hover($receiver, LabelledRadioButton$Companion$rule$lambda$lambda$lambda);
  }
  function LabelledRadioButton$Companion$rule$lambda($receiver) {
    hover($receiver, LabelledRadioButton$Companion$rule$lambda$lambda);
    child_0($receiver, 'label', LabelledRadioButton$Companion$rule$lambda$lambda_0);
  }
  LabelledRadioButton$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      this$LabelledRadioButton.renderChecked_us76e$_0(this$LabelledRadioButton.radioButton.checked);
    };
  }
  function LabelledRadioButton$unCheckedIcon$lambda(this$LabelledRadioButton) {
    return function (property, old, new_0) {
      this$LabelledRadioButton.renderChecked_us76e$_0(this$LabelledRadioButton.radioButton.checked);
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
      this$LabelledRadioButton.renderLabel_x1ntps$_0(new_0);
    };
  }
  function LabelledRadioButton$checkedHandler$lambda(this$LabelledRadioButton) {
    return function (checked) {
      this$LabelledRadioButton.renderChecked_us76e$_0(checked);
    };
  }
  function LabelledRadioButton$clickHandler$lambda(this$LabelledRadioButton) {
    return function (it) {
      this$LabelledRadioButton.radioButton.toggle();
    };
  }
  LabelledRadioButton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LabelledRadioButton',
    interfaces: [Div]
  };
  function RadioButton(checked) {
    RadioButton$Companion_getInstance();
    if (checked === void 0)
      checked = false;
    InputRadio.call(this);
    var initialValue = checked;
    this.checked$delegate = new Kotlin.kotlin.properties.Delegates.observable_2ulm9r$$f(RadioButton$checked$lambda(this), initialValue);
    this.checkedListeners_4r7lns$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.clickHandler_4r7lns$_0 = RadioButton$clickHandler$lambda(this);
  }
  Object.defineProperty(RadioButton.prototype, 'checked', {
    get: function () {
      return this.checked$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('checked'));
    },
    set: function (checked) {
      this.checked$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('checked'), checked);
    }
  });
  RadioButton.prototype.notifyCheckedListeners_r4at71$_0 = function (checked) {
    var tmp$;
    tmp$ = this.checkedListeners_4r7lns$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(checked);
    }
  };
  RadioButton.prototype.onChecked_y8twos$ = function (listener) {
    this.checkedListeners_4r7lns$_0.add_11rb$(listener);
  };
  RadioButton.prototype.unChecked_y8twos$ = function (listener) {
    this.checkedListeners_4r7lns$_0.remove_11rb$(listener);
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
    onClick(this, this.clickHandler_4r7lns$_0);
  };
  function RadioButton$Companion() {
    RadioButton$Companion_instance = this;
    this.classSelector_utzb8m$_0 = toClassSelector('bn-radio-button');
    this.rule_utzb8m$_0 = RadioButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(RadioButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_utzb8m$_0;
    }
  });
  Object.defineProperty(RadioButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_utzb8m$_0;
    }
  });
  function RadioButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._cursor = 'pointer';
  }
  function RadioButton$Companion$rule$lambda($receiver) {
    $receiver._background = 'red';
    hover($receiver, RadioButton$Companion$rule$lambda$lambda);
  }
  RadioButton$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
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
      this$RadioButton.notifyCheckedListeners_r4at71$_0(new_0);
    };
  }
  function RadioButton$clickHandler$lambda(this$RadioButton) {
    return function (it) {
      var tmp$;
      var newState = !((tmp$ = this$RadioButton._checked) != null ? tmp$ : Kotlin.throwNPE());
      this$RadioButton._checked = newState;
    };
  }
  RadioButton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
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
