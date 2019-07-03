import React, {Component} from 'react';

class Button extends Component {
    render() {

        return (
            <div className="Button">
                    <button type="text" value="validar" onClick={this.props.onClick}>{this.props.children}</button>
            </div> 
        )
    }
}

export default Button;