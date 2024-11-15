import React from 'react';

import { Players } from './players';
import { Game } from './game';

import './gameplay.css';

export function Gameplay({ userName }) {
  return (
    <main>
      <div className='gameplayPG'>
        <div className='notification-container'>
          <Players userName={userName} />
        </div>
        <div className='game-container'>
          <Game userName={userName} />
        </div>
      </div>
    </main>
  );
}