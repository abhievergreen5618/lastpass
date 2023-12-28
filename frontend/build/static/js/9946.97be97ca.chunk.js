'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [9946],
  {
    69946: (e, a, i) => {
      i.r(a), i.d(a, { default: () => k })
      var l = i(28381),
        t = i(30908),
        r = i(5640),
        n = i(35424),
        d = i(62070),
        s = i(10560),
        o = i(80051),
        c = i(66183),
        m = i(26101),
        p = i(45088),
        h = i(79361),
        u = i(48917),
        v = i(13609),
        x = i(42177),
        f = i(45813),
        b = i(59121),
        j = i(54908),
        y = i(29343)
      const g = () => {
          const [e, a] = (0, l.useState)(!1)
          return (0, y.jsxs)(t.l, {
            className: 'row g-3 needs-validation',
            noValidate: !0,
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                a(!0)
            },
            children: [
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustom01', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationCustom01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustom02', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationCustom02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustomUsername', children: 'Username' }),
                  (0, y.jsxs)(o.Y, {
                    className: 'has-validation',
                    children: [
                      (0, y.jsx)(c.w, { id: 'inputGroupPrepend', children: '@' }),
                      (0, y.jsx)(d.j, {
                        type: 'text',
                        id: 'validationCustomUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend',
                        required: !0,
                      }),
                      (0, y.jsx)(s.C, { invalid: !0, children: 'Please choose a username.' }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 6,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustom03', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationCustom03', required: !0 }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustom04', children: 'City' }),
                  (0, y.jsxs)(m.L, {
                    id: 'validationCustom04',
                    children: [
                      (0, y.jsx)('option', { disabled: !0, children: 'Choose...' }),
                      (0, y.jsx)('option', { children: '...' }),
                    ],
                  }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationCustom05', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationCustom05', required: !0 }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid zip.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                xs: 12,
                children: [
                  (0, y.jsx)(p.E, {
                    type: 'checkbox',
                    id: 'invalidCheck',
                    label: 'Agree to terms and conditions',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'You must agree before submitting.' }),
                ],
              }),
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsx)(h.u, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        },
        N = () => {
          const [e, a] = (0, l.useState)(!1)
          return (0, y.jsxs)(t.l, {
            className: 'row g-3 needs-validation',
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                a(!0)
            },
            children: [
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefault01', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationDefault01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefault02', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationDefault02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefaultUsername', children: 'Username' }),
                  (0, y.jsxs)(o.Y, {
                    className: 'has-validation',
                    children: [
                      (0, y.jsx)(c.w, { id: 'inputGroupPrepend02', children: '@' }),
                      (0, y.jsx)(d.j, {
                        type: 'text',
                        id: 'validationDefaultUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend02',
                        required: !0,
                      }),
                      (0, y.jsx)(s.C, { invalid: !0, children: 'Please choose a username.' }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 6,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefault03', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationDefault03', required: !0 }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefault04', children: 'City' }),
                  (0, y.jsxs)(m.L, {
                    id: 'validationDefault04',
                    children: [
                      (0, y.jsx)('option', { disabled: !0, children: 'Choose...' }),
                      (0, y.jsx)('option', { children: '...' }),
                    ],
                  }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationDefault05', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationDefault05', required: !0 }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'Please provide a valid zip.' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                xs: 12,
                children: [
                  (0, y.jsx)(p.E, {
                    type: 'checkbox',
                    id: 'invalidCheck',
                    label: 'Agree to terms and conditions',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { invalid: !0, children: 'You must agree before submitting.' }),
                ],
              }),
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsx)(h.u, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        },
        C = () => {
          const [e, a] = (0, l.useState)(!1)
          return (0, y.jsxs)(t.l, {
            className: 'row g-3 needs-validation',
            noValidate: !0,
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                a(!0)
            },
            children: [
              (0, y.jsxs)(r.b, {
                md: 4,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltip01', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationTooltip01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { tooltip: !0, valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltip02', children: 'Email' }),
                  (0, y.jsx)(d.j, {
                    type: 'text',
                    id: 'validationTooltip02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  (0, y.jsx)(s.C, { tooltip: !0, valid: !0, children: 'Looks good!' }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 4,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltipUsername', children: 'Username' }),
                  (0, y.jsxs)(o.Y, {
                    className: 'has-validation',
                    children: [
                      (0, y.jsx)(c.w, { id: 'inputGroupPrepend', children: '@' }),
                      (0, y.jsx)(d.j, {
                        type: 'text',
                        id: 'validationTooltipUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend',
                        required: !0,
                      }),
                      (0, y.jsx)(s.C, {
                        tooltip: !0,
                        invalid: !0,
                        children: 'Please choose a username.',
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 6,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltip03', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationTooltip03', required: !0 }),
                  (0, y.jsx)(s.C, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid city.',
                  }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltip04', children: 'City' }),
                  (0, y.jsxs)(m.L, {
                    id: 'validationTooltip04',
                    required: !0,
                    children: [
                      (0, y.jsx)('option', {
                        disabled: !0,
                        defaultValue: '',
                        children: 'Choose...',
                      }),
                      (0, y.jsx)('option', { children: '...' }),
                    ],
                  }),
                  (0, y.jsx)(s.C, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid city.',
                  }),
                ],
              }),
              (0, y.jsxs)(r.b, {
                md: 3,
                className: 'position-relative',
                children: [
                  (0, y.jsx)(n.L, { htmlFor: 'validationTooltip05', children: 'City' }),
                  (0, y.jsx)(d.j, { type: 'text', id: 'validationTooltip05', required: !0 }),
                  (0, y.jsx)(s.C, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid zip.',
                  }),
                ],
              }),
              (0, y.jsx)(r.b, {
                xs: 12,
                className: 'position-relative',
                children: (0, y.jsx)(h.u, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        },
        k = () =>
          (0, y.jsxs)(u.r, {
            children: [
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsxs)(v.x, {
                  className: 'mb-4',
                  children: [
                    (0, y.jsxs)(x.b, {
                      children: [
                        (0, y.jsx)('strong', { children: 'Validation' }),
                        ' ',
                        (0, y.jsx)('small', { children: 'Custom styles' }),
                      ],
                    }),
                    (0, y.jsxs)(f.s, {
                      children: [
                        (0, y.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            "For custom CoreUI form validation messages, you'll need to add the",
                            ' ',
                            (0, y.jsx)('code', { children: 'noValidate' }),
                            ' boolean property to your ',
                            (0, y.jsx)('code', { children: '<CForm>' }),
                            ". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the ",
                            (0, y.jsx)('code', { children: ':invalid' }),
                            ' and ',
                            (0, y.jsx)('code', { children: ':valid' }),
                            ' styles applied to your form controls.',
                          ],
                        }),
                        (0, y.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.',
                            ' ',
                          ],
                        }),
                        (0, y.jsx)(j.q3, { href: 'forms/validation', children: g() }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsxs)(v.x, {
                  className: 'mb-4',
                  children: [
                    (0, y.jsxs)(x.b, {
                      children: [
                        (0, y.jsx)('strong', { children: 'Validation' }),
                        ' ',
                        (0, y.jsx)('small', { children: 'Browser defaults' }),
                      ],
                    }),
                    (0, y.jsxs)(f.s, {
                      children: [
                        (0, y.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.",
                        }),
                        (0, y.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.',
                        }),
                        (0, y.jsx)(j.q3, {
                          href: 'forms/validation#browser-defaults',
                          children: N(),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsxs)(v.x, {
                  className: 'mb-4',
                  children: [
                    (0, y.jsxs)(x.b, {
                      children: [
                        (0, y.jsx)('strong', { children: 'Validation' }),
                        ' ',
                        (0, y.jsx)('small', { children: 'Server side' }),
                      ],
                    }),
                    (0, y.jsxs)(f.s, {
                      children: [
                        (0, y.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ',
                            (0, y.jsx)('code', { children: 'invalid' }),
                            ' ',
                            'and ',
                            (0, y.jsx)('code', { children: 'valid' }),
                            ' boolean properties.',
                          ],
                        }),
                        (0, y.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using ',
                            (0, y.jsx)('code', { children: 'aria-describedby' }),
                            ' (noting that this attribute allows more than one ',
                            (0, y.jsx)('code', { children: 'id' }),
                            ' to be referenced, in case the field already points to additional form text).',
                          ],
                        }),
                        (0, y.jsx)(j.q3, {
                          href: 'forms/validation#server-side',
                          children: (0, y.jsxs)(t.l, {
                            className: 'row g-3 needs-validation',
                            children: [
                              (0, y.jsxs)(r.b, {
                                md: 4,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServer01',
                                    children: 'Email',
                                  }),
                                  (0, y.jsx)(d.j, {
                                    type: 'text',
                                    id: 'validationServer01',
                                    defaultValue: 'Mark',
                                    valid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                md: 4,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServer02',
                                    children: 'Email',
                                  }),
                                  (0, y.jsx)(d.j, {
                                    type: 'text',
                                    id: 'validationServer02',
                                    defaultValue: 'Otto',
                                    valid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, { valid: !0, children: 'Looks good!' }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                md: 4,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServerUsername',
                                    children: 'Username',
                                  }),
                                  (0, y.jsxs)(o.Y, {
                                    className: 'has-validation',
                                    children: [
                                      (0, y.jsx)(c.w, { id: 'inputGroupPrepend03', children: '@' }),
                                      (0, y.jsx)(d.j, {
                                        type: 'text',
                                        id: 'validationServerUsername',
                                        defaultValue: '',
                                        'aria-describedby': 'inputGroupPrepend03',
                                        invalid: !0,
                                        required: !0,
                                      }),
                                      (0, y.jsx)(s.C, {
                                        invalid: !0,
                                        children: 'Please choose a username.',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                md: 6,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServer03',
                                    children: 'City',
                                  }),
                                  (0, y.jsx)(d.j, {
                                    type: 'text',
                                    id: 'validationServer03',
                                    invalid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Please provide a valid city.',
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                md: 3,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServer04',
                                    children: 'City',
                                  }),
                                  (0, y.jsxs)(m.L, {
                                    id: 'validationServer04',
                                    invalid: !0,
                                    children: [
                                      (0, y.jsx)('option', { disabled: !0, children: 'Choose...' }),
                                      (0, y.jsx)('option', { children: '...' }),
                                    ],
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Please provide a valid city.',
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                md: 3,
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationServer05',
                                    children: 'City',
                                  }),
                                  (0, y.jsx)(d.j, {
                                    type: 'text',
                                    id: 'validationServer05',
                                    invalid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Please provide a valid zip.',
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(r.b, {
                                xs: 12,
                                children: [
                                  (0, y.jsx)(p.E, {
                                    type: 'checkbox',
                                    id: 'invalidCheck',
                                    label: 'Agree to terms and conditions',
                                    invalid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'You must agree before submitting.',
                                  }),
                                ],
                              }),
                              (0, y.jsx)(r.b, {
                                xs: 12,
                                children: (0, y.jsx)(h.u, {
                                  color: 'primary',
                                  type: 'submit',
                                  children: 'Submit form',
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
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsxs)(v.x, {
                  className: 'mb-4',
                  children: [
                    (0, y.jsxs)(x.b, {
                      children: [
                        (0, y.jsx)('strong', { children: 'Validation' }),
                        ' ',
                        (0, y.jsx)('small', { children: 'Supported elements' }),
                      ],
                    }),
                    (0, y.jsxs)(f.s, {
                      children: [
                        (0, y.jsx)('p', {
                          className: 'text-body-secondary small',
                          children:
                            'Validation styles are available for the following form controls and components:',
                        }),
                        (0, y.jsxs)('ul', {
                          children: [
                            (0, y.jsxs)('li', {
                              children: [(0, y.jsx)('code', { children: '<CFormInput>' }), 's'],
                            }),
                            (0, y.jsxs)('li', {
                              children: [(0, y.jsx)('code', { children: '<CFormSelect>' }), 's'],
                            }),
                            (0, y.jsxs)('li', {
                              children: [(0, y.jsx)('code', { children: '<CFormCheck>' }), 's'],
                            }),
                          ],
                        }),
                        (0, y.jsx)(j.q3, {
                          href: 'forms/validation#supported-elements',
                          children: (0, y.jsxs)(t.l, {
                            validated: !0,
                            children: [
                              (0, y.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, y.jsx)(n.L, {
                                    htmlFor: 'validationTextarea',
                                    className: 'form-label',
                                    children: 'Textarea',
                                  }),
                                  (0, y.jsx)(b.P, {
                                    id: 'validationTextarea',
                                    placeholder: 'Required example textarea',
                                    invalid: !0,
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Please enter a message in the textarea.',
                                  }),
                                ],
                              }),
                              (0, y.jsx)(p.E, {
                                className: 'mb-3',
                                id: 'validationFormCheck1',
                                label: 'Check this checkbox',
                                required: !0,
                              }),
                              (0, y.jsx)(s.C, {
                                invalid: !0,
                                children: 'Example invalid feedback text',
                              }),
                              (0, y.jsx)(p.E, {
                                type: 'radio',
                                name: 'radio-stacked',
                                id: 'validationFormCheck2',
                                label: 'Check this checkbox',
                                required: !0,
                              }),
                              (0, y.jsx)(p.E, {
                                className: 'mb-3',
                                type: 'radio',
                                name: 'radio-stacked',
                                id: 'validationFormCheck3',
                                label: 'Or toggle this other radio',
                                required: !0,
                              }),
                              (0, y.jsx)(s.C, {
                                invalid: !0,
                                children: 'More example invalid feedback text',
                              }),
                              (0, y.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, y.jsxs)(m.L, {
                                    required: !0,
                                    'aria-label': 'select example',
                                    children: [
                                      (0, y.jsx)('option', { children: 'Open this select menu' }),
                                      (0, y.jsx)('option', { value: '1', children: 'One' }),
                                      (0, y.jsx)('option', { value: '2', children: 'Two' }),
                                      (0, y.jsx)('option', { value: '3', children: 'Three' }),
                                    ],
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Example invalid select feedback',
                                  }),
                                ],
                              }),
                              (0, y.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, y.jsx)(d.j, {
                                    type: 'file',
                                    id: 'validationTextarea',
                                    'aria-label': 'file example',
                                    required: !0,
                                  }),
                                  (0, y.jsx)(s.C, {
                                    invalid: !0,
                                    children: 'Example invalid form file feedback',
                                  }),
                                ],
                              }),
                              (0, y.jsx)('div', {
                                className: 'mb-3',
                                children: (0, y.jsx)(h.u, {
                                  type: 'submit',
                                  color: 'primary',
                                  disabled: !0,
                                  children: 'Submit form',
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
              (0, y.jsx)(r.b, {
                xs: 12,
                children: (0, y.jsxs)(v.x, {
                  className: 'mb-4',
                  children: [
                    (0, y.jsxs)(x.b, {
                      children: [
                        (0, y.jsx)('strong', { children: 'Validation' }),
                        ' ',
                        (0, y.jsx)('small', { children: 'Tooltips' }),
                      ],
                    }),
                    (0, y.jsxs)(f.s, {
                      children: [
                        (0, y.jsxs)('p', {
                          className: 'text-body-secondary small',
                          children: [
                            'If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with',
                            ' ',
                            (0, y.jsx)('code', { children: 'position: relative' }),
                            ' on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.',
                          ],
                        }),
                        (0, y.jsx)(j.q3, { href: 'forms/validation#tooltips', children: C() }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
    },
    13609: (e, a, i) => {
      i.d(a, { x: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = i(37169),
        o = (0, t.forwardRef)(function (e, a) {
          var i,
            r = e.children,
            n = e.className,
            s = e.color,
            o = e.textColor,
            c = (0, l._T)(e, ['children', 'className', 'color', 'textColor'])
          return t.createElement(
            'div',
            (0, l.pi)(
              {
                className: (0, d.Z)(
                  'card',
                  ((i = {}), (i['bg-'.concat(s)] = s), (i['text-'.concat(o)] = o), i),
                  n,
                ),
              },
              c,
              { ref: a },
            ),
            r,
          )
        })
      ;(o.propTypes = {
        children: n().node,
        className: n().string,
        color: s.$1,
        textColor: n().string,
      }),
        (o.displayName = 'CCard')
    },
    45813: (e, a, i) => {
      i.d(a, { s: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = (0, l._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, l.pi)({ className: (0, d.Z)('card-body', r) }, n, { ref: a }),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string }), (s.displayName = 'CCardBody')
    },
    42177: (e, a, i) => {
      i.d(a, { b: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.component,
            n = void 0 === r ? 'div' : r,
            s = e.className,
            o = (0, l._T)(e, ['children', 'component', 'className'])
          return t.createElement(
            n,
            (0, l.pi)({ className: (0, d.Z)('card-header', s) }, o, { ref: a }),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (s.displayName = 'CCardHeader')
    },
    30908: (e, a, i) => {
      i.d(a, { l: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = e.validated,
            s = (0, l._T)(e, ['children', 'className', 'validated'])
          return t.createElement(
            'form',
            (0, l.pi)({ className: (0, d.Z)({ 'was-validated': n }, r) || void 0 }, s, { ref: a }),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string, validated: n().bool }),
        (s.displayName = 'CForm')
    },
    45088: (e, a, i) => {
      i.d(a, { E: () => m })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = i(59054),
        o = i(35424),
        c = i(63173),
        m = (0, t.forwardRef)(function (e, a) {
          var i = e.className,
            r = e.button,
            n = e.feedback,
            m = e.feedbackInvalid,
            p = e.feedbackValid,
            h = e.floatingLabel,
            u = e.tooltipFeedback,
            v = e.hitArea,
            x = e.id,
            f = e.indeterminate,
            b = e.inline,
            j = e.invalid,
            y = e.label,
            g = e.reverse,
            N = e.type,
            C = void 0 === N ? 'checkbox' : N,
            k = e.valid,
            T = (0, l._T)(e, [
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
            E = (0, t.useRef)(null),
            F = (0, c.A7)(a, E)
          ;(0, t.useEffect)(
            function () {
              E.current && f && (E.current.indeterminate = f)
            },
            [f, E.current],
          )
          var L = function () {
              return t.createElement(
                'input',
                (0, l.pi)(
                  {
                    type: C,
                    className: (0, d.Z)(r ? 'btn-check' : 'form-check-input', {
                      'is-invalid': j,
                      'is-valid': k,
                      'me-2': v,
                    }),
                    id: x,
                  },
                  T,
                  { ref: F },
                ),
              )
            },
            w = function () {
              return t.createElement(s.X, {
                describedby: T['aria-describedby'],
                feedback: n,
                feedbackInvalid: m,
                feedbackValid: p,
                floatingLabel: h,
                invalid: j,
                tooltipFeedback: u,
                valid: k,
              })
            },
            V = function () {
              var e
              return t.createElement(
                o.L,
                (0, l.pi)(
                  {
                    customClassName: (0, d.Z)(
                      r
                        ? (0, d.Z)(
                            'btn',
                            r.variant
                              ? 'btn-'.concat(r.variant, '-').concat(r.color)
                              : 'btn-'.concat(r.color),
                            ((e = {}), (e['btn-'.concat(r.size)] = r.size), e),
                            ''.concat(r.shape),
                          )
                        : 'form-check-label',
                    ),
                  },
                  x && { htmlFor: x },
                ),
                y,
              )
            }
          return t.createElement(function () {
            return r
              ? t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(L, null),
                  y && t.createElement(V, null),
                  t.createElement(w, null),
                )
              : y
                ? v
                  ? t.createElement(
                      t.Fragment,
                      null,
                      t.createElement(L, null),
                      t.createElement(
                        o.L,
                        (0, l.pi)(
                          { customClassName: (0, d.Z)('form-check-label stretched-link', i) },
                          x && { htmlFor: x },
                        ),
                        y,
                      ),
                      t.createElement(w, null),
                    )
                  : t.createElement(
                      'div',
                      {
                        className: (0, d.Z)(
                          'form-check',
                          {
                            'form-check-inline': b,
                            'form-check-reverse': g,
                            'is-invalid': j,
                            'is-valid': k,
                          },
                          i,
                        ),
                      },
                      t.createElement(L, null),
                      t.createElement(V, null),
                      t.createElement(w, null),
                    )
                : t.createElement(L, null)
          }, null)
        })
      ;(m.propTypes = (0, l.pi)(
        {
          button: n().object,
          className: n().string,
          hitArea: n().oneOf(['full']),
          id: n().string,
          indeterminate: n().bool,
          inline: n().bool,
          label: n().oneOfType([n().string, n().node]),
          reverse: n().bool,
          type: n().oneOf(['checkbox', 'radio']),
        },
        s.X.propTypes,
      )),
        (m.displayName = 'CFormCheck')
    },
    59054: (e, a, i) => {
      i.d(a, { X: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(10560),
        s = function (e) {
          var a = e.describedby,
            i = e.feedback,
            r = e.feedbackInvalid,
            n = e.feedbackValid,
            s = e.invalid,
            o = e.tooltipFeedback,
            c = e.valid
          return t.createElement(
            t.Fragment,
            null,
            i &&
              (c || s) &&
              t.createElement(
                d.C,
                (0, l.pi)({}, s && { id: a }, { invalid: s, tooltip: o, valid: c }),
                i,
              ),
            r && t.createElement(d.C, { id: a, invalid: !0, tooltip: o }, r),
            n && t.createElement(d.C, { valid: !0, tooltip: o }, n),
          )
        }
      ;(s.propTypes = {
        describedby: n().string,
        feedback: n().oneOfType([n().node, n().string]),
        feedbackValid: n().oneOfType([n().node, n().string]),
        feedbackInvalid: n().oneOfType([n().node, n().string]),
        invalid: n().bool,
        tooltipFeedback: n().bool,
        valid: n().bool,
      }),
        (s.displayName = 'CFormControlValidation')
    },
    25117: (e, a, i) => {
      i.d(a, { e: () => p })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(59054),
        s = i(41339),
        o = i(35424),
        c = i(47577),
        m = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = e.component,
            d = void 0 === n ? 'div' : n,
            s = (0, l._T)(e, ['children', 'className', 'component'])
          return t.createElement(
            d,
            (0, l.pi)({ className: (0, c.Z)('form-text', r) }, s, { ref: a }),
            i,
          )
        })
      ;(m.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (m.displayName = 'CFormText')
      var p = function (e) {
        var a = e.children,
          i = e.describedby,
          l = e.feedback,
          r = e.feedbackInvalid,
          n = e.feedbackValid,
          c = e.floatingClassName,
          p = e.floatingLabel,
          h = e.id,
          u = e.invalid,
          v = e.label,
          x = e.text,
          f = e.tooltipFeedback,
          b = e.valid,
          j = function () {
            return t.createElement(d.X, {
              describedby: i,
              feedback: l,
              feedbackInvalid: r,
              feedbackValid: n,
              floatingLabel: p,
              invalid: u,
              tooltipFeedback: f,
              valid: b,
            })
          }
        return p
          ? t.createElement(
              s.j,
              { className: c },
              a,
              t.createElement(o.L, { htmlFor: h }, v || p),
              x && t.createElement(m, { id: i }, x),
              t.createElement(j, null),
            )
          : t.createElement(
              t.Fragment,
              null,
              v && t.createElement(o.L, { htmlFor: h }, v),
              a,
              x && t.createElement(m, { id: i }, x),
              t.createElement(j, null),
            )
      }
      ;(p.propTypes = (0, l.pi)(
        {
          children: n().node,
          floatingClassName: n().string,
          floatingLabel: n().oneOfType([n().node, n().string]),
          label: n().oneOfType([n().node, n().string]),
          text: n().oneOfType([n().node, n().string]),
        },
        d.X.propTypes,
      )),
        (p.displayName = 'CFormControlWrapper')
    },
    10560: (e, a, i) => {
      i.d(a, { C: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i,
            r = e.children,
            n = e.className,
            s = e.component,
            o = void 0 === s ? 'div' : s,
            c = e.invalid,
            m = e.tooltip,
            p = e.valid,
            h = (0, l._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return t.createElement(
            o,
            (0, l.pi)(
              {
                className: (0, d.Z)(
                  ((i = {}),
                  (i['invalid-'.concat(m ? 'tooltip' : 'feedback')] = c),
                  (i['valid-'.concat(m ? 'tooltip' : 'feedback')] = p),
                  i),
                  n,
                ),
              },
              h,
              { ref: a },
            ),
            r,
          )
        })
      ;(s.propTypes = {
        children: n().node,
        className: n().string,
        component: n().elementType,
        invalid: n().bool,
        tooltip: n().bool,
        valid: n().bool,
      }),
        (s.displayName = 'CFormFeedback')
    },
    41339: (e, a, i) => {
      i.d(a, { j: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = (0, l._T)(e, ['children', 'className'])
          return t.createElement(
            'div',
            (0, l.pi)({ className: (0, d.Z)('form-floating', r) }, n, { ref: a }),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string }),
        (s.displayName = 'CFormFloating')
    },
    62070: (e, a, i) => {
      i.d(a, { j: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = i(25117),
        o = (0, t.forwardRef)(function (e, a) {
          var i,
            r = e.children,
            n = e.className,
            o = e.delay,
            c = void 0 !== o && o,
            m = e.feedback,
            p = e.feedbackInvalid,
            h = e.feedbackValid,
            u = e.floatingClassName,
            v = e.floatingLabel,
            x = e.id,
            f = e.invalid,
            b = e.label,
            j = e.onChange,
            y = e.plainText,
            g = e.size,
            N = e.text,
            C = e.tooltipFeedback,
            k = e.type,
            T = void 0 === k ? 'text' : k,
            E = e.valid,
            F = (0, l._T)(e, [
              'children',
              'className',
              'delay',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'id',
              'invalid',
              'label',
              'onChange',
              'plainText',
              'size',
              'text',
              'tooltipFeedback',
              'type',
              'valid',
            ]),
            L = (0, t.useState)(),
            w = L[0],
            V = L[1]
          return (
            (0, t.useEffect)(
              function () {
                var e = setTimeout(
                  function () {
                    return w && j && j(w)
                  },
                  'number' === typeof c ? c : 500,
                )
                return function () {
                  return clearTimeout(e)
                }
              },
              [w],
            ),
            t.createElement(
              s.e,
              {
                describedby: F['aria-describedby'],
                feedback: m,
                feedbackInvalid: p,
                feedbackValid: h,
                floatingClassName: u,
                floatingLabel: v,
                id: x,
                invalid: f,
                label: b,
                text: N,
                tooltipFeedback: C,
                valid: E,
              },
              t.createElement(
                'input',
                (0, l.pi)(
                  {
                    className: (0, d.Z)(
                      y ? 'form-control-plaintext' : 'form-control',
                      ((i = {}),
                      (i['form-control-'.concat(g)] = g),
                      (i['form-control-color'] = 'color' === T),
                      (i['is-invalid'] = f),
                      (i['is-valid'] = E),
                      i),
                      n,
                    ),
                    id: x,
                    type: T,
                    onChange: function (e) {
                      return c ? V(e) : j && j(e)
                    },
                  },
                  F,
                  { ref: a },
                ),
                r,
              ),
            )
          )
        })
      ;(o.propTypes = (0, l.pi)(
        {
          className: n().string,
          id: n().string,
          delay: n().oneOfType([n().bool, n().number]),
          plainText: n().bool,
          size: n().oneOf(['sm', 'lg']),
          type: n().oneOfType([n().oneOf(['color', 'file', 'text']), n().string]),
        },
        s.e.propTypes,
      )),
        (o.displayName = 'CFormInput')
    },
    35424: (e, a, i) => {
      i.d(a, { L: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = e.customClassName,
            s = (0, l._T)(e, ['children', 'className', 'customClassName'])
          return t.createElement(
            'label',
            (0, l.pi)(
              { className: null !== n && void 0 !== n ? n : (0, d.Z)('form-label', r) },
              s,
              { ref: a },
            ),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string, customClassName: n().string }),
        (s.displayName = 'CFormLabel')
    },
    26101: (e, a, i) => {
      i.d(a, { L: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = i(25117),
        o = (0, t.forwardRef)(function (e, a) {
          var i,
            r = e.children,
            n = e.className,
            o = e.feedback,
            c = e.feedbackInvalid,
            m = e.feedbackValid,
            p = e.floatingClassName,
            h = e.floatingLabel,
            u = e.htmlSize,
            v = e.id,
            x = e.invalid,
            f = e.label,
            b = e.options,
            j = e.size,
            y = e.text,
            g = e.tooltipFeedback,
            N = e.valid,
            C = (0, l._T)(e, [
              'children',
              'className',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'htmlSize',
              'id',
              'invalid',
              'label',
              'options',
              'size',
              'text',
              'tooltipFeedback',
              'valid',
            ])
          return t.createElement(
            s.e,
            {
              describedby: C['aria-describedby'],
              feedback: o,
              feedbackInvalid: c,
              feedbackValid: m,
              floatingClassName: p,
              floatingLabel: h,
              id: v,
              invalid: x,
              label: f,
              text: y,
              tooltipFeedback: g,
              valid: N,
            },
            t.createElement(
              'select',
              (0, l.pi)(
                {
                  id: v,
                  className: (0, d.Z)(
                    'form-select',
                    ((i = {}),
                    (i['form-select-'.concat(j)] = j),
                    (i['is-invalid'] = x),
                    (i['is-valid'] = N),
                    i),
                    n,
                  ),
                  size: u,
                },
                C,
                { ref: a },
              ),
              b
                ? b.map(function (e, a) {
                    return t.createElement(
                      'option',
                      (0, l.pi)(
                        {},
                        'object' === typeof e && e.disabled && { disabled: e.disabled },
                        'object' === typeof e && void 0 !== e.value && { value: e.value },
                        { key: a },
                      ),
                      'string' === typeof e ? e : e.label,
                    )
                  })
                : r,
            ),
          )
        })
      ;(o.propTypes = (0, l.pi)(
        { className: n().string, htmlSize: n().number, options: n().array },
        s.e.propTypes,
      )),
        (o.displayName = 'CFormSelect')
    },
    59121: (e, a, i) => {
      i.d(a, { P: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = i(25117),
        o = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = e.feedback,
            o = e.feedbackInvalid,
            c = e.feedbackValid,
            m = e.floatingClassName,
            p = e.floatingLabel,
            h = e.id,
            u = e.invalid,
            v = e.label,
            x = e.plainText,
            f = e.text,
            b = e.tooltipFeedback,
            j = e.valid,
            y = (0, l._T)(e, [
              'children',
              'className',
              'feedback',
              'feedbackInvalid',
              'feedbackValid',
              'floatingClassName',
              'floatingLabel',
              'id',
              'invalid',
              'label',
              'plainText',
              'text',
              'tooltipFeedback',
              'valid',
            ])
          return t.createElement(
            s.e,
            {
              describedby: y['aria-describedby'],
              feedback: n,
              feedbackInvalid: o,
              feedbackValid: c,
              floatingClassName: m,
              floatingLabel: p,
              id: h,
              invalid: u,
              label: v,
              text: f,
              tooltipFeedback: b,
              valid: j,
            },
            t.createElement(
              'textarea',
              (0, l.pi)(
                {
                  className: (0, d.Z)(
                    x ? 'form-control-plaintext' : 'form-control',
                    { 'is-invalid': u, 'is-valid': j },
                    r,
                  ),
                  id: h,
                },
                y,
                { ref: a },
              ),
              i,
            ),
          )
        })
      ;(o.propTypes = (0, l.pi)(
        { className: n().string, id: n().string, plainText: n().bool },
        s.e.propTypes,
      )),
        (o.displayName = 'CFormTextarea')
    },
    80051: (e, a, i) => {
      i.d(a, { Y: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i,
            r = e.children,
            n = e.className,
            s = e.size,
            o = (0, l._T)(e, ['children', 'className', 'size'])
          return t.createElement(
            'div',
            (0, l.pi)(
              {
                className: (0, d.Z)(
                  'input-group',
                  ((i = {}), (i['input-group-'.concat(s)] = s), i),
                  n,
                ),
              },
              o,
              { ref: a },
            ),
            r,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string, size: n().oneOf(['sm', 'lg']) }),
        (s.displayName = 'CInputGroup')
    },
    66183: (e, a, i) => {
      i.d(a, { w: () => s })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = e.component,
            s = void 0 === n ? 'span' : n,
            o = (0, l._T)(e, ['children', 'className', 'component'])
          return t.createElement(
            s,
            (0, l.pi)({ className: (0, d.Z)('input-group-text', r) }, o, { ref: a }),
            i,
          )
        })
      ;(s.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (s.displayName = 'CInputGroupText')
    },
    5640: (e, a, i) => {
      i.d(a, { b: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = (0, l._T)(e, ['children', 'className']),
            o = []
          return (
            s.forEach(function (e) {
              var a = n[e]
              delete n[e]
              var i = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof a && 'string' !== typeof a) ||
                o.push('col'.concat(i, '-').concat(a)),
                'boolean' === typeof a && o.push('col'.concat(i)),
                a &&
                  'object' === typeof a &&
                  (('number' !== typeof a.span && 'string' !== typeof a.span) ||
                    o.push('col'.concat(i, '-').concat(a.span)),
                  'boolean' === typeof a.span && o.push('col'.concat(i)),
                  ('number' !== typeof a.order && 'string' !== typeof a.order) ||
                    o.push('order'.concat(i, '-').concat(a.order)),
                  'number' === typeof a.offset && o.push('offset'.concat(i, '-').concat(a.offset)))
            }),
            t.createElement(
              'div',
              (0, l.pi)({ className: (0, d.Z)(o.length > 0 ? o : 'col', r) }, n, { ref: a }),
              i,
            )
          )
        }),
        c = n().oneOfType([n().bool, n().number, n().string, n().oneOf(['auto'])]),
        m = n().oneOfType([
          c,
          n().shape({
            span: c,
            offset: n().oneOfType([n().number, n().string]),
            order: n().oneOfType([n().oneOf(['first', 'last']), n().number, n().string]),
          }),
        ])
      ;(o.propTypes = {
        children: n().node,
        className: n().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (o.displayName = 'CCol')
    },
    48917: (e, a, i) => {
      i.d(a, { r: () => o })
      var l = i(50949),
        t = i(28381),
        r = i(34860),
        n = i.n(r),
        d = i(47577),
        s = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        o = (0, t.forwardRef)(function (e, a) {
          var i = e.children,
            r = e.className,
            n = (0, l._T)(e, ['children', 'className']),
            o = []
          return (
            s.forEach(function (e) {
              var a = n[e]
              delete n[e]
              var i = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof a &&
                (a.cols && o.push('row-cols'.concat(i, '-').concat(a.cols)),
                'number' === typeof a.gutter && o.push('g'.concat(i, '-').concat(a.gutter)),
                'number' === typeof a.gutterX && o.push('gx'.concat(i, '-').concat(a.gutterX)),
                'number' === typeof a.gutterY && o.push('gy'.concat(i, '-').concat(a.gutterY)))
            }),
            t.createElement('div', { className: (0, d.Z)('row', o, r), ref: a }, i)
          )
        }),
        c = n().shape({
          cols: n().oneOfType([n().oneOf(['auto']), n().number, n().string]),
          gutter: n().oneOfType([n().string, n().number]),
          gutterX: n().oneOfType([n().string, n().number]),
          gutterY: n().oneOfType([n().string, n().number]),
        })
      ;(o.propTypes = {
        children: n().node,
        className: n().string,
        xs: c,
        sm: c,
        md: c,
        lg: c,
        xl: c,
        xxl: c,
      }),
        (o.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=9946.97be97ca.chunk.js.map
