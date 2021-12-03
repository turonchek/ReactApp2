import React, {Component} from 'react';

const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr.replaceAll(` `, ``));
    return date.toLocaleString();
};
const style = {
    color: 'green'
};


export class NewsItem extends Component {
    getFormattedDate = (dateStr) => {
        const date = new Date(dateStr.replaceAll(` `, ``));
        return date.toLocaleString();
    };
    render() {
        const {id,title,content,isSpecial,dateCreated,categories,link,photo,author}=this.props;
        return <div>
            <li key={id}>
                    {link ? (isSpecial ? <a href={link}>{<h2 style = {style}>{title}</h2>}</a> : <a href={link}>{<h2>{title}</h2>}</a>) : <h2>{title}</h2>}
                    <p dangerouslySetInnerHTML={{__html: content}} />
                    {dateCreated && <div>{getFormattedDate(dateCreated)}</div>}
                    <ul>
                    {categories && categories.map(category =>{
                        return <li key={category.id}>
                                <h3>{category.name}</h3>
                            </li>
                    })}
                    </ul>
                    {link && <div><a href={link}>{link}</a></div>}
                    {photo && <img alt="" src={photo}></img>}
                    {author && <div>{author}</div>}
                </li>
        </div>;
    }
}
