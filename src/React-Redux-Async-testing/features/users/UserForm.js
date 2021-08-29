import React, {useRef} from 'react';

// Presentation Component will not be dependent on a state mgmt lib
export const UserForm = (props) => {
  const refName = useRef(null);
  const refLocation = useRef(null);

  const onAddClick = () => {
    let user = {};
    user.name = refName.current.value;
    user.location = refLocation.current.value;
    props.onAddUser(user);
  }

  return (
    <div>
      <label htmlFor="name">Enter name: </label>
      <input type="text" id="name" ref={refName} /><br /><br />
      <label htmlFor="location">Enter location: </label>
      <input type="text" id="location" ref={refLocation} /><br /><br />
      <button onClick={() => onAddClick()}>Add User</button>
    </div>
  );
}
