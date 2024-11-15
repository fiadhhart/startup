import React, { useEffect, useState } from 'react';
import './game.css';

// Helper: Convert a color name to HSB values
const rgbToHsb = (colorName) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = colorName;
    const [r, g, b] = ctx.fillStyle
      .match(/^#([0-9a-f]{6})$/i)[1]
      .match(/.{2}/g)
      .map(hex => parseInt(hex, 16));
  
    const rPerc = r / 255, gPerc = g / 255, bPerc = b / 255;
    const max = Math.max(rPerc, gPerc, bPerc);
    const min = Math.min(rPerc, gPerc, bPerc);
    const delta = max - min;
  
    // Hue
    let h;
    if (delta === 0) h = 0;
    else if (max === rPerc) h = ((gPerc - bPerc) / delta) % 6;
    else if (max === gPerc) h = (bPerc - rPerc) / delta + 2;
    else h = (rPerc - gPerc) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  
    // Saturation
    const s = max === 0 ? 0 : delta / max;
  
    // Brightness
    const brightness = max;
  
    return { h, s, b: brightness };
  };
  

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

    /*const finalSolution = [...Array(13)].map(() => getRandomColor()).sort(); // Sorted alphabetically*/
    const finalSolution = [...Array(13)].map(() => getRandomColor())
      .sort((a, b) => rgbToHsb(a).h - rgbToHsb(b).h); // Sort by hue
    console.log("Final solution:", finalSolution);

    const paintsPrep = finalSolution.filter((_, i) => i % 4 !== 0);
    for (let i = paintsPrep.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [paintsPrep[i], paintsPrep[j]] = [paintsPrep[j], paintsPrep[i]];
    }
    console.log("Shuffled paint colors:", paintsPrep);

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

    setSuccessMessage(isSuccess() ? "Success!" : "Keep Trying! hint: sort by hue");
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
                      : "whitesmoke"
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