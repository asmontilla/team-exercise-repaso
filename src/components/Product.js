import React from 'react';



function ProductList(props) {
    return (
      <div>
          <div key={props.thiskey} className="box_component_product">
             <p>{props.productName}</p>
             <p>{props.thiscategory}</p>
          </div>
      </div>
    );
  }
  
export default ProductList;