import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

const FIELDS_LOGIN = [{name: 'user'}, {name: 'password', type: "password"}]
const FIELDS_SIGNUP = [{name: 'name'}, {name: 'lastname'}]


function App() {
  return (
    <div className="App">
      <Form fields={FIELDS_LOGIN} />
      <Form fields={FIELDS_SIGNUP} />
    </div>
  );
}

export default App;
