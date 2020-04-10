import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/layout/home';
import ClientsForm from './components/clients/clients-form';
import ClientsList from './components/clients/clients-list';
import ClientDetails from './components/clients/client-details';
import BottomBar from './components/layout/bottom-bar';

const App = () => {
  const initialUsers = [
    {
      id: 1,
      name: 'Jesus Castaneda',
      points: 3,
    },
    {
      id: 2,
      name: 'Maunel Olmos',
      points: 5,
    },
    {
      id: 3,
      name: 'Alejandro Robles',
      points: 1,
    },
    {
      id: 4,
      name: 'Diego ruiz',
      points: 5,
    },
    {
      id: 5,
      name: 'Efrain Lopez',
      points: 5,
    },
    {
      id: 6,
      name: 'Jaziel Montes',
      points: 1,
    },
  ];
  const [users, setUsers] = useState(initialUsers);

  const setUsersHandle = (user) => {
    user.id = users.length + 1;
    setUsers(users.concat([user]));
  };

  const updateUser = (editedUser) => {
    const usersFiltered = users.filter((user) => user.id !== editedUser.id);
    setUsers(usersFiltered.concat([editedUser]));
  };

  const deleteUser = ({ id }) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className='App'>
      <div className='App-wrapper'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/clients/new'>
              <ClientsForm
                setUsersHandle={setUsersHandle}
                updateUser={updateUser}
              />
            </Route>
            <Route exact path='/clients'>
              <ClientsList users={users} deleteUser={deleteUser} />
            </Route>
            <Route exact path='/clients/details'>
              <ClientDetails updateUser={updateUser} />
            </Route>
          </Switch>
          <BottomBar />
        </Router>
      </div>
    </div>
  );
};

export default App;
