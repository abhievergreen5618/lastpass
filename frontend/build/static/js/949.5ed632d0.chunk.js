/*! For license information please see 949.5ed632d0.chunk.js.LICENSE.txt */
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [949],
  {
    55827: (e, n, a) => {
      'use strict'
      a.r(n), a.d(n, { default: () => I })
      var t = a(28381),
        r = (a(82954), a(48917)),
        o = a(5640),
        l = a(13609),
        s = a(51963),
        i = a(45813),
        c = a(10294),
        d = a(82733),
        m = a(79361),
        u = a(47994),
        p = a(12962),
        f = a(64284),
        v = a(58737),
        b = a(95779),
        h = a(30908),
        y = a(62070),
        g = a(10560),
        x = a(26101),
        N = a(59121),
        w = a(23697),
        j = a(69557),
        C = a(8443),
        E = a(58500),
        k = a(8901),
        T = a(89567),
        Z = a(94239)
      const S = (e) =>
        !(
          !e.hasOwnProperty('response') ||
          401 !== e.response.status ||
          'Unauthenticated.' !== e.response.data.message
        )
      var _ = a(53949),
        P = a(42524),
        O = a(70467),
        L = a(74193),
        R = a(59813),
        F = a(99291)
      const q = a.p + 'static/media/lock.0577ac34ef812111c920.jpg'
      var A = a(29343)
      const I = function () {
        const e = (0, P.s0)(),
          n = (0, _.I0)(),
          [a, I] = (0, t.useState)(!1),
          [z, M] = (0, t.useState)(!1),
          [V, B] = (0, t.useState)([]),
          [H, D] = (0, t.useState)([]),
          U = R.Ry().shape({
            url: R.Z_().required('Field is required'),
            name: R.Z_().required('Field is required'),
            folder: R.Z_().required('Field is required'),
            username: R.Z_().required('Field is required'),
            password: R.Z_().required('Field is required'),
          })
        ;(0, t.useEffect)(() => {
          ;(async () => {
            try {
              const e = await Z.Z.post('/get-user')
              console.log(e.data)
            } catch (a) {
              ;(await S(a)) && (n((0, O.ls)()), e('/login')),
                console.error('API request failed:', a)
            }
            try {
              const e = await Z.Z.post('/getpasswordlist')
              D(e.data.passwords), console.log(e.data.passwords)
            } catch (a) {
              ;(await S(a)) && (n((0, O.ls)()), e('/login')),
                console.error('API request failed:', a)
            }
          })()
        }, [])
        const W = async () => {
          try {
            const e = await Z.Z.post('/getfolderslist')
            B(e.data.folders), console.log(e.data.folders)
          } catch (a) {
            ;(await S(a)) && (n((0, O.ls)()), e('/login')), console.error('API request failed:', a)
          }
        }
        return (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(r.r, {
              children: H.map((e) =>
                (0, A.jsx)(
                  o.b,
                  {
                    xs: 2,
                    sm: 3,
                    lg: 2,
                    className: 'my-2',
                    children: (0, A.jsxs)(l.x, {
                      children: [
                        (0, A.jsx)(s.p, { orientation: 'top', src: q, height: '200' }),
                        (0, A.jsxs)(i.s, {
                          children: [
                            (0, A.jsx)(c.t, { children: e.name || e.url }),
                            (0, A.jsx)(d.u, { children: e.username }),
                            (0, A.jsx)(m.u, {
                              className: 'btn btn-primary',
                              href: e.url,
                              children: 'Launch',
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
            }),
            (0, A.jsx)('div', {
              className: 'addbtnparent',
              children: (0, A.jsx)(u.I, {
                content: 'Add Item.',
                placement: 'top',
                children: (0, A.jsx)(m.u, {
                  className: 'btn btn-primary addbtn',
                  onClick: () => I(!a),
                  children: (0, A.jsx)(j.Z, { icon: C.q }),
                }),
              }),
            }),
            (0, A.jsxs)(p.T, {
              alignment: 'center',
              size: 'lg',
              visible: a,
              onClose: () => I(!1),
              'aria-labelledby': 'LiveDemoExampleLabel',
              children: [
                (0, A.jsx)(f.p, {
                  onClose: () => I(!1),
                  children: (0, A.jsx)(v.f, { id: 'LiveDemoExampleLabel', children: 'Add Item' }),
                }),
                (0, A.jsxs)(b.s, {
                  children: [
                    (0, A.jsx)(m.u, {
                      color: 'primary',
                      onClick: () => {
                        W(), I(!1), M(!0)
                      },
                      children: (0, A.jsxs)('div', {
                        className: 'd-flex flex-column justify-content-center align-items-center',
                        children: [
                          (0, A.jsx)(j.Z, { icon: E.U, size: 'lg', className: 'ml-2 text' }),
                          ' Password',
                        ],
                      }),
                    }),
                    (0, A.jsx)(m.u, {
                      color: 'primary',
                      onClick: () => {
                        W(), I(!1), M(!0)
                      },
                      className: 'ms-3',
                      children: (0, A.jsxs)('div', {
                        className: 'd-flex flex-column justify-content-center align-items-center',
                        children: [
                          (0, A.jsx)(j.Z, { icon: k.P, size: 'lg', className: 'ml-2 text' }),
                          ' Folder',
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, A.jsx)(p.T, {
              backdrop: 'static',
              alignment: 'center',
              size: 'lg',
              visible: z,
              'aria-labelledby': 'ToggleBetweenModalsExample2',
              children: (0, A.jsx)(L.J9, {
                validationSchema: U,
                onSubmit: async (a, t) => {
                  let { setSubmitting: r, setErrors: o, resetForm: l } = t
                  try {
                    r(!0)
                    const t = await Z.Z.post('/savepassword', a)
                    if (200 == t.status) {
                      try {
                        const e = await Z.Z.post('/getpasswordlist')
                        D(e.data.passwords), console.log(e.data.passwords)
                      } catch (s) {
                        ;(await S(s)) && (n((0, O.ls)()), e('/login')),
                          console.error('API request failed:', s)
                      }
                      F.Am.success(t.data.message), l(), I(!1), M(!1)
                    }
                  } catch (s) {
                    422 == s.response.status
                      ? (o(s.response.data.errors), F.Am.error(s.response.data.message))
                      : s.hasOwnProperty('response') && 500 == s.response.status
                        ? F.Am.error('Server Error')
                        : F.Am.error('OoPs! Something Went Wrong.')
                  } finally {
                    r(!1)
                  }
                },
                initialValues: { url: '', name: '', folder: '', username: '', password: '' },
                children: (e) => {
                  let {
                    handleSubmit: n,
                    handleChange: a,
                    values: t,
                    touched: l,
                    errors: s,
                    isSubmitting: i,
                  } = e
                  return (0, A.jsxs)(h.l, {
                    className: 'row g-3',
                    noValidate: !0,
                    onSubmit: n,
                    children: [
                      (0, A.jsx)(f.p, {
                        children: (0, A.jsx)(v.f, {
                          id: 'ToggleBetweenModalsExample2',
                          children: (0, A.jsxs)(m.u, {
                            type: 'button',
                            color: 'primary',
                            onClick: () => {
                              I(!0), M(!1)
                            },
                            children: [
                              (0, A.jsx)(j.Z, { icon: T.B, className: 'ml-2' }),
                              ' Back to All Items',
                            ],
                          }),
                        }),
                      }),
                      (0, A.jsx)(b.s, {
                        className: 'm-2',
                        children: (0, A.jsxs)(r.r, {
                          children: [
                            (0, A.jsxs)(o.b, {
                              xs: 12,
                              className: 'my-2',
                              children: [
                                (0, A.jsx)(y.j, {
                                  id: 'url',
                                  label: 'Url',
                                  placeholder: 'www.google.com',
                                  name: 'url',
                                  onChange: a,
                                  invalid: !(!l.url || !s.url),
                                  value: t.url,
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.url }),
                              ],
                            }),
                            (0, A.jsxs)(o.b, {
                              md: 6,
                              className: 'my-2',
                              children: [
                                (0, A.jsx)(y.j, {
                                  type: 'text',
                                  id: 'name',
                                  label: 'Name',
                                  name: 'name',
                                  value: t.name,
                                  onChange: a,
                                  invalid: !(!l.name || !s.name),
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.name }),
                              ],
                            }),
                            (0, A.jsxs)(o.b, {
                              md: 6,
                              className: 'my-2',
                              children: [
                                (0, A.jsxs)(x.L, {
                                  id: 'inputState',
                                  label: 'Folder',
                                  name: 'folder',
                                  onChange: a,
                                  invalid: !(!l.folder || !s.folder),
                                  value: t.folder,
                                  children: [
                                    (0, A.jsx)('option', { value: '', children: 'Choose...' }),
                                    V.map((e) =>
                                      (0, A.jsx)(
                                        'option',
                                        { value: e.id, children: e.folder_name },
                                        e.id,
                                      ),
                                    ),
                                  ],
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.folder }),
                              ],
                            }),
                            (0, A.jsxs)(o.b, {
                              md: 6,
                              className: 'my-2',
                              children: [
                                (0, A.jsx)(y.j, {
                                  type: 'text',
                                  id: 'username',
                                  label: 'Username',
                                  name: 'username',
                                  value: t.username,
                                  onChange: a,
                                  invalid: !(!l.username || !s.username),
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.username }),
                              ],
                            }),
                            (0, A.jsxs)(o.b, {
                              md: 6,
                              className: 'my-2',
                              children: [
                                (0, A.jsx)(y.j, {
                                  type: 'password',
                                  id: 'password',
                                  label: 'Site password',
                                  name: 'password',
                                  value: t.password,
                                  onChange: a,
                                  invalid: !(!l.password || !s.password),
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.password }),
                              ],
                            }),
                            (0, A.jsxs)(o.b, {
                              xs: 12,
                              className: 'my-2',
                              children: [
                                (0, A.jsx)(N.P, {
                                  id: 'notes',
                                  label: 'Notes',
                                  rows: 3,
                                  text: 'Must be 8-20 words long.',
                                  value: t.notes,
                                  onChange: a,
                                  name: 'notes',
                                  invalid: !(!l.notes || !s.notes),
                                }),
                                (0, A.jsx)(g.C, { invalid: !0, children: s.notes }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, A.jsx)(w.Y, {
                        children: (0, A.jsx)(m.u, {
                          type: 'submit',
                          color: 'primary',
                          children: 'Save changes',
                        }),
                      }),
                    ],
                  })
                },
              }),
            }),
          ],
        })
      }
    },
    89567: (e, n, a) => {
      'use strict'
      a.d(n, { B: () => t })
      var t = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M256,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.548,16.042,256,16.042ZM403.078,403.12A207.253,207.253,0,1,1,447.667,337,207.364,207.364,0,0,1,403.078,403.12Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='272.614 164.987 249.986 142.36 136.305 256.041 249.986 369.722 272.614 347.095 197.56 272.041 385 272.041 385 240.041 197.56 240.041 272.614 164.987' class='ci-primary'/>",
      ]
    },
    8901: (e, n, a) => {
      'use strict'
      a.d(n, { P: () => t })
      var t = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M472,472H40a24.028,24.028,0,0,1-24-24V64A24.028,24.028,0,0,1,40,40H226.667a23.935,23.935,0,0,1,22.154,14.77L269.333,104H472a24.028,24.028,0,0,1,24,24V448A24.028,24.028,0,0,1,472,472ZM48,440H464V136H248L221.333,72H48Z' class='ci-primary'/>",
      ]
    },
    8443: (e, n, a) => {
      'use strict'
      a.d(n, { q: () => t })
      var t = [
        '512 512',
        "<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>",
      ]
    },
    51963: (e, n, a) => {
      'use strict'
      a.d(n, { p: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = e.component,
            i = void 0 === l ? 'img' : l,
            c = e.orientation,
            d = (0, t._T)(e, ['children', 'className', 'component', 'orientation'])
          return r.createElement(
            i,
            (0, t.pi)({ className: (0, s.Z)(c ? 'card-img-'.concat(c) : 'card-img', o) }, d, {
              ref: n,
            }),
            a,
          )
        })
      ;(i.propTypes = {
        children: l().node,
        className: l().string,
        component: l().elementType,
        orientation: l().oneOf(['top', 'bottom']),
      }),
        (i.displayName = 'CCardImage')
    },
    82733: (e, n, a) => {
      'use strict'
      a.d(n, { u: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.component,
            l = void 0 === o ? 'p' : o,
            i = e.className,
            c = (0, t._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, t.pi)({ className: (0, s.Z)('card-text', i) }, c, { ref: n }),
            a,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (i.displayName = 'CCardText')
    },
    10294: (e, n, a) => {
      'use strict'
      a.d(n, { t: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.component,
            l = void 0 === o ? 'h5' : o,
            i = e.className,
            c = (0, t._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, t.pi)({ className: (0, s.Z)('card-title', i) }, c, { ref: n }),
            a,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (i.displayName = 'CCardTitle')
    },
    26101: (e, n, a) => {
      'use strict'
      a.d(n, { L: () => c })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = a(25117),
        c = (0, r.forwardRef)(function (e, n) {
          var a,
            o = e.children,
            l = e.className,
            c = e.feedback,
            d = e.feedbackInvalid,
            m = e.feedbackValid,
            u = e.floatingClassName,
            p = e.floatingLabel,
            f = e.htmlSize,
            v = e.id,
            b = e.invalid,
            h = e.label,
            y = e.options,
            g = e.size,
            x = e.text,
            N = e.tooltipFeedback,
            w = e.valid,
            j = (0, t._T)(e, [
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
          return r.createElement(
            i.e,
            {
              describedby: j['aria-describedby'],
              feedback: c,
              feedbackInvalid: d,
              feedbackValid: m,
              floatingClassName: u,
              floatingLabel: p,
              id: v,
              invalid: b,
              label: h,
              text: x,
              tooltipFeedback: N,
              valid: w,
            },
            r.createElement(
              'select',
              (0, t.pi)(
                {
                  id: v,
                  className: (0, s.Z)(
                    'form-select',
                    ((a = {}),
                    (a['form-select-'.concat(g)] = g),
                    (a['is-invalid'] = b),
                    (a['is-valid'] = w),
                    a),
                    l,
                  ),
                  size: f,
                },
                j,
                { ref: n },
              ),
              y
                ? y.map(function (e, n) {
                    return r.createElement(
                      'option',
                      (0, t.pi)(
                        {},
                        'object' === typeof e && e.disabled && { disabled: e.disabled },
                        'object' === typeof e && void 0 !== e.value && { value: e.value },
                        { key: n },
                      ),
                      'string' === typeof e ? e : e.label,
                    )
                  })
                : o,
            ),
          )
        })
      ;(c.propTypes = (0, t.pi)(
        { className: l().string, htmlSize: l().number, options: l().array },
        i.e.propTypes,
      )),
        (c.displayName = 'CFormSelect')
    },
    59121: (e, n, a) => {
      'use strict'
      a.d(n, { P: () => c })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = a(25117),
        c = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = e.feedback,
            c = e.feedbackInvalid,
            d = e.feedbackValid,
            m = e.floatingClassName,
            u = e.floatingLabel,
            p = e.id,
            f = e.invalid,
            v = e.label,
            b = e.plainText,
            h = e.text,
            y = e.tooltipFeedback,
            g = e.valid,
            x = (0, t._T)(e, [
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
          return r.createElement(
            i.e,
            {
              describedby: x['aria-describedby'],
              feedback: l,
              feedbackInvalid: c,
              feedbackValid: d,
              floatingClassName: m,
              floatingLabel: u,
              id: p,
              invalid: f,
              label: v,
              text: h,
              tooltipFeedback: y,
              valid: g,
            },
            r.createElement(
              'textarea',
              (0, t.pi)(
                {
                  className: (0, s.Z)(
                    b ? 'form-control-plaintext' : 'form-control',
                    { 'is-invalid': f, 'is-valid': g },
                    o,
                  ),
                  id: p,
                },
                x,
                { ref: n },
              ),
              a,
            ),
          )
        })
      ;(c.propTypes = (0, t.pi)(
        { className: l().string, id: l().string, plainText: l().bool },
        i.e.propTypes,
      )),
        (c.displayName = 'CFormTextarea')
    },
    12962: (e, n, a) => {
      'use strict'
      a.d(n, { T: () => v, q: () => f })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = a(46198),
        c = a(53419),
        d = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, s.Z)('modal-content', o) }, l, { ref: n }),
            a,
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string }),
        (d.displayName = 'CModalContent')
      var m = (0, r.forwardRef)(function (e, n) {
        var a,
          o = e.children,
          l = e.alignment,
          i = e.className,
          c = e.fullscreen,
          d = e.scrollable,
          m = e.size,
          u = (0, t._T)(e, [
            'children',
            'alignment',
            'className',
            'fullscreen',
            'scrollable',
            'size',
          ])
        return r.createElement(
          'div',
          (0, t.pi)(
            {
              className: (0, s.Z)(
                'modal-dialog',
                ((a = { 'modal-dialog-centered': 'center' === l }),
                (a[
                  'boolean' === typeof c
                    ? 'modal-fullscreen'
                    : 'modal-fullscreen-'.concat(c, '-down')
                ] = c),
                (a['modal-dialog-scrollable'] = d),
                (a['modal-'.concat(m)] = m),
                a),
                i,
              ),
            },
            u,
            { ref: n },
          ),
          o,
        )
      })
      ;(m.propTypes = {
        alignment: l().oneOf(['top', 'center']),
        children: l().node,
        className: l().string,
        fullscreen: l().oneOfType([l().bool, l().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
        scrollable: l().bool,
        size: l().oneOf(['sm', 'lg', 'xl']),
      }),
        (m.displayName = 'CModalDialog')
      var u = a(63173),
        p = a(41829),
        f = (0, r.createContext)({}),
        v = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.alignment,
            l = e.backdrop,
            v = void 0 === l || l,
            b = e.className,
            h = e.duration,
            y = void 0 === h ? 150 : h,
            g = e.focus,
            x = void 0 === g || g,
            N = e.fullscreen,
            w = e.keyboard,
            j = void 0 === w || w,
            C = e.onClose,
            E = e.onClosePrevented,
            k = e.onShow,
            T = e.portal,
            Z = void 0 === T || T,
            S = e.scrollable,
            _ = e.size,
            P = e.transition,
            O = void 0 === P || P,
            L = e.unmountOnClose,
            R = void 0 === L || L,
            F = e.visible,
            q = (0, t._T)(e, [
              'children',
              'alignment',
              'backdrop',
              'className',
              'duration',
              'focus',
              'fullscreen',
              'keyboard',
              'onClose',
              'onClosePrevented',
              'onShow',
              'portal',
              'scrollable',
              'size',
              'transition',
              'unmountOnClose',
              'visible',
            ]),
            A = (0, r.useRef)(null),
            I = (0, r.useRef)(null),
            z = (0, r.useRef)(null),
            M = (0, u.A7)(n, I),
            V = (0, r.useState)(F),
            B = V[0],
            H = V[1],
            D = (0, r.useState)(!1),
            U = D[0],
            W = D[1],
            Y = { visible: B, setVisible: H }
          ;(0, r.useEffect)(
            function () {
              H(F)
            },
            [F],
          ),
            (0, r.useEffect)(
              function () {
                var e
                return (
                  B
                    ? ((A.current = document.activeElement),
                      document.addEventListener('mouseup', J),
                      document.addEventListener('keydown', Q))
                    : null === (e = A.current) || void 0 === e || e.focus(),
                  function () {
                    document.removeEventListener('mouseup', J),
                      document.removeEventListener('keydown', Q)
                  }
                )
              },
              [B],
            )
          var G = function () {
            return 'static' === v ? W(!0) : (H(!1), C && C())
          }
          ;(0, r.useLayoutEffect)(
            function () {
              E && E(),
                setTimeout(function () {
                  return W(!1)
                }, y)
            },
            [U],
          ),
            (0, r.useLayoutEffect)(
              function () {
                return (
                  B
                    ? (document.body.classList.add('modal-open'),
                      v &&
                        ((document.body.style.overflow = 'hidden'),
                        (document.body.style.paddingRight = '0px')),
                      setTimeout(
                        function () {
                          var e
                          x && (null === (e = I.current) || void 0 === e || e.focus())
                        },
                        O ? y : 0,
                      ))
                    : (document.body.classList.remove('modal-open'),
                      v &&
                        (document.body.style.removeProperty('overflow'),
                        document.body.style.removeProperty('padding-right'))),
                  function () {
                    document.body.classList.remove('modal-open'),
                      v &&
                        (document.body.style.removeProperty('overflow'),
                        document.body.style.removeProperty('padding-right'))
                  }
                )
              },
              [B],
            )
          var J = function (e) {
              z.current && !z.current.contains(e.target) && G()
            },
            Q = function (e) {
              'Escape' === e.key && j && G()
            }
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              p.ZP,
              {
                in: B,
                mountOnEnter: !0,
                nodeRef: I,
                onEnter: k,
                onExit: C,
                unmountOnExit: R,
                timeout: O ? y : 0,
              },
              function (e) {
                return r.createElement(
                  c.D,
                  { portal: Z },
                  r.createElement(
                    f.Provider,
                    { value: Y },
                    r.createElement(
                      'div',
                      (0, t.pi)(
                        {
                          className: (0, s.Z)(
                            'modal',
                            { 'modal-static': U, fade: O, show: 'entered' === e },
                            b,
                          ),
                          tabIndex: -1,
                        },
                        B ? { 'aria-modal': !0, role: 'dialog' } : { 'aria-hidden': 'true' },
                        { style: (0, t.pi)({}, 'exited' !== e && { display: 'block' }) },
                        q,
                        { ref: M },
                      ),
                      r.createElement(
                        m,
                        { alignment: o, fullscreen: N, scrollable: S, size: _ },
                        r.createElement(d, { ref: z }, a),
                      ),
                    ),
                  ),
                )
              },
            ),
            v && r.createElement(c.D, { portal: Z }, r.createElement(i.p, { visible: B })),
          )
        })
      ;(v.propTypes = {
        alignment: l().oneOf(['top', 'center']),
        backdrop: l().oneOfType([l().bool, l().oneOf(['static'])]),
        children: l().node,
        className: l().string,
        duration: l().number,
        focus: l().bool,
        fullscreen: l().oneOfType([l().bool, l().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
        keyboard: l().bool,
        onClose: l().func,
        onClosePrevented: l().func,
        onShow: l().func,
        portal: l().bool,
        scrollable: l().bool,
        size: l().oneOf(['sm', 'lg', 'xl']),
        transition: l().bool,
        unmountOnClose: l().bool,
        visible: l().bool,
      }),
        (v.displayName = 'CModal')
    },
    95779: (e, n, a) => {
      'use strict'
      a.d(n, { s: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, s.Z)('modal-body', o) }, l, { ref: n }),
            a,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string }), (i.displayName = 'CModalBody')
    },
    23697: (e, n, a) => {
      'use strict'
      a.d(n, { Y: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, s.Z)('modal-footer', o) }, l, { ref: n }),
            a,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string }),
        (i.displayName = 'CModalFooter')
    },
    64284: (e, n, a) => {
      'use strict'
      a.d(n, { p: () => d })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = a(95117),
        c = a(12962),
        d = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.className,
            l = e.closeButton,
            d = void 0 === l || l,
            m = (0, t._T)(e, ['children', 'className', 'closeButton']),
            u = (0, r.useContext)(c.q).setVisible
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, s.Z)('modal-header', o) }, m, { ref: n }),
            a,
            d &&
              r.createElement(i.p, {
                onClick: function () {
                  return u(!1)
                },
              }),
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string, closeButton: l().bool }),
        (d.displayName = 'CModalHeader')
    },
    58737: (e, n, a) => {
      'use strict'
      a.d(n, { f: () => i })
      var t = a(50949),
        r = a(28381),
        o = a(34860),
        l = a.n(o),
        s = a(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            o = e.component,
            l = void 0 === o ? 'h5' : o,
            i = e.className,
            c = (0, t._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, t.pi)({ className: (0, s.Z)('modal-title', i) }, c, { ref: n }),
            a,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (i.displayName = 'CModalTitle')
    },
    47994: (e, n, a) => {
      'use strict'
      a.d(n, { I: () => v })
      var t = a(50949),
        r = a(28381),
        o = a(47577),
        l = a(34860),
        s = a.n(l),
        i = a(53419),
        c = a(63173),
        d = a(68828),
        m = a(37169),
        u = a(25696),
        p = a(15603),
        f = a(41829),
        v = (0, r.forwardRef)(function (e, n) {
          var a = e.children,
            l = e.animation,
            s = void 0 === l || l,
            m = e.className,
            v = e.container,
            b = e.content,
            h = e.delay,
            y = void 0 === h ? 0 : h,
            g = e.fallbackPlacements,
            x = void 0 === g ? ['top', 'right', 'bottom', 'left'] : g,
            N = e.offset,
            w = void 0 === N ? [0, 6] : N,
            j = e.onHide,
            C = e.onShow,
            E = e.placement,
            k = void 0 === E ? 'top' : E,
            T = e.trigger,
            Z = void 0 === T ? ['hover', 'focus'] : T,
            S = e.visible,
            _ = (0, t._T)(e, [
              'children',
              'animation',
              'className',
              'container',
              'content',
              'delay',
              'fallbackPlacements',
              'offset',
              'onHide',
              'onShow',
              'placement',
              'trigger',
              'visible',
            ]),
            P = (0, r.useRef)(null),
            O = (0, r.useRef)(null),
            L = (0, c.A7)(n, P),
            R = (0, d.D)(),
            F = R.initPopper,
            q = R.destroyPopper,
            A = (0, r.useState)(S),
            I = A[0],
            z = A[1],
            M = 'number' === typeof y ? { show: y, hide: y } : y,
            V = {
              modifiers: [
                { name: 'arrow', options: { element: '.tooltip-arrow' } },
                { name: 'flip', options: { fallbackPlacements: x } },
                { name: 'offset', options: { offset: w } },
              ],
              placement: (0, p.Z)(k, O.current),
            }
          ;(0, r.useEffect)(
            function () {
              z(S)
            },
            [S],
          ),
            (0, r.useEffect)(
              function () {
                return (
                  I && O.current && P.current && F(O.current, P.current, V),
                  function () {
                    q()
                  }
                )
              },
              [I],
            )
          var B = function (e) {
            e
              ? setTimeout(function () {
                  return z(!0)
                }, M.show)
              : setTimeout(function () {
                  return z(!1)
                }, M.hide)
          }
          return r.createElement(
            r.Fragment,
            null,
            r.cloneElement(
              a,
              (0, t.pi)(
                (0, t.pi)(
                  (0, t.pi)(
                    { ref: O },
                    ('click' === Z || Z.includes('click')) && {
                      onClick: function () {
                        return B(!I)
                      },
                    },
                  ),
                  ('focus' === Z || Z.includes('focus')) && {
                    onFocus: function () {
                      return B(!0)
                    },
                    onBlur: function () {
                      return B(!1)
                    },
                  },
                ),
                ('hover' === Z || Z.includes('hover')) && {
                  onMouseEnter: function () {
                    return B(!0)
                  },
                  onMouseLeave: function () {
                    return B(!1)
                  },
                },
              ),
            ),
            r.createElement(
              i.D,
              { container: v, portal: !0 },
              r.createElement(
                f.ZP,
                {
                  in: I,
                  mountOnEnter: !0,
                  nodeRef: P,
                  onEnter: C,
                  onExit: j,
                  timeout: { enter: 0, exit: P.current ? (0, u.Z)(P.current) + 50 : 200 },
                  unmountOnExit: !0,
                },
                function (e) {
                  return r.createElement(
                    'div',
                    (0, t.pi)(
                      {
                        className: (0, o.Z)(
                          'tooltip',
                          'bs-tooltip-auto',
                          { fade: s, show: 'entered' === e },
                          m,
                        ),
                        ref: L,
                        role: 'tooltip',
                      },
                      _,
                    ),
                    r.createElement('div', { className: 'tooltip-arrow' }),
                    r.createElement('div', { className: 'tooltip-inner' }, b),
                  )
                },
              ),
            ),
          )
        })
      ;(v.propTypes = {
        animation: s().bool,
        children: s().node,
        container: s().any,
        content: s().oneOfType([s().string, s().node]),
        delay: s().oneOfType([
          s().number,
          s().shape({ show: s().number.isRequired, hide: s().number.isRequired }),
        ]),
        fallbackPlacements: m.GA,
        offset: s().any,
        onHide: s().func,
        onShow: s().func,
        placement: s().oneOf(['auto', 'top', 'right', 'bottom', 'left']),
        trigger: m.lQ,
        visible: s().bool,
      }),
        (v.displayName = 'CTooltip')
    },
    15603: (e, n, a) => {
      'use strict'
      a.d(n, { Z: () => r })
      var t = a(58524),
        r = function (e, n) {
          switch (e) {
            case 'right':
              return (0, t.Z)(n) ? 'left' : 'right'
            case 'left':
              return (0, t.Z)(n) ? 'right' : 'left'
            default:
              return e
          }
        }
    },
    82954: (e, n) => {
      var a
      !(function () {
        'use strict'
        var t = {}.hasOwnProperty
        function r() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            var a = arguments[n]
            if (a) {
              var o = typeof a
              if ('string' === o || 'number' === o) e.push(a)
              else if (Array.isArray(a)) {
                if (a.length) {
                  var l = r.apply(null, a)
                  l && e.push(l)
                }
              } else if ('object' === o) {
                if (
                  a.toString !== Object.prototype.toString &&
                  !a.toString.toString().includes('[native code]')
                ) {
                  e.push(a.toString())
                  continue
                }
                for (var s in a) t.call(a, s) && a[s] && e.push(s)
              }
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function () {
                return r
              }.apply(n, [])) || (e.exports = a)
      })()
    },
  },
])
//# sourceMappingURL=949.5ed632d0.chunk.js.map
