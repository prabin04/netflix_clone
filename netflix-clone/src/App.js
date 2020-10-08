import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">]
        <h1>Hey Clever Programmer let's build Netflix Clone Front-end Today</h1>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
        <Row title="Trending Now" fetchUrl={requests.fetchActionMovies } />
    </div>
  );
}

export default App;
