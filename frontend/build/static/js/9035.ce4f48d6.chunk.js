'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9035],
  {
    89035: (e, s, r) => {
      r.r(s), r.d(s, { default: () => k })
      var l = r(28381),
        c = r(48917),
        n = r(5640),
        i = r(13609),
        o = r(42177),
        d = r(45813),
        a = r(50949),
        h = r(34860),
        t = r.n(h),
        x = r(47577),
        j = r(37169),
        p = (0, l.forwardRef)(function (e, s) {
          var r,
            c = e.children,
            n = e.className,
            i = e.color,
            o = (0, a._T)(e, ['children', 'className', 'color'])
          return l.createElement(
            'thead',
            (0, a.pi)(
              { className: (0, x.Z)(((r = {}), (r['table-'.concat(i)] = i), r), n) || void 0 },
              o,
              { ref: s },
            ),
            c,
          )
        })
      ;(p.propTypes = { children: t().node, className: t().string, color: j.$1 }),
        (p.displayName = 'CTableHead')
      var m = (0, l.forwardRef)(function (e, s) {
        var r,
          c = e.children,
          n = e.className,
          i = e.color,
          o = (0, a._T)(e, ['children', 'className', 'color'])
        return l.createElement(
          'th',
          (0, a.pi)(
            { className: (0, x.Z)(((r = {}), (r['table-'.concat(i)] = i), r), n) || void 0 },
            o,
            { ref: s },
          ),
          c,
        )
      })
      ;(m.propTypes = { children: t().node, className: t().string, color: j.$1 }),
        (m.displayName = 'CTableHeaderCell')
      var b = (0, l.forwardRef)(function (e, s) {
        var r,
          c = e.children,
          n = e.className,
          i = e.color,
          o = (0, a._T)(e, ['children', 'className', 'color'])
        return l.createElement(
          'tbody',
          (0, a.pi)(
            { className: (0, x.Z)(((r = {}), (r['table-'.concat(i)] = i), r), n) || void 0 },
            o,
            { ref: s },
          ),
          c,
        )
      })
      ;(b.propTypes = { children: t().node, className: t().string, color: j.$1 }),
        (b.displayName = 'CTableBody')
      var f = (0, l.forwardRef)(function (e, s) {
        var r,
          c = e.children,
          n = e.active,
          i = e.align,
          o = e.className,
          d = e.color,
          h = (0, a._T)(e, ['children', 'active', 'align', 'className', 'color']),
          t = h.scope ? 'th' : 'td'
        return l.createElement(
          t,
          (0, a.pi)(
            {
              className:
                (0, x.Z)(
                  ((r = {}),
                  (r['align-'.concat(i)] = i),
                  (r['table-active'] = n),
                  (r['table-'.concat(d)] = d),
                  r),
                  o,
                ) || void 0,
            },
            h,
            { ref: s },
          ),
          c,
        )
      })
      ;(f.propTypes = {
        active: t().bool,
        align: t().oneOf(['bottom', 'middle', 'top']),
        children: t().node,
        className: t().string,
        color: j.$1,
      }),
        (f.displayName = 'CTableDataCell')
      var g = (0, l.forwardRef)(function (e, s) {
        var r,
          c = e.children,
          n = e.active,
          i = e.align,
          o = e.className,
          d = e.color,
          h = (0, a._T)(e, ['children', 'active', 'align', 'className', 'color'])
        return l.createElement(
          'tr',
          (0, a.pi)(
            {
              className:
                (0, x.Z)(
                  ((r = {}),
                  (r['align-'.concat(i)] = i),
                  (r['table-active'] = n),
                  (r['table-'.concat(d)] = d),
                  r),
                  o,
                ) || void 0,
            },
            h,
            { ref: s },
          ),
          c,
        )
      })
      ;(g.propTypes = {
        active: t().bool,
        align: t().oneOf(['bottom', 'middle', 'top']),
        children: t().node,
        className: t().string,
        color: j.$1,
      }),
        (g.displayName = 'CTableRow')
      var w = (0, l.forwardRef)(function (e, s) {
        var r,
          c = e.children,
          n = e.className,
          i = e.color,
          o = (0, a._T)(e, ['children', 'className', 'color'])
        return l.createElement(
          'tfoot',
          (0, a.pi)(
            { className: (0, x.Z)(((r = {}), (r['table-'.concat(i)] = i), r), n) || void 0 },
            o,
            { ref: s },
          ),
          c,
        )
      })
      ;(w.propTypes = { children: t().node, className: t().string, color: j.$1 }),
        (w.displayName = 'CTableFoot')
      var y = (0, l.forwardRef)(function (e, s) {
        var r = e.children,
          c = (0, a._T)(e, ['children'])
        return l.createElement('caption', (0, a.pi)({}, c, { ref: s }), r)
      })
      ;(y.propTypes = { children: t().node }), (y.displayName = 'CTableCaption')
      var u = function (e) {
        var s = e.children,
          r = e.responsive,
          c = (0, a._T)(e, ['children', 'responsive'])
        return r
          ? l.createElement(
              'div',
              (0, a.pi)(
                {
                  className:
                    'boolean' === typeof r ? 'table-responsive' : 'table-responsive-'.concat(r),
                },
                c,
              ),
              s,
            )
          : l.createElement(l.Fragment, null, s)
      }
      ;(u.propTypes = {
        children: t().node,
        responsive: t().oneOfType([t().bool, t().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
      }),
        (u.displayName = 'CTableResponsiveWrapper')
      var T = function (e) {
          return e
            .replace(/[-_.]/g, ' ')
            .replace(/ +/g, ' ')
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .split(' ')
            .map(function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1)
            })
            .join(' ')
        },
        v = function (e) {
          return Object.keys(e[0] || {}).filter(function (e) {
            return '_' !== e.charAt(0)
          })
        },
        N = (0, l.forwardRef)(function (e, s) {
          var r,
            c = e.children,
            n = e.align,
            i = e.borderColor,
            o = e.bordered,
            d = e.borderless,
            h = e.caption,
            t = e.captionTop,
            j = e.className,
            N = e.color,
            C = e.columns,
            H = e.footer,
            k = e.hover,
            O = e.items,
            _ = e.responsive,
            R = e.small,
            B = e.striped,
            E = e.stripedColumns,
            L = e.tableFootProps,
            q = e.tableHeadProps,
            S = (0, a._T)(e, [
              'children',
              'align',
              'borderColor',
              'bordered',
              'borderless',
              'caption',
              'captionTop',
              'className',
              'color',
              'columns',
              'footer',
              'hover',
              'items',
              'responsive',
              'small',
              'striped',
              'stripedColumns',
              'tableFootProps',
              'tableHeadProps',
            ]),
            M = (0, l.useMemo)(
              function () {
                return (function (e, s) {
                  return e
                    ? e.map(function (e) {
                        return 'object' === typeof e ? e.key : e
                      })
                    : s && v(s)
                })(C, O)
              },
              [C, O],
            )
          return l.createElement(
            u,
            { responsive: _ },
            l.createElement(
              'table',
              (0, a.pi)(
                {
                  className: (0, x.Z)(
                    'table',
                    ((r = {}),
                    (r['align-'.concat(n)] = n),
                    (r['border-'.concat(i)] = i),
                    (r['caption-top'] = t || 'top' === h),
                    (r['table-bordered'] = o),
                    (r['table-borderless'] = d),
                    (r['table-'.concat(N)] = N),
                    (r['table-hover'] = k),
                    (r['table-sm'] = R),
                    (r['table-striped'] = B),
                    (r['table-striped-columns'] = E),
                    r),
                    j,
                  ),
                },
                S,
                { ref: s },
              ),
              ((h && 'top' !== h) || t) && l.createElement(y, null, h || t),
              C &&
                l.createElement(
                  p,
                  (0, a.pi)({}, q),
                  l.createElement(
                    g,
                    null,
                    C.map(function (e, s) {
                      return l.createElement(
                        m,
                        (0, a.pi)(
                          {},
                          e._props && (0, a.pi)({}, e._props),
                          e._style && { style: (0, a.pi)({}, e._style) },
                          { key: s },
                        ),
                        (function (e) {
                          var s
                          return 'object' === typeof e
                            ? null !== (s = e.label) && void 0 !== s
                              ? s
                              : T(e.key)
                            : T(e)
                        })(e),
                      )
                    }),
                  ),
                ),
              O &&
                l.createElement(
                  b,
                  null,
                  O.map(function (e, s) {
                    return l.createElement(
                      g,
                      (0, a.pi)({}, e._props && (0, a.pi)({}, e._props), { key: s }),
                      M &&
                        M.map(function (s, r) {
                          return void 0 !== e[s]
                            ? l.createElement(
                                f,
                                (0, a.pi)(
                                  {},
                                  e._cellProps &&
                                    (0, a.pi)(
                                      (0, a.pi)(
                                        {},
                                        e._cellProps.all && (0, a.pi)({}, e._cellProps.all),
                                      ),
                                      e._cellProps[s] && (0, a.pi)({}, e._cellProps[s]),
                                    ),
                                  { key: r },
                                ),
                                e[s],
                              )
                            : null
                        }),
                    )
                  }),
                ),
              c,
              H &&
                l.createElement(
                  w,
                  (0, a.pi)({}, L),
                  l.createElement(
                    g,
                    null,
                    H.map(function (e, s) {
                      return l.createElement(
                        f,
                        (0, a.pi)(
                          {},
                          'object' === typeof e && e._props && (0, a.pi)({}, e._props),
                          { key: s },
                        ),
                        'object' === typeof e ? e.label : e,
                      )
                    }),
                  ),
                ),
            ),
          )
        })
      ;(N.propTypes = {
        align: t().oneOf(['bottom', 'middle', 'top']),
        borderColor: t().string,
        bordered: t().bool,
        borderless: t().bool,
        caption: t().oneOfType([t().string, t().oneOf(['top'])]),
        captionTop: t().string,
        children: t().node,
        className: t().string,
        color: j.$1,
        columns: t().array,
        footer: t().array,
        hover: t().bool,
        items: t().array,
        responsive: t().oneOfType([t().bool, t().oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])]),
        small: t().bool,
        striped: t().bool,
        stripedColumns: t().bool,
        tableFootProps: t().shape((0, a.pi)({}, w.propTypes)),
        tableHeadProps: t().shape((0, a.pi)({}, p.propTypes)),
      }),
        (N.displayName = 'CTable')
      var C = r(54908),
        H = r(29343)
      const k = () =>
        (0, H.jsxs)(c.r, {
          children: [
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "Using the most basic table CoreUI, here's how ",
                          (0, H.jsx)('code', { children: '<CTable>' }),
                          '-based tables look in CoreUI.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Variants' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Use contextual classes to color tables, table rows or individual cells.',
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#variants',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Default' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'primary',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Primary' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'secondary',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Secondary' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'success',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Success' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'danger',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Danger' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'warning',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Warning' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'info',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Info' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'light',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Light' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  color: 'dark',
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: 'Dark' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
                                    (0, H.jsx)(f, { children: 'Cell' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Striped rows' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, H.jsx)('code', { children: 'striped' }),
                          ' property to add zebra-striping to any table row within the',
                          ' ',
                          (0, H.jsx)('code', { children: '<CTableBody>' }),
                          '.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#striped-rows',
                        children: (0, H.jsxs)(N, {
                          striped: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'These classes can also be added to table variants:',
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#striped-rows',
                        children: (0, H.jsxs)(N, {
                          color: 'dark',
                          striped: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#striped-rows',
                        children: (0, H.jsxs)(N, {
                          color: 'success',
                          striped: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Hoverable rows' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use ',
                          (0, H.jsx)('code', { children: 'hover' }),
                          ' property to enable a hover state on table rows within a',
                          ' ',
                          (0, H.jsx)('code', { children: '<CTableBody>' }),
                          '.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#hoverable-rows',
                        children: (0, H.jsxs)(N, {
                          hover: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#hoverable-rows',
                        children: (0, H.jsxs)(N, {
                          color: 'dark',
                          hover: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#hoverable-rows',
                        children: (0, H.jsxs)(N, {
                          striped: !0,
                          hover: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Active tables' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#active-tables',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  active: !0,
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, {
                                      colSpan: '2',
                                      active: !0,
                                      children: 'Larry the Bird',
                                    }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#active-tables',
                        children: (0, H.jsxs)(N, {
                          color: 'dark',
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  active: !0,
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, {
                                      colSpan: '2',
                                      active: !0,
                                      children: 'Larry the Bird',
                                    }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Bordered tables' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, H.jsx)('code', { children: 'bordered' }),
                          ' property for borders on all sides of the table and cells.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#bordered-tables',
                        children: (0, H.jsxs)(N, {
                          bordered: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          (0, H.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/borders#border-color',
                            children: 'Border color utilities',
                          }),
                          ' ',
                          'can be added to change colors:',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#bordered-tables',
                        children: (0, H.jsxs)(N, {
                          bordered: !0,
                          borderColor: 'primary',
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Tables without borders' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, H.jsx)('code', { children: 'borderless' }),
                          ' property for a table without borders.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#tables-without-borders',
                        children: (0, H.jsxs)(N, {
                          borderless: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#tables-without-borders',
                        children: (0, H.jsxs)(N, {
                          color: 'dark',
                          borderless: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Small tables' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add ',
                          (0, H.jsx)('code', { children: 'small' }),
                          ' property to make any ',
                          (0, H.jsx)('code', { children: '<CTable>' }),
                          ' more compact by cutting all cell ',
                          (0, H.jsx)('code', { children: 'padding' }),
                          ' in half.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#small-tables',
                        children: (0, H.jsxs)(N, {
                          small: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Vertical alignment' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Table cells of ',
                          (0, H.jsx)('code', { children: '<CTableHead>' }),
                          ' are always vertical aligned to the bottom. Table cells in ',
                          (0, H.jsx)('code', { children: '<CTableBody>' }),
                          ' inherit their alignment from',
                          ' ',
                          (0, H.jsx)('code', { children: '<CTable>' }),
                          ' and are aligned to the the top by default. Use the align property to re-align where needed.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#vertical-alignment',
                        children: (0, H.jsxs)(N, {
                          align: 'middle',
                          responsive: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, {
                                    scope: 'col',
                                    className: 'w-25',
                                    children: 'Heading 1',
                                  }),
                                  (0, H.jsx)(m, {
                                    scope: 'col',
                                    className: 'w-25',
                                    children: 'Heading 2',
                                  }),
                                  (0, H.jsx)(m, {
                                    scope: 'col',
                                    className: 'w-25',
                                    children: 'Heading 3',
                                  }),
                                  (0, H.jsx)(m, {
                                    scope: 'col',
                                    className: 'w-25',
                                    children: 'Heading 4',
                                  }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: middle;' }),
                                        ' from the table',
                                      ],
                                    }),
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: middle;' }),
                                        ' from the table',
                                      ],
                                    }),
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: middle;' }),
                                        ' from the table',
                                      ],
                                    }),
                                    (0, H.jsx)(f, {
                                      children:
                                        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.',
                                    }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  align: 'bottom',
                                  children: [
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: bottom;' }),
                                        ' from the table row',
                                      ],
                                    }),
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: bottom;' }),
                                        ' from the table row',
                                      ],
                                    }),
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: bottom;' }),
                                        ' from the table row',
                                      ],
                                    }),
                                    (0, H.jsx)(f, {
                                      children:
                                        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.',
                                    }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: middle;' }),
                                        ' from the table',
                                      ],
                                    }),
                                    (0, H.jsxs)(f, {
                                      children: [
                                        'This cell inherits ',
                                        (0, H.jsx)('code', { children: 'vertical-align: middle;' }),
                                        ' from the table',
                                      ],
                                    }),
                                    (0, H.jsx)(f, {
                                      align: 'top',
                                      children: 'This cell is aligned to the top.',
                                    }),
                                    (0, H.jsx)(f, {
                                      children:
                                        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.',
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Nesting' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Border styles, active styles, and table variants are not inherited by nested tables.',
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#nesting',
                        children: (0, H.jsxs)(N, {
                          striped: !0,
                          children: [
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsx)(g, {
                                  children: (0, H.jsx)(m, {
                                    colSpan: '4',
                                    children: (0, H.jsxs)(N, {
                                      children: [
                                        (0, H.jsx)(p, {
                                          children: (0, H.jsxs)(g, {
                                            children: [
                                              (0, H.jsx)(m, { scope: 'col', children: 'Header' }),
                                              (0, H.jsx)(m, { scope: 'col', children: 'Header' }),
                                              (0, H.jsx)(m, { scope: 'col', children: 'Header' }),
                                            ],
                                          }),
                                        }),
                                        (0, H.jsxs)(b, {
                                          children: [
                                            (0, H.jsxs)(g, {
                                              children: [
                                                (0, H.jsx)(m, { scope: 'row', children: 'A' }),
                                                (0, H.jsx)(f, { children: 'First' }),
                                                (0, H.jsx)(f, { children: 'Last' }),
                                              ],
                                            }),
                                            (0, H.jsxs)(g, {
                                              children: [
                                                (0, H.jsx)(m, { scope: 'row', children: 'B' }),
                                                (0, H.jsx)(f, { children: 'First' }),
                                                (0, H.jsx)(f, { children: 'Last' }),
                                              ],
                                            }),
                                            (0, H.jsxs)(g, {
                                              children: [
                                                (0, H.jsx)(m, { scope: 'row', children: 'C' }),
                                                (0, H.jsx)(f, { children: 'First' }),
                                                (0, H.jsx)(f, { children: 'Last' }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Table head' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Similar to tables and dark tables, use the modifier prop',
                          ' ',
                          (0, H.jsx)('code', { children: 'color="light"' }),
                          ' or ',
                          (0, H.jsx)('code', { children: 'color="dark"' }),
                          ' to make',
                          ' ',
                          (0, H.jsx)('code', { children: '<CTableHead>' }),
                          's appear light or dark gray.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#table-head',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(p, {
                              color: 'light',
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { children: 'Larry' }),
                                    (0, H.jsx)(f, { children: 'the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#table-head',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(p, {
                              color: 'dark',
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Table foot' }),
                    ],
                  }),
                  (0, H.jsx)(d.s, {
                    children: (0, H.jsx)(C.q3, {
                      href: 'components/table#table-foot',
                      children: (0, H.jsxs)(N, {
                        children: [
                          (0, H.jsx)(p, {
                            color: 'light',
                            children: (0, H.jsxs)(g, {
                              children: [
                                (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                              ],
                            }),
                          }),
                          (0, H.jsxs)(b, {
                            children: [
                              (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                  (0, H.jsx)(f, { children: 'Mark' }),
                                  (0, H.jsx)(f, { children: 'Otto' }),
                                  (0, H.jsx)(f, { children: '@mdo' }),
                                ],
                              }),
                              (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                  (0, H.jsx)(f, { children: 'Jacob' }),
                                  (0, H.jsx)(f, { children: 'Thornton' }),
                                  (0, H.jsx)(f, { children: '@fat' }),
                                ],
                              }),
                              (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                  (0, H.jsx)(f, { colSpan: '2', children: 'Larry the Bird' }),
                                  (0, H.jsx)(f, { children: '@twitter' }),
                                ],
                              }),
                            ],
                          }),
                          (0, H.jsx)(p, {
                            children: (0, H.jsxs)(g, {
                              children: [
                                (0, H.jsx)(f, { children: 'Footer' }),
                                (0, H.jsx)(f, { children: 'Footer' }),
                                (0, H.jsx)(f, { children: 'Footer' }),
                                (0, H.jsx)(f, { children: 'Footer' }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, H.jsx)(n.b, {
              xs: 12,
              children: (0, H.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, H.jsxs)(o.b, {
                    children: [
                      (0, H.jsx)('strong', { children: 'React Table' }),
                      ' ',
                      (0, H.jsx)('small', { children: 'Captions' }),
                    ],
                  }),
                  (0, H.jsxs)(d.s, {
                    children: [
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'A ',
                          (0, H.jsx)('code', { children: '<CTableCaption>' }),
                          " functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.",
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#captions',
                        children: (0, H.jsxs)(N, {
                          children: [
                            (0, H.jsx)(y, { children: 'List of users' }),
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { children: 'Larry' }),
                                    (0, H.jsx)(f, { children: 'the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'You can also put the ',
                          (0, H.jsx)('code', { children: '<CTableCaption>' }),
                          ' on the top of the table with',
                          ' ',
                          (0, H.jsx)('code', { children: 'caption="top"' }),
                          '.',
                        ],
                      }),
                      (0, H.jsx)(C.q3, {
                        href: 'components/table#captions',
                        children: (0, H.jsxs)(N, {
                          caption: 'top',
                          children: [
                            (0, H.jsx)(y, { children: 'List of users' }),
                            (0, H.jsx)(p, {
                              children: (0, H.jsxs)(g, {
                                children: [
                                  (0, H.jsx)(m, { scope: 'col', children: '#' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Class' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                  (0, H.jsx)(m, { scope: 'col', children: 'Heading' }),
                                ],
                              }),
                            }),
                            (0, H.jsxs)(b, {
                              children: [
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '1' }),
                                    (0, H.jsx)(f, { children: 'Mark' }),
                                    (0, H.jsx)(f, { children: 'Otto' }),
                                    (0, H.jsx)(f, { children: '@mdo' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '2' }),
                                    (0, H.jsx)(f, { children: 'Jacob' }),
                                    (0, H.jsx)(f, { children: 'Thornton' }),
                                    (0, H.jsx)(f, { children: '@fat' }),
                                  ],
                                }),
                                (0, H.jsxs)(g, {
                                  children: [
                                    (0, H.jsx)(m, { scope: 'row', children: '3' }),
                                    (0, H.jsx)(f, { children: 'Larry' }),
                                    (0, H.jsx)(f, { children: 'the Bird' }),
                                    (0, H.jsx)(f, { children: '@twitter' }),
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
    13609: (e, s, r) => {
      r.d(s, { x: () => a })
      var l = r(50949),
        c = r(28381),
        n = r(34860),
        i = r.n(n),
        o = r(47577),
        d = r(37169),
        a = (0, c.forwardRef)(function (e, s) {
          var r,
            n = e.children,
            i = e.className,
            d = e.color,
            a = e.textColor,
            h = (0, l._T)(e, ['children', 'className', 'color', 'textColor'])
          return c.createElement(
            'div',
            (0, l.pi)(
              {
                className: (0, o.Z)(
                  'card',
                  ((r = {}), (r['bg-'.concat(d)] = d), (r['text-'.concat(a)] = a), r),
                  i,
                ),
              },
              h,
              { ref: s },
            ),
            n,
          )
        })
      ;(a.propTypes = {
        children: i().node,
        className: i().string,
        color: d.$1,
        textColor: i().string,
      }),
        (a.displayName = 'CCard')
    },
    45813: (e, s, r) => {
      r.d(s, { s: () => d })
      var l = r(50949),
        c = r(28381),
        n = r(34860),
        i = r.n(n),
        o = r(47577),
        d = (0, c.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            i = (0, l._T)(e, ['children', 'className'])
          return c.createElement(
            'div',
            (0, l.pi)({ className: (0, o.Z)('card-body', n) }, i, { ref: s }),
            r,
          )
        })
      ;(d.propTypes = { children: i().node, className: i().string }), (d.displayName = 'CCardBody')
    },
    42177: (e, s, r) => {
      r.d(s, { b: () => d })
      var l = r(50949),
        c = r(28381),
        n = r(34860),
        i = r.n(n),
        o = r(47577),
        d = (0, c.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.component,
            i = void 0 === n ? 'div' : n,
            d = e.className,
            a = (0, l._T)(e, ['children', 'component', 'className'])
          return c.createElement(
            i,
            (0, l.pi)({ className: (0, o.Z)('card-header', d) }, a, { ref: s }),
            r,
          )
        })
      ;(d.propTypes = { children: i().node, className: i().string, component: i().elementType }),
        (d.displayName = 'CCardHeader')
    },
    5640: (e, s, r) => {
      r.d(s, { b: () => a })
      var l = r(50949),
        c = r(28381),
        n = r(34860),
        i = r.n(n),
        o = r(47577),
        d = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        a = (0, c.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            i = (0, l._T)(e, ['children', 'className']),
            a = []
          return (
            d.forEach(function (e) {
              var s = i[e]
              delete i[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof s && 'string' !== typeof s) ||
                a.push('col'.concat(r, '-').concat(s)),
                'boolean' === typeof s && a.push('col'.concat(r)),
                s &&
                  'object' === typeof s &&
                  (('number' !== typeof s.span && 'string' !== typeof s.span) ||
                    a.push('col'.concat(r, '-').concat(s.span)),
                  'boolean' === typeof s.span && a.push('col'.concat(r)),
                  ('number' !== typeof s.order && 'string' !== typeof s.order) ||
                    a.push('order'.concat(r, '-').concat(s.order)),
                  'number' === typeof s.offset && a.push('offset'.concat(r, '-').concat(s.offset)))
            }),
            c.createElement(
              'div',
              (0, l.pi)({ className: (0, o.Z)(a.length > 0 ? a : 'col', n) }, i, { ref: s }),
              r,
            )
          )
        }),
        h = i().oneOfType([i().bool, i().number, i().string, i().oneOf(['auto'])]),
        t = i().oneOfType([
          h,
          i().shape({
            span: h,
            offset: i().oneOfType([i().number, i().string]),
            order: i().oneOfType([i().oneOf(['first', 'last']), i().number, i().string]),
          }),
        ])
      ;(a.propTypes = {
        children: i().node,
        className: i().string,
        xs: t,
        sm: t,
        md: t,
        lg: t,
        xl: t,
        xxl: t,
      }),
        (a.displayName = 'CCol')
    },
    48917: (e, s, r) => {
      r.d(s, { r: () => a })
      var l = r(50949),
        c = r(28381),
        n = r(34860),
        i = r.n(n),
        o = r(47577),
        d = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        a = (0, c.forwardRef)(function (e, s) {
          var r = e.children,
            n = e.className,
            i = (0, l._T)(e, ['children', 'className']),
            a = []
          return (
            d.forEach(function (e) {
              var s = i[e]
              delete i[e]
              var r = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof s &&
                (s.cols && a.push('row-cols'.concat(r, '-').concat(s.cols)),
                'number' === typeof s.gutter && a.push('g'.concat(r, '-').concat(s.gutter)),
                'number' === typeof s.gutterX && a.push('gx'.concat(r, '-').concat(s.gutterX)),
                'number' === typeof s.gutterY && a.push('gy'.concat(r, '-').concat(s.gutterY)))
            }),
            c.createElement('div', { className: (0, o.Z)('row', a, n), ref: s }, r)
          )
        }),
        h = i().shape({
          cols: i().oneOfType([i().oneOf(['auto']), i().number, i().string]),
          gutter: i().oneOfType([i().string, i().number]),
          gutterX: i().oneOfType([i().string, i().number]),
          gutterY: i().oneOfType([i().string, i().number]),
        })
      ;(a.propTypes = {
        children: i().node,
        className: i().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (a.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=9035.ce4f48d6.chunk.js.map
