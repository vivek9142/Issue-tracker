import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

import { addUserAsync, deleteUserAsync } from './userSlice';
import { UserForm } from './UserForm';
import { UserComponent } from './UserComponent';

// Container component - because it is interacting with store
export const UsersComponent = ({heading}) => {
  toastr.options.timeOut = 1000;

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const addUser = (user) => {
    dispatch(addUserAsync(user))
      .then(()=> toastr.success('User added'))
      .catch(error => {
        alert(error);
      });
  }

  const deleteUser = (id) => {
    dispatch(deleteUserAsync(id))
      .then(()=> toastr.success('User deleted'));
  }

  return (
    <div>
      <h1>{heading}</h1>
      <UserForm onAddUser={(user) => addUser(user)} />
      <ul>
        {users.map(user =>
          <UserComponent key={user.id} id={user.id}
            name={user.name} location={user.location}
            onDelete={(id) => deleteUser(id)} />
        )}
      </ul>
    </div>);
}
