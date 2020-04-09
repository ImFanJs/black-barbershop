import React, { useState } from 'react';
import { FaUser, FaPencilAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Back from '../layout/back';

const ClientDetails = ({ updateUser }) => {
  let history = useHistory();
  const user = history.location.state;
  const [appointments, setAppointments] = useState(user.points);

  const saveChanges = () => {
    updateUser({ ...user, points: appointments });
    history.push('/clients');
  };

  return (
    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
      <Back />
      <FaUser size={100} />
      <div className='d-flex flex-column align-items-start'>
        <p className='mt-3'>
          {/* TO-DO => Update name in user */}
          {user.name} <FaPencilAlt size={24} className='pl-2 text-primary' />
        </p>
        <p>Citas: {appointments}</p>
      </div>
      <div>
        <button
          className='btn btn-primary mr-1'
          onClick={() => setAppointments(appointments + 1)}
        >
          Agregar Cita
        </button>
        <button
          className='btn btn-danger ml-1'
          onClick={() => setAppointments(appointments - 1)}
        >
          Eliminar Cita
        </button>
      </div>
      <button
        className='btn btn-block btn-danger mt-3'
        onClick={() => setAppointments(0)}
      >
        Resetear Citas
      </button>
      <button
        className='btn btn-block btn-info mt-3'
        onClick={() => saveChanges()}
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default ClientDetails;
