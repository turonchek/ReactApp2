import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CategoryItem } from '../CategoryItem/CategoryItem';
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
                    {dateCreated && <div>{this.getFormattedDate(dateCreated)}</div>}
                    {categories && categories.map(category => (
                        <CategoryItem key={category.id} {...category}/>
                    ))}
                    {link && <div><a href={link}>{link}</a></div>}
                    {photo && <img alt="" src={photo}></img>}
                    {author && <div>{author}</div>}
                </li>
        </div>;
    }
}

NewsItem.propTypes = {
    item: PropTypes.shape({
            id:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            content:PropTypes.string.isRequired,
            isSpecial:PropTypes.bool.isRequired,
            dateCreated:PropTypes.string.isRequired,
            categories:PropTypes.arrayOf(PropTypes.shape({
                id:PropTypes.string.isRequired,
                name:PropTypes.string.isRequired
            })).isRequired,
            link:PropTypes.string.isRequired,
            photo:PropTypes.string.isRequired,
            author:PropTypes.string.isRequired
        })
}
