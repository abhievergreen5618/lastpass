'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [2892],
  {
    42892: (e, a, l) => {
      l.r(a), l.d(a, { default: () => j })
      var s = l(28381),
        i = l(48917),
        o = l(5640),
        t = l(13609),
        c = l(42177),
        n = l(45813),
        r = l(45088),
        d = l(50949),
        h = l(34860),
        b = l.n(h),
        m = l(47577),
        f = l(35424),
        x = (0, s.forwardRef)(function (e, a) {
          var l,
            i = e.className,
            o = e.id,
            t = e.invalid,
            c = e.label,
            n = e.reverse,
            r = e.size,
            h = e.type,
            b = void 0 === h ? 'checkbox' : h,
            x = e.valid,
            p = (0, d._T)(e, [
              'className',
              'id',
              'invalid',
              'label',
              'reverse',
              'size',
              'type',
              'valid',
            ])
          return s.createElement(
            'div',
            {
              className: (0, m.Z)(
                'form-check form-switch',
                ((l = { 'form-check-reverse': n }),
                (l['form-switch-'.concat(r)] = r),
                (l['is-invalid'] = t),
                (l['is-valid'] = x),
                l),
                i,
              ),
            },
            s.createElement(
              'input',
              (0, d.pi)(
                {
                  type: b,
                  className: (0, m.Z)('form-check-input', { 'is-invalid': t, 'is-valid': x }),
                  id: o,
                },
                p,
                { ref: a },
              ),
            ),
            c &&
              s.createElement(
                f.L,
                (0, d.pi)({ customClassName: 'form-check-label' }, o && { htmlFor: o }),
                c,
              ),
          )
        })
      ;(x.propTypes = {
        className: b().string,
        id: b().string,
        invalid: b().bool,
        label: b().oneOfType([b().string, b().node]),
        reverse: b().bool,
        size: b().oneOf(['lg', 'xl']),
        type: b().oneOf(['checkbox', 'radio']),
        valid: b().bool,
      }),
        (x.displayName = 'CFormSwitch')
      var p = l(54908),
        u = l(29343)
      const j = () =>
        (0, u.jsxs)(i.r, {
          children: [
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsx)(c.b, {
                    children: (0, u.jsx)('strong', { children: 'React Checkbox' }),
                  }),
                  (0, u.jsx)(n.s, {
                    children: (0, u.jsxs)(p.q3, {
                      href: 'forms/checks-radios',
                      children: [
                        (0, u.jsx)(r.E, { id: 'flexCheckDefault', label: 'Default checkbox' }),
                        (0, u.jsx)(r.E, {
                          id: 'flexCheckChecked',
                          label: 'Checked checkbox',
                          defaultChecked: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Checkbox' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add the ',
                          (0, u.jsx)('code', { children: 'disabled' }),
                          ' attribute and the associated ',
                          (0, u.jsx)('code', { children: '<label>' }),
                          "s are automatically styled to match with a lighter color to help indicate the input's state.",
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#disabled',
                        children: [
                          (0, u.jsx)(r.E, { label: 'Disabled checkbox', disabled: !0 }),
                          (0, u.jsx)(r.E, {
                            label: 'Disabled checked checkbox',
                            defaultChecked: !0,
                            disabled: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsx)(c.b, { children: (0, u.jsx)('strong', { children: 'React Radio' }) }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Add the ',
                          (0, u.jsx)('code', { children: 'disabled' }),
                          ' attribute and the associated ',
                          (0, u.jsx)('code', { children: '<label>' }),
                          "s are automatically styled to match with a lighter color to help indicate the input's state.",
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#radios',
                        children: [
                          (0, u.jsx)(r.E, {
                            type: 'radio',
                            name: 'flexRadioDefault',
                            id: 'flexRadioDefault1',
                            label: 'Default radio',
                          }),
                          (0, u.jsx)(r.E, {
                            type: 'radio',
                            name: 'flexRadioDefault',
                            id: 'flexRadioDefault2',
                            label: 'Checked radio',
                            defaultChecked: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Radio' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  (0, u.jsx)(n.s, {
                    children: (0, u.jsxs)(p.q3, {
                      href: 'forms/checks-radios#disabled-1',
                      children: [
                        (0, u.jsx)(r.E, {
                          type: 'radio',
                          name: 'flexRadioDisabled',
                          id: 'flexRadioDisabled',
                          label: 'Disabled radio',
                          disabled: !0,
                        }),
                        (0, u.jsx)(r.E, {
                          type: 'radio',
                          name: 'flexRadioDisabled',
                          id: 'flexRadioCheckedDisabled',
                          label: 'Disabled checked radio',
                          defaultChecked: !0,
                          disabled: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsx)(c.b, {
                    children: (0, u.jsx)('strong', { children: 'React Switches' }),
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'A switch has the markup of a custom checkbox but uses the ',
                          (0, u.jsx)('code', { children: 'switch' }),
                          ' boolean properly to render a toggle switch. Switches also support the ',
                          (0, u.jsx)('code', { children: 'disabled' }),
                          ' ',
                          'attribute.',
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#switches',
                        children: [
                          (0, u.jsx)(x, {
                            label: 'Default switch checkbox input',
                            id: 'formSwitchCheckDefault',
                          }),
                          (0, u.jsx)(x, {
                            label: 'Checked switch checkbox input',
                            id: 'formSwitchCheckChecked',
                            defaultChecked: !0,
                          }),
                          (0, u.jsx)(x, {
                            label: 'Disabled switch checkbox input',
                            id: 'formSwitchCheckDisabled',
                            disabled: !0,
                          }),
                          (0, u.jsx)(x, {
                            label: 'Disabled checked switch checkbox input',
                            id: 'formSwitchCheckCheckedDisabled',
                            defaultChecked: !0,
                            disabled: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Switches' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Sizes' }),
                    ],
                  }),
                  (0, u.jsx)(n.s, {
                    children: (0, u.jsxs)(p.q3, {
                      href: 'forms/checks-radios#sizes',
                      children: [
                        (0, u.jsx)(x, {
                          label: 'Default switch checkbox input',
                          id: 'formSwitchCheckDefault',
                        }),
                        (0, u.jsx)(x, {
                          size: 'lg',
                          label: 'Large switch checkbox input',
                          id: 'formSwitchCheckDefaultLg',
                        }),
                        (0, u.jsx)(x, {
                          size: 'xl',
                          label: 'Extra large switch checkbox input',
                          id: 'formSwitchCheckDefaultXL',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Default layout (stacked)' }),
                    ],
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced.',
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#default-stacked',
                        children: [
                          (0, u.jsx)(r.E, { id: 'defaultCheck1', label: 'Default checkbox' }),
                          (0, u.jsx)(r.E, {
                            id: 'defaultCheck2',
                            label: 'Disabled checkbox',
                            disabled: !0,
                          }),
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#default-stacked',
                        children: [
                          (0, u.jsx)(r.E, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios1',
                            value: 'option1',
                            label: 'Default radio',
                            defaultChecked: !0,
                          }),
                          (0, u.jsx)(r.E, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios2',
                            value: 'option2',
                            label: 'Second default radio',
                          }),
                          (0, u.jsx)(r.E, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios3',
                            value: 'option3',
                            label: 'Disabled radio',
                            disabled: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Inline' }),
                    ],
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Group checkboxes or radios on the same horizontal row by adding ',
                          (0, u.jsx)('code', { children: 'inline' }),
                          ' ',
                          'boolean property to any ',
                          (0, u.jsx)('code', { children: '<CFormCheck>' }),
                          '.',
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#inline',
                        children: [
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            id: 'inlineCheckbox1',
                            value: 'option1',
                            label: '1',
                          }),
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            id: 'inlineCheckbox2',
                            value: 'option2',
                            label: '2',
                          }),
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            id: 'inlineCheckbox3',
                            value: 'option3',
                            label: '3 (disabled)',
                            disabled: !0,
                          }),
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#inline',
                        children: [
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox1',
                            value: 'option1',
                            label: '1',
                          }),
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox2',
                            value: 'option2',
                            label: '2',
                          }),
                          (0, u.jsx)(r.E, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox3',
                            value: 'option3',
                            label: '3 (disabled)',
                            disabled: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsxs)(c.b, {
                    children: [
                      (0, u.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      (0, u.jsx)('small', { children: 'Without labels' }),
                    ],
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Remember to still provide some form of accessible name for assistive technologies (for instance, using ',
                          (0, u.jsx)('code', { children: 'aria-label' }),
                          ').',
                        ],
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#without-labels',
                        children: [
                          (0, u.jsx)('div', {
                            children: (0, u.jsx)(r.E, {
                              id: 'checkboxNoLabel',
                              value: '',
                              'aria-label': '...',
                            }),
                          }),
                          (0, u.jsx)('div', {
                            children: (0, u.jsx)(r.E, {
                              type: 'radio',
                              name: 'radioNoLabel',
                              id: 'radioNoLabel',
                              value: '',
                              'aria-label': '...',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, u.jsx)(o.b, {
              xs: 12,
              children: (0, u.jsxs)(t.x, {
                className: 'mb-4',
                children: [
                  (0, u.jsx)(c.b, {
                    children: (0, u.jsx)('strong', { children: 'Toggle buttons' }),
                  }),
                  (0, u.jsxs)(n.s, {
                    children: [
                      (0, u.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Create button-like checkboxes and radio buttons by using ',
                          (0, u.jsx)('code', { children: 'button' }),
                          ' boolean property on the ',
                          (0, u.jsx)('code', { children: '<CFormCheck>' }),
                          ' component. These toggle buttons can further be grouped in a button group if needed.',
                        ],
                      }),
                      (0, u.jsx)(p.q3, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: (0, u.jsx)(r.E, {
                          button: { color: 'primary ' },
                          id: 'btn-check',
                          autoComplete: 'off',
                          label: 'Single toggle',
                        }),
                      }),
                      (0, u.jsx)(p.q3, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: (0, u.jsx)(r.E, {
                          button: { color: 'primary ' },
                          id: 'btn-check-2',
                          autoComplete: 'off',
                          label: 'Checked',
                          defaultChecked: !0,
                        }),
                      }),
                      (0, u.jsx)(p.q3, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: (0, u.jsx)(r.E, {
                          button: { color: 'primary ' },
                          id: 'btn-check-3',
                          autoComplete: 'off',
                          label: 'Disabled',
                          disabled: !0,
                        }),
                      }),
                      (0, u.jsx)('h3', { children: 'Radio toggle buttons' }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: [
                          (0, u.jsx)(r.E, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option1',
                            autoComplete: 'off',
                            label: 'Checked',
                            defaultChecked: !0,
                          }),
                          (0, u.jsx)(r.E, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option2',
                            autoComplete: 'off',
                            label: 'Radio',
                          }),
                          (0, u.jsx)(r.E, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option3',
                            autoComplete: 'off',
                            label: 'Radio',
                            disabled: !0,
                          }),
                          (0, u.jsx)(r.E, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option4',
                            autoComplete: 'off',
                            label: 'Radio',
                          }),
                        ],
                      }),
                      (0, u.jsx)('h3', { children: 'Outlined styles' }),
                      (0, u.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'Different variants of button, such at the various outlined styles, are supported.',
                      }),
                      (0, u.jsxs)(p.q3, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: [
                          (0, u.jsx)('div', {
                            children: (0, u.jsx)(r.E, {
                              button: { color: 'primary', variant: 'outline' },
                              id: 'btn-check-outlined',
                              autoComplete: 'off',
                              label: 'Single toggle',
                            }),
                          }),
                          (0, u.jsx)('div', {
                            children: (0, u.jsx)(r.E, {
                              button: { color: 'secondary', variant: 'outline' },
                              id: 'btn-check-2-outlined',
                              autoComplete: 'off',
                              label: 'Checked',
                              defaultChecked: !0,
                            }),
                          }),
                          (0, u.jsxs)('div', {
                            children: [
                              (0, u.jsx)(r.E, {
                                button: { color: 'success', variant: 'outline' },
                                type: 'radio',
                                name: 'options-outlined',
                                id: 'success-outlined',
                                autoComplete: 'off',
                                label: 'Radio',
                                defaultChecked: !0,
                              }),
                              (0, u.jsx)(r.E, {
                                button: { color: 'danger', variant: 'outline' },
                                type: 'radio',
                                name: 'options-outlined',
                                id: 'danger-outlined',
                                autoComplete: 'off',
                                label: 'Radio',
                              }),
                            ],
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
    13609: (e, a, l) => {
      l.d(a, { x: () => r })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = l(37169),
        r = (0, i.forwardRef)(function (e, a) {
          var l,
            o = e.children,
            t = e.className,
            n = e.color,
            r = e.textColor,
            d = (0, s._T)(e, ['children', 'className', 'color', 'textColor'])
          return i.createElement(
            'div',
            (0, s.pi)(
              {
                className: (0, c.Z)(
                  'card',
                  ((l = {}), (l['bg-'.concat(n)] = n), (l['text-'.concat(r)] = r), l),
                  t,
                ),
              },
              d,
              { ref: a },
            ),
            o,
          )
        })
      ;(r.propTypes = {
        children: t().node,
        className: t().string,
        color: n.$1,
        textColor: t().string,
      }),
        (r.displayName = 'CCard')
    },
    45813: (e, a, l) => {
      l.d(a, { s: () => n })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = (0, i.forwardRef)(function (e, a) {
          var l = e.children,
            o = e.className,
            t = (0, s._T)(e, ['children', 'className'])
          return i.createElement(
            'div',
            (0, s.pi)({ className: (0, c.Z)('card-body', o) }, t, { ref: a }),
            l,
          )
        })
      ;(n.propTypes = { children: t().node, className: t().string }), (n.displayName = 'CCardBody')
    },
    42177: (e, a, l) => {
      l.d(a, { b: () => n })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = (0, i.forwardRef)(function (e, a) {
          var l = e.children,
            o = e.component,
            t = void 0 === o ? 'div' : o,
            n = e.className,
            r = (0, s._T)(e, ['children', 'component', 'className'])
          return i.createElement(
            t,
            (0, s.pi)({ className: (0, c.Z)('card-header', n) }, r, { ref: a }),
            l,
          )
        })
      ;(n.propTypes = { children: t().node, className: t().string, component: t().elementType }),
        (n.displayName = 'CCardHeader')
    },
    45088: (e, a, l) => {
      l.d(a, { E: () => h })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = l(59054),
        r = l(35424),
        d = l(63173),
        h = (0, i.forwardRef)(function (e, a) {
          var l = e.className,
            o = e.button,
            t = e.feedback,
            h = e.feedbackInvalid,
            b = e.feedbackValid,
            m = e.floatingLabel,
            f = e.tooltipFeedback,
            x = e.hitArea,
            p = e.id,
            u = e.indeterminate,
            j = e.inline,
            k = e.invalid,
            y = e.label,
            v = e.reverse,
            g = e.type,
            C = void 0 === g ? 'checkbox' : g,
            N = e.valid,
            E = (0, s._T)(e, [
              'className',
              'button',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingLabel',
              'tooltipFeedback',
              'hitArea',
              'id',
              'indeterminate',
              'inline',
              'invalid',
              'label',
              'reverse',
              'type',
              'valid',
            ]),
            R = (0, i.useRef)(null),
            w = (0, d.A7)(a, R)
          ;(0, i.useEffect)(
            function () {
              R.current && u && (R.current.indeterminate = u)
            },
            [u, R.current],
          )
          var T = function () {
              return i.createElement(
                'input',
                (0, s.pi)(
                  {
                    type: C,
                    className: (0, c.Z)(o ? 'btn-check' : 'form-check-input', {
                      'is-invalid': k,
                      'is-valid': N,
                      'me-2': x,
                    }),
                    id: p,
                  },
                  E,
                  { ref: w },
                ),
              )
            },
            D = function () {
              return i.createElement(n.X, {
                describedby: E['aria-describedby'],
                feedback: t,
                feedbackInvalid: h,
                feedbackValid: b,
                floatingLabel: m,
                invalid: k,
                tooltipFeedback: f,
                valid: N,
              })
            },
            O = function () {
              var e
              return i.createElement(
                r.L,
                (0, s.pi)(
                  {
                    customClassName: (0, c.Z)(
                      o
                        ? (0, c.Z)(
                            'btn',
                            o.variant
                              ? 'btn-'.concat(o.variant, '-').concat(o.color)
                              : 'btn-'.concat(o.color),
                            ((e = {}), (e['btn-'.concat(o.size)] = o.size), e),
                            ''.concat(o.shape),
                          )
                        : 'form-check-label',
                    ),
                  },
                  p && { htmlFor: p },
                ),
                y,
              )
            }
          return i.createElement(function () {
            return o
              ? i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(T, null),
                  y && i.createElement(O, null),
                  i.createElement(D, null),
                )
              : y
                ? x
                  ? i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(T, null),
                      i.createElement(
                        r.L,
                        (0, s.pi)(
                          { customClassName: (0, c.Z)('form-check-label stretched-link', l) },
                          p && { htmlFor: p },
                        ),
                        y,
                      ),
                      i.createElement(D, null),
                    )
                  : i.createElement(
                      'div',
                      {
                        className: (0, c.Z)(
                          'form-check',
                          {
                            'form-check-inline': j,
                            'form-check-reverse': v,
                            'is-invalid': k,
                            'is-valid': N,
                          },
                          l,
                        ),
                      },
                      i.createElement(T, null),
                      i.createElement(O, null),
                      i.createElement(D, null),
                    )
                : i.createElement(T, null)
          }, null)
        })
      ;(h.propTypes = (0, s.pi)(
        {
          button: t().object,
          className: t().string,
          hitArea: t().oneOf(['full']),
          id: t().string,
          indeterminate: t().bool,
          inline: t().bool,
          label: t().oneOfType([t().string, t().node]),
          reverse: t().bool,
          type: t().oneOf(['checkbox', 'radio']),
        },
        n.X.propTypes,
      )),
        (h.displayName = 'CFormCheck')
    },
    59054: (e, a, l) => {
      l.d(a, { X: () => n })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(10560),
        n = function (e) {
          var a = e.describedby,
            l = e.feedback,
            o = e.feedbackInvalid,
            t = e.feedbackValid,
            n = e.invalid,
            r = e.tooltipFeedback,
            d = e.valid
          return i.createElement(
            i.Fragment,
            null,
            l &&
              (d || n) &&
              i.createElement(
                c.C,
                (0, s.pi)({}, n && { id: a }, { invalid: n, tooltip: r, valid: d }),
                l,
              ),
            o && i.createElement(c.C, { id: a, invalid: !0, tooltip: r }, o),
            t && i.createElement(c.C, { valid: !0, tooltip: r }, t),
          )
        }
      ;(n.propTypes = {
        describedby: t().string,
        feedback: t().oneOfType([t().node, t().string]),
        feedbackValid: t().oneOfType([t().node, t().string]),
        feedbackInvalid: t().oneOfType([t().node, t().string]),
        invalid: t().bool,
        tooltipFeedback: t().bool,
        valid: t().bool,
      }),
        (n.displayName = 'CFormControlValidation')
    },
    10560: (e, a, l) => {
      l.d(a, { C: () => n })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = (0, i.forwardRef)(function (e, a) {
          var l,
            o = e.children,
            t = e.className,
            n = e.component,
            r = void 0 === n ? 'div' : n,
            d = e.invalid,
            h = e.tooltip,
            b = e.valid,
            m = (0, s._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return i.createElement(
            r,
            (0, s.pi)(
              {
                className: (0, c.Z)(
                  ((l = {}),
                  (l['invalid-'.concat(h ? 'tooltip' : 'feedback')] = d),
                  (l['valid-'.concat(h ? 'tooltip' : 'feedback')] = b),
                  l),
                  t,
                ),
              },
              m,
              { ref: a },
            ),
            o,
          )
        })
      ;(n.propTypes = {
        children: t().node,
        className: t().string,
        component: t().elementType,
        invalid: t().bool,
        tooltip: t().bool,
        valid: t().bool,
      }),
        (n.displayName = 'CFormFeedback')
    },
    35424: (e, a, l) => {
      l.d(a, { L: () => n })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = (0, i.forwardRef)(function (e, a) {
          var l = e.children,
            o = e.className,
            t = e.customClassName,
            n = (0, s._T)(e, ['children', 'className', 'customClassName'])
          return i.createElement(
            'label',
            (0, s.pi)(
              { className: null !== t && void 0 !== t ? t : (0, c.Z)('form-label', o) },
              n,
              { ref: a },
            ),
            l,
          )
        })
      ;(n.propTypes = { children: t().node, className: t().string, customClassName: t().string }),
        (n.displayName = 'CFormLabel')
    },
    5640: (e, a, l) => {
      l.d(a, { b: () => r })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        r = (0, i.forwardRef)(function (e, a) {
          var l = e.children,
            o = e.className,
            t = (0, s._T)(e, ['children', 'className']),
            r = []
          return (
            n.forEach(function (e) {
              var a = t[e]
              delete t[e]
              var l = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof a && 'string' !== typeof a) ||
                r.push('col'.concat(l, '-').concat(a)),
                'boolean' === typeof a && r.push('col'.concat(l)),
                a &&
                  'object' === typeof a &&
                  (('number' !== typeof a.span && 'string' !== typeof a.span) ||
                    r.push('col'.concat(l, '-').concat(a.span)),
                  'boolean' === typeof a.span && r.push('col'.concat(l)),
                  ('number' !== typeof a.order && 'string' !== typeof a.order) ||
                    r.push('order'.concat(l, '-').concat(a.order)),
                  'number' === typeof a.offset && r.push('offset'.concat(l, '-').concat(a.offset)))
            }),
            i.createElement(
              'div',
              (0, s.pi)({ className: (0, c.Z)(r.length > 0 ? r : 'col', o) }, t, { ref: a }),
              l,
            )
          )
        }),
        d = t().oneOfType([t().bool, t().number, t().string, t().oneOf(['auto'])]),
        h = t().oneOfType([
          d,
          t().shape({
            span: d,
            offset: t().oneOfType([t().number, t().string]),
            order: t().oneOfType([t().oneOf(['first', 'last']), t().number, t().string]),
          }),
        ])
      ;(r.propTypes = {
        children: t().node,
        className: t().string,
        xs: h,
        sm: h,
        md: h,
        lg: h,
        xl: h,
        xxl: h,
      }),
        (r.displayName = 'CCol')
    },
    48917: (e, a, l) => {
      l.d(a, { r: () => r })
      var s = l(50949),
        i = l(28381),
        o = l(34860),
        t = l.n(o),
        c = l(47577),
        n = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        r = (0, i.forwardRef)(function (e, a) {
          var l = e.children,
            o = e.className,
            t = (0, s._T)(e, ['children', 'className']),
            r = []
          return (
            n.forEach(function (e) {
              var a = t[e]
              delete t[e]
              var l = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof a &&
                (a.cols && r.push('row-cols'.concat(l, '-').concat(a.cols)),
                'number' === typeof a.gutter && r.push('g'.concat(l, '-').concat(a.gutter)),
                'number' === typeof a.gutterX && r.push('gx'.concat(l, '-').concat(a.gutterX)),
                'number' === typeof a.gutterY && r.push('gy'.concat(l, '-').concat(a.gutterY)))
            }),
            i.createElement('div', { className: (0, c.Z)('row', r, o), ref: a }, l)
          )
        }),
        d = t().shape({
          cols: t().oneOfType([t().oneOf(['auto']), t().number, t().string]),
          gutter: t().oneOfType([t().string, t().number]),
          gutterX: t().oneOfType([t().string, t().number]),
          gutterY: t().oneOfType([t().string, t().number]),
        })
      ;(r.propTypes = {
        children: t().node,
        className: t().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (r.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=2892.5e2bf659.chunk.js.map
