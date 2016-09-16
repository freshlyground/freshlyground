var elements = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    fg: Kotlin.definePackage(null, /** @lends _.fg */ {
      base: Kotlin.definePackage(function () {
        this.HEX_CHARS_z2qdg7$ = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
      }, /** @lends _.fg.base */ {
        toHexString_s8ev3o$: function ($receiver) {
          var char2 = _.fg.base.HEX_CHARS_z2qdg7$[$receiver & 15];
          var char1 = _.fg.base.HEX_CHARS_z2qdg7$[$receiver >> 4 & 15];
          return char1.toString() + char2;
        }
      }),
      elements: Kotlin.definePackage(function () {
        this.body = new _.fg.elements.Body();
        this.html = new _.fg.elements.Html();
      }, /** @lends _.fg.elements */ {
        Body: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Body() {
          Body.baseInitializer.call(this, void 0, document.body);
          this.$mounted_hxax6y$ = true;
        }, /** @lends _.fg.elements.Body.prototype */ {
          mounted: {
            get: function () {
              return this.$mounted_hxax6y$;
            }
          },
          init: function () {
            this.render();
            this.renderChildren();
            this.mountChildren();
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
          this.$value_7r616q$ = value;
          this.$type_ymc86r$ = _.fg.elements.DimensionType.percent;
        }, /** @lends _.fg.elements.Percent.prototype */ {
          value: {
            get: function () {
              return this.$value_7r616q$;
            }
          },
          type: {
            get: function () {
              return this.$type_ymc86r$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Percent(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Percent(value=' + Kotlin.toString(this.value) + ')';
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
        pct_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        },
        pct_yrwdxs$: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        },
        Pixels: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Pixels(value) {
          this.$value_abgapm$ = value;
          this.$type_fpg9m7$ = _.fg.elements.DimensionType.pixels;
        }, /** @lends _.fg.elements.Pixels.prototype */ {
          value: {
            get: function () {
              return this.$value_abgapm$;
            }
          },
          type: {
            get: function () {
              return this.$type_fpg9m7$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Pixels(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Pixels(value=' + Kotlin.toString(this.value) + ')';
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
        Mm: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Mm(value) {
          this.$value_mxs7ot$ = value;
          this.$type_jvrr9e$ = _.fg.elements.DimensionType.mm;
        }, /** @lends _.fg.elements.Mm.prototype */ {
          value: {
            get: function () {
              return this.$value_mxs7ot$;
            }
          },
          type: {
            get: function () {
              return this.$type_jvrr9e$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Mm(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Mm(value=' + Kotlin.toString(this.value) + ')';
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
        mm_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Mm($receiver);
        },
        Cm: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Cm(value) {
          this.$value_itzozb$ = value;
          this.$type_olihjg$ = _.fg.elements.DimensionType.cm;
        }, /** @lends _.fg.elements.Cm.prototype */ {
          value: {
            get: function () {
              return this.$value_itzozb$;
            }
          },
          type: {
            get: function () {
              return this.$type_olihjg$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Cm(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Cm(value=' + Kotlin.toString(this.value) + ')';
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
        cm_yrwdxs$: function ($receiver) {
          return new _.fg.elements.Cm($receiver);
        },
        cm_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Cm($receiver);
        },
        In: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function In(value) {
          this.$value_6n7ccu$ = value;
          this.$type_7377s7$ = _.fg.elements.DimensionType.inch;
        }, /** @lends _.fg.elements.In.prototype */ {
          value: {
            get: function () {
              return this.$value_6n7ccu$;
            }
          },
          type: {
            get: function () {
              return this.$type_7377s7$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.In(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'In(value=' + Kotlin.toString(this.value) + ')';
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
          this.$value_xwjhr$ = value;
          this.$type_rgqg62$ = _.fg.elements.DimensionType.pt;
        }, /** @lends _.fg.elements.Pt.prototype */ {
          value: {
            get: function () {
              return this.$value_xwjhr$;
            }
          },
          type: {
            get: function () {
              return this.$type_rgqg62$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Pt(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Pt(value=' + Kotlin.toString(this.value) + ')';
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
        pt_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Pt($receiver);
        },
        Pc: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Pc(value) {
          this.$value_xnsum8$ = value;
          this.$type_jeyvgr$ = _.fg.elements.DimensionType.pc;
        }, /** @lends _.fg.elements.Pc.prototype */ {
          value: {
            get: function () {
              return this.$value_xnsum8$;
            }
          },
          type: {
            get: function () {
              return this.$type_jeyvgr$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Pc(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Pc(value=' + Kotlin.toString(this.value) + ')';
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
        pc_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Pc($receiver);
        },
        Em: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Em(value) {
          this.$value_5g4l4l$ = value;
          this.$type_4ra2wm$ = _.fg.elements.DimensionType.em;
        }, /** @lends _.fg.elements.Em.prototype */ {
          value: {
            get: function () {
              return this.$value_5g4l4l$;
            }
          },
          type: {
            get: function () {
              return this.$type_4ra2wm$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Em(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Em(value=' + Kotlin.toString(this.value) + ')';
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
        get_percent_s8ev3o$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        get_percent_yrwdxs$: {value: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        }},
        Rem: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Rem(value) {
          this.$value_efxdeb$ = value;
          this.$type_7c7nmg$ = _.fg.elements.DimensionType.rem;
        }, /** @lends _.fg.elements.Rem.prototype */ {
          value: {
            get: function () {
              return this.$value_efxdeb$;
            }
          },
          type: {
            get: function () {
              return this.$type_7c7nmg$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_14dthe$: function (value) {
            return new _.fg.elements.Rem(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Rem(value=' + Kotlin.toString(this.value) + ')';
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
        rem_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        },
        rem_yrwdxs$: function ($receiver) {
          return new _.fg.elements.Percent($receiver);
        },
        Vh: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Vh(value) {
          this.$value_44x3sx$ = value;
          this.$type_w7nf6c$ = _.fg.elements.DimensionType.vh;
        }, /** @lends _.fg.elements.Vh.prototype */ {
          value: {
            get: function () {
              return this.$value_44x3sx$;
            }
          },
          type: {
            get: function () {
              return this.$type_w7nf6c$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Vh(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Vh(value=' + Kotlin.toString(this.value) + ')';
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
        vh_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Vh($receiver);
        },
        Vw: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function Vw(value) {
          this.$value_2xozm6$ = value;
          this.$type_p3z39f$ = _.fg.elements.DimensionType.vw;
        }, /** @lends _.fg.elements.Vw.prototype */ {
          value: {
            get: function () {
              return this.$value_2xozm6$;
            }
          },
          type: {
            get: function () {
              return this.$type_p3z39f$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.Vw(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'Vw(value=' + Kotlin.toString(this.value) + ')';
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
        vw_s8ev3o$: function ($receiver) {
          return new _.fg.elements.Vw($receiver);
        },
        VMin: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function VMin(value) {
          this.$value_oldosp$ = value;
          this.$type_pzwgde$ = _.fg.elements.DimensionType.vmin;
        }, /** @lends _.fg.elements.VMin.prototype */ {
          value: {
            get: function () {
              return this.$value_oldosp$;
            }
          },
          type: {
            get: function () {
              return this.$type_pzwgde$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.VMin(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'VMin(value=' + Kotlin.toString(this.value) + ')';
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
        vmin_s8ev3o$: function ($receiver) {
          return new _.fg.elements.VMin($receiver);
        },
        VMax: Kotlin.createClass(function () {
          return [_.fg.elements.Dimension];
        }, function VMax(value) {
          this.$value_btgsij$ = value;
          this.$type_fnpjhs$ = _.fg.elements.DimensionType.vmax;
        }, /** @lends _.fg.elements.VMax.prototype */ {
          value: {
            get: function () {
              return this.$value_btgsij$;
            }
          },
          type: {
            get: function () {
              return this.$type_fnpjhs$;
            }
          },
          component1: function () {
            return this.value;
          },
          copy_za3lpa$: function (value) {
            return new _.fg.elements.VMax(value === void 0 ? this.value : value);
          },
          toString: function () {
            return 'VMax(value=' + Kotlin.toString(this.value) + ')';
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
        vmax_s8ev3o$: function ($receiver) {
          return new _.fg.elements.VMax($receiver);
        },
        div_tvzmks$: function ($receiver, init) {
          return _.fg.elements.initAndAppendNode($receiver, new _.fg.elements.Div(), init);
        },
        div$f: Kotlin.createClass(function () {
          return [_.fg.elements.Div];
        }, function $fun(closure$className) {
          $fun.baseInitializer.call(this);
          this.$styleClassName_ku78q8$ = _.fg.elements.toClassSelector_pdl1w0$(closure$className);
        }, /** @lends _.fg.elements.div$f.prototype */ {
          styleClassName: {
            get: function () {
              return this.$styleClassName_ku78q8$;
            }
          },
          render: function () {
            _.fg.elements.Div.prototype.render.call(this);
            this.addClass();
          }
        }, /** @lends _.fg.elements.div$f */ {
        }),
        div_1q790e$: function ($receiver, className, init) {
          return _.fg.elements.initAndAppendNode($receiver, new _.fg.elements.div$f(className), init);
        },
        img_dgbhyk$: function ($receiver, src, init) {
          return _.fg.elements.initAndAppendNode($receiver, new _.fg.elements.Img(src), init);
        },
        initAndAppendNode: function ($receiver, node, init) {
          init.call(node);
          $receiver.appendChild_sr04hg$(node);
          return node;
        },
        with_ji1yox$: function ($receiver, init) {
          init.call($receiver);
          return $receiver;
        },
        onClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('click', listener);
        },
        unClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('click', listener);
        },
        onFocus_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('focus', listener);
        },
        unFocus_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('focus', listener);
        },
        onBlur_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('blur', listener);
        },
        unBlur_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('blur', listener);
        },
        onInput_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('input', listener);
        },
        unInput_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('input', listener);
        },
        onChange_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('change', listener);
        },
        unChange_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('change', listener);
        },
        onDblClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dlbclick', listener);
        },
        unDblClick_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dblclick', listener);
        },
        onMouseDown_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mousedown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseDown_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mousedown', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseUp_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mouseup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseUp_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mouseup', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseEnter_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mouseenter', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseEnter_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mouseenter', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseLeave_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mouseleave', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseLeave_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mouseleave', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseMove_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mousemove', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseMove_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mousemove', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseOut_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mouseout', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseOut_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mouseout', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onMouseOver_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.addEventListener('mouseover', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        unMouseOver_9cq9y2$: function ($receiver, listener) {
          var tmp$0;
          $receiver.w3cElement.removeEventListener('mouseover', typeof (tmp$0 = listener) === 'function' ? tmp$0 : Kotlin.throwCCE());
        },
        onScroll_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('scroll', listener);
        },
        unScroll_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('scroll', listener);
        },
        onKeyUp_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('keyup', listener);
        },
        unKeyUp_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('keyup', listener);
        },
        onKeyPress_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('keypress', listener);
        },
        unKeyPress_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('keypress', listener);
        },
        onKeyDown_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('keydown', listener);
        },
        unKeyDown_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('keydown', listener);
        },
        onDrag_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('drag', listener);
        },
        unDrag_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('drag', listener);
        },
        onDragEnd_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dragend', listener);
        },
        unDragEnd_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dragend', listener);
        },
        onDragEnter_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dragenter', listener);
        },
        unDragEnter_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dragenter', listener);
        },
        onDragLeave_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dragleave', listener);
        },
        unDragLeave_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dragleave', listener);
        },
        onDragOver_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dragover', listener);
        },
        unDragOver_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dragover', listener);
        },
        onDragStart_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('dragstart', listener);
        },
        unDragStart_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('dragstart', listener);
        },
        onDrop_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.addEventListener('drop', listener);
        },
        unDrop_m2anqv$: function ($receiver, listener) {
          $receiver.w3cElement.removeEventListener('drop', listener);
        },
        Element: Kotlin.createClass(function () {
          return [_.fg.elements.Node];
        }, function Element(name, existingElement, w3cElement) {
          var tmp$0;
          if (name === void 0)
            name = null;
          if (existingElement === void 0)
            existingElement = null;
          if (w3cElement === void 0)
            w3cElement = existingElement != null ? existingElement : Kotlin.isType(tmp$0 = document.createElement(name != null ? name : Kotlin.throwNPE()), HTMLElement) ? tmp$0 : Kotlin.throwCCE();
          Element.baseInitializer.call(this, w3cElement);
          this.w3cElement = w3cElement;
          this.typeStyle = null;
          this.$styleClassPrefix_kg27qt$ = null;
          this.$styleClassName_sfpy1e$ = null;
          this.$styleClass_52xnst$ = null;
        }, /** @lends _.fg.elements.Element.prototype */ {
          childElements_vn4sdz$: {
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
          style: {
            get: function () {
              return this.w3cElement.style;
            }
          },
          styleClassPrefix: {
            get: function () {
              return this.$styleClassPrefix_kg27qt$;
            }
          },
          styleClassName: {
            get: function () {
              return this.$styleClassName_sfpy1e$;
            }
          },
          styleClass: {
            get: function () {
              return this.$styleClass_52xnst$;
            }
          },
          render: function () {
          },
          didMount: function () {
          },
          callDidMount: function () {
            var tmp$0;
            tmp$0 = this.childNodes.iterator();
            while (tmp$0.hasNext()) {
              var child = tmp$0.next();
              if (Kotlin.isType(child, _.fg.elements.Element)) {
                child.callDidMount();
                child.didMount();
              }
            }
          },
          renderStyle: function () {
            var tmp$0, tmp$1, tmp$2;
            if (this.typeStyle != null) {
              _.fg.elements.html.registerClassStyle_lu0ku$((tmp$0 = this.typeStyle) != null ? tmp$0 : Kotlin.throwNPE());
            }
            if (this.styleClass != null) {
              var nonNullClassStyle = (tmp$1 = this.styleClass) != null ? tmp$1 : Kotlin.throwNPE();
              _.fg.elements.html.registerClassStyle_lu0ku$(nonNullClassStyle);
              this.addClass_61zpoe$(nonNullClassStyle.className);
            }
            tmp$2 = this.childElements_vn4sdz$.iterator();
            while (tmp$2.hasNext()) {
              var child = tmp$2.next();
              child.renderStyle();
            }
          },
          addClass: function () {
            this.w3cElement.classList.add(_.fg.style.resolveClassStyleName_gobym4$(this).value);
          },
          addClass_61zpoe$: function (name) {
            this.w3cElement.classList.add(name);
          },
          removeClass_61zpoe$: function (name) {
            this.w3cElement.classList.remove(name);
          },
          unaryPlus_pdl1w0$: function ($receiver) {
            this.appendChild_sr04hg$(new _.fg.elements.Text($receiver));
          }
        }, /** @lends _.fg.elements.Element */ {
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
            set: function (_alt) {
              this._alt$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_alt'), _alt);
            }
          },
          _width: {
            get: function () {
              return this._width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_width'));
            },
            set: function (_width) {
              this._width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_width'), _width);
            }
          },
          _height: {
            get: function () {
              return this._height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_height'));
            },
            set: function (_height) {
              this._height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_height'), _height);
            }
          },
          _src: {
            get: function () {
              return this._src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_src'));
            },
            set: function (_src) {
              this._src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_src'), _src);
            }
          }
        }),
        Button: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Button() {
          Button.baseInitializer.call(this, 'button');
        }),
        Input: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function Input(type) {
          Input.baseInitializer.call(this, 'input');
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
              return Kotlin.isType(tmp$0 = Kotlin.callGetter(this, _.fg.elements.Element, 'w3cElement'), HTMLInputElement) ? tmp$0 : Kotlin.throwCCE();
            }
          },
          value: {
            get: function () {
              return this.value$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('value'));
            },
            set: function (value) {
              this.value$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('value'), value);
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
            set: function (_accept) {
              this._accept$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_accept'), _accept);
            }
          },
          _alt: {
            get: function () {
              return this._alt$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_alt'));
            },
            set: function (_alt) {
              this._alt$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_alt'), _alt);
            }
          },
          _autocomplete: {
            get: function () {
              return this._autocomplete$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_autocomplete'));
            },
            set: function (_autocomplete) {
              this._autocomplete$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_autocomplete'), _autocomplete);
            }
          },
          _autofocus: {
            get: function () {
              return this._autofocus$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_autofocus'));
            },
            set: function (_autofocus) {
              this._autofocus$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_autofocus'), _autofocus);
            }
          },
          _checked: {
            get: function () {
              return this._checked$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_checked'));
            },
            set: function (_checked) {
              this._checked$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_checked'), _checked);
            }
          },
          _dirname: {
            get: function () {
              return this._dirname$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_dirname'));
            },
            set: function (_dirname) {
              this._dirname$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_dirname'), _dirname);
            }
          },
          _disabled: {
            get: function () {
              return this._disabled$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_disabled'));
            },
            set: function (_disabled) {
              this._disabled$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_disabled'), _disabled);
            }
          },
          _form: {
            get: function () {
              return this._form$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_form'));
            },
            set: function (_form) {
              this._form$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_form'), _form);
            }
          },
          _formaction: {
            get: function () {
              return this._formaction$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formaction'));
            },
            set: function (_formaction) {
              this._formaction$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formaction'), _formaction);
            }
          },
          _formenctype: {
            get: function () {
              return this._formenctype$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formenctype'));
            },
            set: function (_formenctype) {
              this._formenctype$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formenctype'), _formenctype);
            }
          },
          _formmethod: {
            get: function () {
              return this._formmethod$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formmethod'));
            },
            set: function (_formmethod) {
              this._formmethod$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formmethod'), _formmethod);
            }
          },
          _formnovalidate: {
            get: function () {
              return this._formnovalidate$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formnovalidate'));
            },
            set: function (_formnovalidate) {
              this._formnovalidate$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formnovalidate'), _formnovalidate);
            }
          },
          _formtarget: {
            get: function () {
              return this._formtarget$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_formtarget'));
            },
            set: function (_formtarget) {
              this._formtarget$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_formtarget'), _formtarget);
            }
          },
          _height: {
            get: function () {
              return this._height$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_height'));
            },
            set: function (_height) {
              this._height$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_height'), _height);
            }
          },
          _inputmode: {
            get: function () {
              return this._inputmode$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_inputmode'));
            },
            set: function (_inputmode) {
              this._inputmode$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_inputmode'), _inputmode);
            }
          },
          _list: {
            get: function () {
              return this._list$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_list'));
            },
            set: function (_list) {
              this._list$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_list'), _list);
            }
          },
          _max: {
            get: function () {
              return this._max$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_max'));
            },
            set: function (_max) {
              this._max$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_max'), _max);
            }
          },
          _maxlength: {
            get: function () {
              return this._maxlength$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_maxlength'));
            },
            set: function (_maxlength) {
              this._maxlength$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_maxlength'), _maxlength);
            }
          },
          _min: {
            get: function () {
              return this._min$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_min'));
            },
            set: function (_min) {
              this._min$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_min'), _min);
            }
          },
          _minlength: {
            get: function () {
              return this._minlength$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_minlength'));
            },
            set: function (_minlength) {
              this._minlength$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_minlength'), _minlength);
            }
          },
          _multiple: {
            get: function () {
              return this._multiple$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_multiple'));
            },
            set: function (_multiple) {
              this._multiple$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_multiple'), _multiple);
            }
          },
          _name: {
            get: function () {
              return this._name$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_name'));
            },
            set: function (_name) {
              this._name$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_name'), _name);
            }
          },
          _pattern: {
            get: function () {
              return this._pattern$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_pattern'));
            },
            set: function (_pattern) {
              this._pattern$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_pattern'), _pattern);
            }
          },
          _placeholder: {
            get: function () {
              return this._placeholder$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_placeholder'));
            },
            set: function (_placeholder) {
              this._placeholder$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_placeholder'), _placeholder);
            }
          },
          _readonly: {
            get: function () {
              return this._readonly$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_readonly'));
            },
            set: function (_readonly) {
              this._readonly$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_readonly'), _readonly);
            }
          },
          _required: {
            get: function () {
              return this._required$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_required'));
            },
            set: function (_required) {
              this._required$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_required'), _required);
            }
          },
          _size: {
            get: function () {
              return this._size$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_size'));
            },
            set: function (_size) {
              this._size$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_size'), _size);
            }
          },
          _src: {
            get: function () {
              return this._src$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_src'));
            },
            set: function (_src) {
              this._src$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_src'), _src);
            }
          },
          _step: {
            get: function () {
              return this._step$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_step'));
            },
            set: function (_step) {
              this._step$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_step'), _step);
            }
          },
          _width: {
            get: function () {
              return this._width$delegate.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('_width'));
            },
            set: function (_width) {
              this._width$delegate.setValue_w32e13$(this, new Kotlin.PropertyMetadata('_width'), _width);
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
              }
            };
          })
        }),
        InputText: Kotlin.createClass(function () {
          return [_.fg.elements.Input];
        }, function InputText() {
          InputText.baseInitializer.call(this, _.fg.elements.Input.Type.text);
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
          this.stylesheet$delegate = Kotlin.kotlin.lazy_un3fny$(_.fg.elements.Html.stylesheet_ld1o87$f);
          this.registeredClassStyles_nqgd5t$ = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([]);
        }, /** @lends _.fg.elements.Html.prototype */ {
          stylesheet_ld1o87$: {
            get: function () {
              return Kotlin.kotlin.getValue_em0fd4$(this.stylesheet$delegate, this, new Kotlin.PropertyMetadata('stylesheet'));
            }
          },
          init: function () {
            _.fg.elements.body.init();
            _.fg.elements.body.renderStyle();
            window.setTimeout(_.fg.elements.Html.init$f, 10);
          },
          registerClassStyle_lu0ku$: function (style) {
            var tmp$1, tmp$2;
            if (Kotlin.isType(style, _.fg.elements.IClassStyle)) {
              var previous = this.registeredClassStyles_nqgd5t$.put_wn2jw4$(style.className, style);
              if (previous == null) {
                var rules = style.toCss();
                tmp$1 = rules.iterator();
                while (tmp$1.hasNext()) {
                  var rule = tmp$1.next();
                  console.log('Inserting stylesheet rule: \n' + rule);
                  this.stylesheet_ld1o87$.insertRule(rule, this.stylesheet_ld1o87$.cssRules.length);
                }
              }
            }
             else {
              var rules_0 = style.toCss();
              tmp$2 = rules_0.iterator();
              while (tmp$2.hasNext()) {
                var rule_0 = tmp$2.next();
                console.log('Inserting stylesheet rule: \n' + rule_0);
                this.stylesheet_ld1o87$.insertRule(rule_0, this.stylesheet_ld1o87$.cssRules.length);
              }
            }
          }
        }, /** @lends _.fg.elements.Html */ {
          init$f: function () {
            _.fg.elements.body.callDidMount();
          },
          stylesheet_ld1o87$f: function () {
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
        IClassStyle: Kotlin.createTrait(function () {
          return [_.fg.elements.IStyle];
        }),
        IStyle: Kotlin.createTrait(null),
        Node: Kotlin.createClass(null, function Node(w3cNode) {
          this.w3cNode = w3cNode;
          this._childNodes_d2zqq6$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this._childrenMountInstructions_6rpoce$ = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this._parent_pyyift$ = null;
        }, /** @lends _.fg.elements.Node.prototype */ {
          childNodes: {
            get: function () {
              return this._childNodes_d2zqq6$;
            }
          },
          _nodeName: {
            get: function () {
              return this.w3cNode.nodeName;
            }
          },
          mounted: {
            get: function () {
              var tmp$0, tmp$1, tmp$2;
              return (tmp$2 = (tmp$1 = (tmp$0 = this._parent_pyyift$) != null ? tmp$0.w3cNode : null) != null ? tmp$1.contains(this.w3cNode) : null) != null ? tmp$2 : false;
            }
          },
          textContent: {
            get: function () {
              return this.w3cNode.textContent;
            },
            set: function (value) {
              this.w3cNode.textContent = value;
              this._childNodes_d2zqq6$.clear();
              this._childNodes_d2zqq6$.addAll_wtfk93$(this.parseChildrenFromDOM());
            }
          },
          prependChild_sr04hg$: function (node) {
            this.insertBefore_p937mc$(node, Kotlin.kotlin.collections.first_a7ptmv$(this._childNodes_d2zqq6$));
            return node;
          },
          insertBefore_p937mc$: function (node, child) {
            var childIndex = this._childNodes_d2zqq6$.indexOf_za3rmp$(child);
            if (childIndex === -1) {
              throw new Kotlin.IllegalArgumentException('reference ' + child.w3cNode.nodeName + ' is expected as child');
            }
            node._parent_pyyift$ = this;
            var mountFn = _.fg.elements.Node.insertBefore_p937mc$f(this, child);
            if (this.mounted) {
              this.mountChild_zh7waj$(mountFn, node);
            }
             else {
              this._childrenMountInstructions_6rpoce$.add_za3rmp$(new Kotlin.kotlin.Pair(mountFn, node));
            }
            this._childNodes_d2zqq6$.add_vux3hl$(childIndex, node);
            return node;
          },
          appendChild_sr04hg$: function (node) {
            node._parent_pyyift$ = this;
            var mountFn = _.fg.elements.Node.appendChild_sr04hg$f(this);
            if (this.mounted) {
              this.mountChild_zh7waj$(mountFn, node);
            }
             else {
              this._childrenMountInstructions_6rpoce$.add_za3rmp$(new Kotlin.kotlin.Pair(mountFn, node));
            }
            this._childNodes_d2zqq6$.add_za3rmp$(node);
            return node;
          },
          parseChildrenFromDOM: function () {
            var tmp$0;
            var nodes = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            var childW3cNodes = this.w3cNode.childNodes;
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
          renderChildren: function () {
            var tmp$0;
            tmp$0 = this._childNodes_d2zqq6$.iterator();
            while (tmp$0.hasNext()) {
              var child = tmp$0.next();
              if (Kotlin.isType(child, _.fg.elements.Element)) {
                child.render();
              }
              child.renderChildren();
            }
          },
          mountChild_zh7waj$: function (mountFn, child) {
            console.info(Kotlin.kotlin.js.get_jsClass_s8jyvl$(this).name + '.mountChild(' + Kotlin.kotlin.js.get_jsClass_s8jyvl$(child).name + ') ');
            mountFn(child);
          },
          mountChildren: function () {
            var tmp$0, tmp$1;
            tmp$0 = this._childrenMountInstructions_6rpoce$.iterator();
            while (tmp$0.hasNext()) {
              var mountFn_n_child = tmp$0.next();
              this.mountChild_zh7waj$(mountFn_n_child.first, mountFn_n_child.second);
            }
            this._childrenMountInstructions_6rpoce$.clear();
            tmp$1 = this._childNodes_d2zqq6$.iterator();
            while (tmp$1.hasNext()) {
              var child = tmp$1.next();
              child.mountChildren();
            }
          }
        }, /** @lends _.fg.elements.Node */ {
          insertBefore_p937mc$f: function (this$Node, closure$child) {
            return function (it) {
              this$Node.w3cNode.insertBefore(it.w3cNode, closure$child.w3cNode);
            };
          },
          appendChild_sr04hg$f: function (this$Node) {
            return function (it) {
              this$Node.w3cNode.appendChild(it.w3cNode);
            };
          }
        }),
        article: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function article() {
          article.baseInitializer.call(this, 'article');
        }),
        section: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function section() {
          section.baseInitializer.call(this, 'section');
        }),
        nav: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function nav() {
          nav.baseInitializer.call(this, 'nav');
        }),
        aside: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function aside() {
          aside.baseInitializer.call(this, 'aside');
        }),
        h1: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h1() {
          h1.baseInitializer.call(this, 'h1');
        }),
        h2: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h2() {
          h2.baseInitializer.call(this, 'h2');
        }),
        h3: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h3() {
          h3.baseInitializer.call(this, 'h3');
        }),
        h4: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h4() {
          h4.baseInitializer.call(this, 'h4');
        }),
        h5: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h5() {
          h5.baseInitializer.call(this, 'h5');
        }),
        h6: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function h6() {
          h6.baseInitializer.call(this, 'h6');
        }),
        header: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function header() {
          header.baseInitializer.call(this, 'header');
        }),
        footer: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function footer() {
          footer.baseInitializer.call(this, 'footer');
        }),
        address: Kotlin.createClass(function () {
          return [_.fg.elements.Element];
        }, function address() {
          address.baseInitializer.call(this, 'address');
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
        Text: Kotlin.createClass(function () {
          return [_.fg.elements.Node];
        }, function Text(text, existingNode) {
          if (text === void 0)
            text = null;
          if (existingNode === void 0)
            existingNode = null;
          Text.baseInitializer.call(this, existingNode != null ? existingNode : document.createTextNode(text != null ? text : Kotlin.throwNPE()));
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
            receiver.w3cElement.setAttribute(this.attributeName, initialValue);
          }, /** @lends _.fg.elements.W3cDelegates.Attribute.prototype */ {
            getValue_dsk1ci$: function (thisRef, property) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement;
              var attributeName = this.attributeName;
              return (tmp$0 = w3cElement.getAttribute(attributeName)) != null ? tmp$0 : Kotlin.throwNPE();
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var w3cElement = thisRef.w3cElement;
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
              var w3cElement = thisRef.w3cElement;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              return w3cElement.getAttribute(attributeName);
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement;
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
              var w3cElement = thisRef.w3cElement;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              var $receiver = w3cElement.getAttribute(attributeName);
              return !($receiver == null || $receiver.length === 0);
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              if (value != null) {
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
              var w3cElement = thisRef.w3cElement;
              var attributeName = (tmp$0 = this.attributeName) != null ? tmp$0 : property.name;
              return _.fg.elements.toDimension_pdl1w0$(w3cElement.getAttribute(attributeName));
            },
            setValue_w32e13$: function (thisRef, property, value) {
              var tmp$0;
              var w3cElement = thisRef.w3cElement;
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
        })
      }),
      style: Kotlin.definePackage(null, /** @lends _.fg.style */ {
        ClassStyle: Kotlin.createClass(function () {
          return [_.fg.elements.IClassStyle, _.fg.style.Style];
        }, function ClassStyle(className, parentSelector) {
          if (parentSelector === void 0)
            parentSelector = null;
          ClassStyle.baseInitializer.call(this, className);
          this.parentSelector = parentSelector;
        }, /** @lends _.fg.style.ClassStyle.prototype */ {
          selector: {
            get: function () {
              var tmp$0;
              return Kotlin.isType(tmp$0 = Kotlin.callGetter(this, _.fg.style.Style, 'selector'), _.fg.elements.ClassSelector) ? tmp$0 : Kotlin.throwCCE();
            }
          },
          className: {
            get: function () {
              return this.selector.value;
            }
          },
          toCss: function () {
            var tmp$1, tmp$2;
            var rules = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            var s = '';
            if (this.parentSelector != null) {
              s += this.parentSelector.toString() + ' ';
            }
            s += this.selector.toString() + ' { ';
            tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this.map);
            while (tmp$1.hasNext()) {
              var tmp$0 = tmp$1.next();
              var key = tmp$0.key;
              var value = tmp$0.value;
              s += key + ': ' + value + '; ';
            }
            s += '}';
            rules.add_za3rmp$(s);
            tmp$2 = this.childStyles.iterator();
            while (tmp$2.hasNext()) {
              var child = tmp$2.next();
              rules.addAll_wtfk93$(child.toCss());
            }
            return rules;
          }
        }),
        typeStyle_2oxsiq$: function ($receiver, init) {
          var style = new _.fg.style.TypeStyle(new _.fg.elements.TypeSelector($receiver._nodeName));
          init.call(style);
          $receiver.typeStyle = style;
          return style;
        },
        classStyle_o2i1ow$: function ($receiver, init) {
          var style = new _.fg.style.ClassStyle(_.fg.style.resolveClassStyleName_gobym4$($receiver));
          init.call(style);
          return style;
        },
        and_zh0yil$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        and_eoz44k$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, selector));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        desc_zh0yil$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.DescendantSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        desc_eoz44k$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.DescendantSelector($receiver.selector, selector));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        child_zh0yil$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.ChildSelector($receiver.selector, _.fg.elements.toSelector_pdl1w0$(selector)));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        child_eoz44k$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.ChildSelector($receiver.selector, selector));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        active_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('active')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        checked_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('checked')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        empty_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('empty')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        enabled_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('enabled')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        first_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        firstChild_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first-child')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        firstOfType_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('first-of-type')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        focus_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('focus')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        hover_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('hover')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        indeterminate_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('indeterminate')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        inRange_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('in-range')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        invalid_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('invalid')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        lang_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('lang')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        lastChild_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('last-child')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        lastOfType_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('last-of-type')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        left_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('left')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        link_c8jw7n$: function ($receiver, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.PseudoClassSelector('link')));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        not_eoz44k$: function ($receiver, selector, init) {
          var style = new _.fg.style.Style(new _.fg.elements.AndSelector($receiver.selector, new _.fg.elements.NotSelector(selector)));
          init.call(style);
          $receiver.childStyles.add_za3rmp$(style);
          return style;
        },
        resolveClassStyleName_gobym4$: function ($receiver) {
          var tmp$0, tmp$1;
          if ($receiver.styleClassName != null) {
            tmp$1 = (tmp$0 = $receiver.styleClassName) != null ? tmp$0 : Kotlin.throwNPE();
          }
           else {
            tmp$1 = _.fg.elements.toClassSelector_pdl1w0$(Kotlin.kotlin.js.get_jsClass_s8jyvl$($receiver).name.toLowerCase());
          }
          var classSelector = tmp$1;
          if ($receiver.styleClassPrefix != null)
            return new _.fg.elements.ClassSelector(Kotlin.toString($receiver.styleClassPrefix) + '-' + classSelector);
          else
            return classSelector;
        },
        Style: Kotlin.createClass(function () {
          return [_.fg.elements.IStyle];
        }, function Style(selector) {
          this.$selector_ngq6py$ = selector;
          this.childStyles = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
          this.map = Kotlin.kotlin.collections.mutableMapOf_eoa9s7$([]);
          this.cssFloat$delegate = new _.fg.style.Style.Property(this);
          this._dashed_attribute$delegate = new _.fg.style.Style.Property(this);
          this._camel_cased_attribute$delegate = new _.fg.style.Style.Property(this);
          this.alignContent$delegate = new _.fg.style.Style.Property(this);
          this.alignItems$delegate = new _.fg.style.Style.Property(this);
          this.alignSelf$delegate = new _.fg.style.Style.Property(this);
          this.animation$delegate = new _.fg.style.Style.Property(this);
          this.animationDelay$delegate = new _.fg.style.Style.Property(this);
          this.animationDirection$delegate = new _.fg.style.Style.Property(this);
          this.animationDuration$delegate = new _.fg.style.Style.Property(this);
          this.animationFillMode$delegate = new _.fg.style.Style.Property(this);
          this.animationIterationCount$delegate = new _.fg.style.Style.Property(this);
          this.animationName$delegate = new _.fg.style.Style.Property(this);
          this.animationPlayState$delegate = new _.fg.style.Style.Property(this);
          this.animationTimingFunction$delegate = new _.fg.style.Style.Property(this);
          this.backfaceVisibility$delegate = new _.fg.style.Style.Property(this);
          this.background$delegate = new _.fg.style.Style.Property(this);
          this.backgroundAttachment$delegate = new _.fg.style.Style.Property(this);
          this.backgroundClip$delegate = new _.fg.style.Style.Property(this);
          this.backgroundColor$delegate = new _.fg.style.Style.Property(this);
          this.backgroundImage$delegate = new _.fg.style.Style.Property(this);
          this.backgroundOrigin$delegate = new _.fg.style.Style.Property(this);
          this.backgroundPosition$delegate = new _.fg.style.Style.Property(this);
          this.backgroundRepeat$delegate = new _.fg.style.Style.Property(this);
          this.backgroundSize$delegate = new _.fg.style.Style.Property(this);
          this.border$delegate = new _.fg.style.Style.Property(this);
          this.borderBottom$delegate = new _.fg.style.Style.Property(this);
          this.borderBottomColor$delegate = new _.fg.style.Style.Property(this);
          this.borderBottomLeftRadius$delegate = new _.fg.style.Style.Property(this);
          this.borderBottomRightRadius$delegate = new _.fg.style.Style.Property(this);
          this.borderBottomStyle$delegate = new _.fg.style.Style.Property(this);
          this.borderBottomWidth$delegate = new _.fg.style.Style.Property(this);
          this.borderCollapse$delegate = new _.fg.style.Style.Property(this);
          this.borderColor$delegate = new _.fg.style.Style.Property(this);
          this.borderImage$delegate = new _.fg.style.Style.Property(this);
          this.borderImageOutset$delegate = new _.fg.style.Style.Property(this);
          this.borderImageRepeat$delegate = new _.fg.style.Style.Property(this);
          this.borderImageSlice$delegate = new _.fg.style.Style.Property(this);
          this.borderImageSource$delegate = new _.fg.style.Style.Property(this);
          this.borderImageWidth$delegate = new _.fg.style.Style.Property(this);
          this.borderLeft$delegate = new _.fg.style.Style.Property(this);
          this.borderLeftColor$delegate = new _.fg.style.Style.Property(this);
          this.borderLeftStyle$delegate = new _.fg.style.Style.Property(this);
          this.borderLeftWidth$delegate = new _.fg.style.Style.Property(this);
          this.borderRadius$delegate = new _.fg.style.Style.Property(this);
          this.borderRight$delegate = new _.fg.style.Style.Property(this);
          this.borderRightColor$delegate = new _.fg.style.Style.Property(this);
          this.borderRightStyle$delegate = new _.fg.style.Style.Property(this);
          this.borderRightWidth$delegate = new _.fg.style.Style.Property(this);
          this.borderSpacing$delegate = new _.fg.style.Style.Property(this);
          this.borderStyle$delegate = new _.fg.style.Style.Property(this);
          this.borderTop$delegate = new _.fg.style.Style.Property(this);
          this.borderTopColor$delegate = new _.fg.style.Style.Property(this);
          this.borderTopLeftRadius$delegate = new _.fg.style.Style.Property(this);
          this.borderTopRightRadius$delegate = new _.fg.style.Style.Property(this);
          this.borderTopStyle$delegate = new _.fg.style.Style.Property(this);
          this.borderTopWidth$delegate = new _.fg.style.Style.Property(this);
          this.borderWidth$delegate = new _.fg.style.Style.Property(this);
          this.bottom$delegate = new _.fg.style.Style.Property(this);
          this.boxDecorationBreak$delegate = new _.fg.style.Style.Property(this);
          this.boxShadow$delegate = new _.fg.style.Style.Property(this);
          this.boxSizing$delegate = new _.fg.style.Style.Property(this);
          this.breakAfter$delegate = new _.fg.style.Style.Property(this);
          this.breakBefore$delegate = new _.fg.style.Style.Property(this);
          this.breakInside$delegate = new _.fg.style.Style.Property(this);
          this.captionSide$delegate = new _.fg.style.Style.Property(this);
          this.clear$delegate = new _.fg.style.Style.Property(this);
          this.clip$delegate = new _.fg.style.Style.Property(this);
          this.color$delegate = new _.fg.style.Style.Property(this);
          this.columnCount$delegate = new _.fg.style.Style.Property(this);
          this.columnFill$delegate = new _.fg.style.Style.Property(this);
          this.columnGap$delegate = new _.fg.style.Style.Property(this);
          this.columnRule$delegate = new _.fg.style.Style.Property(this);
          this.columnRuleColor$delegate = new _.fg.style.Style.Property(this);
          this.columnRuleStyle$delegate = new _.fg.style.Style.Property(this);
          this.columnRuleWidth$delegate = new _.fg.style.Style.Property(this);
          this.columnSpan$delegate = new _.fg.style.Style.Property(this);
          this.columnWidth$delegate = new _.fg.style.Style.Property(this);
          this.columns$delegate = new _.fg.style.Style.Property(this);
          this.content$delegate = new _.fg.style.Style.Property(this);
          this.counterIncrement$delegate = new _.fg.style.Style.Property(this);
          this.counterReset$delegate = new _.fg.style.Style.Property(this);
          this.cursor$delegate = new _.fg.style.Style.Property(this);
          this.direction$delegate = new _.fg.style.Style.Property(this);
          this.display$delegate = new _.fg.style.Style.Property(this);
          this.emptyCells$delegate = new _.fg.style.Style.Property(this);
          this.filter$delegate = new _.fg.style.Style.Property(this);
          this.flex$delegate = new _.fg.style.Style.Property(this);
          this.flexBasis$delegate = new _.fg.style.Style.Property(this);
          this.flexDirection$delegate = new _.fg.style.Style.Property(this);
          this.flexFlow$delegate = new _.fg.style.Style.Property(this);
          this.flexGrow$delegate = new _.fg.style.Style.Property(this);
          this.flexShrink$delegate = new _.fg.style.Style.Property(this);
          this.flexWrap$delegate = new _.fg.style.Style.Property(this);
          this.font$delegate = new _.fg.style.Style.Property(this);
          this.fontFamily$delegate = new _.fg.style.Style.Property(this);
          this.fontFeatureSettings$delegate = new _.fg.style.Style.Property(this);
          this.fontKerning$delegate = new _.fg.style.Style.Property(this);
          this.fontLanguageOverride$delegate = new _.fg.style.Style.Property(this);
          this.fontSize$delegate = new _.fg.style.Style.Property(this);
          this.fontSizeAdjust$delegate = new _.fg.style.Style.Property(this);
          this.fontStretch$delegate = new _.fg.style.Style.Property(this);
          this.fontStyle$delegate = new _.fg.style.Style.Property(this);
          this.fontSynthesis$delegate = new _.fg.style.Style.Property(this);
          this.fontVariant$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantAlternates$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantCaps$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantEastAsian$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantLigatures$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantNumeric$delegate = new _.fg.style.Style.Property(this);
          this.fontVariantPosition$delegate = new _.fg.style.Style.Property(this);
          this.fontWeight$delegate = new _.fg.style.Style.Property(this);
          this.hangingPunctuation$delegate = new _.fg.style.Style.Property(this);
          this.height$delegate = new _.fg.style.Style.Property(this);
          this.hyphens$delegate = new _.fg.style.Style.Property(this);
          this.imageOrientation$delegate = new _.fg.style.Style.Property(this);
          this.imageRendering$delegate = new _.fg.style.Style.Property(this);
          this.imageResolution$delegate = new _.fg.style.Style.Property(this);
          this.imeMode$delegate = new _.fg.style.Style.Property(this);
          this.justifyContent$delegate = new _.fg.style.Style.Property(this);
          this.left$delegate = new _.fg.style.Style.Property(this);
          this.letterSpacing$delegate = new _.fg.style.Style.Property(this);
          this.lineBreak$delegate = new _.fg.style.Style.Property(this);
          this.lineHeight$delegate = new _.fg.style.Style.Property(this);
          this.listStyle$delegate = new _.fg.style.Style.Property(this);
          this.listStyleImage$delegate = new _.fg.style.Style.Property(this);
          this.listStylePosition$delegate = new _.fg.style.Style.Property(this);
          this.listStyleType$delegate = new _.fg.style.Style.Property(this);
          this.margin$delegate = new _.fg.style.Style.Property(this);
          this.marginBottom$delegate = new _.fg.style.Style.Property(this);
          this.marginLeft$delegate = new _.fg.style.Style.Property(this);
          this.marginRight$delegate = new _.fg.style.Style.Property(this);
          this.marginTop$delegate = new _.fg.style.Style.Property(this);
          this.mark$delegate = new _.fg.style.Style.Property(this);
          this.markAfter$delegate = new _.fg.style.Style.Property(this);
          this.markBefore$delegate = new _.fg.style.Style.Property(this);
          this.marks$delegate = new _.fg.style.Style.Property(this);
          this.marqueeDirection$delegate = new _.fg.style.Style.Property(this);
          this.marqueePlayCount$delegate = new _.fg.style.Style.Property(this);
          this.marqueeSpeed$delegate = new _.fg.style.Style.Property(this);
          this.marqueeStyle$delegate = new _.fg.style.Style.Property(this);
          this.mask$delegate = new _.fg.style.Style.Property(this);
          this.maskType$delegate = new _.fg.style.Style.Property(this);
          this.maxHeight$delegate = new _.fg.style.Style.Property(this);
          this.maxWidth$delegate = new _.fg.style.Style.Property(this);
          this.minHeight$delegate = new _.fg.style.Style.Property(this);
          this.minWidth$delegate = new _.fg.style.Style.Property(this);
          this.navDown$delegate = new _.fg.style.Style.Property(this);
          this.navIndex$delegate = new _.fg.style.Style.Property(this);
          this.navLeft$delegate = new _.fg.style.Style.Property(this);
          this.navRight$delegate = new _.fg.style.Style.Property(this);
          this.navUp$delegate = new _.fg.style.Style.Property(this);
          this.objectFit$delegate = new _.fg.style.Style.Property(this);
          this.objectPosition$delegate = new _.fg.style.Style.Property(this);
          this.opacity$delegate = new _.fg.style.Style.Property(this);
          this.order$delegate = new _.fg.style.Style.Property(this);
          this.orphans$delegate = new _.fg.style.Style.Property(this);
          this.outline$delegate = new _.fg.style.Style.Property(this);
          this.outlineColor$delegate = new _.fg.style.Style.Property(this);
          this.outlineOffset$delegate = new _.fg.style.Style.Property(this);
          this.outlineStyle$delegate = new _.fg.style.Style.Property(this);
          this.outlineWidth$delegate = new _.fg.style.Style.Property(this);
          this.overflowWrap$delegate = new _.fg.style.Style.Property(this);
          this.overflowX$delegate = new _.fg.style.Style.Property(this);
          this.overflowY$delegate = new _.fg.style.Style.Property(this);
          this.padding$delegate = new _.fg.style.Style.Property(this);
          this.paddingBottom$delegate = new _.fg.style.Style.Property(this);
          this.paddingLeft$delegate = new _.fg.style.Style.Property(this);
          this.paddingRight$delegate = new _.fg.style.Style.Property(this);
          this.paddingTop$delegate = new _.fg.style.Style.Property(this);
          this.pageBreakAfter$delegate = new _.fg.style.Style.Property(this);
          this.pageBreakBefore$delegate = new _.fg.style.Style.Property(this);
          this.pageBreakInside$delegate = new _.fg.style.Style.Property(this);
          this.perspective$delegate = new _.fg.style.Style.Property(this);
          this.perspectiveOrigin$delegate = new _.fg.style.Style.Property(this);
          this.phonemes$delegate = new _.fg.style.Style.Property(this);
          this.position$delegate = new _.fg.style.Style.Property(this);
          this.quotes$delegate = new _.fg.style.Style.Property(this);
          this.resize$delegate = new _.fg.style.Style.Property(this);
          this.rest$delegate = new _.fg.style.Style.Property(this);
          this.restAfter$delegate = new _.fg.style.Style.Property(this);
          this.restBefore$delegate = new _.fg.style.Style.Property(this);
          this.right$delegate = new _.fg.style.Style.Property(this);
          this.tabSize$delegate = new _.fg.style.Style.Property(this);
          this.tableLayout$delegate = new _.fg.style.Style.Property(this);
          this.textAlign$delegate = new _.fg.style.Style.Property(this);
          this.textAlignLast$delegate = new _.fg.style.Style.Property(this);
          this.textCombineUpright$delegate = new _.fg.style.Style.Property(this);
          this.textDecoration$delegate = new _.fg.style.Style.Property(this);
          this.textDecorationColor$delegate = new _.fg.style.Style.Property(this);
          this.textDecorationLine$delegate = new _.fg.style.Style.Property(this);
          this.textDecorationStyle$delegate = new _.fg.style.Style.Property(this);
          this.textIndent$delegate = new _.fg.style.Style.Property(this);
          this.textJustify$delegate = new _.fg.style.Style.Property(this);
          this.textOrientation$delegate = new _.fg.style.Style.Property(this);
          this.textOverflow$delegate = new _.fg.style.Style.Property(this);
          this.textShadow$delegate = new _.fg.style.Style.Property(this);
          this.textTransform$delegate = new _.fg.style.Style.Property(this);
          this.textUnderlinePosition$delegate = new _.fg.style.Style.Property(this);
          this.top$delegate = new _.fg.style.Style.Property(this);
          this.transform$delegate = new _.fg.style.Style.Property(this);
          this.transformOrigin$delegate = new _.fg.style.Style.Property(this);
          this.transformStyle$delegate = new _.fg.style.Style.Property(this);
          this.transition$delegate = new _.fg.style.Style.Property(this);
          this.transitionDelay$delegate = new _.fg.style.Style.Property(this);
          this.transitionDuration$delegate = new _.fg.style.Style.Property(this);
          this.transitionProperty$delegate = new _.fg.style.Style.Property(this);
          this.transitionTimingFunction$delegate = new _.fg.style.Style.Property(this);
          this.unicodeBidi$delegate = new _.fg.style.Style.Property(this);
          this.verticalAlign$delegate = new _.fg.style.Style.Property(this);
          this.visibility$delegate = new _.fg.style.Style.Property(this);
          this.voiceBalance$delegate = new _.fg.style.Style.Property(this);
          this.voiceDuration$delegate = new _.fg.style.Style.Property(this);
          this.voicePitch$delegate = new _.fg.style.Style.Property(this);
          this.voicePitchRange$delegate = new _.fg.style.Style.Property(this);
          this.voiceRate$delegate = new _.fg.style.Style.Property(this);
          this.voiceStress$delegate = new _.fg.style.Style.Property(this);
          this.voiceVolume$delegate = new _.fg.style.Style.Property(this);
          this.whiteSpace$delegate = new _.fg.style.Style.Property(this);
          this.widows$delegate = new _.fg.style.Style.Property(this);
          this.width$delegate = new _.fg.style.Style.Property(this);
          this.wordBreak$delegate = new _.fg.style.Style.Property(this);
          this.wordSpacing$delegate = new _.fg.style.Style.Property(this);
          this.wordWrap$delegate = new _.fg.style.Style.Property(this);
          this.writingMode$delegate = new _.fg.style.Style.Property(this);
          this.zIndex$delegate = new _.fg.style.Style.Property(this);
        }, /** @lends _.fg.style.Style.prototype */ {
          selector: {
            get: function () {
              return this.$selector_ngq6py$;
            }
          },
          toCss: function () {
            var tmp$1, tmp$2;
            var rules = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            var s = '';
            s += this.selector.toString();
            s += ' { ';
            tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this.map);
            while (tmp$1.hasNext()) {
              var tmp$0 = tmp$1.next();
              var key = tmp$0.key;
              var value = tmp$0.value;
              s += key + ': ' + value + '; ';
            }
            s += '}';
            rules.add_za3rmp$(s);
            tmp$2 = this.childStyles.iterator();
            while (tmp$2.hasNext()) {
              var child = tmp$2.next();
              rules.addAll_wtfk93$(child.toCss());
            }
            return rules;
          },
          cssFloat: {
            get: function () {
              return this.cssFloat$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('cssFloat'));
            },
            set: function (cssFloat) {
              this.cssFloat$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('cssFloat'), cssFloat);
            }
          },
          _dashed_attribute: {
            get: function () {
              return this._dashed_attribute$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('_dashed_attribute'));
            },
            set: function (_dashed_attribute) {
              this._dashed_attribute$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('_dashed_attribute'), _dashed_attribute);
            }
          },
          _camel_cased_attribute: {
            get: function () {
              return this._camel_cased_attribute$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'));
            },
            set: function (_camel_cased_attribute) {
              this._camel_cased_attribute$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('_camel_cased_attribute'), _camel_cased_attribute);
            }
          },
          alignContent: {
            get: function () {
              return this.alignContent$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('alignContent'));
            },
            set: function (alignContent) {
              this.alignContent$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('alignContent'), alignContent);
            }
          },
          alignItems: {
            get: function () {
              return this.alignItems$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('alignItems'));
            },
            set: function (alignItems) {
              this.alignItems$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('alignItems'), alignItems);
            }
          },
          alignSelf: {
            get: function () {
              return this.alignSelf$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('alignSelf'));
            },
            set: function (alignSelf) {
              this.alignSelf$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('alignSelf'), alignSelf);
            }
          },
          animation: {
            get: function () {
              return this.animation$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animation'));
            },
            set: function (animation) {
              this.animation$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animation'), animation);
            }
          },
          animationDelay: {
            get: function () {
              return this.animationDelay$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationDelay'));
            },
            set: function (animationDelay) {
              this.animationDelay$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationDelay'), animationDelay);
            }
          },
          animationDirection: {
            get: function () {
              return this.animationDirection$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationDirection'));
            },
            set: function (animationDirection) {
              this.animationDirection$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationDirection'), animationDirection);
            }
          },
          animationDuration: {
            get: function () {
              return this.animationDuration$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationDuration'));
            },
            set: function (animationDuration) {
              this.animationDuration$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationDuration'), animationDuration);
            }
          },
          animationFillMode: {
            get: function () {
              return this.animationFillMode$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationFillMode'));
            },
            set: function (animationFillMode) {
              this.animationFillMode$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationFillMode'), animationFillMode);
            }
          },
          animationIterationCount: {
            get: function () {
              return this.animationIterationCount$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationIterationCount'));
            },
            set: function (animationIterationCount) {
              this.animationIterationCount$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationIterationCount'), animationIterationCount);
            }
          },
          animationName: {
            get: function () {
              return this.animationName$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationName'));
            },
            set: function (animationName) {
              this.animationName$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationName'), animationName);
            }
          },
          animationPlayState: {
            get: function () {
              return this.animationPlayState$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationPlayState'));
            },
            set: function (animationPlayState) {
              this.animationPlayState$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationPlayState'), animationPlayState);
            }
          },
          animationTimingFunction: {
            get: function () {
              return this.animationTimingFunction$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('animationTimingFunction'));
            },
            set: function (animationTimingFunction) {
              this.animationTimingFunction$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('animationTimingFunction'), animationTimingFunction);
            }
          },
          backfaceVisibility: {
            get: function () {
              return this.backfaceVisibility$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backfaceVisibility'));
            },
            set: function (backfaceVisibility) {
              this.backfaceVisibility$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backfaceVisibility'), backfaceVisibility);
            }
          },
          background: {
            get: function () {
              return this.background$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('background'));
            },
            set: function (background) {
              this.background$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('background'), background);
            }
          },
          backgroundAttachment: {
            get: function () {
              return this.backgroundAttachment$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundAttachment'));
            },
            set: function (backgroundAttachment) {
              this.backgroundAttachment$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundAttachment'), backgroundAttachment);
            }
          },
          backgroundClip: {
            get: function () {
              return this.backgroundClip$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundClip'));
            },
            set: function (backgroundClip) {
              this.backgroundClip$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundClip'), backgroundClip);
            }
          },
          backgroundColor: {
            get: function () {
              return this.backgroundColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundColor'));
            },
            set: function (backgroundColor) {
              this.backgroundColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundColor'), backgroundColor);
            }
          },
          backgroundImage: {
            get: function () {
              return this.backgroundImage$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundImage'));
            },
            set: function (backgroundImage) {
              this.backgroundImage$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundImage'), backgroundImage);
            }
          },
          backgroundOrigin: {
            get: function () {
              return this.backgroundOrigin$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundOrigin'));
            },
            set: function (backgroundOrigin) {
              this.backgroundOrigin$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundOrigin'), backgroundOrigin);
            }
          },
          backgroundPosition: {
            get: function () {
              return this.backgroundPosition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundPosition'));
            },
            set: function (backgroundPosition) {
              this.backgroundPosition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundPosition'), backgroundPosition);
            }
          },
          backgroundRepeat: {
            get: function () {
              return this.backgroundRepeat$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundRepeat'));
            },
            set: function (backgroundRepeat) {
              this.backgroundRepeat$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundRepeat'), backgroundRepeat);
            }
          },
          backgroundSize: {
            get: function () {
              return this.backgroundSize$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('backgroundSize'));
            },
            set: function (backgroundSize) {
              this.backgroundSize$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('backgroundSize'), backgroundSize);
            }
          },
          border: {
            get: function () {
              return this.border$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('border'));
            },
            set: function (border) {
              this.border$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('border'), border);
            }
          },
          borderBottom: {
            get: function () {
              return this.borderBottom$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottom'));
            },
            set: function (borderBottom) {
              this.borderBottom$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottom'), borderBottom);
            }
          },
          borderBottomColor: {
            get: function () {
              return this.borderBottomColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottomColor'));
            },
            set: function (borderBottomColor) {
              this.borderBottomColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottomColor'), borderBottomColor);
            }
          },
          borderBottomLeftRadius: {
            get: function () {
              return this.borderBottomLeftRadius$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottomLeftRadius'));
            },
            set: function (borderBottomLeftRadius) {
              this.borderBottomLeftRadius$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottomLeftRadius'), borderBottomLeftRadius);
            }
          },
          borderBottomRightRadius: {
            get: function () {
              return this.borderBottomRightRadius$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottomRightRadius'));
            },
            set: function (borderBottomRightRadius) {
              this.borderBottomRightRadius$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottomRightRadius'), borderBottomRightRadius);
            }
          },
          borderBottomStyle: {
            get: function () {
              return this.borderBottomStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottomStyle'));
            },
            set: function (borderBottomStyle) {
              this.borderBottomStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottomStyle'), borderBottomStyle);
            }
          },
          borderBottomWidth: {
            get: function () {
              return this.borderBottomWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderBottomWidth'));
            },
            set: function (borderBottomWidth) {
              this.borderBottomWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderBottomWidth'), borderBottomWidth);
            }
          },
          borderCollapse: {
            get: function () {
              return this.borderCollapse$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderCollapse'));
            },
            set: function (borderCollapse) {
              this.borderCollapse$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderCollapse'), borderCollapse);
            }
          },
          borderColor: {
            get: function () {
              return this.borderColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderColor'));
            },
            set: function (borderColor) {
              this.borderColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderColor'), borderColor);
            }
          },
          borderImage: {
            get: function () {
              return this.borderImage$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImage'));
            },
            set: function (borderImage) {
              this.borderImage$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImage'), borderImage);
            }
          },
          borderImageOutset: {
            get: function () {
              return this.borderImageOutset$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImageOutset'));
            },
            set: function (borderImageOutset) {
              this.borderImageOutset$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImageOutset'), borderImageOutset);
            }
          },
          borderImageRepeat: {
            get: function () {
              return this.borderImageRepeat$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImageRepeat'));
            },
            set: function (borderImageRepeat) {
              this.borderImageRepeat$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImageRepeat'), borderImageRepeat);
            }
          },
          borderImageSlice: {
            get: function () {
              return this.borderImageSlice$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImageSlice'));
            },
            set: function (borderImageSlice) {
              this.borderImageSlice$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImageSlice'), borderImageSlice);
            }
          },
          borderImageSource: {
            get: function () {
              return this.borderImageSource$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImageSource'));
            },
            set: function (borderImageSource) {
              this.borderImageSource$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImageSource'), borderImageSource);
            }
          },
          borderImageWidth: {
            get: function () {
              return this.borderImageWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderImageWidth'));
            },
            set: function (borderImageWidth) {
              this.borderImageWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderImageWidth'), borderImageWidth);
            }
          },
          borderLeft: {
            get: function () {
              return this.borderLeft$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderLeft'));
            },
            set: function (borderLeft) {
              this.borderLeft$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderLeft'), borderLeft);
            }
          },
          borderLeftColor: {
            get: function () {
              return this.borderLeftColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderLeftColor'));
            },
            set: function (borderLeftColor) {
              this.borderLeftColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderLeftColor'), borderLeftColor);
            }
          },
          borderLeftStyle: {
            get: function () {
              return this.borderLeftStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderLeftStyle'));
            },
            set: function (borderLeftStyle) {
              this.borderLeftStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderLeftStyle'), borderLeftStyle);
            }
          },
          borderLeftWidth: {
            get: function () {
              return this.borderLeftWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderLeftWidth'));
            },
            set: function (borderLeftWidth) {
              this.borderLeftWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderLeftWidth'), borderLeftWidth);
            }
          },
          borderRadius: {
            get: function () {
              return this.borderRadius$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderRadius'));
            },
            set: function (borderRadius) {
              this.borderRadius$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderRadius'), borderRadius);
            }
          },
          borderRight: {
            get: function () {
              return this.borderRight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderRight'));
            },
            set: function (borderRight) {
              this.borderRight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderRight'), borderRight);
            }
          },
          borderRightColor: {
            get: function () {
              return this.borderRightColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderRightColor'));
            },
            set: function (borderRightColor) {
              this.borderRightColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderRightColor'), borderRightColor);
            }
          },
          borderRightStyle: {
            get: function () {
              return this.borderRightStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderRightStyle'));
            },
            set: function (borderRightStyle) {
              this.borderRightStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderRightStyle'), borderRightStyle);
            }
          },
          borderRightWidth: {
            get: function () {
              return this.borderRightWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderRightWidth'));
            },
            set: function (borderRightWidth) {
              this.borderRightWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderRightWidth'), borderRightWidth);
            }
          },
          borderSpacing: {
            get: function () {
              return this.borderSpacing$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderSpacing'));
            },
            set: function (borderSpacing) {
              this.borderSpacing$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderSpacing'), borderSpacing);
            }
          },
          borderStyle: {
            get: function () {
              return this.borderStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderStyle'));
            },
            set: function (borderStyle) {
              this.borderStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderStyle'), borderStyle);
            }
          },
          borderTop: {
            get: function () {
              return this.borderTop$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTop'));
            },
            set: function (borderTop) {
              this.borderTop$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTop'), borderTop);
            }
          },
          borderTopColor: {
            get: function () {
              return this.borderTopColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTopColor'));
            },
            set: function (borderTopColor) {
              this.borderTopColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTopColor'), borderTopColor);
            }
          },
          borderTopLeftRadius: {
            get: function () {
              return this.borderTopLeftRadius$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTopLeftRadius'));
            },
            set: function (borderTopLeftRadius) {
              this.borderTopLeftRadius$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTopLeftRadius'), borderTopLeftRadius);
            }
          },
          borderTopRightRadius: {
            get: function () {
              return this.borderTopRightRadius$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTopRightRadius'));
            },
            set: function (borderTopRightRadius) {
              this.borderTopRightRadius$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTopRightRadius'), borderTopRightRadius);
            }
          },
          borderTopStyle: {
            get: function () {
              return this.borderTopStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTopStyle'));
            },
            set: function (borderTopStyle) {
              this.borderTopStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTopStyle'), borderTopStyle);
            }
          },
          borderTopWidth: {
            get: function () {
              return this.borderTopWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderTopWidth'));
            },
            set: function (borderTopWidth) {
              this.borderTopWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderTopWidth'), borderTopWidth);
            }
          },
          borderWidth: {
            get: function () {
              return this.borderWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('borderWidth'));
            },
            set: function (borderWidth) {
              this.borderWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('borderWidth'), borderWidth);
            }
          },
          bottom: {
            get: function () {
              return this.bottom$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('bottom'));
            },
            set: function (bottom) {
              this.bottom$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('bottom'), bottom);
            }
          },
          boxDecorationBreak: {
            get: function () {
              return this.boxDecorationBreak$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('boxDecorationBreak'));
            },
            set: function (boxDecorationBreak) {
              this.boxDecorationBreak$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('boxDecorationBreak'), boxDecorationBreak);
            }
          },
          boxShadow: {
            get: function () {
              return this.boxShadow$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('boxShadow'));
            },
            set: function (boxShadow) {
              this.boxShadow$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('boxShadow'), boxShadow);
            }
          },
          boxSizing: {
            get: function () {
              return this.boxSizing$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('boxSizing'));
            },
            set: function (boxSizing) {
              this.boxSizing$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('boxSizing'), boxSizing);
            }
          },
          breakAfter: {
            get: function () {
              return this.breakAfter$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('breakAfter'));
            },
            set: function (breakAfter) {
              this.breakAfter$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('breakAfter'), breakAfter);
            }
          },
          breakBefore: {
            get: function () {
              return this.breakBefore$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('breakBefore'));
            },
            set: function (breakBefore) {
              this.breakBefore$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('breakBefore'), breakBefore);
            }
          },
          breakInside: {
            get: function () {
              return this.breakInside$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('breakInside'));
            },
            set: function (breakInside) {
              this.breakInside$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('breakInside'), breakInside);
            }
          },
          captionSide: {
            get: function () {
              return this.captionSide$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('captionSide'));
            },
            set: function (captionSide) {
              this.captionSide$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('captionSide'), captionSide);
            }
          },
          clear: {
            get: function () {
              return this.clear$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('clear'));
            },
            set: function (clear) {
              this.clear$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('clear'), clear);
            }
          },
          clip: {
            get: function () {
              return this.clip$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('clip'));
            },
            set: function (clip) {
              this.clip$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('clip'), clip);
            }
          },
          color: {
            get: function () {
              return this.color$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('color'));
            },
            set: function (color) {
              this.color$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('color'), color);
            }
          },
          columnCount: {
            get: function () {
              return this.columnCount$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnCount'));
            },
            set: function (columnCount) {
              this.columnCount$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnCount'), columnCount);
            }
          },
          columnFill: {
            get: function () {
              return this.columnFill$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnFill'));
            },
            set: function (columnFill) {
              this.columnFill$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnFill'), columnFill);
            }
          },
          columnGap: {
            get: function () {
              return this.columnGap$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnGap'));
            },
            set: function (columnGap) {
              this.columnGap$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnGap'), columnGap);
            }
          },
          columnRule: {
            get: function () {
              return this.columnRule$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnRule'));
            },
            set: function (columnRule) {
              this.columnRule$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnRule'), columnRule);
            }
          },
          columnRuleColor: {
            get: function () {
              return this.columnRuleColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnRuleColor'));
            },
            set: function (columnRuleColor) {
              this.columnRuleColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnRuleColor'), columnRuleColor);
            }
          },
          columnRuleStyle: {
            get: function () {
              return this.columnRuleStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnRuleStyle'));
            },
            set: function (columnRuleStyle) {
              this.columnRuleStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnRuleStyle'), columnRuleStyle);
            }
          },
          columnRuleWidth: {
            get: function () {
              return this.columnRuleWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnRuleWidth'));
            },
            set: function (columnRuleWidth) {
              this.columnRuleWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnRuleWidth'), columnRuleWidth);
            }
          },
          columnSpan: {
            get: function () {
              return this.columnSpan$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnSpan'));
            },
            set: function (columnSpan) {
              this.columnSpan$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnSpan'), columnSpan);
            }
          },
          columnWidth: {
            get: function () {
              return this.columnWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columnWidth'));
            },
            set: function (columnWidth) {
              this.columnWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columnWidth'), columnWidth);
            }
          },
          columns: {
            get: function () {
              return this.columns$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('columns'));
            },
            set: function (columns) {
              this.columns$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('columns'), columns);
            }
          },
          content: {
            get: function () {
              return this.content$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('content'));
            },
            set: function (content) {
              this.content$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('content'), content);
            }
          },
          counterIncrement: {
            get: function () {
              return this.counterIncrement$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('counterIncrement'));
            },
            set: function (counterIncrement) {
              this.counterIncrement$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('counterIncrement'), counterIncrement);
            }
          },
          counterReset: {
            get: function () {
              return this.counterReset$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('counterReset'));
            },
            set: function (counterReset) {
              this.counterReset$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('counterReset'), counterReset);
            }
          },
          cursor: {
            get: function () {
              return this.cursor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('cursor'));
            },
            set: function (cursor) {
              this.cursor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('cursor'), cursor);
            }
          },
          direction: {
            get: function () {
              return this.direction$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('direction'));
            },
            set: function (direction) {
              this.direction$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('direction'), direction);
            }
          },
          display: {
            get: function () {
              return this.display$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('display'));
            },
            set: function (display) {
              this.display$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('display'), display);
            }
          },
          emptyCells: {
            get: function () {
              return this.emptyCells$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('emptyCells'));
            },
            set: function (emptyCells) {
              this.emptyCells$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('emptyCells'), emptyCells);
            }
          },
          filter: {
            get: function () {
              return this.filter$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('filter'));
            },
            set: function (filter) {
              this.filter$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('filter'), filter);
            }
          },
          flex: {
            get: function () {
              return this.flex$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flex'));
            },
            set: function (flex) {
              this.flex$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flex'), flex);
            }
          },
          flexBasis: {
            get: function () {
              return this.flexBasis$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexBasis'));
            },
            set: function (flexBasis) {
              this.flexBasis$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexBasis'), flexBasis);
            }
          },
          flexDirection: {
            get: function () {
              return this.flexDirection$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexDirection'));
            },
            set: function (flexDirection) {
              this.flexDirection$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexDirection'), flexDirection);
            }
          },
          flexFlow: {
            get: function () {
              return this.flexFlow$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexFlow'));
            },
            set: function (flexFlow) {
              this.flexFlow$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexFlow'), flexFlow);
            }
          },
          flexGrow: {
            get: function () {
              return this.flexGrow$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexGrow'));
            },
            set: function (flexGrow) {
              this.flexGrow$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexGrow'), flexGrow);
            }
          },
          flexShrink: {
            get: function () {
              return this.flexShrink$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexShrink'));
            },
            set: function (flexShrink) {
              this.flexShrink$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexShrink'), flexShrink);
            }
          },
          flexWrap: {
            get: function () {
              return this.flexWrap$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('flexWrap'));
            },
            set: function (flexWrap) {
              this.flexWrap$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('flexWrap'), flexWrap);
            }
          },
          font: {
            get: function () {
              return this.font$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('font'));
            },
            set: function (font) {
              this.font$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('font'), font);
            }
          },
          fontFamily: {
            get: function () {
              return this.fontFamily$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontFamily'));
            },
            set: function (fontFamily) {
              this.fontFamily$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontFamily'), fontFamily);
            }
          },
          fontFeatureSettings: {
            get: function () {
              return this.fontFeatureSettings$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontFeatureSettings'));
            },
            set: function (fontFeatureSettings) {
              this.fontFeatureSettings$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontFeatureSettings'), fontFeatureSettings);
            }
          },
          fontKerning: {
            get: function () {
              return this.fontKerning$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontKerning'));
            },
            set: function (fontKerning) {
              this.fontKerning$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontKerning'), fontKerning);
            }
          },
          fontLanguageOverride: {
            get: function () {
              return this.fontLanguageOverride$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontLanguageOverride'));
            },
            set: function (fontLanguageOverride) {
              this.fontLanguageOverride$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontLanguageOverride'), fontLanguageOverride);
            }
          },
          fontSize: {
            get: function () {
              return this.fontSize$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontSize'));
            },
            set: function (fontSize) {
              this.fontSize$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontSize'), fontSize);
            }
          },
          fontSizeAdjust: {
            get: function () {
              return this.fontSizeAdjust$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontSizeAdjust'));
            },
            set: function (fontSizeAdjust) {
              this.fontSizeAdjust$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontSizeAdjust'), fontSizeAdjust);
            }
          },
          fontStretch: {
            get: function () {
              return this.fontStretch$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontStretch'));
            },
            set: function (fontStretch) {
              this.fontStretch$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontStretch'), fontStretch);
            }
          },
          fontStyle: {
            get: function () {
              return this.fontStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontStyle'));
            },
            set: function (fontStyle) {
              this.fontStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontStyle'), fontStyle);
            }
          },
          fontSynthesis: {
            get: function () {
              return this.fontSynthesis$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontSynthesis'));
            },
            set: function (fontSynthesis) {
              this.fontSynthesis$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontSynthesis'), fontSynthesis);
            }
          },
          fontVariant: {
            get: function () {
              return this.fontVariant$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariant'));
            },
            set: function (fontVariant) {
              this.fontVariant$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariant'), fontVariant);
            }
          },
          fontVariantAlternates: {
            get: function () {
              return this.fontVariantAlternates$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantAlternates'));
            },
            set: function (fontVariantAlternates) {
              this.fontVariantAlternates$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantAlternates'), fontVariantAlternates);
            }
          },
          fontVariantCaps: {
            get: function () {
              return this.fontVariantCaps$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantCaps'));
            },
            set: function (fontVariantCaps) {
              this.fontVariantCaps$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantCaps'), fontVariantCaps);
            }
          },
          fontVariantEastAsian: {
            get: function () {
              return this.fontVariantEastAsian$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantEastAsian'));
            },
            set: function (fontVariantEastAsian) {
              this.fontVariantEastAsian$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantEastAsian'), fontVariantEastAsian);
            }
          },
          fontVariantLigatures: {
            get: function () {
              return this.fontVariantLigatures$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantLigatures'));
            },
            set: function (fontVariantLigatures) {
              this.fontVariantLigatures$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantLigatures'), fontVariantLigatures);
            }
          },
          fontVariantNumeric: {
            get: function () {
              return this.fontVariantNumeric$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantNumeric'));
            },
            set: function (fontVariantNumeric) {
              this.fontVariantNumeric$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantNumeric'), fontVariantNumeric);
            }
          },
          fontVariantPosition: {
            get: function () {
              return this.fontVariantPosition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontVariantPosition'));
            },
            set: function (fontVariantPosition) {
              this.fontVariantPosition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontVariantPosition'), fontVariantPosition);
            }
          },
          fontWeight: {
            get: function () {
              return this.fontWeight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('fontWeight'));
            },
            set: function (fontWeight) {
              this.fontWeight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('fontWeight'), fontWeight);
            }
          },
          hangingPunctuation: {
            get: function () {
              return this.hangingPunctuation$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('hangingPunctuation'));
            },
            set: function (hangingPunctuation) {
              this.hangingPunctuation$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('hangingPunctuation'), hangingPunctuation);
            }
          },
          height: {
            get: function () {
              return this.height$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('height'));
            },
            set: function (height) {
              this.height$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('height'), height);
            }
          },
          hyphens: {
            get: function () {
              return this.hyphens$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('hyphens'));
            },
            set: function (hyphens) {
              this.hyphens$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('hyphens'), hyphens);
            }
          },
          imageOrientation: {
            get: function () {
              return this.imageOrientation$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('imageOrientation'));
            },
            set: function (imageOrientation) {
              this.imageOrientation$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('imageOrientation'), imageOrientation);
            }
          },
          imageRendering: {
            get: function () {
              return this.imageRendering$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('imageRendering'));
            },
            set: function (imageRendering) {
              this.imageRendering$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('imageRendering'), imageRendering);
            }
          },
          imageResolution: {
            get: function () {
              return this.imageResolution$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('imageResolution'));
            },
            set: function (imageResolution) {
              this.imageResolution$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('imageResolution'), imageResolution);
            }
          },
          imeMode: {
            get: function () {
              return this.imeMode$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('imeMode'));
            },
            set: function (imeMode) {
              this.imeMode$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('imeMode'), imeMode);
            }
          },
          justifyContent: {
            get: function () {
              return this.justifyContent$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('justifyContent'));
            },
            set: function (justifyContent) {
              this.justifyContent$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('justifyContent'), justifyContent);
            }
          },
          left: {
            get: function () {
              return this.left$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('left'));
            },
            set: function (left) {
              this.left$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('left'), left);
            }
          },
          letterSpacing: {
            get: function () {
              return this.letterSpacing$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('letterSpacing'));
            },
            set: function (letterSpacing) {
              this.letterSpacing$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('letterSpacing'), letterSpacing);
            }
          },
          lineBreak: {
            get: function () {
              return this.lineBreak$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('lineBreak'));
            },
            set: function (lineBreak) {
              this.lineBreak$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('lineBreak'), lineBreak);
            }
          },
          lineHeight: {
            get: function () {
              return this.lineHeight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('lineHeight'));
            },
            set: function (lineHeight) {
              this.lineHeight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('lineHeight'), lineHeight);
            }
          },
          listStyle: {
            get: function () {
              return this.listStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('listStyle'));
            },
            set: function (listStyle) {
              this.listStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('listStyle'), listStyle);
            }
          },
          listStyleImage: {
            get: function () {
              return this.listStyleImage$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('listStyleImage'));
            },
            set: function (listStyleImage) {
              this.listStyleImage$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('listStyleImage'), listStyleImage);
            }
          },
          listStylePosition: {
            get: function () {
              return this.listStylePosition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('listStylePosition'));
            },
            set: function (listStylePosition) {
              this.listStylePosition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('listStylePosition'), listStylePosition);
            }
          },
          listStyleType: {
            get: function () {
              return this.listStyleType$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('listStyleType'));
            },
            set: function (listStyleType) {
              this.listStyleType$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('listStyleType'), listStyleType);
            }
          },
          margin: {
            get: function () {
              return this.margin$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('margin'));
            },
            set: function (margin) {
              this.margin$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('margin'), margin);
            }
          },
          marginBottom: {
            get: function () {
              return this.marginBottom$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marginBottom'));
            },
            set: function (marginBottom) {
              this.marginBottom$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marginBottom'), marginBottom);
            }
          },
          marginLeft: {
            get: function () {
              return this.marginLeft$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marginLeft'));
            },
            set: function (marginLeft) {
              this.marginLeft$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marginLeft'), marginLeft);
            }
          },
          marginRight: {
            get: function () {
              return this.marginRight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marginRight'));
            },
            set: function (marginRight) {
              this.marginRight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marginRight'), marginRight);
            }
          },
          marginTop: {
            get: function () {
              return this.marginTop$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marginTop'));
            },
            set: function (marginTop) {
              this.marginTop$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marginTop'), marginTop);
            }
          },
          mark: {
            get: function () {
              return this.mark$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('mark'));
            },
            set: function (mark) {
              this.mark$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('mark'), mark);
            }
          },
          markAfter: {
            get: function () {
              return this.markAfter$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('markAfter'));
            },
            set: function (markAfter) {
              this.markAfter$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('markAfter'), markAfter);
            }
          },
          markBefore: {
            get: function () {
              return this.markBefore$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('markBefore'));
            },
            set: function (markBefore) {
              this.markBefore$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('markBefore'), markBefore);
            }
          },
          marks: {
            get: function () {
              return this.marks$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marks'));
            },
            set: function (marks) {
              this.marks$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marks'), marks);
            }
          },
          marqueeDirection: {
            get: function () {
              return this.marqueeDirection$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marqueeDirection'));
            },
            set: function (marqueeDirection) {
              this.marqueeDirection$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marqueeDirection'), marqueeDirection);
            }
          },
          marqueePlayCount: {
            get: function () {
              return this.marqueePlayCount$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marqueePlayCount'));
            },
            set: function (marqueePlayCount) {
              this.marqueePlayCount$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marqueePlayCount'), marqueePlayCount);
            }
          },
          marqueeSpeed: {
            get: function () {
              return this.marqueeSpeed$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marqueeSpeed'));
            },
            set: function (marqueeSpeed) {
              this.marqueeSpeed$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marqueeSpeed'), marqueeSpeed);
            }
          },
          marqueeStyle: {
            get: function () {
              return this.marqueeStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('marqueeStyle'));
            },
            set: function (marqueeStyle) {
              this.marqueeStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('marqueeStyle'), marqueeStyle);
            }
          },
          mask: {
            get: function () {
              return this.mask$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('mask'));
            },
            set: function (mask) {
              this.mask$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('mask'), mask);
            }
          },
          maskType: {
            get: function () {
              return this.maskType$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('maskType'));
            },
            set: function (maskType) {
              this.maskType$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('maskType'), maskType);
            }
          },
          maxHeight: {
            get: function () {
              return this.maxHeight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('maxHeight'));
            },
            set: function (maxHeight) {
              this.maxHeight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('maxHeight'), maxHeight);
            }
          },
          maxWidth: {
            get: function () {
              return this.maxWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('maxWidth'));
            },
            set: function (maxWidth) {
              this.maxWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('maxWidth'), maxWidth);
            }
          },
          minHeight: {
            get: function () {
              return this.minHeight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('minHeight'));
            },
            set: function (minHeight) {
              this.minHeight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('minHeight'), minHeight);
            }
          },
          minWidth: {
            get: function () {
              return this.minWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('minWidth'));
            },
            set: function (minWidth) {
              this.minWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('minWidth'), minWidth);
            }
          },
          navDown: {
            get: function () {
              return this.navDown$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('navDown'));
            },
            set: function (navDown) {
              this.navDown$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('navDown'), navDown);
            }
          },
          navIndex: {
            get: function () {
              return this.navIndex$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('navIndex'));
            },
            set: function (navIndex) {
              this.navIndex$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('navIndex'), navIndex);
            }
          },
          navLeft: {
            get: function () {
              return this.navLeft$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('navLeft'));
            },
            set: function (navLeft) {
              this.navLeft$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('navLeft'), navLeft);
            }
          },
          navRight: {
            get: function () {
              return this.navRight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('navRight'));
            },
            set: function (navRight) {
              this.navRight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('navRight'), navRight);
            }
          },
          navUp: {
            get: function () {
              return this.navUp$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('navUp'));
            },
            set: function (navUp) {
              this.navUp$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('navUp'), navUp);
            }
          },
          objectFit: {
            get: function () {
              return this.objectFit$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('objectFit'));
            },
            set: function (objectFit) {
              this.objectFit$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('objectFit'), objectFit);
            }
          },
          objectPosition: {
            get: function () {
              return this.objectPosition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('objectPosition'));
            },
            set: function (objectPosition) {
              this.objectPosition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('objectPosition'), objectPosition);
            }
          },
          opacity: {
            get: function () {
              return this.opacity$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('opacity'));
            },
            set: function (opacity) {
              this.opacity$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('opacity'), opacity);
            }
          },
          order: {
            get: function () {
              return this.order$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('order'));
            },
            set: function (order) {
              this.order$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('order'), order);
            }
          },
          orphans: {
            get: function () {
              return this.orphans$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('orphans'));
            },
            set: function (orphans) {
              this.orphans$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('orphans'), orphans);
            }
          },
          outline: {
            get: function () {
              return this.outline$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('outline'));
            },
            set: function (outline) {
              this.outline$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('outline'), outline);
            }
          },
          outlineColor: {
            get: function () {
              return this.outlineColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('outlineColor'));
            },
            set: function (outlineColor) {
              this.outlineColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('outlineColor'), outlineColor);
            }
          },
          outlineOffset: {
            get: function () {
              return this.outlineOffset$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('outlineOffset'));
            },
            set: function (outlineOffset) {
              this.outlineOffset$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('outlineOffset'), outlineOffset);
            }
          },
          outlineStyle: {
            get: function () {
              return this.outlineStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('outlineStyle'));
            },
            set: function (outlineStyle) {
              this.outlineStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('outlineStyle'), outlineStyle);
            }
          },
          outlineWidth: {
            get: function () {
              return this.outlineWidth$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('outlineWidth'));
            },
            set: function (outlineWidth) {
              this.outlineWidth$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('outlineWidth'), outlineWidth);
            }
          },
          overflowWrap: {
            get: function () {
              return this.overflowWrap$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('overflowWrap'));
            },
            set: function (overflowWrap) {
              this.overflowWrap$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('overflowWrap'), overflowWrap);
            }
          },
          overflowX: {
            get: function () {
              return this.overflowX$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('overflowX'));
            },
            set: function (overflowX) {
              this.overflowX$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('overflowX'), overflowX);
            }
          },
          overflowY: {
            get: function () {
              return this.overflowY$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('overflowY'));
            },
            set: function (overflowY) {
              this.overflowY$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('overflowY'), overflowY);
            }
          },
          padding: {
            get: function () {
              return this.padding$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('padding'));
            },
            set: function (padding) {
              this.padding$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('padding'), padding);
            }
          },
          paddingBottom: {
            get: function () {
              return this.paddingBottom$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('paddingBottom'));
            },
            set: function (paddingBottom) {
              this.paddingBottom$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('paddingBottom'), paddingBottom);
            }
          },
          paddingLeft: {
            get: function () {
              return this.paddingLeft$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('paddingLeft'));
            },
            set: function (paddingLeft) {
              this.paddingLeft$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('paddingLeft'), paddingLeft);
            }
          },
          paddingRight: {
            get: function () {
              return this.paddingRight$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('paddingRight'));
            },
            set: function (paddingRight) {
              this.paddingRight$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('paddingRight'), paddingRight);
            }
          },
          paddingTop: {
            get: function () {
              return this.paddingTop$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('paddingTop'));
            },
            set: function (paddingTop) {
              this.paddingTop$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('paddingTop'), paddingTop);
            }
          },
          pageBreakAfter: {
            get: function () {
              return this.pageBreakAfter$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('pageBreakAfter'));
            },
            set: function (pageBreakAfter) {
              this.pageBreakAfter$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('pageBreakAfter'), pageBreakAfter);
            }
          },
          pageBreakBefore: {
            get: function () {
              return this.pageBreakBefore$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('pageBreakBefore'));
            },
            set: function (pageBreakBefore) {
              this.pageBreakBefore$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('pageBreakBefore'), pageBreakBefore);
            }
          },
          pageBreakInside: {
            get: function () {
              return this.pageBreakInside$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('pageBreakInside'));
            },
            set: function (pageBreakInside) {
              this.pageBreakInside$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('pageBreakInside'), pageBreakInside);
            }
          },
          perspective: {
            get: function () {
              return this.perspective$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('perspective'));
            },
            set: function (perspective) {
              this.perspective$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('perspective'), perspective);
            }
          },
          perspectiveOrigin: {
            get: function () {
              return this.perspectiveOrigin$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('perspectiveOrigin'));
            },
            set: function (perspectiveOrigin) {
              this.perspectiveOrigin$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('perspectiveOrigin'), perspectiveOrigin);
            }
          },
          phonemes: {
            get: function () {
              return this.phonemes$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('phonemes'));
            },
            set: function (phonemes) {
              this.phonemes$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('phonemes'), phonemes);
            }
          },
          position: {
            get: function () {
              return this.position$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('position'));
            },
            set: function (position) {
              this.position$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('position'), position);
            }
          },
          quotes: {
            get: function () {
              return this.quotes$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('quotes'));
            },
            set: function (quotes) {
              this.quotes$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('quotes'), quotes);
            }
          },
          resize: {
            get: function () {
              return this.resize$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('resize'));
            },
            set: function (resize) {
              this.resize$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('resize'), resize);
            }
          },
          rest: {
            get: function () {
              return this.rest$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('rest'));
            },
            set: function (rest) {
              this.rest$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('rest'), rest);
            }
          },
          restAfter: {
            get: function () {
              return this.restAfter$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('restAfter'));
            },
            set: function (restAfter) {
              this.restAfter$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('restAfter'), restAfter);
            }
          },
          restBefore: {
            get: function () {
              return this.restBefore$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('restBefore'));
            },
            set: function (restBefore) {
              this.restBefore$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('restBefore'), restBefore);
            }
          },
          right: {
            get: function () {
              return this.right$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('right'));
            },
            set: function (right) {
              this.right$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('right'), right);
            }
          },
          tabSize: {
            get: function () {
              return this.tabSize$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('tabSize'));
            },
            set: function (tabSize) {
              this.tabSize$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('tabSize'), tabSize);
            }
          },
          tableLayout: {
            get: function () {
              return this.tableLayout$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('tableLayout'));
            },
            set: function (tableLayout) {
              this.tableLayout$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('tableLayout'), tableLayout);
            }
          },
          textAlign: {
            get: function () {
              return this.textAlign$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textAlign'));
            },
            set: function (textAlign) {
              this.textAlign$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textAlign'), textAlign);
            }
          },
          textAlignLast: {
            get: function () {
              return this.textAlignLast$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textAlignLast'));
            },
            set: function (textAlignLast) {
              this.textAlignLast$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textAlignLast'), textAlignLast);
            }
          },
          textCombineUpright: {
            get: function () {
              return this.textCombineUpright$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textCombineUpright'));
            },
            set: function (textCombineUpright) {
              this.textCombineUpright$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textCombineUpright'), textCombineUpright);
            }
          },
          textDecoration: {
            get: function () {
              return this.textDecoration$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textDecoration'));
            },
            set: function (textDecoration) {
              this.textDecoration$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textDecoration'), textDecoration);
            }
          },
          textDecorationColor: {
            get: function () {
              return this.textDecorationColor$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textDecorationColor'));
            },
            set: function (textDecorationColor) {
              this.textDecorationColor$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textDecorationColor'), textDecorationColor);
            }
          },
          textDecorationLine: {
            get: function () {
              return this.textDecorationLine$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textDecorationLine'));
            },
            set: function (textDecorationLine) {
              this.textDecorationLine$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textDecorationLine'), textDecorationLine);
            }
          },
          textDecorationStyle: {
            get: function () {
              return this.textDecorationStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textDecorationStyle'));
            },
            set: function (textDecorationStyle) {
              this.textDecorationStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textDecorationStyle'), textDecorationStyle);
            }
          },
          textIndent: {
            get: function () {
              return this.textIndent$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textIndent'));
            },
            set: function (textIndent) {
              this.textIndent$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textIndent'), textIndent);
            }
          },
          textJustify: {
            get: function () {
              return this.textJustify$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textJustify'));
            },
            set: function (textJustify) {
              this.textJustify$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textJustify'), textJustify);
            }
          },
          textOrientation: {
            get: function () {
              return this.textOrientation$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textOrientation'));
            },
            set: function (textOrientation) {
              this.textOrientation$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textOrientation'), textOrientation);
            }
          },
          textOverflow: {
            get: function () {
              return this.textOverflow$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textOverflow'));
            },
            set: function (textOverflow) {
              this.textOverflow$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textOverflow'), textOverflow);
            }
          },
          textShadow: {
            get: function () {
              return this.textShadow$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textShadow'));
            },
            set: function (textShadow) {
              this.textShadow$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textShadow'), textShadow);
            }
          },
          textTransform: {
            get: function () {
              return this.textTransform$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textTransform'));
            },
            set: function (textTransform) {
              this.textTransform$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textTransform'), textTransform);
            }
          },
          textUnderlinePosition: {
            get: function () {
              return this.textUnderlinePosition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('textUnderlinePosition'));
            },
            set: function (textUnderlinePosition) {
              this.textUnderlinePosition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('textUnderlinePosition'), textUnderlinePosition);
            }
          },
          top: {
            get: function () {
              return this.top$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('top'));
            },
            set: function (top) {
              this.top$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('top'), top);
            }
          },
          transform: {
            get: function () {
              return this.transform$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transform'));
            },
            set: function (transform) {
              this.transform$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transform'), transform);
            }
          },
          transformOrigin: {
            get: function () {
              return this.transformOrigin$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transformOrigin'));
            },
            set: function (transformOrigin) {
              this.transformOrigin$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transformOrigin'), transformOrigin);
            }
          },
          transformStyle: {
            get: function () {
              return this.transformStyle$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transformStyle'));
            },
            set: function (transformStyle) {
              this.transformStyle$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transformStyle'), transformStyle);
            }
          },
          transition: {
            get: function () {
              return this.transition$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transition'));
            },
            set: function (transition) {
              this.transition$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transition'), transition);
            }
          },
          transitionDelay: {
            get: function () {
              return this.transitionDelay$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transitionDelay'));
            },
            set: function (transitionDelay) {
              this.transitionDelay$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transitionDelay'), transitionDelay);
            }
          },
          transitionDuration: {
            get: function () {
              return this.transitionDuration$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transitionDuration'));
            },
            set: function (transitionDuration) {
              this.transitionDuration$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transitionDuration'), transitionDuration);
            }
          },
          transitionProperty: {
            get: function () {
              return this.transitionProperty$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transitionProperty'));
            },
            set: function (transitionProperty) {
              this.transitionProperty$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transitionProperty'), transitionProperty);
            }
          },
          transitionTimingFunction: {
            get: function () {
              return this.transitionTimingFunction$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('transitionTimingFunction'));
            },
            set: function (transitionTimingFunction) {
              this.transitionTimingFunction$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('transitionTimingFunction'), transitionTimingFunction);
            }
          },
          unicodeBidi: {
            get: function () {
              return this.unicodeBidi$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('unicodeBidi'));
            },
            set: function (unicodeBidi) {
              this.unicodeBidi$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('unicodeBidi'), unicodeBidi);
            }
          },
          verticalAlign: {
            get: function () {
              return this.verticalAlign$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('verticalAlign'));
            },
            set: function (verticalAlign) {
              this.verticalAlign$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('verticalAlign'), verticalAlign);
            }
          },
          visibility: {
            get: function () {
              return this.visibility$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('visibility'));
            },
            set: function (visibility) {
              this.visibility$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('visibility'), visibility);
            }
          },
          voiceBalance: {
            get: function () {
              return this.voiceBalance$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voiceBalance'));
            },
            set: function (voiceBalance) {
              this.voiceBalance$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voiceBalance'), voiceBalance);
            }
          },
          voiceDuration: {
            get: function () {
              return this.voiceDuration$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voiceDuration'));
            },
            set: function (voiceDuration) {
              this.voiceDuration$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voiceDuration'), voiceDuration);
            }
          },
          voicePitch: {
            get: function () {
              return this.voicePitch$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voicePitch'));
            },
            set: function (voicePitch) {
              this.voicePitch$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voicePitch'), voicePitch);
            }
          },
          voicePitchRange: {
            get: function () {
              return this.voicePitchRange$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voicePitchRange'));
            },
            set: function (voicePitchRange) {
              this.voicePitchRange$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voicePitchRange'), voicePitchRange);
            }
          },
          voiceRate: {
            get: function () {
              return this.voiceRate$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voiceRate'));
            },
            set: function (voiceRate) {
              this.voiceRate$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voiceRate'), voiceRate);
            }
          },
          voiceStress: {
            get: function () {
              return this.voiceStress$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voiceStress'));
            },
            set: function (voiceStress) {
              this.voiceStress$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voiceStress'), voiceStress);
            }
          },
          voiceVolume: {
            get: function () {
              return this.voiceVolume$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('voiceVolume'));
            },
            set: function (voiceVolume) {
              this.voiceVolume$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('voiceVolume'), voiceVolume);
            }
          },
          whiteSpace: {
            get: function () {
              return this.whiteSpace$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('whiteSpace'));
            },
            set: function (whiteSpace) {
              this.whiteSpace$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('whiteSpace'), whiteSpace);
            }
          },
          widows: {
            get: function () {
              return this.widows$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('widows'));
            },
            set: function (widows) {
              this.widows$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('widows'), widows);
            }
          },
          width: {
            get: function () {
              return this.width$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('width'));
            },
            set: function (width) {
              this.width$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('width'), width);
            }
          },
          wordBreak: {
            get: function () {
              return this.wordBreak$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('wordBreak'));
            },
            set: function (wordBreak) {
              this.wordBreak$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('wordBreak'), wordBreak);
            }
          },
          wordSpacing: {
            get: function () {
              return this.wordSpacing$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('wordSpacing'));
            },
            set: function (wordSpacing) {
              this.wordSpacing$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('wordSpacing'), wordSpacing);
            }
          },
          wordWrap: {
            get: function () {
              return this.wordWrap$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('wordWrap'));
            },
            set: function (wordWrap) {
              this.wordWrap$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('wordWrap'), wordWrap);
            }
          },
          writingMode: {
            get: function () {
              return this.writingMode$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('writingMode'));
            },
            set: function (writingMode) {
              this.writingMode$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('writingMode'), writingMode);
            }
          },
          zIndex: {
            get: function () {
              return this.zIndex$delegate.getValue_ah4kp6$(this, new Kotlin.PropertyMetadata('zIndex'));
            },
            set: function (zIndex) {
              this.zIndex$delegate.setValue_vr1yzg$(this, new Kotlin.PropertyMetadata('zIndex'), zIndex);
            }
          },
          resolveStyleName_2a5go5$: function (prop) {
            var tmp$0;
            var s = '';
            tmp$0 = Kotlin.kotlin.text.iterator_gw00vq$(prop.name);
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
          }
        }, /** @lends _.fg.style.Style */ {
          Property: Kotlin.createClass(null, function Property($outer, name) {
            this.$outer = $outer;
            if (name === void 0)
              name = null;
            this.name = name;
          }, /** @lends _.fg.style.Style.Property.prototype */ {
            getValue_ah4kp6$: function (classStyle, prop) {
              var tmp$0, tmp$1;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveStyleName_2a5go5$(prop);
              return (tmp$1 = this.$outer.map.get_za3rmp$(styleName)) != null ? tmp$1 : '';
            },
            setValue_vr1yzg$: function (classStyle, prop, value) {
              var tmp$0;
              var styleName = (tmp$0 = this.name) != null ? tmp$0 : this.$outer.resolveStyleName_2a5go5$(prop);
              if (value.length > 0) {
                this.$outer.map.put_wn2jw4$(styleName, value);
              }
               else {
                this.$outer.map.remove_za3rmp$(styleName);
              }
            }
          })
        }),
        TypeStyle: Kotlin.createClass(function () {
          return [_.fg.style.Style, _.fg.elements.IStyle];
        }, function TypeStyle(selector, parentSelector) {
          if (parentSelector === void 0)
            parentSelector = null;
          TypeStyle.baseInitializer.call(this, selector);
          this.parentSelector = parentSelector;
        }, /** @lends _.fg.style.TypeStyle.prototype */ {
          toCss: function () {
            var tmp$1, tmp$2;
            var rules = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            var s = '';
            if (this.parentSelector != null) {
              s += this.parentSelector.toString() + ' ';
            }
            s += this.selector.toString() + ' { ';
            tmp$1 = Kotlin.kotlin.collections.iterator_efxzmg$(this.map);
            while (tmp$1.hasNext()) {
              var tmp$0 = tmp$1.next();
              var key = tmp$0.key;
              var value = tmp$0.value;
              s += key + ': ' + value + '; ';
            }
            s += '}';
            rules.add_za3rmp$(s);
            tmp$2 = this.childStyles.iterator();
            while (tmp$2.hasNext()) {
              var child = tmp$2.next();
              rules.addAll_wtfk93$(child.toCss());
            }
            return rules;
          }
        }),
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
