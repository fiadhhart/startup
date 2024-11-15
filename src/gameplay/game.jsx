import React, { useEffect, useState } from 'react';
import './game.css';

export function Game({ userName }) {
  const baseColors = [
    "red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "black",
    "brown", "gray", "violet", "indigo", "lime", "magenta", "teal", "maroon", "navy", 
    "olive", "aqua", "fuchsia", "silver", "gold", "chocolate", "salmon", "coral",
    "beige", "turquoise", "crimson", "lavender", "plum", "orchid", 
    "seashell", "snow", "sienna", "tan", "khaki", "ivory", "wheat"
];

  const [selectedColor, setSelectedColor] = useState(null);
  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    const getRandomColor = () => baseColors[Math.floor(Math.random() * baseColors.length)];

    const colorButtons = [...Array(9)].map(() => getRandomColor());
    const milestonePrep = [...Array(13)].map(() => getRandomColor());

    setRandomColors({ colorButtons, milestoneButtons: milestonePrep });
  }, []);

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
    console.log(`Selected color: ${color}`);
  };

  const handlePathButtonClick = (button) => {
    if (selectedColor) {
      button.style.backgroundColor = selectedColor;
      console.log(`Painted color: ${selectedColor}`);
    }
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
        <div className="input-container">
            {[...Array(13)].map((_, i) => (
              <button
                key={i}
                className={i % 3 === 0 ? "milestone-button" : "path-button"}
                onClick={(e) => i % 3 !== 0 && handlePathButtonClick(e.target)}
                style={{
                    backgroundColor: i % 3 === 0
                      ? (randomColors.milestoneButtons && randomColors.milestoneButtons[i])
                      : "lightgray"
                  }}
              ></button>
            ))}
        </div>
      </div>

      <div className="palette-container">
          {randomColors.colorButtons ? randomColors.colorButtons.map((color, i) => (
            <button
              key={i}
              className="color-button"
              onClick={() => handleColorButtonClick(color)}
              style={{ backgroundColor: color }}
            ></button>
          )) : null}
        </div>
      
    </div>
    </main>
  );
}