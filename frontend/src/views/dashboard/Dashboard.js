import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModal,
  CModalTitle,
  CTooltip,
  CFormInput,
  CFormSelect,
  CForm,
  CFormTextarea,
  CFormFeedback,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilPlus,
  cilArrowCircleLeft,
  cilLockLocked,
  cilFolder,
} from '@coreui/icons'

import api from '../../redux-state/api'
import { NotAuthenticatedHandler } from '../../utilities/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutSuccess } from '../../redux-state/authSlice'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import lock from '../../assets/images/lock.jpg'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [foldersList, setFoldersList] = useState([])
  const [passwordslist, setPasswordsList] = useState([])

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
    const fetchData = async () => {
      try {
        const response = await api.post('/get-user')
        console.log(response.data)
      } catch (error) {
        const result = await NotAuthenticatedHandler(error)
        if (result) {
          dispatch(logoutSuccess())
          navigate('/login')
        }
        console.error('API request failed:', error)
      }
      try {
        const response = await api.post('/getpasswordlist')
        setPasswordsList(response.data.passwords)
        console.log(response.data.passwords)
      } catch (error) {
        const result = await NotAuthenticatedHandler(error)
        if (result) {
          dispatch(logoutSuccess())
          navigate('/login')
        }
        console.error('API request failed:', error)
      }
    }

    fetchData()
  }, [])

  const fetchFolders = async () => {
    try {
      const response = await api.post('/getfolderslist')
      setFoldersList(response.data.folders)
      console.log(response.data.folders)
    } catch (error) {
      const result = await NotAuthenticatedHandler(error)
      if (result) {
        dispatch(logoutSuccess())
        navigate('/login')
      }
      console.error('API request failed:', error)
    }
  }

  const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      setSubmitting(true)
      // Make an API request to your server for validation
      const response = await api.post('/savepassword', values)
      if (response.status == 200) {
        try {
          const response = await api.post('/getpasswordlist')
          setPasswordsList(response.data.passwords)
          console.log(response.data.passwords)
        } catch (error) {
          const result = await NotAuthenticatedHandler(error)
          if (result) {
            dispatch(logoutSuccess())
            navigate('/login')
          }
          console.error('API request failed:', error)
        }
        toast.success(response.data.message)
        resetForm()
        setVisible(false)
        setVisible2(false)
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
    <>
      <CRow>
        {passwordslist.map((password) => (
          <CCol xs={2} sm={3} lg={2} className="my-2" key={password.id}>
            <CCard>
              <CCardImage orientation="top" src={lock} height="200" />
              <CCardBody>
                <CCardTitle>{password.name || password.url}</CCardTitle>
                <CCardText>{password.username}</CCardText>
                <CButton className="btn btn-primary" href={password.url}>
                  Launch
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <div className="addbtnparent">
        <CTooltip content="Add Item." placement="top">
          <CButton className="btn btn-primary addbtn" onClick={() => setVisible(!visible)}>
            <CIcon icon={cilPlus}></CIcon>
          </CButton>
        </CTooltip>
      </div>
      <CModal
        alignment="center"
        size="lg"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Add Item</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CButton
            color="primary"
            onClick={() => {
              fetchFolders()
              setVisible(false)
              setVisible2(true)
            }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <CIcon icon={cilLockLocked} size="lg" className="ml-2 text" /> Password
            </div>
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              fetchFolders()
              setVisible(false)
              setVisible2(true)
            }}
            className="ms-3"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <CIcon icon={cilFolder} size="lg" className="ml-2 text" /> Folder
            </div>
          </CButton>
        </CModalBody>
      </CModal>
      <CModal
        backdrop="static"
        alignment="center"
        size="lg"
        visible={visible2}
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
                      setVisible(true)
                      setVisible2(false)
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
                      id="inputState"
                      label="Folder"
                      name="folder"
                      onChange={handleChange}
                      invalid={touched.folder && errors.folder ? true : false}
                    >
                      <option value="">Choose...</option>
                      {foldersList.map((folder) => (
                        <option key={folder.id} value={folder.id}>
                          {folder.folder_name}
                        </option>
                      ))}
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
    </>
  )
}

export default Dashboard
