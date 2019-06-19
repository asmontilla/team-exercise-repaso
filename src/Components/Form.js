import React from 'react';
import Input from './Input';
import Button from './Button';

class Form extends React.Component {
    state={}
    handleChange=(field, value)=>this.setState({[field]: value})
    render() {
        const {user, password} = this.state
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
                    <Button></Button>
                </form>
               
                
            </div>
        )
    }
}

export default Form;