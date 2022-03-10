import { GET_USERS, GET_ERROR, UPDATE_USER } from './../constants/constants';
import { getRequest } from '../services/Api';

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
    getRequest(`${process.env.REACT_APP_API}users`).then(response => {
      dispatch(fetchUsersSuccess(response));
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