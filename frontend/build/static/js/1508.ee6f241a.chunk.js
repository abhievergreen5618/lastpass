'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [1508],
  {
    21508: (e, s, i) => {
      i.r(s), i.d(s, { default: () => P })
      var t = i(28381),
        l = i(13609),
        r = i(42177),
        a = i(45813),
        o = i(48917),
        n = i(5640),
        c = i(4144),
        d = i(36701),
        x = i(6272),
        h = i(83628),
        u = i(34321),
        g = i(93671),
        m = i(4811),
        p = i(69557),
        j = i(42541),
        b = i(2464),
        y = i(69019),
        f = i(60604),
        v = i(7494),
        w = i(96556),
        Z = i(82230),
        C = i(60785),
        M = i(15172),
        N = i(81550),
        k = i(29162),
        S = i(82028),
        $ = i(38587),
        T = i(54908),
        W = i(94350),
        F = i(36214),
        A = i(97608),
        J = i(95823),
        R = i(96308),
        _ = i(29343)
      const B = (e) => {
        const s = {
          elements: {
            line: { tension: 0.4 },
            point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
          },
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
          scales: { x: { display: !1 }, y: { display: !1 } },
        }
        return (0, _.jsxs)(o.r, {
          className: e.className,
          xs: { gutter: 4 },
          children: [
            (0, _.jsx)(n.b, {
              sm: 6,
              xl: 4,
              xxl: 3,
              children: (0, _.jsx)(W.b, {
                ...(e.withCharts && {
                  chart: (0, _.jsx)($.FR, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [65, 59, 84, 84, 51, 55, 40],
                          fill: !0,
                        },
                      ],
                    },
                    options: s,
                  }),
                }),
                icon: (0, _.jsx)(p.Z, { icon: F.t, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'friends', value: '89K' },
                  { title: 'feeds', value: '459' },
                ],
                style: { '--cui-card-cap-bg': '#3b5998' },
              }),
            }),
            (0, _.jsx)(n.b, {
              sm: 6,
              xl: 4,
              xxl: 3,
              children: (0, _.jsx)(W.b, {
                ...(e.withCharts && {
                  chart: (0, _.jsx)($.FR, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [1, 13, 9, 17, 34, 41, 38],
                          fill: !0,
                        },
                      ],
                    },
                    options: s,
                  }),
                }),
                icon: (0, _.jsx)(p.Z, { icon: A._, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'followers', value: '973k' },
                  { title: 'tweets', value: '1.792' },
                ],
                style: { '--cui-card-cap-bg': '#00aced' },
              }),
            }),
            (0, _.jsx)(n.b, {
              sm: 6,
              xl: 4,
              xxl: 3,
              children: (0, _.jsx)(W.b, {
                ...(e.withCharts && {
                  chart: (0, _.jsx)($.FR, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [78, 81, 80, 45, 34, 12, 40],
                          fill: !0,
                        },
                      ],
                    },
                    options: s,
                  }),
                }),
                icon: (0, _.jsx)(p.Z, { icon: J.n, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'contacts', value: '500' },
                  { title: 'feeds', value: '1.292' },
                ],
                style: { '--cui-card-cap-bg': '#4875b4' },
              }),
            }),
            (0, _.jsx)(n.b, {
              sm: 6,
              xl: 4,
              xxl: 3,
              children: (0, _.jsx)(W.b, {
                color: 'warning',
                ...(e.withCharts && {
                  chart: (0, _.jsx)($.FR, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [35, 23, 56, 22, 97, 23, 64],
                          fill: !0,
                        },
                      ],
                    },
                    options: s,
                  }),
                }),
                icon: (0, _.jsx)(p.Z, { icon: R.J, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'events', value: '12+' },
                  { title: 'meetings', value: '4' },
                ],
              }),
            }),
          ],
        })
      }
      var U = i(99571),
        q = i(45514),
        z = i(67833),
        V = i(3983),
        K = i(32152),
        L = i(44933),
        H = i(83474),
        D = i(21314)
      const E = (e) => {
          const s = (0, t.useRef)(null),
            i = (0, t.useRef)(null)
          return (
            (0, t.useEffect)(() => {
              document.documentElement.addEventListener('ColorSchemeChange', () => {
                s.current &&
                  setTimeout(() => {
                    ;(s.current.data.datasets[0].pointBackgroundColor = (0, m.Z)('--cui-primary')),
                      s.current.update()
                  }),
                  i.current &&
                    setTimeout(() => {
                      ;(i.current.data.datasets[0].pointBackgroundColor = (0, m.Z)('--cui-info')),
                        i.current.update()
                    })
              })
            }, [s, i]),
            (0, _.jsxs)(o.r, {
              className: e.className,
              xs: { gutter: 4 },
              children: [
                (0, _.jsx)(n.b, {
                  sm: 6,
                  xl: 4,
                  xxl: 3,
                  children: (0, _.jsx)(U.c, {
                    color: 'primary',
                    value: (0, _.jsxs)(_.Fragment, {
                      children: [
                        '26K',
                        ' ',
                        (0, _.jsxs)('span', {
                          className: 'fs-6 fw-normal',
                          children: ['(-12.4% ', (0, _.jsx)(p.Z, { icon: L.t }), ')'],
                        }),
                      ],
                    }),
                    title: 'Users',
                    action: (0, _.jsxs)(q.w, {
                      alignment: 'end',
                      children: [
                        (0, _.jsx)(z.S, {
                          color: 'transparent',
                          caret: !1,
                          className: 'text-white p-0',
                          children: (0, _.jsx)(p.Z, { icon: H.t }),
                        }),
                        (0, _.jsxs)(V.$, {
                          children: [
                            (0, _.jsx)(K.$, { children: 'Action' }),
                            (0, _.jsx)(K.$, { children: 'Another action' }),
                            (0, _.jsx)(K.$, { children: 'Something else here...' }),
                            (0, _.jsx)(K.$, { disabled: !0, children: 'Disabled action' }),
                          ],
                        }),
                      ],
                    }),
                    chart: (0, _.jsx)($.oK, {
                      ref: s,
                      className: 'mt-3 mx-3',
                      style: { height: '70px' },
                      data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: (0, m.Z)('--cui-primary'),
                            data: [65, 59, 84, 84, 51, 55, 40],
                          },
                        ],
                      },
                      options: {
                        plugins: { legend: { display: !1 } },
                        maintainAspectRatio: !1,
                        scales: {
                          x: {
                            border: { display: !1 },
                            grid: { display: !1, drawBorder: !1 },
                            ticks: { display: !1 },
                          },
                          y: {
                            min: 30,
                            max: 89,
                            display: !1,
                            grid: { display: !1 },
                            ticks: { display: !1 },
                          },
                        },
                        elements: {
                          line: { borderWidth: 1, tension: 0.4 },
                          point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                        },
                      },
                    }),
                  }),
                }),
                (0, _.jsx)(n.b, {
                  sm: 6,
                  xl: 4,
                  xxl: 3,
                  children: (0, _.jsx)(U.c, {
                    color: 'info',
                    value: (0, _.jsxs)(_.Fragment, {
                      children: [
                        '$6.200',
                        ' ',
                        (0, _.jsxs)('span', {
                          className: 'fs-6 fw-normal',
                          children: ['(40.9% ', (0, _.jsx)(p.Z, { icon: D.T }), ')'],
                        }),
                      ],
                    }),
                    title: 'Income',
                    action: (0, _.jsxs)(q.w, {
                      alignment: 'end',
                      children: [
                        (0, _.jsx)(z.S, {
                          color: 'transparent',
                          caret: !1,
                          className: 'text-white p-0',
                          children: (0, _.jsx)(p.Z, { icon: H.t }),
                        }),
                        (0, _.jsxs)(V.$, {
                          children: [
                            (0, _.jsx)(K.$, { children: 'Action' }),
                            (0, _.jsx)(K.$, { children: 'Another action' }),
                            (0, _.jsx)(K.$, { children: 'Something else here...' }),
                            (0, _.jsx)(K.$, { disabled: !0, children: 'Disabled action' }),
                          ],
                        }),
                      ],
                    }),
                    chart: (0, _.jsx)($.oK, {
                      ref: i,
                      className: 'mt-3 mx-3',
                      style: { height: '70px' },
                      data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,.55)',
                            pointBackgroundColor: (0, m.Z)('--cui-info'),
                            data: [1, 18, 9, 17, 34, 22, 11],
                          },
                        ],
                      },
                      options: {
                        plugins: { legend: { display: !1 } },
                        maintainAspectRatio: !1,
                        scales: {
                          x: {
                            border: { display: !1 },
                            grid: { display: !1, drawBorder: !1 },
                            ticks: { display: !1 },
                          },
                          y: {
                            min: -9,
                            max: 39,
                            display: !1,
                            grid: { display: !1 },
                            ticks: { display: !1 },
                          },
                        },
                        elements: {
                          line: { borderWidth: 1 },
                          point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                        },
                      },
                    }),
                  }),
                }),
                (0, _.jsx)(n.b, {
                  sm: 6,
                  xl: 4,
                  xxl: 3,
                  children: (0, _.jsx)(U.c, {
                    color: 'warning',
                    value: (0, _.jsxs)(_.Fragment, {
                      children: [
                        '2.49%',
                        ' ',
                        (0, _.jsxs)('span', {
                          className: 'fs-6 fw-normal',
                          children: ['(84.7% ', (0, _.jsx)(p.Z, { icon: D.T }), ')'],
                        }),
                      ],
                    }),
                    title: 'Conversion Rate',
                    action: (0, _.jsxs)(q.w, {
                      alignment: 'end',
                      children: [
                        (0, _.jsx)(z.S, {
                          color: 'transparent',
                          caret: !1,
                          className: 'text-white p-0',
                          children: (0, _.jsx)(p.Z, { icon: H.t }),
                        }),
                        (0, _.jsxs)(V.$, {
                          children: [
                            (0, _.jsx)(K.$, { children: 'Action' }),
                            (0, _.jsx)(K.$, { children: 'Another action' }),
                            (0, _.jsx)(K.$, { children: 'Something else here...' }),
                            (0, _.jsx)(K.$, { disabled: !0, children: 'Disabled action' }),
                          ],
                        }),
                      ],
                    }),
                    chart: (0, _.jsx)($.oK, {
                      className: 'mt-3',
                      style: { height: '70px' },
                      data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40],
                            fill: !0,
                          },
                        ],
                      },
                      options: {
                        plugins: { legend: { display: !1 } },
                        maintainAspectRatio: !1,
                        scales: { x: { display: !1 }, y: { display: !1 } },
                        elements: {
                          line: { borderWidth: 2, tension: 0.4 },
                          point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
                        },
                      },
                    }),
                  }),
                }),
                (0, _.jsx)(n.b, {
                  sm: 6,
                  xl: 4,
                  xxl: 3,
                  children: (0, _.jsx)(U.c, {
                    color: 'danger',
                    value: (0, _.jsxs)(_.Fragment, {
                      children: [
                        '44K',
                        ' ',
                        (0, _.jsxs)('span', {
                          className: 'fs-6 fw-normal',
                          children: ['(-23.6% ', (0, _.jsx)(p.Z, { icon: L.t }), ')'],
                        }),
                      ],
                    }),
                    title: 'Sessions',
                    action: (0, _.jsxs)(q.w, {
                      alignment: 'end',
                      children: [
                        (0, _.jsx)(z.S, {
                          color: 'transparent',
                          caret: !1,
                          className: 'text-white p-0',
                          children: (0, _.jsx)(p.Z, { icon: H.t }),
                        }),
                        (0, _.jsxs)(V.$, {
                          children: [
                            (0, _.jsx)(K.$, { children: 'Action' }),
                            (0, _.jsx)(K.$, { children: 'Another action' }),
                            (0, _.jsx)(K.$, { children: 'Something else here...' }),
                            (0, _.jsx)(K.$, { disabled: !0, children: 'Disabled action' }),
                          ],
                        }),
                      ],
                    }),
                    chart: (0, _.jsx)($.JZ, {
                      className: 'mt-3 mx-3',
                      style: { height: '70px' },
                      data: {
                        labels: [
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December',
                          'January',
                          'February',
                          'March',
                          'April',
                        ],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderColor: 'rgba(255,255,255,.55)',
                            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                            barPercentage: 0.6,
                          },
                        ],
                      },
                      options: {
                        maintainAspectRatio: !1,
                        plugins: { legend: { display: !1 } },
                        scales: {
                          x: { grid: { display: !1, drawTicks: !1 }, ticks: { display: !1 } },
                          y: {
                            border: { display: !1 },
                            grid: { display: !1, drawBorder: !1, drawTicks: !1 },
                            ticks: { display: !1 },
                          },
                        },
                      },
                    }),
                  }),
                }),
              ],
            })
          )
        },
        P = () => {
          const e = (e, s) => Math.floor(Math.random() * (s - e + 1) + e)
          return (0, _.jsxs)(l.x, {
            className: 'mb-4',
            children: [
              (0, _.jsx)(r.b, { children: 'Widgets' }),
              (0, _.jsxs)(a.s, {
                children: [
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsa',
                    children: (0, _.jsx)(E, {}),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsb',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            progress: { color: 'success', value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                            title: 'Widget title',
                            value: '89.9%',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            value: '12.124',
                            title: 'Widget title',
                            progress: { color: 'info', value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            value: '$98.111,00',
                            title: 'Widget title',
                            progress: { color: 'warning', value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            value: '2 TB',
                            title: 'Widget title',
                            progress: { color: 'primary', value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsb',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            color: 'success',
                            inverse: !0,
                            value: '89.9%',
                            title: 'Widget title',
                            progress: { value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            color: 'info',
                            inverse: !0,
                            value: '12.124',
                            title: 'Widget title',
                            progress: { value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            color: 'warning',
                            inverse: !0,
                            value: '$98.111,00',
                            title: 'Widget title',
                            progress: { value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(c.t, {
                            color: 'primary',
                            inverse: !0,
                            value: '2 TB',
                            title: 'Widget title',
                            progress: { value: 89.9 },
                            text: 'Lorem ipsum dolor sit amet enim.',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatse',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.JZ, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: (0, m.Z)('--cui-danger'),
                                    borderColor: 'transparent',
                                    borderWidth: 1,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.JZ, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: (0, m.Z)('--cui-primary'),
                                    borderColor: 'transparent',
                                    borderWidth: 1,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.JZ, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: (0, m.Z)('--cui-success'),
                                    borderColor: 'transparent',
                                    borderWidth: 1,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.oK, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: 'transparent',
                                    borderColor: (0, m.Z)('--cui-danger'),
                                    borderWidth: 2,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.oK, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: 'transparent',
                                    borderColor: (0, m.Z)('--cui-success'),
                                    borderWidth: 2,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          sm: 4,
                          md: 3,
                          xl: 2,
                          children: (0, _.jsx)(d.y, {
                            chart: (0, _.jsx)($.oK, {
                              className: 'mx-auto',
                              style: { height: '40px', width: '80px' },
                              data: {
                                labels: [
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                  'T',
                                  'W',
                                  'T',
                                  'F',
                                  'S',
                                  'S',
                                  'M',
                                ],
                                datasets: [
                                  {
                                    backgroundColor: 'transparent',
                                    borderColor: (0, m.Z)('--cui-info'),
                                    borderWidth: 2,
                                    data: [
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                      e(40, 100),
                                    ],
                                  },
                                ],
                              },
                              options: {
                                maintainAspectRatio: !1,
                                elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                                plugins: { legend: { display: !1 } },
                                scales: { x: { display: !1 }, y: { display: !1 } },
                              },
                            }),
                            title: 'title',
                            value: '1,123',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsf',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: j.M, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'primary',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: b.E, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'info',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: y.S, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'warning',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: f.$, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'danger',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsf',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: j.M, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'primary',
                            footer: (0, _.jsxs)(h.h, {
                              className: 'font-weight-bold font-xs text-body-secondary',
                              href: 'https://coreui.io/',
                              rel: 'noopener norefferer',
                              target: '_blank',
                              children: [
                                'View more',
                                (0, _.jsx)(p.Z, { icon: v.n, className: 'float-end', width: 16 }),
                              ],
                            }),
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: w.U, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'info',
                            footer: (0, _.jsxs)(h.h, {
                              className: 'font-weight-bold font-xs text-body-secondary',
                              href: 'https://coreui.io/',
                              rel: 'noopener norefferer',
                              target: '_blank',
                              children: [
                                'View more',
                                (0, _.jsx)(p.Z, { icon: v.n, className: 'float-end', width: 16 }),
                              ],
                            }),
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: y.S, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'warning',
                            footer: (0, _.jsxs)(h.h, {
                              className: 'font-weight-bold font-xs text-body-secondary',
                              href: 'https://coreui.io/',
                              rel: 'noopener norefferer',
                              target: '_blank',
                              children: [
                                'View more',
                                (0, _.jsx)(p.Z, { icon: v.n, className: 'float-end', width: 16 }),
                              ],
                            }),
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: f.$, size: 'xl' }),
                            title: 'income',
                            value: '$1.999,50',
                            color: 'danger',
                            footer: (0, _.jsxs)(h.h, {
                              className: 'font-weight-bold font-xs text-body-secondary',
                              href: 'https://coreui.io/',
                              rel: 'noopener norefferer',
                              target: '_blank',
                              children: [
                                'View more',
                                (0, _.jsx)(p.Z, { icon: v.n, className: 'float-end', width: 16 }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsf',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: j.M, size: 'xl' }),
                            padding: !1,
                            title: 'income',
                            value: '$1.999,50',
                            color: 'primary',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: b.E, size: 'xl' }),
                            padding: !1,
                            title: 'income',
                            value: '$1.999,50',
                            color: 'info',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: y.S, size: 'xl' }),
                            padding: !1,
                            title: 'income',
                            value: '$1.999,50',
                            color: 'warning',
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 12,
                          sm: 6,
                          xl: 4,
                          xxl: 3,
                          children: (0, _.jsx)(x.U, {
                            icon: (0, _.jsx)(p.Z, { width: 24, icon: f.$, size: 'xl' }),
                            padding: !1,
                            title: 'income',
                            value: '$1.999,50',
                            color: 'danger',
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsd',
                    children: (0, _.jsx)(B, {}),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsd',
                    children: (0, _.jsx)(B, { withCharts: !0 }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsc',
                    children: (0, _.jsxs)(u.d, {
                      className: 'mb-4',
                      children: [
                        (0, _.jsx)(g.f, {
                          icon: (0, _.jsx)(p.Z, { icon: Z.g, height: 36 }),
                          value: '87.500',
                          title: 'Visitors',
                          progress: { color: 'info', value: 75 },
                        }),
                        (0, _.jsx)(g.f, {
                          icon: (0, _.jsx)(p.Z, { icon: C.H, height: 36 }),
                          value: '385',
                          title: 'New Clients',
                          progress: { color: 'success', value: 75 },
                        }),
                        (0, _.jsx)(g.f, {
                          icon: (0, _.jsx)(p.Z, { icon: M.o, height: 36 }),
                          value: '1238',
                          title: 'Products sold',
                          progress: { color: 'warning', value: 75 },
                        }),
                        (0, _.jsx)(g.f, {
                          icon: (0, _.jsx)(p.Z, { icon: N.M, height: 36 }),
                          value: '28%',
                          title: 'Returning Visitors',
                          progress: { color: 'primary', value: 75 },
                        }),
                        (0, _.jsx)(g.f, {
                          icon: (0, _.jsx)(p.Z, { icon: k.h, height: 36 }),
                          value: '5:34:11',
                          title: 'Avg. Time',
                          progress: { color: 'danger', value: 75 },
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsc',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: Z.g, height: 36 }),
                            value: '87.500',
                            title: 'Visitors',
                            progress: { color: 'info', value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: C.H, height: 36 }),
                            value: '385',
                            title: 'New Clients',
                            progress: { color: 'success', value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: M.o, height: 36 }),
                            value: '1238',
                            title: 'Products sold',
                            progress: { color: 'warning', value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: N.M, height: 36 }),
                            value: '28%',
                            title: 'Returning Visitors',
                            progress: { color: 'primary', value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: k.h, height: 36 }),
                            value: '5:34:11',
                            title: 'Avg. Time',
                            progress: { color: 'danger', value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            icon: (0, _.jsx)(p.Z, { icon: S.B, height: 36 }),
                            value: '972',
                            title: 'Comments',
                            progress: { color: 'info', value: 75 },
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(T.q3, {
                    href: 'components/widgets/#cwidgetstatsc',
                    children: (0, _.jsxs)(o.r, {
                      xs: { gutter: 4 },
                      children: [
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'info',
                            icon: (0, _.jsx)(p.Z, { icon: Z.g, height: 36 }),
                            value: '87.500',
                            title: 'Visitors',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'success',
                            icon: (0, _.jsx)(p.Z, { icon: C.H, height: 36 }),
                            value: '385',
                            title: 'New Clients',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'warning',
                            icon: (0, _.jsx)(p.Z, { icon: M.o, height: 36 }),
                            value: '1238',
                            title: 'Products sold',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'primary',
                            icon: (0, _.jsx)(p.Z, { icon: N.M, height: 36 }),
                            value: '28%',
                            title: 'Returning Visitors',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'danger',
                            icon: (0, _.jsx)(p.Z, { icon: k.h, height: 36 }),
                            value: '5:34:11',
                            title: 'Avg. Time',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                        (0, _.jsx)(n.b, {
                          xs: 6,
                          lg: 4,
                          xxl: 2,
                          children: (0, _.jsx)(g.f, {
                            color: 'info',
                            icon: (0, _.jsx)(p.Z, { icon: S.B, height: 36 }),
                            value: '972',
                            title: 'Comments',
                            inverse: !0,
                            progress: { value: 75 },
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        }
    },
  },
])
//# sourceMappingURL=1508.ee6f241a.chunk.js.map
