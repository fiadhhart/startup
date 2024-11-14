import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gameplay } from './gameplay/gameplay';
import { Scores } from './scores/scores';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header className='container-fluid'>
                    <nav className='navbar'>
                        <div className='navbar-brand'>Palette Path</div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='scores'>Scores</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='gameplay'>Gameplay</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
        
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/gameplay' element={<Gameplay />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        
                <footer>
                    <div className='container-fluid'>
                        <span className='text-reset'>Heidi Hart</span>
                        <a className='text-reset' href='https://github.com/fiadhhart/startup'>Github</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}