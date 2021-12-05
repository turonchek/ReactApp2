import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewsFilters.css';

const OPTIONS = [
    { label: 'isPhoto'},
    { label: 'isLink'},
    { label: 'isSpecial'}
];

export class NewsFilters extends Component {

    handleChangeSearch =(e)=>{
        let {onChangeSearch}=this.props;
        let {currentTarget}=e;
        onChangeSearch(currentTarget.value);
    }
    
    render() {
        let { checked, isChecked, search} = this.props;
        return <div className="btn-group">
        {OPTIONS.map((option,index) => (
            <button className={checked[option.label] ? "btn-light" : undefined} key={index} onClick={
                ()=>isChecked(option.label)
            }>{option.label}</button>
        ))}
        <label>
            <input 
            type="text" 
            value={search} 
            onChange={this.handleChangeSearch}/>
        </label>
    </div>;
    }
}

NewsFilters.propTypes={
    checked: PropTypes.shape({
        isPhoto:PropTypes.bool,
        isLink:PropTypes.bool,
        isSpecial:PropTypes.bool
    }).isRequired,
    isChecked:PropTypes.func.isRequired,
    search:PropTypes.string.isRequired,
    onChangeSearch:PropTypes.func.isRequired
}