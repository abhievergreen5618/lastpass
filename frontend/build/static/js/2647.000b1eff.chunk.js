'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2647],
  {
    82647: (e, t, n) => {
      n.r(t), n.d(t, { default: () => f })
      n(28381)
      var o = n(48917),
        r = n(5640),
        a = n(13609),
        c = n(42177),
        s = n(45813),
        l = n(47994),
        i = n(83628),
        u = n(79361),
        d = n(54908),
        m = n(29343)
      const f = () =>
        (0, m.jsx)(o.r, {
          children: (0, m.jsx)(r.b, {
            xs: 12,
            children: (0, m.jsxs)(a.x, {
              className: 'mb-4',
              children: [
                (0, m.jsxs)(c.b, {
                  children: [
                    (0, m.jsx)('strong', { children: 'React Tooltip' }),
                    ' ',
                    (0, m.jsx)('small', { children: 'Basic example' }),
                  ],
                }),
                (0, m.jsxs)(s.s, {
                  children: [
                    (0, m.jsx)('p', {
                      className: 'text-body-secondary small',
                      children: 'Hover over the links below to see tooltips:',
                    }),
                    (0, m.jsx)(d.q3, {
                      href: 'components/tooltip',
                      children: (0, m.jsxs)('p', {
                        className: 'text-body-secondary',
                        children: [
                          'Tight pants next level keffiyeh',
                          (0, m.jsx)(l.I, {
                            content: 'Tooltip text',
                            children: (0, m.jsx)(i.h, { children: ' you probably ' }),
                          }),
                          "haven'theard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel",
                          (0, m.jsx)(l.I, {
                            content: 'Tooltip text',
                            children: (0, m.jsx)(i.h, { children: ' have a ' }),
                          }),
                          "terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic artisan",
                          (0, m.jsx)(l.I, {
                            content: 'Tooltip text',
                            children: (0, m.jsx)(i.h, { children: ' whatever keytar ' }),
                          }),
                          'scenester farm-to-table banksy Austin',
                          (0, m.jsx)(l.I, {
                            content: 'Tooltip text',
                            children: (0, m.jsx)(i.h, { children: ' twitter handle ' }),
                          }),
                          'freegan cred raw denim single-origin coffee viral.',
                        ],
                      }),
                    }),
                    (0, m.jsx)('p', {
                      className: 'text-body-secondary small',
                      children:
                        'Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using CoreUI in RTL.',
                    }),
                    (0, m.jsxs)(d.q3, {
                      href: 'components/tooltip',
                      children: [
                        (0, m.jsx)(l.I, {
                          content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                          placement: 'top',
                          children: (0, m.jsx)(u.u, {
                            color: 'secondary',
                            children: 'Tooltip on top',
                          }),
                        }),
                        (0, m.jsx)(l.I, {
                          content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                          placement: 'right',
                          children: (0, m.jsx)(u.u, {
                            color: 'secondary',
                            children: 'Tooltip on right',
                          }),
                        }),
                        (0, m.jsx)(l.I, {
                          content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                          placement: 'bottom',
                          children: (0, m.jsx)(u.u, {
                            color: 'secondary',
                            children: 'Tooltip on bottom',
                          }),
                        }),
                        (0, m.jsx)(l.I, {
                          content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                          placement: 'left',
                          children: (0, m.jsx)(u.u, {
                            color: 'secondary',
                            children: 'Tooltip on left',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
    },
    13609: (e, t, n) => {
      n.d(t, { x: () => i })
      var o = n(50949),
        r = n(28381),
        a = n(34860),
        c = n.n(a),
        s = n(47577),
        l = n(37169),
        i = (0, r.forwardRef)(function (e, t) {
          var n,
            a = e.children,
            c = e.className,
            l = e.color,
            i = e.textColor,
            u = (0, o._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, o.pi)(
              {
                className: (0, s.Z)(
                  'card',
                  ((n = {}), (n['bg-'.concat(l)] = l), (n['text-'.concat(i)] = i), n),
                  c,
                ),
              },
              u,
              { ref: t },
            ),
            a,
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
    45813: (e, t, n) => {
      n.d(t, { s: () => l })
      var o = n(50949),
        r = n(28381),
        a = n(34860),
        c = n.n(a),
        s = n(47577),
        l = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.className,
            c = (0, o._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, o.pi)({ className: (0, s.Z)('card-body', a) }, c, { ref: t }),
            n,
          )
        })
      ;(l.propTypes = { children: c().node, className: c().string }), (l.displayName = 'CCardBody')
    },
    42177: (e, t, n) => {
      n.d(t, { b: () => l })
      var o = n(50949),
        r = n(28381),
        a = n(34860),
        c = n.n(a),
        s = n(47577),
        l = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.component,
            c = void 0 === a ? 'div' : a,
            l = e.className,
            i = (0, o._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            c,
            (0, o.pi)({ className: (0, s.Z)('card-header', l) }, i, { ref: t }),
            n,
          )
        })
      ;(l.propTypes = { children: c().node, className: c().string, component: c().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (e, t, n) => {
      n.d(t, { b: () => i })
      var o = n(50949),
        r = n(28381),
        a = n(34860),
        c = n.n(a),
        s = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.className,
            c = (0, o._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var t = c[e]
              delete c[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof t && 'string' !== typeof t) ||
                i.push('col'.concat(n, '-').concat(t)),
                'boolean' === typeof t && i.push('col'.concat(n)),
                t &&
                  'object' === typeof t &&
                  (('number' !== typeof t.span && 'string' !== typeof t.span) ||
                    i.push('col'.concat(n, '-').concat(t.span)),
                  'boolean' === typeof t.span && i.push('col'.concat(n)),
                  ('number' !== typeof t.order && 'string' !== typeof t.order) ||
                    i.push('order'.concat(n, '-').concat(t.order)),
                  'number' === typeof t.offset && i.push('offset'.concat(n, '-').concat(t.offset)))
            }),
            r.createElement(
              'div',
              (0, o.pi)({ className: (0, s.Z)(i.length > 0 ? i : 'col', a) }, c, { ref: t }),
              n,
            )
          )
        }),
        u = c().oneOfType([c().bool, c().number, c().string, c().oneOf(['auto'])]),
        d = c().oneOfType([
          u,
          c().shape({
            span: u,
            offset: c().oneOfType([c().number, c().string]),
            order: c().oneOfType([c().oneOf(['first', 'last']), c().number, c().string]),
          }),
        ])
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
        (i.displayName = 'CCol')
    },
    48917: (e, t, n) => {
      n.d(t, { r: () => i })
      var o = n(50949),
        r = n(28381),
        a = n(34860),
        c = n.n(a),
        s = n(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.className,
            c = (0, o._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var t = c[e]
              delete c[e]
              var n = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof t &&
                (t.cols && i.push('row-cols'.concat(n, '-').concat(t.cols)),
                'number' === typeof t.gutter && i.push('g'.concat(n, '-').concat(t.gutter)),
                'number' === typeof t.gutterX && i.push('gx'.concat(n, '-').concat(t.gutterX)),
                'number' === typeof t.gutterY && i.push('gy'.concat(n, '-').concat(t.gutterY)))
            }),
            r.createElement('div', { className: (0, s.Z)('row', i, a), ref: t }, n)
          )
        }),
        u = c().shape({
          cols: c().oneOfType([c().oneOf(['auto']), c().number, c().string]),
          gutter: c().oneOfType([c().string, c().number]),
          gutterX: c().oneOfType([c().string, c().number]),
          gutterY: c().oneOfType([c().string, c().number]),
        })
      ;(i.propTypes = {
        children: c().node,
        className: c().string,
        xs: u,
        sm: u,
        md: u,
        lg: u,
        xl: u,
        xxl: u,
      }),
        (i.displayName = 'CRow')
    },
    47994: (e, t, n) => {
      n.d(t, { I: () => h })
      var o = n(50949),
        r = n(28381),
        a = n(47577),
        c = n(34860),
        s = n.n(c),
        l = n(53419),
        i = n(63173),
        u = n(68828),
        d = n(37169),
        m = n(25696),
        f = n(15603),
        p = n(41829),
        h = (0, r.forwardRef)(function (e, t) {
          var n = e.children,
            c = e.animation,
            s = void 0 === c || c,
            d = e.className,
            h = e.container,
            b = e.content,
            g = e.delay,
            y = void 0 === g ? 0 : g,
            x = e.fallbackPlacements,
            v = void 0 === x ? ['top', 'right', 'bottom', 'left'] : x,
            T = e.offset,
            N = void 0 === T ? [0, 6] : T,
            w = e.onHide,
            j = e.onShow,
            E = e.placement,
            _ = void 0 === E ? 'top' : E,
            C = e.trigger,
            k = void 0 === C ? ['hover', 'focus'] : C,
            O = e.visible,
            R = (0, o._T)(e, [
              'children',
              'animation',
              'className',
              'container',
              'content',
              'delay',
              'fallbackPlacements',
              'offset',
              'onHide',
              'onShow',
              'placement',
              'trigger',
              'visible',
            ]),
            Z = (0, r.useRef)(null),
            I = (0, r.useRef)(null),
            P = (0, i.A7)(t, Z),
            H = (0, u.D)(),
            q = H.initPopper,
            A = H.destroyPopper,
            B = (0, r.useState)(O),
            S = B[0],
            V = B[1],
            D = 'number' === typeof y ? { show: y, hide: y } : y,
            F = {
              modifiers: [
                { name: 'arrow', options: { element: '.tooltip-arrow' } },
                { name: 'flip', options: { fallbackPlacements: v } },
                { name: 'offset', options: { offset: N } },
              ],
              placement: (0, f.Z)(_, I.current),
            }
          ;(0, r.useEffect)(
            function () {
              V(O)
            },
            [O],
          ),
            (0, r.useEffect)(
              function () {
                return (
                  S && I.current && Z.current && q(I.current, Z.current, F),
                  function () {
                    A()
                  }
                )
              },
              [S],
            )
          var X = function (e) {
            e
              ? setTimeout(function () {
                  return V(!0)
                }, D.show)
              : setTimeout(function () {
                  return V(!1)
                }, D.hide)
          }
          return r.createElement(
            r.Fragment,
            null,
            r.cloneElement(
              n,
              (0, o.pi)(
                (0, o.pi)(
                  (0, o.pi)(
                    { ref: I },
                    ('click' === k || k.includes('click')) && {
                      onClick: function () {
                        return X(!S)
                      },
                    },
                  ),
                  ('focus' === k || k.includes('focus')) && {
                    onFocus: function () {
                      return X(!0)
                    },
                    onBlur: function () {
                      return X(!1)
                    },
                  },
                ),
                ('hover' === k || k.includes('hover')) && {
                  onMouseEnter: function () {
                    return X(!0)
                  },
                  onMouseLeave: function () {
                    return X(!1)
                  },
                },
              ),
            ),
            r.createElement(
              l.D,
              { container: h, portal: !0 },
              r.createElement(
                p.ZP,
                {
                  in: S,
                  mountOnEnter: !0,
                  nodeRef: Z,
                  onEnter: j,
                  onExit: w,
                  timeout: { enter: 0, exit: Z.current ? (0, m.Z)(Z.current) + 50 : 200 },
                  unmountOnExit: !0,
                },
                function (e) {
                  return r.createElement(
                    'div',
                    (0, o.pi)(
                      {
                        className: (0, a.Z)(
                          'tooltip',
                          'bs-tooltip-auto',
                          { fade: s, show: 'entered' === e },
                          d,
                        ),
                        ref: P,
                        role: 'tooltip',
                      },
                      R,
                    ),
                    r.createElement('div', { className: 'tooltip-arrow' }),
                    r.createElement('div', { className: 'tooltip-inner' }, b),
                  )
                },
              ),
            ),
          )
        })
      ;(h.propTypes = {
        animation: s().bool,
        children: s().node,
        container: s().any,
        content: s().oneOfType([s().string, s().node]),
        delay: s().oneOfType([
          s().number,
          s().shape({ show: s().number.isRequired, hide: s().number.isRequired }),
        ]),
        fallbackPlacements: d.GA,
        offset: s().any,
        onHide: s().func,
        onShow: s().func,
        placement: s().oneOf(['auto', 'top', 'right', 'bottom', 'left']),
        trigger: d.lQ,
        visible: s().bool,
      }),
        (h.displayName = 'CTooltip')
    },
    15603: (e, t, n) => {
      n.d(t, { Z: () => r })
      var o = n(58524),
        r = function (e, t) {
          switch (e) {
            case 'right':
              return (0, o.Z)(t) ? 'left' : 'right'
            case 'left':
              return (0, o.Z)(t) ? 'right' : 'left'
            default:
              return e
          }
        }
    },
  },
])
//# sourceMappingURL=2647.000b1eff.chunk.js.map
