'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1522],
  {
    9563: (e, s, r) => {
      r.d(s, { i: () => i, x: () => a })
      const a = 'https://evergreenbraindev.com/lastpass/backend/public/api/login',
        i = 'https://evergreenbraindev.com/lastpass/backend/public/api/register'
    },
    1522: (e, s, r) => {
      r.r(s), r.d(s, { default: () => k })
      r(28381)
      var a = r(47174),
        i = r(92914),
        n = r(48917),
        l = r(5640),
        t = r(34321),
        d = r(13609),
        c = r(45813),
        o = r(30908),
        m = r(80051),
        p = r(66183),
        u = r(62070),
        h = r(10560),
        x = r(79361),
        g = r(69557),
        j = r(58500),
        v = r(74193),
        N = r(59813),
        b = r(24902),
        w = r(99291),
        y = r(42524),
        f = r(53949),
        _ = r(70467),
        C = r(9563),
        S = r(29343)
      const k = function () {
        const e = (0, f.I0)(),
          s = N.Ry().shape({
            email: N.Z_().email('Please enter an valid email').required('Field is required'),
            password: N.Z_().required('Field is required'),
          }),
          r = (0, y.s0)()
        return (0, S.jsx)('div', {
          className: 'bg-body-tertiary min-vh-100 d-flex flex-row align-items-center',
          children: (0, S.jsx)(i.K, {
            children: (0, S.jsx)(n.r, {
              className: 'justify-content-center',
              children: (0, S.jsx)(l.b, {
                md: 8,
                children: (0, S.jsxs)(t.d, {
                  children: [
                    (0, S.jsx)(d.x, {
                      className: 'p-4',
                      children: (0, S.jsx)(c.s, {
                        children: (0, S.jsx)(v.J9, {
                          validationSchema: s,
                          onSubmit: async (s, a) => {
                            let { setSubmitting: i, setErrors: n } = a
                            try {
                              i(!0)
                              const a = await b.Z.post(C.x, s)
                              200 == a.status &&
                                (e((0, _.he)({ token: a.data.token })),
                                w.Am.success(a.data.message),
                                r('/dashboard'))
                            } catch (l) {
                              l.hasOwnProperty('response') && 422 == l.response.status
                                ? (n(l.response.data.errors), w.Am.error(l.response.data.message))
                                : l.hasOwnProperty('response') && 500 == l.response.status
                                  ? w.Am.error('Server Error')
                                  : w.Am.error('OoPs! Something Went Wrong.')
                            } finally {
                              i(!1)
                            }
                          },
                          initialValues: { email: '', password: '' },
                          children: (e) => {
                            let {
                              handleSubmit: s,
                              handleChange: r,
                              values: a,
                              touched: i,
                              errors: t,
                              isSubmitting: d,
                            } = e
                            return (0, S.jsxs)(o.l, {
                              noValidate: !0,
                              onSubmit: s,
                              children: [
                                (0, S.jsx)('h1', { children: 'Login' }),
                                (0, S.jsx)('p', {
                                  className: 'text-body-secondary',
                                  children: 'Sign In to your account',
                                }),
                                (0, S.jsxs)(m.Y, {
                                  className: 'mb-3',
                                  children: [
                                    (0, S.jsx)(p.w, { children: '@' }),
                                    (0, S.jsx)(u.j, {
                                      placeholder: 'Email',
                                      autoComplete: 'email',
                                      type: 'email',
                                      name: 'email',
                                      value: a.email,
                                      onChange: r,
                                      invalid: !(!i.email || !t.email),
                                    }),
                                    (0, S.jsx)(h.C, { invalid: !0, children: t.email }),
                                  ],
                                }),
                                (0, S.jsxs)(m.Y, {
                                  className: 'mb-3',
                                  children: [
                                    (0, S.jsx)(p.w, { children: (0, S.jsx)(g.Z, { icon: j.U }) }),
                                    (0, S.jsx)(u.j, {
                                      type: 'password',
                                      placeholder: 'Password',
                                      autoComplete: 'new-password',
                                      name: 'password',
                                      value: a.password,
                                      onChange: r,
                                      invalid: !(!i.password || !t.password),
                                    }),
                                    (0, S.jsx)(h.C, { invalid: !0, children: t.password }),
                                  ],
                                }),
                                (0, S.jsxs)(n.r, {
                                  children: [
                                    (0, S.jsx)(l.b, {
                                      xs: 6,
                                      children: (0, S.jsx)(x.u, {
                                        type: 'submit',
                                        color: 'primary',
                                        disabled: d,
                                        className: 'px-4',
                                        children: d ? 'Loading...' : 'Login',
                                      }),
                                    }),
                                    (0, S.jsx)(l.b, {
                                      xs: 6,
                                      className: 'text-right',
                                      children: (0, S.jsx)(x.u, {
                                        color: 'link',
                                        className: 'px-0',
                                        children: 'Forgot password?',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          },
                        }),
                      }),
                    }),
                    (0, S.jsx)(d.x, {
                      className: 'text-white bg-primary py-5',
                      style: { width: '44%' },
                      children: (0, S.jsx)(c.s, {
                        className: 'text-center',
                        children: (0, S.jsxs)('div', {
                          children: [
                            (0, S.jsx)('h2', { children: 'Sign up' }),
                            (0, S.jsx)('p', {
                              children:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            }),
                            (0, S.jsx)(a.rU, {
                              to: '/register',
                              children: (0, S.jsx)(x.u, {
                                color: 'primary',
                                className: 'mt-3',
                                active: !0,
                                tabIndex: -1,
                                children: 'Register Now!',
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        })
      }
    },
    34321: (e, s, r) => {
      r.d(s, { d: () => d })
      var a = r(50949),
        i = r(28381),
        n = r(34860),
        l = r.n(n),
        t = r(47577),
        d = (0, i.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            l = (0, a._T)(e, ['children', 'className'])
          return i.createElement(
            'div',
            (0, a.pi)({ className: (0, t.Z)('card-group', n) }, l, { ref: s }),
            r,
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string }), (d.displayName = 'CCardGroup')
    },
    80051: (e, s, r) => {
      r.d(s, { Y: () => d })
      var a = r(50949),
        i = r(28381),
        n = r(34860),
        l = r.n(n),
        t = r(47577),
        d = (0, i.forwardRef)(function (e, s) {
          var r,
            n = e.children,
            l = e.className,
            d = e.size,
            c = (0, a._T)(e, ['children', 'className', 'size'])
          return i.createElement(
            'div',
            (0, a.pi)(
              {
                className: (0, t.Z)(
                  'input-group',
                  ((r = {}), (r['input-group-'.concat(d)] = d), r),
                  l,
                ),
              },
              c,
              { ref: s },
            ),
            n,
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string, size: l().oneOf(['sm', 'lg']) }),
        (d.displayName = 'CInputGroup')
    },
    66183: (e, s, r) => {
      r.d(s, { w: () => d })
      var a = r(50949),
        i = r(28381),
        n = r(34860),
        l = r.n(n),
        t = r(47577),
        d = (0, i.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            l = e.component,
            d = void 0 === l ? 'span' : l,
            c = (0, a._T)(e, ['children', 'className', 'component'])
          return i.createElement(
            d,
            (0, a.pi)({ className: (0, t.Z)('input-group-text', n) }, c, { ref: s }),
            r,
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (d.displayName = 'CInputGroupText')
    },
  },
])
//# sourceMappingURL=1522.3cbe3656.chunk.js.map
