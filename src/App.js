import React from 'react';
import './App.css';
import data from './news.json';

function App() {
  const style = {
    color: 'green'
  };
  return (
    <div>
      <ul>
        {data.map((el, index) =>(
          <li key={el.id}>
            {el.isSpecial ? <h2 style = {style}>{el.title}</h2> : <h2>{el.title}</h2>}
            <p dangerouslySetInnerHTML={{__html: el.content}} />
            {el.dateCreated && <span>{el.dateCreated}</span>}
            <ul>
              {el.categories && el.categories.map(category =>{
                return <li key={category.id}>
                        <h3>{category.name}</h3>
                      </li>
              })}
            </ul>
            {el.link && <div><a href={el.link}>{el.link}</a></div>}
            {el.photo && <img alt={el.index} src={el.photo}></img>}
            {el.author && <div>{el.author}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
