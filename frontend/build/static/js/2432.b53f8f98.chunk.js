'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2432],
  {
    72432: (e, s, t) => {
      t.r(s), t.d(s, { default: () => S })
      var i = t(28381),
        o = t(48917),
        a = t(5640),
        n = t(13609),
        r = t(42177),
        c = t(45813),
        l = t(50949),
        d = t(34860),
        h = t.n(d),
        u = t(47577),
        m = (0, i.createContext)({}),
        p = (0, i.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.activeItemKey,
            a = e.alwaysOpen,
            n = void 0 !== a && a,
            r = e.className,
            c = e.flush,
            d = (0, l._T)(e, ['children', 'activeItemKey', 'alwaysOpen', 'className', 'flush']),
            h = (0, i.useState)(o),
            p = h[0],
            y = h[1]
          return i.createElement(
            'div',
            (0, l.pi)({ className: (0, u.Z)('accordion', { 'accordion-flush': c }, r) }, d, {
              ref: s,
            }),
            i.createElement(
              m.Provider,
              { value: { _activeItemKey: p, alwaysOpen: n, setActiveKey: y } },
              t,
            ),
          )
        })
      ;(p.propTypes = {
        alwaysOpen: h().bool,
        activeItemKey: h().oneOfType([h().number, h().string]),
        children: h().node,
        className: h().string,
        flush: h().bool,
      }),
        (p.displayName = 'CAccordion')
      var y = (0, i.createContext)({}),
        f = (0, i.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = e.itemKey,
            n = (0, l._T)(e, ['children', 'className', 'itemKey']),
            r = (0, i.useRef)(
              null !== a && void 0 !== a ? a : Math.random().toString(36).slice(2, 11),
            ),
            c = (0, i.useContext)(m),
            d = c._activeItemKey,
            h = c.alwaysOpen,
            p = c.setActiveKey,
            f = (0, i.useState)(Boolean(d === r.current)),
            x = f[0],
            g = f[1]
          return (
            (0, i.useEffect)(
              function () {
                !h && x && p(r.current)
              },
              [x],
            ),
            (0, i.useEffect)(
              function () {
                g(Boolean(d === r.current))
              },
              [d],
            ),
            i.createElement(
              'div',
              (0, l.pi)({ className: (0, u.Z)('accordion-item', o) }, n, { ref: s }),
              i.createElement(y.Provider, { value: { setVisible: g, visible: x } }, t),
            )
          )
        })
      ;(f.propTypes = {
        children: h().node,
        className: h().string,
        itemKey: h().oneOfType([h().number, h().string]),
      }),
        (f.displayName = 'CAccordionItem')
      var x = (0, i.forwardRef)(function (e, s) {
        var t = e.children,
          o = e.className,
          a = (0, l._T)(e, ['children', 'className']),
          n = (0, i.useContext)(y),
          r = n.visible,
          c = n.setVisible
        return i.createElement(
          'button',
          (0, l.pi)(
            {
              type: 'button',
              className: (0, u.Z)('accordion-button', { collapsed: !r }, o),
              'aria-expanded': !r,
              onClick: function () {
                return c(!r)
              },
            },
            a,
            { ref: s },
          ),
          t,
        )
      })
      ;(x.propTypes = { children: h().node, className: h().string }),
        (x.displayName = 'CAccordionButton')
      var g = (0, i.forwardRef)(function (e, s) {
        var t = e.children,
          o = e.className,
          a = (0, l._T)(e, ['children', 'className'])
        return i.createElement(
          'div',
          (0, l.pi)({ className: (0, u.Z)('accordion-header', o) }, a, { ref: s }),
          i.createElement(x, null, t),
        )
      })
      ;(g.propTypes = { children: h().node, className: h().string }),
        (g.displayName = 'CAccordionHeader')
      var j = t(96482),
        w = (0, i.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = (0, l._T)(e, ['children', 'className']),
            n = (0, i.useContext)(y).visible
          return i.createElement(
            j.V,
            { className: 'accordion-collapse', visible: n },
            i.createElement(
              'div',
              (0, l.pi)({ className: (0, u.Z)('accordion-body', o) }, a, { ref: s }),
              t,
            ),
          )
        })
      ;(w.propTypes = { children: h().node, className: h().string }),
        (w.displayName = 'CAccordionBody')
      var v = t(54908),
        b = t(29343)
      const S = () =>
        (0, b.jsx)(o.r, {
          children: (0, b.jsxs)(a.b, {
            xs: 12,
            children: [
              (0, b.jsxs)(n.x, {
                className: 'mb-4',
                children: [
                  (0, b.jsx)(r.b, {
                    children: (0, b.jsx)('strong', { children: 'React Accordion' }),
                  }),
                  (0, b.jsxs)(c.s, {
                    children: [
                      (0, b.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Click the accordions below to expand/collapse the accordion content.',
                      }),
                      (0, b.jsx)(v.q3, {
                        href: 'components/accordion',
                        children: (0, b.jsxs)(p, {
                          activeItemKey: 2,
                          children: [
                            (0, b.jsxs)(f, {
                              itemKey: 1,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #1' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the first item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 2,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #2' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 3,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #3' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
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
              (0, b.jsxs)(n.x, {
                className: 'mb-4',
                children: [
                  (0, b.jsxs)(r.b, {
                    children: [
                      (0, b.jsx)('strong', { children: 'React Accordion' }),
                      ' ',
                      (0, b.jsx)('small', { children: 'Flush' }),
                    ],
                  }),
                  (0, b.jsxs)(c.s, {
                    children: [
                      (0, b.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, b.jsx)('code', { children: 'flush' }),
                          ' to remove the default ',
                          (0, b.jsx)('code', { children: 'background-color' }),
                          ', some borders, and some rounded corners to render accordions edge-to-edge with their parent container.',
                        ],
                      }),
                      (0, b.jsx)(v.q3, {
                        href: 'components/accordion#flush',
                        children: (0, b.jsxs)(p, {
                          flush: !0,
                          children: [
                            (0, b.jsxs)(f, {
                              itemKey: 1,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #1' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the first item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 2,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #2' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 3,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #3' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
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
              (0, b.jsxs)(n.x, {
                className: 'mb-4',
                children: [
                  (0, b.jsxs)(r.b, {
                    children: [
                      (0, b.jsx)('strong', { children: 'React Accordion' }),
                      ' ',
                      (0, b.jsx)('small', { children: 'Always open' }),
                    ],
                  }),
                  (0, b.jsxs)(c.s, {
                    children: [
                      (0, b.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, b.jsx)('code', { children: 'alwaysOpen' }),
                          ' property to make accordion items stay open when another item is opened.',
                        ],
                      }),
                      (0, b.jsx)(v.q3, {
                        href: 'components/accordion#flush',
                        children: (0, b.jsxs)(p, {
                          alwaysOpen: !0,
                          children: [
                            (0, b.jsxs)(f, {
                              itemKey: 1,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #1' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the first item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 2,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #2' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
                                }),
                              ],
                            }),
                            (0, b.jsxs)(f, {
                              itemKey: 3,
                              children: [
                                (0, b.jsx)(g, { children: 'Accordion Item #3' }),
                                (0, b.jsxs)(w, {
                                  children: [
                                    (0, b.jsx)('strong', {
                                      children: "This is the second item's accordion body.",
                                    }),
                                    " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                    (0, b.jsx)('code', { children: '.accordion-body' }),
                                    ', though the transition does limit overflow.',
                                  ],
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
            ],
          }),
        })
    },
  },
])
//# sourceMappingURL=2432.b53f8f98.chunk.js.map
