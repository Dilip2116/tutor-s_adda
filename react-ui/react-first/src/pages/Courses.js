import React from "react";
import Gallery from "./gallery";
import  { useEffect, useMemo, useState } from "react";
import Item from "./Item";


function Courses() {

    // Default Value
  var defaultSports = [
    { name: "Table Tennis", category: "Indoor" },
    { name: "Football", category: "Outdoor" },
    { name: "Swimming", category: "Aquatics" },
    { name: "Chess", category: "Indoor" },
    { name: "BaseBall", category: "Outdoor" }
  ];
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }





    return (
       <div class="main-layout inner_page">
         
     <hr/>
        <h1>ALL Courses</h1>
     <hr/>

     <Gallery/>
      <h2>OPERATING SYSTEM</h2>
      <h2>Data Structure</h2>
      <h2>DBMS</h2>
      <h2>DotNet</h2>
      <h2>C++</h2>
      <h2>C</h2>
      <h2>Python</h2>

      <div className="filter-container1">
        <div>Filter by Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
        </div>
      </div>
      <div className="sport-list1">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
       </div>
    )
  }
  
  export default Courses;