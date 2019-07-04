const initialState = {
  products: [],
  loading: false
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_INIT':
      return {loading: true}
    case 'GET_PRODUCTS_SUCCESS':
      return {products: action.products, loading: false}
    default:
      return state
  }
}

export default products