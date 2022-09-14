import React from "react";


// React Component to display individual item
const Item = ({ name, category }) => (
  <div className="item-container1">
    <div>
      <span className="item-label1">Name:</span>
      {name}
    </div>
    <div>
      <span className="item-label1">Category:</span>
      {category}
    </div>
  </div>
);

export default Item;