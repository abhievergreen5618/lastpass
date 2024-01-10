import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CRow,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModal,
  CModalTitle,
  CFormInput,
  CFormSelect,
  CForm,
  CFormTextarea,
  CFormFeedback,
} from '@coreui/react'
import { cilArrowCircleLeft } from '@coreui/icons'
import { Formik } from 'formik'
import * as yup from 'yup'
import api from '../../../redux-state/api'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NotAuthenticatedHandler } from '../../../utilities/auth'
import { logoutSuccess } from '../../../redux-state/authSlice'

function PasswordModal(props) {
  const [Currentvisible, setCurrentVisible] = useState(props.passwordvisible)
  const [foldersList, setFoldersList] = useState(props.folders)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    url: yup.string().required('Field is required'),
    name: yup.string().required('Field is required'),
    folder: yup.string().required('Field is required'),
    username: yup.string().required('Field is required'),
    password: yup.string().required('Field is required'),
  })

  const initialValues = {
    url: '',
    name: '',
    folder: '',
    username: '',
    password: '',
  }

  useEffect(() => {
    // Your useEffect logic goes here
    console.log('Component mounted!')
    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount!')
    }
  }, [])

  const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      setSubmitting(true)
      // Make an API request to your server for validation
      const response = await api.post('/savepassword', values)
      if (response.status == 200) {
        try {
          const response = await api.post('/getpasswordlist')
          props.passwordlist(response.data.passwords)
          console.log(response.data.passwords)
        } catch (error) {
          const result = await NotAuthenticatedHandler(error)
          if (result) {
            dispatch(logoutSuccess())
            navigate('/login')
          }
          if (error.hasOwnProperty('response') && error.response.status == 500) {
            toast.error('Server Error')
          } else {
            toast.error('OoPs! Something Went Wrong.')
          }
          console.error('API request failed:', error)
        }
        toast.success(response.data.message)
        resetForm()
        props.handleClick('password')
        setCurrentVisible(false)
      }
    } catch (error) {
      if (error.response.status == 422) {
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
    <CModal
      backdrop="static"
      alignment="center"
      size="lg"
      visible={Currentvisible}
      aria-labelledby="ToggleBetweenModalsExample2"
    >
      <Formik validationSchema={schema} onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <CForm className="row g-3" noValidate onSubmit={handleSubmit}>
            <CModalHeader>
              <CModalTitle id="ToggleBetweenModalsExample2">
                <CButton
                  type="button"
                  color="primary"
                  onClick={() => {
                    setCurrentVisible(false)
                    props.handleClick('handleClick')
                  }}
                >
                  <CIcon icon={cilArrowCircleLeft} className="ml-2" /> Back to All Items
                </CButton>
              </CModalTitle>
            </CModalHeader>
            <CModalBody className="m-2">
              <CRow>
                <CCol xs={12} className="my-2">
                  <CFormInput
                    id="url"
                    label="Url"
                    placeholder="www.google.com"
                    name="url"
                    onChange={handleChange}
                    invalid={touched.url && errors.url ? true : false}
                    value={values.url}
                  />

                  <CFormFeedback invalid>{errors.url}</CFormFeedback>
                </CCol>
                <CCol md={6} className="my-2">
                  <CFormInput
                    type="text"
                    id="name"
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    invalid={touched.name && errors.name ? true : false}
                  />
                  <CFormFeedback invalid>{errors.name}</CFormFeedback>
                </CCol>
                <CCol md={6} className="my-2">
                  <CFormSelect
                    type="text"
                    id="inputState"
                    label="Folder"
                    name="folder"
                    onChange={handleChange}
                    invalid={touched.folder && errors.folder ? true : false}
                    value={values.folder}
                  >
                  </CFormSelect>
                  <CFormFeedback invalid>{errors.folder}</CFormFeedback>
                </CCol>
                <CCol md={6} className="my-2">
                  <CFormInput
                    type="text"
                    id="username"
                    label="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    invalid={touched.username && errors.username ? true : false}
                  />
                  <CFormFeedback invalid>{errors.username}</CFormFeedback>
                </CCol>
                <CCol md={6} className="my-2">
                  <CFormInput
                    type="password"
                    id="password"
                    label="Site password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    invalid={touched.password && errors.password ? true : false}
                  />
                  <CFormFeedback invalid>{errors.password}</CFormFeedback>
                </CCol>
                <CCol xs={12} className="my-2">
                  <CFormTextarea
                    id="notes"
                    label="Notes"
                    rows={3}
                    text="Must be 8-20 words long."
                    value={values.notes}
                    onChange={handleChange}
                    name="notes"
                    invalid={touched.notes && errors.notes ? true : false}
                  ></CFormTextarea>
                  <CFormFeedback invalid>{errors.notes}</CFormFeedback>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton type="submit" color="primary">
                Save changes
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </CModal>
  )
}

// Prop types definition
PasswordModal.propTypes = {
  passwordvisible: PropTypes.bool.isRequired, // Assuming 'passwordvisible' is a boolean and is required
  folders: PropTypes.array.isRequired, // Assuming 'folders' is an array and is required
  passwordlist: PropTypes.func.isRequired, // Assuming 'passwordlist' is a function and is required
  handleClick: PropTypes.func.isRequired, // Assuming 'visiblemain' is a function and is required
}

export default PasswordModal
