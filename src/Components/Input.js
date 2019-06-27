import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    onChange = event => this.props.handleChange(this.props.name, event.target.value)
    render() {
        const {value, placeholder, name} = this.props
        return (
            <div className="form">
                <form>
                    <input 
                        name={name}
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        onChange={this.onChange} 
                    />
                    <p>prueba push</p>
                </form>
                
                
            </div>
        )
    }
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func
}

export default Input;
