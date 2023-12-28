'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9510],
  {
    59510: (e, s, n) => {
      n.r(s), n.d(s, { default: () => u })
      n(28381)
      var a = n(48917),
        l = n(5640),
        r = n(13609),
        i = n(42177),
        t = n(45813),
        c = n(27498),
        o = n(1915),
        d = n(57247),
        m = n(45088),
        h = n(54908),
        p = n(29343)
      const u = () =>
        (0, p.jsxs)(a.r, {
          children: [
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.',
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, { children: 'Cras justo odio' }),
                            (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                            (0, p.jsx)(o.E, { children: 'Morbi leo risus' }),
                            (0, p.jsx)(o.E, { children: 'Porta ac consectetur ac' }),
                            (0, p.jsx)(o.E, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Active items' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, p.jsx)('code', { children: 'active' }),
                          ' boolean property to a ',
                          (0, p.jsx)('code', { children: '<CListGroupItem>' }),
                          ' to show the current active selection.',
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#active-items',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, { active: !0, children: 'Cras justo odio' }),
                            (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                            (0, p.jsx)(o.E, { children: 'Morbi leo risus' }),
                            (0, p.jsx)(o.E, { children: 'Porta ac consectetur ac' }),
                            (0, p.jsx)(o.E, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Disabled items' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, p.jsx)('code', { children: 'disabled' }),
                          ' boolean property to a ',
                          (0, p.jsx)('code', { children: '<CListGroupItem>' }),
                          ' to make it appear disabled.',
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#disabled-items',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, { disabled: !0, children: 'Cras justo odio' }),
                            (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                            (0, p.jsx)(o.E, { children: 'Morbi leo risus' }),
                            (0, p.jsx)(o.E, { children: 'Porta ac consectetur ac' }),
                            (0, p.jsx)(o.E, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Links and buttons' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, p.jsx)('code', { children: '<a>' }),
                          's or ',
                          (0, p.jsx)('code', { children: '<button>' }),
                          's to create',
                          ' ',
                          (0, p.jsx)('em', { children: 'actionable' }),
                          ' list group items with hover, disabled, and active states by adding',
                          ' ',
                          (0, p.jsx)('code', { children: 'component="a|button"' }),
                          '. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like ',
                          (0, p.jsx)('code', { children: '<li>' }),
                          's or',
                          ' ',
                          (0, p.jsx)('code', { children: '<div>' }),
                          "s) don'tprovide a click or tap affordance.",
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#links-and-buttons',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              active: !0,
                              children: 'Cras justo odio',
                            }),
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              children: 'Dapibus ac facilisis in',
                            }),
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              children: 'Morbi leo risus',
                            }),
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              children: 'Porta ac consectetur ac',
                            }),
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              disabled: !0,
                              children: 'Vestibulum at eros',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Flush' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, p.jsx)('code', { children: 'flush' }),
                          ' boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).',
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#flush',
                        children: (0, p.jsxs)(c.G, {
                          flush: !0,
                          children: [
                            (0, p.jsx)(o.E, { children: 'Cras justo odio' }),
                            (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                            (0, p.jsx)(o.E, { children: 'Morbi leo risus' }),
                            (0, p.jsx)(o.E, { children: 'Porta ac consectetur ac' }),
                            (0, p.jsx)(o.E, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Horizontal' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, p.jsx)('code', { children: 'layout="horizontal"' }),
                          ' to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant ',
                          (0, p.jsx)('code', {
                            children: '.layout="horizontal-{sm | md | lg | xl | xxl}"',
                          }),
                          ' ',
                          "to make a list group horizontal starting at that breakpoint's",
                          ' ',
                          (0, p.jsx)('code', { children: 'min-width' }),
                          '. Currently',
                          ' ',
                          (0, p.jsx)('strong', {
                            children:
                              'horizontal list groups cannot be combined with flush list groups.',
                          }),
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#flush',
                        children: ['', '-sm', '-md', '-lg', '-xl', '-xxl'].map((e, s) =>
                          (0, p.jsxs)(
                            c.G,
                            {
                              className: 'mb-2',
                              layout: 'horizontal'.concat(e),
                              children: [
                                (0, p.jsx)(o.E, { children: 'Cras justo odio' }),
                                (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                                (0, p.jsx)(o.E, { children: 'Morbi leo risus' }),
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
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Contextual classes' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Use contextual classes to style list items with a stateful background and color.',
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#contextual-classes',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, { children: 'Dapibus ac facilisis in' }),
                            [
                              'primary',
                              'secondary',
                              'success',
                              'danger',
                              'warning',
                              'info',
                              'light',
                              'dark',
                            ].map((e, s) =>
                              (0, p.jsxs)(
                                o.E,
                                { color: e, children: ['A simple ', e, ' list group item'] },
                                s,
                              ),
                            ),
                          ],
                        }),
                      }),
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Contextual classes also work with ',
                          (0, p.jsx)('code', { children: '<a>' }),
                          's or',
                          ' ',
                          (0, p.jsx)('code', { children: '<button>' }),
                          's. Note the addition of the hover styles here not present in the previous example. Also supported is the ',
                          (0, p.jsx)('code', { children: 'active' }),
                          ' state; apply it to indicate an active selection on a contextual list group item.',
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#contextual-classes',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, {
                              component: 'a',
                              href: '#',
                              children: 'Dapibus ac facilisis in',
                            }),
                            [
                              'primary',
                              'secondary',
                              'success',
                              'danger',
                              'warning',
                              'info',
                              'light',
                              'dark',
                            ].map((e, s) =>
                              (0, p.jsxs)(
                                o.E,
                                {
                                  component: 'a',
                                  href: '#',
                                  color: e,
                                  children: ['A simple ', e, ' list group item'],
                                },
                                s,
                              ),
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'With badges' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Add badges to any list group item to show unread counts, activity, and more.',
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#with-badges',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsxs)(o.E, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Cras justo odio',
                                (0, p.jsx)(d.C, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '14',
                                }),
                              ],
                            }),
                            (0, p.jsxs)(o.E, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Dapibus ac facilisis in',
                                (0, p.jsx)(d.C, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '2',
                                }),
                              ],
                            }),
                            (0, p.jsxs)(o.E, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Morbi leo risus',
                                (0, p.jsx)(d.C, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '1',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Custom content' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add nearly any HTML within, even for linked list groups like the one below, with the help of ',
                          (0, p.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/flex/',
                            children: 'flexbox utilities',
                          }),
                          '.',
                        ],
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#custom-content',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsxs)(o.E, {
                              component: 'a',
                              href: '#',
                              active: !0,
                              children: [
                                (0, p.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    (0, p.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    (0, p.jsx)('small', { children: '3 days ago' }),
                                  ],
                                }),
                                (0, p.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                (0, p.jsx)('small', { children: 'Donec id elit non mi porta.' }),
                              ],
                            }),
                            (0, p.jsxs)(o.E, {
                              component: 'a',
                              href: '#',
                              children: [
                                (0, p.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    (0, p.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    (0, p.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: '3 days ago',
                                    }),
                                  ],
                                }),
                                (0, p.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                (0, p.jsx)('small', {
                                  className: 'text-body-secondary',
                                  children: 'Donec id elit non mi porta.',
                                }),
                              ],
                            }),
                            (0, p.jsxs)(o.E, {
                              component: 'a',
                              href: '#',
                              children: [
                                (0, p.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    (0, p.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    (0, p.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: '3 days ago',
                                    }),
                                  ],
                                }),
                                (0, p.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                (0, p.jsx)('small', {
                                  className: 'text-body-secondary',
                                  children: 'Donec id elit non mi porta.',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, p.jsx)(l.b, {
              xs: 12,
              children: (0, p.jsxs)(r.x, {
                className: 'mb-4',
                children: [
                  (0, p.jsxs)(i.b, {
                    children: [
                      (0, p.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      (0, p.jsx)('small', { children: 'Checkboxes and radios' }),
                    ],
                  }),
                  (0, p.jsxs)(t.s, {
                    children: [
                      (0, p.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          "Place CoreUI's checkboxes and radios within list group items and customize as needed.",
                      }),
                      (0, p.jsx)(h.q3, {
                        href: 'components/list-group/#checkboxes-and-radios',
                        children: (0, p.jsxs)(c.G, {
                          children: [
                            (0, p.jsx)(o.E, {
                              children: (0, p.jsx)(m.E, { label: 'Cras justo odio' }),
                            }),
                            (0, p.jsx)(o.E, {
                              children: (0, p.jsx)(m.E, {
                                label: 'Dapibus ac facilisis in',
                                defaultChecked: !0,
                              }),
                            }),
                            (0, p.jsx)(o.E, {
                              children: (0, p.jsx)(m.E, {
                                label: 'Morbi leo risus',
                                defaultChecked: !0,
                              }),
                            }),
                            (0, p.jsx)(o.E, {
                              children: (0, p.jsx)(m.E, { label: 'orta ac consectetur ac' }),
                            }),
                            (0, p.jsx)(o.E, {
                              children: (0, p.jsx)(m.E, { label: 'Vestibulum at eros' }),
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
    13609: (e, s, n) => {
      n.d(s, { x: () => o })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = n(37169),
        o = (0, l.forwardRef)(function (e, s) {
          var n,
            r = e.children,
            i = e.className,
            c = e.color,
            o = e.textColor,
            d = (0, a._T)(e, ['children', 'className', 'color', 'textColor'])
          return l.createElement(
            'div',
            (0, a.pi)(
              {
                className: (0, t.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(c)] = c), (n['text-'.concat(o)] = o), n),
                  i,
                ),
              },
              d,
              { ref: s },
            ),
            r,
          )
        })
      ;(o.propTypes = {
        children: i().node,
        className: i().string,
        color: c.$1,
        textColor: i().string,
      }),
        (o.displayName = 'CCard')
    },
    45813: (e, s, n) => {
      n.d(s, { s: () => c })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = (0, l.forwardRef)(function (e, s) {
          var n = e.children,
            r = e.className,
            i = (0, a._T)(e, ['children', 'className'])
          return l.createElement(
            'div',
            (0, a.pi)({ className: (0, t.Z)('card-body', r) }, i, { ref: s }),
            n,
          )
        })
      ;(c.propTypes = { children: i().node, className: i().string }), (c.displayName = 'CCardBody')
    },
    42177: (e, s, n) => {
      n.d(s, { b: () => c })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = (0, l.forwardRef)(function (e, s) {
          var n = e.children,
            r = e.component,
            i = void 0 === r ? 'div' : r,
            c = e.className,
            o = (0, a._T)(e, ['children', 'component', 'className'])
          return l.createElement(
            i,
            (0, a.pi)({ className: (0, t.Z)('card-header', c) }, o, { ref: s }),
            n,
          )
        })
      ;(c.propTypes = { children: i().node, className: i().string, component: i().elementType }),
        (c.displayName = 'CCardHeader')
    },
    45088: (e, s, n) => {
      n.d(s, { E: () => m })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = n(59054),
        o = n(35424),
        d = n(63173),
        m = (0, l.forwardRef)(function (e, s) {
          var n = e.className,
            r = e.button,
            i = e.feedback,
            m = e.feedbackInvalid,
            h = e.feedbackValid,
            p = e.floatingLabel,
            u = e.tooltipFeedback,
            x = e.hitArea,
            b = e.id,
            f = e.indeterminate,
            j = e.inline,
            g = e.invalid,
            y = e.label,
            v = e.reverse,
            N = e.type,
            E = void 0 === N ? 'checkbox' : N,
            k = e.valid,
            C = (0, a._T)(e, [
              'className',
              'button',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingLabel',
              'tooltipFeedback',
              'hitArea',
              'id',
              'indeterminate',
              'inline',
              'invalid',
              'label',
              'reverse',
              'type',
              'valid',
            ]),
            w = (0, l.useRef)(null),
            T = (0, d.A7)(s, w)
          ;(0, l.useEffect)(
            function () {
              w.current && f && (w.current.indeterminate = f)
            },
            [f, w.current],
          )
          var G = function () {
              return l.createElement(
                'input',
                (0, a.pi)(
                  {
                    type: E,
                    className: (0, t.Z)(r ? 'btn-check' : 'form-check-input', {
                      'is-invalid': g,
                      'is-valid': k,
                      'me-2': x,
                    }),
                    id: b,
                  },
                  C,
                  { ref: T },
                ),
              )
            },
            L = function () {
              return l.createElement(c.X, {
                describedby: C['aria-describedby'],
                feedback: i,
                feedbackInvalid: m,
                feedbackValid: h,
                floatingLabel: p,
                invalid: g,
                tooltipFeedback: u,
                valid: k,
              })
            },
            R = function () {
              var e
              return l.createElement(
                o.L,
                (0, a.pi)(
                  {
                    customClassName: (0, t.Z)(
                      r
                        ? (0, t.Z)(
                            'btn',
                            r.variant
                              ? 'btn-'.concat(r.variant, '-').concat(r.color)
                              : 'btn-'.concat(r.color),
                            ((e = {}), (e['btn-'.concat(r.size)] = r.size), e),
                            ''.concat(r.shape),
                          )
                        : 'form-check-label',
                    ),
                  },
                  b && { htmlFor: b },
                ),
                y,
              )
            }
          return l.createElement(function () {
            return r
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(G, null),
                  y && l.createElement(R, null),
                  l.createElement(L, null),
                )
              : y
                ? x
                  ? l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(G, null),
                      l.createElement(
                        o.L,
                        (0, a.pi)(
                          { customClassName: (0, t.Z)('form-check-label stretched-link', n) },
                          b && { htmlFor: b },
                        ),
                        y,
                      ),
                      l.createElement(L, null),
                    )
                  : l.createElement(
                      'div',
                      {
                        className: (0, t.Z)(
                          'form-check',
                          {
                            'form-check-inline': j,
                            'form-check-reverse': v,
                            'is-invalid': g,
                            'is-valid': k,
                          },
                          n,
                        ),
                      },
                      l.createElement(G, null),
                      l.createElement(R, null),
                      l.createElement(L, null),
                    )
                : l.createElement(G, null)
          }, null)
        })
      ;(m.propTypes = (0, a.pi)(
        {
          button: i().object,
          className: i().string,
          hitArea: i().oneOf(['full']),
          id: i().string,
          indeterminate: i().bool,
          inline: i().bool,
          label: i().oneOfType([i().string, i().node]),
          reverse: i().bool,
          type: i().oneOf(['checkbox', 'radio']),
        },
        c.X.propTypes,
      )),
        (m.displayName = 'CFormCheck')
    },
    59054: (e, s, n) => {
      n.d(s, { X: () => c })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(10560),
        c = function (e) {
          var s = e.describedby,
            n = e.feedback,
            r = e.feedbackInvalid,
            i = e.feedbackValid,
            c = e.invalid,
            o = e.tooltipFeedback,
            d = e.valid
          return l.createElement(
            l.Fragment,
            null,
            n &&
              (d || c) &&
              l.createElement(
                t.C,
                (0, a.pi)({}, c && { id: s }, { invalid: c, tooltip: o, valid: d }),
                n,
              ),
            r && l.createElement(t.C, { id: s, invalid: !0, tooltip: o }, r),
            i && l.createElement(t.C, { valid: !0, tooltip: o }, i),
          )
        }
      ;(c.propTypes = {
        describedby: i().string,
        feedback: i().oneOfType([i().node, i().string]),
        feedbackValid: i().oneOfType([i().node, i().string]),
        feedbackInvalid: i().oneOfType([i().node, i().string]),
        invalid: i().bool,
        tooltipFeedback: i().bool,
        valid: i().bool,
      }),
        (c.displayName = 'CFormControlValidation')
    },
    10560: (e, s, n) => {
      n.d(s, { C: () => c })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = (0, l.forwardRef)(function (e, s) {
          var n,
            r = e.children,
            i = e.className,
            c = e.component,
            o = void 0 === c ? 'div' : c,
            d = e.invalid,
            m = e.tooltip,
            h = e.valid,
            p = (0, a._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return l.createElement(
            o,
            (0, a.pi)(
              {
                className: (0, t.Z)(
                  ((n = {}),
                  (n['invalid-'.concat(m ? 'tooltip' : 'feedback')] = d),
                  (n['valid-'.concat(m ? 'tooltip' : 'feedback')] = h),
                  n),
                  i,
                ),
              },
              p,
              { ref: s },
            ),
            r,
          )
        })
      ;(c.propTypes = {
        children: i().node,
        className: i().string,
        component: i().elementType,
        invalid: i().bool,
        tooltip: i().bool,
        valid: i().bool,
      }),
        (c.displayName = 'CFormFeedback')
    },
    35424: (e, s, n) => {
      n.d(s, { L: () => c })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = (0, l.forwardRef)(function (e, s) {
          var n = e.children,
            r = e.className,
            i = e.customClassName,
            c = (0, a._T)(e, ['children', 'className', 'customClassName'])
          return l.createElement(
            'label',
            (0, a.pi)(
              { className: null !== i && void 0 !== i ? i : (0, t.Z)('form-label', r) },
              c,
              { ref: s },
            ),
            n,
          )
        })
      ;(c.propTypes = { children: i().node, className: i().string, customClassName: i().string }),
        (c.displayName = 'CFormLabel')
    },
    5640: (e, s, n) => {
      n.d(s, { b: () => o })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, l.forwardRef)(function (e, s) {
          var n = e.children,
            r = e.className,
            i = (0, a._T)(e, ['children', 'className']),
            o = []
          return (
            c.forEach(function (e) {
              var s = i[e]
              delete i[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                o.push('col'.concat(n, '-').concat(s)),
                'boolean' === typeof s && o.push('col'.concat(n)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    o.push('col'.concat(n, '-').concat(s.span)),
                  'boolean' === typeof s.span && o.push('col'.concat(n)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    o.push('order'.concat(n, '-').concat(s.order)),
                  'number' === typeof s.offset && o.push('offset'.concat(n, '-').concat(s.offset)))
            }),
            l.createElement(
              'div',
              (0, a.pi)({ className: (0, t.Z)(o.length > 0 ? o : 'col', r) }, i, { ref: s }),
              n,
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
      ;(o.propTypes = {
        children: i().node,
        className: i().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (o.displayName = 'CCol')
    },
    48917: (e, s, n) => {
      n.d(s, { r: () => o })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, l.forwardRef)(function (e, s) {
          var n = e.children,
            r = e.className,
            i = (0, a._T)(e, ['children', 'className']),
            o = []
          return (
            c.forEach(function (e) {
              var s = i[e]
              delete i[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && o.push('row-cols'.concat(n, '-').concat(s.cols)),
                'number' === typeof s.gutter && o.push('g'.concat(n, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && o.push('gx'.concat(n, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && o.push('gy'.concat(n, '-').concat(s.gutterY)))
            }),
            l.createElement('div', { className: (0, t.Z)('row', o, r), ref: s }, n)
          )
        }),
        d = i().shape({
          cols: i().oneOfType([i().oneOf(['auto']), i().number, i().string]),
          gutter: i().oneOfType([i().string, i().number]),
          gutterX: i().oneOfType([i().string, i().number]),
          gutterY: i().oneOfType([i().string, i().number]),
        })
      ;(o.propTypes = {
        children: i().node,
        className: i().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (o.displayName = 'CRow')
    },
    27498: (e, s, n) => {
      n.d(s, { G: () => t })
      var a = n(28381),
        l = n(34860),
        r = n.n(l),
        i = n(47577),
        t = (0, a.forwardRef)(function (e, s) {
          var n,
            l = e.children,
            r = e.className,
            t = e.component,
            c = void 0 === t ? 'ul' : t,
            o = e.flush,
            d = e.layout
          return a.createElement(
            c,
            {
              className: (0, i.Z)(
                'list-group',
                ((n = { 'list-group-flush': o }), (n['list-group-'.concat(d)] = d), n),
                r,
              ),
              ref: s,
            },
            l,
          )
        })
      ;(t.propTypes = {
        children: r().node,
        className: r().string,
        component: r().elementType,
        flush: r().bool,
        layout: r().oneOf([
          'horizontal',
          'horizontal-sm',
          'horizontal-md',
          'horizontal-lg',
          'horizontal-xl',
          'horizontal-xxl',
        ]),
      }),
        (t.displayName = 'CListGroup')
    },
    1915: (e, s, n) => {
      n.d(s, { E: () => d })
      var a = n(50949),
        l = n(28381),
        r = n(34860),
        i = n.n(r),
        t = n(47577),
        c = n(83628),
        o = n(37169),
        d = (0, l.forwardRef)(function (e, s) {
          var n,
            r = e.children,
            i = e.active,
            o = e.className,
            d = e.disabled,
            m = e.color,
            h = e.component,
            p = void 0 === h ? 'li' : h,
            u = (0, a._T)(e, ['children', 'active', 'className', 'disabled', 'color', 'component']),
            x = 'a' === p || 'button' === p ? c.h : p
          return (
            (u = (0, a.pi)(
              (0, a.pi)(
                (0, a.pi)(
                  (0, a.pi)(
                    {},
                    ('a' === p || 'button' === p) && {
                      active: i,
                      disabled: d,
                      component: p,
                      ref: s,
                    },
                  ),
                  i && { 'aria-current': !0 },
                ),
                d && { 'aria-disabled': !0 },
              ),
              u,
            )),
            l.createElement(
              x,
              (0, a.pi)(
                {
                  className: (0, t.Z)(
                    'list-group-item',
                    ((n = {}),
                    (n['list-group-item-'.concat(m)] = m),
                    (n['list-group-item-action'] = 'a' === p || 'button' === p),
                    (n.active = i),
                    (n.disabled = d),
                    n),
                    o,
                  ),
                },
                u,
              ),
              r,
            )
          )
        })
      ;(d.propTypes = {
        active: i().bool,
        children: i().node,
        className: i().string,
        color: o.$1,
        component: i().elementType,
        disabled: i().bool,
      }),
        (d.displayName = 'CListGroupItem')
    },
  },
])
//# sourceMappingURL=9510.56da5f61.chunk.js.map
