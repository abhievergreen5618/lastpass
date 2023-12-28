'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1693],
  {
    31693: (e, s, i) => {
      i.r(s), i.d(s, { default: () => m })
      var l = i(28381),
        r = i(48917),
        n = i(5640),
        c = i(13609),
        a = i(42177),
        t = i(45813),
        d = i(79361),
        h = i(96482),
        o = i(54908),
        x = i(29343)
      const m = () => {
        const [e, s] = (0, l.useState)(!1),
          [i, m] = (0, l.useState)(!1),
          [u, j] = (0, l.useState)(!1),
          [p, b] = (0, l.useState)(!1)
        return (0, x.jsxs)(r.r, {
          children: [
            (0, x.jsx)(n.b, {
              xs: 12,
              children: (0, x.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, x.jsx)(a.b, {
                    children: (0, x.jsx)('strong', { children: 'React Collapse' }),
                  }),
                  (0, x.jsxs)(t.s, {
                    children: [
                      (0, x.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'You can use a link or a button component.',
                      }),
                      (0, x.jsxs)(o.q3, {
                        href: 'components/collapse',
                        children: [
                          (0, x.jsx)(d.u, {
                            href: '#',
                            onClick: (i) => {
                              i.preventDefault(), s(!e)
                            },
                            children: 'Link',
                          }),
                          (0, x.jsx)(d.u, {
                            color: 'primary',
                            onClick: () => s(!e),
                            children: 'Button',
                          }),
                          (0, x.jsx)(h.V, {
                            visible: e,
                            children: (0, x.jsx)(c.x, {
                              className: 'mt-3',
                              children: (0, x.jsx)(t.s, {
                                children:
                                  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, x.jsx)(n.b, {
              xs: 12,
              children: (0, x.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, x.jsxs)(a.b, {
                    children: [
                      (0, x.jsx)('strong', { children: 'React Collapse' }),
                      ' ',
                      (0, x.jsx)('small', { children: ' Horizontal' }),
                    ],
                  }),
                  (0, x.jsxs)(t.s, {
                    children: [
                      (0, x.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'You can use a link or a button component.',
                      }),
                      (0, x.jsxs)(o.q3, {
                        href: 'components/collapse#horizontal',
                        children: [
                          (0, x.jsx)(d.u, {
                            className: 'mb-3',
                            onClick: () => m(!i),
                            'aria-expanded': i,
                            'aria-controls': 'collapseWidthExample',
                            children: 'Button',
                          }),
                          (0, x.jsx)('div', {
                            style: { minHeight: '120px' },
                            children: (0, x.jsx)(h.V, {
                              id: 'collapseWidthExample',
                              horizontal: !0,
                              visible: i,
                              children: (0, x.jsx)(c.x, {
                                style: { width: '300px' },
                                children: (0, x.jsx)(t.s, {
                                  children:
                                    "This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, x.jsx)(n.b, {
              xs: 12,
              children: (0, x.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, x.jsxs)(a.b, {
                    children: [
                      (0, x.jsx)('strong', { children: 'React Collapse' }),
                      ' ',
                      (0, x.jsx)('small', { children: ' multi target' }),
                    ],
                  }),
                  (0, x.jsxs)(t.s, {
                    children: [
                      (0, x.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'A ',
                          (0, x.jsx)('code', { children: '<CButton>' }),
                          ' can show and hide multiple elements.',
                        ],
                      }),
                      (0, x.jsxs)(o.q3, {
                        href: 'components/collapse#multiple-targets',
                        children: [
                          (0, x.jsx)(d.u, {
                            color: 'primary',
                            onClick: () => j(!u),
                            children: 'Toggle first element',
                          }),
                          (0, x.jsx)(d.u, {
                            color: 'primary',
                            onClick: () => b(!p),
                            children: 'Toggle second element',
                          }),
                          (0, x.jsx)(d.u, {
                            onClick: () => {
                              j(!u), b(!p)
                            },
                            children: 'Toggle both elements',
                          }),
                          (0, x.jsxs)(r.r, {
                            children: [
                              (0, x.jsx)(n.b, {
                                xs: 6,
                                children: (0, x.jsx)(h.V, {
                                  visible: u,
                                  children: (0, x.jsx)(c.x, {
                                    className: 'mt-3',
                                    children: (0, x.jsx)(t.s, {
                                      children:
                                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                                    }),
                                  }),
                                }),
                              }),
                              (0, x.jsx)(n.b, {
                                xs: 6,
                                children: (0, x.jsx)(h.V, {
                                  visible: p,
                                  children: (0, x.jsx)(c.x, {
                                    className: 'mt-3',
                                    children: (0, x.jsx)(t.s, {
                                      children:
                                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                                    }),
                                  }),
                                }),
                              }),
                            ],
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
      }
    },
  },
])
//# sourceMappingURL=1693.0ba687bc.chunk.js.map
