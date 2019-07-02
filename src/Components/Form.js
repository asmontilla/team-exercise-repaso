import React from 'react';
import Input from 'Input';
import Button from 'Buttom';

class Form extends React.Component {
    state={}
    handleChange=(field, value)=>{
        this.setState({[field]: value})
        debugger;
        if(this.props.handleChange){
            this.props.handleChange(field, value);
        }
}
    render() {
        return (
            <div className="form">
                <form> 
                    {this.props.fields.map(field => 
                    <Input 
                        {...field}
                        value={this.state[field.name]} 
                        handleChange={this.handleChange} 
                        placeholder={`ingrese ${field.name}`}    
                    />)}
                    
                    <Button>Guardar</Button>
                </form>
               
                
            </div>
        )
    }
}

export default Form;