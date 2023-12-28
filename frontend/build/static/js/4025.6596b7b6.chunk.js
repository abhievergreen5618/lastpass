'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [4025],
  {
    64025: (e, s, r) => {
      r.r(s), r.d(s, { default: () => h })
      r(28381)
      var a = r(48917),
        n = r(5640),
        l = r(13609),
        c = r(42177),
        o = r(45813),
        t = r(1033),
        i = r(99024),
        d = r(54908),
        m = r(29343)
      const h = () =>
        (0, m.jsxs)(a.r, {
          children: [
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don'tuse",
                          ' ',
                          (0, m.jsxs)('a', {
                            href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress',
                            children: [
                              'the HTML5 ',
                              (0, m.jsx)('code', { children: '<progress>' }),
                              ' element',
                            ],
                          }),
                          ', ensuring you can stack progress bars, animate them, and place text labels over them.',
                        ],
                      }),
                      (0, m.jsxs)(d.q3, {
                        href: 'components/progress',
                        children: [
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 0 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 25 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 50 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 75 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 100 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Labels' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add labels to your progress bars by placing text within the',
                          ' ',
                          (0, m.jsx)('code', { children: '<CProgressBar>' }),
                          '.',
                        ],
                      }),
                      (0, m.jsx)(d.q3, {
                        href: 'components/progress#labels',
                        children: (0, m.jsx)(t.y, {
                          className: 'mb-3',
                          children: (0, m.jsx)(i.S, { value: 25, children: '25%' }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Height' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'We only set a ',
                          (0, m.jsx)('code', { children: 'height' }),
                          ' value on the ',
                          (0, m.jsx)('code', { children: '<CProgress>' }),
                          ', so if you change that value the inner ',
                          (0, m.jsx)('code', { children: '<CProgressBar>' }),
                          ' will automatically resize accordingly.',
                        ],
                      }),
                      (0, m.jsxs)(d.q3, {
                        href: 'components/progress#height',
                        children: [
                          (0, m.jsx)(t.y, {
                            height: 1,
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 25 }),
                          }),
                          (0, m.jsx)(t.y, {
                            height: 20,
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { value: 25 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Backgrounds' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, m.jsx)('code', { children: 'color' }),
                          ' prop to change the appearance of individual progress bars.',
                        ],
                      }),
                      (0, m.jsxs)(d.q3, {
                        href: 'components/progress#backgrounds',
                        children: [
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { color: 'success', value: 25 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { color: 'info', value: 50 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { color: 'warning', value: 75 }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, { color: 'danger', value: 100 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Multiple bars' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Include multiple progress bars in a progress component if you need.',
                      }),
                      (0, m.jsx)(d.q3, {
                        href: 'components/progress#multiple-bars',
                        children: (0, m.jsxs)(t.y, {
                          className: 'mb-3',
                          children: [
                            (0, m.jsx)(i.S, { value: 15 }),
                            (0, m.jsx)(i.S, { color: 'success', value: 30 }),
                            (0, m.jsx)(i.S, { color: 'info', value: 20 }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Striped' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, m.jsx)('code', { children: 'variant="striped"' }),
                          ' to any ',
                          (0, m.jsx)('code', { children: '<CProgressBar>' }),
                          " to apply a stripe via CSS gradient over the progress bar's background color.",
                        ],
                      }),
                      (0, m.jsxs)(d.q3, {
                        href: 'components/progress#striped',
                        children: [
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'success',
                              variant: 'striped',
                              value: 25,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'info',
                              variant: 'striped',
                              value: 50,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'warning',
                              variant: 'striped',
                              value: 75,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'danger',
                              variant: 'striped',
                              value: 100,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(n.b, {
              xs: 12,
              children: (0, m.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Progress' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Animated stripes' }),
                    ],
                  }),
                  (0, m.jsxs)(o.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'The striped gradient can also be animated. Add ',
                          (0, m.jsx)('code', { children: 'animated' }),
                          ' property to',
                          ' ',
                          (0, m.jsx)('code', { children: '<CProgressBar>' }),
                          ' to animate the stripes right to left via CSS3 animations.',
                        ],
                      }),
                      (0, m.jsxs)(d.q3, {
                        href: 'components/progress#animated-stripes',
                        children: [
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'success',
                              variant: 'striped',
                              animated: !0,
                              value: 25,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'info',
                              variant: 'striped',
                              animated: !0,
                              value: 50,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'warning',
                              variant: 'striped',
                              animated: !0,
                              value: 75,
                            }),
                          }),
                          (0, m.jsx)(t.y, {
                            className: 'mb-3',
                            children: (0, m.jsx)(i.S, {
                              color: 'danger',
                              variant: 'striped',
                              animated: !0,
                              value: 100,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    },
    13609: (e, s, r) => {
      r.d(s, { x: () => i })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = r(37169),
        i = (0, n.forwardRef)(function (e, s) {
          var r,
            l = e.children,
            c = e.className,
            t = e.color,
            i = e.textColor,
            d = (0, a._T)(e, ['children', 'className', 'color', 'textColor'])
          return n.createElement(
            'div',
            (0, a.pi)(
              {
                className: (0, o.Z)(
                  'card',
                  ((r = {}), (r['bg-'.concat(t)] = t), (r['text-'.concat(i)] = i), r),
                  c,
                ),
              },
              d,
              { ref: s },
            ),
            l,
          )
        })
      ;(i.propTypes = {
        children: c().node,
        className: c().string,
        color: t.$1,
        textColor: c().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, s, r) => {
      r.d(s, { s: () => t })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.className,
            c = (0, a._T)(e, ['children', 'className'])
          return n.createElement(
            'div',
            (0, a.pi)({ className: (0, o.Z)('card-body', l) }, c, { ref: s }),
            r,
          )
        })
      ;(t.propTypes = { children: c().node, className: c().string }), (t.displayName = 'CCardBody')
    },
    42177: (e, s, r) => {
      r.d(s, { b: () => t })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.component,
            c = void 0 === l ? 'div' : l,
            t = e.className,
            i = (0, a._T)(e, ['children', 'component', 'className'])
          return n.createElement(
            c,
            (0, a.pi)({ className: (0, o.Z)('card-header', t) }, i, { ref: s }),
            r,
          )
        })
      ;(t.propTypes = { children: c().node, className: c().string, component: c().elementType }),
        (t.displayName = 'CCardHeader')
    },
    5640: (e, s, r) => {
      r.d(s, { b: () => i })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.className,
            c = (0, a._T)(e, ['children', 'className']),
            i = []
          return (
            t.forEach(function (e) {
              var s = c[e]
              delete c[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                i.push('col'.concat(r, '-').concat(s)),
                'boolean' === typeof s && i.push('col'.concat(r)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    i.push('col'.concat(r, '-').concat(s.span)),
                  'boolean' === typeof s.span && i.push('col'.concat(r)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    i.push('order'.concat(r, '-').concat(s.order)),
                  'number' === typeof s.offset && i.push('offset'.concat(r, '-').concat(s.offset)))
            }),
            n.createElement(
              'div',
              (0, a.pi)({ className: (0, o.Z)(i.length > 0 ? i : 'col', l) }, c, { ref: s }),
              r,
            )
          )
        }),
        d = c().oneOfType([c().bool, c().number, c().string, c().oneOf(['auto'])]),
        m = c().oneOfType([
          d,
          c().shape({
            span: d,
            offset: c().oneOfType([c().number, c().string]),
            order: c().oneOfType([c().oneOf(['first', 'last']), c().number, c().string]),
          }),
        ])
      ;(i.propTypes = {
        children: c().node,
        className: c().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (i.displayName = 'CCol')
    },
    48917: (e, s, r) => {
      r.d(s, { r: () => i })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.className,
            c = (0, a._T)(e, ['children', 'className']),
            i = []
          return (
            t.forEach(function (e) {
              var s = c[e]
              delete c[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && i.push('row-cols'.concat(r, '-').concat(s.cols)),
                'number' === typeof s.gutter && i.push('g'.concat(r, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && i.push('gx'.concat(r, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && i.push('gy'.concat(r, '-').concat(s.gutterY)))
            }),
            n.createElement('div', { className: (0, o.Z)('row', i, l), ref: s }, r)
          )
        }),
        d = c().shape({
          cols: c().oneOfType([c().oneOf(['auto']), c().number, c().string]),
          gutter: c().oneOfType([c().string, c().number]),
          gutterX: c().oneOfType([c().string, c().number]),
          gutterY: c().oneOfType([c().string, c().number]),
        })
      ;(i.propTypes = {
        children: c().node,
        className: c().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (i.displayName = 'CRow')
    },
    1033: (e, s, r) => {
      r.d(s, { y: () => d })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = r(92888),
        i = r(99024),
        d = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.className,
            c = e.height,
            d = e.progressBarClassName,
            m = e.thin,
            h = e.value,
            p = e.white,
            x = (0, a._T)(e, [
              'children',
              'className',
              'height',
              'progressBarClassName',
              'thin',
              'value',
              'white',
            ]),
            u = (0, n.useContext)(t.K).stacked
          return n.createElement(
            'div',
            (0, a.pi)(
              { className: (0, o.Z)('progress', { 'progress-thin': m, 'progress-white': p }, l) },
              void 0 !== h && {
                role: 'progressbar',
                'aria-valuenow': h,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
              },
              {
                style: (0, a.pi)(
                  (0, a.pi)({}, c ? { height: ''.concat(c, 'px') } : {}),
                  u ? { width: ''.concat(h, '%') } : {},
                ),
                ref: s,
              },
            ),
            n.Children.toArray(r).some(function (e) {
              return e.type && 'CProgressBar' === e.type.displayName
            })
              ? n.Children.map(r, function (e) {
                  if (n.isValidElement(e) && 'CProgressBar' === e.type.displayName)
                    return n.cloneElement(e, (0, a.pi)((0, a.pi)({}, h && { value: h }), x))
                })
              : n.createElement(i.S, (0, a.pi)({}, d && { className: d }, { value: h }, x), r),
          )
        })
      ;(d.propTypes = {
        children: c().node,
        className: c().string,
        height: c().number,
        progressBarClassName: c().string,
        thin: c().bool,
        value: c().number,
        white: c().bool,
      }),
        (d.displayName = 'CProgress')
    },
    99024: (e, s, r) => {
      r.d(s, { S: () => d })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = r(92888),
        i = r(37169),
        d = (0, n.forwardRef)(function (e, s) {
          var r,
            l = e.children,
            c = e.animated,
            i = e.className,
            d = e.color,
            m = e.value,
            h = void 0 === m ? 0 : m,
            p = e.variant,
            x = (0, a._T)(e, ['children', 'animated', 'className', 'color', 'value', 'variant']),
            u = (0, n.useContext)(t.K).stacked
          return n.createElement(
            'div',
            (0, a.pi)(
              {
                className: (0, o.Z)(
                  'progress-bar',
                  ((r = {}),
                  (r['bg-'.concat(d)] = d),
                  (r['progress-bar-'.concat(p)] = p),
                  (r['progress-bar-animated'] = c),
                  r),
                  i,
                ),
              },
              !u && { style: { width: ''.concat(h, '%') } },
              x,
              { ref: s },
            ),
            l,
          )
        })
      ;(d.propTypes = {
        animated: c().bool,
        children: c().node,
        className: c().string,
        color: i.$1,
        value: c().number,
        variant: c().oneOf(['striped']),
      }),
        (d.displayName = 'CProgressBar')
    },
    92888: (e, s, r) => {
      r.d(s, { K: () => t })
      var a = r(50949),
        n = r(28381),
        l = r(34860),
        c = r.n(l),
        o = r(47577),
        t = (0, n.createContext)({}),
        i = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            l = e.className,
            c = (0, a._T)(e, ['children', 'className'])
          return n.createElement(
            'div',
            (0, a.pi)({ className: (0, o.Z)('progress-stacked', l), ref: s }, c),
            n.createElement(t.Provider, { value: { stacked: !0 } }, r),
          )
        })
      ;(i.propTypes = { children: c().node, className: c().string }),
        (i.displayName = 'CProgressStacked')
    },
  },
])
//# sourceMappingURL=4025.6596b7b6.chunk.js.map
