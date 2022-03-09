import { GET_USERS, GET_REQUEST, GET_ERROR, UPDATE_USER } from "../constants/constants"

const initialState = {
  users: [],
  isLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case GET_ERROR:
      return {
        ...state,
        isLoading: false
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