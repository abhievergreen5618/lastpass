'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1529],
  {
    1529: (e, r, s) => {
      s.r(r), s.d(r, { default: () => N })
      var n = s(28381),
        l = s(48917),
        i = s(5640),
        c = s(13609),
        a = s(42177),
        t = s(45813),
        o = s(50949),
        d = s(34860),
        h = s.n(d),
        m = s(47577),
        p = s(95117),
        x = s(63173),
        f = s(37169),
        u = s(41829),
        g = (0, n.forwardRef)(function (e, r) {
          var s = e.children,
            l = e.className,
            i = e.color,
            c = void 0 === i ? 'primary' : i,
            a = e.dismissible,
            t = e.variant,
            d = e.visible,
            h = void 0 === d || d,
            f = e.onClose,
            g = (0, o._T)(e, [
              'children',
              'className',
              'color',
              'dismissible',
              'variant',
              'visible',
              'onClose',
            ]),
            y = (0, n.useRef)(null),
            j = (0, x.A7)(r, y),
            b = (0, n.useState)(h),
            k = b[0],
            v = b[1]
          return (
            (0, n.useEffect)(
              function () {
                v(h)
              },
              [h],
            ),
            n.createElement(
              u.ZP,
              { in: k, mountOnEnter: !0, nodeRef: y, onExit: f, timeout: 150, unmountOnExit: !0 },
              function (e) {
                return n.createElement(
                  'div',
                  (0, o.pi)(
                    {
                      className: (0, m.Z)(
                        'alert',
                        'solid' === t ? 'bg-'.concat(c, ' text-white') : 'alert-'.concat(c),
                        { 'alert-dismissible fade': a, show: 'entered' === e },
                        l,
                      ),
                      role: 'alert',
                    },
                    g,
                    { ref: j },
                  ),
                  s,
                  a &&
                    n.createElement(p.p, {
                      onClick: function () {
                        return v(!1)
                      },
                    }),
                )
              },
            )
          )
        })
      ;(g.propTypes = {
        children: h().node,
        className: h().string,
        color: f.$1.isRequired,
        dismissible: h().bool,
        onClose: h().func,
        variant: h().string,
        visible: h().bool,
      }),
        (g.displayName = 'CAlert')
      var y = s(83628),
        j = (0, n.forwardRef)(function (e, r) {
          var s = e.children,
            l = e.className,
            i = (0, o._T)(e, ['children', 'className'])
          return n.createElement(
            y.h,
            (0, o.pi)({ className: (0, m.Z)('alert-link', l) }, i, { ref: r }),
            s,
          )
        })
      ;(j.propTypes = { children: h().node, className: h().string }), (j.displayName = 'CAlertLink')
      var b = (0, n.forwardRef)(function (e, r) {
        var s = e.children,
          l = e.className,
          i = e.component,
          c = void 0 === i ? 'h4' : i,
          a = (0, o._T)(e, ['children', 'className', 'component'])
        return n.createElement(
          c,
          (0, o.pi)({ className: (0, m.Z)('alert-heading', l) }, a, { ref: r }),
          s,
        )
      })
      ;(b.propTypes = { children: h().node, className: h().string, component: h().elementType }),
        (b.displayName = 'CAlertHeading')
      var k = s(54908),
        v = s(29343)
      const N = () =>
        (0, v.jsxs)(l.r, {
          children: [
            (0, v.jsx)(i.b, {
              xs: 12,
              children: (0, v.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, v.jsx)(a.b, { children: (0, v.jsx)('strong', { children: 'React Alert' }) }),
                  (0, v.jsxs)(t.s, {
                    children: [
                      (0, v.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'React Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the ',
                          (0, v.jsx)('strong', { children: 'required' }),
                          ' contextual ',
                          (0, v.jsx)('code', { children: 'color' }),
                          ' ',
                          'props (e.g., ',
                          (0, v.jsx)('code', { children: 'primary' }),
                          '). For inline dismissal, use the',
                          ' ',
                          (0, v.jsx)('a', {
                            href: 'https://coreui.io/react/docs/components/alert#dismissing',
                            children: 'dismissing prop',
                          }),
                          '.',
                        ],
                      }),
                      (0, v.jsxs)(k.q3, {
                        href: 'components/alert',
                        children: [
                          (0, v.jsx)(g, {
                            color: 'primary',
                            children: 'A simple primary alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'secondary',
                            children: 'A simple secondary alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'success',
                            children: 'A simple success alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'danger',
                            children: 'A simple danger alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'warning',
                            children: 'A simple warning alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'info',
                            children: 'A simple info alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'light',
                            children: 'A simple light alert\u2014check it out!',
                          }),
                          (0, v.jsx)(g, {
                            color: 'dark',
                            children: 'A simple dark alert\u2014check it out!',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsx)(i.b, {
              xs: 12,
              children: (0, v.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, v.jsxs)(a.b, {
                    children: [
                      (0, v.jsx)('strong', { children: 'React Alert' }),
                      ' ',
                      (0, v.jsx)('small', { children: 'Link color' }),
                    ],
                  }),
                  (0, v.jsxs)(t.s, {
                    children: [
                      (0, v.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use the ',
                          (0, v.jsx)('code', { children: '<CAlertLink>' }),
                          ' component to immediately give matching colored links inside any alert.',
                        ],
                      }),
                      (0, v.jsxs)(k.q3, {
                        href: 'components/alert#link-color',
                        children: [
                          (0, v.jsxs)(g, {
                            color: 'primary',
                            children: [
                              'A simple primary alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'secondary',
                            children: [
                              'A simple secondary alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'success',
                            children: [
                              'A simple success alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'danger',
                            children: [
                              'A simple danger alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'warning',
                            children: [
                              'A simple warning alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'info',
                            children: [
                              'A simple info alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'light',
                            children: [
                              'A simple light alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                          (0, v.jsxs)(g, {
                            color: 'dark',
                            children: [
                              'A simple dark alert with ',
                              (0, v.jsx)(j, { href: '#', children: 'an example link' }),
                              '. Give it a click if you like.',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsx)(i.b, {
              xs: 12,
              children: (0, v.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, v.jsxs)(a.b, {
                    children: [
                      (0, v.jsx)('strong', { children: 'React Alert' }),
                      ' ',
                      (0, v.jsx)('small', { children: 'Additional content' }),
                    ],
                  }),
                  (0, v.jsxs)(t.s, {
                    children: [
                      (0, v.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Alert can also incorporate supplementary components & elements like heading, paragraph, and divider.',
                      }),
                      (0, v.jsx)(k.q3, {
                        href: 'components/alert#additional-content',
                        children: (0, v.jsxs)(g, {
                          color: 'success',
                          children: [
                            (0, v.jsx)(b, { tag: 'h4', children: 'Well done!' }),
                            (0, v.jsx)('p', {
                              children:
                                'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
                            }),
                            (0, v.jsx)('hr', {}),
                            (0, v.jsx)('p', {
                              className: 'mb-0',
                              children:
                                'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsx)(i.b, {
              xs: 12,
              children: (0, v.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, v.jsxs)(a.b, {
                    children: [
                      (0, v.jsx)('strong', { children: 'React Alert' }),
                      ' ',
                      (0, v.jsx)('small', { children: 'Dismissing' }),
                    ],
                  }),
                  (0, v.jsxs)(t.s, {
                    children: [
                      (0, v.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Alerts can also be easily dismissed. Just add the ',
                          (0, v.jsx)('code', { children: 'dismissible' }),
                          ' prop.',
                        ],
                      }),
                      (0, v.jsx)(k.q3, {
                        href: 'components/alert#dismissing',
                        children: (0, v.jsxs)(g, {
                          color: 'warning',
                          dismissible: !0,
                          onClose: () => {
                            alert('\ud83d\udc4b Well, hi there! Thanks for dismissing me.')
                          },
                          children: [
                            (0, v.jsx)('strong', { children: 'Go right ahead' }),
                            ' and click that dimiss over there on the right.',
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    },
    13609: (e, r, s) => {
      s.d(r, { x: () => o })
      var n = s(50949),
        l = s(28381),
        i = s(34860),
        c = s.n(i),
        a = s(47577),
        t = s(37169),
        o = (0, l.forwardRef)(function (e, r) {
          var s,
            i = e.children,
            c = e.className,
            t = e.color,
            o = e.textColor,
            d = (0, n._T)(e, ['children', 'className', 'color', 'textColor'])
          return l.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, a.Z)(
                  'card',
                  ((s = {}), (s['bg-'.concat(t)] = t), (s['text-'.concat(o)] = o), s),
                  c,
                ),
              },
              d,
              { ref: r },
            ),
            i,
          )
        })
      ;(o.propTypes = {
        children: c().node,
        className: c().string,
        color: t.$1,
        textColor: c().string,
      }),
        (o.displayName = 'CCard')
    },
    45813: (e, r, s) => {
      s.d(r, { s: () => t })
      var n = s(50949),
        l = s(28381),
        i = s(34860),
        c = s.n(i),
        a = s(47577),
        t = (0, l.forwardRef)(function (e, r) {
          var s = e.children,
            i = e.className,
            c = (0, n._T)(e, ['children', 'className'])
          return l.createElement(
            'div',
            (0, n.pi)({ className: (0, a.Z)('card-body', i) }, c, { ref: r }),
            s,
          )
        })
      ;(t.propTypes = { children: c().node, className: c().string }), (t.displayName = 'CCardBody')
    },
    42177: (e, r, s) => {
      s.d(r, { b: () => t })
      var n = s(50949),
        l = s(28381),
        i = s(34860),
        c = s.n(i),
        a = s(47577),
        t = (0, l.forwardRef)(function (e, r) {
          var s = e.children,
            i = e.component,
            c = void 0 === i ? 'div' : i,
            t = e.className,
            o = (0, n._T)(e, ['children', 'component', 'className'])
          return l.createElement(
            c,
            (0, n.pi)({ className: (0, a.Z)('card-header', t) }, o, { ref: r }),
            s,
          )
        })
      ;(t.propTypes = { children: c().node, className: c().string, component: c().elementType }),
        (t.displayName = 'CCardHeader')
    },
    5640: (e, r, s) => {
      s.d(r, { b: () => o })
      var n = s(50949),
        l = s(28381),
        i = s(34860),
        c = s.n(i),
        a = s(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, l.forwardRef)(function (e, r) {
          var s = e.children,
            i = e.className,
            c = (0, n._T)(e, ['children', 'className']),
            o = []
          return (
            t.forEach(function (e) {
              var r = c[e]
              delete c[e]
              var s = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof r && 'string' !== typeof r) ||
                o.push('col'.concat(s, '-').concat(r)),
                'boolean' === typeof r && o.push('col'.concat(s)),
                r &&
                  'object' === typeof r &&
                  (('number' !== typeof r.span && 'string' !== typeof r.span) ||
                    o.push('col'.concat(s, '-').concat(r.span)),
                  'boolean' === typeof r.span && o.push('col'.concat(s)),
                  ('number' !== typeof r.order && 'string' !== typeof r.order) ||
                    o.push('order'.concat(s, '-').concat(r.order)),
                  'number' === typeof r.offset && o.push('offset'.concat(s, '-').concat(r.offset)))
            }),
            l.createElement(
              'div',
              (0, n.pi)({ className: (0, a.Z)(o.length > 0 ? o : 'col', i) }, c, { ref: r }),
              s,
            )
          )
        }),
        d = c().oneOfType([c().bool, c().number, c().string, c().oneOf(['auto'])]),
        h = c().oneOfType([
          d,
          c().shape({
            span: d,
            offset: c().oneOfType([c().number, c().string]),
            order: c().oneOfType([c().oneOf(['first', 'last']), c().number, c().string]),
          }),
        ])
      ;(o.propTypes = {
        children: c().node,
        className: c().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (o.displayName = 'CCol')
    },
    48917: (e, r, s) => {
      s.d(r, { r: () => o })
      var n = s(50949),
        l = s(28381),
        i = s(34860),
        c = s.n(i),
        a = s(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, l.forwardRef)(function (e, r) {
          var s = e.children,
            i = e.className,
            c = (0, n._T)(e, ['children', 'className']),
            o = []
          return (
            t.forEach(function (e) {
              var r = c[e]
              delete c[e]
              var s = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof r &&
                (r.cols && o.push('row-cols'.concat(s, '-').concat(r.cols)),
                'number' === typeof r.gutter && o.push('g'.concat(s, '-').concat(r.gutter)),
                'number' === typeof r.gutterX && o.push('gx'.concat(s, '-').concat(r.gutterX)),
                'number' === typeof r.gutterY && o.push('gy'.concat(s, '-').concat(r.gutterY)))
            }),
            l.createElement('div', { className: (0, a.Z)('row', o, i), ref: r }, s)
          )
        }),
        d = c().shape({
          cols: c().oneOfType([c().oneOf(['auto']), c().number, c().string]),
          gutter: c().oneOfType([c().string, c().number]),
          gutterX: c().oneOfType([c().string, c().number]),
          gutterY: c().oneOfType([c().string, c().number]),
        })
      ;(o.propTypes = {
        children: c().node,
        className: c().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (o.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=1529.a1819b77.chunk.js.map
