import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Back = () => {
  let history = useHistory();

  return <FaArrowLeft className='back' onClick={() => history.goBack()} />;
};

export default Back;
