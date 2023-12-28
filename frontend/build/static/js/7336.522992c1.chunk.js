'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [7336],
  {
    47336: (e, s, a) => {
      a.r(s), a.d(s, { default: () => g })
      var n = a(28381),
        r = a(48917),
        c = a(5640),
        t = a(13609),
        l = a(42177),
        o = a(45813),
        d = a(35424),
        i = a(50949),
        m = a(34860),
        p = a.n(m),
        h = a(47577),
        x = (0, n.forwardRef)(function (e, s) {
          var a = e.className,
            r = e.label,
            c = (0, i._T)(e, ['className', 'label'])
          return n.createElement(
            n.Fragment,
            null,
            r && n.createElement(d.L, { htmlFor: c.id }, r),
            n.createElement(
              'input',
              (0, i.pi)({ type: 'range', className: (0, h.Z)('form-range', a) }, c, { ref: s }),
            ),
          )
        })
      ;(x.propTypes = { className: p().string, label: p().oneOfType([p().node, p().string]) }),
        (x.displayName = 'CFormRange')
      var u = a(54908),
        f = a(29343)
      const g = () =>
        (0, f.jsxs)(r.r, {
          children: [
            (0, f.jsx)(c.b, {
              xs: 12,
              children: (0, f.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(l.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Range' }),
                      ' ',
                      (0, f.jsx)('small', {}),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Create custom ',
                          (0, f.jsx)('code', { children: '<input type="range">' }),
                          ' controls with',
                          ' ',
                          (0, f.jsx)('code', { children: '<CFormRange>' }),
                          '.',
                        ],
                      }),
                      (0, f.jsxs)(u.q3, {
                        href: 'forms/range',
                        tabContentClassName: 'bg-opacity-10',
                        children: [
                          (0, f.jsx)(d.L, { htmlFor: 'customRange1', children: 'Example range' }),
                          (0, f.jsx)(x, { id: 'customRange1' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(c.b, {
              xs: 12,
              children: (0, f.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(l.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Range' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add the ',
                          (0, f.jsx)('code', { children: 'disabled' }),
                          ' boolean attribute on an input to give it a grayed out appearance and remove pointer events.',
                        ],
                      }),
                      (0, f.jsxs)(u.q3, {
                        href: 'forms/range#disabled',
                        tabContentClassName: 'bg-opacity-10',
                        children: [
                          (0, f.jsx)(d.L, { htmlFor: 'disabledRange', children: 'Disabled range' }),
                          (0, f.jsx)(x, { id: 'disabledRange', disabled: !0 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(c.b, {
              xs: 12,
              children: (0, f.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(l.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Range' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Min and max' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Range inputs have implicit values for ',
                          (0, f.jsx)('code', { children: 'min' }),
                          ' and ',
                          (0, f.jsx)('code', { children: 'max' }),
                          '\u2014',
                          (0, f.jsx)('code', { children: '0' }),
                          ' and ',
                          (0, f.jsx)('code', { children: '100' }),
                          ', respectively. You may specify new values for those using the ',
                          (0, f.jsx)('code', { children: 'min' }),
                          ' and ',
                          (0, f.jsx)('code', { children: 'max' }),
                          ' attributes.',
                        ],
                      }),
                      (0, f.jsxs)(u.q3, {
                        href: 'forms/range#min-and-max',
                        tabContentClassName: 'bg-opacity-10',
                        children: [
                          (0, f.jsx)(d.L, { htmlFor: 'customRange2', children: 'Example range' }),
                          (0, f.jsx)(x, {
                            min: '0',
                            max: '5',
                            defaultValue: '3',
                            id: 'customRange2',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(c.b, {
              xs: 12,
              children: (0, f.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(l.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Range' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Steps' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'By default, range inputs "snap" to integer values. To change this, you can specify a ',
                          (0, f.jsx)('code', { children: 'step' }),
                          ' value. In the example below, we double the number of steps by using ',
                          (0, f.jsx)('code', { children: 'step="0.5"' }),
                          '.',
                        ],
                      }),
                      (0, f.jsxs)(u.q3, {
                        href: 'forms/range#steps',
                        tabContentClassName: 'bg-opacity-10',
                        children: [
                          (0, f.jsx)(d.L, { htmlFor: 'customRange3', children: 'Example range' }),
                          (0, f.jsx)(x, {
                            min: '0',
                            max: '5',
                            step: '0.5',
                            defaultValue: '3',
                            id: 'customRange3',
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
    13609: (e, s, a) => {
      a.d(s, { x: () => d })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = a(37169),
        d = (0, r.forwardRef)(function (e, s) {
          var a,
            c = e.children,
            t = e.className,
            o = e.color,
            d = e.textColor,
            i = (0, n._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, l.Z)(
                  'card',
                  ((a = {}), (a['bg-'.concat(o)] = o), (a['text-'.concat(d)] = d), a),
                  t,
                ),
              },
              i,
              { ref: s },
            ),
            c,
          )
        })
      ;(d.propTypes = {
        children: t().node,
        className: t().string,
        color: o.$1,
        textColor: t().string,
      }),
        (d.displayName = 'CCard')
    },
    45813: (e, s, a) => {
      a.d(s, { s: () => o })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = (0, r.forwardRef)(function (e, s) {
          var a = e.children,
            c = e.className,
            t = (0, n._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, n.pi)({ className: (0, l.Z)('card-body', c) }, t, { ref: s }),
            a,
          )
        })
      ;(o.propTypes = { children: t().node, className: t().string }), (o.displayName = 'CCardBody')
    },
    42177: (e, s, a) => {
      a.d(s, { b: () => o })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = (0, r.forwardRef)(function (e, s) {
          var a = e.children,
            c = e.component,
            t = void 0 === c ? 'div' : c,
            o = e.className,
            d = (0, n._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            t,
            (0, n.pi)({ className: (0, l.Z)('card-header', o) }, d, { ref: s }),
            a,
          )
        })
      ;(o.propTypes = { children: t().node, className: t().string, component: t().elementType }),
        (o.displayName = 'CCardHeader')
    },
    35424: (e, s, a) => {
      a.d(s, { L: () => o })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = (0, r.forwardRef)(function (e, s) {
          var a = e.children,
            c = e.className,
            t = e.customClassName,
            o = (0, n._T)(e, ['children', 'className', 'customClassName'])
          return r.createElement(
            'label',
            (0, n.pi)(
              { className: null !== t && void 0 !== t ? t : (0, l.Z)('form-label', c) },
              o,
              { ref: s },
            ),
            a,
          )
        })
      ;(o.propTypes = { children: t().node, className: t().string, customClassName: t().string }),
        (o.displayName = 'CFormLabel')
    },
    5640: (e, s, a) => {
      a.d(s, { b: () => d })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, r.forwardRef)(function (e, s) {
          var a = e.children,
            c = e.className,
            t = (0, n._T)(e, ['children', 'className']),
            d = []
          return (
            o.forEach(function (e) {
              var s = t[e]
              delete t[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                d.push('col'.concat(a, '-').concat(s)),
                'boolean' === typeof s && d.push('col'.concat(a)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    d.push('col'.concat(a, '-').concat(s.span)),
                  'boolean' === typeof s.span && d.push('col'.concat(a)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    d.push('order'.concat(a, '-').concat(s.order)),
                  'number' === typeof s.offset && d.push('offset'.concat(a, '-').concat(s.offset)))
            }),
            r.createElement(
              'div',
              (0, n.pi)({ className: (0, l.Z)(d.length > 0 ? d : 'col', c) }, t, { ref: s }),
              a,
            )
          )
        }),
        i = t().oneOfType([t().bool, t().number, t().string, t().oneOf(['auto'])]),
        m = t().oneOfType([
          i,
          t().shape({
            span: i,
            offset: t().oneOfType([t().number, t().string]),
            order: t().oneOfType([t().oneOf(['first', 'last']), t().number, t().string]),
          }),
        ])
      ;(d.propTypes = {
        children: t().node,
        className: t().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (d.displayName = 'CCol')
    },
    48917: (e, s, a) => {
      a.d(s, { r: () => d })
      var n = a(50949),
        r = a(28381),
        c = a(34860),
        t = a.n(c),
        l = a(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, r.forwardRef)(function (e, s) {
          var a = e.children,
            c = e.className,
            t = (0, n._T)(e, ['children', 'className']),
            d = []
          return (
            o.forEach(function (e) {
              var s = t[e]
              delete t[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && d.push('row-cols'.concat(a, '-').concat(s.cols)),
                'number' === typeof s.gutter && d.push('g'.concat(a, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && d.push('gx'.concat(a, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && d.push('gy'.concat(a, '-').concat(s.gutterY)))
            }),
            r.createElement('div', { className: (0, l.Z)('row', d, c), ref: s }, a)
          )
        }),
        i = t().shape({
          cols: t().oneOfType([t().oneOf(['auto']), t().number, t().string]),
          gutter: t().oneOfType([t().string, t().number]),
          gutterX: t().oneOfType([t().string, t().number]),
          gutterY: t().oneOfType([t().string, t().number]),
        })
      ;(d.propTypes = {
        children: t().node,
        className: t().string,
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
//# sourceMappingURL=7336.522992c1.chunk.js.map
