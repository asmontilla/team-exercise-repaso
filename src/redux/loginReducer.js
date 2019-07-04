const initialState = {
  isLogged: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {isLogged: true}
    case 'LOGOUT':
      return {isLogged: false}
    default:
      return state
  }
}

export default login