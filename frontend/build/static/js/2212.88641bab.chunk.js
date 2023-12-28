'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2212],
  {
    2212: (e, s, r) => {
      r.r(s), r.d(s, { default: () => L })
      var t = r(28381),
        n = r(48917),
        a = r(5640),
        l = r(13609),
        i = r(42177),
        c = r(45813),
        d = r(51963),
        o = r(10294),
        h = r(82733),
        x = r(79361),
        m = r(50949),
        j = r(34860),
        p = r.n(j),
        u = r(47577),
        b = (0, t.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.component,
            a = void 0 === n ? 'h6' : n,
            l = e.className,
            i = (0, m._T)(e, ['children', 'component', 'className'])
          return t.createElement(
            a,
            (0, m.pi)({ className: (0, u.Z)('card-subtitle', l) }, i, { ref: s }),
            r,
          )
        })
      ;(b.propTypes = { children: p().node, className: p().string, component: p().elementType }),
        (b.displayName = 'CCardSubtitle')
      var f = r(83628),
        y = (0, t.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            a = (0, m._T)(e, ['children', 'className'])
          return t.createElement(
            f.h,
            (0, m.pi)({ className: (0, u.Z)('card-link', n) }, a, { ref: s }),
            r,
          )
        })
      ;(y.propTypes = { children: p().node, className: p().string }), (y.displayName = 'CCardLink')
      var g = r(27498),
        w = r(1915),
        N = r(42675),
        C = r(97677),
        T = r(96843),
        v = r(19947),
        k = r(34321),
        q = r(54908),
        S = r(54583),
        E = r(29343)
      const L = () =>
        (0, E.jsxs)(n.r, {
          children: [
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Example' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use',
                          ' ',
                          (0, E.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/spacing',
                            children: 'spacing utilities',
                          }),
                          " as needed. They have no fixed width to start, so they'll fill the full width of its parent.",
                        ],
                      }),
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          "Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.",
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card',
                        children: (0, E.jsxs)(l.x, {
                          style: { width: '18rem' },
                          children: [
                            (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Card title' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Body' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'The main block of a card is the ',
                          (0, E.jsx)('code', { children: '<CCardBody>' }),
                          '. Use it whenever you need a padded section within a card.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#body',
                        children: (0, E.jsx)(l.x, {
                          children: (0, E.jsx)(c.s, {
                            children: 'This is some text within a card body.',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Titles, text, and links' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Card titles are managed by ',
                          (0, E.jsx)('code', { children: '<CCardTitle>' }),
                          ' component. Identically, links are attached and collected next to each other by ',
                          (0, E.jsx)('code', { children: '<CCardLink>' }),
                          ' ',
                          'component.',
                        ],
                      }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Subtitles are managed by ',
                          (0, E.jsx)('code', { children: '<CCardSubtitle>' }),
                          ' component. If the',
                          ' ',
                          (0, E.jsx)('code', { children: '<CCardTitle>' }),
                          ' also, the ',
                          (0, E.jsx)('code', { children: '<CCardSubtitle>' }),
                          ' items are stored in a ',
                          (0, E.jsx)('code', { children: '<CCardBody>' }),
                          ' item, the card title, and subtitle are arranged rightly.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#titles-text-and-links',
                        children: (0, E.jsx)(l.x, {
                          style: { width: '18rem' },
                          children: (0, E.jsxs)(c.s, {
                            children: [
                              (0, E.jsx)(o.t, { children: 'Card title' }),
                              (0, E.jsx)(b, {
                                className: 'mb-2 text-body-secondary',
                                children: 'Card subtitle',
                              }),
                              (0, E.jsx)(h.u, {
                                children:
                                  "Some quick example text to build on the card title and make up the bulk of the card's content.",
                              }),
                              (0, E.jsx)(y, { href: '#', children: 'Card link' }),
                              (0, E.jsx)(y, { href: '#', children: 'Another link' }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Images' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          (0, E.jsx)('code', { children: '.card-img-top' }),
                          ' places a picture to the top of the card. With',
                          ' ',
                          (0, E.jsx)('code', { children: '.card-text' }),
                          ', text can be added to the card. Text within',
                          ' ',
                          (0, E.jsx)('code', { children: '.card-text' }),
                          ' can additionally be styled with the regular HTML tags.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#images',
                        children: (0, E.jsxs)(l.x, {
                          style: { width: '18rem' },
                          children: [
                            (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                            (0, E.jsx)(c.s, {
                              children: (0, E.jsx)(h.u, {
                                children:
                                  "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'List groups' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'Create lists of content in a card with a flush list group.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#list-groups',
                        children: (0, E.jsxs)(n.r, {
                          children: [
                            (0, E.jsx)(a.b, {
                              lg: 4,
                              children: (0, E.jsx)(l.x, {
                                children: (0, E.jsxs)(g.G, {
                                  flush: !0,
                                  children: [
                                    (0, E.jsx)(w.E, { children: 'Cras justo odio' }),
                                    (0, E.jsx)(w.E, { children: 'Dapibus ac facilisis in' }),
                                    (0, E.jsx)(w.E, { children: 'Vestibulum at eros' }),
                                  ],
                                }),
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              lg: 4,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(i.b, { children: 'Header' }),
                                  (0, E.jsxs)(g.G, {
                                    flush: !0,
                                    children: [
                                      (0, E.jsx)(w.E, { children: 'Cras justo odio' }),
                                      (0, E.jsx)(w.E, { children: 'Dapibus ac facilisis in' }),
                                      (0, E.jsx)(w.E, { children: 'Vestibulum at eros' }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              lg: 4,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsxs)(g.G, {
                                    flush: !0,
                                    children: [
                                      (0, E.jsx)(w.E, { children: 'Cras justo odio' }),
                                      (0, E.jsx)(w.E, { children: 'Dapibus ac facilisis in' }),
                                      (0, E.jsx)(w.E, { children: 'Vestibulum at eros' }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, { children: 'Footer' }),
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Kitchen sink' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group\u2014all wrapped in a fixed-width card.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#kitchen-sink',
                        children: (0, E.jsxs)(l.x, {
                          style: { width: '18rem' },
                          children: [
                            (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Card title' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                }),
                              ],
                            }),
                            (0, E.jsxs)(g.G, {
                              flush: !0,
                              children: [
                                (0, E.jsx)(w.E, { children: 'Cras justo odio' }),
                                (0, E.jsx)(w.E, { children: 'Dapibus ac facilisis in' }),
                                (0, E.jsx)(w.E, { children: 'Vestibulum at eros' }),
                              ],
                            }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(y, { href: '#', children: 'Card link' }),
                                (0, E.jsx)(y, { href: '#', children: 'Another link' }),
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Header and footer' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'Add an optional header and/or footer within a card.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#header-and-footer',
                        children: (0, E.jsxs)(l.x, {
                          children: [
                            (0, E.jsx)(i.b, { children: 'Header' }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Card headers can be styled by adding ex. ',
                          (0, E.jsx)('code', { children: 'component="h5"' }),
                          '.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#header-and-footer',
                        children: (0, E.jsxs)(l.x, {
                          children: [
                            (0, E.jsx)(i.b, { component: 'h5', children: 'Header' }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#header-and-footer',
                        children: (0, E.jsxs)(l.x, {
                          children: [
                            (0, E.jsx)(i.b, { children: 'Quote' }),
                            (0, E.jsx)(c.s, {
                              children: (0, E.jsxs)('blockquote', {
                                className: 'blockquote mb-0',
                                children: [
                                  (0, E.jsx)('p', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                                  }),
                                  (0, E.jsxs)('footer', {
                                    className: 'blockquote-footer',
                                    children: [
                                      'Someone famous in ',
                                      (0, E.jsx)('cite', {
                                        title: 'Source Title',
                                        children: 'Source Title',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#header-and-footer',
                        children: (0, E.jsxs)(l.x, {
                          className: 'text-center',
                          children: [
                            (0, E.jsx)(i.b, { children: 'Header' }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                            (0, E.jsx)(N.B, {
                              className: 'text-body-secondary',
                              children: '2 days ago',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Body' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Cards assume no specific ',
                          (0, E.jsx)('code', { children: 'width' }),
                          " to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services.",
                        ],
                      }),
                      (0, E.jsx)('h3', { children: 'Using grid markup' }),
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'Using the grid, wrap cards in columns and rows as needed.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#sizing',
                        children: (0, E.jsxs)(n.r, {
                          children: [
                            (0, E.jsx)(a.b, {
                              sm: 6,
                              children: (0, E.jsx)(l.x, {
                                children: (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'With supporting text below as a natural lead-in to additional content.',
                                    }),
                                    (0, E.jsx)(x.u, {
                                      color: 'primary',
                                      href: '#',
                                      children: 'Go somewhere',
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              sm: 6,
                              children: (0, E.jsx)(l.x, {
                                children: (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'With supporting text below as a natural lead-in to additional content.',
                                    }),
                                    (0, E.jsx)(x.u, {
                                      color: 'primary',
                                      href: '#',
                                      children: 'Go somewhere',
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)('h3', { children: 'Using utilities' }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use some of',
                          ' ',
                          (0, E.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/sizing/',
                            children: 'available sizing utilities',
                          }),
                          " to rapidly set a card's width.",
                        ],
                      }),
                      (0, E.jsxs)(q.q3, {
                        href: 'components/card/#sizing',
                        children: [
                          (0, E.jsx)(l.x, {
                            className: 'w-75',
                            children: (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Card title' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          }),
                          (0, E.jsx)(l.x, {
                            className: 'w-50',
                            children: (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Card title' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, E.jsx)('strong', { children: 'Using custom CSS' }),
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Use custom CSS in your stylesheets or as inline styles to set a width.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#sizing',
                        children: (0, E.jsx)(l.x, {
                          style: { width: '18rem' },
                          children: (0, E.jsxs)(c.s, {
                            children: [
                              (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                              (0, E.jsx)(h.u, {
                                children:
                                  'With supporting text below as a natural lead-in to additional content.',
                              }),
                              (0, E.jsx)(x.u, {
                                color: 'primary',
                                href: '#',
                                children: 'Go somewhere',
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Text alignment' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'You can instantly change the text arrangement of any card\u2014in its whole or specific parts\u2014with',
                          ' ',
                          (0, E.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/text/#text-alignment',
                            children: 'text align classes',
                          }),
                          '.',
                        ],
                      }),
                      (0, E.jsxs)(q.q3, {
                        href: 'components/card/#text-alignment',
                        children: [
                          (0, E.jsx)(l.x, {
                            style: { width: '18rem' },
                            children: (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          }),
                          (0, E.jsx)(l.x, {
                            className: 'text-center',
                            style: { width: '18rem' },
                            children: (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          }),
                          (0, E.jsx)(l.x, {
                            className: 'text-end',
                            style: { width: '18rem' },
                            children: (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Navigation' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add some navigation to a ',
                          (0, E.jsx)('code', { children: '<CCardHeader>' }),
                          ' with our',
                          ' ',
                          (0, E.jsx)('code', { children: '<CNav>' }),
                          ' component.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/##navigation',
                        children: (0, E.jsxs)(l.x, {
                          className: 'text-center',
                          children: [
                            (0, E.jsx)(i.b, {
                              children: (0, E.jsxs)(C.n, {
                                variant: 'tabs',
                                className: 'card-header-tabs',
                                children: [
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, {
                                      href: '#',
                                      active: !0,
                                      children: 'Active',
                                    }),
                                  }),
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, { href: '#', children: 'Link' }),
                                  }),
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, {
                                      href: '#',
                                      disabled: !0,
                                      children: 'Disabled',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/##navigation',
                        children: (0, E.jsxs)(l.x, {
                          className: 'text-center',
                          children: [
                            (0, E.jsx)(i.b, {
                              children: (0, E.jsxs)(C.n, {
                                variant: 'pills',
                                className: 'card-header-pills',
                                children: [
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, {
                                      href: '#',
                                      active: !0,
                                      children: 'Active',
                                    }),
                                  }),
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, { href: '#', children: 'Link' }),
                                  }),
                                  (0, E.jsx)(T.U, {
                                    children: (0, E.jsx)(v.A, {
                                      href: '#',
                                      disabled: !0,
                                      children: 'Disabled',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsxs)(c.s, {
                              children: [
                                (0, E.jsx)(o.t, { children: 'Special title treatment' }),
                                (0, E.jsx)(h.u, {
                                  children:
                                    'With supporting text below as a natural lead-in to additional content.',
                                }),
                                (0, E.jsx)(x.u, {
                                  color: 'primary',
                                  href: '#',
                                  children: 'Go somewhere',
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Image caps' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Similar to headers and footers, cards can include top and bottom "image caps"\u2014images at the top or bottom of a card.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#image-caps',
                        children: (0, E.jsxs)(n.r, {
                          children: [
                            (0, E.jsx)(a.b, {
                              lg: 6,
                              children: (0, E.jsxs)(l.x, {
                                className: 'mb-3',
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                      (0, E.jsx)(h.u, {
                                        children: (0, E.jsx)('small', {
                                          className: 'text-body-secondary',
                                          children: 'Last updated 3 mins ago',
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              lg: 6,
                              children: (0, E.jsxs)(l.x, {
                                className: 'mb-3',
                                children: [
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                      (0, E.jsx)(h.u, {
                                        children: (0, E.jsx)('small', {
                                          className: 'text-body-secondary',
                                          children: 'Last updated 3 mins ago',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(d.p, { orientation: 'bottom', src: S }),
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Card styles' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Cards include various options for customizing their backgrounds, borders, and color.',
                      }),
                      (0, E.jsx)('h3', { children: 'Background and color' }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, E.jsx)('code', { children: 'color' }),
                          ' property to change the appearance of a card.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#background-and-color',
                        children: (0, E.jsx)(n.r, {
                          children: [
                            { color: 'primary', textColor: 'white' },
                            { color: 'secondary', textColor: 'white' },
                            { color: 'success', textColor: 'white' },
                            { color: 'danger', textColor: 'white' },
                            { color: 'warning' },
                            { color: 'info', textColor: 'white' },
                            { color: 'light' },
                            { color: 'dark', textColor: 'white' },
                          ].map((e, s) =>
                            (0, E.jsx)(
                              a.b,
                              {
                                lg: 4,
                                children: (0, E.jsxs)(l.x, {
                                  color: e.color,
                                  textColor: e.textColor,
                                  className: 'mb-3',
                                  children: [
                                    (0, E.jsx)(i.b, { children: 'Header' }),
                                    (0, E.jsxs)(c.s, {
                                      children: [
                                        (0, E.jsxs)(o.t, { children: [e.color, ' card title'] }),
                                        (0, E.jsx)(h.u, {
                                          children:
                                            "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      }),
                      (0, E.jsx)('h3', { children: 'Border' }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, E.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/borders/',
                            children: 'border utilities',
                          }),
                          ' to change just the ',
                          (0, E.jsx)('code', { children: 'border-color' }),
                          ' of a card. Note that you can set',
                          ' ',
                          (0, E.jsx)('code', { children: 'textColor' }),
                          ' property on the ',
                          (0, E.jsx)('code', { children: '<CCard>' }),
                          " or a subset of the card's contents as shown below.",
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#border',
                        children: (0, E.jsx)(n.r, {
                          children: [
                            { color: 'primary', textColor: 'primary' },
                            { color: 'secondary', textColor: 'secondary' },
                            { color: 'success', textColor: 'success' },
                            { color: 'danger', textColor: 'danger' },
                            { color: 'warning', textColor: 'warning' },
                            { color: 'info', textColor: 'info' },
                            { color: 'light' },
                            { color: 'dark' },
                          ].map((e, s) =>
                            (0, E.jsx)(
                              a.b,
                              {
                                lg: 4,
                                children: (0, E.jsxs)(l.x, {
                                  textColor: e.textColor,
                                  className: 'mb-3 border-'.concat(e.color),
                                  children: [
                                    (0, E.jsx)(i.b, { children: 'Header' }),
                                    (0, E.jsxs)(c.s, {
                                      children: [
                                        (0, E.jsxs)(o.t, { children: [e.color, ' card title'] }),
                                        (0, E.jsx)(h.u, {
                                          children:
                                            "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      }),
                      (0, E.jsx)('h3', { children: 'Top border' }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, E.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/borders/',
                            children: 'border utilities',
                          }),
                          ' to change just the ',
                          (0, E.jsx)('code', { children: 'border-color' }),
                          ' of a card. Note that you can set',
                          ' ',
                          (0, E.jsx)('code', { children: 'textColor' }),
                          ' property on the ',
                          (0, E.jsx)('code', { children: '<CCard>' }),
                          " or a subset of the card's contents as shown below.",
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#top-border',
                        children: (0, E.jsx)(n.r, {
                          children: [
                            { color: 'primary', textColor: 'primary' },
                            { color: 'secondary', textColor: 'secondary' },
                            { color: 'success', textColor: 'success' },
                            { color: 'danger', textColor: 'danger' },
                            { color: 'warning', textColor: 'warning' },
                            { color: 'info', textColor: 'info' },
                            { color: 'light' },
                            { color: 'dark' },
                          ].map((e, s) =>
                            (0, E.jsx)(
                              a.b,
                              {
                                lg: 4,
                                children: (0, E.jsxs)(l.x, {
                                  textColor: e.textColor,
                                  className: 'mb-3 border-top-'.concat(e.color, ' border-top-3'),
                                  children: [
                                    (0, E.jsx)(i.b, { children: 'Header' }),
                                    (0, E.jsxs)(c.s, {
                                      children: [
                                        (0, E.jsxs)(o.t, { children: [e.color, ' card title'] }),
                                        (0, E.jsx)(h.u, {
                                          children:
                                            "Some quick example text to build on the card title and make up the bulk of the card's content.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Card groups' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use ',
                          (0, E.jsx)('code', { children: 'display: flex;' }),
                          ' to become attached with uniform dimensions starting at the ',
                          (0, E.jsx)('code', { children: 'sm' }),
                          ' breakpoint.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#card-groups',
                        children: (0, E.jsxs)(k.d, {
                          children: [
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                    }),
                                    (0, E.jsx)(h.u, {
                                      children: (0, E.jsx)('small', {
                                        className: 'text-body-secondary',
                                        children: 'Last updated 3 mins ago',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This card has supporting text below as a natural lead-in to additional content.',
                                    }),
                                    (0, E.jsx)(h.u, {
                                      children: (0, E.jsx)('small', {
                                        className: 'text-body-secondary',
                                        children: 'Last updated 3 mins ago',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
                                    }),
                                    (0, E.jsx)(h.u, {
                                      children: (0, E.jsx)('small', {
                                        className: 'text-body-secondary',
                                        children: 'Last updated 3 mins ago',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'When using card groups with footers, their content will automatically line up.',
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#card-groups',
                        children: (0, E.jsxs)(k.d, {
                          children: [
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                    }),
                                  ],
                                }),
                                (0, E.jsx)(N.B, {
                                  children: (0, E.jsx)('small', {
                                    className: 'text-body-secondary',
                                    children: 'Last updated 3 mins ago',
                                  }),
                                }),
                              ],
                            }),
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This card has supporting text below as a natural lead-in to additional content.',
                                    }),
                                  ],
                                }),
                                (0, E.jsx)(N.B, {
                                  children: (0, E.jsx)('small', {
                                    className: 'text-body-secondary',
                                    children: 'Last updated 3 mins ago',
                                  }),
                                }),
                              ],
                            }),
                            (0, E.jsxs)(l.x, {
                              children: [
                                (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                (0, E.jsxs)(c.s, {
                                  children: [
                                    (0, E.jsx)(o.t, { children: 'Card title' }),
                                    (0, E.jsx)(h.u, {
                                      children:
                                        'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
                                    }),
                                  ],
                                }),
                                (0, E.jsx)(N.B, {
                                  children: (0, E.jsx)('small', {
                                    className: 'text-body-secondary',
                                    children: 'Last updated 3 mins ago',
                                  }),
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
            (0, E.jsx)(a.b, {
              xs: 12,
              children: (0, E.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, E.jsxs)(i.b, {
                    children: [
                      (0, E.jsx)('strong', { children: 'Card' }),
                      ' ',
                      (0, E.jsx)('small', { children: 'Grid cards' }),
                    ],
                  }),
                  (0, E.jsxs)(c.s, {
                    children: [
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use the ',
                          (0, E.jsx)('code', { children: 'CRow' }),
                          ' component and set',
                          ' ',
                          (0, E.jsx)('code', { children: '{xs|sm|md|lg|xl|xxl}={{ cols: * }}' }),
                          " property to control how many grid columns (wrapped around your cards) you show per row. For example, here's ",
                          (0, E.jsx)('code', { children: 'xs={{cols: 1}}' }),
                          ' laying out the cards on one column, and ',
                          (0, E.jsx)('code', { children: 'md={{cols: 1}}' }),
                          ' splitting four cards to equal width across multiple rows, from the medium breakpoint up.',
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#grid-cards',
                        children: (0, E.jsxs)(n.r, {
                          xs: { cols: 1, gutter: 4 },
                          md: { cols: 2 },
                          children: [
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, E.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Change it to ',
                          (0, E.jsx)('code', { children: 'md={{ cols: 3}}' }),
                          " and you'll see the fourth card wrap.",
                        ],
                      }),
                      (0, E.jsx)(q.q3, {
                        href: 'components/card/#grid-cards',
                        children: (0, E.jsxs)(n.r, {
                          xs: { cols: 1, gutter: 4 },
                          md: { cols: 3 },
                          children: [
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, E.jsx)(a.b, {
                              xs: !0,
                              children: (0, E.jsxs)(l.x, {
                                children: [
                                  (0, E.jsx)(d.p, { orientation: 'top', src: S }),
                                  (0, E.jsxs)(c.s, {
                                    children: [
                                      (0, E.jsx)(o.t, { children: 'Card title' }),
                                      (0, E.jsx)(h.u, {
                                        children:
                                          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(N.B, {
                                    children: (0, E.jsx)('small', {
                                      className: 'text-body-secondary',
                                      children: 'Last updated 3 mins ago',
                                    }),
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
    13609: (e, s, r) => {
      r.d(s, { x: () => d })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = r(37169),
        d = (0, n.forwardRef)(function (e, s) {
          var r,
            a = e.children,
            l = e.className,
            c = e.color,
            d = e.textColor,
            o = (0, t._T)(e, ['children', 'className', 'color', 'textColor'])
          return n.createElement(
            'div',
            (0, t.pi)(
              {
                className: (0, i.Z)(
                  'card',
                  ((r = {}), (r['bg-'.concat(c)] = c), (r['text-'.concat(d)] = d), r),
                  l,
                ),
              },
              o,
              { ref: s },
            ),
            a,
          )
        })
      ;(d.propTypes = {
        children: l().node,
        className: l().string,
        color: c.$1,
        textColor: l().string,
      }),
        (d.displayName = 'CCard')
    },
    45813: (e, s, r) => {
      r.d(s, { s: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return n.createElement(
            'div',
            (0, t.pi)({ className: (0, i.Z)('card-body', a) }, l, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: l().node, className: l().string }), (c.displayName = 'CCardBody')
    },
    42675: (e, s, r) => {
      r.d(s, { B: () => c })
      var t = r(50949),
        n = r(34860),
        a = r.n(n),
        l = r(28381),
        i = r(47577),
        c = (0, l.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            a = (0, t._T)(e, ['children', 'className'])
          return l.createElement(
            'div',
            (0, t.pi)({ className: (0, i.Z)('card-footer', n) }, a, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: a().node, className: a().string }),
        (c.displayName = 'CCardFooter')
    },
    34321: (e, s, r) => {
      r.d(s, { d: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return n.createElement(
            'div',
            (0, t.pi)({ className: (0, i.Z)('card-group', a) }, l, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: l().node, className: l().string }), (c.displayName = 'CCardGroup')
    },
    42177: (e, s, r) => {
      r.d(s, { b: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.component,
            l = void 0 === a ? 'div' : a,
            c = e.className,
            d = (0, t._T)(e, ['children', 'component', 'className'])
          return n.createElement(
            l,
            (0, t.pi)({ className: (0, i.Z)('card-header', c) }, d, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (c.displayName = 'CCardHeader')
    },
    51963: (e, s, r) => {
      r.d(s, { p: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.className,
            l = e.component,
            c = void 0 === l ? 'img' : l,
            d = e.orientation,
            o = (0, t._T)(e, ['children', 'className', 'component', 'orientation'])
          return n.createElement(
            c,
            (0, t.pi)({ className: (0, i.Z)(d ? 'card-img-'.concat(d) : 'card-img', a) }, o, {
              ref: s,
            }),
            r,
          )
        })
      ;(c.propTypes = {
        children: l().node,
        className: l().string,
        component: l().elementType,
        orientation: l().oneOf(['top', 'bottom']),
      }),
        (c.displayName = 'CCardImage')
    },
    82733: (e, s, r) => {
      r.d(s, { u: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.component,
            l = void 0 === a ? 'p' : a,
            c = e.className,
            d = (0, t._T)(e, ['children', 'component', 'className'])
          return n.createElement(
            l,
            (0, t.pi)({ className: (0, i.Z)('card-text', c) }, d, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (c.displayName = 'CCardText')
    },
    10294: (e, s, r) => {
      r.d(s, { t: () => c })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.component,
            l = void 0 === a ? 'h5' : a,
            c = e.className,
            d = (0, t._T)(e, ['children', 'component', 'className'])
          return n.createElement(
            l,
            (0, t.pi)({ className: (0, i.Z)('card-title', c) }, d, { ref: s }),
            r,
          )
        })
      ;(c.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (c.displayName = 'CCardTitle')
    },
    5640: (e, s, r) => {
      r.d(s, { b: () => d })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className']),
            d = []
          return (
            c.forEach(function (e) {
              var s = l[e]
              delete l[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                d.push('col'.concat(r, '-').concat(s)),
                'boolean' === typeof s && d.push('col'.concat(r)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    d.push('col'.concat(r, '-').concat(s.span)),
                  'boolean' === typeof s.span && d.push('col'.concat(r)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    d.push('order'.concat(r, '-').concat(s.order)),
                  'number' === typeof s.offset && d.push('offset'.concat(r, '-').concat(s.offset)))
            }),
            n.createElement(
              'div',
              (0, t.pi)({ className: (0, i.Z)(d.length > 0 ? d : 'col', a) }, l, { ref: s }),
              r,
            )
          )
        }),
        o = l().oneOfType([l().bool, l().number, l().string, l().oneOf(['auto'])]),
        h = l().oneOfType([
          o,
          l().shape({
            span: o,
            offset: l().oneOfType([l().number, l().string]),
            order: l().oneOfType([l().oneOf(['first', 'last']), l().number, l().string]),
          }),
        ])
      ;(d.propTypes = {
        children: l().node,
        className: l().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (d.displayName = 'CCol')
    },
    48917: (e, s, r) => {
      r.d(s, { r: () => d })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        d = (0, n.forwardRef)(function (e, s) {
          var r = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className']),
            d = []
          return (
            c.forEach(function (e) {
              var s = l[e]
              delete l[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && d.push('row-cols'.concat(r, '-').concat(s.cols)),
                'number' === typeof s.gutter && d.push('g'.concat(r, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && d.push('gx'.concat(r, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && d.push('gy'.concat(r, '-').concat(s.gutterY)))
            }),
            n.createElement('div', { className: (0, i.Z)('row', d, a), ref: s }, r)
          )
        }),
        o = l().shape({
          cols: l().oneOfType([l().oneOf(['auto']), l().number, l().string]),
          gutter: l().oneOfType([l().string, l().number]),
          gutterX: l().oneOfType([l().string, l().number]),
          gutterY: l().oneOfType([l().string, l().number]),
        })
      ;(d.propTypes = {
        children: l().node,
        className: l().string,
        xs: o,
        sm: o,
        md: o,
        lg: o,
        xl: o,
        xxl: o,
      }),
        (d.displayName = 'CRow')
    },
    27498: (e, s, r) => {
      r.d(s, { G: () => i })
      var t = r(28381),
        n = r(34860),
        a = r.n(n),
        l = r(47577),
        i = (0, t.forwardRef)(function (e, s) {
          var r,
            n = e.children,
            a = e.className,
            i = e.component,
            c = void 0 === i ? 'ul' : i,
            d = e.flush,
            o = e.layout
          return t.createElement(
            c,
            {
              className: (0, l.Z)(
                'list-group',
                ((r = { 'list-group-flush': d }), (r['list-group-'.concat(o)] = o), r),
                a,
              ),
              ref: s,
            },
            n,
          )
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        component: a().elementType,
        flush: a().bool,
        layout: a().oneOf([
          'horizontal',
          'horizontal-sm',
          'horizontal-md',
          'horizontal-lg',
          'horizontal-xl',
          'horizontal-xxl',
        ]),
      }),
        (i.displayName = 'CListGroup')
    },
    1915: (e, s, r) => {
      r.d(s, { E: () => o })
      var t = r(50949),
        n = r(28381),
        a = r(34860),
        l = r.n(a),
        i = r(47577),
        c = r(83628),
        d = r(37169),
        o = (0, n.forwardRef)(function (e, s) {
          var r,
            a = e.children,
            l = e.active,
            d = e.className,
            o = e.disabled,
            h = e.color,
            x = e.component,
            m = void 0 === x ? 'li' : x,
            j = (0, t._T)(e, ['children', 'active', 'className', 'disabled', 'color', 'component']),
            p = 'a' === m || 'button' === m ? c.h : m
          return (
            (j = (0, t.pi)(
              (0, t.pi)(
                (0, t.pi)(
                  (0, t.pi)(
                    {},
                    ('a' === m || 'button' === m) && {
                      active: l,
                      disabled: o,
                      component: m,
                      ref: s,
                    },
                  ),
                  l && { 'aria-current': !0 },
                ),
                o && { 'aria-disabled': !0 },
              ),
              j,
            )),
            n.createElement(
              p,
              (0, t.pi)(
                {
                  className: (0, i.Z)(
                    'list-group-item',
                    ((r = {}),
                    (r['list-group-item-'.concat(h)] = h),
                    (r['list-group-item-action'] = 'a' === m || 'button' === m),
                    (r.active = l),
                    (r.disabled = o),
                    r),
                    d,
                  ),
                },
                j,
              ),
              a,
            )
          )
        })
      ;(o.propTypes = {
        active: l().bool,
        children: l().node,
        className: l().string,
        color: d.$1,
        component: l().elementType,
        disabled: l().bool,
      }),
        (o.displayName = 'CListGroupItem')
    },
    54583: (e, s, r) => {
      e.exports = r.p + 'static/media/react.83088efde08a5dedde9f.jpg'
    },
  },
])
//# sourceMappingURL=2212.88641bab.chunk.js.map
