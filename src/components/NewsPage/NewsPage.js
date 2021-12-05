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
                search:""
            }
        }
    handleSelect = (value) =>{
        // console.log(value)
        this.setState({
            checked: {
                ...this.state.checked,
                [value]: !this.state.checked[value]
            },
        })
        // console.log(value,this.state.checked[value])
    }

    handleChangeSearch =(newSearch)=>{
        this.setState({
            search:newSearch,
        });
    }

    render() {
        const checked=this.state.checked;
        const search=this.state.search;
        let {isPhoto, isLink, isSpecial} = checked;
        // console.log(this.state)
        const {data}=this.props;
        const dataFilter = data.filter(el=>{
            if(isPhoto && !el.photo) return false;
            if(isSpecial && !el.isSpecial) return false;
            if(isLink && !el.link) return false;
            if(el.title.toLowerCase().indexOf(search.toLowerCase())<0 && el.content.toLowerCase().indexOf(search.toLowerCase())<0 && el.author.toLowerCase().indexOf(search.toLowerCase())<0) return false;
            return true;
        })
        return <div>
            <NewsFilters 
            checked={checked} 
            isChecked={this.handleSelect} 
            search={search} 
            onChangeSearch={this.handleChangeSearch}/>
            <NewsList 
            items={dataFilter}/>
        </div>;
    }
}


