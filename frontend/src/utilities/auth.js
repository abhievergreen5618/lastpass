export const NotAuthenticatedHandler = (errors) => {
  if (
    errors.hasOwnProperty('response') &&
    errors.response.status === 401 &&
    errors.response.data.message === 'Unauthenticated'
  ) {
    return true
  }

  // You can also return some JSX if needed
  return false
}
