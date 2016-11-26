var elements = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      base: Kotlin.definePackage(function () {
        this.HEX_CHARS_0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
      }, /** @lends _.fg.base */ {
        CompareTo: Kotlin.createObject(null, function CompareTo() {
        }, /** @lends _.fg.base.CompareTo.prototype */ {
          nullSafe_wn2jw4$: function (obj1, obj2) {
            var tmp$0;
            if (obj1 != null && obj2 != null) {
              if (Kotlin.isComparable(obj1) && Kotlin.isComparable(obj2)) {
                Kotlin.isComparable(tmp$0 = obj1) ? tmp$0 : Kotlin.throwCCE();
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
          },
          nullSafe_puj7f4$: function (obj1, obj2) {
            if (obj1 != null && obj2 != null) {
              return Kotlin.compareTo(obj1, obj2);
            }
             else if (obj1 == null && obj2 != null) {
              return -1;
            }
             else {
              return 1;
            }
          },
          nullSafe_vux9f0$: function (obj1, obj2) {
            if (obj1 != null && obj2 != null) {
              return Kotlin.primitiveCompareTo(obj1, obj2);
            }
             else if (obj1 == null && obj2 != null) {
              return -1;
            }
             else {
              return 1;
            }
          },
          nullSafe_lu1900$: function (obj1, obj2) {
            if (obj1 != null && obj2 != null) {
              return Kotlin.primitiveCompareTo(obj1, obj2);
            }
             else if (obj1 == null && obj2 != null) {
              return -1;
            }
             else {
              return 1;
            }
          }
        }),
        OS: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function OS() {
          OS.baseInitializer.call(this);
        }, function () {
          return {
            WINDOWS: function () {
              return new _.fg.base.OS();
            },
            MAC: function () {
              return new _.fg.base.OS();
            },
            LINUX: function () {
              return new _.fg.base.OS();
            },
            UNIX: function () {
              return new _.fg.base.OS();
            },
            UNKNOWN: function () {
              return new _.fg.base.OS();
            }
          };
        }),
        OSDetector: Kotlin.createObject(null, function OSDetector() {
          this.detected$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.base.OSDetector.detected$f(this));
        }, /** @lends _.fg.base.OSDetector.prototype */ {
          detected: {
            get: function () {
              return Kotlin.kotlin.getValue_em0fd4$(this.detected$delegate, this, new Kotlin.PropertyMetadata('detected'));
            }
          },
          detect_0: function () {
            var navigator = window.navigator;
            if (Kotlin.kotlin.text.contains_kzp0od$(navigator.appVersion, 'Win')) {
              return _.fg.base.OS.WINDOWS;
            }
             else if (Kotlin.kotlin.text.contains_kzp0od$(navigator.appVersion, 'Mac')) {
              return _.fg.base.OS.MAC;
            }
             else if (Kotlin.kotlin.text.contains_kzp0od$(navigator.appVersion, 'X11')) {
              return _.fg.base.OS.UNIX;
            }
             else if (Kotlin.kotlin.text.contains_kzp0od$(navigator.appVersion, 'Linux')) {
              return _.fg.base.OS.LINUX;
            }
             else {
              return _.fg.base.OS.UNKNOWN;
            }
          }
        }, /** @lends _.fg.base.OSDetector */ {
          detected$f: function (this$OSDetector) {
            return function () {
              return this$OSDetector.detect_0();
            };
          }
        }),
        Path: Kotlin.createClass(function () {
          return [Kotlin.Comparable];
        }, function Path(absolute, trailingSlash, elements) {
          this.absolute = absolute;
          this.trailingSlash = trailingSlash;
          this.elements = elements;
          var string = Kotlin.kotlin.collections.joinToString_ld60a2$(this.elements, '/', void 0, void 0, void 0, void 0, _.fg.base.Path.Path$f);
          if (this.absolute) {
            string = '/' + string;
          }
          if (this.trailingSlash) {
            string += '/';
          }
          this.asString_v1kqyt$_0 = string;
        }, /** @lends _.fg.base.Path.prototype */ {
          append_usdzdh$: function (other) {
            var elements = Kotlin.kotlin.collections.toMutableList_mwto7b$(this.elements);
            elements.addAll_wtfk93$(other.elements);
            return new _.fg.base.Path(this.absolute, other.trailingSlash, elements);
          },
          subPathAfter_usdzdh$: function (other) {
            var tmp$0;
            var fromIndex = 0;
            tmp$0 = Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(this.elements);
            for (var i = 0; i <= tmp$0; i++) {
              if (i >= other.size) {
                fromIndex = i;
                break;
              }
              if (!this.elements.get_za3lpa$(i).equals_za3rmp$(other.getElement_za3lpa$(i))) {
                fromIndex = i + 1;
              }
            }
            var elementsAfter = this.elements.subList_vux9f0$(fromIndex, this.elements.size);
            return new _.fg.base.Path(this.absolute, this.trailingSlash, elementsAfter);
          },
          size: {
            get: function () {
              return this.elements.size;
            }
          },
          hasParent: {
            get: function () {
              return this.elements.size > 1;
            }
          },
          parent: {
            get: function () {
              if (this.elements.size === 1) {
                throw new Kotlin.IllegalArgumentException('Path as not parent');
              }
              return new _.fg.base.Path(this.absolute, this.trailingSlash, this.elements.subList_vux9f0$(0, Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(this.elements) - 1));
            }
          },
          parents: {
            get: function () {
              var parents = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              var parent = this.hasParent ? this.parent : null;
              while (parent != null) {
                parents.add_za3rmp$(parent);
                parent = parent.hasParent ? parent.parent : null;
              }
              return Kotlin.kotlin.collections.reversed_q5oq31$(parents);
            }
          },
          getElement_za3lpa$: function (index) {
            return this.elements.get_za3lpa$(index);
          },
          compareTo_za3rmp$: function (other) {
            return Kotlin.compareTo(this.asString_v1kqyt$_0, other.asString_v1kqyt$_0);
          },
          toString: function () {
            return this.asString_v1kqyt$_0;
          },
          equals_za3rmp$: function (other) {
            if (this === other)
              return true;
            if (!Kotlin.isType(other, _.fg.base.Path))
              return false;
            if (!Kotlin.equals(this.absolute, other.absolute))
              return false;
            if (!Kotlin.equals(this.trailingSlash, other.trailingSlash))
              return false;
            if (!Kotlin.equals(this.elements, other.elements))
              return false;
            return true;
          },
          hashCode: function () {
            var result = Kotlin.hashCode(this.absolute);
            result += 31 * result + Kotlin.hashCode(this.trailingSlash);
            result += 31 * result + Kotlin.hashCode(this.elements);
            return result;
          }
        }, /** @lends _.fg.base.Path */ {
          Factory: Kotlin.createObject(null, function Factory() {
            _.fg.base.Path.Factory.ROOT = new _.fg.base.Path(true, false, Kotlin.kotlin.collections.emptyList());
          }, /** @lends _.fg.base.Path.Factory.prototype */ {
            from_61zpoe$: function (string) {
              var tmp$0;
              var absolute = Kotlin.kotlin.text.startsWith_41xvrb$(string, '/');
              var trailingSlash = Kotlin.kotlin.text.endsWith_41xvrb$(string, '/');
              var elementsAsString = Kotlin.kotlin.text.split_l2gz7$(string, ['/']);
              var elements = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              tmp$0 = elementsAsString.iterator();
              while (tmp$0.hasNext()) {
                var elementAsString = tmp$0.next();
                if (!Kotlin.kotlin.text.isBlank_gw00vq$(elementAsString)) {
                  elements.add_za3rmp$(new _.fg.base.Path.Element(elementAsString));
                }
              }
              return new _.fg.base.Path(absolute, trailingSlash, elements);
            }
          }),
          object_initializer$: function () {
            _.fg.base.Path.Factory;
          },
          Element: Kotlin.createClass(null, function Element$(value) {
            this.value = value;
            if (Kotlin.kotlin.text.isBlank_gw00vq$(this.value)) {
              throw new Kotlin.IllegalArgumentException('An Element cannot be blank');
            }
          }, /** @lends _.fg.base.Path.Element.prototype */ {
            matches_wgf8sj$: function (other) {
              return Kotlin.kotlin.text.equals_41xvrb$(other.value, other.value, true);
            },
            equals_za3rmp$: function (other) {
              if (this === other)
                return true;
              if (!Kotlin.isType(other, _.fg.base.Path.Element))
                return false;
              if (!Kotlin.equals(this.value, other.value))
                return false;
              return true;
            },
            hashCode: function () {
              return Kotlin.hashCode(this.value);
            },
            toString: function () {
              return this.value;
            }
          }),
          Path$f: function (it) {
            return it.toString();
          }
        }),
        URL: Kotlin.createClass(function () {
          return [Kotlin.Comparable];
        }, function URL(scheme, host, port, path, query, fragment) {
          if (path === void 0)
            path = _.fg.base.Path.Factory.ROOT;
          if (query === void 0)
            query = _.fg.base.URL.Query.Factory.NONE;
          if (fragment === void 0)
            fragment = '';
          this.scheme = scheme;
          this.host = host;
          this.port = port;
          this.path = path;
          this.query = query;
          this.fragment = fragment;
        }, /** @lends _.fg.base.URL.prototype */ {
          parents: {
            get: function () {
              var parents = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              var parent = this.parent;
              while (parent != null) {
                parents.add_za3rmp$(parent);
                parent = parent.parent;
              }
              return Kotlin.kotlin.collections.reversed_q5oq31$(parents);
            }
          },
          parent: {
            get: function () {
              if (!this.hasParent) {
                return null;
              }
              var parentPath = this.path.parent;
              return new _.fg.base.URL(this.scheme, this.host, this.port, parentPath, this.query, this.fragment);
            }
          },
          hasParent: {
            get: function () {
              return this.path.hasParent;
            }
          },
          append_usdzdh$: function (path) {
            return new _.fg.base.URL(this.scheme, this.host, this.port, this.path.append_usdzdh$(path), this.query, this.fragment);
          },
          replaceParam_puj7f4$: function (name, value) {
            var mutableMap = Kotlin.kotlin.collections.mutableMapOf_eoa9s7$([]);
            if (this.query != null) {
              mutableMap.putAll_r12sna$(this.query.map);
            }
            mutableMap.put_wn2jw4$(name, value);
            return new _.fg.base.URL(this.scheme, this.host, this.port, this.path, new _.fg.base.URL.Query(mutableMap), this.fragment);
          },
          compareTo_za3rmp$: function (other) {
            var compare;
            compare = this.path.compareTo_za3rmp$(other.path);
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
            compare = _.fg.base.CompareTo.nullSafe_wn2jw4$(this.query, other.query);
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
          },
          toString: function () {
            var str = '';
            var $receiver = this.scheme;
            var tmp$0 = !Kotlin.kotlin.text.isBlank_gw00vq$($receiver);
            if (tmp$0) {
              var $receiver_0 = this.host;
              tmp$0 = !Kotlin.kotlin.text.isBlank_gw00vq$($receiver_0);
            }
            if (tmp$0) {
              str = this.scheme + '://' + this.host;
            }
            var $receiver_1 = this.port;
            if (!Kotlin.kotlin.text.isBlank_gw00vq$($receiver_1))
              str += ':' + this.port;
            str += this.path.toString();
            if (this.query != null)
              str += this.query;
            var $receiver_2 = this.fragment;
            if (!Kotlin.kotlin.text.isBlank_gw00vq$($receiver_2))
              str += '#' + this.fragment;
            return str;
          }
        }, /** @lends _.fg.base.URL */ {
          Factory: Kotlin.createObject(null, function Factory() {
          }, /** @lends _.fg.base.URL.Factory.prototype */ {
            from_61zpoe$: function (asString) {
              var remaining = asString;
              var scheme = Kotlin.kotlin.text.substringBefore_ex0kps$(remaining, '://', '');
              remaining = Kotlin.kotlin.text.substringAfter_ex0kps$(remaining, '://');
              var fragment = Kotlin.kotlin.text.substringAfter_ex0kps$(remaining, '#', '');
              remaining = Kotlin.kotlin.text.substringBefore_ex0kps$(remaining, '#');
              var query = Kotlin.kotlin.text.substringAfter_ex0kps$(remaining, '?', '');
              remaining = Kotlin.kotlin.text.substringBefore_ex0kps$(remaining, '?');
              var path = '/' + Kotlin.kotlin.text.substringAfter_ex0kps$(remaining, '/', '');
              remaining = Kotlin.kotlin.text.substringBefore_ex0kps$(remaining, '/');
              var port = Kotlin.kotlin.text.substringAfter_ex0kps$(remaining, ':', '');
              remaining = Kotlin.kotlin.text.substringBefore_ex0kps$(remaining, ':');
              var host = remaining;
              return new _.fg.base.URL(scheme, host, port, _.fg.base.Path.Factory.from_61zpoe$(path), _.fg.base.URL.Query.Factory.from_61zpoe$(query), fragment);
            }
          }),
          object_initializer$: function () {
            _.fg.base.URL.Factory;
          },
          Query: Kotlin.createClass(null, function Query(map) {
            this.map = map;
          }, /** @lends _.fg.base.URL.Query.prototype */ {
            toString: function () {
              var tmp$1;
              if (this.map.isEmpty()) {
                return '';
              }
              var s = '?';
              tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this.map);
              while (tmp$1.hasNext()) {
                var tmp$0 = tmp$1.next();
                var key = tmp$0.key;
                var value = tmp$0.value;
                if (s.length > 1) {
                  s += '&';
                }
                s += key + '=' + value;
              }
              return s;
            },
            component1: function () {
              return this.map;
            },
            copy_o5obbo$: function (map) {
              return new _.fg.base.URL.Query(map === void 0 ? this.map : map);
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.map) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
            }
          }, /** @lends _.fg.base.URL.Query */ {
            Factory: Kotlin.createObject(null, function Factory() {
              _.fg.base.URL.Query.Factory.NONE = new _.fg.base.URL.Query(Kotlin.kotlin.collections.emptyMap());
            }, /** @lends _.fg.base.URL.Query.Factory.prototype */ {
              from_eoa9s7$: function (pairs) {
                return new _.fg.base.URL.Query(Kotlin.kotlin.collections.linkedMapOf_eoa9s7$(pairs.slice()));
              },
              from_61zpoe$: function (string) {
                var tmp$0;
                var withoutQuestion = Kotlin.kotlin.text.startsWith_41xvrb$(string, '?') ? Kotlin.kotlin.text.substringAfter_ex0kps$(string, '?') : string;
                if (string.length === 0) {
                  return _.fg.base.URL.Query.Factory.NONE;
                }
                var splitted = Kotlin.kotlin.text.split_l2gz7$(withoutQuestion, ['&']);
                var map = Kotlin.kotlin.collections.mutableMapOf_eoa9s7$([]);
                tmp$0 = Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(splitted);
                for (var i = 0; i <= tmp$0; i++) {
                  var name = Kotlin.kotlin.text.substringBefore_ex0kps$(splitted.get_za3lpa$(i), '=');
                  var value = Kotlin.kotlin.text.substringAfter_ex0kps$(splitted.get_za3lpa$(i), '=');
                  if (!Kotlin.kotlin.text.isBlank_gw00vq$(name)) {
                    map.put_wn2jw4$(name, value);
                  }
                }
                return new _.fg.base.URL.Query(map);
              }
            }),
            object_initializer$: function () {
              _.fg.base.URL.Query.Factory;
            }
          })
        }),
        toHexString_s8ev3o$: function ($receiver) {
          var char2 = _.fg.base.HEX_CHARS_0[$receiver & 15];
          var char1 = _.fg.base.HEX_CHARS_0[$receiver >> 4 & 15];
          return char1.toString() + char2;
        },
        f: function (closure$timeout, closure$func) {
          return function () {
            window.clearTimeout(closure$timeout.v);
            closure$timeout.v = -1;
            return closure$func();
          };
        },
        debounce0_4c1mbk$f: function (closure$timeout, closure$func, closure$delay) {
          return function () {
            if (closure$timeout.v === -1) {
              closure$timeout.v = window.setTimeout(_.fg.base.f(closure$timeout, closure$func), closure$delay);
            }
          };
        },
        debounce0_4c1mbk$: function (func, delay) {
          var timeout = {v: -1};
          return _.fg.base.debounce0_4c1mbk$f(timeout, func, delay);
        },
        f_0: function (closure$timeout, closure$func, closure$argument1) {
          return function () {
            window.clearTimeout(closure$timeout.v);
            closure$timeout.v = -1;
            return closure$func(closure$argument1);
          };
        },
        debounce1_w5kaku$f: function (closure$timeout, closure$func, closure$delay) {
          return function (it) {
            var arguments_0 = arguments;
            var argument1 = arguments_0[0];
            if (closure$timeout.v === -1) {
              closure$timeout.v = window.setTimeout(_.fg.base.f_0(closure$timeout, closure$func, argument1), closure$delay);
            }
          };
        },
        debounce1_w5kaku$: function (func, delay) {
          var timeout = {v: -1};
          return _.fg.base.debounce1_w5kaku$f(timeout, func, delay);
        },
        f_1: function (closure$timeout, closure$func, closure$argument1) {
          return function () {
            window.clearTimeout(closure$timeout.v);
            closure$timeout.v = -1;
            return closure$func(closure$argument1);
          };
        },
        bounceUntil_w5kaku$f: function (closure$timeout, closure$func, closure$delay) {
          return function (it) {
            var arguments_0 = arguments;
            var argument1 = arguments_0[0];
            window.clearTimeout(closure$timeout.v);
            closure$timeout.v = window.setTimeout(_.fg.base.f_1(closure$timeout, closure$func, argument1), closure$delay);
          };
        },
        bounceUntil_w5kaku$: function (func, delay) {
          var timeout = {v: -1};
          return _.fg.base.bounceUntil_w5kaku$f(timeout, func, delay);
        },
        toCurrency_44694n$: function ($receiver, currency, side, decimals) {
          var tmp$0, tmp$1;
          if (side === void 0)
            side = _.fg.base.Side.LEFT;
          if (decimals === void 0)
            decimals = 2;
          tmp$0 = side;
          if (Kotlin.equals(tmp$0, _.fg.base.Side.LEFT))
            tmp$1 = currency + ' ' + Kotlin.kotlin.text.padEnd_b68f8p$($receiver.toString(), decimals, '0');
          else if (Kotlin.equals(tmp$0, _.fg.base.Side.RIGHT))
            tmp$1 = Kotlin.kotlin.text.padEnd_b68f8p$($receiver.toString(), decimals, '0') + ' ' + currency;
          return tmp$1;
        },
        Side: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function Side() {
          Side.baseInitializer.call(this);
        }, function () {
          return {
            LEFT: function () {
              return new _.fg.base.Side();
            },
            RIGHT: function () {
              return new _.fg.base.Side();
            }
          };
        })
      }),
      elements: Kotlin.definePackage(function () {
        this.BODY = new _.fg.elements.Body();
        this.HTML = new _.fg.elements.Html();
      }, /** @lends _.fg.elements */ {
        Body: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Body() {
          Body.baseInitializer.call(this, void 0, document.body);
          this.mounted_vyrc26$_0 = true;
        }, /** @lends _.fg.elements.Body.prototype */ {
          mounted: {
            get: function () {
              return this.mounted_vyrc26$_0;
            }
          },
          init_0: function () {
            this.render();
            this.renderChildren_w5cupa$_0();
            this.mountChildren_w5cupa$_0();
          }
        }),
        toDimension_pdl1w0$: function ($receiver) {
          var tmp$0, tmp$2;
          if ($receiver == null) {
            return null;
          }
          tmp$0 = _.fg.elements.DimensionType.values();
          for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
            var type = tmp$0[tmp$2];
            if (Kotlin.equals(type.postfix, $receiver)) {
              return type.newFn($receiver);
            }
          }
          throw new Kotlin.IllegalArgumentException('String cannot be converted to Dimension: ' + $receiver);
        },
        Dimension: Kotlin.createTrait(null, /** @lends _.fg.elements.Dimension.prototype */ {
          toHtml: function () {
            return this.value + this.type.postfix;
          }
        }),
        DimensionType: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function DimensionType(postfix, newFn) {
          DimensionType.baseInitializer.call(this);
          this.postfix = postfix;
          this.newFn = newFn;
        }, function () {
          return {
            percent: function () {
              return new _.fg.elements.DimensionType('%', _.fg.elements.DimensionType.percent$f);
            },
            pixels: function () {
              return new _.fg.elements.DimensionType('px', _.fg.elements.DimensionType.pixels$f);
            },
            mm: function () {
              return new _.fg.elements.DimensionType('mm', _.fg.elements.DimensionType.mm$f);
            },
            cm: function () {
              return new _.fg.elements.DimensionType('cm', _.fg.elements.DimensionType.cm$f);
            },
            inch: function () {
              return new _.fg.elements.DimensionType('in', _.fg.elements.DimensionType.inch$f);
            },
            pt: function () {
              return new _.fg.elements.DimensionType('pt', _.fg.elements.DimensionType.pt$f);
            },
            pc: function () {
              return new _.fg.elements.DimensionType('pc', _.fg.elements.DimensionType.pc$f);
            },
            em: function () {
              return new _.fg.elements.DimensionType('em', _.fg.elements.DimensionType.em$f);
            },
            rem: function () {
              return new _.fg.elements.DimensionType('rem', _.fg.elements.DimensionType.rem$f);
            },
            vh: function () {
              return new _.fg.elements.DimensionType('vh', _.fg.elements.DimensionType.vh$f);
            },
            vw: function () {
              return new _.fg.elements.DimensionType('vw', _.fg.elements.DimensionType.vw$f);
            },
            vmin: function () {
              return new _.fg.elements.DimensionType('vmin', _.fg.elements.DimensionType.vmin$f);
            },
            vmax: function () {
              return new _.fg.elements.DimensionType('vmax', _.fg.elements.DimensionType.vmax$f);
            }
          };
        }, null, /** @lends _.fg.elements.DimensionType */ {
          percent$f: function (it) {
            var tmp$0;
            return new _.fg.elements.Percent((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          pixels$f: function (it) {
            var tmp$0;
            return new _.fg.elements.Pixels((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          mm$f: function (it) {
            return new _.fg.elements.Mm(parseInt(it));
          },
          cm$f: function (it) {
            var tmp$0;
            return new _.fg.elements.Cm((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          inch$f: function (it) {
            var tmp$0;
            return new _.fg.elements.In((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          pt$f: function (it) {
            return new _.fg.elements.Pt(parseInt(it));
          },
          pc$f: function (it) {
            return new _.fg.elements.Pc(parseInt(it));
          },
          em$f: function (it) {
            var tmp$0;
            return new _.fg.elements.Em((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          rem$f: function (it) {
            var tmp$0;
            return new _.fg.elements.Rem((tmp$0 = Kotlin.safeParseDouble(it)) != null ? tmp$0 : Kotlin.throwNPE());
          },
          vh$f: function (it) {
            return new _.fg.elements.Vh(parseInt(it));
          },
          vw$f: function (it) {
            return new _.fg.elements.Vw(parseInt(it));
          },
          vmin$f: function (it) {
            return new _.fg.elements.VMin(parseInt(it));
          },
          vmax$f: function (it) {
            return new _.fg.elements.VMax(parseInt(it));
          }
        }),
        Percent: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Percent(value) {
          this.value_nw65zz$_0 = value;
          this.type_nw65zz$_0 = _.fg.elements.DimensionType.percent;
        }, /** @lends _.fg.elements.Percent.prototype */ {
          value: {
            get: function () {
              return this.value_nw65zz$_0;
            }
          },
          type: {
            get: function () {
              return this.type_nw65zz$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Percent(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_pct_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        get_pct_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        Pixels: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Pixels(value) {
          this.value_ndnjc3$_0 = value;
          this.type_ndnjc3$_0 = _.fg.elements.DimensionType.pixels;
        }, /** @lends _.fg.elements.Pixels.prototype */ {
          value: {
            get: function () {
              return this.value_ndnjc3$_0;
            }
          },
          type: {
            get: function () {
              return this.type_ndnjc3$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Pixels(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_px_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Pixels($receiver);
        }},
        get_px_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Pixels($receiver);
        }},
        get_px_pdl1w0$: {value: function ($receiver) {
          var tmp$0;
          tmp$0 = Kotlin.safeParseDouble(Kotlin.kotlin.text.substringBefore_ex0kps$($receiver, 'px'));
          if (tmp$0 == null) {
            throw new Kotlin.IllegalArgumentException("'" + $receiver + "' is not parse-able as Pixels");
          }
          return new _.fg.elements.Pixels(tmp$0);
        }},
        Mm: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Mm(value) {
          this.value_suy6ts$_0 = value;
          this.type_suy6ts$_0 = _.fg.elements.DimensionType.mm;
        }, /** @lends _.fg.elements.Mm.prototype */ {
          value: {
            get: function () {
              return this.value_suy6ts$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suy6ts$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Mm(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_mm_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Mm($receiver);
        }},
        Cm: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Cm(value) {
          this.value_suxzeu$_0 = value;
          this.type_suxzeu$_0 = _.fg.elements.DimensionType.cm;
        }, /** @lends _.fg.elements.Cm.prototype */ {
          value: {
            get: function () {
              return this.value_suxzeu$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suxzeu$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Cm(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_cm_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Cm($receiver);
        }},
        get_cm_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Cm($receiver);
        }},
        In: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function In(value) {
          this.value_suy3vv$_0 = value;
          this.type_suy3vv$_0 = _.fg.elements.DimensionType.inch;
        }, /** @lends _.fg.elements.In.prototype */ {
          value: {
            get: function () {
              return this.value_suy3vv$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suy3vv$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.In(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        inch_yrwdxs$: function ($receiver) {
          return new _.fg.elements.In($receiver);
        },
        inch_s8ev3o$: function ($receiver) {
          return new _.fg.elements.In($receiver);
        },
        Pt: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Pt(value) {
          this.value_suy97w$_0 = value;
          this.type_suy97w$_0 = _.fg.elements.DimensionType.pt;
        }, /** @lends _.fg.elements.Pt.prototype */ {
          value: {
            get: function () {
              return this.value_suy97w$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suy97w$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Pt(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_pt_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Pt($receiver);
        }},
        Pc: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Pc(value) {
          this.value_suy8t9$_0 = value;
          this.type_suy8t9$_0 = _.fg.elements.DimensionType.pc;
        }, /** @lends _.fg.elements.Pc.prototype */ {
          value: {
            get: function () {
              return this.value_suy8t9$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suy8t9$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Pc(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_pc_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Pc($receiver);
        }},
        Em: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Em(value) {
          this.value_suy0w8$_0 = value;
          this.type_suy0w8$_0 = _.fg.elements.DimensionType.em;
        }, /** @lends _.fg.elements.Em.prototype */ {
          value: {
            get: function () {
              return this.value_suy0w8$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suy0w8$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Em(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_em_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Em($receiver);
        }},
        get_em_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Em($receiver);
        }},
        Rem: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Rem(value) {
          this.value_sqxrrq$_0 = value;
          this.type_sqxrrq$_0 = _.fg.elements.DimensionType.rem;
        }, /** @lends _.fg.elements.Rem.prototype */ {
          value: {
            get: function () {
              return this.value_sqxrrq$_0;
            }
          },
          type: {
            get: function () {
              return this.type_sqxrrq$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Rem(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_rem_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        get_rem_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        Vh: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Vh(value) {
          this.value_suyddq$_0 = value;
          this.type_suyddq$_0 = _.fg.elements.DimensionType.vh;
        }, /** @lends _.fg.elements.Vh.prototype */ {
          value: {
            get: function () {
              return this.value_suyddq$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suyddq$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Vh(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_vh_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Vh($receiver);
        }},
        Vw: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Vw(value) {
          this.value_suydqn$_0 = value;
          this.type_suydqn$_0 = _.fg.elements.DimensionType.vw;
        }, /** @lends _.fg.elements.Vw.prototype */ {
          value: {
            get: function () {
              return this.value_suydqn$_0;
            }
          },
          type: {
            get: function () {
              return this.type_suydqn$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Vw(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_vw_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Vw($receiver);
        }},
        VMin: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function VMin(value) {
          this.value_w95ltg$_0 = value;
          this.type_w95ltg$_0 = _.fg.elements.DimensionType.vmin;
        }, /** @lends _.fg.elements.VMin.prototype */ {
          value: {
            get: function () {
              return this.value_w95ltg$_0;
            }
          },
          type: {
            get: function () {
              return this.type_w95ltg$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.VMin(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_vmin_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.VMin($receiver);
        }},
        VMax: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function VMax(value) {
          this.value_w95g4i$_0 = value;
          this.type_w95g4i$_0 = _.fg.elements.DimensionType.vmax;
        }, /** @lends _.fg.elements.VMax.prototype */ {
          value: {
            get: function () {
              return this.value_w95g4i$_0;
            }
          },
          type: {
            get: function () {
              return this.type_w95g4i$_0;
            }
          },
          toString: function () {
            return this.toHtml();
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.VMax(value === void 0 ? this.value : value);
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.value) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
          }
        }),
        get_vmax_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.VMax($receiver);
        }},
        br_8zczhr$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Br(), init);
        },
        header_4tl54c$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Header(), init);
        },
        main_2zek0o$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Main(), init);
        },
        footer_5xefui$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Footer(), init);
        },
        h1_sk18k8$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H1(), init);
        },
        h2_3mh653$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H2(), init);
        },
        h3_lb2wa2$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H3(), init);
        },
        h4_osh39x$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H4(), init);
        },
        h5_52z58$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H5(), init);
        },
        h6_p2n1kd$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.H6(), init);
        },
        p_ykyrxp$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.P(), init);
        },
        hr_tcpxbd$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Hr(), init);
        },
        ul_gwr2a2$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Ul(), init);
        },
        ol_xr01vg$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Ol(), init);
        },
        li_fpslb8$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Li(), init);
        },
        div_tvzmks$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Div(), init);
        },
        pre_mz29ae$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Pre(), init);
        },
        a_4owu00$f: function (closure$href, closure$target) {
          return function () {
            this._href = closure$href;
            this._target = closure$target;
          };
        },
        a_4owu00$: function ($receiver, href, target, init) {
          if (href === void 0)
            href = null;
          if (target === void 0)
            target = null;
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, _.fg.elements.with_ji1yox$(new _.fg.elements.A(), _.fg.elements.a_4owu00$f(href, target)), init);
        },
        i_3zgx1o$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.I(), init);
        },
        img_dgbhyk$: function ($receiver, src, init) {
          return _.fg.elements.initAndAppendNode_i6bvtr$($receiver, new _.fg.elements.Img(src), init);
        },
        initAndAppendNode_i6bvtr$: function ($receiver, node, init) {
          init.call(node);
          $receiver.appendChild_sr04hg$(node);
          return node;
        },
        with_ji1yox$: function ($receiver, init) {
          init.call($receiver);
          return $receiver;
        },
        onClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('click', listener);
        },
        unClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('click', listener);
        },
        onFocus_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('focus', listener);
        },
        unFocus_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('focus', listener);
        },
        onBlur_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('blur', listener);
        },
        unBlur_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('blur', listener);
        },
        onInput_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('input', listener);
        },
        unInput_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('input', listener);
        },
        onChange_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('change', listener);
        },
        unChange_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('change', listener);
        },
        onDblClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dlbclick', listener);
        },
        unDblClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dblclick', listener);
        },
        onMouseDown_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mousedown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseDown_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mousedown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseUp_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mouseup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseUp_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mouseup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseEnter_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mouseenter', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseEnter_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mouseenter', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseLeave_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mouseleave', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseLeave_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mouseleave', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseMove_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mousemove', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseMove_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mousemove', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseOut_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mouseout', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseOut_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mouseout', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseOver_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('mouseover', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseOver_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('mouseover', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onScroll_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('scroll', listener);
        },
        unScroll_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('scroll', listener);
        },
        onKeyUp_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('keyup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unKeyUp_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('keyup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onKeyPress_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('keypress', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unKeyPress_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('keypress', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onKeyDown_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.addEventListener('keydown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unKeyDown_da4jf4$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement_gobymg$_0.removeEventListener('keydown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onDrag_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('drag', listener);
        },
        unDrag_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('drag', listener);
        },
        onDragEnd_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dragend', listener);
        },
        unDragEnd_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dragend', listener);
        },
        onDragEnter_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dragenter', listener);
        },
        unDragEnter_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dragenter', listener);
        },
        onDragLeave_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dragleave', listener);
        },
        unDragLeave_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dragleave', listener);
        },
        onDragOver_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dragover', listener);
        },
        unDragOver_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dragover', listener);
        },
        onDragStart_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('dragstart', listener);
        },
        unDragStart_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('dragstart', listener);
        },
        onDrop_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.addEventListener('drop', listener);
        },
        unDrop_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement_gobymg$_0.removeEventListener('drop', listener);
        },
        get_computedStyle_gobym4$: {value: function ($receiver) {
          return window.getComputedStyle($receiver.w3cElement_gobymg$_0);
        }},
        Element: Kotlin.createClass(function () {
          return [_.fg.elements.Node];
        }, function Element$(name, existingElement, w3cElement) {
          var tmp$0;
          if (name === void 0)
            name = null;
          if (existingElement === void 0)
            existingElement = null;
          if (w3cElement === void 0)
            w3cElement = existingElement != null ? existingElement : Kotlin.isType(tmp$0 = document.createElement(name != null ? name : Kotlin.throwNPE()), HTMLElement) ? tmp$0 : Kotlin.throwCCE();
          Element$.baseInitializer.call(this, w3cElement);
          this.w3cElement_gobymg$_0 = w3cElement;
          this.resizedListeners$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.resizedListeners_gobymg$_0$f);
          this.resizeSensor_gobymg$_0 = null;
          this._id$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('id');
          this._tabindex$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('tabindex');
          this._displayBeforeHiding_gobymg$_0 = '';
          this.style$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.style$f(this));
          this.layout$delegate = new _.fg.elements.layout.LayoutDelegate();
        }, /** @lends _.fg.elements.Element.prototype */ {
          resizedListeners_gobymg$_0: {
            get: function () {
              return Kotlin.kotlin.getValue_em0fd4$(this.resizedListeners$delegate, this, new Kotlin.PropertyMetadata('resizedListeners'));
            }
          },
          childElements: {
            get: function () {
              var tmp$0;
              var $receiver = this.childNodes;
              var destination = new Kotlin.ArrayList();
              var tmp$2;
              tmp$2 = $receiver.iterator();
              while (tmp$2.hasNext()) {
                var element = tmp$2.next();
                if (Kotlin.isType(element, _.fg.elements.Element)) {
                  destination.add_za3rmp$(element);
                }
              }
              return Kotlin.isType(tmp$0 = destination, Kotlin.kotlin.collections.List) ? tmp$0 : Kotlin.throwCCE();
            }
          },
          _parentElement: {
            get: function () {
              var tmp$0, tmp$1;
              return Kotlin.isType(tmp$1 = (tmp$0 = this._parentNode_w5cupa$_0) != null ? tmp$0 : Kotlin.throwNPE(), _.fg.elements.Element) ? tmp$1 : Kotlin.throwCCE();
            }
          },
          _id: {
            get: function () {
              return this._id$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_id'));
            },
            set: function (_id_0) {
              this._id$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_id'), _id_0);
            }
          },
          _tabindex: {
            get: function () {
              return this._tabindex$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_tabindex'));
            },
            set: function (_tabindex_0) {
              this._tabindex$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_tabindex'), _tabindex_0);
            }
          },
          hidden: {
            get: function () {
              return Kotlin.equals(this._style.display, 'none');
            }
          },
          _style: {
            get: function () {
              return this.w3cElement_gobymg$_0.style;
            }
          },
          style: {
            get: function () {
              return Kotlin.kotlin.getValue_em0fd4$(this.style$delegate, this, new Kotlin.PropertyMetadata('style'));
            }
          },
          layout: {
            get: function () {
              return this.layout$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('layout'));
            },
            set: function (layout_0) {
              this.layout$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('layout'), layout_0);
            }
          },
          clientWidth: {
            get: function () {
              return this.w3cElement_gobymg$_0.clientWidth;
            }
          },
          clientHeight: {
            get: function () {
              return this.w3cElement_gobymg$_0.clientHeight;
            }
          },
          offsetWidth: {
            get: function () {
              return this.w3cElement_gobymg$_0.offsetWidth;
            }
          },
          offsetHeight: {
            get: function () {
              return this.w3cElement_gobymg$_0.offsetHeight;
            }
          },
          scrollWidth: {
            get: function () {
              return this.w3cElement_gobymg$_0.scrollWidth;
            }
          },
          scrollHeight: {
            get: function () {
              return this.w3cElement_gobymg$_0.scrollHeight;
            }
          },
          offsetTop: {
            get: function () {
              return this.w3cElement_gobymg$_0.offsetTop;
            }
          },
          offsetLeft: {
            get: function () {
              return this.w3cElement_gobymg$_0.offsetLeft;
            }
          },
          boundingClientRect: {
            get: function () {
              return this.w3cElement_gobymg$_0.getBoundingClientRect();
            }
          },
          render: function () {
          },
          didMount: function () {
          },
          willUnMount: function () {
          },
          callDidMount_gobymg$_0: function () {
            var tmp$0;
            tmp$0 = this.childNodes.iterator();
            while (tmp$0.hasNext()) {
              var child = tmp$0.next();
              if (Kotlin.isType(child, _.fg.elements.Element)) {
                child.callDidMount_gobymg$_0();
                child.didMount();
              }
            }
          },
          addClass_bx842b$: function (selector) {
            this.addClass_61zpoe$(selector.value);
          },
          addClass_61zpoe$: function (name) {
            this.w3cElement_gobymg$_0.classList.add(name);
          },
          removeClass_bx842b$: function (selector) {
            this.removeClass_61zpoe$(selector.value);
          },
          removeClass_61zpoe$: function (name) {
            this.w3cElement_gobymg$_0.classList.remove(name);
          },
          removeClasses: function () {
            var tmp$0;
            while (this.w3cElement_gobymg$_0.classList.length > 0) {
              this.w3cElement_gobymg$_0.classList.remove((tmp$0 = this.w3cElement_gobymg$_0.classList[0]) != null ? tmp$0 : Kotlin.throwNPE());
            }
          },
          removeClasses_ic64ld$: function (predicate) {
            var tmp$0, tmp$1;
            if (this.w3cElement_gobymg$_0.classList.length === 0) {
              return;
            }
            tmp$0 = Kotlin.kotlin.ranges.downTo_rksjo2$(Math.max(0, this.w3cElement_gobymg$_0.classList.length - 1), 0).iterator();
            while (tmp$0.hasNext()) {
              var i = tmp$0.next();
              var currClass = (tmp$1 = this.w3cElement_gobymg$_0.classList[i]) != null ? tmp$1 : Kotlin.throwNPE();
              if (predicate(currClass)) {
                this.w3cElement_gobymg$_0.classList.remove(currClass);
              }
            }
          },
          toggleClass_ivxn3r$: function (name, force) {
            if (force === void 0)
              force = false;
            this.w3cElement_gobymg$_0.classList.toggle(name, force);
          },
          unaryPlus_pdl1w0$: function ($receiver) {
            this.appendChild_sr04hg$(new _.fg.elements.Text($receiver));
          },
          show: function () {
            if (this.hidden) {
              this._style.display = this._displayBeforeHiding_gobymg$_0;
            }
          },
          hide: function () {
            if (!this.hidden) {
              this._displayBeforeHiding_gobymg$_0 = this._style.display;
              this._style.display = 'none';
            }
          },
          traverseElements_su6ycz$: function (each) {
            var tmp$0;
            tmp$0 = this.childElements.iterator();
            while (tmp$0.hasNext()) {
              var child = tmp$0.next();
              var continueTraversing = each(child);
              if (!continueTraversing) {
                break;
              }
              child.traverseElements_su6ycz$(each);
            }
          },
          getComputedStyle_61zpoe$: function (property) {
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
          },
          onResized_qyxj07$: function (listener) {
            console.log('Element.onResized');
            this.resizedListeners_gobymg$_0.add_za3rmp$(listener);
            if (this.resizedListeners_gobymg$_0.size === 1 && this.resizeSensor_gobymg$_0 == null) {
              var sensor = new _.fg.elements.Element.ResizeSensor(this, this, this.resizedListeners_gobymg$_0);
              this.resizeSensor_gobymg$_0 = sensor;
              sensor.init();
            }
          },
          unResized_qyxj07$: function (listener) {
            var tmp$0;
            console.log('Element.unResized');
            this.resizedListeners_gobymg$_0.remove_za3rmp$(listener);
            if (this.resizedListeners_gobymg$_0.isEmpty()) {
              (tmp$0 = this.resizeSensor_gobymg$_0) != null ? tmp$0.destroy() : null;
            }
          }
        }, /** @lends _.fg.elements.Element */ {
          ResizeSensor: Kotlin.createClass(null, function ResizeSensor($outer, element, resizedListeners) {
            this.$outer = $outer;
            this.element = element;
            this.resizedListeners = resizedListeners;
            this.sensorStyle_0 = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            this.initialized_0 = false;
            this.sensor$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.ResizeSensor.sensor_0$f(this));
            this.dirtyHeight_0 = false;
            this.dirtyWidth_0 = false;
            this.cachedWidth_0 = -1.0;
            this.cachedHeight_0 = -1.0;
            this.lastWidth_0 = -1.0;
            this.lastHeight_0 = -1.0;
            this.scrollHandler_0 = _.fg.elements.Element.ResizeSensor.scrollHandler_0$f(this);
            this.dirtyChecking_0 = _.fg.elements.Element.ResizeSensor.dirtyChecking_0$f(this);
          }, /** @lends _.fg.elements.Element.ResizeSensor.prototype */ {
            sensor_0: {
              get: function () {
                return Kotlin.kotlin.getValue_em0fd4$(this.sensor$delegate, this, new Kotlin.PropertyMetadata('sensor'));
              }
            },
            init: function () {
              if (!this.initialized_0) {
                this.initialized_0 = true;
                console.log('ResizeSensor.init: sensor not initialized, initializing...');
                window.requestAnimationFrame(_.fg.elements.Element.ResizeSensor.init$f(this));
              }
               else {
                console.log('ResizeSensor.init: sensor already initialized');
              }
            },
            destroy: function () {
              console.log('ResizeSensor.destroy');
              this.sensor_0.removeSelf();
            },
            notifyResizeListeners_0: function (event) {
              var tmp$0;
              tmp$0 = this.resizedListeners.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                element(event);
              }
            },
            runDirtyChecking_0: function () {
              window.requestAnimationFrame(this.dirtyChecking_0);
            },
            initializeSensor_0: function () {
              this.element.appendChild_sr04hg$(this.sensor_0);
              if (Kotlin.equals(this.getComputedPosition_0(), 'static')) {
                this.element.style.position = _.fg.elements.style.typed.Position.relative;
              }
              this.sensor_0.reset();
              this.runDirtyChecking_0();
              _.fg.elements.onScroll_m2anqv$(this.sensor_0.expandSensor, this.scrollHandler_0);
              _.fg.elements.onScroll_m2anqv$(this.sensor_0.shrinkSensor, this.scrollHandler_0);
            },
            getComputedPosition_0: function () {
              return this.element.getComputedStyle_61zpoe$('position');
            }
          }, /** @lends _.fg.elements.Element.ResizeSensor */ {
            init$f: function (this$ResizeSensor) {
              return function (it) {
                this$ResizeSensor.initializeSensor_0();
              };
            },
            Sensor: Kotlin.createClass(function () {
              return [_.fg.elements.Div];
            }, function Sensor($outer) {
              this.$outer = $outer;
              Sensor.baseInitializer.call(this);
              this.expandSensor$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.ResizeSensor.Sensor.expandSensor$f(this.$outer));
              this.shrinkSensor$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.ResizeSensor.Sensor.shrinkSensor$f(this.$outer));
            }, /** @lends _.fg.elements.Element.ResizeSensor.Sensor.prototype */ {
              expandSensor: {
                get: function () {
                  return Kotlin.kotlin.getValue_em0fd4$(this.expandSensor$delegate, this, new Kotlin.PropertyMetadata('expandSensor'));
                }
              },
              shrinkSensor: {
                get: function () {
                  return Kotlin.kotlin.getValue_em0fd4$(this.shrinkSensor$delegate, this, new Kotlin.PropertyMetadata('shrinkSensor'));
                }
              },
              render: function () {
                _.fg.elements.Div.prototype.render.call(this);
                this.addClass_61zpoe$('resize-sensor');
                this._style.cssText = this.$outer.sensorStyle_0;
                this.appendChild_sr04hg$(this.expandSensor);
                this.appendChild_sr04hg$(this.shrinkSensor);
              },
              reset: function () {
                this.expandSensor.reset();
                this.shrinkSensor.reset();
              }
            }, /** @lends _.fg.elements.Element.ResizeSensor.Sensor */ {
              expandSensor$f: function (this$ResizeSensor) {
                return function () {
                  return new _.fg.elements.Element.ResizeSensor.SensorExpand(this$ResizeSensor);
                };
              },
              shrinkSensor$f: function (this$ResizeSensor) {
                return function () {
                  return new _.fg.elements.Element.ResizeSensor.SensorShrink(this$ResizeSensor);
                };
              }
            }),
            SensorExpand: Kotlin.createClass(function () {
              return [_.fg.elements.Div];
            }, function SensorExpand($outer) {
              this.$outer = $outer;
              SensorExpand.baseInitializer.call(this);
              this.sensorExpandChildSensorStyle_0 = 'position: absolute; left: 0px; top: 0px; transition: 0s; -webkit-transition: 0';
              this.child$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.ResizeSensor.SensorExpand.child$f(this));
            }, /** @lends _.fg.elements.Element.ResizeSensor.SensorExpand.prototype */ {
              child: {
                get: function () {
                  return Kotlin.kotlin.getValue_em0fd4$(this.child$delegate, this, new Kotlin.PropertyMetadata('child'));
                }
              },
              render: function () {
                _.fg.elements.Div.prototype.render.call(this);
                this.addClass_61zpoe$('resize-sensor-expand');
                this._style.cssText = this.$outer.sensorStyle_0;
                this.appendChild_sr04hg$(this.child);
              },
              reset: function () {
                this.child.style.width = _.fg.elements.get_px_s8ev3o$(100000);
                this.child.style.height = _.fg.elements.get_px_s8ev3o$(100000);
                this.w3cElement_gobymg$_0.scrollLeft = 100000;
                this.w3cElement_gobymg$_0.scrollTop = 100000;
              }
            }, /** @lends _.fg.elements.Element.ResizeSensor.SensorExpand */ {
              child$f: function (this$SensorExpand) {
                return function () {
                  var child = new _.fg.elements.Div();
                  child._style.cssText = this$SensorExpand.sensorExpandChildSensorStyle_0;
                  return child;
                };
              }
            }),
            SensorShrink: Kotlin.createClass(function () {
              return [_.fg.elements.Div];
            }, function SensorShrink($outer) {
              this.$outer = $outer;
              SensorShrink.baseInitializer.call(this);
              this.sensorShrinkChildSensorStyle_0 = 'position: absolute; left: 0; top: 0; transition: 0s;';
              this.child$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Element.ResizeSensor.SensorShrink.child$f(this));
            }, /** @lends _.fg.elements.Element.ResizeSensor.SensorShrink.prototype */ {
              child: {
                get: function () {
                  return Kotlin.kotlin.getValue_em0fd4$(this.child$delegate, this, new Kotlin.PropertyMetadata('child'));
                }
              },
              render: function () {
                _.fg.elements.Div.prototype.render.call(this);
                this.addClass_61zpoe$('resize-sensor-shrink');
                this._style.cssText = this.$outer.sensorStyle_0;
                this.appendChild_sr04hg$(this.child);
              },
              reset: function () {
                this.w3cElement_gobymg$_0.scrollLeft = 100000;
                this.w3cElement_gobymg$_0.scrollTop = 100000;
              }
            }, /** @lends _.fg.elements.Element.ResizeSensor.SensorShrink */ {
              child$f: function (this$SensorShrink) {
                return function () {
                  var child = new _.fg.elements.Div();
                  child._style.cssText = this$SensorShrink.sensorShrinkChildSensorStyle_0 + ' width: 200%; height: 200%';
                  return child;
                };
              }
            }),
            sensor_0$f: function (this$ResizeSensor) {
              return function () {
                return new _.fg.elements.Element.ResizeSensor.Sensor(this$ResizeSensor);
              };
            },
            scrollHandler_0$f: function (this$ResizeSensor) {
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
            },
            dirtyChecking_0$f: function (this$ResizeSensor) {
              return function (it) {
                if (!this$ResizeSensor.resizedListeners.isEmpty()) {
                  if (this$ResizeSensor.dirtyWidth_0 || this$ResizeSensor.dirtyHeight_0) {
                    this$ResizeSensor.notifyResizeListeners_0(new _.fg.elements.Element.ResizedEvent(this$ResizeSensor.dirtyWidth_0, this$ResizeSensor.lastWidth_0, this$ResizeSensor.dirtyHeight_0, this$ResizeSensor.lastHeight_0));
                    this$ResizeSensor.dirtyHeight_0 = false;
                    this$ResizeSensor.dirtyWidth_0 = false;
                  }
                  this$ResizeSensor.runDirtyChecking_0();
                }
              };
            }
          }),
          ResizedEvent: Kotlin.createClass(null, function ResizedEvent(widthChanged, width, heightChanged, height) {
            this.widthChanged = widthChanged;
            this.width = width;
            this.heightChanged = heightChanged;
            this.height = height;
          }, /** @lends _.fg.elements.Element.ResizedEvent.prototype */ {
            component1: function () {
              return this.widthChanged;
            },
            component2: function () {
              return this.width;
            },
            component3: function () {
              return this.heightChanged;
            },
            component4: function () {
              return this.height;
            },
            copy_p2cfck$: function (widthChanged, width, heightChanged, height) {
              return new _.fg.elements.Element.ResizedEvent(widthChanged === void 0 ? this.widthChanged : widthChanged, width === void 0 ? this.width : width, heightChanged === void 0 ? this.heightChanged : heightChanged, height === void 0 ? this.height : height);
            },
            toString: function () {
              return 'ResizedEvent(widthChanged=' + Kotlin.toString(this.widthChanged) + (', width=' + Kotlin.toString(this.width)) + (', heightChanged=' + Kotlin.toString(this.heightChanged)) + (', height=' + Kotlin.toString(this.height)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.widthChanged) | 0;
              result = result * 31 + Kotlin.hashCode(this.width) | 0;
              result = result * 31 + Kotlin.hashCode(this.heightChanged) | 0;
              result = result * 31 + Kotlin.hashCode(this.height) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.widthChanged, other.widthChanged) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.heightChanged, other.heightChanged) && Kotlin.equals(this.height, other.height)))));
            }
          }),
          resizedListeners_gobymg$_0$f: function () {
            return Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          },
          style$f: function (this$Element) {
            return function () {
              return new _.fg.elements.style.typed.TypedStyle(this$Element);
            };
          }
        }),
        Img: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Img(src) {
          Img.baseInitializer.call(this, 'img');
          this._alt$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('alt');
          this._width$delegate = _.fg.elements.W3cDelegates.nullableDimensionAttribute_61zpoe$('width');
          this._height$delegate = _.fg.elements.W3cDelegates.nullableDimensionAttribute_61zpoe$('height');
          this._src$delegate = _.fg.elements.W3cDelegates.attribute_o3qcra$(this, src, 'src');
        }, /** @lends _.fg.elements.Img.prototype */ {
          _alt: {
            get: function () {
              return this._alt$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_alt'));
            },
            set: function (_alt_0) {
              this._alt$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_alt'), _alt_0);
            }
          },
          _width: {
            get: function () {
              return this._width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_width'));
            },
            set: function (_width_0) {
              this._width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_width'), _width_0);
            }
          },
          _height: {
            get: function () {
              return this._height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_height'));
            },
            set: function (_height_0) {
              this._height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_height'), _height_0);
            }
          },
          _src: {
            get: function () {
              return this._src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_src'));
            },
            set: function (_src_0) {
              this._src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_src'), _src_0);
            }
          }
        }),
        Button: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Button() {
          Button.baseInitializer.call(this, 'button');
          this._autofocus$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('autocomplete');
          this._disabled$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('disabled');
          this._form$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('form');
          this._formaction$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formaction');
          this._formenctype$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formenctype');
          this._formmethod$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formmethod');
          this._formnovalidate$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formnovalidate');
          this._formtarget$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formtarget');
          this._menu$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('menu');
          this._name$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('name');
          this._type$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('type');
          this._value$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('value');
        }, /** @lends _.fg.elements.Button.prototype */ {
          _autofocus: {
            get: function () {
              return this._autofocus$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_autofocus'));
            },
            set: function (_autofocus_0) {
              this._autofocus$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_autofocus'), _autofocus_0);
            }
          },
          _disabled: {
            get: function () {
              return this._disabled$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_disabled'));
            },
            set: function (_disabled_0) {
              this._disabled$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_disabled'), _disabled_0);
            }
          },
          _form: {
            get: function () {
              return this._form$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_form'));
            },
            set: function (_form_0) {
              this._form$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_form'), _form_0);
            }
          },
          _formaction: {
            get: function () {
              return this._formaction$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formaction'));
            },
            set: function (_formaction_0) {
              this._formaction$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formaction'), _formaction_0);
            }
          },
          _formenctype: {
            get: function () {
              return this._formenctype$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formenctype'));
            },
            set: function (_formenctype_0) {
              this._formenctype$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formenctype'), _formenctype_0);
            }
          },
          _formmethod: {
            get: function () {
              return this._formmethod$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formmethod'));
            },
            set: function (_formmethod_0) {
              this._formmethod$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formmethod'), _formmethod_0);
            }
          },
          _formnovalidate: {
            get: function () {
              return this._formnovalidate$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formnovalidate'));
            },
            set: function (_formnovalidate_0) {
              this._formnovalidate$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formnovalidate'), _formnovalidate_0);
            }
          },
          _formtarget: {
            get: function () {
              return this._formtarget$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formtarget'));
            },
            set: function (_formtarget_0) {
              this._formtarget$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formtarget'), _formtarget_0);
            }
          },
          _menu: {
            get: function () {
              return this._menu$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_menu'));
            },
            set: function (_menu_0) {
              this._menu$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_menu'), _menu_0);
            }
          },
          _name: {
            get: function () {
              return this._name$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_name'));
            },
            set: function (_name_0) {
              this._name$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_name'), _name_0);
            }
          },
          _type: {
            get: function () {
              return this._type$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_type'));
            },
            set: function (_type_0) {
              this._type$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_type'), _type_0);
            }
          },
          _value: {
            get: function () {
              return this._value$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_value'));
            },
            set: function (_value_0) {
              this._value$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_value'), _value_0);
            }
          }
        }),
        Input: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Input$(type) {
          Input$.baseInitializer.call(this, 'input');
          this.value$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('value');
          this._type$delegate = _.fg.elements.W3cDelegates.attribute_o3qcra$(this, type.name, 'type');
          this._accept$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('accept');
          this._alt$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('alt');
          this._autocomplete$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('autocomplete');
          this._autofocus$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('autocomplete');
          this._checked$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('checked');
          this._dirname$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('dirname');
          this._disabled$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('disabled');
          this._form$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('form');
          this._formaction$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formaction');
          this._formenctype$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formenctype');
          this._formmethod$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formmethod');
          this._formnovalidate$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formnovalidate');
          this._formtarget$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('formtarget');
          this._height$delegate = _.fg.elements.W3cDelegates.nullableDimensionAttribute_61zpoe$('height');
          this._inputmode$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('inputmode');
          this._list$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('list');
          this._max$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('max');
          this._maxlength$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('maxlength');
          this._min$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('min');
          this._minlength$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('minlength');
          this._multiple$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('multiple');
          this._name$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('name');
          this._pattern$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('pattern');
          this._placeholder$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('placeholder');
          this._readonly$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('readonly');
          this._required$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('required');
          this._size$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('size');
          this._src$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('src');
          this._step$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('step');
          this._width$delegate = _.fg.elements.W3cDelegates.nullableDimensionAttribute_61zpoe$('width');
        }, /** @lends _.fg.elements.Input.prototype */ {
          _inputElement: {
            get: function () {
              var tmp$0;
              return Kotlin.isType(tmp$0 = Kotlin.callGetter(this, _.fg.elements.Element, 'w3cElement_gobymg$_0'), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
            }
          },
          value: {
            get: function () {
              return this.value$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('value'));
            },
            set: function (value_0) {
              this.value$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('value'), value_0);
            }
          },
          _type: {
            get: function () {
              return this._type$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_type'));
            }
          },
          _accept: {
            get: function () {
              return this._accept$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_accept'));
            },
            set: function (_accept_0) {
              this._accept$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_accept'), _accept_0);
            }
          },
          _alt: {
            get: function () {
              return this._alt$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_alt'));
            },
            set: function (_alt_0) {
              this._alt$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_alt'), _alt_0);
            }
          },
          _autocomplete: {
            get: function () {
              return this._autocomplete$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_autocomplete'));
            },
            set: function (_autocomplete_0) {
              this._autocomplete$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_autocomplete'), _autocomplete_0);
            }
          },
          _autofocus: {
            get: function () {
              return this._autofocus$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_autofocus'));
            },
            set: function (_autofocus_0) {
              this._autofocus$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_autofocus'), _autofocus_0);
            }
          },
          _checked: {
            get: function () {
              return this._checked$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_checked'));
            },
            set: function (_checked_0) {
              this._checked$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_checked'), _checked_0);
            }
          },
          _dirname: {
            get: function () {
              return this._dirname$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_dirname'));
            },
            set: function (_dirname_0) {
              this._dirname$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_dirname'), _dirname_0);
            }
          },
          _disabled: {
            get: function () {
              return this._disabled$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_disabled'));
            },
            set: function (_disabled_0) {
              this._disabled$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_disabled'), _disabled_0);
            }
          },
          _form: {
            get: function () {
              return this._form$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_form'));
            },
            set: function (_form_0) {
              this._form$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_form'), _form_0);
            }
          },
          _formaction: {
            get: function () {
              return this._formaction$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formaction'));
            },
            set: function (_formaction_0) {
              this._formaction$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formaction'), _formaction_0);
            }
          },
          _formenctype: {
            get: function () {
              return this._formenctype$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formenctype'));
            },
            set: function (_formenctype_0) {
              this._formenctype$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formenctype'), _formenctype_0);
            }
          },
          _formmethod: {
            get: function () {
              return this._formmethod$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formmethod'));
            },
            set: function (_formmethod_0) {
              this._formmethod$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formmethod'), _formmethod_0);
            }
          },
          _formnovalidate: {
            get: function () {
              return this._formnovalidate$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formnovalidate'));
            },
            set: function (_formnovalidate_0) {
              this._formnovalidate$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formnovalidate'), _formnovalidate_0);
            }
          },
          _formtarget: {
            get: function () {
              return this._formtarget$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formtarget'));
            },
            set: function (_formtarget_0) {
              this._formtarget$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formtarget'), _formtarget_0);
            }
          },
          _height: {
            get: function () {
              return this._height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_height'));
            },
            set: function (_height_0) {
              this._height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_height'), _height_0);
            }
          },
          _inputmode: {
            get: function () {
              return this._inputmode$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_inputmode'));
            },
            set: function (_inputmode_0) {
              this._inputmode$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_inputmode'), _inputmode_0);
            }
          },
          _list: {
            get: function () {
              return this._list$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_list'));
            },
            set: function (_list_0) {
              this._list$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_list'), _list_0);
            }
          },
          _max: {
            get: function () {
              return this._max$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_max'));
            },
            set: function (_max_0) {
              this._max$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_max'), _max_0);
            }
          },
          _maxlength: {
            get: function () {
              return this._maxlength$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_maxlength'));
            },
            set: function (_maxlength_0) {
              this._maxlength$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_maxlength'), _maxlength_0);
            }
          },
          _min: {
            get: function () {
              return this._min$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_min'));
            },
            set: function (_min_0) {
              this._min$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_min'), _min_0);
            }
          },
          _minlength: {
            get: function () {
              return this._minlength$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_minlength'));
            },
            set: function (_minlength_0) {
              this._minlength$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_minlength'), _minlength_0);
            }
          },
          _multiple: {
            get: function () {
              return this._multiple$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_multiple'));
            },
            set: function (_multiple_0) {
              this._multiple$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_multiple'), _multiple_0);
            }
          },
          _name: {
            get: function () {
              return this._name$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_name'));
            },
            set: function (_name_0) {
              this._name$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_name'), _name_0);
            }
          },
          _pattern: {
            get: function () {
              return this._pattern$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_pattern'));
            },
            set: function (_pattern_0) {
              this._pattern$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_pattern'), _pattern_0);
            }
          },
          _placeholder: {
            get: function () {
              return this._placeholder$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_placeholder'));
            },
            set: function (_placeholder_0) {
              this._placeholder$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_placeholder'), _placeholder_0);
            }
          },
          _readonly: {
            get: function () {
              return this._readonly$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_readonly'));
            },
            set: function (_readonly_0) {
              this._readonly$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_readonly'), _readonly_0);
            }
          },
          _required: {
            get: function () {
              return this._required$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_required'));
            },
            set: function (_required_0) {
              this._required$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_required'), _required_0);
            }
          },
          _size: {
            get: function () {
              return this._size$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_size'));
            },
            set: function (_size_0) {
              this._size$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_size'), _size_0);
            }
          },
          _src: {
            get: function () {
              return this._src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_src'));
            },
            set: function (_src_0) {
              this._src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_src'), _src_0);
            }
          },
          _step: {
            get: function () {
              return this._step$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_step'));
            },
            set: function (_step_0) {
              this._step$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_step'), _step_0);
            }
          },
          _width: {
            get: function () {
              return this._width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_width'));
            },
            set: function (_width_0) {
              this._width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_width'), _width_0);
            }
          }
        }, /** @lends _.fg.elements.Input */ {
          Type: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function Type() {
            Type.baseInitializer.call(this);
          }, function () {
            return {
              hidden: function () {
                return new _.fg.elements.Input.Type();
              },
              text: function () {
                return new _.fg.elements.Input.Type();
              },
              number: function () {
                return new _.fg.elements.Input.Type();
              },
              radio: function () {
                return new _.fg.elements.Input.Type();
              }
            };
          })
        }),
        InputText: Kotlin.createClass(function () {
          return [_.fg.elements.Input];
        }, function InputText() {
          InputText.baseInitializer.call(this, _.fg.elements.Input.Type.text);
        }),
        InputRadio: Kotlin.createClass(function () {
          return [_.fg.elements.Input];
        }, function InputRadio() {
          InputRadio.baseInitializer.call(this, _.fg.elements.Input.Type.radio);
        }),
        InputNumber: Kotlin.createClass(function () {
          return [_.fg.elements.Input];
        }, function InputNumber() {
          InputNumber.baseInitializer.call(this, _.fg.elements.Input.Type.number);
        }, /** @lends _.fg.elements.InputNumber.prototype */ {
          doubleValue: {
            get: function () {
              var tmp$0;
              if (Kotlin.callGetter(this, _.fg.elements.Input, 'value') == null) {
                return null;
              }
               else {
                return Kotlin.safeParseDouble((tmp$0 = Kotlin.callGetter(this, _.fg.elements.Input, 'value')) != null ? tmp$0 : Kotlin.throwNPE());
              }
            },
            set: function (value) {
              Kotlin.callSetter(this, _.fg.elements.Input, 'value', Kotlin.toString(value));
            }
          },
          intValue: {
            get: function () {
              var tmp$0;
              if (Kotlin.callGetter(this, _.fg.elements.Input, 'value') == null) {
                return null;
              }
               else {
                return Kotlin.safeParseInt((tmp$0 = Kotlin.callGetter(this, _.fg.elements.Input, 'value')) != null ? tmp$0 : Kotlin.throwNPE());
              }
            },
            set: function (value) {
              Kotlin.callSetter(this, _.fg.elements.Input, 'value', Kotlin.toString(value));
            }
          }
        }),
        Label: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Label(labelFor) {
          if (labelFor === void 0)
            labelFor = null;
          Label.baseInitializer.call(this, 'label');
          this._for$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('for');
          this._for = labelFor;
        }, /** @lends _.fg.elements.Label.prototype */ {
          _for: {
            get: function () {
              return this._for$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_for'));
            },
            set: function (_for_0) {
              this._for$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_for'), _for_0);
            }
          },
          render: function () {
            _.fg.elements.Element.prototype.render.call(this);
          }
        }),
        P: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function P() {
          P.baseInitializer.call(this, 'p');
        }),
        Hr: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Hr() {
          Hr.baseInitializer.call(this, 'hr');
        }),
        Pre: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Pre() {
          Pre.baseInitializer.call(this, 'pre');
        }),
        Blockquote: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Blockquote() {
          Blockquote.baseInitializer.call(this, 'blockquote');
        }),
        Ol: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Ol() {
          Ol.baseInitializer.call(this, 'ol');
        }),
        Ul: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Ul() {
          Ul.baseInitializer.call(this, 'ul');
        }),
        Li: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Li() {
          Li.baseInitializer.call(this, 'li');
        }),
        Dl: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Dl() {
          Dl.baseInitializer.call(this, 'dl');
        }),
        Dt: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Dt() {
          Dt.baseInitializer.call(this, 'dt');
        }),
        Dd: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Dd() {
          Dd.baseInitializer.call(this, 'dd');
        }),
        Figure: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Figure() {
          Figure.baseInitializer.call(this, 'figure');
        }),
        Figcaption: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Figcaption() {
          Figcaption.baseInitializer.call(this, 'figcaption');
        }),
        Div: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Div() {
          Div.baseInitializer.call(this, 'div');
        }),
        Main: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Main() {
          Main.baseInitializer.call(this, 'main');
        }),
        Html: Kotlin.createClass(null, function Html(w3cElement) {
          var tmp$0;
          if (w3cElement === void 0)
            w3cElement = (tmp$0 = document.documentElement) != null ? tmp$0 : Kotlin.throwNPE();
          this.w3cElement = w3cElement;
          this.stylesheet$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Html.stylesheet_0$f);
          this.registeredClassStyles_0 = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([]);
        }, /** @lends _.fg.elements.Html.prototype */ {
          stylesheet_0: {
            get: function () {
              return Kotlin.kotlin.getValue_em0fd4$(this.stylesheet$delegate, this, new Kotlin.PropertyMetadata('stylesheet'));
            }
          },
          init: function () {
            this.addCSSRule_3cka69$(_.fg.elements.with_ji1yox$(new _.fg.style.AnyRule(), _.fg.elements.Html.init$f));
            this.addCSSRule_3cka69$(_.fg.elements.with_ji1yox$(new _.fg.style.TypeRule(new _.fg.elements.TypeSelector('html')), _.fg.elements.Html.init$f_0));
            this.addCSSRule_3cka69$(_.fg.elements.with_ji1yox$(new _.fg.style.TypeRule(new _.fg.elements.TypeSelector('body')), _.fg.elements.Html.init$f_1));
            _.fg.elements.BODY.init_0();
            window.setTimeout(_.fg.elements.Html.init$f_2, 10);
          },
          registerStyle_78phyd$: function (styledClass) {
            var rule = _.fg.elements.Html.registerStyle_78phyd$rule(styledClass);
            var rule_0 = rule(styledClass, styledClass.rule);
            this.registerCSSRule_3cka69$(rule_0);
          },
          registerCSSRule_3cka69$: function (rule) {
            var existing = this.registeredClassStyles_0.put_wn2jw4$(rule.selector.toString(), rule);
            if (existing == null) {
              this.addCSSRule_3cka69$(rule);
            }
          },
          addCSSRule_3cka69$: function (rule) {
            var ruleText = rule.cssText();
            console.log(ruleText);
            this.stylesheet_0.insertRule(ruleText, this.stylesheet_0.cssRules.length);
            if (!Kotlin.isType(rule, _.fg.style.KeyframesRule)) {
              var tmp$0;
              tmp$0 = rule._childStyles_1851tg$_0.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                this.registerCSSRule_3cka69$(element);
              }
            }
          }
        }, /** @lends _.fg.elements.Html */ {
          init$f: function () {
            this.boxSizing = 'border-box';
          },
          init$f_0: function () {
            this.height = '100%';
          },
          init$f_1: function () {
            this.height = '100%';
          },
          init$f_2: function () {
            _.fg.elements.BODY.callDidMount_gobymg$_0();
          },
          registerStyle_78phyd$rule: function (closure$styledClass) {
            return function (styledClass, init) {
              if (init === void 0)
                init = closure$styledClass.rule;
              var style_0 = new _.fg.style.ClassRule(styledClass.classSelector);
              init.call(style_0);
              return style_0;
            };
          },
          Html: Kotlin.createObject(null, function Html() {
          }),
          object_initializer$: function () {
            _.fg.elements.Html.Html;
          },
          stylesheet_0$f: function () {
            var tmp$0;
            return Kotlin.isType(tmp$0 = document.styleSheets[0], CSSStyleSheet) ? tmp$0 : Kotlin.throwCCE();
          }
        }),
        onDOMContentLoaded_f0hikj$: function ($receiver, listener) {
          document.addEventListener('DOMContentLoaded', listener);
        },
        onLoad_ot58vi$: function ($receiver, listener) {
          $receiver.window.addEventListener('load', listener);
        },
        Node: Kotlin.createClass(null, function Node$(w3cNode) {
          this.w3cNode_w5cupa$_0 = w3cNode;
          this._childNodes_w5cupa$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this._childrenMountInstructions_w5cupa$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.rendering_w5cupa$_0 = false;
          this.rendered_w5cupa$_0 = false;
          this._parentNode_w5cupa$_0 = null;
        }, /** @lends _.fg.elements.Node.prototype */ {
          childNodes: {
            get: function () {
              return this._childNodes_w5cupa$_0;
            }
          },
          rendering: {
            get: function () {
              return this.rendering_w5cupa$_0;
            },
            set: function (rendering_0) {
              this.rendering_w5cupa$_0 = rendering_0;
            }
          },
          rendered: {
            get: function () {
              return this.rendered_w5cupa$_0;
            },
            set: function (rendered_0) {
              this.rendered_w5cupa$_0 = rendered_0;
            }
          },
          _nodeName: {
            get: function () {
              return this.w3cNode_w5cupa$_0.nodeName;
            }
          },
          mounted: {
            get: function () {
              var tmp$0, tmp$1, tmp$2;
              return (tmp$2 = (tmp$1 = (tmp$0 = this._parentNode_w5cupa$_0) != null ? tmp$0.w3cNode_w5cupa$_0 : null) != null ? tmp$1.contains(this.w3cNode_w5cupa$_0) : null) != null ? tmp$2 : false;
            }
          },
          textContent: {
            get: function () {
              return this.w3cNode_w5cupa$_0.textContent;
            },
            set: function (value) {
              this.removeChildren();
              if (value != null) {
                this.w3cNode_w5cupa$_0.textContent = value;
                this._childNodes_w5cupa$_0.addAll_wtfk93$(this.parseChildrenFromDOM_w5cupa$_0());
              }
            }
          },
          hasChild_sr04hg$: function (child) {
            return this._childNodes_w5cupa$_0.contains_za3rmp$(child);
          },
          prependChild_sr04hg$: function (node) {
            if (this._childNodes_w5cupa$_0.isEmpty()) {
              this.appendChild_sr04hg$(node);
              return node;
            }
             else {
              this.insertBefore_p937mc$(node, Kotlin.kotlin.collections.first_a7ptmv$(this._childNodes_w5cupa$_0));
              return node;
            }
          },
          insertBefore_p937mc$: function (node, child) {
            if (node._parentNode_w5cupa$_0 != null) {
              throw new Kotlin.IllegalStateException("Node cannot be added. It's already added. Please remove it first.");
            }
            var childIndex = this._childNodes_w5cupa$_0.indexOf_za3rmp$(child);
            if (childIndex === -1) {
              throw new Kotlin.IllegalArgumentException('reference ' + child.w3cNode_w5cupa$_0.nodeName + ' is expected as child');
            }
            node._parentNode_w5cupa$_0 = this;
            if (Kotlin.isType(node, _.fg.elements.Element) && (this.rendering || this.rendered) && !child.rendered) {
              node.rendering = true;
              node.render();
              node.rendered = true;
              node.rendering = false;
              node.renderChildren_w5cupa$_0();
            }
            var mountFn = _.fg.elements.Node.insertBefore_p937mc$f(this, child);
            if (this.mounted) {
              this.mountChild_fhrjh3$_0(mountFn, node);
              this.mountChildren_w5cupa$_0();
            }
             else {
              this._childrenMountInstructions_w5cupa$_0.add_za3rmp$(new Kotlin.kotlin.Pair(mountFn, node));
            }
            this._childNodes_w5cupa$_0.add_vux3hl$(childIndex, node);
            this.childAdded_sr04hg$(node);
            return node;
          },
          appendChild_sr04hg$: function (node) {
            if (node._parentNode_w5cupa$_0 != null) {
              throw new Kotlin.IllegalStateException("Node cannot be added. It's already added. Please remove it first.");
            }
            node._parentNode_w5cupa$_0 = this;
            if (Kotlin.isType(node, _.fg.elements.Element) && (this.rendering || this.rendered) && !node.rendered) {
              node.rendering = true;
              node.render();
              node.rendered = true;
              node.rendering = false;
              node.renderChildren_w5cupa$_0();
            }
            var mountFn = _.fg.elements.Node.appendChild_sr04hg$f(this);
            if (this.mounted) {
              this.mountChild_fhrjh3$_0(mountFn, node);
              node.mountChildren_w5cupa$_0();
            }
             else {
              this._childrenMountInstructions_w5cupa$_0.add_za3rmp$(new Kotlin.kotlin.Pair(mountFn, node));
            }
            this._childNodes_w5cupa$_0.add_za3rmp$(node);
            this.childAdded_sr04hg$(node);
            return node;
          },
          parseChildrenFromDOM_w5cupa$_0: function () {
            var tmp$0;
            var nodes = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            var childW3cNodes = this.w3cNode_w5cupa$_0.childNodes;
            tmp$0 = childW3cNodes.length - 1;
            for (var i = 0; i <= tmp$0; i++) {
              var childNode = childW3cNodes[i];
              if (Kotlin.isType(childNode, HTMLElement))
                nodes.add_za3rmp$(new _.fg.elements.Element(void 0, childNode));
              else if (Kotlin.isType(childNode, Text))
                nodes.add_za3rmp$(new _.fg.elements.Text(void 0, childNode));
            }
            return nodes;
          },
          renderChildren_w5cupa$_0: function () {
            var tmp$0;
            tmp$0 = this._childNodes_w5cupa$_0.iterator();
            while (tmp$0.hasNext()) {
              var child = tmp$0.next();
              if (Kotlin.isType(child, _.fg.elements.Element) && !child.rendered) {
                child.render();
                child.rendered = true;
              }
              child.renderChildren_w5cupa$_0();
            }
          },
          mountChild_fhrjh3$_0: function (mountFn, child) {
            console.info(Kotlin.kotlin.js.get_jsClass_s8jyvl$(this).name + '.mountChild(' + Kotlin.kotlin.js.get_jsClass_s8jyvl$(child).name + ') ');
            mountFn(child);
            if (Kotlin.isType(child, _.fg.elements.Element)) {
              child.didMount();
            }
          },
          mountChildren_w5cupa$_0: function () {
            var tmp$0, tmp$1;
            tmp$0 = this._childrenMountInstructions_w5cupa$_0.iterator();
            while (tmp$0.hasNext()) {
              var mountFn_n_child = tmp$0.next();
              this.mountChild_fhrjh3$_0(mountFn_n_child.first, mountFn_n_child.second);
            }
            this._childrenMountInstructions_w5cupa$_0.clear();
            tmp$1 = this._childNodes_w5cupa$_0.iterator();
            while (tmp$1.hasNext()) {
              var child = tmp$1.next();
              child.mountChildren_w5cupa$_0();
            }
          },
          removeChildren: function () {
            while (!this._childNodes_w5cupa$_0.isEmpty()) {
              this.removeChild_sr04hg$(Kotlin.kotlin.collections.first_a7ptmv$(this._childNodes_w5cupa$_0));
            }
          },
          removeChild_sr04hg$: function (node) {
            if (Kotlin.isType(node, _.fg.elements.Element)) {
              node.willUnMount();
            }
            if (this.mounted) {
              this.w3cNode_w5cupa$_0.removeChild(node.w3cNode_w5cupa$_0);
            }
            this._childNodes_w5cupa$_0.remove_za3rmp$(node);
            node._parentNode_w5cupa$_0 = null;
            this.childRemoved_sr04hg$(this);
          },
          removeSelf: function () {
            var tmp$0;
            (tmp$0 = this._parentNode_w5cupa$_0) != null ? tmp$0.removeChild_sr04hg$(this) : null;
          },
          childAdded_sr04hg$: function (child) {
          },
          childRemoved_sr04hg$: function (child) {
          }
        }, /** @lends _.fg.elements.Node */ {
          insertBefore_p937mc$f: function (this$Node, closure$child) {
            return function (it) {
              this$Node.w3cNode_w5cupa$_0.insertBefore(it.w3cNode_w5cupa$_0, closure$child.w3cNode_w5cupa$_0);
            };
          },
          appendChild_sr04hg$f: function (this$Node) {
            return function (it) {
              this$Node.w3cNode_w5cupa$_0.appendChild(it.w3cNode_w5cupa$_0);
            };
          }
        }),
        Article: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Article() {
          Article.baseInitializer.call(this, 'article');
        }),
        Section: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Section() {
          Section.baseInitializer.call(this, 'section');
        }),
        Nav: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Nav() {
          Nav.baseInitializer.call(this, 'nav');
        }),
        Aside: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Aside() {
          Aside.baseInitializer.call(this, 'aside');
        }),
        H1: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H1() {
          H1.baseInitializer.call(this, 'h1');
        }),
        H2: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H2() {
          H2.baseInitializer.call(this, 'h2');
        }),
        H3: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H3() {
          H3.baseInitializer.call(this, 'h3');
        }),
        H4: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H4() {
          H4.baseInitializer.call(this, 'h4');
        }),
        H5: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H5() {
          H5.baseInitializer.call(this, 'h5');
        }),
        H6: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function H6() {
          H6.baseInitializer.call(this, 'h6');
        }),
        Header: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Header() {
          Header.baseInitializer.call(this, 'header');
        }),
        Footer: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Footer() {
          Footer.baseInitializer.call(this, 'footer');
        }),
        Address: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Address() {
          Address.baseInitializer.call(this, 'address');
        }),
        Selector: Kotlin.createClass(null, function Selector() {
        }, null, /** @lends _.fg.elements.Selector */ {
          Statics: Kotlin.createObject(null, function Statics() {
            _.fg.elements.Selector.Statics.ANY = new _.fg.elements.AnySelector();
          }),
          object_initializer$: function () {
            _.fg.elements.Selector.Statics;
          }
        }),
        AnySelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function AnySelector() {
          AnySelector.baseInitializer.call(this);
        }, /** @lends _.fg.elements.AnySelector.prototype */ {
          toString: function () {
            return '*';
          }
        }, /** @lends _.fg.elements.AnySelector */ {
          Statics: Kotlin.createObject(null, function Statics() {
            _.fg.elements.AnySelector.Statics.GET = new _.fg.elements.AnySelector();
          }),
          object_initializer$: function () {
            _.fg.elements.AnySelector.Statics;
          }
        }),
        AnimationNameSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function AnimationNameSelector(value) {
          AnimationNameSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.AnimationNameSelector.prototype */ {
          toString: function () {
            return this.value;
          }
        }),
        KeyframeSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function KeyframeSelector(value) {
          KeyframeSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.KeyframeSelector.prototype */ {
          toString: function () {
            return this.value;
          }
        }),
        TypeSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function TypeSelector(value) {
          TypeSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.TypeSelector.prototype */ {
          toString: function () {
            return this.value;
          }
        }),
        ClassSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function ClassSelector(value) {
          ClassSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.ClassSelector.prototype */ {
          toString: function () {
            return '.' + this.value;
          }
        }),
        IdSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function IdSelector(value) {
          IdSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.IdSelector.prototype */ {
          toString: function () {
            return '#' + this.value;
          }
        }),
        AttrSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function AttrSelector(value) {
          AttrSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.AttrSelector.prototype */ {
          toString: function () {
            return '[' + this.value + ']';
          }
        }),
        PseudoClassSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function PseudoClassSelector(value) {
          PseudoClassSelector.baseInitializer.call(this);
          this.value = value;
        }, /** @lends _.fg.elements.PseudoClassSelector.prototype */ {
          toString: function () {
            return ':' + this.value;
          }
        }),
        CompositeSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function CompositeSelector(a, combinator, b) {
          CompositeSelector.baseInitializer.call(this);
          this.a = a;
          this.combinator = combinator;
          this.b = b;
        }, /** @lends _.fg.elements.CompositeSelector.prototype */ {
          toString: function () {
            return this.a.toString() + ' ' + this.combinator + ' ' + this.b.toString();
          }
        }),
        ChildSelector: Kotlin.createClass(function () {
          return [_.fg.elements.CompositeSelector];
        }, function ChildSelector(a, b) {
          ChildSelector.baseInitializer.call(this, a, '>', b);
        }),
        AdjacentSiblingSelector: Kotlin.createClass(function () {
          return [_.fg.elements.CompositeSelector];
        }, function AdjacentSiblingSelector(a, b) {
          AdjacentSiblingSelector.baseInitializer.call(this, a, '+', b);
        }),
        GeneralSiblingSelector: Kotlin.createClass(function () {
          return [_.fg.elements.CompositeSelector];
        }, function GeneralSiblingSelector(a, b) {
          GeneralSiblingSelector.baseInitializer.call(this, a, '~', b);
        }),
        DescendantSelector: Kotlin.createClass(function () {
          return [_.fg.elements.CompositeSelector];
        }, function DescendantSelector(a, b) {
          DescendantSelector.baseInitializer.call(this, a, '', b);
        }, /** @lends _.fg.elements.DescendantSelector.prototype */ {
          toString: function () {
            return this.a.toString() + ' ' + this.b.toString();
          }
        }),
        AndSelector: Kotlin.createClass(function () {
          return [_.fg.elements.CompositeSelector];
        }, function AndSelector(a, b) {
          AndSelector.baseInitializer.call(this, a, '', b);
        }, /** @lends _.fg.elements.AndSelector.prototype */ {
          toString: function () {
            return this.a.toString() + this.b.toString();
          }
        }),
        NotSelector: Kotlin.createClass(function () {
          return [_.fg.elements.Selector];
        }, function NotSelector(selector) {
          NotSelector.baseInitializer.call(this);
          this.selector = selector;
        }, /** @lends _.fg.elements.NotSelector.prototype */ {
          toString: function () {
            return ':not(' + this.selector + ')';
          }
        }),
        toSelector_pdl1w0$: function ($receiver) {
          if (Kotlin.kotlin.text.startsWith_41xvrb$($receiver, ':')) {
            return new _.fg.elements.PseudoClassSelector(Kotlin.kotlin.text.substringAfter_ex0kps$($receiver, ':'));
          }
           else if (Kotlin.kotlin.text.startsWith_41xvrb$($receiver, '.')) {
            return new _.fg.elements.ClassSelector(Kotlin.kotlin.text.substringAfter_ex0kps$($receiver, '.'));
          }
           else if (Kotlin.kotlin.text.startsWith_41xvrb$($receiver, '#')) {
            return new _.fg.elements.IdSelector(Kotlin.kotlin.text.substringAfter_ex0kps$($receiver, '#'));
          }
           else if (Kotlin.equals($receiver, '*')) {
            return new _.fg.elements.AnySelector();
          }
           else {
            return new _.fg.elements.TypeSelector($receiver);
          }
        },
        toClassSelector_pdl1w0$: function ($receiver) {
          if (Kotlin.kotlin.text.startsWith_41xvrb$($receiver, '.')) {
            return new _.fg.elements.ClassSelector(Kotlin.kotlin.text.substringAfter_ex0kps$($receiver, '.'));
          }
           else {
            return new _.fg.elements.ClassSelector($receiver);
          }
        },
        StyledClass: Kotlin.createTrait(null),
        A: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function A() {
          A.baseInitializer.call(this, 'a');
          this._href$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('href');
          this._target$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('target');
          this._download$delegate = _.fg.elements.W3cDelegates.nullableBooleanAttribute_61zpoe$('dowload');
          this._rel$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('rel');
          this._hreflang$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('hreflang');
          this._type$delegate = _.fg.elements.W3cDelegates.nullableAttribute_61zpoe$('type');
        }, /** @lends _.fg.elements.A.prototype */ {
          _href: {
            get: function () {
              return this._href$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_href'));
            },
            set: function (_href_0) {
              this._href$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_href'), _href_0);
            }
          },
          _target: {
            get: function () {
              return this._target$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_target'));
            },
            set: function (_target_0) {
              this._target$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_target'), _target_0);
            }
          },
          _download: {
            get: function () {
              return this._download$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_download'));
            },
            set: function (_download_0) {
              this._download$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_download'), _download_0);
            }
          },
          _rel: {
            get: function () {
              return this._rel$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_rel'));
            },
            set: function (_rel_0) {
              this._rel$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_rel'), _rel_0);
            }
          },
          _hreflang: {
            get: function () {
              return this._hreflang$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_hreflang'));
            },
            set: function (_hreflang_0) {
              this._hreflang$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_hreflang'), _hreflang_0);
            }
          },
          _type: {
            get: function () {
              return this._type$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_type'));
            },
            set: function (_type_0) {
              this._type$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_type'), _type_0);
            }
          }
        }),
        Br: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Br() {
          Br.baseInitializer.call(this, 'br');
        }),
        Span: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Span() {
          Span.baseInitializer.call(this, 'span');
        }),
        I: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function I() {
          I.baseInitializer.call(this, 'i');
        }),
        Text: Kotlin.createClass(function () {
          return [_.fg.elements.Node];
        }, function Text$(text_0, existingNode) {
          if (text_0 === void 0)
            text_0 = null;
          if (existingNode === void 0)
            existingNode = null;
          Text$.baseInitializer.call(this, existingNode != null ? existingNode : document.createTextNode(text_0 != null ? text_0 : Kotlin.throwNPE()));
        }),
        W3cDelegates: Kotlin.createObject(null, function W3cDelegates() {
        }, /** @lends _.fg.elements.W3cDelegates.prototype */ {
          attribute_o3qcra$: function (receiver, initialValue, attributeName) {
            return new _.fg.elements.W3cDelegates.Attribute(receiver, initialValue, attributeName);
          },
          nullableAttribute_61zpoe$: function (attributeName) {
            return new _.fg.elements.W3cDelegates.NullableAttribute(attributeName);
          },
          nullableBooleanAttribute_61zpoe$: function (attributeName) {
            return new _.fg.elements.W3cDelegates.NullableBooleanAttribute(attributeName);
          },
          nullableDimensionAttribute_61zpoe$: function (attributeName) {
            return new _.fg.elements.W3cDelegates.NullableDimensionAttribute(attributeName);
          }
        }, /** @lends _.fg.elements.W3cDelegates */ {
          Attribute: Kotlin.createClass(function () {
            return [Kotlin.kotlin.properties.ReadWriteProperty];
          }, function Attribute(receiver, initialValue, attributeName) {
            this.attributeName = attributeName;
            receiver.w3cElement_gobymg$_0.setAttribute(this.attributeName, initialValue);
          }, /** @lends _.fg.elements.W3cDelegates.Attribute.prototype */ {
            getValue_dsk1ci$: function (thisRef, property) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = this.attributeName;
              return (tmp$0 = w3cElement.getAttribute(attributeName)) != null ? tmp$0 : Kotlin.throwNPE();
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = this.attributeName;
              w3cElement.setAttribute(attributeName, value);
            }
          }),
          NullableAttribute: Kotlin.createClass(function () {
            return [Kotlin.kotlin.properties.ReadWriteProperty];
          }, function NullableAttribute(attributeName) {
            if (attributeName === void 0)
              attributeName = null;
            this.attributeName = attributeName;
          }, /** @lends _.fg.elements.W3cDelegates.NullableAttribute.prototype */ {
            getValue_dsk1ci$: function (thisRef, property) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              return w3cElement.getAttribute(attributeName);
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              if (value != null) {
                w3cElement.setAttribute(attributeName, value);
              }
               else {
                if (w3cElement.hasAttribute(attributeName)) {
                  w3cElement.removeAttribute(attributeName);
                }
              }
            }
          }),
          NullableBooleanAttribute: Kotlin.createClass(function () {
            return [Kotlin.kotlin.properties.ReadWriteProperty];
          }, function NullableBooleanAttribute(attributeName) {
            if (attributeName === void 0)
              attributeName = null;
            this.attributeName = attributeName;
          }, /** @lends _.fg.elements.W3cDelegates.NullableBooleanAttribute.prototype */ {
            getValue_dsk1ci$: function (thisRef, property) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              var $receiver = w3cElement.getAttribute(attributeName);
              return !($receiver == null || $receiver.length === 0);
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              if (value != null && value) {
                w3cElement.setAttribute(attributeName, attributeName);
              }
               else {
                if (w3cElement.hasAttribute(attributeName)) {
                  w3cElement.removeAttribute(attributeName);
                }
              }
            }
          }),
          NullableDimensionAttribute: Kotlin.createClass(function () {
            return [Kotlin.kotlin.properties.ReadWriteProperty];
          }, function NullableDimensionAttribute(attributeName) {
            if (attributeName === void 0)
              attributeName = null;
            this.attributeName = attributeName;
          }, /** @lends _.fg.elements.W3cDelegates.NullableDimensionAttribute.prototype */ {
            getValue_dsk1ci$: function (thisRef, property) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              return _.fg.elements.toDimension_pdl1w0$(w3cElement.getAttribute(attributeName));
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement_gobymg$_0;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              if (value != null) {
                w3cElement.setAttribute(attributeName, value.toHtml());
              }
               else {
                if (w3cElement.hasAttribute(attributeName)) {
                  w3cElement.removeAttribute(attributeName);
                }
              }
            }
          })
        }),
        layout: Kotlin.definePackage(null, /** @lends _.fg.elements.layout */ {
          Breakpoint: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function Breakpoint(range) {
            Breakpoint.baseInitializer.call(this);
            this.range = range;
          }, function () {
            return {
              xsmall: function () {
                return new _.fg.elements.layout.Breakpoint(new Kotlin.NumberRange(0, 599));
              },
              small: function () {
                return new _.fg.elements.layout.Breakpoint(new Kotlin.NumberRange(600, 959));
              },
              medium: function () {
                return new _.fg.elements.layout.Breakpoint(new Kotlin.NumberRange(960, 1279));
              },
              large: function () {
                return new _.fg.elements.layout.Breakpoint(new Kotlin.NumberRange(1280, 1919));
              },
              xlarge: function () {
                return new _.fg.elements.layout.Breakpoint(new Kotlin.NumberRange(1920, Kotlin.kotlin.js.internal.IntCompanionObject.MAX_VALUE));
              }
            };
          }),
          Direction: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function Direction(flex) {
            Direction.baseInitializer.call(this);
            this.flex = flex;
          }, function () {
            return {
              ROW: function () {
                return new _.fg.elements.layout.Direction(_.fg.elements.style.typed.FlexDirection.row);
              },
              COLUMN: function () {
                return new _.fg.elements.layout.Direction(_.fg.elements.style.typed.FlexDirection.column);
              }
            };
          }, null, /** @lends _.fg.elements.layout.Direction */ {
            Statics: Kotlin.createObject(null, function Statics() {
            }, /** @lends _.fg.elements.layout.Direction.Statics.prototype */ {
              from_61zpoe$: function (string) {
                if (string == null) {
                  return null;
                }
                return _.fg.elements.layout.Direction.valueOf_61zpoe$(string);
              }
            }),
            object_initializer$: function () {
              _.fg.elements.layout.Direction.Statics;
            }
          }),
          toLayout_zz9iv$: function ($receiver) {
            if ($receiver === null) {
              return null;
            }
            return new _.fg.elements.layout.Layout($receiver);
          },
          setLayout_4cfja8$: function ($receiver, direction, init) {
            var layout_0 = new _.fg.elements.layout.Layout(direction);
            init.call(layout_0);
            $receiver.layout = layout_0;
          },
          xs_u8ll43$: function ($receiver, direction, init) {
            var layout_0 = new _.fg.elements.layout.LayoutBreakpoint(direction);
            init.call(layout_0);
            $receiver.xs = layout_0;
          },
          Layout: Kotlin.createClass(function () {
            return [_.fg.elements.layout.LayoutBreakpoint];
          }, function Layout(direction) {
            Layout.baseInitializer.call(this, direction);
            this.xs = null;
          }, null, /** @lends _.fg.elements.layout.Layout */ {
            Statics: Kotlin.createObject(null, function Statics() {
            }, /** @lends _.fg.elements.layout.Layout.Statics.prototype */ {
              from_54c9de$: function (element) {
                var layoutDir = _.fg.elements.layout.Direction.Statics.from_61zpoe$(element.w3cElement_gobymg$_0.getAttribute('data-fg-layout'));
                return _.fg.elements.layout.toLayout_zz9iv$(layoutDir);
              },
              remove_54c9de$: function (element) {
                element.w3cElement_gobymg$_0.removeAttribute('data-fg-layout');
              }
            }),
            object_initializer$: function () {
              _.fg.elements.layout.Layout.Statics;
            }
          }),
          LayoutBreakpoint: Kotlin.createClass(null, function LayoutBreakpoint(direction) {
            this.direction$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(_.fg.elements.layout.LayoutBreakpoint.direction$f, direction);
          }, /** @lends _.fg.elements.layout.LayoutBreakpoint.prototype */ {
            direction: {
              get: function () {
                return this.direction$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('direction'));
              },
              set: function (direction_0) {
                this.direction$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('direction'), direction_0);
              }
            },
            apply_54c9de$: function (element) {
              element.w3cElement_gobymg$_0.setAttribute('data-fg-layout', this.direction.name);
              element.style.display = _.fg.elements.style.typed.Display.flex;
              element.style.flexDirection = this.direction.flex;
            }
          }, /** @lends _.fg.elements.layout.LayoutBreakpoint */ {
            Statics: Kotlin.createObject(null, function Statics() {
              _.fg.elements.layout.LayoutBreakpoint.Statics.ROW = new _.fg.elements.layout.Layout(_.fg.elements.layout.Direction.ROW);
              _.fg.elements.layout.LayoutBreakpoint.Statics.COLUMN = new _.fg.elements.layout.Layout(_.fg.elements.layout.Direction.COLUMN);
            }, /** @lends _.fg.elements.layout.LayoutBreakpoint.Statics.prototype */ {
              from_54c9de$: function (element) {
                var layoutDir = _.fg.elements.layout.Direction.Statics.from_61zpoe$(element.w3cElement_gobymg$_0.getAttribute('data-fg-layout'));
                return _.fg.elements.layout.toLayout_zz9iv$(layoutDir);
              },
              remove_54c9de$: function (element) {
                element.w3cElement_gobymg$_0.removeAttribute('data-fg-layout');
              }
            }),
            object_initializer$: function () {
              _.fg.elements.layout.LayoutBreakpoint.Statics;
            },
            direction$f: function (property, old, new_0) {
            }
          }),
          LayoutDelegate: Kotlin.createClass(function () {
            return [Kotlin.kotlin.properties.ReadWriteProperty];
          }, function LayoutDelegate() {
            this._layout_0 = null;
            this._element$delegate = Kotlin.kotlin.properties.Delegates.notNull();
            this.resizedHandler_0 = _.fg.elements.layout.LayoutDelegate.resizedHandler_0$f(this);
          }, /** @lends _.fg.elements.layout.LayoutDelegate.prototype */ {
            _element_0: {
              get: function () {
                return this._element$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_element'));
              },
              set: function (_element) {
                this._element$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_element'), _element);
              }
            },
            doHandleResize_0: function (layout_0, resizedEvent) {
              var tmp$0;
              if (layout_0.xs != null && Kotlin.kotlin.ranges.contains_3hpgcq$(_.fg.elements.layout.Breakpoint.xsmall.range, resizedEvent.width)) {
                (tmp$0 = layout_0.xs) != null ? tmp$0.apply_54c9de$(this._element_0) : null;
              }
               else {
                layout_0.apply_54c9de$(this._element_0);
              }
            },
            getValue_dsk1ci$: function (thisRef, property) {
              return this._layout_0;
            },
            setValue_w32e13$: function (thisRef, property, value) {
              this._element_0 = thisRef;
              if (value != null) {
                console.log('LayoutDelegate.setValue(something) : ');
                value.apply_54c9de$(thisRef);
                thisRef.onResized_qyxj07$(this.resizedHandler_0);
              }
               else {
                console.log('LayoutDelegate.setValue(null) : ');
                thisRef.unResized_qyxj07$(this.resizedHandler_0);
                _.fg.elements.layout.Layout.Statics.remove_54c9de$(thisRef);
              }
              this._layout_0 = value;
            }
          }, /** @lends _.fg.elements.layout.LayoutDelegate */ {
            resizedHandler_0$f: function (this$LayoutDelegate) {
              return function (event) {
                var tmp$0;
                console.log('Element resized: ' + event);
                if (this$LayoutDelegate._layout_0 != null) {
                  this$LayoutDelegate.doHandleResize_0((tmp$0 = this$LayoutDelegate._layout_0) != null ? tmp$0 : Kotlin.throwNPE(), event);
                }
              };
            }
          })
        }),
        style: Kotlin.definePackage(null, /** @lends _.fg.elements.style */ {
          typed: Kotlin.definePackage(null, /** @lends _.fg.elements.style.typed */ {
            Display: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Display(asString) {
              Display.baseInitializer.call(this);
              this.asString = asString;
            }, function () {
              return {
                none: function () {
                  return new _.fg.elements.style.typed.Display('none');
                },
                iinline: function () {
                  return new _.fg.elements.style.typed.Display('inline');
                },
                block: function () {
                  return new _.fg.elements.style.typed.Display('block');
                },
                flex: function () {
                  return new _.fg.elements.style.typed.Display('flex');
                },
                inlineBlock: function () {
                  return new _.fg.elements.style.typed.Display('inline-block');
                },
                contents: function () {
                  return new _.fg.elements.style.typed.Display('contents');
                },
                listItem: function () {
                  return new _.fg.elements.style.typed.Display('list-item');
                }
              };
            }, /** @lends _.fg.elements.style.typed.Display.prototype */ {
              toString: function () {
                return this.asString;
              }
            }),
            toDisplay_pdl1w0$: function ($receiver) {
              var tmp$0, tmp$2;
              tmp$0 = _.fg.elements.style.typed.Display.values();
              for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
                var one = tmp$0[tmp$2];
                if (Kotlin.equals(one.asString, $receiver)) {
                  return one;
                }
              }
              throw new Kotlin.IllegalArgumentException('Unknown display: ' + $receiver);
            },
            FlexDirection: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function FlexDirection(asString) {
              FlexDirection.baseInitializer.call(this);
              this.asString = asString;
            }, function () {
              return {
                row: function () {
                  return new _.fg.elements.style.typed.FlexDirection('row');
                },
                rowReverse: function () {
                  return new _.fg.elements.style.typed.FlexDirection('row-reverse');
                },
                column: function () {
                  return new _.fg.elements.style.typed.FlexDirection('column');
                },
                columnReverse: function () {
                  return new _.fg.elements.style.typed.FlexDirection('column-reverse');
                }
              };
            }),
            toFlexDirection_pdl1w0$: function ($receiver) {
              var tmp$0, tmp$2;
              tmp$0 = _.fg.elements.style.typed.FlexDirection.values();
              for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
                var one = tmp$0[tmp$2];
                if (Kotlin.equals(one.asString, $receiver)) {
                  return one;
                }
              }
              throw new Kotlin.IllegalArgumentException('Unknown flex-direction: ' + $receiver);
            },
            Position: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Position(asString) {
              Position.baseInitializer.call(this);
              this.asString = asString;
            }, function () {
              return {
                static: function () {
                  return new _.fg.elements.style.typed.Position('static');
                },
                relative: function () {
                  return new _.fg.elements.style.typed.Position('relative');
                },
                absolute: function () {
                  return new _.fg.elements.style.typed.Position('absolute');
                },
                fixed: function () {
                  return new _.fg.elements.style.typed.Position('fixed');
                },
                sticky: function () {
                  return new _.fg.elements.style.typed.Position('sticky');
                },
                inherit: function () {
                  return new _.fg.elements.style.typed.Position('inherit');
                },
                initial: function () {
                  return new _.fg.elements.style.typed.Position('initial');
                },
                unset: function () {
                  return new _.fg.elements.style.typed.Position('unset');
                }
              };
            }, /** @lends _.fg.elements.style.typed.Position.prototype */ {
              toString: function () {
                return this.asString;
              }
            }),
            toPosition_pdl1w0$: function ($receiver) {
              var tmp$0, tmp$2;
              tmp$0 = _.fg.elements.style.typed.Position.values();
              for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
                var one = tmp$0[tmp$2];
                if (Kotlin.equals(one.asString, $receiver)) {
                  return one;
                }
              }
              throw new Kotlin.IllegalArgumentException('Unknown position: ' + $receiver);
            },
            TypedStyle: Kotlin.createClass(null, function TypedStyle(element) {
              this.element_0 = element;
              this.display$delegate = new _.fg.elements.style.typed.TypedStyle.DisplayDelegate();
              this.position$delegate = new _.fg.elements.style.typed.TypedStyle.PositionDelegate();
              this.color$delegate = new _.fg.elements.style.typed.TypedStyle.RgbColorDelegate();
              this.backgroundColor$delegate = new _.fg.elements.style.typed.TypedStyle.RgbColorDelegate();
              this.left$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.right$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.top$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.bottom$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.width$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.height$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate();
              this.minWidth$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate('min-width');
              this.minHeight$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate('min-height');
              this.maxWidth$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate('max-width');
              this.maxHeight$delegate = new _.fg.elements.style.typed.TypedStyle.DimensionDelegate('max-height');
              this.flexDirection$delegate = new _.fg.elements.style.typed.TypedStyle.FlexDirectionDelegate();
              this.order$delegate = new _.fg.elements.style.typed.TypedStyle.IntDelegate();
            }, /** @lends _.fg.elements.style.typed.TypedStyle.prototype */ {
              display: {
                get: function () {
                  return this.display$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('display'));
                },
                set: function (display_0) {
                  this.display$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('display'), display_0);
                }
              },
              position: {
                get: function () {
                  return this.position$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('position'));
                },
                set: function (position_0) {
                  this.position$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('position'), position_0);
                }
              },
              color: {
                get: function () {
                  return this.color$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('color'));
                },
                set: function (color_0) {
                  this.color$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('color'), color_0);
                }
              },
              backgroundColor: {
                get: function () {
                  return this.backgroundColor$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('backgroundColor'));
                },
                set: function (backgroundColor_0) {
                  this.backgroundColor$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('backgroundColor'), backgroundColor_0);
                }
              },
              left: {
                get: function () {
                  return this.left$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('left'));
                },
                set: function (left_0) {
                  this.left$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('left'), left_0);
                }
              },
              right: {
                get: function () {
                  return this.right$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('right'));
                },
                set: function (right_0) {
                  this.right$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('right'), right_0);
                }
              },
              top: {
                get: function () {
                  return this.top$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('top'));
                },
                set: function (top_0) {
                  this.top$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('top'), top_0);
                }
              },
              bottom: {
                get: function () {
                  return this.bottom$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('bottom'));
                },
                set: function (bottom_0) {
                  this.bottom$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('bottom'), bottom_0);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width_0) {
                  this.width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('width'), width_0);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height_0) {
                  this.height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('height'), height_0);
                }
              },
              minWidth: {
                get: function () {
                  return this.minWidth$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('minWidth'));
                },
                set: function (minWidth_0) {
                  this.minWidth$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('minWidth'), minWidth_0);
                }
              },
              minHeight: {
                get: function () {
                  return this.minHeight$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('minHeight'));
                },
                set: function (minHeight_0) {
                  this.minHeight$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('minHeight'), minHeight_0);
                }
              },
              maxWidth: {
                get: function () {
                  return this.maxWidth$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('maxWidth'));
                },
                set: function (maxWidth_0) {
                  this.maxWidth$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('maxWidth'), maxWidth_0);
                }
              },
              maxHeight: {
                get: function () {
                  return this.maxHeight$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('maxHeight'));
                },
                set: function (maxHeight_0) {
                  this.maxHeight$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('maxHeight'), maxHeight_0);
                }
              },
              flexDirection: {
                get: function () {
                  return this.flexDirection$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('flexDirection'));
                },
                set: function (flexDirection_0) {
                  this.flexDirection$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('flexDirection'), flexDirection_0);
                }
              },
              order: {
                get: function () {
                  return this.order$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('order'));
                },
                set: function (order_0) {
                  this.order$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('order'), order_0);
                }
              }
            }, /** @lends _.fg.elements.style.typed.TypedStyle */ {
              DisplayDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function DisplayDelegate() {
                DisplayDelegate.baseInitializer.call(this, void 0, Kotlin.getCallableRefForExtensionFunction(_.fg.elements.style.typed.toDisplay_pdl1w0$));
              }),
              PositionDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function PositionDelegate() {
                PositionDelegate.baseInitializer.call(this, void 0, Kotlin.getCallableRefForExtensionFunction(_.fg.elements.style.typed.toPosition_pdl1w0$));
              }),
              RgbColorDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function RgbColorDelegate(attributeName) {
                if (attributeName === void 0)
                  attributeName = null;
                RgbColorDelegate.baseInitializer.call(this, attributeName, _.fg.elements.style.typed.TypedStyle.RgbColorDelegate.RgbColorDelegate$f);
              }, null, /** @lends _.fg.elements.style.typed.TypedStyle.RgbColorDelegate */ {
                RgbColorDelegate$f: function (it) {
                  return _.fg.style.colour.RgbColor.Factory.from_61zpoe$(it);
                }
              }),
              IntDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function IntDelegate(attributeName) {
                if (attributeName === void 0)
                  attributeName = null;
                IntDelegate.baseInitializer.call(this, attributeName, _.fg.elements.style.typed.TypedStyle.IntDelegate.IntDelegate$f);
              }, null, /** @lends _.fg.elements.style.typed.TypedStyle.IntDelegate */ {
                IntDelegate$f: function (it) {
                  return parseInt(it);
                }
              }),
              DimensionDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function DimensionDelegate(attributeName) {
                if (attributeName === void 0)
                  attributeName = null;
                DimensionDelegate.baseInitializer.call(this, attributeName, _.fg.elements.style.typed.TypedStyle.DimensionDelegate.DimensionDelegate$f);
              }, null, /** @lends _.fg.elements.style.typed.TypedStyle.DimensionDelegate */ {
                DimensionDelegate$f: function (it) {
                  var tmp$0;
                  return (tmp$0 = _.fg.elements.toDimension_pdl1w0$(it)) != null ? tmp$0 : Kotlin.throwNPE();
                }
              }),
              FlexDirectionDelegate: Kotlin.createClass(function () {
                return [_.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate];
              }, function FlexDirectionDelegate() {
                FlexDirectionDelegate.baseInitializer.call(this, void 0, Kotlin.getCallableRefForExtensionFunction(_.fg.elements.style.typed.toFlexDirection_pdl1w0$));
              }),
              TypedPropertyDelegate: Kotlin.createClass(function () {
                return [Kotlin.kotlin.properties.ReadWriteProperty];
              }, function TypedPropertyDelegate(attributeName, getFn) {
                if (attributeName === void 0)
                  attributeName = null;
                this.attributeName = attributeName;
                this.getFn = getFn;
              }, /** @lends _.fg.elements.style.typed.TypedStyle.TypedPropertyDelegate.prototype */ {
                getValue_dsk1ci$: function (thisRef, property) {
                  var tmp$0;
                  var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : _.fg.style.camelsToDashes_pdl1w0$(property.name);
                  var stringValue = thisRef.element_0.w3cElement_gobymg$_0.style.getPropertyValue(attributeName);
                  return stringValue.length > 0 ? this.getFn(stringValue) : null;
                },
                setValue_w32e13$: function (thisRef, property, value) {
                  var tmp$0;
                  var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : _.fg.style.camelsToDashes_pdl1w0$(property.name);
                  if (value != null) {
                    var valueAsString = value.toString();
                    thisRef.element_0.w3cElement_gobymg$_0.style.setProperty(attributeName, valueAsString);
                  }
                   else {
                    thisRef.element_0.w3cElement_gobymg$_0.style.removeProperty(attributeName);
                  }
                }
              })
            })
          })
        })
      }),
      keyboard: Kotlin.definePackage(null, /** @lends _.fg.keyboard */ {
        Key: Kotlin.createClass(null, function Key(key, modifiers) {
          this.key = key;
          this.modifiers = modifiers;
        }, /** @lends _.fg.keyboard.Key.prototype */ {
          equals_za3rmp$: function (other) {
            var tmp$0;
            if (this === other)
              return true;
            if (!Kotlin.isType(other, _.fg.keyboard.Key))
              return false;
            if (!Kotlin.equals(this.key, other.key))
              return false;
            if (!((tmp$0 = this.modifiers) != null ? tmp$0.equals_za3rmp$(other.modifiers) : null))
              return false;
            return true;
          },
          hashCode: function () {
            var result = Kotlin.hashCode(this.key);
            result = 31 * result + this.modifiers.hashCode();
            return result;
          },
          toString: function () {
            if (this.modifiers.isNotEmpty()) {
              return this.modifiers + '+' + this.key;
            }
             else {
              return this.key;
            }
          }
        }, /** @lends _.fg.keyboard.Key */ {
          Factory: Kotlin.createObject(null, function Factory() {
          }, /** @lends _.fg.keyboard.Key.Factory.prototype */ {
            from_61zpoe$: function (str) {
              var tmp$0;
              var splitted = Kotlin.kotlin.text.split_l2gz7$(str, ['+']);
              var key = Kotlin.kotlin.collections.last_a7ptmv$(splitted);
              var modifiers = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              if (splitted.size > 1) {
                tmp$0 = Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(splitted) - 1;
                for (var i = 0; i <= tmp$0; i++) {
                  var modifierAsString = splitted.get_za3lpa$(i);
                  modifiers.add_za3rmp$(_.fg.keyboard.Modifier.valueOf_61zpoe$(modifierAsString));
                }
              }
              return new _.fg.keyboard.Key(key, new _.fg.keyboard.Modifiers(modifiers));
            },
            from_tat4wc$: function (key, modifiers) {
              return new _.fg.keyboard.Key(key, modifiers);
            }
          }),
          object_initializer$: function () {
            _.fg.keyboard.Key.Factory;
          }
        }),
        KeyBinding: Kotlin.createClass(null, function KeyBinding(keys, type, callback) {
          if (type === void 0)
            type = _.fg.keyboard.Type.keypress;
          this.keys = keys;
          this.type = type;
          this.callback = callback;
        }, /** @lends _.fg.keyboard.KeyBinding.prototype */ {
          component1: function () {
            return this.keys;
          },
          component2: function () {
            return this.type;
          },
          component3: function () {
            return this.callback;
          },
          copy_dxzmv0$: function (keys, type, callback) {
            return new _.fg.keyboard.KeyBinding(keys === void 0 ? this.keys : keys, type === void 0 ? this.type : type, callback === void 0 ? this.callback : callback);
          },
          toString: function () {
            return 'KeyBinding(keys=' + Kotlin.toString(this.keys) + (', type=' + Kotlin.toString(this.type)) + (', callback=' + Kotlin.toString(this.callback)) + ')';
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.keys) | 0;
            result = result * 31 + Kotlin.hashCode(this.type) | 0;
            result = result * 31 + Kotlin.hashCode(this.callback) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.keys, other.keys) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.callback, other.callback)))));
          }
        }),
        Keyboard: Kotlin.createClass(null, function Keyboard(element) {
          if (element === void 0)
            element = null;
          this.element = element;
          this.shelves_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.keyBindings_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.keyboardEventHandler_0 = _.fg.keyboard.Keyboard.keyboardEventHandler_0$f(this);
          var tmp$0;
          if (this.element != null) {
            _.fg.elements.onKeyDown_da4jf4$(this.element, this.keyboardEventHandler_0);
            _.fg.elements.onKeyPress_da4jf4$(this.element, this.keyboardEventHandler_0);
            _.fg.elements.onKeyUp_da4jf4$(this.element, this.keyboardEventHandler_0);
          }
           else {
            document.addEventListener('keydown', typeof (tmp$0 = this.keyboardEventHandler_0) === 'function' ? tmp$0 : Kotlin.throwCCE());
            document.addEventListener('keypress', this.keyboardEventHandler_0);
            document.addEventListener('keyup', this.keyboardEventHandler_0);
          }
          this.pause = false;
        }, /** @lends _.fg.keyboard.Keyboard.prototype */ {
          character_0: function (event, resolvedCharCode) {
            var tmp$0;
            if (Kotlin.equals(event.type, 'keypress')) {
              var character = String.fromCharCode(event.which);
              if (!event.shiftKey) {
                character = character.toLowerCase();
              }
              return character;
            }
            if (_.fg.keyboard.Keyboard.Factory._MAP_0.containsKey_za3rmp$(resolvedCharCode)) {
              return _.fg.keyboard.Keyboard.Factory._MAP_0.get_za3rmp$(event.which);
            }
            if (_.fg.keyboard.Keyboard.Factory._KEYCODE_MAP_0.containsKey_za3rmp$(resolvedCharCode)) {
              return (tmp$0 = _.fg.keyboard.Keyboard.Factory._KEYCODE_MAP_0.get_za3rmp$(resolvedCharCode)) != null ? tmp$0.toString() : null;
            }
            var character_0 = String.fromCharCode(event.which);
            return character_0.toLowerCase().toString();
          },
          resolveEventModifiers_0: function (e) {
            var modifiers = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            if (e.shiftKey) {
              modifiers.add_za3rmp$(_.fg.keyboard.Modifier.shift);
            }
            if (e.altKey) {
              modifiers.add_za3rmp$(_.fg.keyboard.Modifier.alt);
            }
            if (e.ctrlKey) {
              modifiers.add_za3rmp$(_.fg.keyboard.Modifier.ctrl);
            }
            if (e.metaKey) {
              modifiers.add_za3rmp$(_.fg.keyboard.Modifier.meta);
            }
            return new _.fg.keyboard.Modifiers(modifiers);
          },
          handleKey_0: function (key, type, event) {
            var tmp$0;
            console.info('Keyboard key: ' + key + ' @' + type);
            tmp$0 = this.keyBindings_0.iterator();
            while (tmp$0.hasNext()) {
              var keyBinding = tmp$0.next();
              if (keyBinding.keys.list.contains_za3rmp$(key)) {
                keyBinding.callback();
                event.preventDefault();
              }
            }
          },
          add_mwcglc$: function (keyBinding) {
            console.info('Adding KeyBinding: ' + keyBinding.toString());
            this.keyBindings_0.add_za3rmp$(keyBinding);
          },
          clear: function () {
            this.keyBindings_0.clear();
          },
          shelve: function () {
            this.shelves_0.add_za3rmp$(this.keyBindings_0);
            this.keyBindings_0.clear();
          },
          unshelve: function () {
            this.keyBindings_0.clear();
            this.keyBindings_0.addAll_wtfk93$(Kotlin.kotlin.collections.last_a7ptmv$(this.shelves_0));
            this.shelves_0.removeAt_za3lpa$(Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(this.shelves_0));
          }
        }, /** @lends _.fg.keyboard.Keyboard */ {
          Factory: Kotlin.createObject(null, function Factory() {
            _.fg.keyboard.Keyboard.Factory._MAP_0 = Kotlin.kotlin.collections.mapOf_eoa9s7$([new Kotlin.kotlin.Pair(8, 'backspace'), new Kotlin.kotlin.Pair(9, 'tab'), new Kotlin.kotlin.Pair(13, 'enter'), new Kotlin.kotlin.Pair(16, 'shift'), new Kotlin.kotlin.Pair(17, 'ctrl'), new Kotlin.kotlin.Pair(18, 'alt'), new Kotlin.kotlin.Pair(20, 'capslock'), new Kotlin.kotlin.Pair(27, 'esc'), new Kotlin.kotlin.Pair(32, 'space'), new Kotlin.kotlin.Pair(33, 'pageup'), new Kotlin.kotlin.Pair(34, 'pagedown'), new Kotlin.kotlin.Pair(35, 'end'), new Kotlin.kotlin.Pair(36, 'home'), new Kotlin.kotlin.Pair(37, 'left'), new Kotlin.kotlin.Pair(38, 'up'), new Kotlin.kotlin.Pair(39, 'right'), new Kotlin.kotlin.Pair(40, 'down'), new Kotlin.kotlin.Pair(45, 'ins'), new Kotlin.kotlin.Pair(46, 'del'), new Kotlin.kotlin.Pair(91, 'meta'), new Kotlin.kotlin.Pair(93, 'meta'), new Kotlin.kotlin.Pair(96, '0'), new Kotlin.kotlin.Pair(97, '1'), new Kotlin.kotlin.Pair(98, '2'), new Kotlin.kotlin.Pair(99, '4'), new Kotlin.kotlin.Pair(100, '5'), new Kotlin.kotlin.Pair(101, '6'), new Kotlin.kotlin.Pair(102, '7'), new Kotlin.kotlin.Pair(103, '8'), new Kotlin.kotlin.Pair(104, '9'), new Kotlin.kotlin.Pair(112, 'f1'), new Kotlin.kotlin.Pair(113, 'f2'), new Kotlin.kotlin.Pair(114, 'f3'), new Kotlin.kotlin.Pair(115, 'f4'), new Kotlin.kotlin.Pair(116, 'f5'), new Kotlin.kotlin.Pair(117, 'f6'), new Kotlin.kotlin.Pair(118, 'f7'), new Kotlin.kotlin.Pair(119, 'f8'), new Kotlin.kotlin.Pair(120, 'f8'), new Kotlin.kotlin.Pair(121, 'f9'), new Kotlin.kotlin.Pair(122, 'f10'), new Kotlin.kotlin.Pair(123, 'f11'), new Kotlin.kotlin.Pair(124, 'f12'), new Kotlin.kotlin.Pair(125, 'f13'), new Kotlin.kotlin.Pair(126, 'f14'), new Kotlin.kotlin.Pair(127, 'f15'), new Kotlin.kotlin.Pair(128, 'f16'), new Kotlin.kotlin.Pair(129, 'f17'), new Kotlin.kotlin.Pair(130, 'f18'), new Kotlin.kotlin.Pair(131, 'f19'), new Kotlin.kotlin.Pair(224, 'meta')]);
            _.fg.keyboard.Keyboard.Factory._KEYCODE_MAP_0 = Kotlin.kotlin.collections.mapOf_eoa9s7$([new Kotlin.kotlin.Pair(106, '*'), new Kotlin.kotlin.Pair(107, '+'), new Kotlin.kotlin.Pair(109, '-'), new Kotlin.kotlin.Pair(110, '.'), new Kotlin.kotlin.Pair(111, '/'), new Kotlin.kotlin.Pair(186, ';'), new Kotlin.kotlin.Pair(187, '='), new Kotlin.kotlin.Pair(188, ','), new Kotlin.kotlin.Pair(189, '-'), new Kotlin.kotlin.Pair(190, '.'), new Kotlin.kotlin.Pair(191, '/'), new Kotlin.kotlin.Pair(192, '`'), new Kotlin.kotlin.Pair(219, '['), new Kotlin.kotlin.Pair(220, '\\'), new Kotlin.kotlin.Pair(221, ']'), new Kotlin.kotlin.Pair(222, "'")]);
            _.fg.keyboard.Keyboard.Factory.DOCUMENT = new _.fg.keyboard.Keyboard();
          }),
          object_initializer$: function () {
            _.fg.keyboard.Keyboard.Factory;
          },
          keyboardEventHandler_0$f: function (this$Keyboard) {
            return function (event) {
              var type = _.fg.keyboard.Type.valueOf_61zpoe$(event.type);
              var resolvedCharCode = true ? event.which : event.keyCode;
              var character = this$Keyboard.character_0(event, resolvedCharCode);
              if (character != null) {
                var modifiers = this$Keyboard.resolveEventModifiers_0(event);
                var key = _.fg.keyboard.Key.Factory.from_tat4wc$(character, modifiers);
                if (!this$Keyboard.pause) {
                  this$Keyboard.handleKey_0(key, type, event);
                }
              }
            };
          }
        }),
        Keys: Kotlin.createClass(null, function Keys(list) {
          this.list = list;
        }, /** @lends _.fg.keyboard.Keys.prototype */ {
          component1: function () {
            return this.list;
          },
          copy_8afaxd$: function (list) {
            return new _.fg.keyboard.Keys(list === void 0 ? this.list : list);
          },
          toString: function () {
            return 'Keys(list=' + Kotlin.toString(this.list) + ')';
          },
          hashCode: function () {
            var result = 0;
            result = result * 31 + Kotlin.hashCode(this.list) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.list, other.list))));
          }
        }, /** @lends _.fg.keyboard.Keys */ {
          Factory: Kotlin.createObject(null, function Factory() {
          }, /** @lends _.fg.keyboard.Keys.Factory.prototype */ {
            from_tiy2pn$: function (key) {
              return new _.fg.keyboard.Keys(Kotlin.kotlin.collections.listOf_za3rmp$(key));
            },
            from_61zpoe$: function (str) {
              var tmp$0;
              var keysList = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              var splitted = Kotlin.kotlin.text.split_l2gz7$(str, [' ']);
              tmp$0 = splitted.iterator();
              while (tmp$0.hasNext()) {
                var keyAsString = tmp$0.next();
                keysList.add_za3rmp$(_.fg.keyboard.Key.Factory.from_61zpoe$(keyAsString));
              }
              return new _.fg.keyboard.Keys(keysList);
            }
          }),
          object_initializer$: function () {
            _.fg.keyboard.Keys.Factory;
          }
        }),
        Modifier: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function Modifier() {
          Modifier.baseInitializer.call(this);
        }, function () {
          return {
            shift: function () {
              return new _.fg.keyboard.Modifier();
            },
            alt: function () {
              return new _.fg.keyboard.Modifier();
            },
            ctrl: function () {
              return new _.fg.keyboard.Modifier();
            },
            meta: function () {
              return new _.fg.keyboard.Modifier();
            }
          };
        }),
        Modifiers: Kotlin.createClass(null, function Modifiers(list) {
          this.list = Kotlin.kotlin.collections.sorted_349qs3$(list);
        }, /** @lends _.fg.keyboard.Modifiers.prototype */ {
          isNotEmpty: function () {
            return !this.list.isEmpty();
          },
          equals_za3rmp$: function (other) {
            if (this === other)
              return true;
            if (!Kotlin.isType(other, _.fg.keyboard.Modifiers))
              return false;
            if (!Kotlin.equals(this.list, other.list))
              return false;
            return true;
          },
          hashCode: function () {
            return Kotlin.hashCode(this.list);
          },
          toString: function () {
            return Kotlin.kotlin.collections.joinToString_ld60a2$(this.list, '+');
          }
        }),
        Type: Kotlin.createEnumClass(function () {
          return [Kotlin.Enum];
        }, function Type() {
          Type.baseInitializer.call(this);
        }, function () {
          return {
            keydown: function () {
              return new _.fg.keyboard.Type();
            },
            keypress: function () {
              return new _.fg.keyboard.Type();
            },
            keyup: function () {
              return new _.fg.keyboard.Type();
            }
          };
        })
      }),
      style: Kotlin.definePackage(null, /** @lends _.fg.style */ {
        AndRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function AndRule(selector) {
          AndRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.AndRule.prototype */ {
          cssText: function () {
            return this.cssText_y57xct$_0(this.selector);
          }
        }),
        AnyRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function AnyRule() {
          AnyRule.baseInitializer.call(this, _.fg.elements.AnySelector.Statics.GET);
        }, /** @lends _.fg.style.AnyRule.prototype */ {
          cssText: function () {
            return _.fg.style.Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
          }
        }),
        ChildRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function ChildRule(selector) {
          ChildRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.ChildRule.prototype */ {
          cssText: function () {
            return this.cssText_y57xct$_0(this.selector);
          }
        }),
        ClassRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function ClassRule(selector) {
          ClassRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.ClassRule.prototype */ {
          className: {
            get: function () {
              return this.selector.value;
            }
          },
          cssText: function () {
            return _.fg.style.Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
          }
        }),
        DescendantRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function DescendantRule(selector) {
          DescendantRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.DescendantRule.prototype */ {
          cssText: function () {
            return this.cssText_y57xct$_0(this.selector);
          }
        }),
        keyframesRule_wcm6cd$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.KeyframesRule(selector);
          init.call(style_0);
          return style_0;
        },
        classRule_l99yr7$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.ClassRule(selector);
          init.call(style_0);
          return style_0;
        },
        rule_olsuya$: function ($receiver, styledClass, init) {
          if (init === void 0)
            init = styledClass.rule;
          var style_0 = new _.fg.style.ClassRule(styledClass.classSelector);
          init.call(style_0);
          return style_0;
        },
        and_jweaar$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        and_dbehhi$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, selector));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        desc_xyxbv5$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.DescendantRule(new _.fg.elements.DescendantSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        desc_4v8hhk$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.DescendantRule(new _.fg.elements.DescendantSelector($receiver.selector, selector));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        child_l73siq$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.ChildRule(new _.fg.elements.ChildSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        child_lij791$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.ChildRule(new _.fg.elements.ChildSelector($receiver.selector, selector));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        active_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('active')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        checked_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('checked')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        empty_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('empty')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        enabled_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('enabled')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        first_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        firstChild_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first-child')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        firstOfType_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first-of-type')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        focus_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('focus')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        hover_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('hover')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        indeterminate_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('indeterminate')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        inRange_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('in-range')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        invalid_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('invalid')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        lang_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('lang')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        lastChild_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('last-child')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        lastOfType_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('last-of-type')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        left_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('left')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        link_i5tde3$: function ($receiver, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('link')));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        not_dbehhi$: function ($receiver, selector, init) {
          var style_0 = new _.fg.style.AndRule(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.NotSelector(selector)));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        keyframesRule_ndisjh$: function ($receiver, selector, init) {
          return _.fg.style.keyframesRule_wcm6cd$($receiver, new _.fg.elements.AnimationNameSelector(selector), init);
        },
        keyframe_f6qvey$: function ($receiver, value, init) {
          var style_0 = new _.fg.style.KeyFrameRule(new _.fg.elements.KeyframeSelector(value));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        kfrom_q2xcpo$: function ($receiver, init) {
          var style_0 = new _.fg.style.KeyFrameRule(new _.fg.elements.KeyframeSelector('from'));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        kto_q2xcpo$: function ($receiver, init) {
          var style_0 = new _.fg.style.KeyFrameRule(new _.fg.elements.KeyframeSelector('to'));
          init.call(style_0);
          $receiver._childStyles_1851tg$_0.add_za3rmp$(style_0);
          return style_0;
        },
        KeyFrameRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function KeyFrameRule(selector) {
          KeyFrameRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.KeyFrameRule.prototype */ {
          cssText: function () {
            return this.cssText_y57xct$_0(this.selector);
          }
        }),
        KeyframesRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function KeyframesRule(selector) {
          KeyframesRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.KeyframesRule.prototype */ {
          cssText: function () {
            var tmp$1;
            var s = {v: '@keyframes '};
            s.v += this.selector.toString();
            s.v += ' { ';
            tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this._map);
            while (tmp$1.hasNext()) {
              var tmp$0 = tmp$1.next();
              var key = tmp$0.key;
              var value = tmp$0.value;
              s.v += key + ': ' + value + '; ';
            }
            var tmp$2;
            tmp$2 = this._childStyles_1851tg$_0.iterator();
            while (tmp$2.hasNext()) {
              var element = tmp$2.next();
              s.v += element.cssText();
            }
            s.v += '}';
            return s.v;
          }
        }, /** @lends _.fg.style.KeyframesRule */ {
        }),
        Rule: Kotlin.createClass(null, function Rule(selector) {
          this.selector = selector;
          this._map = Kotlin.kotlin.collections.mutableMapOf_eoa9s7$([]);
          this._childStyles_1851tg$_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.cssFloat$delegate = new _.fg.style.Rule.Property(this);
          this._dashed_attribute$delegate = new _.fg.style.Rule.Property(this);
          this._camel_cased_attribute$delegate = new _.fg.style.Rule.Property(this);
          this.alignContent$delegate = new _.fg.style.Rule.Property(this);
          this.alignItems$delegate = new _.fg.style.Rule.Property(this);
          this.alignSelf$delegate = new _.fg.style.Rule.Property(this);
          this.animation$delegate = new _.fg.style.Rule.Property(this);
          this.animationDelay$delegate = new _.fg.style.Rule.Property(this);
          this.animationDirection$delegate = new _.fg.style.Rule.Property(this);
          this.animationDuration$delegate = new _.fg.style.Rule.Property(this);
          this.animationFillMode$delegate = new _.fg.style.Rule.Property(this);
          this.animationIterationCount$delegate = new _.fg.style.Rule.Property(this);
          this.animationName$delegate = new _.fg.style.Rule.Property(this);
          this.animationPlayState$delegate = new _.fg.style.Rule.Property(this);
          this.animationTimingFunction$delegate = new _.fg.style.Rule.Property(this);
          this.backfaceVisibility$delegate = new _.fg.style.Rule.Property(this);
          this.background$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundAttachment$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundClip$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundColor$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.backgroundImage$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundOrigin$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundPosition$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundRepeat$delegate = new _.fg.style.Rule.Property(this);
          this.backgroundSize$delegate = new _.fg.style.Rule.Property(this);
          this.border$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottom$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottomColor$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottomLeftRadius$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottomRightRadius$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottomStyle$delegate = new _.fg.style.Rule.Property(this);
          this.borderBottomWidth$delegate = new _.fg.style.Rule.Property(this);
          this.borderCollapse$delegate = new _.fg.style.Rule.Property(this);
          this.borderColor$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.borderImage$delegate = new _.fg.style.Rule.Property(this);
          this.borderImageOutset$delegate = new _.fg.style.Rule.Property(this);
          this.borderImageRepeat$delegate = new _.fg.style.Rule.Property(this);
          this.borderImageSlice$delegate = new _.fg.style.Rule.Property(this);
          this.borderImageSource$delegate = new _.fg.style.Rule.Property(this);
          this.borderImageWidth$delegate = new _.fg.style.Rule.Property(this);
          this.borderLeft$delegate = new _.fg.style.Rule.Property(this);
          this.borderLeftColor$delegate = new _.fg.style.Rule.Property(this);
          this.borderLeftStyle$delegate = new _.fg.style.Rule.Property(this);
          this.borderLeftWidth$delegate = new _.fg.style.Rule.Property(this);
          this.borderRadius$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.borderRight$delegate = new _.fg.style.Rule.Property(this);
          this.borderRightColor$delegate = new _.fg.style.Rule.Property(this);
          this.borderRightStyle$delegate = new _.fg.style.Rule.Property(this);
          this.borderRightWidth$delegate = new _.fg.style.Rule.Property(this);
          this.borderSpacing$delegate = new _.fg.style.Rule.Property(this);
          this.borderStyle$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.borderTop$delegate = new _.fg.style.Rule.Property(this);
          this.borderTopColor$delegate = new _.fg.style.Rule.Property(this);
          this.borderTopLeftRadius$delegate = new _.fg.style.Rule.Property(this);
          this.borderTopRightRadius$delegate = new _.fg.style.Rule.Property(this);
          this.borderTopStyle$delegate = new _.fg.style.Rule.Property(this);
          this.borderTopWidth$delegate = new _.fg.style.Rule.Property(this);
          this.borderWidth$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.bottom$delegate = new _.fg.style.Rule.Property(this);
          this.boxDecorationBreak$delegate = new _.fg.style.Rule.Property(this);
          this.boxShadow$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.boxSizing$delegate = new _.fg.style.Rule.Property(this);
          this.breakAfter$delegate = new _.fg.style.Rule.Property(this);
          this.breakBefore$delegate = new _.fg.style.Rule.Property(this);
          this.breakInside$delegate = new _.fg.style.Rule.Property(this);
          this.captionSide$delegate = new _.fg.style.Rule.Property(this);
          this.clear$delegate = new _.fg.style.Rule.Property(this);
          this.clip$delegate = new _.fg.style.Rule.Property(this);
          this.color$delegate = new _.fg.style.Rule.Property(this);
          this.columnCount$delegate = new _.fg.style.Rule.Property(this);
          this.columnFill$delegate = new _.fg.style.Rule.Property(this);
          this.columnGap$delegate = new _.fg.style.Rule.Property(this);
          this.columnRule$delegate = new _.fg.style.Rule.Property(this);
          this.columnRuleColor$delegate = new _.fg.style.Rule.Property(this);
          this.columnRuleStyle$delegate = new _.fg.style.Rule.Property(this);
          this.columnRuleWidth$delegate = new _.fg.style.Rule.Property(this);
          this.columnSpan$delegate = new _.fg.style.Rule.Property(this);
          this.columnWidth$delegate = new _.fg.style.Rule.Property(this);
          this.columns$delegate = new _.fg.style.Rule.Property(this);
          this.content$delegate = new _.fg.style.Rule.Property(this);
          this.counterIncrement$delegate = new _.fg.style.Rule.Property(this);
          this.counterReset$delegate = new _.fg.style.Rule.Property(this);
          this.cursor$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.direction$delegate = new _.fg.style.Rule.Property(this);
          this.display$delegate = new _.fg.style.Rule.Property(this);
          this.emptyCells$delegate = new _.fg.style.Rule.Property(this);
          this.filter$delegate = new _.fg.style.Rule.Property(this);
          this.flex$delegate = new _.fg.style.Rule.Property(this);
          this.flexBasis$delegate = new _.fg.style.Rule.Property(this);
          this.flexDirection$delegate = new _.fg.style.Rule.Property(this);
          this.flexFlow$delegate = new _.fg.style.Rule.Property(this);
          this.flexGrow$delegate = new _.fg.style.Rule.Property(this);
          this.flexShrink$delegate = new _.fg.style.Rule.Property(this);
          this.flexWrap$delegate = new _.fg.style.Rule.Property(this);
          this.font$delegate = new _.fg.style.Rule.Property(this);
          this.fontFamily$delegate = new _.fg.style.Rule.Property(this);
          this.fontFeatureSettings$delegate = new _.fg.style.Rule.Property(this);
          this.fontKerning$delegate = new _.fg.style.Rule.Property(this);
          this.fontLanguageOverride$delegate = new _.fg.style.Rule.Property(this);
          this.fontSize$delegate = new _.fg.style.Rule.Property(this);
          this.fontSizeAdjust$delegate = new _.fg.style.Rule.Property(this);
          this.fontStretch$delegate = new _.fg.style.Rule.Property(this);
          this.fontStyle$delegate = new _.fg.style.Rule.Property(this);
          this.fontSynthesis$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariant$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantAlternates$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantCaps$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantEastAsian$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantLigatures$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantNumeric$delegate = new _.fg.style.Rule.Property(this);
          this.fontVariantPosition$delegate = new _.fg.style.Rule.Property(this);
          this.fontWeight$delegate = new _.fg.style.Rule.Property(this);
          this.hangingPunctuation$delegate = new _.fg.style.Rule.Property(this);
          this.height$delegate = new _.fg.style.Rule.Property(this);
          this.hyphens$delegate = new _.fg.style.Rule.Property(this);
          this.imageOrientation$delegate = new _.fg.style.Rule.Property(this);
          this.imageRendering$delegate = new _.fg.style.Rule.Property(this);
          this.imageResolution$delegate = new _.fg.style.Rule.Property(this);
          this.imeMode$delegate = new _.fg.style.Rule.Property(this);
          this.justifyContent$delegate = new _.fg.style.Rule.Property(this);
          this.left$delegate = new _.fg.style.Rule.Property(this);
          this.letterSpacing$delegate = new _.fg.style.Rule.Property(this);
          this.lineBreak$delegate = new _.fg.style.Rule.Property(this);
          this.lineHeight$delegate = new _.fg.style.Rule.Property(this);
          this.listStyle$delegate = new _.fg.style.Rule.Property(this);
          this.listStyleImage$delegate = new _.fg.style.Rule.Property(this);
          this.listStylePosition$delegate = new _.fg.style.Rule.Property(this);
          this.listStyleType$delegate = new _.fg.style.Rule.Property(this);
          this.margin$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.marginBottom$delegate = new _.fg.style.Rule.Property(this);
          this.marginLeft$delegate = new _.fg.style.Rule.Property(this);
          this.marginRight$delegate = new _.fg.style.Rule.Property(this);
          this.marginTop$delegate = new _.fg.style.Rule.Property(this);
          this.mark$delegate = new _.fg.style.Rule.Property(this);
          this.markAfter$delegate = new _.fg.style.Rule.Property(this);
          this.markBefore$delegate = new _.fg.style.Rule.Property(this);
          this.marks$delegate = new _.fg.style.Rule.Property(this);
          this.marqueeDirection$delegate = new _.fg.style.Rule.Property(this);
          this.marqueePlayCount$delegate = new _.fg.style.Rule.Property(this);
          this.marqueeSpeed$delegate = new _.fg.style.Rule.Property(this);
          this.marqueeStyle$delegate = new _.fg.style.Rule.Property(this);
          this.mask$delegate = new _.fg.style.Rule.Property(this);
          this.maskType$delegate = new _.fg.style.Rule.Property(this);
          this.maxHeight$delegate = new _.fg.style.Rule.Property(this);
          this.maxWidth$delegate = new _.fg.style.Rule.Property(this);
          this.minHeight$delegate = new _.fg.style.Rule.Property(this);
          this.minWidth$delegate = new _.fg.style.Rule.Property(this);
          this.navDown$delegate = new _.fg.style.Rule.Property(this);
          this.navIndex$delegate = new _.fg.style.Rule.Property(this);
          this.navLeft$delegate = new _.fg.style.Rule.Property(this);
          this.navRight$delegate = new _.fg.style.Rule.Property(this);
          this.navUp$delegate = new _.fg.style.Rule.Property(this);
          this.objectFit$delegate = new _.fg.style.Rule.Property(this);
          this.objectPosition$delegate = new _.fg.style.Rule.Property(this);
          this.opacity$delegate = new _.fg.style.Rule.Property(this);
          this.order$delegate = new _.fg.style.Rule.Property(this);
          this.orphans$delegate = new _.fg.style.Rule.Property(this);
          this.outline$delegate = new _.fg.style.Rule.NullableProperty(this);
          this.outlineColor$delegate = new _.fg.style.Rule.Property(this);
          this.outlineOffset$delegate = new _.fg.style.Rule.Property(this);
          this.outlineStyle$delegate = new _.fg.style.Rule.Property(this);
          this.outlineWidth$delegate = new _.fg.style.Rule.Property(this);
          this.overflowWrap$delegate = new _.fg.style.Rule.Property(this);
          this.overflowX$delegate = new _.fg.style.Rule.Property(this);
          this.overflowY$delegate = new _.fg.style.Rule.Property(this);
          this.padding$delegate = new _.fg.style.Rule.Property(this);
          this.paddingBottom$delegate = new _.fg.style.Rule.Property(this);
          this.paddingLeft$delegate = new _.fg.style.Rule.Property(this);
          this.paddingRight$delegate = new _.fg.style.Rule.Property(this);
          this.paddingTop$delegate = new _.fg.style.Rule.Property(this);
          this.pageBreakAfter$delegate = new _.fg.style.Rule.Property(this);
          this.pageBreakBefore$delegate = new _.fg.style.Rule.Property(this);
          this.pageBreakInside$delegate = new _.fg.style.Rule.Property(this);
          this.perspective$delegate = new _.fg.style.Rule.Property(this);
          this.perspectiveOrigin$delegate = new _.fg.style.Rule.Property(this);
          this.phonemes$delegate = new _.fg.style.Rule.Property(this);
          this.position$delegate = new _.fg.style.Rule.Property(this);
          this.quotes$delegate = new _.fg.style.Rule.Property(this);
          this.resize$delegate = new _.fg.style.Rule.Property(this);
          this.rest$delegate = new _.fg.style.Rule.Property(this);
          this.restAfter$delegate = new _.fg.style.Rule.Property(this);
          this.restBefore$delegate = new _.fg.style.Rule.Property(this);
          this.right$delegate = new _.fg.style.Rule.Property(this);
          this.tabSize$delegate = new _.fg.style.Rule.Property(this);
          this.tableLayout$delegate = new _.fg.style.Rule.Property(this);
          this.textAlign$delegate = new _.fg.style.Rule.Property(this);
          this.textAlignLast$delegate = new _.fg.style.Rule.Property(this);
          this.textCombineUpright$delegate = new _.fg.style.Rule.Property(this);
          this.textDecoration$delegate = new _.fg.style.Rule.Property(this);
          this.textDecorationColor$delegate = new _.fg.style.Rule.Property(this);
          this.textDecorationLine$delegate = new _.fg.style.Rule.Property(this);
          this.textDecorationStyle$delegate = new _.fg.style.Rule.Property(this);
          this.textIndent$delegate = new _.fg.style.Rule.Property(this);
          this.textJustify$delegate = new _.fg.style.Rule.Property(this);
          this.textOrientation$delegate = new _.fg.style.Rule.Property(this);
          this.textOverflow$delegate = new _.fg.style.Rule.Property(this);
          this.textShadow$delegate = new _.fg.style.Rule.Property(this);
          this.textTransform$delegate = new _.fg.style.Rule.Property(this);
          this.textUnderlinePosition$delegate = new _.fg.style.Rule.Property(this);
          this.top$delegate = new _.fg.style.Rule.Property(this);
          this.transform$delegate = new _.fg.style.Rule.Property(this);
          this.transformOrigin$delegate = new _.fg.style.Rule.Property(this);
          this.transformStyle$delegate = new _.fg.style.Rule.Property(this);
          this.transition$delegate = new _.fg.style.Rule.Property(this);
          this.transitionDelay$delegate = new _.fg.style.Rule.Property(this);
          this.transitionDuration$delegate = new _.fg.style.Rule.Property(this);
          this.transitionProperty$delegate = new _.fg.style.Rule.Property(this);
          this.transitionTimingFunction$delegate = new _.fg.style.Rule.Property(this);
          this.unicodeBidi$delegate = new _.fg.style.Rule.Property(this);
          this.verticalAlign$delegate = new _.fg.style.Rule.Property(this);
          this.visibility$delegate = new _.fg.style.Rule.Property(this);
          this.voiceBalance$delegate = new _.fg.style.Rule.Property(this);
          this.voiceDuration$delegate = new _.fg.style.Rule.Property(this);
          this.voicePitch$delegate = new _.fg.style.Rule.Property(this);
          this.voicePitchRange$delegate = new _.fg.style.Rule.Property(this);
          this.voiceRate$delegate = new _.fg.style.Rule.Property(this);
          this.voiceStress$delegate = new _.fg.style.Rule.Property(this);
          this.voiceVolume$delegate = new _.fg.style.Rule.Property(this);
          this.whiteSpace$delegate = new _.fg.style.Rule.Property(this);
          this.widows$delegate = new _.fg.style.Rule.Property(this);
          this.width$delegate = new _.fg.style.Rule.Property(this);
          this.wordBreak$delegate = new _.fg.style.Rule.Property(this);
          this.wordSpacing$delegate = new _.fg.style.Rule.Property(this);
          this.wordWrap$delegate = new _.fg.style.Rule.Property(this);
          this.writingMode$delegate = new _.fg.style.Rule.Property(this);
          this.zIndex$delegate = new _.fg.style.Rule.Property(this);
        }, /** @lends _.fg.style.Rule.prototype */ {
          cssText_y57xct$_0: function (selector) {
            var tmp$1;
            var s = '';
            s += selector.toString();
            s += ' { ';
            tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this._map);
            while (tmp$1.hasNext()) {
              var tmp$0 = tmp$1.next();
              var key = tmp$0.key;
              var value = tmp$0.value;
              s += key + ': ' + value + '; ';
            }
            s += '}';
            return s;
          },
          cssFloat: {
            get: function () {
              return this.cssFloat$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('cssFloat'));
            },
            set: function (cssFloat_0) {
              this.cssFloat$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('cssFloat'), cssFloat_0);
            }
          },
          _dashed_attribute: {
            get: function () {
              return this._dashed_attribute$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('_dashed_attribute'));
            },
            set: function (_dashed_attribute_0) {
              this._dashed_attribute$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('_dashed_attribute'), _dashed_attribute_0);
            }
          },
          _camel_cased_attribute: {
            get: function () {
              return this._camel_cased_attribute$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'));
            },
            set: function (_camel_cased_attribute_0) {
              this._camel_cased_attribute$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'), _camel_cased_attribute_0);
            }
          },
          alignContent: {
            get: function () {
              return this.alignContent$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('alignContent'));
            },
            set: function (alignContent_0) {
              this.alignContent$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('alignContent'), alignContent_0);
            }
          },
          alignItems: {
            get: function () {
              return this.alignItems$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('alignItems'));
            },
            set: function (alignItems_0) {
              this.alignItems$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('alignItems'), alignItems_0);
            }
          },
          alignSelf: {
            get: function () {
              return this.alignSelf$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('alignSelf'));
            },
            set: function (alignSelf_0) {
              this.alignSelf$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('alignSelf'), alignSelf_0);
            }
          },
          animation: {
            get: function () {
              return this.animation$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animation'));
            },
            set: function (animation_0) {
              this.animation$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animation'), animation_0);
            }
          },
          animationDelay: {
            get: function () {
              return this.animationDelay$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationDelay'));
            },
            set: function (animationDelay_0) {
              this.animationDelay$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationDelay'), animationDelay_0);
            }
          },
          animationDirection: {
            get: function () {
              return this.animationDirection$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationDirection'));
            },
            set: function (animationDirection_0) {
              this.animationDirection$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationDirection'), animationDirection_0);
            }
          },
          animationDuration: {
            get: function () {
              return this.animationDuration$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationDuration'));
            },
            set: function (animationDuration_0) {
              this.animationDuration$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationDuration'), animationDuration_0);
            }
          },
          animationFillMode: {
            get: function () {
              return this.animationFillMode$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationFillMode'));
            },
            set: function (animationFillMode_0) {
              this.animationFillMode$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationFillMode'), animationFillMode_0);
            }
          },
          animationIterationCount: {
            get: function () {
              return this.animationIterationCount$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationIterationCount'));
            },
            set: function (animationIterationCount_0) {
              this.animationIterationCount$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationIterationCount'), animationIterationCount_0);
            }
          },
          animationName: {
            get: function () {
              return this.animationName$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationName'));
            },
            set: function (animationName_0) {
              this.animationName$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationName'), animationName_0);
            }
          },
          animationPlayState: {
            get: function () {
              return this.animationPlayState$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationPlayState'));
            },
            set: function (animationPlayState_0) {
              this.animationPlayState$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationPlayState'), animationPlayState_0);
            }
          },
          animationTimingFunction: {
            get: function () {
              return this.animationTimingFunction$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('animationTimingFunction'));
            },
            set: function (animationTimingFunction_0) {
              this.animationTimingFunction$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('animationTimingFunction'), animationTimingFunction_0);
            }
          },
          backfaceVisibility: {
            get: function () {
              return this.backfaceVisibility$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backfaceVisibility'));
            },
            set: function (backfaceVisibility_0) {
              this.backfaceVisibility$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backfaceVisibility'), backfaceVisibility_0);
            }
          },
          background: {
            get: function () {
              return this.background$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('background'));
            },
            set: function (background_0) {
              this.background$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('background'), background_0);
            }
          },
          backgroundAttachment: {
            get: function () {
              return this.backgroundAttachment$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundAttachment'));
            },
            set: function (backgroundAttachment_0) {
              this.backgroundAttachment$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundAttachment'), backgroundAttachment_0);
            }
          },
          backgroundClip: {
            get: function () {
              return this.backgroundClip$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundClip'));
            },
            set: function (backgroundClip_0) {
              this.backgroundClip$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundClip'), backgroundClip_0);
            }
          },
          backgroundColor: {
            get: function () {
              return this.backgroundColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundColor'));
            },
            set: function (backgroundColor_0) {
              this.backgroundColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundColor'), backgroundColor_0);
            }
          },
          backgroundImage: {
            get: function () {
              return this.backgroundImage$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundImage'));
            },
            set: function (backgroundImage_0) {
              this.backgroundImage$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundImage'), backgroundImage_0);
            }
          },
          backgroundOrigin: {
            get: function () {
              return this.backgroundOrigin$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundOrigin'));
            },
            set: function (backgroundOrigin_0) {
              this.backgroundOrigin$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundOrigin'), backgroundOrigin_0);
            }
          },
          backgroundPosition: {
            get: function () {
              return this.backgroundPosition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundPosition'));
            },
            set: function (backgroundPosition_0) {
              this.backgroundPosition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundPosition'), backgroundPosition_0);
            }
          },
          backgroundRepeat: {
            get: function () {
              return this.backgroundRepeat$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundRepeat'));
            },
            set: function (backgroundRepeat_0) {
              this.backgroundRepeat$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundRepeat'), backgroundRepeat_0);
            }
          },
          backgroundSize: {
            get: function () {
              return this.backgroundSize$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('backgroundSize'));
            },
            set: function (backgroundSize_0) {
              this.backgroundSize$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('backgroundSize'), backgroundSize_0);
            }
          },
          border: {
            get: function () {
              return this.border$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('border'));
            },
            set: function (border_0) {
              this.border$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('border'), border_0);
            }
          },
          borderBottom: {
            get: function () {
              return this.borderBottom$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottom'));
            },
            set: function (borderBottom_0) {
              this.borderBottom$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottom'), borderBottom_0);
            }
          },
          borderBottomColor: {
            get: function () {
              return this.borderBottomColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottomColor'));
            },
            set: function (borderBottomColor_0) {
              this.borderBottomColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottomColor'), borderBottomColor_0);
            }
          },
          borderBottomLeftRadius: {
            get: function () {
              return this.borderBottomLeftRadius$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottomLeftRadius'));
            },
            set: function (borderBottomLeftRadius_0) {
              this.borderBottomLeftRadius$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottomLeftRadius'), borderBottomLeftRadius_0);
            }
          },
          borderBottomRightRadius: {
            get: function () {
              return this.borderBottomRightRadius$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottomRightRadius'));
            },
            set: function (borderBottomRightRadius_0) {
              this.borderBottomRightRadius$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottomRightRadius'), borderBottomRightRadius_0);
            }
          },
          borderBottomStyle: {
            get: function () {
              return this.borderBottomStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottomStyle'));
            },
            set: function (borderBottomStyle_0) {
              this.borderBottomStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottomStyle'), borderBottomStyle_0);
            }
          },
          borderBottomWidth: {
            get: function () {
              return this.borderBottomWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderBottomWidth'));
            },
            set: function (borderBottomWidth_0) {
              this.borderBottomWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderBottomWidth'), borderBottomWidth_0);
            }
          },
          borderCollapse: {
            get: function () {
              return this.borderCollapse$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderCollapse'));
            },
            set: function (borderCollapse_0) {
              this.borderCollapse$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderCollapse'), borderCollapse_0);
            }
          },
          borderColor: {
            get: function () {
              return this.borderColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderColor'));
            },
            set: function (borderColor_0) {
              this.borderColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderColor'), borderColor_0);
            }
          },
          borderImage: {
            get: function () {
              return this.borderImage$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImage'));
            },
            set: function (borderImage_0) {
              this.borderImage$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImage'), borderImage_0);
            }
          },
          borderImageOutset: {
            get: function () {
              return this.borderImageOutset$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImageOutset'));
            },
            set: function (borderImageOutset_0) {
              this.borderImageOutset$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImageOutset'), borderImageOutset_0);
            }
          },
          borderImageRepeat: {
            get: function () {
              return this.borderImageRepeat$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImageRepeat'));
            },
            set: function (borderImageRepeat_0) {
              this.borderImageRepeat$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImageRepeat'), borderImageRepeat_0);
            }
          },
          borderImageSlice: {
            get: function () {
              return this.borderImageSlice$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImageSlice'));
            },
            set: function (borderImageSlice_0) {
              this.borderImageSlice$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImageSlice'), borderImageSlice_0);
            }
          },
          borderImageSource: {
            get: function () {
              return this.borderImageSource$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImageSource'));
            },
            set: function (borderImageSource_0) {
              this.borderImageSource$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImageSource'), borderImageSource_0);
            }
          },
          borderImageWidth: {
            get: function () {
              return this.borderImageWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderImageWidth'));
            },
            set: function (borderImageWidth_0) {
              this.borderImageWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderImageWidth'), borderImageWidth_0);
            }
          },
          borderLeft: {
            get: function () {
              return this.borderLeft$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderLeft'));
            },
            set: function (borderLeft_0) {
              this.borderLeft$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderLeft'), borderLeft_0);
            }
          },
          borderLeftColor: {
            get: function () {
              return this.borderLeftColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderLeftColor'));
            },
            set: function (borderLeftColor_0) {
              this.borderLeftColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderLeftColor'), borderLeftColor_0);
            }
          },
          borderLeftStyle: {
            get: function () {
              return this.borderLeftStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderLeftStyle'));
            },
            set: function (borderLeftStyle_0) {
              this.borderLeftStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderLeftStyle'), borderLeftStyle_0);
            }
          },
          borderLeftWidth: {
            get: function () {
              return this.borderLeftWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderLeftWidth'));
            },
            set: function (borderLeftWidth_0) {
              this.borderLeftWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderLeftWidth'), borderLeftWidth_0);
            }
          },
          borderRadius: {
            get: function () {
              return this.borderRadius$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderRadius'));
            },
            set: function (borderRadius_0) {
              this.borderRadius$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderRadius'), borderRadius_0);
            }
          },
          borderRight: {
            get: function () {
              return this.borderRight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderRight'));
            },
            set: function (borderRight_0) {
              this.borderRight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderRight'), borderRight_0);
            }
          },
          borderRightColor: {
            get: function () {
              return this.borderRightColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderRightColor'));
            },
            set: function (borderRightColor_0) {
              this.borderRightColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderRightColor'), borderRightColor_0);
            }
          },
          borderRightStyle: {
            get: function () {
              return this.borderRightStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderRightStyle'));
            },
            set: function (borderRightStyle_0) {
              this.borderRightStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderRightStyle'), borderRightStyle_0);
            }
          },
          borderRightWidth: {
            get: function () {
              return this.borderRightWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderRightWidth'));
            },
            set: function (borderRightWidth_0) {
              this.borderRightWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderRightWidth'), borderRightWidth_0);
            }
          },
          borderSpacing: {
            get: function () {
              return this.borderSpacing$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderSpacing'));
            },
            set: function (borderSpacing_0) {
              this.borderSpacing$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderSpacing'), borderSpacing_0);
            }
          },
          borderStyle: {
            get: function () {
              return this.borderStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderStyle'));
            },
            set: function (borderStyle_0) {
              this.borderStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderStyle'), borderStyle_0);
            }
          },
          borderTop: {
            get: function () {
              return this.borderTop$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTop'));
            },
            set: function (borderTop_0) {
              this.borderTop$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTop'), borderTop_0);
            }
          },
          borderTopColor: {
            get: function () {
              return this.borderTopColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTopColor'));
            },
            set: function (borderTopColor_0) {
              this.borderTopColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTopColor'), borderTopColor_0);
            }
          },
          borderTopLeftRadius: {
            get: function () {
              return this.borderTopLeftRadius$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTopLeftRadius'));
            },
            set: function (borderTopLeftRadius_0) {
              this.borderTopLeftRadius$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTopLeftRadius'), borderTopLeftRadius_0);
            }
          },
          borderTopRightRadius: {
            get: function () {
              return this.borderTopRightRadius$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTopRightRadius'));
            },
            set: function (borderTopRightRadius_0) {
              this.borderTopRightRadius$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTopRightRadius'), borderTopRightRadius_0);
            }
          },
          borderTopStyle: {
            get: function () {
              return this.borderTopStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTopStyle'));
            },
            set: function (borderTopStyle_0) {
              this.borderTopStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTopStyle'), borderTopStyle_0);
            }
          },
          borderTopWidth: {
            get: function () {
              return this.borderTopWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderTopWidth'));
            },
            set: function (borderTopWidth_0) {
              this.borderTopWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderTopWidth'), borderTopWidth_0);
            }
          },
          borderWidth: {
            get: function () {
              return this.borderWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('borderWidth'));
            },
            set: function (borderWidth_0) {
              this.borderWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('borderWidth'), borderWidth_0);
            }
          },
          bottom: {
            get: function () {
              return this.bottom$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('bottom'));
            },
            set: function (bottom_0) {
              this.bottom$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('bottom'), bottom_0);
            }
          },
          boxDecorationBreak: {
            get: function () {
              return this.boxDecorationBreak$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('boxDecorationBreak'));
            },
            set: function (boxDecorationBreak_0) {
              this.boxDecorationBreak$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('boxDecorationBreak'), boxDecorationBreak_0);
            }
          },
          boxShadow: {
            get: function () {
              return this.boxShadow$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('boxShadow'));
            },
            set: function (boxShadow_0) {
              this.boxShadow$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('boxShadow'), boxShadow_0);
            }
          },
          boxSizing: {
            get: function () {
              return this.boxSizing$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('boxSizing'));
            },
            set: function (boxSizing_0) {
              this.boxSizing$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('boxSizing'), boxSizing_0);
            }
          },
          breakAfter: {
            get: function () {
              return this.breakAfter$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('breakAfter'));
            },
            set: function (breakAfter_0) {
              this.breakAfter$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('breakAfter'), breakAfter_0);
            }
          },
          breakBefore: {
            get: function () {
              return this.breakBefore$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('breakBefore'));
            },
            set: function (breakBefore_0) {
              this.breakBefore$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('breakBefore'), breakBefore_0);
            }
          },
          breakInside: {
            get: function () {
              return this.breakInside$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('breakInside'));
            },
            set: function (breakInside_0) {
              this.breakInside$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('breakInside'), breakInside_0);
            }
          },
          captionSide: {
            get: function () {
              return this.captionSide$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('captionSide'));
            },
            set: function (captionSide_0) {
              this.captionSide$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('captionSide'), captionSide_0);
            }
          },
          clear: {
            get: function () {
              return this.clear$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('clear'));
            },
            set: function (clear_0) {
              this.clear$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('clear'), clear_0);
            }
          },
          clip: {
            get: function () {
              return this.clip$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('clip'));
            },
            set: function (clip_0) {
              this.clip$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('clip'), clip_0);
            }
          },
          color: {
            get: function () {
              return this.color$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('color'));
            },
            set: function (color_0) {
              this.color$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('color'), color_0);
            }
          },
          columnCount: {
            get: function () {
              return this.columnCount$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnCount'));
            },
            set: function (columnCount_0) {
              this.columnCount$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnCount'), columnCount_0);
            }
          },
          columnFill: {
            get: function () {
              return this.columnFill$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnFill'));
            },
            set: function (columnFill_0) {
              this.columnFill$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnFill'), columnFill_0);
            }
          },
          columnGap: {
            get: function () {
              return this.columnGap$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnGap'));
            },
            set: function (columnGap_0) {
              this.columnGap$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnGap'), columnGap_0);
            }
          },
          columnRule: {
            get: function () {
              return this.columnRule$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnRule'));
            },
            set: function (columnRule_0) {
              this.columnRule$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnRule'), columnRule_0);
            }
          },
          columnRuleColor: {
            get: function () {
              return this.columnRuleColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnRuleColor'));
            },
            set: function (columnRuleColor_0) {
              this.columnRuleColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnRuleColor'), columnRuleColor_0);
            }
          },
          columnRuleStyle: {
            get: function () {
              return this.columnRuleStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnRuleStyle'));
            },
            set: function (columnRuleStyle_0) {
              this.columnRuleStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnRuleStyle'), columnRuleStyle_0);
            }
          },
          columnRuleWidth: {
            get: function () {
              return this.columnRuleWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnRuleWidth'));
            },
            set: function (columnRuleWidth_0) {
              this.columnRuleWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnRuleWidth'), columnRuleWidth_0);
            }
          },
          columnSpan: {
            get: function () {
              return this.columnSpan$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnSpan'));
            },
            set: function (columnSpan_0) {
              this.columnSpan$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnSpan'), columnSpan_0);
            }
          },
          columnWidth: {
            get: function () {
              return this.columnWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columnWidth'));
            },
            set: function (columnWidth_0) {
              this.columnWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columnWidth'), columnWidth_0);
            }
          },
          columns: {
            get: function () {
              return this.columns$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('columns'));
            },
            set: function (columns_0) {
              this.columns$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('columns'), columns_0);
            }
          },
          content: {
            get: function () {
              return this.content$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('content'));
            },
            set: function (content_0) {
              this.content$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('content'), content_0);
            }
          },
          counterIncrement: {
            get: function () {
              return this.counterIncrement$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('counterIncrement'));
            },
            set: function (counterIncrement_0) {
              this.counterIncrement$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('counterIncrement'), counterIncrement_0);
            }
          },
          counterReset: {
            get: function () {
              return this.counterReset$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('counterReset'));
            },
            set: function (counterReset_0) {
              this.counterReset$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('counterReset'), counterReset_0);
            }
          },
          cursor: {
            get: function () {
              return this.cursor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('cursor'));
            },
            set: function (cursor_0) {
              this.cursor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('cursor'), cursor_0);
            }
          },
          direction: {
            get: function () {
              return this.direction$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('direction'));
            },
            set: function (direction_0) {
              this.direction$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('direction'), direction_0);
            }
          },
          display: {
            get: function () {
              return this.display$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('display'));
            },
            set: function (display_0) {
              this.display$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('display'), display_0);
            }
          },
          emptyCells: {
            get: function () {
              return this.emptyCells$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('emptyCells'));
            },
            set: function (emptyCells_0) {
              this.emptyCells$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('emptyCells'), emptyCells_0);
            }
          },
          filter: {
            get: function () {
              return this.filter$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('filter'));
            },
            set: function (filter_0) {
              this.filter$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('filter'), filter_0);
            }
          },
          flex: {
            get: function () {
              return this.flex$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flex'));
            },
            set: function (flex_0) {
              this.flex$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flex'), flex_0);
            }
          },
          flexBasis: {
            get: function () {
              return this.flexBasis$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexBasis'));
            },
            set: function (flexBasis_0) {
              this.flexBasis$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexBasis'), flexBasis_0);
            }
          },
          flexDirection: {
            get: function () {
              return this.flexDirection$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexDirection'));
            },
            set: function (flexDirection_0) {
              this.flexDirection$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexDirection'), flexDirection_0);
            }
          },
          flexFlow: {
            get: function () {
              return this.flexFlow$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexFlow'));
            },
            set: function (flexFlow_0) {
              this.flexFlow$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexFlow'), flexFlow_0);
            }
          },
          flexGrow: {
            get: function () {
              return this.flexGrow$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexGrow'));
            },
            set: function (flexGrow_0) {
              this.flexGrow$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexGrow'), flexGrow_0);
            }
          },
          flexShrink: {
            get: function () {
              return this.flexShrink$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexShrink'));
            },
            set: function (flexShrink_0) {
              this.flexShrink$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexShrink'), flexShrink_0);
            }
          },
          flexWrap: {
            get: function () {
              return this.flexWrap$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('flexWrap'));
            },
            set: function (flexWrap_0) {
              this.flexWrap$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('flexWrap'), flexWrap_0);
            }
          },
          font: {
            get: function () {
              return this.font$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('font'));
            },
            set: function (font_0) {
              this.font$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('font'), font_0);
            }
          },
          fontFamily: {
            get: function () {
              return this.fontFamily$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontFamily'));
            },
            set: function (fontFamily_0) {
              this.fontFamily$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontFamily'), fontFamily_0);
            }
          },
          fontFeatureSettings: {
            get: function () {
              return this.fontFeatureSettings$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontFeatureSettings'));
            },
            set: function (fontFeatureSettings_0) {
              this.fontFeatureSettings$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontFeatureSettings'), fontFeatureSettings_0);
            }
          },
          fontKerning: {
            get: function () {
              return this.fontKerning$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontKerning'));
            },
            set: function (fontKerning_0) {
              this.fontKerning$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontKerning'), fontKerning_0);
            }
          },
          fontLanguageOverride: {
            get: function () {
              return this.fontLanguageOverride$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontLanguageOverride'));
            },
            set: function (fontLanguageOverride_0) {
              this.fontLanguageOverride$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontLanguageOverride'), fontLanguageOverride_0);
            }
          },
          fontSize: {
            get: function () {
              return this.fontSize$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontSize'));
            },
            set: function (fontSize_0) {
              this.fontSize$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontSize'), fontSize_0);
            }
          },
          fontSizeAdjust: {
            get: function () {
              return this.fontSizeAdjust$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontSizeAdjust'));
            },
            set: function (fontSizeAdjust_0) {
              this.fontSizeAdjust$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontSizeAdjust'), fontSizeAdjust_0);
            }
          },
          fontStretch: {
            get: function () {
              return this.fontStretch$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontStretch'));
            },
            set: function (fontStretch_0) {
              this.fontStretch$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontStretch'), fontStretch_0);
            }
          },
          fontStyle: {
            get: function () {
              return this.fontStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontStyle'));
            },
            set: function (fontStyle_0) {
              this.fontStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontStyle'), fontStyle_0);
            }
          },
          fontSynthesis: {
            get: function () {
              return this.fontSynthesis$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontSynthesis'));
            },
            set: function (fontSynthesis_0) {
              this.fontSynthesis$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontSynthesis'), fontSynthesis_0);
            }
          },
          fontVariant: {
            get: function () {
              return this.fontVariant$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariant'));
            },
            set: function (fontVariant_0) {
              this.fontVariant$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariant'), fontVariant_0);
            }
          },
          fontVariantAlternates: {
            get: function () {
              return this.fontVariantAlternates$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantAlternates'));
            },
            set: function (fontVariantAlternates_0) {
              this.fontVariantAlternates$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantAlternates'), fontVariantAlternates_0);
            }
          },
          fontVariantCaps: {
            get: function () {
              return this.fontVariantCaps$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantCaps'));
            },
            set: function (fontVariantCaps_0) {
              this.fontVariantCaps$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantCaps'), fontVariantCaps_0);
            }
          },
          fontVariantEastAsian: {
            get: function () {
              return this.fontVariantEastAsian$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantEastAsian'));
            },
            set: function (fontVariantEastAsian_0) {
              this.fontVariantEastAsian$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantEastAsian'), fontVariantEastAsian_0);
            }
          },
          fontVariantLigatures: {
            get: function () {
              return this.fontVariantLigatures$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantLigatures'));
            },
            set: function (fontVariantLigatures_0) {
              this.fontVariantLigatures$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantLigatures'), fontVariantLigatures_0);
            }
          },
          fontVariantNumeric: {
            get: function () {
              return this.fontVariantNumeric$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantNumeric'));
            },
            set: function (fontVariantNumeric_0) {
              this.fontVariantNumeric$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantNumeric'), fontVariantNumeric_0);
            }
          },
          fontVariantPosition: {
            get: function () {
              return this.fontVariantPosition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontVariantPosition'));
            },
            set: function (fontVariantPosition_0) {
              this.fontVariantPosition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontVariantPosition'), fontVariantPosition_0);
            }
          },
          fontWeight: {
            get: function () {
              return this.fontWeight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('fontWeight'));
            },
            set: function (fontWeight_0) {
              this.fontWeight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('fontWeight'), fontWeight_0);
            }
          },
          hangingPunctuation: {
            get: function () {
              return this.hangingPunctuation$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('hangingPunctuation'));
            },
            set: function (hangingPunctuation_0) {
              this.hangingPunctuation$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('hangingPunctuation'), hangingPunctuation_0);
            }
          },
          height: {
            get: function () {
              return this.height$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('height'));
            },
            set: function (height_0) {
              this.height$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('height'), height_0);
            }
          },
          hyphens: {
            get: function () {
              return this.hyphens$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('hyphens'));
            },
            set: function (hyphens_0) {
              this.hyphens$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('hyphens'), hyphens_0);
            }
          },
          imageOrientation: {
            get: function () {
              return this.imageOrientation$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('imageOrientation'));
            },
            set: function (imageOrientation_0) {
              this.imageOrientation$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('imageOrientation'), imageOrientation_0);
            }
          },
          imageRendering: {
            get: function () {
              return this.imageRendering$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('imageRendering'));
            },
            set: function (imageRendering_0) {
              this.imageRendering$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('imageRendering'), imageRendering_0);
            }
          },
          imageResolution: {
            get: function () {
              return this.imageResolution$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('imageResolution'));
            },
            set: function (imageResolution_0) {
              this.imageResolution$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('imageResolution'), imageResolution_0);
            }
          },
          imeMode: {
            get: function () {
              return this.imeMode$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('imeMode'));
            },
            set: function (imeMode_0) {
              this.imeMode$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('imeMode'), imeMode_0);
            }
          },
          justifyContent: {
            get: function () {
              return this.justifyContent$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('justifyContent'));
            },
            set: function (justifyContent_0) {
              this.justifyContent$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('justifyContent'), justifyContent_0);
            }
          },
          left: {
            get: function () {
              return this.left$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('left'));
            },
            set: function (left_0) {
              this.left$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('left'), left_0);
            }
          },
          letterSpacing: {
            get: function () {
              return this.letterSpacing$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('letterSpacing'));
            },
            set: function (letterSpacing_0) {
              this.letterSpacing$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('letterSpacing'), letterSpacing_0);
            }
          },
          lineBreak: {
            get: function () {
              return this.lineBreak$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('lineBreak'));
            },
            set: function (lineBreak_0) {
              this.lineBreak$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('lineBreak'), lineBreak_0);
            }
          },
          lineHeight: {
            get: function () {
              return this.lineHeight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('lineHeight'));
            },
            set: function (lineHeight_0) {
              this.lineHeight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('lineHeight'), lineHeight_0);
            }
          },
          listStyle: {
            get: function () {
              return this.listStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('listStyle'));
            },
            set: function (listStyle_0) {
              this.listStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('listStyle'), listStyle_0);
            }
          },
          listStyleImage: {
            get: function () {
              return this.listStyleImage$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('listStyleImage'));
            },
            set: function (listStyleImage_0) {
              this.listStyleImage$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('listStyleImage'), listStyleImage_0);
            }
          },
          listStylePosition: {
            get: function () {
              return this.listStylePosition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('listStylePosition'));
            },
            set: function (listStylePosition_0) {
              this.listStylePosition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('listStylePosition'), listStylePosition_0);
            }
          },
          listStyleType: {
            get: function () {
              return this.listStyleType$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('listStyleType'));
            },
            set: function (listStyleType_0) {
              this.listStyleType$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('listStyleType'), listStyleType_0);
            }
          },
          margin: {
            get: function () {
              return this.margin$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('margin'));
            },
            set: function (margin_0) {
              this.margin$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('margin'), margin_0);
            }
          },
          marginBottom: {
            get: function () {
              return this.marginBottom$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marginBottom'));
            },
            set: function (marginBottom_0) {
              this.marginBottom$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marginBottom'), marginBottom_0);
            }
          },
          marginLeft: {
            get: function () {
              return this.marginLeft$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marginLeft'));
            },
            set: function (marginLeft_0) {
              this.marginLeft$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marginLeft'), marginLeft_0);
            }
          },
          marginRight: {
            get: function () {
              return this.marginRight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marginRight'));
            },
            set: function (marginRight_0) {
              this.marginRight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marginRight'), marginRight_0);
            }
          },
          marginTop: {
            get: function () {
              return this.marginTop$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marginTop'));
            },
            set: function (marginTop_0) {
              this.marginTop$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marginTop'), marginTop_0);
            }
          },
          mark: {
            get: function () {
              return this.mark$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('mark'));
            },
            set: function (mark_0) {
              this.mark$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('mark'), mark_0);
            }
          },
          markAfter: {
            get: function () {
              return this.markAfter$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('markAfter'));
            },
            set: function (markAfter_0) {
              this.markAfter$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('markAfter'), markAfter_0);
            }
          },
          markBefore: {
            get: function () {
              return this.markBefore$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('markBefore'));
            },
            set: function (markBefore_0) {
              this.markBefore$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('markBefore'), markBefore_0);
            }
          },
          marks: {
            get: function () {
              return this.marks$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marks'));
            },
            set: function (marks_0) {
              this.marks$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marks'), marks_0);
            }
          },
          marqueeDirection: {
            get: function () {
              return this.marqueeDirection$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marqueeDirection'));
            },
            set: function (marqueeDirection_0) {
              this.marqueeDirection$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marqueeDirection'), marqueeDirection_0);
            }
          },
          marqueePlayCount: {
            get: function () {
              return this.marqueePlayCount$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marqueePlayCount'));
            },
            set: function (marqueePlayCount_0) {
              this.marqueePlayCount$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marqueePlayCount'), marqueePlayCount_0);
            }
          },
          marqueeSpeed: {
            get: function () {
              return this.marqueeSpeed$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marqueeSpeed'));
            },
            set: function (marqueeSpeed_0) {
              this.marqueeSpeed$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marqueeSpeed'), marqueeSpeed_0);
            }
          },
          marqueeStyle: {
            get: function () {
              return this.marqueeStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('marqueeStyle'));
            },
            set: function (marqueeStyle_0) {
              this.marqueeStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('marqueeStyle'), marqueeStyle_0);
            }
          },
          mask: {
            get: function () {
              return this.mask$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('mask'));
            },
            set: function (mask_0) {
              this.mask$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('mask'), mask_0);
            }
          },
          maskType: {
            get: function () {
              return this.maskType$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('maskType'));
            },
            set: function (maskType_0) {
              this.maskType$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('maskType'), maskType_0);
            }
          },
          maxHeight: {
            get: function () {
              return this.maxHeight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('maxHeight'));
            },
            set: function (maxHeight_0) {
              this.maxHeight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('maxHeight'), maxHeight_0);
            }
          },
          maxWidth: {
            get: function () {
              return this.maxWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('maxWidth'));
            },
            set: function (maxWidth_0) {
              this.maxWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('maxWidth'), maxWidth_0);
            }
          },
          minHeight: {
            get: function () {
              return this.minHeight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('minHeight'));
            },
            set: function (minHeight_0) {
              this.minHeight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('minHeight'), minHeight_0);
            }
          },
          minWidth: {
            get: function () {
              return this.minWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('minWidth'));
            },
            set: function (minWidth_0) {
              this.minWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('minWidth'), minWidth_0);
            }
          },
          navDown: {
            get: function () {
              return this.navDown$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('navDown'));
            },
            set: function (navDown_0) {
              this.navDown$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('navDown'), navDown_0);
            }
          },
          navIndex: {
            get: function () {
              return this.navIndex$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('navIndex'));
            },
            set: function (navIndex_0) {
              this.navIndex$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('navIndex'), navIndex_0);
            }
          },
          navLeft: {
            get: function () {
              return this.navLeft$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('navLeft'));
            },
            set: function (navLeft_0) {
              this.navLeft$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('navLeft'), navLeft_0);
            }
          },
          navRight: {
            get: function () {
              return this.navRight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('navRight'));
            },
            set: function (navRight_0) {
              this.navRight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('navRight'), navRight_0);
            }
          },
          navUp: {
            get: function () {
              return this.navUp$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('navUp'));
            },
            set: function (navUp_0) {
              this.navUp$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('navUp'), navUp_0);
            }
          },
          objectFit: {
            get: function () {
              return this.objectFit$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('objectFit'));
            },
            set: function (objectFit_0) {
              this.objectFit$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('objectFit'), objectFit_0);
            }
          },
          objectPosition: {
            get: function () {
              return this.objectPosition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('objectPosition'));
            },
            set: function (objectPosition_0) {
              this.objectPosition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('objectPosition'), objectPosition_0);
            }
          },
          opacity: {
            get: function () {
              return this.opacity$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('opacity'));
            },
            set: function (opacity_0) {
              this.opacity$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('opacity'), opacity_0);
            }
          },
          order: {
            get: function () {
              return this.order$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('order'));
            },
            set: function (order_0) {
              this.order$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('order'), order_0);
            }
          },
          orphans: {
            get: function () {
              return this.orphans$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('orphans'));
            },
            set: function (orphans_0) {
              this.orphans$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('orphans'), orphans_0);
            }
          },
          outline: {
            get: function () {
              return this.outline$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('outline'));
            },
            set: function (outline_0) {
              this.outline$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('outline'), outline_0);
            }
          },
          outlineColor: {
            get: function () {
              return this.outlineColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('outlineColor'));
            },
            set: function (outlineColor_0) {
              this.outlineColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('outlineColor'), outlineColor_0);
            }
          },
          outlineOffset: {
            get: function () {
              return this.outlineOffset$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('outlineOffset'));
            },
            set: function (outlineOffset_0) {
              this.outlineOffset$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('outlineOffset'), outlineOffset_0);
            }
          },
          outlineStyle: {
            get: function () {
              return this.outlineStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('outlineStyle'));
            },
            set: function (outlineStyle_0) {
              this.outlineStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('outlineStyle'), outlineStyle_0);
            }
          },
          outlineWidth: {
            get: function () {
              return this.outlineWidth$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('outlineWidth'));
            },
            set: function (outlineWidth_0) {
              this.outlineWidth$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('outlineWidth'), outlineWidth_0);
            }
          },
          overflowWrap: {
            get: function () {
              return this.overflowWrap$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('overflowWrap'));
            },
            set: function (overflowWrap_0) {
              this.overflowWrap$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('overflowWrap'), overflowWrap_0);
            }
          },
          overflowX: {
            get: function () {
              return this.overflowX$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('overflowX'));
            },
            set: function (overflowX_0) {
              this.overflowX$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('overflowX'), overflowX_0);
            }
          },
          overflowY: {
            get: function () {
              return this.overflowY$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('overflowY'));
            },
            set: function (overflowY_0) {
              this.overflowY$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('overflowY'), overflowY_0);
            }
          },
          padding: {
            get: function () {
              return this.padding$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('padding'));
            },
            set: function (padding_0) {
              this.padding$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('padding'), padding_0);
            }
          },
          paddingBottom: {
            get: function () {
              return this.paddingBottom$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('paddingBottom'));
            },
            set: function (paddingBottom_0) {
              this.paddingBottom$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('paddingBottom'), paddingBottom_0);
            }
          },
          paddingLeft: {
            get: function () {
              return this.paddingLeft$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('paddingLeft'));
            },
            set: function (paddingLeft_0) {
              this.paddingLeft$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('paddingLeft'), paddingLeft_0);
            }
          },
          paddingRight: {
            get: function () {
              return this.paddingRight$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('paddingRight'));
            },
            set: function (paddingRight_0) {
              this.paddingRight$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('paddingRight'), paddingRight_0);
            }
          },
          paddingTop: {
            get: function () {
              return this.paddingTop$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('paddingTop'));
            },
            set: function (paddingTop_0) {
              this.paddingTop$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('paddingTop'), paddingTop_0);
            }
          },
          pageBreakAfter: {
            get: function () {
              return this.pageBreakAfter$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('pageBreakAfter'));
            },
            set: function (pageBreakAfter_0) {
              this.pageBreakAfter$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('pageBreakAfter'), pageBreakAfter_0);
            }
          },
          pageBreakBefore: {
            get: function () {
              return this.pageBreakBefore$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('pageBreakBefore'));
            },
            set: function (pageBreakBefore_0) {
              this.pageBreakBefore$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('pageBreakBefore'), pageBreakBefore_0);
            }
          },
          pageBreakInside: {
            get: function () {
              return this.pageBreakInside$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('pageBreakInside'));
            },
            set: function (pageBreakInside_0) {
              this.pageBreakInside$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('pageBreakInside'), pageBreakInside_0);
            }
          },
          perspective: {
            get: function () {
              return this.perspective$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('perspective'));
            },
            set: function (perspective_0) {
              this.perspective$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('perspective'), perspective_0);
            }
          },
          perspectiveOrigin: {
            get: function () {
              return this.perspectiveOrigin$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('perspectiveOrigin'));
            },
            set: function (perspectiveOrigin_0) {
              this.perspectiveOrigin$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('perspectiveOrigin'), perspectiveOrigin_0);
            }
          },
          phonemes: {
            get: function () {
              return this.phonemes$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('phonemes'));
            },
            set: function (phonemes_0) {
              this.phonemes$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('phonemes'), phonemes_0);
            }
          },
          position: {
            get: function () {
              return this.position$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('position'));
            },
            set: function (position_0) {
              this.position$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('position'), position_0);
            }
          },
          quotes: {
            get: function () {
              return this.quotes$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('quotes'));
            },
            set: function (quotes_0) {
              this.quotes$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('quotes'), quotes_0);
            }
          },
          resize: {
            get: function () {
              return this.resize$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('resize'));
            },
            set: function (resize_0) {
              this.resize$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('resize'), resize_0);
            }
          },
          rest: {
            get: function () {
              return this.rest$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('rest'));
            },
            set: function (rest_0) {
              this.rest$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('rest'), rest_0);
            }
          },
          restAfter: {
            get: function () {
              return this.restAfter$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('restAfter'));
            },
            set: function (restAfter_0) {
              this.restAfter$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('restAfter'), restAfter_0);
            }
          },
          restBefore: {
            get: function () {
              return this.restBefore$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('restBefore'));
            },
            set: function (restBefore_0) {
              this.restBefore$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('restBefore'), restBefore_0);
            }
          },
          right: {
            get: function () {
              return this.right$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('right'));
            },
            set: function (right_0) {
              this.right$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('right'), right_0);
            }
          },
          tabSize: {
            get: function () {
              return this.tabSize$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('tabSize'));
            },
            set: function (tabSize_0) {
              this.tabSize$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('tabSize'), tabSize_0);
            }
          },
          tableLayout: {
            get: function () {
              return this.tableLayout$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('tableLayout'));
            },
            set: function (tableLayout_0) {
              this.tableLayout$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('tableLayout'), tableLayout_0);
            }
          },
          textAlign: {
            get: function () {
              return this.textAlign$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textAlign'));
            },
            set: function (textAlign_0) {
              this.textAlign$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textAlign'), textAlign_0);
            }
          },
          textAlignLast: {
            get: function () {
              return this.textAlignLast$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textAlignLast'));
            },
            set: function (textAlignLast_0) {
              this.textAlignLast$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textAlignLast'), textAlignLast_0);
            }
          },
          textCombineUpright: {
            get: function () {
              return this.textCombineUpright$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textCombineUpright'));
            },
            set: function (textCombineUpright_0) {
              this.textCombineUpright$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textCombineUpright'), textCombineUpright_0);
            }
          },
          textDecoration: {
            get: function () {
              return this.textDecoration$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textDecoration'));
            },
            set: function (textDecoration_0) {
              this.textDecoration$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textDecoration'), textDecoration_0);
            }
          },
          textDecorationColor: {
            get: function () {
              return this.textDecorationColor$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textDecorationColor'));
            },
            set: function (textDecorationColor_0) {
              this.textDecorationColor$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textDecorationColor'), textDecorationColor_0);
            }
          },
          textDecorationLine: {
            get: function () {
              return this.textDecorationLine$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textDecorationLine'));
            },
            set: function (textDecorationLine_0) {
              this.textDecorationLine$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textDecorationLine'), textDecorationLine_0);
            }
          },
          textDecorationStyle: {
            get: function () {
              return this.textDecorationStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textDecorationStyle'));
            },
            set: function (textDecorationStyle_0) {
              this.textDecorationStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textDecorationStyle'), textDecorationStyle_0);
            }
          },
          textIndent: {
            get: function () {
              return this.textIndent$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textIndent'));
            },
            set: function (textIndent_0) {
              this.textIndent$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textIndent'), textIndent_0);
            }
          },
          textJustify: {
            get: function () {
              return this.textJustify$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textJustify'));
            },
            set: function (textJustify_0) {
              this.textJustify$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textJustify'), textJustify_0);
            }
          },
          textOrientation: {
            get: function () {
              return this.textOrientation$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textOrientation'));
            },
            set: function (textOrientation_0) {
              this.textOrientation$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textOrientation'), textOrientation_0);
            }
          },
          textOverflow: {
            get: function () {
              return this.textOverflow$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textOverflow'));
            },
            set: function (textOverflow_0) {
              this.textOverflow$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textOverflow'), textOverflow_0);
            }
          },
          textShadow: {
            get: function () {
              return this.textShadow$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textShadow'));
            },
            set: function (textShadow_0) {
              this.textShadow$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textShadow'), textShadow_0);
            }
          },
          textTransform: {
            get: function () {
              return this.textTransform$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textTransform'));
            },
            set: function (textTransform_0) {
              this.textTransform$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textTransform'), textTransform_0);
            }
          },
          textUnderlinePosition: {
            get: function () {
              return this.textUnderlinePosition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('textUnderlinePosition'));
            },
            set: function (textUnderlinePosition_0) {
              this.textUnderlinePosition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('textUnderlinePosition'), textUnderlinePosition_0);
            }
          },
          top: {
            get: function () {
              return this.top$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('top'));
            },
            set: function (top_0) {
              this.top$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('top'), top_0);
            }
          },
          transform: {
            get: function () {
              return this.transform$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transform'));
            },
            set: function (transform_0) {
              this.transform$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transform'), transform_0);
            }
          },
          transformOrigin: {
            get: function () {
              return this.transformOrigin$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transformOrigin'));
            },
            set: function (transformOrigin_0) {
              this.transformOrigin$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transformOrigin'), transformOrigin_0);
            }
          },
          transformStyle: {
            get: function () {
              return this.transformStyle$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transformStyle'));
            },
            set: function (transformStyle_0) {
              this.transformStyle$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transformStyle'), transformStyle_0);
            }
          },
          transition: {
            get: function () {
              return this.transition$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transition'));
            },
            set: function (transition_0) {
              this.transition$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transition'), transition_0);
            }
          },
          transitionDelay: {
            get: function () {
              return this.transitionDelay$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transitionDelay'));
            },
            set: function (transitionDelay_0) {
              this.transitionDelay$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transitionDelay'), transitionDelay_0);
            }
          },
          transitionDuration: {
            get: function () {
              return this.transitionDuration$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transitionDuration'));
            },
            set: function (transitionDuration_0) {
              this.transitionDuration$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transitionDuration'), transitionDuration_0);
            }
          },
          transitionProperty: {
            get: function () {
              return this.transitionProperty$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transitionProperty'));
            },
            set: function (transitionProperty_0) {
              this.transitionProperty$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transitionProperty'), transitionProperty_0);
            }
          },
          transitionTimingFunction: {
            get: function () {
              return this.transitionTimingFunction$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('transitionTimingFunction'));
            },
            set: function (transitionTimingFunction_0) {
              this.transitionTimingFunction$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('transitionTimingFunction'), transitionTimingFunction_0);
            }
          },
          unicodeBidi: {
            get: function () {
              return this.unicodeBidi$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('unicodeBidi'));
            },
            set: function (unicodeBidi_0) {
              this.unicodeBidi$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('unicodeBidi'), unicodeBidi_0);
            }
          },
          verticalAlign: {
            get: function () {
              return this.verticalAlign$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('verticalAlign'));
            },
            set: function (verticalAlign_0) {
              this.verticalAlign$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('verticalAlign'), verticalAlign_0);
            }
          },
          visibility: {
            get: function () {
              return this.visibility$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('visibility'));
            },
            set: function (visibility_0) {
              this.visibility$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('visibility'), visibility_0);
            }
          },
          voiceBalance: {
            get: function () {
              return this.voiceBalance$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voiceBalance'));
            },
            set: function (voiceBalance_0) {
              this.voiceBalance$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voiceBalance'), voiceBalance_0);
            }
          },
          voiceDuration: {
            get: function () {
              return this.voiceDuration$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voiceDuration'));
            },
            set: function (voiceDuration_0) {
              this.voiceDuration$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voiceDuration'), voiceDuration_0);
            }
          },
          voicePitch: {
            get: function () {
              return this.voicePitch$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voicePitch'));
            },
            set: function (voicePitch_0) {
              this.voicePitch$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voicePitch'), voicePitch_0);
            }
          },
          voicePitchRange: {
            get: function () {
              return this.voicePitchRange$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voicePitchRange'));
            },
            set: function (voicePitchRange_0) {
              this.voicePitchRange$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voicePitchRange'), voicePitchRange_0);
            }
          },
          voiceRate: {
            get: function () {
              return this.voiceRate$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voiceRate'));
            },
            set: function (voiceRate_0) {
              this.voiceRate$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voiceRate'), voiceRate_0);
            }
          },
          voiceStress: {
            get: function () {
              return this.voiceStress$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voiceStress'));
            },
            set: function (voiceStress_0) {
              this.voiceStress$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voiceStress'), voiceStress_0);
            }
          },
          voiceVolume: {
            get: function () {
              return this.voiceVolume$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('voiceVolume'));
            },
            set: function (voiceVolume_0) {
              this.voiceVolume$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('voiceVolume'), voiceVolume_0);
            }
          },
          whiteSpace: {
            get: function () {
              return this.whiteSpace$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('whiteSpace'));
            },
            set: function (whiteSpace_0) {
              this.whiteSpace$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('whiteSpace'), whiteSpace_0);
            }
          },
          widows: {
            get: function () {
              return this.widows$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('widows'));
            },
            set: function (widows_0) {
              this.widows$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('widows'), widows_0);
            }
          },
          width: {
            get: function () {
              return this.width$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('width'));
            },
            set: function (width_0) {
              this.width$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('width'), width_0);
            }
          },
          wordBreak: {
            get: function () {
              return this.wordBreak$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('wordBreak'));
            },
            set: function (wordBreak_0) {
              this.wordBreak$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('wordBreak'), wordBreak_0);
            }
          },
          wordSpacing: {
            get: function () {
              return this.wordSpacing$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('wordSpacing'));
            },
            set: function (wordSpacing_0) {
              this.wordSpacing$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('wordSpacing'), wordSpacing_0);
            }
          },
          wordWrap: {
            get: function () {
              return this.wordWrap$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('wordWrap'));
            },
            set: function (wordWrap_0) {
              this.wordWrap$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('wordWrap'), wordWrap_0);
            }
          },
          writingMode: {
            get: function () {
              return this.writingMode$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('writingMode'));
            },
            set: function (writingMode_0) {
              this.writingMode$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('writingMode'), writingMode_0);
            }
          },
          zIndex: {
            get: function () {
              return this.zIndex$delegate.getValue_ozjeq6$(this, new Kotlin.PropertyMetadata('zIndex'));
            },
            set: function (zIndex_0) {
              this.zIndex$delegate.setValue_l2o8xw$(this, new Kotlin.PropertyMetadata('zIndex'), zIndex_0);
            }
          },
          resolveRuleName_4m49nr$_0: function (prop) {
            return _.fg.style.camelsToDashes_pdl1w0$(prop.name);
          }
        }, /** @lends _.fg.style.Rule */ {
          Property: Kotlin.createClass(null, function Property($outer, name) {
            this.$outer = $outer;
            if (name === void 0)
              name = null;
            this.name = name;
          }, /** @lends _.fg.style.Rule.Property.prototype */ {
            getValue_ozjeq6$: function (rule, prop) {
              var tmp$0, tmp$1;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveRuleName_4m49nr$_0(prop);
              return (tmp$1 = this.$outer._map.get_za3rmp$(styleName)) != null ? tmp$1 : '';
            },
            setValue_l2o8xw$: function (rule, prop, value) {
              var tmp$0;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveRuleName_4m49nr$_0(prop);
              if (value.length > 0) {
                this.$outer._map.put_wn2jw4$(styleName, value);
              }
               else {
                this.$outer._map.remove_za3rmp$(styleName);
              }
            }
          }),
          NullableProperty: Kotlin.createClass(null, function NullableProperty($outer, name) {
            this.$outer = $outer;
            if (name === void 0)
              name = null;
            this.name = name;
          }, /** @lends _.fg.style.Rule.NullableProperty.prototype */ {
            getValue_ozjeq6$: function (rule, prop) {
              var tmp$0;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveRuleName_4m49nr$_0(prop);
              return this.$outer._map.get_za3rmp$(styleName);
            },
            setValue_l2o8xw$: function (rule, prop, value) {
              var tmp$0;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveRuleName_4m49nr$_0(prop);
              var tmp$1 = value != null;
              if (tmp$1) {
                tmp$1 = value.length > 0;
              }
              if (tmp$1) {
                this.$outer._map.put_wn2jw4$(styleName, value);
              }
               else {
                this.$outer._map.remove_za3rmp$(styleName);
              }
            }
          })
        }),
        TypeRule: Kotlin.createClass(function () {
          return [_.fg.style.Rule];
        }, function TypeRule(selector) {
          TypeRule.baseInitializer.call(this, selector);
        }, /** @lends _.fg.style.TypeRule.prototype */ {
          cssText: function () {
            return _.fg.style.Rule.prototype.cssText_y57xct$_0.call(this, this.selector);
          }
        }),
        camelsToDashes_pdl1w0$: function ($receiver) {
          var tmp$0;
          var s = '';
          tmp$0 = Kotlin.kotlin.text.iterator_gw00vq$($receiver);
          while (tmp$0.hasNext()) {
            var c = tmp$0.next();
            if (c.toUpperCase() === c) {
              s += '-' + c.toLowerCase();
            }
             else {
              s += c;
            }
          }
          return s;
        },
        colour: Kotlin.definePackage(null, /** @lends _.fg.style.colour */ {
          Colour: Kotlin.createTrait(null),
          Hsl: Kotlin.createClass(function () {
            return [_.fg.style.colour.Colour];
          }, function Hsl(h, s, l, a) {
            if (a === void 0)
              a = null;
            this.h = h;
            this.s = s;
            this.l = l;
            this.a = a;
          }, /** @lends _.fg.style.colour.Hsl.prototype */ {
            toHtml: function () {
              if (this.a != null) {
                return 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + Kotlin.toString(this.a) + ')';
              }
               else {
                return 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
              }
            },
            toRgb: function () {
              if (this.s === 0) {
                return new _.fg.style.colour.RgbColor(1, 1, 1, this.a);
              }
              var q = this.l < 0.5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s;
              var p = 2 * this.l - q;
              return new _.fg.style.colour.RgbColor(_.fg.style.colour.hueToRgb_qt1dr2$(p, q, this.h + (1 / 3 | 0)), _.fg.style.colour.hueToRgb_qt1dr2$(p, q, this.h), _.fg.style.colour.hueToRgb_qt1dr2$(p, q, this.h - (1 / 3 | 0)), this.a);
            }
          }, /** @lends _.fg.style.colour.Hsl */ {
            Statics: Kotlin.createObject(null, function Statics() {
              _.fg.style.colour.Hsl.Statics.RED = new _.fg.style.colour.Hsl(0, 100, 50);
              _.fg.style.colour.Hsl.Statics.GREEN = new _.fg.style.colour.Hsl(120, 100, 50);
              _.fg.style.colour.Hsl.Statics.BLUE = new _.fg.style.colour.Hsl(240, 100, 50);
            }),
            object_initializer$: function () {
              _.fg.style.colour.Hsl.Statics;
            }
          }),
          hueToRgb_qt1dr2$: function (pIn, qIn, tIn) {
            var t = tIn;
            if (t < 0) {
              t++;
            }
            if (t > 1) {
              t--;
            }
            if (t < (1 / 6 | 0)) {
              return pIn + (qIn - pIn) * 6 * t;
            }
            if (t < (1 / 2 | 0)) {
              return qIn;
            }
            if (t < (2 / 3 | 0)) {
              return pIn + (qIn - pIn) * ((2 / 3 | 0) - t) * 6;
            }
            return pIn;
          },
          RgbColor: Kotlin.createClass(function () {
            return [_.fg.style.colour.Colour];
          }, function RgbColor(r, g, b, a) {
            if (a === void 0)
              a = null;
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
          }, /** @lends _.fg.style.colour.RgbColor.prototype */ {
            toHtml: function () {
              return this.toHexString();
            },
            toHexString: function () {
              var rx = _.fg.base.toHexString_s8ev3o$(this.r);
              var gx = _.fg.base.toHexString_s8ev3o$(this.g);
              var bx = _.fg.base.toHexString_s8ev3o$(this.b);
              return '#' + rx + gx + bx;
            },
            toHsl: function () {
              var max = Math.max(this.r, this.g, this.b);
              var min = Math.min(this.r, this.g, this.b);
              var h = (max + min) / 2 | 0;
              var s = h;
              var l = h;
              if (max === min) {
                h = 0;
                s = 0;
              }
               else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) | 0 : d / (max + min) | 0;
                if (max === this.r) {
                  h = ((this.g - this.b) / d | 0) + (this.g < this.b ? 6 : 0);
                }
                 else if (max === this.g) {
                  h = ((this.b - this.r) / d | 0) + 2;
                }
                 else {
                  h = ((this.r - this.g) / d | 0) + 4;
                }
                h /= 6;
              }
              return new _.fg.style.colour.Hsl(h, s, l, this.a);
            },
            toString: function () {
              if (this.a != null) {
                return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + Kotlin.toString(this.a) + ')';
              }
               else {
                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
              }
            },
            withAlfa_14dthe$: function (alpha) {
              return new _.fg.style.colour.RgbColor(this.r, this.g, this.b, alpha);
            },
            equals_za3rmp$: function (other) {
              if (this === other)
                return true;
              if (!Kotlin.isType(other, _.fg.style.colour.RgbColor))
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
            },
            hashCode: function () {
              var tmp$0, tmp$1;
              var result = this.r;
              result = 31 * result + this.g;
              result = 31 * result + this.b;
              result = 31 * result + ((tmp$1 = (tmp$0 = this.a) != null ? Kotlin.hashCode(tmp$0) : null) != null ? tmp$1 : 0);
              return result;
            }
          }, /** @lends _.fg.style.colour.RgbColor */ {
            Factory: Kotlin.createObject(null, function Factory() {
              _.fg.style.colour.RgbColor.Factory.TRANSPARENT = new _.fg.style.colour.RgbColor(0, 0, 0, 0.0);
              _.fg.style.colour.RgbColor.Factory.WHITE = new _.fg.style.colour.RgbColor(255, 255, 255);
              _.fg.style.colour.RgbColor.Factory.BLACK = new _.fg.style.colour.RgbColor(0, 0, 0);
              _.fg.style.colour.RgbColor.Factory.RED = new _.fg.style.colour.RgbColor(255, 0, 0);
              _.fg.style.colour.RgbColor.Factory.GREEN = new _.fg.style.colour.RgbColor(0, 255, 0);
              _.fg.style.colour.RgbColor.Factory.BLUE = new _.fg.style.colour.RgbColor(0, 0, 255);
            }, /** @lends _.fg.style.colour.RgbColor.Factory.prototype */ {
              from_61zpoe$: function (string) {
                var stringWithoutHash = Kotlin.kotlin.text.startsWith_41xvrb$(string, '#') ? string.substring(1) : string;
                if (stringWithoutHash.length === 6) {
                  var rs = stringWithoutHash.substring(0, 2);
                  var gs = stringWithoutHash.substring(2, 4);
                  var bs = stringWithoutHash.substring(4, 6);
                  var r = parseInt(rs, 16);
                  var g = parseInt(gs, 16);
                  var b = parseInt(bs, 16);
                  return new _.fg.style.colour.RgbColor(r, g, b);
                }
                 else {
                  var rs_0 = stringWithoutHash.substring(0, 1);
                  var gs_0 = stringWithoutHash.substring(1, 2);
                  var bs_0 = stringWithoutHash.substring(2, 3);
                  var r_0 = parseInt(rs_0, 16);
                  var g_0 = parseInt(gs_0, 16);
                  var b_0 = parseInt(bs_0, 16);
                  return new _.fg.style.colour.RgbColor(r_0, g_0, b_0);
                }
              }
            }),
            object_initializer$: function () {
              _.fg.style.colour.RgbColor.Factory;
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('elements', _);
  return _;
}(kotlin);

//@ sourceMappingURL=elements.js.map
