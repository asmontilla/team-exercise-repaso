import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div className="Button">
                    <button type="text" value="validar">{this.props.children}</button>
            </div> 
        )
    }
}

export default Input;