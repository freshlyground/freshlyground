if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'elements'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'elements'.");
}
var elements = function (_, Kotlin) {
  'use strict';
  var experimental_0 = Kotlin.kotlin.coroutines.experimental;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Enum = Kotlin.kotlin.Enum;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Comparable = Kotlin.kotlin.Comparable;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_j4ogox$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var List = Kotlin.kotlin.collections.List;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var properties_0 = Kotlin.kotlin.properties;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var contains_0 = Kotlin.kotlin.ranges.contains_bupbvv$;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Pair = Kotlin.kotlin.Pair;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var iterator_0 = Kotlin.kotlin.text.iterator_gw00vp$;
  UnexpectedStatusException.prototype = Object.create(RuntimeException.prototype);
  UnexpectedStatusException.prototype.constructor = UnexpectedStatusException;
  InternalServerErrorException.prototype = Object.create(UnexpectedStatusException.prototype);
  InternalServerErrorException.prototype.constructor = InternalServerErrorException;
  NotFoundException.prototype = Object.create(UnexpectedStatusException.prototype);
  NotFoundException.prototype.constructor = NotFoundException;
  OS.prototype = Object.create(Enum.prototype);
  OS.prototype.constructor = OS;
  Side.prototype = Object.create(Enum.prototype);
  Side.prototype.constructor = Side;
  Element.prototype = Object.create(Node.prototype);
  Element.prototype.constructor = Element;
  Body.prototype = Object.create(Element.prototype);
  Body.prototype.constructor = Body;
  DimensionType.prototype = Object.create(Enum.prototype);
  DimensionType.prototype.constructor = DimensionType;
  Div.prototype = Object.create(Element.prototype);
  Div.prototype.constructor = Div;
  Element$ResizeSensor$Sensor.prototype = Object.create(Div.prototype);
  Element$ResizeSensor$Sensor.prototype.constructor = Element$ResizeSensor$Sensor;
  Element$ResizeSensor$SensorExpand.prototype = Object.create(Div.prototype);
  Element$ResizeSensor$SensorExpand.prototype.constructor = Element$ResizeSensor$SensorExpand;
  Element$ResizeSensor$SensorShrink.prototype = Object.create(Div.prototype);
  Element$ResizeSensor$SensorShrink.prototype.constructor = Element$ResizeSensor$SensorShrink;
  Img.prototype = Object.create(Element.prototype);
  Img.prototype.constructor = Img;
  Button.prototype = Object.create(Element.prototype);
  Button.prototype.constructor = Button;
  Select.prototype = Object.create(Element.prototype);
  Select.prototype.constructor = Select;
  Input$Type.prototype = Object.create(Enum.prototype);
  Input$Type.prototype.constructor = Input$Type;
  Input.prototype = Object.create(Element.prototype);
  Input.prototype.constructor = Input;
  InputText.prototype = Object.create(Input.prototype);
  InputText.prototype.constructor = InputText;
  InputRadio.prototype = Object.create(Input.prototype);
  InputRadio.prototype.constructor = InputRadio;
  InputNumber.prototype = Object.create(Input.prototype);
  InputNumber.prototype.constructor = InputNumber;
  Label.prototype = Object.create(Element.prototype);
  Label.prototype.constructor = Label;
  P.prototype = Object.create(Element.prototype);
  P.prototype.constructor = P;
  Hr.prototype = Object.create(Element.prototype);
  Hr.prototype.constructor = Hr;
  Pre.prototype = Object.create(Element.prototype);
  Pre.prototype.constructor = Pre;
  Blockquote.prototype = Object.create(Element.prototype);
  Blockquote.prototype.constructor = Blockquote;
  Ol.prototype = Object.create(Element.prototype);
  Ol.prototype.constructor = Ol;
  Ul.prototype = Object.create(Element.prototype);
  Ul.prototype.constructor = Ul;
  Li.prototype = Object.create(Element.prototype);
  Li.prototype.constructor = Li;
  Dl.prototype = Object.create(Element.prototype);
  Dl.prototype.constructor = Dl;
  Dt.prototype = Object.create(Element.prototype);
  Dt.prototype.constructor = Dt;
  Dd.prototype = Object.create(Element.prototype);
  Dd.prototype.constructor = Dd;
  Figure.prototype = Object.create(Element.prototype);
  Figure.prototype.constructor = Figure;
  Figcaption.prototype = Object.create(Element.prototype);
  Figcaption.prototype.constructor = Figcaption;
  Main.prototype = Object.create(Element.prototype);
  Main.prototype.constructor = Main;
  DefaultBreakpoints.prototype = Object.create(Enum.prototype);
  DefaultBreakpoints.prototype.constructor = DefaultBreakpoints;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  Layout.prototype = Object.create(AbstractLayout.prototype);
  Layout.prototype.constructor = Layout;
  LayoutBreakpoint.prototype = Object.create(AbstractLayout.prototype);
  LayoutBreakpoint.prototype.constructor = LayoutBreakpoint;
  Article.prototype = Object.create(Element.prototype);
  Article.prototype.constructor = Article;
  Section.prototype = Object.create(Element.prototype);
  Section.prototype.constructor = Section;
  Nav.prototype = Object.create(Element.prototype);
  Nav.prototype.constructor = Nav;
  Aside.prototype = Object.create(Element.prototype);
  Aside.prototype.constructor = Aside;
  H1.prototype = Object.create(Element.prototype);
  H1.prototype.constructor = H1;
  H2.prototype = Object.create(Element.prototype);
  H2.prototype.constructor = H2;
  H3.prototype = Object.create(Element.prototype);
  H3.prototype.constructor = H3;
  H4.prototype = Object.create(Element.prototype);
  H4.prototype.constructor = H4;
  H5.prototype = Object.create(Element.prototype);
  H5.prototype.constructor = H5;
  H6.prototype = Object.create(Element.prototype);
  H6.prototype.constructor = H6;
  Header.prototype = Object.create(Element.prototype);
  Header.prototype.constructor = Header;
  Footer.prototype = Object.create(Element.prototype);
  Footer.prototype.constructor = Footer;
  Address.prototype = Object.create(Element.prototype);
  Address.prototype.constructor = Address;
  AnySelector.prototype = Object.create(Selector.prototype);
  AnySelector.prototype.constructor = AnySelector;
  AnimationNameSelector.prototype = Object.create(Selector.prototype);
  AnimationNameSelector.prototype.constructor = AnimationNameSelector;
  KeyframeSelector.prototype = Object.create(Selector.prototype);
  KeyframeSelector.prototype.constructor = KeyframeSelector;
  TypeSelector.prototype = Object.create(Selector.prototype);
  TypeSelector.prototype.constructor = TypeSelector;
  ClassSelector.prototype = Object.create(Selector.prototype);
  ClassSelector.prototype.constructor = ClassSelector;
  IdSelector.prototype = Object.create(Selector.prototype);
  IdSelector.prototype.constructor = IdSelector;
  AttrSelector.prototype = Object.create(Selector.prototype);
  AttrSelector.prototype.constructor = AttrSelector;
  PseudoClassSelector.prototype = Object.create(Selector.prototype);
  PseudoClassSelector.prototype.constructor = PseudoClassSelector;
  CompositeSelector.prototype = Object.create(Selector.prototype);
  CompositeSelector.prototype.constructor = CompositeSelector;
  ChildSelector.prototype = Object.create(CompositeSelector.prototype);
  ChildSelector.prototype.constructor = ChildSelector;
  AdjacentSiblingSelector.prototype = Object.create(CompositeSelector.prototype);
  AdjacentSiblingSelector.prototype.constructor = AdjacentSiblingSelector;
  GeneralSiblingSelector.prototype = Object.create(CompositeSelector.prototype);
  GeneralSiblingSelector.prototype.constructor = GeneralSiblingSelector;
  DescendantSelector.prototype = Object.create(CompositeSelector.prototype);
  DescendantSelector.prototype.constructor = DescendantSelector;
  AndSelector.prototype = Object.create(CompositeSelector.prototype);
  AndSelector.prototype.constructor = AndSelector;
  NotSelector.prototype = Object.create(Selector.prototype);
  NotSelector.prototype.constructor = NotSelector;
  AlignItems.prototype = Object.create(Enum.prototype);
  AlignItems.prototype.constructor = AlignItems;
  BorderStyle.prototype = Object.create(Enum.prototype);
  BorderStyle.prototype.constructor = BorderStyle;
  Display.prototype = Object.create(Enum.prototype);
  Display.prototype.constructor = Display;
  Flex$Keyword.prototype = Object.create(Enum.prototype);
  Flex$Keyword.prototype.constructor = Flex$Keyword;
  FlexBasis$Keyword.prototype = Object.create(Enum.prototype);
  FlexBasis$Keyword.prototype.constructor = FlexBasis$Keyword;
  FlexDirection.prototype = Object.create(Enum.prototype);
  FlexDirection.prototype.constructor = FlexDirection;
  FlexGrow$Keyword.prototype = Object.create(Enum.prototype);
  FlexGrow$Keyword.prototype.constructor = FlexGrow$Keyword;
  FlexShrink$Keyword.prototype = Object.create(Enum.prototype);
  FlexShrink$Keyword.prototype.constructor = FlexShrink$Keyword;
  JustifyContent.prototype = Object.create(Enum.prototype);
  JustifyContent.prototype.constructor = JustifyContent;
  Position.prototype = Object.create(Enum.prototype);
  Position.prototype.constructor = Position;
  TypedStyle$AlignItemsDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$AlignItemsDelegate.prototype.constructor = TypedStyle$AlignItemsDelegate;
  TypedStyle$BorderDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate2.prototype);
  TypedStyle$BorderDelegate.prototype.constructor = TypedStyle$BorderDelegate;
  TypedStyle$DisplayDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$DisplayDelegate.prototype.constructor = TypedStyle$DisplayDelegate;
  TypedStyle$RgbColorDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$RgbColorDelegate.prototype.constructor = TypedStyle$RgbColorDelegate;
  TypedStyle$DimensionDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$DimensionDelegate.prototype.constructor = TypedStyle$DimensionDelegate;
  TypedStyle$FlexDirectionDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$FlexDirectionDelegate.prototype.constructor = TypedStyle$FlexDirectionDelegate;
  TypedStyle$FlexDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$FlexDelegate.prototype.constructor = TypedStyle$FlexDelegate;
  TypedStyle$FlexGrowDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$FlexGrowDelegate.prototype.constructor = TypedStyle$FlexGrowDelegate;
  TypedStyle$FlexShrinkDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$FlexShrinkDelegate.prototype.constructor = TypedStyle$FlexShrinkDelegate;
  TypedStyle$FlexBasisDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$FlexBasisDelegate.prototype.constructor = TypedStyle$FlexBasisDelegate;
  TypedStyle$IntDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$IntDelegate.prototype.constructor = TypedStyle$IntDelegate;
  TypedStyle$JustifyContentDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$JustifyContentDelegate.prototype.constructor = TypedStyle$JustifyContentDelegate;
  TypedStyle$PositionDelegate.prototype = Object.create(TypedStyle$TypedPropertyDelegate.prototype);
  TypedStyle$PositionDelegate.prototype.constructor = TypedStyle$PositionDelegate;
  Table.prototype = Object.create(Element.prototype);
  Table.prototype.constructor = Table;
  Caption.prototype = Object.create(Element.prototype);
  Caption.prototype.constructor = Caption;
  Colgroup.prototype = Object.create(Element.prototype);
  Colgroup.prototype.constructor = Colgroup;
  Col.prototype = Object.create(Element.prototype);
  Col.prototype.constructor = Col;
  Tbody.prototype = Object.create(Element.prototype);
  Tbody.prototype.constructor = Tbody;
  Thead.prototype = Object.create(Element.prototype);
  Thead.prototype.constructor = Thead;
  Tfoot.prototype = Object.create(Element.prototype);
  Tfoot.prototype.constructor = Tfoot;
  Tr.prototype = Object.create(Element.prototype);
  Tr.prototype.constructor = Tr;
  Td.prototype = Object.create(Element.prototype);
  Td.prototype.constructor = Td;
  Th.prototype = Object.create(Element.prototype);
  Th.prototype.constructor = Th;
  A.prototype = Object.create(Element.prototype);
  A.prototype.constructor = A;
  Br.prototype = Object.create(Element.prototype);
  Br.prototype.constructor = Br;
  Span.prototype = Object.create(Element.prototype);
  Span.prototype.constructor = Span;
  I.prototype = Object.create(Element.prototype);
  I.prototype.constructor = I;
  Text_0.prototype = Object.create(Node.prototype);
  Text_0.prototype.constructor = Text_0;
  AdjacentSiblingRule.prototype = Object.create(Rule.prototype);
  AdjacentSiblingRule.prototype.constructor = AdjacentSiblingRule;
  AndRule.prototype = Object.create(Rule.prototype);
  AndRule.prototype.constructor = AndRule;
  AnyRule.prototype = Object.create(Rule.prototype);
  AnyRule.prototype.constructor = AnyRule;
  ChildRule.prototype = Object.create(Rule.prototype);
  ChildRule.prototype.constructor = ChildRule;
  ClassRule.prototype = Object.create(Rule.prototype);
  ClassRule.prototype.constructor = ClassRule;
  DescendantRule.prototype = Object.create(Rule.prototype);
  DescendantRule.prototype.constructor = DescendantRule;
  KeyFrameRule.prototype = Object.create(Rule.prototype);
  KeyFrameRule.prototype.constructor = KeyFrameRule;
  KeyframesRule.prototype = Object.create(Rule.prototype);
  KeyframesRule.prototype.constructor = KeyframesRule;
  TypedRule.prototype = Object.create(Rule.prototype);
  TypedRule.prototype.constructor = TypedRule;
  TypedClassRule.prototype = Object.create(TypedRule.prototype);
  TypedClassRule.prototype.constructor = TypedClassRule;
  TypedRule$DisplayDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$DisplayDelegate.prototype.constructor = TypedRule$DisplayDelegate;
  TypedRule$PositionDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$PositionDelegate.prototype.constructor = TypedRule$PositionDelegate;
  TypedRule$RgbColorDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$RgbColorDelegate.prototype.constructor = TypedRule$RgbColorDelegate;
  TypedRule$IntDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$IntDelegate.prototype.constructor = TypedRule$IntDelegate;
  TypedRule$DimensionDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$DimensionDelegate.prototype.constructor = TypedRule$DimensionDelegate;
  TypedRule$FlexDirectionDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$FlexDirectionDelegate.prototype.constructor = TypedRule$FlexDirectionDelegate;
  TypedRule$AlignItemsDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$AlignItemsDelegate.prototype.constructor = TypedRule$AlignItemsDelegate;
  TypedRule$JustifyContentDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$JustifyContentDelegate.prototype.constructor = TypedRule$JustifyContentDelegate;
  TypedRule$FlexDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$FlexDelegate.prototype.constructor = TypedRule$FlexDelegate;
  TypedRule$FlexGrowDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$FlexGrowDelegate.prototype.constructor = TypedRule$FlexGrowDelegate;
  TypedRule$FlexShrinkDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$FlexShrinkDelegate.prototype.constructor = TypedRule$FlexShrinkDelegate;
  TypedRule$FlexBasisDelegate.prototype = Object.create(TypedRule$TypedPropertyDelegate.prototype);
  TypedRule$FlexBasisDelegate.prototype.constructor = TypedRule$FlexBasisDelegate;
  TypeRule.prototype = Object.create(Rule.prototype);
  TypeRule.prototype.constructor = TypeRule;
  function CompareTo() {
    CompareTo_instance = this;
  }
  CompareTo.prototype.nullSafe_oaftn8$ = function (obj1, obj2) {
    var tmp$;
    if (obj1 != null && obj2 != null) {
      if (Kotlin.isComparable(obj1) && Kotlin.isComparable(obj2)) {
        Kotlin.isComparable(tmp$ = obj1) ? tmp$ : Kotlin.throwCCE();
        return Kotlin.compareTo(obj1, obj2);
      }
       else {
        return Kotlin.compareTo(obj1.toString(), obj2.toString());
      }
    }
     else if (obj1 == null && obj2 != null) {
      return -1;
    }
     else {
      return 1;
    }
  };
  CompareTo.prototype.nullSafe_rkkr90$ = function (obj1, obj2) {
    if (obj1 != null && obj2 != null) {
      return Kotlin.compareTo(obj1, obj2);
    }
     else if (obj1 == null && obj2 != null) {
      return -1;
    }
     else {
      return 1;
    }
  };
  CompareTo.prototype.nullSafe_1g3ugi$ = function (obj1, obj2) {
    if (obj1 != null && obj2 != null) {
      return Kotlin.primitiveCompareTo(obj1, obj2);
    }
     else if (obj1 == null && obj2 != null) {
      return -1;
    }
     else {
      return 1;
    }
  };
  CompareTo.prototype.nullSafe_jma9l8$ = function (obj1, obj2) {
    if (obj1 != null && obj2 != null) {
      return Kotlin.primitiveCompareTo(obj1, obj2);
    }
     else if (obj1 == null && obj2 != null) {
      return -1;
    }
     else {
      return 1;
    }
  };
  CompareTo.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CompareTo',
    interfaces: []
  };
  var CompareTo_instance = null;
  function CompareTo_getInstance() {
    if (CompareTo_instance === null) {
      new CompareTo();
    }
    return CompareTo_instance;
  }
  function launch$ObjectLiteral() {
  }
  Object.defineProperty(launch$ObjectLiteral.prototype, 'context', {
    get: function () {
      return experimental_0.EmptyCoroutineContext;
    }
  });
  launch$ObjectLiteral.prototype.resume_11rb$ = function (value) {
  };
  launch$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (e) {
    console.error(toStacktrace(e));
  };
  launch$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Continuation]
  };
  function launch(block) {
    startCoroutine(block, new launch$ObjectLiteral());
  }
  function launch$ObjectLiteral_0(closure$element) {
    this.closure$element = closure$element;
  }
  Object.defineProperty(launch$ObjectLiteral_0.prototype, 'context', {
    get: function () {
      return experimental_0.EmptyCoroutineContext;
    }
  });
  launch$ObjectLiteral_0.prototype.resume_11rb$ = function (value) {
  };
  function launch$ObjectLiteral$resumeWithException$lambda$lambda($receiver) {
    $receiver.style.backgroundColor = RgbColor$Factory_getInstance().RED;
    $receiver.style.color = RgbColor$Factory_getInstance().WHITE;
    $receiver._style.fontFamily = 'monospace';
    $receiver.unaryPlus_pdl1vz$('Unexpected error while executing');
  }
  function launch$ObjectLiteral$resumeWithException$lambda(closure$preEl) {
    return function ($receiver) {
      $receiver._style.border = '1px solid red';
      $receiver._style.margin = '0.5em';
      div($receiver, launch$ObjectLiteral$resumeWithException$lambda$lambda);
      $receiver.appendChild_sr04hg$(closure$preEl);
    };
  }
  launch$ObjectLiteral_0.prototype.resumeWithException_tcv7n7$ = function (e) {
    var stacktrace = toStacktrace(e);
    console.error(stacktrace);
    var preEl = new Pre();
    preEl._style.whiteSpace = 'pre-wrap';
    preEl._style.margin = '0.5em';
    preEl.appendChild_sr04hg$(new Text_0(stacktrace));
    var errorContainerElement = with_0(new Div(), launch$ObjectLiteral$resumeWithException$lambda(preEl));
    this.closure$element.appendChild_sr04hg$(errorContainerElement);
  };
  launch$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Continuation]
  };
  function launch_0(element, block) {
    startCoroutine(block, new launch$ObjectLiteral_0(element));
  }
  function InternalServerErrorException(message) {
    UnexpectedStatusException.call(this, 'Internal Server error: ' + message);
    this.name = 'InternalServerErrorException';
  }
  InternalServerErrorException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InternalServerErrorException',
    interfaces: [UnexpectedStatusException]
  };
  function NotFoundException(message) {
    UnexpectedStatusException.call(this, 'Not fond: ' + message);
    this.name = 'NotFoundException';
  }
  NotFoundException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NotFoundException',
    interfaces: [UnexpectedStatusException]
  };
  function UnexpectedStatusException(message) {
    RuntimeException.call(this, message);
    this.name = 'UnexpectedStatusException';
  }
  UnexpectedStatusException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UnexpectedStatusException',
    interfaces: [RuntimeException]
  };
  function await$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resume_11rb$(it);
    };
  }
  function await$lambda$lambda_0(closure$cont) {
    return function (it) {
      closure$cont.resumeWithException_tcv7n7$(it);
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
    };
  }
  function await_0($receiver, continuation) {
    return Kotlin.kotlin.coroutines.experimental.suspendCoroutine$f(await$lambda($receiver))(continuation.facade);
  }
  function send$lambda$lambda(closure$request, closure$cont) {
    return function (event) {
      var readyState = closure$request.readyState;
      if (readyState === XMLHttpRequest.DONE) {
        if (closure$request.status === Kotlin.toShort(200)) {
          closure$cont.resume_11rb$(closure$request.responseText);
        }
         else if (closure$request.status === Kotlin.toShort(404)) {
          closure$cont.resumeWithException_tcv7n7$(new NotFoundException(closure$request.responseText));
        }
         else if (closure$request.status === Kotlin.toShort(500)) {
          closure$cont.resumeWithException_tcv7n7$(new InternalServerErrorException(closure$request.responseText));
        }
         else {
          closure$cont.resumeWithException_tcv7n7$(new UnexpectedStatusException(closure$request.responseText));
        }
      }
    };
  }
  function send$lambda(closure$request, closure$body) {
    return function (cont) {
      closure$request.onreadystatechange = send$lambda$lambda(closure$request, cont);
      closure$request.send(closure$body);
    };
  }
  function send(request, body, continuation) {
    if (body === void 0)
      body = null;
    var block = send$lambda(request, body);
    return Kotlin.kotlin.coroutines.experimental.suspendCoroutine$f(block)(continuation.facade);
  }
  function OS(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OS_initFields() {
    OS_initFields = function () {
    };
    OS$WINDOWS_instance = new OS('WINDOWS', 0);
    OS$MAC_instance = new OS('MAC', 1);
    OS$LINUX_instance = new OS('LINUX', 2);
    OS$UNIX_instance = new OS('UNIX', 3);
    OS$UNKNOWN_instance = new OS('UNKNOWN', 4);
  }
  var OS$WINDOWS_instance;
  function OS$WINDOWS_getInstance() {
    OS_initFields();
    return OS$WINDOWS_instance;
  }
  var OS$MAC_instance;
  function OS$MAC_getInstance() {
    OS_initFields();
    return OS$MAC_instance;
  }
  var OS$LINUX_instance;
  function OS$LINUX_getInstance() {
    OS_initFields();
    return OS$LINUX_instance;
  }
  var OS$UNIX_instance;
  function OS$UNIX_getInstance() {
    OS_initFields();
    return OS$UNIX_instance;
  }
  var OS$UNKNOWN_instance;
  function OS$UNKNOWN_getInstance() {
    OS_initFields();
    return OS$UNKNOWN_instance;
  }
  OS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OS',
    interfaces: [Enum]
  };
  function OS$values() {
    return [OS$WINDOWS_getInstance(), OS$MAC_getInstance(), OS$LINUX_getInstance(), OS$UNIX_getInstance(), OS$UNKNOWN_getInstance()];
  }
  OS.values = OS$values;
  function OS$valueOf(name) {
    switch (name) {
      case 'WINDOWS':
        return OS$WINDOWS_getInstance();
      case 'MAC':
        return OS$MAC_getInstance();
      case 'LINUX':
        return OS$LINUX_getInstance();
      case 'UNIX':
        return OS$UNIX_getInstance();
      case 'UNKNOWN':
        return OS$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant fg.base.OS.' + name);
    }
  }
  OS.valueOf_61zpoe$ = OS$valueOf;
  function OSDetector() {
    OSDetector_instance = this;
    this.detected$delegate = lazy(OSDetector$detected$lambda(this));
  }
  Object.defineProperty(OSDetector.prototype, 'detected', {
    get: function () {
      var $receiver = this.detected$delegate;
      new Kotlin.PropertyMetadata('detected');
      return $receiver.value;
    }
  });
  OSDetector.prototype.detect_0 = function () {
    var navigator = window.navigator;
    if (contains(navigator.appVersion, 'Win')) {
      return OS$WINDOWS_getInstance();
    }
     else if (contains(navigator.appVersion, 'Mac')) {
      return OS$MAC_getInstance();
    }
     else if (contains(navigator.appVersion, 'X11')) {
      return OS$UNIX_getInstance();
    }
     else if (contains(navigator.appVersion, 'Linux')) {
      return OS$LINUX_getInstance();
    }
     else {
      return OS$UNKNOWN_getInstance();
    }
  };
  function OSDetector$detected$lambda(this$OSDetector) {
    return function () {
      return this$OSDetector.detect_0();
    };
  }
  OSDetector.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'OSDetector',
    interfaces: []
  };
  var OSDetector_instance = null;
  function OSDetector_getInstance() {
    if (OSDetector_instance === null) {
      new OSDetector();
    }
    return OSDetector_instance;
  }
  function Path(absolute, trailingSlash, elements_0) {
    Path$Factory_getInstance();
    this.absolute = absolute;
    this.trailingSlash = trailingSlash;
    this.elements = elements_0;
    this.asString_v1kqyt$_0 = null;
    var string = joinToString(this.elements, '/', void 0, void 0, void 0, void 0, Path_init$lambda);
    if (this.absolute) {
      string = '/' + string;
    }
    if (this.trailingSlash) {
      string += '/';
    }
    this.asString_v1kqyt$_0 = string;
  }
  Path.prototype.append_usdzdh$ = function (other) {
    var elements_0 = toMutableList(this.elements);
    elements_0.addAll_brywnq$(other.elements);
    return new Path(this.absolute, other.trailingSlash, elements_0);
  };
  Path.prototype.subPathAfter_usdzdh$ = function (other) {
    var tmp$;
    var fromIndex = 0;
    tmp$ = get_lastIndex(this.elements);
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      if (i_0 >= other.size) {
        fromIndex = i_0;
        break;
      }
      if (!this.elements.get_za3lpa$(i_0).equals(other.getElement_za3lpa$(i_0))) {
        fromIndex = i_0 + 1 | 0;
      }
    }
    var elementsAfter = this.elements.subList_vux9f0$(fromIndex, this.elements.size);
    return new Path(this.absolute, this.trailingSlash, elementsAfter);
  };
  Object.defineProperty(Path.prototype, 'size', {
    get: function () {
      return this.elements.size;
    }
  });
  Object.defineProperty(Path.prototype, 'hasParent', {
    get: function () {
      return this.elements.size > 1;
    }
  });
  Object.defineProperty(Path.prototype, 'parent', {
    get: function () {
      if (this.elements.size === 1) {
        throw new IllegalArgumentException('Path as not parent');
      }
      return new Path(this.absolute, this.trailingSlash, this.elements.subList_vux9f0$(0, get_lastIndex(this.elements) - 1 | 0));
    }
  });
  Object.defineProperty(Path.prototype, 'parents', {
    get: function () {
      var parents = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var parent = this.hasParent ? this.parent : null;
      while (parent != null) {
        parents.add_11rb$(parent);
        parent = parent.hasParent ? parent.parent : null;
      }
      return reversed(parents);
    }
  });
  Path.prototype.getElement_za3lpa$ = function (index) {
    return this.elements.get_za3lpa$(index);
  };
  Path.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.compareTo(this.asString_v1kqyt$_0, other.asString_v1kqyt$_0);
  };
  Path.prototype.toString = function () {
    return this.asString_v1kqyt$_0;
  };
  Path.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Path))
      return false;
    if (this.absolute !== other.absolute)
      return false;
    if (this.trailingSlash !== other.trailingSlash)
      return false;
    if (!Kotlin.equals(this.elements, other.elements))
      return false;
    return true;
  };
  Path.prototype.hashCode = function () {
    var result = Kotlin.hashCode(this.absolute);
    result = result + ((31 * result | 0) + Kotlin.hashCode(this.trailingSlash)) | 0;
    result = result + ((31 * result | 0) + Kotlin.hashCode(this.elements)) | 0;
    return result;
  };
  function Path$Factory() {
    Path$Factory_instance = this;
    this.ROOT = new Path(true, false, Kotlin.kotlin.collections.emptyList_287e2$());
  }
  Path$Factory.prototype.from_61zpoe$ = function (string) {
    var tmp$;
    var absolute = startsWith(string, '/');
    var trailingSlash = endsWith(string, '/');
    var elementsAsString = split(string, ['/']);
    var elements_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    tmp$ = elementsAsString.iterator();
    while (tmp$.hasNext()) {
      var elementAsString = tmp$.next();
      if (!Kotlin.kotlin.text.isBlank_gw00vp$(elementAsString)) {
        elements_0.add_11rb$(new Path$Element(elementAsString));
      }
    }
    return new Path(absolute, trailingSlash, elements_0);
  };
  Path$Factory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Factory',
    interfaces: []
  };
  var Path$Factory_instance = null;
  function Path$Factory_getInstance() {
    if (Path$Factory_instance === null) {
      new Path$Factory();
    }
    return Path$Factory_instance;
  }
  function Path$Element(value) {
    this.value = value;
    if (isBlank(this.value)) {
      throw new IllegalArgumentException('An Element cannot be blank');
    }
  }
  Path$Element.prototype.matches_wgf8sj$ = function (other) {
    return equals(other.value, other.value, true);
  };
  Path$Element.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Path$Element))
      return false;
    if (!Kotlin.equals(this.value, other.value))
      return false;
    return true;
  };
  Path$Element.prototype.hashCode = function () {
    return Kotlin.hashCode(this.value);
  };
  Path$Element.prototype.toString = function () {
    return this.value;
  };
  Path$Element.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Element',
    interfaces: []
  };
  function Path_init$lambda(it) {
    return it.toString();
  }
  Path.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Path',
    interfaces: [Comparable]
  };
  function toStacktrace($receiver) {
    var tmp$;
    var stackTrace = '';
    var thisError = $receiver;
    if (thisError.stack != null) {
      stackTrace += thisError.stack;
      if ($receiver.cause != null) {
        stackTrace += '\nCaused by: ' + toStacktrace((tmp$ = $receiver.cause) != null ? tmp$ : Kotlin.throwNPE());
        return stackTrace;
      }
    }
    return stackTrace;
  }
  function URL(scheme, host, port, path, query, fragment) {
    URL$Factory_getInstance();
    if (path === void 0)
      path = Path$Factory_getInstance().ROOT;
    if (query === void 0)
      query = URL$Query$Factory_getInstance().NONE;
    if (fragment === void 0)
      fragment = '';
    this.scheme = scheme;
    this.host = host;
    this.port = port;
    this.path = path;
    this.query = query;
    this.fragment = fragment;
  }
  Object.defineProperty(URL.prototype, 'parents', {
    get: function () {
      var parents = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var parent = this.parent;
      while (parent != null) {
        parents.add_11rb$(parent);
        parent = parent.parent;
      }
      return reversed(parents);
    }
  });
  Object.defineProperty(URL.prototype, 'parent', {
    get: function () {
      if (!this.hasParent) {
        return null;
      }
      var parentPath = this.path.parent;
      return new URL(this.scheme, this.host, this.port, parentPath, this.query, this.fragment);
    }
  });
  Object.defineProperty(URL.prototype, 'hasParent', {
    get: function () {
      return this.path.hasParent;
    }
  });
  URL.prototype.append_usdzdh$ = function (path) {
    return new URL(this.scheme, this.host, this.port, this.path.append_usdzdh$(path), this.query, this.fragment);
  };
  URL.prototype.replaceParam_puj7f4$ = function (name, value) {
    var mutableMap = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    if (this.query != null) {
      mutableMap.putAll_a2k3zr$(this.query.map);
    }
    mutableMap.put_xwzc9p$(name, value);
    return new URL(this.scheme, this.host, this.port, this.path, new URL$Query(mutableMap), this.fragment);
  };
  URL.prototype.compareTo_11rb$ = function (other) {
    var compare;
    compare = this.path.compareTo_11rb$(other.path);
    if (compare !== 0) {
      return compare;
    }
    compare = Kotlin.compareTo(this.host, other.host);
    if (compare !== 0) {
      return compare;
    }
    compare = Kotlin.compareTo(this.port, other.port);
    if (compare !== 0) {
      return compare;
    }
    compare = CompareTo_getInstance().nullSafe_oaftn8$(this.query, other.query);
    if (compare !== 0) {
      return compare;
    }
    compare = Kotlin.compareTo(this.fragment, other.fragment);
    if (compare !== 0) {
      return compare;
    }
    compare = Kotlin.compareTo(this.scheme, other.scheme);
    if (compare !== 0) {
      return compare;
    }
    return compare;
  };
  URL.prototype.toString = function () {
    var str = '';
    var $receiver = this.scheme;
    var tmp$ = !Kotlin.kotlin.text.isBlank_gw00vp$($receiver);
    if (tmp$) {
      var $receiver_0 = this.host;
      tmp$ = !Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0);
    }
    if (tmp$) {
      str = this.scheme + '://' + this.host;
    }
    var $receiver_1 = this.port;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_1))
      str += ':' + this.port;
    str += this.path.toString();
    if (this.query != null)
      str += this.query;
    var $receiver_2 = this.fragment;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_2))
      str += '#' + this.fragment;
    return str;
  };
  function URL$Factory() {
    URL$Factory_instance = this;
  }
  URL$Factory.prototype.from_61zpoe$ = function (asString) {
    var remaining = asString;
    var scheme = substringBefore(remaining, '://', '');
    remaining = substringAfter(remaining, '://');
    var fragment = substringAfter(remaining, '#', '');
    remaining = substringBefore(remaining, '#');
    var query = substringAfter(remaining, '?', '');
    remaining = substringBefore(remaining, '?');
    var path = '/' + substringAfter(remaining, '/', '');
    remaining = substringBefore(remaining, '/');
    var port = substringAfter(remaining, ':', '');
    remaining = substringBefore(remaining, ':');
    var host = remaining;
    return new URL(scheme, host, port, Path$Factory_getInstance().from_61zpoe$(path), URL$Query$Factory_getInstance().from_61zpoe$(query), fragment);
  };
  URL$Factory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Factory',
    interfaces: []
  };
  var URL$Factory_instance = null;
  function URL$Factory_getInstance() {
    if (URL$Factory_instance === null) {
      new URL$Factory();
    }
    return URL$Factory_instance;
  }
  function URL$Query(map) {
    URL$Query$Factory_getInstance();
    this.map = map;
  }
  URL$Query.prototype.toString = function () {
    var tmp$_0;
    if (this.map.isEmpty()) {
      return '';
    }
    var s = '?';
    tmp$_0 = this.map.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var key = tmp$.key;
      var value = tmp$.value;
      if (s.length > 1) {
        s += '&';
      }
      s += key + '=' + value;
    }
    return s;
  };
  function URL$Query$Factory() {
    URL$Query$Factory_instance = this;
    this.NONE = new URL$Query(Kotlin.kotlin.collections.emptyMap_q3lmfv$());
  }
  URL$Query$Factory.prototype.from_9ih0sy$ = function (pairs) {
    return new URL$Query(linkedMapOf(pairs.slice()));
  };
  URL$Query$Factory.prototype.from_61zpoe$ = function (string) {
    var tmp$;
    var withoutQuestion = startsWith(string, '?') ? substringAfter(string, '?') : string;
    if (string.length === 0) {
      return this.NONE;
    }
    var splitted = split(withoutQuestion, ['&']);
    var map = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    tmp$ = get_lastIndex(splitted);
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      var name = substringBefore(splitted.get_za3lpa$(i_0), '=');
      var value = substringAfter(splitted.get_za3lpa$(i_0), '=');
      if (!Kotlin.kotlin.text.isBlank_gw00vp$(name)) {
        map.put_xwzc9p$(name, value);
      }
    }
    return new URL$Query(map);
  };
  URL$Query$Factory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Factory',
    interfaces: []
  };
  var URL$Query$Factory_instance = null;
  function URL$Query$Factory_getInstance() {
    if (URL$Query$Factory_instance === null) {
      new URL$Query$Factory();
    }
    return URL$Query$Factory_instance;
  }
  URL$Query.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Query',
    interfaces: []
  };
  URL$Query.prototype.component1 = function () {
    return this.map;
  };
  URL$Query.prototype.copy_y0zsll$ = function (map) {
    return new URL$Query(map === void 0 ? this.map : map);
  };
  URL$Query.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  URL$Query.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  URL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'URL',
    interfaces: [Comparable]
  };
  var HEX_CHARS;
  function toHexString($receiver) {
    var char2 = Kotlin.unboxChar(HEX_CHARS[$receiver & 15]);
    var char1 = Kotlin.unboxChar(HEX_CHARS[$receiver >> 4 & 15]);
    return String.fromCharCode(Kotlin.unboxChar(char1)) + String.fromCharCode(Kotlin.unboxChar(char2));
  }
  function debounce0$lambda$lambda(closure$timeout, closure$func) {
    return function () {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = -1;
      return closure$func();
    };
  }
  function debounce0$lambda(closure$timeout, closure$func, closure$delay) {
    return function () {
      if (closure$timeout.v === -1) {
        closure$timeout.v = window.setTimeout(debounce0$lambda$lambda(closure$timeout, closure$func), closure$delay);
      }
    };
  }
  function debounce0(func, delay) {
    var timeout = {v: -1};
    return debounce0$lambda(timeout, func, delay);
  }
  function debounce1$lambda$lambda(closure$timeout, closure$func, closure$argument1) {
    return function () {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = -1;
      return closure$func(closure$argument1);
    };
  }
  function debounce1$lambda(closure$timeout, closure$func, closure$delay) {
    return function (it) {
      var argument1 = arguments[0];
      if (closure$timeout.v === -1) {
        closure$timeout.v = window.setTimeout(debounce1$lambda$lambda(closure$timeout, closure$func, argument1), closure$delay);
      }
    };
  }
  function debounce1(func, delay) {
    var timeout = {v: -1};
    return debounce1$lambda(timeout, func, delay);
  }
  function bounceUntil$lambda$lambda(closure$timeout, closure$func, closure$argument1) {
    return function () {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = -1;
      return closure$func(closure$argument1);
    };
  }
  function bounceUntil$lambda(closure$timeout, closure$func, closure$delay) {
    return function (it) {
      var argument1 = arguments[0];
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = window.setTimeout(bounceUntil$lambda$lambda(closure$timeout, closure$func, argument1), closure$delay);
    };
  }
  function bounceUntil(func, delay) {
    var timeout = {v: -1};
    return bounceUntil$lambda(timeout, func, delay);
  }
  function toCurrency($receiver, currency, side, decimals) {
    if (side === void 0)
      side = Side$LEFT_getInstance();
    if (decimals === void 0)
      decimals = 2;
    var tmp$, tmp$_0;
    tmp$ = side;
    if (Kotlin.equals(tmp$, Side$LEFT_getInstance()))
      tmp$_0 = currency + ' ' + padEnd($receiver.toString(), decimals, 48);
    else if (Kotlin.equals(tmp$, Side$RIGHT_getInstance()))
      tmp$_0 = padEnd($receiver.toString(), decimals, 48) + ' ' + currency;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  }
  function Side(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Side_initFields() {
    Side_initFields = function () {
    };
    Side$LEFT_instance = new Side('LEFT', 0);
    Side$RIGHT_instance = new Side('RIGHT', 1);
  }
  var Side$LEFT_instance;
  function Side$LEFT_getInstance() {
    Side_initFields();
    return Side$LEFT_instance;
  }
  var Side$RIGHT_instance;
  function Side$RIGHT_getInstance() {
    Side_initFields();
    return Side$RIGHT_instance;
  }
  Side.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Side',
    interfaces: [Enum]
  };
  function Side$values() {
    return [Side$LEFT_getInstance(), Side$RIGHT_getInstance()];
  }
  Side.values = Side$values;
  function Side$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return Side$LEFT_getInstance();
      case 'RIGHT':
        return Side$RIGHT_getInstance();
      default:Kotlin.throwISE('No enum constant fg.base.Side.' + name);
    }
  }
  Side.valueOf_61zpoe$ = Side$valueOf;
  var BODY;
  function Body() {
    Element.call(this, void 0, document.body);
    this.mounted_vyrc26$_0 = true;
  }
  Object.defineProperty(Body.prototype, 'mounted', {
    get: function () {
      return this.mounted_vyrc26$_0;
    }
  });
  Body.prototype.init_0 = function () {
    this.render();
    this.renderChildren_w5cupa$_0();
    this.mountChildren_w5cupa$_0();
  };
  Body.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Body',
    interfaces: [Element]
  };
  function toDimension($receiver) {
    var tmp$, tmp$_0;
    if ($receiver == null) {
      return null;
    }
    tmp$ = DimensionType$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var type = tmp$[tmp$_0];
      if (endsWith($receiver, type.postfix)) {
        return type.newFn(substringBeforeLast($receiver, type.postfix));
      }
    }
    throw new IllegalArgumentException('String [' + Kotlin.toString($receiver) + '] cannot be converted to any Dimension');
  }
  function Dimension() {
  }
  Dimension.prototype.toHtml = function () {
    return this.value + this.type.postfix;
  };
  Dimension.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Dimension',
    interfaces: []
  };
  function DimensionType(name, ordinal, postfix, newFn) {
    Enum.call(this);
    this.postfix = postfix;
    this.newFn = newFn;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DimensionType_initFields() {
    DimensionType_initFields = function () {
    };
    DimensionType$percent_instance = new DimensionType('percent', 0, '%', DimensionType$DimensionType$percent_init$lambda);
    DimensionType$pixels_instance = new DimensionType('pixels', 1, 'px', DimensionType$DimensionType$pixels_init$lambda);
    DimensionType$mm_instance = new DimensionType('mm', 2, 'mm', DimensionType$DimensionType$mm_init$lambda);
    DimensionType$cm_instance = new DimensionType('cm', 3, 'cm', DimensionType$DimensionType$cm_init$lambda);
    DimensionType$inch_instance = new DimensionType('inch', 4, 'in', DimensionType$DimensionType$inch_init$lambda);
    DimensionType$pt_instance = new DimensionType('pt', 5, 'pt', DimensionType$DimensionType$pt_init$lambda);
    DimensionType$pc_instance = new DimensionType('pc', 6, 'pc', DimensionType$DimensionType$pc_init$lambda);
    DimensionType$em_instance = new DimensionType('em', 7, 'em', DimensionType$DimensionType$em_init$lambda);
    DimensionType$rem_instance = new DimensionType('rem', 8, 'rem', DimensionType$DimensionType$rem_init$lambda);
    DimensionType$vh_instance = new DimensionType('vh', 9, 'vh', DimensionType$DimensionType$vh_init$lambda);
    DimensionType$vw_instance = new DimensionType('vw', 10, 'vw', DimensionType$DimensionType$vw_init$lambda);
    DimensionType$vmin_instance = new DimensionType('vmin', 11, 'vmin', DimensionType$DimensionType$vmin_init$lambda);
    DimensionType$vmax_instance = new DimensionType('vmax', 12, 'vmax', DimensionType$DimensionType$vmax_init$lambda);
  }
  function DimensionType$DimensionType$percent_init$lambda(it) {
    return new Percent(toDouble(it));
  }
  var DimensionType$percent_instance;
  function DimensionType$percent_getInstance() {
    DimensionType_initFields();
    return DimensionType$percent_instance;
  }
  function DimensionType$DimensionType$pixels_init$lambda(it) {
    return new Pixels(toDouble(it));
  }
  var DimensionType$pixels_instance;
  function DimensionType$pixels_getInstance() {
    DimensionType_initFields();
    return DimensionType$pixels_instance;
  }
  function DimensionType$DimensionType$mm_init$lambda(it) {
    return new Mm(toInt(it));
  }
  var DimensionType$mm_instance;
  function DimensionType$mm_getInstance() {
    DimensionType_initFields();
    return DimensionType$mm_instance;
  }
  function DimensionType$DimensionType$cm_init$lambda(it) {
    return new Cm(toDouble(it));
  }
  var DimensionType$cm_instance;
  function DimensionType$cm_getInstance() {
    DimensionType_initFields();
    return DimensionType$cm_instance;
  }
  function DimensionType$DimensionType$inch_init$lambda(it) {
    return new In(toDouble(it));
  }
  var DimensionType$inch_instance;
  function DimensionType$inch_getInstance() {
    DimensionType_initFields();
    return DimensionType$inch_instance;
  }
  function DimensionType$DimensionType$pt_init$lambda(it) {
    return new Pt(toInt(it));
  }
  var DimensionType$pt_instance;
  function DimensionType$pt_getInstance() {
    DimensionType_initFields();
    return DimensionType$pt_instance;
  }
  function DimensionType$DimensionType$pc_init$lambda(it) {
    return new Pc(toInt(it));
  }
  var DimensionType$pc_instance;
  function DimensionType$pc_getInstance() {
    DimensionType_initFields();
    return DimensionType$pc_instance;
  }
  function DimensionType$DimensionType$em_init$lambda(it) {
    return new Em(toDouble(it));
  }
  var DimensionType$em_instance;
  function DimensionType$em_getInstance() {
    DimensionType_initFields();
    return DimensionType$em_instance;
  }
  function DimensionType$DimensionType$rem_init$lambda(it) {
    return new Rem(toDouble(it));
  }
  var DimensionType$rem_instance;
  function DimensionType$rem_getInstance() {
    DimensionType_initFields();
    return DimensionType$rem_instance;
  }
  function DimensionType$DimensionType$vh_init$lambda(it) {
    return new Vh(toInt(it));
  }
  var DimensionType$vh_instance;
  function DimensionType$vh_getInstance() {
    DimensionType_initFields();
    return DimensionType$vh_instance;
  }
  function DimensionType$DimensionType$vw_init$lambda(it) {
    return new Vw(toInt(it));
  }
  var DimensionType$vw_instance;
  function DimensionType$vw_getInstance() {
    DimensionType_initFields();
    return DimensionType$vw_instance;
  }
  function DimensionType$DimensionType$vmin_init$lambda(it) {
    return new VMin(toInt(it));
  }
  var DimensionType$vmin_instance;
  function DimensionType$vmin_getInstance() {
    DimensionType_initFields();
    return DimensionType$vmin_instance;
  }
  function DimensionType$DimensionType$vmax_init$lambda(it) {
    return new VMax(toInt(it));
  }
  var DimensionType$vmax_instance;
  function DimensionType$vmax_getInstance() {
    DimensionType_initFields();
    return DimensionType$vmax_instance;
  }
  DimensionType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DimensionType',
    interfaces: [Enum]
  };
  function DimensionType$values() {
    return [DimensionType$percent_getInstance(), DimensionType$pixels_getInstance(), DimensionType$mm_getInstance(), DimensionType$cm_getInstance(), DimensionType$inch_getInstance(), DimensionType$pt_getInstance(), DimensionType$pc_getInstance(), DimensionType$em_getInstance(), DimensionType$rem_getInstance(), DimensionType$vh_getInstance(), DimensionType$vw_getInstance(), DimensionType$vmin_getInstance(), DimensionType$vmax_getInstance()];
  }
  DimensionType.values = DimensionType$values;
  function DimensionType$valueOf(name) {
    switch (name) {
      case 'percent':
        return DimensionType$percent_getInstance();
      case 'pixels':
        return DimensionType$pixels_getInstance();
      case 'mm':
        return DimensionType$mm_getInstance();
      case 'cm':
        return DimensionType$cm_getInstance();
      case 'inch':
        return DimensionType$inch_getInstance();
      case 'pt':
        return DimensionType$pt_getInstance();
      case 'pc':
        return DimensionType$pc_getInstance();
      case 'em':
        return DimensionType$em_getInstance();
      case 'rem':
        return DimensionType$rem_getInstance();
      case 'vh':
        return DimensionType$vh_getInstance();
      case 'vw':
        return DimensionType$vw_getInstance();
      case 'vmin':
        return DimensionType$vmin_getInstance();
      case 'vmax':
        return DimensionType$vmax_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.DimensionType.' + name);
    }
  }
  DimensionType.valueOf_61zpoe$ = DimensionType$valueOf;
  function Percent(value) {
    this.value_nw65zz$_0 = value;
    this.type_nw65zz$_0 = DimensionType$percent_getInstance();
  }
  Object.defineProperty(Percent.prototype, 'value', {
    get: function () {
      return this.value_nw65zz$_0;
    }
  });
  Object.defineProperty(Percent.prototype, 'type', {
    get: function () {
      return this.type_nw65zz$_0;
    }
  });
  Percent.prototype.toString = function () {
    return this.toHtml();
  };
  Percent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Percent',
    interfaces: [Dimension]
  };
  Percent.prototype.component1 = function () {
    return this.value;
  };
  Percent.prototype.copy_14dthe$ = function (value) {
    return new Percent(value === void 0 ? this.value : value);
  };
  Percent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Percent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_pct($receiver) {
    return new Percent($receiver);
  }
  function get_pct_0($receiver) {
    return new Percent($receiver);
  }
  function Pixels(value) {
    this.value_ndnjc3$_0 = value;
    this.type_ndnjc3$_0 = DimensionType$pixels_getInstance();
  }
  Object.defineProperty(Pixels.prototype, 'value', {
    get: function () {
      return this.value_ndnjc3$_0;
    }
  });
  Object.defineProperty(Pixels.prototype, 'type', {
    get: function () {
      return this.type_ndnjc3$_0;
    }
  });
  Pixels.prototype.toString = function () {
    return this.toHtml();
  };
  Pixels.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pixels',
    interfaces: [Dimension]
  };
  Pixels.prototype.component1 = function () {
    return this.value;
  };
  Pixels.prototype.copy_14dthe$ = function (value) {
    return new Pixels(value === void 0 ? this.value : value);
  };
  Pixels.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Pixels.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_px($receiver) {
    return new Pixels($receiver);
  }
  function get_px_0($receiver) {
    return new Pixels($receiver);
  }
  function get_px_1($receiver) {
    return new Pixels(toDouble(substringBefore($receiver, 'px')));
  }
  function Mm(value) {
    this.value_suy6ts$_0 = value;
    this.type_suy6ts$_0 = DimensionType$mm_getInstance();
  }
  Object.defineProperty(Mm.prototype, 'value', {
    get: function () {
      return this.value_suy6ts$_0;
    }
  });
  Object.defineProperty(Mm.prototype, 'type', {
    get: function () {
      return this.type_suy6ts$_0;
    }
  });
  Mm.prototype.toString = function () {
    return this.toHtml();
  };
  Mm.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Mm',
    interfaces: [Dimension]
  };
  Mm.prototype.component1 = function () {
    return this.value;
  };
  Mm.prototype.copy_za3lpa$ = function (value) {
    return new Mm(value === void 0 ? this.value : value);
  };
  Mm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Mm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_mm($receiver) {
    return new Mm($receiver);
  }
  function Cm(value) {
    this.value_suxzeu$_0 = value;
    this.type_suxzeu$_0 = DimensionType$cm_getInstance();
  }
  Object.defineProperty(Cm.prototype, 'value', {
    get: function () {
      return this.value_suxzeu$_0;
    }
  });
  Object.defineProperty(Cm.prototype, 'type', {
    get: function () {
      return this.type_suxzeu$_0;
    }
  });
  Cm.prototype.toString = function () {
    return this.toHtml();
  };
  Cm.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Cm',
    interfaces: [Dimension]
  };
  Cm.prototype.component1 = function () {
    return this.value;
  };
  Cm.prototype.copy_14dthe$ = function (value) {
    return new Cm(value === void 0 ? this.value : value);
  };
  Cm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Cm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_cm($receiver) {
    return new Cm($receiver);
  }
  function get_cm_0($receiver) {
    return new Cm($receiver);
  }
  function In(value) {
    this.value_suy3vv$_0 = value;
    this.type_suy3vv$_0 = DimensionType$inch_getInstance();
  }
  Object.defineProperty(In.prototype, 'value', {
    get: function () {
      return this.value_suy3vv$_0;
    }
  });
  Object.defineProperty(In.prototype, 'type', {
    get: function () {
      return this.type_suy3vv$_0;
    }
  });
  In.prototype.toString = function () {
    return this.toHtml();
  };
  In.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'In',
    interfaces: [Dimension]
  };
  In.prototype.component1 = function () {
    return this.value;
  };
  In.prototype.copy_14dthe$ = function (value) {
    return new In(value === void 0 ? this.value : value);
  };
  In.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  In.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function inch($receiver) {
    return new In($receiver);
  }
  function inch_0($receiver) {
    return new In($receiver);
  }
  function Pt(value) {
    this.value_suy97w$_0 = value;
    this.type_suy97w$_0 = DimensionType$pt_getInstance();
  }
  Object.defineProperty(Pt.prototype, 'value', {
    get: function () {
      return this.value_suy97w$_0;
    }
  });
  Object.defineProperty(Pt.prototype, 'type', {
    get: function () {
      return this.type_suy97w$_0;
    }
  });
  Pt.prototype.toString = function () {
    return this.toHtml();
  };
  Pt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pt',
    interfaces: [Dimension]
  };
  Pt.prototype.component1 = function () {
    return this.value;
  };
  Pt.prototype.copy_za3lpa$ = function (value) {
    return new Pt(value === void 0 ? this.value : value);
  };
  Pt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Pt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_pt($receiver) {
    return new Pt($receiver);
  }
  function Pc(value) {
    this.value_suy8t9$_0 = value;
    this.type_suy8t9$_0 = DimensionType$pc_getInstance();
  }
  Object.defineProperty(Pc.prototype, 'value', {
    get: function () {
      return this.value_suy8t9$_0;
    }
  });
  Object.defineProperty(Pc.prototype, 'type', {
    get: function () {
      return this.type_suy8t9$_0;
    }
  });
  Pc.prototype.toString = function () {
    return this.toHtml();
  };
  Pc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pc',
    interfaces: [Dimension]
  };
  Pc.prototype.component1 = function () {
    return this.value;
  };
  Pc.prototype.copy_za3lpa$ = function (value) {
    return new Pc(value === void 0 ? this.value : value);
  };
  Pc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Pc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_pc($receiver) {
    return new Pc($receiver);
  }
  function Em(value) {
    this.value_suy0w8$_0 = value;
    this.type_suy0w8$_0 = DimensionType$em_getInstance();
  }
  Object.defineProperty(Em.prototype, 'value', {
    get: function () {
      return this.value_suy0w8$_0;
    }
  });
  Object.defineProperty(Em.prototype, 'type', {
    get: function () {
      return this.type_suy0w8$_0;
    }
  });
  Em.prototype.toString = function () {
    return this.toHtml();
  };
  Em.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Em',
    interfaces: [Dimension]
  };
  Em.prototype.component1 = function () {
    return this.value;
  };
  Em.prototype.copy_14dthe$ = function (value) {
    return new Em(value === void 0 ? this.value : value);
  };
  Em.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Em.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_em($receiver) {
    return new Em($receiver);
  }
  function get_em_0($receiver) {
    return new Em($receiver);
  }
  function Rem(value) {
    this.value_sqxrrq$_0 = value;
    this.type_sqxrrq$_0 = DimensionType$rem_getInstance();
  }
  Object.defineProperty(Rem.prototype, 'value', {
    get: function () {
      return this.value_sqxrrq$_0;
    }
  });
  Object.defineProperty(Rem.prototype, 'type', {
    get: function () {
      return this.type_sqxrrq$_0;
    }
  });
  Rem.prototype.toString = function () {
    return this.toHtml();
  };
  Rem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Rem',
    interfaces: [Dimension]
  };
  Rem.prototype.component1 = function () {
    return this.value;
  };
  Rem.prototype.copy_14dthe$ = function (value) {
    return new Rem(value === void 0 ? this.value : value);
  };
  Rem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Rem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_rem($receiver) {
    return new Percent($receiver);
  }
  function get_rem_0($receiver) {
    return new Percent($receiver);
  }
  function Vh(value) {
    this.value_suyddq$_0 = value;
    this.type_suyddq$_0 = DimensionType$vh_getInstance();
  }
  Object.defineProperty(Vh.prototype, 'value', {
    get: function () {
      return this.value_suyddq$_0;
    }
  });
  Object.defineProperty(Vh.prototype, 'type', {
    get: function () {
      return this.type_suyddq$_0;
    }
  });
  Vh.prototype.toString = function () {
    return this.toHtml();
  };
  Vh.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vh',
    interfaces: [Dimension]
  };
  Vh.prototype.component1 = function () {
    return this.value;
  };
  Vh.prototype.copy_za3lpa$ = function (value) {
    return new Vh(value === void 0 ? this.value : value);
  };
  Vh.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Vh.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_vh($receiver) {
    return new Vh($receiver);
  }
  function Vw(value) {
    this.value_suydqn$_0 = value;
    this.type_suydqn$_0 = DimensionType$vw_getInstance();
  }
  Object.defineProperty(Vw.prototype, 'value', {
    get: function () {
      return this.value_suydqn$_0;
    }
  });
  Object.defineProperty(Vw.prototype, 'type', {
    get: function () {
      return this.type_suydqn$_0;
    }
  });
  Vw.prototype.toString = function () {
    return this.toHtml();
  };
  Vw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vw',
    interfaces: [Dimension]
  };
  Vw.prototype.component1 = function () {
    return this.value;
  };
  Vw.prototype.copy_za3lpa$ = function (value) {
    return new Vw(value === void 0 ? this.value : value);
  };
  Vw.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Vw.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_vw($receiver) {
    return new Vw($receiver);
  }
  function VMin(value) {
    this.value_w95ltg$_0 = value;
    this.type_w95ltg$_0 = DimensionType$vmin_getInstance();
  }
  Object.defineProperty(VMin.prototype, 'value', {
    get: function () {
      return this.value_w95ltg$_0;
    }
  });
  Object.defineProperty(VMin.prototype, 'type', {
    get: function () {
      return this.type_w95ltg$_0;
    }
  });
  VMin.prototype.toString = function () {
    return this.toHtml();
  };
  VMin.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VMin',
    interfaces: [Dimension]
  };
  VMin.prototype.component1 = function () {
    return this.value;
  };
  VMin.prototype.copy_za3lpa$ = function (value) {
    return new VMin(value === void 0 ? this.value : value);
  };
  VMin.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  VMin.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_vmin($receiver) {
    return new VMin($receiver);
  }
  function VMax(value) {
    this.value_w95g4i$_0 = value;
    this.type_w95g4i$_0 = DimensionType$vmax_getInstance();
  }
  Object.defineProperty(VMax.prototype, 'value', {
    get: function () {
      return this.value_w95g4i$_0;
    }
  });
  Object.defineProperty(VMax.prototype, 'type', {
    get: function () {
      return this.type_w95g4i$_0;
    }
  });
  VMax.prototype.toString = function () {
    return this.toHtml();
  };
  VMax.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VMax',
    interfaces: [Dimension]
  };
  VMax.prototype.component1 = function () {
    return this.value;
  };
  VMax.prototype.copy_za3lpa$ = function (value) {
    return new VMax(value === void 0 ? this.value : value);
  };
  VMax.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  VMax.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function get_vmax($receiver) {
    return new VMax($receiver);
  }
  function br($receiver, init) {
    return initAndAppendNode($receiver, new Br(), init);
  }
  function header($receiver, init) {
    return initAndAppendNode($receiver, new Header(), init);
  }
  function main($receiver, init) {
    return initAndAppendNode($receiver, new Main(), init);
  }
  function footer($receiver, init) {
    return initAndAppendNode($receiver, new Footer(), init);
  }
  function h1($receiver, init) {
    return initAndAppendNode($receiver, new H1(), init);
  }
  function h2($receiver, init) {
    return initAndAppendNode($receiver, new H2(), init);
  }
  function h3($receiver, init) {
    return initAndAppendNode($receiver, new H3(), init);
  }
  function h4($receiver, init) {
    return initAndAppendNode($receiver, new H4(), init);
  }
  function h5($receiver, init) {
    return initAndAppendNode($receiver, new H5(), init);
  }
  function h6($receiver, init) {
    return initAndAppendNode($receiver, new H6(), init);
  }
  function p($receiver, init) {
    return initAndAppendNode($receiver, new P(), init);
  }
  function span($receiver, init) {
    return initAndAppendNode($receiver, new Span(), init);
  }
  function hr($receiver, init) {
    return initAndAppendNode($receiver, new Hr(), init);
  }
  function ul($receiver, init) {
    return initAndAppendNode($receiver, new Ul(), init);
  }
  function ol($receiver, init) {
    return initAndAppendNode($receiver, new Ol(), init);
  }
  function li($receiver, init) {
    return initAndAppendNode($receiver, new Li(), init);
  }
  function div($receiver, init) {
    return initAndAppendNode($receiver, new Div(), init);
  }
  function pre($receiver, init) {
    return initAndAppendNode($receiver, new Pre(), init);
  }
  function a$lambda(closure$href, closure$target) {
    return function ($receiver) {
      $receiver._href = closure$href;
      $receiver._target = closure$target;
    };
  }
  function a($receiver, href, target, init) {
    if (href === void 0)
      href = null;
    if (target === void 0)
      target = null;
    return initAndAppendNode($receiver, with_0(new A(), a$lambda(href, target)), init);
  }
  function i($receiver, init) {
    return initAndAppendNode($receiver, new I(), init);
  }
  function inputText($receiver, init) {
    return initAndAppendNode($receiver, new InputText(), init);
  }
  function inputNumber($receiver, init) {
    return initAndAppendNode($receiver, new InputNumber(), init);
  }
  function img($receiver, src, init) {
    return initAndAppendNode($receiver, new Img(src), init);
  }
  function button($receiver, init) {
    return initAndAppendNode($receiver, new Button(), init);
  }
  function label($receiver, init) {
    return initAndAppendNode($receiver, new Label(), init);
  }
  function select($receiver, init) {
    return initAndAppendNode($receiver, new Select(), init);
  }
  function table($receiver, init) {
    return initAndAppendNode($receiver, new Table(), init);
  }
  function caption($receiver, init) {
    return initAndAppendNode($receiver, new Caption(), init);
  }
  function colgroup($receiver, init) {
    return initAndAppendNode($receiver, new Colgroup(), init);
  }
  function col($receiver, init) {
    return initAndAppendNode($receiver, new Col(), init);
  }
  function tbody($receiver, init) {
    return initAndAppendNode($receiver, new Tbody(), init);
  }
  function thead($receiver, init) {
    return initAndAppendNode($receiver, new Thead(), init);
  }
  function tfoot($receiver, init) {
    return initAndAppendNode($receiver, new Tfoot(), init);
  }
  function tr($receiver, init) {
    return initAndAppendNode($receiver, new Tr(), init);
  }
  function td($receiver, init) {
    return initAndAppendNode($receiver, new Td(), init);
  }
  function th($receiver, init) {
    return initAndAppendNode($receiver, new Th(), init);
  }
  function initAndAppendNode($receiver, node, init) {
    init(node);
    $receiver.appendChild_sr04hg$(node);
    return node;
  }
  function with_0($receiver, init) {
    init($receiver);
    return $receiver;
  }
  function render($receiver, init) {
    var tmp$;
    $receiver.renderBlocks_gobymg$_0.add_11rb$(typeof (tmp$ = init) === 'function' ? tmp$ : Kotlin.throwCCE());
    return $receiver;
  }
  function onClick($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('click', listener);
  }
  function unClick($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('click', listener);
  }
  function onFocus($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('focus', listener);
  }
  function unFocus($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('focus', listener);
  }
  function onBlur($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('blur', listener);
  }
  function unBlur($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('blur', listener);
  }
  function onInput($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('input', listener);
  }
  function unInput($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('input', listener);
  }
  function onChange($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('change', listener);
  }
  function unChange($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('change', listener);
  }
  function onDblClick($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dlbclick', listener);
  }
  function unDblClick($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dblclick', listener);
  }
  function onMouseDown($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mousedown', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseDown($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mousedown', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseUp($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mouseup', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseUp($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mouseup', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseEnter($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mouseenter', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseEnter($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mouseenter', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseLeave($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mouseleave', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseLeave($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mouseleave', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseMove($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mousemove', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseMove($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mousemove', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseOut($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mouseout', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseOut($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mouseout', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onMouseOver($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('mouseover', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unMouseOver($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('mouseover', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onScroll($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('scroll', listener);
  }
  function unScroll($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('scroll', listener);
  }
  function onKeyUp($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('keyup', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unKeyUp($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('keyup', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onKeyPress($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('keypress', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unKeyPress($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('keypress', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onKeyDown($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.addEventListener('keydown', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function unKeyDown($receiver, listener) {
    var tmp$;
    $receiver.w3cElement_gobymg$_0.removeEventListener('keydown', typeof (tmp$ = listener) === 'function' ? tmp$ : Kotlin.throwCCE());
  }
  function onDrag($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('drag', listener);
  }
  function unDrag($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('drag', listener);
  }
  function onDragEnd($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dragend', listener);
  }
  function unDragEnd($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dragend', listener);
  }
  function onDragEnter($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dragenter', listener);
  }
  function unDragEnter($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dragenter', listener);
  }
  function onDragLeave($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dragleave', listener);
  }
  function unDragLeave($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dragleave', listener);
  }
  function onDragOver($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dragover', listener);
  }
  function unDragOver($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dragover', listener);
  }
  function onDragStart($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('dragstart', listener);
  }
  function unDragStart($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('dragstart', listener);
  }
  function onDrop($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.addEventListener('drop', listener);
  }
  function unDrop($receiver, listener) {
    $receiver.w3cElement_gobymg$_0.removeEventListener('drop', listener);
  }
  function get_computedStyle($receiver) {
    return window.getComputedStyle($receiver.w3cElement_gobymg$_0);
  }
  function Element(name, existingElement, w3cElement) {
    var tmp$;
    if (name === void 0)
      name = null;
    if (existingElement === void 0)
      existingElement = null;
    if (w3cElement === void 0)
      w3cElement = existingElement != null ? existingElement : Kotlin.isType(tmp$ = document.createElement(name != null ? name : Kotlin.throwNPE()), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    Node.call(this, w3cElement);
    this.w3cElement_gobymg$_0 = w3cElement;
    this.renderCalled_gobymg$_0 = false;
    this.didMountCalled_gobymg$_0 = false;
    this.resizedListeners$delegate = lazy(Element$resizedListeners$lambda);
    this.resizeSensor_gobymg$_0 = null;
    this.hideOnBreakpoints$delegate = lazy(Element$hideOnBreakpoints$lambda);
    this.resizedHandler_gobymg$_0 = Element$resizedHandler$lambda(this);
    this._id$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('id');
    this._tabindex$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('tabindex');
    this._displayBeforeHiding_gobymg$_0 = '';
    this.style$delegate = lazy(Element$style$lambda(this));
    this.layout$delegate = new LayoutDelegate();
    this.renderBlocks_gobymg$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  Object.defineProperty(Element.prototype, 'renderCalled', {
    get: function () {
      return this.renderCalled_gobymg$_0;
    },
    set: function (renderCalled) {
      this.renderCalled_gobymg$_0 = renderCalled;
    }
  });
  Object.defineProperty(Element.prototype, 'didMountCalled', {
    get: function () {
      return this.didMountCalled_gobymg$_0;
    },
    set: function (didMountCalled) {
      this.didMountCalled_gobymg$_0 = didMountCalled;
    }
  });
  Object.defineProperty(Element.prototype, 'resizedListeners_gobymg$_0', {
    get: function () {
      var $receiver = this.resizedListeners$delegate;
      new Kotlin.PropertyMetadata('resizedListeners');
      return $receiver.value;
    }
  });
  Object.defineProperty(Element.prototype, 'hideOnBreakpoints_gobymg$_0', {
    get: function () {
      var $receiver = this.hideOnBreakpoints$delegate;
      new Kotlin.PropertyMetadata('hideOnBreakpoints');
      return $receiver.value;
    }
  });
  Object.defineProperty(Element.prototype, 'childElements', {
    get: function () {
      var tmp$;
      var $receiver = this.childNodes;
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (Kotlin.isType(element, Element)) {
          destination.add_11rb$(element);
        }
      }
      return Kotlin.isType(tmp$ = destination, List) ? tmp$ : Kotlin.throwCCE();
    }
  });
  Object.defineProperty(Element.prototype, '_parentElement', {
    get: function () {
      var tmp$, tmp$_0;
      return Kotlin.isType(tmp$_0 = (tmp$ = this._parentNode_w5cupa$_0) != null ? tmp$ : Kotlin.throwNPE(), Element) ? tmp$_0 : Kotlin.throwCCE();
    }
  });
  Object.defineProperty(Element.prototype, '_id', {
    get: function () {
      return this._id$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_id'));
    },
    set: function (_id) {
      this._id$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_id'), _id);
    }
  });
  Object.defineProperty(Element.prototype, '_tabindex', {
    get: function () {
      return this._tabindex$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_tabindex'));
    },
    set: function (_tabindex) {
      this._tabindex$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_tabindex'), _tabindex);
    }
  });
  Object.defineProperty(Element.prototype, 'hidden', {
    get: function () {
      return Kotlin.equals(this._style.display, 'none');
    }
  });
  Object.defineProperty(Element.prototype, '_style', {
    get: function () {
      return this.w3cElement_gobymg$_0.style;
    }
  });
  Object.defineProperty(Element.prototype, 'style', {
    get: function () {
      var $receiver = this.style$delegate;
      new Kotlin.PropertyMetadata('style');
      return $receiver.value;
    }
  });
  Object.defineProperty(Element.prototype, 'layout', {
    get: function () {
      return this.layout$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('layout'));
    },
    set: function (layout) {
      this.layout$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('layout'), layout);
    }
  });
  Object.defineProperty(Element.prototype, 'clientWidth', {
    get: function () {
      return this.w3cElement_gobymg$_0.clientWidth;
    }
  });
  Object.defineProperty(Element.prototype, 'clientHeight', {
    get: function () {
      return this.w3cElement_gobymg$_0.clientHeight;
    }
  });
  Object.defineProperty(Element.prototype, 'offsetWidth', {
    get: function () {
      return this.w3cElement_gobymg$_0.offsetWidth;
    }
  });
  Object.defineProperty(Element.prototype, 'offsetHeight', {
    get: function () {
      return this.w3cElement_gobymg$_0.offsetHeight;
    }
  });
  Object.defineProperty(Element.prototype, 'scrollWidth', {
    get: function () {
      return this.w3cElement_gobymg$_0.scrollWidth;
    }
  });
  Object.defineProperty(Element.prototype, 'scrollHeight', {
    get: function () {
      return this.w3cElement_gobymg$_0.scrollHeight;
    }
  });
  Object.defineProperty(Element.prototype, 'offsetTop', {
    get: function () {
      return this.w3cElement_gobymg$_0.offsetTop;
    }
  });
  Object.defineProperty(Element.prototype, 'offsetLeft', {
    get: function () {
      return this.w3cElement_gobymg$_0.offsetLeft;
    }
  });
  Object.defineProperty(Element.prototype, 'boundingClientRect', {
    get: function () {
      return this.w3cElement_gobymg$_0.getBoundingClientRect();
    }
  });
  Element.prototype.parentResized_y9yt0u$_0 = function (event) {
    var $receiver = this.hideOnBreakpoints_gobymg$_0;
    var any$result;
    any$break: {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.contains_14dthe$(event.width)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
    var hideOrShow = any$result;
    if (hideOrShow) {
      this.hide();
    }
     else {
      this.show();
    }
  };
  Element.prototype.callRender_gobymg$_0 = function () {
    if (this.renderCalled) {
      throw new IllegalStateException('render has already been called for this element');
    }
    this.render();
    var tmp$;
    tmp$ = this.renderBlocks_gobymg$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this);
    }
    this.renderCalled = true;
  };
  Element.prototype.callDidMount_gobymg$_0 = function () {
    if (this.didMountCalled) {
      throw new IllegalStateException('didMount has already been called for this element');
    }
    this.didMount();
    this.didMountCalled = true;
  };
  Element.prototype.callWillUnMount_gobymg$_0 = function () {
    this.didMountCalled = false;
    this.willUnMount();
  };
  Element.prototype.render = function () {
  };
  Element.prototype.didMount = function () {
  };
  Element.prototype.willUnMount = function () {
  };
  Element.prototype.callDidMountOnChildren_gobymg$_0 = function () {
    var tmp$;
    tmp$ = this.childNodes.iterator();
    while (tmp$.hasNext()) {
      var child_1 = tmp$.next();
      if (Kotlin.isType(child_1, Element)) {
        child_1.callDidMountOnChildren_gobymg$_0();
        child_1.callDidMount_gobymg$_0();
      }
    }
  };
  Element.prototype.addClass_bx842b$ = function (selector) {
    this.addClass_61zpoe$(selector.value);
  };
  Element.prototype.addClass_61zpoe$ = function (name) {
    this.w3cElement_gobymg$_0.classList.add(name);
  };
  Element.prototype.removeClass_bx842b$ = function (selector) {
    this.removeClass_61zpoe$(selector.value);
  };
  Element.prototype.removeClass_61zpoe$ = function (name) {
    this.w3cElement_gobymg$_0.classList.remove(name);
  };
  Element.prototype.removeClasses = function () {
    var tmp$;
    while (this.w3cElement_gobymg$_0.classList.length > 0) {
      this.w3cElement_gobymg$_0.classList.remove((tmp$ = this.w3cElement_gobymg$_0.classList[0]) != null ? tmp$ : Kotlin.throwNPE());
    }
  };
  Element.prototype.removeClasses_leuowt$ = function (predicate) {
    var tmp$, tmp$_0;
    if (this.w3cElement_gobymg$_0.classList.length === 0) {
      return;
    }
    tmp$ = downTo(Math.max(0, this.w3cElement_gobymg$_0.classList.length - 1 | 0), 0).iterator();
    while (tmp$.hasNext()) {
      var i_0 = tmp$.next();
      var currClass = (tmp$_0 = this.w3cElement_gobymg$_0.classList[i_0]) != null ? tmp$_0 : Kotlin.throwNPE();
      if (predicate(currClass)) {
        this.w3cElement_gobymg$_0.classList.remove(currClass);
      }
    }
  };
  Element.prototype.toggleClass_ivxn3r$ = function (name, force) {
    if (force === void 0)
      force = false;
    this.w3cElement_gobymg$_0.classList.toggle(name, force);
  };
  Element.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.appendChild_sr04hg$(new Text_0($receiver));
  };
  Element.prototype.show = function () {
    if (this.hidden) {
      this._style.display = this._displayBeforeHiding_gobymg$_0;
    }
  };
  Element.prototype.hide = function () {
    if (!this.hidden) {
      this._displayBeforeHiding_gobymg$_0 = this._style.display;
      this._style.display = 'none';
    }
  };
  Element.prototype.focus = function () {
    this.w3cElement_gobymg$_0.focus();
    return Kotlin.equals(document.activeElement, this.w3cElement_gobymg$_0);
  };
  Element.prototype.traverseElements_pf9u9b$ = function (each) {
    var tmp$;
    tmp$ = this.childElements.iterator();
    while (tmp$.hasNext()) {
      var child_1 = tmp$.next();
      var continueTraversing = each(child_1);
      if (!continueTraversing) {
        break;
      }
      child_1.traverseElements_pf9u9b$(each);
    }
  };
  Element.prototype.getComputedStyle_61zpoe$ = function (property) {
    var htmlElementDynamic = this.w3cElement_gobymg$_0;
    if (htmlElementDynamic.currentStyle) {
      return htmlElementDynamic.currentStyle[property];
    }
     else if (window.getComputedStyle) {
      return window.getComputedStyle(this.w3cElement_gobymg$_0).getPropertyValue(property);
    }
     else {
      return htmlElementDynamic.style[property];
    }
  };
  Element.prototype.onResized_sdolbl$ = function (listener) {
    this.resizedListeners_gobymg$_0.add_11rb$(listener);
    if (this.resizedListeners_gobymg$_0.size === 1 && this.resizeSensor_gobymg$_0 == null) {
      this.resizedListeners_gobymg$_0.add_11rb$(this.resizedHandler_gobymg$_0);
      var sensor = new Element$ResizeSensor(this, this, this.resizedListeners_gobymg$_0);
      this.resizeSensor_gobymg$_0 = sensor;
      sensor.init();
    }
  };
  Element.prototype.unResized_sdolbl$ = function (listener) {
    var tmp$;
    this.resizedListeners_gobymg$_0.remove_11rb$(listener);
    if (this.resizedListeners_gobymg$_0.size === 1 && Kotlin.equals(this.resizedListeners_gobymg$_0.get_za3lpa$(0), this.resizedHandler_gobymg$_0)) {
      this.resizedListeners_gobymg$_0.remove_11rb$(this.resizedHandler_gobymg$_0);
    }
    if (this.resizedListeners_gobymg$_0.isEmpty()) {
      (tmp$ = this.resizeSensor_gobymg$_0) != null ? tmp$.destroy() : null;
    }
  };
  Element.prototype.hideOn_saaiy0$ = function (breakpoint) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== breakpoint.length; ++tmp$) {
      var element = breakpoint[tmp$];
      this.hideOnBreakpoints_gobymg$_0.add_11rb$(element);
    }
  };
  Element.prototype._enforceStyleRecalculation = function () {
    window.getComputedStyle(this.w3cElement_gobymg$_0).getPropertyValue('opacity');
  };
  function Element$ResizeSensor($outer, element, resizedListeners) {
    this.$outer = $outer;
    this.element = element;
    this.resizedListeners = resizedListeners;
    this.sensorStyle_0 = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
    this.initialized_0 = false;
    this.sensor$delegate = lazy(Element$ResizeSensor$sensor$lambda(this));
    this.dirtyHeight_0 = false;
    this.dirtyWidth_0 = false;
    this.cachedWidth_0 = -1.0;
    this.cachedHeight_0 = -1.0;
    this.lastWidth_0 = -1.0;
    this.lastHeight_0 = -1.0;
    this.scrollHandler_0 = Element$ResizeSensor$scrollHandler$lambda(this);
    this.dirtyChecking_0 = Element$ResizeSensor$dirtyChecking$lambda(this);
  }
  Object.defineProperty(Element$ResizeSensor.prototype, 'sensor_0', {
    get: function () {
      var $receiver = this.sensor$delegate;
      new Kotlin.PropertyMetadata('sensor');
      return $receiver.value;
    }
  });
  function Element$ResizeSensor$init$lambda(this$ResizeSensor) {
    return function (it) {
      this$ResizeSensor.initializeSensor_0();
    };
  }
  Element$ResizeSensor.prototype.init = function () {
    if (!this.initialized_0) {
      this.initialized_0 = true;
      console.log('ResizeSensor.init: sensor not initialized, initializing...');
      window.requestAnimationFrame(Element$ResizeSensor$init$lambda(this));
    }
     else {
      console.log('ResizeSensor.init: sensor already initialized');
    }
  };
  Element$ResizeSensor.prototype.destroy = function () {
    console.log('ResizeSensor.destroy');
    this.sensor_0.removeSelf();
  };
  Element$ResizeSensor.prototype.notifyResizeListeners_0 = function (event) {
    var tmp$;
    tmp$ = this.resizedListeners.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(event);
    }
  };
  Element$ResizeSensor.prototype.runDirtyChecking_0 = function () {
    window.requestAnimationFrame(this.dirtyChecking_0);
  };
  Element$ResizeSensor.prototype.initializeSensor_0 = function () {
    this.element.appendChild_sr04hg$(this.sensor_0);
    if (Kotlin.equals(this.getComputedPosition_0(), 'static')) {
      this.element.style.position = Position$relative_getInstance();
    }
    this.sensor_0.reset();
    this.runDirtyChecking_0();
    onScroll(this.sensor_0.expandSensor, this.scrollHandler_0);
    onScroll(this.sensor_0.shrinkSensor, this.scrollHandler_0);
  };
  Element$ResizeSensor.prototype.getComputedPosition_0 = function () {
    return this.element.getComputedStyle_61zpoe$('position');
  };
  function Element$ResizeSensor$Sensor($outer) {
    this.$outer = $outer;
    Div.call(this);
    this.expandSensor$delegate = lazy(Element$ResizeSensor$Sensor$expandSensor$lambda(this.$outer));
    this.shrinkSensor$delegate = lazy(Element$ResizeSensor$Sensor$shrinkSensor$lambda(this.$outer));
  }
  Object.defineProperty(Element$ResizeSensor$Sensor.prototype, 'expandSensor', {
    get: function () {
      var $receiver = this.expandSensor$delegate;
      new Kotlin.PropertyMetadata('expandSensor');
      return $receiver.value;
    }
  });
  Object.defineProperty(Element$ResizeSensor$Sensor.prototype, 'shrinkSensor', {
    get: function () {
      var $receiver = this.shrinkSensor$delegate;
      new Kotlin.PropertyMetadata('shrinkSensor');
      return $receiver.value;
    }
  });
  Element$ResizeSensor$Sensor.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_61zpoe$('resize-sensor');
    this._style.cssText = this.$outer.sensorStyle_0;
    this.appendChild_sr04hg$(this.expandSensor);
    this.appendChild_sr04hg$(this.shrinkSensor);
  };
  Element$ResizeSensor$Sensor.prototype.reset = function () {
    this.expandSensor.reset();
    this.shrinkSensor.reset();
  };
  function Element$ResizeSensor$Sensor$expandSensor$lambda(this$ResizeSensor) {
    return function () {
      return new Element$ResizeSensor$SensorExpand(this$ResizeSensor);
    };
  }
  function Element$ResizeSensor$Sensor$shrinkSensor$lambda(this$ResizeSensor) {
    return function () {
      return new Element$ResizeSensor$SensorShrink(this$ResizeSensor);
    };
  }
  Element$ResizeSensor$Sensor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Sensor',
    interfaces: [Div]
  };
  function Element$ResizeSensor$SensorExpand($outer) {
    this.$outer = $outer;
    Div.call(this);
    this.sensorExpandChildSensorStyle_0 = 'position: absolute; left: 0px; top: 0px; transition: 0s; -webkit-transition: 0';
    this.child$delegate = lazy(Element$ResizeSensor$SensorExpand$child$lambda(this));
  }
  Object.defineProperty(Element$ResizeSensor$SensorExpand.prototype, 'child', {
    get: function () {
      var $receiver = this.child$delegate;
      new Kotlin.PropertyMetadata('child');
      return $receiver.value;
    }
  });
  Element$ResizeSensor$SensorExpand.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_61zpoe$('resize-sensor-expand');
    this._style.cssText = this.$outer.sensorStyle_0;
    this.appendChild_sr04hg$(this.child);
  };
  Element$ResizeSensor$SensorExpand.prototype.reset = function () {
    this.child.style.width = get_px_0(100000);
    this.child.style.height = get_px_0(100000);
    this.w3cElement_gobymg$_0.scrollLeft = 100000;
    this.w3cElement_gobymg$_0.scrollTop = 100000;
  };
  function Element$ResizeSensor$SensorExpand$child$lambda(this$SensorExpand) {
    return function () {
      var child_1 = new Div();
      child_1._style.cssText = this$SensorExpand.sensorExpandChildSensorStyle_0;
      return child_1;
    };
  }
  Element$ResizeSensor$SensorExpand.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SensorExpand',
    interfaces: [Div]
  };
  function Element$ResizeSensor$SensorShrink($outer) {
    this.$outer = $outer;
    Div.call(this);
    this.sensorShrinkChildSensorStyle_0 = 'position: absolute; left: 0; top: 0; transition: 0s;';
    this.child$delegate = lazy(Element$ResizeSensor$SensorShrink$child$lambda(this));
  }
  Object.defineProperty(Element$ResizeSensor$SensorShrink.prototype, 'child', {
    get: function () {
      var $receiver = this.child$delegate;
      new Kotlin.PropertyMetadata('child');
      return $receiver.value;
    }
  });
  Element$ResizeSensor$SensorShrink.prototype.render = function () {
    Div.prototype.render.call(this);
    this.addClass_61zpoe$('resize-sensor-shrink');
    this._style.cssText = this.$outer.sensorStyle_0;
    this.appendChild_sr04hg$(this.child);
  };
  Element$ResizeSensor$SensorShrink.prototype.reset = function () {
    this.w3cElement_gobymg$_0.scrollLeft = 100000;
    this.w3cElement_gobymg$_0.scrollTop = 100000;
  };
  function Element$ResizeSensor$SensorShrink$child$lambda(this$SensorShrink) {
    return function () {
      var child_1 = new Div();
      child_1._style.cssText = this$SensorShrink.sensorShrinkChildSensorStyle_0 + ' width: 200%; height: 200%';
      return child_1;
    };
  }
  Element$ResizeSensor$SensorShrink.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SensorShrink',
    interfaces: [Div]
  };
  function Element$ResizeSensor$sensor$lambda(this$ResizeSensor) {
    return function () {
      return new Element$ResizeSensor$Sensor(this$ResizeSensor);
    };
  }
  function Element$ResizeSensor$scrollHandler$lambda(this$ResizeSensor) {
    return function (it) {
      this$ResizeSensor.cachedWidth_0 = this$ResizeSensor.element.w3cElement_gobymg$_0.offsetWidth;
      this$ResizeSensor.cachedHeight_0 = this$ResizeSensor.element.w3cElement_gobymg$_0.offsetHeight;
      if (this$ResizeSensor.cachedWidth_0 !== this$ResizeSensor.lastWidth_0) {
        this$ResizeSensor.dirtyWidth_0 = true;
        this$ResizeSensor.lastWidth_0 = this$ResizeSensor.cachedWidth_0;
      }
      if (this$ResizeSensor.cachedHeight_0 !== this$ResizeSensor.lastHeight_0) {
        this$ResizeSensor.dirtyHeight_0 = true;
        this$ResizeSensor.lastHeight_0 = this$ResizeSensor.cachedHeight_0;
      }
      this$ResizeSensor.sensor_0.reset();
    };
  }
  function Element$ResizeSensor$dirtyChecking$lambda(this$ResizeSensor) {
    return function (it) {
      if (!this$ResizeSensor.resizedListeners.isEmpty()) {
        if (this$ResizeSensor.dirtyWidth_0 || this$ResizeSensor.dirtyHeight_0) {
          this$ResizeSensor.notifyResizeListeners_0(new Element$ResizedEvent(this$ResizeSensor.dirtyWidth_0, this$ResizeSensor.lastWidth_0, this$ResizeSensor.dirtyHeight_0, this$ResizeSensor.lastHeight_0));
          this$ResizeSensor.dirtyHeight_0 = false;
          this$ResizeSensor.dirtyWidth_0 = false;
        }
        this$ResizeSensor.runDirtyChecking_0();
      }
    };
  }
  Element$ResizeSensor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ResizeSensor',
    interfaces: []
  };
  function Element$ResizedEvent(widthChanged, width, heightChanged, height) {
    this.widthChanged = widthChanged;
    this.width = width;
    this.heightChanged = heightChanged;
    this.height = height;
  }
  Element$ResizedEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ResizedEvent',
    interfaces: []
  };
  Element$ResizedEvent.prototype.component1 = function () {
    return this.widthChanged;
  };
  Element$ResizedEvent.prototype.component2 = function () {
    return this.width;
  };
  Element$ResizedEvent.prototype.component3 = function () {
    return this.heightChanged;
  };
  Element$ResizedEvent.prototype.component4 = function () {
    return this.height;
  };
  Element$ResizedEvent.prototype.copy_p2cfck$ = function (widthChanged, width, heightChanged, height) {
    return new Element$ResizedEvent(widthChanged === void 0 ? this.widthChanged : widthChanged, width === void 0 ? this.width : width, heightChanged === void 0 ? this.heightChanged : heightChanged, height === void 0 ? this.height : height);
  };
  Element$ResizedEvent.prototype.toString = function () {
    return 'ResizedEvent(widthChanged=' + Kotlin.toString(this.widthChanged) + (', width=' + Kotlin.toString(this.width)) + (', heightChanged=' + Kotlin.toString(this.heightChanged)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Element$ResizedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.widthChanged) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.heightChanged) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Element$ResizedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.widthChanged, other.widthChanged) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.heightChanged, other.heightChanged) && Kotlin.equals(this.height, other.height)))));
  };
  function Element$resizedListeners$lambda() {
    return Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  function Element$hideOnBreakpoints$lambda() {
    return Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  function Element$resizedHandler$lambda(this$Element) {
    return function (event) {
      if (this$Element.layout != null) {
        var tmp$;
        tmp$ = this$Element.childNodes.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, Element)) {
            element.parentResized_y9yt0u$_0(event);
          }
        }
      }
    };
  }
  function Element$style$lambda(this$Element) {
    return function () {
      return new TypedStyle(this$Element);
    };
  }
  Element.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Element',
    interfaces: [Node]
  };
  function Img(src) {
    Element.call(this, 'img');
    this._alt$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('alt');
    this._width$delegate = W3cDelegates_getInstance().nullableDimensionAttribute_61zpoe$('width');
    this._height$delegate = W3cDelegates_getInstance().nullableDimensionAttribute_61zpoe$('height');
    this._src$delegate = W3cDelegates_getInstance().attribute_o3qcra$(this, src, 'src');
  }
  Object.defineProperty(Img.prototype, '_alt', {
    get: function () {
      return this._alt$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_alt'));
    },
    set: function (_alt) {
      this._alt$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_alt'), _alt);
    }
  });
  Object.defineProperty(Img.prototype, '_width', {
    get: function () {
      return this._width$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_width'));
    },
    set: function (_width) {
      this._width$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_width'), _width);
    }
  });
  Object.defineProperty(Img.prototype, '_height', {
    get: function () {
      return this._height$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_height'));
    },
    set: function (_height) {
      this._height$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_height'), _height);
    }
  });
  Object.defineProperty(Img.prototype, '_src', {
    get: function () {
      return this._src$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_src'));
    },
    set: function (_src) {
      this._src$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_src'), _src);
    }
  });
  Img.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Img',
    interfaces: [Element]
  };
  function Button() {
    Element.call(this, 'button');
    this._autofocus$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('autocomplete');
    this._disabled$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('disabled');
    this._form$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('form');
    this._formaction$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formaction');
    this._formenctype$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formenctype');
    this._formmethod$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formmethod');
    this._formnovalidate$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formnovalidate');
    this._formtarget$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formtarget');
    this._menu$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('menu');
    this._name$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('name');
    this._type$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('type');
    this._value$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('value');
  }
  Object.defineProperty(Button.prototype, '_autofocus', {
    get: function () {
      return this._autofocus$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_autofocus'));
    },
    set: function (_autofocus) {
      this._autofocus$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_autofocus'), _autofocus);
    }
  });
  Object.defineProperty(Button.prototype, '_disabled', {
    get: function () {
      return this._disabled$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_disabled'));
    },
    set: function (_disabled) {
      this._disabled$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_disabled'), _disabled);
    }
  });
  Object.defineProperty(Button.prototype, '_form', {
    get: function () {
      return this._form$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_form'));
    },
    set: function (_form) {
      this._form$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_form'), _form);
    }
  });
  Object.defineProperty(Button.prototype, '_formaction', {
    get: function () {
      return this._formaction$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formaction'));
    },
    set: function (_formaction) {
      this._formaction$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formaction'), _formaction);
    }
  });
  Object.defineProperty(Button.prototype, '_formenctype', {
    get: function () {
      return this._formenctype$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formenctype'));
    },
    set: function (_formenctype) {
      this._formenctype$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formenctype'), _formenctype);
    }
  });
  Object.defineProperty(Button.prototype, '_formmethod', {
    get: function () {
      return this._formmethod$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formmethod'));
    },
    set: function (_formmethod) {
      this._formmethod$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formmethod'), _formmethod);
    }
  });
  Object.defineProperty(Button.prototype, '_formnovalidate', {
    get: function () {
      return this._formnovalidate$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formnovalidate'));
    },
    set: function (_formnovalidate) {
      this._formnovalidate$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formnovalidate'), _formnovalidate);
    }
  });
  Object.defineProperty(Button.prototype, '_formtarget', {
    get: function () {
      return this._formtarget$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formtarget'));
    },
    set: function (_formtarget) {
      this._formtarget$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formtarget'), _formtarget);
    }
  });
  Object.defineProperty(Button.prototype, '_menu', {
    get: function () {
      return this._menu$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_menu'));
    },
    set: function (_menu) {
      this._menu$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_menu'), _menu);
    }
  });
  Object.defineProperty(Button.prototype, '_name', {
    get: function () {
      return this._name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_name'));
    },
    set: function (_name) {
      this._name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_name'), _name);
    }
  });
  Object.defineProperty(Button.prototype, '_type', {
    get: function () {
      return this._type$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_type'));
    },
    set: function (_type) {
      this._type$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_type'), _type);
    }
  });
  Object.defineProperty(Button.prototype, '_value', {
    get: function () {
      return this._value$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_value'));
    },
    set: function (_value) {
      this._value$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_value'), _value);
    }
  });
  Button.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Button',
    interfaces: [Element]
  };
  function Select() {
    Element.call(this, 'select');
  }
  Select.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Select',
    interfaces: [Element]
  };
  function Input(type) {
    Element.call(this, 'input');
    var tmp$;
    this._inputElement = Kotlin.isType(tmp$ = this.w3cElement_gobymg$_0, HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    this._type$delegate = W3cDelegates_getInstance().attribute_o3qcra$(this, type.name, 'type');
    this._accept$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('accept');
    this._alt$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('alt');
    this._autocomplete$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('autocomplete');
    this._autofocus$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('autocomplete');
    this._checked$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('checked');
    this._dirname$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('dirname');
    this._disabled$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('disabled');
    this._form$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('form');
    this._formaction$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formaction');
    this._formenctype$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formenctype');
    this._formmethod$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formmethod');
    this._formnovalidate$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formnovalidate');
    this._formtarget$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('formtarget');
    this._height$delegate = W3cDelegates_getInstance().nullableDimensionAttribute_61zpoe$('height');
    this._inputmode$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('inputmode');
    this._list$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('list');
    this._max$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('max');
    this._maxlength$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('maxlength');
    this._min$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('min');
    this._minlength$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('minlength');
    this._multiple$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('multiple');
    this._name$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('name');
    this._pattern$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('pattern');
    this._placeholder$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('placeholder');
    this._readonly$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('readonly');
    this._required$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('required');
    this._size$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('size');
    this._src$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('src');
    this._step$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('step');
    this._width$delegate = W3cDelegates_getInstance().nullableDimensionAttribute_61zpoe$('width');
  }
  Object.defineProperty(Input.prototype, 'value', {
    get: function () {
      return this._inputElement.value;
    },
    set: function (value) {
      this._inputElement.value = value != null ? value : '';
    }
  });
  Object.defineProperty(Input.prototype, '_type', {
    get: function () {
      return this._type$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_type'));
    }
  });
  Object.defineProperty(Input.prototype, '_accept', {
    get: function () {
      return this._accept$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_accept'));
    },
    set: function (_accept) {
      this._accept$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_accept'), _accept);
    }
  });
  Object.defineProperty(Input.prototype, '_alt', {
    get: function () {
      return this._alt$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_alt'));
    },
    set: function (_alt) {
      this._alt$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_alt'), _alt);
    }
  });
  Object.defineProperty(Input.prototype, '_autocomplete', {
    get: function () {
      return this._autocomplete$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_autocomplete'));
    },
    set: function (_autocomplete) {
      this._autocomplete$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_autocomplete'), _autocomplete);
    }
  });
  Object.defineProperty(Input.prototype, '_autofocus', {
    get: function () {
      return this._autofocus$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_autofocus'));
    },
    set: function (_autofocus) {
      this._autofocus$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_autofocus'), _autofocus);
    }
  });
  Object.defineProperty(Input.prototype, '_checked', {
    get: function () {
      return this._checked$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_checked'));
    },
    set: function (_checked) {
      this._checked$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_checked'), _checked);
    }
  });
  Object.defineProperty(Input.prototype, '_dirname', {
    get: function () {
      return this._dirname$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_dirname'));
    },
    set: function (_dirname) {
      this._dirname$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_dirname'), _dirname);
    }
  });
  Object.defineProperty(Input.prototype, '_disabled', {
    get: function () {
      return this._disabled$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_disabled'));
    },
    set: function (_disabled) {
      this._disabled$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_disabled'), _disabled);
    }
  });
  Object.defineProperty(Input.prototype, '_form', {
    get: function () {
      return this._form$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_form'));
    },
    set: function (_form) {
      this._form$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_form'), _form);
    }
  });
  Object.defineProperty(Input.prototype, '_formaction', {
    get: function () {
      return this._formaction$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formaction'));
    },
    set: function (_formaction) {
      this._formaction$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formaction'), _formaction);
    }
  });
  Object.defineProperty(Input.prototype, '_formenctype', {
    get: function () {
      return this._formenctype$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formenctype'));
    },
    set: function (_formenctype) {
      this._formenctype$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formenctype'), _formenctype);
    }
  });
  Object.defineProperty(Input.prototype, '_formmethod', {
    get: function () {
      return this._formmethod$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formmethod'));
    },
    set: function (_formmethod) {
      this._formmethod$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formmethod'), _formmethod);
    }
  });
  Object.defineProperty(Input.prototype, '_formnovalidate', {
    get: function () {
      return this._formnovalidate$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formnovalidate'));
    },
    set: function (_formnovalidate) {
      this._formnovalidate$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formnovalidate'), _formnovalidate);
    }
  });
  Object.defineProperty(Input.prototype, '_formtarget', {
    get: function () {
      return this._formtarget$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_formtarget'));
    },
    set: function (_formtarget) {
      this._formtarget$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_formtarget'), _formtarget);
    }
  });
  Object.defineProperty(Input.prototype, '_height', {
    get: function () {
      return this._height$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_height'));
    },
    set: function (_height) {
      this._height$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_height'), _height);
    }
  });
  Object.defineProperty(Input.prototype, '_inputmode', {
    get: function () {
      return this._inputmode$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_inputmode'));
    },
    set: function (_inputmode) {
      this._inputmode$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_inputmode'), _inputmode);
    }
  });
  Object.defineProperty(Input.prototype, '_list', {
    get: function () {
      return this._list$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_list'));
    },
    set: function (_list) {
      this._list$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_list'), _list);
    }
  });
  Object.defineProperty(Input.prototype, '_max', {
    get: function () {
      return this._max$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_max'));
    },
    set: function (_max) {
      this._max$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_max'), _max);
    }
  });
  Object.defineProperty(Input.prototype, '_maxlength', {
    get: function () {
      return this._maxlength$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_maxlength'));
    },
    set: function (_maxlength) {
      this._maxlength$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_maxlength'), _maxlength);
    }
  });
  Object.defineProperty(Input.prototype, '_min', {
    get: function () {
      return this._min$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_min'));
    },
    set: function (_min) {
      this._min$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_min'), _min);
    }
  });
  Object.defineProperty(Input.prototype, '_minlength', {
    get: function () {
      return this._minlength$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_minlength'));
    },
    set: function (_minlength) {
      this._minlength$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_minlength'), _minlength);
    }
  });
  Object.defineProperty(Input.prototype, '_multiple', {
    get: function () {
      return this._multiple$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_multiple'));
    },
    set: function (_multiple) {
      this._multiple$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_multiple'), _multiple);
    }
  });
  Object.defineProperty(Input.prototype, '_name', {
    get: function () {
      return this._name$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_name'));
    },
    set: function (_name) {
      this._name$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_name'), _name);
    }
  });
  Object.defineProperty(Input.prototype, '_pattern', {
    get: function () {
      return this._pattern$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_pattern'));
    },
    set: function (_pattern) {
      this._pattern$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_pattern'), _pattern);
    }
  });
  Object.defineProperty(Input.prototype, '_placeholder', {
    get: function () {
      return this._placeholder$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_placeholder'));
    },
    set: function (_placeholder) {
      this._placeholder$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_placeholder'), _placeholder);
    }
  });
  Object.defineProperty(Input.prototype, '_readonly', {
    get: function () {
      return this._readonly$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_readonly'));
    },
    set: function (_readonly) {
      this._readonly$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_readonly'), _readonly);
    }
  });
  Object.defineProperty(Input.prototype, '_required', {
    get: function () {
      return this._required$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_required'));
    },
    set: function (_required) {
      this._required$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_required'), _required);
    }
  });
  Object.defineProperty(Input.prototype, '_size', {
    get: function () {
      return this._size$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_size'));
    },
    set: function (_size) {
      this._size$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_size'), _size);
    }
  });
  Object.defineProperty(Input.prototype, '_src', {
    get: function () {
      return this._src$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_src'));
    },
    set: function (_src) {
      this._src$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_src'), _src);
    }
  });
  Object.defineProperty(Input.prototype, '_step', {
    get: function () {
      return this._step$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_step'));
    },
    set: function (_step) {
      this._step$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_step'), _step);
    }
  });
  Object.defineProperty(Input.prototype, '_width', {
    get: function () {
      return this._width$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_width'));
    },
    set: function (_width) {
      this._width$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_width'), _width);
    }
  });
  function Input$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Input$Type_initFields() {
    Input$Type_initFields = function () {
    };
    Input$Type$hidden_instance = new Input$Type('hidden', 0);
    Input$Type$text_instance = new Input$Type('text', 1);
    Input$Type$number_instance = new Input$Type('number', 2);
    Input$Type$radio_instance = new Input$Type('radio', 3);
  }
  var Input$Type$hidden_instance;
  function Input$Type$hidden_getInstance() {
    Input$Type_initFields();
    return Input$Type$hidden_instance;
  }
  var Input$Type$text_instance;
  function Input$Type$text_getInstance() {
    Input$Type_initFields();
    return Input$Type$text_instance;
  }
  var Input$Type$number_instance;
  function Input$Type$number_getInstance() {
    Input$Type_initFields();
    return Input$Type$number_instance;
  }
  var Input$Type$radio_instance;
  function Input$Type$radio_getInstance() {
    Input$Type_initFields();
    return Input$Type$radio_instance;
  }
  Input$Type.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Input$Type$values() {
    return [Input$Type$hidden_getInstance(), Input$Type$text_getInstance(), Input$Type$number_getInstance(), Input$Type$radio_getInstance()];
  }
  Input$Type.values = Input$Type$values;
  function Input$Type$valueOf(name) {
    switch (name) {
      case 'hidden':
        return Input$Type$hidden_getInstance();
      case 'text':
        return Input$Type$text_getInstance();
      case 'number':
        return Input$Type$number_getInstance();
      case 'radio':
        return Input$Type$radio_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.Input.Type.' + name);
    }
  }
  Input$Type.valueOf_61zpoe$ = Input$Type$valueOf;
  Input.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Input',
    interfaces: [Element]
  };
  function InputText() {
    Input.call(this, Input$Type$text_getInstance());
  }
  InputText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputText',
    interfaces: [Input]
  };
  function InputRadio() {
    Input.call(this, Input$Type$radio_getInstance());
  }
  InputRadio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputRadio',
    interfaces: [Input]
  };
  function InputNumber() {
    Input.call(this, Input$Type$number_getInstance());
  }
  Object.defineProperty(InputNumber.prototype, 'doubleValue', {
    get: function () {
      var tmp$;
      if (Kotlin.callGetter(this, Input.prototype, 'value') == null) {
        return null;
      }
       else {
        return toDouble((tmp$ = Kotlin.callGetter(this, Input.prototype, 'value')) != null ? tmp$ : Kotlin.throwNPE());
      }
    },
    set: function (value) {
      Kotlin.callSetter(this, Input.prototype, 'value', Kotlin.toString(value));
    }
  });
  Object.defineProperty(InputNumber.prototype, 'intValue', {
    get: function () {
      var tmp$;
      if (Kotlin.callGetter(this, Input.prototype, 'value') == null) {
        return null;
      }
       else {
        return toInt((tmp$ = Kotlin.callGetter(this, Input.prototype, 'value')) != null ? tmp$ : Kotlin.throwNPE());
      }
    },
    set: function (value) {
      Kotlin.callSetter(this, Input.prototype, 'value', Kotlin.toString(value));
    }
  });
  InputNumber.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputNumber',
    interfaces: [Input]
  };
  function Label(labelFor) {
    if (labelFor === void 0)
      labelFor = null;
    Element.call(this, 'label');
    this._for$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('for');
    this._for = labelFor;
  }
  Object.defineProperty(Label.prototype, '_for', {
    get: function () {
      return this._for$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_for'));
    },
    set: function (_for) {
      this._for$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_for'), _for);
    }
  });
  Label.prototype.render = function () {
    Element.prototype.render.call(this);
  };
  Label.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Label',
    interfaces: [Element]
  };
  function P() {
    Element.call(this, 'p');
  }
  P.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'P',
    interfaces: [Element]
  };
  function Hr() {
    Element.call(this, 'hr');
  }
  Hr.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hr',
    interfaces: [Element]
  };
  function Pre() {
    Element.call(this, 'pre');
  }
  Pre.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pre',
    interfaces: [Element]
  };
  function Blockquote() {
    Element.call(this, 'blockquote');
  }
  Blockquote.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Blockquote',
    interfaces: [Element]
  };
  function Ol() {
    Element.call(this, 'ol');
  }
  Ol.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ol',
    interfaces: [Element]
  };
  function Ul() {
    Element.call(this, 'ul');
  }
  Ul.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ul',
    interfaces: [Element]
  };
  function Li() {
    Element.call(this, 'li');
  }
  Li.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Li',
    interfaces: [Element]
  };
  function Dl() {
    Element.call(this, 'dl');
  }
  Dl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dl',
    interfaces: [Element]
  };
  function Dt() {
    Element.call(this, 'dt');
  }
  Dt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dt',
    interfaces: [Element]
  };
  function Dd() {
    Element.call(this, 'dd');
  }
  Dd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dd',
    interfaces: [Element]
  };
  function Figure() {
    Element.call(this, 'figure');
  }
  Figure.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Figure',
    interfaces: [Element]
  };
  function Figcaption() {
    Element.call(this, 'figcaption');
  }
  Figcaption.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Figcaption',
    interfaces: [Element]
  };
  function Div() {
    Element.call(this, 'div');
  }
  Div.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Div',
    interfaces: [Element]
  };
  function Main() {
    Element.call(this, 'main');
  }
  Main.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Main',
    interfaces: [Element]
  };
  var HTML;
  function Html(w3cElement) {
    Html$Html_getInstance();
    var tmp$;
    if (w3cElement === void 0)
      w3cElement = (tmp$ = document.documentElement) != null ? tmp$ : Kotlin.throwNPE();
    this.w3cElement = w3cElement;
    this.stylesheet$delegate = lazy(Html$stylesheet$lambda);
    this.registeredClassStyles_0 = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
  }
  Object.defineProperty(Html.prototype, 'stylesheet_0', {
    get: function () {
      var $receiver = this.stylesheet$delegate;
      new Kotlin.PropertyMetadata('stylesheet');
      return $receiver.value;
    }
  });
  function Html$init$lambda($receiver) {
    $receiver._boxSizing = 'border-box';
  }
  function Html$init$lambda_0($receiver) {
    $receiver._height = '100%';
  }
  function Html$init$lambda_1($receiver) {
    $receiver._height = '100%';
  }
  Html.prototype.init_dqye30$ = function (borderBox, height100percent) {
    if (borderBox === void 0)
      borderBox = true;
    if (height100percent === void 0)
      height100percent = true;
    if (borderBox) {
      this.addCSSRule_t83c1i$(with_0(new AnyRule(), Html$init$lambda));
    }
    if (height100percent) {
      this.addCSSRule_t83c1i$(with_0(new TypeRule(new TypeSelector('html')), Html$init$lambda_0));
      this.addCSSRule_t83c1i$(with_0(new TypeRule(new TypeSelector('body')), Html$init$lambda_1));
    }
    BODY.init_0();
  };
  function Html$registerStyle$rule(closure$styledClass) {
    return function (styledClass, init) {
      if (init === void 0)
        init = closure$styledClass.rule;
      var style = new ClassRule(styledClass.classSelector);
      init(style);
      return style;
    };
  }
  Html.prototype.registerStyle_78phyd$ = function (styledClass) {
    var rule = Html$registerStyle$rule(styledClass);
    var rule_2 = rule(styledClass, styledClass.rule);
    this.registerCSSRule_t83c1i$(rule_2);
  };
  function Html$registerStyle$rule_0(closure$styledClass) {
    return function (styledClass, init) {
      if (init === void 0)
        init = closure$styledClass.rule;
      var style = new TypedClassRule(styledClass.classSelector);
      init(style);
      return style;
    };
  }
  Html.prototype.registerStyle_mpomjf$ = function (styledClass) {
    var rule_0 = Html$registerStyle$rule_0(styledClass);
    var rule_2 = rule_0(styledClass, styledClass.rule);
    this.registerCSSRule_t83c1i$(rule_2);
  };
  Html.prototype.registerCSSRule_t83c1i$ = function (rule_2) {
    var existing = this.registeredClassStyles_0.put_xwzc9p$(rule_2.selector.toString(), rule_2);
    if (existing == null) {
      this.addCSSRule_t83c1i$(rule_2);
    }
  };
  Html.prototype.addCSSRule_t83c1i$ = function (rule_2) {
    var ruleText = rule_2.cssText();
    console.log(ruleText);
    this.stylesheet_0.insertRule(ruleText, this.stylesheet_0.cssRules.length);
    if (!Kotlin.isType(rule_2, KeyframesRule)) {
      var tmp$;
      tmp$ = rule_2._childStyles_1851tg$_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        this.registerCSSRule_t83c1i$(element);
      }
    }
  };
  function Html$Html() {
    Html$Html_instance = this;
  }
  Html$Html.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Html',
    interfaces: []
  };
  var Html$Html_instance = null;
  function Html$Html_getInstance() {
    if (Html$Html_instance === null) {
      new Html$Html();
    }
    return Html$Html_instance;
  }
  function Html$stylesheet$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.styleSheets[0], CSSStyleSheet) ? tmp$ : Kotlin.throwCCE();
  }
  Html.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Html',
    interfaces: []
  };
  function onDOMContentLoaded($receiver, listener) {
    document.addEventListener('DOMContentLoaded', listener);
  }
  function onLoad($receiver, listener) {
    $receiver.window.addEventListener('load', listener);
  }
  function AbstractLayout(direction) {
    AbstractLayout$Statics_getInstance();
    this.direction$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(AbstractLayout$direction$lambda, direction);
  }
  Object.defineProperty(AbstractLayout.prototype, 'direction', {
    get: function () {
      return this.direction$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('direction'));
    },
    set: function (direction) {
      this.direction$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('direction'), direction);
    }
  });
  AbstractLayout.prototype.apply_54c9de$ = function (element) {
    element.w3cElement_gobymg$_0.setAttribute('data-fg-layout', this.direction.name);
    element.style.display = Display$flex_getInstance();
    element.style.flexDirection = this.direction.flex;
  };
  function AbstractLayout$Statics() {
    AbstractLayout$Statics_instance = this;
    this.ROW = new Layout(Direction$ROW_getInstance());
    this.COLUMN = new Layout(Direction$COLUMN_getInstance());
  }
  AbstractLayout$Statics.prototype.from_54c9de$ = function (element) {
    var layoutDir = Direction$Statics_getInstance().from_pdl1vj$(element.w3cElement_gobymg$_0.getAttribute('data-fg-layout'));
    return toLayout(layoutDir);
  };
  AbstractLayout$Statics.prototype.remove_54c9de$ = function (element) {
    element.w3cElement_gobymg$_0.removeAttribute('data-fg-layout');
  };
  AbstractLayout$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var AbstractLayout$Statics_instance = null;
  function AbstractLayout$Statics_getInstance() {
    if (AbstractLayout$Statics_instance === null) {
      new AbstractLayout$Statics();
    }
    return AbstractLayout$Statics_instance;
  }
  function AbstractLayout$direction$lambda(property, old, new_0) {
  }
  AbstractLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbstractLayout',
    interfaces: []
  };
  function Breakpoint() {
  }
  Breakpoint.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Breakpoint',
    interfaces: []
  };
  function DefaultBreakpoints(name, ordinal, range) {
    Enum.call(this);
    this.range = range;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DefaultBreakpoints_initFields() {
    DefaultBreakpoints_initFields = function () {
    };
    DefaultBreakpoints$xsmall_instance = new DefaultBreakpoints('xsmall', 0, new IntRange(0, 599));
    DefaultBreakpoints$small_instance = new DefaultBreakpoints('small', 1, new IntRange(600, 959));
    DefaultBreakpoints$medium_instance = new DefaultBreakpoints('medium', 2, new IntRange(960, 1279));
    DefaultBreakpoints$large_instance = new DefaultBreakpoints('large', 3, new IntRange(1280, 1919));
    DefaultBreakpoints$xlarge_instance = new DefaultBreakpoints('xlarge', 4, new IntRange(1920, IntCompanionObject.MAX_VALUE));
  }
  var DefaultBreakpoints$xsmall_instance;
  function DefaultBreakpoints$xsmall_getInstance() {
    DefaultBreakpoints_initFields();
    return DefaultBreakpoints$xsmall_instance;
  }
  var DefaultBreakpoints$small_instance;
  function DefaultBreakpoints$small_getInstance() {
    DefaultBreakpoints_initFields();
    return DefaultBreakpoints$small_instance;
  }
  var DefaultBreakpoints$medium_instance;
  function DefaultBreakpoints$medium_getInstance() {
    DefaultBreakpoints_initFields();
    return DefaultBreakpoints$medium_instance;
  }
  var DefaultBreakpoints$large_instance;
  function DefaultBreakpoints$large_getInstance() {
    DefaultBreakpoints_initFields();
    return DefaultBreakpoints$large_instance;
  }
  var DefaultBreakpoints$xlarge_instance;
  function DefaultBreakpoints$xlarge_getInstance() {
    DefaultBreakpoints_initFields();
    return DefaultBreakpoints$xlarge_instance;
  }
  DefaultBreakpoints.prototype.contains_14dthe$ = function (x) {
    return contains_0(this.range, x);
  };
  DefaultBreakpoints.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DefaultBreakpoints',
    interfaces: [Breakpoint, Enum]
  };
  function DefaultBreakpoints$values() {
    return [DefaultBreakpoints$xsmall_getInstance(), DefaultBreakpoints$small_getInstance(), DefaultBreakpoints$medium_getInstance(), DefaultBreakpoints$large_getInstance(), DefaultBreakpoints$xlarge_getInstance()];
  }
  DefaultBreakpoints.values = DefaultBreakpoints$values;
  function DefaultBreakpoints$valueOf(name) {
    switch (name) {
      case 'xsmall':
        return DefaultBreakpoints$xsmall_getInstance();
      case 'small':
        return DefaultBreakpoints$small_getInstance();
      case 'medium':
        return DefaultBreakpoints$medium_getInstance();
      case 'large':
        return DefaultBreakpoints$large_getInstance();
      case 'xlarge':
        return DefaultBreakpoints$xlarge_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.layout.DefaultBreakpoints.' + name);
    }
  }
  DefaultBreakpoints.valueOf_61zpoe$ = DefaultBreakpoints$valueOf;
  function Direction(name, ordinal, flex) {
    Direction$Statics_getInstance();
    Enum.call(this);
    this.flex = flex;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$ROW_instance = new Direction('ROW', 0, FlexDirection$row_getInstance());
    Direction$COLUMN_instance = new Direction('COLUMN', 1, FlexDirection$column_getInstance());
  }
  var Direction$ROW_instance;
  function Direction$ROW_getInstance() {
    Direction_initFields();
    return Direction$ROW_instance;
  }
  var Direction$COLUMN_instance;
  function Direction$COLUMN_getInstance() {
    Direction_initFields();
    return Direction$COLUMN_instance;
  }
  function Direction$Statics() {
    Direction$Statics_instance = this;
  }
  Direction$Statics.prototype.from_pdl1vj$ = function (string) {
    if (string == null) {
      return null;
    }
    return Direction$valueOf(string);
  };
  Direction$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Direction$Statics_instance = null;
  function Direction$Statics_getInstance() {
    if (Direction$Statics_instance === null) {
      new Direction$Statics();
    }
    return Direction$Statics_instance;
  }
  Direction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$ROW_getInstance(), Direction$COLUMN_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'ROW':
        return Direction$ROW_getInstance();
      case 'COLUMN':
        return Direction$COLUMN_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.layout.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function toLayout($receiver) {
    if ($receiver == null) {
      return null;
    }
    return new Layout($receiver);
  }
  function setLayout($receiver, direction, init) {
    var layout = new Layout(direction);
    init(layout);
    $receiver.layout = layout;
  }
  function xsmall($receiver, direction, init) {
    var breakpoint = new LayoutBreakpoint(direction, DefaultBreakpoints$xsmall_getInstance());
    init(breakpoint);
    $receiver.addBreakpoint_7i97bf$(breakpoint);
  }
  function small($receiver, direction, init) {
    var breakpoint = new LayoutBreakpoint(direction, DefaultBreakpoints$small_getInstance());
    init(breakpoint);
    $receiver.addBreakpoint_7i97bf$(breakpoint);
  }
  function medium($receiver, direction, init) {
    var breakpoint = new LayoutBreakpoint(direction, DefaultBreakpoints$medium_getInstance());
    init(breakpoint);
    $receiver.addBreakpoint_7i97bf$(breakpoint);
  }
  function large($receiver, direction, init) {
    var breakpoint = new LayoutBreakpoint(direction, DefaultBreakpoints$large_getInstance());
    init(breakpoint);
    $receiver.addBreakpoint_7i97bf$(breakpoint);
  }
  function xlarge($receiver, direction, init) {
    var breakpoint = new LayoutBreakpoint(direction, DefaultBreakpoints$xlarge_getInstance());
    init(breakpoint);
    $receiver.addBreakpoint_7i97bf$(breakpoint);
  }
  function Layout(direction) {
    Layout$Statics_getInstance();
    AbstractLayout.call(this, direction);
    this.breakpoints_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  Layout.prototype.addBreakpoint_7i97bf$ = function (breakpoint) {
    this.breakpoints_0.add_11rb$(breakpoint);
  };
  Layout.prototype.find_14dthe$ = function (width) {
    var $receiver = this.breakpoints_0;
    var firstOrNull_6jwkkr$result;
    firstOrNull_6jwkkr$break: {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.breakpoint.contains_14dthe$(width)) {
          firstOrNull_6jwkkr$result = element;
          break firstOrNull_6jwkkr$break;
        }
      }
      firstOrNull_6jwkkr$result = null;
    }
    return firstOrNull_6jwkkr$result;
  };
  function Layout$Statics() {
    Layout$Statics_instance = this;
  }
  Layout$Statics.prototype.from_54c9de$ = function (element) {
    var layoutDir = Direction$Statics_getInstance().from_pdl1vj$(element.w3cElement_gobymg$_0.getAttribute('data-fg-layout'));
    return toLayout(layoutDir);
  };
  Layout$Statics.prototype.remove_54c9de$ = function (element) {
    element.w3cElement_gobymg$_0.removeAttribute('data-fg-layout');
  };
  Layout$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Layout$Statics_instance = null;
  function Layout$Statics_getInstance() {
    if (Layout$Statics_instance === null) {
      new Layout$Statics();
    }
    return Layout$Statics_instance;
  }
  Layout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layout',
    interfaces: [AbstractLayout]
  };
  function LayoutBreakpoint(direction, breakpoint) {
    AbstractLayout.call(this, direction);
    this.breakpoint = breakpoint;
  }
  LayoutBreakpoint.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LayoutBreakpoint',
    interfaces: [AbstractLayout]
  };
  function LayoutDelegate() {
    this._layout_0 = null;
    this._element$delegate = properties_0.Delegates.notNull_30y1fr$();
    this.resizedHandler_0 = LayoutDelegate$resizedHandler$lambda(this);
  }
  Object.defineProperty(LayoutDelegate.prototype, '_element_0', {
    get: function () {
      return this._element$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_element'));
    },
    set: function (_element) {
      this._element$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_element'), _element);
    }
  });
  LayoutDelegate.prototype.doHandleResize_0 = function (layout, resizedEvent) {
    var breakpoint = layout.find_14dthe$(resizedEvent.width);
    if (breakpoint != null) {
      breakpoint.apply_54c9de$(this._element_0);
    }
     else {
      layout.apply_54c9de$(this._element_0);
    }
  };
  LayoutDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this._layout_0;
  };
  LayoutDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this._element_0 = thisRef;
    if (value != null) {
      value.apply_54c9de$(thisRef);
      thisRef.onResized_sdolbl$(this.resizedHandler_0);
    }
     else {
      thisRef.unResized_sdolbl$(this.resizedHandler_0);
      Layout$Statics_getInstance().remove_54c9de$(thisRef);
    }
    this._layout_0 = value;
  };
  function LayoutDelegate$resizedHandler$lambda(this$LayoutDelegate) {
    return function (event) {
      var tmp$, tmp$_0;
      if (this$LayoutDelegate._layout_0 != null) {
        tmp$_0 = (tmp$ = this$LayoutDelegate._layout_0) != null ? tmp$ : Kotlin.throwNPE();
        this$LayoutDelegate.doHandleResize_0(tmp$_0, event);
      }
    };
  }
  LayoutDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LayoutDelegate',
    interfaces: [ReadWriteProperty]
  };
  function Node(w3cNode) {
    this.w3cNode_w5cupa$_0 = w3cNode;
    this._childNodes_w5cupa$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this._childrenMountInstructions_w5cupa$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.rendering_w5cupa$_0 = false;
    this.rendered_w5cupa$_0 = false;
    this._parentNode_w5cupa$_0 = null;
  }
  Object.defineProperty(Node.prototype, 'childNodes', {
    get: function () {
      return this._childNodes_w5cupa$_0;
    }
  });
  Object.defineProperty(Node.prototype, 'rendering', {
    get: function () {
      return this.rendering_w5cupa$_0;
    },
    set: function (rendering) {
      this.rendering_w5cupa$_0 = rendering;
    }
  });
  Object.defineProperty(Node.prototype, 'rendered', {
    get: function () {
      return this.rendered_w5cupa$_0;
    },
    set: function (rendered) {
      this.rendered_w5cupa$_0 = rendered;
    }
  });
  Object.defineProperty(Node.prototype, '_nodeName', {
    get: function () {
      return this.w3cNode_w5cupa$_0.nodeName;
    }
  });
  Object.defineProperty(Node.prototype, 'mounted', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this._parentNode_w5cupa$_0) != null ? tmp$.w3cNode_w5cupa$_0 : null) != null ? tmp$_0.contains(this.w3cNode_w5cupa$_0) : null) != null ? tmp$_1 : false;
    }
  });
  Object.defineProperty(Node.prototype, 'textContent', {
    get: function () {
      return this.w3cNode_w5cupa$_0.textContent;
    },
    set: function (value) {
      this.removeChildren();
      if (value != null) {
        this.w3cNode_w5cupa$_0.textContent = value;
        this._childNodes_w5cupa$_0.addAll_brywnq$(this.parseChildrenFromDOM_w5cupa$_0());
      }
    }
  });
  Node.prototype.hasChild_sr04hg$ = function (child_1) {
    return this._childNodes_w5cupa$_0.contains_11rb$(child_1);
  };
  Node.prototype.prependChild_sr04hg$ = function (node) {
    if (this._childNodes_w5cupa$_0.isEmpty()) {
      this.appendChild_sr04hg$(node);
      return node;
    }
     else {
      this.insertBefore_p937mc$(node, first(this._childNodes_w5cupa$_0));
      return node;
    }
  };
  function Node$insertBefore$lambda(this$Node, closure$child) {
    return function (it) {
      this$Node.w3cNode_w5cupa$_0.insertBefore(it.w3cNode_w5cupa$_0, closure$child.w3cNode_w5cupa$_0);
    };
  }
  Node.prototype.insertBefore_p937mc$ = function (node, child_1) {
    if (node._parentNode_w5cupa$_0 != null) {
      throw new IllegalStateException("Node cannot be added. It's already added. Please remove it first.");
    }
    var childIndex = this._childNodes_w5cupa$_0.indexOf_11rb$(child_1);
    if (childIndex === -1) {
      throw new IllegalArgumentException('reference ' + child_1.w3cNode_w5cupa$_0.nodeName + ' is expected as child');
    }
    node._parentNode_w5cupa$_0 = this;
    if (Kotlin.isType(node, Element) && (this.rendering || this.rendered) && !child_1.rendered) {
      node.rendering = true;
      node.callRender_gobymg$_0();
      node.rendered = true;
      node.rendering = false;
      node.renderChildren_w5cupa$_0();
    }
    var mountFn = Node$insertBefore$lambda(this, child_1);
    if (this.mounted) {
      this.mountChild_twsohh$_0(mountFn, node);
      this.mountChildren_w5cupa$_0();
    }
     else {
      this._childrenMountInstructions_w5cupa$_0.add_11rb$(new Pair(mountFn, node));
    }
    this._childNodes_w5cupa$_0.add_wxm5ur$(childIndex, node);
    this.childAdded_sr04hg$(node);
    return node;
  };
  function Node$appendChild$lambda(this$Node) {
    return function (it) {
      this$Node.w3cNode_w5cupa$_0.appendChild(it.w3cNode_w5cupa$_0);
    };
  }
  Node.prototype.appendChild_sr04hg$ = function (node) {
    if (node._parentNode_w5cupa$_0 != null) {
      throw new IllegalStateException("Node cannot be added. It's already added. Please remove it first.");
    }
    node._parentNode_w5cupa$_0 = this;
    if (Kotlin.isType(node, Element) && (this.rendering || this.rendered) && !node.rendered) {
      node.rendering = true;
      node.callRender_gobymg$_0();
      node.rendered = true;
      node.rendering = false;
      node.renderChildren_w5cupa$_0();
    }
    var mountFn = Node$appendChild$lambda(this);
    if (this.mounted) {
      this.mountChild_twsohh$_0(mountFn, node);
      node.mountChildren_w5cupa$_0();
    }
     else {
      this._childrenMountInstructions_w5cupa$_0.add_11rb$(new Pair(mountFn, node));
    }
    this._childNodes_w5cupa$_0.add_11rb$(node);
    this.childAdded_sr04hg$(node);
    return node;
  };
  Node.prototype.parseChildrenFromDOM_w5cupa$_0 = function () {
    var tmp$;
    var nodes = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var childW3cNodes = this.w3cNode_w5cupa$_0.childNodes;
    tmp$ = childW3cNodes.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      var childNode = childW3cNodes[i_0];
      if (Kotlin.isType(childNode, HTMLElement))
        nodes.add_11rb$(new Element(void 0, childNode));
      else if (Kotlin.isType(childNode, Text))
        nodes.add_11rb$(new Text_0(void 0, childNode));
    }
    return nodes;
  };
  Node.prototype.renderChildren_w5cupa$_0 = function () {
    var tmp$;
    tmp$ = this._childNodes_w5cupa$_0.iterator();
    while (tmp$.hasNext()) {
      var child_1 = tmp$.next();
      if (Kotlin.isType(child_1, Element) && !child_1.rendered) {
        child_1.callRender_gobymg$_0();
        child_1.rendered = true;
      }
      child_1.renderChildren_w5cupa$_0();
    }
  };
  Node.prototype.mountChild_twsohh$_0 = function (mountFn, child_1) {
    mountFn(child_1);
    if (Kotlin.isType(child_1, Element)) {
      child_1.callDidMount_gobymg$_0();
    }
  };
  Node.prototype.mountChildren_w5cupa$_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this._childrenMountInstructions_w5cupa$_0.iterator();
    while (tmp$.hasNext()) {
      var mountFn_n_child = tmp$.next();
      this.mountChild_twsohh$_0(mountFn_n_child.first, mountFn_n_child.second);
    }
    this._childrenMountInstructions_w5cupa$_0.clear();
    tmp$_0 = this._childNodes_w5cupa$_0.iterator();
    while (tmp$_0.hasNext()) {
      var child_1 = tmp$_0.next();
      child_1.mountChildren_w5cupa$_0();
    }
  };
  Node.prototype.removeChildren = function () {
    while (!this._childNodes_w5cupa$_0.isEmpty()) {
      this.removeChild_sr04hg$(first(this._childNodes_w5cupa$_0));
    }
  };
  Node.prototype.removeChild_sr04hg$ = function (node) {
    if (Kotlin.isType(node, Element)) {
      node.callWillUnMount_gobymg$_0();
    }
    if (this.mounted) {
      this.w3cNode_w5cupa$_0.removeChild(node.w3cNode_w5cupa$_0);
    }
    this._childNodes_w5cupa$_0.remove_11rb$(node);
    node._parentNode_w5cupa$_0 = null;
    this.childRemoved_sr04hg$(this);
  };
  Node.prototype.removeSelf = function () {
    var tmp$;
    (tmp$ = this._parentNode_w5cupa$_0) != null ? tmp$.removeChild_sr04hg$(this) : null;
  };
  Node.prototype.childAdded_sr04hg$ = function (child_1) {
  };
  Node.prototype.childRemoved_sr04hg$ = function (child_1) {
  };
  Node.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function Article() {
    Element.call(this, 'article');
  }
  Article.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Article',
    interfaces: [Element]
  };
  function Section() {
    Element.call(this, 'section');
  }
  Section.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Section',
    interfaces: [Element]
  };
  function Nav() {
    Element.call(this, 'nav');
  }
  Nav.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Nav',
    interfaces: [Element]
  };
  function Aside() {
    Element.call(this, 'aside');
  }
  Aside.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Aside',
    interfaces: [Element]
  };
  function H1() {
    Element.call(this, 'h1');
  }
  H1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H1',
    interfaces: [Element]
  };
  function H2() {
    Element.call(this, 'h2');
  }
  H2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H2',
    interfaces: [Element]
  };
  function H3() {
    Element.call(this, 'h3');
  }
  H3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H3',
    interfaces: [Element]
  };
  function H4() {
    Element.call(this, 'h4');
  }
  H4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H4',
    interfaces: [Element]
  };
  function H5() {
    Element.call(this, 'h5');
  }
  H5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H5',
    interfaces: [Element]
  };
  function H6() {
    Element.call(this, 'h6');
  }
  H6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H6',
    interfaces: [Element]
  };
  function Header() {
    Element.call(this, 'header');
  }
  Header.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Header',
    interfaces: [Element]
  };
  function Footer() {
    Element.call(this, 'footer');
  }
  Footer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Footer',
    interfaces: [Element]
  };
  function Address() {
    Element.call(this, 'address');
  }
  Address.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Address',
    interfaces: [Element]
  };
  function Selector() {
    Selector$Statics_getInstance();
  }
  function Selector$Statics() {
    Selector$Statics_instance = this;
    this.ANY = new AnySelector();
  }
  Selector$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Selector$Statics_instance = null;
  function Selector$Statics_getInstance() {
    if (Selector$Statics_instance === null) {
      new Selector$Statics();
    }
    return Selector$Statics_instance;
  }
  Selector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Selector',
    interfaces: []
  };
  function AnySelector() {
    AnySelector$Statics_getInstance();
    Selector.call(this);
  }
  AnySelector.prototype.toString = function () {
    return '*';
  };
  function AnySelector$Statics() {
    AnySelector$Statics_instance = this;
    this.GET = new AnySelector();
  }
  AnySelector$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var AnySelector$Statics_instance = null;
  function AnySelector$Statics_getInstance() {
    if (AnySelector$Statics_instance === null) {
      new AnySelector$Statics();
    }
    return AnySelector$Statics_instance;
  }
  AnySelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AnySelector',
    interfaces: [Selector]
  };
  function AnimationNameSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  AnimationNameSelector.prototype.toString = function () {
    return this.value;
  };
  AnimationNameSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AnimationNameSelector',
    interfaces: [Selector]
  };
  function KeyframeSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  KeyframeSelector.prototype.toString = function () {
    return this.value;
  };
  KeyframeSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyframeSelector',
    interfaces: [Selector]
  };
  function TypeSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  TypeSelector.prototype.toString = function () {
    return this.value;
  };
  TypeSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypeSelector',
    interfaces: [Selector]
  };
  function ClassSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  ClassSelector.prototype.toString = function () {
    return '.' + this.value;
  };
  ClassSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClassSelector',
    interfaces: [Selector]
  };
  function IdSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  IdSelector.prototype.toString = function () {
    return '#' + this.value;
  };
  IdSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IdSelector',
    interfaces: [Selector]
  };
  function AttrSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  AttrSelector.prototype.toString = function () {
    return '[' + this.value + ']';
  };
  AttrSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AttrSelector',
    interfaces: [Selector]
  };
  function PseudoClassSelector(value) {
    Selector.call(this);
    this.value = value;
  }
  PseudoClassSelector.prototype.toString = function () {
    return ':' + this.value;
  };
  PseudoClassSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PseudoClassSelector',
    interfaces: [Selector]
  };
  function CompositeSelector(a_0, combinator, b) {
    Selector.call(this);
    this.a = a_0;
    this.combinator = combinator;
    this.b = b;
  }
  CompositeSelector.prototype.toString = function () {
    return this.a.toString() + ' ' + this.combinator + ' ' + this.b.toString();
  };
  CompositeSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CompositeSelector',
    interfaces: [Selector]
  };
  function ChildSelector(a_0, b) {
    CompositeSelector.call(this, a_0, '>', b);
  }
  ChildSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ChildSelector',
    interfaces: [CompositeSelector]
  };
  function AdjacentSiblingSelector(a_0, b) {
    CompositeSelector.call(this, a_0, '+', b);
  }
  AdjacentSiblingSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AdjacentSiblingSelector',
    interfaces: [CompositeSelector]
  };
  function GeneralSiblingSelector(a_0, b) {
    CompositeSelector.call(this, a_0, '~', b);
  }
  GeneralSiblingSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GeneralSiblingSelector',
    interfaces: [CompositeSelector]
  };
  function DescendantSelector(a_0, b) {
    CompositeSelector.call(this, a_0, '', b);
  }
  DescendantSelector.prototype.toString = function () {
    return this.a.toString() + ' ' + this.b.toString();
  };
  DescendantSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DescendantSelector',
    interfaces: [CompositeSelector]
  };
  function AndSelector(a_0, b) {
    CompositeSelector.call(this, a_0, '', b);
  }
  AndSelector.prototype.toString = function () {
    return this.a.toString() + this.b.toString();
  };
  AndSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AndSelector',
    interfaces: [CompositeSelector]
  };
  function NotSelector(selector) {
    Selector.call(this);
    this.selector = selector;
  }
  NotSelector.prototype.toString = function () {
    return ':not(' + this.selector + ')';
  };
  NotSelector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NotSelector',
    interfaces: [Selector]
  };
  function toSelector($receiver) {
    if (startsWith($receiver, ':')) {
      return new PseudoClassSelector(substringAfter($receiver, ':'));
    }
     else if (startsWith($receiver, '.')) {
      return new ClassSelector(substringAfter($receiver, '.'));
    }
     else if (startsWith($receiver, '#')) {
      return new IdSelector(substringAfter($receiver, '#'));
    }
     else if (Kotlin.equals($receiver, '*')) {
      return new AnySelector();
    }
     else {
      return new TypeSelector($receiver);
    }
  }
  function toClassSelector($receiver) {
    if (startsWith($receiver, '.')) {
      return new ClassSelector(substringAfter($receiver, '.'));
    }
     else {
      return new ClassSelector($receiver);
    }
  }
  function AlignItems(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AlignItems_initFields() {
    AlignItems_initFields = function () {
    };
    AlignItems$flexStart_instance = new AlignItems('flexStart', 0, 'flex-start');
    AlignItems$flexEnd_instance = new AlignItems('flexEnd', 1, 'flex-end');
    AlignItems$center_instance = new AlignItems('center', 2, 'center');
    AlignItems$baseline_instance = new AlignItems('baseline', 3, 'baseline');
    AlignItems$stretch_instance = new AlignItems('stretch', 4, 'stretch');
    AlignItems$inherit_instance = new AlignItems('inherit', 5, 'inherit');
    AlignItems$initial_instance = new AlignItems('initial', 6, 'initial');
    AlignItems$unset_instance = new AlignItems('unset', 7, 'unset');
  }
  var AlignItems$flexStart_instance;
  function AlignItems$flexStart_getInstance() {
    AlignItems_initFields();
    return AlignItems$flexStart_instance;
  }
  var AlignItems$flexEnd_instance;
  function AlignItems$flexEnd_getInstance() {
    AlignItems_initFields();
    return AlignItems$flexEnd_instance;
  }
  var AlignItems$center_instance;
  function AlignItems$center_getInstance() {
    AlignItems_initFields();
    return AlignItems$center_instance;
  }
  var AlignItems$baseline_instance;
  function AlignItems$baseline_getInstance() {
    AlignItems_initFields();
    return AlignItems$baseline_instance;
  }
  var AlignItems$stretch_instance;
  function AlignItems$stretch_getInstance() {
    AlignItems_initFields();
    return AlignItems$stretch_instance;
  }
  var AlignItems$inherit_instance;
  function AlignItems$inherit_getInstance() {
    AlignItems_initFields();
    return AlignItems$inherit_instance;
  }
  var AlignItems$initial_instance;
  function AlignItems$initial_getInstance() {
    AlignItems_initFields();
    return AlignItems$initial_instance;
  }
  var AlignItems$unset_instance;
  function AlignItems$unset_getInstance() {
    AlignItems_initFields();
    return AlignItems$unset_instance;
  }
  AlignItems.prototype.toString = function () {
    return this.asString;
  };
  AlignItems.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AlignItems',
    interfaces: [Enum]
  };
  function AlignItems$values() {
    return [AlignItems$flexStart_getInstance(), AlignItems$flexEnd_getInstance(), AlignItems$center_getInstance(), AlignItems$baseline_getInstance(), AlignItems$stretch_getInstance(), AlignItems$inherit_getInstance(), AlignItems$initial_getInstance(), AlignItems$unset_getInstance()];
  }
  AlignItems.values = AlignItems$values;
  function AlignItems$valueOf(name) {
    switch (name) {
      case 'flexStart':
        return AlignItems$flexStart_getInstance();
      case 'flexEnd':
        return AlignItems$flexEnd_getInstance();
      case 'center':
        return AlignItems$center_getInstance();
      case 'baseline':
        return AlignItems$baseline_getInstance();
      case 'stretch':
        return AlignItems$stretch_getInstance();
      case 'inherit':
        return AlignItems$inherit_getInstance();
      case 'initial':
        return AlignItems$initial_getInstance();
      case 'unset':
        return AlignItems$unset_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.AlignItems.' + name);
    }
  }
  AlignItems.valueOf_61zpoe$ = AlignItems$valueOf;
  function toAlignItems($receiver) {
    var tmp$, tmp$_0;
    tmp$ = AlignItems$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var one = tmp$[tmp$_0];
      if (Kotlin.equals(one.asString, $receiver)) {
        return one;
      }
    }
    throw new IllegalArgumentException('Unknown align-items: ' + $receiver);
  }
  function Border(width, style, color) {
    Border$Companion_getInstance();
    if (width === void 0)
      width = null;
    if (style === void 0)
      style = null;
    if (color === void 0)
      color = null;
    this.width = width;
    this.style = style;
    this.color = color;
  }
  function Border$Companion() {
    Border$Companion_instance = this;
  }
  Border$Companion.prototype.from_54c9de$ = function (element) {
    var widthAsString = element.w3cElement_gobymg$_0.style.getPropertyValue('border-width');
    var width = !Kotlin.kotlin.text.isBlank_gw00vp$(widthAsString) ? toDimension(widthAsString) : null;
    var styleAsString = element.w3cElement_gobymg$_0.style.getPropertyValue('border-style');
    var style = !Kotlin.kotlin.text.isBlank_gw00vp$(styleAsString) ? BorderStyle$valueOf(styleAsString) : null;
    var colorAsString = element.w3cElement_gobymg$_0.style.getPropertyValue('border-color');
    var color = !Kotlin.kotlin.text.isBlank_gw00vp$(colorAsString) ? RgbColor$Factory_getInstance().from_61zpoe$(colorAsString) : null;
    return new Border(width, style, color);
  };
  Border$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Border$Companion_instance = null;
  function Border$Companion_getInstance() {
    if (Border$Companion_instance === null) {
      new Border$Companion();
    }
    return Border$Companion_instance;
  }
  Border.prototype.set_54c9de$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (this.width != null) {
      var borderWidth = (tmp$_0 = (tmp$ = this.width) != null ? tmp$.toHtml() : null) != null ? tmp$_0 : '';
      element.w3cElement_gobymg$_0.style.setProperty('border-width', borderWidth);
    }
     else {
      element.w3cElement_gobymg$_0.style.removeProperty('border-width');
    }
    if (this.style != null) {
      var styleName = (tmp$_2 = (tmp$_1 = this.style) != null ? tmp$_1.name : null) != null ? tmp$_2 : '';
      element.w3cElement_gobymg$_0.style.setProperty('border-style', styleName);
    }
     else {
      element.w3cElement_gobymg$_0.style.removeProperty('border-style');
    }
    if (this.color != null) {
      var color = (tmp$_4 = (tmp$_3 = this.color) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : '';
      element.w3cElement_gobymg$_0.style.setProperty('border-color', color);
    }
     else {
      element.w3cElement_gobymg$_0.style.removeProperty('border-color');
    }
  };
  Border.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Border',
    interfaces: []
  };
  function BorderStyle(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BorderStyle_initFields() {
    BorderStyle_initFields = function () {
    };
    BorderStyle$dashed_instance = new BorderStyle('dashed', 0);
    BorderStyle$double_instance = new BorderStyle('double', 1);
    BorderStyle$dotted_instance = new BorderStyle('dotted', 2);
    BorderStyle$groove_instance = new BorderStyle('groove', 3);
    BorderStyle$ridge_instance = new BorderStyle('ridge', 4);
    BorderStyle$inset_instance = new BorderStyle('inset', 5);
    BorderStyle$outset_instance = new BorderStyle('outset', 6);
    BorderStyle$hidden_instance = new BorderStyle('hidden', 7);
    BorderStyle$solid_instance = new BorderStyle('solid', 8);
    BorderStyle$none_instance = new BorderStyle('none', 9);
  }
  var BorderStyle$dashed_instance;
  function BorderStyle$dashed_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dashed_instance;
  }
  var BorderStyle$double_instance;
  function BorderStyle$double_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$double_instance;
  }
  var BorderStyle$dotted_instance;
  function BorderStyle$dotted_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$dotted_instance;
  }
  var BorderStyle$groove_instance;
  function BorderStyle$groove_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$groove_instance;
  }
  var BorderStyle$ridge_instance;
  function BorderStyle$ridge_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$ridge_instance;
  }
  var BorderStyle$inset_instance;
  function BorderStyle$inset_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$inset_instance;
  }
  var BorderStyle$outset_instance;
  function BorderStyle$outset_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$outset_instance;
  }
  var BorderStyle$hidden_instance;
  function BorderStyle$hidden_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$hidden_instance;
  }
  var BorderStyle$solid_instance;
  function BorderStyle$solid_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$solid_instance;
  }
  var BorderStyle$none_instance;
  function BorderStyle$none_getInstance() {
    BorderStyle_initFields();
    return BorderStyle$none_instance;
  }
  BorderStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BorderStyle',
    interfaces: [Enum]
  };
  function BorderStyle$values() {
    return [BorderStyle$dashed_getInstance(), BorderStyle$double_getInstance(), BorderStyle$dotted_getInstance(), BorderStyle$groove_getInstance(), BorderStyle$ridge_getInstance(), BorderStyle$inset_getInstance(), BorderStyle$outset_getInstance(), BorderStyle$hidden_getInstance(), BorderStyle$solid_getInstance(), BorderStyle$none_getInstance()];
  }
  BorderStyle.values = BorderStyle$values;
  function BorderStyle$valueOf(name) {
    switch (name) {
      case 'dashed':
        return BorderStyle$dashed_getInstance();
      case 'double':
        return BorderStyle$double_getInstance();
      case 'dotted':
        return BorderStyle$dotted_getInstance();
      case 'groove':
        return BorderStyle$groove_getInstance();
      case 'ridge':
        return BorderStyle$ridge_getInstance();
      case 'inset':
        return BorderStyle$inset_getInstance();
      case 'outset':
        return BorderStyle$outset_getInstance();
      case 'hidden':
        return BorderStyle$hidden_getInstance();
      case 'solid':
        return BorderStyle$solid_getInstance();
      case 'none':
        return BorderStyle$none_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.BorderStyle.' + name);
    }
  }
  BorderStyle.valueOf_61zpoe$ = BorderStyle$valueOf;
  function Display(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Display_initFields() {
    Display_initFields = function () {
    };
    Display$none_instance = new Display('none', 0, 'none');
    Display$iinline_instance = new Display('iinline', 1, 'inline');
    Display$block_instance = new Display('block', 2, 'block');
    Display$flex_instance = new Display('flex', 3, 'flex');
    Display$inlineBlock_instance = new Display('inlineBlock', 4, 'inline-block');
    Display$contents_instance = new Display('contents', 5, 'contents');
    Display$listItem_instance = new Display('listItem', 6, 'list-item');
  }
  var Display$none_instance;
  function Display$none_getInstance() {
    Display_initFields();
    return Display$none_instance;
  }
  var Display$iinline_instance;
  function Display$iinline_getInstance() {
    Display_initFields();
    return Display$iinline_instance;
  }
  var Display$block_instance;
  function Display$block_getInstance() {
    Display_initFields();
    return Display$block_instance;
  }
  var Display$flex_instance;
  function Display$flex_getInstance() {
    Display_initFields();
    return Display$flex_instance;
  }
  var Display$inlineBlock_instance;
  function Display$inlineBlock_getInstance() {
    Display_initFields();
    return Display$inlineBlock_instance;
  }
  var Display$contents_instance;
  function Display$contents_getInstance() {
    Display_initFields();
    return Display$contents_instance;
  }
  var Display$listItem_instance;
  function Display$listItem_getInstance() {
    Display_initFields();
    return Display$listItem_instance;
  }
  Display.prototype.toString = function () {
    return this.asString;
  };
  Display.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Display',
    interfaces: [Enum]
  };
  function Display$values() {
    return [Display$none_getInstance(), Display$iinline_getInstance(), Display$block_getInstance(), Display$flex_getInstance(), Display$inlineBlock_getInstance(), Display$contents_getInstance(), Display$listItem_getInstance()];
  }
  Display.values = Display$values;
  function Display$valueOf(name) {
    switch (name) {
      case 'none':
        return Display$none_getInstance();
      case 'iinline':
        return Display$iinline_getInstance();
      case 'block':
        return Display$block_getInstance();
      case 'flex':
        return Display$flex_getInstance();
      case 'inlineBlock':
        return Display$inlineBlock_getInstance();
      case 'contents':
        return Display$contents_getInstance();
      case 'listItem':
        return Display$listItem_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.Display.' + name);
    }
  }
  Display.valueOf_61zpoe$ = Display$valueOf;
  function toDisplay($receiver) {
    var tmp$, tmp$_0;
    tmp$ = Display$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var one = tmp$[tmp$_0];
      if (Kotlin.equals(one.asString, $receiver)) {
        return one;
      }
    }
    throw new IllegalArgumentException('Unknown display: ' + $receiver);
  }
  function Flex(number, keyword) {
    Flex$Statics_getInstance();
    if (keyword === void 0)
      keyword = null;
    this.number = number;
    this.keyword = keyword;
  }
  Flex.prototype.toString = function () {
    var tmp$;
    if (this.keyword != null) {
      return this.keyword.name;
    }
    return ((tmp$ = this.number) != null ? tmp$ : Kotlin.throwNPE()).toString();
  };
  function Flex$Keyword(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Flex$Keyword_initFields() {
    Flex$Keyword_initFields = function () {
    };
    Flex$Keyword$initial_instance = new Flex$Keyword('initial', 0);
    Flex$Keyword$auto_instance = new Flex$Keyword('auto', 1);
    Flex$Keyword$none_instance = new Flex$Keyword('none', 2);
  }
  var Flex$Keyword$initial_instance;
  function Flex$Keyword$initial_getInstance() {
    Flex$Keyword_initFields();
    return Flex$Keyword$initial_instance;
  }
  var Flex$Keyword$auto_instance;
  function Flex$Keyword$auto_getInstance() {
    Flex$Keyword_initFields();
    return Flex$Keyword$auto_instance;
  }
  var Flex$Keyword$none_instance;
  function Flex$Keyword$none_getInstance() {
    Flex$Keyword_initFields();
    return Flex$Keyword$none_instance;
  }
  Flex$Keyword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function Flex$Keyword$values() {
    return [Flex$Keyword$initial_getInstance(), Flex$Keyword$auto_getInstance(), Flex$Keyword$none_getInstance()];
  }
  Flex$Keyword.values = Flex$Keyword$values;
  function Flex$Keyword$valueOf(name) {
    switch (name) {
      case 'initial':
        return Flex$Keyword$initial_getInstance();
      case 'auto':
        return Flex$Keyword$auto_getInstance();
      case 'none':
        return Flex$Keyword$none_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.Flex.Keyword.' + name);
    }
  }
  Flex$Keyword.valueOf_61zpoe$ = Flex$Keyword$valueOf;
  function Flex$Statics() {
    Flex$Statics_instance = this;
    this.initial = new Flex(null, Flex$Keyword$initial_getInstance());
    this.auto = new Flex(null, Flex$Keyword$auto_getInstance());
    this.none = new Flex(null, Flex$Keyword$none_getInstance());
  }
  Flex$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Flex$Statics_instance = null;
  function Flex$Statics_getInstance() {
    if (Flex$Statics_instance === null) {
      new Flex$Statics();
    }
    return Flex$Statics_instance;
  }
  Flex.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Flex',
    interfaces: []
  };
  function toFlex($receiver) {
    var $receiver_0 = Flex$Keyword$values();
    var firstOrNull_sfx99b$result;
    firstOrNull_sfx99b$break: {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (Kotlin.equals(element.name, $receiver)) {
          firstOrNull_sfx99b$result = element;
          break firstOrNull_sfx99b$break;
        }
      }
      firstOrNull_sfx99b$result = null;
    }
    var keyword = firstOrNull_sfx99b$result;
    if (keyword != null) {
      return new Flex(null, keyword);
    }
    var number = toInt($receiver);
    return new Flex(number, null);
  }
  function FlexBasis(dimension, keyword) {
    FlexBasis$Statics_getInstance();
    if (dimension === void 0)
      dimension = null;
    if (keyword === void 0)
      keyword = null;
    this.dimension = dimension;
    this.keyword = keyword;
  }
  FlexBasis.prototype.toString = function () {
    var tmp$;
    if (this.keyword != null) {
      return this.keyword.toString();
    }
    return ((tmp$ = this.dimension) != null ? tmp$ : Kotlin.throwNPE()).toString();
  };
  function FlexBasis$Keyword(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexBasis$Keyword_initFields() {
    FlexBasis$Keyword_initFields = function () {
    };
    FlexBasis$Keyword$inherit_instance = new FlexBasis$Keyword('inherit', 0, 'inherit');
    FlexBasis$Keyword$initial_instance = new FlexBasis$Keyword('initial', 1, 'initial');
    FlexBasis$Keyword$unset_instance = new FlexBasis$Keyword('unset', 2, 'unset');
    FlexBasis$Keyword$auto_instance = new FlexBasis$Keyword('auto', 3, 'auto');
    FlexBasis$Keyword$fill_instance = new FlexBasis$Keyword('fill', 4, 'fill');
    FlexBasis$Keyword$content_instance = new FlexBasis$Keyword('content', 5, 'content');
    FlexBasis$Keyword$maxContent_instance = new FlexBasis$Keyword('maxContent', 6, 'max-content');
    FlexBasis$Keyword$minContent_instance = new FlexBasis$Keyword('minContent', 7, 'min-content');
    FlexBasis$Keyword$fitContent_instance = new FlexBasis$Keyword('fitContent', 8, 'fit-content');
  }
  var FlexBasis$Keyword$inherit_instance;
  function FlexBasis$Keyword$inherit_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$inherit_instance;
  }
  var FlexBasis$Keyword$initial_instance;
  function FlexBasis$Keyword$initial_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$initial_instance;
  }
  var FlexBasis$Keyword$unset_instance;
  function FlexBasis$Keyword$unset_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$unset_instance;
  }
  var FlexBasis$Keyword$auto_instance;
  function FlexBasis$Keyword$auto_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$auto_instance;
  }
  var FlexBasis$Keyword$fill_instance;
  function FlexBasis$Keyword$fill_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$fill_instance;
  }
  var FlexBasis$Keyword$content_instance;
  function FlexBasis$Keyword$content_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$content_instance;
  }
  var FlexBasis$Keyword$maxContent_instance;
  function FlexBasis$Keyword$maxContent_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$maxContent_instance;
  }
  var FlexBasis$Keyword$minContent_instance;
  function FlexBasis$Keyword$minContent_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$minContent_instance;
  }
  var FlexBasis$Keyword$fitContent_instance;
  function FlexBasis$Keyword$fitContent_getInstance() {
    FlexBasis$Keyword_initFields();
    return FlexBasis$Keyword$fitContent_instance;
  }
  FlexBasis$Keyword.prototype.toString = function () {
    return this.asString;
  };
  FlexBasis$Keyword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function FlexBasis$Keyword$values() {
    return [FlexBasis$Keyword$inherit_getInstance(), FlexBasis$Keyword$initial_getInstance(), FlexBasis$Keyword$unset_getInstance(), FlexBasis$Keyword$auto_getInstance(), FlexBasis$Keyword$fill_getInstance(), FlexBasis$Keyword$content_getInstance(), FlexBasis$Keyword$maxContent_getInstance(), FlexBasis$Keyword$minContent_getInstance(), FlexBasis$Keyword$fitContent_getInstance()];
  }
  FlexBasis$Keyword.values = FlexBasis$Keyword$values;
  function FlexBasis$Keyword$valueOf(name) {
    switch (name) {
      case 'inherit':
        return FlexBasis$Keyword$inherit_getInstance();
      case 'initial':
        return FlexBasis$Keyword$initial_getInstance();
      case 'unset':
        return FlexBasis$Keyword$unset_getInstance();
      case 'auto':
        return FlexBasis$Keyword$auto_getInstance();
      case 'fill':
        return FlexBasis$Keyword$fill_getInstance();
      case 'content':
        return FlexBasis$Keyword$content_getInstance();
      case 'maxContent':
        return FlexBasis$Keyword$maxContent_getInstance();
      case 'minContent':
        return FlexBasis$Keyword$minContent_getInstance();
      case 'fitContent':
        return FlexBasis$Keyword$fitContent_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.FlexBasis.Keyword.' + name);
    }
  }
  FlexBasis$Keyword.valueOf_61zpoe$ = FlexBasis$Keyword$valueOf;
  function FlexBasis$Statics() {
    FlexBasis$Statics_instance = this;
    this.inherit = new FlexBasis(void 0, FlexBasis$Keyword$inherit_getInstance());
    this.initial = new FlexBasis(void 0, FlexBasis$Keyword$initial_getInstance());
    this.unset = new FlexBasis(void 0, FlexBasis$Keyword$unset_getInstance());
    this.auto = new FlexBasis(void 0, FlexBasis$Keyword$auto_getInstance());
    this.fill = new FlexBasis(void 0, FlexBasis$Keyword$fill_getInstance());
    this.content = new FlexBasis(void 0, FlexBasis$Keyword$content_getInstance());
    this.maxContent = new FlexBasis(void 0, FlexBasis$Keyword$maxContent_getInstance());
    this.minContent = new FlexBasis(void 0, FlexBasis$Keyword$minContent_getInstance());
    this.fitContent = new FlexBasis(void 0, FlexBasis$Keyword$fitContent_getInstance());
  }
  FlexBasis$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var FlexBasis$Statics_instance = null;
  function FlexBasis$Statics_getInstance() {
    if (FlexBasis$Statics_instance === null) {
      new FlexBasis$Statics();
    }
    return FlexBasis$Statics_instance;
  }
  FlexBasis.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexBasis',
    interfaces: []
  };
  function toFlexBasis($receiver) {
    var $receiver_0 = FlexBasis$Keyword$values();
    var firstOrNull_sfx99b$result;
    firstOrNull_sfx99b$break: {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (Kotlin.equals(element.name, $receiver)) {
          firstOrNull_sfx99b$result = element;
          break firstOrNull_sfx99b$break;
        }
      }
      firstOrNull_sfx99b$result = null;
    }
    var keyword = firstOrNull_sfx99b$result;
    if (keyword != null) {
      return new FlexBasis(null, keyword);
    }
    var dimension = toDimension($receiver);
    return new FlexBasis(dimension, null);
  }
  function FlexDirection(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexDirection_initFields() {
    FlexDirection_initFields = function () {
    };
    FlexDirection$row_instance = new FlexDirection('row', 0, 'row');
    FlexDirection$rowReverse_instance = new FlexDirection('rowReverse', 1, 'row-reverse');
    FlexDirection$column_instance = new FlexDirection('column', 2, 'column');
    FlexDirection$columnReverse_instance = new FlexDirection('columnReverse', 3, 'column-reverse');
  }
  var FlexDirection$row_instance;
  function FlexDirection$row_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$row_instance;
  }
  var FlexDirection$rowReverse_instance;
  function FlexDirection$rowReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$rowReverse_instance;
  }
  var FlexDirection$column_instance;
  function FlexDirection$column_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$column_instance;
  }
  var FlexDirection$columnReverse_instance;
  function FlexDirection$columnReverse_getInstance() {
    FlexDirection_initFields();
    return FlexDirection$columnReverse_instance;
  }
  FlexDirection.prototype.toString = function () {
    return this.asString;
  };
  FlexDirection.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexDirection',
    interfaces: [Enum]
  };
  function FlexDirection$values() {
    return [FlexDirection$row_getInstance(), FlexDirection$rowReverse_getInstance(), FlexDirection$column_getInstance(), FlexDirection$columnReverse_getInstance()];
  }
  FlexDirection.values = FlexDirection$values;
  function FlexDirection$valueOf(name) {
    switch (name) {
      case 'row':
        return FlexDirection$row_getInstance();
      case 'rowReverse':
        return FlexDirection$rowReverse_getInstance();
      case 'column':
        return FlexDirection$column_getInstance();
      case 'columnReverse':
        return FlexDirection$columnReverse_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.FlexDirection.' + name);
    }
  }
  FlexDirection.valueOf_61zpoe$ = FlexDirection$valueOf;
  function toFlexDirection($receiver) {
    var tmp$, tmp$_0;
    tmp$ = FlexDirection$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var one = tmp$[tmp$_0];
      if (Kotlin.equals(one.asString, $receiver)) {
        return one;
      }
    }
    throw new IllegalArgumentException('Unknown flex-direction: ' + $receiver);
  }
  function FlexGrow(number, keyword) {
    FlexGrow$Statics_getInstance();
    if (number === void 0)
      number = null;
    if (keyword === void 0)
      keyword = null;
    this.number = number;
    this.keyword = keyword;
  }
  FlexGrow.prototype.toString = function () {
    var tmp$;
    if (this.keyword != null) {
      return this.keyword.toString();
    }
    return ((tmp$ = this.number) != null ? tmp$ : Kotlin.throwNPE()).toString();
  };
  function FlexGrow$Keyword(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexGrow$Keyword_initFields() {
    FlexGrow$Keyword_initFields = function () {
    };
    FlexGrow$Keyword$inherit_instance = new FlexGrow$Keyword('inherit', 0);
    FlexGrow$Keyword$initial_instance = new FlexGrow$Keyword('initial', 1);
    FlexGrow$Keyword$unset_instance = new FlexGrow$Keyword('unset', 2);
  }
  var FlexGrow$Keyword$inherit_instance;
  function FlexGrow$Keyword$inherit_getInstance() {
    FlexGrow$Keyword_initFields();
    return FlexGrow$Keyword$inherit_instance;
  }
  var FlexGrow$Keyword$initial_instance;
  function FlexGrow$Keyword$initial_getInstance() {
    FlexGrow$Keyword_initFields();
    return FlexGrow$Keyword$initial_instance;
  }
  var FlexGrow$Keyword$unset_instance;
  function FlexGrow$Keyword$unset_getInstance() {
    FlexGrow$Keyword_initFields();
    return FlexGrow$Keyword$unset_instance;
  }
  FlexGrow$Keyword.prototype.toString = function () {
    return this.name;
  };
  FlexGrow$Keyword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function FlexGrow$Keyword$values() {
    return [FlexGrow$Keyword$inherit_getInstance(), FlexGrow$Keyword$initial_getInstance(), FlexGrow$Keyword$unset_getInstance()];
  }
  FlexGrow$Keyword.values = FlexGrow$Keyword$values;
  function FlexGrow$Keyword$valueOf(name) {
    switch (name) {
      case 'inherit':
        return FlexGrow$Keyword$inherit_getInstance();
      case 'initial':
        return FlexGrow$Keyword$initial_getInstance();
      case 'unset':
        return FlexGrow$Keyword$unset_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.FlexGrow.Keyword.' + name);
    }
  }
  FlexGrow$Keyword.valueOf_61zpoe$ = FlexGrow$Keyword$valueOf;
  function FlexGrow$Statics() {
    FlexGrow$Statics_instance = this;
    this.inherit = new FlexGrow(void 0, FlexGrow$Keyword$inherit_getInstance());
    this.initial = new FlexGrow(void 0, FlexGrow$Keyword$initial_getInstance());
    this.unset = new FlexGrow(void 0, FlexGrow$Keyword$unset_getInstance());
  }
  FlexGrow$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var FlexGrow$Statics_instance = null;
  function FlexGrow$Statics_getInstance() {
    if (FlexGrow$Statics_instance === null) {
      new FlexGrow$Statics();
    }
    return FlexGrow$Statics_instance;
  }
  FlexGrow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexGrow',
    interfaces: []
  };
  function toFlexGrow($receiver) {
    var $receiver_0 = FlexGrow$Keyword$values();
    var firstOrNull_sfx99b$result;
    firstOrNull_sfx99b$break: {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (Kotlin.equals(element.name, $receiver)) {
          firstOrNull_sfx99b$result = element;
          break firstOrNull_sfx99b$break;
        }
      }
      firstOrNull_sfx99b$result = null;
    }
    var keyword = firstOrNull_sfx99b$result;
    if (keyword != null) {
      return new FlexGrow(null, keyword);
    }
    var number = toDouble($receiver);
    return new FlexGrow(number, null);
  }
  function FlexShrink(number, keyword) {
    FlexShrink$Statics_getInstance();
    if (number === void 0)
      number = null;
    if (keyword === void 0)
      keyword = null;
    this.number = number;
    this.keyword = keyword;
  }
  FlexShrink.prototype.toString = function () {
    if (this.keyword != null) {
      return this.keyword.toString();
    }
    return Kotlin.toString(this.number);
  };
  function FlexShrink$Keyword(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FlexShrink$Keyword_initFields() {
    FlexShrink$Keyword_initFields = function () {
    };
    FlexShrink$Keyword$inherit_instance = new FlexShrink$Keyword('inherit', 0);
    FlexShrink$Keyword$initial_instance = new FlexShrink$Keyword('initial', 1);
    FlexShrink$Keyword$unset_instance = new FlexShrink$Keyword('unset', 2);
  }
  var FlexShrink$Keyword$inherit_instance;
  function FlexShrink$Keyword$inherit_getInstance() {
    FlexShrink$Keyword_initFields();
    return FlexShrink$Keyword$inherit_instance;
  }
  var FlexShrink$Keyword$initial_instance;
  function FlexShrink$Keyword$initial_getInstance() {
    FlexShrink$Keyword_initFields();
    return FlexShrink$Keyword$initial_instance;
  }
  var FlexShrink$Keyword$unset_instance;
  function FlexShrink$Keyword$unset_getInstance() {
    FlexShrink$Keyword_initFields();
    return FlexShrink$Keyword$unset_instance;
  }
  FlexShrink$Keyword.prototype.toString = function () {
    return this.name;
  };
  FlexShrink$Keyword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Keyword',
    interfaces: [Enum]
  };
  function FlexShrink$Keyword$values() {
    return [FlexShrink$Keyword$inherit_getInstance(), FlexShrink$Keyword$initial_getInstance(), FlexShrink$Keyword$unset_getInstance()];
  }
  FlexShrink$Keyword.values = FlexShrink$Keyword$values;
  function FlexShrink$Keyword$valueOf(name) {
    switch (name) {
      case 'inherit':
        return FlexShrink$Keyword$inherit_getInstance();
      case 'initial':
        return FlexShrink$Keyword$initial_getInstance();
      case 'unset':
        return FlexShrink$Keyword$unset_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.FlexShrink.Keyword.' + name);
    }
  }
  FlexShrink$Keyword.valueOf_61zpoe$ = FlexShrink$Keyword$valueOf;
  function FlexShrink$Statics() {
    FlexShrink$Statics_instance = this;
    this.inherit = new FlexShrink(void 0, FlexShrink$Keyword$inherit_getInstance());
    this.initial = new FlexShrink(void 0, FlexShrink$Keyword$initial_getInstance());
    this.unset = new FlexShrink(void 0, FlexShrink$Keyword$unset_getInstance());
  }
  FlexShrink$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var FlexShrink$Statics_instance = null;
  function FlexShrink$Statics_getInstance() {
    if (FlexShrink$Statics_instance === null) {
      new FlexShrink$Statics();
    }
    return FlexShrink$Statics_instance;
  }
  FlexShrink.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexShrink',
    interfaces: []
  };
  function toFlexShrink($receiver) {
    var $receiver_0 = FlexShrink$Keyword$values();
    var firstOrNull_sfx99b$result;
    firstOrNull_sfx99b$break: {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (Kotlin.equals(element.name, $receiver)) {
          firstOrNull_sfx99b$result = element;
          break firstOrNull_sfx99b$break;
        }
      }
      firstOrNull_sfx99b$result = null;
    }
    var keyword = firstOrNull_sfx99b$result;
    if (keyword != null) {
      return new FlexShrink(null, keyword);
    }
    var number = toDouble($receiver);
    return new FlexShrink(number, null);
  }
  function JustifyContent(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JustifyContent_initFields() {
    JustifyContent_initFields = function () {
    };
    JustifyContent$flexStart_instance = new JustifyContent('flexStart', 0, 'flex-start');
    JustifyContent$flexEnd_instance = new JustifyContent('flexEnd', 1, 'flex-end');
    JustifyContent$center_instance = new JustifyContent('center', 2, 'center');
    JustifyContent$spaceBetween_instance = new JustifyContent('spaceBetween', 3, 'space-between');
    JustifyContent$spaceEvenly_instance = new JustifyContent('spaceEvenly', 4, 'space-evenly');
    JustifyContent$spaceAround_instance = new JustifyContent('spaceAround', 5, 'space-around');
    JustifyContent$inherit_instance = new JustifyContent('inherit', 6, 'inherit');
    JustifyContent$initial_instance = new JustifyContent('initial', 7, 'initial');
    JustifyContent$unset_instance = new JustifyContent('unset', 8, 'unset');
  }
  var JustifyContent$flexStart_instance;
  function JustifyContent$flexStart_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexStart_instance;
  }
  var JustifyContent$flexEnd_instance;
  function JustifyContent$flexEnd_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$flexEnd_instance;
  }
  var JustifyContent$center_instance;
  function JustifyContent$center_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$center_instance;
  }
  var JustifyContent$spaceBetween_instance;
  function JustifyContent$spaceBetween_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceBetween_instance;
  }
  var JustifyContent$spaceEvenly_instance;
  function JustifyContent$spaceEvenly_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceEvenly_instance;
  }
  var JustifyContent$spaceAround_instance;
  function JustifyContent$spaceAround_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$spaceAround_instance;
  }
  var JustifyContent$inherit_instance;
  function JustifyContent$inherit_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$inherit_instance;
  }
  var JustifyContent$initial_instance;
  function JustifyContent$initial_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$initial_instance;
  }
  var JustifyContent$unset_instance;
  function JustifyContent$unset_getInstance() {
    JustifyContent_initFields();
    return JustifyContent$unset_instance;
  }
  JustifyContent.prototype.toString = function () {
    return this.asString;
  };
  JustifyContent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JustifyContent',
    interfaces: [Enum]
  };
  function JustifyContent$values() {
    return [JustifyContent$flexStart_getInstance(), JustifyContent$flexEnd_getInstance(), JustifyContent$center_getInstance(), JustifyContent$spaceBetween_getInstance(), JustifyContent$spaceEvenly_getInstance(), JustifyContent$spaceAround_getInstance(), JustifyContent$inherit_getInstance(), JustifyContent$initial_getInstance(), JustifyContent$unset_getInstance()];
  }
  JustifyContent.values = JustifyContent$values;
  function JustifyContent$valueOf(name) {
    switch (name) {
      case 'flexStart':
        return JustifyContent$flexStart_getInstance();
      case 'flexEnd':
        return JustifyContent$flexEnd_getInstance();
      case 'center':
        return JustifyContent$center_getInstance();
      case 'spaceBetween':
        return JustifyContent$spaceBetween_getInstance();
      case 'spaceEvenly':
        return JustifyContent$spaceEvenly_getInstance();
      case 'spaceAround':
        return JustifyContent$spaceAround_getInstance();
      case 'inherit':
        return JustifyContent$inherit_getInstance();
      case 'initial':
        return JustifyContent$initial_getInstance();
      case 'unset':
        return JustifyContent$unset_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.JustifyContent.' + name);
    }
  }
  JustifyContent.valueOf_61zpoe$ = JustifyContent$valueOf;
  function toJustifyContent($receiver) {
    var tmp$, tmp$_0;
    tmp$ = JustifyContent$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var one = tmp$[tmp$_0];
      if (Kotlin.equals(one.asString, $receiver)) {
        return one;
      }
    }
    throw new IllegalArgumentException('Unknown justify-content: ' + $receiver);
  }
  function Position(name, ordinal, asString) {
    Enum.call(this);
    this.asString = asString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Position_initFields() {
    Position_initFields = function () {
    };
    Position$static_instance = new Position('static', 0, 'static');
    Position$relative_instance = new Position('relative', 1, 'relative');
    Position$absolute_instance = new Position('absolute', 2, 'absolute');
    Position$fixed_instance = new Position('fixed', 3, 'fixed');
    Position$sticky_instance = new Position('sticky', 4, 'sticky');
    Position$inherit_instance = new Position('inherit', 5, 'inherit');
    Position$initial_instance = new Position('initial', 6, 'initial');
    Position$unset_instance = new Position('unset', 7, 'unset');
  }
  var Position$static_instance;
  function Position$static_getInstance() {
    Position_initFields();
    return Position$static_instance;
  }
  var Position$relative_instance;
  function Position$relative_getInstance() {
    Position_initFields();
    return Position$relative_instance;
  }
  var Position$absolute_instance;
  function Position$absolute_getInstance() {
    Position_initFields();
    return Position$absolute_instance;
  }
  var Position$fixed_instance;
  function Position$fixed_getInstance() {
    Position_initFields();
    return Position$fixed_instance;
  }
  var Position$sticky_instance;
  function Position$sticky_getInstance() {
    Position_initFields();
    return Position$sticky_instance;
  }
  var Position$inherit_instance;
  function Position$inherit_getInstance() {
    Position_initFields();
    return Position$inherit_instance;
  }
  var Position$initial_instance;
  function Position$initial_getInstance() {
    Position_initFields();
    return Position$initial_instance;
  }
  var Position$unset_instance;
  function Position$unset_getInstance() {
    Position_initFields();
    return Position$unset_instance;
  }
  Position.prototype.toString = function () {
    return this.asString;
  };
  Position.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Position',
    interfaces: [Enum]
  };
  function Position$values() {
    return [Position$static_getInstance(), Position$relative_getInstance(), Position$absolute_getInstance(), Position$fixed_getInstance(), Position$sticky_getInstance(), Position$inherit_getInstance(), Position$initial_getInstance(), Position$unset_getInstance()];
  }
  Position.values = Position$values;
  function Position$valueOf(name) {
    switch (name) {
      case 'static':
        return Position$static_getInstance();
      case 'relative':
        return Position$relative_getInstance();
      case 'absolute':
        return Position$absolute_getInstance();
      case 'fixed':
        return Position$fixed_getInstance();
      case 'sticky':
        return Position$sticky_getInstance();
      case 'inherit':
        return Position$inherit_getInstance();
      case 'initial':
        return Position$initial_getInstance();
      case 'unset':
        return Position$unset_getInstance();
      default:Kotlin.throwISE('No enum constant fg.elements.style.typed.Position.' + name);
    }
  }
  Position.valueOf_61zpoe$ = Position$valueOf;
  function toPosition($receiver) {
    var tmp$, tmp$_0;
    tmp$ = Position$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var one = tmp$[tmp$_0];
      if (Kotlin.equals(one.asString, $receiver)) {
        return one;
      }
    }
    throw new IllegalArgumentException('Unknown position: ' + $receiver);
  }
  function TypedStyle(element) {
    this.element_0 = element;
    this.display$delegate = new TypedStyle$DisplayDelegate();
    this.position$delegate = new TypedStyle$PositionDelegate();
    this.color$delegate = new TypedStyle$RgbColorDelegate();
    this.backgroundColor$delegate = new TypedStyle$RgbColorDelegate();
    this.left$delegate = new TypedStyle$DimensionDelegate();
    this.right$delegate = new TypedStyle$DimensionDelegate();
    this.top$delegate = new TypedStyle$DimensionDelegate();
    this.bottom$delegate = new TypedStyle$DimensionDelegate();
    this.width$delegate = new TypedStyle$DimensionDelegate();
    this.height$delegate = new TypedStyle$DimensionDelegate();
    this.minWidth$delegate = new TypedStyle$DimensionDelegate('min-width');
    this.minHeight$delegate = new TypedStyle$DimensionDelegate('min-height');
    this.maxWidth$delegate = new TypedStyle$DimensionDelegate('max-width');
    this.maxHeight$delegate = new TypedStyle$DimensionDelegate('max-height');
    this.marginLeft$delegate = new TypedStyle$DimensionDelegate();
    this.marginRight$delegate = new TypedStyle$DimensionDelegate();
    this.marginTop$delegate = new TypedStyle$DimensionDelegate();
    this.marginBottom$delegate = new TypedStyle$DimensionDelegate();
    this.paddingLeft$delegate = new TypedStyle$DimensionDelegate();
    this.paddingRight$delegate = new TypedStyle$DimensionDelegate();
    this.paddingTop$delegate = new TypedStyle$DimensionDelegate();
    this.paddingBottom$delegate = new TypedStyle$DimensionDelegate();
    this.border$delegate = new TypedStyle$BorderDelegate();
    this.flexDirection$delegate = new TypedStyle$FlexDirectionDelegate();
    this.justifyContent$delegate = new TypedStyle$JustifyContentDelegate();
    this.alignItems$delegate = new TypedStyle$AlignItemsDelegate();
    this.flex$delegate = new TypedStyle$FlexDelegate();
    this.flexGrow$delegate = new TypedStyle$FlexGrowDelegate();
    this.flexShrink$delegate = new TypedStyle$FlexShrinkDelegate();
    this.flexBasis$delegate = new TypedStyle$FlexBasisDelegate();
    this.order$delegate = new TypedStyle$IntDelegate();
  }
  Object.defineProperty(TypedStyle.prototype, 'display', {
    get: function () {
      return this.display$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('display'));
    },
    set: function (display) {
      this.display$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('display'), display);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'position', {
    get: function () {
      return this.position$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('position'));
    },
    set: function (position) {
      this.position$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('position'), position);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'color', {
    get: function () {
      return this.color$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('color'));
    },
    set: function (color) {
      this.color$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('color'), color);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('backgroundColor'));
    },
    set: function (backgroundColor) {
      this.backgroundColor$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('backgroundColor'), backgroundColor);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'left', {
    get: function () {
      return this.left$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('left'));
    },
    set: function (left_0) {
      this.left$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('left'), left_0);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'right', {
    get: function () {
      return this.right$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('right'));
    },
    set: function (right) {
      this.right$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('right'), right);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'top', {
    get: function () {
      return this.top$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('top'));
    },
    set: function (top) {
      this.top$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('top'), top);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'bottom', {
    get: function () {
      return this.bottom$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('bottom'));
    },
    set: function (bottom) {
      this.bottom$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('bottom'), bottom);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'width', {
    get: function () {
      return this.width$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('width'));
    },
    set: function (width) {
      this.width$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('width'), width);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'height', {
    get: function () {
      return this.height$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('height'));
    },
    set: function (height) {
      this.height$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('height'), height);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'minWidth', {
    get: function () {
      return this.minWidth$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('minWidth'));
    },
    set: function (minWidth) {
      this.minWidth$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('minWidth'), minWidth);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'minHeight', {
    get: function () {
      return this.minHeight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('minHeight'));
    },
    set: function (minHeight) {
      this.minHeight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('minHeight'), minHeight);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'maxWidth', {
    get: function () {
      return this.maxWidth$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('maxWidth'));
    },
    set: function (maxWidth) {
      this.maxWidth$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('maxWidth'), maxWidth);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'maxHeight', {
    get: function () {
      return this.maxHeight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('maxHeight'));
    },
    set: function (maxHeight) {
      this.maxHeight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('maxHeight'), maxHeight);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'marginLeft', {
    get: function () {
      return this.marginLeft$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('marginLeft'));
    },
    set: function (marginLeft) {
      this.marginLeft$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('marginLeft'), marginLeft);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'marginRight', {
    get: function () {
      return this.marginRight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('marginRight'));
    },
    set: function (marginRight) {
      this.marginRight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('marginRight'), marginRight);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'marginTop', {
    get: function () {
      return this.marginTop$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('marginTop'));
    },
    set: function (marginTop) {
      this.marginTop$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('marginTop'), marginTop);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'marginBottom', {
    get: function () {
      return this.marginBottom$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('marginBottom'));
    },
    set: function (marginBottom) {
      this.marginBottom$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('marginBottom'), marginBottom);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'paddingLeft', {
    get: function () {
      return this.paddingLeft$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('paddingLeft'));
    },
    set: function (paddingLeft) {
      this.paddingLeft$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('paddingLeft'), paddingLeft);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'paddingRight', {
    get: function () {
      return this.paddingRight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('paddingRight'));
    },
    set: function (paddingRight) {
      this.paddingRight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('paddingRight'), paddingRight);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'paddingTop', {
    get: function () {
      return this.paddingTop$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('paddingTop'));
    },
    set: function (paddingTop) {
      this.paddingTop$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('paddingTop'), paddingTop);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'paddingBottom', {
    get: function () {
      return this.paddingBottom$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('paddingBottom'));
    },
    set: function (paddingBottom) {
      this.paddingBottom$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('paddingBottom'), paddingBottom);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'border', {
    get: function () {
      return this.border$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('border'));
    },
    set: function (border) {
      this.border$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('border'), border);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'flexDirection', {
    get: function () {
      return this.flexDirection$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flexDirection'));
    },
    set: function (flexDirection) {
      this.flexDirection$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flexDirection'), flexDirection);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'justifyContent', {
    get: function () {
      return this.justifyContent$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('justifyContent'));
    },
    set: function (justifyContent) {
      this.justifyContent$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('justifyContent'), justifyContent);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'alignItems', {
    get: function () {
      return this.alignItems$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('alignItems'));
    },
    set: function (alignItems) {
      this.alignItems$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('alignItems'), alignItems);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'flex', {
    get: function () {
      return this.flex$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flex'));
    },
    set: function (flex) {
      this.flex$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flex'), flex);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'flexGrow', {
    get: function () {
      return this.flexGrow$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flexGrow'));
    },
    set: function (flexGrow) {
      this.flexGrow$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flexGrow'), flexGrow);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'flexShrink', {
    get: function () {
      return this.flexShrink$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flexShrink'));
    },
    set: function (flexShrink) {
      this.flexShrink$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flexShrink'), flexShrink);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'flexBasis', {
    get: function () {
      return this.flexBasis$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flexBasis'));
    },
    set: function (flexBasis) {
      this.flexBasis$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flexBasis'), flexBasis);
    }
  });
  Object.defineProperty(TypedStyle.prototype, 'order', {
    get: function () {
      return this.order$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('order'));
    },
    set: function (order) {
      this.order$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('order'), order);
    }
  });
  function TypedStyle$AlignItemsDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toAlignItems', function ($receiver) {
      return toAlignItems($receiver);
    }));
  }
  TypedStyle$AlignItemsDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AlignItemsDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$BorderDelegate() {
    TypedStyle$TypedPropertyDelegate2.call(this, TypedStyle$TypedStyle$BorderDelegate_init$lambda, TypedStyle$TypedStyle$BorderDelegate_init$lambda_0);
  }
  function TypedStyle$TypedStyle$BorderDelegate_init$lambda(it) {
    return Border$Companion_getInstance().from_54c9de$(it);
  }
  function TypedStyle$TypedStyle$BorderDelegate_init$lambda_0(value, element) {
    if (value != null)
      value.set_54c9de$(element);
    else
      (new Border()).set_54c9de$(element);
  }
  TypedStyle$BorderDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BorderDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate2]
  };
  function TypedStyle$DisplayDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toDisplay', function ($receiver) {
      return toDisplay($receiver);
    }));
  }
  TypedStyle$DisplayDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DisplayDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$RgbColorDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedStyle$TypedPropertyDelegate.call(this, attributeName, TypedStyle$TypedStyle$RgbColorDelegate_init$lambda);
  }
  function TypedStyle$TypedStyle$RgbColorDelegate_init$lambda(it) {
    return RgbColor$Factory_getInstance().from_61zpoe$(it);
  }
  TypedStyle$RgbColorDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RgbColorDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$DimensionDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedStyle$TypedPropertyDelegate.call(this, attributeName, TypedStyle$TypedStyle$DimensionDelegate_init$lambda);
  }
  function TypedStyle$TypedStyle$DimensionDelegate_init$lambda(it) {
    var tmp$;
    return (tmp$ = toDimension(it)) != null ? tmp$ : Kotlin.throwNPE();
  }
  TypedStyle$DimensionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DimensionDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$FlexDirectionDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexDirection', function ($receiver) {
      return toFlexDirection($receiver);
    }));
  }
  TypedStyle$FlexDirectionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexDirectionDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$FlexDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlex', function ($receiver) {
      return toFlex($receiver);
    }));
  }
  TypedStyle$FlexDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$FlexGrowDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexGrow', function ($receiver) {
      return toFlexGrow($receiver);
    }));
  }
  TypedStyle$FlexGrowDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexGrowDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$FlexShrinkDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexShrink', function ($receiver) {
      return toFlexShrink($receiver);
    }));
  }
  TypedStyle$FlexShrinkDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexShrinkDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$FlexBasisDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexBasis', function ($receiver) {
      return toFlexBasis($receiver);
    }));
  }
  TypedStyle$FlexBasisDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexBasisDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$IntDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedStyle$TypedPropertyDelegate.call(this, attributeName, Kotlin.getCallableRef('toInt', function ($receiver) {
      return toInt($receiver);
    }));
  }
  TypedStyle$IntDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IntDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$JustifyContentDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toJustifyContent', function ($receiver) {
      return toJustifyContent($receiver);
    }));
  }
  TypedStyle$JustifyContentDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JustifyContentDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$PositionDelegate() {
    TypedStyle$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toPosition', function ($receiver) {
      return toPosition($receiver);
    }));
  }
  TypedStyle$PositionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PositionDelegate',
    interfaces: [TypedStyle$TypedPropertyDelegate]
  };
  function TypedStyle$TypedPropertyDelegate(attributeName, getFn) {
    if (attributeName === void 0)
      attributeName = null;
    this.attributeName = attributeName;
    this.getFn = getFn;
  }
  TypedStyle$TypedPropertyDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : camelsToDashes(property.callableName);
    var stringValue = thisRef.element_0.w3cElement_gobymg$_0.style.getPropertyValue(attributeName);
    return stringValue.length > 0 ? this.getFn(stringValue) : null;
  };
  TypedStyle$TypedPropertyDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : camelsToDashes(property.callableName);
    if (value != null) {
      var valueAsString = value.toString();
      thisRef.element_0.w3cElement_gobymg$_0.style.setProperty(attributeName, valueAsString);
    }
     else {
      thisRef.element_0.w3cElement_gobymg$_0.style.removeProperty(attributeName);
    }
  };
  TypedStyle$TypedPropertyDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedPropertyDelegate',
    interfaces: [ReadWriteProperty]
  };
  function TypedStyle$TypedPropertyDelegate2(getFn, setFn) {
    this.getFn = getFn;
    this.setFn = setFn;
  }
  TypedStyle$TypedPropertyDelegate2.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.getFn(thisRef.element_0);
  };
  TypedStyle$TypedPropertyDelegate2.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    return this.setFn(value, thisRef.element_0);
  };
  TypedStyle$TypedPropertyDelegate2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedPropertyDelegate2',
    interfaces: [ReadWriteProperty]
  };
  TypedStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedStyle',
    interfaces: []
  };
  function StyledClass() {
  }
  StyledClass.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'StyledClass',
    interfaces: []
  };
  function Table() {
    Element.call(this, 'table');
  }
  Table.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Table',
    interfaces: [Element]
  };
  function Caption() {
    Element.call(this, 'caption');
  }
  Caption.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Caption',
    interfaces: [Element]
  };
  function Colgroup() {
    Element.call(this, 'colgroup');
  }
  Colgroup.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Colgroup',
    interfaces: [Element]
  };
  function Col() {
    Element.call(this, 'col');
  }
  Col.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Col',
    interfaces: [Element]
  };
  function Tbody() {
    Element.call(this, 'tbody');
  }
  Tbody.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tbody',
    interfaces: [Element]
  };
  function Thead() {
    Element.call(this, 'thead');
  }
  Thead.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Thead',
    interfaces: [Element]
  };
  function Tfoot() {
    Element.call(this, 'tfoot');
  }
  Tfoot.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tfoot',
    interfaces: [Element]
  };
  function Tr() {
    Element.call(this, 'tr');
  }
  Tr.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tr',
    interfaces: [Element]
  };
  function Td() {
    Element.call(this, 'td');
  }
  Td.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Td',
    interfaces: [Element]
  };
  function Th() {
    Element.call(this, 'th');
  }
  Th.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Th',
    interfaces: [Element]
  };
  function A() {
    Element.call(this, 'a');
    this._href$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('href');
    this._target$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('target');
    this._download$delegate = W3cDelegates_getInstance().nullableBooleanAttribute_61zpoe$('dowload');
    this._rel$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('rel');
    this._hreflang$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('hreflang');
    this._type$delegate = W3cDelegates_getInstance().nullableAttribute_61zpoe$('type');
  }
  Object.defineProperty(A.prototype, '_href', {
    get: function () {
      return this._href$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_href'));
    },
    set: function (_href) {
      this._href$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_href'), _href);
    }
  });
  Object.defineProperty(A.prototype, '_target', {
    get: function () {
      return this._target$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_target'));
    },
    set: function (_target) {
      this._target$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_target'), _target);
    }
  });
  Object.defineProperty(A.prototype, '_download', {
    get: function () {
      return this._download$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_download'));
    },
    set: function (_download) {
      this._download$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_download'), _download);
    }
  });
  Object.defineProperty(A.prototype, '_rel', {
    get: function () {
      return this._rel$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_rel'));
    },
    set: function (_rel) {
      this._rel$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_rel'), _rel);
    }
  });
  Object.defineProperty(A.prototype, '_hreflang', {
    get: function () {
      return this._hreflang$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_hreflang'));
    },
    set: function (_hreflang) {
      this._hreflang$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_hreflang'), _hreflang);
    }
  });
  Object.defineProperty(A.prototype, '_type', {
    get: function () {
      return this._type$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('_type'));
    },
    set: function (_type) {
      this._type$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('_type'), _type);
    }
  });
  A.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'A',
    interfaces: [Element]
  };
  function Br() {
    Element.call(this, 'br');
  }
  Br.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Br',
    interfaces: [Element]
  };
  function Span() {
    Element.call(this, 'span');
  }
  Span.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Span',
    interfaces: [Element]
  };
  function I() {
    Element.call(this, 'i');
  }
  I.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'I',
    interfaces: [Element]
  };
  function Text_0(text_0, existingNode) {
    if (text_0 === void 0)
      text_0 = null;
    if (existingNode === void 0)
      existingNode = null;
    Node.call(this, existingNode != null ? existingNode : document.createTextNode(text_0 != null ? text_0 : Kotlin.throwNPE()));
  }
  Text_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Text',
    interfaces: [Node]
  };
  function TypedStyledClass() {
  }
  TypedStyledClass.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'TypedStyledClass',
    interfaces: []
  };
  function W3cDelegates() {
    W3cDelegates_instance = this;
  }
  W3cDelegates.prototype.attribute_o3qcra$ = function (receiver, initialValue, attributeName) {
    return new W3cDelegates$Attribute(receiver, initialValue, attributeName);
  };
  W3cDelegates.prototype.nullableAttribute_61zpoe$ = function (attributeName) {
    return new W3cDelegates$NullableAttribute(attributeName);
  };
  W3cDelegates.prototype.nullableBooleanAttribute_61zpoe$ = function (attributeName) {
    return new W3cDelegates$NullableBooleanAttribute(attributeName);
  };
  W3cDelegates.prototype.nullableDimensionAttribute_61zpoe$ = function (attributeName) {
    return new W3cDelegates$NullableDimensionAttribute(attributeName);
  };
  function W3cDelegates$Attribute(receiver, initialValue, attributeName) {
    this.attributeName = attributeName;
    receiver.w3cElement_gobymg$_0.setAttribute(this.attributeName, initialValue);
  }
  W3cDelegates$Attribute.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = this.attributeName;
    return (tmp$ = w3cElement.getAttribute(attributeName)) != null ? tmp$ : Kotlin.throwNPE();
  };
  W3cDelegates$Attribute.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = this.attributeName;
    w3cElement.setAttribute(attributeName, value);
  };
  W3cDelegates$Attribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Attribute',
    interfaces: [ReadWriteProperty]
  };
  function W3cDelegates$NullableAttribute(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    this.attributeName = attributeName;
  }
  W3cDelegates$NullableAttribute.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    return w3cElement.getAttribute(attributeName);
  };
  W3cDelegates$NullableAttribute.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    if (value != null) {
      w3cElement.setAttribute(attributeName, value);
    }
     else {
      if (w3cElement.hasAttribute(attributeName)) {
        w3cElement.removeAttribute(attributeName);
      }
    }
  };
  W3cDelegates$NullableAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NullableAttribute',
    interfaces: [ReadWriteProperty]
  };
  function W3cDelegates$NullableBooleanAttribute(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    this.attributeName = attributeName;
  }
  W3cDelegates$NullableBooleanAttribute.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    var $receiver = w3cElement.getAttribute(attributeName);
    return !($receiver == null || $receiver.length === 0);
  };
  W3cDelegates$NullableBooleanAttribute.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    if (value != null && value) {
      w3cElement.setAttribute(attributeName, attributeName);
    }
     else {
      if (w3cElement.hasAttribute(attributeName)) {
        w3cElement.removeAttribute(attributeName);
      }
    }
  };
  W3cDelegates$NullableBooleanAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NullableBooleanAttribute',
    interfaces: [ReadWriteProperty]
  };
  function W3cDelegates$NullableDimensionAttribute(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    this.attributeName = attributeName;
  }
  W3cDelegates$NullableDimensionAttribute.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    return toDimension(w3cElement.getAttribute(attributeName));
  };
  W3cDelegates$NullableDimensionAttribute.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var w3cElement = thisRef.w3cElement_gobymg$_0;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : property.callableName;
    if (value != null) {
      w3cElement.setAttribute(attributeName, value.toHtml());
    }
     else {
      if (w3cElement.hasAttribute(attributeName)) {
        w3cElement.removeAttribute(attributeName);
      }
    }
  };
  W3cDelegates$NullableDimensionAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NullableDimensionAttribute',
    interfaces: [ReadWriteProperty]
  };
  W3cDelegates.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'W3cDelegates',
    interfaces: []
  };
  var W3cDelegates_instance = null;
  function W3cDelegates_getInstance() {
    if (W3cDelegates_instance === null) {
      new W3cDelegates();
    }
    return W3cDelegates_instance;
  }
  function AdjacentSiblingRule(selector) {
    Rule.call(this, selector);
  }
  AdjacentSiblingRule.prototype.cssText = function () {
    return this.cssText_y57xct$_0(this.selector);
  };
  AdjacentSiblingRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AdjacentSiblingRule',
    interfaces: [Rule]
  };
  function AndRule(selector) {
    Rule.call(this, selector);
  }
  AndRule.prototype.cssText = function () {
    return this.cssText_y57xct$_0(this.selector);
  };
  AndRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AndRule',
    interfaces: [Rule]
  };
  function AnyRule() {
    Rule.call(this, AnySelector$Statics_getInstance().GET);
  }
  AnyRule.prototype.cssText = function () {
    return Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
  };
  AnyRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AnyRule',
    interfaces: [Rule]
  };
  function ChildRule(selector) {
    Rule.call(this, selector);
  }
  ChildRule.prototype.cssText = function () {
    return this.cssText_y57xct$_0(this.selector);
  };
  ChildRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ChildRule',
    interfaces: [Rule]
  };
  function ClassRule(selector) {
    Rule.call(this, selector);
  }
  Object.defineProperty(ClassRule.prototype, 'className', {
    get: function () {
      return this.selector.value;
    }
  });
  ClassRule.prototype.cssText = function () {
    return Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
  };
  ClassRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClassRule',
    interfaces: [Rule]
  };
  function Colour() {
  }
  Colour.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Colour',
    interfaces: []
  };
  function Hsl(h, s, l, a_0) {
    Hsl$Statics_getInstance();
    if (a_0 === void 0)
      a_0 = null;
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a_0;
  }
  Hsl.prototype.toHtml = function () {
    if (this.a != null) {
      return 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + Kotlin.toString(this.a) + ')';
    }
     else {
      return 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    }
  };
  Hsl.prototype.toRgb = function () {
    if (this.s === 0) {
      return new RgbColor(1, 1, 1, this.a);
    }
    var q = this.l < 0.5 ? Kotlin.imul(this.l, 1 + this.s | 0) : this.l + this.s - Kotlin.imul(this.l, this.s) | 0;
    var p_0 = (2 * this.l | 0) - q | 0;
    return new RgbColor(hueToRgb(p_0, q, this.h + (1 / 3 | 0) | 0), hueToRgb(p_0, q, this.h), hueToRgb(p_0, q, this.h - (1 / 3 | 0) | 0), this.a);
  };
  function Hsl$Statics() {
    Hsl$Statics_instance = this;
    this.RED = new Hsl(0, 100, 50);
    this.GREEN = new Hsl(120, 100, 50);
    this.BLUE = new Hsl(240, 100, 50);
  }
  Hsl$Statics.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Statics',
    interfaces: []
  };
  var Hsl$Statics_instance = null;
  function Hsl$Statics_getInstance() {
    if (Hsl$Statics_instance === null) {
      new Hsl$Statics();
    }
    return Hsl$Statics_instance;
  }
  Hsl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hsl',
    interfaces: [Colour]
  };
  function hueToRgb(pIn, qIn, tIn) {
    var t = tIn;
    if (t < 0) {
      t = t + 1 | 0;
    }
    if (t > 1) {
      t = t - 1 | 0;
    }
    if (t < (1 / 6 | 0)) {
      return pIn + Kotlin.imul((qIn - pIn | 0) * 6 | 0, t) | 0;
    }
    if (t < (1 / 2 | 0)) {
      return qIn;
    }
    if (t < (2 / 3 | 0)) {
      return pIn + (Kotlin.imul(qIn - pIn | 0, (2 / 3 | 0) - t | 0) * 6 | 0) | 0;
    }
    return pIn;
  }
  function RgbColor(r, g, b, a_0) {
    RgbColor$Factory_getInstance();
    if (a_0 === void 0)
      a_0 = null;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a_0;
  }
  RgbColor.prototype.toHtml = function () {
    return this.toHexString();
  };
  RgbColor.prototype.toHexString = function () {
    var rx = toHexString(this.r);
    var gx = toHexString(this.g);
    var bx = toHexString(this.b);
    return '#' + rx + gx + bx;
  };
  RgbColor.prototype.toHsl = function () {
    var max = Math.max(this.r, this.g, this.b);
    var min = Math.min(this.r, this.g, this.b);
    var h = (max + min | 0) / 2 | 0;
    var s = h;
    var l = h;
    if (max === min) {
      h = 0;
      s = 0;
    }
     else {
      var d = max - min | 0;
      s = l > 0.5 ? d / (2 - max - min | 0) | 0 : d / (max + min | 0) | 0;
      if (max === this.r) {
        h = ((this.g - this.b | 0) / d | 0) + (this.g < this.b ? 6 : 0) | 0;
      }
       else if (max === this.g) {
        h = ((this.b - this.r | 0) / d | 0) + 2 | 0;
      }
       else {
        h = ((this.r - this.g | 0) / d | 0) + 4 | 0;
      }
      h = h / 6 | 0;
    }
    return new Hsl(h, s, l, this.a);
  };
  RgbColor.prototype.toString = function () {
    if (this.a != null) {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + Kotlin.toString(this.a) + ')';
    }
     else {
      return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
    }
  };
  RgbColor.prototype.withAlfa_14dthe$ = function (alpha) {
    return new RgbColor(this.r, this.g, this.b, alpha);
  };
  RgbColor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, RgbColor))
      return false;
    if (this.r !== other.r)
      return false;
    if (this.g !== other.g)
      return false;
    if (this.b !== other.b)
      return false;
    if (this.a !== other.a)
      return false;
    return true;
  };
  RgbColor.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = this.r;
    result = (31 * result | 0) + this.g | 0;
    result = (31 * result | 0) + this.b | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.a) != null ? Kotlin.hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    return result;
  };
  function RgbColor$Factory() {
    RgbColor$Factory_instance = this;
    this.TRANSPARENT = new RgbColor(0, 0, 0, 0.0);
    this.WHITE = new RgbColor(255, 255, 255);
    this.BLACK = new RgbColor(0, 0, 0);
    this.RED = new RgbColor(255, 0, 0);
    this.GREEN = new RgbColor(0, 255, 0);
    this.BLUE = new RgbColor(0, 0, 255);
  }
  RgbColor$Factory.prototype.from_61zpoe$ = function (string) {
    var stringWithoutHash = startsWith(string, '#') ? string.substring(1) : string;
    if (stringWithoutHash.length === 6) {
      var rs = stringWithoutHash.substring(0, 2);
      var gs = stringWithoutHash.substring(2, 4);
      var bs = stringWithoutHash.substring(4, 6);
      var r = toInt_0(rs, 16);
      var g = toInt_0(gs, 16);
      var b = toInt_0(bs, 16);
      return new RgbColor(r, g, b);
    }
     else {
      var rs_0 = stringWithoutHash.substring(0, 1);
      var gs_0 = stringWithoutHash.substring(1, 2);
      var bs_0 = stringWithoutHash.substring(2, 3);
      var r_0 = toInt_0(rs_0, 16);
      var g_0 = toInt_0(gs_0, 16);
      var b_0 = toInt_0(bs_0, 16);
      return new RgbColor(r_0, g_0, b_0);
    }
  };
  RgbColor$Factory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Factory',
    interfaces: []
  };
  var RgbColor$Factory_instance = null;
  function RgbColor$Factory_getInstance() {
    if (RgbColor$Factory_instance === null) {
      new RgbColor$Factory();
    }
    return RgbColor$Factory_instance;
  }
  RgbColor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RgbColor',
    interfaces: [Colour]
  };
  function DescendantRule(selector) {
    Rule.call(this, selector);
  }
  DescendantRule.prototype.cssText = function () {
    return this.cssText_y57xct$_0(this.selector);
  };
  DescendantRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DescendantRule',
    interfaces: [Rule]
  };
  function keyframesRule($receiver, selector, init) {
    var style = new KeyframesRule(selector);
    init(style);
    return style;
  }
  function classRule($receiver, selector, init) {
    var style = new ClassRule(selector);
    init(style);
    return style;
  }
  function rule_1($receiver, styledClass, init) {
    if (init === void 0)
      init = styledClass.rule;
    var style = new ClassRule(styledClass.classSelector);
    init(style);
    return style;
  }
  function and($receiver, selector, init) {
    var style = new AndRule(new AndSelector($receiver.selector, toSelector(selector)));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function and_0($receiver, selector, init) {
    var style = new AndRule(new AndSelector($receiver.selector, selector));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function adjacentSibling($receiver, selector, init) {
    var style = new AdjacentSiblingRule(new AdjacentSiblingSelector($receiver.selector, toSelector(selector)));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function adjacentSibling_0($receiver, selector, init) {
    var style = new AdjacentSiblingRule(new AdjacentSiblingSelector($receiver.selector, selector));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function desc($receiver, selector, init) {
    var style = new DescendantRule(new DescendantSelector($receiver.selector, toSelector(selector)));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function desc_0($receiver, selector, init) {
    var style = new DescendantRule(new DescendantSelector($receiver.selector, selector));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function child($receiver, selector, init) {
    var style = new ChildRule(new ChildSelector($receiver.selector, toSelector(selector)));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function child_0($receiver, selector, init) {
    var style = new ChildRule(new ChildSelector($receiver.selector, selector));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function active($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('active')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function checked($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('checked')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function empty($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('empty')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function enabled($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('enabled')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function first_0($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('first')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function firstChild($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('first-child')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function firstOfType($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('first-of-type')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function focus($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('focus')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function hover($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('hover')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function indeterminate($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('indeterminate')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function inRange($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('in-range')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function invalid($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('invalid')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function lang($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('lang')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function lastChild($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('last-child')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function lastOfType($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('last-of-type')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function left($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('left')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function link($receiver, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new PseudoClassSelector('link')));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function not($receiver, selector, init) {
    var style = new AndRule(new AndSelector($receiver.selector, new NotSelector(selector)));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function keyframesRule_0($receiver, selector, init) {
    return keyframesRule($receiver, new AnimationNameSelector(selector), init);
  }
  function keyframe($receiver, value, init) {
    var style = new KeyFrameRule(new KeyframeSelector(value));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function kfrom($receiver, init) {
    var style = new KeyFrameRule(new KeyframeSelector('from'));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function kto($receiver, init) {
    var style = new KeyFrameRule(new KeyframeSelector('to'));
    init(style);
    $receiver._childStyles_1851tg$_0.add_11rb$(style);
    return style;
  }
  function KeyFrameRule(selector) {
    Rule.call(this, selector);
  }
  KeyFrameRule.prototype.cssText = function () {
    return this.cssText_y57xct$_0(this.selector);
  };
  KeyFrameRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyFrameRule',
    interfaces: [Rule]
  };
  function KeyframesRule(selector) {
    Rule.call(this, selector);
  }
  KeyframesRule.prototype.cssText = function () {
    var tmp$_0;
    var s = {v: '@keyframes '};
    s.v += this.selector.toString();
    s.v += ' { ';
    tmp$_0 = this._map.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var key = tmp$.key;
      var value = tmp$.value;
      s.v += key + ': ' + value + '; ';
    }
    var tmp$_1;
    tmp$_1 = this._childStyles_1851tg$_0.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      s.v += element.cssText();
    }
    s.v += '}';
    return s.v;
  };
  KeyframesRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyframesRule',
    interfaces: [Rule]
  };
  function Rule(selector) {
    this.selector = selector;
    this._map = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    this._childStyles_1851tg$_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this._cssFloat$delegate = new Rule$Property(this);
    this._dashed_attribute$delegate = new Rule$Property(this);
    this._camel_cased_attribute$delegate = new Rule$Property(this);
    this._alignContent$delegate = new Rule$Property(this);
    this._alignItems$delegate = new Rule$Property(this);
    this._alignSelf$delegate = new Rule$Property(this);
    this._animation$delegate = new Rule$Property(this);
    this._animationDelay$delegate = new Rule$Property(this);
    this._animationDirection$delegate = new Rule$Property(this);
    this._animationDuration$delegate = new Rule$Property(this);
    this._animationFillMode$delegate = new Rule$Property(this);
    this._animationIterationCount$delegate = new Rule$Property(this);
    this._animationName$delegate = new Rule$Property(this);
    this._animationPlayState$delegate = new Rule$Property(this);
    this._animationTimingFunction$delegate = new Rule$Property(this);
    this._backfaceVisibility$delegate = new Rule$Property(this);
    this._background$delegate = new Rule$Property(this);
    this._backgroundAttachment$delegate = new Rule$Property(this);
    this._backgroundClip$delegate = new Rule$Property(this);
    this._backgroundColor$delegate = new Rule$NullableProperty(this);
    this._backgroundImage$delegate = new Rule$Property(this);
    this._backgroundOrigin$delegate = new Rule$Property(this);
    this._backgroundPosition$delegate = new Rule$Property(this);
    this._backgroundRepeat$delegate = new Rule$Property(this);
    this._backgroundSize$delegate = new Rule$Property(this);
    this._border$delegate = new Rule$Property(this);
    this._borderBottom$delegate = new Rule$Property(this);
    this._borderBottomColor$delegate = new Rule$Property(this);
    this._borderBottomLeftRadius$delegate = new Rule$Property(this);
    this._borderBottomRightRadius$delegate = new Rule$Property(this);
    this._borderBottomStyle$delegate = new Rule$Property(this);
    this._borderBottomWidth$delegate = new Rule$Property(this);
    this._borderCollapse$delegate = new Rule$Property(this);
    this._borderColor$delegate = new Rule$NullableProperty(this);
    this._borderImage$delegate = new Rule$Property(this);
    this._borderImageOutset$delegate = new Rule$Property(this);
    this._borderImageRepeat$delegate = new Rule$Property(this);
    this._borderImageSlice$delegate = new Rule$Property(this);
    this._borderImageSource$delegate = new Rule$Property(this);
    this._borderImageWidth$delegate = new Rule$Property(this);
    this._borderLeft$delegate = new Rule$Property(this);
    this._borderLeftColor$delegate = new Rule$Property(this);
    this._borderLeftStyle$delegate = new Rule$Property(this);
    this._borderLeftWidth$delegate = new Rule$Property(this);
    this._borderRadius$delegate = new Rule$NullableProperty(this);
    this._borderRight$delegate = new Rule$Property(this);
    this._borderRightColor$delegate = new Rule$Property(this);
    this._borderRightStyle$delegate = new Rule$Property(this);
    this._borderRightWidth$delegate = new Rule$Property(this);
    this._borderSpacing$delegate = new Rule$Property(this);
    this._borderStyle$delegate = new Rule$NullableProperty(this);
    this._borderTop$delegate = new Rule$Property(this);
    this._borderTopColor$delegate = new Rule$Property(this);
    this._borderTopLeftRadius$delegate = new Rule$Property(this);
    this._borderTopRightRadius$delegate = new Rule$Property(this);
    this._borderTopStyle$delegate = new Rule$Property(this);
    this._borderTopWidth$delegate = new Rule$Property(this);
    this._borderWidth$delegate = new Rule$NullableProperty(this);
    this._bottom$delegate = new Rule$Property(this);
    this._boxDecorationBreak$delegate = new Rule$Property(this);
    this._boxShadow$delegate = new Rule$NullableProperty(this);
    this._boxSizing$delegate = new Rule$Property(this);
    this._breakAfter$delegate = new Rule$Property(this);
    this._breakBefore$delegate = new Rule$Property(this);
    this._breakInside$delegate = new Rule$Property(this);
    this._captionSide$delegate = new Rule$Property(this);
    this._clear$delegate = new Rule$Property(this);
    this._clip$delegate = new Rule$Property(this);
    this._color$delegate = new Rule$Property(this);
    this._columnCount$delegate = new Rule$Property(this);
    this._columnFill$delegate = new Rule$Property(this);
    this._columnGap$delegate = new Rule$Property(this);
    this._columnRule$delegate = new Rule$Property(this);
    this._columnRuleColor$delegate = new Rule$Property(this);
    this._columnRuleStyle$delegate = new Rule$Property(this);
    this._columnRuleWidth$delegate = new Rule$Property(this);
    this._columnSpan$delegate = new Rule$Property(this);
    this._columnWidth$delegate = new Rule$Property(this);
    this._columns$delegate = new Rule$Property(this);
    this._content$delegate = new Rule$Property(this);
    this._counterIncrement$delegate = new Rule$Property(this);
    this._counterReset$delegate = new Rule$Property(this);
    this._cursor$delegate = new Rule$NullableProperty(this);
    this._direction$delegate = new Rule$Property(this);
    this._display$delegate = new Rule$Property(this);
    this._emptyCells$delegate = new Rule$Property(this);
    this._filter$delegate = new Rule$Property(this);
    this._flex$delegate = new Rule$Property(this);
    this._flexBasis$delegate = new Rule$Property(this);
    this._flexDirection$delegate = new Rule$Property(this);
    this._flexFlow$delegate = new Rule$Property(this);
    this._flexGrow$delegate = new Rule$Property(this);
    this._flexShrink$delegate = new Rule$Property(this);
    this._flexWrap$delegate = new Rule$Property(this);
    this._font$delegate = new Rule$Property(this);
    this._fontFamily$delegate = new Rule$Property(this);
    this._fontFeatureSettings$delegate = new Rule$Property(this);
    this._fontKerning$delegate = new Rule$Property(this);
    this._fontLanguageOverride$delegate = new Rule$Property(this);
    this._fontSize$delegate = new Rule$Property(this);
    this._fontSizeAdjust$delegate = new Rule$Property(this);
    this._fontStretch$delegate = new Rule$Property(this);
    this._fontStyle$delegate = new Rule$Property(this);
    this._fontSynthesis$delegate = new Rule$Property(this);
    this._fontVariant$delegate = new Rule$Property(this);
    this._fontVariantAlternates$delegate = new Rule$Property(this);
    this._fontVariantCaps$delegate = new Rule$Property(this);
    this._fontVariantEastAsian$delegate = new Rule$Property(this);
    this._fontVariantLigatures$delegate = new Rule$Property(this);
    this._fontVariantNumeric$delegate = new Rule$Property(this);
    this._fontVariantPosition$delegate = new Rule$Property(this);
    this._fontWeight$delegate = new Rule$Property(this);
    this._hangingPunctuation$delegate = new Rule$Property(this);
    this._height$delegate = new Rule$Property(this);
    this._hyphens$delegate = new Rule$Property(this);
    this._imageOrientation$delegate = new Rule$Property(this);
    this._imageRendering$delegate = new Rule$Property(this);
    this._imageResolution$delegate = new Rule$Property(this);
    this._imeMode$delegate = new Rule$Property(this);
    this._justifyContent$delegate = new Rule$Property(this);
    this._left$delegate = new Rule$Property(this);
    this._letterSpacing$delegate = new Rule$Property(this);
    this._lineBreak$delegate = new Rule$Property(this);
    this._lineHeight$delegate = new Rule$Property(this);
    this._listStyle$delegate = new Rule$Property(this);
    this._listStyleImage$delegate = new Rule$Property(this);
    this._listStylePosition$delegate = new Rule$Property(this);
    this._listStyleType$delegate = new Rule$Property(this);
    this._margin$delegate = new Rule$NullableProperty(this);
    this._marginBottom$delegate = new Rule$Property(this);
    this._marginLeft$delegate = new Rule$Property(this);
    this._marginRight$delegate = new Rule$Property(this);
    this._marginTop$delegate = new Rule$Property(this);
    this._mark$delegate = new Rule$Property(this);
    this._markAfter$delegate = new Rule$Property(this);
    this._markBefore$delegate = new Rule$Property(this);
    this._marks$delegate = new Rule$Property(this);
    this._marqueeDirection$delegate = new Rule$Property(this);
    this._marqueePlayCount$delegate = new Rule$Property(this);
    this._marqueeSpeed$delegate = new Rule$Property(this);
    this._marqueeStyle$delegate = new Rule$Property(this);
    this._mask$delegate = new Rule$Property(this);
    this._maskType$delegate = new Rule$Property(this);
    this._maxHeight$delegate = new Rule$Property(this);
    this._maxWidth$delegate = new Rule$Property(this);
    this._minHeight$delegate = new Rule$Property(this);
    this._minWidth$delegate = new Rule$Property(this);
    this._navDown$delegate = new Rule$Property(this);
    this._navIndex$delegate = new Rule$Property(this);
    this._navLeft$delegate = new Rule$Property(this);
    this._navRight$delegate = new Rule$Property(this);
    this._navUp$delegate = new Rule$Property(this);
    this._objectFit$delegate = new Rule$Property(this);
    this._objectPosition$delegate = new Rule$Property(this);
    this._opacity$delegate = new Rule$Property(this);
    this._order$delegate = new Rule$Property(this);
    this._orphans$delegate = new Rule$Property(this);
    this._outline$delegate = new Rule$NullableProperty(this);
    this._outlineColor$delegate = new Rule$Property(this);
    this._outlineOffset$delegate = new Rule$Property(this);
    this._outlineStyle$delegate = new Rule$Property(this);
    this._outlineWidth$delegate = new Rule$Property(this);
    this._overflowWrap$delegate = new Rule$Property(this);
    this._overflowX$delegate = new Rule$Property(this);
    this._overflowY$delegate = new Rule$Property(this);
    this._padding$delegate = new Rule$Property(this);
    this._paddingBottom$delegate = new Rule$Property(this);
    this._paddingLeft$delegate = new Rule$Property(this);
    this._paddingRight$delegate = new Rule$Property(this);
    this._paddingTop$delegate = new Rule$Property(this);
    this._pageBreakAfter$delegate = new Rule$Property(this);
    this._pageBreakBefore$delegate = new Rule$Property(this);
    this._pageBreakInside$delegate = new Rule$Property(this);
    this._perspective$delegate = new Rule$Property(this);
    this._perspectiveOrigin$delegate = new Rule$Property(this);
    this._phonemes$delegate = new Rule$Property(this);
    this._position$delegate = new Rule$Property(this);
    this._quotes$delegate = new Rule$Property(this);
    this._resize$delegate = new Rule$Property(this);
    this._rest$delegate = new Rule$Property(this);
    this._restAfter$delegate = new Rule$Property(this);
    this._restBefore$delegate = new Rule$Property(this);
    this._right$delegate = new Rule$Property(this);
    this._tabSize$delegate = new Rule$Property(this);
    this._tableLayout$delegate = new Rule$Property(this);
    this._textAlign$delegate = new Rule$Property(this);
    this._textAlignLast$delegate = new Rule$Property(this);
    this._textCombineUpright$delegate = new Rule$Property(this);
    this._textDecoration$delegate = new Rule$Property(this);
    this._textDecorationColor$delegate = new Rule$Property(this);
    this._textDecorationLine$delegate = new Rule$Property(this);
    this._textDecorationStyle$delegate = new Rule$Property(this);
    this._textIndent$delegate = new Rule$Property(this);
    this._textJustify$delegate = new Rule$Property(this);
    this._textOrientation$delegate = new Rule$Property(this);
    this._textOverflow$delegate = new Rule$Property(this);
    this._textShadow$delegate = new Rule$Property(this);
    this._textTransform$delegate = new Rule$Property(this);
    this._textUnderlinePosition$delegate = new Rule$Property(this);
    this._top$delegate = new Rule$Property(this);
    this._transform$delegate = new Rule$Property(this);
    this._transformOrigin$delegate = new Rule$Property(this);
    this._transformStyle$delegate = new Rule$Property(this);
    this._transition$delegate = new Rule$Property(this);
    this._transitionDelay$delegate = new Rule$Property(this);
    this._transitionDuration$delegate = new Rule$Property(this);
    this._transitionProperty$delegate = new Rule$Property(this);
    this._transitionTimingFunction$delegate = new Rule$Property(this);
    this._unicodeBidi$delegate = new Rule$Property(this);
    this._verticalAlign$delegate = new Rule$Property(this);
    this._visibility$delegate = new Rule$Property(this);
    this._voiceBalance$delegate = new Rule$Property(this);
    this._voiceDuration$delegate = new Rule$Property(this);
    this._voicePitch$delegate = new Rule$Property(this);
    this._voicePitchRange$delegate = new Rule$Property(this);
    this._voiceRate$delegate = new Rule$Property(this);
    this._voiceStress$delegate = new Rule$Property(this);
    this._voiceVolume$delegate = new Rule$Property(this);
    this._whiteSpace$delegate = new Rule$Property(this);
    this._widows$delegate = new Rule$Property(this);
    this._width$delegate = new Rule$Property(this);
    this._wordBreak$delegate = new Rule$Property(this);
    this._wordSpacing$delegate = new Rule$Property(this);
    this._wordWrap$delegate = new Rule$Property(this);
    this._writingMode$delegate = new Rule$Property(this);
    this._zIndex$delegate = new Rule$Property(this);
  }
  Rule.prototype.cssText_y57xct$_0 = function (selector) {
    var tmp$_0;
    var s = '';
    s += selector.toString();
    s += ' { ';
    tmp$_0 = this._map.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var key = tmp$.key;
      var value = tmp$.value;
      s += key + ': ' + value + '; ';
    }
    s += '}';
    return s;
  };
  Object.defineProperty(Rule.prototype, '_cssFloat', {
    get: function () {
      return this._cssFloat$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_cssFloat'));
    },
    set: function (_cssFloat) {
      this._cssFloat$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_cssFloat'), _cssFloat);
    }
  });
  Object.defineProperty(Rule.prototype, '_dashed_attribute', {
    get: function () {
      return this._dashed_attribute$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_dashed_attribute'));
    },
    set: function (_dashed_attribute) {
      this._dashed_attribute$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_dashed_attribute'), _dashed_attribute);
    }
  });
  Object.defineProperty(Rule.prototype, '_camel_cased_attribute', {
    get: function () {
      return this._camel_cased_attribute$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'));
    },
    set: function (_camel_cased_attribute) {
      this._camel_cased_attribute$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'), _camel_cased_attribute);
    }
  });
  Object.defineProperty(Rule.prototype, '_alignContent', {
    get: function () {
      return this._alignContent$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_alignContent'));
    },
    set: function (_alignContent) {
      this._alignContent$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_alignContent'), _alignContent);
    }
  });
  Object.defineProperty(Rule.prototype, '_alignItems', {
    get: function () {
      return this._alignItems$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_alignItems'));
    },
    set: function (_alignItems) {
      this._alignItems$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_alignItems'), _alignItems);
    }
  });
  Object.defineProperty(Rule.prototype, '_alignSelf', {
    get: function () {
      return this._alignSelf$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_alignSelf'));
    },
    set: function (_alignSelf) {
      this._alignSelf$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_alignSelf'), _alignSelf);
    }
  });
  Object.defineProperty(Rule.prototype, '_animation', {
    get: function () {
      return this._animation$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animation'));
    },
    set: function (_animation) {
      this._animation$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animation'), _animation);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationDelay', {
    get: function () {
      return this._animationDelay$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationDelay'));
    },
    set: function (_animationDelay) {
      this._animationDelay$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationDelay'), _animationDelay);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationDirection', {
    get: function () {
      return this._animationDirection$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationDirection'));
    },
    set: function (_animationDirection) {
      this._animationDirection$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationDirection'), _animationDirection);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationDuration', {
    get: function () {
      return this._animationDuration$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationDuration'));
    },
    set: function (_animationDuration) {
      this._animationDuration$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationDuration'), _animationDuration);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationFillMode', {
    get: function () {
      return this._animationFillMode$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationFillMode'));
    },
    set: function (_animationFillMode) {
      this._animationFillMode$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationFillMode'), _animationFillMode);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationIterationCount', {
    get: function () {
      return this._animationIterationCount$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationIterationCount'));
    },
    set: function (_animationIterationCount) {
      this._animationIterationCount$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationIterationCount'), _animationIterationCount);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationName', {
    get: function () {
      return this._animationName$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationName'));
    },
    set: function (_animationName) {
      this._animationName$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationName'), _animationName);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationPlayState', {
    get: function () {
      return this._animationPlayState$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationPlayState'));
    },
    set: function (_animationPlayState) {
      this._animationPlayState$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationPlayState'), _animationPlayState);
    }
  });
  Object.defineProperty(Rule.prototype, '_animationTimingFunction', {
    get: function () {
      return this._animationTimingFunction$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_animationTimingFunction'));
    },
    set: function (_animationTimingFunction) {
      this._animationTimingFunction$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_animationTimingFunction'), _animationTimingFunction);
    }
  });
  Object.defineProperty(Rule.prototype, '_backfaceVisibility', {
    get: function () {
      return this._backfaceVisibility$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backfaceVisibility'));
    },
    set: function (_backfaceVisibility) {
      this._backfaceVisibility$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backfaceVisibility'), _backfaceVisibility);
    }
  });
  Object.defineProperty(Rule.prototype, '_background', {
    get: function () {
      return this._background$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_background'));
    },
    set: function (_background) {
      this._background$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_background'), _background);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundAttachment', {
    get: function () {
      return this._backgroundAttachment$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundAttachment'));
    },
    set: function (_backgroundAttachment) {
      this._backgroundAttachment$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundAttachment'), _backgroundAttachment);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundClip', {
    get: function () {
      return this._backgroundClip$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundClip'));
    },
    set: function (_backgroundClip) {
      this._backgroundClip$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundClip'), _backgroundClip);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundColor', {
    get: function () {
      return this._backgroundColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundColor'));
    },
    set: function (_backgroundColor) {
      this._backgroundColor$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_backgroundColor'), _backgroundColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundImage', {
    get: function () {
      return this._backgroundImage$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundImage'));
    },
    set: function (_backgroundImage) {
      this._backgroundImage$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundImage'), _backgroundImage);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundOrigin', {
    get: function () {
      return this._backgroundOrigin$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundOrigin'));
    },
    set: function (_backgroundOrigin) {
      this._backgroundOrigin$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundOrigin'), _backgroundOrigin);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundPosition', {
    get: function () {
      return this._backgroundPosition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundPosition'));
    },
    set: function (_backgroundPosition) {
      this._backgroundPosition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundPosition'), _backgroundPosition);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundRepeat', {
    get: function () {
      return this._backgroundRepeat$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundRepeat'));
    },
    set: function (_backgroundRepeat) {
      this._backgroundRepeat$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundRepeat'), _backgroundRepeat);
    }
  });
  Object.defineProperty(Rule.prototype, '_backgroundSize', {
    get: function () {
      return this._backgroundSize$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_backgroundSize'));
    },
    set: function (_backgroundSize) {
      this._backgroundSize$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_backgroundSize'), _backgroundSize);
    }
  });
  Object.defineProperty(Rule.prototype, '_border', {
    get: function () {
      return this._border$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_border'));
    },
    set: function (_border) {
      this._border$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_border'), _border);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottom', {
    get: function () {
      return this._borderBottom$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottom'));
    },
    set: function (_borderBottom) {
      this._borderBottom$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottom'), _borderBottom);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottomColor', {
    get: function () {
      return this._borderBottomColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottomColor'));
    },
    set: function (_borderBottomColor) {
      this._borderBottomColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottomColor'), _borderBottomColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottomLeftRadius', {
    get: function () {
      return this._borderBottomLeftRadius$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottomLeftRadius'));
    },
    set: function (_borderBottomLeftRadius) {
      this._borderBottomLeftRadius$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottomLeftRadius'), _borderBottomLeftRadius);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottomRightRadius', {
    get: function () {
      return this._borderBottomRightRadius$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottomRightRadius'));
    },
    set: function (_borderBottomRightRadius) {
      this._borderBottomRightRadius$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottomRightRadius'), _borderBottomRightRadius);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottomStyle', {
    get: function () {
      return this._borderBottomStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottomStyle'));
    },
    set: function (_borderBottomStyle) {
      this._borderBottomStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottomStyle'), _borderBottomStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderBottomWidth', {
    get: function () {
      return this._borderBottomWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderBottomWidth'));
    },
    set: function (_borderBottomWidth) {
      this._borderBottomWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderBottomWidth'), _borderBottomWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderCollapse', {
    get: function () {
      return this._borderCollapse$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderCollapse'));
    },
    set: function (_borderCollapse) {
      this._borderCollapse$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderCollapse'), _borderCollapse);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderColor', {
    get: function () {
      return this._borderColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderColor'));
    },
    set: function (_borderColor) {
      this._borderColor$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_borderColor'), _borderColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImage', {
    get: function () {
      return this._borderImage$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImage'));
    },
    set: function (_borderImage) {
      this._borderImage$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImage'), _borderImage);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImageOutset', {
    get: function () {
      return this._borderImageOutset$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImageOutset'));
    },
    set: function (_borderImageOutset) {
      this._borderImageOutset$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImageOutset'), _borderImageOutset);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImageRepeat', {
    get: function () {
      return this._borderImageRepeat$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImageRepeat'));
    },
    set: function (_borderImageRepeat) {
      this._borderImageRepeat$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImageRepeat'), _borderImageRepeat);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImageSlice', {
    get: function () {
      return this._borderImageSlice$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImageSlice'));
    },
    set: function (_borderImageSlice) {
      this._borderImageSlice$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImageSlice'), _borderImageSlice);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImageSource', {
    get: function () {
      return this._borderImageSource$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImageSource'));
    },
    set: function (_borderImageSource) {
      this._borderImageSource$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImageSource'), _borderImageSource);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderImageWidth', {
    get: function () {
      return this._borderImageWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderImageWidth'));
    },
    set: function (_borderImageWidth) {
      this._borderImageWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderImageWidth'), _borderImageWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderLeft', {
    get: function () {
      return this._borderLeft$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderLeft'));
    },
    set: function (_borderLeft) {
      this._borderLeft$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderLeft'), _borderLeft);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderLeftColor', {
    get: function () {
      return this._borderLeftColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderLeftColor'));
    },
    set: function (_borderLeftColor) {
      this._borderLeftColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderLeftColor'), _borderLeftColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderLeftStyle', {
    get: function () {
      return this._borderLeftStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderLeftStyle'));
    },
    set: function (_borderLeftStyle) {
      this._borderLeftStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderLeftStyle'), _borderLeftStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderLeftWidth', {
    get: function () {
      return this._borderLeftWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderLeftWidth'));
    },
    set: function (_borderLeftWidth) {
      this._borderLeftWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderLeftWidth'), _borderLeftWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderRadius', {
    get: function () {
      return this._borderRadius$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderRadius'));
    },
    set: function (_borderRadius) {
      this._borderRadius$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_borderRadius'), _borderRadius);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderRight', {
    get: function () {
      return this._borderRight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderRight'));
    },
    set: function (_borderRight) {
      this._borderRight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderRight'), _borderRight);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderRightColor', {
    get: function () {
      return this._borderRightColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderRightColor'));
    },
    set: function (_borderRightColor) {
      this._borderRightColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderRightColor'), _borderRightColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderRightStyle', {
    get: function () {
      return this._borderRightStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderRightStyle'));
    },
    set: function (_borderRightStyle) {
      this._borderRightStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderRightStyle'), _borderRightStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderRightWidth', {
    get: function () {
      return this._borderRightWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderRightWidth'));
    },
    set: function (_borderRightWidth) {
      this._borderRightWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderRightWidth'), _borderRightWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderSpacing', {
    get: function () {
      return this._borderSpacing$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderSpacing'));
    },
    set: function (_borderSpacing) {
      this._borderSpacing$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderSpacing'), _borderSpacing);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderStyle', {
    get: function () {
      return this._borderStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderStyle'));
    },
    set: function (_borderStyle) {
      this._borderStyle$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_borderStyle'), _borderStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTop', {
    get: function () {
      return this._borderTop$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTop'));
    },
    set: function (_borderTop) {
      this._borderTop$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTop'), _borderTop);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTopColor', {
    get: function () {
      return this._borderTopColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTopColor'));
    },
    set: function (_borderTopColor) {
      this._borderTopColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTopColor'), _borderTopColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTopLeftRadius', {
    get: function () {
      return this._borderTopLeftRadius$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTopLeftRadius'));
    },
    set: function (_borderTopLeftRadius) {
      this._borderTopLeftRadius$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTopLeftRadius'), _borderTopLeftRadius);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTopRightRadius', {
    get: function () {
      return this._borderTopRightRadius$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTopRightRadius'));
    },
    set: function (_borderTopRightRadius) {
      this._borderTopRightRadius$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTopRightRadius'), _borderTopRightRadius);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTopStyle', {
    get: function () {
      return this._borderTopStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTopStyle'));
    },
    set: function (_borderTopStyle) {
      this._borderTopStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTopStyle'), _borderTopStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderTopWidth', {
    get: function () {
      return this._borderTopWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderTopWidth'));
    },
    set: function (_borderTopWidth) {
      this._borderTopWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_borderTopWidth'), _borderTopWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_borderWidth', {
    get: function () {
      return this._borderWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_borderWidth'));
    },
    set: function (_borderWidth) {
      this._borderWidth$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_borderWidth'), _borderWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_bottom', {
    get: function () {
      return this._bottom$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_bottom'));
    },
    set: function (_bottom) {
      this._bottom$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_bottom'), _bottom);
    }
  });
  Object.defineProperty(Rule.prototype, '_boxDecorationBreak', {
    get: function () {
      return this._boxDecorationBreak$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_boxDecorationBreak'));
    },
    set: function (_boxDecorationBreak) {
      this._boxDecorationBreak$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_boxDecorationBreak'), _boxDecorationBreak);
    }
  });
  Object.defineProperty(Rule.prototype, '_boxShadow', {
    get: function () {
      return this._boxShadow$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_boxShadow'));
    },
    set: function (_boxShadow) {
      this._boxShadow$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_boxShadow'), _boxShadow);
    }
  });
  Object.defineProperty(Rule.prototype, '_boxSizing', {
    get: function () {
      return this._boxSizing$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_boxSizing'));
    },
    set: function (_boxSizing) {
      this._boxSizing$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_boxSizing'), _boxSizing);
    }
  });
  Object.defineProperty(Rule.prototype, '_breakAfter', {
    get: function () {
      return this._breakAfter$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_breakAfter'));
    },
    set: function (_breakAfter) {
      this._breakAfter$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_breakAfter'), _breakAfter);
    }
  });
  Object.defineProperty(Rule.prototype, '_breakBefore', {
    get: function () {
      return this._breakBefore$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_breakBefore'));
    },
    set: function (_breakBefore) {
      this._breakBefore$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_breakBefore'), _breakBefore);
    }
  });
  Object.defineProperty(Rule.prototype, '_breakInside', {
    get: function () {
      return this._breakInside$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_breakInside'));
    },
    set: function (_breakInside) {
      this._breakInside$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_breakInside'), _breakInside);
    }
  });
  Object.defineProperty(Rule.prototype, '_captionSide', {
    get: function () {
      return this._captionSide$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_captionSide'));
    },
    set: function (_captionSide) {
      this._captionSide$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_captionSide'), _captionSide);
    }
  });
  Object.defineProperty(Rule.prototype, '_clear', {
    get: function () {
      return this._clear$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_clear'));
    },
    set: function (_clear) {
      this._clear$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_clear'), _clear);
    }
  });
  Object.defineProperty(Rule.prototype, '_clip', {
    get: function () {
      return this._clip$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_clip'));
    },
    set: function (_clip) {
      this._clip$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_clip'), _clip);
    }
  });
  Object.defineProperty(Rule.prototype, '_color', {
    get: function () {
      return this._color$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_color'));
    },
    set: function (_color) {
      this._color$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_color'), _color);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnCount', {
    get: function () {
      return this._columnCount$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnCount'));
    },
    set: function (_columnCount) {
      this._columnCount$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnCount'), _columnCount);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnFill', {
    get: function () {
      return this._columnFill$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnFill'));
    },
    set: function (_columnFill) {
      this._columnFill$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnFill'), _columnFill);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnGap', {
    get: function () {
      return this._columnGap$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnGap'));
    },
    set: function (_columnGap) {
      this._columnGap$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnGap'), _columnGap);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnRule', {
    get: function () {
      return this._columnRule$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnRule'));
    },
    set: function (_columnRule) {
      this._columnRule$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnRule'), _columnRule);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnRuleColor', {
    get: function () {
      return this._columnRuleColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnRuleColor'));
    },
    set: function (_columnRuleColor) {
      this._columnRuleColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnRuleColor'), _columnRuleColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnRuleStyle', {
    get: function () {
      return this._columnRuleStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnRuleStyle'));
    },
    set: function (_columnRuleStyle) {
      this._columnRuleStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnRuleStyle'), _columnRuleStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnRuleWidth', {
    get: function () {
      return this._columnRuleWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnRuleWidth'));
    },
    set: function (_columnRuleWidth) {
      this._columnRuleWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnRuleWidth'), _columnRuleWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnSpan', {
    get: function () {
      return this._columnSpan$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnSpan'));
    },
    set: function (_columnSpan) {
      this._columnSpan$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnSpan'), _columnSpan);
    }
  });
  Object.defineProperty(Rule.prototype, '_columnWidth', {
    get: function () {
      return this._columnWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columnWidth'));
    },
    set: function (_columnWidth) {
      this._columnWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columnWidth'), _columnWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_columns', {
    get: function () {
      return this._columns$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_columns'));
    },
    set: function (_columns) {
      this._columns$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_columns'), _columns);
    }
  });
  Object.defineProperty(Rule.prototype, '_content', {
    get: function () {
      return this._content$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_content'));
    },
    set: function (_content) {
      this._content$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_content'), _content);
    }
  });
  Object.defineProperty(Rule.prototype, '_counterIncrement', {
    get: function () {
      return this._counterIncrement$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_counterIncrement'));
    },
    set: function (_counterIncrement) {
      this._counterIncrement$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_counterIncrement'), _counterIncrement);
    }
  });
  Object.defineProperty(Rule.prototype, '_counterReset', {
    get: function () {
      return this._counterReset$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_counterReset'));
    },
    set: function (_counterReset) {
      this._counterReset$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_counterReset'), _counterReset);
    }
  });
  Object.defineProperty(Rule.prototype, '_cursor', {
    get: function () {
      return this._cursor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_cursor'));
    },
    set: function (_cursor) {
      this._cursor$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_cursor'), _cursor);
    }
  });
  Object.defineProperty(Rule.prototype, '_direction', {
    get: function () {
      return this._direction$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_direction'));
    },
    set: function (_direction) {
      this._direction$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_direction'), _direction);
    }
  });
  Object.defineProperty(Rule.prototype, '_display', {
    get: function () {
      return this._display$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_display'));
    },
    set: function (_display) {
      this._display$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_display'), _display);
    }
  });
  Object.defineProperty(Rule.prototype, '_emptyCells', {
    get: function () {
      return this._emptyCells$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_emptyCells'));
    },
    set: function (_emptyCells) {
      this._emptyCells$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_emptyCells'), _emptyCells);
    }
  });
  Object.defineProperty(Rule.prototype, '_filter', {
    get: function () {
      return this._filter$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_filter'));
    },
    set: function (_filter) {
      this._filter$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_filter'), _filter);
    }
  });
  Object.defineProperty(Rule.prototype, '_flex', {
    get: function () {
      return this._flex$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flex'));
    },
    set: function (_flex) {
      this._flex$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flex'), _flex);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexBasis', {
    get: function () {
      return this._flexBasis$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexBasis'));
    },
    set: function (_flexBasis) {
      this._flexBasis$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexBasis'), _flexBasis);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexDirection', {
    get: function () {
      return this._flexDirection$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexDirection'));
    },
    set: function (_flexDirection) {
      this._flexDirection$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexDirection'), _flexDirection);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexFlow', {
    get: function () {
      return this._flexFlow$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexFlow'));
    },
    set: function (_flexFlow) {
      this._flexFlow$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexFlow'), _flexFlow);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexGrow', {
    get: function () {
      return this._flexGrow$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexGrow'));
    },
    set: function (_flexGrow) {
      this._flexGrow$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexGrow'), _flexGrow);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexShrink', {
    get: function () {
      return this._flexShrink$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexShrink'));
    },
    set: function (_flexShrink) {
      this._flexShrink$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexShrink'), _flexShrink);
    }
  });
  Object.defineProperty(Rule.prototype, '_flexWrap', {
    get: function () {
      return this._flexWrap$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_flexWrap'));
    },
    set: function (_flexWrap) {
      this._flexWrap$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_flexWrap'), _flexWrap);
    }
  });
  Object.defineProperty(Rule.prototype, '_font', {
    get: function () {
      return this._font$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_font'));
    },
    set: function (_font) {
      this._font$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_font'), _font);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontFamily', {
    get: function () {
      return this._fontFamily$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontFamily'));
    },
    set: function (_fontFamily) {
      this._fontFamily$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontFamily'), _fontFamily);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontFeatureSettings', {
    get: function () {
      return this._fontFeatureSettings$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontFeatureSettings'));
    },
    set: function (_fontFeatureSettings) {
      this._fontFeatureSettings$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontFeatureSettings'), _fontFeatureSettings);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontKerning', {
    get: function () {
      return this._fontKerning$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontKerning'));
    },
    set: function (_fontKerning) {
      this._fontKerning$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontKerning'), _fontKerning);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontLanguageOverride', {
    get: function () {
      return this._fontLanguageOverride$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontLanguageOverride'));
    },
    set: function (_fontLanguageOverride) {
      this._fontLanguageOverride$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontLanguageOverride'), _fontLanguageOverride);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontSize', {
    get: function () {
      return this._fontSize$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontSize'));
    },
    set: function (_fontSize) {
      this._fontSize$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontSize'), _fontSize);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontSizeAdjust', {
    get: function () {
      return this._fontSizeAdjust$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontSizeAdjust'));
    },
    set: function (_fontSizeAdjust) {
      this._fontSizeAdjust$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontSizeAdjust'), _fontSizeAdjust);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontStretch', {
    get: function () {
      return this._fontStretch$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontStretch'));
    },
    set: function (_fontStretch) {
      this._fontStretch$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontStretch'), _fontStretch);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontStyle', {
    get: function () {
      return this._fontStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontStyle'));
    },
    set: function (_fontStyle) {
      this._fontStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontStyle'), _fontStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontSynthesis', {
    get: function () {
      return this._fontSynthesis$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontSynthesis'));
    },
    set: function (_fontSynthesis) {
      this._fontSynthesis$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontSynthesis'), _fontSynthesis);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariant', {
    get: function () {
      return this._fontVariant$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariant'));
    },
    set: function (_fontVariant) {
      this._fontVariant$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariant'), _fontVariant);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantAlternates', {
    get: function () {
      return this._fontVariantAlternates$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantAlternates'));
    },
    set: function (_fontVariantAlternates) {
      this._fontVariantAlternates$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantAlternates'), _fontVariantAlternates);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantCaps', {
    get: function () {
      return this._fontVariantCaps$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantCaps'));
    },
    set: function (_fontVariantCaps) {
      this._fontVariantCaps$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantCaps'), _fontVariantCaps);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantEastAsian', {
    get: function () {
      return this._fontVariantEastAsian$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantEastAsian'));
    },
    set: function (_fontVariantEastAsian) {
      this._fontVariantEastAsian$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantEastAsian'), _fontVariantEastAsian);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantLigatures', {
    get: function () {
      return this._fontVariantLigatures$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantLigatures'));
    },
    set: function (_fontVariantLigatures) {
      this._fontVariantLigatures$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantLigatures'), _fontVariantLigatures);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantNumeric', {
    get: function () {
      return this._fontVariantNumeric$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantNumeric'));
    },
    set: function (_fontVariantNumeric) {
      this._fontVariantNumeric$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantNumeric'), _fontVariantNumeric);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontVariantPosition', {
    get: function () {
      return this._fontVariantPosition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontVariantPosition'));
    },
    set: function (_fontVariantPosition) {
      this._fontVariantPosition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontVariantPosition'), _fontVariantPosition);
    }
  });
  Object.defineProperty(Rule.prototype, '_fontWeight', {
    get: function () {
      return this._fontWeight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_fontWeight'));
    },
    set: function (_fontWeight) {
      this._fontWeight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_fontWeight'), _fontWeight);
    }
  });
  Object.defineProperty(Rule.prototype, '_hangingPunctuation', {
    get: function () {
      return this._hangingPunctuation$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_hangingPunctuation'));
    },
    set: function (_hangingPunctuation) {
      this._hangingPunctuation$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_hangingPunctuation'), _hangingPunctuation);
    }
  });
  Object.defineProperty(Rule.prototype, '_height', {
    get: function () {
      return this._height$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_height'));
    },
    set: function (_height) {
      this._height$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_height'), _height);
    }
  });
  Object.defineProperty(Rule.prototype, '_hyphens', {
    get: function () {
      return this._hyphens$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_hyphens'));
    },
    set: function (_hyphens) {
      this._hyphens$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_hyphens'), _hyphens);
    }
  });
  Object.defineProperty(Rule.prototype, '_imageOrientation', {
    get: function () {
      return this._imageOrientation$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_imageOrientation'));
    },
    set: function (_imageOrientation) {
      this._imageOrientation$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_imageOrientation'), _imageOrientation);
    }
  });
  Object.defineProperty(Rule.prototype, '_imageRendering', {
    get: function () {
      return this._imageRendering$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_imageRendering'));
    },
    set: function (_imageRendering) {
      this._imageRendering$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_imageRendering'), _imageRendering);
    }
  });
  Object.defineProperty(Rule.prototype, '_imageResolution', {
    get: function () {
      return this._imageResolution$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_imageResolution'));
    },
    set: function (_imageResolution) {
      this._imageResolution$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_imageResolution'), _imageResolution);
    }
  });
  Object.defineProperty(Rule.prototype, '_imeMode', {
    get: function () {
      return this._imeMode$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_imeMode'));
    },
    set: function (_imeMode) {
      this._imeMode$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_imeMode'), _imeMode);
    }
  });
  Object.defineProperty(Rule.prototype, '_justifyContent', {
    get: function () {
      return this._justifyContent$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_justifyContent'));
    },
    set: function (_justifyContent) {
      this._justifyContent$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_justifyContent'), _justifyContent);
    }
  });
  Object.defineProperty(Rule.prototype, '_left', {
    get: function () {
      return this._left$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_left'));
    },
    set: function (_left) {
      this._left$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_left'), _left);
    }
  });
  Object.defineProperty(Rule.prototype, '_letterSpacing', {
    get: function () {
      return this._letterSpacing$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_letterSpacing'));
    },
    set: function (_letterSpacing) {
      this._letterSpacing$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_letterSpacing'), _letterSpacing);
    }
  });
  Object.defineProperty(Rule.prototype, '_lineBreak', {
    get: function () {
      return this._lineBreak$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_lineBreak'));
    },
    set: function (_lineBreak) {
      this._lineBreak$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_lineBreak'), _lineBreak);
    }
  });
  Object.defineProperty(Rule.prototype, '_lineHeight', {
    get: function () {
      return this._lineHeight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_lineHeight'));
    },
    set: function (_lineHeight) {
      this._lineHeight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_lineHeight'), _lineHeight);
    }
  });
  Object.defineProperty(Rule.prototype, '_listStyle', {
    get: function () {
      return this._listStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_listStyle'));
    },
    set: function (_listStyle) {
      this._listStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_listStyle'), _listStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_listStyleImage', {
    get: function () {
      return this._listStyleImage$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_listStyleImage'));
    },
    set: function (_listStyleImage) {
      this._listStyleImage$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_listStyleImage'), _listStyleImage);
    }
  });
  Object.defineProperty(Rule.prototype, '_listStylePosition', {
    get: function () {
      return this._listStylePosition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_listStylePosition'));
    },
    set: function (_listStylePosition) {
      this._listStylePosition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_listStylePosition'), _listStylePosition);
    }
  });
  Object.defineProperty(Rule.prototype, '_listStyleType', {
    get: function () {
      return this._listStyleType$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_listStyleType'));
    },
    set: function (_listStyleType) {
      this._listStyleType$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_listStyleType'), _listStyleType);
    }
  });
  Object.defineProperty(Rule.prototype, '_margin', {
    get: function () {
      return this._margin$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_margin'));
    },
    set: function (_margin) {
      this._margin$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_margin'), _margin);
    }
  });
  Object.defineProperty(Rule.prototype, '_marginBottom', {
    get: function () {
      return this._marginBottom$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marginBottom'));
    },
    set: function (_marginBottom) {
      this._marginBottom$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marginBottom'), _marginBottom);
    }
  });
  Object.defineProperty(Rule.prototype, '_marginLeft', {
    get: function () {
      return this._marginLeft$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marginLeft'));
    },
    set: function (_marginLeft) {
      this._marginLeft$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marginLeft'), _marginLeft);
    }
  });
  Object.defineProperty(Rule.prototype, '_marginRight', {
    get: function () {
      return this._marginRight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marginRight'));
    },
    set: function (_marginRight) {
      this._marginRight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marginRight'), _marginRight);
    }
  });
  Object.defineProperty(Rule.prototype, '_marginTop', {
    get: function () {
      return this._marginTop$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marginTop'));
    },
    set: function (_marginTop) {
      this._marginTop$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marginTop'), _marginTop);
    }
  });
  Object.defineProperty(Rule.prototype, '_mark', {
    get: function () {
      return this._mark$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_mark'));
    },
    set: function (_mark) {
      this._mark$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_mark'), _mark);
    }
  });
  Object.defineProperty(Rule.prototype, '_markAfter', {
    get: function () {
      return this._markAfter$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_markAfter'));
    },
    set: function (_markAfter) {
      this._markAfter$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_markAfter'), _markAfter);
    }
  });
  Object.defineProperty(Rule.prototype, '_markBefore', {
    get: function () {
      return this._markBefore$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_markBefore'));
    },
    set: function (_markBefore) {
      this._markBefore$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_markBefore'), _markBefore);
    }
  });
  Object.defineProperty(Rule.prototype, '_marks', {
    get: function () {
      return this._marks$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marks'));
    },
    set: function (_marks) {
      this._marks$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marks'), _marks);
    }
  });
  Object.defineProperty(Rule.prototype, '_marqueeDirection', {
    get: function () {
      return this._marqueeDirection$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marqueeDirection'));
    },
    set: function (_marqueeDirection) {
      this._marqueeDirection$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marqueeDirection'), _marqueeDirection);
    }
  });
  Object.defineProperty(Rule.prototype, '_marqueePlayCount', {
    get: function () {
      return this._marqueePlayCount$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marqueePlayCount'));
    },
    set: function (_marqueePlayCount) {
      this._marqueePlayCount$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marqueePlayCount'), _marqueePlayCount);
    }
  });
  Object.defineProperty(Rule.prototype, '_marqueeSpeed', {
    get: function () {
      return this._marqueeSpeed$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marqueeSpeed'));
    },
    set: function (_marqueeSpeed) {
      this._marqueeSpeed$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marqueeSpeed'), _marqueeSpeed);
    }
  });
  Object.defineProperty(Rule.prototype, '_marqueeStyle', {
    get: function () {
      return this._marqueeStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_marqueeStyle'));
    },
    set: function (_marqueeStyle) {
      this._marqueeStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_marqueeStyle'), _marqueeStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_mask', {
    get: function () {
      return this._mask$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_mask'));
    },
    set: function (_mask) {
      this._mask$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_mask'), _mask);
    }
  });
  Object.defineProperty(Rule.prototype, '_maskType', {
    get: function () {
      return this._maskType$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_maskType'));
    },
    set: function (_maskType) {
      this._maskType$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_maskType'), _maskType);
    }
  });
  Object.defineProperty(Rule.prototype, '_maxHeight', {
    get: function () {
      return this._maxHeight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_maxHeight'));
    },
    set: function (_maxHeight) {
      this._maxHeight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_maxHeight'), _maxHeight);
    }
  });
  Object.defineProperty(Rule.prototype, '_maxWidth', {
    get: function () {
      return this._maxWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_maxWidth'));
    },
    set: function (_maxWidth) {
      this._maxWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_maxWidth'), _maxWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_minHeight', {
    get: function () {
      return this._minHeight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_minHeight'));
    },
    set: function (_minHeight) {
      this._minHeight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_minHeight'), _minHeight);
    }
  });
  Object.defineProperty(Rule.prototype, '_minWidth', {
    get: function () {
      return this._minWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_minWidth'));
    },
    set: function (_minWidth) {
      this._minWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_minWidth'), _minWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_navDown', {
    get: function () {
      return this._navDown$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_navDown'));
    },
    set: function (_navDown) {
      this._navDown$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_navDown'), _navDown);
    }
  });
  Object.defineProperty(Rule.prototype, '_navIndex', {
    get: function () {
      return this._navIndex$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_navIndex'));
    },
    set: function (_navIndex) {
      this._navIndex$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_navIndex'), _navIndex);
    }
  });
  Object.defineProperty(Rule.prototype, '_navLeft', {
    get: function () {
      return this._navLeft$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_navLeft'));
    },
    set: function (_navLeft) {
      this._navLeft$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_navLeft'), _navLeft);
    }
  });
  Object.defineProperty(Rule.prototype, '_navRight', {
    get: function () {
      return this._navRight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_navRight'));
    },
    set: function (_navRight) {
      this._navRight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_navRight'), _navRight);
    }
  });
  Object.defineProperty(Rule.prototype, '_navUp', {
    get: function () {
      return this._navUp$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_navUp'));
    },
    set: function (_navUp) {
      this._navUp$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_navUp'), _navUp);
    }
  });
  Object.defineProperty(Rule.prototype, '_objectFit', {
    get: function () {
      return this._objectFit$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_objectFit'));
    },
    set: function (_objectFit) {
      this._objectFit$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_objectFit'), _objectFit);
    }
  });
  Object.defineProperty(Rule.prototype, '_objectPosition', {
    get: function () {
      return this._objectPosition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_objectPosition'));
    },
    set: function (_objectPosition) {
      this._objectPosition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_objectPosition'), _objectPosition);
    }
  });
  Object.defineProperty(Rule.prototype, '_opacity', {
    get: function () {
      return this._opacity$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_opacity'));
    },
    set: function (_opacity) {
      this._opacity$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_opacity'), _opacity);
    }
  });
  Object.defineProperty(Rule.prototype, '_order', {
    get: function () {
      return this._order$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_order'));
    },
    set: function (_order) {
      this._order$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_order'), _order);
    }
  });
  Object.defineProperty(Rule.prototype, '_orphans', {
    get: function () {
      return this._orphans$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_orphans'));
    },
    set: function (_orphans) {
      this._orphans$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_orphans'), _orphans);
    }
  });
  Object.defineProperty(Rule.prototype, '_outline', {
    get: function () {
      return this._outline$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_outline'));
    },
    set: function (_outline) {
      this._outline$delegate.setValue_kcp8eu$(this, new Kotlin.PropertyMetadata('_outline'), _outline);
    }
  });
  Object.defineProperty(Rule.prototype, '_outlineColor', {
    get: function () {
      return this._outlineColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_outlineColor'));
    },
    set: function (_outlineColor) {
      this._outlineColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_outlineColor'), _outlineColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_outlineOffset', {
    get: function () {
      return this._outlineOffset$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_outlineOffset'));
    },
    set: function (_outlineOffset) {
      this._outlineOffset$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_outlineOffset'), _outlineOffset);
    }
  });
  Object.defineProperty(Rule.prototype, '_outlineStyle', {
    get: function () {
      return this._outlineStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_outlineStyle'));
    },
    set: function (_outlineStyle) {
      this._outlineStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_outlineStyle'), _outlineStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_outlineWidth', {
    get: function () {
      return this._outlineWidth$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_outlineWidth'));
    },
    set: function (_outlineWidth) {
      this._outlineWidth$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_outlineWidth'), _outlineWidth);
    }
  });
  Object.defineProperty(Rule.prototype, '_overflowWrap', {
    get: function () {
      return this._overflowWrap$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_overflowWrap'));
    },
    set: function (_overflowWrap) {
      this._overflowWrap$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_overflowWrap'), _overflowWrap);
    }
  });
  Object.defineProperty(Rule.prototype, '_overflowX', {
    get: function () {
      return this._overflowX$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_overflowX'));
    },
    set: function (_overflowX) {
      this._overflowX$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_overflowX'), _overflowX);
    }
  });
  Object.defineProperty(Rule.prototype, '_overflowY', {
    get: function () {
      return this._overflowY$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_overflowY'));
    },
    set: function (_overflowY) {
      this._overflowY$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_overflowY'), _overflowY);
    }
  });
  Object.defineProperty(Rule.prototype, '_padding', {
    get: function () {
      return this._padding$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_padding'));
    },
    set: function (_padding) {
      this._padding$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_padding'), _padding);
    }
  });
  Object.defineProperty(Rule.prototype, '_paddingBottom', {
    get: function () {
      return this._paddingBottom$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_paddingBottom'));
    },
    set: function (_paddingBottom) {
      this._paddingBottom$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_paddingBottom'), _paddingBottom);
    }
  });
  Object.defineProperty(Rule.prototype, '_paddingLeft', {
    get: function () {
      return this._paddingLeft$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_paddingLeft'));
    },
    set: function (_paddingLeft) {
      this._paddingLeft$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_paddingLeft'), _paddingLeft);
    }
  });
  Object.defineProperty(Rule.prototype, '_paddingRight', {
    get: function () {
      return this._paddingRight$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_paddingRight'));
    },
    set: function (_paddingRight) {
      this._paddingRight$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_paddingRight'), _paddingRight);
    }
  });
  Object.defineProperty(Rule.prototype, '_paddingTop', {
    get: function () {
      return this._paddingTop$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_paddingTop'));
    },
    set: function (_paddingTop) {
      this._paddingTop$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_paddingTop'), _paddingTop);
    }
  });
  Object.defineProperty(Rule.prototype, '_pageBreakAfter', {
    get: function () {
      return this._pageBreakAfter$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_pageBreakAfter'));
    },
    set: function (_pageBreakAfter) {
      this._pageBreakAfter$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_pageBreakAfter'), _pageBreakAfter);
    }
  });
  Object.defineProperty(Rule.prototype, '_pageBreakBefore', {
    get: function () {
      return this._pageBreakBefore$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_pageBreakBefore'));
    },
    set: function (_pageBreakBefore) {
      this._pageBreakBefore$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_pageBreakBefore'), _pageBreakBefore);
    }
  });
  Object.defineProperty(Rule.prototype, '_pageBreakInside', {
    get: function () {
      return this._pageBreakInside$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_pageBreakInside'));
    },
    set: function (_pageBreakInside) {
      this._pageBreakInside$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_pageBreakInside'), _pageBreakInside);
    }
  });
  Object.defineProperty(Rule.prototype, '_perspective', {
    get: function () {
      return this._perspective$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_perspective'));
    },
    set: function (_perspective) {
      this._perspective$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_perspective'), _perspective);
    }
  });
  Object.defineProperty(Rule.prototype, '_perspectiveOrigin', {
    get: function () {
      return this._perspectiveOrigin$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_perspectiveOrigin'));
    },
    set: function (_perspectiveOrigin) {
      this._perspectiveOrigin$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_perspectiveOrigin'), _perspectiveOrigin);
    }
  });
  Object.defineProperty(Rule.prototype, '_phonemes', {
    get: function () {
      return this._phonemes$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_phonemes'));
    },
    set: function (_phonemes) {
      this._phonemes$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_phonemes'), _phonemes);
    }
  });
  Object.defineProperty(Rule.prototype, '_position', {
    get: function () {
      return this._position$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_position'));
    },
    set: function (_position) {
      this._position$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_position'), _position);
    }
  });
  Object.defineProperty(Rule.prototype, '_quotes', {
    get: function () {
      return this._quotes$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_quotes'));
    },
    set: function (_quotes) {
      this._quotes$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_quotes'), _quotes);
    }
  });
  Object.defineProperty(Rule.prototype, '_resize', {
    get: function () {
      return this._resize$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_resize'));
    },
    set: function (_resize) {
      this._resize$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_resize'), _resize);
    }
  });
  Object.defineProperty(Rule.prototype, '_rest', {
    get: function () {
      return this._rest$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_rest'));
    },
    set: function (_rest) {
      this._rest$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_rest'), _rest);
    }
  });
  Object.defineProperty(Rule.prototype, '_restAfter', {
    get: function () {
      return this._restAfter$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_restAfter'));
    },
    set: function (_restAfter) {
      this._restAfter$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_restAfter'), _restAfter);
    }
  });
  Object.defineProperty(Rule.prototype, '_restBefore', {
    get: function () {
      return this._restBefore$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_restBefore'));
    },
    set: function (_restBefore) {
      this._restBefore$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_restBefore'), _restBefore);
    }
  });
  Object.defineProperty(Rule.prototype, '_right', {
    get: function () {
      return this._right$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_right'));
    },
    set: function (_right) {
      this._right$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_right'), _right);
    }
  });
  Object.defineProperty(Rule.prototype, '_tabSize', {
    get: function () {
      return this._tabSize$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_tabSize'));
    },
    set: function (_tabSize) {
      this._tabSize$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_tabSize'), _tabSize);
    }
  });
  Object.defineProperty(Rule.prototype, '_tableLayout', {
    get: function () {
      return this._tableLayout$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_tableLayout'));
    },
    set: function (_tableLayout) {
      this._tableLayout$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_tableLayout'), _tableLayout);
    }
  });
  Object.defineProperty(Rule.prototype, '_textAlign', {
    get: function () {
      return this._textAlign$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textAlign'));
    },
    set: function (_textAlign) {
      this._textAlign$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textAlign'), _textAlign);
    }
  });
  Object.defineProperty(Rule.prototype, '_textAlignLast', {
    get: function () {
      return this._textAlignLast$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textAlignLast'));
    },
    set: function (_textAlignLast) {
      this._textAlignLast$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textAlignLast'), _textAlignLast);
    }
  });
  Object.defineProperty(Rule.prototype, '_textCombineUpright', {
    get: function () {
      return this._textCombineUpright$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textCombineUpright'));
    },
    set: function (_textCombineUpright) {
      this._textCombineUpright$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textCombineUpright'), _textCombineUpright);
    }
  });
  Object.defineProperty(Rule.prototype, '_textDecoration', {
    get: function () {
      return this._textDecoration$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textDecoration'));
    },
    set: function (_textDecoration) {
      this._textDecoration$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textDecoration'), _textDecoration);
    }
  });
  Object.defineProperty(Rule.prototype, '_textDecorationColor', {
    get: function () {
      return this._textDecorationColor$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textDecorationColor'));
    },
    set: function (_textDecorationColor) {
      this._textDecorationColor$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textDecorationColor'), _textDecorationColor);
    }
  });
  Object.defineProperty(Rule.prototype, '_textDecorationLine', {
    get: function () {
      return this._textDecorationLine$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textDecorationLine'));
    },
    set: function (_textDecorationLine) {
      this._textDecorationLine$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textDecorationLine'), _textDecorationLine);
    }
  });
  Object.defineProperty(Rule.prototype, '_textDecorationStyle', {
    get: function () {
      return this._textDecorationStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textDecorationStyle'));
    },
    set: function (_textDecorationStyle) {
      this._textDecorationStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textDecorationStyle'), _textDecorationStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_textIndent', {
    get: function () {
      return this._textIndent$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textIndent'));
    },
    set: function (_textIndent) {
      this._textIndent$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textIndent'), _textIndent);
    }
  });
  Object.defineProperty(Rule.prototype, '_textJustify', {
    get: function () {
      return this._textJustify$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textJustify'));
    },
    set: function (_textJustify) {
      this._textJustify$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textJustify'), _textJustify);
    }
  });
  Object.defineProperty(Rule.prototype, '_textOrientation', {
    get: function () {
      return this._textOrientation$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textOrientation'));
    },
    set: function (_textOrientation) {
      this._textOrientation$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textOrientation'), _textOrientation);
    }
  });
  Object.defineProperty(Rule.prototype, '_textOverflow', {
    get: function () {
      return this._textOverflow$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textOverflow'));
    },
    set: function (_textOverflow) {
      this._textOverflow$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textOverflow'), _textOverflow);
    }
  });
  Object.defineProperty(Rule.prototype, '_textShadow', {
    get: function () {
      return this._textShadow$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textShadow'));
    },
    set: function (_textShadow) {
      this._textShadow$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textShadow'), _textShadow);
    }
  });
  Object.defineProperty(Rule.prototype, '_textTransform', {
    get: function () {
      return this._textTransform$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textTransform'));
    },
    set: function (_textTransform) {
      this._textTransform$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textTransform'), _textTransform);
    }
  });
  Object.defineProperty(Rule.prototype, '_textUnderlinePosition', {
    get: function () {
      return this._textUnderlinePosition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_textUnderlinePosition'));
    },
    set: function (_textUnderlinePosition) {
      this._textUnderlinePosition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_textUnderlinePosition'), _textUnderlinePosition);
    }
  });
  Object.defineProperty(Rule.prototype, '_top', {
    get: function () {
      return this._top$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_top'));
    },
    set: function (_top) {
      this._top$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_top'), _top);
    }
  });
  Object.defineProperty(Rule.prototype, '_transform', {
    get: function () {
      return this._transform$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transform'));
    },
    set: function (_transform) {
      this._transform$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transform'), _transform);
    }
  });
  Object.defineProperty(Rule.prototype, '_transformOrigin', {
    get: function () {
      return this._transformOrigin$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transformOrigin'));
    },
    set: function (_transformOrigin) {
      this._transformOrigin$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transformOrigin'), _transformOrigin);
    }
  });
  Object.defineProperty(Rule.prototype, '_transformStyle', {
    get: function () {
      return this._transformStyle$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transformStyle'));
    },
    set: function (_transformStyle) {
      this._transformStyle$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transformStyle'), _transformStyle);
    }
  });
  Object.defineProperty(Rule.prototype, '_transition', {
    get: function () {
      return this._transition$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transition'));
    },
    set: function (_transition) {
      this._transition$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transition'), _transition);
    }
  });
  Object.defineProperty(Rule.prototype, '_transitionDelay', {
    get: function () {
      return this._transitionDelay$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transitionDelay'));
    },
    set: function (_transitionDelay) {
      this._transitionDelay$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transitionDelay'), _transitionDelay);
    }
  });
  Object.defineProperty(Rule.prototype, '_transitionDuration', {
    get: function () {
      return this._transitionDuration$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transitionDuration'));
    },
    set: function (_transitionDuration) {
      this._transitionDuration$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transitionDuration'), _transitionDuration);
    }
  });
  Object.defineProperty(Rule.prototype, '_transitionProperty', {
    get: function () {
      return this._transitionProperty$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transitionProperty'));
    },
    set: function (_transitionProperty) {
      this._transitionProperty$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transitionProperty'), _transitionProperty);
    }
  });
  Object.defineProperty(Rule.prototype, '_transitionTimingFunction', {
    get: function () {
      return this._transitionTimingFunction$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_transitionTimingFunction'));
    },
    set: function (_transitionTimingFunction) {
      this._transitionTimingFunction$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_transitionTimingFunction'), _transitionTimingFunction);
    }
  });
  Object.defineProperty(Rule.prototype, '_unicodeBidi', {
    get: function () {
      return this._unicodeBidi$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_unicodeBidi'));
    },
    set: function (_unicodeBidi) {
      this._unicodeBidi$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_unicodeBidi'), _unicodeBidi);
    }
  });
  Object.defineProperty(Rule.prototype, '_verticalAlign', {
    get: function () {
      return this._verticalAlign$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_verticalAlign'));
    },
    set: function (_verticalAlign) {
      this._verticalAlign$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_verticalAlign'), _verticalAlign);
    }
  });
  Object.defineProperty(Rule.prototype, '_visibility', {
    get: function () {
      return this._visibility$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_visibility'));
    },
    set: function (_visibility) {
      this._visibility$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_visibility'), _visibility);
    }
  });
  Object.defineProperty(Rule.prototype, '_voiceBalance', {
    get: function () {
      return this._voiceBalance$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voiceBalance'));
    },
    set: function (_voiceBalance) {
      this._voiceBalance$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voiceBalance'), _voiceBalance);
    }
  });
  Object.defineProperty(Rule.prototype, '_voiceDuration', {
    get: function () {
      return this._voiceDuration$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voiceDuration'));
    },
    set: function (_voiceDuration) {
      this._voiceDuration$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voiceDuration'), _voiceDuration);
    }
  });
  Object.defineProperty(Rule.prototype, '_voicePitch', {
    get: function () {
      return this._voicePitch$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voicePitch'));
    },
    set: function (_voicePitch) {
      this._voicePitch$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voicePitch'), _voicePitch);
    }
  });
  Object.defineProperty(Rule.prototype, '_voicePitchRange', {
    get: function () {
      return this._voicePitchRange$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voicePitchRange'));
    },
    set: function (_voicePitchRange) {
      this._voicePitchRange$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voicePitchRange'), _voicePitchRange);
    }
  });
  Object.defineProperty(Rule.prototype, '_voiceRate', {
    get: function () {
      return this._voiceRate$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voiceRate'));
    },
    set: function (_voiceRate) {
      this._voiceRate$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voiceRate'), _voiceRate);
    }
  });
  Object.defineProperty(Rule.prototype, '_voiceStress', {
    get: function () {
      return this._voiceStress$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voiceStress'));
    },
    set: function (_voiceStress) {
      this._voiceStress$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voiceStress'), _voiceStress);
    }
  });
  Object.defineProperty(Rule.prototype, '_voiceVolume', {
    get: function () {
      return this._voiceVolume$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_voiceVolume'));
    },
    set: function (_voiceVolume) {
      this._voiceVolume$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_voiceVolume'), _voiceVolume);
    }
  });
  Object.defineProperty(Rule.prototype, '_whiteSpace', {
    get: function () {
      return this._whiteSpace$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_whiteSpace'));
    },
    set: function (_whiteSpace) {
      this._whiteSpace$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_whiteSpace'), _whiteSpace);
    }
  });
  Object.defineProperty(Rule.prototype, '_widows', {
    get: function () {
      return this._widows$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_widows'));
    },
    set: function (_widows) {
      this._widows$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_widows'), _widows);
    }
  });
  Object.defineProperty(Rule.prototype, '_width', {
    get: function () {
      return this._width$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_width'));
    },
    set: function (_width) {
      this._width$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_width'), _width);
    }
  });
  Object.defineProperty(Rule.prototype, '_wordBreak', {
    get: function () {
      return this._wordBreak$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_wordBreak'));
    },
    set: function (_wordBreak) {
      this._wordBreak$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_wordBreak'), _wordBreak);
    }
  });
  Object.defineProperty(Rule.prototype, '_wordSpacing', {
    get: function () {
      return this._wordSpacing$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_wordSpacing'));
    },
    set: function (_wordSpacing) {
      this._wordSpacing$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_wordSpacing'), _wordSpacing);
    }
  });
  Object.defineProperty(Rule.prototype, '_wordWrap', {
    get: function () {
      return this._wordWrap$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_wordWrap'));
    },
    set: function (_wordWrap) {
      this._wordWrap$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_wordWrap'), _wordWrap);
    }
  });
  Object.defineProperty(Rule.prototype, '_writingMode', {
    get: function () {
      return this._writingMode$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_writingMode'));
    },
    set: function (_writingMode) {
      this._writingMode$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_writingMode'), _writingMode);
    }
  });
  Object.defineProperty(Rule.prototype, '_zIndex', {
    get: function () {
      return this._zIndex$delegate.getValue_4hb8sp$(this, new Kotlin.PropertyMetadata('_zIndex'));
    },
    set: function (_zIndex) {
      this._zIndex$delegate.setValue_8ibblj$(this, new Kotlin.PropertyMetadata('_zIndex'), _zIndex);
    }
  });
  function Rule$Property($outer, name) {
    this.$outer = $outer;
    if (name === void 0)
      name = null;
    this.name = name;
  }
  Rule$Property.prototype.getValue_4hb8sp$ = function (rule_2, prop) {
    var tmp$, tmp$_0;
    var styleName = (tmp$ = this.name) != null ? tmp$ : this.$outer.resolveRuleName_fvkj3u$_0(prop);
    return (tmp$_0 = this.$outer._map.get_11rb$(styleName)) != null ? tmp$_0 : '';
  };
  Rule$Property.prototype.setValue_8ibblj$ = function (rule_2, prop, value) {
    var tmp$;
    var styleName = (tmp$ = this.name) != null ? tmp$ : this.$outer.resolveRuleName_fvkj3u$_0(prop);
    if (value.length > 0) {
      this.$outer._map.put_xwzc9p$(styleName, value);
    }
     else {
      this.$outer._map.remove_11rb$(styleName);
    }
  };
  Rule$Property.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Property',
    interfaces: []
  };
  function Rule$NullableProperty($outer, name) {
    this.$outer = $outer;
    if (name === void 0)
      name = null;
    this.name = name;
  }
  Rule$NullableProperty.prototype.getValue_4hb8sp$ = function (rule_2, prop) {
    var tmp$;
    var styleName = (tmp$ = this.name) != null ? tmp$ : this.$outer.resolveRuleName_fvkj3u$_0(prop);
    return this.$outer._map.get_11rb$(styleName);
  };
  Rule$NullableProperty.prototype.setValue_kcp8eu$ = function (rule_2, prop, value) {
    var tmp$;
    var styleName = (tmp$ = this.name) != null ? tmp$ : this.$outer.resolveRuleName_fvkj3u$_0(prop);
    var tmp$_0 = value != null;
    if (tmp$_0) {
      tmp$_0 = value.length > 0;
    }
    if (tmp$_0) {
      this.$outer._map.put_xwzc9p$(styleName, value);
    }
     else {
      this.$outer._map.remove_11rb$(styleName);
    }
  };
  Rule$NullableProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NullableProperty',
    interfaces: []
  };
  Rule.prototype.resolveRuleName_fvkj3u$_0 = function (prop) {
    return camelsToDashes(prop.callableName.substring(1));
  };
  Rule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Rule',
    interfaces: []
  };
  function TypedClassRule(selector) {
    TypedRule.call(this, selector);
  }
  Object.defineProperty(TypedClassRule.prototype, 'className', {
    get: function () {
      return this.selector.value;
    }
  });
  TypedClassRule.prototype.cssText = function () {
    return TypedRule.prototype.cssText_y57xct$_0.call(this, this.selector);
  };
  TypedClassRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedClassRule',
    interfaces: [TypedRule]
  };
  function TypedRule(selector) {
    Rule.call(this, selector);
    this.display$delegate = new TypedRule$DisplayDelegate();
    this.flexDirection$delegate = new TypedRule$FlexDirectionDelegate();
    this.alignItems$delegate = new TypedRule$AlignItemsDelegate();
    this.backgroundColor$delegate = new TypedRule$RgbColorDelegate();
    this.height$delegate = new TypedRule$DimensionDelegate();
    this.width$delegate = new TypedRule$DimensionDelegate();
  }
  Object.defineProperty(TypedRule.prototype, 'display', {
    get: function () {
      return this.display$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('display'));
    },
    set: function (display) {
      this.display$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('display'), display);
    }
  });
  Object.defineProperty(TypedRule.prototype, 'flexDirection', {
    get: function () {
      return this.flexDirection$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('flexDirection'));
    },
    set: function (flexDirection) {
      this.flexDirection$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('flexDirection'), flexDirection);
    }
  });
  Object.defineProperty(TypedRule.prototype, 'alignItems', {
    get: function () {
      return this.alignItems$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('alignItems'));
    },
    set: function (alignItems) {
      this.alignItems$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('alignItems'), alignItems);
    }
  });
  Object.defineProperty(TypedRule.prototype, 'backgroundColor', {
    get: function () {
      return this.backgroundColor$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('backgroundColor'));
    },
    set: function (backgroundColor) {
      this.backgroundColor$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('backgroundColor'), backgroundColor);
    }
  });
  Object.defineProperty(TypedRule.prototype, 'height', {
    get: function () {
      return this.height$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('height'));
    },
    set: function (height) {
      this.height$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('height'), height);
    }
  });
  Object.defineProperty(TypedRule.prototype, 'width', {
    get: function () {
      return this.width$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('width'));
    },
    set: function (width) {
      this.width$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('width'), width);
    }
  });
  function TypedRule$DisplayDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toDisplay', function ($receiver) {
      return toDisplay($receiver);
    }));
  }
  TypedRule$DisplayDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DisplayDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$PositionDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toPosition', function ($receiver) {
      return toPosition($receiver);
    }));
  }
  TypedRule$PositionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PositionDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$RgbColorDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedRule$TypedPropertyDelegate.call(this, attributeName, TypedRule$TypedRule$RgbColorDelegate_init$lambda);
  }
  function TypedRule$TypedRule$RgbColorDelegate_init$lambda(it) {
    return RgbColor$Factory_getInstance().from_61zpoe$(it);
  }
  TypedRule$RgbColorDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RgbColorDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$IntDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedRule$TypedPropertyDelegate.call(this, attributeName, Kotlin.getCallableRef('toInt', function ($receiver) {
      return toInt($receiver);
    }));
  }
  TypedRule$IntDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IntDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$DimensionDelegate(attributeName) {
    if (attributeName === void 0)
      attributeName = null;
    TypedRule$TypedPropertyDelegate.call(this, attributeName, TypedRule$TypedRule$DimensionDelegate_init$lambda);
  }
  function TypedRule$TypedRule$DimensionDelegate_init$lambda(it) {
    var tmp$;
    return (tmp$ = toDimension(it)) != null ? tmp$ : Kotlin.throwNPE();
  }
  TypedRule$DimensionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DimensionDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$FlexDirectionDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexDirection', function ($receiver) {
      return toFlexDirection($receiver);
    }));
  }
  TypedRule$FlexDirectionDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexDirectionDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$AlignItemsDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toAlignItems', function ($receiver) {
      return toAlignItems($receiver);
    }));
  }
  TypedRule$AlignItemsDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AlignItemsDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$JustifyContentDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toJustifyContent', function ($receiver) {
      return toJustifyContent($receiver);
    }));
  }
  TypedRule$JustifyContentDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JustifyContentDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$FlexDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlex', function ($receiver) {
      return toFlex($receiver);
    }));
  }
  TypedRule$FlexDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$FlexGrowDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexGrow', function ($receiver) {
      return toFlexGrow($receiver);
    }));
  }
  TypedRule$FlexGrowDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexGrowDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$FlexShrinkDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexShrink', function ($receiver) {
      return toFlexShrink($receiver);
    }));
  }
  TypedRule$FlexShrinkDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexShrinkDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$FlexBasisDelegate() {
    TypedRule$TypedPropertyDelegate.call(this, void 0, Kotlin.getCallableRef('toFlexBasis', function ($receiver) {
      return toFlexBasis($receiver);
    }));
  }
  TypedRule$FlexBasisDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlexBasisDelegate',
    interfaces: [TypedRule$TypedPropertyDelegate]
  };
  function TypedRule$TypedPropertyDelegate(attributeName, getFn) {
    if (attributeName === void 0)
      attributeName = null;
    this.attributeName = attributeName;
    this.getFn = getFn;
  }
  TypedRule$TypedPropertyDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : camelsToDashes(property.callableName);
    var stringValue = thisRef._map.get_11rb$(attributeName);
    var tmp$_0 = stringValue != null;
    if (tmp$_0) {
      tmp$_0 = stringValue.length > 0;
    }
    return tmp$_0 ? this.getFn(stringValue) : null;
  };
  TypedRule$TypedPropertyDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var attributeName = (tmp$ = this.attributeName) != null ? tmp$ : camelsToDashes(property.callableName);
    if (value != null) {
      var valueAsString = value.toString();
      thisRef._map.put_xwzc9p$(attributeName, valueAsString);
    }
     else {
      thisRef._map.remove_11rb$(attributeName);
    }
  };
  TypedRule$TypedPropertyDelegate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedPropertyDelegate',
    interfaces: [ReadWriteProperty]
  };
  TypedRule.prototype.resolveRuleName_yal84w$_0 = function (prop) {
    return camelsToDashes(prop.callableName.substring(1));
  };
  TypedRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypedRule',
    interfaces: [Rule]
  };
  function TypeRule(selector) {
    Rule.call(this, selector);
  }
  TypeRule.prototype.cssText = function () {
    return Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
  };
  TypeRule.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypeRule',
    interfaces: [Rule]
  };
  function camelsToDashes($receiver) {
    var tmp$;
    var s = '';
    tmp$ = iterator_0($receiver);
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      var $receiver_0 = Kotlin.unboxChar(c);
      if (Kotlin.unboxChar(String.fromCharCode(Kotlin.toBoxedChar($receiver_0)).toUpperCase().charCodeAt(0)) === Kotlin.unboxChar(c)) {
        var tmp$_0 = String;
        var tmp$_1 = tmp$_0.fromCharCode;
        var $receiver_1 = Kotlin.unboxChar(c);
        s += '-' + tmp$_1.call(tmp$_0, Kotlin.unboxChar(String.fromCharCode(Kotlin.toBoxedChar($receiver_1)).toLowerCase().charCodeAt(0)));
      }
       else {
        s += String.fromCharCode(Kotlin.unboxChar(c));
      }
    }
    return s;
  }
  Percent.prototype.toHtml = Dimension.prototype.toHtml;
  Pixels.prototype.toHtml = Dimension.prototype.toHtml;
  Mm.prototype.toHtml = Dimension.prototype.toHtml;
  Cm.prototype.toHtml = Dimension.prototype.toHtml;
  In.prototype.toHtml = Dimension.prototype.toHtml;
  Pt.prototype.toHtml = Dimension.prototype.toHtml;
  Pc.prototype.toHtml = Dimension.prototype.toHtml;
  Em.prototype.toHtml = Dimension.prototype.toHtml;
  Rem.prototype.toHtml = Dimension.prototype.toHtml;
  Vh.prototype.toHtml = Dimension.prototype.toHtml;
  Vw.prototype.toHtml = Dimension.prototype.toHtml;
  VMin.prototype.toHtml = Dimension.prototype.toHtml;
  VMax.prototype.toHtml = Dimension.prototype.toHtml;
  var package$fg = _.fg || (_.fg = {});
  var package$base = package$fg.base || (package$fg.base = {});
  Object.defineProperty(package$base, 'CompareTo', {
    get: CompareTo_getInstance
  });
  var package$experimental = package$base.experimental || (package$base.experimental = {});
  var package$coroutines = package$experimental.coroutines || (package$experimental.coroutines = {});
  package$coroutines.launch_g2bo5h$ = launch;
  package$coroutines.launch_zhpfat$ = launch_0;
  var package$http = package$base.http || (package$base.http = {});
  package$http.InternalServerErrorException = InternalServerErrorException;
  package$http.NotFoundException = NotFoundException;
  package$http.UnexpectedStatusException = UnexpectedStatusException;
  package$http.await_t11jrl$ = await_0;
  package$http.send_98uf27$ = send;
  Object.defineProperty(OS, 'WINDOWS', {
    get: OS$WINDOWS_getInstance
  });
  Object.defineProperty(OS, 'MAC', {
    get: OS$MAC_getInstance
  });
  Object.defineProperty(OS, 'LINUX', {
    get: OS$LINUX_getInstance
  });
  Object.defineProperty(OS, 'UNIX', {
    get: OS$UNIX_getInstance
  });
  Object.defineProperty(OS, 'UNKNOWN', {
    get: OS$UNKNOWN_getInstance
  });
  package$base.OS = OS;
  Object.defineProperty(package$base, 'OSDetector', {
    get: OSDetector_getInstance
  });
  Object.defineProperty(Path, 'Factory', {
    get: Path$Factory_getInstance
  });
  Path.Element = Path$Element;
  package$base.Path = Path;
  _.toStacktrace_dbl4o4$ = toStacktrace;
  Object.defineProperty(URL, 'Factory', {
    get: URL$Factory_getInstance
  });
  Object.defineProperty(URL$Query, 'Factory', {
    get: URL$Query$Factory_getInstance
  });
  URL.Query = URL$Query;
  package$base.URL = URL;
  package$base.toHexString_s8ev3n$ = toHexString;
  package$base.debounce0_ir971p$ = debounce0;
  package$base.debounce1_5237lg$ = debounce1;
  package$base.bounceUntil_5237lg$ = bounceUntil;
  package$base.toCurrency_mvyei0$ = toCurrency;
  Object.defineProperty(Side, 'LEFT', {
    get: Side$LEFT_getInstance
  });
  Object.defineProperty(Side, 'RIGHT', {
    get: Side$RIGHT_getInstance
  });
  package$base.Side = Side;
  var package$elements = package$fg.elements || (package$fg.elements = {});
  Object.defineProperty(package$elements, 'BODY', {
    get: function () {
      return BODY;
    }
  });
  package$elements.Body = Body;
  package$elements.toDimension_5cw0du$ = toDimension;
  package$elements.Dimension = Dimension;
  Object.defineProperty(DimensionType, 'percent', {
    get: DimensionType$percent_getInstance
  });
  Object.defineProperty(DimensionType, 'pixels', {
    get: DimensionType$pixels_getInstance
  });
  Object.defineProperty(DimensionType, 'mm', {
    get: DimensionType$mm_getInstance
  });
  Object.defineProperty(DimensionType, 'cm', {
    get: DimensionType$cm_getInstance
  });
  Object.defineProperty(DimensionType, 'inch', {
    get: DimensionType$inch_getInstance
  });
  Object.defineProperty(DimensionType, 'pt', {
    get: DimensionType$pt_getInstance
  });
  Object.defineProperty(DimensionType, 'pc', {
    get: DimensionType$pc_getInstance
  });
  Object.defineProperty(DimensionType, 'em', {
    get: DimensionType$em_getInstance
  });
  Object.defineProperty(DimensionType, 'rem', {
    get: DimensionType$rem_getInstance
  });
  Object.defineProperty(DimensionType, 'vh', {
    get: DimensionType$vh_getInstance
  });
  Object.defineProperty(DimensionType, 'vw', {
    get: DimensionType$vw_getInstance
  });
  Object.defineProperty(DimensionType, 'vmin', {
    get: DimensionType$vmin_getInstance
  });
  Object.defineProperty(DimensionType, 'vmax', {
    get: DimensionType$vmax_getInstance
  });
  package$elements.DimensionType = DimensionType;
  package$elements.Percent = Percent;
  package$elements.get_pct_s8ev3n$ = get_pct;
  package$elements.get_pct_yrwdxr$ = get_pct_0;
  package$elements.Pixels = Pixels;
  package$elements.get_px_yrwdxr$ = get_px;
  package$elements.get_px_s8ev3n$ = get_px_0;
  package$elements.get_px_pdl1vz$ = get_px_1;
  package$elements.Mm = Mm;
  package$elements.get_mm_s8ev3n$ = get_mm;
  package$elements.Cm = Cm;
  package$elements.get_cm_yrwdxr$ = get_cm;
  package$elements.get_cm_s8ev3n$ = get_cm_0;
  package$elements.In = In;
  package$elements.inch_yrwdxr$ = inch;
  package$elements.inch_s8ev3n$ = inch_0;
  package$elements.Pt = Pt;
  package$elements.get_pt_s8ev3n$ = get_pt;
  package$elements.Pc = Pc;
  package$elements.get_pc_s8ev3n$ = get_pc;
  package$elements.Em = Em;
  package$elements.get_em_s8ev3n$ = get_em;
  package$elements.get_em_yrwdxr$ = get_em_0;
  package$elements.Rem = Rem;
  package$elements.get_rem_s8ev3n$ = get_rem;
  package$elements.get_rem_yrwdxr$ = get_rem_0;
  package$elements.Vh = Vh;
  package$elements.get_vh_s8ev3n$ = get_vh;
  package$elements.Vw = Vw;
  package$elements.get_vw_s8ev3n$ = get_vw;
  package$elements.VMin = VMin;
  package$elements.get_vmin_s8ev3n$ = get_vmin;
  package$elements.VMax = VMax;
  package$elements.get_vmax_s8ev3n$ = get_vmax;
  package$elements.br_8138w0$ = br;
  package$elements.header_x8ulkt$ = header;
  package$elements.main_ikvv8p$ = main;
  package$elements.footer_ycnwaz$ = footer;
  package$elements.h1_pgml15$ = h1;
  package$elements.h2_kmxeiu$ = h2;
  package$elements.h3_4amnwb$ = h3;
  package$elements.h4_t86qbg$ = h4;
  package$elements.h5_gvd98j$ = h5;
  package$elements.h6_826t6m$ = h6;
  package$elements.p_ti2w4o$ = p;
  package$elements.span_w8wq4m$ = span;
  package$elements.hr_cc9oxm$ = hr;
  package$elements.ul_xx7ant$ = ul;
  package$elements.ol_gqjthp$ = ol;
  package$elements.li_wq8toz$ = li;
  package$elements.div_lgqx1j$ = div;
  package$elements.pre_veaytn$ = pre;
  package$elements.a_ya8tl$ = a;
  package$elements.i_92csup$ = i;
  package$elements.inputText_sqgf27$ = inputText;
  package$elements.inputNumber_glhjj9$ = inputNumber;
  package$elements.img_cipz99$ = img;
  package$elements.button_4vwmzi$ = button;
  package$elements.label_biljks$ = label;
  package$elements.select_8ogc18$ = select;
  package$elements.table_lbc0c6$ = table;
  package$elements.caption_kqfnwu$ = caption;
  package$elements.colgroup_an2rhr$ = colgroup;
  package$elements.col_bbrg14$ = col;
  package$elements.tbody_9llqf2$ = tbody;
  package$elements.thead_u212ro$ = thead;
  package$elements.tfoot_a870sq$ = tfoot;
  package$elements.tr_hy4hea$ = tr;
  package$elements.td_bud5eo$ = td;
  package$elements.th_gur2as$ = th;
  package$elements.initAndAppendNode_n3qhgg$ = initAndAppendNode;
  package$elements.with_9bxh2u$ = with_0;
  package$elements.render_uy47cu$ = render;
  package$elements.onClick_8l2ll4$ = onClick;
  package$elements.unClick_8l2ll4$ = unClick;
  package$elements.onFocus_8l2ll4$ = onFocus;
  package$elements.unFocus_8l2ll4$ = unFocus;
  package$elements.onBlur_8l2ll4$ = onBlur;
  package$elements.unBlur_8l2ll4$ = unBlur;
  package$elements.onInput_8l2ll4$ = onInput;
  package$elements.unInput_8l2ll4$ = unInput;
  package$elements.onChange_8l2ll4$ = onChange;
  package$elements.unChange_8l2ll4$ = unChange;
  package$elements.onDblClick_8l2ll4$ = onDblClick;
  package$elements.unDblClick_8l2ll4$ = unDblClick;
  package$elements.onMouseDown_e96vkx$ = onMouseDown;
  package$elements.unMouseDown_e96vkx$ = unMouseDown;
  package$elements.onMouseUp_e96vkx$ = onMouseUp;
  package$elements.unMouseUp_e96vkx$ = unMouseUp;
  package$elements.onMouseEnter_e96vkx$ = onMouseEnter;
  package$elements.unMouseEnter_e96vkx$ = unMouseEnter;
  package$elements.onMouseLeave_e96vkx$ = onMouseLeave;
  package$elements.unMouseLeave_e96vkx$ = unMouseLeave;
  package$elements.onMouseMove_e96vkx$ = onMouseMove;
  package$elements.unMouseMove_e96vkx$ = unMouseMove;
  package$elements.onMouseOut_e96vkx$ = onMouseOut;
  package$elements.unMouseOut_e96vkx$ = unMouseOut;
  package$elements.onMouseOver_e96vkx$ = onMouseOver;
  package$elements.unMouseOver_e96vkx$ = unMouseOver;
  package$elements.onScroll_8l2ll4$ = onScroll;
  package$elements.unScroll_8l2ll4$ = unScroll;
  package$elements.onKeyUp_3e4brz$ = onKeyUp;
  package$elements.unKeyUp_3e4brz$ = unKeyUp;
  package$elements.onKeyPress_3e4brz$ = onKeyPress;
  package$elements.unKeyPress_3e4brz$ = unKeyPress;
  package$elements.onKeyDown_3e4brz$ = onKeyDown;
  package$elements.unKeyDown_3e4brz$ = unKeyDown;
  package$elements.onDrag_8l2ll4$ = onDrag;
  package$elements.unDrag_8l2ll4$ = unDrag;
  package$elements.onDragEnd_8l2ll4$ = onDragEnd;
  package$elements.unDragEnd_8l2ll4$ = unDragEnd;
  package$elements.onDragEnter_8l2ll4$ = onDragEnter;
  package$elements.unDragEnter_8l2ll4$ = unDragEnter;
  package$elements.onDragLeave_8l2ll4$ = onDragLeave;
  package$elements.unDragLeave_8l2ll4$ = unDragLeave;
  package$elements.onDragOver_8l2ll4$ = onDragOver;
  package$elements.unDragOver_8l2ll4$ = unDragOver;
  package$elements.onDragStart_8l2ll4$ = onDragStart;
  package$elements.unDragStart_8l2ll4$ = unDragStart;
  package$elements.onDrop_8l2ll4$ = onDrop;
  package$elements.unDrop_8l2ll4$ = unDrop;
  package$elements.get_computedStyle_gobym5$ = get_computedStyle;
  Element.ResizedEvent = Element$ResizedEvent;
  package$elements.Element = Element;
  package$elements.Img = Img;
  package$elements.Button = Button;
  package$elements.Select = Select;
  Object.defineProperty(Input$Type, 'hidden', {
    get: Input$Type$hidden_getInstance
  });
  Object.defineProperty(Input$Type, 'text', {
    get: Input$Type$text_getInstance
  });
  Object.defineProperty(Input$Type, 'number', {
    get: Input$Type$number_getInstance
  });
  Object.defineProperty(Input$Type, 'radio', {
    get: Input$Type$radio_getInstance
  });
  Input.Type = Input$Type;
  package$elements.Input = Input;
  package$elements.InputText = InputText;
  package$elements.InputRadio = InputRadio;
  package$elements.InputNumber = InputNumber;
  package$elements.Label = Label;
  package$elements.P = P;
  package$elements.Hr = Hr;
  package$elements.Pre = Pre;
  package$elements.Blockquote = Blockquote;
  package$elements.Ol = Ol;
  package$elements.Ul = Ul;
  package$elements.Li = Li;
  package$elements.Dl = Dl;
  package$elements.Dt = Dt;
  package$elements.Dd = Dd;
  package$elements.Figure = Figure;
  package$elements.Figcaption = Figcaption;
  package$elements.Div = Div;
  package$elements.Main = Main;
  Object.defineProperty(package$elements, 'HTML', {
    get: function () {
      return HTML;
    }
  });
  Object.defineProperty(Html, 'Html', {
    get: Html$Html_getInstance
  });
  package$elements.Html = Html;
  package$elements.onDOMContentLoaded_4bdym6$ = onDOMContentLoaded;
  package$elements.onLoad_nvde5v$ = onLoad;
  Object.defineProperty(AbstractLayout, 'Statics', {
    get: AbstractLayout$Statics_getInstance
  });
  var package$layout = package$elements.layout || (package$elements.layout = {});
  package$layout.AbstractLayout = AbstractLayout;
  package$layout.Breakpoint = Breakpoint;
  Object.defineProperty(DefaultBreakpoints, 'xsmall', {
    get: DefaultBreakpoints$xsmall_getInstance
  });
  Object.defineProperty(DefaultBreakpoints, 'small', {
    get: DefaultBreakpoints$small_getInstance
  });
  Object.defineProperty(DefaultBreakpoints, 'medium', {
    get: DefaultBreakpoints$medium_getInstance
  });
  Object.defineProperty(DefaultBreakpoints, 'large', {
    get: DefaultBreakpoints$large_getInstance
  });
  Object.defineProperty(DefaultBreakpoints, 'xlarge', {
    get: DefaultBreakpoints$xlarge_getInstance
  });
  package$layout.DefaultBreakpoints = DefaultBreakpoints;
  Object.defineProperty(Direction, 'ROW', {
    get: Direction$ROW_getInstance
  });
  Object.defineProperty(Direction, 'COLUMN', {
    get: Direction$COLUMN_getInstance
  });
  Object.defineProperty(Direction, 'Statics', {
    get: Direction$Statics_getInstance
  });
  package$layout.Direction = Direction;
  package$layout.toLayout_uzd6sr$ = toLayout;
  package$layout.setLayout_co3piv$ = setLayout;
  package$layout.xsmall_i3h8o8$ = xsmall;
  package$layout.small_i3h8o8$ = small;
  package$layout.medium_i3h8o8$ = medium;
  package$layout.large_i3h8o8$ = large;
  package$layout.xlarge_i3h8o8$ = xlarge;
  Object.defineProperty(Layout, 'Statics', {
    get: Layout$Statics_getInstance
  });
  package$layout.Layout = Layout;
  package$layout.LayoutBreakpoint = LayoutBreakpoint;
  package$layout.LayoutDelegate = LayoutDelegate;
  package$elements.Node = Node;
  package$elements.Article = Article;
  package$elements.Section = Section;
  package$elements.Nav = Nav;
  package$elements.Aside = Aside;
  package$elements.H1 = H1;
  package$elements.H2 = H2;
  package$elements.H3 = H3;
  package$elements.H4 = H4;
  package$elements.H5 = H5;
  package$elements.H6 = H6;
  package$elements.Header = Header;
  package$elements.Footer = Footer;
  package$elements.Address = Address;
  Object.defineProperty(Selector, 'Statics', {
    get: Selector$Statics_getInstance
  });
  package$elements.Selector = Selector;
  Object.defineProperty(AnySelector, 'Statics', {
    get: AnySelector$Statics_getInstance
  });
  package$elements.AnySelector = AnySelector;
  package$elements.AnimationNameSelector = AnimationNameSelector;
  package$elements.KeyframeSelector = KeyframeSelector;
  package$elements.TypeSelector = TypeSelector;
  package$elements.ClassSelector = ClassSelector;
  package$elements.IdSelector = IdSelector;
  package$elements.AttrSelector = AttrSelector;
  package$elements.PseudoClassSelector = PseudoClassSelector;
  package$elements.CompositeSelector = CompositeSelector;
  package$elements.ChildSelector = ChildSelector;
  package$elements.AdjacentSiblingSelector = AdjacentSiblingSelector;
  package$elements.GeneralSiblingSelector = GeneralSiblingSelector;
  package$elements.DescendantSelector = DescendantSelector;
  package$elements.AndSelector = AndSelector;
  package$elements.NotSelector = NotSelector;
  package$elements.toSelector_pdl1vz$ = toSelector;
  package$elements.toClassSelector_pdl1vz$ = toClassSelector;
  Object.defineProperty(AlignItems, 'flexStart', {
    get: AlignItems$flexStart_getInstance
  });
  Object.defineProperty(AlignItems, 'flexEnd', {
    get: AlignItems$flexEnd_getInstance
  });
  Object.defineProperty(AlignItems, 'center', {
    get: AlignItems$center_getInstance
  });
  Object.defineProperty(AlignItems, 'baseline', {
    get: AlignItems$baseline_getInstance
  });
  Object.defineProperty(AlignItems, 'stretch', {
    get: AlignItems$stretch_getInstance
  });
  Object.defineProperty(AlignItems, 'inherit', {
    get: AlignItems$inherit_getInstance
  });
  Object.defineProperty(AlignItems, 'initial', {
    get: AlignItems$initial_getInstance
  });
  Object.defineProperty(AlignItems, 'unset', {
    get: AlignItems$unset_getInstance
  });
  var package$style = package$elements.style || (package$elements.style = {});
  var package$typed = package$style.typed || (package$style.typed = {});
  package$typed.AlignItems = AlignItems;
  package$typed.toAlignItems_pdl1vz$ = toAlignItems;
  Object.defineProperty(Border, 'Companion', {
    get: Border$Companion_getInstance
  });
  package$typed.Border = Border;
  Object.defineProperty(BorderStyle, 'dashed', {
    get: BorderStyle$dashed_getInstance
  });
  Object.defineProperty(BorderStyle, 'double', {
    get: BorderStyle$double_getInstance
  });
  Object.defineProperty(BorderStyle, 'dotted', {
    get: BorderStyle$dotted_getInstance
  });
  Object.defineProperty(BorderStyle, 'groove', {
    get: BorderStyle$groove_getInstance
  });
  Object.defineProperty(BorderStyle, 'ridge', {
    get: BorderStyle$ridge_getInstance
  });
  Object.defineProperty(BorderStyle, 'inset', {
    get: BorderStyle$inset_getInstance
  });
  Object.defineProperty(BorderStyle, 'outset', {
    get: BorderStyle$outset_getInstance
  });
  Object.defineProperty(BorderStyle, 'hidden', {
    get: BorderStyle$hidden_getInstance
  });
  Object.defineProperty(BorderStyle, 'solid', {
    get: BorderStyle$solid_getInstance
  });
  Object.defineProperty(BorderStyle, 'none', {
    get: BorderStyle$none_getInstance
  });
  package$typed.BorderStyle = BorderStyle;
  Object.defineProperty(Display, 'none', {
    get: Display$none_getInstance
  });
  Object.defineProperty(Display, 'iinline', {
    get: Display$iinline_getInstance
  });
  Object.defineProperty(Display, 'block', {
    get: Display$block_getInstance
  });
  Object.defineProperty(Display, 'flex', {
    get: Display$flex_getInstance
  });
  Object.defineProperty(Display, 'inlineBlock', {
    get: Display$inlineBlock_getInstance
  });
  Object.defineProperty(Display, 'contents', {
    get: Display$contents_getInstance
  });
  Object.defineProperty(Display, 'listItem', {
    get: Display$listItem_getInstance
  });
  package$typed.Display = Display;
  package$typed.toDisplay_pdl1vz$ = toDisplay;
  Object.defineProperty(Flex$Keyword, 'initial', {
    get: Flex$Keyword$initial_getInstance
  });
  Object.defineProperty(Flex$Keyword, 'auto', {
    get: Flex$Keyword$auto_getInstance
  });
  Object.defineProperty(Flex$Keyword, 'none', {
    get: Flex$Keyword$none_getInstance
  });
  Flex.Keyword = Flex$Keyword;
  Object.defineProperty(Flex, 'Statics', {
    get: Flex$Statics_getInstance
  });
  package$typed.Flex = Flex;
  package$typed.toFlex_pdl1vz$ = toFlex;
  Object.defineProperty(FlexBasis$Keyword, 'inherit', {
    get: FlexBasis$Keyword$inherit_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'initial', {
    get: FlexBasis$Keyword$initial_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'unset', {
    get: FlexBasis$Keyword$unset_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'auto', {
    get: FlexBasis$Keyword$auto_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'fill', {
    get: FlexBasis$Keyword$fill_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'content', {
    get: FlexBasis$Keyword$content_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'maxContent', {
    get: FlexBasis$Keyword$maxContent_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'minContent', {
    get: FlexBasis$Keyword$minContent_getInstance
  });
  Object.defineProperty(FlexBasis$Keyword, 'fitContent', {
    get: FlexBasis$Keyword$fitContent_getInstance
  });
  FlexBasis.Keyword = FlexBasis$Keyword;
  Object.defineProperty(FlexBasis, 'Statics', {
    get: FlexBasis$Statics_getInstance
  });
  package$typed.FlexBasis = FlexBasis;
  package$typed.toFlexBasis_pdl1vz$ = toFlexBasis;
  Object.defineProperty(FlexDirection, 'row', {
    get: FlexDirection$row_getInstance
  });
  Object.defineProperty(FlexDirection, 'rowReverse', {
    get: FlexDirection$rowReverse_getInstance
  });
  Object.defineProperty(FlexDirection, 'column', {
    get: FlexDirection$column_getInstance
  });
  Object.defineProperty(FlexDirection, 'columnReverse', {
    get: FlexDirection$columnReverse_getInstance
  });
  package$typed.FlexDirection = FlexDirection;
  package$typed.toFlexDirection_pdl1vz$ = toFlexDirection;
  Object.defineProperty(FlexGrow$Keyword, 'inherit', {
    get: FlexGrow$Keyword$inherit_getInstance
  });
  Object.defineProperty(FlexGrow$Keyword, 'initial', {
    get: FlexGrow$Keyword$initial_getInstance
  });
  Object.defineProperty(FlexGrow$Keyword, 'unset', {
    get: FlexGrow$Keyword$unset_getInstance
  });
  FlexGrow.Keyword = FlexGrow$Keyword;
  Object.defineProperty(FlexGrow, 'Statics', {
    get: FlexGrow$Statics_getInstance
  });
  package$typed.FlexGrow = FlexGrow;
  package$typed.toFlexGrow_pdl1vz$ = toFlexGrow;
  Object.defineProperty(FlexShrink$Keyword, 'inherit', {
    get: FlexShrink$Keyword$inherit_getInstance
  });
  Object.defineProperty(FlexShrink$Keyword, 'initial', {
    get: FlexShrink$Keyword$initial_getInstance
  });
  Object.defineProperty(FlexShrink$Keyword, 'unset', {
    get: FlexShrink$Keyword$unset_getInstance
  });
  FlexShrink.Keyword = FlexShrink$Keyword;
  Object.defineProperty(FlexShrink, 'Statics', {
    get: FlexShrink$Statics_getInstance
  });
  package$typed.FlexShrink = FlexShrink;
  package$typed.toFlexShrink_pdl1vz$ = toFlexShrink;
  Object.defineProperty(JustifyContent, 'flexStart', {
    get: JustifyContent$flexStart_getInstance
  });
  Object.defineProperty(JustifyContent, 'flexEnd', {
    get: JustifyContent$flexEnd_getInstance
  });
  Object.defineProperty(JustifyContent, 'center', {
    get: JustifyContent$center_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceBetween', {
    get: JustifyContent$spaceBetween_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceEvenly', {
    get: JustifyContent$spaceEvenly_getInstance
  });
  Object.defineProperty(JustifyContent, 'spaceAround', {
    get: JustifyContent$spaceAround_getInstance
  });
  Object.defineProperty(JustifyContent, 'inherit', {
    get: JustifyContent$inherit_getInstance
  });
  Object.defineProperty(JustifyContent, 'initial', {
    get: JustifyContent$initial_getInstance
  });
  Object.defineProperty(JustifyContent, 'unset', {
    get: JustifyContent$unset_getInstance
  });
  package$typed.JustifyContent = JustifyContent;
  package$typed.toJustifyContent_pdl1vz$ = toJustifyContent;
  Object.defineProperty(Position, 'static', {
    get: Position$static_getInstance
  });
  Object.defineProperty(Position, 'relative', {
    get: Position$relative_getInstance
  });
  Object.defineProperty(Position, 'absolute', {
    get: Position$absolute_getInstance
  });
  Object.defineProperty(Position, 'fixed', {
    get: Position$fixed_getInstance
  });
  Object.defineProperty(Position, 'sticky', {
    get: Position$sticky_getInstance
  });
  Object.defineProperty(Position, 'inherit', {
    get: Position$inherit_getInstance
  });
  Object.defineProperty(Position, 'initial', {
    get: Position$initial_getInstance
  });
  Object.defineProperty(Position, 'unset', {
    get: Position$unset_getInstance
  });
  package$typed.Position = Position;
  package$typed.toPosition_pdl1vz$ = toPosition;
  TypedStyle.AlignItemsDelegate = TypedStyle$AlignItemsDelegate;
  TypedStyle.BorderDelegate = TypedStyle$BorderDelegate;
  TypedStyle.DisplayDelegate = TypedStyle$DisplayDelegate;
  TypedStyle.RgbColorDelegate = TypedStyle$RgbColorDelegate;
  TypedStyle.DimensionDelegate = TypedStyle$DimensionDelegate;
  TypedStyle.FlexDirectionDelegate = TypedStyle$FlexDirectionDelegate;
  TypedStyle.FlexDelegate = TypedStyle$FlexDelegate;
  TypedStyle.FlexGrowDelegate = TypedStyle$FlexGrowDelegate;
  TypedStyle.FlexShrinkDelegate = TypedStyle$FlexShrinkDelegate;
  TypedStyle.FlexBasisDelegate = TypedStyle$FlexBasisDelegate;
  TypedStyle.IntDelegate = TypedStyle$IntDelegate;
  TypedStyle.JustifyContentDelegate = TypedStyle$JustifyContentDelegate;
  TypedStyle.PositionDelegate = TypedStyle$PositionDelegate;
  TypedStyle.TypedPropertyDelegate = TypedStyle$TypedPropertyDelegate;
  TypedStyle.TypedPropertyDelegate2 = TypedStyle$TypedPropertyDelegate2;
  package$typed.TypedStyle = TypedStyle;
  package$elements.StyledClass = StyledClass;
  package$elements.Table = Table;
  package$elements.Caption = Caption;
  package$elements.Colgroup = Colgroup;
  package$elements.Col = Col;
  package$elements.Tbody = Tbody;
  package$elements.Thead = Thead;
  package$elements.Tfoot = Tfoot;
  package$elements.Tr = Tr;
  package$elements.Td = Td;
  package$elements.Th = Th;
  package$elements.A = A;
  package$elements.Br = Br;
  package$elements.Span = Span;
  package$elements.I = I;
  package$elements.Text = Text_0;
  package$elements.TypedStyledClass = TypedStyledClass;
  W3cDelegates.prototype.Attribute = W3cDelegates$Attribute;
  W3cDelegates.prototype.NullableAttribute = W3cDelegates$NullableAttribute;
  W3cDelegates.prototype.NullableBooleanAttribute = W3cDelegates$NullableBooleanAttribute;
  W3cDelegates.prototype.NullableDimensionAttribute = W3cDelegates$NullableDimensionAttribute;
  Object.defineProperty(package$elements, 'W3cDelegates', {
    get: W3cDelegates_getInstance
  });
  var package$style_0 = package$fg.style || (package$fg.style = {});
  package$style_0.AdjacentSiblingRule = AdjacentSiblingRule;
  package$style_0.AndRule = AndRule;
  package$style_0.AnyRule = AnyRule;
  package$style_0.ChildRule = ChildRule;
  package$style_0.ClassRule = ClassRule;
  var package$colour = package$style_0.colour || (package$style_0.colour = {});
  package$colour.Colour = Colour;
  Object.defineProperty(Hsl, 'Statics', {
    get: Hsl$Statics_getInstance
  });
  package$colour.Hsl = Hsl;
  package$colour.hueToRgb_qt1dr2$ = hueToRgb;
  Object.defineProperty(RgbColor, 'Factory', {
    get: RgbColor$Factory_getInstance
  });
  package$colour.RgbColor = RgbColor;
  package$style_0.DescendantRule = DescendantRule;
  package$style_0.keyframesRule_c5g61y$ = keyframesRule;
  package$style_0.classRule_fprhdc$ = classRule;
  package$style_0.rule_79mggx$ = rule_1;
  package$style_0.and_yogg4l$ = and;
  package$style_0.and_xif9ow$ = and_0;
  package$style_0.adjacentSibling_rmxh02$ = adjacentSibling;
  package$style_0.adjacentSibling_ubtint$ = adjacentSibling_0;
  package$style_0.desc_87tsht$ = desc;
  package$style_0.desc_y0z8s$ = desc_0;
  package$style_0.child_7k7416$ = child;
  package$style_0.child_xmmih7$ = child_0;
  package$style_0.active_dn1ps9$ = active;
  package$style_0.checked_dn1ps9$ = checked;
  package$style_0.empty_dn1ps9$ = empty;
  package$style_0.enabled_dn1ps9$ = enabled;
  package$style_0.first_dn1ps9$ = first_0;
  package$style_0.firstChild_dn1ps9$ = firstChild;
  package$style_0.firstOfType_dn1ps9$ = firstOfType;
  package$style_0.focus_dn1ps9$ = focus;
  package$style_0.hover_dn1ps9$ = hover;
  package$style_0.indeterminate_dn1ps9$ = indeterminate;
  package$style_0.inRange_dn1ps9$ = inRange;
  package$style_0.invalid_dn1ps9$ = invalid;
  package$style_0.lang_dn1ps9$ = lang;
  package$style_0.lastChild_dn1ps9$ = lastChild;
  package$style_0.lastOfType_dn1ps9$ = lastOfType;
  package$style_0.left_dn1ps9$ = left;
  package$style_0.link_dn1ps9$ = link;
  package$style_0.not_xif9ow$ = not;
  package$style_0.keyframesRule_xtarec$ = keyframesRule_0;
  package$style_0.keyframe_iwusm5$ = keyframe;
  package$style_0.kfrom_yovo6t$ = kfrom;
  package$style_0.kto_yovo6t$ = kto;
  package$style_0.KeyFrameRule = KeyFrameRule;
  package$style_0.KeyframesRule = KeyframesRule;
  Rule.Property = Rule$Property;
  Rule.NullableProperty = Rule$NullableProperty;
  package$style_0.Rule = Rule;
  package$style_0.TypedClassRule = TypedClassRule;
  TypedRule.DisplayDelegate = TypedRule$DisplayDelegate;
  TypedRule.PositionDelegate = TypedRule$PositionDelegate;
  TypedRule.RgbColorDelegate = TypedRule$RgbColorDelegate;
  TypedRule.IntDelegate = TypedRule$IntDelegate;
  TypedRule.DimensionDelegate = TypedRule$DimensionDelegate;
  TypedRule.FlexDirectionDelegate = TypedRule$FlexDirectionDelegate;
  TypedRule.AlignItemsDelegate = TypedRule$AlignItemsDelegate;
  TypedRule.JustifyContentDelegate = TypedRule$JustifyContentDelegate;
  TypedRule.FlexDelegate = TypedRule$FlexDelegate;
  TypedRule.FlexGrowDelegate = TypedRule$FlexGrowDelegate;
  TypedRule.FlexShrinkDelegate = TypedRule$FlexShrinkDelegate;
  TypedRule.FlexBasisDelegate = TypedRule$FlexBasisDelegate;
  TypedRule.TypedPropertyDelegate = TypedRule$TypedPropertyDelegate;
  package$style_0.TypedRule = TypedRule;
  package$style_0.TypeRule = TypeRule;
  package$style_0.camelsToDashes_pdl1vz$ = camelsToDashes;
  HEX_CHARS = [Kotlin.toBoxedChar(48), Kotlin.toBoxedChar(49), Kotlin.toBoxedChar(50), Kotlin.toBoxedChar(51), Kotlin.toBoxedChar(52), Kotlin.toBoxedChar(53), Kotlin.toBoxedChar(54), Kotlin.toBoxedChar(55), Kotlin.toBoxedChar(56), Kotlin.toBoxedChar(57), Kotlin.toBoxedChar(97), Kotlin.toBoxedChar(98), Kotlin.toBoxedChar(99), Kotlin.toBoxedChar(100), Kotlin.toBoxedChar(101), Kotlin.toBoxedChar(102)];
  BODY = new Body();
  HTML = new Html();
  Kotlin.defineModule('elements', _);
  return _;
}(typeof elements === 'undefined' ? {} : elements, kotlin);

//@ sourceMappingURL=elements.js.map
