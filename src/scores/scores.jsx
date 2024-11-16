import React from 'react';
import './scores.css';

export function Scores(props) {
  const userName = props.userName;
  const [scores, setScores] = React.useState([]);

  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');


  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });

    setQuote('Show me the code');
    setQuoteAuthor('Linus Torvalds');
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  
  
  return (
    <main>
    <div className="scoresPG">

      <div className="username-container">
        Player
        <span className='player-name'>{userName}</span>
      </div>

      <h2> Scores </h2>

      <div className="scores-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody id='scores'>{scoreRows}</tbody>
        </table>
      </div>

      <div className='quote-box'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
      </div>
    
    </div>
    </main>
  );
}
