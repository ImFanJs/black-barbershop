import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Back from '../layout/back';

const ClientsForm = ({ setUsersHandle }) => {
  let history = useHistory();
  const [name, setName] = useState('');

  const saveChanges = () => {
    const user = { name: name, points: 1 };
    setUsersHandle(user);
    history.push('/clients');
  };

  return (
    <div className='col-12 d-flex flex-column'>
      <Back />
      <h3 className='mt-2 mb-5'>Agregar Cliente</h3>
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
        Crear
      </button>
    </div>
  );
};

export default ClientsForm;
