'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1469],
  {
    31469: (e, s, t) => {
      t.r(s), t.d(s, { default: () => k })
      var n = t(28381),
        r = t(50949),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = t(63173),
        i = t(37169),
        d = t(41829),
        m = (0, n.createContext)({}),
        h = (0, n.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.animation,
            a = void 0 === o || o,
            i = e.autohide,
            h = void 0 === i || i,
            u = e.className,
            p = e.color,
            f = e.delay,
            x = void 0 === f ? 5e3 : f,
            g = e.index,
            j = e.key,
            b = e.visible,
            y = void 0 !== b && b,
            v = e.onClose,
            w = e.onShow,
            N = (0, r._T)(e, [
              'children',
              'animation',
              'autohide',
              'className',
              'color',
              'delay',
              'index',
              'key',
              'visible',
              'onClose',
              'onShow',
            ]),
            T = (0, n.useRef)(),
            C = (0, c.A7)(s, T),
            R = (0, n.useState)(!1),
            E = R[0],
            k = R[1],
            _ = (0, n.useRef)()
          ;(0, n.useEffect)(
            function () {
              k(y)
            },
            [y],
          )
          var O = { visible: E, setVisible: k }
          ;(0, n.useEffect)(function () {
            return function () {
              return clearTimeout(_.current)
            }
          }, []),
            (0, n.useEffect)(
              function () {
                H()
              },
              [E],
            )
          var H = function () {
            h &&
              (clearTimeout(_.current),
              (_.current = window.setTimeout(function () {
                k(!1)
              }, x)))
          }
          return n.createElement(
            d.ZP,
            {
              in: E,
              nodeRef: T,
              onEnter: function () {
                return w && w(null !== g && void 0 !== g ? g : null)
              },
              onExited: function () {
                return v && v(null !== g && void 0 !== g ? g : null)
              },
              timeout: 250,
              unmountOnExit: !0,
            },
            function (e) {
              var s
              return n.createElement(
                m.Provider,
                { value: O },
                n.createElement(
                  'div',
                  (0, r.pi)(
                    {
                      className: (0, l.Z)(
                        'toast',
                        ((s = { fade: a }),
                        (s['bg-'.concat(p)] = p),
                        (s['border-0'] = p),
                        (s['show showing'] = 'entering' === e || 'exiting' === e),
                        (s.show = 'entered' === e),
                        s),
                        u,
                      ),
                      'aria-live': 'assertive',
                      'aria-atomic': 'true',
                      role: 'alert',
                      onMouseEnter: function () {
                        return clearTimeout(_.current)
                      },
                      onMouseLeave: function () {
                        return H()
                      },
                    },
                    N,
                    { key: j, ref: C },
                  ),
                  t,
                ),
              )
            },
          )
        })
      ;(h.propTypes = {
        animation: a().bool,
        autohide: a().bool,
        children: a().node,
        className: a().string,
        color: i.$1,
        delay: a().number,
        index: a().number,
        key: a().number,
        onClose: a().func,
        onShow: a().func,
        visible: a().bool,
      }),
        (h.displayName = 'CToast')
      var u = t(95117),
        p = (0, n.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.component,
            a = (0, r._T)(e, ['children', 'component']),
            l = (0, n.useContext)(m).setVisible
          return o
            ? n.createElement(
                o,
                (0, r.pi)(
                  {
                    onClick: function () {
                      return l(!1)
                    },
                  },
                  a,
                  { ref: s },
                ),
                t,
              )
            : n.createElement(
                u.p,
                (0, r.pi)(
                  {
                    onClick: function () {
                      return l(!1)
                    },
                  },
                  a,
                  { ref: s },
                ),
              )
        })
      ;(p.propTypes = (0, r.pi)((0, r.pi)({}, u.p.propTypes), { component: a().elementType })),
        (p.displayName = 'CToastClose')
      var f = (0, n.forwardRef)(function (e, s) {
        var t = e.children,
          o = e.className,
          a = e.closeButton,
          c = (0, r._T)(e, ['children', 'className', 'closeButton'])
        return n.createElement(
          'div',
          (0, r.pi)({ className: (0, l.Z)('toast-header', o) }, c, { ref: s }),
          t,
          a && n.createElement(p, null),
        )
      })
      ;(f.propTypes = { children: a().node, className: a().string, closeButton: a().bool }),
        (f.displayName = 'CToastHeader')
      var x = (0, n.forwardRef)(function (e, s) {
        var t = e.children,
          o = e.className,
          a = (0, r._T)(e, ['children', 'className'])
        return n.createElement(
          'div',
          (0, r.pi)({ className: (0, l.Z)('toast-body', o) }, a, { ref: s }),
          t,
        )
      })
      ;(x.propTypes = { children: a().node, className: a().string }), (x.displayName = 'CToastBody')
      var g = t(79361),
        j = t(53419),
        b = (0, n.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = e.placement,
            c = e.push,
            i = (0, r._T)(e, ['children', 'className', 'placement', 'push']),
            d = (0, n.useState)([]),
            m = d[0],
            h = d[1],
            u = (0, n.useRef)(0)
          ;(0, n.useEffect)(
            function () {
              u.current++, c && p(c)
            },
            [c],
          )
          var p = function (e) {
            h(function (s) {
              return (0, r.ev)(
                (0, r.ev)([], s, !0),
                [
                  n.cloneElement(e, {
                    index: u.current,
                    key: u.current,
                    onClose: function (e) {
                      return h(function (s) {
                        return s.filter(function (s) {
                          return s.props.index !== e
                        })
                      })
                    },
                  }),
                ],
                !1,
              )
            })
          }
          return n.createElement(
            j.D,
            { portal: 'string' === typeof a },
            m.length > 0 || t
              ? n.createElement(
                  'div',
                  (0, r.pi)(
                    {
                      className: (0, l.Z)(
                        'toaster toast-container',
                        {
                          'position-fixed': a,
                          'top-0': a && a.includes('top'),
                          'top-50 translate-middle-y': a && a.includes('middle'),
                          'bottom-0': a && a.includes('bottom'),
                          'start-0': a && a.includes('start'),
                          'start-50 translate-middle-x': a && a.includes('center'),
                          'end-0': a && a.includes('end'),
                        },
                        o,
                      ),
                    },
                    i,
                    { ref: s },
                  ),
                  t,
                  m.map(function (e) {
                    return n.cloneElement(e, { visible: !0 })
                  }),
                )
              : null,
          )
        })
      ;(b.propTypes = {
        children: a().node,
        className: a().string,
        placement: a().oneOfType([
          a().string,
          a().oneOf([
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ]),
        ]),
        push: a().any,
      }),
        (b.displayName = 'CToaster')
      var y = t(48917),
        v = t(5640),
        w = t(13609),
        N = t(42177),
        T = t(45813),
        C = t(54908),
        R = t(29343)
      const E = () => {
          const [e, s] = (0, n.useState)(0),
            t = (0, n.useRef)(),
            r = (0, R.jsxs)(h, {
              title: 'CoreUI for React.js',
              children: [
                (0, R.jsxs)(f, {
                  closeButton: !0,
                  children: [
                    (0, R.jsx)('svg', {
                      className: 'rounded me-2',
                      width: '20',
                      height: '20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      preserveAspectRatio: 'xMidYMid slice',
                      focusable: 'false',
                      role: 'img',
                      children: (0, R.jsx)('rect', {
                        width: '100%',
                        height: '100%',
                        fill: '#007aff',
                      }),
                    }),
                    (0, R.jsx)('strong', { className: 'me-auto', children: 'CoreUI for React.js' }),
                    (0, R.jsx)('small', { children: '7 min ago' }),
                  ],
                }),
                (0, R.jsx)(x, { children: 'Hello, world! This is a toast message.' }),
              ],
            })
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(g.u, { color: 'primary', onClick: () => s(r), children: 'Send a toast' }),
              (0, R.jsx)(b, { ref: t, push: e, placement: 'top-end' }),
            ],
          })
        },
        k = () =>
          (0, R.jsxs)(y.r, {
            children: [
              (0, R.jsx)(v.b, {
                xs: 12,
                children: (0, R.jsxs)(w.x, {
                  className: 'mb-4',
                  children: [
                    (0, R.jsxs)(N.b, {
                      children: [
                        (0, R.jsx)('strong', { children: 'React Toast' }),
                        ' ',
                        (0, R.jsx)('small', { children: 'Basic' }),
                      ],
                    }),
                    (0, R.jsxs)(T.s, {
                      children: [
                        (0, R.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button.',
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast',
                          children: (0, R.jsxs)(h, {
                            title: 'CoreUI for React.js',
                            autohide: !1,
                            visible: !0,
                            children: [
                              (0, R.jsxs)(f, {
                                closeButton: !0,
                                children: [
                                  (0, R.jsx)('svg', {
                                    className: 'rounded me-2',
                                    width: '20',
                                    height: '20',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    preserveAspectRatio: 'xMidYMid slice',
                                    focusable: 'false',
                                    role: 'img',
                                    children: (0, R.jsx)('rect', {
                                      width: '100%',
                                      height: '100%',
                                      fill: '#007aff',
                                    }),
                                  }),
                                  (0, R.jsx)('strong', {
                                    className: 'me-auto',
                                    children: 'CoreUI for React.js',
                                  }),
                                  (0, R.jsx)('small', { children: '7 min ago' }),
                                ],
                              }),
                              (0, R.jsx)(x, { children: 'Hello, world! This is a toast message.' }),
                            ],
                          }),
                        }),
                        (0, R.jsx)(C.q3, { href: 'components/toast', children: E() }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, R.jsx)(v.b, {
                xs: 12,
                children: (0, R.jsxs)(w.x, {
                  className: 'mb-4',
                  children: [
                    (0, R.jsxs)(N.b, {
                      children: [
                        (0, R.jsx)('strong', { children: 'React Toast' }),
                        ' ',
                        (0, R.jsx)('small', { children: 'Translucent' }),
                      ],
                    }),
                    (0, R.jsxs)(T.s, {
                      children: [
                        (0, R.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            "Toasts are slightly translucent to blend in with what's below them.",
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast#translucent',
                          tabContentClassName: 'bg-dark',
                          children: (0, R.jsxs)(h, {
                            title: 'CoreUI for React.js',
                            autohide: !1,
                            visible: !0,
                            children: [
                              (0, R.jsxs)(f, {
                                closeButton: !0,
                                children: [
                                  (0, R.jsx)('svg', {
                                    className: 'rounded me-2',
                                    width: '20',
                                    height: '20',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    preserveAspectRatio: 'xMidYMid slice',
                                    focusable: 'false',
                                    role: 'img',
                                    children: (0, R.jsx)('rect', {
                                      width: '100%',
                                      height: '100%',
                                      fill: '#007aff',
                                    }),
                                  }),
                                  (0, R.jsx)('strong', {
                                    className: 'me-auto',
                                    children: 'CoreUI for React.js',
                                  }),
                                  (0, R.jsx)('small', { children: '7 min ago' }),
                                ],
                              }),
                              (0, R.jsx)(x, { children: 'Hello, world! This is a toast message.' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, R.jsx)(v.b, {
                xs: 12,
                children: (0, R.jsxs)(w.x, {
                  className: 'mb-4',
                  children: [
                    (0, R.jsxs)(N.b, {
                      children: [
                        (0, R.jsx)('strong', { children: 'React Toast' }),
                        ' ',
                        (0, R.jsx)('small', { children: 'Stacking' }),
                      ],
                    }),
                    (0, R.jsxs)(T.s, {
                      children: [
                        (0, R.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.',
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast#stacking',
                          children: (0, R.jsxs)(b, {
                            className: 'position-static',
                            children: [
                              (0, R.jsxs)(h, {
                                title: 'CoreUI for React.js',
                                autohide: !1,
                                visible: !0,
                                children: [
                                  (0, R.jsxs)(f, {
                                    closeButton: !0,
                                    children: [
                                      (0, R.jsx)('svg', {
                                        className: 'rounded me-2',
                                        width: '20',
                                        height: '20',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        preserveAspectRatio: 'xMidYMid slice',
                                        focusable: 'false',
                                        role: 'img',
                                        children: (0, R.jsx)('rect', {
                                          width: '100%',
                                          height: '100%',
                                          fill: '#007aff',
                                        }),
                                      }),
                                      (0, R.jsx)('strong', {
                                        className: 'me-auto',
                                        children: 'CoreUI for React.js',
                                      }),
                                      (0, R.jsx)('small', { children: '7 min ago' }),
                                    ],
                                  }),
                                  (0, R.jsx)(x, {
                                    children: 'Hello, world! This is a toast message.',
                                  }),
                                ],
                              }),
                              (0, R.jsxs)(h, {
                                title: 'CoreUI for React.js',
                                autohide: !1,
                                visible: !0,
                                children: [
                                  (0, R.jsxs)(f, {
                                    closeButton: !0,
                                    children: [
                                      (0, R.jsx)('svg', {
                                        className: 'rounded me-2',
                                        width: '20',
                                        height: '20',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        preserveAspectRatio: 'xMidYMid slice',
                                        focusable: 'false',
                                        role: 'img',
                                        children: (0, R.jsx)('rect', {
                                          width: '100%',
                                          height: '100%',
                                          fill: '#007aff',
                                        }),
                                      }),
                                      (0, R.jsx)('strong', {
                                        className: 'me-auto',
                                        children: 'CoreUI for React.js',
                                      }),
                                      (0, R.jsx)('small', { children: '7 min ago' }),
                                    ],
                                  }),
                                  (0, R.jsx)(x, {
                                    children: 'Hello, world! This is a toast message.',
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
              (0, R.jsx)(v.b, {
                xs: 12,
                children: (0, R.jsxs)(w.x, {
                  className: 'mb-4',
                  children: [
                    (0, R.jsxs)(N.b, {
                      children: [
                        (0, R.jsx)('strong', { children: 'React Toast' }),
                        ' ',
                        (0, R.jsx)('small', { children: 'Custom content' }),
                      ],
                    }),
                    (0, R.jsxs)(T.s, {
                      children: [
                        (0, R.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Customize your toasts by removing sub-components, tweaking them with',
                            ' ',
                            (0, R.jsx)('a', {
                              href: 'https://coreui.io/docs/utilities/api',
                              children: 'utilities',
                            }),
                            ", or by adding your own markup. Here we've created a simpler toast by removing the default",
                            ' ',
                            (0, R.jsx)('code', { children: '<CToastHeader>' }),
                            ', adding a custom hide icon from',
                            ' ',
                            (0, R.jsx)('a', {
                              href: 'https://coreui.io/icons/',
                              children: 'CoreUI Icons',
                            }),
                            ', and using some',
                            ' ',
                            (0, R.jsx)('a', {
                              href: 'https://coreui.io/docs/utilities/flex',
                              children: 'flexbox utilities',
                            }),
                            ' to adjust the layout.',
                          ],
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast#custom-content',
                          children: (0, R.jsx)(h, {
                            autohide: !1,
                            className: 'align-items-center',
                            visible: !0,
                            children: (0, R.jsxs)('div', {
                              className: 'd-flex',
                              children: [
                                (0, R.jsx)(x, {
                                  children: 'Hello, world! This is a toast message.',
                                }),
                                (0, R.jsx)(p, { className: 'me-2 m-auto' }),
                              ],
                            }),
                          }),
                        }),
                        (0, R.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'Alternatively, you can also add additional controls and components to toasts.',
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast#custom-content',
                          children: (0, R.jsx)(h, {
                            autohide: !1,
                            visible: !0,
                            children: (0, R.jsxs)(x, {
                              children: [
                                'Hello, world! This is a toast message.',
                                (0, R.jsxs)('div', {
                                  className: 'mt-2 pt-2 border-top',
                                  children: [
                                    (0, R.jsx)(g.u, {
                                      type: 'button',
                                      color: 'primary',
                                      size: 'sm',
                                      children: 'Take action',
                                    }),
                                    (0, R.jsx)(p, {
                                      component: g.u,
                                      color: 'secondary',
                                      size: 'sm',
                                      className: 'ms-1',
                                      children: 'Close',
                                    }),
                                  ],
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
              (0, R.jsx)(v.b, {
                xs: 12,
                children: (0, R.jsxs)(w.x, {
                  className: 'mb-4',
                  children: [
                    (0, R.jsxs)(N.b, {
                      children: [
                        (0, R.jsx)('strong', { children: 'React Toast' }),
                        ' ',
                        (0, R.jsx)('small', { children: 'Custom content' }),
                      ],
                    }),
                    (0, R.jsxs)(T.s, {
                      children: [
                        (0, R.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Building on the above example, you can create different toast color schemes with our',
                            ' ',
                            (0, R.jsx)('a', {
                              href: 'https://coreui.io/docs/utilities/colors',
                              children: 'color',
                            }),
                            ' and',
                            ' ',
                            (0, R.jsx)('a', {
                              href: 'https://coreui.io/docs/utilities/background',
                              children: 'background',
                            }),
                            " utilities. Here we've set ",
                            (0, R.jsx)('code', { children: 'color="primary"' }),
                            ' and added ',
                            (0, R.jsx)('code', { children: '.text-white' }),
                            ' ',
                            'class to the ',
                            (0, R.jsx)('code', { children: '<Ctoast>' }),
                            ', and then set ',
                            (0, R.jsx)('code', { children: 'white' }),
                            ' property to our close button. For a crisp edge, we remove the default border with',
                            ' ',
                            (0, R.jsx)('code', { children: '.border-0' }),
                            '.',
                          ],
                        }),
                        (0, R.jsx)(C.q3, {
                          href: 'components/toast#color-schemes',
                          children: (0, R.jsx)(h, {
                            autohide: !1,
                            color: 'primary',
                            className: 'text-white align-items-center',
                            visible: !0,
                            children: (0, R.jsxs)('div', {
                              className: 'd-flex',
                              children: [
                                (0, R.jsx)(x, {
                                  children: 'Hello, world! This is a toast message.',
                                }),
                                (0, R.jsx)(p, { className: 'me-2 m-auto', white: !0 }),
                              ],
                            }),
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
    13609: (e, s, t) => {
      t.d(s, { x: () => i })
      var n = t(50949),
        r = t(28381),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = t(37169),
        i = (0, r.forwardRef)(function (e, s) {
          var t,
            o = e.children,
            a = e.className,
            c = e.color,
            i = e.textColor,
            d = (0, n._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, l.Z)(
                  'card',
                  ((t = {}), (t['bg-'.concat(c)] = c), (t['text-'.concat(i)] = i), t),
                  a,
                ),
              },
              d,
              { ref: s },
            ),
            o,
          )
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        color: c.$1,
        textColor: a().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, s, t) => {
      t.d(s, { s: () => c })
      var n = t(50949),
        r = t(28381),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = (0, n._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, n.pi)({ className: (0, l.Z)('card-body', o) }, a, { ref: s }),
            t,
          )
        })
      ;(c.propTypes = { children: a().node, className: a().string }), (c.displayName = 'CCardBody')
    },
    42177: (e, s, t) => {
      t.d(s, { b: () => c })
      var n = t(50949),
        r = t(28381),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.component,
            a = void 0 === o ? 'div' : o,
            c = e.className,
            i = (0, n._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            a,
            (0, n.pi)({ className: (0, l.Z)('card-header', c) }, i, { ref: s }),
            t,
          )
        })
      ;(c.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (c.displayName = 'CCardHeader')
    },
    5640: (e, s, t) => {
      t.d(s, { b: () => i })
      var n = t(50949),
        r = t(28381),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = (0, n._T)(e, ['children', 'className']),
            i = []
          return (
            c.forEach(function (e) {
              var s = a[e]
              delete a[e]
              var t = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                i.push('col'.concat(t, '-').concat(s)),
                'boolean' === typeof s && i.push('col'.concat(t)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    i.push('col'.concat(t, '-').concat(s.span)),
                  'boolean' === typeof s.span && i.push('col'.concat(t)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    i.push('order'.concat(t, '-').concat(s.order)),
                  'number' === typeof s.offset && i.push('offset'.concat(t, '-').concat(s.offset)))
            }),
            r.createElement(
              'div',
              (0, n.pi)({ className: (0, l.Z)(i.length > 0 ? i : 'col', o) }, a, { ref: s }),
              t,
            )
          )
        }),
        d = a().oneOfType([a().bool, a().number, a().string, a().oneOf(['auto'])]),
        m = a().oneOfType([
          d,
          a().shape({
            span: d,
            offset: a().oneOfType([a().number, a().string]),
            order: a().oneOfType([a().oneOf(['first', 'last']), a().number, a().string]),
          }),
        ])
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (i.displayName = 'CCol')
    },
    48917: (e, s, t) => {
      t.d(s, { r: () => i })
      var n = t(50949),
        r = t(28381),
        o = t(34860),
        a = t.n(o),
        l = t(47577),
        c = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            o = e.className,
            a = (0, n._T)(e, ['children', 'className']),
            i = []
          return (
            c.forEach(function (e) {
              var s = a[e]
              delete a[e]
              var t = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && i.push('row-cols'.concat(t, '-').concat(s.cols)),
                'number' === typeof s.gutter && i.push('g'.concat(t, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && i.push('gx'.concat(t, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && i.push('gy'.concat(t, '-').concat(s.gutterY)))
            }),
            r.createElement('div', { className: (0, l.Z)('row', i, o), ref: s }, t)
          )
        }),
        d = a().shape({
          cols: a().oneOfType([a().oneOf(['auto']), a().number, a().string]),
          gutter: a().oneOfType([a().string, a().number]),
          gutterX: a().oneOfType([a().string, a().number]),
          gutterY: a().oneOfType([a().string, a().number]),
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
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
//# sourceMappingURL=1469.9edc0e58.chunk.js.map
