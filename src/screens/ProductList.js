import React, {Component} from 'react';
import { connect } from 'react-redux'
import loginActions from '../redux/loginActions';
import '../stylesheet/App.css';
import Product from '../components/Product';
// import Input from './Input';
import Button from '../components/Button';
import productActions from '../redux/productActions';

class ProductList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      valorDelInput : '',
      // products: [],
      // loading: true
    }  
  }
  
  onChangeInput= (e)=> this.setState({
      valorDelInput: e.target.value})
  

  // CargaDeProductos () {

  //   fetch('http://localhost:3000/products')
  //     .then(res => {
  //      return res.json()
  //      })
  //     .then(data => {
  //       this.setState({
  //         products: data,
  //         loading: false
  //         })         
  //         console.log(this.state.products)
  //       })
  // }

  componentDidMount(){
    // this.CargaDeProductos();
    this.props.getProducts();
  }

  
  render () {
    const filteredProducts = this.props.products.filter((r)=>{return r.name.toLowerCase().indexOf(this.state.valorDelInput.toLocaleLowerCase()) !== -1})

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
            <Button onClick={this.props.logout}>Cerrar sesión</Button>
          </section>
        </div>
      </div>
    )
  }
}

ProductList.defaultProps = {
  products: []
}

const mapStateToProps = state => ({
  products: state.product.products,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(loginActions.logout()),
    getProducts: () => dispatch(productActions.getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
