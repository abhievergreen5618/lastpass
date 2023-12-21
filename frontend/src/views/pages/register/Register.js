import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Field is required'),
    email: yup.string().email('Please enter an valid email').required('Field is required'),
    password: yup.string().required('Field is required'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Field is required'),
  })

  const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const navigate = useNavigate()

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Make an API request to your server for validation
      const response = await axios.post(
        'http://127.0.0.1/evergreen_projects/Github/lastpass/backend/public/api/register',
        values,
      )
      if (response.status == 200) {
        toast.success(response.data.message)

        toast.success(response.data.message, {
          onClose: () => {
            // Code to execute when the toast is closed
            // This could be your navigation logic
            console.log('Toast is closed. Redirecting...')
            navigate('/dashboard')
          },
        })
      }
    } catch (error) {
      console.error('Error during validation:', error)
      if (error.response.status == 422) {
        setErrors(error.response.data.errors)
        toast.error(error.response.data.message)
      } else {
        toast.error('OoPs! Something Went Wrong.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const confirmpasswordinvalid = (touched, errors) => {
    return touched.password_confirmation && errors.password_confirmation ? true : false
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Formik validationSchema={schema} onSubmit={onSubmit} initialValues={initialValues}>
                  {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <CForm noValidate onSubmit={handleSubmit}>
                      <h1>Register</h1>
                      <p className="text-body-secondary">Create your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Full Name"
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          invalid={touched.name && errors.name ? true : false}
                        />
                        <CFormFeedback invalid>{errors.name}</CFormFeedback>
                      </CInputGroup>
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
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          name="password_confirmation"
                          placeholder="Repeat password"
                          autoComplete="new-password"
                          value={values.password_confirmation}
                          onChange={handleChange}
                          invalid={confirmpasswordinvalid(touched, errors)}
                        />
                        <CFormFeedback invalid>{errors.password_confirmation}</CFormFeedback>
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton type="submit" color="success">
                          Create Account
                        </CButton>
                      </div>
                    </CForm>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <ToastContainer />
    </div>
  )
}

export default Register
