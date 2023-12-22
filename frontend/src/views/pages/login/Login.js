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
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../redux-state/authSlice'
import { loginUrl } from 'src/utilities/apiurl'

function Login() {
  const dispatch = useDispatch()
  const schema = yup.object().shape({
    email: yup.string().email('Please enter an valid email').required('Field is required'),
    password: yup.string().required('Field is required'),
  })

  const initialValues = {
    email: '',
    password: '',
  }
  const navigate = useNavigate()

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true)
      // Make an API request to your server for validation
      const response = await axios.post(loginUrl, values)
      if (response.status == 200) {
        dispatch(loginSuccess({ token: response.data.token }))
        toast.success(response.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.hasOwnProperty('response') && error.response.status == 422) {
        setErrors(error.response.data.errors)
        toast.error(error.response.data.message)
      } else if (error.hasOwnProperty('response') && error.response.status == 500) {
        toast.error('Server Error')
      } else {
        toast.error('OoPs! Something Went Wrong.')
      }
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
                    {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
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
                            <CButton
                              type="submit"
                              color="primary"
                              disabled={isSubmitting}
                              className="px-4"
                            >
                              {isSubmitting ? 'Loading...' : 'Login'}
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
