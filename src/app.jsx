import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top'>
            <div className='navbar-brand'>
              Palette Path
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='scores.html'>
                  Scores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='gameplay.html'>
                  Gameplay
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className='footer'>
          <div className='container-fluid'>
            <span className='text-reset'>Heidi Hart</span>
            <a className='text-reset' href='https://github.com/fiadhhart/startup'>
              Github
            </a>
          </div>
        </footer>
      </div>
    );
  }