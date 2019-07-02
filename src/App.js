import React from 'react';
import Form from './components/Form';
import ProductList from './components/ProductList';
const FIELDS_LOGIN = [{name: 'user'}, {name: 'password', type: "password"}]
const FIELDS_SIGNUP = [{name: 'name'}, {name: 'lastname'}]


function App() {
  return (
    <div className="App">
      <Form fields={FIELDS_LOGIN} />
      <Form fields={FIELDS_SIGNUP} />
      <ProductList/>
    </div>
  )
}

export default App;
