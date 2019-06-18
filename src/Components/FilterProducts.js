import React from 'react';
import Input from 'Input';
import Button from 'Buttom';

class FilterProducts extends React.Component {
    state={value:''}
    handleChange = event => this.state({value: event.target.value})
    render() {
        return (
            <div className="">
                <form>
                    <Input
                    type="text"
                    placeholder="Busca un producto"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                    <Button>Buscar</Button>
                </form>             
            </div>
        )
    }
}

export default FilterProducts;