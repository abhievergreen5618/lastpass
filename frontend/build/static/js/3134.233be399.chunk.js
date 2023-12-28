'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [3134],
  {
    7027: (e, s, t) => {
      t.r(s), t.d(s, { default: () => w })
      var n = t(28381),
        r = t(48917),
        c = t(5640),
        l = t(13609),
        a = t(42177),
        o = t(45813),
        i = t(50949),
        d = t(34860),
        h = t.n(d),
        m = t(47577),
        u = t(93145),
        x = t(63173),
        f = (0, n.createContext)({}),
        p = (0, n.forwardRef)(function (e, s) {
          var t = e.children,
            r = e.activeIndex,
            c = void 0 === r ? 0 : r,
            l = e.className,
            a = e.controls,
            o = e.dark,
            d = e.indicators,
            h = e.interval,
            p = void 0 === h ? 5e3 : h,
            v = e.onSlid,
            j = e.onSlide,
            g = e.pause,
            b = void 0 === g ? 'hover' : g,
            C = e.touch,
            y = void 0 === C || C,
            N = e.transition,
            E = e.wrap,
            w = void 0 === E || E,
            F = (0, i._T)(e, [
              'children',
              'activeIndex',
              'className',
              'controls',
              'dark',
              'indicators',
              'interval',
              'onSlid',
              'onSlide',
              'pause',
              'touch',
              'transition',
              'wrap',
            ]),
            k = (0, n.useRef)(null),
            D = (0, x.A7)(s, k),
            T = (0, n.useRef)({}).current,
            S = (0, n.useState)(c),
            A = S[0],
            _ = S[1],
            B = (0, n.useState)(!1),
            R = B[0],
            O = B[1],
            Z = (0, n.useState)(),
            I = Z[0],
            L = Z[1],
            q = (0, n.useState)('next'),
            H = q[0],
            z = q[1],
            X = (0, n.useState)(0),
            Y = X[0],
            W = X[1],
            M = (0, n.useState)(null),
            U = M[0],
            P = M[1],
            V = (0, n.useState)(),
            $ = V[0],
            G = V[1]
          ;(0, n.useEffect)(function () {
            W(n.Children.toArray(t).length)
          }),
            (0, n.useEffect)(
              function () {
                $ && J()
              },
              [$],
            ),
            (0, n.useEffect)(
              function () {
                !R && J(), !R && v && v(A, H), R && j && j(A, H)
              },
              [R],
            ),
            (0, n.useEffect)(function () {
              return (
                window.addEventListener('scroll', se),
                function () {
                  window.removeEventListener('scroll', se)
                }
              )
            })
          var J = function () {
              K(),
                (w || A !== Y - 1) &&
                  'number' === typeof p &&
                  (T.timeout = setTimeout(
                    function () {
                      return Q()
                    },
                    'number' === typeof I ? I : p,
                  ))
            },
            K = function () {
              return b && T.timeout && clearTimeout(T.timeout)
            },
            Q = function () {
              if (!document.hidden && k.current && (0, u.Z)(k.current)) {
                if (R) return
                ee('next')
              }
            },
            ee = function (e) {
              R || (z(e), _('next' === e ? (A === Y - 1 ? 0 : A + 1) : 0 === A ? Y - 1 : A - 1))
            },
            se = function () {
              !document.hidden && k.current && (0, u.Z)(k.current) ? G(!0) : G(!1)
            }
          return n.createElement(
            'div',
            (0, i.pi)(
              { className: (0, m.Z)('carousel slide', { 'carousel-fade': 'crossfade' === N }, l) },
              o && { 'data-coreui-theme': 'dark' },
              { onMouseEnter: K, onMouseLeave: J },
              y && {
                onTouchStart: function (e) {
                  var s = e.touches[0].clientX
                  P(s)
                },
                onTouchMove: function (e) {
                  if (null !== U) {
                    var s = U - e.touches[0].clientX
                    s > 5 && ee('next'), s < -5 && ee('prev'), P(null)
                  }
                },
              },
              F,
              { ref: D },
            ),
            n.createElement(
              f.Provider,
              { value: { setAnimating: O, setCustomInterval: L } },
              d &&
                n.createElement(
                  'div',
                  { className: 'carousel-indicators' },
                  Array.from({ length: Y }, function (e, s) {
                    return s
                  }).map(function (e) {
                    return n.createElement(
                      'button',
                      (0, i.pi)(
                        {
                          key: 'indicator'.concat(e),
                          onClick: function () {
                            !R &&
                              (function (e) {
                                if (A !== e) A < e ? (z('next'), _(e)) : A > e && (z('prev'), _(e))
                              })(e)
                          },
                          className: (0, m.Z)({ active: A === e }),
                          'data-coreui-target': '',
                        },
                        A === e && { 'aria-current': !0 },
                        { 'aria-label': 'Slide '.concat(e + 1) },
                      ),
                    )
                  }),
                ),
              n.createElement(
                'div',
                { className: 'carousel-inner' },
                n.Children.map(t, function (e, s) {
                  if (n.isValidElement(e))
                    return n.cloneElement(e, { active: A === s, direction: H, key: s })
                }),
              ),
              a &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    'button',
                    {
                      className: 'carousel-control-prev',
                      onClick: function () {
                        return ee('prev')
                      },
                    },
                    n.createElement('span', {
                      className: 'carousel-control-prev-icon',
                      'aria-label': 'prev',
                    }),
                  ),
                  n.createElement(
                    'button',
                    {
                      className: 'carousel-control-next',
                      onClick: function () {
                        return ee('next')
                      },
                    },
                    n.createElement('span', {
                      className: 'carousel-control-next-icon',
                      'aria-label': 'next',
                    }),
                  ),
                ),
            ),
          )
        })
      ;(p.propTypes = {
        activeIndex: h().number,
        children: h().node,
        className: h().string,
        controls: h().bool,
        dark: h().bool,
        indicators: h().bool,
        interval: h().oneOfType([h().bool, h().number]),
        onSlid: h().func,
        onSlide: h().func,
        pause: h().oneOf([!1, 'hover']),
        touch: h().bool,
        transition: h().oneOf(['slide', 'crossfade']),
        wrap: h().bool,
      }),
        (p.displayName = 'CCarousel')
      var v = (0, n.forwardRef)(function (e, s) {
        var t = e.children,
          r = e.className,
          c = e.active,
          l = e.direction,
          a = e.interval,
          o = void 0 !== a && a,
          d = (0, i._T)(e, ['children', 'className', 'active', 'direction', 'interval']),
          h = (0, n.useContext)(f),
          u = h.setAnimating,
          p = h.setCustomInterval,
          v = (0, n.useRef)(null),
          j = (0, x.A7)(s, v),
          g = (0, n.useRef)(),
          b = (0, n.useState)(),
          C = b[0],
          y = b[1],
          N = (0, n.useState)(),
          E = N[0],
          w = N[1],
          F = (0, n.useState)(c && 'active'),
          k = F[0],
          D = F[1],
          T = (0, n.useState)(0),
          S = T[0],
          A = T[1]
        return (
          (0, n.useEffect)(
            function () {
              c && (p(o), 0 !== S && w('carousel-item-'.concat(l))),
                g.current && !c && D('active'),
                (c || g.current) &&
                  setTimeout(function () {
                    var e
                    0 !== S &&
                      (null === (e = v.current) || void 0 === e || e.offsetHeight,
                      y('carousel-item-'.concat('next' === l ? 'start' : 'end')))
                  }, 0),
                (g.current = c),
                0 === S && A(S + 1)
            },
            [c],
          ),
          (0, n.useEffect)(function () {
            var e, s
            return (
              null === (e = v.current) ||
                void 0 === e ||
                e.addEventListener('transitionstart', function () {
                  c && u(!0)
                }),
              null === (s = v.current) ||
                void 0 === s ||
                s.addEventListener('transitionend', function () {
                  c && u(!1), y(''), w(''), c && D('active'), c || D('')
                }),
              function () {
                var e, s
                null === (e = v.current) ||
                  void 0 === e ||
                  e.removeEventListener('transitionstart', function () {
                    c && u(!0)
                  }),
                  null === (s = v.current) ||
                    void 0 === s ||
                    s.removeEventListener('transitionend', function () {
                      c && u(!1), y(''), w(''), c && D('active'), c || D('')
                    })
              }
            )
          }),
          n.createElement(
            'div',
            (0, i.pi)({ className: (0, m.Z)('carousel-item', k, C, E, r), ref: j }, d),
            t,
          )
        )
      })
      ;(v.propTypes = {
        active: h().bool,
        children: h().node,
        className: h().string,
        direction: h().string,
        interval: h().oneOfType([h().bool, h().number]),
      }),
        (v.displayName = 'CCarouselItem')
      var j = (0, n.forwardRef)(function (e, s) {
        var t = e.className,
          r = (0, i._T)(e, ['className'])
        return n.createElement(
          'div',
          (0, i.pi)({ className: (0, m.Z)('carousel-caption', t) }, r, { ref: s }),
        )
      })
      ;(j.propTypes = { className: h().string }), (j.displayName = 'CCarouselCaption')
      var g = t(54908)
      const b = t.p + 'static/media/angular.2f3764e2ec8b0b47ebe6.jpg'
      var C = t(54583)
      const y = t.p + 'static/media/vue.8a74d93fde1a02c24730.jpg'
      var N = t(29343)
      const E = [
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        ],
        w = () =>
          (0, N.jsxs)(r.r, {
            children: [
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'Slide only' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsx)('p', {
                          className: 'text-body-secondary small',
                          children: 'Here\u2019s a carousel with slides',
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel',
                          children: (0, N.jsxs)(p, {
                            children: [
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: C,
                                  alt: 'slide 1',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: b,
                                  alt: 'slide 2',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: y,
                                  alt: 'slide 3',
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
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'With controls' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Adding in the previous and next controls by ',
                            (0, N.jsx)('code', { children: 'controls' }),
                            ' property.',
                          ],
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel/#with-controls',
                          children: (0, N.jsxs)(p, {
                            controls: !0,
                            children: [
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: C,
                                  alt: 'slide 1',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: b,
                                  alt: 'slide 2',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: y,
                                  alt: 'slide 3',
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
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'With indicators' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'You can attach the indicators to the carousel, lengthwise the controls, too.',
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel/#with-indicators',
                          children: (0, N.jsxs)(p, {
                            controls: !0,
                            indicators: !0,
                            children: [
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: C,
                                  alt: 'slide 1',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: b,
                                  alt: 'slide 2',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: y,
                                  alt: 'slide 3',
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
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'With captions' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'You can add captions to slides with the ',
                            (0, N.jsx)('code', { children: '<CCarouselCaption>' }),
                            ' element within any ',
                            (0, N.jsx)('code', { children: '<CCarouselItem>' }),
                            '. They can be immediately hidden on smaller viewports, as shown below, with optional',
                            ' ',
                            (0, N.jsx)('a', {
                              href: 'https://coreui.io//utilities/display',
                              children: 'display utilities',
                            }),
                            '. We hide them with ',
                            (0, N.jsx)('code', { children: '.d-none' }),
                            ' and draw them back on medium-sized devices with',
                            ' ',
                            (0, N.jsx)('code', { children: '.d-md-block' }),
                            '.',
                          ],
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel/#with-captions',
                          children: (0, N.jsxs)(p, {
                            controls: !0,
                            indicators: !0,
                            children: [
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: C,
                                    alt: 'slide 1',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'First slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: b,
                                    alt: 'slide 2',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'Second slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: y,
                                    alt: 'slide 3',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'Third slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
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
              }),
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'Crossfade' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Add ',
                            (0, N.jsx)('code', { children: 'transition="crossfade"' }),
                            ' to your carousel to animate slides with a fade transition instead of a slide.',
                          ],
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel/#crossfade',
                          children: (0, N.jsxs)(p, {
                            controls: !0,
                            transition: 'crossfade',
                            children: [
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: C,
                                  alt: 'slide 1',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: b,
                                  alt: 'slide 2',
                                }),
                              }),
                              (0, N.jsx)(v, {
                                children: (0, N.jsx)('img', {
                                  className: 'd-block w-100',
                                  src: y,
                                  alt: 'slide 3',
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
              (0, N.jsx)(c.b, {
                xs: 12,
                children: (0, N.jsxs)(l.x, {
                  className: 'mb-4',
                  children: [
                    (0, N.jsxs)(a.b, {
                      children: [
                        (0, N.jsx)('strong', { children: 'Carousel' }),
                        ' ',
                        (0, N.jsx)('small', { children: 'Dark variant' }),
                      ],
                    }),
                    (0, N.jsxs)(o.s, {
                      children: [
                        (0, N.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Add ',
                            (0, N.jsx)('code', { children: 'dark' }),
                            ' property to the ',
                            (0, N.jsx)('code', { children: 'CCarousel' }),
                            ' for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the ',
                            (0, N.jsx)('code', { children: 'filter' }),
                            ' CSS property. Captions and controls have additional Sass variables that customize the ',
                            (0, N.jsx)('code', { children: 'color' }),
                            ' and ',
                            (0, N.jsx)('code', { children: 'background-color' }),
                            '.',
                          ],
                        }),
                        (0, N.jsx)(g.q3, {
                          href: 'components/carousel/#dark-variant',
                          children: (0, N.jsxs)(p, {
                            controls: !0,
                            indicators: !0,
                            dark: !0,
                            children: [
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: E[0],
                                    alt: 'slide 1',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'First slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: E[1],
                                    alt: 'slide 2',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'Second slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(v, {
                                children: [
                                  (0, N.jsx)('img', {
                                    className: 'd-block w-100',
                                    src: E[2],
                                    alt: 'slide 3',
                                  }),
                                  (0, N.jsxs)(j, {
                                    className: 'd-none d-md-block',
                                    children: [
                                      (0, N.jsx)('h5', { children: 'Third slide label' }),
                                      (0, N.jsx)('p', {
                                        children:
                                          'Some representative placeholder content for the first slide.',
                                      }),
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
              }),
            ],
          })
    },
    13609: (e, s, t) => {
      t.d(s, { x: () => i })
      var n = t(50949),
        r = t(28381),
        c = t(34860),
        l = t.n(c),
        a = t(47577),
        o = t(37169),
        i = (0, r.forwardRef)(function (e, s) {
          var t,
            c = e.children,
            l = e.className,
            o = e.color,
            i = e.textColor,
            d = (0, n._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, n.pi)(
              {
                className: (0, a.Z)(
                  'card',
                  ((t = {}), (t['bg-'.concat(o)] = o), (t['text-'.concat(i)] = i), t),
                  l,
                ),
              },
              d,
              { ref: s },
            ),
            c,
          )
        })
      ;(i.propTypes = {
        children: l().node,
        className: l().string,
        color: o.$1,
        textColor: l().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, s, t) => {
      t.d(s, { s: () => o })
      var n = t(50949),
        r = t(28381),
        c = t(34860),
        l = t.n(c),
        a = t(47577),
        o = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            c = e.className,
            l = (0, n._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, n.pi)({ className: (0, a.Z)('card-body', c) }, l, { ref: s }),
            t,
          )
        })
      ;(o.propTypes = { children: l().node, className: l().string }), (o.displayName = 'CCardBody')
    },
    42177: (e, s, t) => {
      t.d(s, { b: () => o })
      var n = t(50949),
        r = t(28381),
        c = t(34860),
        l = t.n(c),
        a = t(47577),
        o = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            c = e.component,
            l = void 0 === c ? 'div' : c,
            o = e.className,
            i = (0, n._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, n.pi)({ className: (0, a.Z)('card-header', o) }, i, { ref: s }),
            t,
          )
        })
      ;(o.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (o.displayName = 'CCardHeader')
    },
    5640: (e, s, t) => {
      t.d(s, { b: () => i })
      var n = t(50949),
        r = t(28381),
        c = t(34860),
        l = t.n(c),
        a = t(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            c = e.className,
            l = (0, n._T)(e, ['children', 'className']),
            i = []
          return (
            o.forEach(function (e) {
              var s = l[e]
              delete l[e]
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
              (0, n.pi)({ className: (0, a.Z)(i.length > 0 ? i : 'col', c) }, l, { ref: s }),
              t,
            )
          )
        }),
        d = l().oneOfType([l().bool, l().number, l().string, l().oneOf(['auto'])]),
        h = l().oneOfType([
          d,
          l().shape({
            span: d,
            offset: l().oneOfType([l().number, l().string]),
            order: l().oneOfType([l().oneOf(['first', 'last']), l().number, l().string]),
          }),
        ])
      ;(i.propTypes = {
        children: l().node,
        className: l().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (i.displayName = 'CCol')
    },
    48917: (e, s, t) => {
      t.d(s, { r: () => i })
      var n = t(50949),
        r = t(28381),
        c = t(34860),
        l = t.n(c),
        a = t(47577),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, s) {
          var t = e.children,
            c = e.className,
            l = (0, n._T)(e, ['children', 'className']),
            i = []
          return (
            o.forEach(function (e) {
              var s = l[e]
              delete l[e]
              var t = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && i.push('row-cols'.concat(t, '-').concat(s.cols)),
                'number' === typeof s.gutter && i.push('g'.concat(t, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && i.push('gx'.concat(t, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && i.push('gy'.concat(t, '-').concat(s.gutterY)))
            }),
            r.createElement('div', { className: (0, a.Z)('row', i, c), ref: s }, t)
          )
        }),
        d = l().shape({
          cols: l().oneOfType([l().oneOf(['auto']), l().number, l().string]),
          gutter: l().oneOfType([l().string, l().number]),
          gutterX: l().oneOfType([l().string, l().number]),
          gutterY: l().oneOfType([l().string, l().number]),
        })
      ;(i.propTypes = {
        children: l().node,
        className: l().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (i.displayName = 'CRow')
    },
    54583: (e, s, t) => {
      e.exports = t.p + 'static/media/react.83088efde08a5dedde9f.jpg'
    },
  },
])
//# sourceMappingURL=3134.233be399.chunk.js.map
