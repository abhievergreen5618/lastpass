'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [5475],
  {
    9563: (e, a, s) => {
      s.d(a, { i: () => n, x: () => r })
      const r = 'https://evergreenbraindev.com/lastpass/backend/public/api/login',
        n = 'https://evergreenbraindev.com/lastpass/backend/public/api/register'
    },
    35475: (e, a, s) => {
      s.r(a), s.d(a, { default: () => Z })
      s(28381)
      var r = s(92914),
        n = s(48917),
        i = s(5640),
        l = s(13609),
        o = s(45813),
        t = s(30908),
        d = s(80051),
        c = s(66183),
        m = s(62070),
        p = s(10560),
        u = s(79361),
        h = s(69557),
        x = s(2464),
        j = s(58500),
        w = s(74193),
        v = s(59813),
        f = s(24902),
        g = s(99291),
        _ = s(42524),
        b = s(53949),
        y = s(70467),
        N = s(9563),
        C = s(29343)
      const Z = function () {
        const e = (0, b.I0)(),
          a = v.Ry().shape({
            name: v.Z_().required('Field is required'),
            email: v.Z_().email('Please enter an valid email').required('Field is required'),
            password: v.Z_().required('Field is required'),
            password_confirmation: v
              .Z_()
              .oneOf([v.iH('password'), null], 'Passwords must match')
              .required('Field is required'),
          }),
          s = (0, _.s0)(),
          Z = (e, a) => !(!e.password_confirmation || !a.password_confirmation)
        return (0, C.jsx)('div', {
          className: 'bg-body-tertiary min-vh-100 d-flex flex-row align-items-center',
          children: (0, C.jsx)(r.K, {
            children: (0, C.jsx)(n.r, {
              className: 'justify-content-center',
              children: (0, C.jsx)(i.b, {
                md: 9,
                lg: 7,
                xl: 6,
                children: (0, C.jsx)(l.x, {
                  className: 'mx-4',
                  children: (0, C.jsx)(o.s, {
                    className: 'p-4',
                    children: (0, C.jsx)(w.J9, {
                      validationSchema: a,
                      onSubmit: async (a, r) => {
                        let { setSubmitting: n, setErrors: i } = r
                        try {
                          n(!0)
                          const r = await f.Z.post(N.i, a)
                          200 == r.status &&
                            (e((0, y.he)({ user: r.data.user, token: r.data.token })),
                            g.Am.success(r.data.message),
                            s('/dashboard'))
                        } catch (l) {
                          422 == l.response.status
                            ? (i(l.response.data.errors), g.Am.error(l.response.data.message))
                            : l.hasOwnProperty('response') && 500 == l.response.status
                              ? g.Am.error('Server Error')
                              : g.Am.error('OoPs! Something Went Wrong.')
                        } finally {
                          n(!1)
                        }
                      },
                      initialValues: {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                      },
                      children: (e) => {
                        let {
                          handleSubmit: a,
                          handleChange: s,
                          values: r,
                          touched: n,
                          errors: i,
                          isSubmitting: l,
                        } = e
                        return (0, C.jsxs)(t.l, {
                          noValidate: !0,
                          onSubmit: a,
                          children: [
                            (0, C.jsx)('h1', { children: 'Register' }),
                            (0, C.jsx)('p', {
                              className: 'text-body-secondary',
                              children: 'Create your account',
                            }),
                            (0, C.jsxs)(d.Y, {
                              className: 'mb-3',
                              children: [
                                (0, C.jsx)(c.w, { children: (0, C.jsx)(h.Z, { icon: x.E }) }),
                                (0, C.jsx)(m.j, {
                                  placeholder: 'Full Name',
                                  type: 'text',
                                  name: 'name',
                                  value: r.name,
                                  onChange: s,
                                  invalid: !(!n.name || !i.name),
                                }),
                                (0, C.jsx)(p.C, { invalid: !0, children: i.name }),
                              ],
                            }),
                            (0, C.jsxs)(d.Y, {
                              className: 'mb-3',
                              children: [
                                (0, C.jsx)(c.w, { children: '@' }),
                                (0, C.jsx)(m.j, {
                                  placeholder: 'Email',
                                  autoComplete: 'email',
                                  type: 'email',
                                  name: 'email',
                                  value: r.email,
                                  onChange: s,
                                  invalid: !(!n.email || !i.email),
                                }),
                                (0, C.jsx)(p.C, { invalid: !0, children: i.email }),
                              ],
                            }),
                            (0, C.jsxs)(d.Y, {
                              className: 'mb-3',
                              children: [
                                (0, C.jsx)(c.w, { children: (0, C.jsx)(h.Z, { icon: j.U }) }),
                                (0, C.jsx)(m.j, {
                                  type: 'password',
                                  placeholder: 'Password',
                                  autoComplete: 'new-password',
                                  name: 'password',
                                  value: r.password,
                                  onChange: s,
                                  invalid: !(!n.password || !i.password),
                                }),
                                (0, C.jsx)(p.C, { invalid: !0, children: i.password }),
                              ],
                            }),
                            (0, C.jsxs)(d.Y, {
                              className: 'mb-4',
                              children: [
                                (0, C.jsx)(c.w, { children: (0, C.jsx)(h.Z, { icon: j.U }) }),
                                (0, C.jsx)(m.j, {
                                  type: 'password',
                                  name: 'password_confirmation',
                                  placeholder: 'Repeat password',
                                  autoComplete: 'new-password',
                                  value: r.password_confirmation,
                                  onChange: s,
                                  invalid: Z(n, i),
                                }),
                                (0, C.jsx)(p.C, { invalid: !0, children: i.password_confirmation }),
                              ],
                            }),
                            (0, C.jsx)('div', {
                              className: 'd-grid',
                              children: (0, C.jsx)(u.u, {
                                type: 'submit',
                                color: 'success',
                                disabled: l,
                                children: l ? 'Creating Account...' : 'Create Account',
                              }),
                            }),
                          ],
                        })
                      },
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      }
    },
    2464: (e, a, s) => {
      s.d(a, { E: () => r })
      var r = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>",
      ]
    },
    80051: (e, a, s) => {
      s.d(a, { Y: () => t })
      var r = s(50949),
        n = s(28381),
        i = s(34860),
        l = s.n(i),
        o = s(47577),
        t = (0, n.forwardRef)(function (e, a) {
          var s,
            i = e.children,
            l = e.className,
            t = e.size,
            d = (0, r._T)(e, ['children', 'className', 'size'])
          return n.createElement(
            'div',
            (0, r.pi)(
              {
                className: (0, o.Z)(
                  'input-group',
                  ((s = {}), (s['input-group-'.concat(t)] = t), s),
                  l,
                ),
              },
              d,
              { ref: a },
            ),
            i,
          )
        })
      ;(t.propTypes = { children: l().node, className: l().string, size: l().oneOf(['sm', 'lg']) }),
        (t.displayName = 'CInputGroup')
    },
    66183: (e, a, s) => {
      s.d(a, { w: () => t })
      var r = s(50949),
        n = s(28381),
        i = s(34860),
        l = s.n(i),
        o = s(47577),
        t = (0, n.forwardRef)(function (e, a) {
          var s = e.children,
            i = e.className,
            l = e.component,
            t = void 0 === l ? 'span' : l,
            d = (0, r._T)(e, ['children', 'className', 'component'])
          return n.createElement(
            t,
            (0, r.pi)({ className: (0, o.Z)('input-group-text', i) }, d, { ref: a }),
            s,
          )
        })
      ;(t.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (t.displayName = 'CInputGroupText')
    },
  },
])
//# sourceMappingURL=5475.def2190d.chunk.js.map
