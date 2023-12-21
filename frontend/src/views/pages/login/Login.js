import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormFeedback,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('Please enter an valid email').required('Field is required'),
    password: yup.string().required('Field is required'),
  })

  const initialValues = {
    email: '',
    password: '',
  }
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Make an API request to your server for validation
      const response = await axios.post(
        'http://127.0.0.1/evergreen_projects/Github/lastpass/backend/public/api/login',
        values,
      )

      // Check the validation result from the server
      if (response.data.errors) {
        setErrors(response.data.errors)
      } else {
        // Do something with the successful response
        console.log('Form submitted successfully')
      }
    } catch (error) {
      console.error('Error during validation:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                      <CForm noValidate onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-body-secondary">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>@</CInputGroupText>
                          <CFormInput
                            placeholder="Email"
                            autoComplete="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            invalid={touched.email && errors.email ? true : false}
                          />
                          <CFormFeedback invalid>{errors.email}</CFormFeedback>
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            invalid={touched.password && errors.password ? true : false}
                          />
                          <CFormFeedback invalid>{errors.password}</CFormFeedback>
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton type="submit" color="primary" className="px-4">
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
