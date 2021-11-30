import React, {Component} from 'react';
import {NewsFilters} from '../NewsFilters/NewsFilters';
import { NewsList } from '../NewsList/NewsList';

export class NewsPage extends Component {
    // constructor(props){
    //         super(props);
    //         this.state={
    //             checked:{},
    //         }
    //     }
    render() {
        return <div>
            <NewsFilters data={this.props.data}/>
            <NewsList data={this.props.data}/>
        </div>;
    }
}
