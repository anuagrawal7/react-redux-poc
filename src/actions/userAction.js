import { GET_USERS, GET_REQUEST, GET_ERROR, UPDATE_USER } from './../constants/constants';
import axios from "axios";

const fetchUsersRequest = () => {
  return {
    type: GET_REQUEST
  }
}

const fetchUsersSuccess = (data) => {
  return {
    type: GET_USERS,
    payload: [...data]
  }
}

const fetchUsersError = (err) => {
  return {
    type: GET_ERROR,
    error: err
  }
}

const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data
  }
}
export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get(`${process.env.REACT_APP_API}users`).then(response => {
      dispatch(fetchUsersSuccess(response.data));
    }).catch(error => {
      const errMsg = error.message;
      dispatch(fetchUsersError(errMsg));
    })
  }

}

export const saveUser = (data) => {
  return (dispatch) => {
    dispatch(updateUser(data));
  }
}