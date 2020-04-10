import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Back from '../layout/back';

const ClientsForm = ({ setUsersHandle, updateUser }) => {
  let history = useHistory();

  const userToEdit = history.location.state ? history.location.state : '';
  const nameUser = userToEdit ? userToEdit.name : '';

  const [name, setName] = useState(nameUser);

  const saveChanges = () => {
    const user = {};

    if (userToEdit) {
      user.name = name;
      user.id = userToEdit.id;
      user.points = userToEdit.points;
      updateUser(user);
    } else {
      user.name = name;
      user.points = 1;
      setUsersHandle(user);
    }
    history.push('/clients');
  };

  return (
    <div className='col-12 d-flex flex-column'>
      <Back />
      <h3 className='mt-2 mb-5'>{userToEdit ? 'Editar' : 'Agregar'} Cliente</h3>
      <div className='form-group'>
        <label className='form-label'>Nombre Del Cliente</label>
        <input
          className='form-control'
          type='text'
          placeholder='Nombre Completo'
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <button
        className='btn btn-block btn-primary mt-2'
        disabled={!name}
        onClick={() => saveChanges()}
      >
        {userToEdit ? 'Actualizar' : 'Crear'}
      </button>
    </div>
  );
};

export default ClientsForm;
