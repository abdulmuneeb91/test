import React from 'react';
import profileImage from './img/profile-image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        My react app
      </h1>
      <h2>
        Author: Abdul Muneeb
      </h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
