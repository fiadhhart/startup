import React from 'react';
import './gameplay.css';

export function Gameplay() {
  return (
    <main>
      <div className="status-container">
        <p> (Player Name) </p>
        <div id="timeSpent">(0 seconds)</div>
        <div className="notification">
          <label for="notification">Notifications:</label>
          <li className="update">(update)</li>
        </div>
      </div>

      <h2> Play! </h2>
      
      <div className="path-container">
        <div className="endpoints-container">
          <h3>Start</h3>
          <h3>Target</h3>
        </div>
        <div className="input-container">
            <button className="milestone-button" id="milestone1" data-color="purple"></button>
            <button className="path-button" id="path1" onclick=""></button>
            <button className="path-button" id="path2" onclick=""></button>
            <button className="milestone-button" id="milestone2" data-color="blue"></button>
            <button className="path-button" id="path3" onclick=""></button>
            <button className="path-button" id="path4" onclick=""></button>
            <button className="path-button" id="path5" onclick=""></button>
            <button className="milestone-button" id="milestone3" data-color="green"></button>
            <button className="path-button" id="path6" onclick=""></button>
            <button className="path-button" id="path7" onclick=""></button>
            <button className="path-button" id="path8" onclick=""></button>
            <button className="path-button" id="path9" onclick=""></button>
            <button className="milestone-button" id="milestone4" data-color="brown"></button>
        </div>
      </div>

      <div className="palette-container">
          <button className="color-button" id="color1" data-color="red" onclick=""></button>
          <button className="color-button" id="color2" data-color="blue" onclick=""></button>
          <button className="color-button" id="color3" data-color="green" onclick=""></button>
          <button className="color-button" id="color4" data-color="yellow" onclick=""></button>
          <button className="color-button" id="color5" data-color="purple" onclick=""></button>
          <button className="color-button" id="color6" data-color="orange" onclick=""></button>
          <button className="color-button" id="color7" data-color="pink" onclick=""></button>
          <button className="color-button" id="color8" data-color="cyan" onclick=""></button>
          <button className="color-button" id="color9" data-color="black" onclick=""></button>
      </div>
      
    </main>
  );
}