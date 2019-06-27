import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    onChange = event => this.props.handleChange(this.props.name, event.target.value)
    render() {
        const {value, placeholder, name, type} = this.props
        return (
            <div className="form">
                <p>{name}</p>
                    <input 
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={this.onChange} 
                    />
            </div>
        )
    }
}

Input.defaultProps = {
    type: "text"
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func
}

export default Input;
