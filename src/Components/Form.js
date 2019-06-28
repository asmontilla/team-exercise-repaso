import React from 'react';
import Input from './Input';
import Button from './Button';

/// que hace el field

class Form extends React.Component {
    state = {}
    handleChange = (field, value) => this.setState({ [field]: value })
    render() {
        const { user, password } = this.state
        return (
            <div className="form">
                <form>
                    <Input
                        name='user'
                        value={user}
                        handleChange={this.handleChange}
                        placeholder="ingrese usuario"
                    />
                    <Input
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        placeholder="ingrese password"
                    />
                    <Button
                        name='ingresar'
                        value= "boton1"
                        // style={styles}
                        handleChange={this.handleChange}
                    
                     />
                     

                </form>


            </div>
        )
    }
}

export default Form;