'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9394],
  {
    19394: (e, r, n) => {
      n.r(r), n.d(r, { default: () => f })
      n(28381)
      var c = n(48917),
        a = n(5640),
        s = n(13609),
        o = n(42177),
        t = n(45813),
        l = n(16387),
        d = n(16995),
        i = n(83628),
        h = n(54908),
        p = n(29343)
      const f = () =>
        (0, p.jsx)(c.r, {
          children: (0, p.jsx)(a.b, {
            xs: 12,
            children: (0, p.jsxs)(s.x, {
              className: 'mb-4',
              children: [
                (0, p.jsx)(o.b, {
                  children: (0, p.jsx)('strong', { children: 'React Breadcrumb' }),
                }),
                (0, p.jsxs)(t.s, {
                  children: [
                    (0, p.jsxs)('p', {
                      className: 'text-body-secondary small',
                      children: [
                        'The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don\u2019t have to add separators, because they automatically added in CSS through',
                        ' ',
                        (0, p.jsxs)('a', {
                          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before',
                          children: [' ', (0, p.jsx)('code', { children: '::before' })],
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, p.jsxs)('a', {
                          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/content',
                          children: [' ', (0, p.jsx)('code', { children: 'content' })],
                        }),
                        '.',
                      ],
                    }),
                    (0, p.jsxs)(h.q3, {
                      href: 'components/breadcrumb',
                      children: [
                        (0, p.jsxs)(l.f, {
                          children: [
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Home' }),
                            }),
                            (0, p.jsx)(d.S, { active: !0, children: 'Library' }),
                          ],
                        }),
                        (0, p.jsxs)(l.f, {
                          children: [
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Home' }),
                            }),
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Library' }),
                            }),
                            (0, p.jsx)(d.S, { active: !0, children: 'Data' }),
                          ],
                        }),
                        (0, p.jsxs)(l.f, {
                          children: [
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Home' }),
                            }),
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Library' }),
                            }),
                            (0, p.jsx)(d.S, {
                              children: (0, p.jsx)(i.h, { href: '#', children: 'Data' }),
                            }),
                            (0, p.jsx)(d.S, { active: !0, children: 'Bootstrap' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
    },
    13609: (e, r, n) => {
      n.d(r, { x: () => d })
      var c = n(50949),
        a = n(28381),
        s = n(34860),
        o = n.n(s),
        t = n(47577),
        l = n(37169),
        d = (0, a.forwardRef)(function (e, r) {
          var n,
            s = e.children,
            o = e.className,
            l = e.color,
            d = e.textColor,
            i = (0, c._T)(e, ['children', 'className', 'color', 'textColor'])
          return a.createElement(
            'div',
            (0, c.pi)(
              {
                className: (0, t.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(l)] = l), (n['text-'.concat(d)] = d), n),
                  o,
                ),
              },
              i,
              { ref: r },
            ),
            s,
          )
        })
      ;(d.propTypes = {
        children: o().node,
        className: o().string,
        color: l.$1,
        textColor: o().string,
      }),
        (d.displayName = 'CCard')
    },
    45813: (e, r, n) => {
      n.d(r, { s: () => l })
      var c = n(50949),
        a = n(28381),
        s = n(34860),
        o = n.n(s),
        t = n(47577),
        l = (0, a.forwardRef)(function (e, r) {
          var n = e.children,
            s = e.className,
            o = (0, c._T)(e, ['children', 'className'])
          return a.createElement(
            'div',
            (0, c.pi)({ className: (0, t.Z)('card-body', s) }, o, { ref: r }),
            n,
          )
        })
      ;(l.propTypes = { children: o().node, className: o().string }), (l.displayName = 'CCardBody')
    },
    42177: (e, r, n) => {
      n.d(r, { b: () => l })
      var c = n(50949),
        a = n(28381),
        s = n(34860),
        o = n.n(s),
        t = n(47577),
        l = (0, a.forwardRef)(function (e, r) {
          var n = e.children,
            s = e.component,
            o = void 0 === s ? 'div' : s,
            l = e.className,
            d = (0, c._T)(e, ['children', 'component', 'className'])
          return a.createElement(
            o,
            (0, c.pi)({ className: (0, t.Z)('card-header', l) }, d, { ref: r }),
            n,
          )
        })
      ;(l.propTypes = { children: o().node, className: o().string, component: o().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (e, r, n) => {
      n.d(r, { b: () => d })
      var c = n(50949),
        a = n(28381),
        s = n(34860),
        o = n.n(s),
        t = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, a.forwardRef)(function (e, r) {
          var n = e.children,
            s = e.className,
            o = (0, c._T)(e, ['children', 'className']),
            d = []
          return (
            l.forEach(function (e) {
              var r = o[e]
              delete o[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof r && 'string' !== typeof r) ||
                d.push('col'.concat(n, '-').concat(r)),
                'boolean' === typeof r && d.push('col'.concat(n)),
                r &&
                  'object' === typeof r &&
                  (('number' !== typeof r.span && 'string' !== typeof r.span) ||
                    d.push('col'.concat(n, '-').concat(r.span)),
                  'boolean' === typeof r.span && d.push('col'.concat(n)),
                  ('number' !== typeof r.order && 'string' !== typeof r.order) ||
                    d.push('order'.concat(n, '-').concat(r.order)),
                  'number' === typeof r.offset && d.push('offset'.concat(n, '-').concat(r.offset)))
            }),
            a.createElement(
              'div',
              (0, c.pi)({ className: (0, t.Z)(d.length > 0 ? d : 'col', s) }, o, { ref: r }),
              n,
            )
          )
        }),
        i = o().oneOfType([o().bool, o().number, o().string, o().oneOf(['auto'])]),
        h = o().oneOfType([
          i,
          o().shape({
            span: i,
            offset: o().oneOfType([o().number, o().string]),
            order: o().oneOfType([o().oneOf(['first', 'last']), o().number, o().string]),
          }),
        ])
      ;(d.propTypes = {
        children: o().node,
        className: o().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (d.displayName = 'CCol')
    },
    48917: (e, r, n) => {
      n.d(r, { r: () => d })
      var c = n(50949),
        a = n(28381),
        s = n(34860),
        o = n.n(s),
        t = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, a.forwardRef)(function (e, r) {
          var n = e.children,
            s = e.className,
            o = (0, c._T)(e, ['children', 'className']),
            d = []
          return (
            l.forEach(function (e) {
              var r = o[e]
              delete o[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof r &&
                (r.cols && d.push('row-cols'.concat(n, '-').concat(r.cols)),
                'number' === typeof r.gutter && d.push('g'.concat(n, '-').concat(r.gutter)),
                'number' === typeof r.gutterX && d.push('gx'.concat(n, '-').concat(r.gutterX)),
                'number' === typeof r.gutterY && d.push('gy'.concat(n, '-').concat(r.gutterY)))
            }),
            a.createElement('div', { className: (0, t.Z)('row', d, s), ref: r }, n)
          )
        }),
        i = o().shape({
          cols: o().oneOfType([o().oneOf(['auto']), o().number, o().string]),
          gutter: o().oneOfType([o().string, o().number]),
          gutterX: o().oneOfType([o().string, o().number]),
          gutterY: o().oneOfType([o().string, o().number]),
        })
      ;(d.propTypes = {
        children: o().node,
        className: o().string,
        xs: i,
        sm: i,
        md: i,
        lg: i,
        xl: i,
        xxl: i,
      }),
        (d.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=9394.6a9a900b.chunk.js.map
