/*! For license information please see 1966.51b14f15.chunk.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1966],
  {
    38587: (t, e, i) => {
      i.d(e, {
        FR: () => sg,
        JZ: () => og,
        MG: () => rg,
        oK: () => ag,
        fH: () => lg,
        ZU: () => hg,
        nc: () => cg,
      })
      var n = i(28381),
        s = i(64572)
      function o(t) {
        return (t + 0.5) | 0
      }
      const r = (t, e, i) => Math.max(Math.min(t, i), e)
      function a(t) {
        return r(o(2.55 * t), 0, 255)
      }
      function l(t) {
        return r(o(255 * t), 0, 255)
      }
      function h(t) {
        return r(o(t / 2.55) / 100, 0, 1)
      }
      function c(t) {
        return r(o(100 * t), 0, 100)
      }
      const d = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        u = [...'0123456789ABCDEF'],
        f = (t) => u[15 & t],
        p = (t) => u[(240 & t) >> 4] + u[15 & t],
        g = (t) => (240 & t) >> 4 === (15 & t)
      function m(t) {
        var e = ((t) => g(t.r) && g(t.g) && g(t.b) && g(t.a))(t) ? f : p
        return t
          ? '#' + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
          : void 0
      }
      const b =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
      function x(t, e, i) {
        const n = e * Math.min(i, 1 - i),
          s = function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12
            return i - n * Math.max(Math.min(s - 3, 9 - s, 1), -1)
          }
        return [s(0), s(8), s(4)]
      }
      function y(t, e, i) {
        const n = function (n) {
          let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (n + t / 60) % 6
          return i - i * e * Math.max(Math.min(s, 4 - s, 1), 0)
        }
        return [n(5), n(3), n(1)]
      }
      function v(t, e, i) {
        const n = x(t, 1, 0.5)
        let s
        for (e + i > 1 && ((s = 1 / (e + i)), (e *= s), (i *= s)), s = 0; s < 3; s++)
          (n[s] *= 1 - e - i), (n[s] += e)
        return n
      }
      function _(t) {
        const e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          s = Math.max(e, i, n),
          o = Math.min(e, i, n),
          r = (s + o) / 2
        let a, l, h
        return (
          s !== o &&
            ((h = s - o),
            (l = r > 0.5 ? h / (2 - s - o) : h / (s + o)),
            (a = (function (t, e, i, n, s) {
              return t === s
                ? (e - i) / n + (e < i ? 6 : 0)
                : e === s
                  ? (i - t) / n + 2
                  : (t - e) / n + 4
            })(e, i, n, h, s)),
            (a = 60 * a + 0.5)),
          [0 | a, l || 0, r]
        )
      }
      function w(t, e, i, n) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(l)
      }
      function M(t, e, i) {
        return w(x, t, e, i)
      }
      function k(t) {
        return ((t % 360) + 360) % 360
      }
      function S(t) {
        const e = b.exec(t)
        let i,
          n = 255
        if (!e) return
        e[5] !== i && (n = e[6] ? a(+e[5]) : l(+e[5]))
        const s = k(+e[2]),
          o = +e[3] / 100,
          r = +e[4] / 100
        return (
          (i =
            'hwb' === e[1]
              ? (function (t, e, i) {
                  return w(v, t, e, i)
                })(s, o, r)
              : 'hsv' === e[1]
                ? (function (t, e, i) {
                    return w(y, t, e, i)
                  })(s, o, r)
                : M(s, o, r)),
          { r: i[0], g: i[1], b: i[2], a: n }
        )
      }
      const O = {
          x: 'dark',
          Z: 'light',
          Y: 're',
          X: 'blu',
          W: 'gr',
          V: 'medium',
          U: 'slate',
          A: 'ee',
          T: 'ol',
          S: 'or',
          B: 'ra',
          C: 'lateg',
          D: 'ights',
          R: 'in',
          Q: 'turquois',
          E: 'hi',
          P: 'ro',
          O: 'al',
          N: 'le',
          M: 'de',
          L: 'yello',
          F: 'en',
          K: 'ch',
          G: 'arks',
          H: 'ea',
          I: 'ightg',
          J: 'wh',
        },
        P = {
          OiceXe: 'f0f8ff',
          antiquewEte: 'faebd7',
          aqua: 'ffff',
          aquamarRe: '7fffd4',
          azuY: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '0',
          blanKedOmond: 'ffebcd',
          Xe: 'ff',
          XeviTet: '8a2be2',
          bPwn: 'a52a2a',
          burlywood: 'deb887',
          caMtXe: '5f9ea0',
          KartYuse: '7fff00',
          KocTate: 'd2691e',
          cSO: 'ff7f50',
          cSnflowerXe: '6495ed',
          cSnsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: 'ffff',
          xXe: '8b',
          xcyan: '8b8b',
          xgTMnPd: 'b8860b',
          xWay: 'a9a9a9',
          xgYF: '6400',
          xgYy: 'a9a9a9',
          xkhaki: 'bdb76b',
          xmagFta: '8b008b',
          xTivegYF: '556b2f',
          xSange: 'ff8c00',
          xScEd: '9932cc',
          xYd: '8b0000',
          xsOmon: 'e9967a',
          xsHgYF: '8fbc8f',
          xUXe: '483d8b',
          xUWay: '2f4f4f',
          xUgYy: '2f4f4f',
          xQe: 'ced1',
          xviTet: '9400d3',
          dAppRk: 'ff1493',
          dApskyXe: 'bfff',
          dimWay: '696969',
          dimgYy: '696969',
          dodgerXe: '1e90ff',
          fiYbrick: 'b22222',
          flSOwEte: 'fffaf0',
          foYstWAn: '228b22',
          fuKsia: 'ff00ff',
          gaRsbSo: 'dcdcdc',
          ghostwEte: 'f8f8ff',
          gTd: 'ffd700',
          gTMnPd: 'daa520',
          Way: '808080',
          gYF: '8000',
          gYFLw: 'adff2f',
          gYy: '808080',
          honeyMw: 'f0fff0',
          hotpRk: 'ff69b4',
          RdianYd: 'cd5c5c',
          Rdigo: '4b0082',
          ivSy: 'fffff0',
          khaki: 'f0e68c',
          lavFMr: 'e6e6fa',
          lavFMrXsh: 'fff0f5',
          lawngYF: '7cfc00',
          NmoncEffon: 'fffacd',
          ZXe: 'add8e6',
          ZcSO: 'f08080',
          Zcyan: 'e0ffff',
          ZgTMnPdLw: 'fafad2',
          ZWay: 'd3d3d3',
          ZgYF: '90ee90',
          ZgYy: 'd3d3d3',
          ZpRk: 'ffb6c1',
          ZsOmon: 'ffa07a',
          ZsHgYF: '20b2aa',
          ZskyXe: '87cefa',
          ZUWay: '778899',
          ZUgYy: '778899',
          ZstAlXe: 'b0c4de',
          ZLw: 'ffffe0',
          lime: 'ff00',
          limegYF: '32cd32',
          lRF: 'faf0e6',
          magFta: 'ff00ff',
          maPon: '800000',
          VaquamarRe: '66cdaa',
          VXe: 'cd',
          VScEd: 'ba55d3',
          VpurpN: '9370db',
          VsHgYF: '3cb371',
          VUXe: '7b68ee',
          VsprRggYF: 'fa9a',
          VQe: '48d1cc',
          VviTetYd: 'c71585',
          midnightXe: '191970',
          mRtcYam: 'f5fffa',
          mistyPse: 'ffe4e1',
          moccasR: 'ffe4b5',
          navajowEte: 'ffdead',
          navy: '80',
          Tdlace: 'fdf5e6',
          Tive: '808000',
          TivedBb: '6b8e23',
          Sange: 'ffa500',
          SangeYd: 'ff4500',
          ScEd: 'da70d6',
          pOegTMnPd: 'eee8aa',
          pOegYF: '98fb98',
          pOeQe: 'afeeee',
          pOeviTetYd: 'db7093',
          papayawEp: 'ffefd5',
          pHKpuff: 'ffdab9',
          peru: 'cd853f',
          pRk: 'ffc0cb',
          plum: 'dda0dd',
          powMrXe: 'b0e0e6',
          purpN: '800080',
          YbeccapurpN: '663399',
          Yd: 'ff0000',
          Psybrown: 'bc8f8f',
          PyOXe: '4169e1',
          saddNbPwn: '8b4513',
          sOmon: 'fa8072',
          sandybPwn: 'f4a460',
          sHgYF: '2e8b57',
          sHshell: 'fff5ee',
          siFna: 'a0522d',
          silver: 'c0c0c0',
          skyXe: '87ceeb',
          UXe: '6a5acd',
          UWay: '708090',
          UgYy: '708090',
          snow: 'fffafa',
          sprRggYF: 'ff7f',
          stAlXe: '4682b4',
          tan: 'd2b48c',
          teO: '8080',
          tEstN: 'd8bfd8',
          tomato: 'ff6347',
          Qe: '40e0d0',
          viTet: 'ee82ee',
          JHt: 'f5deb3',
          wEte: 'ffffff',
          wEtesmoke: 'f5f5f5',
          Lw: 'ffff00',
          LwgYF: '9acd32',
        }
      let C
      function D(t) {
        C ||
          ((C = (function () {
            const t = {},
              e = Object.keys(P),
              i = Object.keys(O)
            let n, s, o, r, a
            for (n = 0; n < e.length; n++) {
              for (r = a = e[n], s = 0; s < i.length; s++) (o = i[s]), (a = a.replace(o, O[o]))
              ;(o = parseInt(P[r], 16)), (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o])
            }
            return t
          })()),
          (C.transparent = [0, 0, 0, 0]))
        const e = C[t.toLowerCase()]
        return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
      }
      const A =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
      const T = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
        E = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4))
      function L(t, e, i) {
        if (t) {
          let n = _(t)
          ;(n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
            (n = M(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2])
        }
      }
      function R(t, e) {
        return t ? Object.assign(e || {}, t) : t
      }
      function I(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 }
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = l(t[3])))
            : ((e = R(t, { r: 0, g: 0, b: 0, a: 1 })).a = l(e.a)),
          e
        )
      }
      function z(t) {
        return 'r' === t.charAt(0)
          ? (function (t) {
              const e = A.exec(t)
              let i,
                n,
                s,
                o = 255
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7]
                  o = e[8] ? a(t) : r(255 * t, 0, 255)
                }
                return (
                  (i = +e[1]),
                  (n = +e[3]),
                  (s = +e[5]),
                  (i = 255 & (e[2] ? a(i) : r(i, 0, 255))),
                  (n = 255 & (e[4] ? a(n) : r(n, 0, 255))),
                  (s = 255 & (e[6] ? a(s) : r(s, 0, 255))),
                  { r: i, g: n, b: s, a: o }
                )
              }
            })(t)
          : S(t)
      }
      class j {
        constructor(t) {
          if (t instanceof j) return t
          const e = typeof t
          let i
          'object' === e
            ? (i = I(t))
            : 'string' === e &&
              (i =
                (function (t) {
                  var e,
                    i = t.length
                  return (
                    '#' === t[0] &&
                      (4 === i || 5 === i
                        ? (e = {
                            r: 255 & (17 * d[t[1]]),
                            g: 255 & (17 * d[t[2]]),
                            b: 255 & (17 * d[t[3]]),
                            a: 5 === i ? 17 * d[t[4]] : 255,
                          })
                        : (7 !== i && 9 !== i) ||
                          (e = {
                            r: (d[t[1]] << 4) | d[t[2]],
                            g: (d[t[3]] << 4) | d[t[4]],
                            b: (d[t[5]] << 4) | d[t[6]],
                            a: 9 === i ? (d[t[7]] << 4) | d[t[8]] : 255,
                          })),
                    e
                  )
                })(t) ||
                D(t) ||
                z(t)),
            (this._rgb = i),
            (this._valid = !!i)
        }
        get valid() {
          return this._valid
        }
        get rgb() {
          var t = R(this._rgb)
          return t && (t.a = h(t.a)), t
        }
        set rgb(t) {
          this._rgb = I(t)
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? 'rgba('
                      .concat(t.r, ', ')
                      .concat(t.g, ', ')
                      .concat(t.b, ', ')
                      .concat(h(t.a), ')')
                  : 'rgb('.concat(t.r, ', ').concat(t.g, ', ').concat(t.b, ')'))
            : void 0
          var t
        }
        hexString() {
          return this._valid ? m(this._rgb) : void 0
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return
                const e = _(t),
                  i = e[0],
                  n = c(e[1]),
                  s = c(e[2])
                return t.a < 255
                  ? 'hsla('.concat(i, ', ').concat(n, '%, ').concat(s, '%, ').concat(h(t.a), ')')
                  : 'hsl('.concat(i, ', ').concat(n, '%, ').concat(s, '%)')
              })(this._rgb)
            : void 0
        }
        mix(t, e) {
          if (t) {
            const i = this.rgb,
              n = t.rgb
            let s
            const o = e === s ? 0.5 : e,
              r = 2 * o - 1,
              a = i.a - n.a,
              l = ((r * a === -1 ? r : (r + a) / (1 + r * a)) + 1) / 2
            ;(s = 1 - l),
              (i.r = 255 & (l * i.r + s * n.r + 0.5)),
              (i.g = 255 & (l * i.g + s * n.g + 0.5)),
              (i.b = 255 & (l * i.b + s * n.b + 0.5)),
              (i.a = o * i.a + (1 - o) * n.a),
              (this.rgb = i)
          }
          return this
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, i) {
                const n = E(h(t.r)),
                  s = E(h(t.g)),
                  o = E(h(t.b))
                return {
                  r: l(T(n + i * (E(h(e.r)) - n))),
                  g: l(T(s + i * (E(h(e.g)) - s))),
                  b: l(T(o + i * (E(h(e.b)) - o))),
                  a: t.a + i * (e.a - t.a),
                }
              })(this._rgb, t._rgb, e)),
            this
          )
        }
        clone() {
          return new j(this.rgb)
        }
        alpha(t) {
          return (this._rgb.a = l(t)), this
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this
        }
        greyscale() {
          const t = this._rgb,
            e = o(0.3 * t.r + 0.59 * t.g + 0.11 * t.b)
          return (t.r = t.g = t.b = e), this
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this
        }
        negate() {
          const t = this._rgb
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
        }
        lighten(t) {
          return L(this._rgb, 2, t), this
        }
        darken(t) {
          return L(this._rgb, 2, -t), this
        }
        saturate(t) {
          return L(this._rgb, 1, t), this
        }
        desaturate(t) {
          return L(this._rgb, 1, -t), this
        }
        rotate(t) {
          return (
            (function (t, e) {
              var i = _(t)
              ;(i[0] = k(i[0] + e)), (i = M(i)), (t.r = i[0]), (t.g = i[1]), (t.b = i[2])
            })(this._rgb, t),
            this
          )
        }
      }
      function F() {}
      const N = (() => {
        let t = 0
        return () => t++
      })()
      function V(t) {
        return null === t || 'undefined' === typeof t
      }
      function B(t) {
        if (Array.isArray && Array.isArray(t)) return !0
        const e = Object.prototype.toString.call(t)
        return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6)
      }
      function W(t) {
        return null !== t && '[object Object]' === Object.prototype.toString.call(t)
      }
      function H(t) {
        return ('number' === typeof t || t instanceof Number) && isFinite(+t)
      }
      function Z(t, e) {
        return H(t) ? t : e
      }
      function Y(t, e) {
        return 'undefined' === typeof t ? e : t
      }
      const U = (t, e) =>
        'string' === typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t
      function $(t, e, i) {
        if (t && 'function' === typeof t.call) return t.apply(i, e)
      }
      function X(t, e, i, n) {
        let s, o, r
        if (B(t))
          if (((o = t.length), n)) for (s = o - 1; s >= 0; s--) e.call(i, t[s], s)
          else for (s = 0; s < o; s++) e.call(i, t[s], s)
        else if (W(t))
          for (r = Object.keys(t), o = r.length, s = 0; s < o; s++) e.call(i, t[r[s]], r[s])
      }
      function q(t, e) {
        let i, n, s, o
        if (!t || !e || t.length !== e.length) return !1
        for (i = 0, n = t.length; i < n; ++i)
          if (((s = t[i]), (o = e[i]), s.datasetIndex !== o.datasetIndex || s.index !== o.index))
            return !1
        return !0
      }
      function K(t) {
        if (B(t)) return t.map(K)
        if (W(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            n = i.length
          let s = 0
          for (; s < n; ++s) e[i[s]] = K(t[i[s]])
          return e
        }
        return t
      }
      function G(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t)
      }
      function J(t, e, i, n) {
        if (!G(t)) return
        const s = e[t],
          o = i[t]
        W(s) && W(o) ? Q(s, o, n) : (e[t] = K(o))
      }
      function Q(t, e, i) {
        const n = B(e) ? e : [e],
          s = n.length
        if (!W(t)) return t
        const o = (i = i || {}).merger || J
        let r
        for (let a = 0; a < s; ++a) {
          if (((r = n[a]), !W(r))) continue
          const e = Object.keys(r)
          for (let n = 0, s = e.length; n < s; ++n) o(e[n], t, r, i)
        }
        return t
      }
      function tt(t, e) {
        return Q(t, e, { merger: et })
      }
      function et(t, e, i) {
        if (!G(t)) return
        const n = e[t],
          s = i[t]
        W(n) && W(s) ? tt(n, s) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = K(s))
      }
      const it = { '': (t) => t, x: (t) => t.x, y: (t) => t.y }
      function nt(t, e) {
        const i =
          it[e] ||
          (it[e] = (function (t) {
            const e = (function (t) {
              const e = t.split('.'),
                i = []
              let n = ''
              for (const s of e)
                (n += s), n.endsWith('\\') ? (n = n.slice(0, -1) + '.') : (i.push(n), (n = ''))
              return i
            })(t)
            return (t) => {
              for (const i of e) {
                if ('' === i) break
                t = t && t[i]
              }
              return t
            }
          })(e))
        return i(t)
      }
      function st(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }
      const ot = (t) => 'undefined' !== typeof t,
        rt = (t) => 'function' === typeof t,
        at = (t, e) => {
          if (t.size !== e.size) return !1
          for (const i of t) if (!e.has(i)) return !1
          return !0
        }
      const lt = Math.PI,
        ht = 2 * lt,
        ct = ht + lt,
        dt = Number.POSITIVE_INFINITY,
        ut = lt / 180,
        ft = lt / 2,
        pt = lt / 4,
        gt = (2 * lt) / 3,
        mt = Math.log10,
        bt = Math.sign
      function xt(t, e, i) {
        return Math.abs(t - e) < i
      }
      function yt(t) {
        const e = Math.round(t)
        t = xt(t, e, t / 1e3) ? e : t
        const i = Math.pow(10, Math.floor(mt(t))),
          n = t / i
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i
      }
      function vt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
      }
      function _t(t, e, i) {
        let n, s, o
        for (n = 0, s = t.length; n < s; n++)
          (o = t[n][i]), isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)))
      }
      function wt(t) {
        return t * (lt / 180)
      }
      function Mt(t) {
        return t * (180 / lt)
      }
      function kt(t) {
        if (!H(t)) return
        let e = 1,
          i = 0
        for (; Math.round(t * e) / e !== t; ) (e *= 10), i++
        return i
      }
      function St(t, e) {
        const i = e.x - t.x,
          n = e.y - t.y,
          s = Math.sqrt(i * i + n * n)
        let o = Math.atan2(n, i)
        return o < -0.5 * lt && (o += ht), { angle: o, distance: s }
      }
      function Ot(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
      }
      function Pt(t, e) {
        return ((t - e + ct) % ht) - lt
      }
      function Ct(t) {
        return ((t % ht) + ht) % ht
      }
      function Dt(t, e, i, n) {
        const s = Ct(t),
          o = Ct(e),
          r = Ct(i),
          a = Ct(o - s),
          l = Ct(r - s),
          h = Ct(s - o),
          c = Ct(s - r)
        return s === o || s === r || (n && o === r) || (a > l && h < c)
      }
      function At(t, e, i) {
        return Math.max(e, Math.min(i, t))
      }
      function Tt(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6
        return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n
      }
      function Et(t, e, i) {
        i = i || ((i) => t[i] < e)
        let n,
          s = t.length - 1,
          o = 0
        for (; s - o > 1; ) (n = (o + s) >> 1), i(n) ? (o = n) : (s = n)
        return { lo: o, hi: s }
      }
      const Lt = (t, e, i, n) =>
          Et(
            t,
            i,
            n
              ? (n) => {
                  const s = t[n][e]
                  return s < i || (s === i && t[n + 1][e] === i)
                }
              : (n) => t[n][e] < i,
          ),
        Rt = (t, e, i) => Et(t, i, (n) => t[n][e] >= i)
      const It = ['push', 'pop', 'shift', 'splice', 'unshift']
      function zt(t, e) {
        const i = t._chartjs
        if (!i) return
        const n = i.listeners,
          s = n.indexOf(e)
        ;-1 !== s && n.splice(s, 1),
          n.length > 0 ||
            (It.forEach((e) => {
              delete t[e]
            }),
            delete t._chartjs)
      }
      function jt(t) {
        const e = new Set(t)
        return e.size === t.length ? t : Array.from(e)
      }
      const Ft =
        'undefined' === typeof window
          ? function (t) {
              return t()
            }
          : window.requestAnimationFrame
      function Nt(t, e) {
        let i = [],
          n = !1
        return function () {
          for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r]
          ;(i = o),
            n ||
              ((n = !0),
              Ft.call(window, () => {
                ;(n = !1), t.apply(e, i)
              }))
        }
      }
      const Vt = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
        Bt = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2)
      function Wt(t, e, i) {
        const n = e.length
        let s = 0,
          o = n
        if (t._sorted) {
          const { iScale: r, _parsed: a } = t,
            l = r.axis,
            { min: h, max: c, minDefined: d, maxDefined: u } = r.getUserBounds()
          d &&
            (s = At(
              Math.min(Lt(a, l, h).lo, i ? n : Lt(e, l, r.getPixelForValue(h)).lo),
              0,
              n - 1,
            )),
            (o = u
              ? At(
                  Math.max(
                    Lt(a, r.axis, c, !0).hi + 1,
                    i ? 0 : Lt(e, l, r.getPixelForValue(c), !0).hi + 1,
                  ),
                  s,
                  n,
                ) - s
              : n - s)
        }
        return { start: s, count: o }
      }
      function Ht(t) {
        const { xScale: e, yScale: i, _scaleRanges: n } = t,
          s = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max }
        if (!n) return (t._scaleRanges = s), !0
        const o = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== i.min || n.ymax !== i.max
        return Object.assign(n, s), o
      }
      const Zt = (t) => 0 === t || 1 === t,
        Yt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ht) / i),
        Ut = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * ht) / i) + 1,
        $t = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * ft),
          easeOutSine: (t) => Math.sin(t * ft),
          easeInOutSine: (t) => -0.5 * (Math.cos(lt * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            Zt(t)
              ? t
              : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (Zt(t) ? t : Yt(t, 0.075, 0.3)),
          easeOutElastic: (t) => (Zt(t) ? t : Ut(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125
            return Zt(t)
              ? t
              : t < 0.5
                ? 0.5 * Yt(2 * t, e, 0.45)
                : 0.5 + 0.5 * Ut(2 * t - 1, e, 0.45)
          },
          easeInBack(t) {
            const e = 1.70158
            return t * t * ((e + 1) * t - e)
          },
          easeOutBack(t) {
            const e = 1.70158
            return (t -= 1) * t * ((e + 1) * t + e) + 1
          },
          easeInOutBack(t) {
            let e = 1.70158
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
          },
          easeInBounce: (t) => 1 - $t.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              i = 2.75
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
                ? e * (t -= 1.5 / i) * t + 0.75
                : t < 2.5 / i
                  ? e * (t -= 2.25 / i) * t + 0.9375
                  : e * (t -= 2.625 / i) * t + 0.984375
          },
          easeInOutBounce: (t) =>
            t < 0.5 ? 0.5 * $t.easeInBounce(2 * t) : 0.5 * $t.easeOutBounce(2 * t - 1) + 0.5,
        }
      function Xt(t) {
        if (t && 'object' === typeof t) {
          const e = t.toString()
          return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
        }
        return !1
      }
      function qt(t) {
        return Xt(t) ? t : new j(t)
      }
      function Kt(t) {
        return Xt(t) ? t : new j(t).saturate(0.5).darken(0.1).hexString()
      }
      const Gt = ['x', 'y', 'borderWidth', 'radius', 'tension'],
        Jt = ['color', 'borderColor', 'backgroundColor']
      const Qt = new Map()
      function te(t, e, i) {
        return (function (t, e) {
          e = e || {}
          const i = t + JSON.stringify(e)
          let n = Qt.get(i)
          return n || ((n = new Intl.NumberFormat(t, e)), Qt.set(i, n)), n
        })(e, i).format(t)
      }
      const ee = {
        values: (t) => (B(t) ? t : '' + t),
        numeric(t, e, i) {
          if (0 === t) return '0'
          const n = this.chart.options.locale
          let s,
            o = t
          if (i.length > 1) {
            const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value))
            ;(e < 1e-4 || e > 1e15) && (s = 'scientific'),
              (o = (function (t, e) {
                let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value
                Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t))
                return i
              })(t, i))
          }
          const r = mt(Math.abs(o)),
            a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a }
          return Object.assign(l, this.options.ticks.format), te(t, n, l)
        },
        logarithmic(t, e, i) {
          if (0 === t) return '0'
          const n = i[e].significand || t / Math.pow(10, Math.floor(mt(t)))
          return [1, 2, 3, 5, 10, 15].includes(n) || e > 0.8 * i.length
            ? ee.numeric.call(this, t, e, i)
            : ''
        },
      }
      var ie = { formatters: ee }
      const ne = Object.create(null),
        se = Object.create(null)
      function oe(t, e) {
        if (!e) return t
        const i = e.split('.')
        for (let n = 0, s = i.length; n < s; ++n) {
          const e = i[n]
          t = t[e] || (t[e] = Object.create(null))
        }
        return t
      }
      function re(t, e, i) {
        return 'string' === typeof e ? Q(oe(t, e), i) : Q(oe(t, ''), e)
      }
      class ae {
        constructor(t, e) {
          ;(this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: 'normal',
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => Kt(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => Kt(e.borderColor)),
            (this.hoverColor = (t, e) => Kt(e.color)),
            (this.indexAxis = 'x'),
            (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e)
        }
        set(t, e) {
          return re(this, t, e)
        }
        get(t) {
          return oe(this, t)
        }
        describe(t, e) {
          return re(se, t, e)
        }
        override(t, e) {
          return re(ne, t, e)
        }
        route(t, e, i, n) {
          const s = oe(this, t),
            o = oe(this, i),
            r = '_' + e
          Object.defineProperties(s, {
            [r]: { value: s[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[r],
                  e = o[n]
                return W(t) ? Object.assign({}, e, t) : Y(t, e)
              },
              set(t) {
                this[r] = t
              },
            },
          })
        }
        apply(t) {
          t.forEach((t) => t(this))
        }
      }
      var le = new ae(
        {
          _scriptable: (t) => !t.startsWith('on'),
          _indexable: (t) => 'events' !== t,
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            t.set('animation', {
              delay: void 0,
              duration: 1e3,
              easing: 'easeOutQuart',
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
              }),
              t.set('animations', {
                colors: { type: 'color', properties: Jt },
                numbers: { type: 'number', properties: Gt },
              }),
              t.describe('animations', { _fallback: 'animation' }),
              t.set('transitions', {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: 'transparent' },
                    visible: { type: 'boolean', duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: 'transparent' },
                    visible: { type: 'boolean', easing: 'linear', fn: (t) => 0 | t },
                  },
                },
              })
          },
          function (t) {
            t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } })
          },
          function (t) {
            t.set('scale', {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: 'ticks',
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: '',
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: ie.formatters.values,
                minor: {},
                major: {},
                align: 'center',
                crossAlign: 'near',
                showLabelBackdrop: !1,
                backdropColor: 'rgba(255, 255, 255, 0.75)',
                backdropPadding: 2,
              },
            }),
              t.route('scale.ticks', 'color', '', 'color'),
              t.route('scale.grid', 'color', '', 'borderColor'),
              t.route('scale.border', 'color', '', 'borderColor'),
              t.route('scale.title', 'color', '', 'color'),
              t.describe('scale', {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith('before') &&
                  !t.startsWith('after') &&
                  'callback' !== t &&
                  'parser' !== t,
                _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
              }),
              t.describe('scales', { _fallback: 'scale' }),
              t.describe('scale.ticks', {
                _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
                _indexable: (t) => 'backdropPadding' !== t,
              })
          },
        ],
      )
      function he(t, e, i, n, s) {
        let o = e[s]
        return o || ((o = e[s] = t.measureText(s).width), i.push(s)), o > n && (n = o), n
      }
      function ce(t, e, i, n) {
        let s = ((n = n || {}).data = n.data || {}),
          o = (n.garbageCollect = n.garbageCollect || [])
        n.font !== e && ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = e)),
          t.save(),
          (t.font = e)
        let r = 0
        const a = i.length
        let l, h, c, d, u
        for (l = 0; l < a; l++)
          if (((d = i[l]), void 0 === d || null === d || B(d))) {
            if (B(d))
              for (h = 0, c = d.length; h < c; h++)
                (u = d[h]), void 0 === u || null === u || B(u) || (r = he(t, s, o, r, u))
          } else r = he(t, s, o, r, d)
        t.restore()
        const f = o.length / 2
        if (f > i.length) {
          for (l = 0; l < f; l++) delete s[o[l]]
          o.splice(0, f)
        }
        return r
      }
      function de(t, e, i) {
        const n = t.currentDevicePixelRatio,
          s = 0 !== i ? Math.max(i / 2, 0.5) : 0
        return Math.round((e - s) * n) / n + s
      }
      function ue(t, e) {
        ;(e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore()
      }
      function fe(t, e, i, n) {
        pe(t, e, i, n, null)
      }
      function pe(t, e, i, n, s) {
        let o, r, a, l, h, c, d, u
        const f = e.pointStyle,
          p = e.rotation,
          g = e.radius
        let m = (p || 0) * ut
        if (
          f &&
          'object' === typeof f &&
          ((o = f.toString()),
          '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
        )
          return (
            t.save(),
            t.translate(i, n),
            t.rotate(m),
            t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
            void t.restore()
          )
        if (!(isNaN(g) || g <= 0)) {
          switch ((t.beginPath(), f)) {
            default:
              s ? t.ellipse(i, n, s / 2, g, 0, 0, ht) : t.arc(i, n, g, 0, ht), t.closePath()
              break
            case 'triangle':
              ;(c = s ? s / 2 : g),
                t.moveTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
                (m += gt),
                t.lineTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
                (m += gt),
                t.lineTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
                t.closePath()
              break
            case 'rectRounded':
              ;(h = 0.516 * g),
                (l = g - h),
                (r = Math.cos(m + pt) * l),
                (d = Math.cos(m + pt) * (s ? s / 2 - h : l)),
                (a = Math.sin(m + pt) * l),
                (u = Math.sin(m + pt) * (s ? s / 2 - h : l)),
                t.arc(i - d, n - a, h, m - lt, m - ft),
                t.arc(i + u, n - r, h, m - ft, m),
                t.arc(i + d, n + a, h, m, m + ft),
                t.arc(i - u, n + r, h, m + ft, m + lt),
                t.closePath()
              break
            case 'rect':
              if (!p) {
                ;(l = Math.SQRT1_2 * g), (c = s ? s / 2 : l), t.rect(i - c, n - l, 2 * c, 2 * l)
                break
              }
              m += pt
            case 'rectRot':
              ;(d = Math.cos(m) * (s ? s / 2 : g)),
                (r = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (u = Math.sin(m) * (s ? s / 2 : g)),
                t.moveTo(i - d, n - a),
                t.lineTo(i + u, n - r),
                t.lineTo(i + d, n + a),
                t.lineTo(i - u, n + r),
                t.closePath()
              break
            case 'crossRot':
              m += pt
            case 'cross':
              ;(d = Math.cos(m) * (s ? s / 2 : g)),
                (r = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (u = Math.sin(m) * (s ? s / 2 : g)),
                t.moveTo(i - d, n - a),
                t.lineTo(i + d, n + a),
                t.moveTo(i + u, n - r),
                t.lineTo(i - u, n + r)
              break
            case 'star':
              ;(d = Math.cos(m) * (s ? s / 2 : g)),
                (r = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (u = Math.sin(m) * (s ? s / 2 : g)),
                t.moveTo(i - d, n - a),
                t.lineTo(i + d, n + a),
                t.moveTo(i + u, n - r),
                t.lineTo(i - u, n + r),
                (m += pt),
                (d = Math.cos(m) * (s ? s / 2 : g)),
                (r = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (u = Math.sin(m) * (s ? s / 2 : g)),
                t.moveTo(i - d, n - a),
                t.lineTo(i + d, n + a),
                t.moveTo(i + u, n - r),
                t.lineTo(i - u, n + r)
              break
            case 'line':
              ;(r = s ? s / 2 : Math.cos(m) * g),
                (a = Math.sin(m) * g),
                t.moveTo(i - r, n - a),
                t.lineTo(i + r, n + a)
              break
            case 'dash':
              t.moveTo(i, n), t.lineTo(i + Math.cos(m) * (s ? s / 2 : g), n + Math.sin(m) * g)
              break
            case !1:
              t.closePath()
          }
          t.fill(), e.borderWidth > 0 && t.stroke()
        }
      }
      function ge(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i)
        )
      }
      function me(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
      }
      function be(t) {
        t.restore()
      }
      function xe(t, e, i, n, s) {
        if (!e) return t.lineTo(i.x, i.y)
        if ('middle' === s) {
          const n = (e.x + i.x) / 2
          t.lineTo(n, e.y), t.lineTo(n, i.y)
        } else ('after' === s) !== !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y)
        t.lineTo(i.x, i.y)
      }
      function ye(t, e, i, n) {
        if (!e) return t.lineTo(i.x, i.y)
        t.bezierCurveTo(
          n ? e.cp1x : e.cp2x,
          n ? e.cp1y : e.cp2y,
          n ? i.cp2x : i.cp1x,
          n ? i.cp2y : i.cp1y,
          i.x,
          i.y,
        )
      }
      function ve(t, e, i, n, s) {
        if (s.strikethrough || s.underline) {
          const o = t.measureText(n),
            r = e - o.actualBoundingBoxLeft,
            a = e + o.actualBoundingBoxRight,
            l = i - o.actualBoundingBoxAscent,
            h = i + o.actualBoundingBoxDescent,
            c = s.strikethrough ? (l + h) / 2 : h
          ;(t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = s.decorationWidth || 2),
            t.moveTo(r, c),
            t.lineTo(a, c),
            t.stroke()
        }
      }
      function _e(t, e) {
        const i = t.fillStyle
        ;(t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = i)
      }
      function we(t, e, i, n, s) {
        let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
        const r = B(e) ? e : [e],
          a = o.strokeWidth > 0 && '' !== o.strokeColor
        let l, h
        for (
          t.save(),
            t.font = s.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                V(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline)
            })(t, o),
            l = 0;
          l < r.length;
          ++l
        )
          (h = r[l]),
            o.backdrop && _e(t, o.backdrop),
            a &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              V(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(h, i, n, o.maxWidth)),
            t.fillText(h, i, n, o.maxWidth),
            ve(t, i, n, h, o),
            (n += Number(s.lineHeight))
        t.restore()
      }
      function Me(t, e) {
        const { x: i, y: n, w: s, h: o, radius: r } = e
        t.arc(i + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * lt, lt, !0),
          t.lineTo(i, n + o - r.bottomLeft),
          t.arc(i + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, lt, ft, !0),
          t.lineTo(i + s - r.bottomRight, n + o),
          t.arc(i + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, ft, 0, !0),
          t.lineTo(i + s, n + r.topRight),
          t.arc(i + s - r.topRight, n + r.topRight, r.topRight, 0, -ft, !0),
          t.lineTo(i + r.topLeft, n)
      }
      const ke = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Se = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
      function Oe(t, e) {
        const i = ('' + t).match(ke)
        if (!i || 'normal' === i[1]) return 1.2 * e
        switch (((t = +i[2]), i[3])) {
          case 'px':
            return t
          case '%':
            t /= 100
        }
        return e * t
      }
      const Pe = (t) => +t || 0
      function Ce(t, e) {
        const i = {},
          n = W(e),
          s = n ? Object.keys(e) : e,
          o = W(t) ? (n ? (i) => Y(t[i], t[e[i]]) : (e) => t[e]) : () => t
        for (const r of s) i[r] = Pe(o(r))
        return i
      }
      function De(t) {
        return Ce(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
      }
      function Ae(t) {
        return Ce(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
      }
      function Te(t) {
        const e = De(t)
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e
      }
      function Ee(t, e) {
        ;(t = t || {}), (e = e || le.font)
        let i = Y(t.size, e.size)
        'string' === typeof i && (i = parseInt(i, 10))
        let n = Y(t.style, e.style)
        n &&
          !('' + n).match(Se) &&
          (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0))
        const s = {
          family: Y(t.family, e.family),
          lineHeight: Oe(Y(t.lineHeight, e.lineHeight), i),
          size: i,
          style: n,
          weight: Y(t.weight, e.weight),
          string: '',
        }
        return (
          (s.string = (function (t) {
            return !t || V(t.size) || V(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family
          })(s)),
          s
        )
      }
      function Le(t, e, i, n) {
        let s,
          o,
          r,
          a = !0
        for (s = 0, o = t.length; s < o; ++s)
          if (
            ((r = t[s]),
            void 0 !== r &&
              (void 0 !== e && 'function' === typeof r && ((r = r(e)), (a = !1)),
              void 0 !== i && B(r) && ((r = r[i % r.length]), (a = !1)),
              void 0 !== r))
          )
            return n && !a && (n.cacheable = !1), r
      }
      function Re(t, e) {
        return Object.assign(Object.create(t), e)
      }
      function Ie(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [''],
          i = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => t[0]
        const s = (arguments.length > 2 ? arguments[2] : void 0) || t
        'undefined' === typeof i && (i = Ue('_fallback', t))
        const o = {
          [Symbol.toStringTag]: 'Object',
          _cacheable: !0,
          _scopes: t,
          _rootScopes: s,
          _fallback: i,
          _getTarget: n,
          override: (n) => Ie([n, ...t], e, s, i),
        }
        return new Proxy(o, {
          deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
          get: (i, n) =>
            Ve(i, n, () =>
              (function (t, e, i, n) {
                let s
                for (const o of e)
                  if (((s = Ue(Fe(o, t), i)), 'undefined' !== typeof s))
                    return Ne(t, s) ? Ze(i, n, t, s) : s
              })(n, e, t, i),
            ),
          getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => $e(t).includes(e),
          ownKeys: (t) => $e(t),
          set(t, e, i) {
            const s = t._storage || (t._storage = n())
            return (t[e] = s[e] = i), delete t._keys, !0
          },
        })
      }
      function ze(t, e, i, n) {
        const s = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: je(t, n),
          setContext: (e) => ze(t, e, i, n),
          override: (s) => ze(t.override(s), e, i, n),
        }
        return new Proxy(s, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) =>
            Ve(t, e, () =>
              (function (t, e, i) {
                const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = t
                let a = n[e]
                rt(a) &&
                  r.isScriptable(e) &&
                  (a = (function (t, e, i, n) {
                    const { _proxy: s, _context: o, _subProxy: r, _stack: a } = i
                    if (a.has(t))
                      throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + t)
                    a.add(t)
                    let l = e(o, r || n)
                    a.delete(t), Ne(t, l) && (l = Ze(s._scopes, s, t, l))
                    return l
                  })(e, a, t, i))
                B(a) &&
                  a.length &&
                  (a = (function (t, e, i, n) {
                    const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = i
                    if ('undefined' !== typeof o.index && n(t)) return e[o.index % e.length]
                    if (W(e[0])) {
                      const i = e,
                        n = s._scopes.filter((t) => t !== i)
                      e = []
                      for (const l of i) {
                        const i = Ze(n, s, t, l)
                        e.push(ze(i, o, r && r[t], a))
                      }
                    }
                    return e
                  })(e, a, t, r.isIndexable))
                Ne(e, a) && (a = ze(a, s, o && o[e], r))
                return a
              })(t, e, i),
            ),
          getOwnPropertyDescriptor: (e, i) =>
            e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, n) => ((t[i] = n), delete e[i], !0),
        })
      }
      function je(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { scriptable: !0, indexable: !0 }
        const {
          _scriptable: i = e.scriptable,
          _indexable: n = e.indexable,
          _allKeys: s = e.allKeys,
        } = t
        return {
          allKeys: s,
          scriptable: i,
          indexable: n,
          isScriptable: rt(i) ? i : () => i,
          isIndexable: rt(n) ? n : () => n,
        }
      }
      const Fe = (t, e) => (t ? t + st(e) : e),
        Ne = (t, e) =>
          W(e) &&
          'adapters' !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object)
      function Ve(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
        const n = i()
        return (t[e] = n), n
      }
      function Be(t, e, i) {
        return rt(t) ? t(e, i) : t
      }
      const We = (t, e) => (!0 === t ? e : 'string' === typeof t ? nt(e, t) : void 0)
      function He(t, e, i, n, s) {
        for (const o of e) {
          const e = We(i, o)
          if (e) {
            t.add(e)
            const o = Be(e._fallback, i, s)
            if ('undefined' !== typeof o && o !== i && o !== n) return o
          } else if (!1 === e && 'undefined' !== typeof n && i !== n) return null
        }
        return !1
      }
      function Ze(t, e, i, n) {
        const s = e._rootScopes,
          o = Be(e._fallback, i, n),
          r = [...t, ...s],
          a = new Set()
        a.add(n)
        let l = Ye(a, r, i, o || i, n)
        return (
          null !== l &&
          ('undefined' === typeof o || o === i || ((l = Ye(a, r, o, l, n)), null !== l)) &&
          Ie(Array.from(a), [''], s, o, () =>
            (function (t, e, i) {
              const n = t._getTarget()
              e in n || (n[e] = {})
              const s = n[e]
              if (B(s) && W(i)) return i
              return s || {}
            })(e, i, n),
          )
        )
      }
      function Ye(t, e, i, n, s) {
        for (; i; ) i = He(t, e, i, n, s)
        return i
      }
      function Ue(t, e) {
        for (const i of e) {
          if (!i) continue
          const e = i[t]
          if ('undefined' !== typeof e) return e
        }
      }
      function $e(t) {
        let e = t._keys
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set()
                for (const i of t)
                  for (const t of Object.keys(i).filter((t) => !t.startsWith('_'))) e.add(t)
                return Array.from(e)
              })(t._scopes)),
          e
        )
      }
      function Xe(t, e, i, n) {
        const { iScale: s } = t,
          { key: o = 'r' } = this._parsing,
          r = new Array(n)
        let a, l, h, c
        for (a = 0, l = n; a < l; ++a) (h = a + i), (c = e[h]), (r[a] = { r: s.parse(nt(c, o), h) })
        return r
      }
      const qe = Number.EPSILON || 1e-14,
        Ke = (t, e) => e < t.length && !t[e].skip && t[e],
        Ge = (t) => ('x' === t ? 'y' : 'x')
      function Je(t, e, i, n) {
        const s = t.skip ? e : t,
          o = e,
          r = i.skip ? e : i,
          a = Ot(o, s),
          l = Ot(r, o)
        let h = a / (a + l),
          c = l / (a + l)
        ;(h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c)
        const d = n * h,
          u = n * c
        return {
          previous: { x: o.x - d * (r.x - s.x), y: o.y - d * (r.y - s.y) },
          next: { x: o.x + u * (r.x - s.x), y: o.y + u * (r.y - s.y) },
        }
      }
      function Qe(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x'
        const i = Ge(e),
          n = t.length,
          s = Array(n).fill(0),
          o = Array(n)
        let r,
          a,
          l,
          h = Ke(t, 0)
        for (r = 0; r < n; ++r)
          if (((a = l), (l = h), (h = Ke(t, r + 1)), l)) {
            if (h) {
              const t = h[e] - l[e]
              s[r] = 0 !== t ? (h[i] - l[i]) / t : 0
            }
            o[r] = a
              ? h
                ? bt(s[r - 1]) !== bt(s[r])
                  ? 0
                  : (s[r - 1] + s[r]) / 2
                : s[r - 1]
              : s[r]
          }
        !(function (t, e, i) {
          const n = t.length
          let s,
            o,
            r,
            a,
            l,
            h = Ke(t, 0)
          for (let c = 0; c < n - 1; ++c)
            (l = h),
              (h = Ke(t, c + 1)),
              l &&
                h &&
                (xt(e[c], 0, qe)
                  ? (i[c] = i[c + 1] = 0)
                  : ((s = i[c] / e[c]),
                    (o = i[c + 1] / e[c]),
                    (a = Math.pow(s, 2) + Math.pow(o, 2)),
                    a <= 9 ||
                      ((r = 3 / Math.sqrt(a)), (i[c] = s * r * e[c]), (i[c + 1] = o * r * e[c]))))
        })(t, s, o),
          (function (t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'x'
            const n = Ge(i),
              s = t.length
            let o,
              r,
              a,
              l = Ke(t, 0)
            for (let h = 0; h < s; ++h) {
              if (((r = a), (a = l), (l = Ke(t, h + 1)), !a)) continue
              const s = a[i],
                c = a[n]
              r &&
                ((o = (s - r[i]) / 3),
                (a['cp1'.concat(i)] = s - o),
                (a['cp1'.concat(n)] = c - o * e[h])),
                l &&
                  ((o = (l[i] - s) / 3),
                  (a['cp2'.concat(i)] = s + o),
                  (a['cp2'.concat(n)] = c + o * e[h]))
            }
          })(t, o, e)
      }
      function ti(t, e, i) {
        return Math.max(Math.min(t, i), e)
      }
      function ei(t, e, i, n, s) {
        let o, r, a, l
        if ((e.spanGaps && (t = t.filter((t) => !t.skip)), 'monotone' === e.cubicInterpolationMode))
          Qe(t, s)
        else {
          let i = n ? t[t.length - 1] : t[0]
          for (o = 0, r = t.length; o < r; ++o)
            (a = t[o]),
              (l = Je(i, a, t[Math.min(o + 1, r - (n ? 0 : 1)) % r], e.tension)),
              (a.cp1x = l.previous.x),
              (a.cp1y = l.previous.y),
              (a.cp2x = l.next.x),
              (a.cp2y = l.next.y),
              (i = a)
        }
        e.capBezierPoints &&
          (function (t, e) {
            let i,
              n,
              s,
              o,
              r,
              a = ge(t[0], e)
            for (i = 0, n = t.length; i < n; ++i)
              (r = o),
                (o = a),
                (a = i < n - 1 && ge(t[i + 1], e)),
                o &&
                  ((s = t[i]),
                  r &&
                    ((s.cp1x = ti(s.cp1x, e.left, e.right)),
                    (s.cp1y = ti(s.cp1y, e.top, e.bottom))),
                  a &&
                    ((s.cp2x = ti(s.cp2x, e.left, e.right)),
                    (s.cp2y = ti(s.cp2y, e.top, e.bottom))))
          })(t, i)
      }
      function ii() {
        return 'undefined' !== typeof window && 'undefined' !== typeof document
      }
      function ni(t) {
        let e = t.parentNode
        return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
      }
      function si(t, e, i) {
        let n
        return (
          'string' === typeof t
            ? ((n = parseInt(t, 10)), -1 !== t.indexOf('%') && (n = (n / 100) * e.parentNode[i]))
            : (n = t),
          n
        )
      }
      const oi = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null)
      const ri = ['top', 'right', 'bottom', 'left']
      function ai(t, e, i) {
        const n = {}
        i = i ? '-' + i : ''
        for (let s = 0; s < 4; s++) {
          const o = ri[s]
          n[o] = parseFloat(t[e + '-' + o + i]) || 0
        }
        return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n
      }
      const li = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot)
      function hi(t, e) {
        if ('native' in t) return t
        const { canvas: i, currentDevicePixelRatio: n } = e,
          s = oi(i),
          o = 'border-box' === s.boxSizing,
          r = ai(s, 'padding'),
          a = ai(s, 'border', 'width'),
          {
            x: l,
            y: h,
            box: c,
          } = (function (t, e) {
            const i = t.touches,
              n = i && i.length ? i[0] : t,
              { offsetX: s, offsetY: o } = n
            let r,
              a,
              l = !1
            if (li(s, o, t.target)) (r = s), (a = o)
            else {
              const t = e.getBoundingClientRect()
              ;(r = n.clientX - t.left), (a = n.clientY - t.top), (l = !0)
            }
            return { x: r, y: a, box: l }
          })(t, i),
          d = r.left + (c && a.left),
          u = r.top + (c && a.top)
        let { width: f, height: p } = e
        return (
          o && ((f -= r.width + a.width), (p -= r.height + a.height)),
          {
            x: Math.round((((l - d) / f) * i.width) / n),
            y: Math.round((((h - u) / p) * i.height) / n),
          }
        )
      }
      const ci = (t) => Math.round(10 * t) / 10
      function di(t, e, i, n) {
        const s = oi(t),
          o = ai(s, 'margin'),
          r = si(s.maxWidth, t, 'clientWidth') || dt,
          a = si(s.maxHeight, t, 'clientHeight') || dt,
          l = (function (t, e, i) {
            let n, s
            if (void 0 === e || void 0 === i) {
              const o = ni(t)
              if (o) {
                const t = o.getBoundingClientRect(),
                  r = oi(o),
                  a = ai(r, 'border', 'width'),
                  l = ai(r, 'padding')
                ;(e = t.width - l.width - a.width),
                  (i = t.height - l.height - a.height),
                  (n = si(r.maxWidth, o, 'clientWidth')),
                  (s = si(r.maxHeight, o, 'clientHeight'))
              } else (e = t.clientWidth), (i = t.clientHeight)
            }
            return { width: e, height: i, maxWidth: n || dt, maxHeight: s || dt }
          })(t, e, i)
        let { width: h, height: c } = l
        if ('content-box' === s.boxSizing) {
          const t = ai(s, 'border', 'width'),
            e = ai(s, 'padding')
          ;(h -= e.width + t.width), (c -= e.height + t.height)
        }
        ;(h = Math.max(0, h - o.width)),
          (c = Math.max(0, n ? h / n : c - o.height)),
          (h = ci(Math.min(h, r, l.maxWidth))),
          (c = ci(Math.min(c, a, l.maxHeight))),
          h && !c && (c = ci(h / 2))
        return (
          (void 0 !== e || void 0 !== i) &&
            n &&
            l.height &&
            c > l.height &&
            ((c = l.height), (h = ci(Math.floor(c * n)))),
          { width: h, height: c }
        )
      }
      function ui(t, e, i) {
        const n = e || 1,
          s = Math.floor(t.height * n),
          o = Math.floor(t.width * n)
        ;(t.height = Math.floor(t.height)), (t.width = Math.floor(t.width))
        const r = t.canvas
        return (
          r.style &&
            (i || (!r.style.height && !r.style.width)) &&
            ((r.style.height = ''.concat(t.height, 'px')),
            (r.style.width = ''.concat(t.width, 'px'))),
          (t.currentDevicePixelRatio !== n || r.height !== s || r.width !== o) &&
            ((t.currentDevicePixelRatio = n),
            (r.height = s),
            (r.width = o),
            t.ctx.setTransform(n, 0, 0, n, 0, 0),
            !0)
        )
      }
      const fi = (function () {
        let t = !1
        try {
          const e = {
            get passive() {
              return (t = !0), !1
            },
          }
          ii() &&
            (window.addEventListener('test', null, e), window.removeEventListener('test', null, e))
        } catch (e) {}
        return t
      })()
      function pi(t, e) {
        const i = (function (t, e) {
            return oi(t).getPropertyValue(e)
          })(t, e),
          n = i && i.match(/^(\d+)(\.\d+)?px$/)
        return n ? +n[1] : void 0
      }
      function gi(t, e, i, n) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) }
      }
      function mi(t, e, i, n) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            'middle' === n
              ? i < 0.5
                ? t.y
                : e.y
              : 'after' === n
                ? i < 1
                  ? t.y
                  : e.y
                : i > 0
                  ? e.y
                  : t.y,
        }
      }
      function bi(t, e, i, n) {
        const s = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          r = gi(t, s, i),
          a = gi(s, o, i),
          l = gi(o, e, i),
          h = gi(r, a, i),
          c = gi(a, l, i)
        return gi(h, c, i)
      }
      function xi(t, e, i) {
        return t
          ? (function (t, e) {
              return {
                x: (i) => t + t + e - i,
                setWidth(t) {
                  e = t
                },
                textAlign: (t) => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              }
            })(e, i)
          : {
              x: (t) => t,
              setWidth(t) {},
              textAlign: (t) => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            }
      }
      function yi(t, e) {
        let i, n
        ;('ltr' !== e && 'rtl' !== e) ||
          ((i = t.canvas.style),
          (n = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
          i.setProperty('direction', e, 'important'),
          (t.prevTextDirection = n))
      }
      function vi(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]))
      }
      function _i(t) {
        return 'angle' === t
          ? { between: Dt, compare: Pt, normalize: Ct }
          : { between: Tt, compare: (t, e) => t - e, normalize: (t) => t }
      }
      function wi(t) {
        let { start: e, end: i, count: n, loop: s, style: o } = t
        return { start: e % n, end: i % n, loop: s && (i - e + 1) % n === 0, style: o }
      }
      function Mi(t, e, i) {
        if (!i) return [t]
        const { property: n, start: s, end: o } = i,
          r = e.length,
          { compare: a, between: l, normalize: h } = _i(n),
          {
            start: c,
            end: d,
            loop: u,
            style: f,
          } = (function (t, e, i) {
            const { property: n, start: s, end: o } = i,
              { between: r, normalize: a } = _i(n),
              l = e.length
            let h,
              c,
              { start: d, end: u, loop: f } = t
            if (f) {
              for (d += l, u += l, h = 0, c = l; h < c && r(a(e[d % l][n]), s, o); ++h) d--, u--
              ;(d %= l), (u %= l)
            }
            return u < d && (u += l), { start: d, end: u, loop: f, style: t.style }
          })(t, e, i),
          p = []
        let g,
          m,
          b,
          x = !1,
          y = null
        const v = () => x || (l(s, b, g) && 0 !== a(s, b)),
          _ = () => !x || 0 === a(o, g) || l(o, b, g)
        for (let w = c, M = c; w <= d; ++w)
          (m = e[w % r]),
            m.skip ||
              ((g = h(m[n])),
              g !== b &&
                ((x = l(g, s, o)),
                null === y && v() && (y = 0 === a(g, s) ? w : M),
                null !== y &&
                  _() &&
                  (p.push(wi({ start: y, end: w, loop: u, count: r, style: f })), (y = null)),
                (M = w),
                (b = g)))
        return null !== y && p.push(wi({ start: y, end: d, loop: u, count: r, style: f })), p
      }
      function ki(t, e) {
        const i = [],
          n = t.segments
        for (let s = 0; s < n.length; s++) {
          const o = Mi(n[s], t.points, e)
          o.length && i.push(...o)
        }
        return i
      }
      function Si(t, e, i, n) {
        return n && n.setContext && i
          ? (function (t, e, i, n) {
              const s = t._chart.getContext(),
                o = Oi(t.options),
                {
                  _datasetIndex: r,
                  options: { spanGaps: a },
                } = t,
                l = i.length,
                h = []
              let c = o,
                d = e[0].start,
                u = d
              function f(t, e, n, s) {
                const o = a ? -1 : 1
                if (t !== e) {
                  for (t += l; i[t % l].skip; ) t -= o
                  for (; i[e % l].skip; ) e += o
                  t % l !== e % l &&
                    (h.push({ start: t % l, end: e % l, loop: n, style: s }), (c = s), (d = e % l))
                }
              }
              for (const p of e) {
                d = a ? d : p.start
                let t,
                  e = i[d % l]
                for (u = d + 1; u <= p.end; u++) {
                  const o = i[u % l]
                  ;(t = Oi(
                    n.setContext(
                      Re(s, {
                        type: 'segment',
                        p0: e,
                        p1: o,
                        p0DataIndex: (u - 1) % l,
                        p1DataIndex: u % l,
                        datasetIndex: r,
                      }),
                    ),
                  )),
                    Pi(t, c) && f(d, u - 1, p.loop, c),
                    (e = o),
                    (c = t)
                }
                d < u - 1 && f(d, u - 1, p.loop, c)
              }
              return h
            })(t, e, i, n)
          : e
      }
      function Oi(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        }
      }
      function Pi(t, e) {
        if (!e) return !1
        const i = [],
          n = function (t, e) {
            return Xt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e
          }
        return JSON.stringify(t, n) !== JSON.stringify(e, n)
      }
      class Ci {
        constructor() {
          ;(this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0)
        }
        _notify(t, e, i, n) {
          const s = e.listeners[n],
            o = e.duration
          s.forEach((n) =>
            n({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }),
          )
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = Ft.call(window, () => {
              this._update(), (this._request = null), this._running && this._refresh()
            })))
        }
        _update() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
            e = 0
          this._charts.forEach((i, n) => {
            if (!i.running || !i.items.length) return
            const s = i.items
            let o,
              r = s.length - 1,
              a = !1
            for (; r >= 0; --r)
              (o = s[r]),
                o._active
                  ? (o._total > i.duration && (i.duration = o._total), o.tick(t), (a = !0))
                  : ((s[r] = s[s.length - 1]), s.pop())
            a && (n.draw(), this._notify(n, i, t, 'progress')),
              s.length || ((i.running = !1), this._notify(n, i, t, 'complete'), (i.initial = !1)),
              (e += s.length)
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1)
        }
        _getAnims(t) {
          const e = this._charts
          let i = e.get(t)
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, i)),
            i
          )
        }
        listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i)
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e)
        }
        has(t) {
          return this._getAnims(t).items.length > 0
        }
        start(t) {
          const e = this._charts.get(t)
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
            this._refresh())
        }
        running(t) {
          if (!this._running) return !1
          const e = this._charts.get(t)
          return !!(e && e.running && e.items.length)
        }
        stop(t) {
          const e = this._charts.get(t)
          if (!e || !e.items.length) return
          const i = e.items
          let n = i.length - 1
          for (; n >= 0; --n) i[n].cancel()
          ;(e.items = []), this._notify(t, e, Date.now(), 'complete')
        }
        remove(t) {
          return this._charts.delete(t)
        }
      }
      var Di = new Ci()
      const Ai = 'transparent',
        Ti = {
          boolean: (t, e, i) => (i > 0.5 ? e : t),
          color(t, e, i) {
            const n = qt(t || Ai),
              s = n.valid && qt(e || Ai)
            return s && s.valid ? s.mix(n, i).hexString() : e
          },
          number: (t, e, i) => t + (e - t) * i,
        }
      class Ei {
        constructor(t, e, i, n) {
          const s = e[i]
          n = Le([t.to, n, s, t.from])
          const o = Le([t.from, s, n])
          ;(this._active = !0),
            (this._fn = t.fn || Ti[t.type || typeof o]),
            (this._easing = $t[t.easing] || $t.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = i),
            (this._from = o),
            (this._to = n),
            (this._promises = void 0)
        }
        active() {
          return this._active
        }
        update(t, e, i) {
          if (this._active) {
            this._notify(!1)
            const n = this._target[this._prop],
              s = i - this._start,
              o = this._duration - s
            ;(this._start = i),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += s),
              (this._loop = !!t.loop),
              (this._to = Le([t.to, e, n, t.from])),
              (this._from = Le([t.from, n, e]))
          }
        }
        cancel() {
          this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1))
        }
        tick(t) {
          const e = t - this._start,
            i = this._duration,
            n = this._prop,
            s = this._from,
            o = this._loop,
            r = this._to
          let a
          if (((this._active = s !== r && (o || e < i)), !this._active))
            return (this._target[n] = r), void this._notify(!0)
          e < 0
            ? (this._target[n] = s)
            : ((a = (e / i) % 2),
              (a = o && a > 1 ? 2 - a : a),
              (a = this._easing(Math.min(1, Math.max(0, a)))),
              (this._target[n] = this._fn(s, r, a)))
        }
        wait() {
          const t = this._promises || (this._promises = [])
          return new Promise((e, i) => {
            t.push({ res: e, rej: i })
          })
        }
        _notify(t) {
          const e = t ? 'res' : 'rej',
            i = this._promises || []
          for (let n = 0; n < i.length; n++) i[n][e]()
        }
      }
      class Li {
        constructor(t, e) {
          ;(this._chart = t), (this._properties = new Map()), this.configure(e)
        }
        configure(t) {
          if (!W(t)) return
          const e = Object.keys(le.animation),
            i = this._properties
          Object.getOwnPropertyNames(t).forEach((n) => {
            const s = t[n]
            if (!W(s)) return
            const o = {}
            for (const t of e) o[t] = s[t]
            ;((B(s.properties) && s.properties) || [n]).forEach((t) => {
              ;(t !== n && i.has(t)) || i.set(t, o)
            })
          })
        }
        _animateOptions(t, e) {
          const i = e.options,
            n = (function (t, e) {
              if (!e) return
              let i = t.options
              if (!i) return void (t.options = e)
              i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} }))
              return i
            })(t, i)
          if (!n) return []
          const s = this._createAnimations(n, i)
          return (
            i.$shared &&
              (function (t, e) {
                const i = [],
                  n = Object.keys(e)
                for (let s = 0; s < n.length; s++) {
                  const e = t[n[s]]
                  e && e.active() && i.push(e.wait())
                }
                return Promise.all(i)
              })(t.options.$animations, i).then(
                () => {
                  t.options = i
                },
                () => {},
              ),
            s
          )
        }
        _createAnimations(t, e) {
          const i = this._properties,
            n = [],
            s = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            r = Date.now()
          let a
          for (a = o.length - 1; a >= 0; --a) {
            const l = o[a]
            if ('$' === l.charAt(0)) continue
            if ('options' === l) {
              n.push(...this._animateOptions(t, e))
              continue
            }
            const h = e[l]
            let c = s[l]
            const d = i.get(l)
            if (c) {
              if (d && c.active()) {
                c.update(d, h, r)
                continue
              }
              c.cancel()
            }
            d && d.duration ? ((s[l] = c = new Ei(d, t, l, h)), n.push(c)) : (t[l] = h)
          }
          return n
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e)
          const i = this._createAnimations(t, e)
          return i.length ? (Di.add(this._chart, i), !0) : void 0
        }
      }
      function Ri(t, e) {
        const i = (t && t.options) || {},
          n = i.reverse,
          s = void 0 === i.min ? e : 0,
          o = void 0 === i.max ? e : 0
        return { start: n ? o : s, end: n ? s : o }
      }
      function Ii(t, e) {
        const i = [],
          n = t._getSortedDatasetMetas(e)
        let s, o
        for (s = 0, o = n.length; s < o; ++s) i.push(n[s].index)
        return i
      }
      function zi(t, e, i) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        const s = t.keys,
          o = 'single' === n.mode
        let r, a, l, h
        if (null !== e) {
          for (r = 0, a = s.length; r < a; ++r) {
            if (((l = +s[r]), l === i)) {
              if (n.all) continue
              break
            }
            ;(h = t.values[l]), H(h) && (o || 0 === e || bt(e) === bt(h)) && (e += h)
          }
          return e
        }
      }
      function ji(t, e) {
        const i = t && t.options.stacked
        return i || (void 0 === i && void 0 !== e.stack)
      }
      function Fi(t, e, i) {
        const n = t[e] || (t[e] = {})
        return n[i] || (n[i] = {})
      }
      function Ni(t, e, i, n) {
        for (const s of e.getMatchingVisibleMetas(n).reverse()) {
          const e = t[s.index]
          if ((i && e > 0) || (!i && e < 0)) return s.index
        }
        return null
      }
      function Vi(t, e) {
        const { chart: i, _cachedMeta: n } = t,
          s = i._stacks || (i._stacks = {}),
          { iScale: o, vScale: r, index: a } = n,
          l = o.axis,
          h = r.axis,
          c = (function (t, e, i) {
            return ''
              .concat(t.id, '.')
              .concat(e.id, '.')
              .concat(i.stack || i.type)
          })(o, r, n),
          d = e.length
        let u
        for (let f = 0; f < d; ++f) {
          const t = e[f],
            { [l]: i, [h]: o } = t
          ;(u = (t._stacks || (t._stacks = {}))[h] = Fi(s, c, i)),
            (u[a] = o),
            (u._top = Ni(u, r, !0, n.type)),
            (u._bottom = Ni(u, r, !1, n.type))
          ;(u._visualValues || (u._visualValues = {}))[a] = o
        }
      }
      function Bi(t, e) {
        const i = t.scales
        return Object.keys(i)
          .filter((t) => i[t].axis === e)
          .shift()
      }
      function Wi(t, e) {
        const i = t.controller.index,
          n = t.vScale && t.vScale.axis
        if (n) {
          e = e || t._parsed
          for (const t of e) {
            const e = t._stacks
            if (!e || void 0 === e[n] || void 0 === e[n][i]) return
            delete e[n][i],
              void 0 !== e[n]._visualValues &&
                void 0 !== e[n]._visualValues[i] &&
                delete e[n]._visualValues[i]
          }
        }
      }
      const Hi = (t) => 'reset' === t || 'none' === t,
        Zi = (t, e) => (e ? t : Object.assign({}, t))
      class Yi {
        constructor(t, e) {
          ;(this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize()
        }
        initialize() {
          const t = this._cachedMeta
          this.configure(),
            this.linkScales(),
            (t._stacked = ji(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled('filler') &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
              )
        }
        updateIndex(t) {
          this.index !== t && Wi(this._cachedMeta), (this.index = t)
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            n = (t, e, i, n) => ('x' === t ? e : 'r' === t ? n : i),
            s = (e.xAxisID = Y(i.xAxisID, Bi(t, 'x'))),
            o = (e.yAxisID = Y(i.yAxisID, Bi(t, 'y'))),
            r = (e.rAxisID = Y(i.rAxisID, Bi(t, 'r'))),
            a = e.indexAxis,
            l = (e.iAxisID = n(a, s, o, r)),
            h = (e.vAxisID = n(a, o, s, r))
          ;(e.xScale = this.getScaleForId(s)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(r)),
            (e.iScale = this.getScaleForId(l)),
            (e.vScale = this.getScaleForId(h))
        }
        getDataset() {
          return this.chart.data.datasets[this.index]
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
          return this.chart.scales[t]
        }
        _getOtherScale(t) {
          const e = this._cachedMeta
          return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
          this._update('reset')
        }
        _destroy() {
          const t = this._cachedMeta
          this._data && zt(this._data, this), t._stacked && Wi(t)
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data
          if (W(e))
            this._data = (function (t) {
              const e = Object.keys(t),
                i = new Array(e.length)
              let n, s, o
              for (n = 0, s = e.length; n < s; ++n) (o = e[n]), (i[n] = { x: o, y: t[o] })
              return i
            })(e)
          else if (i !== e) {
            if (i) {
              zt(i, this)
              const t = this._cachedMeta
              Wi(t), (t._parsed = [])
            }
            e &&
              Object.isExtensible(e) &&
              ((s = this),
              (n = e)._chartjs
                ? n._chartjs.listeners.push(s)
                : (Object.defineProperty(n, '_chartjs', {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [s] },
                  }),
                  It.forEach((t) => {
                    const e = '_onData' + st(t),
                      i = n[t]
                    Object.defineProperty(n, t, {
                      configurable: !0,
                      enumerable: !1,
                      value() {
                        for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
                          s[o] = arguments[o]
                        const r = i.apply(this, s)
                        return (
                          n._chartjs.listeners.forEach((t) => {
                            'function' === typeof t[e] && t[e](...s)
                          }),
                          r
                        )
                      },
                    })
                  }))),
              (this._syncList = []),
              (this._data = e)
          }
          var n, s
        }
        addElements() {
          const t = this._cachedMeta
          this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType())
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            i = this.getDataset()
          let n = !1
          this._dataCheck()
          const s = e._stacked
          ;(e._stacked = ji(e.vScale, e)),
            e.stack !== i.stack && ((n = !0), Wi(e), (e.stack = i.stack)),
            this._resyncElements(t),
            (n || s !== e._stacked) && Vi(this, e._parsed)
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0)
          ;(this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {})
        }
        parse(t, e) {
          const { _cachedMeta: i, _data: n } = this,
            { iScale: s, _stacked: o } = i,
            r = s.axis
          let a,
            l,
            h,
            c = (0 === t && e === n.length) || i._sorted,
            d = t > 0 && i._parsed[t - 1]
          if (!1 === this._parsing) (i._parsed = n), (i._sorted = !0), (h = n)
          else {
            h = B(n[t])
              ? this.parseArrayData(i, n, t, e)
              : W(n[t])
                ? this.parseObjectData(i, n, t, e)
                : this.parsePrimitiveData(i, n, t, e)
            const s = () => null === l[r] || (d && l[r] < d[r])
            for (a = 0; a < e; ++a) (i._parsed[a + t] = l = h[a]), c && (s() && (c = !1), (d = l))
            i._sorted = c
          }
          o && Vi(this, h)
        }
        parsePrimitiveData(t, e, i, n) {
          const { iScale: s, vScale: o } = t,
            r = s.axis,
            a = o.axis,
            l = s.getLabels(),
            h = s === o,
            c = new Array(n)
          let d, u, f
          for (d = 0, u = n; d < u; ++d)
            (f = d + i), (c[d] = { [r]: h || s.parse(l[f], f), [a]: o.parse(e[f], f) })
          return c
        }
        parseArrayData(t, e, i, n) {
          const { xScale: s, yScale: o } = t,
            r = new Array(n)
          let a, l, h, c
          for (a = 0, l = n; a < l; ++a)
            (h = a + i), (c = e[h]), (r[a] = { x: s.parse(c[0], h), y: o.parse(c[1], h) })
          return r
        }
        parseObjectData(t, e, i, n) {
          const { xScale: s, yScale: o } = t,
            { xAxisKey: r = 'x', yAxisKey: a = 'y' } = this._parsing,
            l = new Array(n)
          let h, c, d, u
          for (h = 0, c = n; h < c; ++h)
            (d = h + i), (u = e[d]), (l[h] = { x: s.parse(nt(u, r), d), y: o.parse(nt(u, a), d) })
          return l
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t]
        }
        getDataElement(t) {
          return this._cachedMeta.data[t]
        }
        applyStack(t, e, i) {
          const n = this.chart,
            s = this._cachedMeta,
            o = e[t.axis]
          return zi({ keys: Ii(n, !0), values: e._stacks[t.axis]._visualValues }, o, s.index, {
            mode: i,
          })
        }
        updateRangeFromParsed(t, e, i, n) {
          const s = i[e.axis]
          let o = null === s ? NaN : s
          const r = n && i._stacks[e.axis]
          n && r && ((n.values = r), (o = zi(n, s, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o))
        }
        getMinMax(t, e) {
          const i = this._cachedMeta,
            n = i._parsed,
            s = i._sorted && t === i.iScale,
            o = n.length,
            r = this._getOtherScale(t),
            a = ((t, e, i) => t && !e.hidden && e._stacked && { keys: Ii(i, !0), values: null })(
              e,
              i,
              this.chart,
            ),
            l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: h, max: c } = (function (t) {
              const { min: e, max: i, minDefined: n, maxDefined: s } = t.getUserBounds()
              return {
                min: n ? e : Number.NEGATIVE_INFINITY,
                max: s ? i : Number.POSITIVE_INFINITY,
              }
            })(r)
          let d, u
          function f() {
            u = n[d]
            const e = u[r.axis]
            return !H(u[t.axis]) || h > e || c < e
          }
          for (d = 0; d < o && (f() || (this.updateRangeFromParsed(l, t, u, a), !s)); ++d);
          if (s)
            for (d = o - 1; d >= 0; --d)
              if (!f()) {
                this.updateRangeFromParsed(l, t, u, a)
                break
              }
          return l
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            i = []
          let n, s, o
          for (n = 0, s = e.length; n < s; ++n) (o = e[n][t.axis]), H(o) && i.push(o)
          return i
        }
        getMaxOverflow() {
          return !1
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            s = this.getParsed(t)
          return {
            label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
            value: n ? '' + n.getLabelForValue(s[n.axis]) : '',
          }
        }
        _update(t) {
          const e = this._cachedMeta
          this.update(t || 'default'),
            (e._clip = (function (t) {
              let e, i, n, s
              return (
                W(t)
                  ? ((e = t.top), (i = t.right), (n = t.bottom), (s = t.left))
                  : (e = i = n = s = t),
                { top: e, right: i, bottom: n, left: s, disabled: !1 === t }
              )
            })(
              Y(
                this.options.clip,
                (function (t, e, i) {
                  if (!1 === i) return !1
                  const n = Ri(t, i),
                    s = Ri(e, i)
                  return { top: s.end, right: n.end, bottom: s.start, left: n.start }
                })(e.xScale, e.yScale, this.getMaxOverflow()),
              ),
            ))
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            n = i.data || [],
            s = e.chartArea,
            o = [],
            r = this._drawStart || 0,
            a = this._drawCount || n.length - r,
            l = this.options.drawActiveElementsOnTop
          let h
          for (i.dataset && i.dataset.draw(t, s, r, a), h = r; h < r + a; ++h) {
            const e = n[h]
            e.hidden || (e.active && l ? o.push(e) : e.draw(t, s))
          }
          for (h = 0; h < o.length; ++h) o[h].draw(t, s)
        }
        getStyle(t, e) {
          const i = e ? 'active' : 'default'
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i)
        }
        getContext(t, e, i) {
          const n = this.getDataset()
          let s
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t]
            ;(s =
              e.$context ||
              (e.$context = (function (t, e, i) {
                return Re(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: i,
                  index: e,
                  mode: 'default',
                  type: 'data',
                })
              })(this.getContext(), t, e))),
              (s.parsed = this.getParsed(t)),
              (s.raw = n.data[t]),
              (s.index = s.dataIndex = t)
          } else
            (s =
              this.$context ||
              (this.$context = (function (t, e) {
                return Re(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: 'default',
                  type: 'dataset',
                })
              })(this.chart.getContext(), this.index))),
              (s.dataset = n),
              (s.index = s.datasetIndex = this.index)
          return (s.active = !!e), (s.mode = i), s
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default',
            i = arguments.length > 2 ? arguments[2] : void 0
          const n = 'active' === e,
            s = this._cachedDataOpts,
            o = t + '-' + e,
            r = s[o],
            a = this.enableOptionSharing && ot(i)
          if (r) return Zi(r, a)
          const l = this.chart.config,
            h = l.datasetElementScopeKeys(this._type, t),
            c = n ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
            d = l.getOptionScopes(this.getDataset(), h),
            u = Object.keys(le.elements[t]),
            f = l.resolveNamedOptions(d, u, () => this.getContext(i, n, e), c)
          return f.$shared && ((f.$shared = a), (s[o] = Object.freeze(Zi(f, a)))), f
        }
        _resolveAnimations(t, e, i) {
          const n = this.chart,
            s = this._cachedDataOpts,
            o = 'animation-'.concat(e),
            r = s[o]
          if (r) return r
          let a
          if (!1 !== n.options.animation) {
            const n = this.chart.config,
              s = n.datasetAnimationScopeKeys(this._type, e),
              o = n.getOptionScopes(this.getDataset(), s)
            a = n.createResolver(o, this.getContext(t, i, e))
          }
          const l = new Li(n, a && a.animations)
          return a && a._cacheable && (s[o] = Object.freeze(l)), l
        }
        getSharedOptions(t) {
          if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }
        includeOptions(t, e) {
          return !e || Hi(t) || this.chart._animationsDisabled
        }
        _getSharedOptions(t, e) {
          const i = this.resolveDataElementOptions(t, e),
            n = this._sharedOptions,
            s = this.getSharedOptions(i),
            o = this.includeOptions(e, s) || s !== n
          return this.updateSharedOptions(s, e, i), { sharedOptions: s, includeOptions: o }
        }
        updateElement(t, e, i, n) {
          Hi(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
        }
        updateSharedOptions(t, e, i) {
          t && !Hi(e) && this._resolveAnimations(void 0, e).update(t, i)
        }
        _setStyle(t, e, i, n) {
          t.active = n
          const s = this.getStyle(e, n)
          this._resolveAnimations(e, i, n).update(t, {
            options: (!n && this.getSharedOptions(s)) || s,
          })
        }
        removeHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !1)
        }
        setHoverStyle(t, e, i) {
          this._setStyle(t, i, 'active', !0)
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset
          t && this._setStyle(t, void 0, 'active', !1)
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset
          t && this._setStyle(t, void 0, 'active', !0)
        }
        _resyncElements(t) {
          const e = this._data,
            i = this._cachedMeta.data
          for (const [r, a, l] of this._syncList) this[r](a, l)
          this._syncList = []
          const n = i.length,
            s = e.length,
            o = Math.min(s, n)
          o && this.parse(0, o),
            s > n ? this._insertElements(n, s - n, t) : s < n && this._removeElements(s, n - s)
        }
        _insertElements(t, e) {
          let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          const n = this._cachedMeta,
            s = n.data,
            o = t + e
          let r
          const a = (t) => {
            for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e]
          }
          for (a(s), r = t; r < o; ++r) s[r] = new this.dataElementType()
          this._parsing && a(n._parsed),
            this.parse(t, e),
            i && this.updateElements(s, t, e, 'reset')
        }
        updateElements(t, e, i, n) {}
        _removeElements(t, e) {
          const i = this._cachedMeta
          if (this._parsing) {
            const n = i._parsed.splice(t, e)
            i._stacked && Wi(i, n)
          }
          i.data.splice(t, e)
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t)
          else {
            const [e, i, n] = t
            this[e](i, n)
          }
          this.chart._dataChanges.push([this.index, ...t])
        }
        _onDataPush() {
          const t = arguments.length
          this._sync(['_insertElements', this.getDataset().data.length - t, t])
        }
        _onDataPop() {
          this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
        }
        _onDataShift() {
          this._sync(['_removeElements', 0, 1])
        }
        _onDataSplice(t, e) {
          e && this._sync(['_removeElements', t, e])
          const i = arguments.length - 2
          i && this._sync(['_insertElements', t, i])
        }
        _onDataUnshift() {
          this._sync(['_insertElements', 0, arguments.length])
        }
      }
      function Ui(t) {
        const e = t.iScale,
          i = (function (t, e) {
            if (!t._cache.$bar) {
              const i = t.getMatchingVisibleMetas(e)
              let n = []
              for (let e = 0, s = i.length; e < s; e++)
                n = n.concat(i[e].controller.getAllParsedValues(t))
              t._cache.$bar = jt(n.sort((t, e) => t - e))
            }
            return t._cache.$bar
          })(e, t.type)
        let n,
          s,
          o,
          r,
          a = e._length
        const l = () => {
          32767 !== o && -32768 !== o && (ot(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o))
        }
        for (n = 0, s = i.length; n < s; ++n) (o = e.getPixelForValue(i[n])), l()
        for (r = void 0, n = 0, s = e.ticks.length; n < s; ++n) (o = e.getPixelForTick(n)), l()
        return a
      }
      function $i(t, e, i, n) {
        return (
          B(t)
            ? (function (t, e, i, n) {
                const s = i.parse(t[0], n),
                  o = i.parse(t[1], n),
                  r = Math.min(s, o),
                  a = Math.max(s, o)
                let l = r,
                  h = a
                Math.abs(r) > Math.abs(a) && ((l = a), (h = r)),
                  (e[i.axis] = h),
                  (e._custom = { barStart: l, barEnd: h, start: s, end: o, min: r, max: a })
              })(t, e, i, n)
            : (e[i.axis] = i.parse(t, n)),
          e
        )
      }
      function Xi(t, e, i, n) {
        const s = t.iScale,
          o = t.vScale,
          r = s.getLabels(),
          a = s === o,
          l = []
        let h, c, d, u
        for (h = i, c = i + n; h < c; ++h)
          (u = e[h]), (d = {}), (d[s.axis] = a || s.parse(r[h], h)), l.push($i(u, d, o, h))
        return l
      }
      function qi(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
      }
      function Ki(t, e, i, n) {
        let s = e.borderSkipped
        const o = {}
        if (!s) return void (t.borderSkipped = o)
        if (!0 === s) return void (t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 })
        const {
          start: r,
          end: a,
          reverse: l,
          top: h,
          bottom: c,
        } = (function (t) {
          let e, i, n, s, o
          return (
            t.horizontal
              ? ((e = t.base > t.x), (i = 'left'), (n = 'right'))
              : ((e = t.base < t.y), (i = 'bottom'), (n = 'top')),
            e ? ((s = 'end'), (o = 'start')) : ((s = 'start'), (o = 'end')),
            { start: i, end: n, reverse: e, top: s, bottom: o }
          )
        })(t)
        'middle' === s &&
          i &&
          ((t.enableBorderRadius = !0),
          (i._top || 0) === n
            ? (s = h)
            : (i._bottom || 0) === n
              ? (s = c)
              : ((o[Gi(c, r, a, l)] = !0), (s = h))),
          (o[Gi(s, r, a, l)] = !0),
          (t.borderSkipped = o)
      }
      function Gi(t, e, i, n) {
        var s, o, r
        return (
          n
            ? ((r = i), (t = Ji((t = (s = t) === (o = e) ? r : s === r ? o : s), i, e)))
            : (t = Ji(t, e, i)),
          t
        )
      }
      function Ji(t, e, i) {
        return 'start' === t ? e : 'end' === t ? i : t
      }
      function Qi(t, e, i) {
        let { inflateAmount: n } = e
        t.inflateAmount = 'auto' === n ? (1 === i ? 0.33 : 0) : n
      }
      ;(0, s.Z)(Yi, 'defaults', {}),
        (0, s.Z)(Yi, 'datasetElementType', null),
        (0, s.Z)(Yi, 'dataElementType', null)
      class tn extends Yi {
        parsePrimitiveData(t, e, i, n) {
          return Xi(t, e, i, n)
        }
        parseArrayData(t, e, i, n) {
          return Xi(t, e, i, n)
        }
        parseObjectData(t, e, i, n) {
          const { iScale: s, vScale: o } = t,
            { xAxisKey: r = 'x', yAxisKey: a = 'y' } = this._parsing,
            l = 'x' === s.axis ? r : a,
            h = 'x' === o.axis ? r : a,
            c = []
          let d, u, f, p
          for (d = i, u = i + n; d < u; ++d)
            (p = e[d]), (f = {}), (f[s.axis] = s.parse(nt(p, l), d)), c.push($i(nt(p, h), f, o, d))
          return c
        }
        updateRangeFromParsed(t, e, i, n) {
          super.updateRangeFromParsed(t, e, i, n)
          const s = i._custom
          s &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)))
        }
        getMaxOverflow() {
          return 0
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: i, vScale: n } = e,
            s = this.getParsed(t),
            o = s._custom,
            r = qi(o) ? '[' + o.start + ', ' + o.end + ']' : '' + n.getLabelForValue(s[n.axis])
          return { label: '' + i.getLabelForValue(s[i.axis]), value: r }
        }
        initialize() {
          ;(this.enableOptionSharing = !0), super.initialize()
          this._cachedMeta.stack = this.getDataset().stack
        }
        update(t) {
          const e = this._cachedMeta
          this.updateElements(e.data, 0, e.data.length, t)
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            {
              index: o,
              _cachedMeta: { vScale: r },
            } = this,
            a = r.getBasePixel(),
            l = r.isHorizontal(),
            h = this._getRuler(),
            { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, n)
          for (let u = e; u < e + i; u++) {
            const e = this.getParsed(u),
              i = s || V(e[r.axis]) ? { base: a, head: a } : this._calculateBarValuePixels(u),
              f = this._calculateBarIndexPixels(u, h),
              p = (e._stacks || {})[r.axis],
              g = {
                horizontal: l,
                base: i.base,
                enableBorderRadius: !p || qi(e._custom) || o === p._top || o === p._bottom,
                x: l ? i.head : f.center,
                y: l ? f.center : i.head,
                height: l ? f.size : Math.abs(i.size),
                width: l ? Math.abs(i.size) : f.size,
              }
            d && (g.options = c || this.resolveDataElementOptions(u, t[u].active ? 'active' : n))
            const m = g.options || t[u].options
            Ki(g, m, p, o), Qi(g, m, h.ratio), this.updateElement(t[u], u, g, n)
          }
        }
        _getStacks(t, e) {
          const { iScale: i } = this._cachedMeta,
            n = i.getMatchingVisibleMetas(this._type).filter((t) => t.controller.options.grouped),
            s = i.options.stacked,
            o = [],
            r = (t) => {
              const i = t.controller.getParsed(e),
                n = i && i[t.vScale.axis]
              if (V(n) || isNaN(n)) return !0
            }
          for (const a of n)
            if (
              (void 0 === e || !r(a)) &&
              ((!1 === s || -1 === o.indexOf(a.stack) || (void 0 === s && void 0 === a.stack)) &&
                o.push(a.stack),
              a.index === t)
            )
              break
          return o.length || o.push(void 0), o
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length
        }
        _getStackIndex(t, e, i) {
          const n = this._getStacks(t, i),
            s = void 0 !== e ? n.indexOf(e) : -1
          return -1 === s ? n.length - 1 : s
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            n = []
          let s, o
          for (s = 0, o = e.data.length; s < o; ++s)
            n.push(i.getPixelForValue(this.getParsed(s)[i.axis], s))
          const r = t.barThickness
          return {
            min: r || Ui(e),
            pixels: n,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
          }
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: i, index: n },
              options: { base: s, minBarLength: o },
            } = this,
            r = s || 0,
            a = this.getParsed(t),
            l = a._custom,
            h = qi(l)
          let c,
            d,
            u = a[e.axis],
            f = 0,
            p = i ? this.applyStack(e, a, i) : u
          p !== u && ((f = p - u), (p = u)),
            h &&
              ((u = l.barStart),
              (p = l.barEnd - l.barStart),
              0 !== u && bt(u) !== bt(l.barEnd) && (f = 0),
              (f += u))
          const g = V(s) || h ? f : s
          let m = e.getPixelForValue(g)
          if (
            ((c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m),
            (d = c - m),
            Math.abs(d) < o)
          ) {
            ;(d =
              (function (t, e, i) {
                return 0 !== t ? bt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
              })(d, e, r) * o),
              u === r && (m -= d / 2)
            const t = e.getPixelForDecimal(0),
              s = e.getPixelForDecimal(1),
              l = Math.min(t, s),
              f = Math.max(t, s)
            ;(m = Math.max(Math.min(m, f), l)),
              (c = m + d),
              i &&
                !h &&
                (a._stacks[e.axis]._visualValues[n] = e.getValueForPixel(c) - e.getValueForPixel(m))
          }
          if (m === e.getPixelForValue(r)) {
            const t = (bt(d) * e.getLineWidthForValue(r)) / 2
            ;(m += t), (d -= t)
          }
          return { size: d, base: m, head: c, center: c + d / 2 }
        }
        _calculateBarIndexPixels(t, e) {
          const i = e.scale,
            n = this.options,
            s = n.skipNull,
            o = Y(n.maxBarThickness, 1 / 0)
          let r, a
          if (e.grouped) {
            const i = s ? this._getStackCount(t) : e.stackCount,
              l =
                'flex' === n.barThickness
                  ? (function (t, e, i, n) {
                      const s = e.pixels,
                        o = s[t]
                      let r = t > 0 ? s[t - 1] : null,
                        a = t < s.length - 1 ? s[t + 1] : null
                      const l = i.categoryPercentage
                      null === r && (r = o - (null === a ? e.end - e.start : a - o)),
                        null === a && (a = o + o - r)
                      const h = o - ((o - Math.min(r, a)) / 2) * l
                      return {
                        chunk: ((Math.abs(a - r) / 2) * l) / n,
                        ratio: i.barPercentage,
                        start: h,
                      }
                    })(t, e, n, i)
                  : (function (t, e, i, n) {
                      const s = i.barThickness
                      let o, r
                      return (
                        V(s)
                          ? ((o = e.min * i.categoryPercentage), (r = i.barPercentage))
                          : ((o = s * n), (r = 1)),
                        { chunk: o / n, ratio: r, start: e.pixels[t] - o / 2 }
                      )
                    })(t, e, n, i),
              h = this._getStackIndex(this.index, this._cachedMeta.stack, s ? t : void 0)
            ;(r = l.start + l.chunk * h + l.chunk / 2), (a = Math.min(o, l.chunk * l.ratio))
          } else
            (r = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
              (a = Math.min(o, e.min * e.ratio))
          return { base: r - a / 2, head: r + a / 2, center: r, size: a }
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            n = i.length
          let s = 0
          for (; s < n; ++s) null !== this.getParsed(s)[e.axis] && i[s].draw(this._ctx)
        }
      }
      ;(0, s.Z)(tn, 'id', 'bar'),
        (0, s.Z)(tn, 'defaults', {
          datasetElementType: !1,
          dataElementType: 'bar',
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] },
          },
        }),
        (0, s.Z)(tn, 'overrides', {
          scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
          },
        })
      class en extends Yi {
        initialize() {
          ;(this.enableOptionSharing = !0), super.initialize()
        }
        parsePrimitiveData(t, e, i, n) {
          const s = super.parsePrimitiveData(t, e, i, n)
          for (let o = 0; o < s.length; o++)
            s[o]._custom = this.resolveDataElementOptions(o + i).radius
          return s
        }
        parseArrayData(t, e, i, n) {
          const s = super.parseArrayData(t, e, i, n)
          for (let o = 0; o < s.length; o++) {
            const t = e[i + o]
            s[o]._custom = Y(t[2], this.resolveDataElementOptions(o + i).radius)
          }
          return s
        }
        parseObjectData(t, e, i, n) {
          const s = super.parseObjectData(t, e, i, n)
          for (let o = 0; o < s.length; o++) {
            const t = e[i + o]
            s[o]._custom = Y(t && t.r && +t.r, this.resolveDataElementOptions(o + i).radius)
          }
          return s
        }
        getMaxOverflow() {
          const t = this._cachedMeta.data
          let e = 0
          for (let i = t.length - 1; i >= 0; --i)
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2)
          return e > 0 && e
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: n, yScale: s } = e,
            o = this.getParsed(t),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y),
            l = o._custom
          return { label: i[t] || '', value: '(' + r + ', ' + a + (l ? ', ' + l : '') + ')' }
        }
        update(t) {
          const e = this._cachedMeta.data
          this.updateElements(e, 0, e.length, t)
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: o, vScale: r } = this._cachedMeta,
            { sharedOptions: a, includeOptions: l } = this._getSharedOptions(e, n),
            h = o.axis,
            c = r.axis
          for (let d = e; d < e + i; d++) {
            const e = t[d],
              i = !s && this.getParsed(d),
              u = {},
              f = (u[h] = s ? o.getPixelForDecimal(0.5) : o.getPixelForValue(i[h])),
              p = (u[c] = s ? r.getBasePixel() : r.getPixelForValue(i[c]))
            ;(u.skip = isNaN(f) || isNaN(p)),
              l &&
                ((u.options = a || this.resolveDataElementOptions(d, e.active ? 'active' : n)),
                s && (u.options.radius = 0)),
              this.updateElement(e, d, u, n)
          }
        }
        resolveDataElementOptions(t, e) {
          const i = this.getParsed(t)
          let n = super.resolveDataElementOptions(t, e)
          n.$shared && (n = Object.assign({}, n, { $shared: !1 }))
          const s = n.radius
          return 'active' !== e && (n.radius = 0), (n.radius += Y(i && i._custom, s)), n
        }
      }
      ;(0, s.Z)(en, 'id', 'bubble'),
        (0, s.Z)(en, 'defaults', {
          datasetElementType: !1,
          dataElementType: 'point',
          animations: {
            numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] },
          },
        }),
        (0, s.Z)(en, 'overrides', { scales: { x: { type: 'linear' }, y: { type: 'linear' } } })
      class nn extends Yi {
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0)
        }
        linkScales() {}
        parse(t, e) {
          const i = this.getDataset().data,
            n = this._cachedMeta
          if (!1 === this._parsing) n._parsed = i
          else {
            let s,
              o,
              r = (t) => +i[t]
            if (W(i[t])) {
              const { key: t = 'value' } = this._parsing
              r = (e) => +nt(i[e], t)
            }
            for (s = t, o = t + e; s < o; ++s) n._parsed[s] = r(s)
          }
        }
        _getRotation() {
          return wt(this.options.rotation - 90)
        }
        _getCircumference() {
          return wt(this.options.circumference)
        }
        _getRotationExtents() {
          let t = ht,
            e = -ht
          for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (
              this.chart.isDatasetVisible(i) &&
              this.chart.getDatasetMeta(i).type === this._type
            ) {
              const n = this.chart.getDatasetMeta(i).controller,
                s = n._getRotation(),
                o = n._getCircumference()
              ;(t = Math.min(t, s)), (e = Math.max(e, s + o))
            }
          return { rotation: t, circumference: e - t }
        }
        update(t) {
          const e = this.chart,
            { chartArea: i } = e,
            n = this._cachedMeta,
            s = n.data,
            o = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
            r = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            a = Math.min(
              ((l = this.options.cutout),
              (h = r),
              'string' === typeof l && l.endsWith('%') ? parseFloat(l) / 100 : +l / h),
              1,
            )
          var l, h
          const c = this._getRingWeight(this.index),
            { circumference: d, rotation: u } = this._getRotationExtents(),
            {
              ratioX: f,
              ratioY: p,
              offsetX: g,
              offsetY: m,
            } = (function (t, e, i) {
              let n = 1,
                s = 1,
                o = 0,
                r = 0
              if (e < ht) {
                const a = t,
                  l = a + e,
                  h = Math.cos(a),
                  c = Math.sin(a),
                  d = Math.cos(l),
                  u = Math.sin(l),
                  f = (t, e, n) => (Dt(t, a, l, !0) ? 1 : Math.max(e, e * i, n, n * i)),
                  p = (t, e, n) => (Dt(t, a, l, !0) ? -1 : Math.min(e, e * i, n, n * i)),
                  g = f(0, h, d),
                  m = f(ft, c, u),
                  b = p(lt, h, d),
                  x = p(lt + ft, c, u)
                ;(n = (g - b) / 2), (s = (m - x) / 2), (o = -(g + b) / 2), (r = -(m + x) / 2)
              }
              return { ratioX: n, ratioY: s, offsetX: o, offsetY: r }
            })(u, d, a),
            b = (i.width - o) / f,
            x = (i.height - o) / p,
            y = Math.max(Math.min(b, x) / 2, 0),
            v = U(this.options.radius, y),
            _ = (v - Math.max(v * a, 0)) / this._getVisibleDatasetWeightTotal()
          ;(this.offsetX = g * v),
            (this.offsetY = m * v),
            (n.total = this.calculateTotal()),
            (this.outerRadius = v - _ * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - _ * c, 0)),
            this.updateElements(s, 0, s.length, t)
        }
        _circumference(t, e) {
          const i = this.options,
            n = this._cachedMeta,
            s = this._getCircumference()
          return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === n._parsed[t] ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * s) / ht)
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            o = this.chart,
            r = o.chartArea,
            a = o.options.animation,
            l = (r.left + r.right) / 2,
            h = (r.top + r.bottom) / 2,
            c = s && a.animateScale,
            d = c ? 0 : this.innerRadius,
            u = c ? 0 : this.outerRadius,
            { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, n)
          let g,
            m = this._getRotation()
          for (g = 0; g < e; ++g) m += this._circumference(g, s)
          for (g = e; g < e + i; ++g) {
            const e = this._circumference(g, s),
              i = t[g],
              o = {
                x: l + this.offsetX,
                y: h + this.offsetY,
                startAngle: m,
                endAngle: m + e,
                circumference: e,
                outerRadius: u,
                innerRadius: d,
              }
            p && (o.options = f || this.resolveDataElementOptions(g, i.active ? 'active' : n)),
              (m += e),
              this.updateElement(i, g, o, n)
          }
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data
          let i,
            n = 0
          for (i = 0; i < e.length; i++) {
            const s = t._parsed[i]
            null === s ||
              isNaN(s) ||
              !this.chart.getDataVisibility(i) ||
              e[i].hidden ||
              (n += Math.abs(s))
          }
          return n
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total
          return e > 0 && !isNaN(t) ? ht * (Math.abs(t) / e) : 0
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            s = te(e._parsed[t], i.options.locale)
          return { label: n[t] || '', value: s }
        }
        getMaxBorderWidth(t) {
          let e = 0
          const i = this.chart
          let n, s, o, r, a
          if (!t)
            for (n = 0, s = i.data.datasets.length; n < s; ++n)
              if (i.isDatasetVisible(n)) {
                ;(o = i.getDatasetMeta(n)), (t = o.data), (r = o.controller)
                break
              }
          if (!t) return 0
          for (n = 0, s = t.length; n < s; ++n)
            (a = r.resolveDataElementOptions(n)),
              'inner' !== a.borderAlign &&
                (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0))
          return e
        }
        getMaxOffset(t) {
          let e = 0
          for (let i = 0, n = t.length; i < n; ++i) {
            const t = this.resolveDataElementOptions(i)
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
          }
          return e
        }
        _getRingWeightOffset(t) {
          let e = 0
          for (let i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i))
          return e
        }
        _getRingWeight(t) {
          return Math.max(Y(this.chart.data.datasets[t].weight, 1), 0)
        }
        _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
        }
      }
      ;(0, s.Z)(nn, 'id', 'doughnut'),
        (0, s.Z)(nn, 'defaults', {
          datasetElementType: !1,
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
              ],
            },
          },
          cutout: '50%',
          rotation: 0,
          circumference: 360,
          radius: '100%',
          spacing: 0,
          indexAxis: 'r',
        }),
        (0, s.Z)(nn, 'descriptors', {
          _scriptable: (t) => 'spacing' !== t,
          _indexable: (t) =>
            'spacing' !== t && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
        }),
        (0, s.Z)(nn, 'overrides', {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: n },
                    } = t.legend.options
                    return e.labels.map((e, s) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(s)
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: n,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(s),
                        index: s,
                      }
                    })
                  }
                  return []
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update()
              },
            },
          },
        })
      class sn extends Yi {
        initialize() {
          ;(this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize()
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: i, data: n = [], _dataset: s } = e,
            o = this.chart._animationsDisabled
          let { start: r, count: a } = Wt(e, n, o)
          ;(this._drawStart = r),
            (this._drawCount = a),
            Ht(e) && ((r = 0), (a = n.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!s._decimated),
            (i.points = n)
          const l = this.resolveDatasetElementOptions(t)
          this.options.showLine || (l.borderWidth = 0),
            (l.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: l }, t),
            this.updateElements(n, r, a, t)
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: o, vScale: r, _stacked: a, _dataset: l } = this._cachedMeta,
            { sharedOptions: h, includeOptions: c } = this._getSharedOptions(e, n),
            d = o.axis,
            u = r.axis,
            { spanGaps: f, segment: p } = this.options,
            g = vt(f) ? f : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || s || 'none' === n,
            b = e + i,
            x = t.length
          let y = e > 0 && this.getParsed(e - 1)
          for (let v = 0; v < x; ++v) {
            const i = t[v],
              f = m ? i : {}
            if (v < e || v >= b) {
              f.skip = !0
              continue
            }
            const x = this.getParsed(v),
              _ = V(x[u]),
              w = (f[d] = o.getPixelForValue(x[d], v)),
              M = (f[u] =
                s || _
                  ? r.getBasePixel()
                  : r.getPixelForValue(a ? this.applyStack(r, x, a) : x[u], v))
            ;(f.skip = isNaN(w) || isNaN(M) || _),
              (f.stop = v > 0 && Math.abs(x[d] - y[d]) > g),
              p && ((f.parsed = x), (f.raw = l.data[v])),
              c && (f.options = h || this.resolveDataElementOptions(v, i.active ? 'active' : n)),
              m || this.updateElement(i, v, f, n),
              (y = x)
          }
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || []
          if (!n.length) return i
          const s = n[0].size(this.resolveDataElementOptions(0)),
            o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1))
          return Math.max(i, s, o) / 2
        }
        draw() {
          const t = this._cachedMeta
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
        }
      }
      ;(0, s.Z)(sn, 'id', 'line'),
        (0, s.Z)(sn, 'defaults', {
          datasetElementType: 'line',
          dataElementType: 'point',
          showLine: !0,
          spanGaps: !1,
        }),
        (0, s.Z)(sn, 'overrides', {
          scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
        })
      class on extends Yi {
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            s = te(e._parsed[t].r, i.options.locale)
          return { label: n[t] || '', value: s }
        }
        parseObjectData(t, e, i, n) {
          return Xe.bind(this)(t, e, i, n)
        }
        update(t) {
          const e = this._cachedMeta.data
          this._updateRadius(), this.updateElements(e, 0, e.length, t)
        }
        getMinMax() {
          const t = this._cachedMeta,
            e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
          return (
            t.data.forEach((t, i) => {
              const n = this.getParsed(i).r
              !isNaN(n) &&
                this.chart.getDataVisibility(i) &&
                (n < e.min && (e.min = n), n > e.max && (e.max = n))
            }),
            e
          )
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            i = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            s = Math.max(n / 2, 0),
            o =
              (s - Math.max(i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1, 0)) /
              t.getVisibleDatasetCount()
          ;(this.outerRadius = s - o * this.index), (this.innerRadius = this.outerRadius - o)
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            o = this.chart,
            r = o.options.animation,
            a = this._cachedMeta.rScale,
            l = a.xCenter,
            h = a.yCenter,
            c = a.getIndexAngle(0) - 0.5 * lt
          let d,
            u = c
          const f = 360 / this.countVisibleElements()
          for (d = 0; d < e; ++d) u += this._computeAngle(d, n, f)
          for (d = e; d < e + i; d++) {
            const e = t[d]
            let i = u,
              p = u + this._computeAngle(d, n, f),
              g = o.getDataVisibility(d) ? a.getDistanceFromCenterForValue(this.getParsed(d).r) : 0
            ;(u = p), s && (r.animateScale && (g = 0), r.animateRotate && (i = p = c))
            const m = {
              x: l,
              y: h,
              innerRadius: 0,
              outerRadius: g,
              startAngle: i,
              endAngle: p,
              options: this.resolveDataElementOptions(d, e.active ? 'active' : n),
            }
            this.updateElement(e, d, m, n)
          }
        }
        countVisibleElements() {
          const t = this._cachedMeta
          let e = 0
          return (
            t.data.forEach((t, i) => {
              !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
            }),
            e
          )
        }
        _computeAngle(t, e, i) {
          return this.chart.getDataVisibility(t)
            ? wt(this.resolveDataElementOptions(t, e).angle || i)
            : 0
        }
      }
      ;(0, s.Z)(on, 'id', 'polarArea'),
        (0, s.Z)(on, 'defaults', {
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
            },
          },
          indexAxis: 'r',
          startAngle: 0,
        }),
        (0, s.Z)(on, 'overrides', {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: n },
                    } = t.legend.options
                    return e.labels.map((e, s) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(s)
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: n,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(s),
                        index: s,
                      }
                    })
                  }
                  return []
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update()
              },
            },
          },
          scales: {
            r: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        })
      class rn extends nn {}
      ;(0, s.Z)(rn, 'id', 'pie'),
        (0, s.Z)(rn, 'defaults', { cutout: 0, rotation: 0, circumference: 360, radius: '100%' })
      class an extends Yi {
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            i = this.getParsed(t)
          return { label: e.getLabels()[t], value: '' + e.getLabelForValue(i[e.axis]) }
        }
        parseObjectData(t, e, i, n) {
          return Xe.bind(this)(t, e, i, n)
        }
        update(t) {
          const e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            s = e.iScale.getLabels()
          if (((i.points = n), 'resize' !== t)) {
            const e = this.resolveDatasetElementOptions(t)
            this.options.showLine || (e.borderWidth = 0)
            const o = { _loop: !0, _fullLoop: s.length === n.length, options: e }
            this.updateElement(i, void 0, o, t)
          }
          this.updateElements(n, 0, n.length, t)
        }
        updateElements(t, e, i, n) {
          const s = this._cachedMeta.rScale,
            o = 'reset' === n
          for (let r = e; r < e + i; r++) {
            const e = t[r],
              i = this.resolveDataElementOptions(r, e.active ? 'active' : n),
              a = s.getPointPositionForValue(r, this.getParsed(r).r),
              l = o ? s.xCenter : a.x,
              h = o ? s.yCenter : a.y,
              c = { x: l, y: h, angle: a.angle, skip: isNaN(l) || isNaN(h), options: i }
            this.updateElement(e, r, c, n)
          }
        }
      }
      ;(0, s.Z)(an, 'id', 'radar'),
        (0, s.Z)(an, 'defaults', {
          datasetElementType: 'line',
          dataElementType: 'point',
          indexAxis: 'r',
          showLine: !0,
          elements: { line: { fill: 'start' } },
        }),
        (0, s.Z)(an, 'overrides', { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } })
      class ln extends Yi {
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: n, yScale: s } = e,
            o = this.getParsed(t),
            r = n.getLabelForValue(o.x),
            a = s.getLabelForValue(o.y)
          return { label: i[t] || '', value: '(' + r + ', ' + a + ')' }
        }
        update(t) {
          const e = this._cachedMeta,
            { data: i = [] } = e,
            n = this.chart._animationsDisabled
          let { start: s, count: o } = Wt(e, i, n)
          if (
            ((this._drawStart = s),
            (this._drawCount = o),
            Ht(e) && ((s = 0), (o = i.length)),
            this.options.showLine)
          ) {
            this.datasetElementType || this.addElements()
            const { dataset: s, _dataset: o } = e
            ;(s._chart = this.chart),
              (s._datasetIndex = this.index),
              (s._decimated = !!o._decimated),
              (s.points = i)
            const r = this.resolveDatasetElementOptions(t)
            ;(r.segment = this.options.segment),
              this.updateElement(s, void 0, { animated: !n, options: r }, t)
          } else this.datasetElementType && (delete e.dataset, (this.datasetElementType = !1))
          this.updateElements(i, s, o, t)
        }
        addElements() {
          const { showLine: t } = this.options
          !this.datasetElementType &&
            t &&
            (this.datasetElementType = this.chart.registry.getElement('line')),
            super.addElements()
        }
        updateElements(t, e, i, n) {
          const s = 'reset' === n,
            { iScale: o, vScale: r, _stacked: a, _dataset: l } = this._cachedMeta,
            h = this.resolveDataElementOptions(e, n),
            c = this.getSharedOptions(h),
            d = this.includeOptions(n, c),
            u = o.axis,
            f = r.axis,
            { spanGaps: p, segment: g } = this.options,
            m = vt(p) ? p : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || s || 'none' === n
          let x = e > 0 && this.getParsed(e - 1)
          for (let y = e; y < e + i; ++y) {
            const e = t[y],
              i = this.getParsed(y),
              h = b ? e : {},
              p = V(i[f]),
              v = (h[u] = o.getPixelForValue(i[u], y)),
              _ = (h[f] =
                s || p
                  ? r.getBasePixel()
                  : r.getPixelForValue(a ? this.applyStack(r, i, a) : i[f], y))
            ;(h.skip = isNaN(v) || isNaN(_) || p),
              (h.stop = y > 0 && Math.abs(i[u] - x[u]) > m),
              g && ((h.parsed = i), (h.raw = l.data[y])),
              d && (h.options = c || this.resolveDataElementOptions(y, e.active ? 'active' : n)),
              b || this.updateElement(e, y, h, n),
              (x = i)
          }
          this.updateSharedOptions(c, n, h)
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.data || []
          if (!this.options.showLine) {
            let t = 0
            for (let i = e.length - 1; i >= 0; --i)
              t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2)
            return t > 0 && t
          }
          const i = t.dataset,
            n = (i.options && i.options.borderWidth) || 0
          if (!e.length) return n
          const s = e[0].size(this.resolveDataElementOptions(0)),
            o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1))
          return Math.max(n, s, o) / 2
        }
      }
      ;(0, s.Z)(ln, 'id', 'scatter'),
        (0, s.Z)(ln, 'defaults', {
          datasetElementType: !1,
          dataElementType: 'point',
          showLine: !1,
          fill: !1,
        }),
        (0, s.Z)(ln, 'overrides', {
          interaction: { mode: 'point' },
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        })
      var hn = Object.freeze({
        __proto__: null,
        BarController: tn,
        BubbleController: en,
        DoughnutController: nn,
        LineController: sn,
        PieController: rn,
        PolarAreaController: on,
        RadarController: an,
        ScatterController: ln,
      })
      function cn() {
        throw new Error(
          'This method is not implemented: Check that a complete date adapter is provided.',
        )
      }
      class dn {
        static override(t) {
          Object.assign(dn.prototype, t)
        }
        constructor(t) {
          ;(0, s.Z)(this, 'options', void 0), (this.options = t || {})
        }
        init() {}
        formats() {
          return cn()
        }
        parse() {
          return cn()
        }
        format() {
          return cn()
        }
        add() {
          return cn()
        }
        diff() {
          return cn()
        }
        startOf() {
          return cn()
        }
        endOf() {
          return cn()
        }
      }
      var un = dn
      function fn(t, e, i, n) {
        const { controller: s, data: o, _sorted: r } = t,
          a = s._cachedMeta.iScale
        if (a && e === a.axis && 'r' !== e && r && o.length) {
          const t = a._reversePixels ? Rt : Lt
          if (!n) return t(o, e, i)
          if (s._sharedOptions) {
            const n = o[0],
              s = 'function' === typeof n.getRange && n.getRange(e)
            if (s) {
              const n = t(o, e, i - s),
                r = t(o, e, i + s)
              return { lo: n.lo, hi: r.hi }
            }
          }
        }
        return { lo: 0, hi: o.length - 1 }
      }
      function pn(t, e, i, n, s) {
        const o = t.getSortedVisibleDatasetMetas(),
          r = i[e]
        for (let a = 0, l = o.length; a < l; ++a) {
          const { index: t, data: i } = o[a],
            { lo: l, hi: h } = fn(o[a], e, r, s)
          for (let e = l; e <= h; ++e) {
            const s = i[e]
            s.skip || n(s, t, e)
          }
        }
      }
      function gn(t, e, i, n, s) {
        const o = []
        if (!s && !t.isPointInArea(e)) return o
        return (
          pn(
            t,
            i,
            e,
            function (i, r, a) {
              ;(s || ge(i, t.chartArea, 0)) &&
                i.inRange(e.x, e.y, n) &&
                o.push({ element: i, datasetIndex: r, index: a })
            },
            !0,
          ),
          o
        )
      }
      function mn(t, e, i, n, s, o) {
        let r = []
        const a = (function (t) {
          const e = -1 !== t.indexOf('x'),
            i = -1 !== t.indexOf('y')
          return function (t, n) {
            const s = e ? Math.abs(t.x - n.x) : 0,
              o = i ? Math.abs(t.y - n.y) : 0
            return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2))
          }
        })(i)
        let l = Number.POSITIVE_INFINITY
        return (
          pn(t, i, e, function (i, h, c) {
            const d = i.inRange(e.x, e.y, s)
            if (n && !d) return
            const u = i.getCenterPoint(s)
            if (!(!!o || t.isPointInArea(u)) && !d) return
            const f = a(e, u)
            f < l
              ? ((r = [{ element: i, datasetIndex: h, index: c }]), (l = f))
              : f === l && r.push({ element: i, datasetIndex: h, index: c })
          }),
          r
        )
      }
      function bn(t, e, i, n, s, o) {
        return o || t.isPointInArea(e)
          ? 'r' !== i || n
            ? mn(t, e, i, n, s, o)
            : (function (t, e, i, n) {
                let s = []
                return (
                  pn(t, i, e, function (t, i, o) {
                    const { startAngle: r, endAngle: a } = t.getProps(
                        ['startAngle', 'endAngle'],
                        n,
                      ),
                      { angle: l } = St(t, { x: e.x, y: e.y })
                    Dt(l, r, a) && s.push({ element: t, datasetIndex: i, index: o })
                  }),
                  s
                )
              })(t, e, i, s)
          : []
      }
      function xn(t, e, i, n, s) {
        const o = [],
          r = 'x' === i ? 'inXRange' : 'inYRange'
        let a = !1
        return (
          pn(t, i, e, (t, n, l) => {
            t[r](e[i], s) &&
              (o.push({ element: t, datasetIndex: n, index: l }), (a = a || t.inRange(e.x, e.y, s)))
          }),
          n && !a ? [] : o
        )
      }
      var yn = {
        evaluateInteractionItems: pn,
        modes: {
          index(t, e, i, n) {
            const s = hi(e, t),
              o = i.axis || 'x',
              r = i.includeInvisible || !1,
              a = i.intersect ? gn(t, s, o, n, r) : bn(t, s, o, !1, n, r),
              l = []
            return a.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = a[0].index,
                    i = t.data[e]
                  i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e })
                }),
                l)
              : []
          },
          dataset(t, e, i, n) {
            const s = hi(e, t),
              o = i.axis || 'xy',
              r = i.includeInvisible || !1
            let a = i.intersect ? gn(t, s, o, n, r) : bn(t, s, o, !1, n, r)
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                i = t.getDatasetMeta(e).data
              a = []
              for (let t = 0; t < i.length; ++t)
                a.push({ element: i[t], datasetIndex: e, index: t })
            }
            return a
          },
          point: (t, e, i, n) => gn(t, hi(e, t), i.axis || 'xy', n, i.includeInvisible || !1),
          nearest(t, e, i, n) {
            const s = hi(e, t),
              o = i.axis || 'xy',
              r = i.includeInvisible || !1
            return bn(t, s, o, i.intersect, n, r)
          },
          x: (t, e, i, n) => xn(t, hi(e, t), 'x', i.intersect, n),
          y: (t, e, i, n) => xn(t, hi(e, t), 'y', i.intersect, n),
        },
      }
      const vn = ['left', 'top', 'right', 'bottom']
      function _n(t, e) {
        return t.filter((t) => t.pos === e)
      }
      function wn(t, e) {
        return t.filter((t) => -1 === vn.indexOf(t.pos) && t.box.axis === e)
      }
      function Mn(t, e) {
        return t.sort((t, i) => {
          const n = e ? i : t,
            s = e ? t : i
          return n.weight === s.weight ? n.index - s.index : n.weight - s.weight
        })
      }
      function kn(t, e) {
        const i = (function (t) {
            const e = {}
            for (const i of t) {
              const { stack: t, pos: n, stackWeight: s } = i
              if (!t || !vn.includes(n)) continue
              const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 })
              o.count++, (o.weight += s)
            }
            return e
          })(t),
          { vBoxMaxWidth: n, hBoxMaxHeight: s } = e
        let o, r, a
        for (o = 0, r = t.length; o < r; ++o) {
          a = t[o]
          const { fullSize: r } = a.box,
            l = i[a.stack],
            h = l && a.stackWeight / l.weight
          a.horizontal
            ? ((a.width = h ? h * n : r && e.availableWidth), (a.height = s))
            : ((a.width = n), (a.height = h ? h * s : r && e.availableHeight))
        }
        return i
      }
      function Sn(t, e, i, n) {
        return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
      }
      function On(t, e) {
        ;(t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right))
      }
      function Pn(t, e, i, n) {
        const { pos: s, box: o } = i,
          r = t.maxPadding
        if (!W(s)) {
          i.size && (t[s] -= i.size)
          const e = n[i.stack] || { size: 0, count: 1 }
          ;(e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
            (i.size = e.size / e.count),
            (t[s] += i.size)
        }
        o.getPadding && On(r, o.getPadding())
        const a = Math.max(0, e.outerWidth - Sn(r, t, 'left', 'right')),
          l = Math.max(0, e.outerHeight - Sn(r, t, 'top', 'bottom')),
          h = a !== t.w,
          c = l !== t.h
        return (t.w = a), (t.h = l), i.horizontal ? { same: h, other: c } : { same: c, other: h }
      }
      function Cn(t, e) {
        const i = e.maxPadding
        function n(t) {
          const n = { left: 0, top: 0, right: 0, bottom: 0 }
          return (
            t.forEach((t) => {
              n[t] = Math.max(e[t], i[t])
            }),
            n
          )
        }
        return n(t ? ['left', 'right'] : ['top', 'bottom'])
      }
      function Dn(t, e, i, n) {
        const s = []
        let o, r, a, l, h, c
        for (o = 0, r = t.length, h = 0; o < r; ++o) {
          ;(a = t[o]), (l = a.box), l.update(a.width || e.w, a.height || e.h, Cn(a.horizontal, e))
          const { same: r, other: d } = Pn(e, i, a, n)
          ;(h |= r && s.length), (c = c || d), l.fullSize || s.push(a)
        }
        return (h && Dn(s, e, i, n)) || c
      }
      function An(t, e, i, n, s) {
        ;(t.top = i),
          (t.left = e),
          (t.right = e + n),
          (t.bottom = i + s),
          (t.width = n),
          (t.height = s)
      }
      function Tn(t, e, i, n) {
        const s = i.padding
        let { x: o, y: r } = e
        for (const a of t) {
          const t = a.box,
            l = n[a.stack] || { count: 1, placed: 0, weight: 1 },
            h = a.stackWeight / l.weight || 1
          if (a.horizontal) {
            const n = e.w * h,
              o = l.size || t.height
            ot(l.start) && (r = l.start),
              t.fullSize
                ? An(t, s.left, r, i.outerWidth - s.right - s.left, o)
                : An(t, e.left + l.placed, r, n, o),
              (l.start = r),
              (l.placed += n),
              (r = t.bottom)
          } else {
            const n = e.h * h,
              r = l.size || t.width
            ot(l.start) && (o = l.start),
              t.fullSize
                ? An(t, o, s.top, r, i.outerHeight - s.bottom - s.top)
                : An(t, o, e.top + l.placed, r, n),
              (l.start = o),
              (l.placed += n),
              (o = t.right)
          }
        }
        ;(e.x = o), (e.y = r)
      }
      var En = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t)
                    },
                  },
                ]
              }),
            t.boxes.push(e)
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1
          ;-1 !== i && t.boxes.splice(i, 1)
        },
        configure(t, e, i) {
          ;(e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight)
        },
        update(t, e, i, n) {
          if (!t) return
          const s = Te(t.options.layout.padding),
            o = Math.max(e - s.width, 0),
            r = Math.max(i - s.height, 0),
            a = (function (t) {
              const e = (function (t) {
                  const e = []
                  let i, n, s, o, r, a
                  for (i = 0, n = (t || []).length; i < n; ++i)
                    (s = t[i]),
                      ({
                        position: o,
                        options: { stack: r, stackWeight: a = 1 },
                      } = s),
                      e.push({
                        index: i,
                        box: s,
                        pos: o,
                        horizontal: s.isHorizontal(),
                        weight: s.weight,
                        stack: r && o + r,
                        stackWeight: a,
                      })
                  return e
                })(t),
                i = Mn(
                  e.filter((t) => t.box.fullSize),
                  !0,
                ),
                n = Mn(_n(e, 'left'), !0),
                s = Mn(_n(e, 'right')),
                o = Mn(_n(e, 'top'), !0),
                r = Mn(_n(e, 'bottom')),
                a = wn(e, 'x'),
                l = wn(e, 'y')
              return {
                fullSize: i,
                leftAndTop: n.concat(o),
                rightAndBottom: s.concat(l).concat(r).concat(a),
                chartArea: _n(e, 'chartArea'),
                vertical: n.concat(s).concat(l),
                horizontal: o.concat(r).concat(a),
              }
            })(t.boxes),
            l = a.vertical,
            h = a.horizontal
          X(t.boxes, (t) => {
            'function' === typeof t.beforeLayout && t.beforeLayout()
          })
          const c =
              l.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) ||
              1,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: s,
              availableWidth: o,
              availableHeight: r,
              vBoxMaxWidth: o / 2 / c,
              hBoxMaxHeight: r / 2,
            }),
            u = Object.assign({}, s)
          On(u, Te(n))
          const f = Object.assign({ maxPadding: u, w: o, h: r, x: s.left, y: s.top }, s),
            p = kn(l.concat(h), d)
          Dn(a.fullSize, f, d, p),
            Dn(l, f, d, p),
            Dn(h, f, d, p) && Dn(l, f, d, p),
            (function (t) {
              const e = t.maxPadding
              function i(i) {
                const n = Math.max(e[i] - t[i], 0)
                return (t[i] += n), n
              }
              ;(t.y += i('top')), (t.x += i('left')), i('right'), i('bottom')
            })(f),
            Tn(a.leftAndTop, f, d, p),
            (f.x += f.w),
            (f.y += f.h),
            Tn(a.rightAndBottom, f, d, p),
            (t.chartArea = {
              left: f.left,
              top: f.top,
              right: f.left + f.w,
              bottom: f.top + f.h,
              height: f.h,
              width: f.w,
            }),
            X(a.chartArea, (e) => {
              const i = e.box
              Object.assign(i, t.chartArea),
                i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 })
            })
        },
      }
      class Ln {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1
        }
        getMaximumSize(t, e, i, n) {
          return (
            (e = Math.max(0, e || t.width)),
            (i = i || t.height),
            { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
          )
        }
        isAttached(t) {
          return !0
        }
        updateConfig(t) {}
      }
      class Rn extends Ln {
        acquireContext(t) {
          return (t && t.getContext && t.getContext('2d')) || null
        }
        updateConfig(t) {
          t.options.animation = !1
        }
      }
      const In = '$chartjs',
        zn = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup',
          pointerenter: 'mouseenter',
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointerleave: 'mouseout',
          pointerout: 'mouseout',
        },
        jn = (t) => null === t || '' === t
      const Fn = !!fi && { passive: !0 }
      function Nn(t, e, i) {
        t.canvas.removeEventListener(e, i, Fn)
      }
      function Vn(t, e) {
        for (const i of t) if (i === e || i.contains(e)) return !0
      }
      function Bn(t, e, i) {
        const n = t.canvas,
          s = new MutationObserver((t) => {
            let e = !1
            for (const i of t) (e = e || Vn(i.addedNodes, n)), (e = e && !Vn(i.removedNodes, n))
            e && i()
          })
        return s.observe(document, { childList: !0, subtree: !0 }), s
      }
      function Wn(t, e, i) {
        const n = t.canvas,
          s = new MutationObserver((t) => {
            let e = !1
            for (const i of t) (e = e || Vn(i.removedNodes, n)), (e = e && !Vn(i.addedNodes, n))
            e && i()
          })
        return s.observe(document, { childList: !0, subtree: !0 }), s
      }
      const Hn = new Map()
      let Zn = 0
      function Yn() {
        const t = window.devicePixelRatio
        t !== Zn &&
          ((Zn = t),
          Hn.forEach((e, i) => {
            i.currentDevicePixelRatio !== t && e()
          }))
      }
      function Un(t, e, i) {
        const n = t.canvas,
          s = n && ni(n)
        if (!s) return
        const o = Nt((t, e) => {
            const n = s.clientWidth
            i(t, e), n < s.clientWidth && i()
          }, window),
          r = new ResizeObserver((t) => {
            const e = t[0],
              i = e.contentRect.width,
              n = e.contentRect.height
            ;(0 === i && 0 === n) || o(i, n)
          })
        return (
          r.observe(s),
          (function (t, e) {
            Hn.size || window.addEventListener('resize', Yn), Hn.set(t, e)
          })(t, o),
          r
        )
      }
      function $n(t, e, i) {
        i && i.disconnect(),
          'resize' === e &&
            (function (t) {
              Hn.delete(t), Hn.size || window.removeEventListener('resize', Yn)
            })(t)
      }
      function Xn(t, e, i) {
        const n = t.canvas,
          s = Nt((e) => {
            null !== t.ctx &&
              i(
                (function (t, e) {
                  const i = zn[t.type] || t.type,
                    { x: n, y: s } = hi(t, e)
                  return {
                    type: i,
                    chart: e,
                    native: t,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== s ? s : null,
                  }
                })(e, t),
              )
          }, t)
        return (
          (function (t, e, i) {
            t.addEventListener(e, i, Fn)
          })(n, e, s),
          s
        )
      }
      class qn extends Ln {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext('2d')
          return i && i.canvas === t
            ? ((function (t, e) {
                const i = t.style,
                  n = t.getAttribute('height'),
                  s = t.getAttribute('width')
                if (
                  ((t[In] = {
                    initial: {
                      height: n,
                      width: s,
                      style: { display: i.display, height: i.height, width: i.width },
                    },
                  }),
                  (i.display = i.display || 'block'),
                  (i.boxSizing = i.boxSizing || 'border-box'),
                  jn(s))
                ) {
                  const e = pi(t, 'width')
                  void 0 !== e && (t.width = e)
                }
                if (jn(n))
                  if ('' === t.style.height) t.height = t.width / (e || 2)
                  else {
                    const e = pi(t, 'height')
                    void 0 !== e && (t.height = e)
                  }
              })(t, e),
              i)
            : null
        }
        releaseContext(t) {
          const e = t.canvas
          if (!e[In]) return !1
          const i = e[In].initial
          ;['height', 'width'].forEach((t) => {
            const n = i[t]
            V(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
          })
          const n = i.style || {}
          return (
            Object.keys(n).forEach((t) => {
              e.style[t] = n[t]
            }),
            (e.width = e.width),
            delete e[In],
            !0
          )
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e)
          const n = t.$proxies || (t.$proxies = {}),
            s = { attach: Bn, detach: Wn, resize: Un }[e] || Xn
          n[e] = s(t, e, i)
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            n = i[e]
          if (!n) return
          ;(({ attach: $n, detach: $n, resize: $n })[e] || Nn)(t, e, n), (i[e] = void 0)
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio
        }
        getMaximumSize(t, e, i, n) {
          return di(t, e, i, n)
        }
        isAttached(t) {
          const e = ni(t)
          return !(!e || !e.isConnected)
        }
      }
      class Kn {
        constructor() {
          ;(0, s.Z)(this, 'x', void 0),
            (0, s.Z)(this, 'y', void 0),
            (0, s.Z)(this, 'active', !1),
            (0, s.Z)(this, 'options', void 0),
            (0, s.Z)(this, '$animations', void 0)
        }
        tooltipPosition(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t)
          return { x: e, y: i }
        }
        hasValue() {
          return vt(this.x) && vt(this.y)
        }
        getProps(t, e) {
          const i = this.$animations
          if (!e || !i) return this
          const n = {}
          return (
            t.forEach((t) => {
              n[t] = i[t] && i[t].active() ? i[t]._to : this[t]
            }),
            n
          )
        }
      }
      function Gn(t, e) {
        const i = t.options.ticks,
          n = (function (t) {
            const e = t.options.offset,
              i = t._tickSize(),
              n = t._length / i + (e ? 0 : 1),
              s = t._maxLength / i
            return Math.floor(Math.min(n, s))
          })(t),
          s = Math.min(i.maxTicksLimit || n, n),
          o = i.major.enabled
            ? (function (t) {
                const e = []
                let i, n
                for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i)
                return e
              })(e)
            : [],
          r = o.length,
          a = o[0],
          l = o[r - 1],
          h = []
        if (r > s)
          return (
            (function (t, e, i, n) {
              let s,
                o = 0,
                r = i[0]
              for (n = Math.ceil(n), s = 0; s < t.length; s++)
                s === r && (e.push(t[s]), o++, (r = i[o * n]))
            })(e, h, o, r / s),
            h
          )
        const c = (function (t, e, i) {
          const n = (function (t) {
              const e = t.length
              let i, n
              if (e < 2) return !1
              for (n = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== n) return !1
              return n
            })(t),
            s = e.length / i
          if (!n) return Math.max(s, 1)
          const o = (function (t) {
            const e = [],
              i = Math.sqrt(t)
            let n
            for (n = 1; n < i; n++) t % n === 0 && (e.push(n), e.push(t / n))
            return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e
          })(n)
          for (let r = 0, a = o.length - 1; r < a; r++) {
            const t = o[r]
            if (t > s) return t
          }
          return Math.max(s, 1)
        })(o, e, s)
        if (r > 0) {
          let t, i
          const n = r > 1 ? Math.round((l - a) / (r - 1)) : null
          for (Jn(e, h, c, V(n) ? 0 : a - n, a), t = 0, i = r - 1; t < i; t++)
            Jn(e, h, c, o[t], o[t + 1])
          return Jn(e, h, c, l, V(n) ? e.length : l + n), h
        }
        return Jn(e, h, c), h
      }
      function Jn(t, e, i, n, s) {
        const o = Y(n, 0),
          r = Math.min(Y(s, t.length), t.length)
        let a,
          l,
          h,
          c = 0
        for (i = Math.ceil(i), s && ((a = s - n), (i = a / Math.floor(a / i))), h = o; h < 0; )
          c++, (h = Math.round(o + c * i))
        for (l = Math.max(o, 0); l < r; l++)
          l === h && (e.push(t[l]), c++, (h = Math.round(o + c * i)))
      }
      ;(0, s.Z)(Kn, 'defaults', {}), (0, s.Z)(Kn, 'defaultRoutes', void 0)
      const Qn = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i),
        ts = (t, e) => Math.min(e || t, t)
      function es(t, e) {
        const i = [],
          n = t.length / e,
          s = t.length
        let o = 0
        for (; o < s; o += n) i.push(t[Math.floor(o)])
        return i
      }
      function is(t, e, i) {
        const n = t.ticks.length,
          s = Math.min(e, n - 1),
          o = t._startPixel,
          r = t._endPixel,
          a = 1e-6
        let l,
          h = t.getPixelForTick(s)
        if (
          !(
            i &&
            ((l =
              1 === n
                ? Math.max(h - o, r - h)
                : 0 === e
                  ? (t.getPixelForTick(1) - h) / 2
                  : (h - t.getPixelForTick(s - 1)) / 2),
            (h += s < e ? l : -l),
            h < o - a || h > r + a)
          )
        )
          return h
      }
      function ns(t) {
        return t.drawTicks ? t.tickLength : 0
      }
      function ss(t, e) {
        if (!t.display) return 0
        const i = Ee(t.font, e),
          n = Te(t.padding)
        return (B(t.text) ? t.text.length : 1) * i.lineHeight + n.height
      }
      function os(t, e, i) {
        let n = Vt(t)
        return (
          ((i && 'right' !== e) || (!i && 'right' === e)) &&
            (n = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(n)),
          n
        )
      }
      class rs extends Kn {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0)
        }
        init(t) {
          ;(this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax))
        }
        parse(t, e) {
          return t
        }
        getUserBounds() {
          let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: n } = this
          return (
            (t = Z(t, Number.POSITIVE_INFINITY)),
            (e = Z(e, Number.NEGATIVE_INFINITY)),
            (i = Z(i, Number.POSITIVE_INFINITY)),
            (n = Z(n, Number.NEGATIVE_INFINITY)),
            { min: Z(t, i), max: Z(e, n), minDefined: H(t), maxDefined: H(e) }
          )
        }
        getMinMax(t) {
          let e,
            { min: i, max: n, minDefined: s, maxDefined: o } = this.getUserBounds()
          if (s && o) return { min: i, max: n }
          const r = this.getMatchingVisibleMetas()
          for (let a = 0, l = r.length; a < l; ++a)
            (e = r[a].controller.getMinMax(this, t)),
              s || (i = Math.min(i, e.min)),
              o || (n = Math.max(n, e.max))
          return (
            (i = o && i > n ? n : i),
            (n = s && i > n ? i : n),
            { min: Z(i, Z(n, i)), max: Z(n, Z(i, n)) }
          )
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          }
        }
        getTicks() {
          return this.ticks
        }
        getLabels() {
          const t = this.chart.data
          return (
            this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
          )
        }
        getLabelItems() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.chart.chartArea
          return this._labelItems || (this._labelItems = this._computeLabelItems(t))
        }
        beforeLayout() {
          ;(this._cache = {}), (this._dataLimitsCached = !1)
        }
        beforeUpdate() {
          $(this.options.beforeUpdate, [this])
        }
        update(t, e, i) {
          const { beginAtZero: n, grace: s, ticks: o } = this.options,
            r = o.sampleSize
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, i) {
                const { min: n, max: s } = t,
                  o = U(e, (s - n) / 2),
                  r = (t, e) => (i && 0 === t ? 0 : t + e)
                return { min: r(n, -Math.abs(o)), max: r(s, o) }
              })(this, s, n)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks()
          const a = r < this.ticks.length
          this._convertTicksToLabels(a ? es(this.ticks, r) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || 'auto' === o.source) &&
              ((this.ticks = Gn(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate()
        }
        configure() {
          let t,
            e,
            i = this.options.reverse
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels)
        }
        afterUpdate() {
          $(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
          $(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
            : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0)
        }
        afterSetDimensions() {
          $(this.options.afterSetDimensions, [this])
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()), $(this.options[t], [this])
        }
        beforeDataLimits() {
          this._callHooks('beforeDataLimits')
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks('afterDataLimits')
        }
        beforeBuildTicks() {
          this._callHooks('beforeBuildTicks')
        }
        buildTicks() {
          return []
        }
        afterBuildTicks() {
          this._callHooks('afterBuildTicks')
        }
        beforeTickToLabelConversion() {
          $(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
          const e = this.options.ticks
          let i, n, s
          for (i = 0, n = t.length; i < n; i++)
            (s = t[i]), (s.label = $(e.callback, [s.value, i, t], this))
        }
        afterTickToLabelConversion() {
          $(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
          $(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = ts(this.ticks.length, t.ticks.maxTicksLimit),
            n = e.minRotation || 0,
            s = e.maxRotation
          let o,
            r,
            a,
            l = n
          if (!this._isVisible() || !e.display || n >= s || i <= 1 || !this.isHorizontal())
            return void (this.labelRotation = n)
          const h = this._getLabelSizes(),
            c = h.widest.width,
            d = h.highest.height,
            u = At(this.chart.width - c, 0, this.maxWidth)
          ;(o = t.offset ? this.maxWidth / i : u / (i - 1)),
            c + 6 > o &&
              ((o = u / (i - (t.offset ? 0.5 : 1))),
              (r = this.maxHeight - ns(t.grid) - e.padding - ss(t.title, this.chart.options.font)),
              (a = Math.sqrt(c * c + d * d)),
              (l = Mt(
                Math.min(
                  Math.asin(At((h.highest.height + 6) / o, -1, 1)),
                  Math.asin(At(r / a, -1, 1)) - Math.asin(At(d / a, -1, 1)),
                ),
              )),
              (l = Math.max(n, Math.min(s, l)))),
            (this.labelRotation = l)
        }
        afterCalculateLabelRotation() {
          $(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit() {
          $(this.options.beforeFit, [this])
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: i, title: n, grid: s },
            } = this,
            o = this._isVisible(),
            r = this.isHorizontal()
          if (o) {
            const o = ss(n, e.options.font)
            if (
              (r
                ? ((t.width = this.maxWidth), (t.height = ns(s) + o))
                : ((t.height = this.maxHeight), (t.width = ns(s) + o)),
              i.display && this.ticks.length)
            ) {
              const { first: e, last: n, widest: s, highest: o } = this._getLabelSizes(),
                a = 2 * i.padding,
                l = wt(this.labelRotation),
                h = Math.cos(l),
                c = Math.sin(l)
              if (r) {
                const e = i.mirror ? 0 : c * s.width + h * o.height
                t.height = Math.min(this.maxHeight, t.height + e + a)
              } else {
                const e = i.mirror ? 0 : h * s.width + c * o.height
                t.width = Math.min(this.maxWidth, t.width + e + a)
              }
              this._calculatePadding(e, n, c, h)
            }
          }
          this._handleMargins(),
            r
              ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length = e.height - this._margins.top - this._margins.bottom))
        }
        _calculatePadding(t, e, i, n) {
          const {
              ticks: { align: s, padding: o },
              position: r,
            } = this.options,
            a = 0 !== this.labelRotation,
            l = 'top' !== r && 'x' === this.axis
          if (this.isHorizontal()) {
            const r = this.getPixelForTick(0) - this.left,
              h = this.right - this.getPixelForTick(this.ticks.length - 1)
            let c = 0,
              d = 0
            a
              ? l
                ? ((c = n * t.width), (d = i * e.height))
                : ((c = i * t.height), (d = n * e.width))
              : 'start' === s
                ? (d = e.width)
                : 'end' === s
                  ? (c = t.width)
                  : 'inner' !== s && ((c = t.width / 2), (d = e.width / 2)),
              (this.paddingLeft = Math.max(((c - r + o) * this.width) / (this.width - r), 0)),
              (this.paddingRight = Math.max(((d - h + o) * this.width) / (this.width - h), 0))
          } else {
            let i = e.height / 2,
              n = t.height / 2
            'start' === s ? ((i = 0), (n = t.height)) : 'end' === s && ((i = e.height), (n = 0)),
              (this.paddingTop = i + o),
              (this.paddingBottom = n + o)
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
            (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)))
        }
        afterFit() {
          $(this.options.afterFit, [this])
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options
          return 'top' === e || 'bottom' === e || 'x' === t
        }
        isFullSize() {
          return this.options.fullSize
        }
        _convertTicksToLabels(t) {
          let e, i
          for (
            this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length;
            e < i;
            e++
          )
            V(t[e].label) && (t.splice(e, 1), i--, e--)
          this.afterTickToLabelConversion()
        }
        _getLabelSizes() {
          let t = this._labelSizes
          if (!t) {
            const e = this.options.ticks.sampleSize
            let i = this.ticks
            e < i.length && (i = es(i, e)),
              (this._labelSizes = t =
                this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit))
          }
          return t
        }
        _computeLabelSizes(t, e, i) {
          const { ctx: n, _longestTextCache: s } = this,
            o = [],
            r = [],
            a = Math.floor(e / ts(e, i))
          let l,
            h,
            c,
            d,
            u,
            f,
            p,
            g,
            m,
            b,
            x,
            y = 0,
            v = 0
          for (l = 0; l < e; l += a) {
            if (
              ((d = t[l].label),
              (u = this._resolveTickFontOptions(l)),
              (n.font = f = u.string),
              (p = s[f] = s[f] || { data: {}, gc: [] }),
              (g = u.lineHeight),
              (m = b = 0),
              V(d) || B(d))
            ) {
              if (B(d))
                for (h = 0, c = d.length; h < c; ++h)
                  (x = d[h]), V(x) || B(x) || ((m = he(n, p.data, p.gc, m, x)), (b += g))
            } else (m = he(n, p.data, p.gc, m, d)), (b = g)
            o.push(m), r.push(b), (y = Math.max(m, y)), (v = Math.max(b, v))
          }
          !(function (t, e) {
            X(t, (t) => {
              const i = t.gc,
                n = i.length / 2
              let s
              if (n > e) {
                for (s = 0; s < n; ++s) delete t.data[i[s]]
                i.splice(0, n)
              }
            })
          })(s, e)
          const _ = o.indexOf(y),
            w = r.indexOf(v),
            M = (t) => ({ width: o[t] || 0, height: r[t] || 0 })
          return { first: M(0), last: M(e - 1), widest: M(_), highest: M(w), widths: o, heights: r }
        }
        getLabelForValue(t) {
          return t
        }
        getPixelForValue(t, e) {
          return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t)
          const e = this._startPixel + t * this._length
          return At(this._alignToPixels ? de(this.chart, e, 0) : e, -32768, 32767)
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length
          return this._reversePixels ? 1 - e : e
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
          const { min: t, max: e } = this
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
          const e = this.ticks || []
          if (t >= 0 && t < e.length) {
            const i = e[t]
            return (
              i.$context ||
              (i.$context = (function (t, e, i) {
                return Re(t, { tick: i, index: e, type: 'tick' })
              })(this.getContext(), t, i))
            )
          }
          return (
            this.$context ||
            (this.$context = Re(this.chart.getContext(), { scale: this, type: 'scale' }))
          )
        }
        _tickSize() {
          const t = this.options.ticks,
            e = wt(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            n = Math.abs(Math.sin(e)),
            s = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            r = s ? s.widest.width + o : 0,
            a = s ? s.highest.height + o : 0
          return this.isHorizontal()
            ? a * i > r * n
              ? r / i
              : a / n
            : a * n < r * i
              ? a / i
              : r / n
        }
        _isVisible() {
          const t = this.options.display
          return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            i = this.chart,
            n = this.options,
            { grid: s, position: o, border: r } = n,
            a = s.offset,
            l = this.isHorizontal(),
            h = this.ticks.length + (a ? 1 : 0),
            c = ns(s),
            d = [],
            u = r.setContext(this.getContext()),
            f = u.display ? u.width : 0,
            p = f / 2,
            g = function (t) {
              return de(i, t, f)
            }
          let m, b, x, y, v, _, w, M, k, S, O, P
          if ('top' === o)
            (m = g(this.bottom)),
              (_ = this.bottom - c),
              (M = m - p),
              (S = g(t.top) + p),
              (P = t.bottom)
          else if ('bottom' === o)
            (m = g(this.top)), (S = t.top), (P = g(t.bottom) - p), (_ = m + p), (M = this.top + c)
          else if ('left' === o)
            (m = g(this.right)),
              (v = this.right - c),
              (w = m - p),
              (k = g(t.left) + p),
              (O = t.right)
          else if ('right' === o)
            (m = g(this.left)), (k = t.left), (O = g(t.right) - p), (v = m + p), (w = this.left + c)
          else if ('x' === e) {
            if ('center' === o) m = g((t.top + t.bottom) / 2 + 0.5)
            else if (W(o)) {
              const t = Object.keys(o)[0],
                e = o[t]
              m = g(this.chart.scales[t].getPixelForValue(e))
            }
            ;(S = t.top), (P = t.bottom), (_ = m + p), (M = _ + c)
          } else if ('y' === e) {
            if ('center' === o) m = g((t.left + t.right) / 2)
            else if (W(o)) {
              const t = Object.keys(o)[0],
                e = o[t]
              m = g(this.chart.scales[t].getPixelForValue(e))
            }
            ;(v = m - p), (w = v - c), (k = t.left), (O = t.right)
          }
          const C = Y(n.ticks.maxTicksLimit, h),
            D = Math.max(1, Math.ceil(h / C))
          for (b = 0; b < h; b += D) {
            const t = this.getContext(b),
              e = s.setContext(t),
              n = r.setContext(t),
              o = e.lineWidth,
              h = e.color,
              c = n.dash || [],
              u = n.dashOffset,
              f = e.tickWidth,
              p = e.tickColor,
              g = e.tickBorderDash || [],
              m = e.tickBorderDashOffset
            ;(x = is(this, b, a)),
              void 0 !== x &&
                ((y = de(i, x, o)),
                l ? (v = w = k = O = y) : (_ = M = S = P = y),
                d.push({
                  tx1: v,
                  ty1: _,
                  tx2: w,
                  ty2: M,
                  x1: k,
                  y1: S,
                  x2: O,
                  y2: P,
                  width: o,
                  color: h,
                  borderDash: c,
                  borderDashOffset: u,
                  tickWidth: f,
                  tickColor: p,
                  tickBorderDash: g,
                  tickBorderDashOffset: m,
                }))
          }
          return (this._ticksLength = h), (this._borderValue = m), d
        }
        _computeLabelItems(t) {
          const e = this.axis,
            i = this.options,
            { position: n, ticks: s } = i,
            o = this.isHorizontal(),
            r = this.ticks,
            { align: a, crossAlign: l, padding: h, mirror: c } = s,
            d = ns(i.grid),
            u = d + h,
            f = c ? -h : u,
            p = -wt(this.labelRotation),
            g = []
          let m,
            b,
            x,
            y,
            v,
            _,
            w,
            M,
            k,
            S,
            O,
            P,
            C = 'middle'
          if ('top' === n) (_ = this.bottom - f), (w = this._getXAxisLabelAlignment())
          else if ('bottom' === n) (_ = this.top + f), (w = this._getXAxisLabelAlignment())
          else if ('left' === n) {
            const t = this._getYAxisLabelAlignment(d)
            ;(w = t.textAlign), (v = t.x)
          } else if ('right' === n) {
            const t = this._getYAxisLabelAlignment(d)
            ;(w = t.textAlign), (v = t.x)
          } else if ('x' === e) {
            if ('center' === n) _ = (t.top + t.bottom) / 2 + u
            else if (W(n)) {
              const t = Object.keys(n)[0],
                e = n[t]
              _ = this.chart.scales[t].getPixelForValue(e) + u
            }
            w = this._getXAxisLabelAlignment()
          } else if ('y' === e) {
            if ('center' === n) v = (t.left + t.right) / 2 - u
            else if (W(n)) {
              const t = Object.keys(n)[0],
                e = n[t]
              v = this.chart.scales[t].getPixelForValue(e)
            }
            w = this._getYAxisLabelAlignment(d).textAlign
          }
          'y' === e && ('start' === a ? (C = 'top') : 'end' === a && (C = 'bottom'))
          const D = this._getLabelSizes()
          for (m = 0, b = r.length; m < b; ++m) {
            ;(x = r[m]), (y = x.label)
            const t = s.setContext(this.getContext(m))
            ;(M = this.getPixelForTick(m) + s.labelOffset),
              (k = this._resolveTickFontOptions(m)),
              (S = k.lineHeight),
              (O = B(y) ? y.length : 1)
            const e = O / 2,
              i = t.color,
              a = t.textStrokeColor,
              h = t.textStrokeWidth
            let d,
              u = w
            if (
              (o
                ? ((v = M),
                  'inner' === w &&
                    (u =
                      m === b - 1
                        ? this.options.reverse
                          ? 'left'
                          : 'right'
                        : 0 === m
                          ? this.options.reverse
                            ? 'right'
                            : 'left'
                          : 'center'),
                  (P =
                    'top' === n
                      ? 'near' === l || 0 !== p
                        ? -O * S + S / 2
                        : 'center' === l
                          ? -D.highest.height / 2 - e * S + S
                          : -D.highest.height + S / 2
                      : 'near' === l || 0 !== p
                        ? S / 2
                        : 'center' === l
                          ? D.highest.height / 2 - e * S
                          : D.highest.height - O * S),
                  c && (P *= -1),
                  0 === p || t.showLabelBackdrop || (v += (S / 2) * Math.sin(p)))
                : ((_ = M), (P = ((1 - O) * S) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = Te(t.backdropPadding),
                i = D.heights[m],
                n = D.widths[m]
              let s = P - e.top,
                o = 0 - e.left
              switch (C) {
                case 'middle':
                  s -= i / 2
                  break
                case 'bottom':
                  s -= i
              }
              switch (w) {
                case 'center':
                  o -= n / 2
                  break
                case 'right':
                  o -= n
                  break
                case 'inner':
                  m === b - 1 ? (o -= n) : m > 0 && (o -= n / 2)
              }
              d = {
                left: o,
                top: s,
                width: n + e.width,
                height: i + e.height,
                color: t.backdropColor,
              }
            }
            g.push({
              label: y,
              font: k,
              textOffset: P,
              options: {
                rotation: p,
                color: i,
                strokeColor: a,
                strokeWidth: h,
                textAlign: u,
                textBaseline: C,
                translation: [v, _],
                backdrop: d,
              },
            })
          }
          return g
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options
          if (-wt(this.labelRotation)) return 'top' === t ? 'left' : 'right'
          let i = 'center'
          return (
            'start' === e.align
              ? (i = 'left')
              : 'end' === e.align
                ? (i = 'right')
                : 'inner' === e.align && (i = 'inner'),
            i
          )
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: i, mirror: n, padding: s },
            } = this.options,
            o = t + s,
            r = this._getLabelSizes().widest.width
          let a, l
          return (
            'left' === e
              ? n
                ? ((l = this.right + s),
                  'near' === i
                    ? (a = 'left')
                    : 'center' === i
                      ? ((a = 'center'), (l += r / 2))
                      : ((a = 'right'), (l += r)))
                : ((l = this.right - o),
                  'near' === i
                    ? (a = 'right')
                    : 'center' === i
                      ? ((a = 'center'), (l -= r / 2))
                      : ((a = 'left'), (l = this.left)))
              : 'right' === e
                ? n
                  ? ((l = this.left + s),
                    'near' === i
                      ? (a = 'right')
                      : 'center' === i
                        ? ((a = 'center'), (l -= r / 2))
                        : ((a = 'left'), (l -= r)))
                  : ((l = this.left + o),
                    'near' === i
                      ? (a = 'left')
                      : 'center' === i
                        ? ((a = 'center'), (l += r / 2))
                        : ((a = 'right'), (l = this.right)))
                : (a = 'right'),
            { textAlign: a, x: l }
          )
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return
          const t = this.chart,
            e = this.options.position
          return 'left' === e || 'right' === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : 'top' === e || 'bottom' === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: i,
            top: n,
            width: s,
            height: o,
          } = this
          e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, s, o), t.restore())
        }
        getLineWidthForValue(t) {
          const e = this.options.grid
          if (!this._isVisible() || !e.display) return 0
          const i = this.ticks.findIndex((e) => e.value === t)
          if (i >= 0) {
            return e.setContext(this.getContext(i)).lineWidth
          }
          return 0
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t))
          let s, o
          const r = (t, e, n) => {
            n.width &&
              n.color &&
              (i.save(),
              (i.lineWidth = n.width),
              (i.strokeStyle = n.color),
              i.setLineDash(n.borderDash || []),
              (i.lineDashOffset = n.borderDashOffset),
              i.beginPath(),
              i.moveTo(t.x, t.y),
              i.lineTo(e.x, e.y),
              i.stroke(),
              i.restore())
          }
          if (e.display)
            for (s = 0, o = n.length; s < o; ++s) {
              const t = n[s]
              e.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  r(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    },
                  )
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { border: i, grid: n },
            } = this,
            s = i.setContext(this.getContext()),
            o = i.display ? s.width : 0
          if (!o) return
          const r = n.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue
          let l, h, c, d
          this.isHorizontal()
            ? ((l = de(t, this.left, o) - o / 2), (h = de(t, this.right, r) + r / 2), (c = d = a))
            : ((c = de(t, this.top, o) - o / 2), (d = de(t, this.bottom, r) + r / 2), (l = h = a)),
            e.save(),
            (e.lineWidth = s.width),
            (e.strokeStyle = s.color),
            e.beginPath(),
            e.moveTo(l, c),
            e.lineTo(h, d),
            e.stroke(),
            e.restore()
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return
          const e = this.ctx,
            i = this._computeLabelArea()
          i && me(e, i)
          const n = this.getLabelItems(t)
          for (const s of n) {
            const t = s.options,
              i = s.font
            we(e, s.label, 0, s.textOffset, i, t)
          }
          i && be(e)
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: i, reverse: n },
          } = this
          if (!i.display) return
          const s = Ee(i.font),
            o = Te(i.padding),
            r = i.align
          let a = s.lineHeight / 2
          'bottom' === e || 'center' === e || W(e)
            ? ((a += o.bottom), B(i.text) && (a += s.lineHeight * (i.text.length - 1)))
            : (a += o.top)
          const {
            titleX: l,
            titleY: h,
            maxWidth: c,
            rotation: d,
          } = (function (t, e, i, n) {
            const { top: s, left: o, bottom: r, right: a, chart: l } = t,
              { chartArea: h, scales: c } = l
            let d,
              u,
              f,
              p = 0
            const g = r - s,
              m = a - o
            if (t.isHorizontal()) {
              if (((u = Bt(n, o, a)), W(i))) {
                const t = Object.keys(i)[0],
                  n = i[t]
                f = c[t].getPixelForValue(n) + g - e
              } else f = 'center' === i ? (h.bottom + h.top) / 2 + g - e : Qn(t, i, e)
              d = a - o
            } else {
              if (W(i)) {
                const t = Object.keys(i)[0],
                  n = i[t]
                u = c[t].getPixelForValue(n) - m + e
              } else u = 'center' === i ? (h.left + h.right) / 2 - m + e : Qn(t, i, e)
              ;(f = Bt(n, r, s)), (p = 'left' === i ? -ft : ft)
            }
            return { titleX: u, titleY: f, maxWidth: d, rotation: p }
          })(this, a, e, r)
          we(t, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: c,
            rotation: d,
            textAlign: os(r, e, n),
            textBaseline: 'middle',
            translation: [l, h],
          })
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t))
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            i = Y(t.grid && t.grid.z, -1),
            n = Y(t.border && t.border.z, 0)
          return this._isVisible() && this.draw === rs.prototype.draw
            ? [
                {
                  z: i,
                  draw: (t) => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle()
                  },
                },
                {
                  z: n,
                  draw: () => {
                    this.drawBorder()
                  },
                },
                {
                  z: e,
                  draw: (t) => {
                    this.drawLabels(t)
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: (t) => {
                    this.draw(t)
                  },
                },
              ]
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            n = []
          let s, o
          for (s = 0, o = e.length; s < o; ++s) {
            const o = e[s]
            o[i] !== this.id || (t && o.type !== t) || n.push(o)
          }
          return n
        }
        _resolveTickFontOptions(t) {
          return Ee(this.options.ticks.setContext(this.getContext(t)).font)
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight
          return (this.isHorizontal() ? this.width : this.height) / t
        }
      }
      class as {
        constructor(t, e, i) {
          ;(this.type = t),
            (this.scope = e),
            (this.override = i),
            (this.items = Object.create(null))
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
          const e = Object.getPrototypeOf(t)
          let i
          ;(function (t) {
            return 'id' in t && 'defaults' in t
          })(e) && (i = this.register(e))
          const n = this.items,
            s = t.id,
            o = this.scope + '.' + s
          if (!s) throw new Error('class does not have id: ' + t)
          return (
            s in n ||
              ((n[s] = t),
              (function (t, e, i) {
                const n = Q(Object.create(null), [i ? le.get(i) : {}, le.get(e), t.defaults])
                le.set(e, n),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach((i) => {
                        const n = i.split('.'),
                          s = n.pop(),
                          o = [t].concat(n).join('.'),
                          r = e[i].split('.'),
                          a = r.pop(),
                          l = r.join('.')
                        le.route(o, s, l, a)
                      })
                    })(e, t.defaultRoutes)
                t.descriptors && le.describe(e, t.descriptors)
              })(t, o, i),
              this.override && le.override(t.id, t.overrides)),
            o
          )
        }
        get(t) {
          return this.items[t]
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            n = this.scope
          i in e && delete e[i], n && i in le[n] && (delete le[n][i], this.override && delete ne[i])
        }
      }
      class ls {
        constructor() {
          ;(this.controllers = new as(Yi, 'datasets', !0)),
            (this.elements = new as(Kn, 'elements')),
            (this.plugins = new as(Object, 'plugins')),
            (this.scales = new as(rs, 'scales')),
            (this._typedRegistries = [this.controllers, this.scales, this.elements])
        }
        add() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('register', e)
        }
        remove() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('unregister', e)
        }
        addControllers() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('register', e, this.controllers)
        }
        addElements() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('register', e, this.elements)
        }
        addPlugins() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('register', e, this.plugins)
        }
        addScales() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('register', e, this.scales)
        }
        getController(t) {
          return this._get(t, this.controllers, 'controller')
        }
        getElement(t) {
          return this._get(t, this.elements, 'element')
        }
        getPlugin(t) {
          return this._get(t, this.plugins, 'plugin')
        }
        getScale(t) {
          return this._get(t, this.scales, 'scale')
        }
        removeControllers() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('unregister', e, this.controllers)
        }
        removeElements() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('unregister', e, this.elements)
        }
        removePlugins() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('unregister', e, this.plugins)
        }
        removeScales() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]
          this._each('unregister', e, this.scales)
        }
        _each(t, e, i) {
          ;[...e].forEach((e) => {
            const n = i || this._getRegistryForType(e)
            i || n.isForType(e) || (n === this.plugins && e.id)
              ? this._exec(t, n, e)
              : X(e, (e) => {
                  const n = i || this._getRegistryForType(e)
                  this._exec(t, n, e)
                })
          })
        }
        _exec(t, e, i) {
          const n = st(t)
          $(i['before' + n], [], i), e[t](i), $(i['after' + n], [], i)
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e]
            if (i.isForType(t)) return i
          }
          return this.plugins
        }
        _get(t, e, i) {
          const n = e.get(t)
          if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + '.')
          return n
        }
      }
      var hs = new ls()
      class cs {
        constructor() {
          this._init = []
        }
        notify(t, e, i, n) {
          'beforeInit' === e &&
            ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'))
          const s = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            o = this._notify(s, t, e, i)
          return (
            'afterDestroy' === e &&
              (this._notify(s, t, 'stop'), this._notify(this._init, t, 'uninstall')),
            o
          )
        }
        _notify(t, e, i, n) {
          n = n || {}
          for (const s of t) {
            const t = s.plugin
            if (!1 === $(t[i], [e, n, s.options], t) && n.cancelable) return !1
          }
          return !0
        }
        invalidate() {
          V(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
        }
        _descriptors(t) {
          if (this._cache) return this._cache
          const e = (this._cache = this._createDescriptors(t))
          return this._notifyStateChanges(t), e
        }
        _createDescriptors(t, e) {
          const i = t && t.config,
            n = Y(i.options && i.options.plugins, {}),
            s = (function (t) {
              const e = {},
                i = [],
                n = Object.keys(hs.plugins.items)
              for (let o = 0; o < n.length; o++) i.push(hs.getPlugin(n[o]))
              const s = t.plugins || []
              for (let o = 0; o < s.length; o++) {
                const t = s[o]
                ;-1 === i.indexOf(t) && (i.push(t), (e[t.id] = !0))
              }
              return { plugins: i, localIds: e }
            })(i)
          return !1 !== n || e
            ? (function (t, e, i, n) {
                let { plugins: s, localIds: o } = e
                const r = [],
                  a = t.getContext()
                for (const l of s) {
                  const e = l.id,
                    s = ds(i[e], n)
                  null !== s &&
                    r.push({ plugin: l, options: us(t.config, { plugin: l, local: o[e] }, s, a) })
                }
                return r
              })(t, s, n, e)
            : []
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            i = this._cache,
            n = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id))
          this._notify(n(e, i), t, 'stop'), this._notify(n(i, e), t, 'start')
        }
      }
      function ds(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null
      }
      function us(t, e, i, n) {
        let { plugin: s, local: o } = e
        const r = t.pluginScopeKeys(s),
          a = t.getOptionScopes(i, r)
        return (
          o && s.defaults && a.push(s.defaults),
          t.createResolver(a, n, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
        )
      }
      function fs(t, e) {
        const i = le.datasets[t] || {}
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x'
      }
      function ps(t) {
        if ('x' === t || 'y' === t || 'r' === t) return t
      }
      function gs(t) {
        if (ps(t)) return t
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          i[n - 1] = arguments[n]
        for (const o of i) {
          const e =
            o.axis ||
            ('top' === (s = o.position) || 'bottom' === s
              ? 'x'
              : 'left' === s || 'right' === s
                ? 'y'
                : void 0) ||
            (t.length > 1 && ps(t[0].toLowerCase()))
          if (e) return e
        }
        var s
        throw new Error(
          "Cannot determine type of '".concat(
            t,
            "' axis. Please provide 'axis' or 'position' option.",
          ),
        )
      }
      function ms(t, e, i) {
        if (i[e + 'AxisID'] === t) return { axis: e }
      }
      function bs(t, e) {
        const i = ne[t.type] || { scales: {} },
          n = e.scales || {},
          s = fs(t.type, e),
          o = Object.create(null)
        return (
          Object.keys(n).forEach((e) => {
            const r = n[e]
            if (!W(r)) return console.error('Invalid scale configuration for scale: '.concat(e))
            if (r._proxy)
              return console.warn('Ignoring resolver passed as options for scale: '.concat(e))
            const a = gs(
                e,
                r,
                (function (t, e) {
                  if (e.data && e.data.datasets) {
                    const i = e.data.datasets.filter((e) => e.xAxisID === t || e.yAxisID === t)
                    if (i.length) return ms(t, 'x', i[0]) || ms(t, 'y', i[0])
                  }
                  return {}
                })(e, t),
                le.scales[r.type],
              ),
              l = (function (t, e) {
                return t === e ? '_index_' : '_value_'
              })(a, s),
              h = i.scales || {}
            o[e] = tt(Object.create(null), [{ axis: a }, r, h[a], h[l]])
          }),
          t.data.datasets.forEach((i) => {
            const s = i.type || t.type,
              r = i.indexAxis || fs(s, e),
              a = (ne[s] || {}).scales || {}
            Object.keys(a).forEach((t) => {
              const e = (function (t, e) {
                  let i = t
                  return (
                    '_index_' === t ? (i = e) : '_value_' === t && (i = 'x' === e ? 'y' : 'x'), i
                  )
                })(t, r),
                s = i[e + 'AxisID'] || e
              ;(o[s] = o[s] || Object.create(null)), tt(o[s], [{ axis: e }, n[s], a[t]])
            })
          }),
          Object.keys(o).forEach((t) => {
            const e = o[t]
            tt(e, [le.scales[e.type], le.scale])
          }),
          o
        )
      }
      function xs(t) {
        const e = t.options || (t.options = {})
        ;(e.plugins = Y(e.plugins, {})), (e.scales = bs(t, e))
      }
      function ys(t) {
        return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
      }
      const vs = new Map(),
        _s = new Set()
      function ws(t, e) {
        let i = vs.get(t)
        return i || ((i = e()), vs.set(t, i), _s.add(i)), i
      }
      const Ms = (t, e, i) => {
        const n = nt(e, i)
        void 0 !== n && t.add(n)
      }
      class ks {
        constructor(t) {
          ;(this._config = (function (t) {
            return ((t = t || {}).data = ys(t.data)), xs(t), t
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map())
        }
        get platform() {
          return this._config.platform
        }
        get type() {
          return this._config.type
        }
        set type(t) {
          this._config.type = t
        }
        get data() {
          return this._config.data
        }
        set data(t) {
          this._config.data = ys(t)
        }
        get options() {
          return this._config.options
        }
        set options(t) {
          this._config.options = t
        }
        get plugins() {
          return this._config.plugins
        }
        update() {
          const t = this._config
          this.clearCache(), xs(t)
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear()
        }
        datasetScopeKeys(t) {
          return ws(t, () => [['datasets.'.concat(t), '']])
        }
        datasetAnimationScopeKeys(t, e) {
          return ws(''.concat(t, '.transition.').concat(e), () => [
            ['datasets.'.concat(t, '.transitions.').concat(e), 'transitions.'.concat(e)],
            ['datasets.'.concat(t), ''],
          ])
        }
        datasetElementScopeKeys(t, e) {
          return ws(''.concat(t, '-').concat(e), () => [
            [
              'datasets.'.concat(t, '.elements.').concat(e),
              'datasets.'.concat(t),
              'elements.'.concat(e),
              '',
            ],
          ])
        }
        pluginScopeKeys(t) {
          const e = t.id,
            i = this.type
          return ws(''.concat(i, '-plugin-').concat(e), () => [
            ['plugins.'.concat(e), ...(t.additionalOptionScopes || [])],
          ])
        }
        _cachedScopes(t, e) {
          const i = this._scopeCache
          let n = i.get(t)
          return (n && !e) || ((n = new Map()), i.set(t, n)), n
        }
        getOptionScopes(t, e, i) {
          const { options: n, type: s } = this,
            o = this._cachedScopes(t, i),
            r = o.get(e)
          if (r) return r
          const a = new Set()
          e.forEach((e) => {
            t && (a.add(t), e.forEach((e) => Ms(a, t, e))),
              e.forEach((t) => Ms(a, n, t)),
              e.forEach((t) => Ms(a, ne[s] || {}, t)),
              e.forEach((t) => Ms(a, le, t)),
              e.forEach((t) => Ms(a, se, t))
          })
          const l = Array.from(a)
          return 0 === l.length && l.push(Object.create(null)), _s.has(e) && o.set(e, l), l
        }
        chartOptionScopes() {
          const { options: t, type: e } = this
          return [t, ne[e] || {}, le.datasets[e] || {}, { type: e }, le, se]
        }
        resolveNamedOptions(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ['']
          const s = { $shared: !0 },
            { resolver: o, subPrefixes: r } = Ss(this._resolverCache, t, n)
          let a = o
          if (
            (function (t, e) {
              const { isScriptable: i, isIndexable: n } = je(t)
              for (const s of e) {
                const e = i(s),
                  o = n(s),
                  r = (o || e) && t[s]
                if ((e && (rt(r) || Os(r))) || (o && B(r))) return !0
              }
              return !1
            })(o, e)
          ) {
            s.$shared = !1
            a = ze(o, (i = rt(i) ? i() : i), this.createResolver(t, i, r))
          }
          for (const l of e) s[l] = a[l]
          return s
        }
        createResolver(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [''],
            n = arguments.length > 3 ? arguments[3] : void 0
          const { resolver: s } = Ss(this._resolverCache, t, i)
          return W(e) ? ze(s, e, void 0, n) : s
        }
      }
      function Ss(t, e, i) {
        let n = t.get(e)
        n || ((n = new Map()), t.set(e, n))
        const s = i.join()
        let o = n.get(s)
        if (!o) {
          ;(o = {
            resolver: Ie(e, i),
            subPrefixes: i.filter((t) => !t.toLowerCase().includes('hover')),
          }),
            n.set(s, o)
        }
        return o
      }
      const Os = (t) => W(t) && Object.getOwnPropertyNames(t).some((e) => rt(t[e]))
      const Ps = ['top', 'bottom', 'left', 'right', 'chartArea']
      function Cs(t, e) {
        return 'top' === t || 'bottom' === t || (-1 === Ps.indexOf(t) && 'x' === e)
      }
      function Ds(t, e) {
        return function (i, n) {
          return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
        }
      }
      function As(t) {
        const e = t.chart,
          i = e.options.animation
        e.notifyPlugins('afterRender'), $(i && i.onComplete, [t], e)
      }
      function Ts(t) {
        const e = t.chart,
          i = e.options.animation
        $(i && i.onProgress, [t], e)
      }
      function Es(t) {
        return (
          ii() && 'string' === typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        )
      }
      const Ls = {},
        Rs = (t) => {
          const e = Es(t)
          return Object.values(Ls)
            .filter((t) => t.canvas === e)
            .pop()
        }
      function Is(t, e, i) {
        const n = Object.keys(t)
        for (const s of n) {
          const n = +s
          if (n >= e) {
            const o = t[s]
            delete t[s], (i > 0 || n > e) && (t[n + i] = o)
          }
        }
      }
      function zs(t, e, i) {
        return t.options.clip ? t[i] : e[i]
      }
      class js {
        static register() {
          hs.add(...arguments), Fs()
        }
        static unregister() {
          hs.remove(...arguments), Fs()
        }
        constructor(t, e) {
          const i = (this.config = new ks(e)),
            n = Es(t),
            s = Rs(n)
          if (s)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                s.id +
                "' must be destroyed before the canvas with ID '" +
                s.canvas.id +
                "' can be reused.",
            )
          const o = i.createResolver(i.chartOptionScopes(), this.getContext())
          ;(this.platform = new (i.platform ||
            (function (t) {
              return !ii() ||
                ('undefined' !== typeof OffscreenCanvas && t instanceof OffscreenCanvas)
                ? Rn
                : qn
            })(n))()),
            this.platform.updateConfig(i)
          const r = this.platform.acquireContext(n, o.aspectRatio),
            a = r && r.canvas,
            l = a && a.height,
            h = a && a.width
          ;(this.id = N()),
            (this.ctx = r),
            (this.canvas = a),
            (this.width = h),
            (this.height = l),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new cs()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let i
              return function () {
                for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                  s[o] = arguments[o]
                return e ? (clearTimeout(i), (i = setTimeout(t, e, s))) : t.apply(this, s), e
              }
            })((t) => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (Ls[this.id] = this),
            r && a
              ? (Di.listen(this, 'complete', As),
                Di.listen(this, 'progress', Ts),
                this._initialize(),
                this.attached && this.update())
              : console.error("Failed to create chart: can't acquire context from the given item")
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: i,
            height: n,
            _aspectRatio: s,
          } = this
          return V(t) ? (e && s ? s : n ? i / n : null) : t
        }
        get data() {
          return this.config.data
        }
        set data(t) {
          this.config.data = t
        }
        get options() {
          return this._options
        }
        set options(t) {
          this.config.options = t
        }
        get registry() {
          return hs
        }
        _initialize() {
          return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive ? this.resize() : ui(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
          )
        }
        clear() {
          return ue(this.canvas, this.ctx), this
        }
        stop() {
          return Di.stop(this), this
        }
        resize(t, e) {
          Di.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e)
        }
        _resize(t, e) {
          const i = this.options,
            n = this.canvas,
            s = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(n, t, e, s),
            r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? 'resize' : 'attach'
          ;(this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            ui(this, r, !0) &&
              (this.notifyPlugins('resize', { size: o }),
              $(i.onResize, [this, o], this),
              this.attached && this._doResize(a) && this.render())
        }
        ensureScalesHaveIDs() {
          X(this.options.scales || {}, (t, e) => {
            t.id = e
          })
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            n = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {})
          let s = []
          e &&
            (s = s.concat(
              Object.keys(e).map((t) => {
                const i = e[t],
                  n = gs(t, i),
                  s = 'r' === n,
                  o = 'x' === n
                return {
                  options: i,
                  dposition: s ? 'chartArea' : o ? 'bottom' : 'left',
                  dtype: s ? 'radialLinear' : o ? 'category' : 'linear',
                }
              }),
            )),
            X(s, (e) => {
              const s = e.options,
                o = s.id,
                r = gs(o, s),
                a = Y(s.type, e.dtype)
              ;(void 0 !== s.position && Cs(s.position, r) === Cs(e.dposition)) ||
                (s.position = e.dposition),
                (n[o] = !0)
              let l = null
              if (o in i && i[o].type === a) l = i[o]
              else {
                ;(l = new (hs.getScale(a))({ id: o, type: a, ctx: this.ctx, chart: this })),
                  (i[l.id] = l)
              }
              l.init(s, t)
            }),
            X(n, (t, e) => {
              t || delete i[e]
            }),
            X(i, (t) => {
              En.configure(this, t, t.options), En.addBox(this, t)
            })
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length
          if ((t.sort((t, e) => t.index - e.index), i > e)) {
            for (let t = e; t < i; ++t) this._destroyDatasetMeta(t)
            t.splice(e, i - e)
          }
          this._sortedMetasets = t.slice(0).sort(Ds('order', 'index'))
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this
          t.length > e.length && delete this._stacks,
            t.forEach((t, i) => {
              0 === e.filter((e) => e === t._dataset).length && this._destroyDatasetMeta(i)
            })
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets
          let i, n
          for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
            const n = e[i]
            let s = this.getDatasetMeta(i)
            const o = n.type || this.config.type
            if (
              (s.type &&
                s.type !== o &&
                (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
              (s.type = o),
              (s.indexAxis = n.indexAxis || fs(o, this.options)),
              (s.order = n.order || 0),
              (s.index = i),
              (s.label = '' + n.label),
              (s.visible = this.isDatasetVisible(i)),
              s.controller)
            )
              s.controller.updateIndex(i), s.controller.linkScales()
            else {
              const e = hs.getController(o),
                { datasetElementType: n, dataElementType: r } = le.datasets[o]
              Object.assign(e, {
                dataElementType: hs.getElement(r),
                datasetElementType: n && hs.getElement(n),
              }),
                (s.controller = new e(this, i)),
                t.push(s.controller)
            }
          }
          return this._updateMetasets(), t
        }
        _resetElements() {
          X(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset()
            },
            this,
          )
        }
        reset() {
          this._resetElements(), this.notifyPlugins('reset')
        }
        update(t) {
          const e = this.config
          e.update()
          const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
            n = (this._animationsDisabled = !i.animation)
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 === this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
          )
            return
          const s = this.buildOrUpdateControllers()
          this.notifyPlugins('beforeElementsUpdate')
          let o = 0
          for (let l = 0, h = this.data.datasets.length; l < h; l++) {
            const { controller: t } = this.getDatasetMeta(l),
              e = !n && -1 === s.indexOf(t)
            t.buildOrUpdateElements(e), (o = Math.max(+t.getMaxOverflow(), o))
          }
          ;(o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            n ||
              X(s, (t) => {
                t.reset()
              }),
            this._updateDatasets(t),
            this.notifyPlugins('afterUpdate', { mode: t }),
            this._layers.sort(Ds('z', '_idx'))
          const { _active: r, _lastEvent: a } = this
          a ? this._eventHandler(a, !0) : r.length && this._updateHoverStyles(r, r, !0),
            this.render()
        }
        _updateScales() {
          X(this.scales, (t) => {
            En.removeBox(this, t)
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales()
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events)
          ;(at(e, i) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents())
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || []
          for (const { method: i, start: n, count: s } of e) {
            Is(t, n, '_removeElements' === i ? -s : s)
          }
        }
        _getUniformDataChanges() {
          const t = this._dataChanges
          if (!t || !t.length) return
          this._dataChanges = []
          const e = this.data.datasets.length,
            i = (e) =>
              new Set(t.filter((t) => t[0] === e).map((t, e) => e + ',' + t.splice(1).join(','))),
            n = i(0)
          for (let s = 1; s < e; s++) if (!at(n, i(s))) return
          return Array.from(n)
            .map((t) => t.split(','))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }))
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 })) return
          En.update(this, this.width, this.height, t)
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0
          ;(this._layers = []),
            X(
              this.boxes,
              (t) => {
                ;(i && 'chartArea' === t.position) ||
                  (t.configure && t.configure(), this._layers.push(...t._layers()))
              },
              this,
            ),
            this._layers.forEach((t, e) => {
              t._idx = e
            }),
            this.notifyPlugins('afterLayout')
        }
        _updateDatasets(t) {
          if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure()
            for (let e = 0, i = this.data.datasets.length; e < i; ++e)
              this._updateDataset(e, rt(t) ? t({ datasetIndex: e }) : t)
            this.notifyPlugins('afterDatasetsUpdate', { mode: t })
          }
        }
        _updateDataset(t, e) {
          const i = this.getDatasetMeta(t),
            n = { meta: i, index: t, mode: e, cancelable: !0 }
          !1 !== this.notifyPlugins('beforeDatasetUpdate', n) &&
            (i.controller._update(e),
            (n.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', n))
        }
        render() {
          !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
            (Di.has(this)
              ? this.attached && !Di.running(this) && Di.start(this)
              : (this.draw(), As({ chart: this })))
        }
        draw() {
          let t
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw
            this._resize(t, e), (this._resizeBeforeDraw = null)
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return
          if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 })) return
          const e = this._layers
          for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea)
          for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea)
          this.notifyPlugins('afterDraw')
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            i = []
          let n, s
          for (n = 0, s = e.length; n < s; ++n) {
            const s = e[n]
            ;(t && !s.visible) || i.push(s)
          }
          return i
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
          if (!1 === this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) return
          const t = this.getSortedVisibleDatasetMetas()
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e])
          this.notifyPlugins('afterDatasetsDraw')
        }
        _drawDataset(t) {
          const e = this.ctx,
            i = t._clip,
            n = !i.disabled,
            s = (function (t, e) {
              const { xScale: i, yScale: n } = t
              return i && n
                ? {
                    left: zs(i, e, 'left'),
                    right: zs(i, e, 'right'),
                    top: zs(n, e, 'top'),
                    bottom: zs(n, e, 'bottom'),
                  }
                : e
            })(t, this.chartArea),
            o = { meta: t, index: t.index, cancelable: !0 }
          !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
            (n &&
              me(e, {
                left: !1 === i.left ? 0 : s.left - i.left,
                right: !1 === i.right ? this.width : s.right + i.right,
                top: !1 === i.top ? 0 : s.top - i.top,
                bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom,
              }),
            t.controller.draw(),
            n && be(e),
            (o.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', o))
        }
        isPointInArea(t) {
          return ge(t, this.chartArea, this._minPadding)
        }
        getElementsAtEventForMode(t, e, i, n) {
          const s = yn.modes[e]
          return 'function' === typeof s ? s(this, t, i, n) : []
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this._metasets
          let n = i.filter((t) => t && t._dataset === e).pop()
          return (
            n ||
              ((n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(n)),
            n
          )
        }
        getContext() {
          return this.$context || (this.$context = Re(null, { chart: this, type: 'chart' }))
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t]
          if (!e) return !1
          const i = this.getDatasetMeta(t)
          return 'boolean' === typeof i.hidden ? !i.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t]
        }
        _updateVisibility(t, e, i) {
          const n = i ? 'show' : 'hide',
            s = this.getDatasetMeta(t),
            o = s.controller._resolveAnimations(void 0, n)
          ot(e)
            ? ((s.data[e].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              o.update(s, { visible: i }),
              this.update((e) => (e.datasetIndex === t ? n : void 0)))
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1)
        }
        show(t, e) {
          this._updateVisibility(t, e, !0)
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t]
          e && e.controller && e.controller._destroy(), delete this._metasets[t]
        }
        _stop() {
          let t, e
          for (this.stop(), Di.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
            this._destroyDatasetMeta(t)
        }
        destroy() {
          this.notifyPlugins('beforeDestroy')
          const { canvas: t, ctx: e } = this
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              ue(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            delete Ls[this.id],
            this.notifyPlugins('afterDestroy')
        }
        toBase64Image() {
          return this.canvas.toDataURL(...arguments)
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            i = (i, n) => {
              e.addEventListener(this, i, n), (t[i] = n)
            },
            n = (t, e, i) => {
              ;(t.offsetX = e), (t.offsetY = i), this._eventHandler(t)
            }
          X(this.options.events, (t) => i(t, n))
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {})
          const t = this._responsiveListeners,
            e = this.platform,
            i = (i, n) => {
              e.addEventListener(this, i, n), (t[i] = n)
            },
            n = (i, n) => {
              t[i] && (e.removeEventListener(this, i, n), delete t[i])
            },
            s = (t, e) => {
              this.canvas && this.resize(t, e)
            }
          let o
          const r = () => {
            n('attach', r), (this.attached = !0), this.resize(), i('resize', s), i('detach', o)
          }
          ;(o = () => {
            ;(this.attached = !1), n('resize', s), this._stop(), this._resize(0, 0), i('attach', r)
          }),
            e.isAttached(this.canvas) ? r() : o()
        }
        unbindEvents() {
          X(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
          }),
            (this._listeners = {}),
            X(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t)
            }),
            (this._responsiveListeners = void 0)
        }
        updateHoverStyle(t, e, i) {
          const n = i ? 'set' : 'remove'
          let s, o, r, a
          for (
            'dataset' === e &&
              ((s = this.getDatasetMeta(t[0].datasetIndex)),
              s.controller['_' + n + 'DatasetHoverStyle']()),
              r = 0,
              a = t.length;
            r < a;
            ++r
          ) {
            o = t[r]
            const e = o && this.getDatasetMeta(o.datasetIndex).controller
            e && e[n + 'HoverStyle'](o.element, o.datasetIndex, o.index)
          }
        }
        getActiveElements() {
          return this._active || []
        }
        setActiveElements(t) {
          const e = this._active || [],
            i = t.map((t) => {
              let { datasetIndex: e, index: i } = t
              const n = this.getDatasetMeta(e)
              if (!n) throw new Error('No dataset found at index ' + e)
              return { datasetIndex: e, element: n.data[i], index: i }
            })
          !q(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e))
        }
        notifyPlugins(t, e, i) {
          return this._plugins.notify(this, t, e, i)
        }
        isPluginEnabled(t) {
          return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
        }
        _updateHoverStyles(t, e, i) {
          const n = this.options.hover,
            s = (t, e) =>
              t.filter(
                (t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index),
              ),
            o = s(e, t),
            r = i ? t : s(t, e)
          o.length && this.updateHoverStyle(o, n.mode, !1),
            r.length && n.mode && this.updateHoverStyle(r, n.mode, !0)
        }
        _eventHandler(t, e) {
          const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
            n = (e) => (e.options.events || this.options.events).includes(t.native.type)
          if (!1 === this.notifyPlugins('beforeEvent', i, n)) return
          const s = this._handleEvent(t, e, i.inChartArea)
          return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, n),
            (s || i.changed) && this.render(),
            this
          )
        }
        _handleEvent(t, e, i) {
          const { _active: n = [], options: s } = this,
            o = e,
            r = this._getActiveElements(t, n, i, o),
            a = (function (t) {
              return 'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type
            })(t),
            l = (function (t, e, i, n) {
              return i && 'mouseout' !== t.type ? (n ? e : t) : null
            })(t, this._lastEvent, i, a)
          i &&
            ((this._lastEvent = null),
            $(s.onHover, [t, r, this], this),
            a && $(s.onClick, [t, r, this], this))
          const h = !q(r, n)
          return (
            (h || e) && ((this._active = r), this._updateHoverStyles(r, n, e)),
            (this._lastEvent = l),
            h
          )
        }
        _getActiveElements(t, e, i, n) {
          if ('mouseout' === t.type) return []
          if (!i) return e
          const s = this.options.hover
          return this.getElementsAtEventForMode(t, s.mode, s, n)
        }
      }
      function Fs() {
        return X(js.instances, (t) => t._plugins.invalidate())
      }
      function Ns(t, e, i, n) {
        const s = Ce(t.options.borderRadius, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
        const o = (i - e) / 2,
          r = Math.min(o, (n * e) / 2),
          a = (t) => {
            const e = ((i - Math.min(o, t)) * n) / 2
            return At(t, 0, Math.min(o, e))
          }
        return {
          outerStart: a(s.outerStart),
          outerEnd: a(s.outerEnd),
          innerStart: At(s.innerStart, 0, r),
          innerEnd: At(s.innerEnd, 0, r),
        }
      }
      function Vs(t, e, i, n) {
        return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) }
      }
      function Bs(t, e, i, n, s, o) {
        const { x: r, y: a, startAngle: l, pixelMargin: h, innerRadius: c } = e,
          d = Math.max(e.outerRadius + n + i - h, 0),
          u = c > 0 ? c + n + i + h : 0
        let f = 0
        const p = s - l
        if (n) {
          const t = ((c > 0 ? c - n : 0) + (d > 0 ? d - n : 0)) / 2
          f = (p - (0 !== t ? (p * t) / (t + n) : p)) / 2
        }
        const g = (p - Math.max(0.001, p * d - i / lt) / d) / 2,
          m = l + g + f,
          b = s - g - f,
          { outerStart: x, outerEnd: y, innerStart: v, innerEnd: _ } = Ns(e, u, d, b - m),
          w = d - x,
          M = d - y,
          k = m + x / w,
          S = b - y / M,
          O = u + v,
          P = u + _,
          C = m + v / O,
          D = b - _ / P
        if ((t.beginPath(), o)) {
          const e = (k + S) / 2
          if ((t.arc(r, a, d, k, e), t.arc(r, a, d, e, S), y > 0)) {
            const e = Vs(M, S, r, a)
            t.arc(e.x, e.y, y, S, b + ft)
          }
          const i = Vs(P, b, r, a)
          if ((t.lineTo(i.x, i.y), _ > 0)) {
            const e = Vs(P, D, r, a)
            t.arc(e.x, e.y, _, b + ft, D + Math.PI)
          }
          const n = (b - _ / u + (m + v / u)) / 2
          if ((t.arc(r, a, u, b - _ / u, n, !0), t.arc(r, a, u, n, m + v / u, !0), v > 0)) {
            const e = Vs(O, C, r, a)
            t.arc(e.x, e.y, v, C + Math.PI, m - ft)
          }
          const s = Vs(w, m, r, a)
          if ((t.lineTo(s.x, s.y), x > 0)) {
            const e = Vs(w, k, r, a)
            t.arc(e.x, e.y, x, m - ft, k)
          }
        } else {
          t.moveTo(r, a)
          const e = Math.cos(k) * d + r,
            i = Math.sin(k) * d + a
          t.lineTo(e, i)
          const n = Math.cos(S) * d + r,
            s = Math.sin(S) * d + a
          t.lineTo(n, s)
        }
        t.closePath()
      }
      function Ws(t, e, i, n, s) {
        const { fullCircles: o, startAngle: r, circumference: a, options: l } = e,
          { borderWidth: h, borderJoinStyle: c, borderDash: d, borderDashOffset: u } = l,
          f = 'inner' === l.borderAlign
        if (!h) return
        t.setLineDash(d || []),
          (t.lineDashOffset = u),
          f
            ? ((t.lineWidth = 2 * h), (t.lineJoin = c || 'round'))
            : ((t.lineWidth = h), (t.lineJoin = c || 'bevel'))
        let p = e.endAngle
        if (o) {
          Bs(t, e, i, n, p, s)
          for (let e = 0; e < o; ++e) t.stroke()
          isNaN(a) || (p = r + (a % ht || ht))
        }
        f &&
          (function (t, e, i) {
            const { startAngle: n, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = e
            let h = s / a
            t.beginPath(),
              t.arc(o, r, a, n - h, i + h),
              l > s
                ? ((h = s / l), t.arc(o, r, l, i + h, n - h, !0))
                : t.arc(o, r, s, i + ft, n - ft),
              t.closePath(),
              t.clip()
          })(t, e, p),
          o || (Bs(t, e, i, n, p, s), t.stroke())
      }
      ;(0, s.Z)(js, 'defaults', le),
        (0, s.Z)(js, 'instances', Ls),
        (0, s.Z)(js, 'overrides', ne),
        (0, s.Z)(js, 'registry', hs),
        (0, s.Z)(js, 'version', '4.4.1'),
        (0, s.Z)(js, 'getChart', Rs)
      class Hs extends Kn {
        constructor(t) {
          super(),
            (0, s.Z)(this, 'circumference', void 0),
            (0, s.Z)(this, 'endAngle', void 0),
            (0, s.Z)(this, 'fullCircles', void 0),
            (0, s.Z)(this, 'innerRadius', void 0),
            (0, s.Z)(this, 'outerRadius', void 0),
            (0, s.Z)(this, 'pixelMargin', void 0),
            (0, s.Z)(this, 'startAngle', void 0),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t)
        }
        inRange(t, e, i) {
          const n = this.getProps(['x', 'y'], i),
            { angle: s, distance: o } = St(n, { x: t, y: e }),
            {
              startAngle: r,
              endAngle: a,
              innerRadius: l,
              outerRadius: h,
              circumference: c,
            } = this.getProps(
              ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
              i,
            ),
            d = (this.options.spacing + this.options.borderWidth) / 2,
            u = Y(c, a - r) >= ht || Dt(s, r, a),
            f = Tt(o, l + d, h + d)
          return u && f
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: i,
              startAngle: n,
              endAngle: s,
              innerRadius: o,
              outerRadius: r,
            } = this.getProps(
              ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
              t,
            ),
            { offset: a, spacing: l } = this.options,
            h = (n + s) / 2,
            c = (o + r + l + a) / 2
          return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c }
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t)
        }
        draw(t) {
          const { options: e, circumference: i } = this,
            n = (e.offset || 0) / 4,
            s = (e.spacing || 0) / 2,
            o = e.circular
          if (
            ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
            (this.fullCircles = i > ht ? Math.floor(i / ht) : 0),
            0 === i || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return
          t.save()
          const r = (this.startAngle + this.endAngle) / 2
          t.translate(Math.cos(r) * n, Math.sin(r) * n)
          const a = n * (1 - Math.sin(Math.min(lt, i || 0)))
          ;(t.fillStyle = e.backgroundColor),
            (t.strokeStyle = e.borderColor),
            (function (t, e, i, n, s) {
              const { fullCircles: o, startAngle: r, circumference: a } = e
              let l = e.endAngle
              if (o) {
                Bs(t, e, i, n, l, s)
                for (let e = 0; e < o; ++e) t.fill()
                isNaN(a) || (l = r + (a % ht || ht))
              }
              Bs(t, e, i, n, l, s), t.fill()
            })(t, this, a, s, o),
            Ws(t, this, a, s, o),
            t.restore()
        }
      }
      function Zs(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e
        ;(t.lineCap = Y(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(Y(i.borderDash, e.borderDash)),
          (t.lineDashOffset = Y(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = Y(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = Y(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = Y(i.borderColor, e.borderColor))
      }
      function Ys(t, e, i) {
        t.lineTo(i.x, i.y)
      }
      function Us(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        const n = t.length,
          { start: s = 0, end: o = n - 1 } = i,
          { start: r, end: a } = e,
          l = Math.max(s, r),
          h = Math.min(o, a),
          c = (s < r && o < r) || (s > a && o > a)
        return { count: n, start: l, loop: e.loop, ilen: h < l && !c ? n + h - l : h - l }
      }
      function $s(t, e, i, n) {
        const { points: s, options: o } = e,
          { count: r, start: a, loop: l, ilen: h } = Us(s, i, n),
          c = (function (t) {
            return t.stepped ? xe : t.tension || 'monotone' === t.cubicInterpolationMode ? ye : Ys
          })(o)
        let d,
          u,
          f,
          { move: p = !0, reverse: g } = n || {}
        for (d = 0; d <= h; ++d)
          (u = s[(a + (g ? h - d : d)) % r]),
            u.skip || (p ? (t.moveTo(u.x, u.y), (p = !1)) : c(t, f, u, g, o.stepped), (f = u))
        return l && ((u = s[(a + (g ? h : 0)) % r]), c(t, f, u, g, o.stepped)), !!l
      }
      function Xs(t, e, i, n) {
        const s = e.points,
          { count: o, start: r, ilen: a } = Us(s, i, n),
          { move: l = !0, reverse: h } = n || {}
        let c,
          d,
          u,
          f,
          p,
          g,
          m = 0,
          b = 0
        const x = (t) => (r + (h ? a - t : t)) % o,
          y = () => {
            f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g))
          }
        for (l && ((d = s[x(0)]), t.moveTo(d.x, d.y)), c = 0; c <= a; ++c) {
          if (((d = s[x(c)]), d.skip)) continue
          const e = d.x,
            i = d.y,
            n = 0 | e
          n === u
            ? (i < f ? (f = i) : i > p && (p = i), (m = (b * m + e) / ++b))
            : (y(), t.lineTo(e, i), (u = n), (b = 0), (f = p = i)),
            (g = i)
        }
        y()
      }
      function qs(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length
        return !t._decimated &&
          !t._loop &&
          !e.tension &&
          'monotone' !== e.cubicInterpolationMode &&
          !e.stepped &&
          !i
          ? Xs
          : $s
      }
      ;(0, s.Z)(Hs, 'id', 'arc'),
        (0, s.Z)(Hs, 'defaults', {
          borderAlign: 'center',
          borderColor: '#fff',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        }),
        (0, s.Z)(Hs, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
        (0, s.Z)(Hs, 'descriptors', { _scriptable: !0, _indexable: (t) => 'borderDash' !== t })
      const Ks = 'function' === typeof Path2D
      function Gs(t, e, i, n) {
        Ks && !e.options.segment
          ? (function (t, e, i, n) {
              let s = e._path
              s || ((s = e._path = new Path2D()), e.path(s, i, n) && s.closePath()),
                Zs(t, e.options),
                t.stroke(s)
            })(t, e, i, n)
          : (function (t, e, i, n) {
              const { segments: s, options: o } = e,
                r = qs(e)
              for (const a of s)
                Zs(t, o, a.style),
                  t.beginPath(),
                  r(t, e, a, { start: i, end: i + n - 1 }) && t.closePath(),
                  t.stroke()
            })(t, e, i, n)
      }
      class Js extends Kn {
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t)
        }
        updateControlPoints(t, e) {
          const i = this.options
          if (
            (i.tension || 'monotone' === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            const n = i.spanGaps ? this._loop : this._fullLoop
            ei(this._points, i, t, n, e), (this._pointsUpdated = !0)
          }
        }
        set points(t) {
          ;(this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1)
        }
        get points() {
          return this._points
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const i = t.points,
                n = t.options.spanGaps,
                s = i.length
              if (!s) return []
              const o = !!t._loop,
                { start: r, end: a } = (function (t, e, i, n) {
                  let s = 0,
                    o = e - 1
                  if (i && !n) for (; s < e && !t[s].skip; ) s++
                  for (; s < e && t[s].skip; ) s++
                  for (s %= e, i && (o += s); o > s && t[o % e].skip; ) o--
                  return (o %= e), { start: s, end: o }
                })(i, s, o, n)
              return Si(
                t,
                !0 === n
                  ? [{ start: r, end: a, loop: o }]
                  : (function (t, e, i, n) {
                      const s = t.length,
                        o = []
                      let r,
                        a = e,
                        l = t[e]
                      for (r = e + 1; r <= i; ++r) {
                        const i = t[r % s]
                        i.skip || i.stop
                          ? l.skip ||
                            ((n = !1),
                            o.push({ start: e % s, end: (r - 1) % s, loop: n }),
                            (e = a = i.stop ? r : null))
                          : ((a = r), l.skip && (e = r)),
                          (l = i)
                      }
                      return null !== a && o.push({ start: e % s, end: a % s, loop: n }), o
                    })(i, r, a < r ? a + s : a, !!t._fullLoop && 0 === r && a === s - 1),
                i,
                e,
              )
            })(this, this.options.segment))
          )
        }
        first() {
          const t = this.segments,
            e = this.points
          return t.length && e[t[0].start]
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length
          return i && e[t[i - 1].end]
        }
        interpolate(t, e) {
          const i = this.options,
            n = t[e],
            s = this.points,
            o = ki(this, { property: e, start: n, end: n })
          if (!o.length) return
          const r = [],
            a = (function (t) {
              return t.stepped ? mi : t.tension || 'monotone' === t.cubicInterpolationMode ? bi : gi
            })(i)
          let l, h
          for (l = 0, h = o.length; l < h; ++l) {
            const { start: h, end: c } = o[l],
              d = s[h],
              u = s[c]
            if (d === u) {
              r.push(d)
              continue
            }
            const f = a(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped)
            ;(f[e] = t[e]), r.push(f)
          }
          return 1 === r.length ? r[0] : r
        }
        pathSegment(t, e, i) {
          return qs(this)(t, this, e, i)
        }
        path(t, e, i) {
          const n = this.segments,
            s = qs(this)
          let o = this._loop
          ;(e = e || 0), (i = i || this.points.length - e)
          for (const r of n) o &= s(t, this, r, { start: e, end: e + i - 1 })
          return !!o
        }
        draw(t, e, i, n) {
          const s = this.options || {}
          ;(this.points || []).length &&
            s.borderWidth &&
            (t.save(), Gs(t, this, i, n), t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
        }
      }
      function Qs(t, e, i, n) {
        const s = t.options,
          { [i]: o } = t.getProps([i], n)
        return Math.abs(e - o) < s.radius + s.hitRadius
      }
      ;(0, s.Z)(Js, 'id', 'line'),
        (0, s.Z)(Js, 'defaults', {
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: 'miter',
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: 'default',
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (0, s.Z)(Js, 'defaultRoutes', {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        }),
        (0, s.Z)(Js, 'descriptors', {
          _scriptable: !0,
          _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
        })
      class to extends Kn {
        constructor(t) {
          super(),
            (0, s.Z)(this, 'parsed', void 0),
            (0, s.Z)(this, 'skip', void 0),
            (0, s.Z)(this, 'stop', void 0),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t)
        }
        inRange(t, e, i) {
          const n = this.options,
            { x: s, y: o } = this.getProps(['x', 'y'], i)
          return Math.pow(t - s, 2) + Math.pow(e - o, 2) < Math.pow(n.hitRadius + n.radius, 2)
        }
        inXRange(t, e) {
          return Qs(this, t, 'x', e)
        }
        inYRange(t, e) {
          return Qs(this, t, 'y', e)
        }
        getCenterPoint(t) {
          const { x: e, y: i } = this.getProps(['x', 'y'], t)
          return { x: e, y: i }
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0
          e = Math.max(e, (e && t.hoverRadius) || 0)
          return 2 * (e + ((e && t.borderWidth) || 0))
        }
        draw(t, e) {
          const i = this.options
          this.skip ||
            i.radius < 0.1 ||
            !ge(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            fe(t, i, this.x, this.y))
        }
        getRange() {
          const t = this.options || {}
          return t.radius + t.hitRadius
        }
      }
      function eo(t, e) {
        const {
          x: i,
          y: n,
          base: s,
          width: o,
          height: r,
        } = t.getProps(['x', 'y', 'base', 'width', 'height'], e)
        let a, l, h, c, d
        return (
          t.horizontal
            ? ((d = r / 2), (a = Math.min(i, s)), (l = Math.max(i, s)), (h = n - d), (c = n + d))
            : ((d = o / 2), (a = i - d), (l = i + d), (h = Math.min(n, s)), (c = Math.max(n, s))),
          { left: a, top: h, right: l, bottom: c }
        )
      }
      function io(t, e, i, n) {
        return t ? 0 : At(e, i, n)
      }
      function no(t) {
        const e = eo(t),
          i = e.right - e.left,
          n = e.bottom - e.top,
          s = (function (t, e, i) {
            const n = t.options.borderWidth,
              s = t.borderSkipped,
              o = De(n)
            return {
              t: io(s.top, o.top, 0, i),
              r: io(s.right, o.right, 0, e),
              b: io(s.bottom, o.bottom, 0, i),
              l: io(s.left, o.left, 0, e),
            }
          })(t, i / 2, n / 2),
          o = (function (t, e, i) {
            const { enableBorderRadius: n } = t.getProps(['enableBorderRadius']),
              s = t.options.borderRadius,
              o = Ae(s),
              r = Math.min(e, i),
              a = t.borderSkipped,
              l = n || W(s)
            return {
              topLeft: io(!l || a.top || a.left, o.topLeft, 0, r),
              topRight: io(!l || a.top || a.right, o.topRight, 0, r),
              bottomLeft: io(!l || a.bottom || a.left, o.bottomLeft, 0, r),
              bottomRight: io(!l || a.bottom || a.right, o.bottomRight, 0, r),
            }
          })(t, i / 2, n / 2)
        return {
          outer: { x: e.left, y: e.top, w: i, h: n, radius: o },
          inner: {
            x: e.left + s.l,
            y: e.top + s.t,
            w: i - s.l - s.r,
            h: n - s.t - s.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
              topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
            },
          },
        }
      }
      function so(t, e, i, n) {
        const s = null === e,
          o = null === i,
          r = t && !(s && o) && eo(t, n)
        return r && (s || Tt(e, r.left, r.right)) && (o || Tt(i, r.top, r.bottom))
      }
      function oo(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
      }
      function ro(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        const n = t.x !== i.x ? -e : 0,
          s = t.y !== i.y ? -e : 0,
          o = (t.x + t.w !== i.x + i.w ? e : 0) - n,
          r = (t.y + t.h !== i.y + i.h ? e : 0) - s
        return { x: t.x + n, y: t.y + s, w: t.w + o, h: t.h + r, radius: t.radius }
      }
      ;(0, s.Z)(to, 'id', 'point'),
        (0, s.Z)(to, 'defaults', {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: 'circle',
          radius: 3,
          rotation: 0,
        }),
        (0, s.Z)(to, 'defaultRoutes', {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        })
      class ao extends Kn {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t)
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: s, outer: o } = no(this),
            r = (a = o.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? Me : oo
          var a
          t.save(),
            (o.w === s.w && o.h === s.h) ||
              (t.beginPath(),
              r(t, ro(o, e, s)),
              t.clip(),
              r(t, ro(s, -e, o)),
              (t.fillStyle = i),
              t.fill('evenodd')),
            t.beginPath(),
            r(t, ro(s, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore()
        }
        inRange(t, e, i) {
          return so(this, t, e, i)
        }
        inXRange(t, e) {
          return so(this, t, null, e)
        }
        inYRange(t, e) {
          return so(this, null, t, e)
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: i,
            base: n,
            horizontal: s,
          } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
          return { x: s ? (e + n) / 2 : e, y: s ? i : (i + n) / 2 }
        }
        getRange(t) {
          return 'x' === t ? this.width / 2 : this.height / 2
        }
      }
      ;(0, s.Z)(ao, 'id', 'bar'),
        (0, s.Z)(ao, 'defaults', {
          borderSkipped: 'start',
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: 'auto',
          pointStyle: void 0,
        }),
        (0, s.Z)(ao, 'defaultRoutes', {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        })
      var lo = Object.freeze({
        __proto__: null,
        ArcElement: Hs,
        BarElement: ao,
        LineElement: Js,
        PointElement: to,
      })
      const ho = [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        co = ho.map((t) => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'))
      function uo(t) {
        return ho[t % ho.length]
      }
      function fo(t) {
        return co[t % co.length]
      }
      function po(t) {
        let e = 0
        return (i, n) => {
          const s = t.getDatasetMeta(n).controller
          s instanceof nn
            ? (e = (function (t, e) {
                return (t.backgroundColor = t.data.map(() => uo(e++))), e
              })(i, e))
            : s instanceof on
              ? (e = (function (t, e) {
                  return (t.backgroundColor = t.data.map(() => fo(e++))), e
                })(i, e))
              : s &&
                (e = (function (t, e) {
                  return (t.borderColor = uo(e)), (t.backgroundColor = fo(e)), ++e
                })(i, e))
        }
      }
      function go(t) {
        let e
        for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0
        return !1
      }
      var mo = {
        id: 'colors',
        defaults: { enabled: !0, forceOverride: !1 },
        beforeLayout(t, e, i) {
          if (!i.enabled) return
          const {
              data: { datasets: n },
              options: s,
            } = t.config,
            { elements: o } = s
          if (
            !i.forceOverride &&
            (go(n) || ((r = s) && (r.borderColor || r.backgroundColor)) || (o && go(o)))
          )
            return
          var r
          const a = po(t)
          n.forEach(a)
        },
      }
      function bo(t) {
        if (t._decimated) {
          const e = t._data
          delete t._decimated,
            delete t._data,
            Object.defineProperty(t, 'data', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: e,
            })
        }
      }
      function xo(t) {
        t.data.datasets.forEach((t) => {
          bo(t)
        })
      }
      var yo = {
        id: 'decimation',
        defaults: { algorithm: 'min-max', enabled: !1 },
        beforeElementsUpdate: (t, e, i) => {
          if (!i.enabled) return void xo(t)
          const n = t.width
          t.data.datasets.forEach((e, s) => {
            const { _data: o, indexAxis: r } = e,
              a = t.getDatasetMeta(s),
              l = o || e.data
            if ('y' === Le([r, t.options.indexAxis])) return
            if (!a.controller.supportsDecimation) return
            const h = t.scales[a.xAxisID]
            if ('linear' !== h.type && 'time' !== h.type) return
            if (t.options.parsing) return
            let { start: c, count: d } = (function (t, e) {
              const i = e.length
              let n,
                s = 0
              const { iScale: o } = t,
                { min: r, max: a, minDefined: l, maxDefined: h } = o.getUserBounds()
              return (
                l && (s = At(Lt(e, o.axis, r).lo, 0, i - 1)),
                (n = h ? At(Lt(e, o.axis, a).hi + 1, s, i) - s : i - s),
                { start: s, count: n }
              )
            })(a, l)
            if (d <= (i.threshold || 4 * n)) return void bo(e)
            let u
            switch (
              (V(o) &&
                ((e._data = l),
                delete e.data,
                Object.defineProperty(e, 'data', {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return this._decimated
                  },
                  set: function (t) {
                    this._data = t
                  },
                })),
              i.algorithm)
            ) {
              case 'lttb':
                u = (function (t, e, i, n, s) {
                  const o = s.samples || n
                  if (o >= i) return t.slice(e, e + i)
                  const r = [],
                    a = (i - 2) / (o - 2)
                  let l = 0
                  const h = e + i - 1
                  let c,
                    d,
                    u,
                    f,
                    p,
                    g = e
                  for (r[l++] = t[g], c = 0; c < o - 2; c++) {
                    let n,
                      s = 0,
                      o = 0
                    const h = Math.floor((c + 1) * a) + 1 + e,
                      m = Math.min(Math.floor((c + 2) * a) + 1, i) + e,
                      b = m - h
                    for (n = h; n < m; n++) (s += t[n].x), (o += t[n].y)
                    ;(s /= b), (o /= b)
                    const x = Math.floor(c * a) + 1 + e,
                      y = Math.min(Math.floor((c + 1) * a) + 1, i) + e,
                      { x: v, y: _ } = t[g]
                    for (u = f = -1, n = x; n < y; n++)
                      (f = 0.5 * Math.abs((v - s) * (t[n].y - _) - (v - t[n].x) * (o - _))),
                        f > u && ((u = f), (d = t[n]), (p = n))
                    ;(r[l++] = d), (g = p)
                  }
                  return (r[l++] = t[h]), r
                })(l, c, d, n, i)
                break
              case 'min-max':
                u = (function (t, e, i, n) {
                  let s,
                    o,
                    r,
                    a,
                    l,
                    h,
                    c,
                    d,
                    u,
                    f,
                    p = 0,
                    g = 0
                  const m = [],
                    b = e + i - 1,
                    x = t[e].x,
                    y = t[b].x - x
                  for (s = e; s < e + i; ++s) {
                    ;(o = t[s]), (r = ((o.x - x) / y) * n), (a = o.y)
                    const e = 0 | r
                    if (e === l)
                      a < u ? ((u = a), (h = s)) : a > f && ((f = a), (c = s)),
                        (p = (g * p + o.x) / ++g)
                    else {
                      const i = s - 1
                      if (!V(h) && !V(c)) {
                        const e = Math.min(h, c),
                          n = Math.max(h, c)
                        e !== d && e !== i && m.push({ ...t[e], x: p }),
                          n !== d && n !== i && m.push({ ...t[n], x: p })
                      }
                      s > 0 && i !== d && m.push(t[i]),
                        m.push(o),
                        (l = e),
                        (g = 0),
                        (u = f = a),
                        (h = c = d = s)
                    }
                  }
                  return m
                })(l, c, d, n)
                break
              default:
                throw new Error("Unsupported decimation algorithm '".concat(i.algorithm, "'"))
            }
            e._decimated = u
          })
        },
        destroy(t) {
          xo(t)
        },
      }
      function vo(t, e, i, n) {
        if (n) return
        let s = e[t],
          o = i[t]
        return 'angle' === t && ((s = Ct(s)), (o = Ct(o))), { property: t, start: s, end: o }
      }
      function _o(t, e, i) {
        for (; e > t; e--) {
          const t = i[e]
          if (!isNaN(t.x) && !isNaN(t.y)) break
        }
        return e
      }
      function wo(t, e, i, n) {
        return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
      }
      function Mo(t, e) {
        let i = [],
          n = !1
        return (
          B(t)
            ? ((n = !0), (i = t))
            : (i = (function (t, e) {
                const { x: i = null, y: n = null } = t || {},
                  s = e.points,
                  o = []
                return (
                  e.segments.forEach((t) => {
                    let { start: e, end: r } = t
                    r = _o(e, r, s)
                    const a = s[e],
                      l = s[r]
                    null !== n
                      ? (o.push({ x: a.x, y: n }), o.push({ x: l.x, y: n }))
                      : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: l.y }))
                  }),
                  o
                )
              })(t, e)),
          i.length ? new Js({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n }) : null
        )
      }
      function ko(t) {
        return t && !1 !== t.fill
      }
      function So(t, e, i) {
        let n = t[e].fill
        const s = [e]
        let o
        if (!i) return n
        for (; !1 !== n && -1 === s.indexOf(n); ) {
          if (!H(n)) return n
          if (((o = t[n]), !o)) return !1
          if (o.visible) return n
          s.push(n), (n = o.fill)
        }
        return !1
      }
      function Oo(t, e, i) {
        const n = (function (t) {
          const e = t.options,
            i = e.fill
          let n = Y(i && i.target, i)
          void 0 === n && (n = !!e.backgroundColor)
          if (!1 === n || null === n) return !1
          if (!0 === n) return 'origin'
          return n
        })(t)
        if (W(n)) return !isNaN(n.value) && n
        let s = parseFloat(n)
        return H(s) && Math.floor(s) === s
          ? (function (t, e, i, n) {
              ;('-' !== t && '+' !== t) || (i = e + i)
              if (i === e || i < 0 || i >= n) return !1
              return i
            })(n[0], e, s, i)
          : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(n) >= 0 && n
      }
      function Po(t, e, i) {
        const n = []
        for (let s = 0; s < i.length; s++) {
          const o = i[s],
            { first: r, last: a, point: l } = Co(o, e, 'x')
          if (!(!l || (r && a)))
            if (r) n.unshift(l)
            else if ((t.push(l), !a)) break
        }
        t.push(...n)
      }
      function Co(t, e, i) {
        const n = t.interpolate(e, i)
        if (!n) return {}
        const s = n[i],
          o = t.segments,
          r = t.points
        let a = !1,
          l = !1
        for (let h = 0; h < o.length; h++) {
          const t = o[h],
            e = r[t.start][i],
            n = r[t.end][i]
          if (Tt(s, e, n)) {
            ;(a = s === e), (l = s === n)
            break
          }
        }
        return { first: a, last: l, point: n }
      }
      class Do {
        constructor(t) {
          ;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
        }
        pathSegment(t, e, i) {
          const { x: n, y: s, radius: o } = this
          return (e = e || { start: 0, end: ht }), t.arc(n, s, o, e.end, e.start, !0), !i.bounds
        }
        interpolate(t) {
          const { x: e, y: i, radius: n } = this,
            s = t.angle
          return { x: e + Math.cos(s) * n, y: i + Math.sin(s) * n, angle: s }
        }
      }
      function Ao(t) {
        const { chart: e, fill: i, line: n } = t
        if (H(i))
          return (function (t, e) {
            const i = t.getDatasetMeta(e),
              n = i && t.isDatasetVisible(e)
            return n ? i.dataset : null
          })(e, i)
        if ('stack' === i)
          return (function (t) {
            const { scale: e, index: i, line: n } = t,
              s = [],
              o = n.segments,
              r = n.points,
              a = (function (t, e) {
                const i = [],
                  n = t.getMatchingVisibleMetas('line')
                for (let s = 0; s < n.length; s++) {
                  const t = n[s]
                  if (t.index === e) break
                  t.hidden || i.unshift(t.dataset)
                }
                return i
              })(e, i)
            a.push(Mo({ x: null, y: e.bottom }, n))
            for (let l = 0; l < o.length; l++) {
              const t = o[l]
              for (let e = t.start; e <= t.end; e++) Po(s, r[e], a)
            }
            return new Js({ points: s, options: {} })
          })(t)
        if ('shape' === i) return !0
        const s = (function (t) {
          const e = t.scale || {}
          if (e.getPointPositionForValue)
            return (function (t) {
              const { scale: e, fill: i } = t,
                n = e.options,
                s = e.getLabels().length,
                o = n.reverse ? e.max : e.min,
                r = (function (t, e, i) {
                  let n
                  return (
                    (n =
                      'start' === t
                        ? i
                        : 'end' === t
                          ? e.options.reverse
                            ? e.min
                            : e.max
                          : W(t)
                            ? t.value
                            : e.getBaseValue()),
                    n
                  )
                })(i, e, o),
                a = []
              if (n.grid.circular) {
                const t = e.getPointPositionForValue(0, o)
                return new Do({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(r) })
              }
              for (let l = 0; l < s; ++l) a.push(e.getPointPositionForValue(l, r))
              return a
            })(t)
          return (function (t) {
            const { scale: e = {}, fill: i } = t,
              n = (function (t, e) {
                let i = null
                return (
                  'start' === t
                    ? (i = e.bottom)
                    : 'end' === t
                      ? (i = e.top)
                      : W(t)
                        ? (i = e.getPixelForValue(t.value))
                        : e.getBasePixel && (i = e.getBasePixel()),
                  i
                )
              })(i, e)
            if (H(n)) {
              const t = e.isHorizontal()
              return { x: t ? n : null, y: t ? null : n }
            }
            return null
          })(t)
        })(t)
        return s instanceof Do ? s : Mo(s, n)
      }
      function To(t, e, i) {
        const n = Ao(e),
          { line: s, scale: o, axis: r } = e,
          a = s.options,
          l = a.fill,
          h = a.backgroundColor,
          { above: c = h, below: d = h } = l || {}
        n &&
          s.points.length &&
          (me(t, i),
          (function (t, e) {
            const { line: i, target: n, above: s, below: o, area: r, scale: a } = e,
              l = i._loop ? 'angle' : e.axis
            t.save(),
              'x' === l &&
                o !== s &&
                (Eo(t, n, r.top),
                Lo(t, { line: i, target: n, color: s, scale: a, property: l }),
                t.restore(),
                t.save(),
                Eo(t, n, r.bottom))
            Lo(t, { line: i, target: n, color: o, scale: a, property: l }), t.restore()
          })(t, { line: s, target: n, above: c, below: d, area: i, scale: o, axis: r }),
          be(t))
      }
      function Eo(t, e, i) {
        const { segments: n, points: s } = e
        let o = !0,
          r = !1
        t.beginPath()
        for (const a of n) {
          const { start: n, end: l } = a,
            h = s[n],
            c = s[_o(n, l, s)]
          o ? (t.moveTo(h.x, h.y), (o = !1)) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
            (r = !!e.pathSegment(t, a, { move: r })),
            r ? t.closePath() : t.lineTo(c.x, i)
        }
        t.lineTo(e.first().x, i), t.closePath(), t.clip()
      }
      function Lo(t, e) {
        const { line: i, target: n, property: s, color: o, scale: r } = e,
          a = (function (t, e, i) {
            const n = t.segments,
              s = t.points,
              o = e.points,
              r = []
            for (const a of n) {
              let { start: t, end: n } = a
              n = _o(t, n, s)
              const l = vo(i, s[t], s[n], a.loop)
              if (!e.segments) {
                r.push({ source: a, target: l, start: s[t], end: s[n] })
                continue
              }
              const h = ki(e, l)
              for (const e of h) {
                const t = vo(i, o[e.start], o[e.end], e.loop),
                  n = Mi(a, s, t)
                for (const s of n)
                  r.push({
                    source: s,
                    target: e,
                    start: { [i]: wo(l, t, 'start', Math.max) },
                    end: { [i]: wo(l, t, 'end', Math.min) },
                  })
              }
            }
            return r
          })(i, n, s)
        for (const { source: l, target: h, start: c, end: d } of a) {
          const { style: { backgroundColor: e = o } = {} } = l,
            a = !0 !== n
          t.save(), (t.fillStyle = e), Ro(t, r, a && vo(s, c, d)), t.beginPath()
          const u = !!i.pathSegment(t, l)
          let f
          if (a) {
            u ? t.closePath() : Io(t, n, d, s)
            const e = !!n.pathSegment(t, h, { move: u, reverse: !0 })
            ;(f = u && e), f || Io(t, n, c, s)
          }
          t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore()
        }
      }
      function Ro(t, e, i) {
        const { top: n, bottom: s } = e.chart.chartArea,
          { property: o, start: r, end: a } = i || {}
        'x' === o && (t.beginPath(), t.rect(r, n, a - r, s - n), t.clip())
      }
      function Io(t, e, i, n) {
        const s = e.interpolate(i, n)
        s && t.lineTo(s.x, s.y)
      }
      var zo = {
        id: 'filler',
        afterDatasetsUpdate(t, e, i) {
          const n = (t.data.datasets || []).length,
            s = []
          let o, r, a, l
          for (r = 0; r < n; ++r)
            (o = t.getDatasetMeta(r)),
              (a = o.dataset),
              (l = null),
              a &&
                a.options &&
                a instanceof Js &&
                (l = {
                  visible: t.isDatasetVisible(r),
                  index: r,
                  fill: Oo(a, r, n),
                  chart: t,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: a,
                }),
              (o.$filler = l),
              s.push(l)
          for (r = 0; r < n; ++r) (l = s[r]), l && !1 !== l.fill && (l.fill = So(s, r, i.propagate))
        },
        beforeDraw(t, e, i) {
          const n = 'beforeDraw' === i.drawTime,
            s = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea
          for (let r = s.length - 1; r >= 0; --r) {
            const e = s[r].$filler
            e && (e.line.updateControlPoints(o, e.axis), n && e.fill && To(t.ctx, e, o))
          }
        },
        beforeDatasetsDraw(t, e, i) {
          if ('beforeDatasetsDraw' !== i.drawTime) return
          const n = t.getSortedVisibleDatasetMetas()
          for (let s = n.length - 1; s >= 0; --s) {
            const e = n[s].$filler
            ko(e) && To(t.ctx, e, t.chartArea)
          }
        },
        beforeDatasetDraw(t, e, i) {
          const n = e.meta.$filler
          ko(n) && 'beforeDatasetDraw' === i.drawTime && To(t.ctx, n, t.chartArea)
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
      }
      const jo = (t, e) => {
        let { boxHeight: i = e, boxWidth: n = e } = t
        return (
          t.usePointStyle && ((i = Math.min(i, e)), (n = t.pointStyleWidth || Math.min(n, e))),
          { boxWidth: n, boxHeight: i, itemHeight: Math.max(e, i) }
        )
      }
      class Fo extends Kn {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0)
        }
        update(t, e, i) {
          ;(this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit()
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height))
        }
        buildLabels() {
          const t = this.options.labels || {}
          let e = $(t.generateLabels, [this.chart], this) || []
          t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e)
        }
        fit() {
          const { options: t, ctx: e } = this
          if (!t.display) return void (this.width = this.height = 0)
          const i = t.labels,
            n = Ee(i.font),
            s = n.size,
            o = this._computeTitleHeight(),
            { boxWidth: r, itemHeight: a } = jo(i, s)
          let l, h
          ;(e.font = n.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (h = this._fitRows(o, s, r, a) + 10))
              : ((h = this.maxHeight), (l = this._fitCols(o, n, r, a) + 10)),
            (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(h, t.maxHeight || this.maxHeight))
        }
        _fitRows(t, e, i, n) {
          const {
              ctx: s,
              maxWidth: o,
              options: {
                labels: { padding: r },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            h = n + r
          let c = t
          ;(s.textAlign = 'left'), (s.textBaseline = 'middle')
          let d = -1,
            u = -h
          return (
            this.legendItems.forEach((t, f) => {
              const p = i + e / 2 + s.measureText(t.text).width
              ;(0 === f || l[l.length - 1] + p + 2 * r > o) &&
                ((c += h), (l[l.length - (f > 0 ? 0 : 1)] = 0), (u += h), d++),
                (a[f] = { left: 0, top: u, row: d, width: p, height: n }),
                (l[l.length - 1] += p + r)
            }),
            c
          )
        }
        _fitCols(t, e, i, n) {
          const {
              ctx: s,
              maxHeight: o,
              options: {
                labels: { padding: r },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            h = o - t
          let c = r,
            d = 0,
            u = 0,
            f = 0,
            p = 0
          return (
            this.legendItems.forEach((t, o) => {
              const { itemWidth: g, itemHeight: m } = (function (t, e, i, n, s) {
                const o = (function (t, e, i, n) {
                    let s = t.text
                    s &&
                      'string' !== typeof s &&
                      (s = s.reduce((t, e) => (t.length > e.length ? t : e)))
                    return e + i.size / 2 + n.measureText(s).width
                  })(n, t, e, i),
                  r = (function (t, e, i) {
                    let n = t
                    'string' !== typeof e.text && (n = No(e, i))
                    return n
                  })(s, n, e.lineHeight)
                return { itemWidth: o, itemHeight: r }
              })(i, e, s, t, n)
              o > 0 &&
                u + m + 2 * r > h &&
                ((c += d + r), l.push({ width: d, height: u }), (f += d + r), p++, (d = u = 0)),
                (a[o] = { left: f, top: u, col: p, width: g, height: m }),
                (d = Math.max(d, g)),
                (u += m + r)
            }),
            (c += d),
            l.push({ width: d, height: u }),
            c
          )
        }
        adjustHitBoxes() {
          if (!this.options.display) return
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: { padding: n },
                rtl: s,
              },
            } = this,
            o = xi(s, this.left, this.width)
          if (this.isHorizontal()) {
            let s = 0,
              r = Bt(i, this.left + n, this.right - this.lineWidths[s])
            for (const a of e)
              s !== a.row &&
                ((s = a.row), (r = Bt(i, this.left + n, this.right - this.lineWidths[s]))),
                (a.top += this.top + t + n),
                (a.left = o.leftForLtr(o.x(r), a.width)),
                (r += a.width + n)
          } else {
            let s = 0,
              r = Bt(i, this.top + t + n, this.bottom - this.columnSizes[s].height)
            for (const a of e)
              a.col !== s &&
                ((s = a.col),
                (r = Bt(i, this.top + t + n, this.bottom - this.columnSizes[s].height))),
                (a.top = r),
                (a.left += this.left + n),
                (a.left = o.leftForLtr(o.x(a.left), a.width)),
                (r += a.height + n)
          }
        }
        isHorizontal() {
          return 'top' === this.options.position || 'bottom' === this.options.position
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx
            me(t, this), this._draw(), be(t)
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
            { align: s, labels: o } = t,
            r = le.color,
            a = xi(t.rtl, this.left, this.width),
            l = Ee(o.font),
            { padding: h } = o,
            c = l.size,
            d = c / 2
          let u
          this.drawTitle(),
            (n.textAlign = a.textAlign('left')),
            (n.textBaseline = 'middle'),
            (n.lineWidth = 0.5),
            (n.font = l.string)
          const { boxWidth: f, boxHeight: p, itemHeight: g } = jo(o, c),
            m = this.isHorizontal(),
            b = this._computeTitleHeight()
          ;(u = m
            ? { x: Bt(s, this.left + h, this.right - i[0]), y: this.top + h + b, line: 0 }
            : { x: this.left + h, y: Bt(s, this.top + b + h, this.bottom - e[0].height), line: 0 }),
            yi(this.ctx, t.textDirection)
          const x = g + h
          this.legendItems.forEach((y, v) => {
            ;(n.strokeStyle = y.fontColor), (n.fillStyle = y.fontColor)
            const _ = n.measureText(y.text).width,
              w = a.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
              M = f + d + _
            let k = u.x,
              S = u.y
            a.setWidth(this.width),
              m
                ? v > 0 &&
                  k + M + h > this.right &&
                  ((S = u.y += x),
                  u.line++,
                  (k = u.x = Bt(s, this.left + h, this.right - i[u.line])))
                : v > 0 &&
                  S + x > this.bottom &&
                  ((k = u.x = k + e[u.line].width + h),
                  u.line++,
                  (S = u.y = Bt(s, this.top + b + h, this.bottom - e[u.line].height)))
            if (
              ((function (t, e, i) {
                if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return
                n.save()
                const s = Y(i.lineWidth, 1)
                if (
                  ((n.fillStyle = Y(i.fillStyle, r)),
                  (n.lineCap = Y(i.lineCap, 'butt')),
                  (n.lineDashOffset = Y(i.lineDashOffset, 0)),
                  (n.lineJoin = Y(i.lineJoin, 'miter')),
                  (n.lineWidth = s),
                  (n.strokeStyle = Y(i.strokeStyle, r)),
                  n.setLineDash(Y(i.lineDash, [])),
                  o.usePointStyle)
                ) {
                  const r = {
                      radius: (p * Math.SQRT2) / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: s,
                    },
                    l = a.xPlus(t, f / 2)
                  pe(n, r, l, e + d, o.pointStyleWidth && f)
                } else {
                  const o = e + Math.max((c - p) / 2, 0),
                    r = a.leftForLtr(t, f),
                    l = Ae(i.borderRadius)
                  n.beginPath(),
                    Object.values(l).some((t) => 0 !== t)
                      ? Me(n, { x: r, y: o, w: f, h: p, radius: l })
                      : n.rect(r, o, f, p),
                    n.fill(),
                    0 !== s && n.stroke()
                }
                n.restore()
              })(a.x(k), S, y),
              (k = ((t, e, i, n) =>
                t === (n ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
                w,
                k + f + d,
                m ? k + M : this.right,
                t.rtl,
              )),
              (function (t, e, i) {
                we(n, i.text, t, e + g / 2, l, {
                  strikethrough: i.hidden,
                  textAlign: a.textAlign(i.textAlign),
                })
              })(a.x(k), S, y),
              m)
            )
              u.x += M + h
            else if ('string' !== typeof y.text) {
              const t = l.lineHeight
              u.y += No(y, t) + h
            } else u.y += x
          }),
            vi(this.ctx, t.textDirection)
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = Ee(e.font),
            n = Te(e.padding)
          if (!e.display) return
          const s = xi(t.rtl, this.left, this.width),
            o = this.ctx,
            r = e.position,
            a = i.size / 2,
            l = n.top + a
          let h,
            c = this.left,
            d = this.width
          if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
              (h = this.top + l),
              (c = Bt(t.align, c, this.right - d))
          else {
            const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0)
            h =
              l +
              Bt(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
          }
          const u = Bt(r, c, c + d)
          ;(o.textAlign = s.textAlign(Vt(r))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = i.string),
            we(o, e.text, u, h, i)
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = Ee(t.font),
            i = Te(t.padding)
          return t.display ? e.lineHeight + i.height : 0
        }
        _getLegendItemAt(t, e) {
          let i, n, s
          if (Tt(t, this.left, this.right) && Tt(e, this.top, this.bottom))
            for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
              if (((n = s[i]), Tt(t, n.left, n.left + n.width) && Tt(e, n.top, n.top + n.height)))
                return this.legendItems[i]
          return null
        }
        handleEvent(t) {
          const e = this.options
          if (
            !(function (t, e) {
              if (('mousemove' === t || 'mouseout' === t) && (e.onHover || e.onLeave)) return !0
              if (e.onClick && ('click' === t || 'mouseup' === t)) return !0
              return !1
            })(t.type, e)
          )
            return
          const i = this._getLegendItemAt(t.x, t.y)
          if ('mousemove' === t.type || 'mouseout' === t.type) {
            const o = this._hoveredItem,
              r =
                ((s = i),
                null !== (n = o) &&
                  null !== s &&
                  n.datasetIndex === s.datasetIndex &&
                  n.index === s.index)
            o && !r && $(e.onLeave, [t, o, this], this),
              (this._hoveredItem = i),
              i && !r && $(e.onHover, [t, i, this], this)
          } else i && $(e.onClick, [t, i, this], this)
          var n, s
        }
      }
      function No(t, e) {
        return e * (t.text ? t.text.length : 0)
      }
      var Vo = {
        id: 'legend',
        _element: Fo,
        start(t, e, i) {
          const n = (t.legend = new Fo({ ctx: t.ctx, options: i, chart: t }))
          En.configure(t, n, i), En.addBox(t, n)
        },
        stop(t) {
          En.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, e, i) {
          const n = t.legend
          En.configure(t, n, i), (n.options = i)
        },
        afterUpdate(t) {
          const e = t.legend
          e.buildLabels(), e.adjustHitBoxes()
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event)
        },
        defaults: {
          display: !0,
          position: 'top',
          align: 'center',
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const n = e.datasetIndex,
              s = i.chart
            s.isDatasetVisible(n) ? (s.hide(n), (e.hidden = !0)) : (s.show(n), (e.hidden = !1))
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: i,
                    pointStyle: n,
                    textAlign: s,
                    color: o,
                    useBorderRadius: r,
                    borderRadius: a,
                  },
                } = t.legend.options
              return t._getSortedDatasetMetas().map((t) => {
                const l = t.controller.getStyle(i ? 0 : void 0),
                  h = Te(l.borderWidth)
                return {
                  text: e[t.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (h.width + h.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: n || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: s || l.textAlign,
                  borderRadius: r && (a || l.borderRadius),
                  datasetIndex: t.index,
                }
              }, this)
            },
          },
          title: { color: (t) => t.chart.options.color, display: !1, position: 'center', text: '' },
        },
        descriptors: {
          _scriptable: (t) => !t.startsWith('on'),
          labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
        },
      }
      class Bo extends Kn {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0)
        }
        update(t, e) {
          const i = this.options
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width = this.height = this.right = this.bottom = 0)
          ;(this.width = this.right = t), (this.height = this.bottom = e)
          const n = B(i.text) ? i.text.length : 1
          this._padding = Te(i.padding)
          const s = n * Ee(i.font).lineHeight + this._padding.height
          this.isHorizontal() ? (this.height = s) : (this.width = s)
        }
        isHorizontal() {
          const t = this.options.position
          return 'top' === t || 'bottom' === t
        }
        _drawArgs(t) {
          const { top: e, left: i, bottom: n, right: s, options: o } = this,
            r = o.align
          let a,
            l,
            h,
            c = 0
          return (
            this.isHorizontal()
              ? ((l = Bt(r, i, s)), (h = e + t), (a = s - i))
              : ('left' === o.position
                  ? ((l = i + t), (h = Bt(r, n, e)), (c = -0.5 * lt))
                  : ((l = s - t), (h = Bt(r, e, n)), (c = 0.5 * lt)),
                (a = n - e)),
            { titleX: l, titleY: h, maxWidth: a, rotation: c }
          )
        }
        draw() {
          const t = this.ctx,
            e = this.options
          if (!e.display) return
          const i = Ee(e.font),
            n = i.lineHeight / 2 + this._padding.top,
            { titleX: s, titleY: o, maxWidth: r, rotation: a } = this._drawArgs(n)
          we(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: r,
            rotation: a,
            textAlign: Vt(e.align),
            textBaseline: 'middle',
            translation: [s, o],
          })
        }
      }
      var Wo = {
        id: 'title',
        _element: Bo,
        start(t, e, i) {
          !(function (t, e) {
            const i = new Bo({ ctx: t.ctx, options: e, chart: t })
            En.configure(t, i, e), En.addBox(t, i), (t.titleBlock = i)
          })(t, i)
        },
        stop(t) {
          const e = t.titleBlock
          En.removeBox(t, e), delete t.titleBlock
        },
        beforeUpdate(t, e, i) {
          const n = t.titleBlock
          En.configure(t, n, i), (n.options = i)
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'bold' },
          fullSize: !0,
          padding: 10,
          position: 'top',
          text: '',
          weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      }
      const Ho = new WeakMap()
      var Zo = {
        id: 'subtitle',
        start(t, e, i) {
          const n = new Bo({ ctx: t.ctx, options: i, chart: t })
          En.configure(t, n, i), En.addBox(t, n), Ho.set(t, n)
        },
        stop(t) {
          En.removeBox(t, Ho.get(t)), Ho.delete(t)
        },
        beforeUpdate(t, e, i) {
          const n = Ho.get(t)
          En.configure(t, n, i), (n.options = i)
        },
        defaults: {
          align: 'center',
          display: !1,
          font: { weight: 'normal' },
          fullSize: !0,
          padding: 0,
          position: 'top',
          text: '',
          weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
      }
      const Yo = {
        average(t) {
          if (!t.length) return !1
          let e,
            i,
            n = 0,
            s = 0,
            o = 0
          for (e = 0, i = t.length; e < i; ++e) {
            const i = t[e].element
            if (i && i.hasValue()) {
              const t = i.tooltipPosition()
              ;(n += t.x), (s += t.y), ++o
            }
          }
          return { x: n / o, y: s / o }
        },
        nearest(t, e) {
          if (!t.length) return !1
          let i,
            n,
            s,
            o = e.x,
            r = e.y,
            a = Number.POSITIVE_INFINITY
          for (i = 0, n = t.length; i < n; ++i) {
            const n = t[i].element
            if (n && n.hasValue()) {
              const t = Ot(e, n.getCenterPoint())
              t < a && ((a = t), (s = n))
            }
          }
          if (s) {
            const t = s.tooltipPosition()
            ;(o = t.x), (r = t.y)
          }
          return { x: o, y: r }
        },
      }
      function Uo(t, e) {
        return e && (B(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
      }
      function $o(t) {
        return ('string' === typeof t || t instanceof String) && t.indexOf('\n') > -1
          ? t.split('\n')
          : t
      }
      function Xo(t, e) {
        const { element: i, datasetIndex: n, index: s } = e,
          o = t.getDatasetMeta(n).controller,
          { label: r, value: a } = o.getLabelAndValue(s)
        return {
          chart: t,
          label: r,
          parsed: o.getParsed(s),
          raw: t.data.datasets[n].data[s],
          formattedValue: a,
          dataset: o.getDataset(),
          dataIndex: s,
          datasetIndex: n,
          element: i,
        }
      }
      function qo(t, e) {
        const i = t.chart.ctx,
          { body: n, footer: s, title: o } = t,
          { boxWidth: r, boxHeight: a } = e,
          l = Ee(e.bodyFont),
          h = Ee(e.titleFont),
          c = Ee(e.footerFont),
          d = o.length,
          u = s.length,
          f = n.length,
          p = Te(e.padding)
        let g = p.height,
          m = 0,
          b = n.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0)
        if (
          ((b += t.beforeBody.length + t.afterBody.length),
          d && (g += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
          b)
        ) {
          g +=
            f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
            (b - f) * l.lineHeight +
            (b - 1) * e.bodySpacing
        }
        u && (g += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing)
        let x = 0
        const y = function (t) {
          m = Math.max(m, i.measureText(t).width + x)
        }
        return (
          i.save(),
          (i.font = h.string),
          X(t.title, y),
          (i.font = l.string),
          X(t.beforeBody.concat(t.afterBody), y),
          (x = e.displayColors ? r + 2 + e.boxPadding : 0),
          X(n, (t) => {
            X(t.before, y), X(t.lines, y), X(t.after, y)
          }),
          (x = 0),
          (i.font = c.string),
          X(t.footer, y),
          i.restore(),
          (m += p.width),
          { width: m, height: g }
        )
      }
      function Ko(t, e, i, n) {
        const { x: s, width: o } = i,
          {
            width: r,
            chartArea: { left: a, right: l },
          } = t
        let h = 'center'
        return (
          'center' === n
            ? (h = s <= (a + l) / 2 ? 'left' : 'right')
            : s <= o / 2
              ? (h = 'left')
              : s >= r - o / 2 && (h = 'right'),
          (function (t, e, i, n) {
            const { x: s, width: o } = n,
              r = i.caretSize + i.caretPadding
            return (
              ('left' === t && s + o + r > e.width) || ('right' === t && s - o - r < 0) || void 0
            )
          })(h, t, e, i) && (h = 'center'),
          h
        )
      }
      function Go(t, e, i) {
        const n =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: i, height: n } = e
            return i < n / 2 ? 'top' : i > t.height - n / 2 ? 'bottom' : 'center'
          })(t, i)
        return { xAlign: i.xAlign || e.xAlign || Ko(t, e, i, n), yAlign: n }
      }
      function Jo(t, e, i, n) {
        const { caretSize: s, caretPadding: o, cornerRadius: r } = t,
          { xAlign: a, yAlign: l } = i,
          h = s + o,
          { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = Ae(r)
        let p = (function (t, e) {
          let { x: i, width: n } = t
          return 'right' === e ? (i -= n) : 'center' === e && (i -= n / 2), i
        })(e, a)
        const g = (function (t, e, i) {
          let { y: n, height: s } = t
          return 'top' === e ? (n += i) : (n -= 'bottom' === e ? s + i : s / 2), n
        })(e, l, h)
        return (
          'center' === l
            ? 'left' === a
              ? (p += h)
              : 'right' === a && (p -= h)
            : 'left' === a
              ? (p -= Math.max(c, u) + s)
              : 'right' === a && (p += Math.max(d, f) + s),
          { x: At(p, 0, n.width - e.width), y: At(g, 0, n.height - e.height) }
        )
      }
      function Qo(t, e, i) {
        const n = Te(i.padding)
        return 'center' === e
          ? t.x + t.width / 2
          : 'right' === e
            ? t.x + t.width - n.right
            : t.x + n.left
      }
      function tr(t) {
        return Uo([], $o(t))
      }
      function er(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks
        return i ? t.override(i) : t
      }
      const ir = {
        beforeTitle: F,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              i = e.chart.data.labels,
              n = i ? i.length : 0
            if (this && this.options && 'dataset' === this.options.mode)
              return e.dataset.label || ''
            if (e.label) return e.label
            if (n > 0 && e.dataIndex < n) return i[e.dataIndex]
          }
          return ''
        },
        afterTitle: F,
        beforeBody: F,
        beforeLabel: F,
        label(t) {
          if (this && this.options && 'dataset' === this.options.mode)
            return t.label + ': ' + t.formattedValue || t.formattedValue
          let e = t.dataset.label || ''
          e && (e += ': ')
          const i = t.formattedValue
          return V(i) || (e += i), e
        },
        labelColor(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          }
        },
        labelTextColor() {
          return this.options.bodyColor
        },
        labelPointStyle(t) {
          const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
          return { pointStyle: e.pointStyle, rotation: e.rotation }
        },
        afterLabel: F,
        afterBody: F,
        beforeFooter: F,
        footer: F,
        afterFooter: F,
      }
      function nr(t, e, i, n) {
        const s = t[e].call(i, n)
        return 'undefined' === typeof s ? ir[e].call(i, n) : s
      }
      class sr extends Kn {
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0)
        }
        initialize(t) {
          ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
        }
        _resolveAnimations() {
          const t = this._cachedAnimations
          if (t) return t
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            n = i.enabled && e.options.animation && i.animations,
            s = new Li(this.chart, n)
          return n._cacheable && (this._cachedAnimations = Object.freeze(s)), s
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              ((t = this.chart.getContext()),
              (e = this),
              (i = this._tooltipItems),
              Re(t, { tooltip: e, tooltipItems: i, type: 'tooltip' })))
          )
          var t, e, i
        }
        getTitle(t, e) {
          const { callbacks: i } = e,
            n = nr(i, 'beforeTitle', this, t),
            s = nr(i, 'title', this, t),
            o = nr(i, 'afterTitle', this, t)
          let r = []
          return (r = Uo(r, $o(n))), (r = Uo(r, $o(s))), (r = Uo(r, $o(o))), r
        }
        getBeforeBody(t, e) {
          return tr(nr(e.callbacks, 'beforeBody', this, t))
        }
        getBody(t, e) {
          const { callbacks: i } = e,
            n = []
          return (
            X(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                s = er(i, t)
              Uo(e.before, $o(nr(s, 'beforeLabel', this, t))),
                Uo(e.lines, nr(s, 'label', this, t)),
                Uo(e.after, $o(nr(s, 'afterLabel', this, t))),
                n.push(e)
            }),
            n
          )
        }
        getAfterBody(t, e) {
          return tr(nr(e.callbacks, 'afterBody', this, t))
        }
        getFooter(t, e) {
          const { callbacks: i } = e,
            n = nr(i, 'beforeFooter', this, t),
            s = nr(i, 'footer', this, t),
            o = nr(i, 'afterFooter', this, t)
          let r = []
          return (r = Uo(r, $o(n))), (r = Uo(r, $o(s))), (r = Uo(r, $o(o))), r
        }
        _createItems(t) {
          const e = this._active,
            i = this.chart.data,
            n = [],
            s = [],
            o = []
          let r,
            a,
            l = []
          for (r = 0, a = e.length; r < a; ++r) l.push(Xo(this.chart, e[r]))
          return (
            t.filter && (l = l.filter((e, n, s) => t.filter(e, n, s, i))),
            t.itemSort && (l = l.sort((e, n) => t.itemSort(e, n, i))),
            X(l, (e) => {
              const i = er(t.callbacks, e)
              n.push(nr(i, 'labelColor', this, e)),
                s.push(nr(i, 'labelPointStyle', this, e)),
                o.push(nr(i, 'labelTextColor', this, e))
            }),
            (this.labelColors = n),
            (this.labelPointStyles = s),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
          )
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            n = this._active
          let s,
            o = []
          if (n.length) {
            const t = Yo[i.position].call(this, n, this._eventPosition)
            ;(o = this._createItems(i)),
              (this.title = this.getTitle(o, i)),
              (this.beforeBody = this.getBeforeBody(o, i)),
              (this.body = this.getBody(o, i)),
              (this.afterBody = this.getAfterBody(o, i)),
              (this.footer = this.getFooter(o, i))
            const e = (this._size = qo(this, i)),
              r = Object.assign({}, t, e),
              a = Go(this.chart, i, r),
              l = Jo(i, r, a, this.chart)
            ;(this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (s = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              })
          } else 0 !== this.opacity && (s = { opacity: 0 })
          ;(this._tooltipItems = o),
            (this.$context = void 0),
            s && this._resolveAnimations().update(this, s),
            t &&
              i.external &&
              i.external.call(this, { chart: this.chart, tooltip: this, replay: e })
        }
        drawCaret(t, e, i, n) {
          const s = this.getCaretPosition(t, i, n)
          e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3)
        }
        getCaretPosition(t, e, i) {
          const { xAlign: n, yAlign: s } = this,
            { caretSize: o, cornerRadius: r } = i,
            { topLeft: a, topRight: l, bottomLeft: h, bottomRight: c } = Ae(r),
            { x: d, y: u } = t,
            { width: f, height: p } = e
          let g, m, b, x, y, v
          return (
            'center' === s
              ? ((y = u + p / 2),
                'left' === n
                  ? ((g = d), (m = g - o), (x = y + o), (v = y - o))
                  : ((g = d + f), (m = g + o), (x = y - o), (v = y + o)),
                (b = g))
              : ((m =
                  'left' === n
                    ? d + Math.max(a, h) + o
                    : 'right' === n
                      ? d + f - Math.max(l, c) - o
                      : this.caretX),
                'top' === s
                  ? ((x = u), (y = x - o), (g = m - o), (b = m + o))
                  : ((x = u + p), (y = x + o), (g = m + o), (b = m - o)),
                (v = x)),
            { x1: g, x2: m, x3: b, y1: x, y2: y, y3: v }
          )
        }
        drawTitle(t, e, i) {
          const n = this.title,
            s = n.length
          let o, r, a
          if (s) {
            const l = xi(i.rtl, this.x, this.width)
            for (
              t.x = Qo(this, i.titleAlign, i),
                e.textAlign = l.textAlign(i.titleAlign),
                e.textBaseline = 'middle',
                o = Ee(i.titleFont),
                r = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = o.string,
                a = 0;
              a < s;
              ++a
            )
              e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + r),
                a + 1 === s && (t.y += i.titleMarginBottom - r)
          }
        }
        _drawColorBox(t, e, i, n, s) {
          const o = this.labelColors[i],
            r = this.labelPointStyles[i],
            { boxHeight: a, boxWidth: l } = s,
            h = Ee(s.bodyFont),
            c = Qo(this, 'left', s),
            d = n.x(c),
            u = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
            f = e.y + u
          if (s.usePointStyle) {
            const e = {
                radius: Math.min(l, a) / 2,
                pointStyle: r.pointStyle,
                rotation: r.rotation,
                borderWidth: 1,
              },
              i = n.leftForLtr(d, l) + l / 2,
              h = f + a / 2
            ;(t.strokeStyle = s.multiKeyBackground),
              (t.fillStyle = s.multiKeyBackground),
              fe(t, e, i, h),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              fe(t, e, i, h)
          } else {
            ;(t.lineWidth = W(o.borderWidth)
              ? Math.max(...Object.values(o.borderWidth))
              : o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0)
            const e = n.leftForLtr(d, l),
              i = n.leftForLtr(n.xPlus(d, 1), l - 2),
              r = Ae(o.borderRadius)
            Object.values(r).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = s.multiKeyBackground),
                Me(t, { x: e, y: f, w: l, h: a, radius: r }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                Me(t, { x: i, y: f + 1, w: l - 2, h: a - 2, radius: r }),
                t.fill())
              : ((t.fillStyle = s.multiKeyBackground),
                t.fillRect(e, f, l, a),
                t.strokeRect(e, f, l, a),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(i, f + 1, l - 2, a - 2))
          }
          t.fillStyle = this.labelTextColors[i]
        }
        drawBody(t, e, i) {
          const { body: n } = this,
            {
              bodySpacing: s,
              bodyAlign: o,
              displayColors: r,
              boxHeight: a,
              boxWidth: l,
              boxPadding: h,
            } = i,
            c = Ee(i.bodyFont)
          let d = c.lineHeight,
            u = 0
          const f = xi(i.rtl, this.x, this.width),
            p = function (i) {
              e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + s)
            },
            g = f.textAlign(o)
          let m, b, x, y, v, _, w
          for (
            e.textAlign = o,
              e.textBaseline = 'middle',
              e.font = c.string,
              t.x = Qo(this, g, i),
              e.fillStyle = i.bodyColor,
              X(this.beforeBody, p),
              u = r && 'right' !== g ? ('center' === o ? l / 2 + h : l + 2 + h) : 0,
              y = 0,
              _ = n.length;
            y < _;
            ++y
          ) {
            for (
              m = n[y],
                b = this.labelTextColors[y],
                e.fillStyle = b,
                X(m.before, p),
                x = m.lines,
                r &&
                  x.length &&
                  (this._drawColorBox(e, t, y, f, i), (d = Math.max(c.lineHeight, a))),
                v = 0,
                w = x.length;
              v < w;
              ++v
            )
              p(x[v]), (d = c.lineHeight)
            X(m.after, p)
          }
          ;(u = 0), (d = c.lineHeight), X(this.afterBody, p), (t.y -= s)
        }
        drawFooter(t, e, i) {
          const n = this.footer,
            s = n.length
          let o, r
          if (s) {
            const a = xi(i.rtl, this.x, this.width)
            for (
              t.x = Qo(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = a.textAlign(i.footerAlign),
                e.textBaseline = 'middle',
                o = Ee(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = o.string,
                r = 0;
              r < s;
              ++r
            )
              e.fillText(n[r], a.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + i.footerSpacing)
          }
        }
        drawBackground(t, e, i, n) {
          const { xAlign: s, yAlign: o } = this,
            { x: r, y: a } = t,
            { width: l, height: h } = i,
            { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = Ae(n.cornerRadius)
          ;(e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(r + c, a),
            'top' === o && this.drawCaret(t, e, i, n),
            e.lineTo(r + l - d, a),
            e.quadraticCurveTo(r + l, a, r + l, a + d),
            'center' === o && 'right' === s && this.drawCaret(t, e, i, n),
            e.lineTo(r + l, a + h - f),
            e.quadraticCurveTo(r + l, a + h, r + l - f, a + h),
            'bottom' === o && this.drawCaret(t, e, i, n),
            e.lineTo(r + u, a + h),
            e.quadraticCurveTo(r, a + h, r, a + h - u),
            'center' === o && 'left' === s && this.drawCaret(t, e, i, n),
            e.lineTo(r, a + c),
            e.quadraticCurveTo(r, a, r + c, a),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke()
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            i = this.$animations,
            n = i && i.x,
            s = i && i.y
          if (n || s) {
            const i = Yo[t.position].call(this, this._active, this._eventPosition)
            if (!i) return
            const o = (this._size = qo(this, t)),
              r = Object.assign({}, i, this._size),
              a = Go(e, t, r),
              l = Jo(t, r, a, e)
            ;(n._to === l.x && s._to === l.y) ||
              ((this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, l))
          }
        }
        _willRender() {
          return !!this.opacity
        }
        draw(t) {
          const e = this.options.setContext(this.getContext())
          let i = this.opacity
          if (!i) return
          this._updateAnimationTarget(e)
          const n = { width: this.width, height: this.height },
            s = { x: this.x, y: this.y }
          i = Math.abs(i) < 0.001 ? 0 : i
          const o = Te(e.padding),
            r =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length
          e.enabled &&
            r &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(s, t, n, e),
            yi(t, e.textDirection),
            (s.y += o.top),
            this.drawTitle(s, t, e),
            this.drawBody(s, t, e),
            this.drawFooter(s, t, e),
            vi(t, e.textDirection),
            t.restore())
        }
        getActiveElements() {
          return this._active || []
        }
        setActiveElements(t, e) {
          const i = this._active,
            n = t.map((t) => {
              let { datasetIndex: e, index: i } = t
              const n = this.chart.getDatasetMeta(e)
              if (!n) throw new Error('Cannot find a dataset at index ' + e)
              return { datasetIndex: e, element: n.data[i], index: i }
            }),
            s = !q(i, n),
            o = this._positionChanged(n, e)
          ;(s || o) &&
            ((this._active = n),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0))
        }
        handleEvent(t, e) {
          let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          if (e && this._ignoreReplayEvents) return !1
          this._ignoreReplayEvents = !1
          const n = this.options,
            s = this._active || [],
            o = this._getActiveElements(t, s, e, i),
            r = this._positionChanged(o, t),
            a = e || !q(o, s) || r
          return (
            a &&
              ((this._active = o),
              (n.enabled || n.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
            a
          )
        }
        _getActiveElements(t, e, i, n) {
          const s = this.options
          if ('mouseout' === t.type) return []
          if (!n)
            return e.filter(
              (t) =>
                this.chart.data.datasets[t.datasetIndex] &&
                void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index),
            )
          const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i)
          return s.reverse && o.reverse(), o
        }
        _positionChanged(t, e) {
          const { caretX: i, caretY: n, options: s } = this,
            o = Yo[s.position].call(this, t, e)
          return !1 !== o && (i !== o.x || n !== o.y)
        }
      }
      ;(0, s.Z)(sr, 'positioners', Yo)
      var or = {
          id: 'tooltip',
          _element: sr,
          positioners: Yo,
          afterInit(t, e, i) {
            i && (t.tooltip = new sr({ chart: t, options: i }))
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
          },
          afterDraw(t) {
            const e = t.tooltip
            if (e && e._willRender()) {
              const i = { tooltip: e }
              if (!1 === t.notifyPlugins('beforeTooltipDraw', { ...i, cancelable: !0 })) return
              e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i)
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const i = e.replay
              t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
              },
              opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: ir,
          },
          defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
          descriptors: {
            _scriptable: (t) => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
          },
          additionalOptionScopes: ['interaction'],
        },
        rr = Object.freeze({
          __proto__: null,
          Colors: mo,
          Decimation: yo,
          Filler: zo,
          Legend: Vo,
          SubTitle: Zo,
          Title: Wo,
          Tooltip: or,
        })
      function ar(t, e, i, n) {
        const s = t.indexOf(e)
        if (-1 === s)
          return ((t, e, i, n) => (
            'string' === typeof e
              ? ((i = t.push(e) - 1), n.unshift({ index: i, label: e }))
              : isNaN(e) && (i = null),
            i
          ))(t, e, i, n)
        return s !== t.lastIndexOf(e) ? i : s
      }
      function lr(t) {
        const e = this.getLabels()
        return t >= 0 && t < e.length ? e[t] : t
      }
      class hr extends rs {
        constructor(t) {
          super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = [])
        }
        init(t) {
          const e = this._addedLabels
          if (e.length) {
            const t = this.getLabels()
            for (const { index: i, label: n } of e) t[i] === n && t.splice(i, 1)
            this._addedLabels = []
          }
          super.init(t)
        }
        parse(t, e) {
          if (V(t)) return null
          const i = this.getLabels()
          return ((t, e) => (null === t ? null : At(Math.round(t), 0, e)))(
            (e = isFinite(e) && i[e] === t ? e : ar(i, t, Y(e, t), this._addedLabels)),
            i.length - 1,
          )
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds()
          let { min: i, max: n } = this.getMinMax(!0)
          'ticks' === this.options.bounds && (t || (i = 0), e || (n = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = n)
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            i = this.options.offset,
            n = []
          let s = this.getLabels()
          ;(s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0))
          for (let o = t; o <= e; o++) n.push({ value: o })
          return n
        }
        getLabelForValue(t) {
          return lr.call(this, t)
        }
        configure() {
          super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
        }
        getPixelForValue(t) {
          return (
            'number' !== typeof t && (t = this.parse(t)),
            null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
          )
        }
        getPixelForTick(t) {
          const e = this.ticks
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
          return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
        }
        getBasePixel() {
          return this.bottom
        }
      }
      function cr(t, e) {
        const i = [],
          {
            bounds: n,
            step: s,
            min: o,
            max: r,
            precision: a,
            count: l,
            maxTicks: h,
            maxDigits: c,
            includeBounds: d,
          } = t,
          u = s || 1,
          f = h - 1,
          { min: p, max: g } = e,
          m = !V(o),
          b = !V(r),
          x = !V(l),
          y = (g - p) / (c + 1)
        let v,
          _,
          w,
          M,
          k = yt((g - p) / f / u) * u
        if (k < 1e-14 && !m && !b) return [{ value: p }, { value: g }]
        ;(M = Math.ceil(g / k) - Math.floor(p / k)),
          M > f && (k = yt((M * k) / f / u) * u),
          V(a) || ((v = Math.pow(10, a)), (k = Math.ceil(k * v) / v)),
          'ticks' === n
            ? ((_ = Math.floor(p / k) * k), (w = Math.ceil(g / k) * k))
            : ((_ = p), (w = g)),
          m &&
          b &&
          s &&
          (function (t, e) {
            const i = Math.round(t)
            return i - e <= t && i + e >= t
          })((r - o) / s, k / 1e3)
            ? ((M = Math.round(Math.min((r - o) / k, h))), (k = (r - o) / M), (_ = o), (w = r))
            : x
              ? ((_ = m ? o : _), (w = b ? r : w), (M = l - 1), (k = (w - _) / M))
              : ((M = (w - _) / k),
                (M = xt(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M)))
        const S = Math.max(kt(k), kt(_))
        ;(v = Math.pow(10, V(a) ? S : a)), (_ = Math.round(_ * v) / v), (w = Math.round(w * v) / v)
        let O = 0
        for (
          m &&
          (d && _ !== o
            ? (i.push({ value: o }),
              _ < o && O++,
              xt(Math.round((_ + O * k) * v) / v, o, dr(o, y, t)) && O++)
            : _ < o && O++);
          O < M;
          ++O
        ) {
          const t = Math.round((_ + O * k) * v) / v
          if (b && t > r) break
          i.push({ value: t })
        }
        return (
          b && d && w !== r
            ? i.length && xt(i[i.length - 1].value, r, dr(r, y, t))
              ? (i[i.length - 1].value = r)
              : i.push({ value: r })
            : (b && w !== r) || i.push({ value: w }),
          i
        )
      }
      function dr(t, e, i) {
        let { horizontal: n, minRotation: s } = i
        const o = wt(s),
          r = (n ? Math.sin(o) : Math.cos(o)) || 0.001,
          a = 0.75 * e * ('' + t).length
        return Math.min(e / r, a)
      }
      ;(0, s.Z)(hr, 'id', 'category'), (0, s.Z)(hr, 'defaults', { ticks: { callback: lr } })
      class ur extends rs {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0)
        }
        parse(t, e) {
          return V(t) || (('number' === typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: i } = this.getUserBounds()
          let { min: n, max: s } = this
          const o = (t) => (n = e ? n : t),
            r = (t) => (s = i ? s : t)
          if (t) {
            const t = bt(n),
              e = bt(s)
            t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0)
          }
          if (n === s) {
            let e = 0 === s ? 1 : Math.abs(0.05 * s)
            r(s + e), t || o(n - e)
          }
          ;(this.min = n), (this.max = s)
        }
        getTickLimit() {
          const t = this.options.ticks
          let e,
            { maxTicksLimit: i, stepSize: n } = t
          return (
            n
              ? ((e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
                e > 1e3 &&
                  (console.warn(
                    'scales.'
                      .concat(this.id, '.ticks.stepSize: ')
                      .concat(n, ' would result generating up to ')
                      .concat(e, ' ticks. Limiting to 1000.'),
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (i = i || 11)),
            i && (e = Math.min(i, e)),
            e
          )
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks
          let i = this.getTickLimit()
          i = Math.max(2, i)
          const n = cr(
            {
              maxTicks: i,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this,
          )
          return (
            'ticks' === t.bounds && _t(n, this, 'value'),
            t.reverse
              ? (n.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            n
          )
        }
        configure() {
          const t = this.ticks
          let e = this.min,
            i = this.max
          if ((super.configure(), this.options.offset && t.length)) {
            const n = (i - e) / Math.max(t.length - 1, 1) / 2
            ;(e -= n), (i += n)
          }
          ;(this._startValue = e), (this._endValue = i), (this._valueRange = i - e)
        }
        getLabelForValue(t) {
          return te(t, this.chart.options.locale, this.options.ticks.format)
        }
      }
      class fr extends ur {
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0)
          ;(this.min = H(t) ? t : 0), (this.max = H(e) ? e : 1), this.handleTickRangeOptions()
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = wt(this.options.ticks.minRotation),
            n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            s = this._resolveTickFontOptions(0)
          return Math.ceil(e / Math.min(40, s.lineHeight / n))
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
          return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
      }
      ;(0, s.Z)(fr, 'id', 'linear'),
        (0, s.Z)(fr, 'defaults', { ticks: { callback: ie.formatters.numeric } })
      const pr = (t) => Math.floor(mt(t)),
        gr = (t, e) => Math.pow(10, pr(t) + e)
      function mr(t) {
        return 1 === t / Math.pow(10, pr(t))
      }
      function br(t, e, i) {
        const n = Math.pow(10, i),
          s = Math.floor(t / n)
        return Math.ceil(e / n) - s
      }
      function xr(t, e) {
        let { min: i, max: n } = e
        i = Z(t.min, i)
        const s = [],
          o = pr(i)
        let r = (function (t, e) {
            let i = pr(e - t)
            for (; br(t, e, i) > 10; ) i++
            for (; br(t, e, i) < 10; ) i--
            return Math.min(i, pr(t))
          })(i, n),
          a = r < 0 ? Math.pow(10, Math.abs(r)) : 1
        const l = Math.pow(10, r),
          h = o > r ? Math.pow(10, o) : 0,
          c = Math.round((i - h) * a) / a,
          d = Math.floor((i - h) / l / 10) * l * 10
        let u = Math.floor((c - d) / Math.pow(10, r)),
          f = Z(t.min, Math.round((h + d + u * Math.pow(10, r)) * a) / a)
        for (; f < n; )
          s.push({ value: f, major: mr(f), significand: u }),
            u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
            u >= 20 && (r++, (u = 2), (a = r >= 0 ? 1 : a)),
            (f = Math.round((h + d + u * Math.pow(10, r)) * a) / a)
        const p = Z(t.max, f)
        return s.push({ value: p, major: mr(p), significand: u }), s
      }
      class yr extends rs {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0)
        }
        parse(t, e) {
          const i = ur.prototype.parse.apply(this, [t, e])
          if (0 !== i) return H(i) && i > 0 ? i : null
          this._zero = !0
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0)
          ;(this.min = H(t) ? Math.max(0, t) : null),
            (this.max = H(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !H(this._userMin) &&
              (this.min = t === gr(this.min, 0) ? gr(this.min, -1) : gr(this.min, 0)),
            this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds()
          let i = this.min,
            n = this.max
          const s = (e) => (i = t ? i : e),
            o = (t) => (n = e ? n : t)
          i === n && (i <= 0 ? (s(1), o(10)) : (s(gr(i, -1)), o(gr(n, 1)))),
            i <= 0 && s(gr(n, -1)),
            n <= 0 && o(gr(i, 1)),
            (this.min = i),
            (this.max = n)
        }
        buildTicks() {
          const t = this.options,
            e = xr({ min: this._userMin, max: this._userMax }, this)
          return (
            'ticks' === t.bounds && _t(e, this, 'value'),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          )
        }
        getLabelForValue(t) {
          return void 0 === t ? '0' : te(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
          const t = this.min
          super.configure(), (this._startValue = mt(t)), (this._valueRange = mt(this.max) - mt(t))
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min ? 0 : (mt(t) - this._startValue) / this._valueRange,
                )
          )
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t)
          return Math.pow(10, this._startValue + e * this._valueRange)
        }
      }
      function vr(t) {
        const e = t.ticks
        if (e.display && t.display) {
          const t = Te(e.backdropPadding)
          return Y(e.font && e.font.size, le.font.size) + t.height
        }
        return 0
      }
      function _r(t, e, i, n, s) {
        return t === n || t === s
          ? { start: e - i / 2, end: e + i / 2 }
          : t < n || t > s
            ? { start: e - i, end: e }
            : { start: e, end: e + i }
      }
      function wr(t) {
        const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
          },
          i = Object.assign({}, e),
          n = [],
          s = [],
          o = t._pointLabels.length,
          r = t.options.pointLabels,
          a = r.centerPointLabels ? lt / o : 0
        for (let d = 0; d < o; d++) {
          const o = r.setContext(t.getPointLabelContext(d))
          s[d] = o.padding
          const u = t.getPointPosition(d, t.drawingArea + s[d], a),
            f = Ee(o.font),
            p =
              ((l = t.ctx),
              (h = f),
              (c = B((c = t._pointLabels[d])) ? c : [c]),
              { w: ce(l, h.string, c), h: c.length * h.lineHeight })
          n[d] = p
          const g = Ct(t.getIndexAngle(d) + a),
            m = Math.round(Mt(g))
          Mr(i, e, g, _r(m, u.x, p.w, 0, 180), _r(m, u.y, p.h, 90, 270))
        }
        var l, h, c
        t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
          (t._pointLabelItems = (function (t, e, i) {
            const n = [],
              s = t._pointLabels.length,
              o = t.options,
              { centerPointLabels: r, display: a } = o.pointLabels,
              l = { extra: vr(o) / 2, additionalAngle: r ? lt / s : 0 }
            let h
            for (let c = 0; c < s; c++) {
              ;(l.padding = i[c]), (l.size = e[c])
              const s = kr(t, c, l)
              n.push(s), 'auto' === a && ((s.visible = Sr(s, h)), s.visible && (h = s))
            }
            return n
          })(t, n, s))
      }
      function Mr(t, e, i, n, s) {
        const o = Math.abs(Math.sin(i)),
          r = Math.abs(Math.cos(i))
        let a = 0,
          l = 0
        n.start < e.l
          ? ((a = (e.l - n.start) / o), (t.l = Math.min(t.l, e.l - a)))
          : n.end > e.r && ((a = (n.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
          s.start < e.t
            ? ((l = (e.t - s.start) / r), (t.t = Math.min(t.t, e.t - l)))
            : s.end > e.b && ((l = (s.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)))
      }
      function kr(t, e, i) {
        const n = t.drawingArea,
          { extra: s, additionalAngle: o, padding: r, size: a } = i,
          l = t.getPointPosition(e, n + s + r, o),
          h = Math.round(Mt(Ct(l.angle + ft))),
          c = (function (t, e, i) {
            90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e)
            return t
          })(l.y, a.h, h),
          d = (function (t) {
            if (0 === t || 180 === t) return 'center'
            if (t < 180) return 'left'
            return 'right'
          })(h),
          u = (function (t, e, i) {
            'right' === i ? (t -= e) : 'center' === i && (t -= e / 2)
            return t
          })(l.x, a.w, d)
        return {
          visible: !0,
          x: l.x,
          y: c,
          textAlign: d,
          left: u,
          top: c,
          right: u + a.w,
          bottom: c + a.h,
        }
      }
      function Sr(t, e) {
        if (!e) return !0
        const { left: i, top: n, right: s, bottom: o } = t
        return !(
          ge({ x: i, y: n }, e) ||
          ge({ x: i, y: o }, e) ||
          ge({ x: s, y: n }, e) ||
          ge({ x: s, y: o }, e)
        )
      }
      function Or(t, e, i) {
        const { left: n, top: s, right: o, bottom: r } = i,
          { backdropColor: a } = e
        if (!V(a)) {
          const i = Ae(e.borderRadius),
            l = Te(e.backdropPadding)
          t.fillStyle = a
          const h = n - l.left,
            c = s - l.top,
            d = o - n + l.width,
            u = r - s + l.height
          Object.values(i).some((t) => 0 !== t)
            ? (t.beginPath(), Me(t, { x: h, y: c, w: d, h: u, radius: i }), t.fill())
            : t.fillRect(h, c, d, u)
        }
      }
      function Pr(t, e, i, n) {
        const { ctx: s } = t
        if (i) s.arc(t.xCenter, t.yCenter, e, 0, ht)
        else {
          let i = t.getPointPosition(0, e)
          s.moveTo(i.x, i.y)
          for (let o = 1; o < n; o++) (i = t.getPointPosition(o, e)), s.lineTo(i.x, i.y)
        }
      }
      ;(0, s.Z)(yr, 'id', 'logarithmic'),
        (0, s.Z)(yr, 'defaults', {
          ticks: { callback: ie.formatters.logarithmic, major: { enabled: !0 } },
        })
      class Cr extends ur {
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = [])
        }
        setDimensions() {
          const t = (this._padding = Te(vr(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height)
          ;(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2))
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1)
          ;(this.min = H(t) && !isNaN(t) ? t : 0),
            (this.max = H(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions()
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / vr(this.options))
        }
        generateTickLabels(t) {
          ur.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const i = $(this.options.pointLabels.callback, [t, e], this)
                return i || 0 === i ? i : ''
              })
              .filter((t, e) => this.chart.getDataVisibility(e)))
        }
        fit() {
          const t = this.options
          t.display && t.pointLabels.display ? wr(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, e, i, n) {
          ;(this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - n) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n)))
        }
        getIndexAngle(t) {
          return Ct(t * (ht / (this._pointLabels.length || 1)) + wt(this.options.startAngle || 0))
        }
        getDistanceFromCenterForValue(t) {
          if (V(t)) return NaN
          const e = this.drawingArea / (this.max - this.min)
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }
        getValueForDistanceFromCenter(t) {
          if (V(t)) return NaN
          const e = t / (this.drawingArea / (this.max - this.min))
          return this.options.reverse ? this.max - e : this.min + e
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || []
          if (t >= 0 && t < e.length) {
            const i = e[t]
            return (function (t, e, i) {
              return Re(t, { label: i, index: e, type: 'pointLabel' })
            })(this.getContext(), t, i)
          }
        }
        getPointPosition(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          const n = this.getIndexAngle(t) - ft + i
          return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter, angle: n }
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
          const { left: e, top: i, right: n, bottom: s } = this._pointLabelItems[t]
          return { left: e, top: i, right: n, bottom: s }
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options
          if (t) {
            const i = this.ctx
            i.save(),
              i.beginPath(),
              Pr(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length,
              ),
              i.closePath(),
              (i.fillStyle = t),
              i.fill(),
              i.restore()
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: i, grid: n, border: s } = e,
            o = this._pointLabels.length
          let r, a, l
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: i,
                  options: { pointLabels: n },
                } = t
                for (let s = e - 1; s >= 0; s--) {
                  const e = t._pointLabelItems[s]
                  if (!e.visible) continue
                  const o = n.setContext(t.getPointLabelContext(s))
                  Or(i, o, e)
                  const r = Ee(o.font),
                    { x: a, y: l, textAlign: h } = e
                  we(i, t._pointLabels[s], a, l + r.lineHeight / 2, r, {
                    color: o.color,
                    textAlign: h,
                    textBaseline: 'middle',
                  })
                }
              })(this, o),
            n.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e) {
                  a = this.getDistanceFromCenterForValue(t.value)
                  const i = this.getContext(e),
                    r = n.setContext(i),
                    l = s.setContext(i)
                  !(function (t, e, i, n, s) {
                    const o = t.ctx,
                      r = e.circular,
                      { color: a, lineWidth: l } = e
                    ;(!r && !n) ||
                      !a ||
                      !l ||
                      i < 0 ||
                      (o.save(),
                      (o.strokeStyle = a),
                      (o.lineWidth = l),
                      o.setLineDash(s.dash),
                      (o.lineDashOffset = s.dashOffset),
                      o.beginPath(),
                      Pr(t, i, r, n),
                      o.closePath(),
                      o.stroke(),
                      o.restore())
                  })(this, r, a, o, l)
                }
              }),
            i.display)
          ) {
            for (t.save(), r = o - 1; r >= 0; r--) {
              const n = i.setContext(this.getPointLabelContext(r)),
                { color: s, lineWidth: o } = n
              o &&
                s &&
                ((t.lineWidth = o),
                (t.strokeStyle = s),
                t.setLineDash(n.borderDash),
                (t.lineDashOffset = n.borderDashOffset),
                (a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
                (l = this.getPointPosition(r, a)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(l.x, l.y),
                t.stroke())
            }
            t.restore()
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks
          if (!i.display) return
          const n = this.getIndexAngle(0)
          let s, o
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((n, r) => {
              if (0 === r && !e.reverse) return
              const a = i.setContext(this.getContext(r)),
                l = Ee(a.font)
              if (
                ((s = this.getDistanceFromCenterForValue(this.ticks[r].value)), a.showLabelBackdrop)
              ) {
                ;(t.font = l.string),
                  (o = t.measureText(n.label).width),
                  (t.fillStyle = a.backdropColor)
                const e = Te(a.backdropPadding)
                t.fillRect(-o / 2 - e.left, -s - l.size / 2 - e.top, o + e.width, l.size + e.height)
              }
              we(t, n.label, 0, -s, l, {
                color: a.color,
                strokeColor: a.textStrokeColor,
                strokeWidth: a.textStrokeWidth,
              })
            }),
            t.restore()
        }
        drawTitle() {}
      }
      ;(0, s.Z)(Cr, 'id', 'radialLinear'),
        (0, s.Z)(Cr, 'defaults', {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: ie.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (t) => t,
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (0, s.Z)(Cr, 'defaultRoutes', {
          'angleLines.color': 'borderColor',
          'pointLabels.color': 'color',
          'ticks.color': 'color',
        }),
        (0, s.Z)(Cr, 'descriptors', { angleLines: { _fallback: 'grid' } })
      const Dr = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Ar = Object.keys(Dr)
      function Tr(t, e) {
        return t - e
      }
      function Er(t, e) {
        if (V(e)) return null
        const i = t._adapter,
          { parser: n, round: s, isoWeekday: o } = t._parseOpts
        let r = e
        return (
          'function' === typeof n && (r = n(r)),
          H(r) || (r = 'string' === typeof n ? i.parse(r, n) : i.parse(r)),
          null === r
            ? null
            : (s &&
                (r =
                  'week' !== s || (!vt(o) && !0 !== o)
                    ? i.startOf(r, s)
                    : i.startOf(r, 'isoWeek', o)),
              +r)
        )
      }
      function Lr(t, e, i, n) {
        const s = Ar.length
        for (let o = Ar.indexOf(t); o < s - 1; ++o) {
          const t = Dr[Ar[o]],
            s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER
          if (t.common && Math.ceil((i - e) / (s * t.size)) <= n) return Ar[o]
        }
        return Ar[s - 1]
      }
      function Rr(t, e, i) {
        if (i) {
          if (i.length) {
            const { lo: n, hi: s } = Et(i, e)
            t[i[n] >= e ? i[n] : i[s]] = !0
          }
        } else t[e] = !0
      }
      function Ir(t, e, i) {
        const n = [],
          s = {},
          o = e.length
        let r, a
        for (r = 0; r < o; ++r) (a = e[r]), (s[a] = r), n.push({ value: a, major: !1 })
        return 0 !== o && i
          ? (function (t, e, i, n) {
              const s = t._adapter,
                o = +s.startOf(e[0].value, n),
                r = e[e.length - 1].value
              let a, l
              for (a = o; a <= r; a = +s.add(a, 1, n)) (l = i[a]), l >= 0 && (e[l].major = !0)
              return e
            })(t, n, s, i)
          : n
      }
      class zr extends rs {
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0)
        }
        init(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          const i = t.time || (t.time = {}),
            n = (this._adapter = new un(t.adapters.date))
          n.init(e),
            tt(i.displayFormats, n.formats()),
            (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
            super.init(t),
            (this._normalized = e.normalized)
        }
        parse(t, e) {
          return void 0 === t ? null : Er(this, t)
        }
        beforeLayout() {
          super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            i = t.time.unit || 'day'
          let { min: n, max: s, minDefined: o, maxDefined: r } = this.getUserBounds()
          function a(t) {
            o || isNaN(t.min) || (n = Math.min(n, t.min)),
              r || isNaN(t.max) || (s = Math.max(s, t.max))
          }
          ;(o && r) ||
            (a(this._getLabelBounds()),
            ('ticks' === t.bounds && 'labels' === t.ticks.source) || a(this.getMinMax(!1))),
            (n = H(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
            (s = H(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(n, s - 1)),
            (this.max = Math.max(n + 1, s))
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps()
          let e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY
          return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            i = t.ticks,
            n = 'labels' === i.source ? this.getLabelTimestamps() : this._generate()
          'ticks' === t.bounds &&
            n.length &&
            ((this.min = this._userMin || n[0]), (this.max = this._userMax || n[n.length - 1]))
          const s = this.min,
            o = (function (t, e, i) {
              let n = 0,
                s = t.length
              for (; n < s && t[n] < e; ) n++
              for (; s > n && t[s - 1] > i; ) s--
              return n > 0 || s < t.length ? t.slice(n, s) : t
            })(n, s, this.max)
          return (
            (this._unit =
              e.unit ||
              (i.autoSkip
                ? Lr(e.minUnit, this.min, this.max, this._getLabelCapacity(s))
                : (function (t, e, i, n, s) {
                    for (let o = Ar.length - 1; o >= Ar.indexOf(i); o--) {
                      const i = Ar[o]
                      if (Dr[i].common && t._adapter.diff(s, n, i) >= e - 1) return i
                    }
                    return Ar[i ? Ar.indexOf(i) : 0]
                  })(this, o.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              i.major.enabled && 'year' !== this._unit
                ? (function (t) {
                    for (let e = Ar.indexOf(t) + 1, i = Ar.length; e < i; ++e)
                      if (Dr[Ar[e]].common) return Ar[e]
                  })(this._unit)
                : void 0),
            this.initOffsets(n),
            t.reverse && o.reverse(),
            Ir(this, o, this._majorUnit)
          )
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value))
        }
        initOffsets() {
          let t,
            e,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = 0,
            s = 0
          this.options.offset &&
            i.length &&
            ((t = this.getDecimalForValue(i[0])),
            (n = 1 === i.length ? 1 - t : (this.getDecimalForValue(i[1]) - t) / 2),
            (e = this.getDecimalForValue(i[i.length - 1])),
            (s = 1 === i.length ? e : (e - this.getDecimalForValue(i[i.length - 2])) / 2))
          const o = i.length < 3 ? 0.5 : 0.25
          ;(n = At(n, 0, o)),
            (s = At(s, 0, o)),
            (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) })
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            i = this.max,
            n = this.options,
            s = n.time,
            o = s.unit || Lr(s.minUnit, e, i, this._getLabelCapacity(e)),
            r = Y(n.ticks.stepSize, 1),
            a = 'week' === o && s.isoWeekday,
            l = vt(a) || !0 === a,
            h = {}
          let c,
            d,
            u = e
          if (
            (l && (u = +t.startOf(u, 'isoWeek', a)),
            (u = +t.startOf(u, l ? 'day' : o)),
            t.diff(i, e, o) > 1e5 * r)
          )
            throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + r + ' ' + o)
          const f = 'data' === n.ticks.source && this.getDataTimestamps()
          for (c = u, d = 0; c < i; c = +t.add(c, r, o), d++) Rr(h, c, f)
          return (
            (c !== i && 'ticks' !== n.bounds && 1 !== d) || Rr(h, c, f),
            Object.keys(h)
              .sort(Tr)
              .map((t) => +t)
          )
        }
        getLabelForValue(t) {
          const e = this._adapter,
            i = this.options.time
          return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime)
        }
        format(t, e) {
          const i = this.options.time.displayFormats,
            n = this._unit,
            s = e || i[n]
          return this._adapter.format(t, s)
        }
        _tickFormatFunction(t, e, i, n) {
          const s = this.options,
            o = s.ticks.callback
          if (o) return $(o, [t, e, i], this)
          const r = s.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            h = a && r[a],
            c = l && r[l],
            d = i[e],
            u = l && c && d && d.major
          return this._adapter.format(t, n || (u ? c : h))
        }
        generateTickLabels(t) {
          let e, i, n
          for (e = 0, i = t.length; e < i; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t))
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
          const e = this._offsets,
            i = this.getDecimalForValue(t)
          return this.getPixelForDecimal((e.start + i) * e.factor)
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end
          return this.min + i * (this.max - this.min)
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = wt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            s = Math.cos(n),
            o = Math.sin(n),
            r = this._resolveTickFontOptions(0).size
          return { w: i * s + r * o, h: i * o + r * s }
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            s = this._tickFormatFunction(t, 0, Ir(this, [t], this._majorUnit), n),
            o = this._getLabelSize(s),
            r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1
          return r > 0 ? r : 1
        }
        getDataTimestamps() {
          let t,
            e,
            i = this._cache.data || []
          if (i.length) return i
          const n = this.getMatchingVisibleMetas()
          if (this._normalized && n.length)
            return (this._cache.data = n[0].controller.getAllParsedValues(this))
          for (t = 0, e = n.length; t < e; ++t)
            i = i.concat(n[t].controller.getAllParsedValues(this))
          return (this._cache.data = this.normalize(i))
        }
        getLabelTimestamps() {
          const t = this._cache.labels || []
          let e, i
          if (t.length) return t
          const n = this.getLabels()
          for (e = 0, i = n.length; e < i; ++e) t.push(Er(this, n[e]))
          return (this._cache.labels = this._normalized ? t : this.normalize(t))
        }
        normalize(t) {
          return jt(t.sort(Tr))
        }
      }
      function jr(t, e, i) {
        let n,
          s,
          o,
          r,
          a = 0,
          l = t.length - 1
        i
          ? (e >= t[a].pos && e <= t[l].pos && ({ lo: a, hi: l } = Lt(t, 'pos', e)),
            ({ pos: n, time: o } = t[a]),
            ({ pos: s, time: r } = t[l]))
          : (e >= t[a].time && e <= t[l].time && ({ lo: a, hi: l } = Lt(t, 'time', e)),
            ({ time: n, pos: o } = t[a]),
            ({ time: s, pos: r } = t[l]))
        const h = s - n
        return h ? o + ((r - o) * (e - n)) / h : o
      }
      ;(0, s.Z)(zr, 'id', 'time'),
        (0, s.Z)(zr, 'defaults', {
          bounds: 'data',
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
          },
          ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
        })
      class Fr extends zr {
        constructor(t) {
          super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0)
        }
        initOffsets() {
          const t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t))
          ;(this._minPos = jr(e, this.min)),
            (this._tableRange = jr(e, this.max) - this._minPos),
            super.initOffsets(t)
        }
        buildLookupTable(t) {
          const { min: e, max: i } = this,
            n = [],
            s = []
          let o, r, a, l, h
          for (o = 0, r = t.length; o < r; ++o) (l = t[o]), l >= e && l <= i && n.push(l)
          if (n.length < 2)
            return [
              { time: e, pos: 0 },
              { time: i, pos: 1 },
            ]
          for (o = 0, r = n.length; o < r; ++o)
            (h = n[o + 1]),
              (a = n[o - 1]),
              (l = n[o]),
              Math.round((h + a) / 2) !== l && s.push({ time: l, pos: o / (r - 1) })
          return s
        }
        _generate() {
          const t = this.min,
            e = this.max
          let i = super.getDataTimestamps()
          return (
            (i.includes(t) && i.length) || i.splice(0, 0, t),
            (i.includes(e) && 1 !== i.length) || i.push(e),
            i.sort((t, e) => t - e)
          )
        }
        _getTimestampsForTable() {
          let t = this._cache.all || []
          if (t.length) return t
          const e = this.getDataTimestamps(),
            i = this.getLabelTimestamps()
          return (
            (t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i),
            (t = this._cache.all = t),
            t
          )
        }
        getDecimalForValue(t) {
          return (jr(this._table, t) - this._minPos) / this._tableRange
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end
          return jr(this._table, i * this._tableRange + this._minPos, !0)
        }
      }
      ;(0, s.Z)(Fr, 'id', 'timeseries'), (0, s.Z)(Fr, 'defaults', zr.defaults)
      const Nr = [
          hn,
          lo,
          rr,
          Object.freeze({
            __proto__: null,
            CategoryScale: hr,
            LinearScale: fr,
            LogarithmicScale: yr,
            RadialLinearScale: Cr,
            TimeScale: zr,
            TimeSeriesScale: Fr,
          }),
        ],
        Vr = 'chartjs-tooltip',
        Br = 'chartjs-tooltip-body',
        Wr = 'chartjs-tooltip-body-item',
        Hr = 'chartjs-tooltip-header',
        Zr = 'chartjs-tooltip-header-item',
        Yr = (t) => {
          const { chart: e, tooltip: i } = t,
            n = ((t) => {
              let e = t.canvas.parentNode.querySelector('div')
              if (!e) {
                ;(e = document.createElement('div')), e.classList.add(Vr)
                const i = document.createElement('table')
                ;(i.style.margin = '0px'), e.append(i), t.canvas.parentNode.append(e)
              }
              return e
            })(e)
          if (0 === i.opacity) return void (n.style.opacity = 0)
          if (i.body) {
            const t = i.title || [],
              e = i.body.map((t) => t.lines),
              s = document.createElement('thead')
            s.classList.add(Hr)
            for (const i of t) {
              const t = document.createElement('tr')
              ;(t.style.borderWidth = 0), t.classList.add(Zr)
              const e = document.createElement('th')
              e.style.borderWidth = 0
              const n = document.createTextNode(i)
              e.append(n), t.append(e), s.append(t)
            }
            const o = document.createElement('tbody')
            o.classList.add(Br)
            for (const [n, a] of e.entries()) {
              const t = i.labelColors[n],
                e = document.createElement('span')
              ;(e.style.background = t.backgroundColor),
                (e.style.borderColor = t.borderColor),
                (e.style.borderWidth = '2px'),
                (e.style.marginRight = '10px'),
                (e.style.height = '10px'),
                (e.style.width = '10px'),
                (e.style.display = 'inline-block')
              const s = document.createElement('tr')
              s.classList.add(Wr)
              const r = document.createElement('td')
              r.style.borderWidth = 0
              const l = document.createTextNode(a)
              r.append(e), r.append(l), s.append(r), o.append(s)
            }
            const r = n.querySelector('table')
            for (; r.firstChild; ) r.firstChild.remove()
            r.append(s), r.append(o)
          }
          const { offsetLeft: s, offsetTop: o } = e.canvas
          ;(n.style.opacity = 1),
            (n.style.left = ''.concat(s + i.caretX, 'px')),
            (n.style.top = ''.concat(o + i.caretY, 'px')),
            (n.style.font = i.options.bodyFont.string),
            (n.style.padding = ''.concat(i.padding, 'px ').concat(i.padding, 'px'))
        }
      var Ur = function () {
        return (
          (Ur =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
              return t
            }),
          Ur.apply(this, arguments)
        )
      }
      function $r(t, e) {
        var i = {}
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n])
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var s = 0
          for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
            e.indexOf(n[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
              (i[n[s]] = t[n[s]])
        }
        return i
      }
      'function' === typeof SuppressedError && SuppressedError
      var Xr =
        'undefined' !== typeof globalThis
          ? globalThis
          : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof i.g
              ? i.g
              : 'undefined' !== typeof self
                ? self
                : {}
      function qr(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
          ? t.default
          : t
      }
      var Kr,
        Gr,
        Jr,
        Qr,
        ta = { exports: {} }
      function ea() {
        if (Gr) return Kr
        Gr = 1
        return (Kr = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
      }
      ta.exports = (function () {
        if (Qr) return Jr
        Qr = 1
        var t = ea()
        function e() {}
        function i() {}
        return (
          (i.resetWarningCache = e),
          (Jr = function () {
            function n(e, i, n, s, o, r) {
              if (r !== t) {
                var a = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                )
                throw ((a.name = 'Invariant Violation'), a)
              }
            }
            function s() {
              return n
            }
            n.isRequired = n
            var o = {
              array: n,
              bigint: n,
              bool: n,
              func: n,
              number: n,
              object: n,
              string: n,
              symbol: n,
              any: n,
              arrayOf: s,
              element: n,
              elementType: n,
              instanceOf: s,
              node: n,
              objectOf: s,
              oneOf: s,
              oneOfType: s,
              shape: s,
              exact: s,
              checkPropTypes: i,
              resetWarningCache: e,
            }
            return (o.PropTypes = o), o
          })
        )
      })()()
      var ia,
        na = qr(ta.exports),
        sa = { exports: {} }
      ;(ia = sa),
        (function () {
          var t = {}.hasOwnProperty
          function e() {
            for (var i = [], n = 0; n < arguments.length; n++) {
              var s = arguments[n]
              if (s) {
                var o = typeof s
                if ('string' === o || 'number' === o) i.push(s)
                else if (Array.isArray(s)) {
                  if (s.length) {
                    var r = e.apply(null, s)
                    r && i.push(r)
                  }
                } else if ('object' === o) {
                  if (
                    s.toString !== Object.prototype.toString &&
                    !s.toString.toString().includes('[native code]')
                  ) {
                    i.push(s.toString())
                    continue
                  }
                  for (var a in s) t.call(s, a) && s[a] && i.push(a)
                }
              }
            }
            return i.join(' ')
          }
          ia.exports ? ((e.default = e), (ia.exports = e)) : (window.classNames = e)
        })()
      var oa = qr(sa.exports),
        ra = 'object' == typeof Xr && Xr && Xr.Object === Object && Xr,
        aa = ra,
        la = 'object' == typeof self && self && self.Object === Object && self,
        ha = aa || la || Function('return this')(),
        ca = ha.Symbol,
        da = ca,
        ua = Object.prototype,
        fa = ua.hasOwnProperty,
        pa = ua.toString,
        ga = da ? da.toStringTag : void 0
      var ma = function (t) {
          var e = fa.call(t, ga),
            i = t[ga]
          try {
            t[ga] = void 0
            var n = !0
          } catch (o) {}
          var s = pa.call(t)
          return n && (e ? (t[ga] = i) : delete t[ga]), s
        },
        ba = Object.prototype.toString
      var xa = ma,
        ya = function (t) {
          return ba.call(t)
        },
        va = ca ? ca.toStringTag : void 0
      var _a = function (t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : va && va in Object(t)
            ? xa(t)
            : ya(t)
      }
      var wa = function (t) {
          var e = typeof t
          return null != t && ('object' == e || 'function' == e)
        },
        Ma = _a,
        ka = wa
      var Sa = function (t) {
          if (!ka(t)) return !1
          var e = Ma(t)
          return (
            '[object Function]' == e ||
            '[object GeneratorFunction]' == e ||
            '[object AsyncFunction]' == e ||
            '[object Proxy]' == e
          )
        },
        Oa = ha['__core-js_shared__'],
        Pa = (function () {
          var t = /[^.]+$/.exec((Oa && Oa.keys && Oa.keys.IE_PROTO) || '')
          return t ? 'Symbol(src)_1.' + t : ''
        })()
      var Ca = function (t) {
          return !!Pa && Pa in t
        },
        Da = Function.prototype.toString
      var Aa = function (t) {
          if (null != t) {
            try {
              return Da.call(t)
            } catch (e) {}
            try {
              return t + ''
            } catch (e) {}
          }
          return ''
        },
        Ta = Sa,
        Ea = Ca,
        La = wa,
        Ra = Aa,
        Ia = /^\[object .+?Constructor\]$/,
        za = Function.prototype,
        ja = Object.prototype,
        Fa = za.toString,
        Na = ja.hasOwnProperty,
        Va = RegExp(
          '^' +
            Fa.call(Na)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        )
      var Ba = function (t) {
          return !(!La(t) || Ea(t)) && (Ta(t) ? Va : Ia).test(Ra(t))
        },
        Wa = function (t, e) {
          return null == t ? void 0 : t[e]
        }
      var Ha = function (t, e) {
          var i = Wa(t, e)
          return Ba(i) ? i : void 0
        },
        Za = Ha,
        Ya = (function () {
          try {
            var t = Za(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (e) {}
        })(),
        Ua = Ya
      var $a = function (t, e, i) {
        '__proto__' == e && Ua
          ? Ua(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 })
          : (t[e] = i)
      }
      var Xa = function (t, e) {
          return t === e || (t !== t && e !== e)
        },
        qa = $a,
        Ka = Xa,
        Ga = Object.prototype.hasOwnProperty
      var Ja = function (t, e, i) {
          var n = t[e]
          ;(Ga.call(t, e) && Ka(n, i) && (void 0 !== i || e in t)) || qa(t, e, i)
        },
        Qa = Ja,
        tl = $a
      var el = function (t, e, i, n) {
        var s = !i
        i || (i = {})
        for (var o = -1, r = e.length; ++o < r; ) {
          var a = e[o],
            l = n ? n(i[a], t[a], a, i, t) : void 0
          void 0 === l && (l = t[a]), s ? tl(i, a, l) : Qa(i, a, l)
        }
        return i
      }
      var il = function (t) {
        return t
      }
      var nl = function (t, e, i) {
          switch (i.length) {
            case 0:
              return t.call(e)
            case 1:
              return t.call(e, i[0])
            case 2:
              return t.call(e, i[0], i[1])
            case 3:
              return t.call(e, i[0], i[1], i[2])
          }
          return t.apply(e, i)
        },
        sl = Math.max
      var ol = function (t, e, i) {
        return (
          (e = sl(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (var n = arguments, s = -1, o = sl(n.length - e, 0), r = Array(o); ++s < o; )
              r[s] = n[e + s]
            s = -1
            for (var a = Array(e + 1); ++s < e; ) a[s] = n[s]
            return (a[e] = i(r)), nl(t, this, a)
          }
        )
      }
      var rl = function (t) {
          return function () {
            return t
          }
        },
        al = Ya,
        ll = al
          ? function (t, e) {
              return al(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: rl(e),
                writable: !0,
              })
            }
          : il,
        hl = Date.now
      var cl = (function (t) {
          var e = 0,
            i = 0
          return function () {
            var n = hl(),
              s = 16 - (n - i)
            if (((i = n), s > 0)) {
              if (++e >= 800) return arguments[0]
            } else e = 0
            return t.apply(void 0, arguments)
          }
        })(ll),
        dl = il,
        ul = ol,
        fl = cl
      var pl = function (t) {
          return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        },
        gl = Sa,
        ml = pl
      var bl = function (t) {
          return null != t && ml(t.length) && !gl(t)
        },
        xl = /^(?:0|[1-9]\d*)$/
      var yl = function (t, e) {
          var i = typeof t
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ('number' == i || ('symbol' != i && xl.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          )
        },
        vl = Xa,
        _l = bl,
        wl = yl,
        Ml = wa
      var kl = function (t, e, i) {
          if (!Ml(i)) return !1
          var n = typeof e
          return (
            !!('number' == n ? _l(i) && wl(e, i.length) : 'string' == n && e in i) && vl(i[e], t)
          )
        },
        Sl = function (t, e) {
          return fl(ul(t, e, dl), t + '')
        },
        Ol = kl
      var Pl = function (t) {
          return Sl(function (e, i) {
            var n = -1,
              s = i.length,
              o = s > 1 ? i[s - 1] : void 0,
              r = s > 2 ? i[2] : void 0
            for (
              o = t.length > 3 && 'function' == typeof o ? (s--, o) : void 0,
                r && Ol(i[0], i[1], r) && ((o = s < 3 ? void 0 : o), (s = 1)),
                e = Object(e);
              ++n < s;

            ) {
              var a = i[n]
              a && t(e, a, n, o)
            }
            return e
          })
        },
        Cl = Object.prototype
      var Dl = function (t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || Cl)
      }
      var Al = function (t, e) {
        for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i)
        return n
      }
      var Tl = function (t) {
          return null != t && 'object' == typeof t
        },
        El = _a,
        Ll = Tl
      var Rl = function (t) {
          return Ll(t) && '[object Arguments]' == El(t)
        },
        Il = Tl,
        zl = Object.prototype,
        jl = zl.hasOwnProperty,
        Fl = zl.propertyIsEnumerable,
        Nl = Rl(
          (function () {
            return arguments
          })(),
        )
          ? Rl
          : function (t) {
              return Il(t) && jl.call(t, 'callee') && !Fl.call(t, 'callee')
            },
        Vl = Array.isArray,
        Bl = { exports: {} }
      var Wl = function () {
        return !1
      }
      !(function (t, e) {
        var i = ha,
          n = Wl,
          s = e && !e.nodeType && e,
          o = s && t && !t.nodeType && t,
          r = o && o.exports === s ? i.Buffer : void 0,
          a = (r ? r.isBuffer : void 0) || n
        t.exports = a
      })(Bl, Bl.exports)
      var Hl = Bl.exports,
        Zl = _a,
        Yl = pl,
        Ul = Tl,
        $l = {}
      ;($l['[object Float32Array]'] =
        $l['[object Float64Array]'] =
        $l['[object Int8Array]'] =
        $l['[object Int16Array]'] =
        $l['[object Int32Array]'] =
        $l['[object Uint8Array]'] =
        $l['[object Uint8ClampedArray]'] =
        $l['[object Uint16Array]'] =
        $l['[object Uint32Array]'] =
          !0),
        ($l['[object Arguments]'] =
          $l['[object Array]'] =
          $l['[object ArrayBuffer]'] =
          $l['[object Boolean]'] =
          $l['[object DataView]'] =
          $l['[object Date]'] =
          $l['[object Error]'] =
          $l['[object Function]'] =
          $l['[object Map]'] =
          $l['[object Number]'] =
          $l['[object Object]'] =
          $l['[object RegExp]'] =
          $l['[object Set]'] =
          $l['[object String]'] =
          $l['[object WeakMap]'] =
            !1)
      var Xl = function (t) {
        return Ul(t) && Yl(t.length) && !!$l[Zl(t)]
      }
      var ql = function (t) {
          return function (e) {
            return t(e)
          }
        },
        Kl = { exports: {} }
      !(function (t, e) {
        var i = ra,
          n = e && !e.nodeType && e,
          s = n && t && !t.nodeType && t,
          o = s && s.exports === n && i.process,
          r = (function () {
            try {
              var t = s && s.require && s.require('util').types
              return t || (o && o.binding && o.binding('util'))
            } catch (e) {}
          })()
        t.exports = r
      })(Kl, Kl.exports)
      var Gl = Kl.exports,
        Jl = Xl,
        Ql = ql,
        th = Gl && Gl.isTypedArray,
        eh = th ? Ql(th) : Jl,
        ih = Al,
        nh = Nl,
        sh = Vl,
        oh = Hl,
        rh = yl,
        ah = eh,
        lh = Object.prototype.hasOwnProperty
      var hh = function (t, e) {
        var i = sh(t),
          n = !i && nh(t),
          s = !i && !n && oh(t),
          o = !i && !n && !s && ah(t),
          r = i || n || s || o,
          a = r ? ih(t.length, String) : [],
          l = a.length
        for (var h in t)
          (!e && !lh.call(t, h)) ||
            (r &&
              ('length' == h ||
                (s && ('offset' == h || 'parent' == h)) ||
                (o && ('buffer' == h || 'byteLength' == h || 'byteOffset' == h)) ||
                rh(h, l))) ||
            a.push(h)
        return a
      }
      var ch = function (t, e) {
          return function (i) {
            return t(e(i))
          }
        },
        dh = ch(Object.keys, Object),
        uh = Dl,
        fh = dh,
        ph = Object.prototype.hasOwnProperty
      var gh = hh,
        mh = function (t) {
          if (!uh(t)) return fh(t)
          var e = []
          for (var i in Object(t)) ph.call(t, i) && 'constructor' != i && e.push(i)
          return e
        },
        bh = bl
      var xh = function (t) {
          return bh(t) ? gh(t) : mh(t)
        },
        yh = Ja,
        vh = el,
        _h = Pl,
        wh = bl,
        Mh = Dl,
        kh = xh,
        Sh = Object.prototype.hasOwnProperty,
        Oh = qr(
          _h(function (t, e) {
            if (Mh(e) || wh(e)) vh(e, kh(e), t)
            else for (var i in e) Sh.call(e, i) && yh(t, i, e[i])
          }),
        )
      var Ph = function () {
          ;(this.__data__ = []), (this.size = 0)
        },
        Ch = Xa
      var Dh = function (t, e) {
          for (var i = t.length; i--; ) if (Ch(t[i][0], e)) return i
          return -1
        },
        Ah = Dh,
        Th = Array.prototype.splice
      var Eh = function (t) {
          var e = this.__data__,
            i = Ah(e, t)
          return !(i < 0) && (i == e.length - 1 ? e.pop() : Th.call(e, i, 1), --this.size, !0)
        },
        Lh = Dh
      var Rh = function (t) {
          var e = this.__data__,
            i = Lh(e, t)
          return i < 0 ? void 0 : e[i][1]
        },
        Ih = Dh
      var zh = Dh
      var jh = function (t, e) {
          var i = this.__data__,
            n = zh(i, t)
          return n < 0 ? (++this.size, i.push([t, e])) : (i[n][1] = e), this
        },
        Fh = Ph,
        Nh = Eh,
        Vh = Rh,
        Bh = function (t) {
          return Ih(this.__data__, t) > -1
        },
        Wh = jh
      function Hh(t) {
        var e = -1,
          i = null == t ? 0 : t.length
        for (this.clear(); ++e < i; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      ;(Hh.prototype.clear = Fh),
        (Hh.prototype.delete = Nh),
        (Hh.prototype.get = Vh),
        (Hh.prototype.has = Bh),
        (Hh.prototype.set = Wh)
      var Zh = Hh,
        Yh = Zh
      var Uh = function () {
        ;(this.__data__ = new Yh()), (this.size = 0)
      }
      var $h = function (t) {
        var e = this.__data__,
          i = e.delete(t)
        return (this.size = e.size), i
      }
      var Xh = function (t) {
        return this.__data__.get(t)
      }
      var qh = function (t) {
          return this.__data__.has(t)
        },
        Kh = Ha(ha, 'Map'),
        Gh = Ha(Object, 'create'),
        Jh = Gh
      var Qh = function () {
        ;(this.__data__ = Jh ? Jh(null) : {}), (this.size = 0)
      }
      var tc = function (t) {
          var e = this.has(t) && delete this.__data__[t]
          return (this.size -= e ? 1 : 0), e
        },
        ec = Gh,
        ic = Object.prototype.hasOwnProperty
      var nc = function (t) {
          var e = this.__data__
          if (ec) {
            var i = e[t]
            return '__lodash_hash_undefined__' === i ? void 0 : i
          }
          return ic.call(e, t) ? e[t] : void 0
        },
        sc = Gh,
        oc = Object.prototype.hasOwnProperty
      var rc = Gh
      var ac = Qh,
        lc = tc,
        hc = nc,
        cc = function (t) {
          var e = this.__data__
          return sc ? void 0 !== e[t] : oc.call(e, t)
        },
        dc = function (t, e) {
          var i = this.__data__
          return (
            (this.size += this.has(t) ? 0 : 1),
            (i[t] = rc && void 0 === e ? '__lodash_hash_undefined__' : e),
            this
          )
        }
      function uc(t) {
        var e = -1,
          i = null == t ? 0 : t.length
        for (this.clear(); ++e < i; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      ;(uc.prototype.clear = ac),
        (uc.prototype.delete = lc),
        (uc.prototype.get = hc),
        (uc.prototype.has = cc),
        (uc.prototype.set = dc)
      var fc = uc,
        pc = Zh,
        gc = Kh
      var mc = function (t) {
        var e = typeof t
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t
      }
      var bc = function (t, e) {
          var i = t.__data__
          return mc(e) ? i['string' == typeof e ? 'string' : 'hash'] : i.map
        },
        xc = bc
      var yc = bc
      var vc = bc
      var _c = bc
      var wc = function () {
          ;(this.size = 0),
            (this.__data__ = { hash: new fc(), map: new (gc || pc)(), string: new fc() })
        },
        Mc = function (t) {
          var e = xc(this, t).delete(t)
          return (this.size -= e ? 1 : 0), e
        },
        kc = function (t) {
          return yc(this, t).get(t)
        },
        Sc = function (t) {
          return vc(this, t).has(t)
        },
        Oc = function (t, e) {
          var i = _c(this, t),
            n = i.size
          return i.set(t, e), (this.size += i.size == n ? 0 : 1), this
        }
      function Pc(t) {
        var e = -1,
          i = null == t ? 0 : t.length
        for (this.clear(); ++e < i; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      ;(Pc.prototype.clear = wc),
        (Pc.prototype.delete = Mc),
        (Pc.prototype.get = kc),
        (Pc.prototype.has = Sc),
        (Pc.prototype.set = Oc)
      var Cc = Pc,
        Dc = Zh,
        Ac = Kh,
        Tc = Cc
      var Ec = Zh,
        Lc = Uh,
        Rc = $h,
        Ic = Xh,
        zc = qh,
        jc = function (t, e) {
          var i = this.__data__
          if (i instanceof Dc) {
            var n = i.__data__
            if (!Ac || n.length < 199) return n.push([t, e]), (this.size = ++i.size), this
            i = this.__data__ = new Tc(n)
          }
          return i.set(t, e), (this.size = i.size), this
        }
      function Fc(t) {
        var e = (this.__data__ = new Ec(t))
        this.size = e.size
      }
      ;(Fc.prototype.clear = Lc),
        (Fc.prototype.delete = Rc),
        (Fc.prototype.get = Ic),
        (Fc.prototype.has = zc),
        (Fc.prototype.set = jc)
      var Nc = Fc
      var Vc = Cc,
        Bc = function (t) {
          return this.__data__.set(t, '__lodash_hash_undefined__'), this
        },
        Wc = function (t) {
          return this.__data__.has(t)
        }
      function Hc(t) {
        var e = -1,
          i = null == t ? 0 : t.length
        for (this.__data__ = new Vc(); ++e < i; ) this.add(t[e])
      }
      ;(Hc.prototype.add = Hc.prototype.push = Bc), (Hc.prototype.has = Wc)
      var Zc = function (t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n; ) if (e(t[i], i, t)) return !0
        return !1
      }
      var Yc = Hc,
        Uc = Zc,
        $c = function (t, e) {
          return t.has(e)
        }
      var Xc = function (t, e, i, n, s, o) {
          var r = 1 & i,
            a = t.length,
            l = e.length
          if (a != l && !(r && l > a)) return !1
          var h = o.get(t),
            c = o.get(e)
          if (h && c) return h == e && c == t
          var d = -1,
            u = !0,
            f = 2 & i ? new Yc() : void 0
          for (o.set(t, e), o.set(e, t); ++d < a; ) {
            var p = t[d],
              g = e[d]
            if (n) var m = r ? n(g, p, d, e, t, o) : n(p, g, d, t, e, o)
            if (void 0 !== m) {
              if (m) continue
              u = !1
              break
            }
            if (f) {
              if (
                !Uc(e, function (t, e) {
                  if (!$c(f, e) && (p === t || s(p, t, i, n, o))) return f.push(e)
                })
              ) {
                u = !1
                break
              }
            } else if (p !== g && !s(p, g, i, n, o)) {
              u = !1
              break
            }
          }
          return o.delete(t), o.delete(e), u
        },
        qc = ha.Uint8Array
      var Kc = function (t) {
        var e = -1,
          i = Array(t.size)
        return (
          t.forEach(function (t, n) {
            i[++e] = [n, t]
          }),
          i
        )
      }
      var Gc = function (t) {
          var e = -1,
            i = Array(t.size)
          return (
            t.forEach(function (t) {
              i[++e] = t
            }),
            i
          )
        },
        Jc = qc,
        Qc = Xa,
        td = Xc,
        ed = Kc,
        id = Gc,
        nd = ca ? ca.prototype : void 0,
        sd = nd ? nd.valueOf : void 0
      var od = function (t, e, i, n, s, o, r) {
        switch (i) {
          case '[object DataView]':
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
            ;(t = t.buffer), (e = e.buffer)
          case '[object ArrayBuffer]':
            return !(t.byteLength != e.byteLength || !o(new Jc(t), new Jc(e)))
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return Qc(+t, +e)
          case '[object Error]':
            return t.name == e.name && t.message == e.message
          case '[object RegExp]':
          case '[object String]':
            return t == e + ''
          case '[object Map]':
            var a = ed
          case '[object Set]':
            var l = 1 & n
            if ((a || (a = id), t.size != e.size && !l)) return !1
            var h = r.get(t)
            if (h) return h == e
            ;(n |= 2), r.set(t, e)
            var c = td(a(t), a(e), n, s, o, r)
            return r.delete(t), c
          case '[object Symbol]':
            if (sd) return sd.call(t) == sd.call(e)
        }
        return !1
      }
      var rd = function (t, e) {
          for (var i = -1, n = e.length, s = t.length; ++i < n; ) t[s + i] = e[i]
          return t
        },
        ad = rd,
        ld = Vl
      var hd = function (t, e, i) {
        var n = e(t)
        return ld(t) ? n : ad(n, i(t))
      }
      var cd = function (t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, s = 0, o = []; ++i < n; ) {
          var r = t[i]
          e(r, i, t) && (o[s++] = r)
        }
        return o
      }
      var dd = cd,
        ud = function () {
          return []
        },
        fd = Object.prototype.propertyIsEnumerable,
        pd = Object.getOwnPropertySymbols,
        gd = hd,
        md = pd
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  dd(pd(t), function (e) {
                    return fd.call(t, e)
                  }))
            }
          : ud,
        bd = xh
      var xd = function (t) {
          return gd(t, bd, md)
        },
        yd = Object.prototype.hasOwnProperty
      var vd = function (t, e, i, n, s, o) {
          var r = 1 & i,
            a = xd(t),
            l = a.length
          if (l != xd(e).length && !r) return !1
          for (var h = l; h--; ) {
            var c = a[h]
            if (!(r ? c in e : yd.call(e, c))) return !1
          }
          var d = o.get(t),
            u = o.get(e)
          if (d && u) return d == e && u == t
          var f = !0
          o.set(t, e), o.set(e, t)
          for (var p = r; ++h < l; ) {
            var g = t[(c = a[h])],
              m = e[c]
            if (n) var b = r ? n(m, g, c, e, t, o) : n(g, m, c, t, e, o)
            if (!(void 0 === b ? g === m || s(g, m, i, n, o) : b)) {
              f = !1
              break
            }
            p || (p = 'constructor' == c)
          }
          if (f && !p) {
            var x = t.constructor,
              y = e.constructor
            x == y ||
              !('constructor' in t) ||
              !('constructor' in e) ||
              ('function' == typeof x &&
                x instanceof x &&
                'function' == typeof y &&
                y instanceof y) ||
              (f = !1)
          }
          return o.delete(t), o.delete(e), f
        },
        _d = Ha(ha, 'DataView'),
        wd = Kh,
        Md = Ha(ha, 'Promise'),
        kd = Ha(ha, 'Set'),
        Sd = Ha(ha, 'WeakMap'),
        Od = _a,
        Pd = Aa,
        Cd = '[object Map]',
        Dd = '[object Promise]',
        Ad = '[object Set]',
        Td = '[object WeakMap]',
        Ed = '[object DataView]',
        Ld = Pd(_d),
        Rd = Pd(wd),
        Id = Pd(Md),
        zd = Pd(kd),
        jd = Pd(Sd),
        Fd = Od
      ;((_d && Fd(new _d(new ArrayBuffer(1))) != Ed) ||
        (wd && Fd(new wd()) != Cd) ||
        (Md && Fd(Md.resolve()) != Dd) ||
        (kd && Fd(new kd()) != Ad) ||
        (Sd && Fd(new Sd()) != Td)) &&
        (Fd = function (t) {
          var e = Od(t),
            i = '[object Object]' == e ? t.constructor : void 0,
            n = i ? Pd(i) : ''
          if (n)
            switch (n) {
              case Ld:
                return Ed
              case Rd:
                return Cd
              case Id:
                return Dd
              case zd:
                return Ad
              case jd:
                return Td
            }
          return e
        })
      var Nd = Nc,
        Vd = Xc,
        Bd = od,
        Wd = vd,
        Hd = Fd,
        Zd = Vl,
        Yd = Hl,
        Ud = eh,
        $d = '[object Arguments]',
        Xd = '[object Array]',
        qd = '[object Object]',
        Kd = Object.prototype.hasOwnProperty
      var Gd = function (t, e, i, n, s, o) {
          var r = Zd(t),
            a = Zd(e),
            l = r ? Xd : Hd(t),
            h = a ? Xd : Hd(e),
            c = (l = l == $d ? qd : l) == qd,
            d = (h = h == $d ? qd : h) == qd,
            u = l == h
          if (u && Yd(t)) {
            if (!Yd(e)) return !1
            ;(r = !0), (c = !1)
          }
          if (u && !c)
            return o || (o = new Nd()), r || Ud(t) ? Vd(t, e, i, n, s, o) : Bd(t, e, l, i, n, s, o)
          if (!(1 & i)) {
            var f = c && Kd.call(t, '__wrapped__'),
              p = d && Kd.call(e, '__wrapped__')
            if (f || p) {
              var g = f ? t.value() : t,
                m = p ? e.value() : e
              return o || (o = new Nd()), s(g, m, i, n, o)
            }
          }
          return !!u && (o || (o = new Nd()), Wd(t, e, i, n, s, o))
        },
        Jd = Tl
      var Qd = function t(e, i, n, s, o) {
          return (
            e === i ||
            (null == e || null == i || (!Jd(e) && !Jd(i))
              ? e !== e && i !== i
              : Gd(e, i, n, s, t, o))
          )
        },
        tu = Nc,
        eu = Qd
      var iu = function (t, e, i, n) {
          var s = i.length,
            o = s,
            r = !n
          if (null == t) return !o
          for (t = Object(t); s--; ) {
            var a = i[s]
            if (r && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
          }
          for (; ++s < o; ) {
            var l = (a = i[s])[0],
              h = t[l],
              c = a[1]
            if (r && a[2]) {
              if (void 0 === h && !(l in t)) return !1
            } else {
              var d = new tu()
              if (n) var u = n(h, c, l, t, e, d)
              if (!(void 0 === u ? eu(c, h, 3, n, d) : u)) return !1
            }
          }
          return !0
        },
        nu = wa
      var su = function (t) {
          return t === t && !nu(t)
        },
        ou = su,
        ru = xh
      var au = function (t, e) {
          return function (i) {
            return null != i && i[t] === e && (void 0 !== e || t in Object(i))
          }
        },
        lu = iu,
        hu = function (t) {
          for (var e = ru(t), i = e.length; i--; ) {
            var n = e[i],
              s = t[n]
            e[i] = [n, s, ou(s)]
          }
          return e
        },
        cu = au
      var du = function (t) {
          var e = hu(t)
          return 1 == e.length && e[0][2]
            ? cu(e[0][0], e[0][1])
            : function (i) {
                return i === t || lu(i, t, e)
              }
        },
        uu = _a,
        fu = Tl
      var pu = function (t) {
          return 'symbol' == typeof t || (fu(t) && '[object Symbol]' == uu(t))
        },
        gu = Vl,
        mu = pu,
        bu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        xu = /^\w*$/
      var yu = function (t, e) {
          if (gu(t)) return !1
          var i = typeof t
          return (
            !('number' != i && 'symbol' != i && 'boolean' != i && null != t && !mu(t)) ||
            xu.test(t) ||
            !bu.test(t) ||
            (null != e && t in Object(e))
          )
        },
        vu = Cc
      function _u(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError('Expected a function')
        var i = function () {
          var n = arguments,
            s = e ? e.apply(this, n) : n[0],
            o = i.cache
          if (o.has(s)) return o.get(s)
          var r = t.apply(this, n)
          return (i.cache = o.set(s, r) || o), r
        }
        return (i.cache = new (_u.Cache || vu)()), i
      }
      _u.Cache = vu
      var wu = _u
      var Mu =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ku = /\\(\\)?/g,
        Su = (function (t) {
          var e = wu(t, function (t) {
              return 500 === i.size && i.clear(), t
            }),
            i = e.cache
          return e
        })(function (t) {
          var e = []
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(Mu, function (t, i, n, s) {
              e.push(n ? s.replace(ku, '$1') : i || t)
            }),
            e
          )
        })
      var Ou = function (t, e) {
          for (var i = -1, n = null == t ? 0 : t.length, s = Array(n); ++i < n; )
            s[i] = e(t[i], i, t)
          return s
        },
        Pu = Ou,
        Cu = Vl,
        Du = pu,
        Au = ca ? ca.prototype : void 0,
        Tu = Au ? Au.toString : void 0
      var Eu = function t(e) {
          if ('string' == typeof e) return e
          if (Cu(e)) return Pu(e, t) + ''
          if (Du(e)) return Tu ? Tu.call(e) : ''
          var i = e + ''
          return '0' == i && 1 / e == -Infinity ? '-0' : i
        },
        Lu = Eu
      var Ru = Vl,
        Iu = yu,
        zu = Su,
        ju = function (t) {
          return null == t ? '' : Lu(t)
        }
      var Fu = function (t, e) {
          return Ru(t) ? t : Iu(t, e) ? [t] : zu(ju(t))
        },
        Nu = pu
      var Vu = function (t) {
          if ('string' == typeof t || Nu(t)) return t
          var e = t + ''
          return '0' == e && 1 / t == -Infinity ? '-0' : e
        },
        Bu = Fu,
        Wu = Vu
      var Hu = function (t, e) {
          for (var i = 0, n = (e = Bu(e, t)).length; null != t && i < n; ) t = t[Wu(e[i++])]
          return i && i == n ? t : void 0
        },
        Zu = Hu
      var Yu = Fu,
        Uu = Nl,
        $u = Vl,
        Xu = yl,
        qu = pl,
        Ku = Vu
      var Gu = function (t, e, i) {
          for (var n = -1, s = (e = Yu(e, t)).length, o = !1; ++n < s; ) {
            var r = Ku(e[n])
            if (!(o = null != t && i(t, r))) break
            t = t[r]
          }
          return o || ++n != s
            ? o
            : !!(s = null == t ? 0 : t.length) && qu(s) && Xu(r, s) && ($u(t) || Uu(t))
        },
        Ju = function (t, e) {
          return null != t && e in Object(t)
        },
        Qu = Gu
      var tf = Qd,
        ef = function (t, e, i) {
          var n = null == t ? void 0 : Zu(t, e)
          return void 0 === n ? i : n
        },
        nf = function (t, e) {
          return null != t && Qu(t, e, Ju)
        },
        sf = yu,
        of = su,
        rf = au,
        af = Vu
      var lf = Hu
      var hf = function (t) {
          return function (e) {
            return null == e ? void 0 : e[t]
          }
        },
        cf = function (t) {
          return function (e) {
            return lf(e, t)
          }
        },
        df = yu,
        uf = Vu
      var ff = du,
        pf = function (t, e) {
          return sf(t) && of(e)
            ? rf(af(t), e)
            : function (i) {
                var n = ef(i, t)
                return void 0 === n && n === e ? nf(i, t) : tf(e, n, 3)
              }
        },
        gf = il,
        mf = Vl,
        bf = function (t) {
          return df(t) ? hf(uf(t)) : cf(t)
        }
      var xf = function (t) {
          return 'function' == typeof t
            ? t
            : null == t
              ? gf
              : 'object' == typeof t
                ? mf(t)
                  ? pf(t[0], t[1])
                  : ff(t)
                : bf(t)
        },
        yf = xf,
        vf = bl,
        _f = xh
      var wf = function (t) {
        return function (e, i, n) {
          var s = Object(e)
          if (!vf(e)) {
            var o = yf(i)
            ;(e = _f(e)),
              (i = function (t) {
                return o(s[t], t, s)
              })
          }
          var r = t(e, i, n)
          return r > -1 ? s[o ? e[r] : r] : void 0
        }
      }
      var Mf = function (t, e, i, n) {
          for (var s = t.length, o = i + (n ? 1 : -1); n ? o-- : ++o < s; )
            if (e(t[o], o, t)) return o
          return -1
        },
        kf = /\s/
      var Sf = function (t) {
          for (var e = t.length; e-- && kf.test(t.charAt(e)); );
          return e
        },
        Of = Sf,
        Pf = /^\s+/
      var Cf = function (t) {
          return t ? t.slice(0, Of(t) + 1).replace(Pf, '') : t
        },
        Df = wa,
        Af = pu,
        Tf = /^[-+]0x[0-9a-f]+$/i,
        Ef = /^0b[01]+$/i,
        Lf = /^0o[0-7]+$/i,
        Rf = parseInt
      var If = function (t) {
          if ('number' == typeof t) return t
          if (Af(t)) return NaN
          if (Df(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t
            t = Df(e) ? e + '' : e
          }
          if ('string' != typeof t) return 0 === t ? t : +t
          t = Cf(t)
          var i = Ef.test(t)
          return i || Lf.test(t) ? Rf(t.slice(2), i ? 2 : 8) : Tf.test(t) ? NaN : +t
        },
        zf = 1 / 0
      var jf = function (t) {
        return t
          ? (t = If(t)) === zf || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t === t
              ? t
              : 0
          : 0 === t
            ? t
            : 0
      }
      var Ff = Mf,
        Nf = xf,
        Vf = function (t) {
          var e = jf(t),
            i = e % 1
          return e === e ? (i ? e - i : e) : 0
        },
        Bf = Math.max
      var Wf = function (t, e, i) {
          var n = null == t ? 0 : t.length
          if (!n) return -1
          var s = null == i ? 0 : Vf(i)
          return s < 0 && (s = Bf(n + s, 0)), Ff(t, Nf(e), s)
        },
        Hf = qr(wf(Wf)),
        Zf = $a,
        Yf = Xa
      var Uf = function (t, e, i) {
        ;((void 0 !== i && !Yf(t[e], i)) || (void 0 === i && !(e in t))) && Zf(t, e, i)
      }
      var $f = function (t) {
          return function (e, i, n) {
            for (var s = -1, o = Object(e), r = n(e), a = r.length; a--; ) {
              var l = r[t ? a : ++s]
              if (!1 === i(o[l], l, o)) break
            }
            return e
          }
        },
        Xf = $f(),
        qf = { exports: {} }
      !(function (t, e) {
        var i = ha,
          n = e && !e.nodeType && e,
          s = n && t && !t.nodeType && t,
          o = s && s.exports === n ? i.Buffer : void 0,
          r = o ? o.allocUnsafe : void 0
        t.exports = function (t, e) {
          if (e) return t.slice()
          var i = t.length,
            n = r ? r(i) : new t.constructor(i)
          return t.copy(n), n
        }
      })(qf, qf.exports)
      var Kf = qf.exports,
        Gf = qc
      var Jf = function (t) {
        var e = new t.constructor(t.byteLength)
        return new Gf(e).set(new Gf(t)), e
      }
      var Qf = function (t, e) {
        var i = e ? Jf(t.buffer) : t.buffer
        return new t.constructor(i, t.byteOffset, t.length)
      }
      var tp = function (t, e) {
          var i = -1,
            n = t.length
          for (e || (e = Array(n)); ++i < n; ) e[i] = t[i]
          return e
        },
        ep = wa,
        ip = Object.create,
        np = (function () {
          function t() {}
          return function (e) {
            if (!ep(e)) return {}
            if (ip) return ip(e)
            t.prototype = e
            var i = new t()
            return (t.prototype = void 0), i
          }
        })(),
        sp = ch(Object.getPrototypeOf, Object),
        op = np,
        rp = sp,
        ap = Dl
      var lp = function (t) {
          return 'function' != typeof t.constructor || ap(t) ? {} : op(rp(t))
        },
        hp = bl,
        cp = Tl
      var dp = function (t) {
          return cp(t) && hp(t)
        },
        up = _a,
        fp = sp,
        pp = Tl,
        gp = Function.prototype,
        mp = Object.prototype,
        bp = gp.toString,
        xp = mp.hasOwnProperty,
        yp = bp.call(Object)
      var vp = function (t) {
        if (!pp(t) || '[object Object]' != up(t)) return !1
        var e = fp(t)
        if (null === e) return !0
        var i = xp.call(e, 'constructor') && e.constructor
        return 'function' == typeof i && i instanceof i && bp.call(i) == yp
      }
      var _p = function (t, e) {
        if (('constructor' !== e || 'function' !== typeof t[e]) && '__proto__' != e) return t[e]
      }
      var wp = wa,
        Mp = Dl,
        kp = function (t) {
          var e = []
          if (null != t) for (var i in Object(t)) e.push(i)
          return e
        },
        Sp = Object.prototype.hasOwnProperty
      var Op = hh,
        Pp = function (t) {
          if (!wp(t)) return kp(t)
          var e = Mp(t),
            i = []
          for (var n in t) ('constructor' != n || (!e && Sp.call(t, n))) && i.push(n)
          return i
        },
        Cp = bl
      var Dp = function (t) {
          return Cp(t) ? Op(t, !0) : Pp(t)
        },
        Ap = el,
        Tp = Dp
      var Ep = Uf,
        Lp = Kf,
        Rp = Qf,
        Ip = tp,
        zp = lp,
        jp = Nl,
        Fp = Vl,
        Np = dp,
        Vp = Hl,
        Bp = Sa,
        Wp = wa,
        Hp = vp,
        Zp = eh,
        Yp = _p,
        Up = function (t) {
          return Ap(t, Tp(t))
        }
      var $p = Nc,
        Xp = Uf,
        qp = Xf,
        Kp = function (t, e, i, n, s, o, r) {
          var a = Yp(t, i),
            l = Yp(e, i),
            h = r.get(l)
          if (h) Ep(t, i, h)
          else {
            var c = o ? o(a, l, i + '', t, e, r) : void 0,
              d = void 0 === c
            if (d) {
              var u = Fp(l),
                f = !u && Vp(l),
                p = !u && !f && Zp(l)
              ;(c = l),
                u || f || p
                  ? Fp(a)
                    ? (c = a)
                    : Np(a)
                      ? (c = Ip(a))
                      : f
                        ? ((d = !1), (c = Lp(l, !0)))
                        : p
                          ? ((d = !1), (c = Rp(l, !0)))
                          : (c = [])
                  : Hp(l) || jp(l)
                    ? ((c = a), jp(a) ? (c = Up(a)) : (Wp(a) && !Bp(a)) || (c = zp(l)))
                    : (d = !1)
            }
            d && (r.set(l, c), s(c, l, n, o, r), r.delete(l)), Ep(t, i, c)
          }
        },
        Gp = wa,
        Jp = Dp,
        Qp = _p
      var tg = function t(e, i, n, s, o) {
          e !== i &&
            qp(
              i,
              function (r, a) {
                if ((o || (o = new $p()), Gp(r))) Kp(e, i, a, n, t, s, o)
                else {
                  var l = s ? s(Qp(e, a), r, a + '', e, i, o) : void 0
                  void 0 === l && (l = r), Xp(e, a, l)
                }
              },
              Jp,
            )
        },
        eg = tg,
        ig = qr(
          Pl(function (t, e, i) {
            eg(t, e, i)
          }),
        ),
        ng = function (t, e) {
          'function' === typeof t ? t(e) : t && (t.current = e)
        },
        sg = (0, n.forwardRef)(function (t, e) {
          var i = t.className,
            s = t.customTooltips,
            o = void 0 === s || s,
            r = t.data,
            a = t.id,
            l = t.fallbackContent,
            h = t.getDatasetAtEvent,
            c = t.getElementAtEvent,
            d = t.getElementsAtEvent,
            u = t.height,
            f = void 0 === u ? 150 : u,
            p = t.options,
            g = t.plugins,
            m = void 0 === g ? [] : g,
            b = t.redraw,
            x = void 0 !== b && b,
            y = t.type,
            v = void 0 === y ? 'bar' : y,
            _ = t.width,
            w = void 0 === _ ? 300 : _,
            M = t.wrapper,
            k = void 0 === M || M,
            S = $r(t, [
              'className',
              'customTooltips',
              'data',
              'id',
              'fallbackContent',
              'getDatasetAtEvent',
              'getElementAtEvent',
              'getElementsAtEvent',
              'height',
              'options',
              'plugins',
              'redraw',
              'type',
              'width',
              'wrapper',
            ])
          js.register.apply(js, Nr)
          var O = (0, n.useRef)(null),
            P = (0, n.useRef)(),
            C = (0, n.useMemo)(
              function () {
                return 'function' === typeof r
                  ? O.current
                    ? r(O.current)
                    : { datasets: [] }
                  : ig({}, r)
              },
              [O.current, JSON.stringify(r)],
            ),
            D = (0, n.useMemo)(
              function () {
                return o
                  ? ig({}, p, {
                      plugins: {
                        tooltip: { enabled: !1, mode: 'index', position: 'nearest', external: Yr },
                      },
                    })
                  : p
              },
              [O.current, JSON.stringify(p)],
            ),
            A = function () {
              O.current &&
                ((P.current = new js(O.current, { type: v, data: C, options: D, plugins: m })),
                ng(e, P.current))
            },
            T = function () {
              ng(e, null), P.current && (P.current.destroy(), (P.current = void 0))
            }
          ;(0, n.useEffect)(function () {
            return (
              A(),
              function () {
                return T()
              }
            )
          }, []),
            (0, n.useEffect)(
              function () {
                P.current &&
                  (x
                    ? (T(),
                      setTimeout(function () {
                        A()
                      }, 0))
                    : (function () {
                        if (P.current) {
                          if ((p && (P.current.options = Ur({}, D)), !P.current.config.data))
                            return (P.current.config.data = C), void P.current.update()
                          var t = C.datasets,
                            e = void 0 === t ? [] : t,
                            i = $r(C, ['datasets']),
                            n = P.current.config.data.datasets,
                            s = void 0 === n ? [] : n
                          Oh(P.current.config.data, i),
                            (P.current.config.data.datasets = e.map(function (t) {
                              var e = Hf(s, function (e) {
                                return e.label === t.label && e.type === t.type
                              })
                              return e && t.data
                                ? (e.data ? (e.data.length = t.data.length) : (e.data = []),
                                  Oh(e.data, t.data),
                                  Ur(Ur(Ur({}, e), t), { data: e.data }))
                                : t
                            })),
                            P.current.update()
                        }
                      })())
              },
              [JSON.stringify(r), C],
            )
          var E = function (t) {
            return n.createElement(
              'canvas',
              Ur(
                {},
                !k && i && { className: i },
                {
                  'data-testid': 'canvas',
                  height: f,
                  id: a,
                  onClick: function (t) {
                    !(function (t) {
                      P.current &&
                        (h &&
                          h(
                            P.current.getElementsAtEventForMode(
                              t,
                              'dataset',
                              { intersect: !0 },
                              !1,
                            ),
                            t,
                          ),
                        c &&
                          c(
                            P.current.getElementsAtEventForMode(
                              t,
                              'nearest',
                              { intersect: !0 },
                              !1,
                            ),
                            t,
                          ),
                        d &&
                          d(
                            P.current.getElementsAtEventForMode(t, 'index', { intersect: !0 }, !1),
                            t,
                          ))
                    })(t)
                  },
                  ref: t,
                  role: 'img',
                  width: w,
                },
                S,
              ),
              l,
            )
          }
          return k
            ? n.createElement('div', Ur({ className: oa('chart-wrapper', i) }, S), E(O))
            : E(O)
        })
      ;(sg.propTypes = {
        className: na.string,
        customTooltips: na.bool,
        data: na.any.isRequired,
        fallbackContent: na.node,
        getDatasetAtEvent: na.func,
        getElementAtEvent: na.func,
        getElementsAtEvent: na.func,
        height: na.number,
        id: na.string,
        options: na.object,
        plugins: na.array,
        redraw: na.bool,
        type: na.oneOf([
          'bar',
          'line',
          'scatter',
          'bubble',
          'pie',
          'doughnut',
          'polarArea',
          'radar',
        ]).isRequired,
        width: na.number,
        wrapper: na.bool,
      }),
        (sg.displayName = 'CChart')
      var og = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'bar', ref: e }))
      })
      ;(og.displayName = 'CChartBar'),
        ((0, n.forwardRef)(function (t, e) {
          return n.createElement(sg, Ur({}, t, { type: 'bubble', ref: e }))
        }).displayName = 'CChartBubble')
      var rg = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'doughnut', ref: e }))
      })
      rg.displayName = 'CChartDoughnut'
      var ag = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'line', ref: e }))
      })
      ag.displayName = 'CChartLine'
      var lg = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'pie', ref: e }))
      })
      lg.displayName = 'CChartPie'
      var hg = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'polarArea', ref: e }))
      })
      hg.displayName = 'CChartPolarArea'
      var cg = (0, n.forwardRef)(function (t, e) {
        return n.createElement(sg, Ur({}, t, { type: 'radar', ref: e }))
      })
      ;(cg.displayName = 'CChartRadar'),
        ((0, n.forwardRef)(function (t, e) {
          return n.createElement(sg, Ur({}, t, { type: 'scatter', ref: e }))
        }).displayName = 'CChartScatter')
    },
    13609: (t, e, i) => {
      i.d(e, { x: () => h })
      var n = i(50949),
        s = i(28381),
        o = i(34860),
        r = i.n(o),
        a = i(47577),
        l = i(37169),
        h = (0, s.forwardRef)(function (t, e) {
          var i,
            o = t.children,
            r = t.className,
            l = t.color,
            h = t.textColor,
            c = (0, n._T)(t, ['children', 'className', 'color', 'textColor'])
          return s.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, a.Z)(
                  'card',
                  ((i = {}), (i['bg-'.concat(l)] = l), (i['text-'.concat(h)] = h), i),
                  r,
                ),
              },
              c,
              { ref: e },
            ),
            o,
          )
        })
      ;(h.propTypes = {
        children: r().node,
        className: r().string,
        color: l.$1,
        textColor: r().string,
      }),
        (h.displayName = 'CCard')
    },
    45813: (t, e, i) => {
      i.d(e, { s: () => l })
      var n = i(50949),
        s = i(28381),
        o = i(34860),
        r = i.n(o),
        a = i(47577),
        l = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            o = t.className,
            r = (0, n._T)(t, ['children', 'className'])
          return s.createElement(
            'div',
            (0, n.pi)({ className: (0, a.Z)('card-body', o) }, r, { ref: e }),
            i,
          )
        })
      ;(l.propTypes = { children: r().node, className: r().string }), (l.displayName = 'CCardBody')
    },
    42177: (t, e, i) => {
      i.d(e, { b: () => l })
      var n = i(50949),
        s = i(28381),
        o = i(34860),
        r = i.n(o),
        a = i(47577),
        l = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            o = t.component,
            r = void 0 === o ? 'div' : o,
            l = t.className,
            h = (0, n._T)(t, ['children', 'component', 'className'])
          return s.createElement(
            r,
            (0, n.pi)({ className: (0, a.Z)('card-header', l) }, h, { ref: e }),
            i,
          )
        })
      ;(l.propTypes = { children: r().node, className: r().string, component: r().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (t, e, i) => {
      i.d(e, { b: () => h })
      var n = i(50949),
        s = i(28381),
        o = i(34860),
        r = i.n(o),
        a = i(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        h = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            o = t.className,
            r = (0, n._T)(t, ['children', 'className']),
            h = []
          return (
            l.forEach(function (t) {
              var e = r[t]
              delete r[t]
              var i = 'xs' === t ? '' : '-'.concat(t)
              ;('number' !== typeof e && 'string' !== typeof e) ||
                h.push('col'.concat(i, '-').concat(e)),
                'boolean' === typeof e && h.push('col'.concat(i)),
                e &&
                  'object' === typeof e &&
                  (('number' !== typeof e.span && 'string' !== typeof e.span) ||
                    h.push('col'.concat(i, '-').concat(e.span)),
                  'boolean' === typeof e.span && h.push('col'.concat(i)),
                  ('number' !== typeof e.order && 'string' !== typeof e.order) ||
                    h.push('order'.concat(i, '-').concat(e.order)),
                  'number' === typeof e.offset && h.push('offset'.concat(i, '-').concat(e.offset)))
            }),
            s.createElement(
              'div',
              (0, n.pi)({ className: (0, a.Z)(h.length > 0 ? h : 'col', o) }, r, { ref: e }),
              i,
            )
          )
        }),
        c = r().oneOfType([r().bool, r().number, r().string, r().oneOf(['auto'])]),
        d = r().oneOfType([
          c,
          r().shape({
            span: c,
            offset: r().oneOfType([r().number, r().string]),
            order: r().oneOfType([r().oneOf(['first', 'last']), r().number, r().string]),
          }),
        ])
      ;(h.propTypes = {
        children: r().node,
        className: r().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (h.displayName = 'CCol')
    },
    48917: (t, e, i) => {
      i.d(e, { r: () => h })
      var n = i(50949),
        s = i(28381),
        o = i(34860),
        r = i.n(o),
        a = i(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        h = (0, s.forwardRef)(function (t, e) {
          var i = t.children,
            o = t.className,
            r = (0, n._T)(t, ['children', 'className']),
            h = []
          return (
            l.forEach(function (t) {
              var e = r[t]
              delete r[t]
              var i = 'xs' === t ? '' : '-'.concat(t)
              'object' === typeof e &&
                (e.cols && h.push('row-cols'.concat(i, '-').concat(e.cols)),
                'number' === typeof e.gutter && h.push('g'.concat(i, '-').concat(e.gutter)),
                'number' === typeof e.gutterX && h.push('gx'.concat(i, '-').concat(e.gutterX)),
                'number' === typeof e.gutterY && h.push('gy'.concat(i, '-').concat(e.gutterY)))
            }),
            s.createElement('div', { className: (0, a.Z)('row', h, o), ref: e }, i)
          )
        }),
        c = r().shape({
          cols: r().oneOfType([r().oneOf(['auto']), r().number, r().string]),
          gutter: r().oneOfType([r().string, r().number]),
          gutterX: r().oneOfType([r().string, r().number]),
          gutterY: r().oneOfType([r().string, r().number]),
        })
      ;(h.propTypes = {
        children: r().node,
        className: r().string,
        xs: c,
        sm: c,
        md: c,
        lg: c,
        xl: c,
        xxl: c,
      }),
        (h.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=1966.51b14f15.chunk.js.map
