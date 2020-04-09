import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FaUsers, FaUserPlus, FaHome } from 'react-icons/fa';

const Bar = styled.div`
    position: fixed;
    bottom 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid white;
    background: #282c34;
`;

const BarItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: none !important;
    color: #61dafb !important;
    zoom: 1.2;
  }

  &:active {
    text-decoration: none !important;
  }

  &.selected {
    color: #61dafb !important;
    zoom: 1.2;
  }
`;

const TextLink = styled.small`
  font-size: 12px;
`;

const BottomBar = () => {
  return (
    <Bar>
      <BarItem as={NavLink} activeClassName='selected' exact to='/'>
        <FaHome />
        <TextLink>Inicio</TextLink>
      </BarItem>
      <BarItem as={NavLink} activeClassName='selected' exact to='/clients'>
        <FaUsers />
        <TextLink>Clientes</TextLink>
      </BarItem>
      <BarItem as={NavLink} activeClassName='selected' exact to='/clients/new'>
        <FaUserPlus />
        <TextLink>Nuevo</TextLink>
      </BarItem>
    </Bar>
  );
};

export default BottomBar;
