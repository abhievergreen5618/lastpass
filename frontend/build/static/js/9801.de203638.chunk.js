'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9801],
  {
    39801: (e, a, n) => {
      n.r(a), n.d(a, { default: () => f })
      n(28381)
      var t = n(92914),
        l = n(48917),
        o = n(5640),
        r = n(80051),
        i = n(66183),
        c = n(62070),
        s = n(79361),
        d = n(69557),
        p = n(80796),
        m = n(29343)
      const f = () =>
        (0, m.jsx)('div', {
          className: 'bg-body-tertiary min-vh-100 d-flex flex-row align-items-center',
          children: (0, m.jsx)(t.K, {
            children: (0, m.jsx)(l.r, {
              className: 'justify-content-center',
              children: (0, m.jsxs)(o.b, {
                md: 6,
                children: [
                  (0, m.jsxs)('div', {
                    className: 'clearfix',
                    children: [
                      (0, m.jsx)('h1', {
                        className: 'float-start display-3 me-4',
                        children: '404',
                      }),
                      (0, m.jsxs)('h4', {
                        className: 'pt-3',
                        children: ['Oops! You', "'", 're lost.'],
                      }),
                      (0, m.jsx)('p', {
                        className: 'text-body-secondary float-start',
                        children: 'The page you are looking for was not found.',
                      }),
                    ],
                  }),
                  (0, m.jsxs)(r.Y, {
                    className: 'input-prepend',
                    children: [
                      (0, m.jsx)(i.w, { children: (0, m.jsx)(d.Z, { icon: p.M }) }),
                      (0, m.jsx)(c.j, { type: 'text', placeholder: 'What are you looking for?' }),
                      (0, m.jsx)(s.u, { color: 'info', children: 'Search' }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })
    },
    80796: (e, a, n) => {
      n.d(a, { M: () => t })
      var t = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z' class='ci-primary'/>",
      ]
    },
    59054: (e, a, n) => {
      n.d(a, { X: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(10560),
        c = function (e) {
          var a = e.describedby,
            n = e.feedback,
            o = e.feedbackInvalid,
            r = e.feedbackValid,
            c = e.invalid,
            s = e.tooltipFeedback,
            d = e.valid
          return l.createElement(
            l.Fragment,
            null,
            n &&
              (d || c) &&
              l.createElement(
                i.C,
                (0, t.pi)({}, c && { id: a }, { invalid: c, tooltip: s, valid: d }),
                n,
              ),
            o && l.createElement(i.C, { id: a, invalid: !0, tooltip: s }, o),
            r && l.createElement(i.C, { valid: !0, tooltip: s }, r),
          )
        }
      ;(c.propTypes = {
        describedby: r().string,
        feedback: r().oneOfType([r().node, r().string]),
        feedbackValid: r().oneOfType([r().node, r().string]),
        feedbackInvalid: r().oneOfType([r().node, r().string]),
        invalid: r().bool,
        tooltipFeedback: r().bool,
        valid: r().bool,
      }),
        (c.displayName = 'CFormControlValidation')
    },
    25117: (e, a, n) => {
      n.d(a, { e: () => m })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(59054),
        c = n(41339),
        s = n(35424),
        d = n(47577),
        p = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = e.component,
            i = void 0 === r ? 'div' : r,
            c = (0, t._T)(e, ['children', 'className', 'component'])
          return l.createElement(
            i,
            (0, t.pi)({ className: (0, d.Z)('form-text', o) }, c, { ref: a }),
            n,
          )
        })
      ;(p.propTypes = { children: r().node, className: r().string, component: r().elementType }),
        (p.displayName = 'CFormText')
      var m = function (e) {
        var a = e.children,
          n = e.describedby,
          t = e.feedback,
          o = e.feedbackInvalid,
          r = e.feedbackValid,
          d = e.floatingClassName,
          m = e.floatingLabel,
          f = e.id,
          u = e.invalid,
          b = e.label,
          y = e.text,
          v = e.tooltipFeedback,
          g = e.valid,
          h = function () {
            return l.createElement(i.X, {
              describedby: n,
              feedback: t,
              feedbackInvalid: o,
              feedbackValid: r,
              floatingLabel: m,
              invalid: u,
              tooltipFeedback: v,
              valid: g,
            })
          }
        return m
          ? l.createElement(
              c.j,
              { className: d },
              a,
              l.createElement(s.L, { htmlFor: f }, b || m),
              y && l.createElement(p, { id: n }, y),
              l.createElement(h, null),
            )
          : l.createElement(
              l.Fragment,
              null,
              b && l.createElement(s.L, { htmlFor: f }, b),
              a,
              y && l.createElement(p, { id: n }, y),
              l.createElement(h, null),
            )
      }
      ;(m.propTypes = (0, t.pi)(
        {
          children: r().node,
          floatingClassName: r().string,
          floatingLabel: r().oneOfType([r().node, r().string]),
          label: r().oneOfType([r().node, r().string]),
          text: r().oneOfType([r().node, r().string]),
        },
        i.X.propTypes,
      )),
        (m.displayName = 'CFormControlWrapper')
    },
    10560: (e, a, n) => {
      n.d(a, { C: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = (0, l.forwardRef)(function (e, a) {
          var n,
            o = e.children,
            r = e.className,
            c = e.component,
            s = void 0 === c ? 'div' : c,
            d = e.invalid,
            p = e.tooltip,
            m = e.valid,
            f = (0, t._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return l.createElement(
            s,
            (0, t.pi)(
              {
                className: (0, i.Z)(
                  ((n = {}),
                  (n['invalid-'.concat(p ? 'tooltip' : 'feedback')] = d),
                  (n['valid-'.concat(p ? 'tooltip' : 'feedback')] = m),
                  n),
                  r,
                ),
              },
              f,
              { ref: a },
            ),
            o,
          )
        })
      ;(c.propTypes = {
        children: r().node,
        className: r().string,
        component: r().elementType,
        invalid: r().bool,
        tooltip: r().bool,
        valid: r().bool,
      }),
        (c.displayName = 'CFormFeedback')
    },
    41339: (e, a, n) => {
      n.d(a, { j: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = (0, t._T)(e, ['children', 'className'])
          return l.createElement(
            'div',
            (0, t.pi)({ className: (0, i.Z)('form-floating', o) }, r, { ref: a }),
            n,
          )
        })
      ;(c.propTypes = { children: r().node, className: r().string }),
        (c.displayName = 'CFormFloating')
    },
    62070: (e, a, n) => {
      n.d(a, { j: () => s })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = n(25117),
        s = (0, l.forwardRef)(function (e, a) {
          var n,
            o = e.children,
            r = e.className,
            s = e.delay,
            d = void 0 !== s && s,
            p = e.feedback,
            m = e.feedbackInvalid,
            f = e.feedbackValid,
            u = e.floatingClassName,
            b = e.floatingLabel,
            y = e.id,
            v = e.invalid,
            g = e.label,
            h = e.onChange,
            N = e.plainText,
            x = e.size,
            T = e.text,
            k = e.tooltipFeedback,
            C = e.type,
            E = void 0 === C ? 'text' : C,
            O = e.valid,
            _ = (0, t._T)(e, [
              'children',
              'className',
              'delay',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'id',
              'invalid',
              'label',
              'onChange',
              'plainText',
              'size',
              'text',
              'tooltipFeedback',
              'type',
              'valid',
            ]),
            j = (0, l.useState)(),
            F = j[0],
            w = j[1]
          return (
            (0, l.useEffect)(
              function () {
                var e = setTimeout(
                  function () {
                    return F && h && h(F)
                  },
                  'number' === typeof d ? d : 500,
                )
                return function () {
                  return clearTimeout(e)
                }
              },
              [F],
            ),
            l.createElement(
              c.e,
              {
                describedby: _['aria-describedby'],
                feedback: p,
                feedbackInvalid: m,
                feedbackValid: f,
                floatingClassName: u,
                floatingLabel: b,
                id: y,
                invalid: v,
                label: g,
                text: T,
                tooltipFeedback: k,
                valid: O,
              },
              l.createElement(
                'input',
                (0, t.pi)(
                  {
                    className: (0, i.Z)(
                      N ? 'form-control-plaintext' : 'form-control',
                      ((n = {}),
                      (n['form-control-'.concat(x)] = x),
                      (n['form-control-color'] = 'color' === E),
                      (n['is-invalid'] = v),
                      (n['is-valid'] = O),
                      n),
                      r,
                    ),
                    id: y,
                    type: E,
                    onChange: function (e) {
                      return d ? w(e) : h && h(e)
                    },
                  },
                  _,
                  { ref: a },
                ),
                o,
              ),
            )
          )
        })
      ;(s.propTypes = (0, t.pi)(
        {
          className: r().string,
          id: r().string,
          delay: r().oneOfType([r().bool, r().number]),
          plainText: r().bool,
          size: r().oneOf(['sm', 'lg']),
          type: r().oneOfType([r().oneOf(['color', 'file', 'text']), r().string]),
        },
        c.e.propTypes,
      )),
        (s.displayName = 'CFormInput')
    },
    35424: (e, a, n) => {
      n.d(a, { L: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = e.customClassName,
            c = (0, t._T)(e, ['children', 'className', 'customClassName'])
          return l.createElement(
            'label',
            (0, t.pi)(
              { className: null !== r && void 0 !== r ? r : (0, i.Z)('form-label', o) },
              c,
              { ref: a },
            ),
            n,
          )
        })
      ;(c.propTypes = { children: r().node, className: r().string, customClassName: r().string }),
        (c.displayName = 'CFormLabel')
    },
    80051: (e, a, n) => {
      n.d(a, { Y: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = (0, l.forwardRef)(function (e, a) {
          var n,
            o = e.children,
            r = e.className,
            c = e.size,
            s = (0, t._T)(e, ['children', 'className', 'size'])
          return l.createElement(
            'div',
            (0, t.pi)(
              {
                className: (0, i.Z)(
                  'input-group',
                  ((n = {}), (n['input-group-'.concat(c)] = c), n),
                  r,
                ),
              },
              s,
              { ref: a },
            ),
            o,
          )
        })
      ;(c.propTypes = { children: r().node, className: r().string, size: r().oneOf(['sm', 'lg']) }),
        (c.displayName = 'CInputGroup')
    },
    66183: (e, a, n) => {
      n.d(a, { w: () => c })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = e.component,
            c = void 0 === r ? 'span' : r,
            s = (0, t._T)(e, ['children', 'className', 'component'])
          return l.createElement(
            c,
            (0, t.pi)({ className: (0, i.Z)('input-group-text', o) }, s, { ref: a }),
            n,
          )
        })
      ;(c.propTypes = { children: r().node, className: r().string, component: r().elementType }),
        (c.displayName = 'CInputGroupText')
    },
    5640: (e, a, n) => {
      n.d(a, { b: () => s })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        s = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = (0, t._T)(e, ['children', 'className']),
            s = []
          return (
            c.forEach(function (e) {
              var a = r[e]
              delete r[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof a && 'string' !== typeof a) ||
                s.push('col'.concat(n, '-').concat(a)),
                'boolean' === typeof a && s.push('col'.concat(n)),
                a &&
                  'object' === typeof a &&
                  (('number' !== typeof a.span && 'string' !== typeof a.span) ||
                    s.push('col'.concat(n, '-').concat(a.span)),
                  'boolean' === typeof a.span && s.push('col'.concat(n)),
                  ('number' !== typeof a.order && 'string' !== typeof a.order) ||
                    s.push('order'.concat(n, '-').concat(a.order)),
                  'number' === typeof a.offset && s.push('offset'.concat(n, '-').concat(a.offset)))
            }),
            l.createElement(
              'div',
              (0, t.pi)({ className: (0, i.Z)(s.length > 0 ? s : 'col', o) }, r, { ref: a }),
              n,
            )
          )
        }),
        d = r().oneOfType([r().bool, r().number, r().string, r().oneOf(['auto'])]),
        p = r().oneOfType([
          d,
          r().shape({
            span: d,
            offset: r().oneOfType([r().number, r().string]),
            order: r().oneOfType([r().oneOf(['first', 'last']), r().number, r().string]),
          }),
        ])
      ;(s.propTypes = {
        children: r().node,
        className: r().string,
        xs: p,
        sm: p,
        md: p,
        lg: p,
        xl: p,
        xxl: p,
      }),
        (s.displayName = 'CCol')
    },
    48917: (e, a, n) => {
      n.d(a, { r: () => s })
      var t = n(50949),
        l = n(28381),
        o = n(34860),
        r = n.n(o),
        i = n(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        s = (0, l.forwardRef)(function (e, a) {
          var n = e.children,
            o = e.className,
            r = (0, t._T)(e, ['children', 'className']),
            s = []
          return (
            c.forEach(function (e) {
              var a = r[e]
              delete r[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof a &&
                (a.cols && s.push('row-cols'.concat(n, '-').concat(a.cols)),
                'number' === typeof a.gutter && s.push('g'.concat(n, '-').concat(a.gutter)),
                'number' === typeof a.gutterX && s.push('gx'.concat(n, '-').concat(a.gutterX)),
                'number' === typeof a.gutterY && s.push('gy'.concat(n, '-').concat(a.gutterY)))
            }),
            l.createElement('div', { className: (0, i.Z)('row', s, o), ref: a }, n)
          )
        }),
        d = r().shape({
          cols: r().oneOfType([r().oneOf(['auto']), r().number, r().string]),
          gutter: r().oneOfType([r().string, r().number]),
          gutterX: r().oneOfType([r().string, r().number]),
          gutterY: r().oneOfType([r().string, r().number]),
        })
      ;(s.propTypes = {
        children: r().node,
        className: r().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (s.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=9801.de203638.chunk.js.map
