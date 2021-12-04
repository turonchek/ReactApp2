import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CategoryItem extends Component {
    render(){
        let {id,name}=this.props;
        return <div>
            <ul>
                <li key={id}>
                    <h3>{name}</h3>
                </li>
            </ul>
        </div>
    }
} 

CategoryItem.propTypes ={
    category:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired
    }))
}

CategoryItem.defaultProps = {
    category: [],
}