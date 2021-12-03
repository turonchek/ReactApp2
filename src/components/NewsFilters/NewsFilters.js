import React, {Component} from 'react';
import './NewsFilters.css';

const OPTIONS = [
    { label: 'isPhoto'},
    { label: 'isLink'},
    { label: 'isSpecial'}
];

export class NewsFilters extends Component {
    
    render() {
        let { checked, isChecked} = this.props;
        // const dataFilter = items.filter(el=>{
        //     if(checked[el.label] && !el.label) return false;
        //     return true;
        // })
        // return <div className="btn-group">
        //     {options.map((option,index) => (
        //         <button className={checked[option.label] ? "btn-light" : undefined} key={index} onClick={
        //             ()=>isChecked(option.label)
        //         }>{option.label}</button>
        //     ))}
        // </div>;
        return <div className="btn-group">
        {OPTIONS.map((option,index) => (
            <button className={checked[option.label] ? "btn-light" : undefined} key={index} onClick={
                ()=>isChecked(option.label)
            }>{option.label}</button>
        ))}
    </div>;
    }
}