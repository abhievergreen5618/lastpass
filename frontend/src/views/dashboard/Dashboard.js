import React, { useEffect, useState, Suspense } from 'react'
import classNames from 'classnames'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CModalHeader,
  CModalBody,
  CModal,
  CModalTitle,
  CTooltip,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilLockLocked, cilFolder, cilNotes } from '@coreui/icons'
import { toast } from 'react-toastify'

import api from '../../redux-state/api'
import { NotAuthenticatedHandler } from '../../utilities/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutSuccess } from '../../redux-state/authSlice'
import lock from '../../assets/images/lock.jpg'
import PasswordModal from '../items/Password/PasswordModal'
import FolderModal from '../items/Folders/FolderModal'
import NoteModal from '../items/Notes/NotesModal'
import { CSpinner } from '@coreui/react'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [visiblemain, setVisibleMain] = useState(false)
  const [showpasswordForm, setShowPasswordForm] = useState(false)
  const [showfolderform, setShowfolderform] = useState(false)
  const [shownoteform, setShowNoteform] = useState(false)
  const [foldersList, setFoldersList] = useState([])
  const [passwordslist, setPasswordsList] = useState([])

  const handleClick = (current) => {
    if (current == 'folder') {
      setVisibleMain((prevStatus) => !prevStatus)
      setShowfolderform((prevStatus) => !prevStatus)
    } else if (current == 'password') {
      setVisibleMain((prevStatus) => !prevStatus)
      setShowPasswordForm((prevStatus) => !prevStatus)
    } else {
      setVisibleMain((prevStatus) => !prevStatus)
    }
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

  const fetchFolders = async (type) => {
    try {
      const response = await api.post('/getfolderslist')
      if (response.status == 200) {
        await setFoldersList(response.data.folders)
        console.log(response.data.folders)
        // Assuming setShowfolderform and setShowPasswordForm are asynchronous, use await
        if (type === 'password') {
          await setShowPasswordForm(true)
        } else if (type === 'notes') {
          await setShowNoteform(true)
        } else if (type === 'folders') {
          await setShowfolderform(true)
        }
      }
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
          <CButton className="btn btn-primary addbtn" onClick={() => setVisibleMain(!visiblemain)}>
            <CIcon icon={cilPlus}></CIcon>
          </CButton>
        </CTooltip>
      </div>

      {showpasswordForm ? (
        <Suspense fallback={<CSpinner color="primary" />}>
          <PasswordModal
            passwordvisible={showpasswordForm}
            folders={foldersList}
            passwordlist={setPasswordsList}
            handleClick={handleClick}
          />
        </Suspense>
      ) : visiblemain ? (
        <CModal
          alignment="center"
          size="lg"
          visible={visiblemain}
          onClose={() => setVisibleMain(false)}
          aria-labelledby="LiveDemoExampleLabel"
        >
          <CModalHeader onClose={() => setVisibleMain(false)}>
            <CModalTitle id="LiveDemoExampleLabel">Add Item</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CButton
              color="primary"
              onClick={() => {
                fetchFolders('password')
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <CIcon icon={cilLockLocked} size="lg" className="ml-2 text" /> Password
              </div>
            </CButton>
            <CButton
              color="primary"
              className="ms-3"
              onClick={() => {
                fetchFolders('folder')
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <CIcon icon={cilFolder} size="lg" className="ml-2 text" /> Folder
              </div>
            </CButton>
            <CButton
              color="primary"
              className="ms-3"
              onClick={() => {
                fetchFolders('notes')
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <CIcon icon={cilNotes} size="lg" className="ml-2 text" /> Notes
              </div>
            </CButton>
          </CModalBody>
        </CModal>
      ) : setShowfolderform ? (
        <Suspense fallback={<CSpinner color="primary" />}>
          <FolderModal
            passwordvisible={showfolderform}
            folders={foldersList}
            passwordlist={setPasswordsList}
            handleClick={handleClick}
          />
        </Suspense>
      ) : setShowNoteform ? (
        // Fallback or another condition
        <NoteModal
          passwordvisible={shownoteform}
          folders={foldersList}
          passwordlist={setPasswordsList}
          handleClick={handleClick}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default Dashboard
