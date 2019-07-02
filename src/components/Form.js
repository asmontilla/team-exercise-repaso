import React from 'react';
import Input from './Input';
import Button from './Button';


class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <Input/>
                    <Input/>
                    <Button/>
                </form>               
            </div>
        )
    }
}

export default Form;