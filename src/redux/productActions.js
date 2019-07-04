export default {
  getProducts: () => {
    return async dispatch => {
      dispatch({
        type: 'GET_PRODUCTS_INIT'
      })
      fetch('http://localhost:3000/products')
      .then(res => {
      return res.json()
      })
      .then(data => {
        dispatch({
          type: 'GET_PRODUCTS_SUCCESS',
          products: data
        })         
      })
    }
  }
};