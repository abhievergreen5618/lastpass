'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [6303],
  {
    13609: (e, n, o) => {
      o.d(n, { x: () => s })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = o(37169),
        s = (0, r.forwardRef)(function (e, n) {
          var o,
            a = e.children,
            l = e.className,
            i = e.color,
            s = e.textColor,
            d = (0, t._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, t.pi)(
              {
                className: (0, c.Z)(
                  'card',
                  ((o = {}), (o['bg-'.concat(i)] = i), (o['text-'.concat(s)] = s), o),
                  l,
                ),
              },
              d,
              { ref: n },
            ),
            a,
          )
        })
      ;(s.propTypes = {
        children: l().node,
        className: l().string,
        color: i.$1,
        textColor: l().string,
      }),
        (s.displayName = 'CCard')
    },
    45813: (e, n, o) => {
      o.d(n, { s: () => i })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, c.Z)('card-body', a) }, l, { ref: n }),
            o,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string }), (i.displayName = 'CCardBody')
    },
    42177: (e, n, o) => {
      o.d(n, { b: () => i })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.component,
            l = void 0 === a ? 'div' : a,
            i = e.className,
            s = (0, t._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, t.pi)({ className: (0, c.Z)('card-header', i) }, s, { ref: n }),
            o,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (i.displayName = 'CCardHeader')
    },
    5640: (e, n, o) => {
      o.d(n, { b: () => s })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        s = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className']),
            s = []
          return (
            i.forEach(function (e) {
              var n = l[e]
              delete l[e]
              var o = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof n && 'string' !== typeof n) ||
                s.push('col'.concat(o, '-').concat(n)),
                'boolean' === typeof n && s.push('col'.concat(o)),
                n &&
                  'object' === typeof n &&
                  (('number' !== typeof n.span && 'string' !== typeof n.span) ||
                    s.push('col'.concat(o, '-').concat(n.span)),
                  'boolean' === typeof n.span && s.push('col'.concat(o)),
                  ('number' !== typeof n.order && 'string' !== typeof n.order) ||
                    s.push('order'.concat(o, '-').concat(n.order)),
                  'number' === typeof n.offset && s.push('offset'.concat(o, '-').concat(n.offset)))
            }),
            r.createElement(
              'div',
              (0, t.pi)({ className: (0, c.Z)(s.length > 0 ? s : 'col', a) }, l, { ref: n }),
              o,
            )
          )
        }),
        d = l().oneOfType([l().bool, l().number, l().string, l().oneOf(['auto'])]),
        u = l().oneOfType([
          d,
          l().shape({
            span: d,
            offset: l().oneOfType([l().number, l().string]),
            order: l().oneOfType([l().oneOf(['first', 'last']), l().number, l().string]),
          }),
        ])
      ;(s.propTypes = {
        children: l().node,
        className: l().string,
        xs: u,
        sm: u,
        md: u,
        lg: u,
        xl: u,
        xxl: u,
      }),
        (s.displayName = 'CCol')
    },
    48917: (e, n, o) => {
      o.d(n, { r: () => s })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        s = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className']),
            s = []
          return (
            i.forEach(function (e) {
              var n = l[e]
              delete l[e]
              var o = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof n &&
                (n.cols && s.push('row-cols'.concat(o, '-').concat(n.cols)),
                'number' === typeof n.gutter && s.push('g'.concat(o, '-').concat(n.gutter)),
                'number' === typeof n.gutterX && s.push('gx'.concat(o, '-').concat(n.gutterX)),
                'number' === typeof n.gutterY && s.push('gy'.concat(o, '-').concat(n.gutterY)))
            }),
            r.createElement('div', { className: (0, c.Z)('row', s, a), ref: n }, o)
          )
        }),
        d = l().shape({
          cols: l().oneOfType([l().oneOf(['auto']), l().number, l().string]),
          gutter: l().oneOfType([l().string, l().number]),
          gutterX: l().oneOfType([l().string, l().number]),
          gutterY: l().oneOfType([l().string, l().number]),
        })
      ;(s.propTypes = {
        children: l().node,
        className: l().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (s.displayName = 'CRow')
    },
    12962: (e, n, o) => {
      o.d(n, { T: () => v, q: () => p })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = o(46198),
        s = o(53419),
        d = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, c.Z)('modal-content', a) }, l, { ref: n }),
            o,
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string }),
        (d.displayName = 'CModalContent')
      var u = (0, r.forwardRef)(function (e, n) {
        var o,
          a = e.children,
          l = e.alignment,
          i = e.className,
          s = e.fullscreen,
          d = e.scrollable,
          u = e.size,
          m = (0, t._T)(e, [
            'children',
            'alignment',
            'className',
            'fullscreen',
            'scrollable',
            'size',
          ])
        return r.createElement(
          'div',
          (0, t.pi)(
            {
              className: (0, c.Z)(
                'modal-dialog',
                ((o = { 'modal-dialog-centered': 'center' === l }),
                (o[
                  'boolean' === typeof s
                    ? 'modal-fullscreen'
                    : 'modal-fullscreen-'.concat(s, '-down')
                ] = s),
                (o['modal-dialog-scrollable'] = d),
                (o['modal-'.concat(u)] = u),
                o),
                i,
              ),
            },
            m,
            { ref: n },
          ),
          a,
        )
      })
      ;(u.propTypes = {
        alignment: l().oneOf(['top', 'center']),
        children: l().node,
        className: l().string,
        fullscreen: l().oneOfType([l().bool, l().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
        scrollable: l().bool,
        size: l().oneOf(['sm', 'lg', 'xl']),
      }),
        (u.displayName = 'CModalDialog')
      var m = o(63173),
        f = o(41829),
        p = (0, r.createContext)({}),
        v = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.alignment,
            l = e.backdrop,
            v = void 0 === l || l,
            y = e.className,
            h = e.duration,
            b = void 0 === h ? 150 : h,
            g = e.focus,
            N = void 0 === g || g,
            E = e.fullscreen,
            T = e.keyboard,
            w = void 0 === T || T,
            x = e.onClose,
            C = e.onClosePrevented,
            O = e.onShow,
            k = e.portal,
            R = void 0 === k || k,
            _ = e.scrollable,
            P = e.size,
            Z = e.transition,
            S = void 0 === Z || Z,
            L = e.unmountOnClose,
            M = void 0 === L || L,
            H = e.visible,
            z = (0, t._T)(e, [
              'children',
              'alignment',
              'backdrop',
              'className',
              'duration',
              'focus',
              'fullscreen',
              'keyboard',
              'onClose',
              'onClosePrevented',
              'onShow',
              'portal',
              'scrollable',
              'size',
              'transition',
              'unmountOnClose',
              'visible',
            ]),
            B = (0, r.useRef)(null),
            D = (0, r.useRef)(null),
            q = (0, r.useRef)(null),
            F = (0, m.A7)(n, D),
            A = (0, r.useState)(H),
            Y = A[0],
            X = A[1],
            j = (0, r.useState)(!1),
            G = j[0],
            I = j[1],
            Q = { visible: Y, setVisible: X }
          ;(0, r.useEffect)(
            function () {
              X(H)
            },
            [H],
          ),
            (0, r.useEffect)(
              function () {
                var e
                return (
                  Y
                    ? ((B.current = document.activeElement),
                      document.addEventListener('mouseup', K),
                      document.addEventListener('keydown', $))
                    : null === (e = B.current) || void 0 === e || e.focus(),
                  function () {
                    document.removeEventListener('mouseup', K),
                      document.removeEventListener('keydown', $)
                  }
                )
              },
              [Y],
            )
          var V = function () {
            return 'static' === v ? I(!0) : (X(!1), x && x())
          }
          ;(0, r.useLayoutEffect)(
            function () {
              C && C(),
                setTimeout(function () {
                  return I(!1)
                }, b)
            },
            [G],
          ),
            (0, r.useLayoutEffect)(
              function () {
                return (
                  Y
                    ? (document.body.classList.add('modal-open'),
                      v &&
                        ((document.body.style.overflow = 'hidden'),
                        (document.body.style.paddingRight = '0px')),
                      setTimeout(
                        function () {
                          var e
                          N && (null === (e = D.current) || void 0 === e || e.focus())
                        },
                        S ? b : 0,
                      ))
                    : (document.body.classList.remove('modal-open'),
                      v &&
                        (document.body.style.removeProperty('overflow'),
                        document.body.style.removeProperty('padding-right'))),
                  function () {
                    document.body.classList.remove('modal-open'),
                      v &&
                        (document.body.style.removeProperty('overflow'),
                        document.body.style.removeProperty('padding-right'))
                  }
                )
              },
              [Y],
            )
          var K = function (e) {
              q.current && !q.current.contains(e.target) && V()
            },
            $ = function (e) {
              'Escape' === e.key && w && V()
            }
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              f.ZP,
              {
                in: Y,
                mountOnEnter: !0,
                nodeRef: D,
                onEnter: O,
                onExit: x,
                unmountOnExit: M,
                timeout: S ? b : 0,
              },
              function (e) {
                return r.createElement(
                  s.D,
                  { portal: R },
                  r.createElement(
                    p.Provider,
                    { value: Q },
                    r.createElement(
                      'div',
                      (0, t.pi)(
                        {
                          className: (0, c.Z)(
                            'modal',
                            { 'modal-static': G, fade: S, show: 'entered' === e },
                            y,
                          ),
                          tabIndex: -1,
                        },
                        Y ? { 'aria-modal': !0, role: 'dialog' } : { 'aria-hidden': 'true' },
                        { style: (0, t.pi)({}, 'exited' !== e && { display: 'block' }) },
                        z,
                        { ref: F },
                      ),
                      r.createElement(
                        u,
                        { alignment: a, fullscreen: E, scrollable: _, size: P },
                        r.createElement(d, { ref: q }, o),
                      ),
                    ),
                  ),
                )
              },
            ),
            v && r.createElement(s.D, { portal: R }, r.createElement(i.p, { visible: Y })),
          )
        })
      ;(v.propTypes = {
        alignment: l().oneOf(['top', 'center']),
        backdrop: l().oneOfType([l().bool, l().oneOf(['static'])]),
        children: l().node,
        className: l().string,
        duration: l().number,
        focus: l().bool,
        fullscreen: l().oneOfType([l().bool, l().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
        keyboard: l().bool,
        onClose: l().func,
        onClosePrevented: l().func,
        onShow: l().func,
        portal: l().bool,
        scrollable: l().bool,
        size: l().oneOf(['sm', 'lg', 'xl']),
        transition: l().bool,
        unmountOnClose: l().bool,
        visible: l().bool,
      }),
        (v.displayName = 'CModal')
    },
    95779: (e, n, o) => {
      o.d(n, { s: () => i })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, c.Z)('modal-body', a) }, l, { ref: n }),
            o,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string }), (i.displayName = 'CModalBody')
    },
    23697: (e, n, o) => {
      o.d(n, { Y: () => i })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = (0, t._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, c.Z)('modal-footer', a) }, l, { ref: n }),
            o,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string }),
        (i.displayName = 'CModalFooter')
    },
    64284: (e, n, o) => {
      o.d(n, { p: () => d })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = o(95117),
        s = o(12962),
        d = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.className,
            l = e.closeButton,
            d = void 0 === l || l,
            u = (0, t._T)(e, ['children', 'className', 'closeButton']),
            m = (0, r.useContext)(s.q).setVisible
          return r.createElement(
            'div',
            (0, t.pi)({ className: (0, c.Z)('modal-header', a) }, u, { ref: n }),
            o,
            d &&
              r.createElement(i.p, {
                onClick: function () {
                  return m(!1)
                },
              }),
          )
        })
      ;(d.propTypes = { children: l().node, className: l().string, closeButton: l().bool }),
        (d.displayName = 'CModalHeader')
    },
    58737: (e, n, o) => {
      o.d(n, { f: () => i })
      var t = o(50949),
        r = o(28381),
        a = o(34860),
        l = o.n(a),
        c = o(47577),
        i = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            a = e.component,
            l = void 0 === a ? 'h5' : a,
            i = e.className,
            s = (0, t._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            l,
            (0, t.pi)({ className: (0, c.Z)('modal-title', i) }, s, { ref: n }),
            o,
          )
        })
      ;(i.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (i.displayName = 'CModalTitle')
    },
    7834: (e, n, o) => {
      o.d(n, { K: () => v })
      var t = o(50949),
        r = o(28381),
        a = o(47577),
        l = o(34860),
        c = o.n(l),
        i = o(53419),
        s = o(63173),
        d = o(68828),
        u = o(37169),
        m = o(25696),
        f = o(15603),
        p = o(41829),
        v = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            l = e.animation,
            c = void 0 === l || l,
            u = e.className,
            v = e.container,
            y = e.content,
            h = e.delay,
            b = void 0 === h ? 0 : h,
            g = e.fallbackPlacements,
            N = void 0 === g ? ['top', 'right', 'bottom', 'left'] : g,
            E = e.offset,
            T = void 0 === E ? [0, 8] : E,
            w = e.onHide,
            x = e.onShow,
            C = e.placement,
            O = void 0 === C ? 'top' : C,
            k = e.title,
            R = e.trigger,
            _ = void 0 === R ? 'click' : R,
            P = e.visible,
            Z = (0, t._T)(e, [
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
            S = (0, r.useRef)(null),
            L = (0, r.useRef)(null),
            M = (0, s.A7)(n, S),
            H = (0, d.D)(),
            z = H.initPopper,
            B = H.destroyPopper,
            D = (0, r.useState)(P),
            q = D[0],
            F = D[1],
            A = 'number' === typeof b ? { show: b, hide: b } : b,
            Y = {
              modifiers: [
                { name: 'arrow', options: { element: '.popover-arrow' } },
                { name: 'flip', options: { fallbackPlacements: N } },
                { name: 'offset', options: { offset: T } },
              ],
              placement: (0, f.Z)(O, L.current),
            }
          ;(0, r.useEffect)(
            function () {
              F(P)
            },
            [P],
          ),
            (0, r.useEffect)(
              function () {
                return (
                  q && L.current && S.current && z(L.current, S.current, Y),
                  function () {
                    B()
                  }
                )
              },
              [q],
            )
          var X = function (e) {
            e
              ? setTimeout(function () {
                  return F(!0)
                }, A.show)
              : setTimeout(function () {
                  return F(!1)
                }, A.hide)
          }
          return r.createElement(
            r.Fragment,
            null,
            r.cloneElement(
              o,
              (0, t.pi)(
                (0, t.pi)(
                  (0, t.pi)(
                    { ref: L },
                    ('click' === _ || _.includes('click')) && {
                      onClick: function () {
                        return X(!q)
                      },
                    },
                  ),
                  ('focus' === _ || _.includes('focus')) && {
                    onFocus: function () {
                      return X(!0)
                    },
                    onBlur: function () {
                      return X(!1)
                    },
                  },
                ),
                ('hover' === _ || _.includes('hover')) && {
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
              i.D,
              { container: v, portal: !0 },
              r.createElement(
                p.ZP,
                {
                  in: q,
                  mountOnEnter: !0,
                  nodeRef: S,
                  onEnter: x,
                  onExit: w,
                  timeout: { enter: 0, exit: S.current ? (0, m.Z)(S.current) + 50 : 200 },
                  unmountOnExit: !0,
                },
                function (e) {
                  return r.createElement(
                    'div',
                    (0, t.pi)(
                      {
                        className: (0, a.Z)(
                          'popover',
                          'bs-popover-auto',
                          { fade: c, show: 'entered' === e },
                          u,
                        ),
                        ref: M,
                        role: 'tooltip',
                      },
                      Z,
                    ),
                    r.createElement('div', { className: 'popover-arrow' }),
                    r.createElement('div', { className: 'popover-header' }, k),
                    r.createElement('div', { className: 'popover-body' }, y),
                  )
                },
              ),
            ),
          )
        })
      ;(v.propTypes = {
        animation: c().bool,
        children: c().node,
        className: c().string,
        container: c().any,
        content: c().oneOfType([c().string, c().node]),
        delay: c().oneOfType([
          c().number,
          c().shape({ show: c().number.isRequired, hide: c().number.isRequired }),
        ]),
        fallbackPlacements: u.GA,
        offset: c().any,
        onHide: c().func,
        onShow: c().func,
        placement: c().oneOf(['auto', 'top', 'right', 'bottom', 'left']),
        title: c().oneOfType([c().string, c().node]),
        trigger: u.lQ,
        visible: c().bool,
      }),
        (v.displayName = 'CPopover')
    },
    47994: (e, n, o) => {
      o.d(n, { I: () => v })
      var t = o(50949),
        r = o(28381),
        a = o(47577),
        l = o(34860),
        c = o.n(l),
        i = o(53419),
        s = o(63173),
        d = o(68828),
        u = o(37169),
        m = o(25696),
        f = o(15603),
        p = o(41829),
        v = (0, r.forwardRef)(function (e, n) {
          var o = e.children,
            l = e.animation,
            c = void 0 === l || l,
            u = e.className,
            v = e.container,
            y = e.content,
            h = e.delay,
            b = void 0 === h ? 0 : h,
            g = e.fallbackPlacements,
            N = void 0 === g ? ['top', 'right', 'bottom', 'left'] : g,
            E = e.offset,
            T = void 0 === E ? [0, 6] : E,
            w = e.onHide,
            x = e.onShow,
            C = e.placement,
            O = void 0 === C ? 'top' : C,
            k = e.trigger,
            R = void 0 === k ? ['hover', 'focus'] : k,
            _ = e.visible,
            P = (0, t._T)(e, [
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
            S = (0, r.useRef)(null),
            L = (0, s.A7)(n, Z),
            M = (0, d.D)(),
            H = M.initPopper,
            z = M.destroyPopper,
            B = (0, r.useState)(_),
            D = B[0],
            q = B[1],
            F = 'number' === typeof b ? { show: b, hide: b } : b,
            A = {
              modifiers: [
                { name: 'arrow', options: { element: '.tooltip-arrow' } },
                { name: 'flip', options: { fallbackPlacements: N } },
                { name: 'offset', options: { offset: T } },
              ],
              placement: (0, f.Z)(O, S.current),
            }
          ;(0, r.useEffect)(
            function () {
              q(_)
            },
            [_],
          ),
            (0, r.useEffect)(
              function () {
                return (
                  D && S.current && Z.current && H(S.current, Z.current, A),
                  function () {
                    z()
                  }
                )
              },
              [D],
            )
          var Y = function (e) {
            e
              ? setTimeout(function () {
                  return q(!0)
                }, F.show)
              : setTimeout(function () {
                  return q(!1)
                }, F.hide)
          }
          return r.createElement(
            r.Fragment,
            null,
            r.cloneElement(
              o,
              (0, t.pi)(
                (0, t.pi)(
                  (0, t.pi)(
                    { ref: S },
                    ('click' === R || R.includes('click')) && {
                      onClick: function () {
                        return Y(!D)
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
            r.createElement(
              i.D,
              { container: v, portal: !0 },
              r.createElement(
                p.ZP,
                {
                  in: D,
                  mountOnEnter: !0,
                  nodeRef: Z,
                  onEnter: x,
                  onExit: w,
                  timeout: { enter: 0, exit: Z.current ? (0, m.Z)(Z.current) + 50 : 200 },
                  unmountOnExit: !0,
                },
                function (e) {
                  return r.createElement(
                    'div',
                    (0, t.pi)(
                      {
                        className: (0, a.Z)(
                          'tooltip',
                          'bs-tooltip-auto',
                          { fade: c, show: 'entered' === e },
                          u,
                        ),
                        ref: L,
                        role: 'tooltip',
                      },
                      P,
                    ),
                    r.createElement('div', { className: 'tooltip-arrow' }),
                    r.createElement('div', { className: 'tooltip-inner' }, y),
                  )
                },
              ),
            ),
          )
        })
      ;(v.propTypes = {
        animation: c().bool,
        children: c().node,
        container: c().any,
        content: c().oneOfType([c().string, c().node]),
        delay: c().oneOfType([
          c().number,
          c().shape({ show: c().number.isRequired, hide: c().number.isRequired }),
        ]),
        fallbackPlacements: u.GA,
        offset: c().any,
        onHide: c().func,
        onShow: c().func,
        placement: c().oneOf(['auto', 'top', 'right', 'bottom', 'left']),
        trigger: u.lQ,
        visible: c().bool,
      }),
        (v.displayName = 'CTooltip')
    },
    15603: (e, n, o) => {
      o.d(n, { Z: () => r })
      var t = o(58524),
        r = function (e, n) {
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
//# sourceMappingURL=6303.c49938c9.chunk.js.map
