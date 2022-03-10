import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Modal, CartDisplay, Button } from './../../shared';
import UserUpdateForm from '../userUpdateForm';
import { getUsers, saveUser } from '../../actions/userAction';
import { fieldsArray } from '../../mockJson/fieldJson';
import { deepCopy } from '../../utils/helpers';

let formFields = deepCopy(fieldsArray);

const UsersList = () => {
  const [isModal, setModal] = useState(false);

  const userData = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const onSaveClick = useCallback((formData) => {
    const index = userData.findIndex(ele => ele['id'] === formData['id']);
    const data = [...userData];
    data[index]['name'] = formData['name']
    data[index]['email'] = formData['email']
    data[index]['address']['city'] = formData['city']
    data[index]['phone'] = formData['phone']
    data[index]['website'] = formData['website']
    data[index]['company']['name'] = formData['company']

    setModal(false);
    dispatch(saveUser(data));
  }, [userData, dispatch])

  const openModal = useCallback((val, data) => {
    if (val) {
      formFields.forEach(ele => {
        if (ele['field'] === 'city') {
          ele['value'] = data['address']['city'];
        } else if (ele['field'] === 'company') {
          ele['value'] = data['company']['name'];
        } else {
          ele['value'] = data[ele['field']]
        }
      })
    }
    setModal(val);
  }, [])

  return (
    <>
      <div className="row">
        {userData && userData.map((ele, index) => {
          return <CartDisplay
            key={ele['id']}>
            <div className="margin-mb-10 cust-height">
              <strong>{ele['name']}</strong>
              <div>{ele['email']}</div>
              <div>{ele['address']['city']}</div>
              <div>{ele['phone']}</div>
              <div>{ele['website']}</div>
              <div>{ele['company']['name']}</div>
            </div>

            <Button onClick={() => openModal(true, ele)} classList='btn-primary margin-ry-10' >Edit</Button>
          </CartDisplay>
        })}
      </div>
      {isModal && <Modal isOpen={isModal}
        closeModal={() => openModal(false, {})}
        btnName="Save"
        header="Edit user"
      >
        <UserUpdateForm onSave={onSaveClick}
          initialValues={formFields} />
      </Modal>}
    </>
  )
}

export default UsersList;