(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "+ZDr": function (e, t, n) {
      "use strict";
      var r = n("TqRt");
      (t.__esModule = !0),
        (t.withPrefix = h),
        (t.withAssetPrefix = function (e) {
          return h(e, g());
        }),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var a = r(n("8OQS")),
        o = r(n("pVnL")),
        i = r(n("PJYZ")),
        s = r(n("VbXa")),
        c = r(n("17x9")),
        l = r(n("q1tI")),
        u = n("YwZP"),
        p = n("LYrO"),
        d = n("cu4x");
      t.parsePath = d.parsePath;
      var f = function (e) {
        return null == e ? void 0 : e.startsWith("/");
      };
      function h(e, t) {
        var n, r;
        if ((void 0 === t && (t = m()), !b(e))) return e;
        if (e.startsWith("./") || e.startsWith("../")) return e;
        var a =
          null !== (n = null !== (r = t) && void 0 !== r ? r : g()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          ((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a) +
          (e.startsWith("/") ? e : "/" + e)
        );
      }
      var g = function () {
          return "/a-to-z-in-react-native";
        },
        m = function () {
          return "/a-to-z-in-react-native";
        },
        b = function (e) {
          return (
            e &&
            !e.startsWith("http://") &&
            !e.startsWith("https://") &&
            !e.startsWith("//")
          );
        };
      var y = function (e, t) {
          return "number" == typeof e
            ? e
            : b(e)
            ? f(e)
              ? h(e)
              : (function (e, t) {
                  return f(e) ? e : (0, p.resolve)(e, t);
                })(e, t)
            : e;
        },
        v = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        },
        w = (function (e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this).defaultGetProps = function (e) {
              var t = e.isPartiallyCurrent,
                r = e.isCurrent;
              return (n.props.partiallyActive ? t : r)
                ? {
                    className: [n.props.className, n.props.activeClassName]
                      .filter(Boolean)
                      .join(" "),
                    style: (0, o.default)(
                      {},
                      n.props.style,
                      n.props.activeStyle
                    ),
                  }
                : null;
            };
            var r = !1;
            return (
              "undefined" != typeof window &&
                window.IntersectionObserver &&
                (r = !0),
              (n.state = { IOSupported: r }),
              (n.handleRef = n.handleRef.bind((0, i.default)(n))),
              n
            );
          }
          (0, s.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function (e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue(
                  (0, d.parsePath)(y(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentDidMount = function () {
              this.state.IOSupported ||
                ___loader.enqueue(
                  (0, d.parsePath)(y(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentWillUnmount = function () {
              if (this.io) {
                var e = this.io,
                  t = e.instance,
                  n = e.el;
                t.unobserve(n), t.disconnect();
              }
            }),
            (n.handleRef = function (e) {
              var t,
                n,
                r,
                a = this;
              this.props.innerRef &&
              this.props.innerRef.hasOwnProperty("current")
                ? (this.props.innerRef.current = e)
                : this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  (this.io =
                    ((t = e),
                    (n = function () {
                      ___loader.enqueue(
                        (0, d.parsePath)(
                          y(a.props.to, window.location.pathname)
                        ).pathname
                      );
                    }),
                    (r = new window.IntersectionObserver(function (e) {
                      e.forEach(function (e) {
                        t === e.target &&
                          (e.isIntersecting || e.intersectionRatio > 0) &&
                          (r.unobserve(t), r.disconnect(), n());
                      });
                    })).observe(t),
                    { instance: r, el: t }));
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.to,
                r = t.getProps,
                i = void 0 === r ? this.defaultGetProps : r,
                s = t.onClick,
                c = t.onMouseEnter,
                p =
                  (t.activeClassName,
                  t.activeStyle,
                  t.innerRef,
                  t.partiallyActive,
                  t.state),
                f = t.replace,
                h = (0, a.default)(t, [
                  "to",
                  "getProps",
                  "onClick",
                  "onMouseEnter",
                  "activeClassName",
                  "activeStyle",
                  "innerRef",
                  "partiallyActive",
                  "state",
                  "replace",
                ]);
              return l.default.createElement(u.Location, null, function (t) {
                var r = t.location,
                  a = y(n, r.pathname);
                return b(a)
                  ? l.default.createElement(
                      u.Link,
                      (0, o.default)(
                        {
                          to: a,
                          state: p,
                          getProps: i,
                          innerRef: e.handleRef,
                          onMouseEnter: function (e) {
                            c && c(e),
                              ___loader.hovering((0, d.parsePath)(a).pathname);
                          },
                          onClick: function (t) {
                            if (
                              (s && s(t),
                              !(
                                0 !== t.button ||
                                e.props.target ||
                                t.defaultPrevented ||
                                t.metaKey ||
                                t.altKey ||
                                t.ctrlKey ||
                                t.shiftKey
                              ))
                            ) {
                              t.preventDefault();
                              var n = f,
                                r = encodeURI(a) === window.location.pathname;
                              "boolean" != typeof f && r && (n = !0),
                                window.___navigate(a, { state: p, replace: n });
                            }
                            return !0;
                          },
                        },
                        h
                      )
                    )
                  : l.default.createElement(
                      "a",
                      (0, o.default)({ href: a }, h)
                    );
              });
            }),
            t
          );
        })(l.default.Component);
      w.propTypes = (0, o.default)({}, v, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      var S = function (e, t, n) {
          return console.warn(
            'The "' +
              e +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              t +
              '" instead.'
          );
        },
        E = l.default.forwardRef(function (e, t) {
          return l.default.createElement(w, (0, o.default)({ innerRef: t }, e));
        });
      t.default = E;
      t.navigate = function (e, t) {
        window.___navigate(y(e, window.location.pathname), t);
      };
      var k = function (e) {
        S("push", "navigate", 3),
          window.___push(y(e, window.location.pathname));
      };
      t.push = k;
      t.replace = function (e) {
        S("replace", "navigate", 3),
          window.___replace(y(e, window.location.pathname));
      };
      t.navigateTo = function (e) {
        return S("navigateTo", "navigate", 3), k(e);
      };
    },
    "/hTd": function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.SessionStorage = void 0);
      var r = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.read = function (e, t) {
            var n = this.getStateKey(e, t);
            try {
              var r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (a) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (t.save = function (e, t, n) {
            var r = this.getStateKey(e, t),
              a = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, a);
            } catch (o) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(a));
            }
          }),
          (t.getStateKey = function (e, t) {
            var n = "@@scroll|" + e.pathname;
            return null == t ? n : n + "|" + t;
          }),
          e
        );
      })();
      t.SessionStorage = r;
    },
    "0x0X": function (e, t, n) {
      "use strict";
      t.a = function (e) {
        function t(e, t, r) {
          var a = t.trim().split(h);
          t = a;
          var o = a.length,
            i = e.length;
          switch (i) {
            case 0:
            case 1:
              var s = 0;
              for (e = 0 === i ? "" : e[0] + " "; s < o; ++s)
                t[s] = n(e, t[s], r).trim();
              break;
            default:
              var c = (s = 0);
              for (t = []; s < o; ++s)
                for (var l = 0; l < i; ++l)
                  t[c++] = n(e[l] + " ", a[s], r).trim();
          }
          return t;
        }
        function n(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(g, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(g, "$1" + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf("\f"))
                return t.replace(
                  g,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function r(e, t, n, o) {
          var i = e + ";",
            s = 2 * t + 3 * n + 4 * o;
          if (944 === s) {
            e = i.indexOf(":", 9) + 1;
            var c = i.substring(e, i.length - 1).trim();
            return (
              (c = i.substring(0, e).trim() + c + ";"),
              1 === _ || (2 === _ && a(c, 1)) ? "-webkit-" + c + c : c
            );
          }
          if (0 === _ || (2 === _ && !a(i, 1))) return i;
          switch (s) {
            case 1015:
              return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
            case 951:
              return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
            case 963:
              return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
            case 1009:
              if (100 !== i.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + i + i;
            case 978:
              return "-webkit-" + i + "-moz-" + i + i;
            case 1019:
            case 983:
              return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
            case 883:
              if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
              if (0 < i.indexOf("image-set(", 11))
                return i.replace(R, "$1-webkit-$2") + i;
              break;
            case 932:
              if (45 === i.charCodeAt(4))
                switch (i.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      i.replace("-grow", "") +
                      "-webkit-" +
                      i +
                      "-ms-" +
                      i.replace("grow", "positive") +
                      i
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      i +
                      "-ms-" +
                      i.replace("shrink", "negative") +
                      i
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      i +
                      "-ms-" +
                      i.replace("basis", "preferred-size") +
                      i
                    );
                }
              return "-webkit-" + i + "-ms-" + i + i;
            case 964:
              return "-webkit-" + i + "-ms-flex-" + i + i;
            case 1023:
              if (99 !== i.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (c = i
                  .substring(i.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                i +
                "-ms-flex-pack" +
                c +
                i
              );
            case 1005:
              return d.test(i)
                ? i.replace(p, ":-webkit-") + i.replace(p, ":-moz-") + i
                : i;
            case 1e3:
              switch (
                ((t = (c = i.substring(13).trim()).indexOf("-") + 1),
                c.charCodeAt(0) + c.charCodeAt(t))
              ) {
                case 226:
                  c = i.replace(v, "tb");
                  break;
                case 232:
                  c = i.replace(v, "tb-rl");
                  break;
                case 220:
                  c = i.replace(v, "lr");
                  break;
                default:
                  return i;
              }
              return "-webkit-" + i + "-ms-" + c + i;
            case 1017:
              if (-1 === i.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (i = e).length - 10),
                (s =
                  (c = (33 === i.charCodeAt(t) ? i.substring(0, t) : i)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | c.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > c.charCodeAt(8)) break;
                case 115:
                  i = i.replace(c, "-webkit-" + c) + ";" + i;
                  break;
                case 207:
                case 102:
                  i =
                    i.replace(
                      c,
                      "-webkit-" + (102 < s ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    i.replace(c, "-webkit-" + c) +
                    ";" +
                    i.replace(c, "-ms-" + c + "box") +
                    ";" +
                    i;
              }
              return i + ";";
            case 938:
              if (45 === i.charCodeAt(5))
                switch (i.charCodeAt(6)) {
                  case 105:
                    return (
                      (c = i.replace("-items", "")),
                      "-webkit-" + i + "-webkit-box-" + c + "-ms-flex-" + c + i
                    );
                  case 115:
                    return (
                      "-webkit-" + i + "-ms-flex-item-" + i.replace(E, "") + i
                    );
                  default:
                    return (
                      "-webkit-" +
                      i +
                      "-ms-flex-line-pack" +
                      i.replace("align-content", "").replace(E, "") +
                      i
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === O.test(e))
                return 115 ===
                  (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? r(e.replace("stretch", "fill-available"), t, n, o).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : i.replace(c, "-webkit-" + c) +
                      i.replace(c, "-moz-" + c.replace("fill-", "")) +
                      i;
              break;
            case 962:
              if (
                ((i =
                  "-webkit-" +
                  i +
                  (102 === i.charCodeAt(5) ? "-ms-" + i : "") +
                  i),
                211 === n + o &&
                  105 === i.charCodeAt(13) &&
                  0 < i.indexOf("transform", 10))
              )
                return (
                  i
                    .substring(0, i.indexOf(";", 27) + 1)
                    .replace(f, "$1-webkit-$2") + i
                );
          }
          return i;
        }
        function a(e, t) {
          var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
          return (
            (n = e.substring(n + 1, e.length - 1)),
            I(2 !== t ? r : r.replace(k, "$1"), n, t)
          );
        }
        function o(e, t) {
          var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ";"
            ? n.replace(S, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function i(e, t, n, r, a, o, i, s, l, u) {
          for (var p, d = 0, f = t; d < j; ++d)
            switch ((p = T[d].call(c, e, f, n, r, a, o, i, s, l, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                f = p;
            }
          if (f !== t) return f;
        }
        function s(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((I = null),
              e
                ? "function" != typeof e
                  ? (_ = 1)
                  : ((_ = 2), (I = e))
                : (_ = 0)),
            s
          );
        }
        function c(e, n) {
          var s = e;
          if ((33 > s.charCodeAt(0) && (s = s.trim()), (s = [s]), 0 < j)) {
            var c = i(-1, n, s, s, x, A, 0, 0, 0, 0);
            void 0 !== c && "string" == typeof c && (n = c);
          }
          var p = (function e(n, s, c, p, d) {
            for (
              var f,
                h,
                g,
                v,
                S,
                E = 0,
                k = 0,
                O = 0,
                R = 0,
                T = 0,
                I = 0,
                L = (g = f = 0),
                D = 0,
                F = 0,
                $ = 0,
                M = 0,
                B = c.length,
                U = B - 1,
                z = "",
                G = "",
                H = "",
                q = "";
              D < B;

            ) {
              if (
                ((h = c.charCodeAt(D)),
                D === U &&
                  0 !== k + R + O + E &&
                  (0 !== k && (h = 47 === k ? 10 : 47),
                  (R = O = E = 0),
                  B++,
                  U++),
                0 === k + R + O + E)
              ) {
                if (
                  D === U &&
                  (0 < F && (z = z.replace(u, "")), 0 < z.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      z += c.charAt(D);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      f = (z = z.trim()).charCodeAt(0), g = 1, M = ++D;
                      D < B;

                    ) {
                      switch ((h = c.charCodeAt(D))) {
                        case 123:
                          g++;
                          break;
                        case 125:
                          g--;
                          break;
                        case 47:
                          switch ((h = c.charCodeAt(D + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (L = D + 1; L < U; ++L)
                                  switch (c.charCodeAt(L)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === c.charCodeAt(L - 1) &&
                                        D + 2 !== L
                                      ) {
                                        D = L + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        D = L + 1;
                                        break e;
                                      }
                                  }
                                D = L;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; D++ < U && c.charCodeAt(D) !== h; );
                      }
                      if (0 === g) break;
                      D++;
                    }
                    switch (
                      ((g = c.substring(M, D)),
                      0 === f &&
                        (f = (z = z.replace(l, "").trim()).charCodeAt(0)),
                      f)
                    ) {
                      case 64:
                        switch (
                          (0 < F && (z = z.replace(u, "")),
                          (h = z.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            F = s;
                            break;
                          default:
                            F = C;
                        }
                        if (
                          ((M = (g = e(s, F, g, h, d + 1)).length),
                          0 < j &&
                            ((S = i(
                              3,
                              g,
                              (F = t(C, z, $)),
                              s,
                              x,
                              A,
                              M,
                              h,
                              d,
                              p
                            )),
                            (z = F.join("")),
                            void 0 !== S &&
                              0 === (M = (g = S.trim()).length) &&
                              ((h = 0), (g = ""))),
                          0 < M)
                        )
                          switch (h) {
                            case 115:
                              z = z.replace(w, o);
                            case 100:
                            case 109:
                            case 45:
                              g = z + "{" + g + "}";
                              break;
                            case 107:
                              (g = (z = z.replace(m, "$1 $2")) + "{" + g + "}"),
                                (g =
                                  1 === _ || (2 === _ && a("@" + g, 3))
                                    ? "@-webkit-" + g + "@" + g
                                    : "@" + g);
                              break;
                            default:
                              (g = z + g), 112 === p && ((G += g), (g = ""));
                          }
                        else g = "";
                        break;
                      default:
                        g = e(s, t(s, z, $), g, p, d + 1);
                    }
                    (H += g),
                      (g = $ = F = L = f = 0),
                      (z = ""),
                      (h = c.charCodeAt(++D));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (M = (z = (0 < F ? z.replace(u, "") : z).trim()).length)
                    )
                      switch (
                        (0 === L &&
                          ((f = z.charCodeAt(0)),
                          45 === f || (96 < f && 123 > f)) &&
                          (M = (z = z.replace(" ", ":")).length),
                        0 < j &&
                          void 0 !==
                            (S = i(1, z, s, n, x, A, G.length, p, d, p)) &&
                          0 === (M = (z = S.trim()).length) &&
                          (z = "\0\0"),
                        (f = z.charCodeAt(0)),
                        (h = z.charCodeAt(1)),
                        f)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            q += z + c.charAt(D);
                            break;
                          }
                        default:
                          58 !== z.charCodeAt(M - 1) &&
                            (G += r(z, f, h, z.charCodeAt(2)));
                      }
                    ($ = F = L = f = 0), (z = ""), (h = c.charCodeAt(++D));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === k
                    ? (k = 0)
                    : 0 === 1 + f &&
                      107 !== p &&
                      0 < z.length &&
                      ((F = 1), (z += "\0")),
                    0 < j * N && i(0, z, s, n, x, A, G.length, p, d, p),
                    (A = 1),
                    x++;
                  break;
                case 59:
                case 125:
                  if (0 === k + R + O + E) {
                    A++;
                    break;
                  }
                default:
                  switch ((A++, (v = c.charAt(D)), h)) {
                    case 9:
                    case 32:
                      if (0 === R + E + k)
                        switch (T) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = "";
                            break;
                          default:
                            32 !== h && (v = " ");
                        }
                      break;
                    case 0:
                      v = "\\0";
                      break;
                    case 12:
                      v = "\\f";
                      break;
                    case 11:
                      v = "\\v";
                      break;
                    case 38:
                      0 === R + k + E && ((F = $ = 1), (v = "\f" + v));
                      break;
                    case 108:
                      if (0 === R + k + E + P && 0 < L)
                        switch (D - L) {
                          case 2:
                            112 === T && 58 === c.charCodeAt(D - 3) && (P = T);
                          case 8:
                            111 === I && (P = I);
                        }
                      break;
                    case 58:
                      0 === R + k + E && (L = D);
                      break;
                    case 44:
                      0 === k + O + R + E && ((F = 1), (v += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === k && (R = R === h ? 0 : 0 === R ? h : R);
                      break;
                    case 91:
                      0 === R + k + O && E++;
                      break;
                    case 93:
                      0 === R + k + O && E--;
                      break;
                    case 41:
                      0 === R + k + E && O--;
                      break;
                    case 40:
                      if (0 === R + k + E) {
                        if (0 === f)
                          switch (2 * T + 3 * I) {
                            case 533:
                              break;
                            default:
                              f = 1;
                          }
                        O++;
                      }
                      break;
                    case 64:
                      0 === k + O + R + E + L + g && (g = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < R + E + O))
                        switch (k) {
                          case 0:
                            switch (2 * h + 3 * c.charCodeAt(D + 1)) {
                              case 235:
                                k = 47;
                                break;
                              case 220:
                                (M = D), (k = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === T &&
                              M + 2 !== D &&
                              (33 === c.charCodeAt(M + 2) &&
                                (G += c.substring(M, D + 1)),
                              (v = ""),
                              (k = 0));
                        }
                  }
                  0 === k && (z += v);
              }
              (I = T), (T = h), D++;
            }
            if (0 < (M = G.length)) {
              if (
                ((F = s),
                0 < j &&
                  void 0 !== (S = i(2, G, F, n, x, A, M, p, d, p)) &&
                  0 === (G = S).length)
              )
                return q + G + H;
              if (((G = F.join(",") + "{" + G + "}"), 0 != _ * P)) {
                switch ((2 !== _ || a(G, 2) || (P = 0), P)) {
                  case 111:
                    G = G.replace(y, ":-moz-$1") + G;
                    break;
                  case 112:
                    G =
                      G.replace(b, "::-webkit-input-$1") +
                      G.replace(b, "::-moz-$1") +
                      G.replace(b, ":-ms-input-$1") +
                      G;
                }
                P = 0;
              }
            }
            return q + G + H;
          })(C, s, n, 0, 0);
          return (
            0 < j &&
              void 0 !== (c = i(-2, p, s, s, x, A, p.length, 0, 0, 0)) &&
              (p = c),
            "",
            (P = 0),
            (A = x = 1),
            p
          );
        }
        var l = /^\0+/g,
          u = /[\0\r\f]/g,
          p = /: */g,
          d = /zoo|gra/,
          f = /([,: ])(transform)/g,
          h = /,\r+?/g,
          g = /([\t\r\n ])*\f?&/g,
          m = /@(k\w+)\s*(\S*)\s*/,
          b = /::(place)/g,
          y = /:(read-only)/g,
          v = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          S = /([\s\S]*?);/g,
          E = /-self|flex-/g,
          k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          O = /stretch|:\s*\w+\-(?:conte|avail)/,
          R = /([^-])(image-set\()/,
          A = 1,
          x = 1,
          P = 0,
          _ = 1,
          C = [],
          T = [],
          j = 0,
          I = null,
          N = 0;
        return (
          (c.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                j = T.length = 0;
                break;
              default:
                if ("function" == typeof t) T[j++] = t;
                else if ("object" == typeof t)
                  for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else N = 0 | !!t;
            }
            return e;
          }),
          (c.set = s),
          void 0 !== e && s(e),
          c
        );
      };
    },
    "284h": function (e, t, n) {
      var r = n("cDf5");
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      e.exports = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, i, s)
              : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      };
    },
    "2mql": function (e, t, n) {
      "use strict";
      var r = n("TOwV"),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? i : s[e.$$typeof] || a;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = i);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var a = f(n);
            a && a !== h && e(t, a, r);
          }
          var i = u(n);
          p && (i = i.concat(p(n)));
          for (var s = c(t), g = c(n), m = 0; m < i.length; ++m) {
            var b = i[m];
            if (!(o[b] || (r && r[b]) || (g && g[b]) || (s && s[b]))) {
              var y = d(n, b);
              try {
                l(t, b, y);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    "30RF": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var r = n("LYrO"),
        a = n("cSJ8"),
        o = function (e) {
          return void 0 === e
            ? e
            : "/" === e
            ? "/"
            : "/" === e.charAt(e.length - 1)
            ? e.slice(0, -1)
            : e;
        },
        i = new Map(),
        s = [],
        c = function (e) {
          var t = decodeURIComponent(e);
          return Object(a.a)(t, "/a-to-z-in-react-native")
            .split("#")[0]
            .split("?")[0];
        };
      function l(e) {
        return e.startsWith("/") ||
          e.startsWith("https://") ||
          e.startsWith("http://")
          ? e
          : new URL(
              e,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var u = function (e) {
          s = e;
        },
        p = function (e) {
          var t = h(e),
            n = s.map(function (e) {
              var t = e.path;
              return { path: e.matchPath, originalPath: t };
            }),
            a = Object(r.pick)(n, t);
          return a ? o(a.route.originalPath) : null;
        },
        d = function (e) {
          var t = h(e),
            n = s.map(function (e) {
              var t = e.path;
              return { path: e.matchPath, originalPath: t };
            }),
            a = Object(r.pick)(n, t);
          return a ? a.params : {};
        },
        f = function (e) {
          var t = c(l(e));
          if (i.has(t)) return i.get(t);
          var n = p(t);
          return n || (n = h(e)), i.set(t, n), n;
        },
        h = function (e) {
          var t = c(l(e));
          return "/index.html" === t && (t = "/"), (t = o(t));
        };
    },
    "3uz+": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = function (e) {
          var t = (0, o.useLocation)(),
            n = (0, a.useContext)(r.ScrollContext),
            i = (0, a.useRef)();
          return (
            (0, a.useLayoutEffect)(function () {
              if (i.current) {
                var r = n.read(t, e);
                i.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(t, e, i.current.scrollTop);
              },
            }
          );
        });
      var r = n("Enzk"),
        a = n("q1tI"),
        o = n("YwZP");
    },
    "5yr3": function (e, t, n) {
      "use strict";
      var r = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (t, n) {
              (e[t] || (e[t] = [])).push(n);
            },
            off: function (t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function (t, n) {
              (e[t] || []).slice().map(function (e) {
                e(n);
              }),
                (e["*"] || []).slice().map(function (e) {
                  e(t, n);
                });
            },
          }
        );
      })();
      t.a = r;
    },
    "7hJ6": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = t.ScrollContainer = t.ScrollContext = void 0);
      var r = n("Enzk");
      t.ScrollContext = r.ScrollHandler;
      var a = n("hd9s");
      t.ScrollContainer = a.ScrollContainer;
      var o = n("3uz+");
      t.useScrollRestoration = o.useScrollRestoration;
    },
    "7ljp": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "MDXContext", function () {
          return u;
        }),
        n.d(t, "MDXProvider", function () {
          return f;
        }),
        n.d(t, "mdx", function () {
          return m;
        }),
        n.d(t, "useMDXComponents", function () {
          return d;
        }),
        n.d(t, "withMDXComponents", function () {
          return p;
        });
      var r = n("q1tI"),
        a = n.n(r);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var u = a.a.createContext({}),
        p = function (e) {
          return function (t) {
            var n = d(t.components);
            return a.a.createElement(e, i({}, t, { components: n }));
          };
        },
        d = function (e) {
          var t = a.a.useContext(u),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : c(c({}, t), e)), n;
        },
        f = function (e) {
          var t = d(e.components);
          return a.a.createElement(u.Provider, { value: t }, e.children);
        },
        h = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.a.createElement(a.a.Fragment, {}, t);
          },
        },
        g = a.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            i = e.parentName,
            s = l(e, ["components", "mdxType", "originalType", "parentName"]),
            u = d(n),
            p = r,
            f = u["".concat(i, ".").concat(p)] || u[p] || h[p] || o;
          return n
            ? a.a.createElement(f, c(c({ ref: t }, s), {}, { components: n }))
            : a.a.createElement(f, c({ ref: t }, s));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var o = n.length,
            i = new Array(o);
          i[0] = g;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : r),
            (i[1] = s);
          for (var l = 2; l < o; l++) i[l] = n[l];
          return a.a.createElement.apply(null, i);
        }
        return a.a.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    "8OQS": function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      };
    },
    "8oxB": function (e, t) {
      var n,
        r,
        a = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      var c,
        l = [],
        u = !1,
        p = -1;
      function d() {
        u &&
          c &&
          ((u = !1), c.length ? (l = c.concat(l)) : (p = -1), l.length && f());
      }
      function f() {
        if (!u) {
          var e = s(d);
          u = !0;
          for (var t = l.length; t; ) {
            for (c = l, l = []; ++p < t; ) c && c[p].run();
            (p = -1), (t = l.length);
          }
          (c = null),
            (u = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || u || s(f);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (a.title = "browser"),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ""),
        (a.versions = {}),
        (a.on = g),
        (a.addListener = g),
        (a.once = g),
        (a.off = g),
        (a.removeListener = g),
        (a.removeAllListeners = g),
        (a.emit = g),
        (a.prependListener = g),
        (a.prependOnceListener = g),
        (a.listeners = function (e) {
          return [];
        }),
        (a.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (a.cwd = function () {
          return "/";
        }),
        (a.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (a.umask = function () {
          return 0;
        });
    },
    "94VI": function (e, t) {
      t.polyfill = function (e) {
        return e;
      };
    },
    "9Xx/": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return c;
      }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            a = t.href,
            o = t.origin,
            i = t.protocol,
            c = t.host,
            l = t.hostname,
            u = t.port,
            p = e.location.pathname;
          !p && a && s && (p = new URL(a).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: a,
            origin: o,
            protocol: i,
            host: c,
            hostname: l,
            port: u,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial",
          };
        },
        o = function (e, t) {
          var n = [],
            o = a(e),
            i = !1,
            s = function () {};
          return {
            get location() {
              return o;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), s();
            },
            listen: function (t) {
              n.push(t);
              var r = function () {
                (o = a(e)), t({ location: o, action: "POP" });
              };
              return (
                e.addEventListener("popstate", r),
                function () {
                  e.removeEventListener("popstate", r),
                    (n = n.filter(function (e) {
                      return e !== t;
                    }));
                }
              );
            },
            navigate: function (t) {
              var c =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                l = c.state,
                u = c.replace,
                p = void 0 !== u && u;
              if ("number" == typeof t) e.history.go(t);
              else {
                l = r({}, l, { key: Date.now() + "" });
                try {
                  i || p
                    ? e.history.replaceState(l, null, t)
                    : e.history.pushState(l, null, t);
                } catch (f) {
                  e.location[p ? "replace" : "assign"](t);
                }
              }
              (o = a(e)), (i = !0);
              var d = new Promise(function (e) {
                return (s = e);
              });
              return (
                n.forEach(function (e) {
                  return e({ location: o, action: "PUSH" });
                }),
                d
              );
            },
          };
        },
        i = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = e.indexOf("?"),
            n = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : "",
            },
            r = 0,
            a = [n],
            o = [null];
          return {
            get location() {
              return a[r];
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return a;
              },
              get index() {
                return r;
              },
              get state() {
                return o[r];
              },
              pushState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  l = void 0 === c ? "" : c;
                r++,
                  a.push({ pathname: s, search: l.length ? "?" + l : l }),
                  o.push(e);
              },
              replaceState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  l = void 0 === c ? "" : c;
                (a[r] = { pathname: s, search: l }), (o[r] = e);
              },
              go: function (e) {
                var t = r + e;
                t < 0 || t > o.length - 1 || (r = t);
              },
            },
          };
        },
        s = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        c = o(s ? window : i()),
        l = c.navigate;
    },
    "9uj6": function (e, t, n) {
      "use strict";
      var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        a = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return (
            r.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
      t.a = a;
    },
    BfwJ: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "useMDXScope", function () {
          return i;
        }),
        n.d(t, "MDXScopeProvider", function () {
          return s;
        });
      var r = n("q1tI"),
        a = n.n(r),
        o = Object(r.createContext)({}),
        i = function (e) {
          var t = Object(r.useContext)(o);
          return e || t;
        },
        s = function (e) {
          var t = e.__mdxScope,
            n = e.children;
          return a.a.createElement(o.Provider, { value: t }, n);
        };
    },
    Enzk: function (e, t, n) {
      "use strict";
      var r = n("284h"),
        a = n("TqRt");
      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      var o = a(n("PJYZ")),
        i = a(n("VbXa")),
        s = r(n("q1tI")),
        c = a(n("17x9")),
        l = n("/hTd"),
        u = s.createContext(new l.SessionStorage());
      (t.ScrollContext = u), (u.displayName = "GatsbyScrollContext");
      var p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t =
              e.call.apply(e, [this].concat(r)) ||
              this)._stateStorage = new l.SessionStorage()),
            (t.scrollListener = function () {
              var e = t.props.location.key;
              e && t._stateStorage.save(t.props.location, e, window.scrollY);
            }),
            (t.windowScroll = function (e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function (e, n) {
              var r = document.getElementById(e.substring(1));
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function (e, n) {
              var r = t.props.shouldUpdateScroll;
              return !r || r.call((0, o.default)(t), e, n);
            }),
            t
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            var e;
            window.addEventListener("scroll", this.scrollListener);
            var t = this.props.location,
              n = t.key,
              r = t.hash;
            n && (e = this._stateStorage.read(this.props.location, n)),
              e
                ? this.windowScroll(e, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function (e) {
            var t,
              n = this.props.location,
              r = n.hash,
              a = n.key;
            a && (t = this._stateStorage.read(this.props.location, a)),
              r && 0 === t
                ? this.scrollToHash(decodeURI(r), e)
                : this.windowScroll(t, e);
          }),
          (n.render = function () {
            return s.createElement(
              u.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          t
        );
      })(s.Component);
      (t.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
          location: c.default.object.isRequired,
        });
    },
    GddB: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "wrapRootElement", function () {
          return x;
        });
      var r = n("7ljp"),
        a = n("q1tI"),
        o = n.n(a);
      var i,
        s,
        c,
        l =
          ((i = 0),
          (s = {
            util: {
              encode: function (e) {
                return e instanceof c
                  ? new c(e.type, s.util.encode(e.content), e.alias)
                  : "Array" === s.util.type(e)
                  ? e.map(s.util.encode)
                  : e
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString
                  .call(e)
                  .match(/\[object (\w+)\]/)[1];
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++i }),
                  e.__id
                );
              },
              clone: function (e, t) {
                var n = s.util.type(e);
                switch (((t = t || {}), n)) {
                  case "Object":
                    if (t[s.util.objId(e)]) return t[s.util.objId(e)];
                    for (var r in ((a = {}), (t[s.util.objId(e)] = a), e))
                      e.hasOwnProperty(r) && (a[r] = s.util.clone(e[r], t));
                    return a;
                  case "Array":
                    if (t[s.util.objId(e)]) return t[s.util.objId(e)];
                    var a = [];
                    return (
                      (t[s.util.objId(e)] = a),
                      e.forEach(function (e, n) {
                        a[n] = s.util.clone(e, t);
                      }),
                      a
                    );
                }
                return e;
              },
            },
            languages: {
              extend: function (e, t) {
                var n = s.util.clone(s.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var a = (r = r || s.languages)[e];
                if (2 == arguments.length) {
                  for (var o in (n = arguments[1]))
                    n.hasOwnProperty(o) && (a[o] = n[o]);
                  return a;
                }
                var i = {};
                for (var c in a)
                  if (a.hasOwnProperty(c)) {
                    if (c == t)
                      for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                    i[c] = a[c];
                  }
                return (
                  s.languages.DFS(s.languages, function (t, n) {
                    n === r[e] && t != e && (this[t] = i);
                  }),
                  (r[e] = i)
                );
              },
              DFS: function (e, t, n, r) {
                for (var a in ((r = r || {}), e))
                  e.hasOwnProperty(a) &&
                    (t.call(e, a, e[a], n || a),
                    "Object" !== s.util.type(e[a]) || r[s.util.objId(e[a])]
                      ? "Array" !== s.util.type(e[a]) ||
                        r[s.util.objId(e[a])] ||
                        ((r[s.util.objId(e[a])] = !0),
                        s.languages.DFS(e[a], t, a, r))
                      : ((r[s.util.objId(e[a])] = !0),
                        s.languages.DFS(e[a], t, null, r)));
              },
            },
            plugins: {},
            highlight: function (e, t, n) {
              var r = { code: e, grammar: t, language: n };
              return (
                (r.tokens = s.tokenize(r.code, r.grammar)),
                c.stringify(s.util.encode(r.tokens), r.language)
              );
            },
            matchGrammar: function (e, t, n, r, a, o, i) {
              var c = s.Token;
              for (var l in n)
                if (n.hasOwnProperty(l) && n[l]) {
                  if (l == i) return;
                  var u = n[l];
                  u = "Array" === s.util.type(u) ? u : [u];
                  for (var p = 0; p < u.length; ++p) {
                    var d = u[p],
                      f = d.inside,
                      h = !!d.lookbehind,
                      g = !!d.greedy,
                      m = 0,
                      b = d.alias;
                    if (g && !d.pattern.global) {
                      var y = d.pattern.toString().match(/[imuy]*$/)[0];
                      d.pattern = RegExp(d.pattern.source, y + "g");
                    }
                    d = d.pattern || d;
                    for (
                      var v = r, w = a;
                      v < t.length;
                      w += t[v].length, ++v
                    ) {
                      var S = t[v];
                      if (t.length > e.length) return;
                      if (!(S instanceof c)) {
                        if (g && v != t.length - 1) {
                          if (((d.lastIndex = w), !(x = d.exec(e)))) break;
                          for (
                            var E = x.index + (h ? x[1].length : 0),
                              k = x.index + x[0].length,
                              O = v,
                              R = w,
                              A = t.length;
                            O < A &&
                            (R < k || (!t[O].type && !t[O - 1].greedy));
                            ++O
                          )
                            E >= (R += t[O].length) && (++v, (w = R));
                          if (t[v] instanceof c) continue;
                          (P = O - v), (S = e.slice(w, R)), (x.index -= w);
                        } else {
                          d.lastIndex = 0;
                          var x = d.exec(S),
                            P = 1;
                        }
                        if (x) {
                          h && (m = x[1] ? x[1].length : 0),
                            (k =
                              (E = x.index + m) + (x = x[0].slice(m)).length);
                          var _ = S.slice(0, E),
                            C = S.slice(k),
                            T = [v, P];
                          _ && (++v, (w += _.length), T.push(_));
                          var j = new c(l, f ? s.tokenize(x, f) : x, b, x, g);
                          if (
                            (T.push(j),
                            C && T.push(C),
                            Array.prototype.splice.apply(t, T),
                            1 != P && s.matchGrammar(e, t, n, v, w, !0, l),
                            o)
                          )
                            break;
                        } else if (o) break;
                      }
                    }
                  }
                }
            },
            hooks: { add: function () {} },
            tokenize: function (e, t, n) {
              var r = [e],
                a = t.rest;
              if (a) {
                for (var o in a) t[o] = a[o];
                delete t.rest;
              }
              return s.matchGrammar(e, r, t, 0, 0, !1), r;
            },
          }),
          ((c = s.Token = function (e, t, n, r, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (r || "").length),
              (this.greedy = !!a);
          }).stringify = function (e, t, n) {
            if ("string" == typeof e) return e;
            if ("Array" === s.util.type(e))
              return e
                .map(function (n) {
                  return c.stringify(n, t, e);
                })
                .join("");
            var r = {
              type: e.type,
              content: c.stringify(e.content, t, n),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t,
              parent: n,
            };
            if (e.alias) {
              var a = "Array" === s.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(r.classes, a);
            }
            var o = Object.keys(r.attributes)
              .map(function (e) {
                return (
                  e +
                  '="' +
                  (r.attributes[e] || "").replace(/"/g, "&quot;") +
                  '"'
                );
              })
              .join(" ");
            return (
              "<" +
              r.tag +
              ' class="' +
              r.classes.join(" ") +
              '"' +
              (o ? " " + o : "") +
              ">" +
              r.content +
              "</" +
              r.tag +
              ">"
            );
          }),
          s);
      (l.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/i,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
              inside: {
                punctuation: [
                  /^=/,
                  { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                ],
              },
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: /&#?[\da-z]{1,8};/i,
      }),
        (l.languages.markup.tag.inside["attr-value"].inside.entity =
          l.languages.markup.entity),
        l.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(l.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: l.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = { pattern: /[\s\S]+/, inside: l.languages[t] };
            var a = {};
            (a[e] = {
              pattern: RegExp(
                /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  e
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              l.languages.insertBefore("markup", "cdata", a);
          },
        }),
        (l.languages.xml = l.languages.extend("markup", {})),
        (l.languages.html = l.languages.markup),
        (l.languages.mathml = l.languages.markup),
        (l.languages.svg = l.languages.markup),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: n,
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: n.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          };
          for (
            var r = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              a = n.variable[1].inside,
              o = 0;
            o < r.length;
            o++
          )
            a[r[o]] = e.languages.bash[r[o]];
          e.languages.shell = e.languages.bash;
        })(l),
        (l.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (l.languages.c = l.languages.extend("clike", {
          "class-name": {
            pattern: /(\b(?:enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        l.languages.insertBefore("c", "string", {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
              string: {
                pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                lookbehind: !0,
              },
              directive: {
                pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword",
              },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete l.languages.c.boolean,
        (l.languages.cpp = l.languages.extend("c", {
          "class-name": {
            pattern: /(\b(?:class|enum|struct)\s+)\w+/,
            lookbehind: !0,
          },
          keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
          number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
            greedy: !0,
          },
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:true|false)\b/,
        })),
        l.languages.insertBefore("cpp", "string", {
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0,
          },
        }),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
              inside: { rule: /@[\w-]+/ },
            },
            url: {
              pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
              inside: { function: /^url/i, punctuation: /^\(|\)$/ },
            },
            selector: RegExp(
              "[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"
            ),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    "attr-name": {
                      pattern: /^\s*style/i,
                      inside: n.tag.inside,
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: e.languages.css },
                  },
                  alias: "language-css",
                },
              },
              n.tag
            ));
        })(l),
        (l.languages.css.selector = {
          pattern: l.languages.css.selector,
          inside: {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                "case-sensitivity": {
                  pattern: /(\s)[si]$/i,
                  lookbehind: !0,
                  alias: "keyword",
                },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                attribute: {
                  pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                  lookbehind: !0,
                },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  {
                    pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                    lookbehind: !0,
                  },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            "n-th": [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            punctuation: /[()]/,
          },
        }),
        l.languages.insertBefore("css", "property", {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        l.languages.insertBefore("css", "function", {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: /-?[\d.]+/,
        }),
        (l.languages.javascript = l.languages.extend("clike", {
          "class-name": [
            l.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (l.languages.javascript[
          "class-name"
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        l.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          "function-variable": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: l.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: l.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        l.languages.insertBefore("javascript", "string", {
          "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\${|}$/,
                    alias: "punctuation",
                  },
                  rest: l.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        l.languages.markup &&
          l.languages.markup.tag.addInlined("script", "javascript"),
        (l.languages.js = l.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              "attr-value"
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside[
              "class-name"
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                  alias: "language-javascript",
                },
              },
              e.languages.jsx.tag
            );
          var n = function e(t) {
            return t
              ? "string" == typeof t
                ? t
                : "string" == typeof t.content
                ? t.content
                : t.content.map(e).join("")
              : "";
          };
          e.hooks.add("after-tokenize", function (t) {
            ("jsx" !== t.language && "tsx" !== t.language) ||
              (function t(r) {
                for (var a = [], o = 0; o < r.length; o++) {
                  var i = r[o],
                    s = !1;
                  if (
                    ("string" != typeof i &&
                      ("tag" === i.type &&
                      i.content[0] &&
                      "tag" === i.content[0].type
                        ? "</" === i.content[0].content[0].content
                          ? a.length > 0 &&
                            a[a.length - 1].tagName ===
                              n(i.content[0].content[1]) &&
                            a.pop()
                          : "/>" === i.content[i.content.length - 1].content ||
                            a.push({
                              tagName: n(i.content[0].content[1]),
                              openedBraces: 0,
                            })
                        : a.length > 0 &&
                          "punctuation" === i.type &&
                          "{" === i.content
                        ? a[a.length - 1].openedBraces++
                        : a.length > 0 &&
                          a[a.length - 1].openedBraces > 0 &&
                          "punctuation" === i.type &&
                          "}" === i.content
                        ? a[a.length - 1].openedBraces--
                        : (s = !0)),
                    (s || "string" == typeof i) &&
                      a.length > 0 &&
                      0 === a[a.length - 1].openedBraces)
                  ) {
                    var c = n(i);
                    o < r.length - 1 &&
                      ("string" == typeof r[o + 1] ||
                        "plain-text" === r[o + 1].type) &&
                      ((c += n(r[o + 1])), r.splice(o + 1, 1)),
                      o > 0 &&
                        ("string" == typeof r[o - 1] ||
                          "plain-text" === r[o - 1].type) &&
                        ((c = n(r[o - 1]) + c), r.splice(o - 1, 1), o--),
                      (r[o] = new e.Token("plain-text", c, null, c));
                  }
                  i.content && "string" != typeof i.content && t(i.content);
                }
              })(t.tokens);
          });
        })(l),
        (function (e) {
          var t = (e.languages.javadoclike = {
            parameter: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
              lookbehind: !0,
            },
            punctuation: /[{}]/,
          });
          Object.defineProperty(t, "addSupport", {
            value: function (t, n) {
              "string" == typeof t && (t = [t]),
                t.forEach(function (t) {
                  !(function (t, n) {
                    var r = e.languages[t];
                    if (r) {
                      var a = r["doc-comment"];
                      if (!a) {
                        var o = {
                          "doc-comment": {
                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                            alias: "comment",
                          },
                        };
                        a = (r = e.languages.insertBefore(t, "comment", o))[
                          "doc-comment"
                        ];
                      }
                      if (
                        (a instanceof RegExp &&
                          (a = r["doc-comment"] = { pattern: a }),
                        Array.isArray(a))
                      )
                        for (var i = 0, s = a.length; i < s; i++)
                          a[i] instanceof RegExp && (a[i] = { pattern: a[i] }),
                            n(a[i]);
                      else n(a);
                    }
                  })(t, function (e) {
                    e.inside || (e.inside = {}), (e.inside.rest = n);
                  });
                });
            },
          }),
            t.addSupport(["java", "javascript", "php"], t);
        })(l),
        (function (e) {
          var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend("clike", {
            "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
            ],
            number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("java", "class-name", {
              annotation: {
                alias: "punctuation",
                pattern: /(^|[^.])@\w+/,
                lookbehind: !0,
              },
              namespace: {
                pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              generics: {
                pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  "class-name": n,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
            });
        })(l),
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, o) {
                if (n.language === r) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ("function" == typeof o && !o(e)) return e;
                    for (
                      var a, s = i.length;
                      -1 !== n.code.indexOf((a = t(r, s)));

                    )
                      ++s;
                    return (i[s] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    o = Object.keys(n.tokenStack);
                  !(function i(s) {
                    for (var c = 0; c < s.length && !(a >= o.length); c++) {
                      var l = s[c];
                      if (
                        "string" == typeof l ||
                        (l.content && "string" == typeof l.content)
                      ) {
                        var u = o[a],
                          p = n.tokenStack[u],
                          d = "string" == typeof l ? l : l.content,
                          f = t(r, u),
                          h = d.indexOf(f);
                        if (h > -1) {
                          ++a;
                          var g = d.substring(0, h),
                            m = new e.Token(
                              r,
                              e.tokenize(p, n.grammar),
                              "language-" + r,
                              p
                            ),
                            b = d.substring(h + f.length),
                            y = [];
                          g && y.push.apply(y, i([g])),
                            y.push(m),
                            b && y.push.apply(y, i([b])),
                            "string" == typeof l
                              ? s.splice.apply(s, [c, 1].concat(y))
                              : (l.content = y);
                        }
                      } else l.content && i(l.content);
                    }
                    return s;
                  })(n.tokens);
                }
              },
            },
          });
        })(l),
        (function (e) {
          (e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("php", "string", {
              "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment",
              },
            }),
            e.languages.insertBefore("php", "comment", {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important",
              },
            }),
            e.languages.insertBefore("php", "keyword", {
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            e.languages.insertBefore("php", "operator", {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php },
          };
          e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            "heredoc-string": {
              pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: "string",
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: "symbol",
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: t,
              },
            },
            "single-quoted-string": {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: "string",
            },
            "double-quoted-string": {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: t },
            },
          }),
            delete e.languages.php.string,
            e.hooks.add("before-tokenize", function (t) {
              if (/<\?/.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(
                  t,
                  "php",
                  /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
                );
              }
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(t, "php");
            });
        })(l),
        (function (e) {
          var t = e.languages.javascript,
            n = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,
            r = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
          (e.languages.jsdoc = e.languages.extend("javadoclike", {
            parameter: {
              pattern: RegExp(r + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          })),
            e.languages.insertBefore("jsdoc", "keyword", {
              "optional-parameter": {
                pattern: RegExp(
                  r + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source
                ),
                lookbehind: !0,
                inside: {
                  parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                  code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: t,
                    alias: "language-javascript",
                  },
                  punctuation: /[=[\]]/,
                },
              },
              "class-name": [
                {
                  pattern: RegExp("(@[a-z]+\\s+)" + n),
                  lookbehind: !0,
                  inside: { punctuation: /[.,:?=<>|{}()[\]]/ },
                },
                {
                  pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
              ],
              example: {
                pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                  code: {
                    pattern: /^(\s*(?:\*\s*)?).+$/m,
                    lookbehind: !0,
                    inside: t,
                    alias: "language-javascript",
                  },
                },
              },
            }),
            e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
        })(l),
        (l.languages.actionscript = l.languages.extend("javascript", {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (l.languages.actionscript["class-name"].alias = "function"),
        l.languages.markup &&
          l.languages.insertBefore("actionscript", "string", {
            xml: {
              pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: { rest: l.languages.markup },
            },
          }),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  rest: e.languages.javascript,
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(l),
        (function (e) {
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var t = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n],
              a = e.languages.javascript[r];
            "RegExp" === e.util.type(a) &&
              (a = e.languages.javascript[r] = { pattern: a });
            var o = a.inside || {};
            (a.inside = o), (o["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(l),
        (function (e) {
          (e.languages.flow = e.languages.extend("javascript", {})),
            e.languages.insertBefore("flow", "keyword", {
              type: [
                {
                  pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                  alias: "tag",
                },
              ],
            }),
            (e.languages.flow[
              "function-variable"
            ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            delete e.languages.flow.parameter,
            e.languages.insertBefore("flow", "operator", {
              "flow-punctuation": {
                pattern: /\{\||\|\}/,
                alias: "punctuation",
              },
            }),
            Array.isArray(e.languages.flow.keyword) ||
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              {
                pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                lookbehind: !0,
              },
              {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0,
              }
            );
        })(l),
        (l.languages.n4js = l.languages.extend("javascript", {
          keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
        })),
        l.languages.insertBefore("n4js", "constant", {
          annotation: { pattern: /@+\w+/, alias: "operator" },
        }),
        (l.languages.n4jsd = l.languages.n4js),
        (l.languages.typescript = l.languages.extend("javascript", {
          keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (l.languages.ts = l.languages.typescript),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function s(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function c(t, n, r) {
            var a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function l(t) {
            var n = {};
            n["interpolation-punctuation"] = a;
            var o = e.tokenize(t, n);
            if (3 === o.length) {
              var i = [1, 1];
              i.push.apply(i, c(o[1], e.languages.javascript, "javascript")),
                o.splice.apply(o, i);
            }
            return new e.Token("interpolation", o, r.alias, t);
          }
          function u(t, n, r) {
            var a = e.tokenize(t, {
                interpolation: { pattern: RegExp(o), lookbehind: !0 },
              }),
              i = 0,
              u = {},
              p = c(
                a
                  .map(function (e) {
                    if ("string" == typeof e) return e;
                    for (
                      var n, a = e.content;
                      -1 !== t.indexOf((n = s(i++, r)));

                    );
                    return (u[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              d = Object.keys(u);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= d.length) return;
                  var r = t[n];
                  if ("string" == typeof r || "string" == typeof r.content) {
                    var a = d[i],
                      o = "string" == typeof r ? r : r.content,
                      s = o.indexOf(a);
                    if (-1 !== s) {
                      ++i;
                      var c = o.substring(0, s),
                        p = l(u[a]),
                        f = o.substring(s + a.length),
                        h = [];
                      if ((c && h.push(c), h.push(p), f)) {
                        var g = [f];
                        e(g), h.push.apply(h, g);
                      }
                      "string" == typeof r
                        ? (t.splice.apply(t, [n, 1].concat(h)),
                          (n += h.length - 1))
                        : (r.content = h);
                    }
                  } else {
                    var m = r.content;
                    Array.isArray(m) ? e(m) : e([m]);
                  }
                }
              })(p),
              new e.Token(r, p, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:md|markdown)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            t,
          ].filter(Boolean);
          var p = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function d(e) {
            return "string" == typeof e
              ? e
              : Array.isArray(e)
              ? e.map(d).join("")
              : d(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in p &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var o = n[r];
                  if ("string" != typeof o) {
                    var i = o.content;
                    if (Array.isArray(i))
                      if ("template-string" === o.type) {
                        var s = i[1];
                        if (
                          3 === i.length &&
                          "string" != typeof s &&
                          "embedded-code" === s.type
                        ) {
                          var c = d(s),
                            l = s.alias,
                            p = Array.isArray(l) ? l[0] : l,
                            f = e.languages[p];
                          if (!f) continue;
                          i[1] = u(c, f, p);
                        }
                      } else t(i);
                    else "string" != typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(l),
        (l.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "class-name": {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
          operator: /[!=|]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
          function n(e, n) {
            return (
              (e = e.replace(/<inner>/g, t)),
              n && (e = e + "|" + e.replace(/_/g, "\\*")),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            a = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, r),
            o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
              .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + o + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                  lookbehind: !0,
                  alias: "keyword",
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
                  !0
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
                    .source,
                  !1
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike"].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var a = t[n];
                      if ("code" === a.type) {
                        var o = a.content[1],
                          i = a.content[3];
                        if (
                          o &&
                          i &&
                          "code-language" === o.type &&
                          "code-block" === i.type &&
                          "string" == typeof o.content
                        ) {
                          var s =
                            "language-" +
                            o.content.trim().split(/\s+/)[0].toLowerCase();
                          i.alias
                            ? "string" == typeof i.alias
                              ? (i.alias = [i.alias, s])
                              : i.alias.push(s)
                            : (i.alias = [s]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  var o = t.classes[r],
                    i = /language-(.+)/.exec(o);
                  if (i) {
                    n = i[1];
                    break;
                  }
                }
                var s = e.languages[n];
                if (s) {
                  var c = t.content
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&");
                  t.content = e.highlight(c, s, n);
                } else if (n && "none" !== n && e.plugins.autoloader) {
                  var l =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = l),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(l);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(l),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              "diff" === n && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(l),
        (l.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (l.languages.go = l.languages.extend("clike", {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete l.languages.go["class-name"],
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            });
        })(l),
        (l.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (l.languages.less = l.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        l.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (l.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (l.languages.objectivec = l.languages.extend("c", {
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete l.languages.objectivec["class-name"],
        (l.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: "variable" },
          directive: { pattern: /\B#\w+/, alias: "function" },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/,
        }),
        (l.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (l.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = l.languages.python),
        (l.languages.py = l.languages.python),
        (l.languages.reason = l.languages.extend("clike", {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        l.languages.insertBefore("reason", "class-name", {
          character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: "string",
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: "variable" },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete l.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(l),
        (l.languages.scss = l.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        l.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        l.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        l.languages.insertBefore("scss", "function", {
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (l.languages.scss.atrule.inside.rest = l.languages.scss),
        (l.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: {
              pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
              greedy: !0,
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
              pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
              lookbehind: !0,
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
            ],
            punctuation: /[{}()\[\];:,]/,
          };
          (t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^{|}$/, alias: "punctuation" },
              rest: t,
            },
          }),
            (t.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: t },
            }),
            (e.languages.stylus = {
              comment: {
                pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t },
              },
              "property-declaration": {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: t.interpolation },
                  },
                  rest: t,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: t.interpolation,
                  punctuation: /[{},]/,
                },
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(l);
      var u = l.util.clone(l.languages.typescript);
      (l.languages.tsx = l.languages.extend("jsx", u)),
        (l.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (l.languages.yaml = {
          scalar: {
            pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: "string",
          },
          comment: /#.*/,
          key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: "atrule",
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important",
          },
          datetime: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: "number",
          },
          boolean: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          null: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important",
          },
          string: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
        (l.languages.yml = l.languages.yaml);
      var p = {
        Prism: l,
        theme: {
          plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
              style: { color: "#6c6783" },
            },
            { types: ["namespace"], style: { opacity: 0.7 } },
            {
              types: ["tag", "operator", "number"],
              style: { color: "#e09142" },
            },
            { types: ["property", "function"], style: { color: "#9a86fd" } },
            {
              types: ["tag-id", "selector", "atrule-id"],
              style: { color: "#eeebff" },
            },
            { types: ["attr-name"], style: { color: "#c4b9fe" } },
            {
              types: [
                "boolean",
                "string",
                "entity",
                "url",
                "attr-value",
                "keyword",
                "control",
                "directive",
                "unit",
                "statement",
                "regex",
                "at-rule",
                "placeholder",
                "variable",
              ],
              style: { color: "#ffcc99" },
            },
            {
              types: ["deleted"],
              style: { textDecorationLine: "line-through" },
            },
            { types: ["inserted"], style: { textDecorationLine: "underline" } },
            { types: ["italic"], style: { fontStyle: "italic" } },
            { types: ["important", "bold"], style: { fontWeight: "bold" } },
            { types: ["important"], style: { color: "#c4b9fe" } },
          ],
        },
      };
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var h = /\r\n|\r|\n/,
        g = function (e) {
          0 === e.length
            ? e.push({ types: ["plain"], content: "", empty: !0 })
            : 1 === e.length && "" === e[0].content && (e[0].empty = !0);
        },
        m = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        b = function (e, t) {
          var n = e.plain,
            r = Object.create(null),
            a = e.styles.reduce(function (e, n) {
              var r = n.languages,
                a = n.style;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = f({}, e[t], a);
                    e[t] = n;
                  }),
                e
              );
            }, r);
          return (
            (a.root = n), (a.plain = f({}, n, { backgroundColor: null })), a
          );
        };
      function y(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r]);
        return n;
      }
      var v = (function (e) {
          function t() {
            for (var t = this, n = [], r = arguments.length; r--; )
              n[r] = arguments[r];
            e.apply(this, n),
              d(this, "getThemeDict", function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? b(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              d(this, "getLineProps", function (e) {
                var n = e.key,
                  r = e.className,
                  a = e.style,
                  o = f({}, y(e, ["key", "className", "style", "line"]), {
                    className: "token-line",
                    style: void 0,
                    key: void 0,
                  }),
                  i = t.getThemeDict(t.props);
                return (
                  void 0 !== i && (o.style = i.plain),
                  void 0 !== a &&
                    (o.style = void 0 !== o.style ? f({}, o.style, a) : a),
                  void 0 !== n && (o.key = n),
                  r && (o.className += " " + r),
                  o
                );
              }),
              d(this, "getStyleForToken", function (e) {
                var n = e.types,
                  r = e.empty,
                  a = n.length,
                  o = t.getThemeDict(t.props);
                if (void 0 !== o) {
                  if (1 === a && "plain" === n[0])
                    return r ? { display: "inline-block" } : void 0;
                  if (1 === a && !r) return o[n[0]];
                  var i = r ? { display: "inline-block" } : {},
                    s = n.map(function (e) {
                      return o[e];
                    });
                  return Object.assign.apply(Object, [i].concat(s));
                }
              }),
              d(this, "getTokenProps", function (e) {
                var n = e.key,
                  r = e.className,
                  a = e.style,
                  o = e.token,
                  i = f({}, y(e, ["key", "className", "style", "token"]), {
                    className: "token " + o.types.join(" "),
                    children: o.content,
                    style: t.getStyleForToken(o),
                    key: void 0,
                  });
                return (
                  void 0 !== a &&
                    (i.style = void 0 !== i.style ? f({}, i.style, a) : a),
                  void 0 !== n && (i.key = n),
                  r && (i.className += " " + r),
                  i
                );
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                a = e.children,
                o = this.getThemeDict(this.props),
                i = t.languages[n];
              return a({
                tokens: (function (e) {
                  for (
                    var t = [[]],
                      n = [e],
                      r = [0],
                      a = [e.length],
                      o = 0,
                      i = 0,
                      s = [],
                      c = [s];
                    i > -1;

                  ) {
                    for (; (o = r[i]++) < a[i]; ) {
                      var l = void 0,
                        u = t[i],
                        p = n[i][o];
                      if (
                        ("string" == typeof p
                          ? ((u = i > 0 ? u : ["plain"]), (l = p))
                          : ((u = m(u, p.type)),
                            p.alias && (u = m(u, p.alias)),
                            (l = p.content)),
                        "string" == typeof l)
                      ) {
                        var d = l.split(h),
                          f = d.length;
                        s.push({ types: u, content: d[0] });
                        for (var b = 1; b < f; b++)
                          g(s),
                            c.push((s = [])),
                            s.push({ types: u, content: d[b] });
                      } else
                        i++, t.push(u), n.push(l), r.push(0), a.push(l.length);
                    }
                    i--, t.pop(), n.pop(), r.pop(), a.pop();
                  }
                  return g(s), c;
                })(void 0 !== i ? t.tokenize(r, i, n) : [r]),
                className: "prism-code language-" + n,
                style: void 0 !== o ? o.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(a.Component),
        w = {
          plain: { color: "#d6deeb", backgroundColor: "#011627" },
          styles: [
            {
              types: ["changed"],
              style: { color: "rgb(162, 191, 252)", fontStyle: "italic" },
            },
            {
              types: ["deleted"],
              style: { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
            },
            {
              types: ["inserted", "attr-name"],
              style: { color: "rgb(173, 219, 103)", fontStyle: "italic" },
            },
            {
              types: ["comment"],
              style: { color: "rgb(99, 119, 119)", fontStyle: "italic" },
            },
            {
              types: ["string", "url"],
              style: { color: "rgb(173, 219, 103)" },
            },
            { types: ["variable"], style: { color: "rgb(214, 222, 235)" } },
            { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
            {
              types: ["builtin", "char", "constant", "function"],
              style: { color: "rgb(130, 170, 255)" },
            },
            { types: ["punctuation"], style: { color: "rgb(199, 146, 234)" } },
            {
              types: ["selector", "doctype"],
              style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
            },
            { types: ["class-name"], style: { color: "rgb(255, 203, 139)" } },
            {
              types: ["tag", "operator", "keyword"],
              style: { color: "rgb(127, 219, 202)" },
            },
            { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
            { types: ["property"], style: { color: "rgb(128, 203, 196)" } },
            { types: ["namespace"], style: { color: "rgb(178, 204, 214)" } },
          ],
        },
        S = n("vOnD"),
        E = S.b.pre.withConfig({
          displayName: "Code__Pre",
          componentId: "sc-1x9xiam-0",
        })([
          "text-align:left;margin:1em 0;padding:0.5em;overflow-x:auto;border-radius:3px;& .token-line{line-height:1.3em;height:1.3em;}",
        ]),
        k = S.b.span.withConfig({
          displayName: "Code__LineNo",
          componentId: "sc-1x9xiam-1",
        })(["display:inline-block;width:2em;user-select:none;opacity:0.3;"]),
        O = S.b.button.withConfig({
          displayName: "Code__CopyCode",
          componentId: "sc-1x9xiam-2",
        })([
          "position:absolute;right:0.25rem;border:0;border-radius:3px;margin:0.25em;opacity:0.3;&:hover{opacity:1;}",
        ]),
        R = function (e) {
          var t = e.codeString,
            n = e.language,
            r =
              ((function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              })(e, ["codeString", "language"]),
              function () {
                !(function (e) {
                  var t = window.navigator.clipboard;
                  if (!t || "function" != typeof t.writeText) {
                    var n = document.createElement("textarea");
                    (n.value = e),
                      n.setAttribute("readonly", !0),
                      n.setAttribute("contenteditable", !0),
                      (n.style.position = "absolute"),
                      (n.style.left = "-9999px"),
                      document.body.appendChild(n),
                      n.select();
                    var r = document.createRange(),
                      a = window.getSelection();
                    return (
                      a.removeAllRanges(),
                      a.addRange(r),
                      n.setSelectionRange(0, n.value.length),
                      document.execCommand("copy"),
                      document.body.removeChild(n),
                      Promise.resolve(!0)
                    );
                  }
                  t.writeText(e);
                })(t);
              });
          return o.a.createElement(
            v,
            Object.assign({}, p, { code: t, language: n, theme: w }),
            function (e) {
              var t = e.className,
                n = e.style,
                a = e.tokens,
                i = e.getLineProps,
                s = e.getTokenProps;
              return o.a.createElement(
                E,
                { className: t, style: n },
                o.a.createElement(O, { onClick: r }, "Copy"),
                a.map(function (e, t) {
                  return o.a.createElement(
                    "div",
                    i({ line: e, key: t }),
                    o.a.createElement(k, null, t + 1),
                    e.map(function (e, t) {
                      return o.a.createElement("span", s({ token: e, key: t }));
                    })
                  );
                })
              );
            }
          );
        },
        A = {
          h2: function (e) {
            var t = e.children;
            return o.a.createElement("h2", null, t);
          },
          "p.inlineCode": function (e) {
            return o.a.createElement(
              "code",
              Object.assign({ style: { backgroundColor: "lightgray" } }, e)
            );
          },
          pre: function (e) {
            var t = e.children.props;
            if ("code" === t.mdxType)
              return o.a.createElement(
                R,
                Object.assign(
                  {
                    codeString: t.children.trim(),
                    language:
                      t.className && t.className.replace("language-", ""),
                  },
                  t
                )
              );
          },
        },
        x = function (e) {
          var t = e.element;
          return o.a.createElement(r.MDXProvider, { components: A }, t);
        };
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < o.length;
          c++
        ) {
          var l = o[c];
          if (!s(l)) return !1;
          var u = e[l],
            p = t[l];
          if (
            !1 === (a = n ? n.call(r, u, p, l) : void 0) ||
            (void 0 === a && u !== p)
          )
            return !1;
        }
        return !0;
      };
    },
    IOVJ: function (e, t, n) {
      "use strict";
      var r = n("rePB"),
        a = n("dI71"),
        o = n("q1tI"),
        i = n.n(o),
        s = n("emEt"),
        c = n("xtsi"),
        l = n("30RF");
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(a.a)(t, e),
          (t.prototype.render = function () {
            var e = p(
                p({}, this.props),
                {},
                {
                  params: p(
                    p({}, Object(l.c)(this.props.location.pathname)),
                    this.props.pageResources.json.pageContext.__params
                  ),
                  pathContext: this.props.pageContext,
                }
              ),
              t =
                Object(c.apiRunner)("replaceComponentRenderer", {
                  props: this.props,
                  loader: s.publicLoader,
                })[0] ||
                Object(o.createElement)(
                  this.props.pageResources.component,
                  p(
                    p({}, e),
                    {},
                    {
                      key:
                        this.props.path || this.props.pageResources.page.path,
                    }
                  )
                );
            return Object(c.apiRunner)(
              "wrapPageElement",
              { element: t, props: e },
              t,
              function (t) {
                return { element: t.result, props: e };
              }
            ).pop();
          }),
          t
        );
      })(i.a.Component);
      t.a = d;
    },
    JTKy: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI");
      t.default = { React: r };
    },
    JeVI: function (e) {
      e.exports = JSON.parse("[]");
    },
    LYrO: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "startsWith", function () {
          return o;
        }),
        n.d(t, "pick", function () {
          return i;
        }),
        n.d(t, "match", function () {
          return s;
        }),
        n.d(t, "resolve", function () {
          return c;
        }),
        n.d(t, "insertParams", function () {
          return l;
        }),
        n.d(t, "validateRedirect", function () {
          return u;
        }),
        n.d(t, "shallowCompare", function () {
          return v;
        });
      var r = n("QLaP"),
        a = n.n(r),
        o = function (e, t) {
          return e.substr(0, t.length) === t;
        },
        i = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              o = t.split("?")[0],
              i = m(o),
              s = "" === i[0],
              c = g(e),
              l = 0,
              u = c.length;
            l < u;
            l++
          ) {
            var d = !1,
              h = c[l].route;
            if (h.default) r = { route: h, params: {}, uri: t };
            else {
              for (
                var b = m(h.path),
                  v = {},
                  w = Math.max(i.length, b.length),
                  S = 0;
                S < w;
                S++
              ) {
                var E = b[S],
                  k = i[S];
                if (f(E)) {
                  v[E.slice(1) || "*"] = i
                    .slice(S)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === k) {
                  d = !0;
                  break;
                }
                var O = p.exec(E);
                if (O && !s) {
                  -1 === y.indexOf(O[1]) || a()(!1);
                  var R = decodeURIComponent(k);
                  v[O[1]] = R;
                } else if (E !== k) {
                  d = !0;
                  break;
                }
              }
              if (!d) {
                n = { route: h, params: v, uri: "/" + i.slice(0, S).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        s = function (e, t) {
          return i([{ path: e }], t);
        },
        c = function (e, t) {
          if (o(e, "/")) return e;
          var n = e.split("?"),
            r = n[0],
            a = n[1],
            i = t.split("?")[0],
            s = m(r),
            c = m(i);
          if ("" === s[0]) return b(i, a);
          if (!o(s[0], ".")) {
            var l = c.concat(s).join("/");
            return b(("/" === i ? "" : "/") + l, a);
          }
          for (var u = c.concat(s), p = [], d = 0, f = u.length; d < f; d++) {
            var h = u[d];
            ".." === h ? p.pop() : "." !== h && p.push(h);
          }
          return b("/" + p.join("/"), a);
        },
        l = function (e, t) {
          var n = e.split("?"),
            r = n[0],
            a = n[1],
            o = void 0 === a ? "" : a,
            i =
              "/" +
              m(r)
                .map(function (e) {
                  var n = p.exec(e);
                  return n ? t[n[1]] : e;
                })
                .join("/"),
            s = t.location,
            c = (s = void 0 === s ? {} : s).search,
            l = (void 0 === c ? "" : c).split("?")[1] || "";
          return (i = b(i, o, l));
        },
        u = function (e, t) {
          var n = function (e) {
            return d(e);
          };
          return (
            m(e).filter(n).sort().join("/") === m(t).filter(n).sort().join("/")
          );
        },
        p = /^:(.+)/,
        d = function (e) {
          return p.test(e);
        },
        f = function (e) {
          return e && "*" === e[0];
        },
        h = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : m(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return "" === e;
                    })(t)
                      ? d(t)
                        ? (e += 2)
                        : f(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: t,
          };
        },
        g = function (e) {
          return e.map(h).sort(function (e, t) {
            return e.score < t.score
              ? 1
              : e.score > t.score
              ? -1
              : e.index - t.index;
          });
        },
        m = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        b = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        y = ["uri", "path"],
        v = function (e, t) {
          var n = Object.keys(e);
          return (
            n.length === Object.keys(t).length &&
            n.every(function (n) {
              return t.hasOwnProperty(n) && e[n] === t[n];
            })
          );
        };
    },
    LeKB: function (e, t, n) {
      e.exports = [
        {
          plugin: n("flL/"),
          options: { plugins: [], extensions: [".mdx", ".md"] },
        },
        {
          plugin: n("hZAw"),
          options: { plugins: [], pathToConfigModule: "src/utils/typography" },
        },
        { plugin: n("GddB"), options: { plugins: [] } },
      ];
    },
    ME5O: function (e, t, n) {
      "use strict";
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    MMVs: function (e, t, n) {
      e.exports = (function () {
        var e = !1;
        -1 !== navigator.appVersion.indexOf("MSIE 10") && (e = !0);
        var t,
          n = [],
          r = "object" == typeof document && document,
          a = e
            ? r.documentElement.doScroll("left")
            : r.documentElement.doScroll,
          o = r && (a ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !o &&
            r &&
            r.addEventListener(
              "DOMContentLoaded",
              (t = function () {
                for (
                  r.removeEventListener("DOMContentLoaded", t), o = 1;
                  (t = n.shift());

                )
                  t();
              })
            ),
          function (e) {
            o ? setTimeout(e, 0) : n.push(e);
          }
        );
      })();
    },
    NSX3: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/a-to-z-in-react-native/sw.js")
            .then(function (e) {
              e.addEventListener("updatefound", function () {
                Object(r.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: e,
                });
                var t = e.installing;
                console.log("installingWorker", t),
                  t.addEventListener("statechange", function () {
                    switch (t.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: e,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(r.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: e,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(r.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: e,
                          });
                        break;
                      case "activated":
                        Object(r.apiRunner)("onServiceWorkerActive", {
                          serviceWorker: e,
                        });
                    }
                  });
              });
            })
            .catch(function (e) {
              console.error("Error during service worker registration:", e);
            });
    },
    NsGk: function (e, t, n) {
      t.components = {
        "component---src-pages-index-js": function () {
          return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "RXBc"));
        },
        "component---src-templates-blog-post-template-js": function () {
          return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "228N"));
        },
      };
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    QLaP: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n, r, a, o, i, s) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var l = [n, r, a, o, i, s],
              u = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return l[u++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    TOwV: function (e, t, n) {
      "use strict";
      e.exports = n("qT12");
    },
    TqRt: function (e, t) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    UxWs: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("dI71"),
        a = n("xtsi"),
        o = n("q1tI"),
        i = n.n(o),
        s = n("i8i4"),
        c = n.n(s),
        l = n("YwZP"),
        u = n("7hJ6"),
        p = n("MMVs"),
        d = n.n(p),
        f = n("Wbzz"),
        h = n("emEt"),
        g = n("YLt+"),
        m = n("5yr3"),
        b = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        y = n("9Xx/"),
        v = n("+ZDr"),
        w = g.reduce(function (e, t) {
          return (e[t.fromPath] = t), e;
        }, {});
      function S(e) {
        var t = w[e];
        return null != t && (window.___replace(t.toPath), !0);
      }
      var E = function (e, t) {
          S(e.pathname) ||
            Object(a.apiRunner)("onPreRouteUpdate", {
              location: e,
              prevLocation: t,
            });
        },
        k = function (e, t) {
          S(e.pathname) ||
            Object(a.apiRunner)("onRouteUpdate", {
              location: e,
              prevLocation: t,
            });
        },
        O = function (e, t) {
          if ((void 0 === t && (t = {}), "number" != typeof e)) {
            var n = Object(v.parsePath)(e).pathname,
              r = w[n];
            if (
              (r && ((e = r.toPath), (n = Object(v.parsePath)(e).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var o = setTimeout(function () {
                m.a.emit("onDelayedLoadPageResources", { pathname: n }),
                  Object(a.apiRunner)("onRouteUpdateDelayed", {
                    location: window.location,
                  });
              }, 1e3);
              h.default.loadPage(n).then(function (r) {
                if (!r || r.status === h.PageResourceStatus.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = n),
                    void clearTimeout(o)
                  );
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  console.log("Site has changed on server. Reloading browser"),
                  (window.location = n)),
                  Object(l.navigate)(e, t),
                  clearTimeout(o);
              });
            }
          } else y.c.navigate(e);
        };
      function R(e, t) {
        var n = this,
          r = t.location,
          o = r.pathname,
          i = r.hash,
          s = Object(a.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: e,
            pathname: o,
            routerProps: { location: r },
            getSavedScrollPosition: function (e) {
              return n._stateStorage.read(e);
            },
          });
        if (s.length > 0) return s[s.length - 1];
        if (e && e.location.pathname === o)
          return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var A = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).announcementRef = i.a.createRef()),
              n
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function (e, t) {
              var n = this;
              requestAnimationFrame(function () {
                var e = "new page at " + n.props.location.pathname;
                document.title && (e = document.title);
                var t = document.querySelectorAll("#gatsby-focus-wrapper h1");
                t && t.length && (e = t[0].textContent);
                var r = "Navigated to " + e;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return i.a.createElement(
                "div",
                Object.assign({}, b, { ref: this.announcementRef })
              );
            }),
            t
          );
        })(i.a.Component),
        x = (function (e) {
          function t(t) {
            var n;
            return (n = e.call(this, t) || this), E(t.location, null), n;
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              k(this.props.location, null);
            }),
            (n.componentDidUpdate = function (e, t, n) {
              n && k(this.props.location, e.location);
            }),
            (n.getSnapshotBeforeUpdate = function (e) {
              return (
                this.props.location.pathname !== e.location.pathname &&
                (E(this.props.location, e.location), !0)
              );
            }),
            (n.render = function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                this.props.children,
                i.a.createElement(A, { location: location })
              );
            }),
            t
          );
        })(i.a.Component),
        P = n("IOVJ"),
        _ = n("NsGk"),
        C = n.n(_),
        T = n("rePB");
      function j(e, t) {
        for (var n in e) if (!(n in t)) return !0;
        for (var r in t) if (e[r] !== t[r]) return !0;
        return !1;
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                Object(T.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var L = (function (e) {
          function t(t) {
            var n;
            n = e.call(this) || this;
            var r = t.location,
              a = t.pageResources;
            return (
              (n.state = {
                location: N({}, r),
                pageResources: a || h.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          Object(r.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.location;
              return t.location.href !== n.href
                ? {
                    pageResources: h.default.loadPageSync(n.pathname),
                    location: N({}, n),
                  }
                : { location: N({}, n) };
            });
          var n = t.prototype;
          return (
            (n.loadResources = function (e) {
              var t = this;
              h.default.loadPage(e).then(function (n) {
                n && n.status !== h.PageResourceStatus.Error
                  ? t.setState({
                      location: N({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = e));
              });
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !==
                      t.pageResources.component ||
                    this.state.pageResources.json !== t.pageResources.json ||
                    !(
                      this.state.location.key === t.location.key ||
                      !t.pageResources.page ||
                      (!t.pageResources.page.matchPath &&
                        !t.pageResources.page.path)
                    ) ||
                    (function (e, t, n) {
                      return j(e.props, t) || j(e.state, n);
                    })(this, e, t)
                : (this.loadResources(e.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            t
          );
        })(i.a.Component),
        D = n("cSJ8"),
        F = n("JeVI"),
        $ = new h.ProdLoader(C.a, F);
      Object(h.setLoader)($),
        $.setApiRunner(a.apiRunner),
        (window.asyncRequires = C.a),
        (window.___emitter = m.a),
        (window.___loader = h.publicLoader),
        y.c.listen(function (e) {
          e.location.action = e.action;
        }),
        (window.___push = function (e) {
          return O(e, { replace: !1 });
        }),
        (window.___replace = function (e) {
          return O(e, { replace: !0 });
        }),
        (window.___navigate = function (e, t) {
          return O(e, t);
        }),
        S(window.location.pathname),
        Object(a.apiRunnerAsync)("onClientEntry").then(function () {
          Object(a.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          var e = function (e) {
              return i.a.createElement(
                l.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                i.a.createElement(P.a, e)
              );
            },
            t = i.a.createContext({}),
            o = (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, e),
                (n.prototype.render = function () {
                  var e = this.props.children;
                  return i.a.createElement(l.Location, null, function (n) {
                    var r = n.location;
                    return i.a.createElement(L, { location: r }, function (n) {
                      var r = n.pageResources,
                        a = n.location,
                        o = Object(h.getStaticQueryResults)();
                      return i.a.createElement(
                        f.b.Provider,
                        { value: o },
                        i.a.createElement(
                          t.Provider,
                          { value: { pageResources: r, location: a } },
                          e
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(i.a.Component),
            s = (function (n) {
              function a() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(a, n),
                (a.prototype.render = function () {
                  var n = this;
                  return i.a.createElement(t.Consumer, null, function (t) {
                    var r = t.pageResources,
                      a = t.location;
                    return i.a.createElement(
                      x,
                      { location: a },
                      i.a.createElement(
                        u.ScrollContext,
                        { location: a, shouldUpdateScroll: R },
                        i.a.createElement(
                          l.Router,
                          {
                            basepath: "/a-to-z-in-react-native",
                            location: a,
                            id: "gatsby-focus-wrapper",
                          },
                          i.a.createElement(
                            e,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? Object(D.a)(
                                        a.pathname,
                                        "/a-to-z-in-react-native"
                                      )
                                    : encodeURI(
                                        r.page.matchPath || r.page.path
                                      ),
                              },
                              n.props,
                              { location: a, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                a
              );
            })(i.a.Component),
            p = window,
            g = p.pagePath,
            m = p.location;
          g &&
            "/a-to-z-in-react-native" + g !== m.pathname &&
            !(
              $.findMatchPath(
                Object(D.a)(m.pathname, "/a-to-z-in-react-native")
              ) ||
              "/404.html" === g ||
              g.match(/^\/404\/?$/) ||
              g.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(l.navigate)(
              "/a-to-z-in-react-native" + g + m.search + m.hash,
              { replace: !0 }
            ),
            h.publicLoader.loadPage(m.pathname).then(function (e) {
              if (!e || e.status === h.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    m.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = e.page.webpackCompilationHash;
              var t = Object(a.apiRunner)(
                  "wrapRootElement",
                  { element: i.a.createElement(s, null) },
                  i.a.createElement(s, null),
                  function (e) {
                    return { element: e.result };
                  }
                ).pop(),
                n = function () {
                  return i.a.createElement(o, null, t);
                },
                r = Object(a.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  c.a.hydrate
                )[0];
              d()(function () {
                r(
                  i.a.createElement(n, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  function () {
                    Object(a.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    VbXa: function (e, t) {
      e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    Wbzz: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return c;
        });
      var r = n("q1tI"),
        a = n.n(r),
        o = n("+ZDr"),
        i = n.n(o);
      n.d(t, "a", function () {
        return i.a;
      });
      n("7hJ6"), n("lw3w"), n("emEt").default.enqueue;
      var s = a.a.createContext({});
      var c = function (e) {
        var t;
        a.a.useContext;
        var n = a.a.useContext(s);
        if (isNaN(Number(e)))
          throw new Error(
            "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
              e +
              "`);\n"
          );
        if (null == n || null === (t = n[e]) || void 0 === t ? void 0 : t.data)
          return n[e].data;
        throw new Error(
          "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
        );
      };
    },
    "YLt+": function (e) {
      e.exports = JSON.parse("[]");
    },
    YVoz: function (e, t, n) {
      "use strict";
      e.exports = Object.assign;
    },
    YwZP: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Link", function () {
          return j;
        }),
        n.d(t, "Location", function () {
          return v;
        }),
        n.d(t, "LocationProvider", function () {
          return w;
        }),
        n.d(t, "Match", function () {
          return $;
        }),
        n.d(t, "Redirect", function () {
          return F;
        }),
        n.d(t, "Router", function () {
          return k;
        }),
        n.d(t, "ServerLocation", function () {
          return S;
        }),
        n.d(t, "isRedirect", function () {
          return N;
        }),
        n.d(t, "redirectTo", function () {
          return L;
        }),
        n.d(t, "useLocation", function () {
          return M;
        }),
        n.d(t, "useNavigate", function () {
          return B;
        }),
        n.d(t, "useParams", function () {
          return U;
        }),
        n.d(t, "useMatch", function () {
          return z;
        }),
        n.d(t, "BaseContext", function () {
          return E;
        });
      var r = n("q1tI"),
        a = n.n(r),
        o = (n("17x9"), n("QLaP")),
        i = n.n(o),
        s = n("nqlD"),
        c = n.n(s),
        l = n("94VI"),
        u = n("LYrO");
      n.d(t, "matchPath", function () {
        return u.match;
      });
      var p = n("9Xx/");
      n.d(t, "createHistory", function () {
        return p.a;
      }),
        n.d(t, "createMemorySource", function () {
          return p.b;
        }),
        n.d(t, "navigate", function () {
          return p.d;
        }),
        n.d(t, "globalHistory", function () {
          return p.c;
        });
      var d =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      function f(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function m(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var b = function (e, t) {
          var n = c()(t);
          return (n.displayName = e), n;
        },
        y = b("Location"),
        v = function (e) {
          var t = e.children;
          return a.a.createElement(y.Consumer, null, function (e) {
            return e ? t(e) : a.a.createElement(w, null, t);
          });
        },
        w = (function (e) {
          function t() {
            var n, r;
            h(this, t);
            for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (n = r = g(this, e.call.apply(e, [this].concat(o)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              g(r, n)
            );
          }
          return (
            m(t, e),
            (t.prototype.getContext = function () {
              var e = this.props.history;
              return { navigate: e.navigate, location: e.location };
            }),
            (t.prototype.componentDidCatch = function (e, t) {
              if (!N(e)) throw e;
              (0, this.props.history.navigate)(e.uri, { replace: !0 });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (t.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      e.unmounted ||
                        e.setState(function () {
                          return { context: e.getContext() };
                        });
                    });
                  });
                }));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.state.refs;
              (this.unmounted = !0), e.unlisten();
            }),
            (t.prototype.render = function () {
              var e = this.state.context,
                t = this.props.children;
              return a.a.createElement(
                y.Provider,
                { value: e },
                "function" == typeof t ? t(e) : t || null
              );
            }),
            t
          );
        })(a.a.Component);
      w.defaultProps = { history: p.c };
      var S = function (e) {
          var t = e.url,
            n = e.children,
            r = t.indexOf("?"),
            o = void 0,
            i = "";
          return (
            r > -1 ? ((o = t.substring(0, r)), (i = t.substring(r))) : (o = t),
            a.a.createElement(
              y.Provider,
              {
                value: {
                  location: { pathname: o, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n
            )
          );
        },
        E = b("Base", { baseuri: "/", basepath: "/" }),
        k = function (e) {
          return a.a.createElement(E.Consumer, null, function (t) {
            return a.a.createElement(v, null, function (n) {
              return a.a.createElement(O, d({}, t, n, e));
            });
          });
        },
        O = (function (e) {
          function t() {
            return h(this, t), g(this, e.apply(this, arguments));
          }
          return (
            m(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.location,
                n = e.navigate,
                r = e.basepath,
                o = e.primary,
                i = e.children,
                s = (e.baseuri, e.component),
                c = void 0 === s ? "div" : s,
                l = f(e, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                p = a.a.Children.toArray(i).reduce(function (e, t) {
                  var n = H(r)(t);
                  return e.concat(n);
                }, []),
                h = t.pathname,
                g = Object(u.pick)(p, h);
              if (g) {
                var m = g.params,
                  b = g.uri,
                  y = g.route,
                  v = g.route.value;
                r = y.default ? r : y.path.replace(/\*$/, "");
                var w = d({}, m, {
                    uri: b,
                    location: t,
                    navigate: function (e, t) {
                      return n(Object(u.resolve)(e, b), t);
                    },
                  }),
                  S = a.a.cloneElement(
                    v,
                    w,
                    v.props.children
                      ? a.a.createElement(
                          k,
                          { location: t, primary: o },
                          v.props.children
                        )
                      : void 0
                  ),
                  O = o ? A : c,
                  R = o ? d({ uri: b, location: t, component: c }, l) : l;
                return a.a.createElement(
                  E.Provider,
                  { value: { baseuri: b, basepath: r } },
                  a.a.createElement(O, R, S)
                );
              }
              return null;
            }),
            t
          );
        })(a.a.PureComponent);
      O.defaultProps = { primary: !0 };
      var R = b("Focus"),
        A = function (e) {
          var t = e.uri,
            n = e.location,
            r = e.component,
            o = f(e, ["uri", "location", "component"]);
          return a.a.createElement(R.Consumer, null, function (e) {
            return a.a.createElement(
              _,
              d({}, o, { component: r, requestFocus: e, uri: t, location: n })
            );
          });
        },
        x = !0,
        P = 0,
        _ = (function (e) {
          function t() {
            var n, r;
            h(this, t);
            for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              (n = r = g(this, e.call.apply(e, [this].concat(o)))),
              (r.state = {}),
              (r.requestFocus = function (e) {
                !r.state.shouldFocus && e && e.focus();
              }),
              g(r, n)
            );
          }
          return (
            m(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              if (null == t.uri) return d({ shouldFocus: !0 }, e);
              var n = e.uri !== t.uri,
                r =
                  t.location.pathname !== e.location.pathname &&
                  e.location.pathname === e.uri;
              return d({ shouldFocus: n || r }, e);
            }),
            (t.prototype.componentDidMount = function () {
              P++, this.focus();
            }),
            (t.prototype.componentWillUnmount = function () {
              0 === --P && (x = !0);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (t.prototype.focus = function () {
              var e = this.props.requestFocus;
              e
                ? e(this.node)
                : x
                ? (x = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.children, t.style),
                r = (t.requestFocus, t.component),
                o = void 0 === r ? "div" : r,
                i =
                  (t.uri,
                  t.location,
                  f(t, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return a.a.createElement(
                o,
                d(
                  {
                    style: d({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (t) {
                      return (e.node = t);
                    },
                  },
                  i
                ),
                a.a.createElement(
                  R.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            t
          );
        })(a.a.Component);
      Object(l.polyfill)(_);
      var C = function () {},
        T = a.a.forwardRef;
      void 0 === T &&
        (T = function (e) {
          return e;
        });
      var j = T(function (e, t) {
        var n = e.innerRef,
          r = f(e, ["innerRef"]);
        return a.a.createElement(E.Consumer, null, function (e) {
          e.basepath;
          var o = e.baseuri;
          return a.a.createElement(v, null, function (e) {
            var i = e.location,
              s = e.navigate,
              c = r.to,
              l = r.state,
              p = r.replace,
              h = r.getProps,
              g = void 0 === h ? C : h,
              m = f(r, ["to", "state", "replace", "getProps"]),
              b = Object(u.resolve)(c, o),
              y = encodeURI(b),
              v = i.pathname === y,
              w = Object(u.startsWith)(i.pathname, y);
            return a.a.createElement(
              "a",
              d(
                { ref: t || n, "aria-current": v ? "page" : void 0 },
                m,
                g({
                  isCurrent: v,
                  isPartiallyCurrent: w,
                  href: b,
                  location: i,
                }),
                {
                  href: b,
                  onClick: function (e) {
                    if ((m.onClick && m.onClick(e), q(e))) {
                      e.preventDefault();
                      var t = p;
                      if ("boolean" != typeof p && v) {
                        var n = d({}, i.state),
                          r = (n.key, f(n, ["key"]));
                        t = Object(u.shallowCompare)(d({}, l), r);
                      }
                      s(b, { state: l, replace: t });
                    }
                  },
                }
              )
            );
          });
        });
      });
      function I(e) {
        this.uri = e;
      }
      j.displayName = "Link";
      var N = function (e) {
          return e instanceof I;
        },
        L = function (e) {
          throw new I(e);
        },
        D = (function (e) {
          function t() {
            return h(this, t), g(this, e.apply(this, arguments));
          }
          return (
            m(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.navigate,
                n = e.to,
                r = (e.from, e.replace),
                a = void 0 === r || r,
                o = e.state,
                i = (e.noThrow, e.baseuri),
                s = f(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]);
              Promise.resolve().then(function () {
                var e = Object(u.resolve)(n, i);
                t(Object(u.insertParams)(e, s), { replace: a, state: o });
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.navigate, e.to),
                n = (e.from, e.replace, e.state, e.noThrow),
                r = e.baseuri,
                a = f(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                o = Object(u.resolve)(t, r);
              return n || L(Object(u.insertParams)(o, a)), null;
            }),
            t
          );
        })(a.a.Component),
        F = function (e) {
          return a.a.createElement(E.Consumer, null, function (t) {
            var n = t.baseuri;
            return a.a.createElement(v, null, function (t) {
              return a.a.createElement(D, d({}, t, { baseuri: n }, e));
            });
          });
        },
        $ = function (e) {
          var t = e.path,
            n = e.children;
          return a.a.createElement(E.Consumer, null, function (e) {
            var r = e.baseuri;
            return a.a.createElement(v, null, function (e) {
              var a = e.navigate,
                o = e.location,
                i = Object(u.resolve)(t, r),
                s = Object(u.match)(i, o.pathname);
              return n({
                navigate: a,
                location: o,
                match: s ? d({}, s.params, { uri: s.uri, path: t }) : null,
              });
            });
          });
        },
        M = function () {
          var e = Object(r.useContext)(y);
          if (!e)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.location;
        },
        B = function () {
          var e = Object(r.useContext)(y);
          if (!e)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.navigate;
        },
        U = function () {
          var e = Object(r.useContext)(E);
          if (!e)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var t = M(),
            n = Object(u.match)(e.basepath, t.pathname);
          return n ? n.params : null;
        },
        z = function (e) {
          if (!e)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var t = Object(r.useContext)(E);
          if (!t)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = M(),
            a = Object(u.resolve)(e, t.baseuri),
            o = Object(u.match)(a, n.pathname);
          return o ? d({}, o.params, { uri: o.uri, path: e }) : null;
        },
        G = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "");
        },
        H = function e(t) {
          return function (n) {
            if (!n) return null;
            if (n.type === a.a.Fragment && n.props.children)
              return a.a.Children.map(n.props.children, e(t));
            if (
              (n.props.path || n.props.default || n.type === F || i()(!1),
              n.type !== F || (n.props.from && n.props.to) || i()(!1),
              n.type !== F ||
                Object(u.validateRedirect)(n.props.from, n.props.to) ||
                i()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var r = n.type === F ? n.props.from : n.props.path,
              o = "/" === r ? t : G(t) + "/" + G(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? G(o) + "/*" : o,
            };
          };
        },
        q = function (e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          );
        };
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    cSJ8: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = ""),
          t
            ? e === t
              ? "/"
              : e.startsWith(t + "/")
              ? e.slice(t.length)
              : e
            : e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    cu4x: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.parsePath = function (e) {
          var t = e || "/",
            n = "",
            r = "",
            a = t.indexOf("#");
          -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
          var o = t.indexOf("?");
          -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o)));
          return {
            pathname: t,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          };
        });
    },
    dI71: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    emEt: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "PageResourceStatus", function () {
          return h;
        }),
        n.d(t, "BaseLoader", function () {
          return w;
        }),
        n.d(t, "ProdLoader", function () {
          return E;
        }),
        n.d(t, "setLoader", function () {
          return k;
        }),
        n.d(t, "publicLoader", function () {
          return O;
        }),
        n.d(t, "getStaticQueryResults", function () {
          return R;
        });
      var r = n("dI71");
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? a(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = n("rePB"),
        s = (function (e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e, t) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var a = document.createElement("link");
                  a.setAttribute("rel", "prefetch"),
                    a.setAttribute("href", e),
                    Object.keys(t).forEach(function (e) {
                      a.setAttribute(e, t[e]);
                    }),
                    (a.onload = n),
                    (a.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(a);
                } else r();
              });
            }
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        c = {},
        l = function (e, t) {
          return new Promise(function (n) {
            c[e]
              ? n()
              : s(e, t)
                  .then(function () {
                    n(), (c[e] = !0);
                  })
                  .catch(function () {});
          });
        },
        u = n("5yr3"),
        p = n("30RF");
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = { Error: "error", Success: "success" },
        g = function (e) {
          return (e && e.default) || e;
        },
        m = function (e) {
          var t;
          return (
            "/a-to-z-in-react-native/page-data/" +
            ("/" === e
              ? "index"
              : (t = (t = "/" === (t = e)[0] ? t.slice(1) : t).endsWith("/")
                  ? t.slice(0, -1)
                  : t)) +
            "/page-data.json"
          );
        };
      function b(e, t) {
        return (
          void 0 === t && (t = "GET"),
          new Promise(function (n, r) {
            var a = new XMLHttpRequest();
            a.open(t, e, !0),
              (a.onreadystatechange = function () {
                4 == a.readyState && n(a);
              }),
              a.send(null);
          })
        );
      }
      var y,
        v = function (e, t) {
          void 0 === t && (t = null);
          var n = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
            staticQueryHashes: e.staticQueryHashes,
          };
          return { component: t, json: e.result, page: n };
        },
        w = (function () {
          function e(e, t) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = e),
              Object(p.d)(t);
          }
          var t = e.prototype;
          return (
            (t.memoizedGet = function (e) {
              var t = this,
                n = this.inFlightNetworkRequests.get(e);
              return (
                n ||
                  ((n = b(e, "GET")), this.inFlightNetworkRequests.set(e, n)),
                n
                  .then(function (n) {
                    return t.inFlightNetworkRequests.delete(e), n;
                  })
                  .catch(function (n) {
                    throw (t.inFlightNetworkRequests.delete(e), n);
                  })
              );
            }),
            (t.setApiRunner = function (e) {
              (this.apiRunner = e),
                (this.prefetchDisabled = e("disableCorePrefetching").some(
                  function (e) {
                    return e;
                  }
                ));
            }),
            (t.fetchPageDataJson = function (e) {
              var t = this,
                n = e.pagePath,
                r = e.retries,
                a = void 0 === r ? 0 : r,
                o = m(n);
              return this.memoizedGet(o).then(function (r) {
                var o = r.status,
                  i = r.responseText;
                if (200 === o)
                  try {
                    var s = JSON.parse(i);
                    if (void 0 === s.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(e, { status: h.Success, payload: s });
                  } catch (c) {}
                return 404 === o || 200 === o
                  ? "/404.html" === n
                    ? Object.assign(e, { status: h.Error })
                    : t.fetchPageDataJson(
                        Object.assign(e, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === o
                  ? Object.assign(e, { status: h.Error })
                  : a < 3
                  ? t.fetchPageDataJson(Object.assign(e, { retries: a + 1 }))
                  : Object.assign(e, { status: h.Error });
              });
            }),
            (t.loadPageDataJson = function (e) {
              var t = this,
                n = Object(p.b)(e);
              return this.pageDataDb.has(n)
                ? Promise.resolve(this.pageDataDb.get(n))
                : this.fetchPageDataJson({ pagePath: n }).then(function (e) {
                    return t.pageDataDb.set(n, e), e;
                  });
            }),
            (t.findMatchPath = function (e) {
              return Object(p.a)(e);
            }),
            (t.loadPage = function (e) {
              var t = this,
                n = Object(p.b)(e);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var a = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (e) {
                var r = e[1];
                if (r.status === h.Error) return { status: h.Error };
                var a = r.payload,
                  o = a,
                  i = o.componentChunkName,
                  s = o.staticQueryHashes,
                  c = void 0 === s ? [] : s,
                  l = {},
                  p = t.loadComponent(i).then(function (t) {
                    var n;
                    return (
                      (l.createdAt = new Date()),
                      t
                        ? ((l.status = h.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (a = Object.assign(a, {
                            webpackCompilationHash: e[0]
                              ? e[0].webpackCompilationHash
                              : "",
                          })),
                          (n = v(a, t)))
                        : (l.status = h.Error),
                      n
                    );
                  }),
                  d = Promise.all(
                    c.map(function (e) {
                      if (t.staticQueryDb[e]) {
                        var n = t.staticQueryDb[e];
                        return { staticQueryHash: e, jsonPayload: n };
                      }
                      return t
                        .memoizedGet(
                          "/a-to-z-in-react-native/page-data/sq/d/" +
                            e +
                            ".json"
                        )
                        .then(function (t) {
                          var n = JSON.parse(t.responseText);
                          return { staticQueryHash: e, jsonPayload: n };
                        });
                    })
                  ).then(function (e) {
                    var n = {};
                    return (
                      e.forEach(function (e) {
                        var r = e.staticQueryHash,
                          a = e.jsonPayload;
                        (n[r] = a), (t.staticQueryDb[r] = a);
                      }),
                      n
                    );
                  });
                return Promise.all([p, d]).then(function (e) {
                  var r,
                    a = e[0],
                    o = e[1];
                  return (
                    a &&
                      ((r = f(f({}, a), {}, { staticQueryResults: o })),
                      (l.payload = r),
                      u.a.emit("onPostLoadPageResources", {
                        page: r,
                        pageResources: r,
                      })),
                    t.pageDb.set(n, l),
                    r
                  );
                });
              });
              return (
                a
                  .then(function (e) {
                    t.inFlightDb.delete(n);
                  })
                  .catch(function (e) {
                    throw (t.inFlightDb.delete(n), e);
                  }),
                this.inFlightDb.set(n, a),
                a
              );
            }),
            (t.loadPageSync = function (e) {
              var t = Object(p.b)(e);
              if (this.pageDb.has(t)) return this.pageDb.get(t).payload;
            }),
            (t.shouldPrefetch = function (e) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(e)
              );
            }),
            (t.prefetch = function (e) {
              var t = this;
              if (!this.shouldPrefetch(e)) return !1;
              if (
                (this.prefetchTriggered.has(e) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: e }),
                  this.prefetchTriggered.add(e)),
                this.prefetchDisabled)
              )
                return !1;
              var n = Object(p.b)(e);
              return (
                this.doPrefetch(n).then(function () {
                  t.prefetchCompleted.has(e) ||
                    (t.apiRunner("onPostPrefetchPathname", { pathname: e }),
                    t.prefetchCompleted.add(e));
                }),
                !0
              );
            }),
            (t.doPrefetch = function (e) {
              throw new Error("doPrefetch not implemented");
            }),
            (t.hovering = function (e) {
              this.loadPage(e);
            }),
            (t.getResourceURLsForPathname = function (e) {
              var t = Object(p.b)(e),
                n = this.pageDataDb.get(t);
              if (n) {
                var r = v(n.payload);
                return [].concat(o(S(r.page.componentChunkName)), [m(t)]);
              }
              return null;
            }),
            (t.isPageNotFound = function (e) {
              var t = Object(p.b)(e),
                n = this.pageDb.get(t);
              return n && !0 === n.notFound;
            }),
            (t.loadAppData = function (e) {
              var t = this;
              return (
                void 0 === e && (e = 0),
                this.memoizedGet(
                  "/a-to-z-in-react-native/page-data/app-data.json"
                ).then(function (n) {
                  var r,
                    a = n.status,
                    o = n.responseText;
                  if (200 !== a && e < 3) return t.loadAppData(e + 1);
                  if (200 === a)
                    try {
                      var i = JSON.parse(o);
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      r = i;
                    } catch (s) {}
                  return r;
                })
              );
            }),
            e
          );
        })(),
        S = function (e) {
          return (window.___chunkMapping[e] || []).map(function (e) {
            return "/a-to-z-in-react-native" + e;
          });
        },
        E = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                function (e) {
                  return t.components[e]
                    ? t.components[e]()
                        .then(g)
                        .catch(function () {
                          return null;
                        })
                    : Promise.resolve();
                },
                n
              ) || this
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.doPrefetch = function (e) {
              var t = this,
                n = m(e);
              return l(n, { crossOrigin: "anonymous", as: "fetch" })
                .then(function () {
                  return t.loadPageDataJson(e);
                })
                .then(function (e) {
                  if (e.status !== h.Success) return Promise.resolve();
                  var t = e.payload,
                    n = t.componentChunkName,
                    r = S(n);
                  return Promise.all(r.map(l)).then(function () {
                    return t;
                  });
                });
            }),
            (n.loadPageDataJson = function (t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then(function (e) {
                  return e.notFound
                    ? b(t, "HEAD").then(function (t) {
                        return 200 === t.status ? { status: h.Error } : e;
                      })
                    : e;
                });
            }),
            t
          );
        })(w),
        k = function (e) {
          y = e;
        },
        O = {
          getResourcesForPathname: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              y.i.loadPage(e)
            );
          },
          getResourcesForPathnameSync: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              y.i.loadPageSync(e)
            );
          },
          enqueue: function (e) {
            return y.prefetch(e);
          },
          getResourceURLsForPathname: function (e) {
            return y.getResourceURLsForPathname(e);
          },
          loadPage: function (e) {
            return y.loadPage(e);
          },
          loadPageSync: function (e) {
            return y.loadPageSync(e);
          },
          prefetch: function (e) {
            return y.prefetch(e);
          },
          isPageNotFound: function (e) {
            return y.isPageNotFound(e);
          },
          hovering: function (e) {
            return y.hovering(e);
          },
          loadAppData: function () {
            return y.loadAppData();
          },
        };
      t.default = O;
      function R() {
        return y.staticQueryDb;
      }
    },
    "flL/": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "wrapRootElement", function () {
          return m;
        });
      var r = n("rePB"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("7ljp"),
        s = n("BfwJ"),
        c = n("gXpC"),
        l = n("JTKy").default,
        u = Object.assign({}, l);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = {};
      c.plugins.forEach(function (e) {
        var t = e.guards,
          n = void 0 === t ? {} : t,
          r = e.components;
        Object.entries(r).forEach(function (e) {
          var t = e[0],
            r = e[1];
          f[t]
            ? f.push({ guard: n[t], Component: r })
            : (f[t] = [{ guard: n[t], Component: r }]);
        });
      });
      var h = Object.entries(f)
          .map(function (e) {
            var t,
              n = e[0],
              r = e[1];
            return (
              ((t = {})[n] = (function (e) {
                return function (t) {
                  var n = e.find(function (e) {
                    var n = e.guard;
                    return !n || n(t);
                  }).Component;
                  return o.a.createElement(n, t);
                };
              })(r.concat({ guard: void 0, Component: n }))),
              t
            );
          })
          .reduce(function (e, t) {
            return d(d({}, e), t);
          }, {}),
        g = Object(i.withMDXComponents)(function (e) {
          var t = e.components,
            n = e.children;
          return o.a.createElement(
            s.MDXScopeProvider,
            { __mdxScope: u },
            o.a.createElement(i.MDXProvider, { components: d(d({}, t), h) }, n)
          );
        }),
        m = function (e) {
          var t = e.element;
          return o.a.createElement(g, null, t);
        };
    },
    gXpC: function (e, t) {
      e.exports = { plugins: [] };
    },
    hZAw: function (e, t, n) {
      "use strict";
    },
    hd9s: function (e, t, n) {
      "use strict";
      var r = n("284h"),
        a = n("TqRt");
      (t.__esModule = !0), (t.ScrollContainer = void 0);
      var o = a(n("pVnL")),
        i = a(n("VbXa")),
        s = r(n("q1tI")),
        c = a(n("i8i4")),
        l = a(n("17x9")),
        u = n("Enzk"),
        p = n("YwZP"),
        d = {
          scrollKey: l.default.string.isRequired,
          shouldUpdateScroll: l.default.func,
          children: l.default.element.isRequired,
        },
        f = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          (0, i.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this,
                t = c.default.findDOMNode(this),
                n = this.props,
                r = n.location,
                a = n.scrollKey;
              if (t) {
                t.addEventListener("scroll", function () {
                  e.props.context.save(r, a, t.scrollTop);
                });
                var o = this.props.context.read(r, a);
                t.scrollTo(0, o || 0);
              }
            }),
            (n.render = function () {
              return this.props.children;
            }),
            t
          );
        })(s.Component),
        h = function (e) {
          return s.createElement(p.Location, null, function (t) {
            var n = t.location;
            return s.createElement(u.ScrollContext.Consumer, null, function (
              t
            ) {
              return s.createElement(
                f,
                (0, o.default)({}, e, { context: t, location: n })
              );
            });
          });
        };
      (t.ScrollContainer = h), (h.propTypes = d);
    },
    lw3w: function (e, t, n) {
      var r;
      e.exports = ((r = n("rzlk")) && r.default) || r;
    },
    nqlD: function (e, t, n) {
      var r = n("q1tI").createContext;
      (e.exports = r), (e.exports.default = r);
    },
    pVnL: function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    qT12: function (e, t, n) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        p = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        g = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;
      function E(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case p:
                case d:
                case i:
                case c:
                case s:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case b:
                    case m:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function k(e) {
        return E(e) === d;
      }
      (t.AsyncMode = p),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = a),
        (t.ForwardRef = f),
        (t.Fragment = i),
        (t.Lazy = b),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = c),
        (t.StrictMode = s),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return k(e) || E(e) === p;
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return E(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return E(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return E(e) === f;
        }),
        (t.isFragment = function (e) {
          return E(e) === i;
        }),
        (t.isLazy = function (e) {
          return E(e) === b;
        }),
        (t.isMemo = function (e) {
          return E(e) === m;
        }),
        (t.isPortal = function (e) {
          return E(e) === o;
        }),
        (t.isProfiler = function (e) {
          return E(e) === c;
        }),
        (t.isStrictMode = function (e) {
          return E(e) === s;
        }),
        (t.isSuspense = function (e) {
          return E(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === d ||
            e === c ||
            e === s ||
            e === h ||
            e === g ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === m ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === S ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = E);
    },
    rePB: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    rzlk: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("rePB"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("emEt"),
        s = n("IOVJ");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      t.default = function (e) {
        var t = e.location,
          n = i.default.loadPageSync(t.pathname);
        return n
          ? o.a.createElement(
              s.a,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? c(Object(n), !0).forEach(function (t) {
                        Object(r.a)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : c(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ location: t, pageResources: n }, n.json)
            )
          : null;
      };
    },
    vOnD: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return Ie;
        });
        var r = n("TOwV"),
          a = n("q1tI"),
          o = n.n(a),
          i = n("Gytx"),
          s = n.n(i),
          c = n("0x0X"),
          l = n("ME5O"),
          u = n("9uj6"),
          p = n("2mql"),
          d = n.n(p);
        function f() {
          return (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var h = function (e, t) {
            for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
              n.push(t[r], e[r + 1]);
            return n;
          },
          g = function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "[object Object]" ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !Object(r.typeOf)(e)
            );
          },
          m = Object.freeze([]),
          b = Object.freeze({});
        function y(e) {
          return "function" == typeof e;
        }
        function v(e) {
          return e.displayName || e.name || "Component";
        }
        function w(e) {
          return e && "string" == typeof e.styledComponentId;
        }
        var S =
            (void 0 !== e && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
            "data-styled",
          E = "undefined" != typeof window && "HTMLElement" in window,
          k =
            ("boolean" == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY) ||
            (void 0 !== e &&
              ({}.REACT_APP_SC_DISABLE_SPEEDY || {}.SC_DISABLE_SPEEDY)) ||
            !1,
          O = {},
          R = function () {
            return n.nc;
          };
        function A(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          throw new Error(
            "An error occurred. See https://git.io/JUIaE#" +
              e +
              " for more information." +
              (n.length > 0 ? " Args: " + n.join(", ") : "")
          );
        }
        var x = function (e) {
            var t = document.head,
              n = e || t,
              r = document.createElement("style"),
              a = (function (e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                  var r = t[n];
                  if (r && 1 === r.nodeType && r.hasAttribute(S)) return r;
                }
              })(n),
              o = void 0 !== a ? a.nextSibling : null;
            r.setAttribute(S, "active"),
              r.setAttribute("data-styled-version", "5.2.0");
            var i = R();
            return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
          },
          P = (function () {
            function e(e) {
              var t = (this.element = x(e));
              t.appendChild(document.createTextNode("")),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    if (a.ownerNode === e) return a;
                  }
                  A(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (e) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText
                  ? t.cssText
                  : "";
              }),
              e
            );
          })(),
          _ = (function () {
            function e(e) {
              var t = (this.element = x(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var n = document.createTextNode(t),
                    r = this.nodes[e];
                  return (
                    this.element.insertBefore(n, r || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : "";
              }),
              e
            );
          })(),
          C = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : "";
              }),
              e
            );
          })(),
          T = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                    (a <<= 1) < 0 && A(16, "" + e);
                  (this.groupSizes = new Uint32Array(a)),
                    this.groupSizes.set(n),
                    (this.length = a);
                  for (var o = r; o < a; o++) this.groupSizes[o] = 0;
                }
                for (
                  var i = this.indexOfGroup(e + 1), s = 0, c = t.length;
                  s < c;
                  s++
                )
                  this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                  this.groupSizes[e] = 0;
                  for (var a = n; a < r; a++) this.tag.deleteRule(n);
                }
              }),
              (t.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var n = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    a = r + n,
                    o = r;
                  o < a;
                  o++
                )
                  t += this.tag.getRule(o) + "/*!sc*/\n";
                return t;
              }),
              e
            );
          })(),
          j = new Map(),
          I = new Map(),
          N = 1,
          L = function (e) {
            if (j.has(e)) return j.get(e);
            var t = N++;
            return j.set(e, t), I.set(t, e), t;
          },
          D = function (e) {
            return I.get(e);
          },
          F = function (e, t) {
            t >= N && (N = t + 1), j.set(e, t), I.set(t, e);
          },
          $ = "style[" + S + '][data-styled-version="5.2.0"]',
          M = new RegExp(
            "^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
          ),
          B = function (e, t, n) {
            for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)
              (r = a[o]) && e.registerName(t, r);
          },
          U = function (e, t) {
            for (
              var n = t.innerHTML.split("/*!sc*/\n"),
                r = [],
                a = 0,
                o = n.length;
              a < o;
              a++
            ) {
              var i = n[a].trim();
              if (i) {
                var s = i.match(M);
                if (s) {
                  var c = 0 | parseInt(s[1], 10),
                    l = s[2];
                  0 !== c &&
                    (F(l, c), B(e, l, s[3]), e.getTag().insertRules(c, r)),
                    (r.length = 0);
                } else r.push(i);
              }
            }
          },
          z = E,
          G = { isServer: !E, useCSSOMInjection: !k },
          H = (function () {
            function e(e, t, n) {
              void 0 === e && (e = G),
                void 0 === t && (t = {}),
                (this.options = f({}, G, {}, e)),
                (this.gs = t),
                (this.names = new Map(n)),
                !this.options.isServer &&
                  E &&
                  z &&
                  ((z = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll($), n = 0, r = t.length;
                      n < r;
                      n++
                    ) {
                      var a = t[n];
                      a &&
                        "active" !== a.getAttribute(S) &&
                        (U(e, a), a.parentNode && a.parentNode.removeChild(a));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return L(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t, n) {
                return (
                  void 0 === n && (n = !0),
                  new e(
                    f({}, this.options, {}, t),
                    this.gs,
                    (n && this.names) || void 0
                  )
                );
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                return (
                  this.tag ||
                  (this.tag =
                    ((n = (t = this.options).isServer),
                    (r = t.useCSSOMInjection),
                    (a = t.target),
                    (e = n ? new C(a) : r ? new P(a) : new _(a)),
                    new T(e)))
                );
                var e, t, n, r, a;
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((L(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var n = new Set();
                  n.add(t), this.names.set(e, n);
                }
              }),
              (t.insertRules = function (e, t, n) {
                this.registerName(e, t), this.getTag().insertRules(L(e), n);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(L(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), n = t.length, r = "", a = 0;
                    a < n;
                    a++
                  ) {
                    var o = D(a);
                    if (void 0 !== o) {
                      var i = e.names.get(o),
                        s = t.getGroup(a);
                      if (void 0 !== i && 0 !== s.length) {
                        var c = S + ".g" + a + '[id="' + o + '"]',
                          l = "";
                        void 0 !== i &&
                          i.forEach(function (e) {
                            e.length > 0 && (l += e + ",");
                          }),
                          (r += "" + s + c + '{content:"' + l + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return r;
                })(this);
              }),
              e
            );
          })(),
          q = function (e, t) {
            for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
            return e;
          },
          W = function (e) {
            return q(5381, e);
          },
          X = /^\s*\/\/.*$/gm,
          Y = [":", "[", ".", "#"];
        function V(e) {
          var t,
            n,
            r,
            a,
            o = void 0 === e ? b : e,
            i = o.options,
            s = void 0 === i ? b : i,
            l = o.plugins,
            u = void 0 === l ? m : l,
            p = new c.a(s),
            d = [],
            f = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + "}");
                  } catch (e) {}
              }
              return function (n, r, a, o, i, s, c, l, u, p) {
                switch (n) {
                  case 1:
                    if (0 === u && 64 === r.charCodeAt(0))
                      return e(r + ";"), "";
                    break;
                  case 2:
                    if (0 === l) return r + "/*|*/";
                    break;
                  case 3:
                    switch (l) {
                      case 102:
                      case 112:
                        return e(a[0] + r), "";
                      default:
                        return r + (0 === p ? "/*|*/" : "");
                    }
                  case -2:
                    r.split("/*|*/}").forEach(t);
                }
              };
            })(function (e) {
              d.push(e);
            }),
            h = function (e, r, o) {
              return (0 === r && Y.includes(o[n.length])) || o.match(a)
                ? e
                : "." + t;
            };
          function g(e, o, i, s) {
            void 0 === s && (s = "&");
            var c = e.replace(X, ""),
              l = o && i ? i + " " + o + " { " + c + " }" : c;
            return (
              (t = s),
              (n = o),
              (r = new RegExp("\\" + n + "\\b", "g")),
              (a = new RegExp("(\\" + n + "\\b){2,}")),
              p(i || !o ? "" : o, l)
            );
          }
          return (
            p.use(
              [].concat(u, [
                function (e, t, a) {
                  2 === e &&
                    a.length &&
                    a[0].lastIndexOf(n) > 0 &&
                    (a[0] = a[0].replace(r, h));
                },
                f,
                function (e) {
                  if (-2 === e) {
                    var t = d;
                    return (d = []), t;
                  }
                },
              ])
            ),
            (g.hash = u.length
              ? u
                  .reduce(function (e, t) {
                    return t.name || A(15), q(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            g
          );
        }
        var Z = o.a.createContext(),
          K = (Z.Consumer, o.a.createContext()),
          J = (K.Consumer, new H()),
          Q = V();
        function ee() {
          return Object(a.useContext)(Z) || J;
        }
        function te() {
          return Object(a.useContext)(K) || Q;
        }
        function ne(e) {
          var t = Object(a.useState)(e.stylisPlugins),
            n = t[0],
            r = t[1],
            i = ee(),
            c = Object(a.useMemo)(
              function () {
                var t = i;
                return (
                  e.sheet
                    ? (t = e.sheet)
                    : e.target &&
                      (t = t.reconstructWithOptions({ target: e.target }, !1)),
                  e.disableCSSOMInjection &&
                    (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                  t
                );
              },
              [e.disableCSSOMInjection, e.sheet, e.target]
            ),
            l = Object(a.useMemo)(
              function () {
                return V({
                  options: { prefix: !e.disableVendorPrefixes },
                  plugins: n,
                });
              },
              [e.disableVendorPrefixes, n]
            );
          return (
            Object(a.useEffect)(
              function () {
                s()(n, e.stylisPlugins) || r(e.stylisPlugins);
              },
              [e.stylisPlugins]
            ),
            o.a.createElement(
              Z.Provider,
              { value: c },
              o.a.createElement(K.Provider, { value: l }, e.children)
            )
          );
        }
        var re = (function () {
            function e(e, t) {
              var n = this;
              (this.inject = function (e, t) {
                void 0 === t && (t = Q);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) ||
                  e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
              }),
                (this.toString = function () {
                  return A(12, String(n.name));
                }),
                (this.name = e),
                (this.id = "sc-keyframes-" + e),
                (this.rules = t);
            }
            return (
              (e.prototype.getName = function (e) {
                return void 0 === e && (e = Q), this.name + e.hash;
              }),
              e
            );
          })(),
          ae = /([A-Z])/,
          oe = new RegExp(ae, "g"),
          ie = /^ms-/,
          se = function (e) {
            return "-" + e.toLowerCase();
          };
        function ce(e) {
          return ae.test(e) ? e.replace(oe, se).replace(ie, "-ms-") : e;
        }
        var le = function (e) {
          return null == e || !1 === e || "" === e;
        };
        function ue(e, t, n, r) {
          if (Array.isArray(e)) {
            for (var a, o = [], i = 0, s = e.length; i < s; i += 1)
              "" !== (a = ue(e[i], t, n, r)) &&
                (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
            return o;
          }
          return le(e)
            ? ""
            : w(e)
            ? "." + e.styledComponentId
            : y(e)
            ? "function" != typeof (c = e) ||
              (c.prototype && c.prototype.isReactComponent) ||
              !t
              ? e
              : ue(e(t), t, n, r)
            : e instanceof re
            ? n
              ? (e.inject(n, r), e.getName(r))
              : e
            : g(e)
            ? (function e(t, n) {
                var r,
                  a,
                  o = [];
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    !le(t[i]) &&
                    (g(t[i])
                      ? o.push.apply(o, e(t[i], i))
                      : y(t[i])
                      ? o.push(ce(i) + ":", t[i], ";")
                      : o.push(
                          ce(i) +
                            ": " +
                            ((r = i),
                            (null == (a = t[i]) ||
                            "boolean" == typeof a ||
                            "" === a
                              ? ""
                              : "number" != typeof a || 0 === a || r in l.a
                              ? String(a).trim()
                              : a + "px") + ";")
                        ));
                return n ? [n + " {"].concat(o, ["}"]) : o;
              })(e)
            : e.toString();
          var c;
        }
        function pe(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return y(e) || g(e)
            ? ue(h(m, [e].concat(n)))
            : 0 === n.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : ue(h(e, n));
        }
        var de = function (e) {
            return (
              "function" == typeof e ||
              ("object" == typeof e && null !== e && !Array.isArray(e))
            );
          },
          fe = function (e) {
            return (
              "__proto__" !== e && "constructor" !== e && "prototype" !== e
            );
          };
        function he(e, t, n) {
          var r = e[n];
          de(t) && de(r) ? ge(r, t) : (e[n] = t);
        }
        function ge(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          for (var a = 0, o = n; a < o.length; a++) {
            var i = o[a];
            if (de(i)) for (var s in i) fe(s) && he(e, i[s], s);
          }
          return e;
        }
        var me = /(a)(d)/gi,
          be = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function ye(e) {
          var t,
            n = "";
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = be(t % 52) + n;
          return (be(t % 52) + n).replace(me, "$1-$2");
        }
        function ve(e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (y(n) && !w(n)) return !1;
          }
          return !0;
        }
        var we = W("5.2.0"),
          Se = (function () {
            function e(e, t, n) {
              (this.rules = e),
                (this.staticRulesId = ""),
                (this.isStatic = (void 0 === n || n.isStatic) && ve(e)),
                (this.componentId = t),
                (this.baseHash = q(we, t)),
                (this.baseStyle = n),
                H.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, n) {
                var r = this.componentId,
                  a = [];
                if (
                  (this.baseStyle &&
                    a.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                  this.isStatic && !n.hash)
                )
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(r, this.staticRulesId)
                  )
                    a.push(this.staticRulesId);
                  else {
                    var o = ue(this.rules, e, t, n).join(""),
                      i = ye(q(this.baseHash, o.length) >>> 0);
                    if (!t.hasNameForId(r, i)) {
                      var s = n(o, "." + i, void 0, r);
                      t.insertRules(r, i, s);
                    }
                    a.push(i), (this.staticRulesId = i);
                  }
                else {
                  for (
                    var c = this.rules.length,
                      l = q(this.baseHash, n.hash),
                      u = "",
                      p = 0;
                    p < c;
                    p++
                  ) {
                    var d = this.rules[p];
                    if ("string" == typeof d) u += d;
                    else if (d) {
                      var f = ue(d, e, t, n),
                        h = Array.isArray(f) ? f.join("") : f;
                      (l = q(l, h + p)), (u += h);
                    }
                  }
                  if (u) {
                    var g = ye(l >>> 0);
                    if (!t.hasNameForId(r, g)) {
                      var m = n(u, "." + g, void 0, r);
                      t.insertRules(r, g, m);
                    }
                    a.push(g);
                  }
                }
                return a.join(" ");
              }),
              e
            );
          })(),
          Ee =
            (new Set(),
            function (e, t, n) {
              return (
                void 0 === n && (n = b),
                (e.theme !== n.theme && e.theme) || t || n.theme
              );
            }),
          ke = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          Oe = /(^-|-$)/g;
        function Re(e) {
          return e.replace(ke, "-").replace(Oe, "");
        }
        function Ae(e) {
          return "string" == typeof e && !0;
        }
        var xe = function (e) {
            return ye(W(e) >>> 0);
          },
          Pe = o.a.createContext();
        Pe.Consumer;
        var _e = {};
        function Ce(e, t, n) {
          var r = w(e),
            i = !Ae(e),
            s = t.displayName,
            c =
              void 0 === s
                ? (function (e) {
                    return Ae(e) ? "styled." + e : "Styled(" + v(e) + ")";
                  })(e)
                : s,
            l = t.componentId,
            p =
              void 0 === l
                ? (function (e, t) {
                    var n = "string" != typeof e ? "sc" : Re(e);
                    _e[n] = (_e[n] || 0) + 1;
                    var r = n + "-" + xe("5.2.0" + n + _e[n]);
                    return t ? t + "-" + r : r;
                  })(t.displayName, t.parentComponentId)
                : l,
            h = t.attrs,
            g = void 0 === h ? m : h,
            S =
              t.displayName && t.componentId
                ? Re(t.displayName) + "-" + t.componentId
                : t.componentId || p,
            E =
              r && e.attrs
                ? Array.prototype.concat(e.attrs, g).filter(Boolean)
                : g,
            k = t.shouldForwardProp;
          r &&
            e.shouldForwardProp &&
            (k = k
              ? function (n, r) {
                  return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
                }
              : e.shouldForwardProp);
          var O,
            R = new Se(n, S, r ? e.componentStyle : void 0),
            A = function (e, t) {
              return (function (e, t, n) {
                var r = e.attrs,
                  o = e.componentStyle,
                  i = e.defaultProps,
                  s = e.foldedComponentIds,
                  c = e.shouldForwardProp,
                  l = e.styledComponentId,
                  p = e.target,
                  d = (function (e, t, n) {
                    void 0 === e && (e = b);
                    var r = f({}, t, { theme: e }),
                      a = {};
                    return (
                      n.forEach(function (e) {
                        var t,
                          n,
                          o,
                          i = e;
                        for (t in (y(i) && (i = i(r)), i))
                          r[t] = a[t] =
                            "className" === t
                              ? ((n = a[t]),
                                (o = i[t]),
                                n && o ? n + " " + o : n || o)
                              : i[t];
                      }),
                      [r, a]
                    );
                  })(Ee(t, Object(a.useContext)(Pe), i) || b, t, r),
                  h = d[0],
                  g = d[1],
                  m = (function (e, t, n, r) {
                    var a = ee(),
                      o = te();
                    return e.isStatic && !t
                      ? e.generateAndInjectStyles(b, a, o)
                      : e.generateAndInjectStyles(n, a, o);
                  })(o, r.length > 0, h),
                  v = n,
                  w = g.$as || t.$as || g.as || t.as || p,
                  S = Ae(w),
                  E = g !== t ? f({}, t, {}, g) : t,
                  k = c || (S && u.a),
                  O = {};
                for (var R in E)
                  "$" !== R[0] &&
                    "as" !== R &&
                    ("forwardedAs" === R
                      ? (O.as = E[R])
                      : (k && !k(R, u.a)) || (O[R] = E[R]));
                return (
                  t.style &&
                    g.style !== t.style &&
                    (O.style = f({}, t.style, {}, g.style)),
                  (O.className = Array.prototype
                    .concat(s, l, m !== l ? m : null, t.className, g.className)
                    .filter(Boolean)
                    .join(" ")),
                  (O.ref = v),
                  Object(a.createElement)(w, O)
                );
              })(O, e, t);
            };
          return (
            (A.displayName = c),
            ((O = o.a.forwardRef(A)).attrs = E),
            (O.componentStyle = R),
            (O.displayName = c),
            (O.shouldForwardProp = k),
            (O.foldedComponentIds = r
              ? Array.prototype.concat(
                  e.foldedComponentIds,
                  e.styledComponentId
                )
              : m),
            (O.styledComponentId = S),
            (O.target = r ? e.target : e),
            (O.withComponent = function (e) {
              var r = t.componentId,
                a = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = {},
                    o = Object.keys(e);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                  return a;
                })(t, ["componentId"]),
                o = r && r + "-" + (Ae(e) ? e : Re(v(e)));
              return Ce(e, f({}, a, { attrs: E, componentId: o }), n);
            }),
            Object.defineProperty(O, "defaultProps", {
              get: function () {
                return this._foldedDefaultProps;
              },
              set: function (t) {
                this._foldedDefaultProps = r ? ge({}, e.defaultProps, t) : t;
              },
            }),
            (O.toString = function () {
              return "." + O.styledComponentId;
            }),
            i &&
              d()(O, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                self: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            O
          );
        }
        var Te = function (e) {
          return (function e(t, n, a) {
            if ((void 0 === a && (a = b), !Object(r.isValidElementType)(n)))
              return A(1, String(n));
            var o = function () {
              return t(n, a, pe.apply(void 0, arguments));
            };
            return (
              (o.withConfig = function (r) {
                return e(t, n, f({}, a, {}, r));
              }),
              (o.attrs = function (r) {
                return e(
                  t,
                  n,
                  f({}, a, {
                    attrs: Array.prototype.concat(a.attrs, r).filter(Boolean),
                  })
                );
              }),
              o
            );
          })(Ce, e);
        };
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ].forEach(function (e) {
          Te[e] = Te(e);
        });
        var je = (function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = ve(e)),
              H.registerId(this.componentId + 1);
          }
          var t = e.prototype;
          return (
            (t.createStyles = function (e, t, n, r) {
              var a = r(ue(this.rules, t, n, r).join(""), ""),
                o = this.componentId + e;
              n.insertRules(o, o, a);
            }),
            (t.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (t.renderStyles = function (e, t, n, r) {
              e > 2 && H.registerId(this.componentId + e),
                this.removeStyles(e, n),
                this.createStyles(e, t, n, r);
            }),
            e
          );
        })();
        function Ie(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = pe.apply(void 0, [e].concat(n)),
            s = "sc-global-" + xe(JSON.stringify(i)),
            c = new je(i, s);
          function l(e) {
            var t = ee(),
              n = te(),
              r = Object(a.useContext)(Pe),
              o = Object(a.useRef)(t.allocateGSInstance(s)).current;
            return (
              Object(a.useLayoutEffect)(
                function () {
                  return (
                    u(o, e, t, r, n),
                    function () {
                      return c.removeStyles(o, t);
                    }
                  );
                },
                [o, e, t, r, n]
              ),
              null
            );
          }
          function u(e, t, n, r, a) {
            if (c.isStatic) c.renderStyles(e, O, n, a);
            else {
              var o = f({}, t, { theme: Ee(t, r, l.defaultProps) });
              c.renderStyles(e, o, n, a);
            }
          }
          return o.a.memo(l);
        }
        !(function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString(),
                n = R();
              return (
                "<style " +
                [
                  n && 'nonce="' + n + '"',
                  S + '="true"',
                  'data-styled-version="5.2.0"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? A(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return A(2);
                var n =
                    (((t = {})[S] = ""),
                    (t["data-styled-version"] = "5.2.0"),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  r = R();
                return (
                  r && (n.nonce = r),
                  [o.a.createElement("style", f({}, n, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new H({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          (t.collectStyles = function (e) {
            return this.sealed
              ? A(2)
              : o.a.createElement(ne, { sheet: this.instance }, e);
          }),
            (t.interleaveWithNodeStream = function (e) {
              return A(3);
            });
        })();
        t.b = Te;
      }.call(this, n("8oxB")));
    },
    xtsi: function (e, t, n) {
      var r = n("LeKB"),
        a = n("emEt").publicLoader,
        o = a.getResourcesForPathname,
        i = a.getResourcesForPathnameSync,
        s = a.getResourceURLsForPathname,
        c = a.loadPage,
        l = a.loadPageSync;
      (t.apiRunner = function (e, t, n, a) {
        void 0 === t && (t = {});
        var u = r.map(function (n) {
          if (n.plugin[e]) {
            (t.getResourcesForPathnameSync = i),
              (t.getResourcesForPathname = o),
              (t.getResourceURLsForPathname = s),
              (t.loadPage = c),
              (t.loadPageSync = l);
            var r = n.plugin[e](t, n.options);
            return r && a && (t = a({ args: t, result: r, plugin: n })), r;
          }
        });
        return (u = u.filter(function (e) {
          return void 0 !== e;
        })).length > 0
          ? u
          : n
          ? [n]
          : [];
      }),
        (t.apiRunnerAsync = function (e, t, n) {
          return r.reduce(function (n, r) {
            return r.plugin[e]
              ? n.then(function () {
                  return r.plugin[e](t, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
  },
  [["UxWs", 1, 5]],
]);
//# sourceMappingURL=app-f9068e955c11d27a3d0d.js.map
