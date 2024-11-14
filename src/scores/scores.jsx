import React from 'react';
import './scores.css';

export function Scores() {
  return (
    <main>
      <div className="status-container">
        <p>(Player Name)</p>
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
          <tbody>
            <tr>
              <td>(1)</td>
              <td>(name)</td>
              <td>(score)</td>
              <td>(date)</td>
            </tr>
            <tr>
              <td>(2)</td>
              <td>(name)</td>
              <td>(score)</td>
              <td>(date)</td>
            </tr>
            <tr>
              <td>(3)</td>
              <td>(name)</td>
              <td>(score)</td>
              <td>(date)</td>
            </tr>
            <tr>
              <td>(4)</td>
              <td>(name)</td>
              <td>(score)</td>
              <td>(date)</td>
            </tr>
            <tr>
              <td>(5)</td>
              <td>(name)</td>
              <td>(score)</td>
              <td>(date)</td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  );
}