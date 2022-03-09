import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';

const axios = require('axios');

export default function App() {
  const [imageData, setImageData] = useState([]);
  
  const fetchImage = () => {
    axios.get('/animals/rand/5')
      .then((res) => setImageData(res.data))
      .catch((err) => console.log('Could not fetch images', err.message));
  };

  useEffect(() => fetchImage(), []);

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <Home imageData={imageData} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}