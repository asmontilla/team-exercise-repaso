import React from 'react';



function ProductList(props) {
    return (
      <div>
          <div className="box_component_product">
             <p>{props.productName}</p>
             <p>{props.thisid}</p>
             <p>{props.thiscategory}</p>
          </div>
      </div>
    );
  }
  
export default ProductList;