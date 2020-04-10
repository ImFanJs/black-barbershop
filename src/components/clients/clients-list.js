import React from 'react';
import { FaUser, FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const ClientsList = ({ users, deleteUser }) => {
  let history = useHistory();

  const goToDetails = (user) => {
    history.push('/clients/details', user);
  };

  return (
    <div className=' w-100 mt-4'>
      <h3>Lista de Clientes</h3>
      <div className='w-100 d-flex flex-column align-items-start px-4 mt-4'>
        {users.map((user) => (
          <div
            className='w-100 d-flex py-1 my-2 justify-content-between'
            key={user.id}
          >
            <div
              className='d-flex justify-content-center align-items-center'
              onClick={() => goToDetails(user)}
            >
              <FaUser />
              <span className='pl-2'>{user.name}</span>
              <span className='pl-2 text-info'>({user.points})</span>
            </div>
            <FaTimes
              className='text-danger ml-1'
              onClick={() => deleteUser(user)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsList;
