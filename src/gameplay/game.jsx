import React, { useEffect, useState } from 'react';
import './game.css';

export function Game({ userName }) {
  const baseColors = [
    "red", "blue", "green", "yellow", "purple", "orange", "pink", "black",
    "brown", "gray", "violet", "indigo", "lime", "magenta", "teal", "maroon", "navy", 
    "olive", "aqua", "fuchsia", "silver", "gold", "chocolate", "salmon", "coral",
    "beige", "turquoise", "crimson", "lavender", "plum", "orchid", 
    "seashell", "snow", "sienna", "tan", "khaki", "ivory", "wheat"
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const [randomColors, setRandomColors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const getRandomColor = () => baseColors[Math.floor(Math.random() * baseColors.length)];

    
    const finalSolution = [...Array(13)].map(() => getRandomColor()).sort(); // Sorted alphabetically
    console.log("Final solution:", finalSolution);

    const paintsPrep = finalSolution.filter((_, i) => i % 4 !== 0);
    console.log("Paint colors:", paintsPrep);

    setRandomColors({ paintButtons: paintsPrep, milestoneButtons: finalSolution });
  }, []);

  const handlePaintButtonClick = (color) => {
    setSelectedColor(color);
    console.log(`Selected color: ${color}`);
  };

  const handlePathButtonClick = (button) => {
    if (selectedColor) {
      button.style.backgroundColor = selectedColor;
      console.log(`Painted color: ${selectedColor}`);
    }
  };



  const checkSolution = () => {
    const isSuccess = () => {
      const allButtons = document.querySelectorAll('.canvas-container button');
      const currSolution = Array.from(allButtons).map(button => button.style.backgroundColor);

      console.log("Current solution:", currSolution);
      
      return randomColors.milestoneButtons.every((color, index) => color === currSolution[index]);
    };

    setSuccessMessage(isSuccess() ? "Success!" : "Keep Trying! hint: sort alphabetically");
  };


  return (
    <main>
    <div className="gamePG">

      <h2> Play! </h2>
      
      <div className="path-container">
        <div className="endpoints-container">
          <h3>Start</h3>
          <h3>Target</h3>
        </div>
        <div className="canvas-container">
            {[...Array(13)].map((_, i) => (
              <button
                key={i}
                className={i % 4 === 0 ? "milestone-button" : "path-button"}
                onClick={(e) => i % 4 !== 0 && handlePathButtonClick(e.target)}
                style={{
                    backgroundColor: i % 4 === 0
                      ? (randomColors.milestoneButtons && randomColors.milestoneButtons[i])
                      : "lightgray"
                  }}
              ></button>
            ))}
        </div>
      </div>

      <div className="palette-container">
          {randomColors.paintButtons ? randomColors.paintButtons.map((color, i) => (
            <button
              key={i}
              className="paint-button"
              onClick={() => handlePaintButtonClick(color)}
              style={{ backgroundColor: color }}
            ></button>
          )) : null}
      </div>

      <button className='checkButton' onClick={checkSolution}>Check Solution</button>
      {successMessage && <p>{successMessage}</p>}
      
    </div>
    </main>
  );
}