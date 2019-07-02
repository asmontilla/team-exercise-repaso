import React, {Component} from 'react';
import '../stylesheet/App.css';
import Product from './Product';
// import Input from './Input';

class ProductList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      valorDelInput : '',
      products: [],
      loading: true
    }  
  }
  
  onChangeInput= (e)=> this.setState({
      valorDelInput: e.target.value})
  

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

    // const products = this.state.products.map((r) =>
    // <Product productName={r.name} thiskey={r.id}  thiscategory={r.category} />
    // )
    const filteredProducts = this.state.products.filter((r)=>{return r.name.indexOf(this.state.valorDelInput) !== -1})

    return (
      <div className="main">
        <div className="box_main">
          <header className="header">
            <input value={this.state.valorDelInput} onChange={this.onChangeInput} placeholder='_Buscar'></input>
            {/* <Input></Input> */}
          </header>
          <section className="box_products">
            <p className="subtitle">Listado de Productos .-
            <br/>
            -
            </p>
            <div className='display'>
            {filteredProducts.map((r) =>
              <Product productName={r.name} thiskey={r.id}  thiscategory={r.category} />
              )}
            </div>
            
          </section>
        </div>
      </div>
    )
  }
}

export default ProductList;
