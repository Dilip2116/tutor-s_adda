import React from "react";


// React Component to display individual item
const Item = ({ course_name, course_category }) => (
  <div className="item-container1 jumbotron">
    <div>
      <span className="item-label1">Name:</span>
      {course_name}
    </div>
    <div>
      <span className="item-label1">Category:</span>
      {course_category}
    </div>
  </div>
);

export default Item;