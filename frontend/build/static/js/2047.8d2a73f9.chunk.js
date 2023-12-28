/*! For license information please see 2047.8d2a73f9.chunk.js.LICENSE.txt */
'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2047],
  {
    69557: (e, t, n) => {
      n.d(t, { Z: () => y })
      var r = n(28381),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                return e
              }),
            a.apply(this, arguments)
          )
        }
      function o(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
          ? e.default
          : e
      }
      'function' === typeof SuppressedError && SuppressedError
      var i = { exports: {} }
      var s, c, l, p
      function u() {
        if (c) return s
        c = 1
        return (s = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
      }
      i.exports = (function () {
        if (p) return l
        p = 1
        var e = u()
        function t() {}
        function n() {}
        return (
          (n.resetWarningCache = t),
          (l = function () {
            function r(t, n, r, a, o, i) {
              if (i !== e) {
                var s = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                )
                throw ((s.name = 'Invariant Violation'), s)
              }
            }
            function a() {
              return r
            }
            r.isRequired = r
            var o = {
              array: r,
              bigint: r,
              bool: r,
              func: r,
              number: r,
              object: r,
              string: r,
              symbol: r,
              any: r,
              arrayOf: a,
              element: r,
              elementType: r,
              instanceOf: a,
              node: r,
              objectOf: a,
              oneOf: a,
              oneOfType: a,
              shape: a,
              exact: a,
              checkPropTypes: n,
              resetWarningCache: t,
            }
            return (o.PropTypes = o), o
          })
        )
      })()()
      var f,
        m = o(i.exports),
        d = { exports: {} }
      ;(f = d),
        (function () {
          var e = {}.hasOwnProperty
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
              var a = arguments[r]
              if (a) {
                var o = typeof a
                if ('string' === o || 'number' === o) n.push(a)
                else if (Array.isArray(a)) {
                  if (a.length) {
                    var i = t.apply(null, a)
                    i && n.push(i)
                  }
                } else if ('object' === o) {
                  if (
                    a.toString !== Object.prototype.toString &&
                    !a.toString.toString().includes('[native code]')
                  ) {
                    n.push(a.toString())
                    continue
                  }
                  for (var s in a) e.call(a, s) && a[s] && n.push(s)
                }
              }
            }
            return n.join(' ')
          }
          f.exports ? ((t.default = t), (f.exports = t)) : (window.classNames = t)
        })()
      var h = o(d.exports),
        y = (0, r.forwardRef)(function (e, t) {
          var n,
            o = e.className,
            i = e.content,
            s = e.customClassName,
            c = e.height,
            l = e.icon,
            p = e.name,
            u = e.size,
            f = e.title,
            m = e.use,
            d = e.width,
            y = (function (e, t) {
              var n = {}
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
              if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                var a = 0
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                  t.indexOf(r[a]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                    (n[r[a]] = e[r[a]])
              }
              return n
            })(e, [
              'className',
              'content',
              'customClassName',
              'height',
              'icon',
              'name',
              'size',
              'title',
              'use',
              'width',
            ]),
            g = (0, r.useState)(0),
            v = g[0],
            b = g[1],
            O = l || i || p
          i && process,
            p && process,
            (0, r.useMemo)(
              function () {
                return b(v + 1)
              },
              [O, JSON.stringify(O)],
            )
          var w = f ? '<title>'.concat(f, '</title>') : '',
            x = (0, r.useMemo)(
              function () {
                var e =
                  O && 'string' === typeof O && O.includes('-')
                    ? O.replace(/([-_][a-z0-9])/gi, function (e) {
                        return e.toUpperCase()
                      }).replace(/-/gi, '')
                    : O
                return Array.isArray(O) ? O : 'string' === typeof O && r.icons ? r.icons[e] : void 0
              },
              [v],
            ),
            _ = (0, r.useMemo)(
              function () {
                return Array.isArray(x) ? x[1] || x[0] : x
              },
              [v],
            ),
            N = Array.isArray(x) && x.length > 1 ? x[0] : '64 64',
            T = y.viewBox || '0 0 '.concat(N),
            C = s
              ? h(s)
              : h(
                  'icon',
                  (((n = {})['icon-'.concat(u)] = u), (n['icon-custom-size'] = c || d), n),
                  o,
                )
          return r.createElement(
            r.Fragment,
            null,
            m
              ? r.createElement(
                  'svg',
                  a(
                    { xmlns: 'http://www.w3.org/2000/svg', className: C },
                    c && { height: c },
                    d && { width: d },
                    { role: 'img', 'aria-hidden': 'true' },
                    y,
                    { ref: t },
                  ),
                  r.createElement('use', { href: m }),
                )
              : r.createElement(
                  'svg',
                  a(
                    { xmlns: 'http://www.w3.org/2000/svg', viewBox: T, className: C },
                    c && { height: c },
                    d && { width: d },
                    {
                      role: 'img',
                      'aria-hidden': 'true',
                      dangerouslySetInnerHTML: { __html: w + _ },
                    },
                    y,
                    { ref: t },
                  ),
                ),
            f && r.createElement('span', { className: 'visually-hidden' }, f),
          )
        })
      ;(y.propTypes = {
        className: m.string,
        content: m.oneOfType([m.array, m.string]),
        customClassName: m.string,
        height: m.number,
        icon: m.oneOfType([m.array, m.string]),
        name: m.string,
        size: m.oneOf([
          'custom',
          'custom-size',
          'sm',
          'lg',
          'xl',
          'xxl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ]),
        title: m.any,
        use: m.any,
        width: m.number,
      }),
        (y.displayName = 'CIcon')
    },
    79361: (e, t, n) => {
      n.d(t, { u: () => p })
      var r = n(50949),
        a = n(28381),
        o = n(34860),
        i = n.n(o),
        s = n(47577),
        c = n(83628),
        l = n(37169),
        p = (0, a.forwardRef)(function (e, t) {
          var n,
            o = e.children,
            i = e.className,
            l = e.color,
            p = e.component,
            u = void 0 === p ? 'button' : p,
            f = e.shape,
            m = e.size,
            d = e.type,
            h = void 0 === d ? 'button' : d,
            y = e.variant,
            g = (0, r._T)(e, [
              'children',
              'className',
              'color',
              'component',
              'shape',
              'size',
              'type',
              'variant',
            ])
          return a.createElement(
            c.h,
            (0, r.pi)(
              { component: g.href ? 'a' : u },
              !g.href && { type: h },
              {
                className: (0, s.Z)(
                  'btn',
                  y ? 'btn-'.concat(y, '-').concat(l) : 'btn-'.concat(l),
                  ((n = {}), (n['btn-'.concat(m)] = m), n),
                  f,
                  i,
                ),
              },
              g,
              { ref: t },
            ),
            o,
          )
        })
      ;(p.propTypes = {
        children: i().node,
        className: i().string,
        color: l.$1,
        component: i().elementType,
        shape: i().string,
        size: i().oneOf(['sm', 'lg']),
        type: i().oneOf(['button', 'submit', 'reset']),
        variant: i().oneOf(['outline', 'ghost']),
      }),
        (p.displayName = 'CButton')
    },
    92914: (e, t, n) => {
      n.d(t, { K: () => l })
      var r = n(50949),
        a = n(28381),
        o = n(34860),
        i = n.n(o),
        s = n(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'fluid'],
        l = (0, a.forwardRef)(function (e, t) {
          var n = e.children,
            o = e.className,
            i = (0, r._T)(e, ['children', 'className']),
            l = []
          return (
            c.forEach(function (e) {
              var t = i[e]
              delete i[e], t && l.push('container-'.concat(e))
            }),
            a.createElement(
              'div',
              (0, r.pi)({ className: (0, s.Z)(l.length > 0 ? l : 'container', o) }, i, { ref: t }),
              n,
            )
          )
        })
      ;(l.propTypes = {
        children: i().node,
        className: i().string,
        sm: i().bool,
        md: i().bool,
        lg: i().bool,
        xl: i().bool,
        xxl: i().bool,
        fluid: i().bool,
      }),
        (l.displayName = 'CContainer')
    },
    83628: (e, t, n) => {
      n.d(t, { h: () => c })
      var r = n(50949),
        a = n(28381),
        o = n(34860),
        i = n.n(o),
        s = n(47577),
        c = (0, a.forwardRef)(function (e, t) {
          var n = e.children,
            o = e.active,
            i = e.className,
            c = e.component,
            l = void 0 === c ? 'a' : c,
            p = e.disabled,
            u = (0, r._T)(e, ['children', 'active', 'className', 'component', 'disabled'])
          return a.createElement(
            l,
            (0, r.pi)(
              { className: (0, s.Z)(i, { active: o, disabled: p }) },
              o && { 'aria-current': 'page' },
              'a' === l && p && { 'aria-disabled': !0, tabIndex: -1 },
              ('a' === l || 'button' === l) && {
                onClick: function (e) {
                  e.preventDefault, !p && u.onClick && u.onClick(e)
                },
              },
              { disabled: p },
              u,
              { ref: t },
            ),
            n,
          )
        })
      ;(c.propTypes = {
        active: i().bool,
        children: i().node,
        className: i().string,
        component: i().elementType,
        disabled: i().bool,
      }),
        (c.displayName = 'CLink')
    },
  },
])
//# sourceMappingURL=2047.8d2a73f9.chunk.js.map
