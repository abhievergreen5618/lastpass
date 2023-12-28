'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9312],
  {
    79312: (e, s, n) => {
      n.r(s), n.d(s, { default: () => v })
      var r = n(28381),
        c = n(48917),
        o = n(5640),
        a = n(13609),
        l = n(42177),
        t = n(45813),
        i = n(51963),
        d = n(10294),
        h = n(82733),
        m = n(79361),
        x = n(50949),
        p = n(34860),
        f = n.n(p),
        j = n(47577),
        u = n(37169),
        g = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        y = (0, r.forwardRef)(function (e, s) {
          var n,
            c = e.children,
            o = e.animation,
            a = e.className,
            l = e.color,
            t = e.component,
            i = void 0 === t ? 'span' : t,
            d = e.size,
            h = (0, x._T)(e, ['children', 'animation', 'className', 'color', 'component', 'size']),
            m = []
          return (
            g.forEach(function (e) {
              var s = h[e]
              delete h[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'number' === typeof s && m.push('col'.concat(n, '-').concat(s)),
                'boolean' === typeof s && m.push('col'.concat(n))
            }),
            r.createElement(
              i,
              (0, x.pi)(
                {
                  className: (0, j.Z)(
                    o ? 'placeholder-'.concat(o) : 'placeholder',
                    ((n = {}), (n['bg-'.concat(l)] = l), (n['placeholder-'.concat(d)] = d), n),
                    m,
                    a,
                  ),
                },
                h,
                { ref: s },
              ),
              c,
            )
          )
        })
      ;(y.propTypes = {
        animation: f().oneOf(['glow', 'wave']),
        children: f().node,
        className: f().string,
        color: u.$1,
        component: f().elementType,
        size: f().oneOf(['xs', 'sm', 'lg']),
      }),
        (y.displayName = 'CPlaceholder')
      var b = n(54908),
        N = n(54583),
        w = n(29343)
      const v = () =>
        (0, w.jsx)(c.r, {
          children: (0, w.jsxs)(o.b, {
            xs: 12,
            children: [
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsx)(l.b, {
                    children: (0, w.jsx)('strong', { children: 'React Placeholder' }),
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.',
                      }),
                      (0, w.jsx)(b.q3, {
                        href: 'components/placeholder',
                        children: (0, w.jsxs)('div', {
                          className: 'd-flex justify-content-around p-3',
                          children: [
                            (0, w.jsxs)(a.x, {
                              style: { width: '18rem' },
                              children: [
                                (0, w.jsx)(i.p, { orientation: 'top', src: N }),
                                (0, w.jsxs)(t.s, {
                                  children: [
                                    (0, w.jsx)(d.t, { children: 'Card title' }),
                                    (0, w.jsx)(h.u, {
                                      children:
                                        "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                    }),
                                    (0, w.jsx)(m.u, {
                                      color: 'primary',
                                      href: '#',
                                      children: 'Go somewhere',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, w.jsxs)(a.x, {
                              style: { width: '18rem' },
                              children: [
                                (0, w.jsxs)(i.p, {
                                  component: 'svg',
                                  orientation: 'top',
                                  width: '100%',
                                  height: '162',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  role: 'img',
                                  'aria-label': 'Placeholder',
                                  preserveAspectRatio: 'xMidYMid slice',
                                  focusable: 'false',
                                  children: [
                                    (0, w.jsx)('title', { children: 'Placeholder' }),
                                    (0, w.jsx)('rect', {
                                      width: '100%',
                                      height: '100%',
                                      fill: '#868e96',
                                    }),
                                  ],
                                }),
                                (0, w.jsxs)(t.s, {
                                  children: [
                                    (0, w.jsx)(y, {
                                      component: d.t,
                                      animation: 'glow',
                                      xs: 7,
                                      children: (0, w.jsx)(y, { xs: 6 }),
                                    }),
                                    (0, w.jsxs)(y, {
                                      component: h.u,
                                      animation: 'glow',
                                      children: [
                                        (0, w.jsx)(y, { xs: 7 }),
                                        (0, w.jsx)(y, { xs: 4 }),
                                        (0, w.jsx)(y, { xs: 4 }),
                                        (0, w.jsx)(y, { xs: 6 }),
                                        (0, w.jsx)(y, { xs: 8 }),
                                      ],
                                    }),
                                    (0, w.jsx)(y, {
                                      component: m.u,
                                      disabled: !0,
                                      href: '#',
                                      tabIndex: -1,
                                      xs: 6,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsx)(l.b, {
                    children: (0, w.jsx)('strong', { children: 'React Placeholder' }),
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Create placeholders with the ',
                          (0, w.jsx)('code', { children: '<CPlaceholder>' }),
                          ' component and a grid column propx (e.g., ',
                          (0, w.jsxs)('code', { children: ['xs=', 6] }),
                          ') to set the ',
                          (0, w.jsx)('code', { children: 'width' }),
                          '. They can replace the text inside an element or be added as a modifier class to an existing component.',
                        ],
                      }),
                      (0, w.jsxs)(b.q3, {
                        href: 'components/placeholder',
                        children: [
                          (0, w.jsx)('p', {
                            'aria-hidden': 'true',
                            children: (0, w.jsx)(y, { xs: 6 }),
                          }),
                          (0, w.jsx)(y, {
                            component: m.u,
                            'aria-hidden': 'true',
                            disabled: !0,
                            href: '#',
                            tabIndex: -1,
                            xs: 4,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsxs)(l.b, {
                    children: [
                      (0, w.jsx)('strong', { children: 'React Placeholder' }),
                      ' ',
                      (0, w.jsx)('small', { children: ' Width' }),
                    ],
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'You can change the ',
                          (0, w.jsx)('code', { children: 'width' }),
                          ' through grid column classes, width utilities, or inline styles.',
                        ],
                      }),
                      (0, w.jsxs)(b.q3, {
                        href: 'components/placeholder#width',
                        children: [
                          (0, w.jsx)(y, { xs: 6 }),
                          (0, w.jsx)(y, { className: 'w-75' }),
                          (0, w.jsx)(y, { style: { width: '30%' } }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsxs)(l.b, {
                    children: [
                      (0, w.jsx)('strong', { children: 'React Placeholder' }),
                      ' ',
                      (0, w.jsx)('small', { children: ' Color' }),
                    ],
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'By default, the ',
                          (0, w.jsx)('code', { children: '<CPlaceholder>' }),
                          ' uses ',
                          (0, w.jsx)('code', { children: 'currentColor' }),
                          '. This can be overridden with a custom color or utility class.',
                        ],
                      }),
                      (0, w.jsxs)(b.q3, {
                        href: 'components/placeholder#color',
                        children: [
                          (0, w.jsx)(y, { xs: 12 }),
                          (0, w.jsx)(y, { color: 'primary', xs: 12 }),
                          (0, w.jsx)(y, { color: 'secondary', xs: 12 }),
                          (0, w.jsx)(y, { color: 'success', xs: 12 }),
                          (0, w.jsx)(y, { color: 'danger', xs: 12 }),
                          (0, w.jsx)(y, { color: 'warning', xs: 12 }),
                          (0, w.jsx)(y, { color: 'info', xs: 12 }),
                          (0, w.jsx)(y, { color: 'light', xs: 12 }),
                          (0, w.jsx)(y, { color: 'dark', xs: 12 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsxs)(l.b, {
                    children: [
                      (0, w.jsx)('strong', { children: 'React Placeholder' }),
                      ' ',
                      (0, w.jsx)('small', { children: ' Sizing' }),
                    ],
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'The size of ',
                          (0, w.jsx)('code', { children: '<CPlaceholder>' }),
                          's are based on the typographic style of the parent element. Customize them with ',
                          (0, w.jsx)('code', { children: 'size' }),
                          ' prop: ',
                          (0, w.jsx)('code', { children: 'lg' }),
                          ',',
                          ' ',
                          (0, w.jsx)('code', { children: 'sm' }),
                          ', or ',
                          (0, w.jsx)('code', { children: 'xs' }),
                          '.',
                        ],
                      }),
                      (0, w.jsxs)(b.q3, {
                        href: 'components/placeholder#sizing',
                        children: [
                          (0, w.jsx)(y, { xs: 12, size: 'lg' }),
                          (0, w.jsx)(y, { xs: 12 }),
                          (0, w.jsx)(y, { xs: 12, size: 'sm' }),
                          (0, w.jsx)(y, { xs: 12, size: 'xs' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsxs)(a.x, {
                className: 'mb-4',
                children: [
                  (0, w.jsxs)(l.b, {
                    children: [
                      (0, w.jsx)('strong', { children: 'React Placeholder' }),
                      ' ',
                      (0, w.jsx)('small', { children: ' Animation' }),
                    ],
                  }),
                  (0, w.jsxs)(t.s, {
                    children: [
                      (0, w.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Animate placeholders with ',
                          (0, w.jsx)('code', { children: 'animation="glow"' }),
                          ' or',
                          ' ',
                          (0, w.jsx)('code', { children: 'animation="wave"' }),
                          ' to better convey the perception of something being ',
                          (0, w.jsx)('em', { children: 'actively' }),
                          ' loaded.',
                        ],
                      }),
                      (0, w.jsxs)(b.q3, {
                        href: 'components/placeholder#animation',
                        children: [
                          (0, w.jsx)(y, {
                            component: 'p',
                            animation: 'glow',
                            children: (0, w.jsx)(y, { xs: 12 }),
                          }),
                          (0, w.jsx)(y, {
                            component: 'p',
                            animation: 'wave',
                            children: (0, w.jsx)(y, { xs: 12 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
    },
    13609: (e, s, n) => {
      n.d(s, { x: () => i })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = n(37169),
        i = (0, c.forwardRef)(function (e, s) {
          var n,
            o = e.children,
            a = e.className,
            t = e.color,
            i = e.textColor,
            d = (0, r._T)(e, ['children', 'className', 'color', 'textColor'])
          return c.createElement(
            'div',
            (0, r.pi)(
              {
                className: (0, l.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(t)] = t), (n['text-'.concat(i)] = i), n),
                  a,
                ),
              },
              d,
              { ref: s },
            ),
            o,
          )
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        color: t.$1,
        textColor: a().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, s, n) => {
      n.d(s, { s: () => t })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            a = (0, r._T)(e, ['children', 'className'])
          return c.createElement(
            'div',
            (0, r.pi)({ className: (0, l.Z)('card-body', o) }, a, { ref: s }),
            n,
          )
        })
      ;(t.propTypes = { children: a().node, className: a().string }), (t.displayName = 'CCardBody')
    },
    42177: (e, s, n) => {
      n.d(s, { b: () => t })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.component,
            a = void 0 === o ? 'div' : o,
            t = e.className,
            i = (0, r._T)(e, ['children', 'component', 'className'])
          return c.createElement(
            a,
            (0, r.pi)({ className: (0, l.Z)('card-header', t) }, i, { ref: s }),
            n,
          )
        })
      ;(t.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (t.displayName = 'CCardHeader')
    },
    51963: (e, s, n) => {
      n.d(s, { p: () => t })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            a = e.component,
            t = void 0 === a ? 'img' : a,
            i = e.orientation,
            d = (0, r._T)(e, ['children', 'className', 'component', 'orientation'])
          return c.createElement(
            t,
            (0, r.pi)({ className: (0, l.Z)(i ? 'card-img-'.concat(i) : 'card-img', o) }, d, {
              ref: s,
            }),
            n,
          )
        })
      ;(t.propTypes = {
        children: a().node,
        className: a().string,
        component: a().elementType,
        orientation: a().oneOf(['top', 'bottom']),
      }),
        (t.displayName = 'CCardImage')
    },
    82733: (e, s, n) => {
      n.d(s, { u: () => t })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.component,
            a = void 0 === o ? 'p' : o,
            t = e.className,
            i = (0, r._T)(e, ['children', 'component', 'className'])
          return c.createElement(
            a,
            (0, r.pi)({ className: (0, l.Z)('card-text', t) }, i, { ref: s }),
            n,
          )
        })
      ;(t.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (t.displayName = 'CCardText')
    },
    10294: (e, s, n) => {
      n.d(s, { t: () => t })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.component,
            a = void 0 === o ? 'h5' : o,
            t = e.className,
            i = (0, r._T)(e, ['children', 'component', 'className'])
          return c.createElement(
            a,
            (0, r.pi)({ className: (0, l.Z)('card-title', t) }, i, { ref: s }),
            n,
          )
        })
      ;(t.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (t.displayName = 'CCardTitle')
    },
    5640: (e, s, n) => {
      n.d(s, { b: () => i })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            a = (0, r._T)(e, ['children', 'className']),
            i = []
          return (
            t.forEach(function (e) {
              var s = a[e]
              delete a[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                i.push('col'.concat(n, '-').concat(s)),
                'boolean' === typeof s && i.push('col'.concat(n)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    i.push('col'.concat(n, '-').concat(s.span)),
                  'boolean' === typeof s.span && i.push('col'.concat(n)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    i.push('order'.concat(n, '-').concat(s.order)),
                  'number' === typeof s.offset && i.push('offset'.concat(n, '-').concat(s.offset)))
            }),
            c.createElement(
              'div',
              (0, r.pi)({ className: (0, l.Z)(i.length > 0 ? i : 'col', o) }, a, { ref: s }),
              n,
            )
          )
        }),
        d = a().oneOfType([a().bool, a().number, a().string, a().oneOf(['auto'])]),
        h = a().oneOfType([
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
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (i.displayName = 'CCol')
    },
    48917: (e, s, n) => {
      n.d(s, { r: () => i })
      var r = n(50949),
        c = n(28381),
        o = n(34860),
        a = n.n(o),
        l = n(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, c.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            a = (0, r._T)(e, ['children', 'className']),
            i = []
          return (
            t.forEach(function (e) {
              var s = a[e]
              delete a[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && i.push('row-cols'.concat(n, '-').concat(s.cols)),
                'number' === typeof s.gutter && i.push('g'.concat(n, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && i.push('gx'.concat(n, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && i.push('gy'.concat(n, '-').concat(s.gutterY)))
            }),
            c.createElement('div', { className: (0, l.Z)('row', i, o), ref: s }, n)
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
    54583: (e, s, n) => {
      e.exports = n.p + 'static/media/react.83088efde08a5dedde9f.jpg'
    },
  },
])
//# sourceMappingURL=9312.d04a43b9.chunk.js.map
