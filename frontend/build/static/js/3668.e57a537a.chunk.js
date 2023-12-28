/*! For license information please see 3668.e57a537a.chunk.js.LICENSE.txt */
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [3668],
  {
    93668: (e, r, n) => {
      'use strict'
      n.r(r), n.d(r, { default: () => g })
      var s = n(28381),
        t = n(82954),
        c = n.n(t),
        a = n(5640),
        o = n(13609),
        l = n(42177),
        i = n(45813),
        d = n(48917),
        p = function (e) {
          if ('undefined' === typeof e) throw new TypeError('Hex color is not defined')
          if ('transparent' === e) return '#00000000'
          var r = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
          if (!r) throw new Error(''.concat(e, ' is not a valid rgb color'))
          var n = '0'.concat(parseInt(r[1], 10).toString(16)),
            s = '0'.concat(parseInt(r[2], 10).toString(16)),
            t = '0'.concat(parseInt(r[3], 10).toString(16))
          return '#'.concat(n.slice(-2)).concat(s.slice(-2)).concat(t.slice(-2))
        },
        f = n(54908),
        u = n(29343)
      const h = () => {
          const [e, r] = (0, s.useState)('rgb(255, 255, 255)'),
            n = (0, s.createRef)()
          return (
            (0, s.useEffect)(() => {
              const e = n.current.parentNode.firstChild,
                s = window.getComputedStyle(e).getPropertyValue('background-color')
              r(s)
            }, [n]),
            (0, u.jsx)('table', {
              className: 'table w-100',
              ref: n,
              children: (0, u.jsxs)('tbody', {
                children: [
                  (0, u.jsxs)('tr', {
                    children: [
                      (0, u.jsx)('td', { className: 'text-body-secondary', children: 'HEX:' }),
                      (0, u.jsx)('td', { className: 'font-weight-bold', children: p(e) }),
                    ],
                  }),
                  (0, u.jsxs)('tr', {
                    children: [
                      (0, u.jsx)('td', { className: 'text-body-secondary', children: 'RGB:' }),
                      (0, u.jsx)('td', { className: 'font-weight-bold', children: e }),
                    ],
                  }),
                ],
              }),
            })
          )
        },
        m = (e) => {
          let { className: r, children: n } = e
          const s = c()(r, 'theme-color w-75 rounded mb-3')
          return (0, u.jsxs)(a.b, {
            xs: 12,
            sm: 6,
            md: 4,
            xl: 2,
            className: 'mb-4',
            children: [
              (0, u.jsx)('div', { className: s, style: { paddingTop: '75%' } }),
              n,
              (0, u.jsx)(h, {}),
            ],
          })
        },
        g = () =>
          (0, u.jsx)(u.Fragment, {
            children: (0, u.jsxs)(o.x, {
              className: 'mb-4',
              children: [
                (0, u.jsxs)(l.b, {
                  children: [
                    'Theme colors',
                    (0, u.jsx)(f.cG, { href: 'https://coreui.io/docs/utilities/colors/' }),
                  ],
                }),
                (0, u.jsx)(i.s, {
                  children: (0, u.jsxs)(d.r, {
                    children: [
                      (0, u.jsx)(m, {
                        className: 'bg-primary',
                        children: (0, u.jsx)('h6', { children: 'Brand Primary Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-secondary',
                        children: (0, u.jsx)('h6', { children: 'Brand Secondary Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-success',
                        children: (0, u.jsx)('h6', { children: 'Brand Success Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-danger',
                        children: (0, u.jsx)('h6', { children: 'Brand Danger Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-warning',
                        children: (0, u.jsx)('h6', { children: 'Brand Warning Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-info',
                        children: (0, u.jsx)('h6', { children: 'Brand Info Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-light',
                        children: (0, u.jsx)('h6', { children: 'Brand Light Color' }),
                      }),
                      (0, u.jsx)(m, {
                        className: 'bg-dark',
                        children: (0, u.jsx)('h6', { children: 'Brand Dark Color' }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
    },
    13609: (e, r, n) => {
      'use strict'
      n.d(r, { x: () => i })
      var s = n(50949),
        t = n(28381),
        c = n(34860),
        a = n.n(c),
        o = n(47577),
        l = n(37169),
        i = (0, t.forwardRef)(function (e, r) {
          var n,
            c = e.children,
            a = e.className,
            l = e.color,
            i = e.textColor,
            d = (0, s._T)(e, ['children', 'className', 'color', 'textColor'])
          return t.createElement(
            'div',
            (0, s.pi)(
              {
                className: (0, o.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(l)] = l), (n['text-'.concat(i)] = i), n),
                  a,
                ),
              },
              d,
              { ref: r },
            ),
            c,
          )
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        color: l.$1,
        textColor: a().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, r, n) => {
      'use strict'
      n.d(r, { s: () => l })
      var s = n(50949),
        t = n(28381),
        c = n(34860),
        a = n.n(c),
        o = n(47577),
        l = (0, t.forwardRef)(function (e, r) {
          var n = e.children,
            c = e.className,
            a = (0, s._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, s.pi)({ className: (0, o.Z)('card-body', c) }, a, { ref: r }),
            n,
          )
        })
      ;(l.propTypes = { children: a().node, className: a().string }), (l.displayName = 'CCardBody')
    },
    42177: (e, r, n) => {
      'use strict'
      n.d(r, { b: () => l })
      var s = n(50949),
        t = n(28381),
        c = n(34860),
        a = n.n(c),
        o = n(47577),
        l = (0, t.forwardRef)(function (e, r) {
          var n = e.children,
            c = e.component,
            a = void 0 === c ? 'div' : c,
            l = e.className,
            i = (0, s._T)(e, ['children', 'component', 'className'])
          return t.createElement(
            a,
            (0, s.pi)({ className: (0, o.Z)('card-header', l) }, i, { ref: r }),
            n,
          )
        })
      ;(l.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (e, r, n) => {
      'use strict'
      n.d(r, { b: () => i })
      var s = n(50949),
        t = n(28381),
        c = n(34860),
        a = n.n(c),
        o = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, t.forwardRef)(function (e, r) {
          var n = e.children,
            c = e.className,
            a = (0, s._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var r = a[e]
              delete a[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof r && 'string' !== typeof r) ||
                i.push('col'.concat(n, '-').concat(r)),
                'boolean' === typeof r && i.push('col'.concat(n)),
                r &&
                  'object' === typeof r &&
                  (('number' !== typeof r.span && 'string' !== typeof r.span) ||
                    i.push('col'.concat(n, '-').concat(r.span)),
                  'boolean' === typeof r.span && i.push('col'.concat(n)),
                  ('number' !== typeof r.order && 'string' !== typeof r.order) ||
                    i.push('order'.concat(n, '-').concat(r.order)),
                  'number' === typeof r.offset && i.push('offset'.concat(n, '-').concat(r.offset)))
            }),
            t.createElement(
              'div',
              (0, s.pi)({ className: (0, o.Z)(i.length > 0 ? i : 'col', c) }, a, { ref: r }),
              n,
            )
          )
        }),
        d = a().oneOfType([a().bool, a().number, a().string, a().oneOf(['auto'])]),
        p = a().oneOfType([
          d,
          a().shape({
            span: d,
            offset: a().oneOfType([a().number, a().string]),
            order: a().oneOfType([a().oneOf(['first', 'last']), a().number, a().string]),
          }),
        ])
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        xs: p,
        sm: p,
        md: p,
        lg: p,
        xl: p,
        xxl: p,
      }),
        (i.displayName = 'CCol')
    },
    48917: (e, r, n) => {
      'use strict'
      n.d(r, { r: () => i })
      var s = n(50949),
        t = n(28381),
        c = n(34860),
        a = n.n(c),
        o = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, t.forwardRef)(function (e, r) {
          var n = e.children,
            c = e.className,
            a = (0, s._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var r = a[e]
              delete a[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof r &&
                (r.cols && i.push('row-cols'.concat(n, '-').concat(r.cols)),
                'number' === typeof r.gutter && i.push('g'.concat(n, '-').concat(r.gutter)),
                'number' === typeof r.gutterX && i.push('gx'.concat(n, '-').concat(r.gutterX)),
                'number' === typeof r.gutterY && i.push('gy'.concat(n, '-').concat(r.gutterY)))
            }),
            t.createElement('div', { className: (0, o.Z)('row', i, c), ref: r }, n)
          )
        }),
        d = a().shape({
          cols: a().oneOfType([a().oneOf(['auto']), a().number, a().string]),
          gutter: a().oneOfType([a().string, a().number]),
          gutterX: a().oneOfType([a().string, a().number]),
          gutterY: a().oneOfType([a().string, a().number]),
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (i.displayName = 'CRow')
    },
    82954: (e, r) => {
      var n
      !(function () {
        'use strict'
        var s = {}.hasOwnProperty
        function t() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var n = arguments[r]
            if (n) {
              var c = typeof n
              if ('string' === c || 'number' === c) e.push(n)
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = t.apply(null, n)
                  a && e.push(a)
                }
              } else if ('object' === c) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes('[native code]')
                ) {
                  e.push(n.toString())
                  continue
                }
                for (var o in n) s.call(n, o) && n[o] && e.push(o)
              }
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((t.default = t), (e.exports = t))
          : void 0 ===
              (n = function () {
                return t
              }.apply(r, [])) || (e.exports = n)
      })()
    },
  },
])
//# sourceMappingURL=3668.e57a537a.chunk.js.map
