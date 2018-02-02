if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'material-design'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'material-design'.");
}
if (typeof elements === 'undefined') {
  throw new Error("Error loading module 'material-design'. Its dependency 'elements' was not found. Please, check whether 'elements' is loaded prior to 'material-design'.");
}
if (typeof beans === 'undefined') {
  throw new Error("Error loading module 'material-design'. Its dependency 'beans' was not found. Please, check whether 'beans' is loaded prior to 'material-design'.");
}
this['material-design'] = function (_, Kotlin, $module$elements, $module$beans) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var initAndAppendNode = $module$elements.fg.elements.initAndAppendNode_n3qhgg$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var RgbColor = $module$elements.fg.style.colour.RgbColor;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var AppBar = $module$beans.fg.beans.app.AppBar;
  var toClassSelector = $module$elements.fg.elements.toClassSelector_pdl1vz$;
  var get_px = $module$elements.fg.elements.get_px_s8ev3n$;
  var Display = $module$elements.fg.elements.style.typed.Display;
  var FlexDirection = $module$elements.fg.elements.style.typed.FlexDirection;
  var AlignItems = $module$elements.fg.elements.style.typed.AlignItems;
  var elements = $module$elements.fg.elements;
  var TypedStyledClass = $module$elements.fg.elements.TypedStyledClass;
  var Button = $module$beans.fg.beans.button.Button;
  var AbstractButton = $module$beans.fg.beans.button.AbstractButton;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ElementStyle = $module$beans.fg.beans.ElementStyle;
  var icon = $module$beans.fg.beans.icon;
  var focus = $module$elements.fg.style.focus_dn1ps9$;
  var and = $module$elements.fg.style.and_xif9ow$;
  var active = $module$elements.fg.style.active_dn1ps9$;
  var and_0 = $module$elements.fg.style.and_sszkdk$;
  var StyledClass = $module$elements.fg.elements.StyledClass;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ToggleButton = $module$beans.fg.beans.button.ToggleButton;
  var and_1 = $module$elements.fg.style.and_yogg4l$;
  var Div = $module$elements.fg.elements.Div;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var equals = Kotlin.equals;
  var Img = $module$elements.fg.elements.Img;
  var Selector = $module$elements.fg.elements.Selector;
  var firstChild = $module$elements.fg.style.firstChild_dn1ps9$;
  var child = $module$elements.fg.style.child_xmmih7$;
  var toSelector = $module$elements.fg.elements.toSelector_pdl1vz$;
  var not = $module$elements.fg.style.not_xif9ow$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Drawer = $module$beans.fg.beans.drawer.Drawer;
  var I = $module$elements.fg.elements.I;
  var IconProvider = $module$beans.fg.beans.icon.IconProvider;
  var Menu = $module$beans.fg.beans.menu.Menu;
  var MenuItem = $module$beans.fg.beans.menu.MenuItem;
  var JustifyContent = $module$elements.fg.elements.style.typed.JustifyContent;
  var Percent = $module$elements.fg.elements.Percent;
  var onFocus = $module$elements.fg.elements.onFocus_8l2ll4$;
  var onBlur = $module$elements.fg.elements.onBlur_8l2ll4$;
  var onKeyUp = $module$elements.fg.elements.onKeyUp_3e4brz$;
  var adjacentSibling = $module$elements.fg.style.adjacentSibling_ubtint$;
  var SelectableAction = $module$beans.fg.beans.action.SelectableAction;
  var LabelledRadioButton = $module$beans.fg.beans.radio.LabelledRadioButton;
  var onMouseDown = $module$elements.fg.elements.onMouseDown_e96vkx$;
  var bounceUntil = $module$elements.fg.base.bounceUntil_5237lg$;
  var debounce1 = $module$elements.fg.base.debounce1_5237lg$;
  var onMouseUp = $module$elements.fg.elements.onMouseUp_e96vkx$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var classRule = $module$elements.fg.style.classRule_fprhdc$;
  var get_px_0 = $module$elements.fg.elements.get_px_yrwdxr$;
  var Span = $module$elements.fg.elements.Span;
  var kto = $module$elements.fg.style.kto_yovo6t$;
  var keyframesRule = $module$elements.fg.style.keyframesRule_xtarec$;
  var Flex = $module$elements.fg.elements.style.typed.Flex;
  var with_0 = $module$elements.fg.elements.with_9bxh2u$;
  MDAppBar.prototype = Object.create(AppBar.prototype);
  MDAppBar.prototype.constructor = MDAppBar;
  MDButton$Type.prototype = Object.create(Enum.prototype);
  MDButton$Type.prototype.constructor = MDButton$Type;
  MDButton$FlatStyle$hovered$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$FlatStyle$hovered$ObjectLiteral.prototype.constructor = MDButton$FlatStyle$hovered$ObjectLiteral;
  MDButton$FlatStyle$pressed$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$FlatStyle$pressed$ObjectLiteral.prototype.constructor = MDButton$FlatStyle$pressed$ObjectLiteral;
  MDButton$FlatStyle$focused$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$FlatStyle$focused$ObjectLiteral.prototype.constructor = MDButton$FlatStyle$focused$ObjectLiteral;
  MDButton$FlatStyle$disabled$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$FlatStyle$disabled$ObjectLiteral.prototype.constructor = MDButton$FlatStyle$disabled$ObjectLiteral;
  MDButton$FlatStyle.prototype = Object.create(ElementStyle.prototype);
  MDButton$FlatStyle.prototype.constructor = MDButton$FlatStyle;
  MDButton$RaisedStyle$hovered$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$RaisedStyle$hovered$ObjectLiteral.prototype.constructor = MDButton$RaisedStyle$hovered$ObjectLiteral;
  MDButton$RaisedStyle$pressed$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$RaisedStyle$pressed$ObjectLiteral.prototype.constructor = MDButton$RaisedStyle$pressed$ObjectLiteral;
  MDButton$RaisedStyle$focused$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$RaisedStyle$focused$ObjectLiteral.prototype.constructor = MDButton$RaisedStyle$focused$ObjectLiteral;
  MDButton$RaisedStyle$disabled$ObjectLiteral.prototype = Object.create(ElementStyle.prototype);
  MDButton$RaisedStyle$disabled$ObjectLiteral.prototype.constructor = MDButton$RaisedStyle$disabled$ObjectLiteral;
  MDButton$RaisedStyle.prototype = Object.create(ElementStyle.prototype);
  MDButton$RaisedStyle.prototype.constructor = MDButton$RaisedStyle;
  MDButton$FloatingStyle.prototype = Object.create(ElementStyle.prototype);
  MDButton$FloatingStyle.prototype.constructor = MDButton$FloatingStyle;
  MDButton.prototype = Object.create(Button.prototype);
  MDButton.prototype.constructor = MDButton;
  MDToggleButton.prototype = Object.create(ToggleButton.prototype);
  MDToggleButton.prototype.constructor = MDToggleButton;
  MDCard.prototype = Object.create(Div.prototype);
  MDCard.prototype.constructor = MDCard;
  MDCardActions.prototype = Object.create(Div.prototype);
  MDCardActions.prototype.constructor = MDCardActions;
  MDCardAvatar.prototype = Object.create(Img.prototype);
  MDCardAvatar.prototype.constructor = MDCardAvatar;
  MDCardContent.prototype = Object.create(Div.prototype);
  MDCardContent.prototype.constructor = MDCardContent;
  MDCardHeader.prototype = Object.create(Div.prototype);
  MDCardHeader.prototype.constructor = MDCardHeader;
  MDCardHeaderText.prototype = Object.create(Div.prototype);
  MDCardHeaderText.prototype.constructor = MDCardHeaderText;
  MDCardImage.prototype = Object.create(Img.prototype);
  MDCardImage.prototype.constructor = MDCardImage;
  MDCardSubtitle.prototype = Object.create(Div.prototype);
  MDCardSubtitle.prototype.constructor = MDCardSubtitle;
  MDCardTitle.prototype = Object.create(Div.prototype);
  MDCardTitle.prototype.constructor = MDCardTitle;
  MDCardTitleText.prototype = Object.create(Div.prototype);
  MDCardTitleText.prototype.constructor = MDCardTitleText;
  MDColor.prototype = Object.create(Enum.prototype);
  MDColor.prototype.constructor = MDColor;
  MDDrawer.prototype = Object.create(Drawer.prototype);
  MDDrawer.prototype.constructor = MDDrawer;
  MDIcon$Size.prototype = Object.create(Enum.prototype);
  MDIcon$Size.prototype.constructor = MDIcon$Size;
  MDIcon.prototype = Object.create(I.prototype);
  MDIcon.prototype.constructor = MDIcon;
  MDMenu.prototype = Object.create(Menu.prototype);
  MDMenu.prototype.constructor = MDMenu;
  MDMenuItem.prototype = Object.create(MenuItem.prototype);
  MDMenuItem.prototype.constructor = MDMenuItem;
  MDCollapsedPanel.prototype = Object.create(Div.prototype);
  MDCollapsedPanel.prototype.constructor = MDCollapsedPanel;
  MDExpandButton.prototype = Object.create(MDToggleButton.prototype);
  MDExpandButton.prototype.constructor = MDExpandButton;
  MDExpandedContent.prototype = Object.create(Div.prototype);
  MDExpandedContent.prototype.constructor = MDExpandedContent;
  MDExpandedPanel.prototype = Object.create(Div.prototype);
  MDExpandedPanel.prototype.constructor = MDExpandedPanel;
  MDExpansionPanel$State.prototype = Object.create(Enum.prototype);
  MDExpansionPanel$State.prototype.constructor = MDExpansionPanel$State;
  MDExpansionPanel.prototype = Object.create(Div.prototype);
  MDExpansionPanel.prototype.constructor = MDExpansionPanel;
  MDRadioButton.prototype = Object.create(LabelledRadioButton.prototype);
  MDRadioButton.prototype.constructor = MDRadioButton;
  RippleContainer.prototype = Object.create(Div.prototype);
  RippleContainer.prototype.constructor = RippleContainer;
  RippleInk.prototype = Object.create(Span.prototype);
  RippleInk.prototype.constructor = RippleInk;
  MDToolbar.prototype = Object.create(Div.prototype);
  MDToolbar.prototype.constructor = MDToolbar;
  function Context() {
    Context_instance = this;
    this.theme = Theme$Statics_getInstance().LIGHT;
  }
  Context.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Context',
    interfaces: []
  };
  var Context_instance = null;
  function Context_getInstance() {
    if (Context_instance === null) {
      new Context();
    }
    return Context_instance;
  }
  function mdButton($receiver, action, type, init) {
    return initAndAppendNode($receiver, new MDButton(action, type), init);
  }
  function mdCard($receiver, init) {
    return initAndAppendNode($receiver, new MDCard(), init);
  }
  function mdDrawer($receiver, side, init) {
    return initAndAppendNode($receiver, new MDDrawer(side), init);
  }
  function mdExpansionPanel($receiver, init) {
    return initAndAppendNode($receiver, new MDExpansionPanel(), init);
  }
  function mdIcon($receiver, init) {
    return initAndAppendNode($receiver, new MDIcon(), init);
  }
  function mdMenu($receiver, label, shortcut, init) {
    if (label === void 0)
      label = null;
    if (shortcut === void 0)
      shortcut = null;
    return initAndAppendNode($receiver, new MDMenu(label, shortcut), init);
  }
  function mdRadioButton($receiver, labelText, init) {
    if (labelText === void 0)
      labelText = null;
    return initAndAppendNode($receiver, new MDRadioButton(void 0, labelText), init);
  }
  function mdToggleButton($receiver, action, init) {
    return initAndAppendNode($receiver, new MDToggleButton(action), init);
  }
  function mdToolbar($receiver, init) {
    return initAndAppendNode($receiver, new MDToolbar(), init);
  }
  function title($receiver, init) {
    return initAndAppendNode($receiver, new MDCardTitle(), init);
  }
  function subtitle($receiver, init) {
    return initAndAppendNode($receiver, new MDCardSubtitle(), init);
  }
  function header($receiver, init) {
    return initAndAppendNode($receiver, new MDCardHeader(), init);
  }
  function image($receiver, src, init) {
    return initAndAppendNode($receiver, new MDCardImage(src), init);
  }
  function content($receiver, init) {
    return initAndAppendNode($receiver, new MDCardContent(), init);
  }
  function mdActions($receiver, init) {
    return initAndAppendNode($receiver, new MDCardActions(), init);
  }
  function titleText($receiver, init) {
    return initAndAppendNode($receiver, new MDCardTitleText(), init);
  }
  function text($receiver, init) {
    return initAndAppendNode($receiver, new MDCardHeaderText(), init);
  }
  function title_0($receiver, init) {
    return initAndAppendNode($receiver, new MDCardTitle(), init);
  }
  function subtitle_0($receiver, init) {
    return initAndAppendNode($receiver, new MDCardSubtitle(), init);
  }
  function title_1($receiver, init) {
    return initAndAppendNode($receiver, new MDCardTitle(), init);
  }
  function subtitle_1($receiver, init) {
    return initAndAppendNode($receiver, new MDCardSubtitle(), init);
  }
  function avatar($receiver, src, init) {
    return initAndAppendNode($receiver, new MDCardAvatar(src), init);
  }
  function title_2($receiver, init) {
    return initAndAppendNode($receiver, new MDCardTitle(), init);
  }
  function subtitle_2($receiver, init) {
    return initAndAppendNode($receiver, new MDCardSubtitle(), init);
  }
  function mdButton_0($receiver, action, init) {
    return initAndAppendNode($receiver, new MDButton(action, MDButton$Type$FLAT_getInstance()), init);
  }
  function mdButton_1($receiver, action, type, init) {
    return initAndAppendNode($receiver, new MDButton(action, type), init);
  }
  function mdMenuItem($receiver, action, init) {
    return initAndAppendNode($receiver, new MDMenuItem(action), init);
  }
  function content_0($receiver, init) {
    return initAndAppendNode($receiver, new MDCardContent(), init);
  }
  function content_1($receiver, init) {
    return initAndAppendNode($receiver, new MDCardContent(), init);
  }
  function spacer$lambda($receiver) {
    return Unit;
  }
  function spacer($receiver) {
    return initAndAppendNode($receiver, MDToolbar$MDToolbar_getInstance().spacer(), spacer$lambda);
  }
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
  function Theme(primaryColor, accentColor, warnColor, statusBar, appBar, toolbar, background, cardsNdialogs, font) {
    Theme$Statics_getInstance();
    this.propertyChangedListeners_0 = ArrayList_init();
    this.primaryColor_g7oxmy$_0 = new Delegates$observable$ObjectLiteral(Theme$primaryColor$lambda, primaryColor);
    this.accentColor_iok4cw$_0 = new Delegates$observable$ObjectLiteral_0(Theme$accentColor$lambda, accentColor);
    this.warnColor_lqidn0$_0 = new Delegates$observable$ObjectLiteral_1(Theme$warnColor$lambda, warnColor);
    this.statusBar_bzbd1k$_0 = new Delegates$observable$ObjectLiteral_2(Theme$statusBar$lambda, statusBar);
    this.appBar_qsaohl$_0 = new Delegates$observable$ObjectLiteral_3(Theme$appBar$lambda, appBar);
    this.toolbar_dwktu6$_0 = new Delegates$observable$ObjectLiteral_4(Theme$toolbar$lambda, toolbar);
    this.background_c9ntdv$_0 = new Delegates$observable$ObjectLiteral_5(Theme$background$lambda, background);
    this.cardsNdialogs_q3sind$_0 = new Delegates$observable$ObjectLiteral_6(Theme$cardsNdialogs$lambda, cardsNdialogs);
    this.font = font;
  }
  Theme.prototype.notifyPropertyChanged_oh08kn$ = function (property, old, new_0) {
    var tmp$;
    tmp$ = this.propertyChangedListeners_0.iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener(this, property, old, new_0);
    }
  };
  Theme.prototype.onPropertyChanged_bdxxi9$ = function (listener) {
    var tmp$;
    this.propertyChangedListeners_0.add_11rb$(typeof (tmp$ = listener) === 'function' ? tmp$ : throwCCE());
  };
  Theme.prototype.unPropertyChanged_u2o7yy$ = function (listener) {
    this.propertyChangedListeners_0.remove_11rb$(listener);
  };
  var Theme$primaryColor_metadata = new PropertyMetadata('primaryColor');
  Object.defineProperty(Theme.prototype, 'primaryColor', {
    get: function () {
      return this.primaryColor_g7oxmy$_0.getValue_lrcp0p$(this, Theme$primaryColor_metadata);
    },
    set: function (primaryColor) {
      this.primaryColor_g7oxmy$_0.setValue_9rddgb$(this, Theme$primaryColor_metadata, primaryColor);
    }
  });
  var Theme$accentColor_metadata = new PropertyMetadata('accentColor');
  Object.defineProperty(Theme.prototype, 'accentColor', {
    get: function () {
      return this.accentColor_iok4cw$_0.getValue_lrcp0p$(this, Theme$accentColor_metadata);
    },
    set: function (accentColor) {
      this.accentColor_iok4cw$_0.setValue_9rddgb$(this, Theme$accentColor_metadata, accentColor);
    }
  });
  var Theme$warnColor_metadata = new PropertyMetadata('warnColor');
  Object.defineProperty(Theme.prototype, 'warnColor', {
    get: function () {
      return this.warnColor_lqidn0$_0.getValue_lrcp0p$(this, Theme$warnColor_metadata);
    },
    set: function (warnColor) {
      this.warnColor_lqidn0$_0.setValue_9rddgb$(this, Theme$warnColor_metadata, warnColor);
    }
  });
  var Theme$statusBar_metadata = new PropertyMetadata('statusBar');
  Object.defineProperty(Theme.prototype, 'statusBar', {
    get: function () {
      return this.statusBar_bzbd1k$_0.getValue_lrcp0p$(this, Theme$statusBar_metadata);
    },
    set: function (statusBar) {
      this.statusBar_bzbd1k$_0.setValue_9rddgb$(this, Theme$statusBar_metadata, statusBar);
    }
  });
  var Theme$appBar_metadata = new PropertyMetadata('appBar');
  Object.defineProperty(Theme.prototype, 'appBar', {
    get: function () {
      return this.appBar_qsaohl$_0.getValue_lrcp0p$(this, Theme$appBar_metadata);
    },
    set: function (appBar) {
      this.appBar_qsaohl$_0.setValue_9rddgb$(this, Theme$appBar_metadata, appBar);
    }
  });
  var Theme$toolbar_metadata = new PropertyMetadata('toolbar');
  Object.defineProperty(Theme.prototype, 'toolbar', {
    get: function () {
      return this.toolbar_dwktu6$_0.getValue_lrcp0p$(this, Theme$toolbar_metadata);
    },
    set: function (toolbar) {
      this.toolbar_dwktu6$_0.setValue_9rddgb$(this, Theme$toolbar_metadata, toolbar);
    }
  });
  var Theme$background_metadata = new PropertyMetadata('background');
  Object.defineProperty(Theme.prototype, 'background', {
    get: function () {
      return this.background_c9ntdv$_0.getValue_lrcp0p$(this, Theme$background_metadata);
    },
    set: function (background) {
      this.background_c9ntdv$_0.setValue_9rddgb$(this, Theme$background_metadata, background);
    }
  });
  var Theme$cardsNdialogs_metadata = new PropertyMetadata('cardsNdialogs');
  Object.defineProperty(Theme.prototype, 'cardsNdialogs', {
    get: function () {
      return this.cardsNdialogs_q3sind$_0.getValue_lrcp0p$(this, Theme$cardsNdialogs_metadata);
    },
    set: function (cardsNdialogs) {
      this.cardsNdialogs_q3sind$_0.setValue_9rddgb$(this, Theme$cardsNdialogs_metadata, cardsNdialogs);
    }
  });
  Theme.prototype.color_6hl4m2$ = function (color, default_0) {
    var tmp$;
    switch (color.name) {
      case 'DEFAULT':
        tmp$ = default_0;
        break;
      case 'PRIMARY':
        tmp$ = this.primaryColor;
        break;
      case 'ACCENT':
        tmp$ = this.accentColor;
        break;
      case 'WARN':
        tmp$ = this.warnColor;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  function Theme$Statics() {
    Theme$Statics_instance = this;
    this.LIGHT = new Theme(MDGreenPalette_getInstance().p500, MDPurplePalette_getInstance().p500, MDRedPalette_getInstance().p500, MDGrayPalette_getInstance().p300, MDGrayPalette_getInstance().p100, RgbColor.Factory.WHITE, MDGrayPalette_getInstance().p50, RgbColor.Factory.WHITE, 'Roboto, sans-serif');
  }
  Theme$Statics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Theme$Statics_instance = null;
  function Theme$Statics_getInstance() {
    if (Theme$Statics_instance === null) {
      new Theme$Statics();
    }
    return Theme$Statics_instance;
  }
  function Theme$primaryColor$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$accentColor$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$warnColor$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$statusBar$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$appBar$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$toolbar$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$background$lambda(property, old, new_0) {
    return Unit;
  }
  function Theme$cardsNdialogs$lambda(property, old, new_0) {
    return Unit;
  }
  Theme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Theme',
    interfaces: []
  };
  function MDAppBar() {
    MDAppBar$MDAppBar_getInstance();
    AppBar.call(this);
  }
  MDAppBar.prototype.render = function () {
    AppBar.prototype.render.call(this);
    this.addClass_bx842b$(MDAppBar$MDAppBar_getInstance().classSelector);
  };
  function MDAppBar$MDAppBar() {
    MDAppBar$MDAppBar_instance = this;
    this.classSelector_ullw6y$_0 = toClassSelector('fg-md-appbar');
    this.rule_bx0x8n$_0 = MDAppBar$MDAppBar$rule$lambda;
    elements.HTML.registerStyle_mpomjf$(this);
  }
  Object.defineProperty(MDAppBar$MDAppBar.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_ullw6y$_0;
    }
  });
  Object.defineProperty(MDAppBar$MDAppBar.prototype, 'rule', {
    get: function () {
      return this.rule_bx0x8n$_0;
    }
  });
  function MDAppBar$MDAppBar$rule$lambda($receiver) {
    $receiver.backgroundColor = RgbColor.Factory.RED;
    $receiver.height = get_px(56);
    $receiver.display = Display.flex;
    $receiver.flexDirection = FlexDirection.row;
    $receiver.alignItems = AlignItems.center;
    return Unit;
  }
  MDAppBar$MDAppBar.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDAppBar',
    interfaces: [TypedStyledClass]
  };
  var MDAppBar$MDAppBar_instance = null;
  function MDAppBar$MDAppBar_getInstance() {
    if (MDAppBar$MDAppBar_instance === null) {
      new MDAppBar$MDAppBar();
    }
    return MDAppBar$MDAppBar_instance;
  }
  MDAppBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDAppBar',
    interfaces: [AppBar]
  };
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
  function MDButton(action, type, color, margins) {
    MDButton$Companion_getInstance();
    if (type === void 0)
      type = MDButton$Type$FLAT_getInstance();
    if (color === void 0)
      color = MDColor$DEFAULT_getInstance();
    if (margins === void 0)
      margins = false;
    Button.call(this, action);
    this.type_62b4vh$_0 = new Delegates$observable$ObjectLiteral_7(MDButton$type$lambda(this, color), type);
    this.color_xb2sly$_0 = new Delegates$observable$ObjectLiteral_8(MDButton$color$lambda(this), color);
    this.margins_udljaw$_0 = new Delegates$observable$ObjectLiteral_9(MDButton$margins$lambda(this), margins);
    this.ripples_0 = false;
    this.ripple_xt9s7d$_0 = lazy(MDButton$ripple$lambda(this));
    this.flatStyle = new MDButton$FlatStyle();
    this.raisedStyle = new MDButton$RaisedStyle();
    this.floatingStyle = new MDButton$FloatingStyle();
  }
  var MDButton$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(MDButton.prototype, 'type', {
    get: function () {
      return this.type_62b4vh$_0.getValue_lrcp0p$(this, MDButton$type_metadata);
    },
    set: function (type) {
      this.type_62b4vh$_0.setValue_9rddgb$(this, MDButton$type_metadata, type);
    }
  });
  var MDButton$color_metadata = new PropertyMetadata('color');
  Object.defineProperty(MDButton.prototype, 'color', {
    get: function () {
      return this.color_xb2sly$_0.getValue_lrcp0p$(this, MDButton$color_metadata);
    },
    set: function (color) {
      this.color_xb2sly$_0.setValue_9rddgb$(this, MDButton$color_metadata, color);
    }
  });
  var MDButton$margins_metadata = new PropertyMetadata('margins');
  Object.defineProperty(MDButton.prototype, 'margins', {
    get: function () {
      return this.margins_udljaw$_0.getValue_lrcp0p$(this, MDButton$margins_metadata);
    },
    set: function (margins) {
      this.margins_udljaw$_0.setValue_9rddgb$(this, MDButton$margins_metadata, margins);
    }
  });
  Object.defineProperty(MDButton.prototype, 'ripple_0', {
    get: function () {
      return this.ripple_xt9s7d$_0.value;
    }
  });
  MDButton.prototype.render = function () {
    Button.prototype.render.call(this);
    this.addClass_bx842b$(MDButton$Companion_getInstance().classSelector);
    this.renderType_0(this.type);
    this.renderColor_0(this.color);
    this.renderMargins_0(this.margins);
  };
  MDButton.prototype.didMount = function () {
    Button.prototype.didMount.call(this);
    this.ripple_0.init();
  };
  MDButton.prototype.onEnabled = function () {
    this.renderColor_0();
    this.removeClass_bx842b$(AbstractButton.AbstractButton.DISABLED);
  };
  MDButton.prototype.onDisabled = function () {
    this.renderColor_0();
    this.addClass_bx842b$(AbstractButton.AbstractButton.DISABLED);
  };
  MDButton.prototype.onHover = function () {
    this.renderColor_0();
  };
  MDButton.prototype.unHover = function () {
    this.renderColor_0();
  };
  MDButton.prototype.onFocus = function () {
    this.renderColor_0();
  };
  MDButton.prototype.unFocus = function () {
    this.renderColor_0();
  };
  MDButton.prototype.onPressed = function () {
    this.renderColor_0();
  };
  MDButton.prototype.unPressed = function () {
    this.renderColor_0();
  };
  MDButton.prototype.renderType_0 = function (type) {
    var tmp$, tmp$_0;
    tmp$ = MDButton$Type$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      if (c !== type) {
        this.removeClass_bx842b$(c.selector);
      }
    }
    this.addClass_bx842b$(type.selector);
    switch (type.name) {
      case 'FLAT':
        this.iconI.hide();
        this.label.textContent = this.action.label;
        this.label.show();
        break;
      case 'RAISED':
        this.iconI.hide();
        this.label.textContent = this.action.label;
        this.label.show();
        break;
      case 'FLOATING':
        this.label.hide();
        this.label.textContent = null;
        this.iconI.show();
        this.iconI.icon = MDButton$Companion_getInstance().plusIcon_0;
        break;
    }
  };
  MDButton.prototype.renderColor_0 = function (color) {
    if (color === void 0)
      color = this.color;
    switch (this.type.name) {
      case 'FLAT':
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
          this.style.color = Context_getInstance().theme.color_6hl4m2$(color, RgbColor.Factory.BLACK);
        }
         else {
          this.style.backgroundColor = this.flatStyle.disabled.backgroundColor;
          this.style.color = this.flatStyle.disabled.color;
        }

        break;
      case 'RAISED':
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
            this.style.backgroundColor = Context_getInstance().theme.color_6hl4m2$(color, RgbColor.Factory.TRANSPARENT);
          }
          this.style.color = this.raisedStyle.color;
        }
         else {
          this.style.color = this.raisedStyle.disabled.color;
          this.style.backgroundColor = this.raisedStyle.disabled.backgroundColor;
        }

        break;
      case 'FLOATING':
        if (this.action.enabled) {
          this.style.backgroundColor = Context_getInstance().theme.color_6hl4m2$(color, RgbColor.Factory.WHITE);
          this.style.color = RgbColor.Factory.BLACK;
        }

        break;
    }
  };
  MDButton.prototype.renderMargins_0 = function (enabled) {
    if (enabled) {
      this._style.margin = '8px';
    }
     else {
      this._style.margin = '0';
    }
  };
  function MDButton$Type(name, ordinal, selector) {
    Enum.call(this);
    this.selector = selector;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDButton$Type_initFields() {
    MDButton$Type_initFields = function () {
    };
    MDButton$Type$FLAT_instance = new MDButton$Type('FLAT', 0, MDButton$Companion_getInstance().TYPE_FLAT_0);
    MDButton$Type$RAISED_instance = new MDButton$Type('RAISED', 1, MDButton$Companion_getInstance().TYPE_RAISED_0);
    MDButton$Type$FLOATING_instance = new MDButton$Type('FLOATING', 2, MDButton$Companion_getInstance().TYPE_FLOATING_0);
  }
  var MDButton$Type$FLAT_instance;
  function MDButton$Type$FLAT_getInstance() {
    MDButton$Type_initFields();
    return MDButton$Type$FLAT_instance;
  }
  var MDButton$Type$RAISED_instance;
  function MDButton$Type$RAISED_getInstance() {
    MDButton$Type_initFields();
    return MDButton$Type$RAISED_instance;
  }
  var MDButton$Type$FLOATING_instance;
  function MDButton$Type$FLOATING_getInstance() {
    MDButton$Type_initFields();
    return MDButton$Type$FLOATING_instance;
  }
  MDButton$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function MDButton$Type$values() {
    return [MDButton$Type$FLAT_getInstance(), MDButton$Type$RAISED_getInstance(), MDButton$Type$FLOATING_getInstance()];
  }
  MDButton$Type.values = MDButton$Type$values;
  function MDButton$Type$valueOf(name) {
    switch (name) {
      case 'FLAT':
        return MDButton$Type$FLAT_getInstance();
      case 'RAISED':
        return MDButton$Type$RAISED_getInstance();
      case 'FLOATING':
        return MDButton$Type$FLOATING_getInstance();
      default:throwISE('No enum constant fg.md.button.MDButton.Type.' + name);
    }
  }
  MDButton$Type.valueOf_61zpoe$ = MDButton$Type$valueOf;
  function MDButton$FlatStyle() {
    ElementStyle.call(this);
    this.color_vufmdc$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_t03ywi$_0 = RgbColor.Factory.TRANSPARENT;
    this.hovered = new MDButton$FlatStyle$hovered$ObjectLiteral();
    this.pressed = new MDButton$FlatStyle$pressed$ObjectLiteral();
    this.focused = new MDButton$FlatStyle$focused$ObjectLiteral();
    this.disabled = new MDButton$FlatStyle$disabled$ObjectLiteral();
  }
  Object.defineProperty(MDButton$FlatStyle.prototype, 'color', {
    get: function () {
      return this.color_vufmdc$_0;
    },
    set: function (color) {
      this.color_vufmdc$_0 = color;
    }
  });
  Object.defineProperty(MDButton$FlatStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_t03ywi$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_t03ywi$_0 = backgroundColor;
    }
  });
  function MDButton$FlatStyle$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_aptsxa$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MDButton$FlatStyle$hovered$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_aptsxa$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_aptsxa$_0 = backgroundColor;
    }
  });
  MDButton$FlatStyle$hovered$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$FlatStyle$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_ri9daj$_0 = new RgbColor(204, 204, 204);
  }
  Object.defineProperty(MDButton$FlatStyle$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_ri9daj$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_ri9daj$_0 = backgroundColor;
    }
  });
  MDButton$FlatStyle$pressed$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$FlatStyle$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_aul4cq$_0 = new RgbColor(221, 221, 221);
  }
  Object.defineProperty(MDButton$FlatStyle$focused$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_aul4cq$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_aul4cq$_0 = backgroundColor;
    }
  });
  MDButton$FlatStyle$focused$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$FlatStyle$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_drynyl$_0 = RgbColor.Factory.BLACK.withAlfa_14dthe$(0.26);
    this.backgroundColor_1pregx$_0 = RgbColor.Factory.TRANSPARENT;
  }
  Object.defineProperty(MDButton$FlatStyle$disabled$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_drynyl$_0;
    },
    set: function (color) {
      this.color_drynyl$_0 = color;
    }
  });
  Object.defineProperty(MDButton$FlatStyle$disabled$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_1pregx$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_1pregx$_0 = backgroundColor;
    }
  });
  MDButton$FlatStyle$disabled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  MDButton$FlatStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlatStyle',
    interfaces: [ElementStyle]
  };
  function MDButton$RaisedStyle() {
    ElementStyle.call(this);
    this.color_6hgt33$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_7am3ub$_0 = RgbColor.Factory.TRANSPARENT;
    this.hovered = new MDButton$RaisedStyle$hovered$ObjectLiteral();
    this.pressed = new MDButton$RaisedStyle$pressed$ObjectLiteral();
    this.focused = new MDButton$RaisedStyle$focused$ObjectLiteral();
    this.disabled = new MDButton$RaisedStyle$disabled$ObjectLiteral();
  }
  Object.defineProperty(MDButton$RaisedStyle.prototype, 'color', {
    get: function () {
      return this.color_6hgt33$_0;
    },
    set: function (color) {
      this.color_6hgt33$_0 = color;
    }
  });
  Object.defineProperty(MDButton$RaisedStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_7am3ub$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_7am3ub$_0 = backgroundColor;
    }
  });
  function MDButton$RaisedStyle$hovered$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_wi84wf$_0 = new RgbColor(153, 153, 153, 0.2);
  }
  Object.defineProperty(MDButton$RaisedStyle$hovered$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_wi84wf$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_wi84wf$_0 = backgroundColor;
    }
  });
  MDButton$RaisedStyle$hovered$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$RaisedStyle$pressed$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_5pv1be$_0 = new RgbColor(204, 204, 204);
  }
  Object.defineProperty(MDButton$RaisedStyle$pressed$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_5pv1be$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_5pv1be$_0 = backgroundColor;
    }
  });
  MDButton$RaisedStyle$pressed$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$RaisedStyle$focused$ObjectLiteral() {
    ElementStyle.call(this);
    this.backgroundColor_wmzgbv$_0 = new RgbColor(221, 221, 221);
  }
  Object.defineProperty(MDButton$RaisedStyle$focused$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_wmzgbv$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_wmzgbv$_0 = backgroundColor;
    }
  });
  MDButton$RaisedStyle$focused$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  function MDButton$RaisedStyle$disabled$ObjectLiteral() {
    ElementStyle.call(this);
    this.color_l4u3n6$_0 = RgbColor.Factory.BLACK.withAlfa_14dthe$(0.26);
    this.backgroundColor_x50u0w$_0 = new RgbColor(0, 0, 0, 0.12);
  }
  Object.defineProperty(MDButton$RaisedStyle$disabled$ObjectLiteral.prototype, 'color', {
    get: function () {
      return this.color_l4u3n6$_0;
    },
    set: function (color) {
      this.color_l4u3n6$_0 = color;
    }
  });
  Object.defineProperty(MDButton$RaisedStyle$disabled$ObjectLiteral.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_x50u0w$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_x50u0w$_0 = backgroundColor;
    }
  });
  MDButton$RaisedStyle$disabled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ElementStyle]
  };
  MDButton$RaisedStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RaisedStyle',
    interfaces: [ElementStyle]
  };
  function MDButton$FloatingStyle() {
    ElementStyle.call(this);
    this.color_bgm2z1$_0 = RgbColor.Factory.BLACK;
    this.backgroundColor_c9gij$_0 = RgbColor.Factory.WHITE;
  }
  Object.defineProperty(MDButton$FloatingStyle.prototype, 'color', {
    get: function () {
      return this.color_bgm2z1$_0;
    },
    set: function (color) {
      this.color_bgm2z1$_0 = color;
    }
  });
  Object.defineProperty(MDButton$FloatingStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor_c9gij$_0;
    },
    set: function (backgroundColor) {
      this.backgroundColor_c9gij$_0 = backgroundColor;
    }
  });
  MDButton$FloatingStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatingStyle',
    interfaces: [ElementStyle]
  };
  function MDButton$Companion() {
    MDButton$Companion_instance = this;
    this.TYPE_FLAT_0 = toClassSelector('md-button-flat');
    this.TYPE_RAISED_0 = toClassSelector('md-button-raised');
    this.TYPE_FLOATING_0 = toClassSelector('md-button-floating');
    this.plusIcon_0 = icon.FontAwesomeIcons.plus_p56ikg$();
    this.classSelector_2cqq94$_0 = toClassSelector('md-button');
    this.rule_y2t0kp$_0 = MDButton$Companion$rule$lambda(this);
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_2cqq94$_0;
    }
  });
  Object.defineProperty(MDButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_y2t0kp$_0;
    }
  });
  function MDButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._outline = 'none';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda_0($receiver) {
    $receiver._minWidth = '88px';
    $receiver._width = '';
    $receiver._height = '36px';
    $receiver._boxShadow = 'none';
    $receiver._border = 'none';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda$lambda($receiver) {
    $receiver._boxShadow = '0 4px 8px 0 rgba(0,0,0,.4)';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver._boxShadow = 'none';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda_1($receiver) {
    $receiver._minWidth = '88px';
    $receiver._width = '';
    $receiver._height = '36px';
    $receiver._border = 'none';
    $receiver._boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
    active($receiver, MDButton$Companion$rule$lambda$lambda$lambda$lambda);
    and($receiver, AbstractButton.AbstractButton.DISABLED, MDButton$Companion$rule$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver._boxShadow = '0 4px 8px 0 rgba(0,0,0,.4)';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver._boxShadow = 'none';
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda$lambda_2($receiver) {
    $receiver._width = '40px';
    $receiver._height = '40px';
    $receiver._border = 'none';
    $receiver._boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
    $receiver._borderRadius = '50%';
    active($receiver, MDButton$Companion$rule$lambda$lambda$lambda$lambda_1);
    and($receiver, AbstractButton.AbstractButton.DISABLED, MDButton$Companion$rule$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function MDButton$Companion$rule$lambda$lambda(this$MDButton$) {
    return function ($receiver) {
      $receiver._borderRadius = '2px';
      $receiver._marginLeft = '8px';
      $receiver._marginRight = '8px';
      $receiver._fontFamily = Context_getInstance().theme.font;
      $receiver._fontSize = '14px';
      $receiver._fontWeight = '500';
      $receiver._borderRadius = '0';
      focus($receiver, MDButton$Companion$rule$lambda$lambda$lambda);
      and($receiver, this$MDButton$.TYPE_FLAT_0, MDButton$Companion$rule$lambda$lambda$lambda_0);
      and($receiver, this$MDButton$.TYPE_RAISED_0, MDButton$Companion$rule$lambda$lambda$lambda_1);
      and($receiver, this$MDButton$.TYPE_FLOATING_0, MDButton$Companion$rule$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function MDButton$Companion$rule$lambda(this$MDButton$) {
    return function ($receiver) {
      and_0($receiver, Button.Companion, MDButton$Companion$rule$lambda$lambda(this$MDButton$));
      return Unit;
    };
  }
  MDButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var MDButton$Companion_instance = null;
  function MDButton$Companion_getInstance() {
    if (MDButton$Companion_instance === null) {
      new MDButton$Companion();
    }
    return MDButton$Companion_instance;
  }
  function MDButton$type$lambda(this$MDButton, closure$color) {
    return function (property, old, new_0) {
      this$MDButton.renderType_0(new_0);
      this$MDButton.renderColor_0(closure$color);
      return Unit;
    };
  }
  function MDButton$color$lambda(this$MDButton) {
    return function (property, old, new_0) {
      this$MDButton.renderColor_0(new_0);
      return Unit;
    };
  }
  function MDButton$margins$lambda(this$MDButton) {
    return function (property, old, new_0) {
      this$MDButton.renderMargins_0(new_0);
      return Unit;
    };
  }
  function MDButton$ripple$lambda$lambda(this$MDButton) {
    return function () {
      this$MDButton.ripples_0 = true;
      return Unit;
    };
  }
  function MDButton$ripple$lambda$lambda_0(this$MDButton) {
    return function () {
      this$MDButton.ripples_0 = false;
      this$MDButton.renderColor_0();
      return Unit;
    };
  }
  function MDButton$ripple$lambda(this$MDButton) {
    return function () {
      return new Ripple(this$MDButton, void 0, MDButton$ripple$lambda$lambda(this$MDButton), MDButton$ripple$lambda$lambda_0(this$MDButton));
    };
  }
  MDButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDButton',
    interfaces: [Button]
  };
  function MDToggleButton(action) {
    MDToggleButton$Companion_getInstance();
    ToggleButton.call(this, action);
  }
  MDToggleButton.prototype.render = function () {
    ToggleButton.prototype.render.call(this);
    this.addClass_bx842b$(MDToggleButton$Companion_getInstance().classSelector);
  };
  function MDToggleButton$Companion() {
    MDToggleButton$Companion_instance = this;
    this.classSelector_ky4mu4$_0 = toClassSelector('fg-md-md-toggle-button');
    this.rule_jicnj7$_0 = MDToggleButton$Companion$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDToggleButton$Companion.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_ky4mu4$_0;
    }
  });
  Object.defineProperty(MDToggleButton$Companion.prototype, 'rule', {
    get: function () {
      return this.rule_jicnj7$_0;
    }
  });
  function MDToggleButton$Companion$rule$lambda$lambda$lambda($receiver) {
    $receiver._boxShadow = 'none';
    $receiver._border = 'none';
    $receiver._backgroundColor = RgbColor.Factory.TRANSPARENT.toString();
    return Unit;
  }
  function MDToggleButton$Companion$rule$lambda$lambda$lambda_0($receiver) {
    $receiver._boxShadow = 'none';
    $receiver._border = 'none';
    $receiver._backgroundColor = RgbColor.Factory.TRANSPARENT.toString();
    return Unit;
  }
  function MDToggleButton$Companion$rule$lambda$lambda($receiver) {
    $receiver._height = '36px';
    $receiver._boxShadow = 'none';
    $receiver._border = 'none';
    $receiver._backgroundColor = RgbColor.Factory.TRANSPARENT.toString();
    and_1($receiver, '.selected', MDToggleButton$Companion$rule$lambda$lambda$lambda);
    and_1($receiver, '.focused', MDToggleButton$Companion$rule$lambda$lambda$lambda_0);
    return Unit;
  }
  function MDToggleButton$Companion$rule$lambda($receiver) {
    and_0($receiver, ToggleButton.Companion, MDToggleButton$Companion$rule$lambda$lambda);
    return Unit;
  }
  MDToggleButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [StyledClass]
  };
  var MDToggleButton$Companion_instance = null;
  function MDToggleButton$Companion_getInstance() {
    if (MDToggleButton$Companion_instance === null) {
      new MDToggleButton$Companion();
    }
    return MDToggleButton$Companion_instance;
  }
  MDToggleButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDToggleButton',
    interfaces: [ToggleButton]
  };
  function MDCard() {
    MDCard$MDCard_getInstance();
    Div.call(this);
    this.themeChangedHandler_rs1r1q$_0 = MDCard$themeChangedHandler$lambda(this);
  }
  MDCard.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCard$MDCard_getInstance().classSelector);
    this.style.backgroundColor = Context_getInstance().theme.cardsNdialogs;
  };
  MDCard.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    Context_getInstance().theme.onPropertyChanged_bdxxi9$(this.themeChangedHandler_rs1r1q$_0);
  };
  function MDCard$MDCard() {
    MDCard$MDCard_instance = this;
    this.classSelector_mq4ko9$_0 = toClassSelector('md-card');
    this.rule_36wryi$_0 = MDCard$MDCard$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCard$MDCard.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_mq4ko9$_0;
    }
  });
  Object.defineProperty(MDCard$MDCard.prototype, 'rule', {
    get: function () {
      return this.rule_36wryi$_0;
    }
  });
  function MDCard$MDCard$rule$lambda($receiver) {
    $receiver._display = 'block';
    $receiver._position = 'relative';
    $receiver._borderRadius = '2px';
    $receiver._boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
    $receiver._fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
    $receiver._backgroundSize = 'cover';
    return Unit;
  }
  MDCard$MDCard.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCard',
    interfaces: [StyledClass]
  };
  var MDCard$MDCard_instance = null;
  function MDCard$MDCard_getInstance() {
    if (MDCard$MDCard_instance === null) {
      new MDCard$MDCard();
    }
    return MDCard$MDCard_instance;
  }
  function MDCard$themeChangedHandler$lambda(this$MDCard) {
    return function (theme, property, old, new_0) {
      if (equals(property.callableName, getPropertyCallableRef('cardsNdialogs', 1, function ($receiver) {
        return $receiver.cardsNdialogs;
      }, function ($receiver, value) {
        $receiver.cardsNdialogs = value;
      }).callableName))
        this$MDCard.style.backgroundColor = Context_getInstance().theme.background;
      return Unit;
    };
  }
  MDCard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCard',
    interfaces: [Div]
  };
  function MDCardActions() {
    MDCardActions$MDCardActions_getInstance();
    Div.call(this);
  }
  MDCardActions.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardActions$MDCardActions_getInstance().classSelector);
  };
  function MDCardActions$MDCardActions() {
    MDCardActions$MDCardActions_instance = this;
    this.classSelector_ylwh47$_0 = toClassSelector('md-card-actions');
    this.rule_r3hn3u$_0 = MDCardActions$MDCardActions$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardActions$MDCardActions.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_ylwh47$_0;
    }
  });
  Object.defineProperty(MDCardActions$MDCardActions.prototype, 'rule', {
    get: function () {
      return this.rule_r3hn3u$_0;
    }
  });
  function MDCardActions$MDCardActions$rule$lambda($receiver) {
    $receiver._padding = '8px';
    return Unit;
  }
  MDCardActions$MDCardActions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardActions',
    interfaces: [StyledClass]
  };
  var MDCardActions$MDCardActions_instance = null;
  function MDCardActions$MDCardActions_getInstance() {
    if (MDCardActions$MDCardActions_instance === null) {
      new MDCardActions$MDCardActions();
    }
    return MDCardActions$MDCardActions_instance;
  }
  MDCardActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardActions',
    interfaces: [Div]
  };
  function MDCardAvatar(src) {
    MDCardAvatar$MDCardAvatar_getInstance();
    Img.call(this, src);
  }
  MDCardAvatar.prototype.render = function () {
    Img.prototype.render.call(this);
    this.addClass_bx842b$(MDCardAvatar$MDCardAvatar_getInstance().classSelector);
  };
  function MDCardAvatar$MDCardAvatar() {
    MDCardAvatar$MDCardAvatar_instance = this;
    this.classSelector_9fxseh$_0 = toClassSelector('md-card-avatar');
    this.rule_ypj4yy$_0 = MDCardAvatar$MDCardAvatar$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardAvatar$MDCardAvatar.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_9fxseh$_0;
    }
  });
  Object.defineProperty(MDCardAvatar$MDCardAvatar.prototype, 'rule', {
    get: function () {
      return this.rule_ypj4yy$_0;
    }
  });
  function MDCardAvatar$MDCardAvatar$rule$lambda($receiver) {
    $receiver._width = '40px';
    $receiver._height = '40px';
    $receiver._borderRadius = '50%';
    return Unit;
  }
  MDCardAvatar$MDCardAvatar.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardAvatar',
    interfaces: [StyledClass]
  };
  var MDCardAvatar$MDCardAvatar_instance = null;
  function MDCardAvatar$MDCardAvatar_getInstance() {
    if (MDCardAvatar$MDCardAvatar_instance === null) {
      new MDCardAvatar$MDCardAvatar();
    }
    return MDCardAvatar$MDCardAvatar_instance;
  }
  MDCardAvatar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardAvatar',
    interfaces: [Img]
  };
  function MDCardContent() {
    MDCardContent$Statics_getInstance();
    Div.call(this);
  }
  MDCardContent.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardContent$Statics_getInstance().classSelector);
  };
  function MDCardContent$Statics() {
    MDCardContent$Statics_instance = this;
    this.classSelector_42nwt8$_0 = toClassSelector('md-card-content');
    this.rule_ffbv6j$_0 = MDCardContent$Statics$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardContent$Statics.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_42nwt8$_0;
    }
  });
  Object.defineProperty(MDCardContent$Statics.prototype, 'rule', {
    get: function () {
      return this.rule_ffbv6j$_0;
    }
  });
  function MDCardContent$Statics$rule$lambda$lambda$lambda($receiver) {
    $receiver._marginTop = '0';
    return Unit;
  }
  function MDCardContent$Statics$rule$lambda$lambda($receiver) {
    firstChild($receiver, MDCardContent$Statics$rule$lambda$lambda$lambda);
    return Unit;
  }
  function MDCardContent$Statics$rule$lambda($receiver) {
    $receiver._fontSize = '14px';
    $receiver._padding = '16px';
    child($receiver, Selector.Statics.ANY, MDCardContent$Statics$rule$lambda$lambda);
    return Unit;
  }
  MDCardContent$Statics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Statics',
    interfaces: [StyledClass]
  };
  var MDCardContent$Statics_instance = null;
  function MDCardContent$Statics_getInstance() {
    if (MDCardContent$Statics_instance === null) {
      new MDCardContent$Statics();
    }
    return MDCardContent$Statics_instance;
  }
  MDCardContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardContent',
    interfaces: [Div]
  };
  function MDCardHeader() {
    MDCardHeader$MDCardHeader_getInstance();
    Div.call(this);
  }
  MDCardHeader.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardHeader$MDCardHeader_getInstance().classSelector);
  };
  function MDCardHeader$MDCardHeader() {
    MDCardHeader$MDCardHeader_instance = this;
    this.classSelector_cl6bnt$_0 = toClassSelector('md-card-header');
    this.rule_bkz6ae$_0 = MDCardHeader$MDCardHeader$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardHeader$MDCardHeader.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_cl6bnt$_0;
    }
  });
  Object.defineProperty(MDCardHeader$MDCardHeader.prototype, 'rule', {
    get: function () {
      return this.rule_bkz6ae$_0;
    }
  });
  function MDCardHeader$MDCardHeader$rule$lambda$lambda($receiver) {
    $receiver._fontSize = '14px';
    return Unit;
  }
  function MDCardHeader$MDCardHeader$rule$lambda$lambda_0($receiver) {
    $receiver._marginRight = '12px';
    return Unit;
  }
  function MDCardHeader$MDCardHeader$rule$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function MDCardHeader$MDCardHeader$rule$lambda$lambda_1($receiver) {
    not($receiver, toSelector(':first-child'), MDCardHeader$MDCardHeader$rule$lambda$lambda$lambda);
    return Unit;
  }
  function MDCardHeader$MDCardHeader$rule$lambda($receiver) {
    $receiver._display = 'flex';
    $receiver._flexDirection = 'row';
    $receiver._padding = '16px';
    child($receiver, MDCardTitle$MDCardTitle_getInstance().classSelector, MDCardHeader$MDCardHeader$rule$lambda$lambda);
    child($receiver, MDCardAvatar$MDCardAvatar_getInstance().classSelector, MDCardHeader$MDCardHeader$rule$lambda$lambda_0);
    child($receiver, MDCardSubtitle$MDCardSubtitle_getInstance().classSelector, MDCardHeader$MDCardHeader$rule$lambda$lambda_1);
    return Unit;
  }
  MDCardHeader$MDCardHeader.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardHeader',
    interfaces: [StyledClass]
  };
  var MDCardHeader$MDCardHeader_instance = null;
  function MDCardHeader$MDCardHeader_getInstance() {
    if (MDCardHeader$MDCardHeader_instance === null) {
      new MDCardHeader$MDCardHeader();
    }
    return MDCardHeader$MDCardHeader_instance;
  }
  MDCardHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardHeader',
    interfaces: [Div]
  };
  function MDCardHeaderText() {
    MDCardHeaderText$MDCardHeaderText_getInstance();
    Div.call(this);
  }
  MDCardHeaderText.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardHeaderText$MDCardHeaderText_getInstance().classSelector);
  };
  function MDCardHeaderText$MDCardHeaderText() {
    MDCardHeaderText$MDCardHeaderText_instance = this;
    this.classSelector_38a3hl$_0 = toClassSelector('md-card-header-text');
    this.rule_3zz5yu$_0 = MDCardHeaderText$MDCardHeaderText$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardHeaderText$MDCardHeaderText.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_38a3hl$_0;
    }
  });
  Object.defineProperty(MDCardHeaderText$MDCardHeaderText.prototype, 'rule', {
    get: function () {
      return this.rule_3zz5yu$_0;
    }
  });
  function MDCardHeaderText$MDCardHeaderText$rule$lambda$lambda($receiver) {
    $receiver._padding = '0';
    $receiver._fontSize = '14px';
    $receiver._fontWeight = '500';
    return Unit;
  }
  function MDCardHeaderText$MDCardHeaderText$rule$lambda$lambda_0($receiver) {
    $receiver._flex = '1';
    return Unit;
  }
  function MDCardHeaderText$MDCardHeaderText$rule$lambda($receiver) {
    $receiver._display = 'flex';
    $receiver._flexDirection = 'column';
    child($receiver, MDCardTitle$MDCardTitle_getInstance().classSelector, MDCardHeaderText$MDCardHeaderText$rule$lambda$lambda);
    child($receiver, Selector.Statics.ANY, MDCardHeaderText$MDCardHeaderText$rule$lambda$lambda_0);
    return Unit;
  }
  MDCardHeaderText$MDCardHeaderText.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardHeaderText',
    interfaces: [StyledClass]
  };
  var MDCardHeaderText$MDCardHeaderText_instance = null;
  function MDCardHeaderText$MDCardHeaderText_getInstance() {
    if (MDCardHeaderText$MDCardHeaderText_instance === null) {
      new MDCardHeaderText$MDCardHeaderText();
    }
    return MDCardHeaderText$MDCardHeaderText_instance;
  }
  MDCardHeaderText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardHeaderText',
    interfaces: [Div]
  };
  function MDCardImage(src) {
    MDCardImage$MDCardImage_getInstance();
    Img.call(this, src);
  }
  MDCardImage.prototype.render = function () {
    Img.prototype.render.call(this);
    this.addClass_bx842b$(MDCardImage$MDCardImage_getInstance().classSelector);
  };
  function MDCardImage$MDCardImage() {
    MDCardImage$MDCardImage_instance = this;
    this.classSelector_cludcl$_0 = toClassSelector('md-card-image');
    this.rule_fppxm$_0 = MDCardImage$MDCardImage$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardImage$MDCardImage.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_cludcl$_0;
    }
  });
  Object.defineProperty(MDCardImage$MDCardImage.prototype, 'rule', {
    get: function () {
      return this.rule_fppxm$_0;
    }
  });
  function MDCardImage$MDCardImage$rule$lambda($receiver) {
    $receiver._height = '100%';
    $receiver._width = '100%';
    return Unit;
  }
  MDCardImage$MDCardImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardImage',
    interfaces: [StyledClass]
  };
  var MDCardImage$MDCardImage_instance = null;
  function MDCardImage$MDCardImage_getInstance() {
    if (MDCardImage$MDCardImage_instance === null) {
      new MDCardImage$MDCardImage();
    }
    return MDCardImage$MDCardImage_instance;
  }
  MDCardImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardImage',
    interfaces: [Img]
  };
  function MDCardSubtitle() {
    MDCardSubtitle$MDCardSubtitle_getInstance();
    Div.call(this);
  }
  MDCardSubtitle.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardSubtitle$MDCardSubtitle_getInstance().classSelector);
  };
  function MDCardSubtitle$MDCardSubtitle() {
    MDCardSubtitle$MDCardSubtitle_instance = this;
    this.classSelector_vjue6v$_0 = toClassSelector('md-card-subtitle');
    this.rule_a23gqy$_0 = MDCardSubtitle$MDCardSubtitle$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardSubtitle$MDCardSubtitle.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_vjue6v$_0;
    }
  });
  Object.defineProperty(MDCardSubtitle$MDCardSubtitle.prototype, 'rule', {
    get: function () {
      return this.rule_a23gqy$_0;
    }
  });
  function MDCardSubtitle$MDCardSubtitle$rule$lambda($receiver) {
    $receiver._fontSize = '14px';
    $receiver._fontWeight = '400';
    $receiver._color = MDGrayPalette_getInstance().p600.toHtml();
    return Unit;
  }
  MDCardSubtitle$MDCardSubtitle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardSubtitle',
    interfaces: [StyledClass]
  };
  var MDCardSubtitle$MDCardSubtitle_instance = null;
  function MDCardSubtitle$MDCardSubtitle_getInstance() {
    if (MDCardSubtitle$MDCardSubtitle_instance === null) {
      new MDCardSubtitle$MDCardSubtitle();
    }
    return MDCardSubtitle$MDCardSubtitle_instance;
  }
  MDCardSubtitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardSubtitle',
    interfaces: [Div]
  };
  function MDCardTitle() {
    MDCardTitle$MDCardTitle_getInstance();
    Div.call(this);
  }
  MDCardTitle.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardTitle$MDCardTitle_getInstance().classSelector);
  };
  function MDCardTitle$MDCardTitle() {
    MDCardTitle$MDCardTitle_instance = this;
    this.classSelector_7ptcmp$_0 = toClassSelector('md-card-title');
    this.rule_auxu28$_0 = MDCardTitle$MDCardTitle$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardTitle$MDCardTitle.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_7ptcmp$_0;
    }
  });
  Object.defineProperty(MDCardTitle$MDCardTitle.prototype, 'rule', {
    get: function () {
      return this.rule_auxu28$_0;
    }
  });
  function MDCardTitle$MDCardTitle$rule$lambda($receiver) {
    $receiver._fontSize = '24px';
    $receiver._fontWeight = '400';
    $receiver._paddingTop = '24px';
    $receiver._paddingBottom = '16px';
    $receiver._paddingLeft = '16px';
    $receiver._paddingRight = '16px';
    return Unit;
  }
  MDCardTitle$MDCardTitle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardTitle',
    interfaces: [StyledClass]
  };
  var MDCardTitle$MDCardTitle_instance = null;
  function MDCardTitle$MDCardTitle_getInstance() {
    if (MDCardTitle$MDCardTitle_instance === null) {
      new MDCardTitle$MDCardTitle();
    }
    return MDCardTitle$MDCardTitle_instance;
  }
  MDCardTitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardTitle',
    interfaces: [Div]
  };
  function MDCardTitleText() {
    MDCardTitleText$MDCardHeaderText_getInstance();
    Div.call(this);
  }
  MDCardTitleText.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCardTitleText$MDCardHeaderText_getInstance().classSelector);
  };
  function MDCardTitleText$MDCardHeaderText() {
    MDCardTitleText$MDCardHeaderText_instance = this;
    this.classSelector_jj3h3g$_0 = toClassSelector('md-card-title-text');
    this.rule_9552b9$_0 = MDCardTitleText$MDCardHeaderText$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCardTitleText$MDCardHeaderText.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_jj3h3g$_0;
    }
  });
  Object.defineProperty(MDCardTitleText$MDCardHeaderText.prototype, 'rule', {
    get: function () {
      return this.rule_9552b9$_0;
    }
  });
  function MDCardTitleText$MDCardHeaderText$rule$lambda$lambda$lambda($receiver) {
    $receiver._paddingTop = '12px';
    return Unit;
  }
  function MDCardTitleText$MDCardHeaderText$rule$lambda$lambda($receiver) {
    $receiver._padding = '0';
    not($receiver, toSelector(':first-child'), MDCardTitleText$MDCardHeaderText$rule$lambda$lambda$lambda);
    return Unit;
  }
  function MDCardTitleText$MDCardHeaderText$rule$lambda$lambda$lambda_0($receiver) {
    $receiver._paddingTop = '12px';
    return Unit;
  }
  function MDCardTitleText$MDCardHeaderText$rule$lambda$lambda_0($receiver) {
    not($receiver, toSelector(':first-child'), MDCardTitleText$MDCardHeaderText$rule$lambda$lambda$lambda_0);
    return Unit;
  }
  function MDCardTitleText$MDCardHeaderText$rule$lambda($receiver) {
    $receiver._paddingTop = '24px';
    $receiver._paddingLeft = '16px';
    $receiver._paddingRight = '16px';
    $receiver._paddingBottom = '16px';
    child($receiver, MDCardTitle$MDCardTitle_getInstance().classSelector, MDCardTitleText$MDCardHeaderText$rule$lambda$lambda);
    child($receiver, MDCardSubtitle$MDCardSubtitle_getInstance().classSelector, MDCardTitleText$MDCardHeaderText$rule$lambda$lambda_0);
    return Unit;
  }
  MDCardTitleText$MDCardHeaderText.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCardHeaderText',
    interfaces: [StyledClass]
  };
  var MDCardTitleText$MDCardHeaderText_instance = null;
  function MDCardTitleText$MDCardHeaderText_getInstance() {
    if (MDCardTitleText$MDCardHeaderText_instance === null) {
      new MDCardTitleText$MDCardHeaderText();
    }
    return MDCardTitleText$MDCardHeaderText_instance;
  }
  MDCardTitleText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCardTitleText',
    interfaces: [Div]
  };
  function MDColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDColor_initFields() {
    MDColor_initFields = function () {
    };
    MDColor$DEFAULT_instance = new MDColor('DEFAULT', 0);
    MDColor$PRIMARY_instance = new MDColor('PRIMARY', 1);
    MDColor$ACCENT_instance = new MDColor('ACCENT', 2);
    MDColor$WARN_instance = new MDColor('WARN', 3);
  }
  var MDColor$DEFAULT_instance;
  function MDColor$DEFAULT_getInstance() {
    MDColor_initFields();
    return MDColor$DEFAULT_instance;
  }
  var MDColor$PRIMARY_instance;
  function MDColor$PRIMARY_getInstance() {
    MDColor_initFields();
    return MDColor$PRIMARY_instance;
  }
  var MDColor$ACCENT_instance;
  function MDColor$ACCENT_getInstance() {
    MDColor_initFields();
    return MDColor$ACCENT_instance;
  }
  var MDColor$WARN_instance;
  function MDColor$WARN_getInstance() {
    MDColor_initFields();
    return MDColor$WARN_instance;
  }
  MDColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDColor',
    interfaces: [Enum]
  };
  function MDColor$values() {
    return [MDColor$DEFAULT_getInstance(), MDColor$PRIMARY_getInstance(), MDColor$ACCENT_getInstance(), MDColor$WARN_getInstance()];
  }
  MDColor.values = MDColor$values;
  function MDColor$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return MDColor$DEFAULT_getInstance();
      case 'PRIMARY':
        return MDColor$PRIMARY_getInstance();
      case 'ACCENT':
        return MDColor$ACCENT_getInstance();
      case 'WARN':
        return MDColor$WARN_getInstance();
      default:throwISE('No enum constant fg.md.colour.MDColor.' + name);
    }
  }
  MDColor.valueOf_61zpoe$ = MDColor$valueOf;
  function MDGrayPalette() {
    MDGrayPalette_instance = this;
    this.p50_l4fozw$_0 = RgbColor.Factory.from_61zpoe$('#FAFAFA');
    this.p100_fjkl9o$_0 = RgbColor.Factory.from_61zpoe$('#F5F5F5');
    this.p200_fjjya5$_0 = RgbColor.Factory.from_61zpoe$('#EEEEEE');
    this.p300_fjjbam$_0 = RgbColor.Factory.from_61zpoe$('#E0E0E0');
    this.p400_fjiob3$_0 = RgbColor.Factory.from_61zpoe$('#BDBDBD');
    this.p500_fji1bk$_0 = RgbColor.Factory.from_61zpoe$('#9E9E9E');
    this.p600_fjhec1$_0 = RgbColor.Factory.from_61zpoe$('#757575');
    this.p700_fjgrci$_0 = RgbColor.Factory.from_61zpoe$('#616161');
    this.p800_fjg4cz$_0 = RgbColor.Factory.from_61zpoe$('#424242');
    this.p900_fjfhdg$_0 = RgbColor.Factory.from_61zpoe$('#212121');
  }
  Object.defineProperty(MDGrayPalette.prototype, 'p50', {
    get: function () {
      return this.p50_l4fozw$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p100', {
    get: function () {
      return this.p100_fjkl9o$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p200', {
    get: function () {
      return this.p200_fjjya5$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p300', {
    get: function () {
      return this.p300_fjjbam$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p400', {
    get: function () {
      return this.p400_fjiob3$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p500', {
    get: function () {
      return this.p500_fji1bk$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p600', {
    get: function () {
      return this.p600_fjhec1$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p700', {
    get: function () {
      return this.p700_fjgrci$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p800', {
    get: function () {
      return this.p800_fjg4cz$_0;
    }
  });
  Object.defineProperty(MDGrayPalette.prototype, 'p900', {
    get: function () {
      return this.p900_fjfhdg$_0;
    }
  });
  MDGrayPalette.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDGrayPalette',
    interfaces: [MDPrimaryPalette]
  };
  var MDGrayPalette_instance = null;
  function MDGrayPalette_getInstance() {
    if (MDGrayPalette_instance === null) {
      new MDGrayPalette();
    }
    return MDGrayPalette_instance;
  }
  function MDGreenPalette() {
    MDGreenPalette_instance = this;
    this.p50_1u96hi$_0 = RgbColor.Factory.from_61zpoe$('#E8F5E9');
    this.p100_dza11q$_0 = RgbColor.Factory.from_61zpoe$('#C8E6C9');
    this.p200_dz9e27$_0 = RgbColor.Factory.from_61zpoe$('#A5D6A7');
    this.p300_dz8r2o$_0 = RgbColor.Factory.from_61zpoe$('#81C784');
    this.p400_dz8435$_0 = RgbColor.Factory.from_61zpoe$('#66BB6A');
    this.p500_dz7h3m$_0 = RgbColor.Factory.from_61zpoe$('#4CAF50');
    this.p600_dz6u43$_0 = RgbColor.Factory.from_61zpoe$('#43A047');
    this.p700_dz674k$_0 = RgbColor.Factory.from_61zpoe$('#388E3C');
    this.p800_dz5k51$_0 = RgbColor.Factory.from_61zpoe$('#2E7D32');
    this.p900_dz4x5i$_0 = RgbColor.Factory.from_61zpoe$('#1B5E20');
    this.a100_e7ixy5$_0 = RgbColor.Factory.from_61zpoe$('#B9F6CA');
    this.a200_e7iaym$_0 = RgbColor.Factory.from_61zpoe$('#69F0AE');
    this.a400_e7h0zk$_0 = RgbColor.Factory.from_61zpoe$('#00E676');
    this.a700_e7f40z$_0 = RgbColor.Factory.from_61zpoe$('#00C853');
  }
  Object.defineProperty(MDGreenPalette.prototype, 'p50', {
    get: function () {
      return this.p50_1u96hi$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p100', {
    get: function () {
      return this.p100_dza11q$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p200', {
    get: function () {
      return this.p200_dz9e27$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p300', {
    get: function () {
      return this.p300_dz8r2o$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p400', {
    get: function () {
      return this.p400_dz8435$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p500', {
    get: function () {
      return this.p500_dz7h3m$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p600', {
    get: function () {
      return this.p600_dz6u43$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p700', {
    get: function () {
      return this.p700_dz674k$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p800', {
    get: function () {
      return this.p800_dz5k51$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'p900', {
    get: function () {
      return this.p900_dz4x5i$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'a100', {
    get: function () {
      return this.a100_e7ixy5$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'a200', {
    get: function () {
      return this.a200_e7iaym$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'a400', {
    get: function () {
      return this.a400_e7h0zk$_0;
    }
  });
  Object.defineProperty(MDGreenPalette.prototype, 'a700', {
    get: function () {
      return this.a700_e7f40z$_0;
    }
  });
  MDGreenPalette.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDGreenPalette',
    interfaces: [MDAccentPalette, MDPrimaryPalette]
  };
  var MDGreenPalette_instance = null;
  function MDGreenPalette_getInstance() {
    if (MDGreenPalette_instance === null) {
      new MDGreenPalette();
    }
    return MDGreenPalette_instance;
  }
  function MDPrimaryPalette() {
  }
  MDPrimaryPalette.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDPrimaryPalette',
    interfaces: []
  };
  function MDAccentPalette() {
  }
  MDAccentPalette.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDAccentPalette',
    interfaces: []
  };
  function MDPurplePalette() {
    MDPurplePalette_instance = this;
    this.p50_m4xhot$_0 = RgbColor.Factory.from_61zpoe$('#F3E5F5');
    this.p100_o2cvj9$_0 = RgbColor.Factory.from_61zpoe$('#E1BEE7');
    this.p200_o2c8jq$_0 = RgbColor.Factory.from_61zpoe$('#CE93D8');
    this.p300_o2blk7$_0 = RgbColor.Factory.from_61zpoe$('#BA68C8');
    this.p400_o2ayko$_0 = RgbColor.Factory.from_61zpoe$('#AB47BC');
    this.p500_o2abl5$_0 = RgbColor.Factory.from_61zpoe$('#9C27B0');
    this.p600_o29olm$_0 = RgbColor.Factory.from_61zpoe$('#8E24AA');
    this.p700_o291m3$_0 = RgbColor.Factory.from_61zpoe$('#7B1FA2');
    this.p800_o28emk$_0 = RgbColor.Factory.from_61zpoe$('#6A1B9A');
    this.p900_o27rn1$_0 = RgbColor.Factory.from_61zpoe$('#4A148C');
    this.a100_oalsfo$_0 = RgbColor.Factory.from_61zpoe$('#EA80FC');
    this.a200_oal5g5$_0 = RgbColor.Factory.from_61zpoe$('#E040FB');
    this.a400_oajvh3$_0 = RgbColor.Factory.from_61zpoe$('#D500F9');
    this.a700_oahyii$_0 = RgbColor.Factory.from_61zpoe$('#AA00FF');
  }
  Object.defineProperty(MDPurplePalette.prototype, 'p50', {
    get: function () {
      return this.p50_m4xhot$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p100', {
    get: function () {
      return this.p100_o2cvj9$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p200', {
    get: function () {
      return this.p200_o2c8jq$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p300', {
    get: function () {
      return this.p300_o2blk7$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p400', {
    get: function () {
      return this.p400_o2ayko$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p500', {
    get: function () {
      return this.p500_o2abl5$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p600', {
    get: function () {
      return this.p600_o29olm$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p700', {
    get: function () {
      return this.p700_o291m3$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p800', {
    get: function () {
      return this.p800_o28emk$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'p900', {
    get: function () {
      return this.p900_o27rn1$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'a100', {
    get: function () {
      return this.a100_oalsfo$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'a200', {
    get: function () {
      return this.a200_oal5g5$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'a400', {
    get: function () {
      return this.a400_oajvh3$_0;
    }
  });
  Object.defineProperty(MDPurplePalette.prototype, 'a700', {
    get: function () {
      return this.a700_oahyii$_0;
    }
  });
  MDPurplePalette.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDPurplePalette',
    interfaces: [MDAccentPalette, MDPrimaryPalette]
  };
  var MDPurplePalette_instance = null;
  function MDPurplePalette_getInstance() {
    if (MDPurplePalette_instance === null) {
      new MDPurplePalette();
    }
    return MDPurplePalette_instance;
  }
  function MDRedPalette() {
    MDRedPalette_instance = this;
    this.p50_l4pp8$_0 = RgbColor.Factory.from_61zpoe$('#FFEBEE');
    this.p100_i74ov0$_0 = RgbColor.Factory.from_61zpoe$('#FFCDD2');
    this.p200_i741vh$_0 = RgbColor.Factory.from_61zpoe$('#EF9A9A');
    this.p300_i73evy$_0 = RgbColor.Factory.from_61zpoe$('#E57373');
    this.p400_i72rwf$_0 = RgbColor.Factory.from_61zpoe$('#EF5350');
    this.p500_i724ww$_0 = RgbColor.Factory.from_61zpoe$('#F44336');
    this.p600_i71hxd$_0 = RgbColor.Factory.from_61zpoe$('#E53935');
    this.p700_i70uxu$_0 = RgbColor.Factory.from_61zpoe$('#D32F2F');
    this.p800_i707yb$_0 = RgbColor.Factory.from_61zpoe$('#C62828');
    this.p900_i6zkys$_0 = RgbColor.Factory.from_61zpoe$('#B71C1C');
    this.a100_ifdlrf$_0 = RgbColor.Factory.from_61zpoe$('#FF8A80');
    this.a200_ifcyrw$_0 = RgbColor.Factory.from_61zpoe$('#FF5252');
    this.a400_ifbosu$_0 = RgbColor.Factory.from_61zpoe$('#FF1744');
    this.a700_if9ru9$_0 = RgbColor.Factory.from_61zpoe$('#D50000');
  }
  Object.defineProperty(MDRedPalette.prototype, 'p50', {
    get: function () {
      return this.p50_l4pp8$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p100', {
    get: function () {
      return this.p100_i74ov0$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p200', {
    get: function () {
      return this.p200_i741vh$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p300', {
    get: function () {
      return this.p300_i73evy$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p400', {
    get: function () {
      return this.p400_i72rwf$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p500', {
    get: function () {
      return this.p500_i724ww$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p600', {
    get: function () {
      return this.p600_i71hxd$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p700', {
    get: function () {
      return this.p700_i70uxu$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p800', {
    get: function () {
      return this.p800_i707yb$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'p900', {
    get: function () {
      return this.p900_i6zkys$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'a100', {
    get: function () {
      return this.a100_ifdlrf$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'a200', {
    get: function () {
      return this.a200_ifcyrw$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'a400', {
    get: function () {
      return this.a400_ifbosu$_0;
    }
  });
  Object.defineProperty(MDRedPalette.prototype, 'a700', {
    get: function () {
      return this.a700_if9ru9$_0;
    }
  });
  MDRedPalette.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDRedPalette',
    interfaces: [MDAccentPalette, MDPrimaryPalette]
  };
  var MDRedPalette_instance = null;
  function MDRedPalette_getInstance() {
    if (MDRedPalette_instance === null) {
      new MDRedPalette();
    }
    return MDRedPalette_instance;
  }
  function MDDrawer(side) {
    MDDrawer$MDDrawer_getInstance();
    Drawer.call(this, side);
  }
  MDDrawer.prototype.render = function () {
    Drawer.prototype.render.call(this);
    this.addClass_bx842b$(MDDrawer$MDDrawer_getInstance().classSelector);
  };
  function MDDrawer$MDDrawer() {
    MDDrawer$MDDrawer_instance = this;
    this.classSelector_tdsmuu$_0 = toClassSelector('md-drawer');
    this.rule_6sjlbp$_0 = MDDrawer$MDDrawer$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDDrawer$MDDrawer.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_tdsmuu$_0;
    }
  });
  Object.defineProperty(MDDrawer$MDDrawer.prototype, 'rule', {
    get: function () {
      return this.rule_6sjlbp$_0;
    }
  });
  function MDDrawer$MDDrawer$rule$lambda($receiver) {
    $receiver._backgroundColor = 'white';
    return Unit;
  }
  MDDrawer$MDDrawer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDDrawer',
    interfaces: [StyledClass]
  };
  var MDDrawer$MDDrawer_instance = null;
  function MDDrawer$MDDrawer_getInstance() {
    if (MDDrawer$MDDrawer_instance === null) {
      new MDDrawer$MDDrawer();
    }
    return MDDrawer$MDDrawer_instance;
  }
  MDDrawer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDDrawer',
    interfaces: [Drawer]
  };
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
  function MDIcon() {
    MDIcon$MDIcon_getInstance();
    I.call(this);
    this.size_rggzty$_0 = new Delegates$observable$ObjectLiteral_10(MDIcon$size$lambda(this), null);
  }
  var MDIcon$size_metadata = new PropertyMetadata('size');
  Object.defineProperty(MDIcon.prototype, 'size', {
    get: function () {
      return this.size_rggzty$_0.getValue_lrcp0p$(this, MDIcon$size_metadata);
    },
    set: function (size) {
      this.size_rggzty$_0.setValue_9rddgb$(this, MDIcon$size_metadata, size);
    }
  });
  MDIcon.prototype.render = function () {
    I.prototype.render.call(this);
    this.addClass_61zpoe$('material-icons');
    this.addClass_bx842b$(MDIcon$MDIcon_getInstance().classSelector);
  };
  function MDIcon$Size(name, ordinal, cssClassName) {
    Enum.call(this);
    this.cssClassName = cssClassName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDIcon$Size_initFields() {
    MDIcon$Size_initFields = function () {
    };
    MDIcon$Size$s18px_instance = new MDIcon$Size('s18px', 0, toClassSelector('md-18'));
    MDIcon$Size$s24px_instance = new MDIcon$Size('s24px', 1, toClassSelector('md-24'));
    MDIcon$Size$s36px_instance = new MDIcon$Size('s36px', 2, toClassSelector('md-36'));
    MDIcon$Size$s48px_instance = new MDIcon$Size('s48px', 3, toClassSelector('md-48'));
  }
  var MDIcon$Size$s18px_instance;
  function MDIcon$Size$s18px_getInstance() {
    MDIcon$Size_initFields();
    return MDIcon$Size$s18px_instance;
  }
  var MDIcon$Size$s24px_instance;
  function MDIcon$Size$s24px_getInstance() {
    MDIcon$Size_initFields();
    return MDIcon$Size$s24px_instance;
  }
  var MDIcon$Size$s36px_instance;
  function MDIcon$Size$s36px_getInstance() {
    MDIcon$Size_initFields();
    return MDIcon$Size$s36px_instance;
  }
  var MDIcon$Size$s48px_instance;
  function MDIcon$Size$s48px_getInstance() {
    MDIcon$Size_initFields();
    return MDIcon$Size$s48px_instance;
  }
  MDIcon$Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: [Enum]
  };
  function MDIcon$Size$values() {
    return [MDIcon$Size$s18px_getInstance(), MDIcon$Size$s24px_getInstance(), MDIcon$Size$s36px_getInstance(), MDIcon$Size$s48px_getInstance()];
  }
  MDIcon$Size.values = MDIcon$Size$values;
  function MDIcon$Size$valueOf(name) {
    switch (name) {
      case 's18px':
        return MDIcon$Size$s18px_getInstance();
      case 's24px':
        return MDIcon$Size$s24px_getInstance();
      case 's36px':
        return MDIcon$Size$s36px_getInstance();
      case 's48px':
        return MDIcon$Size$s48px_getInstance();
      default:throwISE('No enum constant fg.md.icon.MDIcon.Size.' + name);
    }
  }
  MDIcon$Size.valueOf_61zpoe$ = MDIcon$Size$valueOf;
  function MDIcon$MDIcon() {
    MDIcon$MDIcon_instance = this;
    this.classSelector_k1fgwi$_0 = toClassSelector('md-icon');
    this.rule_s99771$_0 = MDIcon$MDIcon$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDIcon$MDIcon.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_k1fgwi$_0;
    }
  });
  Object.defineProperty(MDIcon$MDIcon.prototype, 'rule', {
    get: function () {
      return this.rule_s99771$_0;
    }
  });
  function MDIcon$MDIcon$rule$lambda$lambda($receiver) {
    $receiver._fontSize = '18px';
    return Unit;
  }
  function MDIcon$MDIcon$rule$lambda$lambda_0($receiver) {
    $receiver._fontSize = '24px';
    return Unit;
  }
  function MDIcon$MDIcon$rule$lambda$lambda_1($receiver) {
    $receiver._fontSize = '36px';
    return Unit;
  }
  function MDIcon$MDIcon$rule$lambda$lambda_2($receiver) {
    $receiver._fontSize = '48px';
    return Unit;
  }
  function MDIcon$MDIcon$rule$lambda($receiver) {
    and($receiver, MDIcon$Size$s18px_getInstance().cssClassName, MDIcon$MDIcon$rule$lambda$lambda);
    and($receiver, MDIcon$Size$s24px_getInstance().cssClassName, MDIcon$MDIcon$rule$lambda$lambda_0);
    and($receiver, MDIcon$Size$s36px_getInstance().cssClassName, MDIcon$MDIcon$rule$lambda$lambda_1);
    and($receiver, MDIcon$Size$s48px_getInstance().cssClassName, MDIcon$MDIcon$rule$lambda$lambda_2);
    return Unit;
  }
  MDIcon$MDIcon.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDIcon',
    interfaces: [StyledClass]
  };
  var MDIcon$MDIcon_instance = null;
  function MDIcon$MDIcon_getInstance() {
    if (MDIcon$MDIcon_instance === null) {
      new MDIcon$MDIcon();
    }
    return MDIcon$MDIcon_instance;
  }
  function MDIcon$size$lambda(this$MDIcon) {
    return function (property, old, new_0) {
      if (old != null) {
        this$MDIcon.removeClass_bx842b$(old.cssClassName);
      }
      if (new_0 != null) {
        this$MDIcon.addClass_bx842b$(new_0.cssClassName);
      }
      return Unit;
    };
  }
  MDIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDIcon',
    interfaces: [I]
  };
  function MDIconProvider(name) {
    MDIconProvider$Statics_getInstance();
    this.name = name;
  }
  MDIconProvider.prototype.apply_54c9de$ = function (element) {
    element.addClass_61zpoe$('material-icons');
    element.textContent = this.name;
  };
  function MDIconProvider$Statics() {
    MDIconProvider$Statics_instance = this;
    this.face = new MDIconProvider('face');
    this.expand_more = new MDIconProvider('expand_more');
    this.expand_less = new MDIconProvider('expand_less');
    this.reorder = new MDIconProvider('reorder');
    this.reportProblem = new MDIconProvider('reportProblem');
    this.settings = new MDIconProvider('settings');
    this.settingsApplications = new MDIconProvider('settings applications');
    this.search = new MDIconProvider('search');
  }
  MDIconProvider$Statics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var MDIconProvider$Statics_instance = null;
  function MDIconProvider$Statics_getInstance() {
    if (MDIconProvider$Statics_instance === null) {
      new MDIconProvider$Statics();
    }
    return MDIconProvider$Statics_instance;
  }
  MDIconProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDIconProvider',
    interfaces: [IconProvider]
  };
  function MDMenu(label, shortcut) {
    MDMenu$MDMenu_getInstance();
    if (label === void 0)
      label = null;
    if (shortcut === void 0)
      shortcut = null;
    Menu.call(this, label, shortcut);
  }
  MDMenu.prototype.render = function () {
    Menu.prototype.render.call(this);
    this.addClass_bx842b$(MDMenu$MDMenu_getInstance().classSelector);
  };
  function MDMenu$MDMenu() {
    MDMenu$MDMenu_instance = this;
    this.classSelector_rwpzd4$_0 = toClassSelector('fg-md-menu');
    this.rule_e24e4n$_0 = MDMenu$MDMenu$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDMenu$MDMenu.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_rwpzd4$_0;
    }
  });
  Object.defineProperty(MDMenu$MDMenu.prototype, 'rule', {
    get: function () {
      return this.rule_e24e4n$_0;
    }
  });
  function MDMenu$MDMenu$rule$lambda($receiver) {
    $receiver._paddingTop = '16px';
    $receiver._paddingBottom = '16px';
    $receiver._backgroundColor = 'white';
    $receiver._boxShadow = '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)';
    return Unit;
  }
  MDMenu$MDMenu.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDMenu',
    interfaces: [StyledClass]
  };
  var MDMenu$MDMenu_instance = null;
  function MDMenu$MDMenu_getInstance() {
    if (MDMenu$MDMenu_instance === null) {
      new MDMenu$MDMenu();
    }
    return MDMenu$MDMenu_instance;
  }
  MDMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDMenu',
    interfaces: [Menu]
  };
  function MDMenuItem(action) {
    MDMenuItem$MDMenuItem_getInstance();
    MenuItem.call(this, action);
    this.ripple_jocyiy$_0 = lazy(MDMenuItem$ripple$lambda(this));
  }
  Object.defineProperty(MDMenuItem.prototype, 'ripple_0', {
    get: function () {
      return this.ripple_jocyiy$_0.value;
    }
  });
  MDMenuItem.prototype.render = function () {
    MenuItem.prototype.render.call(this);
    this.addClass_bx842b$(MDMenuItem$MDMenuItem_getInstance().classSelector);
    this.menuItemStyle.hovered.backgroundColor = new RgbColor(153, 153, 153, 0.2);
  };
  MDMenuItem.prototype.didMount = function () {
    MenuItem.prototype.didMount.call(this);
    this.ripple_0.init();
  };
  function MDMenuItem$MDMenuItem() {
    MDMenuItem$MDMenuItem_instance = this;
    this.classSelector_v39dm0$_0 = toClassSelector('fg-md-menu-item');
    this.rule_y0tbq1$_0 = MDMenuItem$MDMenuItem$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDMenuItem$MDMenuItem.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_v39dm0$_0;
    }
  });
  Object.defineProperty(MDMenuItem$MDMenuItem.prototype, 'rule', {
    get: function () {
      return this.rule_y0tbq1$_0;
    }
  });
  function MDMenuItem$MDMenuItem$rule$lambda($receiver) {
    $receiver._fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
    $receiver._height = '32px';
    $receiver._paddingLeft = '24px';
    $receiver._paddingRight = '24px';
    return Unit;
  }
  MDMenuItem$MDMenuItem.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDMenuItem',
    interfaces: [StyledClass]
  };
  var MDMenuItem$MDMenuItem_instance = null;
  function MDMenuItem$MDMenuItem_getInstance() {
    if (MDMenuItem$MDMenuItem_instance === null) {
      new MDMenuItem$MDMenuItem();
    }
    return MDMenuItem$MDMenuItem_instance;
  }
  function MDMenuItem$ripple$lambda$lambda() {
    return Unit;
  }
  function MDMenuItem$ripple$lambda$lambda_0() {
    return Unit;
  }
  function MDMenuItem$ripple$lambda(this$MDMenuItem) {
    return function () {
      return new Ripple(this$MDMenuItem, RgbColor.Factory.BLUE, MDMenuItem$ripple$lambda$lambda, MDMenuItem$ripple$lambda$lambda_0);
    };
  }
  MDMenuItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDMenuItem',
    interfaces: [MenuItem]
  };
  var pkg;
  function MDCollapsedPanel(expandAction) {
    MDCollapsedPanel$MDCollapsedPanel_getInstance();
    Div.call(this);
    this.expandAction = expandAction;
    this.expandButton_iv2288$_0 = lazy(MDCollapsedPanel$expandButton$lambda(this));
    this.outerToolbar_8be2vx$_8glako$_0 = lazy(MDCollapsedPanel$outerToolbar$lambda);
    this.toolbar_qe22ob$_0 = lazy(MDCollapsedPanel$toolbar$lambda);
    this.themeChangedHandler_0 = MDCollapsedPanel$themeChangedHandler$lambda(this);
  }
  Object.defineProperty(MDCollapsedPanel.prototype, 'expandButton_0', {
    get: function () {
      return this.expandButton_iv2288$_0.value;
    }
  });
  Object.defineProperty(MDCollapsedPanel.prototype, 'outerToolbar_8be2vx$', {
    get: function () {
      return this.outerToolbar_8be2vx$_8glako$_0.value;
    }
  });
  Object.defineProperty(MDCollapsedPanel.prototype, 'toolbar', {
    get: function () {
      return this.toolbar_qe22ob$_0.value;
    }
  });
  MDCollapsedPanel.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDCollapsedPanel$MDCollapsedPanel_getInstance().classSelector);
    this.appendChild_sr04hg$(this.outerToolbar_8be2vx$);
    this.outerToolbar_8be2vx$.appendChild_sr04hg$(this.toolbar);
    this.outerToolbar_8be2vx$.appendChild_sr04hg$(this.expandButton_0);
    this.style.backgroundColor = Context_getInstance().theme.cardsNdialogs;
  };
  MDCollapsedPanel.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    Context_getInstance().theme.onPropertyChanged_bdxxi9$(this.themeChangedHandler_0);
  };
  function MDCollapsedPanel$MDCollapsedPanel() {
    MDCollapsedPanel$MDCollapsedPanel_instance = this;
    this.classSelector_iefphz$_0 = toClassSelector('fg-md-panel-collapsed-panel');
    this.rule_dw4mwm$_0 = MDCollapsedPanel$MDCollapsedPanel$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDCollapsedPanel$MDCollapsedPanel.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_iefphz$_0;
    }
  });
  Object.defineProperty(MDCollapsedPanel$MDCollapsedPanel.prototype, 'rule', {
    get: function () {
      return this.rule_dw4mwm$_0;
    }
  });
  function MDCollapsedPanel$MDCollapsedPanel$rule$lambda($receiver) {
    $receiver._display = 'block';
    $receiver._position = 'relative';
    $receiver._borderRadius = '2px';
    $receiver._boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
    $receiver._fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
    $receiver._backgroundSize = 'cover';
    return Unit;
  }
  MDCollapsedPanel$MDCollapsedPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDCollapsedPanel',
    interfaces: [StyledClass]
  };
  var MDCollapsedPanel$MDCollapsedPanel_instance = null;
  function MDCollapsedPanel$MDCollapsedPanel_getInstance() {
    if (MDCollapsedPanel$MDCollapsedPanel_instance === null) {
      new MDCollapsedPanel$MDCollapsedPanel();
    }
    return MDCollapsedPanel$MDCollapsedPanel_instance;
  }
  function MDCollapsedPanel$expandButton$lambda(this$MDCollapsedPanel) {
    return function () {
      return new MDExpandButton(this$MDCollapsedPanel.expandAction);
    };
  }
  function MDCollapsedPanel$outerToolbar$lambda() {
    var outerToolbar = new MDToolbar();
    outerToolbar.style.paddingLeft = get_px(24);
    outerToolbar.style.paddingRight = get_px(24);
    outerToolbar.style.height = get_px(48);
    outerToolbar.style.justifyContent = JustifyContent.spaceBetween;
    return outerToolbar;
  }
  function MDCollapsedPanel$toolbar$lambda() {
    var toolbar = new MDToolbar();
    toolbar.style.width = new Percent(100.0);
    toolbar.style.justifyContent = JustifyContent.spaceBetween;
    return toolbar;
  }
  function MDCollapsedPanel$themeChangedHandler$lambda(this$MDCollapsedPanel) {
    return function (theme, property, old, new_0) {
      if (equals(property.callableName, getPropertyCallableRef('cardsNdialogs', 1, function ($receiver) {
        return $receiver.cardsNdialogs;
      }, function ($receiver, value) {
        $receiver.cardsNdialogs = value;
      }).callableName))
        this$MDCollapsedPanel.style.backgroundColor = Context_getInstance().theme.background;
      return Unit;
    };
  }
  MDCollapsedPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDCollapsedPanel',
    interfaces: [Div]
  };
  function MDExpandButton(action) {
    MDExpandButton$MDExpandButton_getInstance();
    MDToggleButton.call(this, action);
  }
  MDExpandButton.prototype.render = function () {
    MDToggleButton.prototype.render.call(this);
    this.addClass_bx842b$(MDExpandButton$MDExpandButton_getInstance().classSelector);
    this._tabindex = '-1';
  };
  function MDExpandButton$MDExpandButton() {
    MDExpandButton$MDExpandButton_instance = this;
    this.classSelector_hswilz$_0 = toClassSelector('fg-md-panel-expand-button');
    this.rule_jeuu6u$_0 = MDExpandButton$MDExpandButton$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDExpandButton$MDExpandButton.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_hswilz$_0;
    }
  });
  Object.defineProperty(MDExpandButton$MDExpandButton.prototype, 'rule', {
    get: function () {
      return this.rule_jeuu6u$_0;
    }
  });
  function MDExpandButton$MDExpandButton$rule$lambda($receiver) {
    $receiver._paddingLeft = '16px';
    return Unit;
  }
  MDExpandButton$MDExpandButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDExpandButton',
    interfaces: [StyledClass]
  };
  var MDExpandButton$MDExpandButton_instance = null;
  function MDExpandButton$MDExpandButton_getInstance() {
    if (MDExpandButton$MDExpandButton_instance === null) {
      new MDExpandButton$MDExpandButton();
    }
    return MDExpandButton$MDExpandButton_instance;
  }
  MDExpandButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDExpandButton',
    interfaces: [MDToggleButton]
  };
  function MDExpandedContent() {
    MDExpandedContent$MDExpandedContent_getInstance();
    Div.call(this);
  }
  MDExpandedContent.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDExpandedContent$MDExpandedContent_getInstance().classSelector);
  };
  function MDExpandedContent$MDExpandedContent() {
    MDExpandedContent$MDExpandedContent_instance = this;
    this.classSelector_ofdh29$_0 = toClassSelector('fg-md-panel-expanded-content');
    this.rule_brdk3k$_0 = MDExpandedContent$MDExpandedContent$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDExpandedContent$MDExpandedContent.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_ofdh29$_0;
    }
  });
  Object.defineProperty(MDExpandedContent$MDExpandedContent.prototype, 'rule', {
    get: function () {
      return this.rule_brdk3k$_0;
    }
  });
  function MDExpandedContent$MDExpandedContent$rule$lambda($receiver) {
    $receiver._paddingTop = '16px';
    $receiver._paddingLeft = '16px';
    $receiver._paddingRight = '16px';
    $receiver._paddingBottom = '16px';
    return Unit;
  }
  MDExpandedContent$MDExpandedContent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDExpandedContent',
    interfaces: [StyledClass]
  };
  var MDExpandedContent$MDExpandedContent_instance = null;
  function MDExpandedContent$MDExpandedContent_getInstance() {
    if (MDExpandedContent$MDExpandedContent_instance === null) {
      new MDExpandedContent$MDExpandedContent();
    }
    return MDExpandedContent$MDExpandedContent_instance;
  }
  MDExpandedContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDExpandedContent',
    interfaces: [Div]
  };
  function MDExpandedPanel(expandAction) {
    MDExpandedPanel$MDExpandedPanel_getInstance();
    Div.call(this);
    this.expandAction = expandAction;
    this.expandButton_3pib4w$_0 = lazy(MDExpandedPanel$expandButton$lambda(this));
    this.outerToolbar_8be2vx$_al57vk$_0 = lazy(MDExpandedPanel$outerToolbar$lambda);
    this.toolbar_j3rgb1$_0 = lazy(MDExpandedPanel$toolbar$lambda);
    this.content_pzcp3j$_0 = lazy(MDExpandedPanel$content$lambda);
    this.themeChangedHandler_0 = MDExpandedPanel$themeChangedHandler$lambda(this);
  }
  Object.defineProperty(MDExpandedPanel.prototype, 'expandButton_0', {
    get: function () {
      return this.expandButton_3pib4w$_0.value;
    }
  });
  Object.defineProperty(MDExpandedPanel.prototype, 'outerToolbar_8be2vx$', {
    get: function () {
      return this.outerToolbar_8be2vx$_al57vk$_0.value;
    }
  });
  Object.defineProperty(MDExpandedPanel.prototype, 'toolbar', {
    get: function () {
      return this.toolbar_j3rgb1$_0.value;
    }
  });
  Object.defineProperty(MDExpandedPanel.prototype, 'content', {
    get: function () {
      return this.content_pzcp3j$_0.value;
    }
  });
  MDExpandedPanel.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDExpandedPanel$MDExpandedPanel_getInstance().classSelector);
    this.outerToolbar_8be2vx$.appendChild_sr04hg$(this.toolbar);
    this.outerToolbar_8be2vx$.appendChild_sr04hg$(this.expandButton_0);
    this.appendChild_sr04hg$(this.outerToolbar_8be2vx$);
    this.appendChild_sr04hg$(this.content);
    this.style.backgroundColor = Context_getInstance().theme.cardsNdialogs;
  };
  MDExpandedPanel.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    Context_getInstance().theme.onPropertyChanged_bdxxi9$(this.themeChangedHandler_0);
  };
  function MDExpandedPanel$MDExpandedPanel() {
    MDExpandedPanel$MDExpandedPanel_instance = this;
    this.classSelector_8xmuph$_0 = toClassSelector('fg-md-panel-expanded-panel');
    this.rule_xct8kq$_0 = MDExpandedPanel$MDExpandedPanel$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDExpandedPanel$MDExpandedPanel.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_8xmuph$_0;
    }
  });
  Object.defineProperty(MDExpandedPanel$MDExpandedPanel.prototype, 'rule', {
    get: function () {
      return this.rule_xct8kq$_0;
    }
  });
  function MDExpandedPanel$MDExpandedPanel$rule$lambda($receiver) {
    $receiver._display = 'block';
    $receiver._position = 'relative';
    $receiver._borderRadius = '2px';
    $receiver._boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.26)';
    $receiver._fontFamily = "Roboto, 'Helvetica Neue', sans-serif";
    $receiver._backgroundSize = 'cover';
    return Unit;
  }
  MDExpandedPanel$MDExpandedPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDExpandedPanel',
    interfaces: [StyledClass]
  };
  var MDExpandedPanel$MDExpandedPanel_instance = null;
  function MDExpandedPanel$MDExpandedPanel_getInstance() {
    if (MDExpandedPanel$MDExpandedPanel_instance === null) {
      new MDExpandedPanel$MDExpandedPanel();
    }
    return MDExpandedPanel$MDExpandedPanel_instance;
  }
  function MDExpandedPanel$expandButton$lambda(this$MDExpandedPanel) {
    return function () {
      return new MDExpandButton(this$MDExpandedPanel.expandAction);
    };
  }
  function MDExpandedPanel$outerToolbar$lambda() {
    var outerToolbar = new MDToolbar();
    outerToolbar.style.paddingLeft = get_px(24);
    outerToolbar.style.paddingRight = get_px(24);
    outerToolbar.style.height = get_px(48);
    outerToolbar.style.justifyContent = JustifyContent.spaceBetween;
    return outerToolbar;
  }
  function MDExpandedPanel$toolbar$lambda() {
    var toolbar = new MDToolbar();
    toolbar.style.width = new Percent(100.0);
    toolbar.style.justifyContent = JustifyContent.spaceBetween;
    return toolbar;
  }
  function MDExpandedPanel$content$lambda() {
    return new MDExpandedContent();
  }
  function MDExpandedPanel$themeChangedHandler$lambda(this$MDExpandedPanel) {
    return function (theme, property, old, new_0) {
      if (equals(property.callableName, getPropertyCallableRef('cardsNdialogs', 1, function ($receiver) {
        return $receiver.cardsNdialogs;
      }, function ($receiver, value) {
        $receiver.cardsNdialogs = value;
      }).callableName))
        this$MDExpandedPanel.style.backgroundColor = Context_getInstance().theme.background;
      return Unit;
    };
  }
  MDExpandedPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDExpandedPanel',
    interfaces: [Div]
  };
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
  function MDExpansionPanel() {
    MDExpansionPanel$MDExpansionPanel_getInstance();
    Div.call(this);
    this.expandCollapseHandler_5rqnij$_0 = MDExpansionPanel$expandCollapseHandler$lambda(this);
    this.state_o55093$_0 = new Delegates$observable$ObjectLiteral_11(MDExpansionPanel$state$lambda(this), MDExpansionPanel$State$COLLAPSED_getInstance());
    this.expandAction_8be2vx$_9ukp9c$_0 = lazy(MDExpansionPanel$expandAction$lambda(this));
    this.collapsed_4rzhj3$_0 = lazy(MDExpansionPanel$collapsed$lambda(this));
    this.expanded_ckoe8z$_0 = lazy(MDExpansionPanel$expanded$lambda(this));
    this.focused_o6fizl$_0 = false;
    this.focusHandler_gwcyy$_0 = MDExpansionPanel$focusHandler$lambda(this);
    this.blurHandler_qplomt$_0 = MDExpansionPanel$blurHandler$lambda(this);
    this.keyUpHandler_81ua50$_0 = MDExpansionPanel$keyUpHandler$lambda(this);
  }
  var MDExpansionPanel$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(MDExpansionPanel.prototype, 'state', {
    get: function () {
      return this.state_o55093$_0.getValue_lrcp0p$(this, MDExpansionPanel$state_metadata);
    },
    set: function (state) {
      this.state_o55093$_0.setValue_9rddgb$(this, MDExpansionPanel$state_metadata, state);
    }
  });
  Object.defineProperty(MDExpansionPanel.prototype, 'expandAction_8be2vx$', {
    get: function () {
      return this.expandAction_8be2vx$_9ukp9c$_0.value;
    }
  });
  Object.defineProperty(MDExpansionPanel.prototype, 'collapsed', {
    get: function () {
      return this.collapsed_4rzhj3$_0.value;
    }
  });
  Object.defineProperty(MDExpansionPanel.prototype, 'expanded', {
    get: function () {
      return this.expanded_ckoe8z$_0.value;
    }
  });
  Object.defineProperty(MDExpansionPanel.prototype, 'focused', {
    get: function () {
      return this.focused_o6fizl$_0;
    },
    set: function (focused) {
      this.focused_o6fizl$_0 = focused;
    }
  });
  MDExpansionPanel.prototype.onFocus = function () {
    if (this.isCollapsed()) {
      this.collapsed.outerToolbar_8be2vx$.style.backgroundColor = new RgbColor(238, 238, 238);
      this.collapsed.toolbar.style.backgroundColor = new RgbColor(238, 238, 238);
    }
     else {
      this.expanded.outerToolbar_8be2vx$.style.backgroundColor = new RgbColor(238, 238, 238);
      this.expanded.toolbar.style.backgroundColor = new RgbColor(238, 238, 238);
    }
  };
  MDExpansionPanel.prototype.unFocus = function () {
    if (this.isCollapsed()) {
      this.collapsed.outerToolbar_8be2vx$.style.backgroundColor = RgbColor.Factory.WHITE;
      this.collapsed.toolbar.style.backgroundColor = RgbColor.Factory.WHITE;
    }
     else {
      this.expanded.outerToolbar_8be2vx$.style.backgroundColor = RgbColor.Factory.WHITE;
      this.expanded.toolbar.style.backgroundColor = RgbColor.Factory.WHITE;
    }
  };
  MDExpansionPanel.prototype.isExpanded = function () {
    return !this.expanded.hidden;
  };
  MDExpansionPanel.prototype.isCollapsed = function () {
    return !this.collapsed.hidden;
  };
  MDExpansionPanel.prototype.toggle = function () {
    this.expandAction_8be2vx$.perform_54c9de$(this);
  };
  MDExpansionPanel.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDExpansionPanel$MDExpansionPanel_getInstance().classSelector);
    this._tabindex = '0';
    this.prependChild_sr04hg$(this.expanded);
    this.prependChild_sr04hg$(this.collapsed);
    this.collapsed.show();
    this.expanded.hide();
  };
  MDExpansionPanel.prototype.didMount = function () {
    Div.prototype.didMount.call(this);
    onFocus(this, this.focusHandler_gwcyy$_0);
    onBlur(this, this.blurHandler_qplomt$_0);
    onKeyUp(this, this.keyUpHandler_81ua50$_0);
  };
  MDExpansionPanel.prototype.renderState_2lble8$_0 = function (state) {
    switch (state.name) {
      case 'COLLAPSED':
        this.expanded.hide();
        this.collapsed.show();
        break;
      case 'EXPANDED':
        this.collapsed.hide();
        this.expanded.show();
        break;
    }
  };
  function MDExpansionPanel$State(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDExpansionPanel$State_initFields() {
    MDExpansionPanel$State_initFields = function () {
    };
    MDExpansionPanel$State$COLLAPSED_instance = new MDExpansionPanel$State('COLLAPSED', 0);
    MDExpansionPanel$State$EXPANDED_instance = new MDExpansionPanel$State('EXPANDED', 1);
  }
  var MDExpansionPanel$State$COLLAPSED_instance;
  function MDExpansionPanel$State$COLLAPSED_getInstance() {
    MDExpansionPanel$State_initFields();
    return MDExpansionPanel$State$COLLAPSED_instance;
  }
  var MDExpansionPanel$State$EXPANDED_instance;
  function MDExpansionPanel$State$EXPANDED_getInstance() {
    MDExpansionPanel$State_initFields();
    return MDExpansionPanel$State$EXPANDED_instance;
  }
  MDExpansionPanel$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function MDExpansionPanel$State$values() {
    return [MDExpansionPanel$State$COLLAPSED_getInstance(), MDExpansionPanel$State$EXPANDED_getInstance()];
  }
  MDExpansionPanel$State.values = MDExpansionPanel$State$values;
  function MDExpansionPanel$State$valueOf(name) {
    switch (name) {
      case 'COLLAPSED':
        return MDExpansionPanel$State$COLLAPSED_getInstance();
      case 'EXPANDED':
        return MDExpansionPanel$State$EXPANDED_getInstance();
      default:throwISE('No enum constant fg.md.panel.MDExpansionPanel.State.' + name);
    }
  }
  MDExpansionPanel$State.valueOf_61zpoe$ = MDExpansionPanel$State$valueOf;
  function MDExpansionPanel$MDExpansionPanel() {
    MDExpansionPanel$MDExpansionPanel_instance = this;
    this.classSelector_izwrhl$_0 = toClassSelector('fg-md-panel-expansion-panel');
    this.rule_ffi6t2$_0 = MDExpansionPanel$MDExpansionPanel$rule$lambda(this);
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDExpansionPanel$MDExpansionPanel.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_izwrhl$_0;
    }
  });
  Object.defineProperty(MDExpansionPanel$MDExpansionPanel.prototype, 'rule', {
    get: function () {
      return this.rule_ffi6t2$_0;
    }
  });
  function MDExpansionPanel$MDExpansionPanel$rule$lambda$lambda($receiver) {
    $receiver._marginTop = '1px';
    return Unit;
  }
  function MDExpansionPanel$MDExpansionPanel$rule$lambda$lambda_0($receiver) {
    $receiver._outline = 'none';
    return Unit;
  }
  function MDExpansionPanel$MDExpansionPanel$rule$lambda(this$MDExpansionPanel$) {
    return function ($receiver) {
      adjacentSibling($receiver, this$MDExpansionPanel$.classSelector, MDExpansionPanel$MDExpansionPanel$rule$lambda$lambda);
      focus($receiver, MDExpansionPanel$MDExpansionPanel$rule$lambda$lambda_0);
      return Unit;
    };
  }
  MDExpansionPanel$MDExpansionPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDExpansionPanel',
    interfaces: [StyledClass]
  };
  var MDExpansionPanel$MDExpansionPanel_instance = null;
  function MDExpansionPanel$MDExpansionPanel_getInstance() {
    if (MDExpansionPanel$MDExpansionPanel_instance === null) {
      new MDExpansionPanel$MDExpansionPanel();
    }
    return MDExpansionPanel$MDExpansionPanel_instance;
  }
  function MDExpansionPanel$expandCollapseHandler$lambda(this$MDExpansionPanel) {
    return function (it) {
      this$MDExpansionPanel.state = this$MDExpansionPanel.state === MDExpansionPanel$State$EXPANDED_getInstance() ? MDExpansionPanel$State$COLLAPSED_getInstance() : MDExpansionPanel$State$EXPANDED_getInstance();
      return Unit;
    };
  }
  function MDExpansionPanel$state$lambda(this$MDExpansionPanel) {
    return function (property, old, new_0) {
      this$MDExpansionPanel.renderState_2lble8$_0(new_0);
      return Unit;
    };
  }
  function MDExpansionPanel$expandAction$lambda(this$MDExpansionPanel) {
    return function () {
      return new SelectableAction(void 0, void 0, MDIconProvider$Statics_getInstance().expand_less, MDIconProvider$Statics_getInstance().expand_more, void 0, void 0, this$MDExpansionPanel.expandCollapseHandler_5rqnij$_0);
    };
  }
  function MDExpansionPanel$collapsed$lambda(this$MDExpansionPanel) {
    return function () {
      return new MDCollapsedPanel(this$MDExpansionPanel.expandAction_8be2vx$);
    };
  }
  function MDExpansionPanel$expanded$lambda(this$MDExpansionPanel) {
    return function () {
      return new MDExpandedPanel(this$MDExpansionPanel.expandAction_8be2vx$);
    };
  }
  function MDExpansionPanel$focusHandler$lambda(this$MDExpansionPanel) {
    return function (it) {
      this$MDExpansionPanel.focused = true;
      this$MDExpansionPanel.toggleClass_ivxn3r$('focused', true);
      this$MDExpansionPanel.onFocus();
      return Unit;
    };
  }
  function MDExpansionPanel$blurHandler$lambda(this$MDExpansionPanel) {
    return function (it) {
      this$MDExpansionPanel.focused = false;
      this$MDExpansionPanel.toggleClass_ivxn3r$('focused');
      this$MDExpansionPanel.unFocus();
      return Unit;
    };
  }
  function MDExpansionPanel$keyUpHandler$lambda(this$MDExpansionPanel) {
    return function (event) {
      if (event.which === 13) {
        this$MDExpansionPanel.toggle();
      }
      return Unit;
    };
  }
  MDExpansionPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDExpansionPanel',
    interfaces: [Div]
  };
  var pkg_0;
  function MDRadioButton(checked, labelText) {
    MDRadioButton$MDRadioButton_getInstance();
    if (checked === void 0)
      checked = false;
    if (labelText === void 0)
      labelText = null;
    LabelledRadioButton.call(this, checked, labelText);
    this.ripple_rhxzrp$_0 = lazy(MDRadioButton$ripple$lambda(this));
  }
  Object.defineProperty(MDRadioButton.prototype, 'ripple_0', {
    get: function () {
      return this.ripple_rhxzrp$_0.value;
    }
  });
  MDRadioButton.prototype.render = function () {
    LabelledRadioButton.prototype.render.call(this);
    this.addClass_bx842b$(MDRadioButton$MDRadioButton_getInstance().classSelector);
    Kotlin.callSetter(this, LabelledRadioButton.prototype, 'checkedIcon', MDRadioButton$MDRadioButton_getInstance().checkedIcon_0);
    Kotlin.callSetter(this, LabelledRadioButton.prototype, 'unCheckedIcon', MDRadioButton$MDRadioButton_getInstance().unCheckedIcon_0);
  };
  MDRadioButton.prototype.didMount = function () {
    LabelledRadioButton.prototype.didMount.call(this);
  };
  function MDRadioButton$MDRadioButton() {
    MDRadioButton$MDRadioButton_instance = this;
    this.classSelector_tbnps$_0 = toClassSelector('md-radio-button');
    this.checkedIcon_0 = icon.FontAwesomeIcons.dot_circle_o_p56ikg$();
    this.unCheckedIcon_0 = icon.FontAwesomeIcons.circle_o_p56ikg$();
    this.rule_pidze7$_0 = MDRadioButton$MDRadioButton$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(MDRadioButton$MDRadioButton.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_tbnps$_0;
    }
  });
  Object.defineProperty(MDRadioButton$MDRadioButton.prototype, 'rule', {
    get: function () {
      return this.rule_pidze7$_0;
    }
  });
  function MDRadioButton$MDRadioButton$rule$lambda($receiver) {
    $receiver._fontFamily = Context_getInstance().theme.font;
    return Unit;
  }
  MDRadioButton$MDRadioButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDRadioButton',
    interfaces: [StyledClass]
  };
  var MDRadioButton$MDRadioButton_instance = null;
  function MDRadioButton$MDRadioButton_getInstance() {
    if (MDRadioButton$MDRadioButton_instance === null) {
      new MDRadioButton$MDRadioButton();
    }
    return MDRadioButton$MDRadioButton_instance;
  }
  function MDRadioButton$ripple$lambda$lambda() {
    return Unit;
  }
  function MDRadioButton$ripple$lambda$lambda_0() {
    return Unit;
  }
  function MDRadioButton$ripple$lambda(this$MDRadioButton) {
    return function () {
      return new Ripple(this$MDRadioButton.iconI, void 0, MDRadioButton$ripple$lambda$lambda, MDRadioButton$ripple$lambda$lambda_0);
    };
  }
  MDRadioButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDRadioButton',
    interfaces: [LabelledRadioButton]
  };
  function Ripple(element, inkColor, startedCallback, doneCallback) {
    Ripple$Factory_getInstance();
    if (inkColor === void 0)
      inkColor = RgbColor.Factory.RED;
    if (startedCallback === void 0)
      startedCallback = null;
    if (doneCallback === void 0)
      doneCallback = null;
    this.element = element;
    this.inkColor = inkColor;
    this.startedCallback = startedCallback;
    this.doneCallback = doneCallback;
    this.started_0 = false;
    this.rippleContainer_k9xg4e$_0 = lazy(Ripple$rippleContainer$lambda);
    this.handleMouseDown_0 = Ripple$handleMouseDown$lambda(this);
    this.handleMouseDown_rippleDone_0 = Ripple$handleMouseDown_rippleDone$lambda(this);
    this.cleanUp_0 = Ripple$cleanUp$lambda(this);
  }
  Object.defineProperty(Ripple.prototype, 'rippleContainer_0', {
    get: function () {
      return this.rippleContainer_k9xg4e$_0.value;
    }
  });
  Ripple.prototype.init = function () {
    this.element.appendChild_sr04hg$(this.rippleContainer_0);
    onMouseDown(this.element, this.handleMouseDown_0);
    onMouseDown(this.element, bounceUntil(this.handleMouseDown_rippleDone_0, 1000));
    onMouseUp(this.element, debounce1(this.cleanUp_0, 2000));
    this.element.addClass_bx842b$(Ripple$Factory_getInstance().rippleTargetClass);
  };
  Ripple.prototype.start_0 = function (pageX, pageY) {
    var size = this.element.offsetWidth;
    var pos = this.element.boundingClientRect;
    var halfSize = size / 2 | 0;
    var x = pageX - pos.left - halfSize - window.scrollX;
    var y = pageY - pos.top - halfSize - window.scrollY;
    var rippleInk = new RippleInk(this.inkColor);
    rippleInk.setPosition_i08y1w$(to(x, y));
    rippleInk.setSize_sfxhv0$(get_px(size));
    this.rippleContainer_0.appendChild_sr04hg$(rippleInk);
    this.rippleContainer_0._enforceStyleRecalculation();
  };
  function Ripple$Factory() {
    Ripple$Factory_instance = this;
    this.rippleTargetClass = toClassSelector('md-ripple-target');
    this.rippleTarget = classRule(Unit, this.rippleTargetClass, Ripple$Factory$rippleTarget$lambda);
    elements.HTML.registerCSSRule_t83c1i$(this.rippleTarget);
  }
  function Ripple$Factory$rippleTarget$lambda($receiver) {
    $receiver._position = 'relative';
    $receiver._overflowX = 'hidden';
    $receiver._overflowY = 'hidden';
    return Unit;
  }
  Ripple$Factory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Factory',
    interfaces: []
  };
  var Ripple$Factory_instance = null;
  function Ripple$Factory_getInstance() {
    if (Ripple$Factory_instance === null) {
      new Ripple$Factory();
    }
    return Ripple$Factory_instance;
  }
  function Ripple$rippleContainer$lambda() {
    return new RippleContainer();
  }
  function Ripple$handleMouseDown$lambda(this$Ripple) {
    return function (e) {
      var tmp$;
      this$Ripple.start_0(e.pageX, e.pageY);
      if (!this$Ripple.started_0) {
        (tmp$ = this$Ripple.startedCallback) != null ? tmp$() : null;
        this$Ripple.started_0 = true;
      }
      return Unit;
    };
  }
  function Ripple$handleMouseDown_rippleDone$lambda(this$Ripple) {
    return function (e) {
      var tmp$;
      console.log('Ripple done, invoking doneCallback');
      (tmp$ = this$Ripple.doneCallback) != null ? tmp$() : null;
      return Unit;
    };
  }
  function Ripple$cleanUp$lambda(this$Ripple) {
    return function (it) {
      this$Ripple.rippleContainer_0.removeChildren();
      this$Ripple.started_0 = false;
      return Unit;
    };
  }
  Ripple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ripple',
    interfaces: []
  };
  function RippleContainer() {
    RippleContainer$RippleContainer_getInstance();
    Div.call(this);
  }
  RippleContainer.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(RippleContainer$RippleContainer_getInstance().classSelector);
  };
  function RippleContainer$RippleContainer() {
    RippleContainer$RippleContainer_instance = this;
    this.classSelector_5949gm$_0 = toClassSelector('md-ripple-container');
    this.rule_2y45y3$_0 = RippleContainer$RippleContainer$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  Object.defineProperty(RippleContainer$RippleContainer.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_5949gm$_0;
    }
  });
  Object.defineProperty(RippleContainer$RippleContainer.prototype, 'rule', {
    get: function () {
      return this.rule_2y45y3$_0;
    }
  });
  function RippleContainer$RippleContainer$rule$lambda($receiver) {
    $receiver._position = 'absolute';
    $receiver._top = '0';
    $receiver._right = '0';
    $receiver._bottom = '0';
    $receiver._left = '0';
    return Unit;
  }
  RippleContainer$RippleContainer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RippleContainer',
    interfaces: [StyledClass]
  };
  var RippleContainer$RippleContainer_instance = null;
  function RippleContainer$RippleContainer_getInstance() {
    if (RippleContainer$RippleContainer_instance === null) {
      new RippleContainer$RippleContainer();
    }
    return RippleContainer$RippleContainer_instance;
  }
  RippleContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RippleContainer',
    interfaces: [Div]
  };
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
  function RippleInk(color) {
    RippleInk$RippleInk_getInstance();
    Span.call(this);
    this.color_oiswxk$_0 = new Delegates$observable$ObjectLiteral_12(RippleInk$color$lambda(this), color);
  }
  var RippleInk$color_metadata = new PropertyMetadata('color');
  Object.defineProperty(RippleInk.prototype, 'color', {
    get: function () {
      return this.color_oiswxk$_0.getValue_lrcp0p$(this, RippleInk$color_metadata);
    },
    set: function (color) {
      this.color_oiswxk$_0.setValue_9rddgb$(this, RippleInk$color_metadata, color);
    }
  });
  RippleInk.prototype.setSize_sfxhv0$ = function (size) {
    this.style.width = size;
    this.style.height = size;
  };
  RippleInk.prototype.setPosition_i08y1w$ = function (position) {
    this.style.left = get_px_0(position.first);
    this.style.top = get_px_0(position.second);
  };
  RippleInk.prototype.renderColor_0 = function (color) {
    this.style.backgroundColor = color;
  };
  RippleInk.prototype.render = function () {
    Span.prototype.render.call(this);
    this.addClass_bx842b$(RippleInk$RippleInk_getInstance().classSelector);
    this.renderColor_0(this.color);
  };
  function RippleInk$RippleInk() {
    RippleInk$RippleInk_instance = this;
    this.classSelector_262z6s$_0 = toClassSelector('md-ripple-ink');
    this.rule_9m85qz$_0 = RippleInk$RippleInk$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
    var rule = keyframesRule(Unit, 'ripple', RippleInk$RippleInk$RippleInk_init$lambda);
    elements.HTML.registerCSSRule_t83c1i$(rule);
  }
  Object.defineProperty(RippleInk$RippleInk.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_262z6s$_0;
    }
  });
  Object.defineProperty(RippleInk$RippleInk.prototype, 'rule', {
    get: function () {
      return this.rule_9m85qz$_0;
    }
  });
  function RippleInk$RippleInk$rule$lambda($receiver) {
    $receiver._transform = 'scale(0)';
    $receiver._position = 'absolute';
    $receiver._opacity = '0.75';
    $receiver._padding = '24px';
    $receiver._borderRadius = '100%';
    $receiver._animation = 'ripple 1000ms';
    return Unit;
  }
  function RippleInk$RippleInk$RippleInk_init$lambda$lambda($receiver) {
    $receiver._opacity = '0';
    $receiver._transform = 'scale(2)';
    return Unit;
  }
  function RippleInk$RippleInk$RippleInk_init$lambda($receiver) {
    kto($receiver, RippleInk$RippleInk$RippleInk_init$lambda$lambda);
    return Unit;
  }
  RippleInk$RippleInk.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RippleInk',
    interfaces: [StyledClass]
  };
  var RippleInk$RippleInk_instance = null;
  function RippleInk$RippleInk_getInstance() {
    if (RippleInk$RippleInk_instance === null) {
      new RippleInk$RippleInk();
    }
    return RippleInk$RippleInk_instance;
  }
  function RippleInk$color$lambda(this$RippleInk) {
    return function (property, old, new_0) {
      this$RippleInk.renderColor_0(new_0);
      return Unit;
    };
  }
  RippleInk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RippleInk',
    interfaces: [Span]
  };
  function MDToolbar() {
    MDToolbar$MDToolbar_getInstance();
    Div.call(this);
  }
  MDToolbar.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_bx842b$(MDToolbar$MDToolbar_getInstance().classSelector);
    this.style.backgroundColor = Context_getInstance().theme.toolbar;
  };
  function MDToolbar$MDToolbar() {
    MDToolbar$MDToolbar_instance = this;
    this.classSelector_lcjfsc$_0 = toClassSelector('fg-md-toolbar');
    this.rule_gugx65$_0 = MDToolbar$MDToolbar$rule$lambda;
    elements.HTML.registerStyle_78phyd$(this);
  }
  function MDToolbar$MDToolbar$spacer$lambda($receiver) {
    $receiver.style.flex = new Flex(1);
    return Unit;
  }
  MDToolbar$MDToolbar.prototype.spacer = function () {
    var span = with_0(new Span(), MDToolbar$MDToolbar$spacer$lambda);
    return span;
  };
  Object.defineProperty(MDToolbar$MDToolbar.prototype, 'classSelector', {
    get: function () {
      return this.classSelector_lcjfsc$_0;
    }
  });
  Object.defineProperty(MDToolbar$MDToolbar.prototype, 'rule', {
    get: function () {
      return this.rule_gugx65$_0;
    }
  });
  function MDToolbar$MDToolbar$rule$lambda($receiver) {
    $receiver._display = 'flex';
    $receiver._flexDirection = 'row';
    $receiver._alignItems = 'center';
    return Unit;
  }
  MDToolbar$MDToolbar.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MDToolbar',
    interfaces: [StyledClass]
  };
  var MDToolbar$MDToolbar_instance = null;
  function MDToolbar$MDToolbar_getInstance() {
    if (MDToolbar$MDToolbar_instance === null) {
      new MDToolbar$MDToolbar();
    }
    return MDToolbar$MDToolbar_instance;
  }
  MDToolbar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDToolbar',
    interfaces: [Div]
  };
  var package$fg = _.fg || (_.fg = {});
  var package$md = package$fg.md || (package$fg.md = {});
  Object.defineProperty(package$md, 'Context', {
    get: Context_getInstance
  });
  package$md.mdButton_nktyfw$ = mdButton;
  package$md.mdCard_n9h7cj$ = mdCard;
  package$md.mdDrawer_mzaxr2$ = mdDrawer;
  package$md.mdExpansionPanel_hquep6$ = mdExpansionPanel;
  package$md.mdIcon_g8v0bx$ = mdIcon;
  package$md.mdMenu_altxie$ = mdMenu;
  package$md.mdRadioButton_ijs2cm$ = mdRadioButton;
  package$md.mdToggleButton_mkkesl$ = mdToggleButton;
  package$md.mdToolbar_j7txd3$ = mdToolbar;
  package$md.title_li3s0q$ = title;
  package$md.subtitle_nfdrzi$ = subtitle;
  package$md.header_lfnsbn$ = header;
  package$md.image_x02q6j$ = image;
  package$md.content_bjfsl7$ = content;
  package$md.mdActions_r014vz$ = mdActions;
  package$md.titleText_sxfp5z$ = titleText;
  package$md.text_ngfx99$ = text;
  package$md.title_5sgfbh$ = title_0;
  package$md.subtitle_r3jm6z$ = subtitle_0;
  package$md.title_p5w480$ = title_1;
  package$md.subtitle_3xqp5k$ = subtitle_1;
  package$md.avatar_v76fde$ = avatar;
  package$md.title_ldiu17$ = title_2;
  package$md.subtitle_3hgejn$ = subtitle_2;
  package$md.mdButton_anbmdb$ = mdButton_0;
  package$md.mdButton_dakcj0$ = mdButton_1;
  package$md.mdMenuItem_de4751$ = mdMenuItem;
  package$md.content_y02a8y$ = content_0;
  package$md.content_gpxngq$ = content_1;
  package$md.spacer_oaybh4$ = spacer;
  Object.defineProperty(Theme, 'Statics', {
    get: Theme$Statics_getInstance
  });
  package$md.Theme = Theme;
  Object.defineProperty(MDAppBar, 'MDAppBar', {
    get: MDAppBar$MDAppBar_getInstance
  });
  var package$app = package$md.app || (package$md.app = {});
  package$app.MDAppBar = MDAppBar;
  Object.defineProperty(MDButton$Type, 'FLAT', {
    get: MDButton$Type$FLAT_getInstance
  });
  Object.defineProperty(MDButton$Type, 'RAISED', {
    get: MDButton$Type$RAISED_getInstance
  });
  Object.defineProperty(MDButton$Type, 'FLOATING', {
    get: MDButton$Type$FLOATING_getInstance
  });
  MDButton.Type = MDButton$Type;
  MDButton.FlatStyle = MDButton$FlatStyle;
  MDButton.RaisedStyle = MDButton$RaisedStyle;
  MDButton.FloatingStyle = MDButton$FloatingStyle;
  Object.defineProperty(MDButton, 'Companion', {
    get: MDButton$Companion_getInstance
  });
  var package$button = package$md.button || (package$md.button = {});
  package$button.MDButton = MDButton;
  Object.defineProperty(MDToggleButton, 'Companion', {
    get: MDToggleButton$Companion_getInstance
  });
  package$button.MDToggleButton = MDToggleButton;
  Object.defineProperty(MDCard, 'MDCard', {
    get: MDCard$MDCard_getInstance
  });
  var package$card = package$md.card || (package$md.card = {});
  package$card.MDCard = MDCard;
  Object.defineProperty(MDCardActions, 'MDCardActions', {
    get: MDCardActions$MDCardActions_getInstance
  });
  package$card.MDCardActions = MDCardActions;
  Object.defineProperty(MDCardAvatar, 'MDCardAvatar', {
    get: MDCardAvatar$MDCardAvatar_getInstance
  });
  package$card.MDCardAvatar = MDCardAvatar;
  Object.defineProperty(MDCardContent, 'Statics', {
    get: MDCardContent$Statics_getInstance
  });
  package$card.MDCardContent = MDCardContent;
  Object.defineProperty(MDCardHeader, 'MDCardHeader', {
    get: MDCardHeader$MDCardHeader_getInstance
  });
  package$card.MDCardHeader = MDCardHeader;
  Object.defineProperty(MDCardHeaderText, 'MDCardHeaderText', {
    get: MDCardHeaderText$MDCardHeaderText_getInstance
  });
  package$card.MDCardHeaderText = MDCardHeaderText;
  Object.defineProperty(MDCardImage, 'MDCardImage', {
    get: MDCardImage$MDCardImage_getInstance
  });
  package$card.MDCardImage = MDCardImage;
  Object.defineProperty(MDCardSubtitle, 'MDCardSubtitle', {
    get: MDCardSubtitle$MDCardSubtitle_getInstance
  });
  package$card.MDCardSubtitle = MDCardSubtitle;
  Object.defineProperty(MDCardTitle, 'MDCardTitle', {
    get: MDCardTitle$MDCardTitle_getInstance
  });
  package$card.MDCardTitle = MDCardTitle;
  Object.defineProperty(MDCardTitleText, 'MDCardHeaderText', {
    get: MDCardTitleText$MDCardHeaderText_getInstance
  });
  package$card.MDCardTitleText = MDCardTitleText;
  Object.defineProperty(MDColor, 'DEFAULT', {
    get: MDColor$DEFAULT_getInstance
  });
  Object.defineProperty(MDColor, 'PRIMARY', {
    get: MDColor$PRIMARY_getInstance
  });
  Object.defineProperty(MDColor, 'ACCENT', {
    get: MDColor$ACCENT_getInstance
  });
  Object.defineProperty(MDColor, 'WARN', {
    get: MDColor$WARN_getInstance
  });
  var package$colour = package$md.colour || (package$md.colour = {});
  package$colour.MDColor = MDColor;
  Object.defineProperty(package$colour, 'MDGrayPalette', {
    get: MDGrayPalette_getInstance
  });
  Object.defineProperty(package$colour, 'MDGreenPalette', {
    get: MDGreenPalette_getInstance
  });
  package$colour.MDPrimaryPalette = MDPrimaryPalette;
  package$colour.MDAccentPalette = MDAccentPalette;
  Object.defineProperty(package$colour, 'MDPurplePalette', {
    get: MDPurplePalette_getInstance
  });
  Object.defineProperty(package$colour, 'MDRedPalette', {
    get: MDRedPalette_getInstance
  });
  Object.defineProperty(MDDrawer, 'MDDrawer', {
    get: MDDrawer$MDDrawer_getInstance
  });
  var package$drawer = package$md.drawer || (package$md.drawer = {});
  package$drawer.MDDrawer = MDDrawer;
  Object.defineProperty(MDIcon$Size, 's18px', {
    get: MDIcon$Size$s18px_getInstance
  });
  Object.defineProperty(MDIcon$Size, 's24px', {
    get: MDIcon$Size$s24px_getInstance
  });
  Object.defineProperty(MDIcon$Size, 's36px', {
    get: MDIcon$Size$s36px_getInstance
  });
  Object.defineProperty(MDIcon$Size, 's48px', {
    get: MDIcon$Size$s48px_getInstance
  });
  MDIcon.Size = MDIcon$Size;
  Object.defineProperty(MDIcon, 'MDIcon', {
    get: MDIcon$MDIcon_getInstance
  });
  var package$icon = package$md.icon || (package$md.icon = {});
  package$icon.MDIcon = MDIcon;
  Object.defineProperty(MDIconProvider, 'Statics', {
    get: MDIconProvider$Statics_getInstance
  });
  package$icon.MDIconProvider = MDIconProvider;
  Object.defineProperty(MDMenu, 'MDMenu', {
    get: MDMenu$MDMenu_getInstance
  });
  var package$menu = package$md.menu || (package$md.menu = {});
  package$menu.MDMenu = MDMenu;
  Object.defineProperty(MDMenuItem, 'MDMenuItem', {
    get: MDMenuItem$MDMenuItem_getInstance
  });
  package$menu.MDMenuItem = MDMenuItem;
  Object.defineProperty(package$md, 'pkg', {
    get: function () {
      return pkg;
    }
  });
  Object.defineProperty(MDCollapsedPanel, 'MDCollapsedPanel', {
    get: MDCollapsedPanel$MDCollapsedPanel_getInstance
  });
  var package$panel = package$md.panel || (package$md.panel = {});
  package$panel.MDCollapsedPanel = MDCollapsedPanel;
  Object.defineProperty(MDExpandButton, 'MDExpandButton', {
    get: MDExpandButton$MDExpandButton_getInstance
  });
  package$panel.MDExpandButton = MDExpandButton;
  Object.defineProperty(MDExpandedContent, 'MDExpandedContent', {
    get: MDExpandedContent$MDExpandedContent_getInstance
  });
  package$panel.MDExpandedContent = MDExpandedContent;
  Object.defineProperty(MDExpandedPanel, 'MDExpandedPanel', {
    get: MDExpandedPanel$MDExpandedPanel_getInstance
  });
  package$panel.MDExpandedPanel = MDExpandedPanel;
  Object.defineProperty(MDExpansionPanel$State, 'COLLAPSED', {
    get: MDExpansionPanel$State$COLLAPSED_getInstance
  });
  Object.defineProperty(MDExpansionPanel$State, 'EXPANDED', {
    get: MDExpansionPanel$State$EXPANDED_getInstance
  });
  MDExpansionPanel.State = MDExpansionPanel$State;
  Object.defineProperty(MDExpansionPanel, 'MDExpansionPanel', {
    get: MDExpansionPanel$MDExpansionPanel_getInstance
  });
  package$panel.MDExpansionPanel = MDExpansionPanel;
  Object.defineProperty(package$panel, 'pkg', {
    get: function () {
      return pkg_0;
    }
  });
  Object.defineProperty(MDRadioButton, 'MDRadioButton', {
    get: MDRadioButton$MDRadioButton_getInstance
  });
  var package$radio = package$md.radio || (package$md.radio = {});
  package$radio.MDRadioButton = MDRadioButton;
  Object.defineProperty(Ripple, 'Factory', {
    get: Ripple$Factory_getInstance
  });
  var package$support = package$md.support || (package$md.support = {});
  package$support.Ripple = Ripple;
  Object.defineProperty(RippleContainer, 'RippleContainer', {
    get: RippleContainer$RippleContainer_getInstance
  });
  package$support.RippleContainer = RippleContainer;
  Object.defineProperty(RippleInk, 'RippleInk', {
    get: RippleInk$RippleInk_getInstance
  });
  package$support.RippleInk = RippleInk;
  Object.defineProperty(MDToolbar, 'MDToolbar', {
    get: MDToolbar$MDToolbar_getInstance
  });
  var package$toolbar = package$md.toolbar || (package$md.toolbar = {});
  package$toolbar.MDToolbar = MDToolbar;
  pkg = 'fg-md';
  pkg_0 = pkg + '-panel';
  Kotlin.defineModule('material-design', _);
  return _;
}(typeof this['material-design'] === 'undefined' ? {} : this['material-design'], kotlin, elements, beans);

//# sourceMappingURL=material-design.js.map
