import api from '../redux-state/api'

export const NotAuthenticatedHandler = (errors) => {
  if (
    errors.hasOwnProperty('response') &&
    errors.response.status === 401 &&
    errors.response.data.message === 'Unauthenticated.'
  ) {
    return true
  }

  // You can also return some JSX if needed
  return false
}

export const GetUserEmail = async () => {
  try {
    const response = await api.post('/get-user')
    return { emailfound: true, email: response.data.user.email }
  } catch (error) {
    return { emailfound: false, error: error }
  }
}
