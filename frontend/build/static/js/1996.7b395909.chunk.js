'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1996],
  {
    54908: (e, n, a) => {
      a.d(n, {
        x6: () => D,
        Lk: () => G,
        qh: () => X,
        tf: () => Se,
        S8: () => tn,
        ns: () => mn,
        q3: () => jn,
        cG: () => rn,
      })
      var t = a(28381),
        o = a(42524)
      const s = t.lazy(() => Promise.all([a.e(5603), a.e(949)]).then(a.bind(a, 55827))),
        c = t.lazy(() => a.e(3668).then(a.bind(a, 93668))),
        m = t.lazy(() => a.e(9331).then(a.bind(a, 99331))),
        i = t.lazy(() => Promise.all([a.e(2814), a.e(2432)]).then(a.bind(a, 72432))),
        l = t.lazy(() => a.e(9394).then(a.bind(a, 19394))),
        r = t.lazy(() => a.e(2212).then(a.bind(a, 2212))),
        h = t.lazy(() => a.e(3134).then(a.bind(a, 7027))),
        d = t.lazy(() => Promise.all([a.e(2814), a.e(1693)]).then(a.bind(a, 31693))),
        p = t.lazy(() => a.e(9510).then(a.bind(a, 59510))),
        x = t.lazy(() => a.e(4634).then(a.bind(a, 74634))),
        b = t.lazy(() => a.e(4561).then(a.bind(a, 34561))),
        u = t.lazy(() => a.e(9312).then(a.bind(a, 79312))),
        j = t.lazy(() => a.e(5930).then(a.bind(a, 25930))),
        v = t.lazy(() => a.e(4025).then(a.bind(a, 64025))),
        g = t.lazy(() => a.e(7891).then(a.bind(a, 27891))),
        f = t.lazy(() => a.e(9035).then(a.bind(a, 89035))),
        y = t.lazy(() => a.e(2647).then(a.bind(a, 82647))),
        N = t.lazy(() => a.e(2945).then(a.bind(a, 22945))),
        U = t.lazy(() => a.e(3700).then(a.bind(a, 73700))),
        C = t.lazy(() => a.e(7698).then(a.bind(a, 47698))),
        Z = t.lazy(() => a.e(2892).then(a.bind(a, 42892))),
        z = t.lazy(() => a.e(9403).then(a.bind(a, 59403))),
        k = t.lazy(() => a.e(9243).then(a.bind(a, 29243))),
        S = t.lazy(() => a.e(6613).then(a.bind(a, 56613))),
        A = t.lazy(() => a.e(7970).then(a.bind(a, 67970))),
        L = t.lazy(() => a.e(7336).then(a.bind(a, 47336))),
        w = t.lazy(() => a.e(1204).then(a.bind(a, 11204))),
        V = t.lazy(() => a.e(9946).then(a.bind(a, 69946))),
        M = t.lazy(() => Promise.all([a.e(1966), a.e(6946)]).then(a.bind(a, 6946))),
        P = t.lazy(() => Promise.all([a.e(8677), a.e(2626), a.e(5925)]).then(a.bind(a, 85925))),
        I = t.lazy(() => Promise.all([a.e(8677), a.e(6912), a.e(2929)]).then(a.bind(a, 32929))),
        B = t.lazy(() => Promise.all([a.e(8677), a.e(5765)]).then(a.bind(a, 45765))),
        _ = t.lazy(() => a.e(1529).then(a.bind(a, 1529))),
        F = [
          { path: '/', exact: !0, name: 'Home' },
          { path: '/dashboard', name: 'All items', element: s },
          { path: '/theme', name: 'Theme', element: c, exact: !0 },
          { path: '/theme/colors', name: 'Colors', element: c },
          { path: '/theme/typography', name: 'Typography', element: m },
          { path: '/base', name: 'Base', element: r, exact: !0 },
          { path: '/base/accordion', name: 'Accordion', element: i },
          { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: l },
          { path: '/base/cards', name: 'Cards', element: r },
          { path: '/base/carousels', name: 'Carousel', element: h },
          { path: '/base/collapses', name: 'Collapse', element: d },
          { path: '/base/list-groups', name: 'List Groups', element: p },
          { path: '/base/navs', name: 'Navs', element: x },
          { path: '/base/paginations', name: 'Paginations', element: b },
          { path: '/base/placeholders', name: 'Placeholders', element: u },
          { path: '/base/popovers', name: 'Popovers', element: j },
          { path: '/base/progress', name: 'Progress', element: v },
          { path: '/base/spinners', name: 'Spinners', element: g },
          { path: '/base/tables', name: 'Tables', element: f },
          { path: '/base/tooltips', name: 'Tooltips', element: y },
          { path: '/buttons', name: 'Buttons', element: N, exact: !0 },
          { path: '/buttons/buttons', name: 'Buttons', element: N },
          { path: '/buttons/dropdowns', name: 'Dropdowns', element: C },
          { path: '/buttons/button-groups', name: 'Button Groups', element: U },
          { path: '/charts', name: 'Charts', element: M },
          { path: '/forms', name: 'Forms', element: k, exact: !0 },
          { path: '/forms/form-control', name: 'Form Control', element: k },
          { path: '/forms/select', name: 'Select', element: w },
          { path: '/forms/checks-radios', name: 'Checks & Radios', element: Z },
          { path: '/forms/range', name: 'Range', element: L },
          { path: '/forms/input-group', name: 'Input Group', element: S },
          { path: '/forms/floating-labels', name: 'Floating Labels', element: z },
          { path: '/forms/layout', name: 'Layout', element: A },
          { path: '/forms/validation', name: 'Validation', element: V },
          { path: '/icons', exact: !0, name: 'Icons', element: P },
          { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: P },
          { path: '/icons/flags', name: 'Flags', element: I },
          { path: '/icons/brands', name: 'Brands', element: B },
          { path: '/notifications', name: 'Notifications', element: _, exact: !0 },
          { path: '/notifications/alerts', name: 'Alerts', element: _ },
          {
            path: '/notifications/badges',
            name: 'Badges',
            element: t.lazy(() => a.e(7120).then(a.bind(a, 47120))),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            element: t.lazy(() => Promise.all([a.e(6303), a.e(4733)]).then(a.bind(a, 44733))),
          },
          {
            path: '/notifications/toasts',
            name: 'Toasts',
            element: t.lazy(() => a.e(1469).then(a.bind(a, 31469))),
          },
          {
            path: '/widgets',
            name: 'Widgets',
            element: t.lazy(() =>
              Promise.all([a.e(1966), a.e(6516), a.e(1508)]).then(a.bind(a, 21508)),
            ),
          },
        ]
      var T = a(16387),
        E = a(16995),
        R = a(29343)
      const $ = () => {
          const e = (0, o.TH)().pathname,
            n = ((e) => {
              const n = []
              return (
                e.split('/').reduce((e, a, t, o) => {
                  const s = ''.concat(e, '/').concat(a),
                    c = ((e, n) => {
                      const a = n.find((n) => n.path === e)
                      return !!a && a.name
                    })(s, F)
                  return c && n.push({ pathname: s, name: c, active: t + 1 === o.length }), s
                }),
                n
              )
            })(e)
          return (0, R.jsxs)(T.f, {
            className: 'my-0',
            children: [
              (0, R.jsx)(E.S, { href: '/', children: 'Home' }),
              n.map((e, n) =>
                (0, t.createElement)(
                  E.S,
                  { ...(e.active ? { active: !0 } : { href: e.pathname }), key: n },
                  e.name,
                ),
              ),
            ],
          })
        },
        D = t.memo($)
      var H = a(92914),
        W = a(70983)
      const q = () =>
          (0, R.jsx)(H.K, {
            fluid: !0,
            children: (0, R.jsx)(t.Suspense, {
              fallback: (0, R.jsx)(W.L, { color: 'primary' }),
              children: (0, R.jsxs)(o.Z5, {
                children: [
                  F.map(
                    (e, n) =>
                      e.element &&
                      (0, R.jsx)(
                        o.AW,
                        {
                          path: e.path,
                          exact: e.exact,
                          name: e.name,
                          element: (0, R.jsx)(e.element, {}),
                        },
                        n,
                      ),
                  ),
                  (0, R.jsx)(o.AW, {
                    path: '/',
                    element: (0, R.jsx)(o.Fg, { to: 'dashboard', replace: !0 }),
                  }),
                ],
              }),
            }),
          }),
        G = t.memo(q)
      var O = a(20510)
      const K = () =>
          (0, R.jsxs)(O.p, {
            className: 'px-4',
            children: [
              (0, R.jsxs)('div', {
                children: [
                  (0, R.jsx)('a', {
                    href: 'https://coreui.io',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: 'CoreUI',
                  }),
                  (0, R.jsx)('span', { className: 'ms-1', children: '\xa9 2023 creativeLabs.' }),
                ],
              }),
              (0, R.jsxs)('div', {
                className: 'ms-auto',
                children: [
                  (0, R.jsx)('span', { className: 'me-1', children: 'Powered by' }),
                  (0, R.jsx)('a', {
                    href: 'https://coreui.io/react',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: 'CoreUI React Admin & Dashboard Template',
                  }),
                ],
              }),
            ],
          }),
        X = t.memo(K)
      var Q = a(47174),
        J = a(53949),
        Y = a(74706),
        ee = a(99902),
        ne = a(32900),
        ae = a(21071),
        te = a(96843),
        oe = a(19947),
        se = a(45514),
        ce = a(67833),
        me = a(3983),
        ie = a(32152),
        le = a(69557),
        re = a(10081),
        he = a(60604),
        de = a(31674),
        pe = a(41160),
        xe = a(69019),
        be = a(97388),
        ue = a(56978),
        je = a(26629),
        ve = a(42541),
        ge = a(60185),
        fe = a(21339)
      const ye = a.p + 'static/media/8.35ee8919ea545620a475.jpg'
      var Ne = a(70467),
        Ue = a(94239),
        Ce = a(99291),
        Ze = a(67148),
        ze = a(28441)
      const ke = () => {
          const e = (0, o.s0)(),
            n = (0, J.I0)()
          return (0, R.jsxs)(se.w, {
            variant: 'nav-item',
            children: [
              (0, R.jsx)(ce.S, {
                placement: 'bottom-end',
                className: 'py-0 pe-0',
                caret: !1,
                children: (0, R.jsx)(je.c, { src: ye, size: 'md' }),
              }),
              (0, R.jsxs)(me.$, {
                className: 'pt-0',
                placement: 'bottom-end',
                children: [
                  (0, R.jsxs)(ie.$, {
                    href: '#',
                    children: [
                      (0, R.jsx)(le.Z, { icon: ve.M, className: 'me-2' }),
                      'Account Settings',
                    ],
                  }),
                  (0, R.jsxs)(ie.$, {
                    href: '#',
                    children: [
                      (0, R.jsx)(Ze.G, { icon: ze.FDd, className: 'me-2' }),
                      'Support Center',
                    ],
                  }),
                  (0, R.jsxs)(ie.$, {
                    href: '#',
                    children: [
                      (0, R.jsx)(le.Z, { icon: ge.W, className: 'me-2' }),
                      'Attend Training',
                    ],
                  }),
                  (0, R.jsxs)(ie.$, {
                    href: '#',
                    onClick: async () => {
                      try {
                        const a = await Ue.Z.post('/logout')
                        200 === a.status &&
                          (Ce.Am.success(a.data.message), n((0, Ne.ls)()), e('/login'))
                      } catch (a) {
                        console.error('API request failed:', a)
                      }
                    },
                    children: [(0, R.jsx)(le.Z, { icon: fe.V, className: 'me-2' }), 'Logout'],
                  }),
                ],
              }),
            ],
          })
        },
        Se = () => {
          const e = (0, t.useRef)(),
            { colorMode: n, setColorMode: a } = (0, Y.d)('coreui-free-react-admin-template-theme'),
            o = (0, J.I0)(),
            s = (0, J.v9)((e) => e.sidebarShow)
          return (
            (0, t.useEffect)(() => {
              document.addEventListener('scroll', () => {
                e.current &&
                  e.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
              })
            }, []),
            (0, R.jsxs)(ee.P, {
              position: 'sticky',
              className: 'mb-4 p-0',
              ref: e,
              children: [
                (0, R.jsxs)(H.K, {
                  className: 'border-bottom px-4',
                  fluid: !0,
                  children: [
                    (0, R.jsx)(ne.X, {
                      onClick: () => o({ type: 'set', sidebarShow: !s }),
                      style: { marginInlineStart: '-14px' },
                      children: (0, R.jsx)(le.Z, { icon: re.N, size: 'lg' }),
                    }),
                    (0, R.jsxs)(ae.g, {
                      className: 'd-none d-md-flex',
                      children: [
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, {
                            to: '/dashboard',
                            component: Q.OL,
                            children: 'Dashboard',
                          }),
                        }),
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, { href: '#', children: 'Users' }),
                        }),
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, { href: '#', children: 'Settings' }),
                        }),
                      ],
                    }),
                    (0, R.jsxs)(ae.g, {
                      className: 'ms-auto',
                      children: [
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, {
                            href: '#',
                            children: (0, R.jsx)(le.Z, { icon: he.$, size: 'lg' }),
                          }),
                        }),
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, {
                            href: '#',
                            children: (0, R.jsx)(le.Z, { icon: de.A, size: 'lg' }),
                          }),
                        }),
                        (0, R.jsx)(te.U, {
                          children: (0, R.jsx)(oe.A, {
                            href: '#',
                            children: (0, R.jsx)(le.Z, { icon: pe.m, size: 'lg' }),
                          }),
                        }),
                      ],
                    }),
                    (0, R.jsxs)(ae.g, {
                      children: [
                        (0, R.jsx)('li', {
                          className: 'nav-item py-1',
                          children: (0, R.jsx)('div', {
                            className: 'vr h-100 mx-2 text-body text-opacity-75',
                          }),
                        }),
                        (0, R.jsxs)(se.w, {
                          variant: 'nav-item',
                          placement: 'bottom-end',
                          children: [
                            (0, R.jsx)(ce.S, {
                              caret: !1,
                              children:
                                'dark' === n
                                  ? (0, R.jsx)(le.Z, { icon: xe.S, size: 'lg' })
                                  : 'auto' === n
                                    ? (0, R.jsx)(le.Z, { icon: be.j, size: 'lg' })
                                    : (0, R.jsx)(le.Z, { icon: ue.O, size: 'lg' }),
                            }),
                            (0, R.jsxs)(me.$, {
                              children: [
                                (0, R.jsxs)(ie.$, {
                                  active: 'light' === n,
                                  className: 'd-flex align-items-center',
                                  component: 'button',
                                  type: 'button',
                                  onClick: () => a('light'),
                                  children: [
                                    (0, R.jsx)(le.Z, { className: 'me-2', icon: ue.O, size: 'lg' }),
                                    ' Light',
                                  ],
                                }),
                                (0, R.jsxs)(ie.$, {
                                  active: 'dark' === n,
                                  className: 'd-flex align-items-center',
                                  component: 'button',
                                  type: 'button',
                                  onClick: () => a('dark'),
                                  children: [
                                    (0, R.jsx)(le.Z, { className: 'me-2', icon: xe.S, size: 'lg' }),
                                    ' Dark',
                                  ],
                                }),
                                (0, R.jsxs)(ie.$, {
                                  active: 'auto' === n,
                                  className: 'd-flex align-items-center',
                                  component: 'button',
                                  type: 'button',
                                  onClick: () => a('auto'),
                                  children: [
                                    (0, R.jsx)(le.Z, { className: 'me-2', icon: be.j, size: 'lg' }),
                                    ' Auto',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, R.jsx)('li', {
                          className: 'nav-item py-1',
                          children: (0, R.jsx)('div', {
                            className: 'vr h-100 mx-2 text-body text-opacity-75',
                          }),
                        }),
                        (0, R.jsx)(ke, {}),
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(H.K, { className: 'px-4', fluid: !0, children: (0, R.jsx)(D, {}) }),
              ],
            })
          )
        }
      var Ae = a(82975),
        Le = a(28361),
        we = a(24071),
        Ve = a(95117),
        Me = a(36407),
        Pe = a(47663),
        Ie = a(82681),
        Be = a(57247)
      const _e = (e) => {
          let { items: n } = e
          const a = (0, o.TH)(),
            s = function (e, n, a) {
              let t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              return (0, R.jsxs)(R.Fragment, {
                children: [
                  n ||
                    (t &&
                      (0, R.jsx)('span', {
                        className: 'nav-icon',
                        children: (0, R.jsx)('span', { className: 'nav-icon-bullet' }),
                      })),
                  e && e,
                  a && (0, R.jsx)(Be.C, { color: a.color, className: 'ms-auto', children: a.text }),
                ],
              })
            },
            c = function (e, n) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              const { component: o, name: c, badge: m, icon: i, ...l } = e,
                r = o
              return (0, t.createElement)(
                r,
                { ...(l.to && !l.items && { component: Q.OL }), key: n, ...l },
                s(c, i, m, a),
              )
            },
            m = (e, n) => {
              var t
              const { component: o, name: i, icon: l, items: r, to: h, ...d } = e,
                p = o
              return (0, R.jsx)(
                p,
                {
                  compact: !0,
                  idx: String(n),
                  toggler: s(i, l),
                  visible: a.pathname.startsWith(h),
                  ...d,
                  children:
                    null === (t = e.items) || void 0 === t
                      ? void 0
                      : t.map((e, n) => (e.items ? m(e, n) : c(e, n, !0))),
                },
                n,
              )
            }
          return (0, R.jsx)(t.Fragment, {
            children: n && n.map((e, n) => (e.items ? m(e, n) : c(e, n))),
          })
        },
        Fe = [
          '599 116',
          '<g>\n    <g fill="none" fill-rule="nonzero">\n      <g style="fill:#80d0ff;">\n        <path d="m358.773 79.151-8.768-20.736a.25.25 0 0 0-.255-.191h-9.985a.226.226 0 0 0-.256.255v20.543a.566.566 0 0 1-.64.641h-1.216a.565.565 0 0 1-.64-.64v-43.52a.566.566 0 0 1 .64-.64h12.544a9.979 9.979 0 0 1 7.744 3.23 12.204 12.204 0 0 1 2.944 8.546 12.439 12.439 0 0 1-2.24 7.584 9.37 9.37 0 0 1-6.08 3.744c-.17.086-.214.191-.127.32l8.704 20.608.064.255c0 .342-.192.512-.576.512h-1.152a.703.703 0 0 1-.705-.51Zm-19.264-41.793v18.496a.226.226 0 0 0 .256.257h10.304a7.669 7.669 0 0 0 6.017-2.592 9.878 9.878 0 0 0 2.303-6.816 10.286 10.286 0 0 0-2.272-6.976 7.601 7.601 0 0 0-6.048-2.624h-10.304a.226.226 0 0 0-.256.255ZM398.082 37.102H378.05a.226.226 0 0 0-.256.256v18.496a.226.226 0 0 0 .256.257h13.824a.566.566 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64H378.05a.226.226 0 0 0-.256.256v18.56a.226.226 0 0 0 .256.256h20.032a.567.567 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64h-22.144a.566.566 0 0 1-.64-.64v-43.52a.566.566 0 0 1 .64-.64h22.144a.566.566 0 0 1 .64.64v.96a.566.566 0 0 1-.64.64ZM435.802 79.151l-2.431-8.832a.296.296 0 0 0-.32-.192h-16.768a.295.295 0 0 0-.32.192l-2.368 8.768a.658.658 0 0 1-.704.576h-1.216a.588.588 0 0 1-.48-.191.582.582 0 0 1-.096-.513l12.031-43.584a.644.644 0 0 1 .704-.512h1.6a.644.644 0 0 1 .704.512l12.16 43.584.065.192c0 .342-.214.512-.64.512h-1.217a.643.643 0 0 1-.704-.512ZM416.7 67.92a.303.303 0 0 0 .223.096h15.489a.304.304 0 0 0 .223-.096c.065-.065.075-.117.033-.16l-7.873-28.928c-.043-.085-.085-.128-.127-.128-.042 0-.086.043-.128.128l-7.872 28.928c-.043.043-.033.095.032.16ZM453.357 76.911a11.637 11.637 0 0 1-3.328-8.704V46.19a11.414 11.414 0 0 1 3.36-8.575 12.09 12.09 0 0 1 8.8-3.265 12.253 12.253 0 0 1 8.865 3.233 11.39 11.39 0 0 1 3.36 8.607v.64a.566.566 0 0 1-.641.641l-1.28.064c-.427 0-.64-.192-.64-.576v-.833a9.287 9.287 0 0 0-2.656-6.912 10.67 10.67 0 0 0-14.016 0 9.284 9.284 0 0 0-2.656 6.913v22.272a9.282 9.282 0 0 0 2.656 6.912 10.673 10.673 0 0 0 14.016 0 9.286 9.286 0 0 0 2.656-6.912v-.768c0-.384.213-.576.64-.575l1.28.063a.566.566 0 0 1 .64.64v.511a11.498 11.498 0 0 1-3.36 8.64 13.626 13.626 0 0 1-17.696 0v.001ZM511.193 35.503v.96a.565.565 0 0 1-.64.64H499.8a.226.226 0 0 0-.256.256v41.663a.566.566 0 0 1-.64.641h-1.216a.565.565 0 0 1-.64-.64V37.357a.227.227 0 0 0-.256-.255h-10.176a.565.565 0 0 1-.64-.64v-.96a.566.566 0 0 1 .64-.64h23.936a.566.566 0 0 1 .64.64ZM518.822 78.51a2.835 2.835 0 0 1-.8-2.047 2.923 2.923 0 0 1 .8-2.112c.544-.56 1.3-.862 2.08-.832a2.847 2.847 0 0 1 2.944 2.944c.03.78-.273 1.536-.832 2.08a2.921 2.921 0 0 1-2.112.8 2.754 2.754 0 0 1-2.08-.832ZM539.16 77.007a11.31 11.31 0 0 1-3.2-8.416v-5.44a.566.566 0 0 1 .64-.64h1.217a.567.567 0 0 1 .64.64v5.504a9.144 9.144 0 0 0 2.528 6.72 8.974 8.974 0 0 0 6.687 2.56 8.79 8.79 0 0 0 9.28-9.28V35.504a.565.565 0 0 1 .64-.64h1.217a.566.566 0 0 1 .64.64V68.59a11.252 11.252 0 0 1-3.233 8.416 13.062 13.062 0 0 1-17.055 0ZM577.106 77.102a10.482 10.482 0 0 1-3.36-8.127v-1.792a.565.565 0 0 1 .64-.64h1.088a.566.566 0 0 1 .64.64v1.6a8.544 8.544 0 0 0 2.752 6.655 10.536 10.536 0 0 0 7.36 2.496 9.876 9.876 0 0 0 6.976-2.367 8.215 8.215 0 0 0 2.56-6.336 8.397 8.397 0 0 0-1.12-4.416 11.383 11.383 0 0 0-3.328-3.392 71.626 71.626 0 0 0-6.176-3.712 71.302 71.302 0 0 1-6.24-3.84 12.174 12.174 0 0 1-3.424-3.68 10.257 10.257 0 0 1-1.28-5.345 9.86 9.86 0 0 1 3.072-7.744 12.012 12.012 0 0 1 8.32-2.752c3.796 0 6.783 1.035 8.96 3.105a10.823 10.823 0 0 1 3.264 8.224v1.6a.566.566 0 0 1-.64.64h-1.152a.565.565 0 0 1-.64-.64v-1.471a8.865 8.865 0 0 0-2.624-6.689 9.994 9.994 0 0 0-7.232-2.528 9.365 9.365 0 0 0-6.528 2.144 7.822 7.822 0 0 0-2.368 6.112 7.8 7.8 0 0 0 1.024 4.16 10.376 10.376 0 0 0 3.008 3.04 62.829 62.829 0 0 0 5.952 3.488 71.058 71.058 0 0 1 6.72 4.256 13.454 13.454 0 0 1 3.648 3.936 10.049 10.049 0 0 1 1.28 5.184 10.714 10.714 0 0 1-3.264 8.191c-2.175 2.05-5.12 3.073-8.832 3.073-3.798 0-6.817-1.024-9.057-3.073Z"/>\n      </g>\n      <g style="fill:currentColor;">\n        <path d="m96.59 25.058-39-22.517a12 12 0 0 0-12 0l-39 22.517a12.034 12.034 0 0 0-6 10.392v45.033a12.033 12.033 0 0 0 6 10.393l39 22.516a12 12 0 0 0 12 0l39-22.516a12.033 12.033 0 0 0 6-10.393V35.45a12.034 12.034 0 0 0-6-10.392Zm-2 55.425a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0l-39-22.517a4 4 0 0 1-2-3.464V35.45a4 4 0 0 1 2-3.464l39-22.517a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464v45.033Z"/>\n        <path d="M74.612 71.005h-2.866c-.673 0-1.335.17-1.925.493l-17.28 9.485L32.59 69.465V46.487L52.54 34.97l17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.712a2 2 0 0 0-1.04-1.754L56.383 27.952a8.039 8.039 0 0 0-7.842.09L28.59 39.56a8.025 8.025 0 0 0-4 6.929v22.976a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.087l19.19-10.53a2 2 0 0 0 1.038-1.754v-2.71a2 2 0 0 0-1.999-2Z"/>\n        <g transform="translate(118 34)">\n          <path d="M51.335.362c-8.28.009-14.99 6.719-15 15v17.277c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V15.36c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.36a7 7 0 0 1 14 0V32.64ZM14.67 8.421a7.01 7.01 0 0 1 7.867 6.075.99.99 0 0 0 .985.865h6.03a1.01 1.01 0 0 0 .998-1.097C29.945 6.14 22.971-.02 14.834.381 6.751.932.504 7.696.59 15.796v16.407C.503 40.305 6.752 47.068 14.835 47.62c8.137.401 15.11-5.76 15.716-13.884a1.01 1.01 0 0 0-.999-1.097h-6.03a.99.99 0 0 0-.984.865 7.01 7.01 0 0 1-7.868 6.075 7.164 7.164 0 0 1-6.08-7.184v-16.79a7.164 7.164 0 0 1 6.08-7.184ZM97.513 27.928a12.158 12.158 0 0 0 7.184-11.077v-3.702C104.697 6.44 99.257 1 92.547 1H75.59a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V29h6.621l7.916 17.414a1 1 0 0 0 .91.586h6.591a1 1 0 0 0 .91-1.414l-8.025-17.658Zm-.816-11.077A4.154 4.154 0 0 1 92.547 21h-9.85V9h9.85a4.154 4.154 0 0 1 4.15 4.15v3.7ZM139.59 1h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19V27h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13V9h19a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM177.59 1h-6a1 1 0 0 0-1 1v22.648a7.007 7.007 0 1 1-14 0V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.648a15.003 15.003 0 1 0 30 0V2a1 1 0 0 0-1-1Z"/>\n          <rect width="8" height="38" x="186.59" y="1" rx="1"/>\n        </g>\n      </g>\n    </g>\n  </g>',
        ],
        Te = [
          '102 115',
          '<g style="fill: currentColor">\n    <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"/>\n    <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"/>\n  </g>',
        ]
      var Ee = a(45923),
        Re = (a(91814), a(77133)),
        $e = a(63523),
        De = a(58500),
        He = a(61869),
        We = a(6211),
        qe = a(25850),
        Ge = a(16726),
        Oe = a(51886),
        Ke = a(81550),
        Xe = a(45179),
        Qe = a(90964),
        Je = a(2154),
        Ye = a(49083),
        en = a(65969)
      const nn = [
          {
            component: te.U,
            name: 'All items',
            to: '/dashboard',
            icon: (0, R.jsx)(le.Z, { icon: Re.I, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Sharing Center',
            to: '/theme/colors',
            icon: (0, R.jsx)(le.Z, { icon: $e.M, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Passwords',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: De.U, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Notes',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: He.E, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Addresses',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: We.M, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Payment Cards',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: ge.W, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Bank Accounts',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: qe.S, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Security Dashboard',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: qe.S, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Emergency Access',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: qe.S, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Account Settings',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: ve.M, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Advanced Options',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: qe.S, customClassName: 'nav-icon' }),
          },
          {
            component: te.U,
            name: 'Help',
            to: '/theme/typography',
            icon: (0, R.jsx)(le.Z, { icon: qe.S, customClassName: 'nav-icon' }),
          },
          {
            component: Ye.d,
            name: 'Base',
            to: '/base',
            icon: (0, R.jsx)(le.Z, { icon: Ge.Q, customClassName: 'nav-icon' }),
            items: [
              { component: te.U, name: 'Accordion', to: '/base/accordion' },
              { component: te.U, name: 'Breadcrumb', to: '/base/breadcrumbs' },
              { component: te.U, name: 'Cards', to: '/base/cards' },
              { component: te.U, name: 'Carousel', to: '/base/carousels' },
              { component: te.U, name: 'Collapse', to: '/base/collapses' },
              { component: te.U, name: 'List group', to: '/base/list-groups' },
              { component: te.U, name: 'Navs & Tabs', to: '/base/navs' },
              { component: te.U, name: 'Pagination', to: '/base/paginations' },
              { component: te.U, name: 'Placeholders', to: '/base/placeholders' },
              { component: te.U, name: 'Popovers', to: '/base/popovers' },
              { component: te.U, name: 'Progress', to: '/base/progress' },
              { component: te.U, name: 'Spinners', to: '/base/spinners' },
              { component: te.U, name: 'Tables', to: '/base/tables' },
              { component: te.U, name: 'Tooltips', to: '/base/tooltips' },
            ],
          },
          {
            component: Ye.d,
            name: 'Buttons',
            to: '/buttons',
            icon: (0, R.jsx)(le.Z, { icon: Oe.t, customClassName: 'nav-icon' }),
            items: [
              { component: te.U, name: 'Buttons', to: '/buttons/buttons' },
              { component: te.U, name: 'Buttons groups', to: '/buttons/button-groups' },
              { component: te.U, name: 'Dropdowns', to: '/buttons/dropdowns' },
            ],
          },
          {
            component: Ye.d,
            name: 'Forms',
            icon: (0, R.jsx)(le.Z, { icon: He.E, customClassName: 'nav-icon' }),
            items: [
              { component: te.U, name: 'Form Control', to: '/forms/form-control' },
              { component: te.U, name: 'Select', to: '/forms/select' },
              { component: te.U, name: 'Checks & Radios', to: '/forms/checks-radios' },
              { component: te.U, name: 'Range', to: '/forms/range' },
              { component: te.U, name: 'Input Group', to: '/forms/input-group' },
              { component: te.U, name: 'Floating Labels', to: '/forms/floating-labels' },
              { component: te.U, name: 'Layout', to: '/forms/layout' },
              { component: te.U, name: 'Validation', to: '/forms/validation' },
            ],
          },
          {
            component: te.U,
            name: 'Charts',
            to: '/charts',
            icon: (0, R.jsx)(le.Z, { icon: Ke.M, customClassName: 'nav-icon' }),
          },
          {
            component: Ye.d,
            name: 'Icons',
            icon: (0, R.jsx)(le.Z, { icon: Xe.m, customClassName: 'nav-icon' }),
            items: [
              {
                component: te.U,
                name: 'CoreUI Free',
                to: '/icons/coreui-icons',
                badge: { color: 'success', text: 'NEW' },
              },
              { component: te.U, name: 'CoreUI Flags', to: '/icons/flags' },
              { component: te.U, name: 'CoreUI Brands', to: '/icons/brands' },
            ],
          },
          {
            component: Ye.d,
            name: 'Notifications',
            icon: (0, R.jsx)(le.Z, { icon: he.$, customClassName: 'nav-icon' }),
            items: [
              { component: te.U, name: 'Alerts', to: '/notifications/alerts' },
              { component: te.U, name: 'Badges', to: '/notifications/badges' },
              { component: te.U, name: 'Modal', to: '/notifications/modals' },
              { component: te.U, name: 'Toasts', to: '/notifications/toasts' },
            ],
          },
          {
            component: te.U,
            name: 'Widgets',
            to: '/widgets',
            icon: (0, R.jsx)(le.Z, { icon: Qe.o, customClassName: 'nav-icon' }),
            badge: { color: 'info', text: 'NEW' },
          },
          { component: en.f, name: 'Extras' },
          {
            component: Ye.d,
            name: 'Pages',
            icon: (0, R.jsx)(le.Z, { icon: Xe.m, customClassName: 'nav-icon' }),
            items: [
              { component: te.U, name: 'Login', to: '/login' },
              { component: te.U, name: 'Register', to: '/register' },
              { component: te.U, name: 'Error 404', to: '/404' },
              { component: te.U, name: 'Error 500', to: '/500' },
            ],
          },
          {
            component: te.U,
            name: 'Docs',
            href: 'https://coreui.io/react/docs/templates/installation/',
            icon: (0, R.jsx)(le.Z, { icon: Je.G, customClassName: 'nav-icon' }),
          },
        ],
        an = () => {
          const e = (0, J.I0)(),
            n = (0, J.v9)((e) => e.sidebarUnfoldable),
            a = (0, J.v9)((e) => e.sidebarShow)
          return (0, R.jsxs)(Ae.z, {
            className: 'border-end',
            colorScheme: 'dark',
            position: 'fixed',
            unfoldable: n,
            visible: a,
            onVisibleChange: (n) => {
              e({ type: 'set', sidebarShow: n })
            },
            children: [
              (0, R.jsxs)(Le.c, {
                className: 'border-bottom',
                children: [
                  (0, R.jsxs)(we.D, {
                    to: '/',
                    children: [
                      (0, R.jsx)(le.Z, {
                        customClassName: 'sidebar-brand-full',
                        icon: Fe,
                        height: 32,
                      }),
                      (0, R.jsx)(le.Z, {
                        customClassName: 'sidebar-brand-narrow',
                        icon: Te,
                        height: 32,
                      }),
                    ],
                  }),
                  (0, R.jsx)(Ve.p, {
                    className: 'd-lg-none',
                    dark: !0,
                    onClick: () => e({ type: 'set', sidebarShow: !1 }),
                  }),
                ],
              }),
              (0, R.jsx)(Me.X, {
                children: (0, R.jsx)(Ee.Z, { children: (0, R.jsx)(_e, { items: nn }) }),
              }),
              (0, R.jsx)(Pe.o, {
                className: 'border-top d-none d-lg-flex',
                children: (0, R.jsx)(Ie.i, {
                  onClick: () => e({ type: 'set', sidebarUnfoldable: !n }),
                }),
              }),
            ],
          })
        },
        tn = t.memo(an)
      var on = a(58147),
        sn = a(83628)
      const cn = (e) => {
          const { content: n, href: a, name: t } = e,
            o = 's' === t.slice(-1),
            s = 'https://coreui.io/react/docs/'.concat(a)
          return (0, R.jsxs)(on.e, {
            color: 'info',
            className: 'bg-white',
            children: [
              n ||
                'A React '
                  .concat(t, ' component ')
                  .concat(
                    o ? 'have' : 'has',
                    ' been created as a native React.js version\n      of Bootstrap ',
                  )
                  .concat(t, '. ')
                  .concat(t, ' ')
                  .concat(
                    o ? 'are' : 'is',
                    ' delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements.',
                  ),
              (0, R.jsx)('br', {}),
              (0, R.jsx)('br', {}),
              'For more information please visit our official',
              ' ',
              (0, R.jsx)(sn.h, {
                href: s,
                target: '_blank',
                children: 'documentation of CoreUI Components Library for React.js',
              }),
              '.',
            ],
          })
        },
        mn = t.memo(cn),
        ln = (e) => {
          const { href: n, name: a, text: t, ...o } = e,
            s = a ? 'https://coreui.io/react/docs/components/'.concat(a) : n
          return (0, R.jsx)('div', {
            className: 'float-end',
            children: (0, R.jsx)(sn.h, {
              ...o,
              href: s,
              rel: 'noreferrer noopener',
              target: '_blank',
              className: 'card-header-action',
              children: (0, R.jsx)('small', {
                className: 'text-body-secondary',
                children: t || 'docs',
              }),
            }),
          })
        },
        rn = t.memo(ln)
      var hn = a(97677),
        dn = a(15881),
        pn = a(72064),
        xn = a(73684),
        bn = a(21235)
      const un = (e) => {
          const { children: n, href: a, tabContentClassName: t } = e,
            o = 'https://coreui.io/react/docs/'.concat(a)
          return (0, R.jsxs)('div', {
            className: 'example',
            children: [
              (0, R.jsxs)(hn.n, {
                variant: 'underline-border',
                children: [
                  (0, R.jsx)(te.U, {
                    children: (0, R.jsxs)(oe.A, {
                      href: '#',
                      active: !0,
                      children: [(0, R.jsx)(le.Z, { icon: xn.B, className: 'me-2' }), 'Preview'],
                    }),
                  }),
                  (0, R.jsx)(te.U, {
                    children: (0, R.jsxs)(oe.A, {
                      href: o,
                      target: '_blank',
                      children: [(0, R.jsx)(le.Z, { icon: bn.I, className: 'me-2' }), 'Code'],
                    }),
                  }),
                ],
              }),
              (0, R.jsx)(dn.g, {
                className: 'rounded-bottom '.concat(t || ''),
                children: (0, R.jsx)(pn.f, { className: 'p-3 preview', visible: !0, children: n }),
              }),
            ],
          })
        },
        jn = t.memo(un)
    },
    9723: (e, n, a) => {
      a.r(n), a.d(n, { default: () => s })
      a(28381)
      var t = a(54908),
        o = a(29343)
      const s = () =>
        (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(t.S8, {}),
            (0, o.jsxs)('div', {
              className: 'wrapper d-flex flex-column min-vh-100',
              children: [
                (0, o.jsx)(t.tf, {}),
                (0, o.jsx)('div', {
                  className: 'body flex-grow-1',
                  children: (0, o.jsx)(t.Lk, {}),
                }),
                (0, o.jsx)(t.qh, {}),
              ],
            }),
          ],
        })
    },
    94239: (e, n, a) => {
      a.d(n, { Z: () => m })
      var t = a(24902),
        o = a(54923),
        s = a(70467)
      const c = t.Z.create({
        baseURL: 'https://evergreenbraindev.com/lastpass/backend/public/api/',
      })
      c.interceptors.request.use((e) => {
        const n = (0, s.rK)(o.Z.getState())
        return n && (e.headers.Authorization = 'Bearer '.concat(n)), e
      })
      const m = c
    },
  },
])
//# sourceMappingURL=1996.7b395909.chunk.js.map
