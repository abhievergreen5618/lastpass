import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilAccountLogout,
  cilSettings,
  cilTask,
  cilUser,
  cilCaretBottom,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/avtar.png'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../../redux-state/authSlice'
import api from '../../redux-state/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { GetUserEmail, NotAuthenticatedHandler } from '../../utilities/auth'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetUserEmail()
        if (result.emailfound) {
          setUserEmail(result.email)
        } else {
          const errorresult = await NotAuthenticatedHandler(result.error)
          if (errorresult) {
            dispatch(logoutSuccess())
            navigate('/login')
          }
        }
      } catch (error) {
        const newresult = await NotAuthenticatedHandler(error)
        if (newresult) {
          dispatch(logoutSuccess())
          navigate('/login')
        }
      }
    }
    fetchData()
  }, [])

  const Logout = async () => {
    try {
      const response = await api.post('/logout')
      if (response.status === 200) {
        toast.success(response.data.message)
        dispatch(logoutSuccess())
        navigate('/login')
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <div className="d-flex align-items-center">
          <CAvatar src={avatar8} size="md" />
          <div className="d-flex flex-column">
            <small className="ms-3">{userEmail}</small>
            <small className="ms-3">Premium Trial User</small>
          </div>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Account Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <FontAwesomeIcon icon={faCircleQuestion} className="me-2" />
          Support Center
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Attend Training
        </CDropdownItem>
        <CDropdownItem href="#" onClick={Logout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
