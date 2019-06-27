import React from 'react';

class Button extends React.Component {
    render() {

        return (
            <div className="Button">
                    <button type="submit" onClick={this.props.onClick}></button>
            </div>
        )
    }
}

export default Button;