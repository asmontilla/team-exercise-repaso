import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Button extends Component {
    onchange = event => this.props.handlechange(this.props.name, event.target.value)
    render() {
        const { name, value,styles } = this.props
        const styles = { background: 'blue', color: 'white' }
        return (
            <div className="Button">
                <form>
                    <button
                        name={name}
                        value={value}
                        style={styles}
                        onchange={this.onChange}
                        >

                        </button>
                </form>


            </div>
        )
    }

    // Button.propTypes = {
    //     name: PropTypes.string,
    //     value: PropTypes.string,
    //     /// esta linea que hace?
    //     handleChange: PropTypes.func
    // }
}

export default Button;

