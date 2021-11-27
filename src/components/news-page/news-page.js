import React, {Component} from 'react';
import NewsFilters from '../news-filters/news-filters';
import NewsList from '../news-list/news-list';

class NewsPage extends Component {
    render() {
        return <div>
            <NewsFilters/>
            <NewsList/>
        </div>;
    }
}

export default NewsPage;