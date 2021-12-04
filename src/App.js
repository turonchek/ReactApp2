import React from 'react';
import './App.css';
import { NewsPage } from './components';
import data from './news.json'

function App() {
  return (
    <div>
      <NewsPage data={data}/>
    </div>
  );
}

export default App;
