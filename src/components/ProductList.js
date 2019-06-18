import React from 'react';
import '../stylesheet/App.css';
import Product from './Product'


class ProductList extends React.Component {
  
  render () {
    return (
      <div className="main">
        <div className="box_main">
          <header className="header">
            <p>_Buscar</p>
          </header>
          <section className="box_products">
            <p className="subtitle">Listado de Productos .-
            <br/>
            -
            </p>
            <Product></Product>
          </section>
        </div>
      </div>
    )
  }
}

export default ProductList;
