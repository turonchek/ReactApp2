import React, {Component} from 'react';
import NewsItem from '../NewsItem/NewsItem';

// const getFormattedDate = (dateStr) => {
//     const date = new Date(dateStr.replaceAll(` `, ``));
//     return date.toLocaleString();
// };
// const style = {
//     color: 'green'
// };

export class NewsList extends Component {
    render() {
        return <div>
            <ul>
                {this.props.data.map((item, index) =>(
                    <NewsItem {...item}/>
                ))}
            </ul>
        </div>;
    }
}
