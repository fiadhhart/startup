import React, { useEffect, useState } from 'react';
import './test.css';

export function Test({ userName }) {
  const baseColors = [
    "#000000", "#444444", "#888888", "bbbbbb", "#ffffff"
    /*"red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "black",
    "brown", "gray", "violet", "indigo", "lime", "magenta", "teal", "maroon", "navy", 
    "olive", "aqua", "fuchsia", "gold", "chocolate", "salmon", "coral",
    "beige", "turquoise", "crimson", "lavender", "plum", "orchid", 
    "seashell", "snow", "sienna", "tan", "khaki", "ivory", "wheat"*/
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const [randomColors, setRandomColors] = useState([]);
  const [sortedColors, setSortedColors] = useState([]);

  const sortColors = (colors) => {
    return [...colors].sort(); // Create a new array and sort it
  };

  useEffect(() => {
    const getRandomColor = () => baseColors[Math.floor(Math.random() * baseColors.length)];

    const paintsPrep = [...Array(9)].map(() => getRandomColor());
    const milestonesPrep = [...Array(13)].map(() => getRandomColor());

    setRandomColors({ paintButtons: paintsPrep, milestoneButtons: milestonesPrep });
    setSortedColors(sortColors(milestonesPrep));
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



  /*check solution*/
  const [successMessage, setSuccessMessage] = useState("");

  const checkSuccess = () => {
    const allButtons = document.querySelectorAll(".milestone-button, .path-button");
    const isSuccess = Array.from(allButtons).every((button, index) => {
        return (
          0
        );
      });

    setSuccessMessage(isSuccess ? "Success!" : "Keep Trying!");
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
                        className={i % 2 === 0 ? "milestone-button" : "path-button"}
                        onClick={(e) => i % 2 !== 0 && handlePathButtonClick(e.target)}
                        style={{
                            backgroundColor: i % 2 === 0
                            ? sortedColors[i]
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

        <button className='checkButton' onClick={checkSuccess}>Check Success</button>
        {successMessage && <p>{successMessage}</p>}
        
    </div>
    </main>
  );
}