import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div className="Button">
                    <button type="text" value="validar">{this.props.children}</button>
            </div> 
        )
    }
}

export default Input;