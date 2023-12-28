'use strict'
;(self.webpackChunk_coreui_coreui_free_react_admin_template =
  self.webpackChunk_coreui_coreui_free_react_admin_template || []).push([
  [7970],
  {
    67970: (e, l, a) => {
      a.r(l), a.d(l, { default: () => j })
      a(28381)
      var s = a(48917),
        r = a(5640),
        i = a(13609),
        n = a(42177),
        o = a(45813),
        t = a(62070),
        c = a(30908),
        d = a(35424),
        m = a(26101),
        h = a(45088),
        p = a(79361),
        u = a(80051),
        x = a(66183),
        b = a(54908),
        f = a(29343)
      const j = () =>
        (0, f.jsxs)(s.r, {
          children: [
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Form grid' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.',
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#form-grid',
                        children: (0, f.jsxs)(s.r, {
                          children: [
                            (0, f.jsx)(r.b, {
                              xs: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'First name',
                                'aria-label': 'First name',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'Last name',
                                'aria-label': 'Last name',
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
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Gutters' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'By adding ',
                          (0, f.jsx)('a', {
                            href: 'https://coreui.io/docs/layout/gutters/',
                            children: 'gutter modifier classes',
                          }),
                          ', you can have control over the gutter width in as well the inline as block direction.',
                        ],
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#gutters',
                        children: (0, f.jsxs)(s.r, {
                          className: 'g-3',
                          children: [
                            (0, f.jsx)(r.b, {
                              xs: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'First name',
                                'aria-label': 'First name',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'Last name',
                                'aria-label': 'Last name',
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, f.jsx)('p', {
                        className: 'text-body-secondary small',
                        children: 'More complex layouts can also be created with the grid system.',
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#gutters',
                        children: (0, f.jsxs)(c.l, {
                          className: 'row g-3',
                          children: [
                            (0, f.jsxs)(r.b, {
                              md: 6,
                              children: [
                                (0, f.jsx)(d.L, { htmlFor: 'inputEmail4', children: 'Email' }),
                                (0, f.jsx)(t.j, { type: 'email', id: 'inputEmail4' }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              md: 6,
                              children: [
                                (0, f.jsx)(d.L, {
                                  htmlFor: 'inputPassword4',
                                  children: 'Password',
                                }),
                                (0, f.jsx)(t.j, { type: 'password', id: 'inputPassword4' }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              xs: 12,
                              children: [
                                (0, f.jsx)(d.L, { htmlFor: 'inputAddress', children: 'Address' }),
                                (0, f.jsx)(t.j, {
                                  id: 'inputAddress',
                                  placeholder: '1234 Main St',
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              xs: 12,
                              children: [
                                (0, f.jsx)(d.L, {
                                  htmlFor: 'inputAddress2',
                                  children: 'Address 2',
                                }),
                                (0, f.jsx)(t.j, {
                                  id: 'inputAddress2',
                                  placeholder: 'Apartment, studio, or floor',
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              md: 6,
                              children: [
                                (0, f.jsx)(d.L, { htmlFor: 'inputCity', children: 'City' }),
                                (0, f.jsx)(t.j, { id: 'inputCity' }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              md: 4,
                              children: [
                                (0, f.jsx)(d.L, { htmlFor: 'inputState', children: 'State' }),
                                (0, f.jsxs)(m.L, {
                                  id: 'inputState',
                                  children: [
                                    (0, f.jsx)('option', { children: 'Choose...' }),
                                    (0, f.jsx)('option', { children: '...' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              md: 2,
                              children: [
                                (0, f.jsx)(d.L, { htmlFor: 'inputZip', children: 'Zip' }),
                                (0, f.jsx)(t.j, { id: 'inputZip' }),
                              ],
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 12,
                              children: (0, f.jsx)(h.E, {
                                type: 'checkbox',
                                id: 'gridCheck',
                                label: 'Check me out',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 12,
                              children: (0, f.jsx)(p.u, {
                                color: 'primary',
                                type: 'submit',
                                children: 'Sign in',
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
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Horizontal form' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Create horizontal forms with the grid by adding the ',
                          (0, f.jsx)('code', { children: '.row' }),
                          ' class to form groups and using the ',
                          (0, f.jsx)('code', { children: '.col-*-*' }),
                          ' classes to specify the width of your labels and controls. Be sure to add ',
                          (0, f.jsx)('code', { children: '.col-form-label' }),
                          ' to your',
                          ' ',
                          (0, f.jsx)('code', { children: '<CFormLabel>' }),
                          "s as well so they're vertically centered with their associated form controls.",
                        ],
                      }),
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          "At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the ",
                          (0, f.jsx)('code', { children: 'padding-top' }),
                          ' on our stacked radio inputs label to better align the text baseline.',
                        ],
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#horizontal-form',
                        children: (0, f.jsxs)(c.l, {
                          children: [
                            (0, f.jsxs)(s.r, {
                              className: 'mb-3',
                              children: [
                                (0, f.jsx)(d.L, {
                                  htmlFor: 'inputEmail3',
                                  className: 'col-sm-2 col-form-label',
                                  children: 'Email',
                                }),
                                (0, f.jsx)(r.b, {
                                  sm: 10,
                                  children: (0, f.jsx)(t.j, { type: 'email', id: 'inputEmail3' }),
                                }),
                              ],
                            }),
                            (0, f.jsxs)(s.r, {
                              className: 'mb-3',
                              children: [
                                (0, f.jsx)(d.L, {
                                  htmlFor: 'inputPassword3',
                                  className: 'col-sm-2 col-form-label',
                                  children: 'Password',
                                }),
                                (0, f.jsx)(r.b, {
                                  sm: 10,
                                  children: (0, f.jsx)(t.j, {
                                    type: 'password',
                                    id: 'inputPassword3',
                                  }),
                                }),
                              ],
                            }),
                            (0, f.jsxs)('fieldset', {
                              className: 'row mb-3',
                              children: [
                                (0, f.jsx)('legend', {
                                  className: 'col-form-label col-sm-2 pt-0',
                                  children: 'Radios',
                                }),
                                (0, f.jsxs)(r.b, {
                                  sm: 10,
                                  children: [
                                    (0, f.jsx)(h.E, {
                                      type: 'radio',
                                      name: 'gridRadios',
                                      id: 'gridRadios1',
                                      value: 'option1',
                                      label: 'First radio',
                                      defaultChecked: !0,
                                    }),
                                    (0, f.jsx)(h.E, {
                                      type: 'radio',
                                      name: 'gridRadios',
                                      id: 'gridRadios2',
                                      value: 'option2',
                                      label: 'Second radio',
                                    }),
                                    (0, f.jsx)(h.E, {
                                      type: 'radio',
                                      name: 'gridRadios',
                                      id: 'gridRadios3',
                                      value: 'option3',
                                      label: 'Third disabled radio',
                                      disabled: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsx)(s.r, {
                              className: 'mb-3',
                              children: (0, f.jsx)('div', {
                                className: 'col-sm-10 offset-sm-2',
                                children: (0, f.jsx)(h.E, {
                                  type: 'checkbox',
                                  id: 'gridCheck1',
                                  label: 'Example checkbox',
                                }),
                              }),
                            }),
                            (0, f.jsx)(p.u, {
                              color: 'primary',
                              type: 'submit',
                              children: 'Sign in',
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
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Horizontal form label sizing' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Be sure to use ',
                          (0, f.jsx)('code', { children: '.col-form-label-sm' }),
                          ' or ',
                          (0, f.jsx)('code', { children: '.col-form-label-lg' }),
                          ' to your ',
                          (0, f.jsx)('code', { children: '<CFormLabel>' }),
                          's or ',
                          (0, f.jsx)('code', { children: '<legend>' }),
                          's to correctly follow the size of ',
                          (0, f.jsx)('code', { children: '.form-control-lg' }),
                          ' and ',
                          (0, f.jsx)('code', { children: '.form-control-sm' }),
                          '.',
                        ],
                      }),
                      (0, f.jsxs)(b.q3, {
                        href: 'forms/layout#horizontal-form-label-sizing',
                        children: [
                          (0, f.jsxs)(s.r, {
                            className: 'mb-3',
                            children: [
                              (0, f.jsx)(d.L, {
                                htmlFor: 'colFormLabelSm',
                                className: 'col-sm-2 col-form-label col-form-label-sm',
                                children: 'Email',
                              }),
                              (0, f.jsx)(r.b, {
                                sm: 10,
                                children: (0, f.jsx)(t.j, {
                                  type: 'email',
                                  className: 'form-control form-control-sm',
                                  id: 'colFormLabelSm',
                                  placeholder: 'col-form-label-sm',
                                }),
                              }),
                            ],
                          }),
                          (0, f.jsxs)(s.r, {
                            className: 'mb-3',
                            children: [
                              (0, f.jsx)(d.L, {
                                htmlFor: 'colFormLabel',
                                className: 'col-sm-2 col-form-label',
                                children: 'Email',
                              }),
                              (0, f.jsx)(r.b, {
                                sm: 10,
                                children: (0, f.jsx)(t.j, {
                                  type: 'email',
                                  id: 'colFormLabel',
                                  placeholder: 'col-form-label',
                                }),
                              }),
                            ],
                          }),
                          (0, f.jsxs)(s.r, {
                            children: [
                              (0, f.jsx)(d.L, {
                                htmlFor: 'colFormLabelLg',
                                className: 'col-sm-2 col-form-label col-form-label-lg',
                                children: 'Email',
                              }),
                              (0, f.jsx)(r.b, {
                                sm: 10,
                                children: (0, f.jsx)(t.j, {
                                  type: 'email',
                                  className: 'form-control form-control-lg',
                                  id: 'colFormLabelLg',
                                  placeholder: 'col-form-label-lg',
                                }),
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
            (0, f.jsx)(r.b, {
              xs: 12,
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Column sizing' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'As shown in the previous examples, our grid system allows you to place any number of',
                          ' ',
                          (0, f.jsx)('code', { children: '<CCol>' }),
                          's within a ',
                          (0, f.jsx)('code', { children: '<CRow>' }),
                          ". They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining ",
                          (0, f.jsx)('code', { children: '<CCol>' }),
                          's equally split the rest, with specific column classes like',
                          ' ',
                          (0, f.jsx)('code', { children: '<CCol sm="7">' }),
                          '.',
                        ],
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#column-sizing',
                        children: (0, f.jsxs)(s.r, {
                          className: 'g-3',
                          children: [
                            (0, f.jsx)(r.b, {
                              sm: 7,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'City',
                                'aria-label': 'City',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              sm: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'State',
                                'aria-label': 'State',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              sm: !0,
                              children: (0, f.jsx)(t.j, {
                                placeholder: 'Zip',
                                'aria-label': 'Zip',
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
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Auto-sizing' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'The example below uses a flexbox utility to vertically center the contents and changes',
                          ' ',
                          (0, f.jsx)('code', { children: '<CCol>' }),
                          ' to ',
                          (0, f.jsx)('code', { children: '<CCol xs="auto">' }),
                          ' so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.',
                        ],
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#auto-sizing',
                        children: (0, f.jsxs)(c.l, {
                          className: 'row gy-2 gx-3 align-items-center',
                          children: [
                            (0, f.jsxs)(r.b, {
                              xs: 'auto',
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'autoSizingInput',
                                  children: 'Name',
                                }),
                                (0, f.jsx)(t.j, { id: 'autoSizingInput', placeholder: 'Jane Doe' }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              xs: 'auto',
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'autoSizingInputGroup',
                                  children: 'Username',
                                }),
                                (0, f.jsxs)(u.Y, {
                                  children: [
                                    (0, f.jsx)(x.w, { children: '@' }),
                                    (0, f.jsx)(t.j, {
                                      id: 'autoSizingInputGroup',
                                      placeholder: 'Username',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              xs: 'auto',
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'autoSizingSelect',
                                  children: 'Preference',
                                }),
                                (0, f.jsxs)(m.L, {
                                  id: 'autoSizingSelect',
                                  children: [
                                    (0, f.jsx)('option', { children: 'Choose...' }),
                                    (0, f.jsx)('option', { value: '1', children: 'One' }),
                                    (0, f.jsx)('option', { value: '2', children: 'Two' }),
                                    (0, f.jsx)('option', { value: '3', children: 'Three' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 'auto',
                              children: (0, f.jsx)(h.E, {
                                type: 'checkbox',
                                id: 'autoSizingCheck',
                                label: 'Remember me',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 'auto',
                              children: (0, f.jsx)(p.u, {
                                color: 'primary',
                                type: 'submit',
                                children: 'Submit',
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, f.jsx)('p', {
                        className: 'text-body-secondary small',
                        children:
                          'You can then remix that once again with size-specific column classes.',
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#auto-sizing',
                        children: (0, f.jsxs)(c.l, {
                          className: 'row gx-3 gy-2 align-items-center',
                          children: [
                            (0, f.jsxs)(r.b, {
                              sm: 3,
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'specificSizeInputName',
                                  children: 'Name',
                                }),
                                (0, f.jsx)(t.j, {
                                  id: 'specificSizeInputName',
                                  placeholder: 'Jane Doe',
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              sm: 3,
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'specificSizeInputGroupUsername',
                                  children: 'Username',
                                }),
                                (0, f.jsxs)(u.Y, {
                                  children: [
                                    (0, f.jsx)(x.w, { children: '@' }),
                                    (0, f.jsx)(t.j, {
                                      id: 'specificSizeInputGroupUsername',
                                      placeholder: 'Username',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              sm: 3,
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'specificSizeSelect',
                                  children: 'Preference',
                                }),
                                (0, f.jsxs)(m.L, {
                                  id: 'specificSizeSelect',
                                  children: [
                                    (0, f.jsx)('option', { children: 'Choose...' }),
                                    (0, f.jsx)('option', { value: '1', children: 'One' }),
                                    (0, f.jsx)('option', { value: '2', children: 'Two' }),
                                    (0, f.jsx)('option', { value: '3', children: 'Three' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 'auto',
                              children: (0, f.jsx)(h.E, {
                                type: 'checkbox',
                                id: 'autoSizingCheck2',
                                label: 'Remember me',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 'auto',
                              children: (0, f.jsx)(p.u, {
                                color: 'primary',
                                type: 'submit',
                                children: 'Submit',
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
              children: (0, f.jsxs)(i.x, {
                className: 'mb-4',
                children: [
                  (0, f.jsxs)(n.b, {
                    children: [
                      (0, f.jsx)('strong', { children: 'Layout' }),
                      ' ',
                      (0, f.jsx)('small', { children: 'Inline forms' }),
                    ],
                  }),
                  (0, f.jsxs)(o.s, {
                    children: [
                      (0, f.jsxs)('p', {
                        className: 'text-body-secondary small',
                        children: [
                          'Use the ',
                          (0, f.jsx)('code', { children: '<CCol xs="auto">' }),
                          ' class to create horizontal layouts. By adding',
                          ' ',
                          (0, f.jsx)('a', {
                            href: 'https://coreui.io/docs/layout/gutters/',
                            children: 'gutter modifier classes',
                          }),
                          ', we will have gutters in horizontal and vertical directions. The',
                          ' ',
                          (0, f.jsx)('code', { children: '.align-items-center' }),
                          ' aligns the form elements to the middle, making the',
                          ' ',
                          (0, f.jsx)('code', { children: '<CFormCheck>' }),
                          ' align properly.',
                        ],
                      }),
                      (0, f.jsx)(b.q3, {
                        href: 'forms/layout#inline-forms',
                        children: (0, f.jsxs)(c.l, {
                          className: 'row row-cols-lg-auto g-3 align-items-center',
                          children: [
                            (0, f.jsxs)(r.b, {
                              xs: 12,
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'inlineFormInputGroupUsername',
                                  children: 'Username',
                                }),
                                (0, f.jsxs)(u.Y, {
                                  children: [
                                    (0, f.jsx)(x.w, { children: '@' }),
                                    (0, f.jsx)(t.j, {
                                      id: 'inlineFormInputGroupUsername',
                                      placeholder: 'Username',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsxs)(r.b, {
                              xs: 12,
                              children: [
                                (0, f.jsx)(d.L, {
                                  className: 'visually-hidden',
                                  htmlFor: 'inlineFormSelectPref',
                                  children: 'Preference',
                                }),
                                (0, f.jsxs)(m.L, {
                                  id: 'inlineFormSelectPref',
                                  children: [
                                    (0, f.jsx)('option', { children: 'Choose...' }),
                                    (0, f.jsx)('option', { value: '1', children: 'One' }),
                                    (0, f.jsx)('option', { value: '2', children: 'Two' }),
                                    (0, f.jsx)('option', { value: '3', children: 'Three' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 12,
                              children: (0, f.jsx)(h.E, {
                                type: 'checkbox',
                                id: 'inlineFormCheck',
                                label: 'Remember me',
                              }),
                            }),
                            (0, f.jsx)(r.b, {
                              xs: 12,
                              children: (0, f.jsx)(p.u, {
                                color: 'primary',
                                type: 'submit',
                                children: 'Submit',
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
          ],
        })
    },
    13609: (e, l, a) => {
      a.d(l, { x: () => c })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = a(37169),
        c = (0, r.forwardRef)(function (e, l) {
          var a,
            i = e.children,
            n = e.className,
            t = e.color,
            c = e.textColor,
            d = (0, s._T)(e, ['children', 'className', 'color', 'textColor'])
          return r.createElement(
            'div',
            (0, s.pi)(
              {
                className: (0, o.Z)(
                  'card',
                  ((a = {}), (a['bg-'.concat(t)] = t), (a['text-'.concat(c)] = c), a),
                  n,
                ),
              },
              d,
              { ref: l },
            ),
            i,
          )
        })
      ;(c.propTypes = {
        children: n().node,
        className: n().string,
        color: t.$1,
        textColor: n().string,
      }),
        (c.displayName = 'CCard')
    },
    45813: (e, l, a) => {
      a.d(l, { s: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = (0, s._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, s.pi)({ className: (0, o.Z)('card-body', i) }, n, { ref: l }),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string }), (t.displayName = 'CCardBody')
    },
    42177: (e, l, a) => {
      a.d(l, { b: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.component,
            n = void 0 === i ? 'div' : i,
            t = e.className,
            c = (0, s._T)(e, ['children', 'component', 'className'])
          return r.createElement(
            n,
            (0, s.pi)({ className: (0, o.Z)('card-header', t) }, c, { ref: l }),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (t.displayName = 'CCardHeader')
    },
    30908: (e, l, a) => {
      a.d(l, { l: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = e.validated,
            t = (0, s._T)(e, ['children', 'className', 'validated'])
          return r.createElement(
            'form',
            (0, s.pi)({ className: (0, o.Z)({ 'was-validated': n }, i) || void 0 }, t, { ref: l }),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string, validated: n().bool }),
        (t.displayName = 'CForm')
    },
    45088: (e, l, a) => {
      a.d(l, { E: () => m })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = a(59054),
        c = a(35424),
        d = a(63173),
        m = (0, r.forwardRef)(function (e, l) {
          var a = e.className,
            i = e.button,
            n = e.feedback,
            m = e.feedbackInvalid,
            h = e.feedbackValid,
            p = e.floatingLabel,
            u = e.tooltipFeedback,
            x = e.hitArea,
            b = e.id,
            f = e.indeterminate,
            j = e.inline,
            y = e.invalid,
            g = e.label,
            v = e.reverse,
            N = e.type,
            k = void 0 === N ? 'checkbox' : N,
            C = e.valid,
            F = (0, s._T)(e, [
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
            T = (0, r.useRef)(null),
            E = (0, d.A7)(l, T)
          ;(0, r.useEffect)(
            function () {
              T.current && f && (T.current.indeterminate = f)
            },
            [f, T.current],
          )
          var w = function () {
              return r.createElement(
                'input',
                (0, s.pi)(
                  {
                    type: k,
                    className: (0, o.Z)(i ? 'btn-check' : 'form-check-input', {
                      'is-invalid': y,
                      'is-valid': C,
                      'me-2': x,
                    }),
                    id: b,
                  },
                  F,
                  { ref: E },
                ),
              )
            },
            L = function () {
              return r.createElement(t.X, {
                describedby: F['aria-describedby'],
                feedback: n,
                feedbackInvalid: m,
                feedbackValid: h,
                floatingLabel: p,
                invalid: y,
                tooltipFeedback: u,
                valid: C,
              })
            },
            z = function () {
              var e
              return r.createElement(
                c.L,
                (0, s.pi)(
                  {
                    customClassName: (0, o.Z)(
                      i
                        ? (0, o.Z)(
                            'btn',
                            i.variant
                              ? 'btn-'.concat(i.variant, '-').concat(i.color)
                              : 'btn-'.concat(i.color),
                            ((e = {}), (e['btn-'.concat(i.size)] = i.size), e),
                            ''.concat(i.shape),
                          )
                        : 'form-check-label',
                    ),
                  },
                  b && { htmlFor: b },
                ),
                g,
              )
            }
          return r.createElement(function () {
            return i
              ? r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(w, null),
                  g && r.createElement(z, null),
                  r.createElement(L, null),
                )
              : g
                ? x
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(w, null),
                      r.createElement(
                        c.L,
                        (0, s.pi)(
                          { customClassName: (0, o.Z)('form-check-label stretched-link', a) },
                          b && { htmlFor: b },
                        ),
                        g,
                      ),
                      r.createElement(L, null),
                    )
                  : r.createElement(
                      'div',
                      {
                        className: (0, o.Z)(
                          'form-check',
                          {
                            'form-check-inline': j,
                            'form-check-reverse': v,
                            'is-invalid': y,
                            'is-valid': C,
                          },
                          a,
                        ),
                      },
                      r.createElement(w, null),
                      r.createElement(z, null),
                      r.createElement(L, null),
                    )
                : r.createElement(w, null)
          }, null)
        })
      ;(m.propTypes = (0, s.pi)(
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
        t.X.propTypes,
      )),
        (m.displayName = 'CFormCheck')
    },
    59054: (e, l, a) => {
      a.d(l, { X: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(10560),
        t = function (e) {
          var l = e.describedby,
            a = e.feedback,
            i = e.feedbackInvalid,
            n = e.feedbackValid,
            t = e.invalid,
            c = e.tooltipFeedback,
            d = e.valid
          return r.createElement(
            r.Fragment,
            null,
            a &&
              (d || t) &&
              r.createElement(
                o.C,
                (0, s.pi)({}, t && { id: l }, { invalid: t, tooltip: c, valid: d }),
                a,
              ),
            i && r.createElement(o.C, { id: l, invalid: !0, tooltip: c }, i),
            n && r.createElement(o.C, { valid: !0, tooltip: c }, n),
          )
        }
      ;(t.propTypes = {
        describedby: n().string,
        feedback: n().oneOfType([n().node, n().string]),
        feedbackValid: n().oneOfType([n().node, n().string]),
        feedbackInvalid: n().oneOfType([n().node, n().string]),
        invalid: n().bool,
        tooltipFeedback: n().bool,
        valid: n().bool,
      }),
        (t.displayName = 'CFormControlValidation')
    },
    25117: (e, l, a) => {
      a.d(l, { e: () => h })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(59054),
        t = a(41339),
        c = a(35424),
        d = a(47577),
        m = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = e.component,
            o = void 0 === n ? 'div' : n,
            t = (0, s._T)(e, ['children', 'className', 'component'])
          return r.createElement(
            o,
            (0, s.pi)({ className: (0, d.Z)('form-text', i) }, t, { ref: l }),
            a,
          )
        })
      ;(m.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (m.displayName = 'CFormText')
      var h = function (e) {
        var l = e.children,
          a = e.describedby,
          s = e.feedback,
          i = e.feedbackInvalid,
          n = e.feedbackValid,
          d = e.floatingClassName,
          h = e.floatingLabel,
          p = e.id,
          u = e.invalid,
          x = e.label,
          b = e.text,
          f = e.tooltipFeedback,
          j = e.valid,
          y = function () {
            return r.createElement(o.X, {
              describedby: a,
              feedback: s,
              feedbackInvalid: i,
              feedbackValid: n,
              floatingLabel: h,
              invalid: u,
              tooltipFeedback: f,
              valid: j,
            })
          }
        return h
          ? r.createElement(
              t.j,
              { className: d },
              l,
              r.createElement(c.L, { htmlFor: p }, x || h),
              b && r.createElement(m, { id: a }, b),
              r.createElement(y, null),
            )
          : r.createElement(
              r.Fragment,
              null,
              x && r.createElement(c.L, { htmlFor: p }, x),
              l,
              b && r.createElement(m, { id: a }, b),
              r.createElement(y, null),
            )
      }
      ;(h.propTypes = (0, s.pi)(
        {
          children: n().node,
          floatingClassName: n().string,
          floatingLabel: n().oneOfType([n().node, n().string]),
          label: n().oneOfType([n().node, n().string]),
          text: n().oneOfType([n().node, n().string]),
        },
        o.X.propTypes,
      )),
        (h.displayName = 'CFormControlWrapper')
    },
    10560: (e, l, a) => {
      a.d(l, { C: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a,
            i = e.children,
            n = e.className,
            t = e.component,
            c = void 0 === t ? 'div' : t,
            d = e.invalid,
            m = e.tooltip,
            h = e.valid,
            p = (0, s._T)(e, ['children', 'className', 'component', 'invalid', 'tooltip', 'valid'])
          return r.createElement(
            c,
            (0, s.pi)(
              {
                className: (0, o.Z)(
                  ((a = {}),
                  (a['invalid-'.concat(m ? 'tooltip' : 'feedback')] = d),
                  (a['valid-'.concat(m ? 'tooltip' : 'feedback')] = h),
                  a),
                  n,
                ),
              },
              p,
              { ref: l },
            ),
            i,
          )
        })
      ;(t.propTypes = {
        children: n().node,
        className: n().string,
        component: n().elementType,
        invalid: n().bool,
        tooltip: n().bool,
        valid: n().bool,
      }),
        (t.displayName = 'CFormFeedback')
    },
    41339: (e, l, a) => {
      a.d(l, { j: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = (0, s._T)(e, ['children', 'className'])
          return r.createElement(
            'div',
            (0, s.pi)({ className: (0, o.Z)('form-floating', i) }, n, { ref: l }),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string }),
        (t.displayName = 'CFormFloating')
    },
    62070: (e, l, a) => {
      a.d(l, { j: () => c })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = a(25117),
        c = (0, r.forwardRef)(function (e, l) {
          var a,
            i = e.children,
            n = e.className,
            c = e.delay,
            d = void 0 !== c && c,
            m = e.feedback,
            h = e.feedbackInvalid,
            p = e.feedbackValid,
            u = e.floatingClassName,
            x = e.floatingLabel,
            b = e.id,
            f = e.invalid,
            j = e.label,
            y = e.onChange,
            g = e.plainText,
            v = e.size,
            N = e.text,
            k = e.tooltipFeedback,
            C = e.type,
            F = void 0 === C ? 'text' : C,
            T = e.valid,
            E = (0, s._T)(e, [
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
            w = (0, r.useState)(),
            L = w[0],
            z = w[1]
          return (
            (0, r.useEffect)(
              function () {
                var e = setTimeout(
                  function () {
                    return L && y && y(L)
                  },
                  'number' === typeof d ? d : 500,
                )
                return function () {
                  return clearTimeout(e)
                }
              },
              [L],
            ),
            r.createElement(
              t.e,
              {
                describedby: E['aria-describedby'],
                feedback: m,
                feedbackInvalid: h,
                feedbackValid: p,
                floatingClassName: u,
                floatingLabel: x,
                id: b,
                invalid: f,
                label: j,
                text: N,
                tooltipFeedback: k,
                valid: T,
              },
              r.createElement(
                'input',
                (0, s.pi)(
                  {
                    className: (0, o.Z)(
                      g ? 'form-control-plaintext' : 'form-control',
                      ((a = {}),
                      (a['form-control-'.concat(v)] = v),
                      (a['form-control-color'] = 'color' === F),
                      (a['is-invalid'] = f),
                      (a['is-valid'] = T),
                      a),
                      n,
                    ),
                    id: b,
                    type: F,
                    onChange: function (e) {
                      return d ? z(e) : y && y(e)
                    },
                  },
                  E,
                  { ref: l },
                ),
                i,
              ),
            )
          )
        })
      ;(c.propTypes = (0, s.pi)(
        {
          className: n().string,
          id: n().string,
          delay: n().oneOfType([n().bool, n().number]),
          plainText: n().bool,
          size: n().oneOf(['sm', 'lg']),
          type: n().oneOfType([n().oneOf(['color', 'file', 'text']), n().string]),
        },
        t.e.propTypes,
      )),
        (c.displayName = 'CFormInput')
    },
    35424: (e, l, a) => {
      a.d(l, { L: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = e.customClassName,
            t = (0, s._T)(e, ['children', 'className', 'customClassName'])
          return r.createElement(
            'label',
            (0, s.pi)(
              { className: null !== n && void 0 !== n ? n : (0, o.Z)('form-label', i) },
              t,
              { ref: l },
            ),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string, customClassName: n().string }),
        (t.displayName = 'CFormLabel')
    },
    26101: (e, l, a) => {
      a.d(l, { L: () => c })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = a(25117),
        c = (0, r.forwardRef)(function (e, l) {
          var a,
            i = e.children,
            n = e.className,
            c = e.feedback,
            d = e.feedbackInvalid,
            m = e.feedbackValid,
            h = e.floatingClassName,
            p = e.floatingLabel,
            u = e.htmlSize,
            x = e.id,
            b = e.invalid,
            f = e.label,
            j = e.options,
            y = e.size,
            g = e.text,
            v = e.tooltipFeedback,
            N = e.valid,
            k = (0, s._T)(e, [
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
          return r.createElement(
            t.e,
            {
              describedby: k['aria-describedby'],
              feedback: c,
              feedbackInvalid: d,
              feedbackValid: m,
              floatingClassName: h,
              floatingLabel: p,
              id: x,
              invalid: b,
              label: f,
              text: g,
              tooltipFeedback: v,
              valid: N,
            },
            r.createElement(
              'select',
              (0, s.pi)(
                {
                  id: x,
                  className: (0, o.Z)(
                    'form-select',
                    ((a = {}),
                    (a['form-select-'.concat(y)] = y),
                    (a['is-invalid'] = b),
                    (a['is-valid'] = N),
                    a),
                    n,
                  ),
                  size: u,
                },
                k,
                { ref: l },
              ),
              j
                ? j.map(function (e, l) {
                    return r.createElement(
                      'option',
                      (0, s.pi)(
                        {},
                        'object' === typeof e && e.disabled && { disabled: e.disabled },
                        'object' === typeof e && void 0 !== e.value && { value: e.value },
                        { key: l },
                      ),
                      'string' === typeof e ? e : e.label,
                    )
                  })
                : i,
            ),
          )
        })
      ;(c.propTypes = (0, s.pi)(
        { className: n().string, htmlSize: n().number, options: n().array },
        t.e.propTypes,
      )),
        (c.displayName = 'CFormSelect')
    },
    80051: (e, l, a) => {
      a.d(l, { Y: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a,
            i = e.children,
            n = e.className,
            t = e.size,
            c = (0, s._T)(e, ['children', 'className', 'size'])
          return r.createElement(
            'div',
            (0, s.pi)(
              {
                className: (0, o.Z)(
                  'input-group',
                  ((a = {}), (a['input-group-'.concat(t)] = t), a),
                  n,
                ),
              },
              c,
              { ref: l },
            ),
            i,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string, size: n().oneOf(['sm', 'lg']) }),
        (t.displayName = 'CInputGroup')
    },
    66183: (e, l, a) => {
      a.d(l, { w: () => t })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = e.component,
            t = void 0 === n ? 'span' : n,
            c = (0, s._T)(e, ['children', 'className', 'component'])
          return r.createElement(
            t,
            (0, s.pi)({ className: (0, o.Z)('input-group-text', i) }, c, { ref: l }),
            a,
          )
        })
      ;(t.propTypes = { children: n().node, className: n().string, component: n().elementType }),
        (t.displayName = 'CInputGroupText')
    },
    5640: (e, l, a) => {
      a.d(l, { b: () => c })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        c = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = (0, s._T)(e, ['children', 'className']),
            c = []
          return (
            t.forEach(function (e) {
              var l = n[e]
              delete n[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              ;('number' !== typeof l && 'string' !== typeof l) ||
                c.push('col'.concat(a, '-').concat(l)),
                'boolean' === typeof l && c.push('col'.concat(a)),
                l &&
                  'object' === typeof l &&
                  (('number' !== typeof l.span && 'string' !== typeof l.span) ||
                    c.push('col'.concat(a, '-').concat(l.span)),
                  'boolean' === typeof l.span && c.push('col'.concat(a)),
                  ('number' !== typeof l.order && 'string' !== typeof l.order) ||
                    c.push('order'.concat(a, '-').concat(l.order)),
                  'number' === typeof l.offset && c.push('offset'.concat(a, '-').concat(l.offset)))
            }),
            r.createElement(
              'div',
              (0, s.pi)({ className: (0, o.Z)(c.length > 0 ? c : 'col', i) }, n, { ref: l }),
              a,
            )
          )
        }),
        d = n().oneOfType([n().bool, n().number, n().string, n().oneOf(['auto'])]),
        m = n().oneOfType([
          d,
          n().shape({
            span: d,
            offset: n().oneOfType([n().number, n().string]),
            order: n().oneOfType([n().oneOf(['first', 'last']), n().number, n().string]),
          }),
        ])
      ;(c.propTypes = {
        children: n().node,
        className: n().string,
        xs: m,
        sm: m,
        md: m,
        lg: m,
        xl: m,
        xxl: m,
      }),
        (c.displayName = 'CCol')
    },
    48917: (e, l, a) => {
      a.d(l, { r: () => c })
      var s = a(50949),
        r = a(28381),
        i = a(34860),
        n = a.n(i),
        o = a(47577),
        t = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        c = (0, r.forwardRef)(function (e, l) {
          var a = e.children,
            i = e.className,
            n = (0, s._T)(e, ['children', 'className']),
            c = []
          return (
            t.forEach(function (e) {
              var l = n[e]
              delete n[e]
              var a = 'xs' === e ? '' : '-'.concat(e)
              'object' === typeof l &&
                (l.cols && c.push('row-cols'.concat(a, '-').concat(l.cols)),
                'number' === typeof l.gutter && c.push('g'.concat(a, '-').concat(l.gutter)),
                'number' === typeof l.gutterX && c.push('gx'.concat(a, '-').concat(l.gutterX)),
                'number' === typeof l.gutterY && c.push('gy'.concat(a, '-').concat(l.gutterY)))
            }),
            r.createElement('div', { className: (0, o.Z)('row', c, i), ref: l }, a)
          )
        }),
        d = n().shape({
          cols: n().oneOfType([n().oneOf(['auto']), n().number, n().string]),
          gutter: n().oneOfType([n().string, n().number]),
          gutterX: n().oneOfType([n().string, n().number]),
          gutterY: n().oneOfType([n().string, n().number]),
        })
      ;(c.propTypes = {
        children: n().node,
        className: n().string,
        xs: d,
        sm: d,
        md: d,
        lg: d,
        xl: d,
        xxl: d,
      }),
        (c.displayName = 'CRow')
    },
  },
])
//# sourceMappingURL=7970.e28f24c3.chunk.js.map
