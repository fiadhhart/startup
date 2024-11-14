import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './auth.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <ul>
      <div className='playerName'>{props.userName}</div>
      <div className='transition-container'>
        <Button className="playButton" variant='primary' onClick={() => navigate('/gameplay')}>
          Play
        </Button>
        <Button className="logoutButton" variant='secondary' onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </ul>
  );
}
