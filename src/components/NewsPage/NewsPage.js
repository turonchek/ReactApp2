import React, {Component} from 'react';
import {NewsFilters} from '../NewsFilters/NewsFilters';
import { NewsList } from '../NewsList/NewsList';

export class NewsPage extends Component {
    constructor(props){
            super(props);
            this.state={
                checked:{
                    isPhoto:false,
                    isLink:false,
                    isSpecial:false,
                },
            }
        }
    handleSelect = (value) =>{
        console.log(value)
        this.setState({
            checked: {
                ...this.state.checked,
                [value]: !this.state.checked[value]
            }
        })
        console.log(value,this.state.checked[value])
    }
    render() {
        const checked=this.state.checked;
        let {isPhoto, isLink, isSpecial} = checked;
        const {data}=this.props;
        const dataFilter = data.filter(el=>{
            if(isPhoto && !el.photo) return false;
            if(isSpecial && !el.isSpecial) return false;
            if(isLink && !el.link) return false;
            return true;
        })
        return <div>
            <NewsFilters checked={checked} isChecked={this.handleSelect}/>
            <NewsList items={dataFilter}/>
        </div>;
    }
}


