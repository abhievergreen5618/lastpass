'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [5930],
  {
    25930: (e, n, r) => {
      r.r(n), r.d(n, { default: () => p })
      r(28381)
      var t = r(48917),
        o = r(5640),
        c = r(13609),
        a = r(42177),
        s = r(45813),
        l = r(7834),
        i = r(79361),
        u = r(54908),
        d = r(29343)
      const p = () =>
        (0, d.jsxs)(t.r, {
          children: [
            (0, d.jsx)(o.b, {
              xs: 12,
              children: (0, d.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, d.jsxs)(a.b, {
                    children: [
                      (0, d.jsx)('strong', { children: 'React Popover' }),
                      ' ',
                      (0, d.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  (0, d.jsx)(s.s, {
                    children: (0, d.jsx)(u.q3, {
                      href: 'components/popover',
                      children: (0, d.jsx)(l.K, {
                        title: 'Popover title',
                        content:
                          'And here\u2019s some amazing content. It\u2019s very engaging. Right?',
                        placement: 'right',
                        children: (0, d.jsx)(i.u, {
                          color: 'danger',
                          size: 'lg',
                          children: 'Click to toggle popover',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, d.jsx)(o.b, {
              xs: 12,
              children: (0, d.jsxs)(c.x, {
                className: 'mb-4',
                children: [
                  (0, d.jsxs)(a.b, {
                    children: [
                      (0, d.jsx)('strong', { children: 'React Popover' }),
                      ' ',
                      (0, d.jsx)('small', { children: 'Four directions' }),
                    ],
                  }),
                  (0, d.jsxs)(s.s, {
                    children: [
                      (0, d.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for React in RTL.',
                      }),
                      (0, d.jsxs)(u.q3, {
                        href: 'components/popover#four-directions',
                        children: [
                          (0, d.jsx)(l.K, {
                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                            placement: 'top',
                            children: (0, d.jsx)(i.u, {
                              color: 'secondary',
                              children: 'Popover on top',
                            }),
                          }),
                          (0, d.jsx)(l.K, {
                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                            placement: 'right',
                            children: (0, d.jsx)(i.u, {
                              color: 'secondary',
                              children: 'Popover on right',
                            }),
                          }),
                          (0, d.jsx)(l.K, {
                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                            placement: 'bottom',
                            children: (0, d.jsx)(i.u, {
                              color: 'secondary',
                              children: 'Popover on bottom',
                            }),
                          }),
                          (0, d.jsx)(l.K, {
                            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                            placement: 'left',
                            children: (0, d.jsx)(i.u, {
                              color: 'secondary',
                              children: 'Popover on left',
                            }),
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
    },
    13609: (e, n, r) => {
      r.d(n, { x: () => i })
      var t = r(50949),
        o = r(28381),
        c = r(34860),
        a = r.n(c),
        s = r(47577),
        l = r(37169),
        i = (0, o.forwardRef)(function (e, n) {
          var r,
            c = e.children,
            a = e.className,
            l = e.color,
            i = e.textColor,
            u = (0, t._T)(e, ['children', 'className', 'color', 'textColor'])
          return o.createElement(
            'div',
            (0, t.pi)(
              {
                className: (0, s.Z)(
                  'card',
                  ((r = {}), (r['bg-'.concat(l)] = l), (r['text-'.concat(i)] = i), r),
                  a,
                ),
              },
              u,
              { ref: n },
            ),
            c,
          )
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        color: l.$1,
        textColor: a().string,
      }),
        (i.displayName = 'CCard')
    },
    45813: (e, n, r) => {
      r.d(n, { s: () => l })
      var t = r(50949),
        o = r(28381),
        c = r(34860),
        a = r.n(c),
        s = r(47577),
        l = (0, o.forwardRef)(function (e, n) {
          var r = e.children,
            c = e.className,
            a = (0, t._T)(e, ['children', 'className'])
          return o.createElement(
            'div',
            (0, t.pi)({ className: (0, s.Z)('card-body', c) }, a, { ref: n }),
            r,
          )
        })
      ;(l.propTypes = { children: a().node, className: a().string }), (l.displayName = 'CCardBody')
    },
    42177: (e, n, r) => {
      r.d(n, { b: () => l })
      var t = r(50949),
        o = r(28381),
        c = r(34860),
        a = r.n(c),
        s = r(47577),
        l = (0, o.forwardRef)(function (e, n) {
          var r = e.children,
            c = e.component,
            a = void 0 === c ? 'div' : c,
            l = e.className,
            i = (0, t._T)(e, ['children', 'component', 'className'])
          return o.createElement(
            a,
            (0, t.pi)({ className: (0, s.Z)('card-header', l) }, i, { ref: n }),
            r,
          )
        })
      ;(l.propTypes = { children: a().node, className: a().string, component: a().elementType }),
        (l.displayName = 'CCardHeader')
    },
    5640: (e, n, r) => {
      r.d(n, { b: () => i })
      var t = r(50949),
        o = r(28381),
        c = r(34860),
        a = r.n(c),
        s = r(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, o.forwardRef)(function (e, n) {
          var r = e.children,
            c = e.className,
            a = (0, t._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var n = a[e]
              delete a[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof n && 'string' !== typeof n) ||
                i.push('col'.concat(r, '-').concat(n)),
                'boolean' === typeof n && i.push('col'.concat(r)),
                n &&
                  'object' === typeof n &&
                  (('number' !== typeof n.span && 'string' !== typeof n.span) ||
                    i.push('col'.concat(r, '-').concat(n.span)),
                  'boolean' === typeof n.span && i.push('col'.concat(r)),
                  ('number' !== typeof n.order && 'string' !== typeof n.order) ||
                    i.push('order'.concat(r, '-').concat(n.order)),
                  'number' === typeof n.offset && i.push('offset'.concat(r, '-').concat(n.offset)))
            }),
            o.createElement(
              'div',
              (0, t.pi)({ className: (0, s.Z)(i.length > 0 ? i : 'col', c) }, a, { ref: n }),
              r,
            )
          )
        }),
        u = a().oneOfType([a().bool, a().number, a().string, a().oneOf(['auto'])]),
        d = a().oneOfType([
          u,
          a().shape({
            span: u,
            offset: a().oneOfType([a().number, a().string]),
            order: a().oneOfType([a().oneOf(['first', 'last']), a().number, a().string]),
          }),
        ])
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
        (i.displayName = 'CCol')
    },
    48917: (e, n, r) => {
      r.d(n, { r: () => i })
      var t = r(50949),
        o = r(28381),
        c = r(34860),
        a = r.n(c),
        s = r(47577),
        l = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = (0, o.forwardRef)(function (e, n) {
          var r = e.children,
            c = e.className,
            a = (0, t._T)(e, ['children', 'className']),
            i = []
          return (
            l.forEach(function (e) {
              var n = a[e]
              delete a[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof n &&
                (n.cols && i.push('row-cols'.concat(r, '-').concat(n.cols)),
                'number' === typeof n.gutter && i.push('g'.concat(r, '-').concat(n.gutter)),
                'number' === typeof n.gutterX && i.push('gx'.concat(r, '-').concat(n.gutterX)),
                'number' === typeof n.gutterY && i.push('gy'.concat(r, '-').concat(n.gutterY)))
            }),
            o.createElement('div', { className: (0, s.Z)('row', i, c), ref: n }, r)
          )
        }),
        u = a().shape({
          cols: a().oneOfType([a().oneOf(['auto']), a().number, a().string]),
          gutter: a().oneOfType([a().string, a().number]),
          gutterX: a().oneOfType([a().string, a().number]),
          gutterY: a().oneOfType([a().string, a().number]),
        })
      ;(i.propTypes = {
        children: a().node,
        className: a().string,
        xs: u,
        sm: u,
        md: u,
        lg: u,
        xl: u,
        xxl: u,
      }),
        (i.displayName = 'CRow')
    },
    7834: (e, n, r) => {
      r.d(n, { K: () => h })
      var t = r(50949),
        o = r(28381),
        c = r(47577),
        a = r(34860),
        s = r.n(a),
        l = r(53419),
        i = r(63173),
        u = r(68828),
        d = r(37169),
        p = r(25696),
        m = r(15603),
        f = r(41829),
        h = (0, o.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.animation,
            s = void 0 === a || a,
            d = e.className,
            h = e.container,
            g = e.content,
            v = e.delay,
            x = void 0 === v ? 0 : v,
            b = e.fallbackPlacements,
            y = void 0 === b ? ['top', 'right', 'bottom', 'left'] : b,
            N = e.offset,
            j = void 0 === N ? [0, 8] : N,
            T = e.onHide,
            w = e.onShow,
            E = e.placement,
            C = void 0 === E ? 'top' : E,
            _ = e.title,
            O = e.trigger,
            R = void 0 === O ? 'click' : O,
            P = e.visible,
            k = (0, t._T)(e, [
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
              'title',
              'trigger',
              'visible',
            ]),
            Z = (0, o.useRef)(null),
            K = (0, o.useRef)(null),
            q = (0, i.A7)(n, Z),
            F = (0, u.D)(),
            H = F.initPopper,
            S = F.destroyPopper,
            V = (0, o.useState)(P),
            A = V[0],
            B = V[1],
            D = 'number' === typeof x ? { show: x, hide: x } : x,
            X = {
              modifiers: [
                { name: 'arrow', options: { element: '.popover-arrow' } },
                { name: 'flip', options: { fallbackPlacements: y } },
                { name: 'offset', options: { offset: j } },
              ],
              placement: (0, m.Z)(C, K.current),
            }
          ;(0, o.useEffect)(
            function () {
              B(P)
            },
            [P],
          ),
            (0, o.useEffect)(
              function () {
                return (
                  A && K.current && Z.current && H(K.current, Z.current, X),
                  function () {
                    S()
                  }
                )
              },
              [A],
            )
          var Y = function (e) {
            e
              ? setTimeout(function () {
                  return B(!0)
                }, D.show)
              : setTimeout(function () {
                  return B(!1)
                }, D.hide)
          }
          return o.createElement(
            o.Fragment,
            null,
            o.cloneElement(
              r,
              (0, t.pi)(
                (0, t.pi)(
                  (0, t.pi)(
                    { ref: K },
                    ('click' === R || R.includes('click')) && {
                      onClick: function () {
                        return Y(!A)
                      },
                    },
                  ),
                  ('focus' === R || R.includes('focus')) && {
                    onFocus: function () {
                      return Y(!0)
                    },
                    onBlur: function () {
                      return Y(!1)
                    },
                  },
                ),
                ('hover' === R || R.includes('hover')) && {
                  onMouseEnter: function () {
                    return Y(!0)
                  },
                  onMouseLeave: function () {
                    return Y(!1)
                  },
                },
              ),
            ),
            o.createElement(
              l.D,
              { container: h, portal: !0 },
              o.createElement(
                f.ZP,
                {
                  in: A,
                  mountOnEnter: !0,
                  nodeRef: Z,
                  onEnter: w,
                  onExit: T,
                  timeout: { enter: 0, exit: Z.current ? (0, p.Z)(Z.current) + 50 : 200 },
                  unmountOnExit: !0,
                },
                function (e) {
                  return o.createElement(
                    'div',
                    (0, t.pi)(
                      {
                        className: (0, c.Z)(
                          'popover',
                          'bs-popover-auto',
                          { fade: s, show: 'entered' === e },
                          d,
                        ),
                        ref: q,
                        role: 'tooltip',
                      },
                      k,
                    ),
                    o.createElement('div', { className: 'popover-arrow' }),
                    o.createElement('div', { className: 'popover-header' }, _),
                    o.createElement('div', { className: 'popover-body' }, g),
                  )
                },
              ),
            ),
          )
        })
      ;(h.propTypes = {
        animation: s().bool,
        children: s().node,
        className: s().string,
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
        title: s().oneOfType([s().string, s().node]),
        trigger: d.lQ,
        visible: s().bool,
      }),
        (h.displayName = 'CPopover')
    },
    15603: (e, n, r) => {
      r.d(n, { Z: () => o })
      var t = r(58524),
        o = function (e, n) {
          switch (e) {
            case 'right':
              return (0, t.Z)(n) ? 'left' : 'right'
            case 'left':
              return (0, t.Z)(n) ? 'right' : 'left'
            default:
              return e
          }
        }
    },
  },
])
//# sourceMappingURL=5930.43eea315.chunk.js.map
