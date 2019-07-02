import React from 'react';

function Product(props) {
    return (

          <div key={props.thiskey} className="box_component_product">
             <p>{props.productName}</p>
             <p>{props.thiscategory}</p>
          </div>
    );
  }
  
export default Product;