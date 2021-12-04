import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewsFilters.css';

const OPTIONS = [
    { label: 'isPhoto'},
    { label: 'isLink'},
    { label: 'isSpecial'}
];

export class NewsFilters extends Component {
    
    render() {
        let { checked, isChecked} = this.props;
        return <div className="btn-group">
        {OPTIONS.map((option,index) => (
            <button className={checked[option.label] ? "btn-light" : undefined} key={index} onClick={
                ()=>isChecked(option.label)
            }>{option.label}</button>
        ))}
    </div>;
    }
}

NewsFilters.propTypes={
    checked: PropTypes.shape({
        isPhoto:PropTypes.bool,
        isLink:PropTypes.bool,
        isSpecial:PropTypes.bool
    }).isRequired,
    isChecked:PropTypes.func.isRequired 
}