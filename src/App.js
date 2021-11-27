import React from 'react';
import './App.css';
import NewsPage from './components/news-page/news-page';
import data from './news.json';

function App() {
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr.replaceAll(` `, ``));
    return date.toLocaleString();
  }
  const style = {
    color: 'green'
  };
  return (
    <div>
      <NewsPage/>
      {/* <ul>
        {data.map((el, index) =>(
          <li key={el.id}>
            {el.link ? (el.isSpecial ? <a href={el.link}>{<h2 style = {style}>{el.title}</h2>}</a> : <a href={el.link}>{<h2>{el.title}</h2>}</a>) : <h2>{el.title}</h2>}
            <p dangerouslySetInnerHTML={{__html: el.content}} />
            {el.dateCreated && <div>{getFormattedDate(el.dateCreated)}</div>}
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
      </ul> */}
    </div>
  );
}

export default App;
