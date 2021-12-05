import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NewsItem} from '../NewsItem/NewsItem';

export class NewsList extends Component {
    render() {
        let {items}=this.props;
        // console.log(items)
        return <div>
            <ul>
                {items.map((item, index) =>(
                    <NewsItem key={item.id} {...item}/>
                ))}
            </ul>
        </div>;
    }
}

NewsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            title:PropTypes.string,
            content:PropTypes.string,
            isSpecial:PropTypes.bool,
            dateCreated:PropTypes.string,
            categories:PropTypes.arrayOf(PropTypes.shape({
                id:PropTypes.string,
                name:PropTypes.string
            })),
            link:PropTypes.string,
            photo:PropTypes.string,
            author:PropTypes.string
        })
    ),
}

NewsList.defaultProps = {
    items: [],
}