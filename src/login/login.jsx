import React from 'react';
import './login.css';

export function Login() {
  return (
    <main>
      <div className="image-container">
        <img src="cover.png" alt="Background Cover Image" className="background-image"/>
        <h1 className="text-overlay">Palette Path</h1>
      </div>
      
      <div className="form-container">
        <h2> Login to Play: </h2>
        <form method="get" action="scores.html">
          <ul>
            <div>
              <label for="username">Username:</label>
              <input id="username" type="text" placeholder="username" required />
            </div>
            <div>
              <label for="password">Password:</label>
              <input id="password" type="password" placeholder="password" required />
            </div>
            <div className="transition-container">
              <button className="registerButton" type="submit">Register</button>
              <button className="loginButton" type="submit">Login</button>
            </div>
          </ul>
        </form>
      </div>
    </main>
  );
}