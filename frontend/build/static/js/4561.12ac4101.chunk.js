'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [4561],
  {
    34561: (e, n, a) => {
      a.r(n), a.d(n, { default: () => u })
      var s = a(28381),
        i = a(48917),
        r = a(5640),
        l = a(13609),
        c = a(42177),
        t = a(45813),
        o = a(50949),
        d = a(34860),
        h = a.n(d),
        x = a(47577),
        p = (0, s.forwardRef)(function (e, n) {
          var a,
            i = e.children,
            r = e.align,
            l = e.className,
            c = e.size,
            t = (0, o._T)(e, ['children', 'align', 'className', 'size'])
          return s.createElement(
            'nav',
            (0, o.pi)({ ref: n }, t),
            s.createElement(
              'ul',
              {
                className: (0, x.Z)(
                  'pagination',
                  ((a = {}),
                  (a['justify-content-'.concat(r)] = r),
                  (a['pagination-'.concat(c)] = c),
                  a),
                  l,
                ),
              },
              i,
            ),
          )
        })
      ;(p.propTypes = {
        align: h().oneOf(['start', 'center', 'end']),
        children: h().node,
        className: h().string,
        size: h().oneOf(['sm', 'lg']),
      }),
        (p.displayName = 'CPagination')
      var m = a(83628),
        g = (0, s.forwardRef)(function (e, n) {
          var a = e.children,
            i = e.className,
            r = e.component,
            l = (0, o._T)(e, ['children', 'className', 'component']),
            c = null !== r && void 0 !== r ? r : l.active ? 'span' : 'a'
          return s.createElement(
            'li',
            (0, o.pi)(
              { className: (0, x.Z)('page-item', { active: l.active, disabled: l.disabled }, i) },
              l.active && { 'aria-current': 'page' },
            ),
            'a' === c
              ? s.createElement(
                  m.h,
                  (0, o.pi)({ className: 'page-link', component: c }, l, { ref: n }),
                  a,
                )
              : s.createElement(c, { className: 'page-link', ref: n }, a),
          )
        })
      ;(g.propTypes = { children: h().node, className: h().string, component: h().elementType }),
        (g.displayName = 'CPaginationItem')
      var j = a(54908),
        f = a(29343)
      const u = () =>
        (0, f.jsxs)(i.r, {
          children: [
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsx)(c.b, {
                    children: (0, f.jsx)('strong', { children: 'React Pagination' }),
                  }),
                  (0, f.jsxs)(t.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'We use a large block of connected links for our pagination, making links hard to miss and easily scalable\u2014all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ',
                          (0, f.jsx)('code', { children: '<nav>' }),
                          ' element to identify it as a navigation section to screen readers and other assistive technologies.',
                        ],
                      }),
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",
                          (0, f.jsx)('code', { children: 'aria-label' }),
                          ' for the',
                          ' ',
                          (0, f.jsx)('code', { children: '<nav>' }),
                          ' to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ',
                          (0, f.jsx)('code', { children: 'aria-label="Search results pages"' }),
                          '.',
                        ],
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination',
                        children: (0, f.jsxs)(p, {
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, { children: 'Previous' }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, { children: 'Next' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(c.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Pagination' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Working with icons' }),
                    ],
                  }),
                  (0, f.jsxs)(t.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ',
                          (0, f.jsx)('code', { children: 'aria' }),
                          ' attributes.',
                        ],
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#working-with-icons',
                        children: (0, f.jsxs)(p, {
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, {
                              'aria-label': 'Previous',
                              children: (0, f.jsx)('span', {
                                'aria-hidden': 'true',
                                children: '\xab',
                              }),
                            }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, {
                              'aria-label': 'Next',
                              children: (0, f.jsx)('span', {
                                'aria-hidden': 'true',
                                children: '\xbb',
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
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(c.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Pagination' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Disabled and active states' }),
                    ],
                  }),
                  (0, f.jsxs)(t.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Pagination links are customizable for different circumstances. Use',
                          ' ',
                          (0, f.jsx)('code', { children: 'disabled' }),
                          ' for links that appear un-clickable and ',
                          (0, f.jsx)('code', { children: '.active' }),
                          ' to indicate the current page.',
                        ],
                      }),
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'While the ',
                          (0, f.jsx)('code', { children: 'disabled' }),
                          ' prop uses ',
                          (0, f.jsx)('code', { children: 'pointer-events: none' }),
                          ' to',
                          ' ',
                          (0, f.jsx)('em', { children: 'try' }),
                          ' to disable the link functionality of ',
                          (0, f.jsx)('code', { children: '<a>' }),
                          "s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add ",
                          (0, f.jsx)('code', { children: 'tabindex="-1"' }),
                          ' on disabled links and use custom JavaScript to fully disable their functionality.',
                        ],
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#disabled-and-active-states',
                        children: (0, f.jsxs)(p, {
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, {
                              'aria-label': 'Previous',
                              disabled: !0,
                              children: (0, f.jsx)('span', {
                                'aria-hidden': 'true',
                                children: '\xab',
                              }),
                            }),
                            (0, f.jsx)(g, { active: !0, children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, {
                              'aria-label': 'Next',
                              children: (0, f.jsx)('span', {
                                'aria-hidden': 'true',
                                children: '\xbb',
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
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(c.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Pagination' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Sizing' }),
                    ],
                  }),
                  (0, f.jsxs)(t.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Fancy larger or smaller pagination? Add ',
                          (0, f.jsx)('code', { children: 'size="lg"' }),
                          ' or',
                          ' ',
                          (0, f.jsx)('code', { children: 'size="sm"' }),
                          ' for additional sizes.',
                        ],
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#sizing',
                        children: (0, f.jsxs)(p, {
                          size: 'lg',
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, { children: 'Previous' }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, { children: 'Next' }),
                          ],
                        }),
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#sizing',
                        children: (0, f.jsxs)(p, {
                          size: 'sm',
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, { children: 'Previous' }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, { children: 'Next' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(l.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(c.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'React Pagination' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Alignment' }),
                    ],
                  }),
                  (0, f.jsxs)(t.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Change the alignment of pagination components with',
                          ' ',
                          (0, f.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/flex/',
                            children: 'flexbox utilities',
                          }),
                          '.',
                        ],
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#aligment',
                        children: (0, f.jsxs)(p, {
                          className: 'justify-content-center',
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, { disabled: !0, children: 'Previous' }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, { children: 'Next' }),
                          ],
                        }),
                      }),
                      (0, f.jsx)(j.q3, {
                        href: 'components/pagination#aligment',
                        children: (0, f.jsxs)(p, {
                          className: 'justify-content-end',
                          'aria-label': 'Page navigation example',
                          children: [
                            (0, f.jsx)(g, { disabled: !0, children: 'Previous' }),
                            (0, f.jsx)(g, { children: '1' }),
                            (0, f.jsx)(g, { children: '2' }),
                            (0, f.jsx)(g, { children: '3' }),
                            (0, f.jsx)(g, { children: 'Next' }),
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
    13609: (e, n, a) => {
      a.d(n, { x: () => o })
      var s = a(50949),
        i = a(28381),
        r = a(34860),
        l = a.n(r),
        c = a(47577),
        t = a(37169),
        o = (0, i.forwardRef)(function (e, n) {
          var a,
            r = e.children,
            l = e.className,
            t = e.color,
            o = e.textColor,
            d = (0, s._T)(e, ['children', 'className', 'color', 'textColor'])
          return i.createElement(
            'div',
            (0, s.pi)(
              {
                className: (0, c.Z)(
                  'card',
                  ((a = {}), (a['bg-'.concat(t)] = t), (a['text-'.concat(o)] = o), a),
                  l,
                ),
              },
              d,
              { ref: n },
            ),
            r,
          )
        })
      ;(o.propTypes = {
        children: l().node,
        className: l().string,
        color: t.$1,
        textColor: l().string,
      }),
        (o.displayName = 'CCard')
    },
    45813: (e, n, a) => {
      a.d(n, { s: () => t })
      var s = a(50949),
        i = a(28381),
        r = a(34860),
        l = a.n(r),
        c = a(47577),
        t = (0, i.forwardRef)(function (e, n) {
          var a = e.children,
            r = e.className,
            l = (0, s._T)(e, ['children', 'className'])
          return i.createElement(
            'div',
            (0, s.pi)({ className: (0, c.Z)('card-body', r) }, l, { ref: n }),
            a,
          )
        })
      ;(t.propTypes = { children: l().node, className: l().string }), (t.displayName = 'CCardBody')
    },
    42177: (e, n, a) => {
      a.d(n, { b: () => t })
      var s = a(50949),
        i = a(28381),
        r = a(34860),
        l = a.n(r),
        c = a(47577),
        t = (0, i.forwardRef)(function (e, n) {
          var a = e.children,
            r = e.component,
            l = void 0 === r ? 'div' : r,
            t = e.className,
            o = (0, s._T)(e, ['children', 'component', 'className'])
          return i.createElement(
            l,
            (0, s.pi)({ className: (0, c.Z)('card-header', t) }, o, { ref: n }),
            a,
          )
        })
      ;(t.propTypes = { children: l().node, className: l().string, component: l().elementType }),
        (t.displayName = 'CCardHeader')
    },
    5640: (e, n, a) => {
      a.d(n, { b: () => o })
      var s = a(50949),
        i = a(28381),
        r = a(34860),
        l = a.n(r),
        c = a(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, i.forwardRef)(function (e, n) {
          var a = e.children,
            r = e.className,
            l = (0, s._T)(e, ['children', 'className']),
            o = []
          return (
            t.forEach(function (e) {
              var n = l[e]
              delete l[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof n && 'string' !== typeof n) ||
                o.push('col'.concat(a, '-').concat(n)),
                'boolean' === typeof n && o.push('col'.concat(a)),
                n &&
                  'object' === typeof n &&
                  (('number' !== typeof n.span && 'string' !== typeof n.span) ||
                    o.push('col'.concat(a, '-').concat(n.span)),
                  'boolean' === typeof n.span && o.push('col'.concat(a)),
                  ('number' !== typeof n.order && 'string' !== typeof n.order) ||
                    o.push('order'.concat(a, '-').concat(n.order)),
                  'number' === typeof n.offset && o.push('offset'.concat(a, '-').concat(n.offset)))
            }),
            i.createElement(
              'div',
              (0, s.pi)({ className: (0, c.Z)(o.length > 0 ? o : 'col', r) }, l, { ref: n }),
              a,
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
      ;(o.propTypes = {
        children: l().node,
        className: l().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (o.displayName = 'CCol')
    },
    48917: (e, n, a) => {
      a.d(n, { r: () => o })
      var s = a(50949),
        i = a(28381),
        r = a(34860),
        l = a.n(r),
        c = a(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, i.forwardRef)(function (e, n) {
          var a = e.children,
            r = e.className,
            l = (0, s._T)(e, ['children', 'className']),
            o = []
          return (
            t.forEach(function (e) {
              var n = l[e]
              delete l[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof n &&
                (n.cols && o.push('row-cols'.concat(a, '-').concat(n.cols)),
                'number' === typeof n.gutter && o.push('g'.concat(a, '-').concat(n.gutter)),
                'number' === typeof n.gutterX && o.push('gx'.concat(a, '-').concat(n.gutterX)),
                'number' === typeof n.gutterY && o.push('gy'.concat(a, '-').concat(n.gutterY)))
            }),
            i.createElement('div', { className: (0, c.Z)('row', o, r), ref: n }, a)
          )
        }),
        d = l().shape({
          cols: l().oneOfType([l().oneOf(['auto']), l().number, l().string]),
          gutter: l().oneOfType([l().string, l().number]),
          gutterX: l().oneOfType([l().string, l().number]),
          gutterY: l().oneOfType([l().string, l().number]),
        })
      ;(o.propTypes = {
        children: l().node,
        className: l().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (o.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=4561.12ac4101.chunk.js.map
