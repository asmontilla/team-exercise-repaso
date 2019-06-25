import React, {Component} from 'react';
import '../stylesheet/App.css';
import Product from './Product'


class ProductList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      products: [],
      loading: true
    }  
  }
  

  CargaDeProductos () {

    fetch('http://localhost:3000/products')
      .then(res => {
       return res.json()
       })
      .then(data => {
        this.setState({
          products: data,
          loading: false
          })         
          console.log(this.state.products)
        })
  }

  componentDidMount(){
    this.CargaDeProductos();
  }


  render () {

    const products = this.state.products.map((r, i) =>
    <Product productName={r.name} thiskey={i} thisid={r.id} thiscategory={r.category} />
    )

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
            {products}
          </section>
        </div>
      </div>
    )
  }
}

export default ProductList;
