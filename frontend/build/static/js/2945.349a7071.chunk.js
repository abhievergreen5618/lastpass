'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2945],
  {
    22945: (e, s, n) => {
      n.r(s), n.d(s, { default: () => x })
      n(28381)
      var r = n(48917),
        t = n(5640),
        o = n(13609),
        c = n(42177),
        a = n(45813),
        l = n(79361),
        i = n(69557),
        d = n(60604),
        h = n(54908),
        m = n(29343)
      const x = () =>
        (0, m.jsxs)(r.r, {
          children: [
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsx)(c.b, { children: (0, m.jsx)('strong', { children: 'React Button' }) }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.',
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          (0, m.jsxs)(
                            r.r,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                (0, m.jsx)(t.b, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                (0, m.jsxs)(t.b, {
                                  xs: !0,
                                  children: [
                                    [
                                      'primary',
                                      'secondary',
                                      'success',
                                      'danger',
                                      'warning',
                                      'info',
                                      'light',
                                      'dark',
                                    ].map((s, n) =>
                                      (0, m.jsx)(
                                        l.u,
                                        {
                                          color: s,
                                          active: 'active' === e,
                                          disabled: 'disabled' === e,
                                          children: s.charAt(0).toUpperCase() + s.slice(1),
                                        },
                                        n,
                                      ),
                                    ),
                                    (0, m.jsx)(l.u, { color: 'link', children: 'Link' }),
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'with icons' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'You can combine button with our ',
                          (0, m.jsx)('a', {
                            href: 'https://coreui.io/icons/',
                            children: 'CoreUI Icons',
                          }),
                          '.',
                        ],
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          (0, m.jsxs)(
                            r.r,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                (0, m.jsx)(t.b, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                (0, m.jsxs)(t.b, {
                                  xs: !0,
                                  children: [
                                    [
                                      'primary',
                                      'secondary',
                                      'success',
                                      'danger',
                                      'warning',
                                      'info',
                                      'light',
                                      'dark',
                                    ].map((s, n) =>
                                      (0, m.jsxs)(
                                        l.u,
                                        {
                                          color: s,
                                          active: 'active' === e,
                                          disabled: 'disabled' === e,
                                          children: [
                                            (0, m.jsx)(i.Z, { icon: d.$, className: 'me-2' }),
                                            s.charAt(0).toUpperCase() + s.slice(1),
                                          ],
                                        },
                                        n,
                                      ),
                                    ),
                                    (0, m.jsxs)(l.u, {
                                      color: 'link',
                                      children: [
                                        (0, m.jsx)(i.Z, { icon: d.$, className: 'me-2' }),
                                        'Link',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Button components' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'The ',
                          (0, m.jsx)('code', { children: '<CButton>' }),
                          ' component are designed for',
                          ' ',
                          (0, m.jsx)('code', { children: '<button>' }),
                          ' , ',
                          (0, m.jsx)('code', { children: '<a>' }),
                          ' or ',
                          (0, m.jsx)('code', { children: '<input>' }),
                          ' ',
                          'elements (though some browsers may apply a slightly different rendering).',
                        ],
                      }),
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "If you're using ",
                          (0, m.jsx)('code', { children: '<CButton>' }),
                          ' component as ',
                          (0, m.jsx)('code', { children: '<a>' }),
                          ' ',
                          'elements that are used to trigger functionality ex. collapsing content, these links should be given a ',
                          (0, m.jsx)('code', { children: 'role="button"' }),
                          ' to adequately communicate their meaning to assistive technologies such as screen readers.',
                        ],
                      }),
                      (0, m.jsxs)(h.q3, {
                        href: 'components/buttons#button-components',
                        children: [
                          (0, m.jsx)(l.u, {
                            component: 'a',
                            color: 'primary',
                            href: '#',
                            role: 'button',
                            children: 'Link',
                          }),
                          (0, m.jsx)(l.u, { type: 'submit', color: 'primary', children: 'Button' }),
                          (0, m.jsx)(l.u, {
                            component: 'input',
                            type: 'button',
                            color: 'primary',
                            value: 'Input',
                          }),
                          (0, m.jsx)(l.u, {
                            component: 'input',
                            type: 'submit',
                            color: 'primary',
                            value: 'Submit',
                          }),
                          (0, m.jsx)(l.u, {
                            component: 'input',
                            type: 'reset',
                            color: 'primary',
                            value: 'Reset',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'outline' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'If you need a button, but without the strong background colors. Set',
                          ' ',
                          (0, m.jsx)('code', { children: 'variant="outline"' }),
                          ' prop to remove all background colors.',
                        ],
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#outline-buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          (0, m.jsxs)(
                            r.r,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                (0, m.jsx)(t.b, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                (0, m.jsx)(t.b, {
                                  xs: !0,
                                  children: [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((s, n) =>
                                    (0, m.jsx)(
                                      l.u,
                                      {
                                        color: s,
                                        variant: 'outline',
                                        active: 'active' === e,
                                        disabled: 'disabled' === e,
                                        children: s.charAt(0).toUpperCase() + s.slice(1),
                                      },
                                      n,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'ghost' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'If you need a ghost variant of button, set ',
                          (0, m.jsx)('code', { children: 'variant="ghost"' }),
                          ' prop to remove all background colors.',
                        ],
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#ghost-buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          (0, m.jsxs)(
                            r.r,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                (0, m.jsx)(t.b, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                (0, m.jsx)(t.b, {
                                  xs: !0,
                                  children: [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((s, n) =>
                                    (0, m.jsx)(
                                      l.u,
                                      {
                                        color: s,
                                        variant: 'ghost',
                                        active: 'active' === e,
                                        disabled: 'disabled' === e,
                                        children: s.charAt(0).toUpperCase() + s.slice(1),
                                      },
                                      n,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Sizes' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Larger or smaller buttons? Add ',
                          (0, m.jsx)('code', { children: 'size="lg"' }),
                          ' or',
                          ' ',
                          (0, m.jsx)('code', { children: 'size="sm"' }),
                          ' for additional sizes.',
                        ],
                      }),
                      (0, m.jsxs)(h.q3, {
                        href: 'components/buttons#sizes',
                        children: [
                          (0, m.jsx)(l.u, {
                            color: 'primary',
                            size: 'lg',
                            children: 'Large button',
                          }),
                          (0, m.jsx)(l.u, {
                            color: 'secondary',
                            size: 'lg',
                            children: 'Large button',
                          }),
                        ],
                      }),
                      (0, m.jsxs)(h.q3, {
                        href: 'components/buttons#sizes',
                        children: [
                          (0, m.jsx)(l.u, {
                            color: 'primary',
                            size: 'sm',
                            children: 'Small button',
                          }),
                          (0, m.jsx)(l.u, {
                            color: 'secondary',
                            size: 'sm',
                            children: 'Small button',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Pill' }),
                    ],
                  }),
                  (0, m.jsx)(a.s, {
                    children: (0, m.jsx)(h.q3, {
                      href: 'components/buttons#pill-buttons',
                      children: [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                      ].map((e, s) =>
                        (0, m.jsx)(
                          l.u,
                          {
                            color: e,
                            shape: 'rounded-pill',
                            children: e.charAt(0).toUpperCase() + e.slice(1),
                          },
                          s,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Square' }),
                    ],
                  }),
                  (0, m.jsx)(a.s, {
                    children: (0, m.jsx)(h.q3, {
                      href: 'components/buttons#square',
                      children: [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                      ].map((e, s) =>
                        (0, m.jsx)(
                          l.u,
                          {
                            color: e,
                            shape: 'rounded-0',
                            children: e.charAt(0).toUpperCase() + e.slice(1),
                          },
                          s,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Disabled state' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add the ',
                          (0, m.jsx)('code', { children: 'disabled' }),
                          ' boolean prop to any ',
                          (0, m.jsx)('code', { children: '<CButton>' }),
                          ' ',
                          'component to make buttons look inactive. Disabled button has',
                          ' ',
                          (0, m.jsx)('code', { children: 'pointer-events: none' }),
                          ' applied to, disabling hover and active states from triggering.',
                        ],
                      }),
                      (0, m.jsxs)(h.q3, {
                        href: 'components/buttons#disabled-state',
                        children: [
                          (0, m.jsx)(l.u, {
                            color: 'primary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Primary button',
                          }),
                          (0, m.jsx)(l.u, {
                            color: 'secondary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Button',
                          }),
                        ],
                      }),
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Disabled buttons using the ',
                          (0, m.jsx)('code', { children: '<a>' }),
                          ' component act a little different:',
                        ],
                      }),
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          (0, m.jsx)('code', { children: '<a>' }),
                          "s don'tsupport the ",
                          (0, m.jsx)('code', { children: 'disabled' }),
                          ' attribute, so CoreUI has to add ',
                          (0, m.jsx)('code', { children: '.disabled' }),
                          ' className to make buttons look inactive. CoreUI also has to add to the disabled button component',
                          ' ',
                          (0, m.jsx)('code', { children: 'aria-disabled="true"' }),
                          ' attribute to show the state of the component to assistive technologies.',
                        ],
                      }),
                      (0, m.jsxs)(h.q3, {
                        href: 'components/buttons#disabled-state',
                        children: [
                          (0, m.jsx)(l.u, {
                            component: 'a',
                            href: '#',
                            color: 'primary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Primary link',
                          }),
                          (0, m.jsx)(l.u, {
                            component: 'a',
                            href: '#',
                            color: 'secondary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Link',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, m.jsx)(t.b, {
              xs: 12,
              children: (0, m.jsxs)(o.x, {
                className: 'mb-4',
                children: [
                  (0, m.jsxs)(c.b, {
                    children: [
                      (0, m.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      (0, m.jsx)('small', { children: 'Block buttons' }),
                    ],
                  }),
                  (0, m.jsxs)(a.s, {
                    children: [
                      (0, m.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Create buttons that span the full width of a parent\u2014by using utilities.',
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#block-buttons',
                        children: (0, m.jsxs)('div', {
                          className: 'd-grid gap-2',
                          children: [
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Here we create a responsive variation, starting with vertically stacked buttons until the ',
                          (0, m.jsx)('code', { children: 'md' }),
                          ' breakpoint, where ',
                          (0, m.jsx)('code', { children: '.d-md-block' }),
                          ' replaces the',
                          ' ',
                          (0, m.jsx)('code', { children: '.d-grid' }),
                          ' class, thus nullifying the ',
                          (0, m.jsx)('code', { children: 'gap-2' }),
                          ' utility. Resize your browser to see them change.',
                        ],
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#block-buttons',
                        children: (0, m.jsxs)('div', {
                          className: 'd-grid gap-2 d-md-block',
                          children: [
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      (0, m.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use ',
                          (0, m.jsx)('code', { children: '.col-6' }),
                          '. Center it horizontally with ',
                          (0, m.jsx)('code', { children: '.mx-auto' }),
                          ', too.',
                        ],
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#block-buttons',
                        children: (0, m.jsxs)('div', {
                          className: 'd-grid gap-2 col-6 mx-auto',
                          children: [
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      (0, m.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          "Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.",
                      }),
                      (0, m.jsx)(h.q3, {
                        href: 'components/buttons#block-buttons',
                        children: (0, m.jsxs)('div', {
                          className: 'd-grid gap-2 d-md-flex justify-content-md-end',
                          children: [
                            (0, m.jsx)(l.u, {
                              color: 'primary',
                              className: 'me-md-2',
                              children: 'Button',
                            }),
                            (0, m.jsx)(l.u, { color: 'primary', children: 'Button' }),
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
    13609: (e, s, n) => {
      n.d(s, { x: () => i })
      var r = n(50949),
        t = n(28381),
        o = n(34860),
        c = n.n(o),
        a = n(47577),
        l = n(37169),
        i = (0, t.forwardRef)(function (e, s) {
          var n,
            o = e.children,
            c = e.className,
            l = e.color,
            i = e.textColor,
            d = (0, r._T)(e, ['children', 'className', 'color', 'textColor'])
          return t.createElement(
            'div',
            (0, r.pi)(
              {
                className: (0, a.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(l)] = l), (n['text-'.concat(i)] = i), n),
                  c,
                ),
              },
              d,
              { ref: s },
            ),
            o,
          )
        })
      ;(i.propTypes = {
        children: c().node,
        className: c().string,
        color: l.$1,
        textColor: c().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, s, n) => {
      n.d(s, { s: () => l })
      var r = n(50949),
        t = n(28381),
        o = n(34860),
        c = n.n(o),
        a = n(47577),
        l = (0, t.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            c = (0, r._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, r.pi)({ className: (0, a.Z)('card-body', o) }, c, { ref: s }),
            n,
          )
        })
      ;(l.propTypes = { children: c().node, className: c().string }), (l.displayName = 'CCardBody')
    },
    42177: (e, s, n) => {
      n.d(s, { b: () => l })
      var r = n(50949),
        t = n(28381),
        o = n(34860),
        c = n.n(o),
        a = n(47577),
        l = (0, t.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.component,
            c = void 0 === o ? 'div' : o,
            l = e.className,
            i = (0, r._T)(e, ['children', 'component', 'className'])
          return t.createElement(
            c,
            (0, r.pi)({ className: (0, a.Z)('card-header', l) }, i, { ref: s }),
            n,
          )
        })
      ;(l.propTypes = { children: c().node, className: c().string, component: c().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (e, s, n) => {
      n.d(s, { b: () => i })
      var r = n(50949),
        t = n(28381),
        o = n(34860),
        c = n.n(o),
        a = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, t.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            c = (0, r._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var s = c[e]
              delete c[e]
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
            t.createElement(
              'div',
              (0, r.pi)({ className: (0, a.Z)(i.length > 0 ? i : 'col', o) }, c, { ref: s }),
              n,
            )
          )
        }),
        d = c().oneOfType([c().bool, c().number, c().string, c().oneOf(['auto'])]),
        h = c().oneOfType([
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
        t = n(28381),
        o = n(34860),
        c = n.n(o),
        a = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, t.forwardRef)(function (e, s) {
          var n = e.children,
            o = e.className,
            c = (0, r._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var s = c[e]
              delete c[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && i.push('row-cols'.concat(n, '-').concat(s.cols)),
                'number' === typeof s.gutter && i.push('g'.concat(n, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && i.push('gx'.concat(n, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && i.push('gy'.concat(n, '-').concat(s.gutterY)))
            }),
            t.createElement('div', { className: (0, a.Z)('row', i, o), ref: s }, n)
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
  },
])
//# sourceMappingURL=2945.349a7071.chunk.js.map
