'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9403],
  {
    59403: (e, a, l) => {
      l.r(a), l.d(a, { default: () => b })
      l(28381)
      var n = l(48917),
        t = l(5640),
        s = l(13609),
        i = l(42177),
        r = l(45813),
        o = l(41339),
        c = l(62070),
        d = l(35424),
        m = l(59121),
        p = l(26101),
        f = l(54908),
        h = l(29343)
      const b = () =>
        (0, h.jsxs)(n.r, {
          children: [
            (0, h.jsx)(t.b, {
              xs: 12,
              children: (0, h.jsxs)(s.x, {
                className: 'mb-4',
                children: [
                  (0, h.jsx)(i.b, {
                    children: (0, h.jsx)('strong', { children: 'React Floating labels' }),
                  }),
                  (0, h.jsxs)(r.s, {
                    children: [
                      (0, h.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Wrap a pair of ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          ' and ',
                          (0, h.jsx)('code', { children: '<CFormLabel>' }),
                          ' ',
                          'elements in ',
                          (0, h.jsx)('code', { children: 'CFormFloating' }),
                          ' to enable floating labels with textual form fields. A ',
                          (0, h.jsx)('code', { children: 'placeholder' }),
                          ' is required on each ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          ' ',
                          'as our method of CSS-only floating labels uses the ',
                          (0, h.jsx)('code', { children: ':placeholder-shown' }),
                          ' ',
                          'pseudo-element. Also note that the ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          ' must come first so we can utilize a sibling selector (e.g., ',
                          (0, h.jsx)('code', { children: '~' }),
                          ').',
                        ],
                      }),
                      (0, h.jsxs)(f.q3, {
                        href: 'forms/floating-labels',
                        children: [
                          (0, h.jsxs)(o.j, {
                            className: 'mb-3',
                            children: [
                              (0, h.jsx)(c.j, {
                                type: 'email',
                                id: 'floatingInput',
                                placeholder: 'name@example.com',
                              }),
                              (0, h.jsx)(d.L, {
                                htmlFor: 'floatingInput',
                                children: 'Email address',
                              }),
                            ],
                          }),
                          (0, h.jsxs)(o.j, {
                            children: [
                              (0, h.jsx)(c.j, {
                                type: 'password',
                                id: 'floatingPassword',
                                placeholder: 'Password',
                              }),
                              (0, h.jsx)(d.L, {
                                htmlFor: 'floatingPassword',
                                children: 'Password',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, h.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "When there's a ",
                          (0, h.jsx)('code', { children: 'value' }),
                          ' already defined, ',
                          (0, h.jsx)('code', { children: '<CFormLabel>' }),
                          's will automatically adjust to their floated position.',
                        ],
                      }),
                      (0, h.jsx)(f.q3, {
                        href: 'forms/floating-labels',
                        children: (0, h.jsxs)(o.j, {
                          children: [
                            (0, h.jsx)(c.j, {
                              type: 'email',
                              id: 'floatingInputValue',
                              placeholder: 'name@example.com',
                              defaultValue: 'test@example.com',
                            }),
                            (0, h.jsx)(d.L, {
                              htmlFor: 'floatingInputValue',
                              children: 'Input with value',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, h.jsx)(t.b, {
              xs: 12,
              children: (0, h.jsxs)(s.x, {
                className: 'mb-4',
                children: [
                  (0, h.jsxs)(i.b, {
                    children: [
                      (0, h.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      (0, h.jsx)('small', { children: 'Textareas' }),
                    ],
                  }),
                  (0, h.jsxs)(r.s, {
                    children: [
                      (0, h.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'By default, ',
                          (0, h.jsx)('code', { children: '<CFormTextarea>' }),
                          's will be the same height as',
                          ' ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          's.',
                        ],
                      }),
                      (0, h.jsx)(f.q3, {
                        href: 'forms/floating-labels#textareas',
                        children: (0, h.jsxs)(o.j, {
                          children: [
                            (0, h.jsx)(m.P, {
                              id: 'floatingTextarea',
                              placeholder: 'Leave a comment here',
                            }),
                            (0, h.jsx)(d.L, { htmlFor: 'floatingTextarea', children: 'Comments' }),
                          ],
                        }),
                      }),
                      (0, h.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'To set a custom height on your ',
                          (0, h.jsx)('code', { children: '<CFormTextarea;>' }),
                          ', do not use the',
                          ' ',
                          (0, h.jsx)('code', { children: 'rows' }),
                          ' attribute. Instead, set an explicit ',
                          (0, h.jsx)('code', { children: 'height' }),
                          ' (either inline or via custom CSS).',
                        ],
                      }),
                      (0, h.jsx)(f.q3, {
                        href: 'forms/floating-labels#textareas',
                        children: (0, h.jsxs)(o.j, {
                          children: [
                            (0, h.jsx)(m.P, {
                              placeholder: 'Leave a comment here',
                              id: 'floatingTextarea2',
                              style: { height: '100px' },
                            }),
                            (0, h.jsx)(d.L, { htmlFor: 'floatingTextarea2', children: 'Comments' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, h.jsx)(t.b, {
              xs: 12,
              children: (0, h.jsxs)(s.x, {
                className: 'mb-4',
                children: [
                  (0, h.jsxs)(i.b, {
                    children: [
                      (0, h.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      (0, h.jsx)('small', { children: 'Selects' }),
                    ],
                  }),
                  (0, h.jsxs)(r.s, {
                    children: [
                      (0, h.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Other than ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          ', floating labels are only available on',
                          ' ',
                          (0, h.jsx)('code', { children: '<CFormSelect>' }),
                          's. They work in the same way, but unlike',
                          ' ',
                          (0, h.jsx)('code', { children: '<CFormInput>' }),
                          "s, they'll always show the",
                          ' ',
                          (0, h.jsx)('code', { children: '<CFormLabel>' }),
                          ' in its floated state.',
                          ' ',
                          (0, h.jsxs)('strong', {
                            children: [
                              'Selects with ',
                              (0, h.jsx)('code', { children: 'size' }),
                              ' and ',
                              (0, h.jsx)('code', { children: 'multiple' }),
                              ' are not supported.',
                            ],
                          }),
                        ],
                      }),
                      (0, h.jsx)(f.q3, {
                        href: 'forms/floating-labels#selects',
                        children: (0, h.jsxs)(o.j, {
                          children: [
                            (0, h.jsxs)(p.L, {
                              id: 'floatingSelect',
                              'aria-label': 'Floating label select example',
                              children: [
                                (0, h.jsx)('option', { children: 'Open this select menu' }),
                                (0, h.jsx)('option', { value: '1', children: 'One' }),
                                (0, h.jsx)('option', { value: '2', children: 'Two' }),
                                (0, h.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                            (0, h.jsx)(d.L, {
                              htmlFor: 'floatingSelect',
                              children: 'Works with selects',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, h.jsx)(t.b, {
              xs: 12,
              children: (0, h.jsxs)(s.x, {
                className: 'mb-4',
                children: [
                  (0, h.jsxs)(i.b, {
                    children: [
                      (0, h.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      (0, h.jsx)('small', { children: 'Layout' }),
                    ],
                  }),
                  (0, h.jsxs)(r.s, {
                    children: [
                      (0, h.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.',
                      }),
                      (0, h.jsx)(f.q3, {
                        href: 'forms/floating-labels#layout',
                        children: (0, h.jsxs)(n.r, {
                          xs: { gutter: 2 },
                          children: [
                            (0, h.jsx)(t.b, {
                              md: !0,
                              children: (0, h.jsxs)(o.j, {
                                children: [
                                  (0, h.jsx)(c.j, {
                                    type: 'email',
                                    id: 'floatingInputGrid',
                                    placeholder: 'name@example.com',
                                    defaultValue: 'email@example.com',
                                  }),
                                  (0, h.jsx)(d.L, {
                                    htmlFor: 'floatingInputGrid',
                                    children: 'Email address',
                                  }),
                                ],
                              }),
                            }),
                            (0, h.jsx)(t.b, {
                              md: !0,
                              children: (0, h.jsxs)(o.j, {
                                children: [
                                  (0, h.jsxs)(p.L, {
                                    id: 'floatingSelectGrid',
                                    'aria-label': 'Floating label select example',
                                    children: [
                                      (0, h.jsx)('option', { children: 'Open this select menu' }),
                                      (0, h.jsx)('option', { value: '1', children: 'One' }),
                                      (0, h.jsx)('option', { value: '2', children: 'Two' }),
                                      (0, h.jsx)('option', { value: '3', children: 'Three' }),
                                    ],
                                  }),
                                  (0, h.jsx)(d.L, {
                                    htmlFor: 'floatingSelectGrid',
                                    children: 'Works with selects',
                                  }),
                                ],
                              }),
                            }),
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
    13609: (e, a, l) => {
      l.d(a, { x: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = l(37169),
        c = (0, t.forwardRef)(function (e, a) {
          var l,
            s = e.children,
            i = e.className,
            o = e.color,
            c = e.textColor,
            d = (0, n._T)(e, ['children', 'className', 'color', 'textColor'])
          return t.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, r.Z)(
                  'card',
                  ((l = {}), (l['bg-'.concat(o)] = o), (l['text-'.concat(c)] = c), l),
                  i,
                ),
              },
              d,
              { ref: a },
            ),
            s,
          )
        })
      ;(c.propTypes = {
        children: i().node,
        className: i().string,
        color: o.$1,
        textColor: i().string,
      }),
        (c.displayName = 'CCard')
    },
    45813: (e, a, l) => {
      l.d(a, { s: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = (0, n._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, n.pi)({ className: (0, r.Z)('card-body', s) }, i, { ref: a }),
            l,
          )
        })
      ;(o.propTypes = { children: i().node, className: i().string }), (o.displayName = 'CCardBody')
    },
    42177: (e, a, l) => {
      l.d(a, { b: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.component,
            i = void 0 === s ? 'div' : s,
            o = e.className,
            c = (0, n._T)(e, ['children', 'component', 'className'])
          return t.createElement(
            i,
            (0, n.pi)({ className: (0, r.Z)('card-header', o) }, c, { ref: a }),
            l,
          )
        })
      ;(o.propTypes = { children: i().node, className: i().string, component: i().elementType }),
        (o.displayName = 'CCardHeader')
    },
    59054: (e, a, l) => {
      l.d(a, { X: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(10560),
        o = function (e) {
          var a = e.describedby,
            l = e.feedback,
            s = e.feedbackInvalid,
            i = e.feedbackValid,
            o = e.invalid,
            c = e.tooltipFeedback,
            d = e.valid
          return t.createElement(
            t.Fragment,
            null,
            l &&
              (d || o) &&
              t.createElement(
                r.C,
                (0, n.pi)({}, o && { id: a }, { invalid: o, tooltip: c, valid: d }),
                l,
              ),
            s && t.createElement(r.C, { id: a, invalid: !0, tooltip: c }, s),
            i && t.createElement(r.C, { valid: !0, tooltip: c }, i),
          )
        }
      ;(o.propTypes = {
        describedby: i().string,
        feedback: i().oneOfType([i().node, i().string]),
        feedbackValid: i().oneOfType([i().node, i().string]),
        feedbackInvalid: i().oneOfType([i().node, i().string]),
        invalid: i().bool,
        tooltipFeedback: i().bool,
        valid: i().bool,
      }),
        (o.displayName = 'CFormControlValidation')
    },
    25117: (e, a, l) => {
      l.d(a, { e: () => p })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(59054),
        o = l(41339),
        c = l(35424),
        d = l(47577),
        m = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = e.component,
            r = void 0 === i ? 'div' : i,
            o = (0, n._T)(e, ['children', 'className', 'component'])
          return t.createElement(
            r,
            (0, n.pi)({ className: (0, d.Z)('form-text', s) }, o, { ref: a }),
            l,
          )
        })
      ;(m.propTypes = { children: i().node, className: i().string, component: i().elementType }),
        (m.displayName = 'CFormText')
      var p = function (e) {
        var a = e.children,
          l = e.describedby,
          n = e.feedback,
          s = e.feedbackInvalid,
          i = e.feedbackValid,
          d = e.floatingClassName,
          p = e.floatingLabel,
          f = e.id,
          h = e.invalid,
          b = e.label,
          x = e.text,
          u = e.tooltipFeedback,
          g = e.valid,
          v = function () {
            return t.createElement(r.X, {
              describedby: l,
              feedback: n,
              feedbackInvalid: s,
              feedbackValid: i,
              floatingLabel: p,
              invalid: h,
              tooltipFeedback: u,
              valid: g,
            })
          }
        return p
          ? t.createElement(
              o.j,
              { className: d },
              a,
              t.createElement(c.L, { htmlFor: f }, b || p),
              x && t.createElement(m, { id: l }, x),
              t.createElement(v, null),
            )
          : t.createElement(
              t.Fragment,
              null,
              b && t.createElement(c.L, { htmlFor: f }, b),
              a,
              x && t.createElement(m, { id: l }, x),
              t.createElement(v, null),
            )
      }
      ;(p.propTypes = (0, n.pi)(
        {
          children: i().node,
          floatingClassName: i().string,
          floatingLabel: i().oneOfType([i().node, i().string]),
          label: i().oneOfType([i().node, i().string]),
          text: i().oneOfType([i().node, i().string]),
        },
        r.X.propTypes,
      )),
        (p.displayName = 'CFormControlWrapper')
    },
    10560: (e, a, l) => {
      l.d(a, { C: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = (0, t.forwardRef)(function (e, a) {
          var l,
            s = e.children,
            i = e.className,
            o = e.component,
            c = void 0 === o ? 'div' : o,
            d = e.invalid,
            m = e.tooltip,
            p = e.valid,
            f = (0, n._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return t.createElement(
            c,
            (0, n.pi)(
              {
                className: (0, r.Z)(
                  ((l = {}),
                  (l['invalid-'.concat(m ? 'tooltip' : 'feedback')] = d),
                  (l['valid-'.concat(m ? 'tooltip' : 'feedback')] = p),
                  l),
                  i,
                ),
              },
              f,
              { ref: a },
            ),
            s,
          )
        })
      ;(o.propTypes = {
        children: i().node,
        className: i().string,
        component: i().elementType,
        invalid: i().bool,
        tooltip: i().bool,
        valid: i().bool,
      }),
        (o.displayName = 'CFormFeedback')
    },
    41339: (e, a, l) => {
      l.d(a, { j: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = (0, n._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, n.pi)({ className: (0, r.Z)('form-floating', s) }, i, { ref: a }),
            l,
          )
        })
      ;(o.propTypes = { children: i().node, className: i().string }),
        (o.displayName = 'CFormFloating')
    },
    62070: (e, a, l) => {
      l.d(a, { j: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = l(25117),
        c = (0, t.forwardRef)(function (e, a) {
          var l,
            s = e.children,
            i = e.className,
            c = e.delay,
            d = void 0 !== c && c,
            m = e.feedback,
            p = e.feedbackInvalid,
            f = e.feedbackValid,
            h = e.floatingClassName,
            b = e.floatingLabel,
            x = e.id,
            u = e.invalid,
            g = e.label,
            v = e.onChange,
            y = e.plainText,
            j = e.size,
            N = e.text,
            T = e.tooltipFeedback,
            k = e.type,
            C = void 0 === k ? 'text' : k,
            F = e.valid,
            w = (0, n._T)(e, [
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
            E = (0, t.useState)(),
            L = E[0],
            I = E[1]
          return (
            (0, t.useEffect)(
              function () {
                var e = setTimeout(
                  function () {
                    return L && v && v(L)
                  },
                  'number' === typeof d ? d : 500,
                )
                return function () {
                  return clearTimeout(e)
                }
              },
              [L],
            ),
            t.createElement(
              o.e,
              {
                describedby: w['aria-describedby'],
                feedback: m,
                feedbackInvalid: p,
                feedbackValid: f,
                floatingClassName: h,
                floatingLabel: b,
                id: x,
                invalid: u,
                label: g,
                text: N,
                tooltipFeedback: T,
                valid: F,
              },
              t.createElement(
                'input',
                (0, n.pi)(
                  {
                    className: (0, r.Z)(
                      y ? 'form-control-plaintext' : 'form-control',
                      ((l = {}),
                      (l['form-control-'.concat(j)] = j),
                      (l['form-control-color'] = 'color' === C),
                      (l['is-invalid'] = u),
                      (l['is-valid'] = F),
                      l),
                      i,
                    ),
                    id: x,
                    type: C,
                    onChange: function (e) {
                      return d ? I(e) : v && v(e)
                    },
                  },
                  w,
                  { ref: a },
                ),
                s,
              ),
            )
          )
        })
      ;(c.propTypes = (0, n.pi)(
        {
          className: i().string,
          id: i().string,
          delay: i().oneOfType([i().bool, i().number]),
          plainText: i().bool,
          size: i().oneOf(['sm', 'lg']),
          type: i().oneOfType([i().oneOf(['color', 'file', 'text']), i().string]),
        },
        o.e.propTypes,
      )),
        (c.displayName = 'CFormInput')
    },
    35424: (e, a, l) => {
      l.d(a, { L: () => o })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = e.customClassName,
            o = (0, n._T)(e, ['children', 'className', 'customClassName'])
          return t.createElement(
            'label',
            (0, n.pi)(
              { className: null !== i && void 0 !== i ? i : (0, r.Z)('form-label', s) },
              o,
              { ref: a },
            ),
            l,
          )
        })
      ;(o.propTypes = { children: i().node, className: i().string, customClassName: i().string }),
        (o.displayName = 'CFormLabel')
    },
    26101: (e, a, l) => {
      l.d(a, { L: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = l(25117),
        c = (0, t.forwardRef)(function (e, a) {
          var l,
            s = e.children,
            i = e.className,
            c = e.feedback,
            d = e.feedbackInvalid,
            m = e.feedbackValid,
            p = e.floatingClassName,
            f = e.floatingLabel,
            h = e.htmlSize,
            b = e.id,
            x = e.invalid,
            u = e.label,
            g = e.options,
            v = e.size,
            y = e.text,
            j = e.tooltipFeedback,
            N = e.valid,
            T = (0, n._T)(e, [
              'children',
              'className',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'htmlSize',
              'id',
              'invalid',
              'label',
              'options',
              'size',
              'text',
              'tooltipFeedback',
              'valid',
            ])
          return t.createElement(
            o.e,
            {
              describedby: T['aria-describedby'],
              feedback: c,
              feedbackInvalid: d,
              feedbackValid: m,
              floatingClassName: p,
              floatingLabel: f,
              id: b,
              invalid: x,
              label: u,
              text: y,
              tooltipFeedback: j,
              valid: N,
            },
            t.createElement(
              'select',
              (0, n.pi)(
                {
                  id: b,
                  className: (0, r.Z)(
                    'form-select',
                    ((l = {}),
                    (l['form-select-'.concat(v)] = v),
                    (l['is-invalid'] = x),
                    (l['is-valid'] = N),
                    l),
                    i,
                  ),
                  size: h,
                },
                T,
                { ref: a },
              ),
              g
                ? g.map(function (e, a) {
                    return t.createElement(
                      'option',
                      (0, n.pi)(
                        {},
                        'object' === typeof e && e.disabled && { disabled: e.disabled },
                        'object' === typeof e && void 0 !== e.value && { value: e.value },
                        { key: a },
                      ),
                      'string' === typeof e ? e : e.label,
                    )
                  })
                : s,
            ),
          )
        })
      ;(c.propTypes = (0, n.pi)(
        { className: i().string, htmlSize: i().number, options: i().array },
        o.e.propTypes,
      )),
        (c.displayName = 'CFormSelect')
    },
    59121: (e, a, l) => {
      l.d(a, { P: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = l(25117),
        c = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = e.feedback,
            c = e.feedbackInvalid,
            d = e.feedbackValid,
            m = e.floatingClassName,
            p = e.floatingLabel,
            f = e.id,
            h = e.invalid,
            b = e.label,
            x = e.plainText,
            u = e.text,
            g = e.tooltipFeedback,
            v = e.valid,
            y = (0, n._T)(e, [
              'children',
              'className',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'id',
              'invalid',
              'label',
              'plainText',
              'text',
              'tooltipFeedback',
              'valid',
            ])
          return t.createElement(
            o.e,
            {
              describedby: y['aria-describedby'],
              feedback: i,
              feedbackInvalid: c,
              feedbackValid: d,
              floatingClassName: m,
              floatingLabel: p,
              id: f,
              invalid: h,
              label: b,
              text: u,
              tooltipFeedback: g,
              valid: v,
            },
            t.createElement(
              'textarea',
              (0, n.pi)(
                {
                  className: (0, r.Z)(
                    x ? 'form-control-plaintext' : 'form-control',
                    { 'is-invalid': h, 'is-valid': v },
                    s,
                  ),
                  id: f,
                },
                y,
                { ref: a },
              ),
              l,
            ),
          )
        })
      ;(c.propTypes = (0, n.pi)(
        { className: i().string, id: i().string, plainText: i().bool },
        o.e.propTypes,
      )),
        (c.displayName = 'CFormTextarea')
    },
    5640: (e, a, l) => {
      l.d(a, { b: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        c = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = (0, n._T)(e, ['children', 'className']),
            c = []
          return (
            o.forEach(function (e) {
              var a = i[e]
              delete i[e]
              var l = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof a && 'string' !== typeof a) ||
                c.push('col'.concat(l, '-').concat(a)),
                'boolean' === typeof a && c.push('col'.concat(l)),
                a &&
                  'object' === typeof a &&
                  (('number' !== typeof a.span && 'string' !== typeof a.span) ||
                    c.push('col'.concat(l, '-').concat(a.span)),
                  'boolean' === typeof a.span && c.push('col'.concat(l)),
                  ('number' !== typeof a.order && 'string' !== typeof a.order) ||
                    c.push('order'.concat(l, '-').concat(a.order)),
                  'number' === typeof a.offset && c.push('offset'.concat(l, '-').concat(a.offset)))
            }),
            t.createElement(
              'div',
              (0, n.pi)({ className: (0, r.Z)(c.length > 0 ? c : 'col', s) }, i, { ref: a }),
              l,
            )
          )
        }),
        d = i().oneOfType([i().bool, i().number, i().string, i().oneOf(['auto'])]),
        m = i().oneOfType([
          d,
          i().shape({
            span: d,
            offset: i().oneOfType([i().number, i().string]),
            order: i().oneOfType([i().oneOf(['first', 'last']), i().number, i().string]),
          }),
        ])
      ;(c.propTypes = {
        children: i().node,
        className: i().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (c.displayName = 'CCol')
    },
    48917: (e, a, l) => {
      l.d(a, { r: () => c })
      var n = l(50949),
        t = l(28381),
        s = l(34860),
        i = l.n(s),
        r = l(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        c = (0, t.forwardRef)(function (e, a) {
          var l = e.children,
            s = e.className,
            i = (0, n._T)(e, ['children', 'className']),
            c = []
          return (
            o.forEach(function (e) {
              var a = i[e]
              delete i[e]
              var l = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof a &&
                (a.cols && c.push('row-cols'.concat(l, '-').concat(a.cols)),
                'number' === typeof a.gutter && c.push('g'.concat(l, '-').concat(a.gutter)),
                'number' === typeof a.gutterX && c.push('gx'.concat(l, '-').concat(a.gutterX)),
                'number' === typeof a.gutterY && c.push('gy'.concat(l, '-').concat(a.gutterY)))
            }),
            t.createElement('div', { className: (0, r.Z)('row', c, s), ref: a }, l)
          )
        }),
        d = i().shape({
          cols: i().oneOfType([i().oneOf(['auto']), i().number, i().string]),
          gutter: i().oneOfType([i().string, i().number]),
          gutterX: i().oneOfType([i().string, i().number]),
          gutterY: i().oneOfType([i().string, i().number]),
        })
      ;(c.propTypes = {
        children: i().node,
        className: i().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (c.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=9403.4e528a2d.chunk.js.map
