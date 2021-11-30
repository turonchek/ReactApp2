import React, {Component} from 'react';
import './NewsFilters.css';

const options = [
    { label: 'photo'},
    { label: 'link'},
    { label: 'special'}
];

export class NewsFilters extends Component {
    constructor(props){
        super(props);
        this.state={
            checked:{},
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
        let { checked } = this.state;
        // const dataFilter = this.props.data.filter(el=>{
        //     if(checked[label] && !el.label) return false;
        //     return true;
        // })
        return <div className="btn-group">
            {options.map((option,index) => (
                <button className={checked[option.label] ? "btn-light" : undefined} key={index} onClick={
                    ()=>this.handleSelect(option.label)
                }>{option.label}</button>
            ))}
        </div>;
    }
}