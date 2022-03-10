import { GET_USERS, GET_ERROR, UPDATE_USER } from "../constants/constants"

const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export {
  userReducer,
  updateReducer
}