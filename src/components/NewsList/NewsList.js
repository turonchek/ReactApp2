import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {NewsItem} from '../NewsItem/NewsItem';

export class NewsList extends Component {
    render() {
        let {items}=this.props;
        return <div>
            <ul>
                {items.map((item, index) =>(
                    <NewsItem key={item.id} {...item}/>
                ))}
            </ul>
        </div>;
    }
}

// NewsList.PropTypes = {
//     items: PropTypes.array,
// }

NewsList.defaultProps = {
    items: [],
}