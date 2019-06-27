import React from 'react';
import '../stylesheet/App.css';
import Product from '../Components/Product'
import Button from '../Components/Button';
class ProductList extends React.Component {
  
  render () {
    return (
      <div>
          <Product>
          </Product>
          <Button onClick={this.props.logout}>Cerrar sesión</Button>
      </div>
    )
  }
}

export default ProductList;
